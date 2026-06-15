import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";

const splitTitle = (title: string) => title.split(" ");

type Props = {
  eyebrow: string;
  title: string;
  intro?: string;
  image?: string;
  imageAlt?: string;
  meta?: string;
};

export function PageHeader({ eyebrow, title, intro, image, imageAlt, meta }: Props) {
  return (
    <header className="mx-auto max-w-7xl overflow-hidden px-6 pt-24 pb-10 sm:pt-32 sm:pb-14 lg:px-10 lg:pt-40 lg:pb-20">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:gap-12">
        <div>
          <Reveal>
            <p className="mb-5 text-[10px] uppercase tracking-[0.24em] text-gold sm:text-[11px] sm:tracking-[0.3em]">
              {eyebrow}
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="max-w-5xl text-wrap balance font-display text-[clamp(3rem,13vw,6.8rem)] leading-[0.94] tracking-[-0.045em] text-ivory sm:text-[clamp(4.2rem,9vw,7.4rem)] lg:text-[7.4rem]">
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
              <p className="mt-7 max-w-2xl text-base leading-relaxed text-ivory/60 sm:text-lg">
                {intro}
              </p>
            </Reveal>
          )}
        </div>

        {image && (
          <Reveal delay={0.12}>
            <figure className="relative mt-2 overflow-hidden border border-ivory/10 bg-anthracite lg:mt-0">
              <div className="relative aspect-[4/3] sm:aspect-[16/9] lg:aspect-[5/4]">
                <Image
                  src={image}
                  alt={imageAlt || "Photographie de couverture"}
                  fill
                  sizes="(min-width: 1024px) 48vw, 100vw"
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-void/45 via-transparent to-transparent" />
              </div>
              {meta && (
                <figcaption className="absolute bottom-0 left-0 right-0 flex items-center justify-between gap-4 p-4 text-[10px] uppercase tracking-[0.18em] text-ivory/70 sm:p-5">
                  <span>{meta}</span>
                  <span className="h-px flex-1 bg-ivory/20" />
                </figcaption>
              )}
            </figure>
          </Reveal>
        )}
      </div>
      <div className="mt-10 h-px w-full bg-ivory/10 lg:mt-16" />
    </header>
  );
}
