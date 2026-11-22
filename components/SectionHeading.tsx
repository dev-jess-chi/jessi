import Reveal from "./Reveal";

type Props = { index: string; label: string; title: string; className?: string };

export default function SectionHeading({ index, label, title, className = "" }: Props) {
  return (
    <div className={className}>
      <Reveal>
        <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-taupe">
          <span className="size-2.5 bg-taupe" />
          {index} / {label}
        </p>
      </Reveal>
      <Reveal delay={100}>
        <h2 className="mt-5 font-display text-[clamp(2rem,3.4vw,3.5rem)] font-semibold leading-[1.05] tracking-[-0.025em] text-ink">
          {title}
        </h2>
      </Reveal>
    </div>
  );
}
