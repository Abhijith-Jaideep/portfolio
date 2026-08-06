export function PhoneFrame({
  label,
  src,
  poster,
}: {
  label?: string;
  src?: string;
  poster?: string;
}) {
  return (
    <div className="relative mx-auto aspect-[9/19.5] w-full max-w-[220px] rounded-[2rem] border-4 border-zinc-700/70 bg-black shadow-[0_20px_60px_-15px_rgba(0,0,0,0.6)]">
      <div className="absolute left-1/2 top-2 z-10 h-1.5 w-14 -translate-x-1/2 rounded-full bg-zinc-800" />

      {src ? (
        <video
          className="h-full w-full rounded-[1.6rem] object-cover"
          src={src}
          poster={poster}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          aria-label={label ?? "App demo recording"}
        />
      ) : (
        <div className="flex h-full w-full flex-col items-center justify-center gap-3 overflow-hidden rounded-[1.6rem] bg-surface p-4 text-center">
          <div className="flex h-10 w-10 items-center justify-center border border-gold/50 text-gold">
            <PlayIcon />
          </div>
          <p className="font-mono text-[10px] uppercase leading-snug tracking-wider text-muted-2">
            {label ?? "Demo recording"}
            <br />
            coming soon
          </p>
        </div>
      )}
    </div>
  );
}

export function DiagramFrame({ label }: { label?: string }) {
  return (
    <div className="hud-frame flex h-full w-full flex-col items-center justify-center gap-3 border border-dashed border-border-strong bg-surface p-8 text-center">
      <div className="flex h-10 w-10 items-center justify-center border border-gold/50 text-gold">
        <DiagramIcon />
      </div>
      <p className="font-mono text-xs uppercase leading-snug tracking-wider text-muted-2">
        {label ?? "Architecture diagram"}
        <br />
        coming soon
      </p>
    </div>
  );
}

function PlayIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}

function DiagramIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
    >
      <rect x="3" y="4" width="7" height="6" rx="1" />
      <rect x="14" y="4" width="7" height="6" rx="1" />
      <rect x="8.5" y="15" width="7" height="5" rx="1" />
      <path d="M6.5 10v2a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2v-2M12 14v1" />
    </svg>
  );
}
