"use client";

import { useEffect, useState } from "react";
import type { Content, Lang } from "@/content/site";
import { setLang } from "@/lib/lang";

type Props = { t: Content; lang: Lang };

export default function Navbar({ t, lang }: Props) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const links = [
    { href: "#about", label: t.nav.about },
    { href: "#experience", label: t.nav.experience },
    { href: "#education", label: t.nav.education },
    { href: "#skills", label: t.nav.skills },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled && !open ? "bg-cream/85 shadow-[0_1px_0_0_var(--color-line)] backdrop-blur-md" : ""
      }`}
    >
      <nav className="container-site flex h-20 items-center justify-between">
        <a href="#top" className="group relative z-50 flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="font-display text-sm font-semibold uppercase tracking-[0.22em] text-ink transition-colors duration-300 group-hover:text-taupe">
            Jessica Chicaiza
          </span>
        </a>

        <div className="hidden items-center gap-9 lg:flex">
          <ul className="flex items-center gap-8">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="link-underline text-[0.95rem] text-ink/80 hover:text-ink">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <LangToggle lang={lang} />
        </div>

        <div className="relative z-50 flex items-center gap-4 lg:hidden">
          <LangToggle lang={lang} />
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-label={open ? t.nav.close : t.nav.menu}
            className="grid size-11 place-items-center rounded-full border border-ink/15 bg-white/60"
          >
            <span className="relative block h-3 w-5">
              <span
                className={`absolute left-0 h-[1.5px] w-5 bg-ink transition-all duration-300 ${open ? "top-1.5 rotate-45" : "top-0"}`}
              />
              <span
                className={`absolute left-0 h-[1.5px] w-5 bg-ink transition-all duration-300 ${open ? "top-1.5 -rotate-45" : "top-3"}`}
              />
            </span>
          </button>
        </div>
      </nav>

      {/* Menú móvil */}
      <div
        className={`fixed inset-0 z-40 bg-sand transition-[clip-path] duration-700 ease-[cubic-bezier(.7,0,.2,1)] lg:hidden ${
          open ? "[clip-path:inset(0_0_0_0)]" : "pointer-events-none [clip-path:inset(0_0_100%_0)]"
        }`}
      >
        <ul className="container-site flex h-full flex-col justify-center gap-2">
          {links.map((l, i) => (
            <li
              key={l.href}
              className={`transition-all duration-500 ${open ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}`}
              style={{ transitionDelay: open ? `${200 + i * 70}ms` : "0ms" }}
            >
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="flex items-baseline gap-4 py-2 font-display text-4xl font-bold uppercase tracking-[0.06em] text-ink sm:text-5xl"
              >
                <span className="text-sm font-bold text-taupe">0{i + 1}</span>
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}

function LangToggle({ lang }: { lang: Lang }) {
  return (
    <div className="flex items-center rounded-full border border-ink/15 bg-white/60 p-1 text-xs font-semibold tracking-[0.12em]">
      {(["en", "es"] as const).map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => setLang(l)}
          aria-pressed={lang === l}
          className={`rounded-full px-3 py-1.5 uppercase transition-colors duration-300 ${
            lang === l ? "bg-ink text-cream" : "text-ink/60 hover:text-ink"
          }`}
        >
          {l}
        </button>
      ))}
    </div>
  );
}
