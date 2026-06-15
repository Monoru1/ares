"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils/cn";

type Props = {
  /** Inset of the corner marks from the edge, in pixels. */
  inset?: number;
  /** Length of each corner arm, in pixels. */
  size?: number;
  /** Animate the marks drawing in on mount. */
  animate?: boolean;
  className?: string;
};

const CORNERS = [
  { key: "tl", style: { top: 0, left: 0 }, borders: "border-t border-l" },
  { key: "tr", style: { top: 0, right: 0 }, borders: "border-t border-r" },
  { key: "bl", style: { bottom: 0, left: 0 }, borders: "border-b border-l" },
  { key: "br", style: { bottom: 0, right: 0 }, borders: "border-b border-r" },
] as const;

/**
 * Signature element: gold viewfinder corner marks that frame any container.
 * Photographic vernacular — the "frame" of "every frame tells a story".
 */
export function ViewfinderFrame({
  inset = 20,
  size = 26,
  animate = false,
  className,
}: Props) {
  const reduce = useReducedMotion();
  const shouldAnimate = animate && !reduce;

  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute inset-0", className)}
      style={{ padding: inset }}
    >
      <div className="relative h-full w-full">
        {CORNERS.map((c, i) => (
          <motion.span
            key={c.key}
            className={cn("absolute border-gold/70", c.borders)}
            style={{ width: size, height: size, ...c.style }}
            initial={shouldAnimate ? { opacity: 0, scale: 0.6 } : false}
            animate={shouldAnimate ? { opacity: 1, scale: 1 } : undefined}
            transition={{
              duration: 0.7,
              delay: 0.9 + i * 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
          />
        ))}
      </div>
    </div>
  );
}
