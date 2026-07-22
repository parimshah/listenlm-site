import { BRANDS } from "./BrandLogos";
import styles from "./LogoStrip.module.css";

/**
 * Static row of brand logo + name. Scrolls horizontally on narrow screens
 * rather than duplicating or auto-animating, so nothing ever reads as a
 * repeated item.
 */
export function LogoStrip({ label }: { label: string }) {
  return (
    <ul className={styles.strip} aria-label={label}>
      {BRANDS.map((brand) => (
        <li key={brand.name} className={styles.item}>
          <span className={styles.tile}>{brand.mark}</span>
          <span className={styles.name}>{brand.name}</span>
        </li>
      ))}
    </ul>
  );
}
