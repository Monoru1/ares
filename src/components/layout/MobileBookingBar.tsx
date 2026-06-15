"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export function MobileBookingBar() {
  const pathname = usePathname();
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 180);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (pathname?.startsWith("/booking")) return null;

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 90, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 90, opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-x-0 bottom-0 z-40 px-4 pb-4 md:hidden"
        >
          <Link
            href="/booking"
            className="mx-auto flex max-w-sm items-center justify-center rounded-full border border-gold/50 bg-void/85 px-5 py-3 text-[11px] uppercase tracking-[0.18em] text-ivory shadow-2xl shadow-black/40 backdrop-blur-md"
          >
            Réserver une séance
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
