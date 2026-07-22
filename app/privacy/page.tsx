import type { Metadata } from "next";
import styles from "../page.module.css";

export const metadata: Metadata = {
  title: "Privacy",
  description: "What ListenLM and this website do and don't collect.",
};

export default function PrivacyPage() {
  return (
    <>
      <section className={`container ${styles.pageHero}`}>
        <h1>Privacy</h1>
        <p className={styles.heroSub}>
          Short version: ListenLM does not send your conversations anywhere, and this
          website does not track you.
        </p>
      </section>

      <section className={`container ${styles.section}`}>
        <h2>The extension and CLI</h2>
        <p>
          ListenLM processes AI chat responses entirely on your own device. The browser
          extension reads and restructures the page you are already looking at; the CLI
          reads and restructures text already streaming to your own terminal. Nothing is
          sent to a ListenLM server. There is not one to send it to.
        </p>
      </section>

      <section className={`container ${styles.section}`}>
        <h2>This website</h2>
        <p>
          This site runs without analytics, tracking scripts, or cookies. We do not know
          you visited unless you tell us, for example by opening a GitHub issue.
        </p>
      </section>
    </>
  );
}
