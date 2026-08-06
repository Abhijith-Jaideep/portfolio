"use client";

import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";

/**
 * Scroll-in reveal built on IntersectionObserver.
 *
 * Deliberately not a library animation: this is a hiring portfolio, so the
 * failure mode of "content never becomes visible" is unacceptable. Three
 * separate guards force the content visible if anything goes wrong:
 * reduced-motion preference, missing IntersectionObserver, and a timeout
 * that fires regardless of whether the observer ever reports.
 */
export function Reveal({
  children,
  delay = 0,
  className,
  y = 16,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  y?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;

    const reduceMotion =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

    if (!el || reduceMotion || typeof IntersectionObserver === "undefined") {
      setShown(true);
      return;
    }

    // Safety net for a dead observer only. IntersectionObserver always
    // delivers an initial callback, so the first report of any kind proves
    // it is alive and cancels this. Elements legitimately below the fold
    // keep waiting for a real intersection.
    const failsafe = window.setTimeout(() => setShown(true), 1500);

    const observer = new IntersectionObserver(
      (entries) => {
        window.clearTimeout(failsafe);
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setShown(true);
            observer.disconnect();
          }
        }
      },
      { threshold: 0.05, rootMargin: "0px 0px -5% 0px" }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
      window.clearTimeout(failsafe);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: shown ? 1 : 0,
        transform: shown ? "none" : `translateY(${y}px)`,
        transition: `opacity 0.55s cubic-bezier(0.21,0.47,0.32,0.98) ${delay}s, transform 0.55s cubic-bezier(0.21,0.47,0.32,0.98) ${delay}s`,
        willChange: shown ? undefined : "opacity, transform",
      }}
    >
      {children}
    </div>
  );
}
