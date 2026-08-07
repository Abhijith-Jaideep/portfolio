"use client";

import { useCallback, useEffect, useSyncExternalStore } from "react";

/**
 * 8-bit interaction sounds, synthesised with the Web Audio API rather than
 * shipped as audio files, so this costs no bandwidth and no extra requests.
 *
 * Off by default and never autoplaying. This is a hiring portfolio: a
 * recruiter opening it in an open-plan office to unexpected noise is a worse
 * outcome than them never finding the toggle. Browsers also block audio
 * before a user gesture, so opt-in is the only reliable design anyway.
 */

type Ctor = typeof AudioContext;

let ctx: AudioContext | null = null;

function getContext(): AudioContext | null {
  if (typeof window === "undefined") return null;
  if (!ctx) {
    const Impl: Ctor | undefined =
      window.AudioContext ??
      (window as unknown as { webkitAudioContext?: Ctor }).webkitAudioContext;
    if (!Impl) return null;
    ctx = new Impl();
  }
  return ctx;
}

/** Square-wave blip, the classic NES voice. */
function blip(freq: number, durationMs: number, gainValue = 0.04) {
  const audio = getContext();
  if (!audio) return;
  if (audio.state === "suspended") void audio.resume();

  const osc = audio.createOscillator();
  const gain = audio.createGain();

  osc.type = "square";
  osc.frequency.setValueAtTime(freq, audio.currentTime);

  // Quick attack then exponential decay, otherwise square waves click.
  gain.gain.setValueAtTime(0.0001, audio.currentTime);
  gain.gain.exponentialRampToValueAtTime(gainValue, audio.currentTime + 0.008);
  gain.gain.exponentialRampToValueAtTime(
    0.0001,
    audio.currentTime + durationMs / 1000
  );

  osc.connect(gain).connect(audio.destination);
  osc.start();
  osc.stop(audio.currentTime + durationMs / 1000);
}

function playHover() {
  blip(660, 60, 0.02);
}

function playClick() {
  blip(880, 70);
  window.setTimeout(() => blip(1320, 90), 70);
}

const STORAGE_KEY = "aj-sound";

/**
 * The preference lives in localStorage, which is external to React, so it is
 * read through useSyncExternalStore. Reading it during render would mismatch
 * hydration (the server cannot know it), and reading it in an effect would
 * mean calling setState from an effect.
 */
const listeners = new Set<() => void>();

function subscribe(cb: () => void) {
  listeners.add(cb);
  return () => {
    listeners.delete(cb);
  };
}

function readPreference(): boolean {
  try {
    return window.localStorage.getItem(STORAGE_KEY) === "on";
  } catch {
    return false; // private mode
  }
}

function writePreference(value: boolean) {
  try {
    window.localStorage.setItem(STORAGE_KEY, value ? "on" : "off");
  } catch {
    /* ignore */
  }
  listeners.forEach((l) => l());
}

export function SoundToggle() {
  // Server always renders "off", which is also the correct default.
  const on = useSyncExternalStore(subscribe, readPreference, () => false);

  useEffect(() => {
    const interactive = "a, button, [role='button']";

    // Read the preference at event time rather than closing over it, so the
    // listeners never go stale and do not need re-binding on every toggle.
    const onPointerOver = (e: Event) => {
      if (!readPreference()) return;
      const el = e.target as HTMLElement | null;
      if (el?.closest?.(interactive)) playHover();
    };

    const onClick = (e: Event) => {
      if (!readPreference()) return;
      const el = e.target as HTMLElement | null;
      if (el?.closest?.(interactive)) playClick();
    };

    document.addEventListener("pointerover", onPointerOver, { passive: true });
    document.addEventListener("click", onClick, { passive: true });
    return () => {
      document.removeEventListener("pointerover", onPointerOver);
      document.removeEventListener("click", onClick);
    };
  }, []);

  const toggle = useCallback(() => {
    const next = !readPreference();
    writePreference(next);
    // Confirm with the sound itself when switching on.
    if (next) {
      blip(523, 70);
      window.setTimeout(() => blip(784, 70), 80);
      window.setTimeout(() => blip(1047, 110), 160);
    }
  }, []);

  return (
    <button
      onClick={toggle}
      aria-pressed={on}
      title={on ? "Turn interaction sounds off" : "Turn interaction sounds on"}
      className="inline-flex items-center gap-1.5 border border-border-strong px-2 py-1 font-mono text-[0.6rem] uppercase tracking-[0.14em] text-muted transition-colors hover:border-gold/50 hover:text-gold"
    >
      <span aria-hidden className="text-sm leading-none">
        {on ? "♪" : "🔇"}
      </span>
      <span className="hidden sm:inline">{on ? "Sound on" : "Sound off"}</span>
    </button>
  );
}
