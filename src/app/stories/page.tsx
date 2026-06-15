import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { StoryFeature } from "@/components/sections/StoryFeature";
import { stories } from "@/data/stories";

export const metadata: Metadata = {
  title: "Histoires",
  description:
    "Chaque commande devient un récit. Mariages, portraits et campagnes mode racontés comme un magazine photographique.",
};

export default function StoriesPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Le magazine"
        title="Histoires photographiques"
        intro="Derrière chaque série, il y a une journée, des gens et une lumière. Voici quelques-unes de ces histoires, racontées en images."
      />
      <div className="mx-auto max-w-7xl px-6 pb-24 lg:px-10">
        {stories.map((story, i) => (
          <StoryFeature key={story.slug} story={story} reverse={i % 2 === 1} />
        ))}
      </div>
    </main>
  );
}
