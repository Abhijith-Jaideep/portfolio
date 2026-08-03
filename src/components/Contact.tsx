"use client";

import { useState } from "react";
import clsx from "clsx";
import { profile } from "@/data/content";
import { Reveal } from "./Reveal";

export function Contact() {
  const [format, setFormat] = useState<"pdf" | "docx">("pdf");
  const resumeHref = format === "pdf" ? profile.resumePdf : profile.resumeDocx;

  return (
    <section id="contact" className="scroll-mt-16 py-24 md:py-32">
      <div className="section-shell">
        <Reveal>
          <div className="hud-frame relative overflow-hidden border-2 border-accent/50 bg-surface p-8 text-center md:p-14">
            <div className="halftone pointer-events-none absolute inset-0 opacity-[0.13]" />
            <div className="relative">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-gold">
                Final Boss
              </p>
              <h2 className="display mx-auto mt-4 max-w-2xl text-4xl uppercase text-foreground sm:text-5xl lg:text-6xl">
                Hiring a mobile or full-stack engineer in Melbourne?
              </h2>
              <p className="mx-auto mt-5 max-w-md text-muted">
                {profile.workRights}. Open to full-time, permanent roles.
                Let&apos;s talk.
              </p>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <a
                  href={`mailto:${profile.email}`}
                  className="clip-notch glow-accent inline-flex items-center justify-center bg-accent px-7 py-3.5 font-mono text-xs uppercase tracking-[0.14em] text-white transition-colors hover:bg-accent-strong"
                >
                  Email Me
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="clip-notch inline-flex items-center justify-center border border-gold/50 px-7 py-3.5 font-mono text-xs uppercase tracking-[0.14em] text-gold transition-colors hover:bg-gold-soft"
                >
                  LinkedIn
                </a>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="clip-notch inline-flex items-center justify-center border border-gold/50 px-7 py-3.5 font-mono text-xs uppercase tracking-[0.14em] text-gold transition-colors hover:bg-gold-soft"
                >
                  GitHub
                </a>
              </div>

              <div className="mt-10 flex flex-col items-center gap-3">
                <span className="font-mono text-xs uppercase tracking-[0.16em] text-muted-2">
                  Download Resume
                </span>
                <div className="flex items-center gap-1 border border-border-strong p-1">
                  {(["pdf", "docx"] as const).map((f) => (
                    <button
                      key={f}
                      onClick={() => setFormat(f)}
                      className={clsx(
                        "px-3 py-1 font-mono text-xs uppercase tracking-wider transition-colors",
                        format === f
                          ? "bg-accent text-white"
                          : "text-muted hover:text-gold"
                      )}
                    >
                      {f}
                    </button>
                  ))}
                </div>
                <a
                  href={resumeHref}
                  download
                  className="font-mono text-xs uppercase tracking-wider text-gold underline decoration-gold/40 underline-offset-4 hover:decoration-gold"
                >
                  Download as {format.toUpperCase()} ↓
                </a>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-6 text-center font-mono text-xs uppercase tracking-wider text-muted-2">
            {profile.email} · {profile.phone} · {profile.location}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
