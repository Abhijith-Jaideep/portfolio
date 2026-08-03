import Image from "next/image";
import { heroMetrics, profile, uvp } from "@/data/content";
import { Reveal } from "./Reveal";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28"
    >
      <div className="halftone pointer-events-none absolute inset-0 opacity-[0.22] [mask-image:radial-gradient(ellipse_65%_55%_at_50%_0%,#000_10%,transparent_72%)]" />
      <div className="pointer-events-none absolute -top-32 left-1/2 h-72 w-[42rem] -translate-x-1/2 rounded-full bg-accent/20 blur-[100px]" />

      <div className="section-shell relative grid gap-12 md:grid-cols-[1.15fr_0.85fr] md:items-center">
        <div>
          <Reveal>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-accent" />
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-gold">
                Software Engineer / Melbourne VIC
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <h1
              className="display glitch mt-5 text-6xl uppercase text-foreground sm:text-7xl lg:text-8xl"
              data-text={profile.name}
            >
              {profile.name}
            </h1>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="slash-rule mt-5 max-w-sm" />
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted sm:text-xl">
              {uvp}
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-6 flex flex-wrap items-center gap-2">
              <span className="tag-pill tag-pill-gold">
                {profile.workRights}
              </span>
              <span className="tag-pill">Mobile first / Full-stack second</span>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="#work"
                className="clip-notch glow-accent inline-flex items-center justify-center bg-accent px-7 py-3.5 font-mono text-xs uppercase tracking-[0.14em] text-white transition-colors hover:bg-accent-strong"
              >
                View Work
              </a>
              <a
                href="#contact"
                className="clip-notch inline-flex items-center justify-center border border-gold/50 px-7 py-3.5 font-mono text-xs uppercase tracking-[0.14em] text-gold transition-colors hover:bg-gold-soft"
              >
                Hire Me
              </a>
              <a
                href={profile.resumePdf}
                download
                className="inline-flex items-center gap-1.5 px-1 py-3 font-mono text-xs uppercase tracking-[0.14em] text-muted transition-colors hover:text-foreground"
              >
                Resume
                <span aria-hidden>↓</span>
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.25}>
            <dl className="mt-14 grid max-w-xl grid-cols-2 gap-3 sm:grid-cols-4">
              {heroMetrics.map((m) => (
                <div
                  key={m.label}
                  className="hud-frame border border-border bg-surface/60 px-3 py-3"
                >
                  <dd className="display text-3xl text-gold">{m.value}</dd>
                  <dt className="mt-1.5 font-mono text-[0.6rem] uppercase leading-snug tracking-wider text-muted-2">
                    {m.label}
                  </dt>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="relative mx-auto w-full max-w-xs md:max-w-sm">
          <div className="halftone-gold pointer-events-none absolute -right-4 -top-4 h-28 w-28 opacity-70" />
          <div className="absolute -inset-3 bg-accent/15 blur-2xl" />
          <div className="clip-panel relative border-2 border-accent/60 bg-surface">
            <Image
              src={profile.headshot}
              alt={profile.name}
              width={480}
              height={600}
              priority
              className="h-auto w-full object-cover"
            />
          </div>
          <div className="halftone pointer-events-none absolute -bottom-5 -left-5 h-24 w-24 opacity-80" />
        </Reveal>
      </div>
    </section>
  );
}
