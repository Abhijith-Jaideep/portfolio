export function SectionHeading({
  kicker,
  title,
  children,
}: {
  kicker: string;
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <div>
      <div className="flex items-center gap-3">
        <span className="h-px w-8 bg-accent" />
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-gold">
          {kicker}
        </p>
      </div>
      <h2 className="display mt-4 text-4xl uppercase text-foreground sm:text-5xl lg:text-6xl">
        {title}
      </h2>
      {children ? (
        <p className="mt-4 max-w-2xl text-muted">{children}</p>
      ) : null}
    </div>
  );
}
