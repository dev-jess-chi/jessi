"use client";

import { useSyncExternalStore } from "react";
import { site, type Content } from "@/content/site";
import Reveal from "./Reveal";
import { ArrowUpRight, Download, Linkedin, Mail, Phone, Pin } from "./Icons";

const noop = () => () => {};

export default function Contact({ t }: { t: Content }) {
  const c = t.contact;
  // El año se calcula en el navegador (evita fechas "congeladas" en el prerender)
  const year = useSyncExternalStore(noop, () => new Date().getFullYear(), () => null);

  const items = [
    { icon: Mail, label: c.email, value: site.email, href: `mailto:${site.email}` },
    ...(site.phone ? [{ icon: Phone, label: c.phone, value: site.phone, href: site.phoneHref }] : []),
    { icon: Linkedin, label: c.linkedin, value: site.linkedinLabel, href: site.linkedin, external: true },
    { icon: Pin, label: c.location, value: c.locationValue },
  ];

  return (
    <section id="contact" className="scroll-mt-20 bg-cream">
      <div className="rounded-t-[2.5rem] bg-ink text-cream md:rounded-t-[4rem]">
        <div className="container-site pt-[clamp(5rem,10vw,10rem)] pb-10">
          <Reveal>
            <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-sand/70">
              <span className="size-2.5 bg-taupe" />
              05 / {c.label}
            </p>
          </Reveal>

          <Reveal delay={100}>
            <h2 className="mt-6 font-display text-[clamp(2.75rem,6.5vw,6rem)] font-semibold leading-[0.95] tracking-[-0.03em] text-sand">
              {c.title}
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-12 lg:mt-20 lg:grid-cols-12 lg:gap-16">
            <Reveal delay={150} className="lg:col-span-5">
              <p className="text-lg leading-relaxed text-cream/70">{c.text}</p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href={`mailto:${site.email}`} className="btn-light group">
                  {site.email}
                  <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
                {site.cvUrl && (
                  <a href={site.cvUrl} download className="btn-outline-light">
                    {c.cv}
                    <Download className="size-4" />
                  </a>
                )}
              </div>
            </Reveal>

            <ul className="grid gap-px overflow-hidden rounded-3xl bg-white/10 sm:grid-cols-2 lg:col-span-6 lg:col-start-7">
              {items.map((it, i) => {
                const Icon = it.icon;
                // Email, teléfono y LinkedIn: solo icono + nombre (el dato no se ve, pero el enlace funciona)
                const inner = (
                  <>
                    <span className="flex items-start justify-between">
                      <Icon className="size-5 text-taupe" />
                      {it.href && (
                        <ArrowUpRight className="size-5 text-cream/40 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-cream" />
                      )}
                    </span>
                    <span className="mt-6 block text-xs font-semibold uppercase tracking-[0.2em] text-cream/50">{it.label}</span>
                    <span className={it.href ? "sr-only" : "mt-1 block break-words text-cream"}>{it.value}</span>
                  </>
                );
                return (
                  <Reveal as="li" key={it.label} delay={200 + i * 80} className="bg-ink">
                    {it.href ? (
                      <a
                        href={it.href}
                        {...(it.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                        className="group block h-full p-7 transition-colors duration-300 hover:bg-white/5"
                      >
                        {inner}
                      </a>
                    ) : (
                      <div className="h-full p-7">{inner}</div>
                    )}
                  </Reveal>
                );
              })}
            </ul>
          </div>

          <footer className="mt-24 flex flex-col gap-4 border-t border-white/10 pt-8 text-sm text-cream/50 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {year ? `${year} ` : ""}
              {site.name}
            </p>
            <a href="#top" className="link-underline self-start text-cream/70 hover:text-cream sm:self-auto">
              {t.footer.top} ↑
            </a>
          </footer>
        </div>
      </div>
    </section>
  );
}
