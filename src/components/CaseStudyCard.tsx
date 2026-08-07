"use client";

import { useState } from "react";
import clsx from "clsx";
import type { CaseStudy } from "@/data/content";
import { DiagramFrame, PhoneFrame } from "./PhoneFrame";

export function CaseStudyCard({ study }: { study: CaseStudy }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={clsx(
        "hud-frame scanline border bg-surface transition-colors",
        open ? "border-accent/60" : "border-border hover:border-gold/40"
      )}
    >
      <button
        onClick={() => setOpen((v) => !v)}
        className="grid w-full grid-cols-1 gap-6 p-6 text-left md:grid-cols-[auto_1fr_auto] md:items-center md:p-8"
        aria-expanded={open}
      >
        <div className="hidden md:block md:w-28">
          {study.media.kind === "phone" ? (
            <PhoneFrame
              src={study.media.src}
              poster={study.media.poster}
              label={study.media.caption}
            />
          ) : (
            <div className="w-28">
              <DiagramFrame src={study.media.src} />
            </div>
          )}
        </div>

        <div>
          <div className="flex flex-wrap items-center gap-2">
            {study.platformTags.map((tag) => (
              <span key={tag} className="tag-pill">
                {tag}
              </span>
            ))}
            <span className="font-mono text-xs uppercase tracking-wider text-muted-2">
              {study.period}
            </span>
          </div>
          <h3 className="display mt-3 text-3xl uppercase text-foreground sm:text-4xl">
            {study.name}
          </h3>
          <p className="mt-2 text-sm text-muted sm:text-base">
            {study.tagline}
          </p>
        </div>

        <div className="flex items-center gap-3 self-start md:self-center">
          <span className="font-mono text-xs uppercase tracking-[0.12em] text-gold">
            {open ? "Collapse" : "Open file"}
          </span>
          <span
            className={clsx(
              "flex h-8 w-8 items-center justify-center border text-foreground transition-transform duration-300",
              open
                ? "rotate-45 border-accent bg-accent text-white"
                : "border-gold/50 text-gold"
            )}
          >
            +
          </span>
        </div>
      </button>

      {/* grid-rows 0fr -> 1fr animates to intrinsic height without JS measurement */}
      <div
        className="grid transition-[grid-template-rows] duration-300 ease-[cubic-bezier(0.21,0.47,0.32,0.98)]"
        style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <div
            aria-hidden={!open}
            className={clsx(
              "transition-opacity duration-300",
              open ? "opacity-100" : "opacity-0"
            )}
          >
            <div className="border-t border-border px-6 pb-8 pt-6 md:px-8">
              {/* Screenshot proves the product is real; the diagram below it
                  shows the engineering. Both are landscape, so they take full
                  width rather than the narrow media column. */}
              {study.media.screenshot && (
                <figure className="hud-frame mb-6 w-full border border-border bg-surface p-3">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={study.media.screenshot}
                    alt={`${study.name} interface`}
                    className="h-auto w-full"
                    loading="lazy"
                  />
                  {study.media.screenshotCaption && (
                    <figcaption className="mt-2 text-center font-mono text-[0.6rem] uppercase tracking-wider text-muted-2">
                      {study.media.screenshotCaption}
                    </figcaption>
                  )}
                </figure>
              )}

              {study.media.kind === "diagram" && study.media.src && (
                <div className="mb-8">
                  <DiagramFrame
                    src={study.media.src}
                    label={study.media.caption ?? "System architecture"}
                  />
                </div>
              )}

              <div className="grid gap-10 md:grid-cols-[240px_1fr]">
                <div className="flex flex-col items-center gap-4 md:items-start">
                  {study.media.kind === "phone" ? (
                    <>
                      <PhoneFrame
                        src={study.media.src}
                        poster={study.media.poster}
                        label={study.media.caption ?? "App walkthrough"}
                      />
                      {study.media.caption && (
                        <p className="font-mono text-[0.6rem] uppercase tracking-wider text-muted-2">
                          {study.media.caption}
                        </p>
                      )}
                    </>
                  ) : (
                    !study.media.src && (
                      <div className="h-56 w-full">
                        <DiagramFrame label="System architecture" />
                      </div>
                    )
                  )}

                  <div className="flex flex-wrap gap-2">
                    {study.stack.map((s) => (
                      <span key={s} className="tag-pill">
                        {s}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-col gap-2 text-sm">
                    {study.links.repo && (
                      <a
                        href={study.links.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono text-xs uppercase tracking-wider text-muted hover:text-gold"
                      >
                        Repository ↗
                      </a>
                    )}
                    {study.links.live ? (
                      <a
                        href={study.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono text-xs uppercase tracking-wider text-muted hover:text-gold"
                      >
                        Live app ↗
                      </a>
                    ) : (
                      <span className="font-mono text-xs uppercase tracking-wider text-muted-2">
                        Private beta, demo above
                      </span>
                    )}
                  </div>
                </div>

                <div className="space-y-6">
                  <CaseStudySection title="Problem" text={study.problem} />
                  <CaseStudySection title="My role" text={study.role} />
                  <CaseStudyList title="Architecture" items={study.architecture} />
                  <CaseStudyList title="Highlights" items={study.highlights} />
                  <CaseStudyList title="Outcome" items={study.outcome} accent />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CaseStudySection({ title, text }: { title: string; text: string }) {
  return (
    <div>
      <h4 className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.16em] text-gold">
        <span className="h-1.5 w-1.5 rotate-45 bg-accent" />
        {title}
      </h4>
      <p className="mt-2 text-sm leading-relaxed text-muted sm:text-base">
        {text}
      </p>
    </div>
  );
}

function CaseStudyList({
  title,
  items,
  accent,
}: {
  title: string;
  items: string[];
  accent?: boolean;
}) {
  return (
    <div>
      <h4 className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.16em] text-gold">
        <span className="h-1.5 w-1.5 rotate-45 bg-accent" />
        {title}
      </h4>
      <ul className="mt-2 space-y-2">
        {items.map((item) => (
          <li
            key={item}
            className="flex gap-3 text-sm leading-relaxed text-muted sm:text-base"
          >
            <span
              className={clsx(
                "mt-1.5 h-1.5 w-1.5 flex-none rotate-45",
                accent ? "bg-gold" : "bg-muted-2"
              )}
            />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
