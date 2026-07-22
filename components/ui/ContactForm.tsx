"use client";

import { useState } from "react";
import { CONTACT_EMAIL } from "@/lib/links";
import styles from "./ContactForm.module.css";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const subject = `ListenLM enquiry from ${name || "a website visitor"}`;
    const body = [message, "", `From: ${name}`, email ? `Reply to: ${email}` : ""]
      .filter(Boolean)
      .join("\n");
    const href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = href;
    setSent(true);
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.field}>
        <label htmlFor="contact-name">Your name</label>
        <input
          id="contact-name"
          name="name"
          type="text"
          autoComplete="name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className={styles.field}>
        <label htmlFor="contact-email">Your email</label>
        <input
          id="contact-email"
          name="email"
          type="email"
          autoComplete="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className={styles.field}>
        <label htmlFor="contact-message">
          How can we help? Tell us about your team or ask for a demo.
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={6}
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>

      <button type="submit" className={styles.submit}>
        Send message
      </button>

      <p className={styles.hint} role="status">
        {sent
          ? "Your email app should have opened with the message ready to send."
          : "This opens your email app with the message ready to send."}
      </p>
    </form>
  );
}
