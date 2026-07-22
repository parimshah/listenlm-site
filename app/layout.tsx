import type { Metadata } from "next";
import { Atkinson_Hyperlegible, IBM_Plex_Mono, Fraunces } from "next/font/google";
import { SkipLink } from "@/components/layout/SkipLink";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import "./globals.css";

const atkinson = Atkinson_Hyperlegible({
  variable: "--font-atkinson",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "600"],
  display: "swap",
});

// Display face for headings. Fraunces has real character (soft, slightly
// quirky serif) which keeps the page from reading as a stock template,
// while Atkinson Hyperlegible still carries all the body copy.
const fraunces = Fraunces({
  variable: "--font-display-face",
  subsets: ["latin"],
  display: "swap",
  axes: ["SOFT", "WONK"],
});

export const metadata: Metadata = {
  title: {
    default: "ListenLM · Make AI chatbots work with your screen reader",
    template: "%s · ListenLM",
  },
  description:
    "ListenLM is a free Chrome extension that fixes how VoiceOver, NVDA, JAWS, and Orca read Claude, ChatGPT, and Gemini outputs. It restructures each reply so your screen reader announces it clearly.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${atkinson.variable} ${plexMono.variable} ${fraunces.variable}`}
    >
      <body>
        <SkipLink />
        <SiteHeader />
        <main id="content">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
