import Image from "next/image";
import Link from "next/link";
import { featured, featuredSection } from "@/data/home";
import { media } from "@/lib/cloudinary";
import { Reveal } from "@/components/ui/Reveal";
import { CtaLink } from "@/components/ui/CtaLink";

function Frame({
  item,
  className,
  ratio,
  sizes,
}: {
  item: (typeof featured)[number];
  className?: string;
  ratio: string;
  sizes: string;
}) {
  return (
    <Reveal className={className}>
      <Link href="/gallery" className="group block">
        <div className={`relative ${ratio} w-full overflow-hidden`}>
          <Image
            src={media(item.image, 1400)}
            alt={item.alt}
            fill
            sizes={sizes}
            className="object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
          />
          <div className="absolute inset-0 bg-void/0 transition-colors duration-700 group-hover:bg-void/10" />
        </div>
        <div className="mt-4 flex items-baseline justify-between">
          <h3 className="font-display text-lg text-ivory">{item.title}</h3>
          <span className="text-[11px] uppercase tracking-[0.18em] text-ivory/40">
            {item.year}
          </span>
        </div>
        <p className="mt-1 text-xs uppercase tracking-[0.18em] text-gold/80">
          {item.category} — {item.location}
        </p>
      </Link>
    </Reveal>
  );
}

export function FeaturedPreview() {
  return (
    <section className="border-t border-ivory/10 bg-anthracite/30">
      <div className="mx-auto max-w-7xl px-6 py-28 lg:px-10 lg:py-36">
        <Reveal>
          <div className="mb-16 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="mb-4 text-[11px] uppercase tracking-[0.3em] text-gold">
                {featuredSection.eyebrow}
              </p>
              <h2 className="max-w-xl font-display text-4xl leading-tight text-ivory lg:text-5xl">
                {featuredSection.title}
              </h2>
            </div>
            <CtaLink href={featuredSection.cta.href} variant="ghost">
              {featuredSection.cta.label}
            </CtaLink>
          </div>
        </Reveal>

        <div className="grid gap-x-8 gap-y-12 md:grid-cols-2">
          <Frame
            item={featured[0]}
            ratio="aspect-[3/4]"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <Frame
            item={featured[1]}
            ratio="aspect-[3/4]"
            sizes="(max-width: 768px) 100vw, 50vw"
            className="md:mt-20"
          />
          <Frame
            item={featured[2]}
            ratio="aspect-[16/10]"
            sizes="(max-width: 768px) 100vw, 100vw"
            className="md:col-span-2"
          />
        </div>
      </div>
    </section>
  );
}
