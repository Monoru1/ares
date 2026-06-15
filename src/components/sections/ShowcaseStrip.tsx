import { showcase } from "@/data/home";
import { Reveal } from "@/components/ui/Reveal";
import { CtaLink } from "@/components/ui/CtaLink";
import { PhotoCard } from "@/components/ui/PhotoCard";

export function ShowcaseStrip() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
      <Reveal>
        <PhotoCard
          image={showcase.big.image}
          alt={showcase.big.alt}
          caption={showcase.big.caption}
          ratio="aspect-[3/2] sm:aspect-[16/7]"
          sizes="(max-width: 1280px) 100vw, 1200px"
        />
      </Reveal>

      <div className="mt-6 grid gap-6 lg:grid-cols-3">
        <Reveal>
          <PhotoCard
            image={showcase.tall[0].image}
            alt={showcase.tall[0].alt}
            caption={showcase.tall[0].caption}
            ratio="aspect-[3/4]"
            sizes="(max-width: 1024px) 100vw, 33vw"
          />
        </Reveal>
        <Reveal delay={0.05}>
          <PhotoCard
            image={showcase.tall[1].image}
            alt={showcase.tall[1].alt}
            caption={showcase.tall[1].caption}
            ratio="aspect-[3/4]"
            sizes="(max-width: 1024px) 100vw, 33vw"
          />
        </Reveal>
        <Reveal delay={0.1}>
          <div className="flex h-full flex-col justify-center border-t border-ivory/10 pt-6 lg:border-t-0 lg:pt-0 lg:pl-2">
            <p className="font-display text-2xl leading-snug text-ivory lg:text-3xl">
              {showcase.line}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-ivory/55">
              Mariages, portraits, couples et familles — toujours en lumière
              naturelle, jamais sur commande.
            </p>
            <div className="mt-7">
              <CtaLink href={showcase.cta.href} variant="ghost">
                {showcase.cta.label}
              </CtaLink>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
