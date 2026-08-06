"use client";

import { useState } from "react";
import clsx from "clsx";
import { skillGems } from "@/data/content";
import { Gem } from "./Gem";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Skills() {
  // Hover drives the highlight on desktop; click pins it so touch devices
  // (which never fire hover) still work. Pin wins when both are set.
  const [hovered, setHovered] = useState<string | null>(null);
  const [pinned, setPinned] = useState<string | null>(null);
  const active = pinned ?? hovered;

  return (
    <section id="skills" className="relative scroll-mt-16 py-24 md:py-32">
      <div className="halftone-gold pointer-events-none absolute right-0 top-16 h-40 w-40 opacity-40" />

      <div className="section-shell relative">
        <Reveal>
          <SectionHeading
            kicker="Loadout"
            title="Six stones, one full stack"
          >
            Every layer of a shipped product, from the screen in someone&apos;s
            hand down to the infrastructure serving it.
          </SectionHeading>
        </Reveal>

        {/* Gauntlet: the six gems in a row, each one a skill domain. */}
        <Reveal delay={0.08}>
          <div
            className="mt-12 flex flex-wrap items-end justify-center gap-4 sm:gap-8"
            onMouseLeave={() => setHovered(null)}
          >
            {skillGems.map((gem) => {
              const lit = active === null || active === gem.id;
              return (
                <button
                  key={gem.id}
                  onMouseEnter={() => setHovered(gem.id)}
                  onFocus={() => setHovered(gem.id)}
                  onBlur={() => setHovered(null)}
                  onClick={() =>
                    setPinned((v) => (v === gem.id ? null : gem.id))
                  }
                  className="group flex flex-col items-center gap-2 outline-none"
                  aria-pressed={pinned === gem.id}
                >
                  <span
                    className={clsx(
                      "transition-transform duration-300",
                      active === gem.id ? "-translate-y-1.5 scale-110" : ""
                    )}
                  >
                    <Gem color={gem.color} lit={lit} size={46} />
                  </span>
                  <span
                    className="font-mono text-[0.6rem] uppercase tracking-[0.14em] transition-colors"
                    style={{ color: lit ? gem.color : "var(--muted-2)" }}
                  >
                    {gem.name}
                  </span>
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Panels stay visible at all times so the section survives a skim. */}
        <div
          className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          onMouseLeave={() => setHovered(null)}
        >
          {skillGems.map((gem, i) => {
            const dimmed = active !== null && active !== gem.id;
            return (
              <Reveal key={gem.id} delay={0.04 * i}>
                <div
                  onMouseEnter={() => setHovered(gem.id)}
                  className={clsx(
                    "hud-frame h-full border bg-surface p-5 transition-all duration-300",
                    dimmed ? "opacity-45" : "opacity-100"
                  )}
                  style={{
                    borderColor:
                      active === gem.id ? gem.color : "var(--border)",
                    boxShadow:
                      active === gem.id
                        ? `0 0 0 1px ${gem.color}55, 0 10px 34px -14px ${gem.color}`
                        : "none",
                  }}
                >
                  <div className="flex items-center gap-3">
                    <Gem color={gem.color} size={26} lit={!dimmed} />
                    <div>
                      <h3 className="display text-xl uppercase leading-none text-foreground">
                        {gem.name}
                      </h3>
                      <p className="mt-1 font-mono text-[0.6rem] uppercase tracking-wider text-muted-2">
                        {gem.power}
                      </p>
                    </div>
                  </div>

                  <div
                    className="mt-4 h-px w-full"
                    style={{
                      background: `linear-gradient(90deg, ${gem.color}, transparent)`,
                    }}
                  />

                  <div className="mt-4 flex flex-wrap gap-2">
                    {gem.items.map((item) => (
                      <span
                        key={item}
                        className="border border-border-strong px-2.5 py-1 font-mono text-xs text-muted transition-colors"
                        style={
                          active === gem.id
                            ? { borderColor: `${gem.color}66`, color: gem.color }
                            : undefined
                        }
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
