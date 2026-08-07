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
            /* Collapsed cards show a still, so three thumbnails are not all
               autoplaying video at once. The clip plays when expanded. */
            <PhoneFrame
              src={study.media.thumbnail ? undefined : study.media.src}
              poster={study.media.poster}
              still={study.media.thumbnail}
              label={study.media.caption}
            />
          ) : (
            <div className="w-28">
              {/* Prefer the product shot: a screenshot is recognisable at
                  thumbnail size, a schematic is not. */}
              <DiagramFrame
                src={study.media.screenshots?.[0]?.src ?? study.media.src}
              />
            </div>
          )}
        </div>

        <div>
          <div className="flex flex-wrap items-center gap-2">
            {/* Surfaced on the collapsed card so someone skimming can see
                which projects are actually clickable without opening each. */}
            {study.links.live && (
              <span className="inline-flex items-center gap-1.5 rounded-sm border border-accent/60 bg-accent-soft px-2 py-0.5 font-mono text-[0.6rem] uppercase tracking-[0.14em] text-accent">
                <span
                  aria-hidden
                  className="inline-block h-1.5 w-1.5 rounded-full bg-accent"
                />
                Live
              </span>
            )}
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
              {study.media.screenshots?.map((shot) => (
                <figure
                  key={shot.src}
                  className="hud-frame mb-6 w-full border border-border bg-surface p-3"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={shot.src}
                    alt={shot.caption ?? `${study.name} interface`}
                    className="h-auto w-full"
                    loading="lazy"
                  />
                  {shot.caption && (
                    <figcaption className="mt-2 text-center font-mono text-[0.6rem] uppercase tracking-wider text-muted-2">
                      {shot.caption}
                    </figcaption>
                  )}
                </figure>
              ))}

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

                  <div className="flex w-full flex-col gap-2 text-sm">
                    {/* Opening the running app is the highest value action
                        here, so it gets the primary CTA treatment rather than
                        sitting as a text link indistinguishable from the repo. */}
                    {study.links.live && (
                      <a
                        href={study.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="clip-notch glow-accent inline-flex items-center justify-center gap-2 bg-accent px-5 py-3 font-mono text-xs uppercase tracking-[0.14em] text-white transition-colors hover:bg-accent-strong"
                      >
                        <span
                          aria-hidden
                          className="inline-block h-2 w-2 rounded-full bg-white"
                        />
                        Open live app
                        <span aria-hidden>↗</span>
                      </a>
                    )}

                    {study.links.live && study.links.liveNote && (
                      <p className="flex gap-1.5 text-[0.7rem] leading-snug text-muted">
                        <span aria-hidden className="flex-none text-gold">
                          ⏱
                        </span>
                        {study.links.liveNote}
                      </p>
                    )}

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

                    {!study.links.live && (
                      <span className="font-mono text-xs uppercase tracking-wider text-muted-2">
                        Private beta, demo above
                      </span>
                    )}

                    {study.demoLogin && (
                      <div className="hud-frame mt-1 border border-gold/30 bg-gold-soft/40 p-3">
                        <p className="font-mono text-[0.6rem] uppercase tracking-[0.14em] text-gold">
                          Demo login
                        </p>
                        <dl className="mt-2 space-y-1 font-mono text-xs">
                          <div className="flex gap-2">
                            <dt className="text-muted-2">user</dt>
                            <dd className="text-foreground">
                              {study.demoLogin.username}
                            </dd>
                          </div>
                          <div className="flex gap-2">
                            <dt className="text-muted-2">pass</dt>
                            <dd className="text-foreground">
                              {study.demoLogin.password}
                            </dd>
                          </div>
                        </dl>
                        {study.demoLogin.note && (
                          <p className="mt-2 text-[0.65rem] leading-snug text-muted-2">
                            {study.demoLogin.note}
                          </p>
                        )}
                      </div>
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
