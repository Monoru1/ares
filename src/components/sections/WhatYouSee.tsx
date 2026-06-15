import { whatYouSee } from "@/data/home";
import { Reveal } from "@/components/ui/Reveal";

export function WhatYouSee() {
  return (
    <section className="border-t border-ivory/10 bg-anthracite/20">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <p className="mb-5 text-[11px] uppercase tracking-[0.3em] text-gold">
              {whatYouSee.eyebrow}
            </p>
            <h2 className="font-display text-3xl leading-tight text-ivory lg:text-4xl">
              {whatYouSee.title}
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-ivory/60">
              {whatYouSee.intro}
            </p>
          </Reveal>

          <ul className="grid gap-x-8 gap-y-4 sm:grid-cols-2 lg:col-span-6 lg:col-start-7">
            {whatYouSee.items.map((item, i) => (
              <Reveal key={item} delay={0.03 * i}>
                <li className="flex items-center gap-3 border-b border-ivory/10 py-3 text-ivory/80">
                  <span className="h-1 w-1 shrink-0 rounded-full bg-gold" />
                  <span className="text-base">{item}</span>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
