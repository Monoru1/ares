import Image from "next/image";
import { fullBleed } from "@/data/home";
import { media } from "@/lib/cloudinary";

export function FullBleed() {
  return (
    <section className="relative h-[62vh] min-h-[400px] w-full overflow-hidden">
      <Image
        src={media(fullBleed.image, 2400)}
        alt={fullBleed.alt}
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-void/55" />
      <div className="relative z-10 flex h-full items-center justify-center px-6">
        <p className="max-w-2xl text-center font-display text-2xl leading-snug text-ivory sm:text-3xl lg:text-4xl">
          {fullBleed.line}
        </p>
      </div>
    </section>
  );
}
