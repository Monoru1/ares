import { Star } from "lucide-react";
import { about } from "@/data/about";
import { Reveal } from "@/components/ui/Reveal";

export function Testimonials() {
  const { testimonials } = about;
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-36">
      <Reveal>
        <p className="mb-12 text-[11px] uppercase tracking-[0.3em] text-gold">
          {testimonials.eyebrow}
        </p>
      </Reveal>

      <div className="grid gap-8 md:grid-cols-3">
        {testimonials.items.map((t, i) => (
          <Reveal key={t.name} delay={0.06 * i}>
            <figure className="flex h-full flex-col border border-ivory/10 p-8">
              <div className="mb-6 flex gap-1" aria-label={`${t.rating} sur 5`}>
                {Array.from({ length: t.rating }).map((_, s) => (
                  <Star
                    key={s}
                    className="h-3.5 w-3.5 fill-gold text-gold"
                    strokeWidth={0}
                  />
                ))}
              </div>
              <blockquote className="flex-1 font-display text-lg leading-snug text-ivory/90">
                “{t.message}”
              </blockquote>
              <figcaption className="mt-8">
                <p className="text-sm text-ivory">{t.name}</p>
                <p className="mt-0.5 text-[11px] uppercase tracking-[0.18em] text-ivory/40">
                  {t.role}
                </p>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
