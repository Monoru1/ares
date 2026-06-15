"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import {
  categories,
  categoryBlurbs,
  gallery,
  type Category,
} from "@/data/gallery";
import { media } from "@/lib/cloudinary";
import { cn } from "@/lib/utils/cn";

export function GalleryExperience() {
  const [active, setActive] = useState<Category>("Tout");
  const [index, setIndex] = useState<number | null>(null);

  const items = useMemo(
    () =>
      active === "Tout" ? gallery : gallery.filter((g) => g.category === active),
    [active],
  );

  const current = index !== null ? items[index] : null;

  const close = useCallback(() => setIndex(null), []);
  const prev = useCallback(
    () =>
      setIndex((i) => (i === null ? i : (i - 1 + items.length) % items.length)),
    [items.length],
  );
  const next = useCallback(
    () => setIndex((i) => (i === null ? i : (i + 1) % items.length)),
    [items.length],
  );

  useEffect(() => {
    setIndex(null);
  }, [active]);

  useEffect(() => {
    if (current === null) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [current, close, prev, next]);

  return (
    <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
      {/* Filters — scrollable on mobile */}
      <div className="-mx-6 flex gap-x-7 overflow-x-auto border-b border-ivory/10 px-6 pb-4 [scrollbar-width:none] lg:mx-0 lg:px-0 [&::-webkit-scrollbar]:hidden">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setActive(cat)}
            className={cn(
              "shrink-0 py-1 text-xs uppercase tracking-[0.18em] transition-colors",
              active === cat ? "text-gold" : "text-ivory/50 hover:text-ivory",
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="mt-5 mb-10 h-5">
        <AnimatePresence mode="wait">
          <motion.p
            key={active}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="text-sm text-ivory/45"
          >
            {categoryBlurbs[active]}
          </motion.p>
        </AnimatePresence>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="columns-1 gap-5 sm:columns-2 lg:columns-3"
        >
          {items.map((item, i) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setIndex(i)}
              className="group mb-5 block w-full break-inside-avoid overflow-hidden text-left"
              aria-label={`Ouvrir ${item.title}`}
            >
              <div className={cn("relative w-full overflow-hidden", item.aspect)}>
                <Image
                  src={media(item.image, 900)}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                />
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-void/80 via-void/10 to-void/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <div className="p-5">
                    <p className="font-display text-lg text-ivory">{item.title}</p>
                    <p className="mt-0.5 text-[11px] uppercase tracking-[0.18em] text-gold/90">
                      {item.category} — {item.location}
                    </p>
                  </div>
                </div>
              </div>
            </button>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Lightbox */}
      <AnimatePresence>
        {current && (
          <motion.div
            className="fixed inset-0 z-[70] flex flex-col bg-void/96 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={close}
            role="dialog"
            aria-modal="true"
            aria-label={current.title}
          >
            <div
              className="flex items-center justify-between px-5 py-4 sm:px-6 sm:py-5"
              onClick={(e) => e.stopPropagation()}
            >
              <span className="text-[11px] uppercase tracking-[0.2em] text-ivory/50">
                {(index ?? 0) + 1} / {items.length}
              </span>
              <button
                type="button"
                onClick={close}
                aria-label="Fermer"
                className="flex h-10 w-10 items-center justify-center text-ivory/80 transition-colors hover:text-gold"
              >
                <X className="h-6 w-6" strokeWidth={1.25} />
              </button>
            </div>

            <div
              className="relative flex flex-1 items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={prev}
                aria-label="Image précédente"
                className="absolute left-0 top-0 z-10 flex h-full w-16 items-center justify-start pl-2 text-ivory/50 transition-colors hover:text-gold sm:w-20 sm:pl-4"
              >
                <ChevronLeft className="h-7 w-7" strokeWidth={1} />
              </button>

              <motion.div
                key={current.id}
                className="relative h-full w-full px-16 sm:px-20"
                initial={{ opacity: 0, scale: 0.99 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              >
                <Image
                  src={media(current.image, 1800)}
                  alt={current.alt}
                  fill
                  sizes="100vw"
                  className="object-contain"
                />
              </motion.div>

              <button
                type="button"
                onClick={next}
                aria-label="Image suivante"
                className="absolute right-0 top-0 z-10 flex h-full w-16 items-center justify-end pr-2 text-ivory/50 transition-colors hover:text-gold sm:w-20 sm:pr-4"
              >
                <ChevronRight className="h-7 w-7" strokeWidth={1} />
              </button>
            </div>

            <div
              className="px-6 py-6 text-center"
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="font-display text-xl text-ivory sm:text-2xl">
                {current.title}
              </h2>
              <p className="mt-1.5 text-[11px] uppercase tracking-[0.2em] text-gold/90">
                {current.category} — {current.location} · {current.year}
              </p>
              <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-ivory/60">
                {current.description}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
