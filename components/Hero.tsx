import Image from "next/image";
import { site, type Content } from "@/content/site";
import { ArrowDown } from "./Icons";
import Marquee from "./Marquee";

export default function Hero({ t }: { t: Content }) {
  const h = t.hero;

  return (
    // Ocupa toda la pantalla: contenido centrado y la franja de empresas abajo
    <section id="top" className="relative flex flex-col overflow-hidden pt-28 lg:min-h-[100svh] lg:pt-24">
      {/* Fondo decorativo */}
      <div aria-hidden className="absolute -top-40 right-[-10%] -z-10 size-[45vw] min-w-[30rem] rounded-full bg-sand/60 blur-3xl" />

      <div className="container-site flex flex-1 items-center py-12 lg:py-16">
        <div className="grid w-full items-center gap-16 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <p className="flex items-center gap-4 text-xs font-medium uppercase tracking-[0.3em] text-taupe">
              <span className="h-px w-10 bg-taupe" />
              {h.tagline}
            </p>

            <h1 className="mt-7 font-display font-bold uppercase leading-[0.92] tracking-[-0.01em]">
              <span className="block overflow-hidden pb-[0.04em]">
                <span className="block text-[clamp(2.5rem,5vw,5.25rem)] text-ink">
                  Jessica
                </span>
              </span>
              <span className="block overflow-hidden pb-[0.04em]">
                <span className="block text-[clamp(2.5rem,5vw,5.25rem)] text-taupe">
                  Chicaiza
                </span>
              </span>
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-relaxed text-ink/75 lg:text-xl">
              {h.intro}
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a href="#experience" className="btn-primary group">
                {h.ctaPrimary}
                <ArrowDown className="size-4 transition-transform duration-300 group-hover:translate-y-0.5" />
              </a>
              <a href="#contact" className="btn-ghost">
                {h.ctaSecondary}
              </a>
            </div>
          </div>

          {/* Foto */}
          <div
            className="relative mx-auto w-full max-w-[20rem] lg:col-span-5 lg:mr-[6%] lg:max-w-[min(24rem,100%)]"
           
          >
            <div className="relative">
              <div aria-hidden className="absolute inset-0 translate-x-5 translate-y-5 rounded-t-full rounded-b-[2rem] border border-taupe/50" />
              <div className="relative aspect-[3/4] overflow-hidden rounded-t-full rounded-b-[2rem] bg-sand">
                <Image
                  src={site.photo}
                  alt={h.photoAlt}
                  fill
                  sizes="(min-width: 1024px) 24rem, 80vw"
                  className="object-cover object-[15%_50%]"
                  loading="eager"
                  fetchPriority="high"
                />
              </div>

              {/* Sello giratorio */}
              <div className="absolute -top-6 -right-4 size-28 sm:-right-10 sm:size-32" aria-hidden>
                <div className="grid size-full place-items-center rounded-full bg-cream shadow-[0_10px_40px_-15px_rgba(61,53,49,.35)]">
                  <svg viewBox="0 0 100 100" className="spin-slow absolute inset-0 size-full p-1.5">
                    <defs>
                      <path id="circle" d="M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0" />
                    </defs>
                    <text className="fill-taupe text-[7px] font-medium uppercase">
                      <textPath href="#circle" textLength="236" lengthAdjust="spacing">
                        {h.badge}
                      </textPath>
                    </text>
                  </svg>
                  <span className="size-3 bg-taupe" />
                </div>
              </div>

              {/* Tarjeta "Actualmente" */}
              <div className="absolute -bottom-10 -left-4 w-[15.5rem] rounded-2xl bg-white/95 p-5 shadow-[0_20px_50px_-20px_rgba(61,53,49,.35)] backdrop-blur sm:-left-16">
                <p className="flex items-center gap-2 text-[0.7rem] font-medium uppercase tracking-[0.22em] text-taupe">
                  <span className="relative flex size-2">
                    <span className="absolute inline-flex size-full animate-ping rounded-full bg-taupe opacity-60" />
                    <span className="relative inline-flex size-2 rounded-full bg-taupe" />
                  </span>
                  {h.focusLabel}
                </p>
                <p className="mt-2 font-display text-lg font-semibold leading-tight text-ink">{h.focusOrg}</p>
                <p className="mt-1 text-sm leading-snug text-ink/70">{h.focusRole}</p>
                <p className="mt-2 text-sm text-muted">{h.focusPlace}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16 lg:mt-0">
        <Marquee t={t} />
      </div>
    </section>
  );
}
