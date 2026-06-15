import Image from "next/image";
import { manifesto } from "@/data/home";
import { media } from "@/lib/cloudinary";
import { Reveal } from "@/components/ui/Reveal";
import { CtaLink } from "@/components/ui/CtaLink";
import { ViewfinderFrame } from "@/components/ui/ViewfinderFrame";

export function Manifesto() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-28 lg:px-10 lg:py-40">
      <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-20">
        <Reveal className="lg:col-span-5">
          <div className="relative aspect-[4/5] w-full overflow-hidden">
            <Image
              src={media(manifesto.image, 1200)}
              alt={manifesto.imageAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />
            <ViewfinderFrame inset={14} size={20} />
          </div>
        </Reveal>

        <div className="lg:col-span-7">
          <Reveal>
            <p className="mb-8 text-[11px] uppercase tracking-[0.3em] text-gold">
              {manifesto.eyebrow}
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <blockquote className="font-display text-2xl leading-snug text-ivory sm:text-3xl lg:text-4xl">
              “{manifesto.quote}”
            </blockquote>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-8 max-w-lg text-base leading-relaxed text-ivory/60">
              {manifesto.body}
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-10">
              <CtaLink href={manifesto.cta.href} variant="ghost">
                {manifesto.cta.label}
              </CtaLink>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
