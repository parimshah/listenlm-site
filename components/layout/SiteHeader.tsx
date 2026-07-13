"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./SiteHeader.module.css";

const NAV_LINKS = [
  { href: "/how-it-works", label: "How it works" },
  { href: "/download", label: "Download" },
  { href: "/about", label: "About" },
];

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <Link href="/" className={styles.wordmark}>
          ListenLM
        </Link>
        <nav aria-label="Primary" className={styles.nav}>
          <ul className={styles.navList}>
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={isActive ? "page" : undefined}
                    className={styles.navLink}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <Link href="/download" className={styles.cta}>
          Get ListenLM
        </Link>
      </div>
    </header>
  );
}
