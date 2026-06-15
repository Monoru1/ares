"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { hero } from "@/data/home";
import { media } from "@/lib/cloudinary";
import { CtaLink } from "@/components/ui/CtaLink";
import { ViewfinderFrame } from "@/components/ui/ViewfinderFrame";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);

  return (
    <section
      ref={ref}
      className="relative h-svh min-h-[560px] w-full overflow-hidden"
    >
      <motion.div
        style={reduce ? undefined : { y }}
        className="absolute inset-0 h-[112%]"
      >
        <Image
          src={media(hero.image, 2000)}
          alt={hero.imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-b from-void/30 via-void/15 to-void" />
      <div className="absolute inset-0 bg-gradient-to-r from-void/55 to-transparent" />

      <ViewfinderFrame inset={20} size={26} animate />

      <motion.div
        initial={reduce ? false : { opacity: 0, y: 20 }}
        animate={reduce ? undefined : { opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-end px-6 pb-20 lg:px-10 lg:pb-24"
      >
        <p className="mb-5 text-[11px] uppercase tracking-[0.3em] text-gold">
          {hero.eyebrow}
        </p>

        <h1 className="max-w-3xl font-display text-4xl leading-[1.08] text-ivory sm:text-5xl lg:text-6xl">
          {hero.titleLines.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </h1>

        <p className="mt-6 max-w-xl text-base leading-relaxed text-ivory/70">
          {hero.intro}
        </p>

        <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
          <CtaLink href={hero.primary.href}>{hero.primary.label}</CtaLink>
          <CtaLink href={hero.secondary.href} variant="ghost">
            {hero.secondary.label}
          </CtaLink>
        </div>
      </motion.div>
    </section>
  );
}
