"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

/** Discreet mobile-only booking CTA. Appears after the hero, hidden on /booking. */
export function MobileBookingBar() {
  const pathname = usePathname();
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (pathname?.startsWith("/booking")) return null;

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 90 }}
          animate={{ y: 0 }}
          exit={{ y: 90 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-x-0 bottom-0 z-40 border-t border-ivory/10 bg-void/90 p-3 backdrop-blur-md md:hidden"
        >
          <Link
            href="/booking"
            className="flex w-full items-center justify-center border border-gold/60 py-3 text-sm uppercase tracking-[0.18em] text-ivory"
          >
            Réserver une séance
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
