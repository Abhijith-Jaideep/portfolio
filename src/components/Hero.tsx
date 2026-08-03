import Image from "next/image";
import { heroMetrics, profile, uvp } from "@/data/content";
import { Reveal } from "./Reveal";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28"
    >
      <div className="noise-grid pointer-events-none absolute inset-0 opacity-[0.35] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_20%,transparent_75%)]" />

      <div className="section-shell relative grid gap-12 md:grid-cols-[1.15fr_0.85fr] md:items-center">
        <div>
          <Reveal>
            <p className="font-mono text-sm text-accent">
              Software Engineer · Melbourne, VIC
            </p>
          </Reveal>

          <Reveal delay={0.05}>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              {profile.name}
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted sm:text-xl">
              {uvp}
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-5 flex flex-wrap items-center gap-2">
              <span className="tag-pill">{profile.workRights}</span>
              <span className="tag-pill">Mobile-first · Full-stack secondary</span>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="#work"
                className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-medium text-[#06110d] transition-colors hover:bg-accent-strong"
              >
                View Work
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border border-border-strong px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
              >
                Hire Me
              </a>
              <a
                href={profile.resumePdf}
                download
                className="inline-flex items-center justify-center gap-1.5 px-2 py-3 text-sm font-medium text-muted transition-colors hover:text-foreground"
              >
                Download Resume
                <span aria-hidden>↓</span>
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.25}>
            <dl className="mt-14 grid max-w-lg grid-cols-2 gap-x-6 gap-y-6 sm:grid-cols-4">
              {heroMetrics.map((m) => (
                <div key={m.label}>
                  <dd className="font-mono text-2xl text-foreground">
                    {m.value}
                  </dd>
                  <dt className="mt-1 text-xs leading-snug text-muted-2">
                    {m.label}
                  </dt>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="relative mx-auto w-full max-w-xs md:max-w-sm">
          <div className="absolute -inset-4 rounded-3xl bg-accent/10 blur-2xl" />
          <div className="relative overflow-hidden rounded-3xl border border-border-strong bg-surface">
            <Image
              src={profile.headshot}
              alt={profile.name}
              width={480}
              height={600}
              priority
              className="h-auto w-full object-cover"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
