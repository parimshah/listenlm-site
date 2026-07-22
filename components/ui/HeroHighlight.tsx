"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import styles from "./HeroHighlight.module.css";

/**
 * Aceternity "Hero Highlight" marker effect, adapted to the site's warm
 * palette: a tinted background grows in behind the wrapped text like a
 * highlighter stroke. Purely decorative — the text node and its color are
 * unchanged, so this never affects what a screen reader announces.
 */
export function Highlight({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.span
      initial={reduceMotion ? false : { backgroundSize: "0% 100%" }}
      animate={{ backgroundSize: "100% 100%" }}
      transition={reduceMotion ? { duration: 0 } : { duration: 0.5, ease: "easeOut", delay: 0.15 }}
      style={{
        backgroundImage:
          "linear-gradient(100deg, rgba(var(--color-accent-rgb), 0.16), rgba(var(--color-accent-rgb), 0.24))",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "left center",
      }}
      className={cn("relative inline-block rounded-md px-1 pb-0.5", styles.highlight, className)}
    >
      {children}
    </motion.span>
  );
}
