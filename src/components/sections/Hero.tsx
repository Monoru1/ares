"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { hero } from "@/data/home";
import { media } from "@/lib/cloudinary";
import { CtaLink } from "@/components/ui/CtaLink";
import { ViewfinderFrame } from "@/components/ui/ViewfinderFrame";

const EASE = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const indicatorOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative h-svh min-h-[600px] w-full overflow-hidden"
    >
      <motion.div
        style={reduce ? undefined : { y }}
        className="absolute inset-0 h-[118%]"
      >
        <Image
          src={media(hero.image, 2000)}
          alt={hero.imageAlt}
          fill
          priority
          sizes="100vw"
          className="hero-kenburns object-cover"
        />
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-b from-void/40 via-void/20 to-void" />
      <div className="absolute inset-0 bg-gradient-to-r from-void/60 to-transparent" />

      <ViewfinderFrame inset={20} size={28} animate />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-end px-6 pb-24 lg:px-10 lg:pb-28">
        <motion.p
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8, ease: EASE }}
          className="mb-6 text-[11px] uppercase tracking-[0.35em] text-gold"
        >
          {hero.eyebrow}
        </motion.p>

        <h1 className="max-w-4xl font-display text-5xl leading-[1.05] text-ivory sm:text-6xl lg:text-8xl">
          {hero.titleLines.map((line, i) => (
            <span key={line} className="block overflow-hidden pb-[0.08em]">
              <motion.span
                className="block"
                initial={reduce ? false : { y: "110%" }}
                animate={reduce ? undefined : { y: "0%" }}
                transition={{ delay: 0.2 + i * 0.12, duration: 1, ease: EASE }}
              >
                {line}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          initial={reduce ? false : { opacity: 0 }}
          animate={reduce ? undefined : { opacity: 1 }}
          transition={{ delay: 0.95, duration: 0.9 }}
          className="mt-8 max-w-md text-base leading-relaxed text-ivory/70"
        >
          {hero.intro}
        </motion.p>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 14 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.8, ease: EASE }}
          className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6"
        >
          <CtaLink href={hero.primary.href}>{hero.primary.label}</CtaLink>
          <CtaLink href={hero.secondary.href} variant="ghost">
            {hero.secondary.label}
          </CtaLink>
        </motion.div>
      </div>

      {!reduce && (
        <motion.div
          style={{ opacity: indicatorOpacity }}
          className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-3 sm:flex"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] text-ivory/50">
            Scroll
          </span>
          <span className="relative h-12 w-px overflow-hidden bg-ivory/20">
            <motion.span
              className="absolute inset-x-0 top-0 h-1/2 bg-gold"
              animate={{ y: ["-110%", "210%"] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
            />
          </span>
        </motion.div>
      )}
    </section>
  );
}
