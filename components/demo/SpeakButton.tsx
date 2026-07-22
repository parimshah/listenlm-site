"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import styles from "./SpeakButton.module.css";

const noopSubscribe = () => () => {};

/**
 * Speaks a transcript aloud using the browser's speech synthesis, so a
 * sighted visitor can hear the same thing a screen reader would say.
 * Hidden entirely when the browser has no speech support.
 */
export function SpeakButton({ text, label }: { text: string; label: string }) {
  // Read support during render (SSR reports false) rather than setting state
  // in an effect, which keeps hydration stable and avoids a cascading render.
  const supported = useSyncExternalStore(
    noopSubscribe,
    () => "speechSynthesis" in window,
    () => false,
  );
  const [speaking, setSpeaking] = useState(false);

  // Stop any in-flight speech if this slide unmounts.
  useEffect(() => {
    return () => {
      if (typeof window !== "undefined" && "speechSynthesis" in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  function toggle() {
    if (!("speechSynthesis" in window)) return;
    window.speechSynthesis.cancel();
    if (speaking) {
      setSpeaking(false);
      return;
    }
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 1;
    utterance.onend = () => setSpeaking(false);
    utterance.onerror = () => setSpeaking(false);
    setSpeaking(true);
    window.speechSynthesis.speak(utterance);
  }

  if (!supported) return null;

  return (
    <button type="button" className={styles.button} onClick={toggle}>
      <svg viewBox="0 0 24 24" aria-hidden="true" className={styles.icon}>
        {speaking ? (
          <path fill="currentColor" d="M7 6h4v12H7Zm6 0h4v12h-4Z" />
        ) : (
          <path fill="currentColor" d="M8 5.5v13l11-6.5Z" />
        )}
      </svg>
      {speaking ? "Stop" : "Play"}
      <span className="visually-hidden"> {label}</span>
    </button>
  );
}
