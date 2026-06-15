import Image from "next/image";
import { galleryHero } from "@/data/gallery";
import { media } from "@/lib/cloudinary";
import { ViewfinderFrame } from "@/components/ui/ViewfinderFrame";

export function GalleryHero() {
  return (
    <section className="relative h-[68vh] min-h-[440px] w-full overflow-hidden">
      <Image
        src={media(galleryHero.image, 2400)}
        alt={galleryHero.alt}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-void/45 via-void/20 to-void" />
      <ViewfinderFrame inset={18} size={24} animate />
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-end px-6 pb-14 lg:px-10 lg:pb-20">
        <p className="mb-4 text-[11px] uppercase tracking-[0.3em] text-gold">
          La collection
        </p>
        <h1 className="font-display text-5xl leading-none text-ivory sm:text-6xl lg:text-7xl">
          Galerie
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-ivory/75">
          {galleryHero.line}
        </p>
      </div>
    </section>
  );
}
