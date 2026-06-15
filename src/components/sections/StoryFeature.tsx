import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { type Story } from "@/data/stories";
import { media } from "@/lib/cloudinary";
import { Reveal } from "@/components/ui/Reveal";

export function StoryFeature({
  story,
  reverse,
}: {
  story: Story;
  reverse?: boolean;
}) {
  return (
    <article className="border-t border-ivory/10 py-14 lg:py-20">
      <Link
        href={`/stories/${story.slug}`}
        className="group grid items-center gap-8 lg:grid-cols-2 lg:gap-16"
      >
        <Reveal className={reverse ? "lg:order-2" : ""}>
          <div className="relative aspect-[4/3] w-full overflow-hidden">
            <Image
              src={media(story.cover, 1500)}
              alt={story.coverAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
            />
          </div>
        </Reveal>

        <Reveal delay={0.05} className={reverse ? "lg:order-1" : ""}>
          <p className="text-[11px] uppercase tracking-[0.25em] text-gold/80">
            {story.category} · {story.location}
          </p>
          <h2 className="mt-4 font-display text-3xl leading-tight text-ivory lg:text-5xl">
            {story.title}
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-ivory/60">
            {story.excerpt}
          </p>
          <div className="mt-7 flex flex-wrap gap-x-8 gap-y-2 text-[11px] uppercase tracking-[0.15em] text-ivory/40">
            <span>{story.date}</span>
            <span>{story.duration}</span>
            <span>{story.photos} photos</span>
          </div>
          <span className="mt-8 inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-ivory/80 transition-colors group-hover:text-gold">
            Lire le reportage
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={1.5} />
          </span>
        </Reveal>
      </Link>
    </article>
  );
}
