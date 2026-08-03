"use client";

import { useMemo, useState } from "react";
import clsx from "clsx";
import { caseStudies, notableBuild, type PlatformTag } from "@/data/content";
import { CaseStudyCard } from "./CaseStudyCard";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

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
          <SectionHeading kicker="Featured Work" title="Production builds, not toy projects">
            Three shipped systems spanning native mobile, full-stack mobile,
            and cloud infrastructure, each built end to end, not just the UI
            layer.
          </SectionHeading>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-8 flex flex-wrap gap-2">
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={clsx(
                  "clip-notch border px-4 py-2 font-mono text-xs uppercase tracking-[0.12em] transition-colors",
                  filter === f
                    ? "border-accent bg-accent text-white"
                    : "border-border-strong text-muted hover:border-gold/50 hover:text-gold"
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
          <div className="hud-frame mt-8 border border-dashed border-border-strong bg-surface/40 p-6 md:p-8">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.16em] text-gold">
                  Bonus Round
                </p>
                <h3 className="display mt-2 text-2xl uppercase text-foreground sm:text-3xl">
                  {notableBuild.name}
                </h3>
                <p className="mt-1 text-sm text-muted">
                  {notableBuild.tagline}
                </p>
                <p className="mt-2 font-mono text-xs uppercase tracking-wider text-muted-2">
                  {notableBuild.period} / Patented
                </p>
              </div>
            </div>
            <ul className="mt-5 space-y-2">
              {notableBuild.highlights.map((h) => (
                <li key={h} className="flex gap-3 text-sm text-muted">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-none rotate-45 bg-accent" />
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
