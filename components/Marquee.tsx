import { site, type Content } from "@/content/site";

export default function Marquee({ t }: { t: Content }) {
  const items = site.organisations;

  return (
    <section aria-label={t.marquee} className="border-y border-line py-8">
      <p className="container-site mb-6 text-xs font-semibold uppercase tracking-[0.3em] text-muted">{t.marquee}</p>
      <div className="marquee-mask overflow-hidden">
        <div className="marquee flex w-max">
          {[0, 1].map((copy) => (
            <ul key={copy} aria-hidden={copy === 1} className="flex shrink-0 items-center">
              {items.map((name) => (
                <li key={name} className="flex items-center">
                  <span className="whitespace-nowrap px-8 font-display text-xl font-medium uppercase tracking-[0.06em] text-taupe/80 md:text-2xl">
                    {name}
                  </span>
                  <span className="size-2.5 bg-sand-dark" />
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}
