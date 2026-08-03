import { profile } from "@/data/content";

export function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="section-shell flex flex-wrap items-center justify-between gap-4 font-mono text-xs uppercase tracking-wider text-muted-2">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <div className="flex gap-5">
          <a href={profile.github} className="hover:text-gold">
            GitHub
          </a>
          <a href={profile.linkedin} className="hover:text-gold">
            LinkedIn
          </a>
          <a href={`mailto:${profile.email}`} className="hover:text-gold">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
