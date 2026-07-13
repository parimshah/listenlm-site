import type { Metadata } from "next";
import { CopyCommand } from "@/components/ui/CopyCommand";
import { REPO_URL, REPO_CLONE_COMMAND } from "@/lib/links";
import styles from "../page.module.css";

export const metadata: Metadata = {
  title: "Download",
  description:
    "Install ListenLM as a browser extension, a VS Code/Cursor extension, or a terminal CLI.",
};

export default function DownloadPage() {
  return (
    <>
      <section className={`container ${styles.hero}`}>
        <h1>Download ListenLM</h1>
        <p className={styles.heroSub}>
          Pick the surface you already work in. Each install path takes a few minutes and
          requires nothing more than a screen reader you already have configured.
        </p>
      </section>

      <section className={`container ${styles.section}`}>
        <h2>Browser extension — Chrome, Edge, Brave</h2>
        <p>
          Works on claude.ai, chatgpt.com, gemini.google.com, and copilot.microsoft.com. A
          Chrome Web Store listing is on its way; for now, installing from source takes
          under a minute.
        </p>
        <ol className={styles.stepList}>
          <li>Clone the repository.</li>
          <li>
            Open <code>chrome://extensions</code> and turn on Developer mode.
          </li>
          <li>
            Choose &ldquo;Load unpacked&rdquo; and select the{" "}
            <code>packages/browser</code> folder.
          </li>
          <li>Open any supported chat site &mdash; it starts working immediately.</li>
        </ol>
        <CopyCommand command={REPO_CLONE_COMMAND} label="Clone the ListenLM repository" />
      </section>

      <section className={`container ${styles.section}`}>
        <h2>VS Code / Cursor extension</h2>
        <p>
          Requires VS Code 1.93 or later, or Cursor. Compatible with NVDA, JAWS,
          VoiceOver, and Orca. A Marketplace listing is coming; until then, build the
          extension locally:
        </p>
        <CopyCommand
          command="cd claude-a11y/packages/node && npm install && npm run compile"
          label="Build the VS Code extension"
        />
        <p>
          Install the resulting <code>.vsix</code> file through the Extensions view, or
          press F5 to run it in the Extension Development Host.
        </p>
      </section>

      <section className={`container ${styles.section}`}>
        <h2>Command line</h2>
        <p>
          Works in any terminal, with any screen reader. Requires Node.js 20 or later.
        </p>
        <CopyCommand
          command={`${REPO_CLONE_COMMAND}\ncd claude-a11y && npm install && npm run build\nnpm link -w packages/node`}
          label="Install the ListenLM CLI from source"
        />
        <p>Then run it against any prompt:</p>
        <CopyCommand
          command={`listenlm "explain this project"`}
          label="Example CLI usage"
        />
      </section>

      <section className={`container ${styles.section}`}>
        <h2>Requirements &amp; known limitations</h2>
        <ul className={styles.problemList}>
          <li>Node.js 20 or later for the CLI and VS Code build step.</li>
          <li>
            Chrome, Edge, or Brave for the browser extension; VS Code 1.93+ or Cursor for
            the editor extension.
          </li>
          <li>
            Input fields, settings panels, and some sidebar navigation on claude.ai
            aren&rsquo;t covered yet &mdash; ListenLM focuses on making responses readable
            and navigable first.
          </li>
          <li>
            Claude Desktop&rsquo;s Electron build blocks standard extension injection. A
            per-session workaround exists but it isn&rsquo;t screen-reader-accessible to
            set up on its own &mdash; get a sighted collaborator to help with that
            one-time step if you need it.
          </li>
        </ul>
        <p className={styles.moreLink}>
          <a href={`${REPO_URL}/issues`}>
            Report a broken selector or request a new platform
          </a>
        </p>
      </section>
    </>
  );
}
