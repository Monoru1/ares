import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { getStory, stories } from "@/data/stories";
import { media } from "@/lib/cloudinary";
import { Reveal } from "@/components/ui/Reveal";
import { CtaLink } from "@/components/ui/CtaLink";

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

function Label({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-6 text-[11px] uppercase tracking-[0.3em] text-gold">
      {children}
    </p>
  );
}

export default async function StoryPage({ params }: Params) {
  const { slug } = await params;
  const story = getStory(slug);
  if (!story) notFound();

  const facts = [
    { label: "Lieu", value: story.location },
    { label: "Type", value: story.sessionType },
    { label: "Durée", value: story.duration },
    { label: "Livraison", value: story.delivery },
  ];

  return (
    <main>
      {/* Cover */}
      <section className="relative h-[80vh] min-h-[460px] w-full overflow-hidden">
        <Image
          src={media(story.cover, 2400)}
          alt={story.coverAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-void/45 via-void/15 to-void" />
        <div className="relative z-10 mx-auto flex h-full max-w-5xl flex-col justify-end px-6 pb-14 lg:px-10 lg:pb-20">
          <p className="mb-5 text-[11px] uppercase tracking-[0.3em] text-gold">
            {story.category} · {story.date}
          </p>
          <h1 className="max-w-3xl font-display text-4xl leading-[1.05] text-ivory sm:text-6xl lg:text-7xl">
            {story.title}
          </h1>
        </div>
      </section>

      {/* Facts */}
      <section className="border-b border-ivory/10">
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-y-6 px-6 py-8 sm:grid-cols-4 lg:px-10">
          {facts.map((f) => (
            <div key={f.label}>
              <p className="text-[11px] uppercase tracking-[0.2em] text-ivory/40">
                {f.label}
              </p>
              <p className="mt-1.5 text-sm text-ivory/80">{f.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contexte */}
      <article className="mx-auto max-w-3xl px-6 pt-20 lg:pt-28">
        <Reveal>
          <Label>Le contexte</Label>
          <p className="font-display text-2xl leading-snug text-ivory lg:text-3xl">
            {story.intro}
          </p>
        </Reveal>
      </article>

      {/* Déroulé */}
      <article className="mx-auto max-w-3xl px-6 py-16 lg:py-20">
        <Reveal>
          <Label>Le déroulé</Label>
        </Reveal>
        <div className="space-y-6">
          {story.paragraphs.map((p, i) => (
            <Reveal key={i} delay={0.03 * i}>
              <p className="text-base leading-relaxed text-ivory/70">{p}</p>
            </Reveal>
          ))}
        </div>
      </article>

      {/* Images */}
      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-10 lg:py-16">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
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

      {/* Résultat */}
      <section className="border-t border-ivory/10 bg-anthracite/20">
        <div className="mx-auto max-w-3xl px-6 py-20 lg:py-24">
          <Reveal>
            <Label>Le résultat</Label>
            <p className="font-display text-2xl leading-snug text-ivory lg:text-3xl">
              {story.result}
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
              <CtaLink href="/booking">Réserver une séance</CtaLink>
              <Link
                href="/stories"
                className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-ivory/60 transition-colors hover:text-gold"
              >
                <ArrowLeft className="h-4 w-4" strokeWidth={1.25} />
                Tous les reportages
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
