import type { Metadata } from "next";
import Link from "next/link";
import styles from "../page.module.css";

export const metadata: Metadata = {
  title: "Accessibility statement",
  description:
    "ListenLM's accessibility conformance target, testing process, and how to report a barrier.",
};

export default function AccessibilityStatementPage() {
  return (
    <>
      <section className={`container ${styles.pageHero}`}>
        <h1>Accessibility statement</h1>
        <p className={styles.heroSub}>
          This statement covers this website, the one you are reading right now. For what
          the extension itself changes on third-party chat sites, see{" "}
          <Link href="/#how-it-works">How it works</Link>.
        </p>
      </section>

      <section className={`container ${styles.section}`}>
        <h2>Conformance target</h2>
        <p>
          This site targets WCAG 2.2 Level AA across every page, and Level AAA where it
          does not conflict with AA requirements, including color contrast, keyboard
          operability, and reflow at 400% zoom.
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
          experience using it, treat it as a bug and tell us. We will fix it the same way
          we would fix any other defect.
        </p>
      </section>
    </>
  );
}
