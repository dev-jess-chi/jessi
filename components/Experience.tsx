"use client";

import { useState } from "react";
import type { Content } from "@/content/site";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { Plus } from "./Icons";

type Sort = "newest" | "oldest";

export default function Experience({ t }: { t: Content }) {
  const e = t.experience;
  const [sort, setSort] = useState<Sort>("newest");
  const [open, setOpen] = useState<Set<string>>(() => new Set(["ep"]));

  const jobs = [...e.jobs].sort((a, b) =>
    sort === "newest" ? b.start.localeCompare(a.start) : a.start.localeCompare(b.start),
  );

  const toggle = (id: string) =>
    setOpen((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });

  return (
    <section id="experience" className="scroll-mt-20 rounded-t-[2.5rem] bg-sand section-pad md:rounded-t-[4rem]">
      <div className="container-site">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <SectionHeading index="02" label={e.label} title={e.title} />
            <Reveal delay={150}>
              <p className="mt-5 max-w-lg text-lg text-ink/70">{e.intro}</p>
            </Reveal>
          </div>

          <Reveal delay={200}>
            <div className="flex items-center gap-3">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-ink/60">{e.sortLabel}</span>
              <div className="flex rounded-full bg-white/70 p-1 text-sm">
                {(["newest", "oldest"] as const).map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => setSort(s)}
                    aria-pressed={sort === s}
                    className={`cursor-pointer rounded-full px-4 py-2 transition-colors duration-300 ${
                      sort === s ? "bg-ink text-cream" : "text-ink/70 hover:text-ink"
                    }`}
                  >
                    {e[s]}
                  </button>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        <ol className="relative mt-16 md:mt-20">
          {/* Línea del timeline */}
          <span aria-hidden className="absolute top-2 bottom-2 left-[5px] w-px bg-taupe/40 md:left-[calc(25%+5px)]" />

          {jobs.map((job, i) => {
            const isOpen = open.has(job.id);
            return (
              <Reveal as="li" key={job.id} delay={Math.min(i, 3) * 60} className="relative pb-6 pl-10 md:grid md:grid-cols-4 md:pl-0">
                {/* Fechas */}
                <div className="mb-3 md:mb-0 md:pr-10 md:pt-6 md:text-right">
                  <p className="text-sm font-semibold uppercase tracking-[0.14em] text-taupe">{job.dates}</p>
                  <p className="mt-1 text-sm text-ink/60">{job.place}</p>
                </div>

                {/* Marcador cuadrado (como en el CV) */}
                <span
                  aria-hidden
                  className={`absolute top-1 left-0 size-[11px] transition-colors duration-300 md:top-7 md:left-[25%] ${
                    isOpen ? "bg-taupe" : "bg-cream ring-1 ring-taupe"
                  }`}
                />

                <div className="md:col-span-3 md:pl-12">
                  <div className="overflow-hidden rounded-2xl bg-white/80 transition-shadow duration-300 hover:shadow-[0_20px_50px_-30px_rgba(61,53,49,.45)]">
                    <button
                      type="button"
                      onClick={() => toggle(job.id)}
                      aria-expanded={isOpen}
                      aria-controls={`job-${job.id}`}
                      className="flex w-full cursor-pointer items-start justify-between gap-6 p-6 text-left md:p-7"
                    >
                      <span>
                        <span className="block font-display text-xl font-semibold leading-tight tracking-[-0.01em] text-ink md:text-[1.4rem]">
                          {job.company}
                        </span>
                        <span className="mt-1.5 block text-ink/70">{job.role}</span>
                      </span>
                      <span
                        className={`grid size-10 shrink-0 cursor-pointer place-items-center rounded-full border border-ink/15 transition-all duration-300 ${
                          isOpen ? "rotate-45 bg-ink text-cream" : "text-ink"
                        }`}
                      >
                        <Plus className="size-4" />
                      </span>
                    </button>

                    <div
                      id={`job-${job.id}`}
                      className={`grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(.2,.7,.2,1)] ${
                        isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <ul className="max-w-4xl space-y-3 border-t border-line px-6 pt-5 pb-7 md:px-7">
                          {job.bullets.map((b) => (
                            <li key={b} className="flex gap-3 leading-relaxed text-ink/75">
                              <span className="mt-[0.6em] size-1.5 shrink-0 rounded-full bg-taupe" />
                              {b}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
