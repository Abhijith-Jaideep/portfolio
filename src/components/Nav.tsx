"use client";

import { useEffect, useState } from "react";
import clsx from "clsx";

const LINKS = [
  { id: "work", label: "Work" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

export function Nav() {
  const [active, setActive] = useState<string>("");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const sections = LINKS.map((l) => document.getElementById(l.id)).filter(
      (el): el is HTMLElement => !!el
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((el) => observer.observe(el));
    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <header
      className={clsx(
        "fixed top-0 inset-x-0 z-50 transition-colors duration-300",
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border"
          : "bg-transparent border-b border-transparent"
      )}
    >
      <nav className="section-shell flex h-16 items-center justify-between">
        <a
          href="#top"
          className="display text-xl uppercase tracking-wide text-foreground/90 transition-colors hover:text-gold"
        >
          Abhijith Jaideep
          <span className="text-accent">.</span>
        </a>

        <ul className="hidden md:flex items-center gap-7">
          {LINKS.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={clsx(
                  "font-mono text-xs uppercase tracking-[0.14em] transition-colors",
                  active === link.id
                    ? "text-gold"
                    : "text-muted hover:text-foreground"
                )}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <a
            href="#contact"
            className="clip-notch inline-flex items-center bg-accent px-5 py-2.5 font-mono text-xs uppercase tracking-[0.14em] text-white transition-colors hover:bg-accent-strong"
          >
            Hire Me
          </a>
        </div>

        <button
          onClick={() => setMenuOpen((v) => !v)}
          className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-md border border-border text-foreground"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span className="sr-only">Menu</span>
          <div className="flex flex-col gap-1">
            <span className="block h-px w-4 bg-foreground" />
            <span className="block h-px w-4 bg-foreground" />
            <span className="block h-px w-4 bg-foreground" />
          </div>
        </button>
      </nav>

      {menuOpen && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-md">
          <ul className="section-shell flex flex-col gap-1 py-3">
            {LINKS.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={() => setMenuOpen(false)}
                  className={clsx(
                    "block py-2 font-mono text-xs uppercase tracking-[0.14em]",
                    active === link.id ? "text-gold" : "text-muted"
                  )}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="clip-notch inline-flex items-center bg-accent px-5 py-2.5 font-mono text-xs uppercase tracking-[0.14em] text-white"
              >
                Hire Me
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
