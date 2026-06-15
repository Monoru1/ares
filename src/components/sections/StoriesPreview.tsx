import Image from "next/image";
import Link from "next/link";
import { storiesSection } from "@/data/home";
import { stories } from "@/data/stories";
import { media } from "@/lib/cloudinary";
import { Reveal } from "@/components/ui/Reveal";
import { CtaLink } from "@/components/ui/CtaLink";

export function StoriesPreview() {
  const items = stories.slice(0, 3);
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
      <Reveal>
        <div className="mb-12 flex items-end justify-between gap-6">
          <div>
            <p className="mb-3 text-[11px] uppercase tracking-[0.3em] text-gold">
              {storiesSection.eyebrow}
            </p>
            <h2 className="max-w-xl font-display text-3xl text-ivory lg:text-4xl">
              {storiesSection.title}
            </h2>
          </div>
          <CtaLink href={storiesSection.cta.href} variant="ghost">
            {storiesSection.cta.label}
          </CtaLink>
        </div>
      </Reveal>

      <div className="grid gap-8 md:grid-cols-3">
        {items.map((story, i) => (
          <Reveal key={story.slug} delay={0.05 * i}>
            <Link href={`/stories/${story.slug}`} className="group block">
              <div className="relative aspect-[3/2] w-full overflow-hidden">
                <Image
                  src={media(story.cover, 1100)}
                  alt={story.coverAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
              </div>
              <p className="mt-4 text-[11px] uppercase tracking-[0.18em] text-gold/80">
                {story.category} · {story.location}
              </p>
              <h3 className="mt-2 font-display text-xl text-ivory">
                {story.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ivory/55">
                {story.excerpt}
              </p>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
