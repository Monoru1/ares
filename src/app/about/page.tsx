import type { Metadata } from "next";
import Image from "next/image";
import { about } from "@/data/about";
import { media } from "@/lib/cloudinary";
import { PageHeader } from "@/components/ui/PageHeader";
import { Reveal } from "@/components/ui/Reveal";
import { ViewfinderFrame } from "@/components/ui/ViewfinderFrame";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { Testimonials } from "@/components/sections/Testimonials";
import { CtaBand } from "@/components/sections/CtaBand";

export const metadata: Metadata = {
  title: "À propos",
  description:
    "Derrière l'objectif d'ARÈS Studio : dix ans d'expérience, une approche cinématographique et sur-mesure, entre la France, la Belgique et la Suisse.",
};

export default function AboutPage() {
  return (
    <main>
      <PageHeader
        eyebrow={about.header.eyebrow}
        title={about.header.title}
        intro={about.header.intro}
      />

      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-10 lg:pb-32">
        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-20">
          <Reveal className="lg:col-span-5">
            <div className="relative aspect-[4/5] w-full overflow-hidden">
              <Image
                src={media(about.portrait.image, 1200)}
                alt={about.portrait.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
              <ViewfinderFrame inset={14} size={20} />
            </div>
          </Reveal>

          <div className="lg:col-span-7">
            <Reveal>
              <blockquote className="font-display text-2xl leading-snug text-ivory sm:text-3xl">
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

            <div className="mt-14 grid grid-cols-2 gap-8 sm:grid-cols-4">
              {about.stats.map((stat, i) => (
                <Reveal key={stat.label} delay={0.05 * i}>
                  <div className="border-t border-gold/30 pt-4">
                    <p className="font-display text-3xl text-ivory">
                      {stat.value}
                    </p>
                    <p className="mt-2 text-[11px] uppercase tracking-[0.15em] text-ivory/40">
                      {stat.label}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ProcessTimeline />
      <Testimonials />
      <CtaBand />
    </main>
  );
}
