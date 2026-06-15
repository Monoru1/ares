import Image from "next/image";
import Link from "next/link";
import { featured, featuredSection } from "@/data/home";
import { media } from "@/lib/cloudinary";
import { Reveal } from "@/components/ui/Reveal";
import { CtaLink } from "@/components/ui/CtaLink";

export function FeaturedPreview() {
  return (
    <section className="border-t border-ivory/10 bg-anthracite/20">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <Reveal>
          <div className="mb-12 flex items-end justify-between gap-6">
            <div>
              <p className="mb-3 text-[11px] uppercase tracking-[0.3em] text-gold">
                {featuredSection.eyebrow}
              </p>
              <h2 className="font-display text-3xl text-ivory lg:text-4xl">
                {featuredSection.title}
              </h2>
            </div>
            <CtaLink href={featuredSection.cta.href} variant="ghost">
              {featuredSection.cta.label}
            </CtaLink>
          </div>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((item, i) => (
            <Reveal key={item.title} delay={0.05 * i}>
              <Link href="/gallery" className="group block">
                <div className="relative aspect-[4/5] w-full overflow-hidden">
                  <Image
                    src={media(item.image, 1200)}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  />
                </div>
                <div className="mt-3 flex items-baseline justify-between">
                  <h3 className="text-sm text-ivory">{item.title}</h3>
                  <span className="text-[11px] uppercase tracking-[0.15em] text-ivory/40">
                    {item.category} · {item.location}
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
