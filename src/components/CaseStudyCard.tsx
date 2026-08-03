"use client";

import { useState } from "react";
import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import type { CaseStudy } from "@/data/content";
import { DiagramFrame, PhoneFrame } from "./PhoneFrame";

export function CaseStudyCard({ study }: { study: CaseStudy }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-2xl border border-border bg-surface transition-colors hover:border-border-strong">
      <button
        onClick={() => setOpen((v) => !v)}
        className="grid w-full grid-cols-1 gap-6 p-6 text-left md:grid-cols-[auto_1fr_auto] md:items-center md:p-8"
        aria-expanded={open}
      >
        <div className="hidden md:block md:w-28">
          {study.media.kind === "phone" ? (
            <PhoneFrame />
          ) : (
            <div className="h-28 w-28">
              <DiagramFrame />
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
            <span className="font-mono text-xs text-muted-2">
              {study.period}
            </span>
          </div>
          <h3 className="mt-3 text-xl font-semibold text-foreground sm:text-2xl">
            {study.name}
          </h3>
          <p className="mt-2 text-sm text-muted sm:text-base">
            {study.tagline}
          </p>
        </div>

        <div className="flex items-center gap-2 self-start md:self-center">
          <span className="text-sm text-accent">
            {open ? "Collapse" : "View case study"}
          </span>
          <span
            className={clsx(
              "flex h-8 w-8 items-center justify-center rounded-full border border-border-strong text-foreground transition-transform",
              open && "rotate-45"
            )}
          >
            +
          </span>
        </div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="overflow-hidden"
          >
            <div className="border-t border-border px-6 pb-8 pt-6 md:px-8">
              <div className="grid gap-10 md:grid-cols-[240px_1fr]">
                <div className="flex flex-col items-center gap-4 md:items-start">
                  {study.media.kind === "phone" ? (
                    <PhoneFrame label="App walkthrough" />
                  ) : (
                    <div className="h-56 w-full">
                      <DiagramFrame label="System architecture" />
                    </div>
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
                        className="text-muted hover:text-accent"
                      >
                        Repository ↗
                      </a>
                    )}
                    {study.links.live ? (
                      <a
                        href={study.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted hover:text-accent"
                      >
                        Live app ↗
                      </a>
                    ) : (
                      <span className="text-muted-2">
                        Private beta — demo video above
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
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function CaseStudySection({ title, text }: { title: string; text: string }) {
  return (
    <div>
      <h4 className="font-mono text-xs uppercase tracking-wider text-accent">
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
      <h4 className="font-mono text-xs uppercase tracking-wider text-accent">
        {title}
      </h4>
      <ul className="mt-2 space-y-2">
        {items.map((item) => (
          <li
            key={item}
            className="flex gap-2.5 text-sm leading-relaxed text-muted sm:text-base"
          >
            <span
              className={clsx(
                "mt-2 h-1 w-1 flex-none rounded-full",
                accent ? "bg-accent" : "bg-muted-2"
              )}
            />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
