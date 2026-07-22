import type { TranscriptExample } from "@/content-data/transcripts";
import { SpeakButton } from "./SpeakButton";
import styles from "./TranscriptDemo.module.css";

function TranscriptPane({
  heading,
  transcriptText,
  paneId,
  tone,
}: {
  heading: string;
  transcriptText: string;
  paneId: string;
  tone: "before" | "after";
}) {
  const transcriptId = `${paneId}-transcript`;

  return (
    <div className={`${styles.pane} ${styles[tone]}`}>
      <p className={styles.paneLabel}>
        {tone === "before" ? (
          <svg aria-hidden="true" viewBox="0 0 24 24" className={styles.paneIcon}>
            <path
              fill="currentColor"
              d="M12 3 1 21h22Zm0 5.5 7.53 11H4.47ZM11 10v5h2v-5Zm0 6.5v2h2v-2Z"
            />
          </svg>
        ) : (
          <svg aria-hidden="true" viewBox="0 0 24 24" className={styles.paneIcon}>
            <path
              fill="currentColor"
              d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm-1.2 14.6-4.4-4.4 1.4-1.4 3 3 6-6 1.4 1.4Z"
            />
          </svg>
        )}
        {heading}
      </p>
      <p id={transcriptId} className={styles.transcript}>
        &ldquo;{transcriptText}&rdquo;
      </p>
      <SpeakButton text={transcriptText} label={heading} />
    </div>
  );
}

export function TranscriptDemo({ example }: { example: TranscriptExample }) {
  const baseId = `demo-${example.id}`;

  return (
    <section aria-labelledby={`${baseId}-heading`} className={styles.section}>
      <h4 id={`${baseId}-heading`} className={styles.heading}>
        {example.label}
      </h4>
      <div className={styles.paneGrid}>
        <TranscriptPane
          heading="Without ListenLM"
          transcriptText={example.before.transcriptText}
          paneId={`${baseId}-before`}
          tone="before"
        />
        <TranscriptPane
          heading="With ListenLM"
          transcriptText={example.after.transcriptText}
          paneId={`${baseId}-after`}
          tone="after"
        />
      </div>
    </section>
  );
}
