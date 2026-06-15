import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { StoryFeature } from "@/components/sections/StoryFeature";
import { stories } from "@/data/stories";
import { media } from "@/lib/cloudinary";

export const metadata: Metadata = {
  title: "Histoires",
  description:
    "Chaque commande devient un récit. Mariages, portraits et campagnes mode racontés comme un magazine photographique.",
};

export default function StoriesPage() {
  const cover = stories[0];

  return (
    <main>
      <PageHeader
        eyebrow="Le magazine"
        title="Histoires photo"
        intro="Derrière chaque série, il y a une journée, des gens et une lumière. Quelques reportages, racontés sans en faire trop."
        image={media(cover.cover, 1400)}
        imageAlt={cover.title}
        meta="Reportages réels · Mariage · Portrait · Famille"
      />
      <div className="mx-auto max-w-7xl px-6 pb-24 lg:px-10">
        {stories.map((story, i) => (
          <StoryFeature key={story.slug} story={story} reverse={i % 2 === 1} />
        ))}
      </div>
    </main>
  );
}
