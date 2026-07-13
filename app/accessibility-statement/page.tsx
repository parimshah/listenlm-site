import type { Metadata } from "next";
import { REPO_URL } from "@/lib/links";
import styles from "../page.module.css";

export const metadata: Metadata = {
  title: "Accessibility statement",
  description:
    "ListenLM's accessibility conformance target, testing process, and how to report a barrier.",
};

export default function AccessibilityStatementPage() {
  return (
    <>
      <section className={`container ${styles.hero}`}>
        <h1>Accessibility statement</h1>
        <p className={styles.heroSub}>
          This statement covers this website, the one you&rsquo;re reading right now. For
          what the extension itself changes on third-party chat sites, see{" "}
          <a href="/how-it-works">How it works</a>.
        </p>
      </section>

      <section className={`container ${styles.section}`}>
        <h2>Conformance target</h2>
        <p>
          This site targets WCAG 2.2 Level AA across every page, and Level AAA where it
          doesn&rsquo;t conflict with AA requirements &mdash; including color contrast,
          keyboard operability, and reflow at 400% zoom.
        </p>
      </section>

      <section className={`container ${styles.section}`}>
        <h2>How we test</h2>
        <ul className={styles.problemList}>
          <li>Automated scans with axe-core and Lighthouse on every change.</li>
          <li>Manual passes with VoiceOver, NVDA, JAWS, and Orca before each release.</li>
          <li>Full keyboard-only navigation, with no mouse involved.</li>
          <li>
            Reflow checks at 320px width and 400% browser zoom, and checks under
            forced-colors and reduced-motion settings.
          </li>
        </ul>
      </section>

      <section className={`container ${styles.section}`}>
        <h2>Known limitations</h2>
        <p>
          This site is new. If you find a gap between this statement and your actual
          experience using it, that&rsquo;s a bug we want to fix, not a limitation
          we&rsquo;re accepting. Tell us and we&rsquo;ll treat it like any other defect.
        </p>
      </section>

      <section className={`container ${styles.section}`}>
        <h2>Report a barrier</h2>
        <p>
          If something on this site doesn&rsquo;t work with your screen reader, your
          keyboard, or your browser&rsquo;s zoom or high-contrast settings, we want to
          hear about it. We read every report and aim to respond within a few days.
        </p>
        <p className={styles.moreLink}>
          <a href={`${REPO_URL}/issues`}>Open an issue on GitHub</a>
        </p>
        <p>
          Last reviewed: <time dateTime="2026-07-13">July 13, 2026</time>.
        </p>
      </section>
    </>
  );
}
