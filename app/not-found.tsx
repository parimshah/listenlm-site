import Link from "next/link";
import styles from "./page.module.css";

export default function NotFound() {
  return (
    <section className={`container ${styles.pageHero}`}>
      <h1>Page not found</h1>
      <p className={styles.heroSub}>
        That page doesn&rsquo;t exist. Here&rsquo;s where you probably meant to go
        instead.
      </p>
      <div className={styles.heroActions}>
        <Link href="/" className={styles.primaryCta}>
          Go to the homepage
        </Link>
        <Link href="/contact" className={styles.secondaryCta}>
          Contact us
        </Link>
      </div>
    </section>
  );
}
