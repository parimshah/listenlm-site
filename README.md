# ListenLM website

Marketing site for ListenLM — screen-reader formatting for AI chat, built with
Next.js (App Router) + TypeScript. Standalone repo, separate from the
extension/CLI source at https://github.com/JacquelineDMcGraw/claude-a11y.

Accessibility is the entire value proposition of the product this site sells,
so the site is held to the same bar: axe-core scans with zero violations on
every route, keyboard-only navigation, visible focus states, and no CSS
framework — hand-rolled design tokens instead (see `styles/tokens.css`).

## Commands

```bash
npm run dev          # local dev server
npm run build         # production build
npm run typecheck     # tsc --noEmit
npm run lint          # eslint, jsx-a11y rules set to error
npm run format        # prettier --write
npm run test:a11y     # axe-core scan of every route (builds + starts first)
npm run test:e2e      # keyboard-navigation smoke tests
```

`test:a11y` and `test:e2e` both run through Playwright (`playwright.config.ts`
builds and starts the production app automatically). Run `npx playwright test`
to run both suites together.

## Structure

- `app/` — one route per page (Home, `/download`, `/how-it-works`, `/about`,
  `/accessibility-statement`, `/privacy`). No CMS; copy lives directly in
  each page's `page.tsx`.
- `components/layout/` — `SkipLink`, `SiteHeader`, `SiteFooter`, shared by
  every page via `app/layout.tsx`.
- `components/demo/TranscriptDemo.tsx` — the before/after screen-reader
  transcript widget, used on both the home page and `/how-it-works`. Text
  transcript is always the source of truth; `audioSrc` is optional per side
  (see `content-data/transcripts.ts`) so audio can ship as a fast-follow
  without a broken/degraded page in the meantime.
- `styles/tokens.css` — every color/space/type value on the site as CSS
  custom properties, with light/dark/`prefers-contrast: more`/
  `forced-colors: active`/`prefers-reduced-motion: reduce` overrides. Nothing
  should hardcode a hex value or px size outside this file.
- `lib/links.ts` — the one real external link currently in use (the source
  repo). Update `REPO_URL` once the repo itself is renamed as part of the
  ListenLM rebrand; don't add Chrome Web Store/Marketplace/npm links until
  those listings actually go live (see `/download`'s "coming soon" framing).

## Known follow-ups

- New ListenLM wordmark/logo (site currently uses a text wordmark).
- Audio clips for the four `TranscriptDemo` examples (transcript-only for now
  by design, not a bug).
- `/about` team bio is intentionally generic — replace with real names/quotes
  once supplied (see the `TODO(team)` comment in `app/about/page.tsx`).
- Domain registration — `app/sitemap.ts`/`app/robots.ts` read
  `NEXT_PUBLIC_SITE_URL`, set it once a domain exists.
