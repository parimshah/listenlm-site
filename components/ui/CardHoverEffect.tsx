"use client";

import { useState, type ReactNode } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/cn";

type HoverItem = { key: string; content: ReactNode };

/**
 * Aceternity "Card Hover Effect" pattern: a soft glow tracks the mouse
 * across a grid of cards, sitting behind whichever one is hovered. Purely
 * decorative — card markup/content is rendered by the caller unchanged;
 * this only adds an absolutely-positioned background layer behind the
 * active card.
 */
export function CardHoverEffect({
  items,
  className,
}: {
  items: HoverItem[];
  className?: string;
}) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const reduceMotion = useReducedMotion();

  return (
    <div className={cn("grid grid-cols-1 gap-4 sm:grid-cols-3", className)}>
      {items.map((item, idx) => (
        <div
          key={item.key}
          className="relative h-full rounded-2xl p-2"
          onMouseEnter={() => setActiveIndex(idx)}
          onMouseLeave={() => setActiveIndex(null)}
        >
          <AnimatePresence>
            {activeIndex === idx && (
              <motion.span
                aria-hidden="true"
                className="absolute inset-0 rounded-2xl"
                style={{ background: "rgba(var(--color-accent-rgb), 0.14)" }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: reduceMotion ? 0 : 0.15 }}
              />
            )}
          </AnimatePresence>
          <div className="relative h-full">{item.content}</div>
        </div>
      ))}
    </div>
  );
}
