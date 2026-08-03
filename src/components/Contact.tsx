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
          <div className="rounded-3xl border border-border-strong bg-surface p-8 md:p-14 text-center">
            <p className="font-mono text-sm text-accent">Contact</p>
            <h2 className="mx-auto mt-3 max-w-xl text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Hiring a mobile or full-stack engineer in Melbourne?
            </h2>
            <p className="mx-auto mt-4 max-w-md text-muted">
              {profile.workRights}. Open to full-time, permanent roles —
              let&apos;s talk.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-medium text-[#06110d] transition-colors hover:bg-accent-strong"
              >
                Email Me
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-border-strong px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
              >
                LinkedIn
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-border-strong px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
              >
                GitHub
              </a>
            </div>

            <div className="mt-10 flex flex-col items-center gap-3">
              <span className="font-mono text-xs uppercase tracking-wider text-muted-2">
                Download Resume
              </span>
              <div className="flex items-center gap-1 rounded-full border border-border-strong p-1">
                {(["pdf", "docx"] as const).map((f) => (
                  <button
                    key={f}
                    onClick={() => setFormat(f)}
                    className={clsx(
                      "rounded-full px-3 py-1 text-xs font-mono uppercase transition-colors",
                      format === f
                        ? "bg-accent text-[#06110d]"
                        : "text-muted hover:text-foreground"
                    )}
                  >
                    {f}
                  </button>
                ))}
              </div>
              <a
                href={resumeHref}
                download
                className="text-sm text-accent underline decoration-accent/40 underline-offset-4 hover:decoration-accent"
              >
                Download as {format.toUpperCase()} ↓
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-6 text-center text-sm text-muted-2">
            {profile.email} · {profile.phone} · {profile.location}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
