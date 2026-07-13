import type { Metadata } from "next";
import Link from "next/link";
import { TranscriptDemo } from "@/components/demo/TranscriptDemo";
import { transcriptExamples } from "@/content-data/transcripts";
import styles from "../page.module.css";

export const metadata: Metadata = {
  title: "How it works",
  description:
    "The mechanism behind ListenLM, plus a full before-and-after demo of what your screen reader hears.",
};

export default function HowItWorksPage() {
  return (
    <>
      <section className={`container ${styles.hero}`}>
        <h1>How ListenLM works</h1>
        <p className={styles.heroSub}>
          No account, no configuration screen, no new vocabulary to learn. Here&rsquo;s
          what&rsquo;s actually happening underneath.
        </p>
      </section>

      <section className={`container ${styles.section}`}>
        <h2>The mechanism</h2>
        <ol className={styles.stepList}>
          <li>
            A lightweight observer watches the conversation for new or changing content
            &mdash; no polling, no delay you&rsquo;d notice.
          </li>
          <li>
            When a response appears, ListenLM walks its rendered HTML and adds the
            structure that was missing: code blocks get a spoken label and a clear
            boundary, tables get real column headers, headings get their level announced,
            and each chat turn becomes a landmark you can jump straight to.
          </li>
          <li>
            A single live region announces that a response has finished, without cutting
            off whatever your screen reader is already reading aloud.
          </li>
        </ol>
        <p>
          Open a browser inspector and the markup looks the same to a sighted developer.
          Only the accessibility tree gains what should have been there from the start.
        </p>
      </section>

      <section className={`container ${styles.section}`} id="demo">
        <h2>Hear it for yourself</h2>
        <p>
          Four common patterns in AI responses, each read the way most screen readers hear
          them today, and the way ListenLM announces them instead.
        </p>
        {transcriptExamples.map((example) => (
          <TranscriptDemo key={example.id} example={example} />
        ))}
      </section>

      <section className={`container ${styles.section}`}>
        <h2>Platform by platform</h2>
        <ul className={styles.problemList}>
          <li>
            <strong>claude.ai</strong>{" "}
            {
              "has the deepest coverage: chat turns are marked as regions, and when a response finishes you also hear a short manifest — how many code blocks, and which files were referenced."
            }
          </li>
          <li>
            <strong>ChatGPT, Gemini, and Copilot</strong>{" "}
            {
              "run the same transform pipeline on a best-effort basis. Their DOM structure isn’t guaranteed to stay stable as those products change, so selectors get maintained and updated as needed."
            }
          </li>
          <li>
            <strong>VS Code and Cursor</strong>{" "}
            {
              "get the same structure injected directly into the chat panel, tested against NVDA, JAWS, VoiceOver, and Orca."
            }
          </li>
          <li>
            <strong>The terminal CLI</strong>{" "}
            {
              "takes a different path entirely: it strips ANSI escape codes and spinner animations, parses the response’s markdown structure, and speaks a plain-text structural summary instead of raw terminal output."
            }
          </li>
        </ul>
        <p className={styles.moreLink}>
          <Link href="/download">Install it for your platform</Link>
        </p>
      </section>
    </>
  );
}
