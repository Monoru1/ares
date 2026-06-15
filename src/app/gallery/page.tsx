import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { GalleryExperience } from "@/components/gallery/GalleryExperience";

export const metadata: Metadata = {
  title: "Galerie",
  description:
    "La collection ARÈS Studio : mariages, portraits, famille, événements, mode et corporate. Une sélection d'images captées avec une précision cinématographique.",
};

export default function GalleryPage() {
  return (
    <main>
      <PageHeader
        eyebrow="La collection"
        title="Galerie"
        intro="Six univers, une même exigence de lumière. Filtrez par catégorie, et ouvrez chaque image pour la voir en grand."
      />
      <GalleryExperience />
    </main>
  );
}
