import styles from "./SkipLink.module.css";

export function SkipLink() {
  return (
    <a href="#content" className={styles.skipLink}>
      Skip to main content
    </a>
  );
}
