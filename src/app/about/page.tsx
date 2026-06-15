import type { Metadata } from "next";
import Image from "next/image";
import { Check, X } from "lucide-react";
import { about } from "@/data/about";
import { media } from "@/lib/cloudinary";
import { PageHeader } from "@/components/ui/PageHeader";
import { Reveal } from "@/components/ui/Reveal";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { Testimonials } from "@/components/sections/Testimonials";
import { CtaBand } from "@/components/sections/CtaBand";

export const metadata: Metadata = {
  title: "À propos",
  description:
    "Elias Moreau, photographe mariage, portrait et événement depuis 12 ans. Une approche simple et directe, en Normandie, à Paris et partout en France.",
};

export default function AboutPage() {
  return (
    <main>
      <PageHeader
        eyebrow={about.header.eyebrow}
        title={about.header.title}
        intro={about.header.intro}
      />

      {/* Portrait + philosophie */}
      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-10 lg:pb-32">
        <div className="grid items-stretch gap-10 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-6">
            <div className="relative aspect-[4/5] w-full overflow-hidden lg:aspect-auto lg:h-full lg:min-h-[560px]">
              <Image
                src={media(about.portrait.image, 1400)}
                alt={about.portrait.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </Reveal>

          <div className="lg:col-span-6 lg:flex lg:flex-col lg:justify-center">
            <Reveal>
              <blockquote className="font-display text-3xl leading-snug text-ivory lg:text-4xl">
                “{about.philosophy.quote}”
              </blockquote>
            </Reveal>
            <div className="mt-8 space-y-5">
              {about.philosophy.body.map((p, i) => (
                <Reveal key={i} delay={0.05 * (i + 1)}>
                  <p className="max-w-xl text-base leading-relaxed text-ivory/60">
                    {p}
                  </p>
                </Reveal>
              ))}
            </div>

            <div className="mt-12 grid grid-cols-2 gap-8 sm:grid-cols-4">
              {about.stats.map((stat, i) => (
                <Reveal key={stat.label} delay={0.04 * i}>
                  <div className="border-t border-gold/30 pt-4">
                    <p className="font-display text-2xl text-ivory">
                      {stat.value}
                    </p>
                    <p className="mt-2 text-[11px] uppercase tracking-[0.12em] text-ivory/40">
                      {stat.label}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Ce que je regarde pendant une séance */}
      <section className="border-t border-ivory/10 bg-anthracite/20">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <Reveal>
            <p className="mb-5 text-[11px] uppercase tracking-[0.3em] text-gold">
              {about.watching.eyebrow}
            </p>
            <h2 className="max-w-2xl font-display text-3xl leading-tight text-ivory lg:text-4xl">
              {about.watching.title}
            </h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-ivory/60">
              {about.watching.intro}
            </p>
          </Reveal>

          <div className="mt-16 grid gap-x-12 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {about.watching.items.map((it, i) => (
              <Reveal key={it.label} delay={0.04 * i}>
                <div className="border-t border-ivory/15 pt-5">
                  <h3 className="font-display text-xl text-ivory">{it.label}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ivory/55">
                    {it.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Ce que je refuse / promets */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <div className="grid gap-12 md:grid-cols-2 lg:gap-20">
          <Reveal>
            <h2 className="mb-8 font-display text-2xl text-ivory">
              Ce que je refuse
            </h2>
            <ul className="space-y-4">
              {about.refuses.map((r) => (
                <li key={r} className="flex items-start gap-3 text-ivory/70">
                  <X className="mt-0.5 h-4 w-4 shrink-0 text-ivory/40" strokeWidth={1.5} />
                  <span className="text-base leading-relaxed">{r}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="mb-8 font-display text-2xl text-ivory">
              Ce que je promets
            </h2>
            <ul className="space-y-4">
              {about.promises.map((p) => (
                <li key={p} className="flex items-start gap-3 text-ivory/70">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" strokeWidth={1.5} />
                  <span className="text-base leading-relaxed">{p}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <ProcessTimeline />
      <Testimonials />
      <CtaBand />
    </main>
  );
}
