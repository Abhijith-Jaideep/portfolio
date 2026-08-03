import { certifications, education, experience } from "@/data/content";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function About() {
  return (
    <section id="about" className="scroll-mt-16 py-24 md:py-32">
      <div className="section-shell">
        <Reveal>
          <SectionHeading
            kicker="Origin Story"
            title="From retail floors to production pipelines"
          />
          <p className="mt-5 max-w-2xl leading-relaxed text-muted">
            I build mobile, web, and cloud-based backend services with
            Python, Java, Kotlin, and AWS, and I care as much about the
            person using the app as the system behind it. Working a
            fast-paced role with a leading Australian retailer taught me to
            manage stakeholders, stay calm under pressure, and keep the
            customer experience front and centre even during peak periods.
            I carry that mindset into how I build software: clean, testable
            code, API design that scales, and continuous deployment across
            agile teams.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-12 lg:grid-cols-[1.3fr_1fr]">
          <div>
            <Reveal>
              <h3 className="font-mono text-xs uppercase tracking-[0.16em] text-gold">
                Experience
              </h3>
            </Reveal>
            <ol className="mt-5 space-y-8 border-l border-border pl-6">
              {experience.map((entry, i) => (
                <Reveal key={entry.role} delay={0.05 * i}>
                  <li className="relative">
                    <span className="absolute -left-[1.72rem] top-2 h-2.5 w-2.5 rotate-45 bg-accent" />
                    <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                      <h4 className="display text-xl uppercase text-foreground">
                        {entry.role}
                      </h4>
                      <span className="font-mono text-xs uppercase tracking-wider text-muted-2">
                        {entry.period}
                      </span>
                    </div>
                    <p className="mt-1 text-sm text-muted">
                      {entry.org} · {entry.location}
                    </p>
                    <ul className="mt-3 space-y-2">
                      {entry.bullets.map((b) => (
                        <li
                          key={b}
                          className="flex gap-3 text-sm leading-relaxed text-muted"
                        >
                          <span className="mt-1.5 h-1.5 w-1.5 flex-none rotate-45 bg-muted-2" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>

          <div className="space-y-10">
            <div>
              <Reveal>
                <h3 className="font-mono text-xs uppercase tracking-[0.16em] text-gold">
                  Education
                </h3>
              </Reveal>
              <div className="mt-5 space-y-5">
                {education.map((entry, i) => (
                  <Reveal key={entry.degree} delay={0.05 * i}>
                    <div className="hud-frame border border-border bg-surface p-4 transition-colors hover:border-gold/40">
                      <p className="font-medium text-foreground">
                        {entry.degree}
                      </p>
                      <p className="mt-1 text-sm text-muted">
                        {entry.org} · {entry.location}
                      </p>
                      <p className="mt-1 font-mono text-xs text-muted-2">
                        {entry.period}
                        {entry.note ? ` · ${entry.note}` : ""}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

            <div>
              <Reveal>
                <h3 className="font-mono text-xs uppercase tracking-[0.16em] text-gold">
                  Certifications
                </h3>
              </Reveal>
              <div className="mt-5 space-y-3">
                {certifications.map((cert, i) => (
                  <Reveal key={cert.name} delay={0.05 * i}>
                    <div className="hud-frame border border-border bg-surface p-4 transition-colors hover:border-gold/40">
                      <p className="font-medium text-foreground">
                        {cert.name}
                      </p>
                      <p className="mt-1 text-sm text-muted-2">
                        {cert.issuer}
                        {cert.date ? ` · ${cert.date}` : ""}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
