"use client";

import { useMemo, useState } from "react";
import clsx from "clsx";
import { caseStudies, notableBuild, type PlatformTag } from "@/data/content";
import { CaseStudyCard } from "./CaseStudyCard";
import { Reveal } from "./Reveal";

const FILTERS: Array<PlatformTag | "All"> = [
  "All",
  "Mobile",
  "Full-Stack",
  "Cloud",
];

export function CaseStudies() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("All");

  const visible = useMemo(
    () =>
      filter === "All"
        ? caseStudies
        : caseStudies.filter((s) => s.platformTags.includes(filter)),
    [filter]
  );

  return (
    <section id="work" className="scroll-mt-16 py-24 md:py-32">
      <div className="section-shell">
        <Reveal>
          <p className="font-mono text-sm text-accent">Featured Work</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Production builds, not toy projects
          </h2>
          <p className="mt-4 max-w-2xl text-muted">
            Three shipped systems spanning native mobile, full-stack mobile,
            and cloud infrastructure — each built end to end, not just the UI
            layer.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-8 flex flex-wrap gap-2">
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={clsx(
                  "rounded-full border px-4 py-1.5 text-sm transition-colors",
                  filter === f
                    ? "border-accent bg-accent-soft text-accent"
                    : "border-border-strong text-muted hover:text-foreground"
                )}
              >
                {f}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-8 space-y-5">
          {visible.map((study, i) => (
            <Reveal key={study.slug} delay={0.05 * i}>
              <CaseStudyCard study={study} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-8 rounded-2xl border border-dashed border-border-strong p-6 md:p-8">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="font-mono text-xs uppercase tracking-wider text-accent">
                  Also worth a look
                </p>
                <h3 className="mt-2 text-lg font-semibold text-foreground">
                  {notableBuild.name}{" "}
                  <span className="font-normal text-muted">
                    — {notableBuild.tagline}
                  </span>
                </h3>
                <p className="mt-1 text-sm text-muted-2">
                  {notableBuild.period} · Patented
                </p>
              </div>
            </div>
            <ul className="mt-4 space-y-2">
              {notableBuild.highlights.map((h) => (
                <li key={h} className="flex gap-2.5 text-sm text-muted">
                  <span className="mt-2 h-1 w-1 flex-none rounded-full bg-muted-2" />
                  {h}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
