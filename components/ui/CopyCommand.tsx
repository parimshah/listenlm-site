"use client";

import { useState } from "react";
import styles from "./CopyCommand.module.css";

export function CopyCommand({ command, label }: { command: string; label: string }) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(command);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  return (
    <div className={styles.wrap}>
      <pre className={styles.pre}>
        <code>{command}</code>
      </pre>
      <button type="button" onClick={handleCopy} className={styles.button}>
        {copied ? "Copied" : "Copy"}
        <span className="visually-hidden"> {label}</span>
      </button>
      <span role="status" className="visually-hidden">
        {copied ? "Command copied to clipboard." : ""}
      </span>
    </div>
  );
}
