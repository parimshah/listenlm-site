import Link from "next/link";
import { LogoStrip } from "@/components/ui/LogoStrip";
import { Highlight } from "@/components/ui/HeroHighlight";
import { CardHoverEffect } from "@/components/ui/CardHoverEffect";
import { Spotlight } from "@/components/ui/Spotlight";
import { DemoCarousel } from "@/components/demo/DemoCarousel";
import { transcriptExamples } from "@/content-data/transcripts";
import styles from "./page.module.css";

const STEPS = [
  {
    title: "It spots each new reply",
    body: "As soon as a chatbot answers, ListenLM sees the new text arrive.",
    icon: (
      <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" />
    ),
  },
  {
    title: "It labels the parts that matter",
    body: "Code, headings, links, and tables get proper labels, so your screen reader announces each one the right way.",
    icon: <path d="M4 7h16 M4 12h16 M4 17h10 M7 3v18" />,
  },
  {
    title: "It signals when the reply is done",
    body: "You get one clear cue that the answer finished, instead of being cut off as it streams in.",
    icon: <path d="M20 6 9 17l-5-5" />,
  },
];

const ORG_BENEFITS = [
  {
    title: "Free, with no accounts",
    body: "No sign-up, no license keys, and no cost. A member installs it once and it works.",
  },
  {
    title: "Works on the device",
    body: "It restructures the page already open in the browser and sends nothing to any server.",
  },
  {
    title: "No new workflow to learn",
    body: "It runs alongside VoiceOver, NVDA, JAWS, and Orca. Every shortcut a member already uses keeps working.",
  },
];

export default function HomePage() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroGlow} aria-hidden="true" />
        <Spotlight />
        <div className={`container ${styles.heroInner}`}>
          <p className={styles.eyebrow}>Free Chrome extension</p>
          <h1>
            Make AI chatbots work with{" "}
            <Highlight className={styles.accentText}>your screen reader.</Highlight>
          </h1>
          <p className={styles.heroSub}>
            ListenLM is a free Chrome extension that helps VoiceOver, NVDA, JAWS, and Orca
            read Claude, ChatGPT, and Gemini outputs clearly, instead of reading out raw
            punctuation and broken formatting.
          </p>
          <p className={styles.heroNote}>
            No new workflow &mdash; works with the screen reader you already use.
          </p>
          <div className={styles.heroActions}>
            <Link href="#get" className={`${styles.primaryCta} hoverBorderGradient`}>
              Get ListenLM
            </Link>
            <Link href="#demo" className={styles.secondaryCta}>
              See the demo
            </Link>
          </div>
          <div className={styles.heroLogos}>
            <p className={styles.eyebrowSmall}>Works with</p>
            <LogoStrip label="AI chatbots ListenLM works with" />
          </div>
        </div>
      </section>

      <section className={styles.demoBand} id="demo">
        <div className="container">
          <h2 className={styles.problemHeading}>
            AI chatbots were not designed for what you can hear
          </h2>
          <p className={styles.lead}>
            They were built to be seen, not heard. When a reply streams in, your screen
            reader has to guess at structure that was never marked up, so you hear raw
            punctuation instead of code, headings, and links.
          </p>

          <h3 className={styles.demoHeading}>Demo</h3>
          <p className={styles.demoHint}>
            Press play on either side to hear exactly what a screen reader says.
          </p>
          <DemoCarousel examples={transcriptExamples} />

          <div className={styles.howItWorks} id="how-it-works">
            <h3 className={styles.howHeading}>How it works</h3>
            <ul className={styles.stepList}>
              {STEPS.map((step) => (
                <li key={step.title} className={styles.step}>
                  <span className={styles.stepIcon} aria-hidden="true">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      {step.icon}
                    </svg>
                  </span>
                  <div>
                    <h4 className={styles.stepTitle}>{step.title}</h4>
                    <p className={styles.cardBody}>{step.body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionBlue}`} id="organizations">
        <div className="container">
          <h2>Built for organizations that recommend assistive technology</h2>
          <p className={styles.lead}>
            ListenLM works within the screen reader your members already use and requires
            no setup. Recommend it once, and it starts working the moment they open a
            chatbot.
          </p>
          <CardHoverEffect
            className="mt-8"
            items={ORG_BENEFITS.map((item) => ({
              key: item.title,
              content: (
                <div className={`bentoCard ${styles.orgCard}`}>
                  <h3 className={styles.cardTitle}>{item.title}</h3>
                  <p className={styles.cardBody}>{item.body}</p>
                </div>
              ),
            }))}
          />
          <div className={styles.orgCta}>
            <p className={styles.orgCtaText}>
              Want a live demo or a walkthrough for your team? We will set one up, free of
              charge.
            </p>
            <Link href="/contact" className={`${styles.primaryCta} hoverBorderGradient`}>
              Contact us for a demo
            </Link>
          </div>
        </div>
      </section>

      <section className={`container ${styles.section}`}>
        <h2>Why this is needed</h2>
        <div className={styles.prose}>
          <p>
            Screen reader users rely on AI chatbots just like everyone else, but these
            tools are rarely tested with a screen reader in mind. The WebAIM Screen Reader
            User Survey shows how common these barriers are, and the research paper
            &ldquo;Screen Reader Programmers in the Vibe Coding Era&rdquo; (arXiv
            2506.13270) documents how AI tools break for screen reader users by default.
          </p>
          <p>
            Even the teams behind these tools have open, unresolved requests for better
            screen reader support. ListenLM closes that gap now, so no one has to wait for
            each tool to fix itself.
          </p>
        </div>
      </section>

      <section className={styles.getBand} id="get">
        <div className={`container ${styles.getInner}`}>
          <h2>Get ListenLM</h2>
          <p className={styles.lead}>
            ListenLM is a free Chrome extension. Add it to Chrome and it starts working
            the moment you open Claude, ChatGPT, Gemini, or Copilot.
          </p>
          <div className={styles.heroActions}>
            <Link href="/contact" className={`${styles.primaryCta} hoverBorderGradient`}>
              Get ListenLM
            </Link>
            <Link href="/contact" className={styles.secondaryCta}>
              Contact us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
