import type { Metadata } from "next";
import { REPO_URL } from "@/lib/links";
import styles from "../page.module.css";

export const metadata: Metadata = {
  title: "About",
  description: "Who builds ListenLM, and why.",
};

/**
 * TODO(team): replace the generic team description below with real names,
 * school/program affiliation, and direct quotes once supplied — nothing
 * here should stay this general once the team wants to be specific.
 */
export default function AboutPage() {
  return (
    <>
      <section className={`container ${styles.hero}`}>
        <h1>About ListenLM</h1>
        <p className={styles.heroSub}>
          ListenLM is built by a small team of high school students from Maryland &mdash;
          blind and low-vision ourselves, and serious about computer science.
        </p>
      </section>

      <section className={`container ${styles.section}`}>
        <h2>Why we built it</h2>
        <p>
          Between classes, competitions, and our own projects, we were already spending
          hours a day talking to AI chat tools for help with code. Screen readers were
          never part of how those products got tested. Code came out as a wall of
          punctuation. Headings and links lost their structure. Every time a response
          streamed in, our screen readers tripped over themselves trying to keep up.
        </p>
        <p>We got tired of working around it, so we built the fix instead.</p>
      </section>

      <section className={`container ${styles.section}`}>
        <h2>What we&rsquo;re building toward</h2>
        <p>
          ListenLM started as a browser extension for a single chat site and now covers
          Claude, ChatGPT, Gemini, and Copilot, plus the editors and terminals we actually
          write code in. We&rsquo;re students, not a company with a roadmap department
          &mdash; new coverage ships when we run into the next thing that doesn&rsquo;t
          work.
        </p>
      </section>

      <section className={`container ${styles.section}`}>
        <h2>Get involved</h2>
        <p>
          ListenLM is free and open source under the MIT license. If you&rsquo;re a screen
          reader user and something reads back wrong, that&rsquo;s exactly the kind of
          report we want.
        </p>
        <p className={styles.moreLink}>
          <a href={`${REPO_URL}/issues`}>Open an issue on GitHub</a>
        </p>
      </section>
    </>
  );
}
