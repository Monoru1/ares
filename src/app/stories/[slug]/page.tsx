import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { getStory, stories } from "@/data/stories";
import { media } from "@/lib/cloudinary";
import { Reveal } from "@/components/ui/Reveal";
import { ViewfinderFrame } from "@/components/ui/ViewfinderFrame";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return stories.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const story = getStory(slug);
  if (!story) return {};
  return { title: story.title, description: story.excerpt };
}

export default async function StoryPage({ params }: Params) {
  const { slug } = await params;
  const story = getStory(slug);
  if (!story) notFound();

  return (
    <main>
      <section className="relative h-[72vh] min-h-[440px] w-full overflow-hidden">
        <Image
          src={media(story.cover, 2000)}
          alt={story.coverAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-void/50 via-void/20 to-void" />
        <ViewfinderFrame inset={20} size={26} />
        <div className="relative z-10 mx-auto flex h-full max-w-5xl flex-col justify-end px-6 pb-16 lg:px-10">
          <p className="mb-5 text-[11px] uppercase tracking-[0.3em] text-gold">
            {story.category} · {story.location}
          </p>
          <h1 className="max-w-3xl font-display text-4xl leading-[1.05] text-ivory sm:text-6xl lg:text-7xl">
            {story.title}
          </h1>
        </div>
      </section>

      <article className="mx-auto max-w-3xl px-6 py-20 lg:py-28">
        <div className="mb-12 flex flex-wrap gap-x-10 gap-y-3 border-b border-ivory/10 pb-6 text-[11px] uppercase tracking-[0.2em] text-ivory/40">
          <span>{story.date}</span>
          <span>{story.location}</span>
          <span>{story.photos} photos</span>
        </div>

        <Reveal>
          <p className="font-display text-2xl leading-snug text-ivory lg:text-3xl">
            {story.intro}
          </p>
        </Reveal>

        <div className="mt-12 space-y-6">
          {story.paragraphs.map((p, i) => (
            <Reveal key={i} delay={0.03 * i}>
              <p className="text-base leading-relaxed text-ivory/70">{p}</p>
            </Reveal>
          ))}
        </div>
      </article>

      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-10">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {story.images.map((img, i) => (
            <Reveal
              key={img.src}
              delay={0.04 * i}
              className={i === 0 ? "sm:col-span-2 lg:col-span-1" : ""}
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden">
                <Image
                  src={media(img.src, 1100)}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6 pb-28 lg:px-10">
        <Link
          href="/stories"
          className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-ivory/60 transition-colors hover:text-gold"
        >
          <ArrowLeft className="h-4 w-4" strokeWidth={1.25} />
          Toutes les histoires
        </Link>
      </div>
    </main>
  );
}
