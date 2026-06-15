import { experience } from "@/data/home";
import { Reveal } from "@/components/ui/Reveal";
import { CtaLink } from "@/components/ui/CtaLink";

export function ExperienceBrief() {
  return (
    <section className="border-t border-ivory/10 bg-anthracite/20">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <Reveal>
          <p className="mb-3 text-[11px] uppercase tracking-[0.3em] text-gold">
            {experience.eyebrow}
          </p>
          <h2 className="max-w-2xl font-display text-3xl text-ivory lg:text-4xl">
            {experience.title}
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {experience.steps.map((step, i) => (
            <Reveal key={step.n} delay={0.05 * i}>
              <div className="border-t border-ivory/15 pt-5">
                <span className="font-display text-2xl text-gold/80">
                  {step.n}
                </span>
                <h3 className="mt-3 text-base text-ivory">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ivory/55">
                  {step.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-12">
            <CtaLink href={experience.cta.href} variant="ghost">
              {experience.cta.label}
            </CtaLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
