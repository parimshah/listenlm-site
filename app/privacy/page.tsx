import type { Metadata } from "next";
import { REPO_URL } from "@/lib/links";
import styles from "../page.module.css";

export const metadata: Metadata = {
  title: "Privacy",
  description: "What ListenLM and this website do and don't collect.",
};

export default function PrivacyPage() {
  return (
    <>
      <section className={`container ${styles.hero}`}>
        <h1>Privacy</h1>
        <p className={styles.heroSub}>
          Short version: ListenLM doesn&rsquo;t send your conversations anywhere, and this
          website doesn&rsquo;t track you.
        </p>
      </section>

      <section className={`container ${styles.section}`}>
        <h2>The extension and CLI</h2>
        <p>
          ListenLM processes AI chat responses entirely on your own device. The browser
          extension reads and restructures the page you&rsquo;re already looking at; the
          CLI reads and restructures text already streaming to your own terminal. Nothing
          is sent to a ListenLM server, because there isn&rsquo;t one &mdash;
          there&rsquo;s nothing to send it to.
        </p>
      </section>

      <section className={`container ${styles.section}`}>
        <h2>This website</h2>
        <p>
          This site runs without analytics, tracking scripts, or cookies. We don&rsquo;t
          know you visited unless you tell us &mdash; by opening a GitHub issue, for
          example.
        </p>
      </section>

      <section className={`container ${styles.section}`}>
        <h2>Questions</h2>
        <p>
          If anything here is unclear, or you think something we&rsquo;re doing
          doesn&rsquo;t match what&rsquo;s written above, tell us.
        </p>
        <p className={styles.moreLink}>
          <a href={`${REPO_URL}/issues`}>Open an issue on GitHub</a>
        </p>
      </section>
    </>
  );
}
