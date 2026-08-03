import { skills } from "@/data/content";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Skills() {
  const groups = Object.entries(skills);

  return (
    <section id="skills" className="relative scroll-mt-16 py-24 md:py-32">
      <div className="halftone-gold pointer-events-none absolute right-0 top-16 h-40 w-40 opacity-40" />

      <div className="section-shell relative">
        <Reveal>
          <SectionHeading
            kicker="Loadout"
            title="Full vertical slice, not just the UI"
          />
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {groups.map(([group, items], i) => (
            <Reveal key={group} delay={0.05 * i}>
              <div className="hud-frame h-full border border-border bg-surface p-6">
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="display text-2xl uppercase text-foreground">
                    {group}
                  </h3>
                  <span className="font-mono text-xs text-muted-2">
                    {String(items.length).padStart(2, "0")}
                  </span>
                </div>
                <div className="slash-rule mt-3 opacity-60" />
                <div className="mt-4 flex flex-wrap gap-2">
                  {items.map((item) => (
                    <span
                      key={item}
                      className="border border-border-strong px-2.5 py-1 font-mono text-xs text-muted transition-colors hover:border-gold/50 hover:text-gold"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
