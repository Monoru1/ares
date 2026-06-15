import { Reveal } from "@/components/ui/Reveal";

type Props = {
  eyebrow: string;
  title: string;
  intro?: string;
};

export function PageHeader({ eyebrow, title, intro }: Props) {
  return (
    <header className="mx-auto max-w-7xl px-6 pt-36 pb-14 lg:px-10 lg:pt-48 lg:pb-20">
      <Reveal>
        <p className="mb-6 text-[11px] uppercase tracking-[0.3em] text-gold">
          {eyebrow}
        </p>
      </Reveal>
      <Reveal delay={0.05}>
        <h1 className="max-w-4xl font-display text-5xl leading-[1.04] text-ivory sm:text-6xl lg:text-7xl">
          {title}
        </h1>
      </Reveal>
      {intro && (
        <Reveal delay={0.1}>
          <p className="mt-8 max-w-2xl text-base leading-relaxed text-ivory/60">
            {intro}
          </p>
        </Reveal>
      )}
    </header>
  );
}
