import { closing } from "@/data/home";
import { Reveal } from "@/components/ui/Reveal";
import { CtaLink } from "@/components/ui/CtaLink";

export function CtaBand() {
  return (
    <section className="border-t border-ivory/10">
      <div className="mx-auto max-w-3xl px-6 py-28 text-center lg:py-40">
        <Reveal>
          <span className="mx-auto mb-8 block h-12 w-px bg-gold/50" />
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="font-display text-4xl leading-tight text-ivory sm:text-5xl lg:text-6xl">
            {closing.line}
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mx-auto mt-6 max-w-md text-base leading-relaxed text-ivory/60">
            {closing.sub}
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="mt-12 flex justify-center">
            <CtaLink href={closing.cta.href}>{closing.cta.label}</CtaLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
