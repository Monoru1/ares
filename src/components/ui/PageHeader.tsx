import { Reveal } from "@/components/ui/Reveal";

const splitTitle = (title: string) => title.split(" ");

type Props = {
  eyebrow: string;
  title: string;
  intro?: string;
};

export function PageHeader({ eyebrow, title, intro }: Props) {
  return (
    <header className="mx-auto max-w-7xl overflow-hidden px-6 pt-28 pb-12 sm:pt-36 sm:pb-14 lg:px-10 lg:pt-48 lg:pb-20">
      <Reveal>
        <p className="mb-6 text-[11px] uppercase tracking-[0.26em] text-gold sm:tracking-[0.3em]">
          {eyebrow}
        </p>
      </Reveal>
      <Reveal delay={0.05}>
        <h1 className="max-w-5xl text-wrap balance font-display text-[clamp(3.2rem,14vw,8.5rem)] leading-[0.95] tracking-[-0.04em] text-ivory sm:text-[clamp(4.5rem,10vw,8rem)] lg:text-8xl">
          {splitTitle(title).map((word) => (
            <span key={word} className="inline-block max-w-full align-top">
              {word}
              <span className="inline-block w-[0.18em]" />
            </span>
          ))}
        </h1>
      </Reveal>
      {intro && (
        <Reveal delay={0.1}>
          <p className="mt-8 max-w-2xl text-base leading-relaxed text-ivory/60 sm:text-lg">
            {intro}
          </p>
        </Reveal>
      )}
    </header>
  );
}
