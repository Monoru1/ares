"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

function resetScrollPosition() {
  window.scrollTo({ top: 0, left: 0, behavior: "auto" });

  const lenis = window.aresLenis;

  if (lenis && typeof lenis.scrollTo === "function") {
    lenis.scrollTo(0, { immediate: true });
  }
}

export function RouteScrollReset() {
  const pathname = usePathname();

  useEffect(() => {
    resetScrollPosition();
  }, [pathname]);

  return null;
}
