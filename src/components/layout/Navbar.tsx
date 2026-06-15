"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { site } from "@/data/site";
import { cn } from "@/lib/utils/cn";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-colors duration-500",
          scrolled
            ? "border-b border-ivory/10 bg-void/82 backdrop-blur-md"
            : "border-b border-transparent bg-gradient-to-b from-void/60 to-transparent",
        )}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10 lg:py-5">
          <Link
            href="/"
            className="flex items-baseline gap-1 font-display text-xl tracking-[0.3em] text-ivory sm:text-2xl"
            aria-label={`${site.name} — accueil`}
          >
            {site.wordmark}
            <span className="text-gold">.</span>
          </Link>

          <ul className="hidden items-center gap-10 md:flex">
            {site.nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="group relative text-xs uppercase tracking-[0.18em] text-ivory/70 transition-colors hover:text-ivory"
                >
                  {item.label}
                  <span className="absolute -bottom-1.5 left-0 h-px w-full origin-left scale-x-0 bg-gold transition-transform duration-[400ms] ease-out group-hover:scale-x-100" />
                </Link>
              </li>
            ))}
          </ul>

          <button
            type="button"
            onClick={() => setOpen(true)}
            className="inline-flex items-center gap-3 rounded-full border border-ivory/12 bg-void/20 px-3 py-2 text-[10px] uppercase tracking-[0.18em] text-ivory/70 backdrop-blur-sm transition-colors hover:text-ivory md:hidden"
            aria-label="Ouvrir le menu"
            aria-expanded={open}
          >
            Menu
            <Menu className="h-5 w-5 text-ivory" strokeWidth={1.25} />
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[60] flex flex-col bg-void md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center justify-between px-6 py-5">
              <span className="font-display text-xl tracking-[0.3em] text-ivory">
                {site.wordmark}
                <span className="text-gold">.</span>
              </span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="inline-flex items-center gap-3 rounded-full border border-ivory/10 px-3 py-2 text-[10px] uppercase tracking-[0.18em] text-ivory/70"
                aria-label="Fermer le menu"
              >
                Fermer
                <X className="h-5 w-5 text-ivory" strokeWidth={1.25} />
              </button>
            </div>

            <nav className="flex flex-1 flex-col justify-center gap-2 px-6">
              {site.nav.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.06, duration: 0.5 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block border-b border-ivory/10 py-4 font-display text-[clamp(2.6rem,13vw,4.4rem)] leading-none text-ivory/90"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <div className="flex gap-6 px-6 py-8 text-xs uppercase tracking-[0.18em] text-ivory/50">
              {site.social.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noreferrer">
                  {s.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
