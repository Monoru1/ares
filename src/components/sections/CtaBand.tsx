import { closing } from "@/data/home";
import { Reveal } from "@/components/ui/Reveal";
import { CtaLink } from "@/components/ui/CtaLink";

export function CtaBand() {
  return (
    <section className="border-t border-ivory/10">
      <div className="mx-auto max-w-3xl px-6 py-24 text-center lg:py-32">
        <Reveal>
          <h2 className="font-display text-4xl text-ivory lg:text-5xl">
            {closing.line}
          </h2>
          <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-ivory/60">
            {closing.sub}
          </p>
          <div className="mt-10 flex justify-center">
            <CtaLink href={closing.cta.href}>{closing.cta.label}</CtaLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
