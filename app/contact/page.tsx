import type { Metadata } from "next";
import { ContactForm } from "@/components/ui/ContactForm";
import styles from "../page.module.css";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Ask a question, request access, or book a free demo or tutorial of ListenLM for your team.",
};

export default function ContactPage() {
  return (
    <>
      <section className={`container ${styles.pageHero}`}>
        <h1>Contact us</h1>
        <p className={styles.heroSub}>
          Want ListenLM for your members or staff, or a walkthrough for your team? Send us
          a note. We answer every message and set up demos and tutorials free of charge.
        </p>
      </section>

      <section className={`container ${styles.section}`}>
        <h2>Send a message</h2>
        <ContactForm />
      </section>
    </>
  );
}
