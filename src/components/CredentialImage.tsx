"use client";

import { useCallback, useEffect, useState } from "react";

/**
 * Thumbnail that opens the full credential in a lightbox.
 *
 * Deliberately not a <dialog>: Safari support for it is uneven enough that a
 * plain overlay with explicit focus and scroll handling is more predictable.
 */
export function CredentialImage({
  src,
  alt,
  label = "View certificate",
}: {
  src: string;
  alt: string;
  label?: string;
}) {
  const [open, setOpen] = useState(false);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };

    // Stop the page scrolling behind the overlay.
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, close]);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="group mt-3 flex w-full items-center gap-3 border border-border-strong bg-background/40 p-2 text-left transition-colors hover:border-gold/60"
        aria-label={`${label}: ${alt}`}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt=""
          aria-hidden="true"
          loading="lazy"
          className="h-12 w-16 flex-none border border-border object-cover object-top"
        />
        <span className="font-mono text-[0.6rem] uppercase tracking-[0.14em] text-muted transition-colors group-hover:text-gold">
          {label}
          <span aria-hidden> ↗</span>
        </span>
      </button>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={alt}
          onClick={close}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
        >
          <div
            className="relative max-h-full w-full max-w-4xl overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={src}
              alt={alt}
              className="mx-auto h-auto w-full border-2 border-gold/50 bg-white"
            />
            <div className="mt-3 flex items-center justify-between gap-4">
              <p className="font-mono text-[0.65rem] uppercase tracking-wider text-muted">
                {alt}
              </p>
              <button
                onClick={close}
                autoFocus
                className="clip-notch bg-accent px-4 py-2 font-mono text-xs uppercase tracking-[0.14em] text-white hover:bg-accent-strong"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
