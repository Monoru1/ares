import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { GalleryExperience } from "@/components/gallery/GalleryExperience";

export const metadata: Metadata = {
  title: "Galerie",
  description:
    "La galerie d'Arès Studio : mariage, portrait, couple, famille, événement et corporate. Filtrez par catégorie et ouvrez une image pour la voir en grand.",
};

export default function GalleryPage() {
  return (
    <main>
      <PageHeader
        eyebrow="La collection"
        title="Galerie"
        intro="Mariage, portrait, couple, famille, événement, corporate. Filtrez par catégorie et ouvrez une image pour la voir en grand."
      />
      <GalleryExperience />
    </main>
  );
}
