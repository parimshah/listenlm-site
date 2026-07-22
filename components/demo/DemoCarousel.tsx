"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { TranscriptExample } from "@/content-data/transcripts";
import { TranscriptDemo } from "./TranscriptDemo";
import styles from "./DemoCarousel.module.css";

function prefersReducedMotion() {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

export function DemoCarousel({ examples }: { examples: TranscriptExample[] }) {
  const [index, setIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);
  const count = examples.length;
  const reduceMotion = useReducedMotion();

  const goTo = useCallback(
    (target: number) => {
      const clamped = Math.max(0, Math.min(count - 1, target));
      const track = trackRef.current;
      const slide = slideRefs.current[clamped];
      if (!track || !slide) return;
      const left = slide.offsetLeft - (track.clientWidth - slide.clientWidth) / 2;
      track.scrollTo({
        left,
        behavior: prefersReducedMotion() ? "auto" : "smooth",
      });
      setIndex(clamped);
    },
    [count],
  );

  // Keep the active index in sync when the user swipes or scrolls the track
  // directly, so the counter and dots stay accurate.
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const center = track.scrollLeft + track.clientWidth / 2;
        let nearest = 0;
        let nearestDistance = Infinity;
        slideRefs.current.forEach((slide, i) => {
          if (!slide) return;
          const slideCenter = slide.offsetLeft + slide.clientWidth / 2;
          const distance = Math.abs(slideCenter - center);
          if (distance < nearestDistance) {
            nearestDistance = distance;
            nearest = i;
          }
        });
        setIndex(nearest);
      });
    };
    track.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      track.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <motion.div
      className={styles.carousel}
      role="group"
      aria-roledescription="carousel"
      aria-label="Before and after demo examples"
      initial={reduceMotion ? false : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
    >
      <div className={styles.controls}>
        {/* Visually redundant with the card heading and dots, but kept as a
            live region so arrow-key/button navigation is still announced. */}
        <p className="visually-hidden" aria-live="polite">
          Example {index + 1} of {count}: {examples[index].label}
        </p>
        <div className={styles.buttons}>
          <button
            type="button"
            className={styles.navButton}
            onClick={() => goTo(index - 1)}
            disabled={index === 0}
          >
            <span aria-hidden="true">&#8592;</span>
            <span className="visually-hidden">Previous example</span>
          </button>
          <button
            type="button"
            className={styles.navButton}
            onClick={() => goTo(index + 1)}
            disabled={index === count - 1}
          >
            <span aria-hidden="true">&#8594;</span>
            <span className="visually-hidden">Next example</span>
          </button>
        </div>
      </div>

      <div
        className={styles.track}
        ref={trackRef}
        tabIndex={0}
        role="group"
        aria-label="Demo examples, scroll horizontally to move between them"
      >
        {examples.map((example, i) => (
          <div
            key={example.id}
            className={`${styles.slide} ${i === index ? styles.slideActive : ""}`}
            ref={(node) => {
              slideRefs.current[i] = node;
            }}
            role="group"
            aria-roledescription="slide"
            aria-label={`${i + 1} of ${count}`}
          >
            <TranscriptDemo example={example} />
          </div>
        ))}
      </div>

      <div className={styles.dots} role="group" aria-label="Jump to a demo example">
        {examples.map((example, i) => (
          <button
            key={example.id}
            type="button"
            aria-current={i === index ? "true" : undefined}
            aria-label={`Example ${i + 1}: ${example.label}`}
            className={`${styles.dot} ${i === index ? styles.dotActive : ""}`}
            onClick={() => goTo(i)}
          />
        ))}
      </div>
    </motion.div>
  );
}
