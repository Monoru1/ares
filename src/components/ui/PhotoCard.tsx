import Image from "next/image";
import Link from "next/link";
import { media } from "@/lib/cloudinary";
import { cn } from "@/lib/utils/cn";

type Props = {
  image: string;
  alt: string;
  caption?: string;
  ratio?: string;
  href?: string;
  sizes?: string;
  priority?: boolean;
  className?: string;
  width?: number;
};

/** Reusable photo tile: subtle zoom + caption that fades up on hover/focus. */
export function PhotoCard({
  image,
  alt,
  caption,
  ratio = "aspect-[3/4]",
  href,
  sizes = "(max-width: 768px) 100vw, 50vw",
  priority,
  className,
  width = 1400,
}: Props) {
  const inner = (
    <div className={cn("relative w-full overflow-hidden", ratio)}>
      <Image
        src={media(image, width)}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className="object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
      />
      {caption && (
        <>
          <div className="absolute inset-0 bg-gradient-to-t from-void/70 via-void/0 to-void/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-focus-visible:opacity-100" />
          <p className="absolute bottom-0 left-0 translate-y-2 p-4 text-[11px] uppercase tracking-[0.18em] text-ivory opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100">
            {caption}
          </p>
        </>
      )}
    </div>
  );

  if (href) {
    return (
      <Link href={href} className={cn("group block", className)}>
        {inner}
      </Link>
    );
  }
  return <div className={cn("group block", className)}>{inner}</div>;
}
