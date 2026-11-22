import type { Content } from "@/content/site";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Skills({ t }: { t: Content }) {
  const s = t.skills;

  return (
    <section id="skills" className="section-pad scroll-mt-20">
      <div className="container-site">
        <SectionHeading index="04" label={s.label} title={s.title} />

        <div className="mt-14 grid lg:mt-20 gap-6 lg:grid-cols-3">
          {/* Competencias digitales */}
          <Reveal className="rounded-3xl bg-white p-8 lg:col-span-2">
            <h3 className="subheading">{s.digitalTitle}</h3>
            <div className="mt-8 grid gap-8 sm:grid-cols-3">
              {s.digital.map((g) => (
                <div key={g.group}>
                  <p className="font-display text-lg font-semibold text-ink">{g.group}</p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {g.items.map((item) => (
                      <li key={item} className="rounded-full bg-sand/70 px-3.5 py-1.5 text-sm text-ink/80">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Idiomas */}
          <Reveal delay={120} className="rounded-3xl bg-ink p-8 text-cream">
            <h3 className="subheading text-sand!">{s.languagesTitle}</h3>
            <ul className="mt-8 space-y-6">
              {s.languages.map((l, i) => (
                <li key={l.name}>
                  <div className="flex items-baseline justify-between gap-4">
                    <span className="font-display text-lg font-semibold">{l.name}</span>
                    <span className="text-sm text-sand/70">{l.level}</span>
                  </div>
                  <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/10">
                    <div
                      className="lang-bar h-full rounded-full bg-taupe"
                      style={{ ["--v" as string]: l.value, transitionDelay: `${400 + i * 150}ms` }}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Fortalezas */}
          <Reveal delay={200} className="rounded-3xl border border-line p-8 lg:col-span-3">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:gap-12">
              <h3 className="subheading shrink-0">{s.softTitle}</h3>
              <ul className="flex flex-wrap gap-3">
                {s.soft.map((item) => (
                  <li
                    key={item}
                    className="cursor-default select-none rounded-full border border-taupe/40 px-5 py-2.5 font-display font-bold text-ink transition-colors duration-300 hover:bg-taupe hover:text-white"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
