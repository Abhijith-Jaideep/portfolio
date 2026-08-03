import { skills } from "@/data/content";
import { Reveal } from "./Reveal";

export function Skills() {
  const groups = Object.entries(skills);

  return (
    <section id="skills" className="scroll-mt-16 py-24 md:py-32">
      <div className="section-shell">
        <Reveal>
          <p className="font-mono text-sm text-accent">Skills</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Full vertical slice, not just the UI
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {groups.map(([group, items], i) => (
            <Reveal key={group} delay={0.05 * i}>
              <div className="h-full rounded-2xl border border-border bg-surface p-6">
                <h3 className="font-mono text-xs uppercase tracking-wider text-accent">
                  {group}
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {items.map((item) => (
                    <span
                      key={item}
                      className="rounded-md border border-border-strong px-2.5 py-1 text-sm text-muted"
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
