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

/**
 * Triangle wave through a lowpass, which is the NES triangle channel rather
 * than its square channel: same chiptune character, none of the glassy edge
 * a square wave has at these frequencies.
 */
function tone(
  freq: number,
  durationMs: number,
  {
    gainValue = 0.05,
    sweepTo,
    startAfterMs = 0,
  }: { gainValue?: number; sweepTo?: number; startAfterMs?: number } = {}
) {
  const audio = getContext();
  if (!audio) return;
  if (audio.state === "suspended") void audio.resume();

  const t0 = audio.currentTime + startAfterMs / 1000;
  const t1 = t0 + durationMs / 1000;

  const osc = audio.createOscillator();
  const gain = audio.createGain();
  const lowpass = audio.createBiquadFilter();

  osc.type = "triangle";
  osc.frequency.setValueAtTime(freq, t0);
  if (sweepTo) {
    // Pitch envelope gives it a plucked feel instead of a flat beep.
    osc.frequency.exponentialRampToValueAtTime(sweepTo, t1);
  }

  lowpass.type = "lowpass";
  lowpass.frequency.setValueAtTime(2600, t0);

  // Fast attack, exponential decay. Ramping from near-zero avoids the click
  // you get from starting a gain node at full volume.
  gain.gain.setValueAtTime(0.0001, t0);
  gain.gain.exponentialRampToValueAtTime(gainValue, t0 + 0.012);
  gain.gain.exponentialRampToValueAtTime(0.0001, t1);

  osc.connect(lowpass).connect(gain).connect(audio.destination);
  osc.start(t0);
  osc.stop(t1);
}

/** Soft low tick. Quiet enough to sit under a fast pointer sweep. */
function playHover() {
  tone(392, 55, { gainValue: 0.012 });
}

/** Warm two-note pluck, a fifth apart, each note sweeping slightly down. */
function playClick() {
  tone(523, 90, { gainValue: 0.05, sweepTo: 494 });
  tone(784, 150, { gainValue: 0.045, sweepTo: 740, startAfterMs: 75 });
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

/**
 * On unless explicitly turned off. Note this cannot make sound play on load:
 * browsers block audio until the user interacts with the page. What it does
 * is make the first click audible without hunting for a switch first.
 */
function readPreference(): boolean {
  try {
    return window.localStorage.getItem(STORAGE_KEY) !== "off";
  } catch {
    return true; // private mode, fall back to the default
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
  // Server snapshot matches the default, so hydration agrees for everyone
  // except visitors who have explicitly opted out.
  const on = useSyncExternalStore(subscribe, readPreference, () => true);

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
      // Rising three-note confirmation, scheduled on the audio clock rather
      // than setTimeout so the timing does not jitter under load.
      tone(523, 80, { sweepTo: 519 });
      tone(659, 80, { startAfterMs: 70, sweepTo: 654 });
      tone(880, 180, { startAfterMs: 140, sweepTo: 870 });
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
