"use client";

import { useEffect, useRef } from "react";

/**
 * Cursor-follow glow layer for a section (soft blue, purely decorative). It
 * never renders under prefers-reduced-motion (nothing to track a static
 * cursor against) and effects.css hides it under forced-colors/high
 * contrast preferences.
 */
export function Spotlight() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const el = ref.current;
    const parent = el?.parentElement;
    if (!el || !parent) return;

    function onMove(event: PointerEvent) {
      const rect = parent!.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 100;
      const y = ((event.clientY - rect.top) / rect.height) * 100;
      el!.style.setProperty("--x", `${x}%`);
      el!.style.setProperty("--y", `${y}%`);
    }

    parent.addEventListener("pointermove", onMove);
    return () => parent.removeEventListener("pointermove", onMove);
  }, []);

  if (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  ) {
    return null;
  }

  return <div ref={ref} className="spotlight" aria-hidden="true" />;
}
