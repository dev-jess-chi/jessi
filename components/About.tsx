import type { Content } from "@/content/site";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function About({ t }: { t: Content }) {
  const a = t.about;

  return (
    <section id="about" className="section-pad scroll-mt-20">
      <div className="container-site grid gap-12 lg:grid-cols-12 lg:gap-16">
        <SectionHeading index="01" label={a.label} title={a.title} className="lg:col-span-6" />

        <div className="lg:col-span-5 lg:col-start-8 lg:pt-12">
          {a.paragraphs.map((p, i) => (
            <Reveal key={i} delay={150 + i * 100}>
              <p className={`text-lg leading-relaxed text-ink/75 ${i > 0 ? "mt-6" : ""}`}>{p}</p>
            </Reveal>
          ))}

          <Reveal delay={350}>
            <dl className="mt-12 grid grid-cols-3 divide-x divide-line border-y border-line">
              {a.stats.map((s) => (
                <div key={s.label} className="py-6 text-center">
                  <dt className="sr-only">{s.label}</dt>
                  <dd className="font-display text-4xl font-semibold tracking-[-0.03em] text-taupe md:text-5xl">{s.value}</dd>
                  <dd className="mt-1 px-1 text-[0.625rem] font-semibold uppercase tracking-[0.08em] text-muted sm:text-xs sm:tracking-[0.2em] lg:text-[0.7rem] lg:tracking-[0.12em] xl:text-xs xl:tracking-[0.2em]">{s.label}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
