import Link from "next/link";
import { TranscriptDemo } from "@/components/demo/TranscriptDemo";
import { transcriptExamples } from "@/content-data/transcripts";
import styles from "./page.module.css";

export default function HomePage() {
  const codeBlockExample = transcriptExamples.find((e) => e.id === "code-block")!;

  return (
    <>
      <section className={`container ${styles.hero}`}>
        <h1>
          Same screen reader. Same shortcuts. AI chat that finally reads back correctly.
        </h1>
        <p className={styles.heroSub}>
          ListenLM runs quietly underneath VoiceOver, NVDA, JAWS, and Orca &mdash; across
          Claude, ChatGPT, Gemini, and Copilot, plus your coding tools &mdash; so nothing
          about how you work has to change.
        </p>
        <div className={styles.heroActions}>
          <Link href="/download" className={styles.primaryCta}>
            Get ListenLM
          </Link>
          <Link href="/how-it-works#demo" className={styles.secondaryCta}>
            Hear the difference
          </Link>
        </div>
      </section>

      <section className={`container ${styles.section}`}>
        <h2>Right now, AI chat is not built for a screen reader.</h2>
        <p>
          Ask Claude for a function and your screen reader reads back a wall of
          punctuation instead of code. Headings get called out as literal hash marks.
          Links turn into raw URLs read character by character. None of that is your
          screen reader failing &mdash; it&rsquo;s that the page was never labeled for
          one.
        </p>
        <ul className={styles.problemList}>
          <li>
            Code blocks announced as raw punctuation instead of &ldquo;Python code
            block.&rdquo;
          </li>
          <li>Bold text and headings read as literal symbols instead of structure.</li>
          <li>No way to jump between messages, responses, or code blocks by landmark.</li>
          <li>
            Long responses interrupt themselves mid-sentence as new text streams in.
          </li>
        </ul>
      </section>

      <section className={`container ${styles.section}`} id="demo">
        <h2>Hear the difference</h2>
        <p>
          One response, read two ways &mdash; once as an unlabeled AI response reaches
          most screen readers today, and once with ListenLM running.
        </p>
        <TranscriptDemo example={codeBlockExample} />
        <p className={styles.moreLink}>
          <Link href="/how-it-works#demo">See all four examples in the full demo</Link>
        </p>
      </section>

      <section className={`container ${styles.section}`}>
        <h2>What it actually does</h2>
        <ol className={styles.stepList}>
          <li>
            <strong>Watches.</strong>{" "}
            {"A lightweight observer notices new AI responses as they render."}
          </li>
          <li>
            <strong>Labels.</strong>{" "}
            {
              "It adds real structure in place — landmarks, code-block labels, table headers — without touching what’s on screen."
            }
          </li>
          <li>
            <strong>Announces once.</strong>{" "}
            {
              "When a response finishes, your screen reader hears a single, clear “response complete,” not a stream of interruptions."
            }
          </li>
        </ol>
        <p>
          The page looks exactly the same to anyone sighted. Only what gets announced
          changes.
        </p>
        <p className={styles.moreLink}>
          <Link href="/how-it-works">Read the full technical breakdown</Link>
        </p>
      </section>

      <section className={`container ${styles.section}`}>
        <h2>Where it works</h2>
        <div className={styles.tableWrap}>
          <table className={styles.supportTable}>
            <caption className="visually-hidden">
              Platform coverage and screen reader compatibility
            </caption>
            <thead>
              <tr>
                <th scope="col">Surface</th>
                <th scope="col">Coverage</th>
                <th scope="col">Screen readers</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">claude.ai</th>
                <td>
                  <span className={styles.badgeSolid}>Fully covered</span>
                </td>
                <td>VoiceOver, NVDA, JAWS, Orca</td>
              </tr>
              <tr>
                <th scope="row">ChatGPT, Gemini, Copilot</th>
                <td>
                  <span className={styles.badgePartial}>Best-effort</span> &mdash;
                  maintained as these sites change
                </td>
                <td>VoiceOver, NVDA, JAWS, Orca</td>
              </tr>
              <tr>
                <th scope="row">VS Code / Cursor</th>
                <td>
                  <span className={styles.badgeSolid}>Fully covered</span>
                </td>
                <td>NVDA, JAWS, VoiceOver, Orca</td>
              </tr>
              <tr>
                <th scope="row">Terminal / CLI</th>
                <td>
                  <span className={styles.badgeSolid}>Fully covered</span>
                </td>
                <td>Any screen reader, any terminal</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className={`container ${styles.section}`}>
        <h2>This isn&rsquo;t a fringe problem</h2>
        <p>
          Independent research &mdash; including the WebAIM Screen Reader User Survey and
          the study &ldquo;Screen Reader Programmers in the Vibe Coding Era&rdquo; (arXiv
          2506.13270) &mdash; documents the same pattern: AI coding and chat tools are
          broadly inaccessible to screen reader users by default. Two feature requests
          filed directly against Claude Code &mdash; one asking for an
          NVDA/JAWS-compatible mode, one asking for a no-ANSI flag for screen readers
          &mdash; remain open on GitHub today. ListenLM exists because that gap
          hasn&rsquo;t been closed upstream yet.
        </p>
      </section>

      <section className={`container ${styles.closing}`}>
        <h2>Get ListenLM</h2>
        <p>Free, open source, and running in minutes.</p>
        <div className={styles.heroActions}>
          <Link href="/download" className={styles.primaryCta}>
            Get ListenLM
          </Link>
          <Link href="/about" className={styles.secondaryCta}>
            Read why we built it
          </Link>
        </div>
      </section>
    </>
  );
}
