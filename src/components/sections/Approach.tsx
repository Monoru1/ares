import { approach } from "@/data/home";
import { Reveal } from "@/components/ui/Reveal";

export function Approach() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-5">
          <p className="mb-5 text-[11px] uppercase tracking-[0.3em] text-gold">
            {approach.eyebrow}
          </p>
          <h2 className="font-display text-3xl leading-tight text-ivory lg:text-4xl">
            {approach.title}
          </h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-ivory/60">
            {approach.intro}
          </p>
        </Reveal>

        <div className="divide-y divide-ivory/10 border-t border-ivory/10 lg:col-span-6 lg:col-start-7">
          {approach.points.map((p, i) => (
            <Reveal key={p.title} delay={0.04 * i}>
              <div className="py-7">
                <h3 className="font-display text-xl text-ivory">{p.title}</h3>
                <p className="mt-2 max-w-md text-sm leading-relaxed text-ivory/55">
                  {p.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
