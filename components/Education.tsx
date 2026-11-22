import type { Content } from "@/content/site";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Education({ t }: { t: Content }) {
  const ed = t.education;

  return (
    <section id="education" className="scroll-mt-20 bg-sand">
      <div className="rounded-t-[2.5rem] bg-cream section-pad md:rounded-t-[4rem]">
        <div className="container-site">
          <SectionHeading index="03" label={ed.label} title={ed.title} />

          <div className="mt-14 grid lg:mt-20 gap-14 lg:grid-cols-2 lg:gap-20">
            <div>
              <Reveal>
                <h3 className="subheading">{ed.degreesTitle}</h3>
              </Reveal>
              <div className="mt-6 space-y-5">
                {ed.degrees.map((d, i) => (
                  <Reveal key={d.school} delay={100 + i * 100}>
                    <article className="group cursor-default rounded-2xl border border-line bg-white p-7 transition-colors duration-300 hover:border-taupe/60">
                      <p className="font-display text-sm font-semibold tracking-[0.14em] text-taupe">{d.years}</p>
                      <h4 className="mt-3 font-display text-2xl font-semibold leading-tight text-ink">{d.title}</h4>
                      <p className="mt-2 text-ink/65">{d.school}</p>
                    </article>
                  </Reveal>
                ))}
              </div>
            </div>

            <div>
              <Reveal>
                <h3 className="subheading">{ed.trainingTitle}</h3>
              </Reveal>
              <ul className="mt-6 divide-y divide-line border-y border-line">
                {ed.training.map((c, i) => (
                  <Reveal as="li" key={c.title} delay={100 + i * 80} className="flex items-start gap-5 py-6">
                    <span className="mt-2 size-2.5 shrink-0 bg-taupe" />
                    <div className="flex-1">
                      <p className="font-display text-lg font-semibold text-ink">{c.title}</p>
                      <p className="mt-1 text-ink/65">{c.org}</p>
                    </div>
                    <p className="shrink-0 pt-1 text-right text-sm text-muted">{c.date}</p>
                  </Reveal>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
