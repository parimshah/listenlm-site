import Link from "next/link";
import styles from "./SiteFooter.module.css";

export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <p className={styles.tagline}>
          ListenLM. Built by a screen reader team, held to the same standard it ships.
        </p>
        <nav aria-label="Footer" className={styles.nav}>
          <ul className={styles.navList}>
            <li>
              <Link href="/how-it-works">How it works</Link>
            </li>
            <li>
              <Link href="/download">Download</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/accessibility-statement">Accessibility statement</Link>
            </li>
            <li>
              <Link href="/privacy">Privacy</Link>
            </li>
            <li>
              <a href="https://github.com/JacquelineDMcGraw/claude-a11y">GitHub</a>
            </li>
          </ul>
        </nav>
        <p className={styles.legal}>Released under the MIT license.</p>
      </div>
    </footer>
  );
}
