import type { TranscriptExample } from "@/content-data/transcripts";
import styles from "./TranscriptDemo.module.css";

function TranscriptPane({
  heading,
  transcriptText,
  audioSrc,
  paneId,
  tone,
}: {
  heading: string;
  transcriptText: string;
  audioSrc?: string;
  paneId: string;
  tone: "before" | "after";
}) {
  const transcriptId = `${paneId}-transcript`;

  return (
    <div className={`${styles.pane} ${styles[tone]}`}>
      <p className={styles.paneLabel}>{heading}</p>
      <p id={transcriptId} className={styles.transcript}>
        &ldquo;{transcriptText}&rdquo;
      </p>
      {audioSrc ? (
        <audio
          controls
          src={audioSrc}
          aria-describedby={transcriptId}
          className={styles.audio}
        >
          <a href={audioSrc}>Download audio clip</a>
        </audio>
      ) : null}
    </div>
  );
}

export function TranscriptDemo({ example }: { example: TranscriptExample }) {
  const baseId = `demo-${example.id}`;

  return (
    <section aria-labelledby={`${baseId}-heading`} className={styles.section}>
      <h3 id={`${baseId}-heading`} className={styles.heading}>
        {example.label}
      </h3>
      <p className={styles.contextNote}>{example.contextNote}</p>
      <div className={styles.paneGrid}>
        <TranscriptPane
          heading="Without ListenLM"
          transcriptText={example.before.transcriptText}
          audioSrc={example.before.audioSrc}
          paneId={`${baseId}-before`}
          tone="before"
        />
        <TranscriptPane
          heading="With ListenLM"
          transcriptText={example.after.transcriptText}
          audioSrc={example.after.audioSrc}
          paneId={`${baseId}-after`}
          tone="after"
        />
      </div>
    </section>
  );
}
