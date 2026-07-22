import Link from "next/link";
import styles from "./SiteFooter.module.css";

export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <p className={styles.tagline}>
          ListenLM. A free Chrome extension that makes AI chatbots work with your screen
          reader.
        </p>
        <nav aria-label="Footer" className={styles.nav}>
          <ul className={styles.navList}>
            <li>
              <Link href="/#demo">Demo</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
            <li>
              <Link href="/accessibility-statement">Accessibility statement</Link>
            </li>
            <li>
              <Link href="/privacy">Privacy</Link>
            </li>
          </ul>
        </nav>
        <p className={styles.legal}>Free to use. Made for screen reader users.</p>
      </div>
    </footer>
  );
}
