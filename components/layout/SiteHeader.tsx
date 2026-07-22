"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/cn";
import styles from "./SiteHeader.module.css";

const NAV_LINKS = [
  { href: "/#demo", label: "Demo" },
  { href: "/contact", label: "Contact" },
];

/**
 * Aceternity "Floating Navbar" pattern, adapted: after a small scroll
 * threshold the bar detaches from the top edge into a rounded, shadowed
 * pill. Purely a visual/CSS-driven state change — nav landmark, links, and
 * their order never change, so keyboard/skip-link behavior is unaffected.
 */
export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 8);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={cn(styles.header, scrolled && styles.headerScrolled)}>
      <div className={cn(styles.inner, scrolled && styles.innerScrolled)}>
        <Link href="/" className={styles.wordmark}>
          ListenLM
        </Link>
        <nav aria-label="Primary" className={styles.nav}>
          <ul className={styles.navList}>
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className={styles.navLink}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <Link href="/#get" className={cn(styles.cta, "hoverBorderGradient")}>
          Get ListenLM
        </Link>
      </div>
    </header>
  );
}
