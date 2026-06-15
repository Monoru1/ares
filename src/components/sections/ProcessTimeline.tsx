import { about } from "@/data/about";
import { Reveal } from "@/components/ui/Reveal";

export function ProcessTimeline() {
  const { process } = about;
  return (
    <section className="border-t border-ivory/10 bg-anthracite/30">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-36">
        <Reveal>
          <p className="mb-5 text-[11px] uppercase tracking-[0.3em] text-gold">
            {process.eyebrow}
          </p>
          <h2 className="max-w-2xl font-display text-4xl leading-tight text-ivory lg:text-5xl">
            {process.title}
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-x-12 gap-y-12 md:grid-cols-2 lg:grid-cols-5">
          {process.steps.map((step, i) => (
            <Reveal key={step.n} delay={0.05 * i}>
              <div className="border-t border-ivory/15 pt-6">
                <span className="font-display text-3xl text-gold/80">
                  {step.n}
                </span>
                <h3 className="mt-4 font-display text-xl text-ivory">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ivory/55">
                  {step.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
