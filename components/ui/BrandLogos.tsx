/**
 * Brand logos for the AI chatbots ListenLM supports, shown to indicate
 * compatibility. Each mark is rendered in the product's own color on a
 * white tile (see LogoStrip.module.css) so it reads correctly in both
 * themes. Marks are decorative; the accompanying aria-label names them.
 */
import type { ReactNode } from "react";

export type Brand = { name: string; mark: ReactNode };

export const BRANDS: Brand[] = [
  {
    name: "Claude",
    mark: (
      <svg viewBox="0 0 24 24" width="26" height="26" aria-hidden="true">
        <path
          fill="#D97757"
          d="M17.3 3.5h-3.67l6.7 16.92H24L17.3 3.5ZM6.7 3.5 0 20.42h3.74l1.37-3.55h7l1.37 3.55h3.74L10.53 3.5H6.7Zm-.37 10.24 2.29-5.95 2.29 5.95H6.33Z"
        />
      </svg>
    ),
  },
  {
    name: "ChatGPT",
    mark: (
      <svg viewBox="0 0 24 24" width="26" height="26" aria-hidden="true">
        <path
          fill="#0DA37F"
          d="M22.28 9.82a5.98 5.98 0 0 0-.52-4.91 6.05 6.05 0 0 0-6.51-2.9A6.07 6.07 0 0 0 4.98 4.18a5.98 5.98 0 0 0-4 2.9 6.05 6.05 0 0 0 .75 7.1 5.98 5.98 0 0 0 .51 4.91 6.05 6.05 0 0 0 6.51 2.9A5.98 5.98 0 0 0 13.26 24a6.06 6.06 0 0 0 5.77-4.21 5.99 5.99 0 0 0 4-2.9 6.06 6.06 0 0 0-.75-7.07Zm-9.02 12.6a4.48 4.48 0 0 1-2.88-1.04l.14-.08 4.78-2.76a.79.79 0 0 0 .39-.68v-6.74l2.02 1.17a.07.07 0 0 1 .04.05v5.58a4.5 4.5 0 0 1-4.5 4.5ZM3.6 18.3a4.47 4.47 0 0 1-.54-3.01l.14.08 4.79 2.76a.77.77 0 0 0 .78 0l5.84-3.37v2.33a.08.08 0 0 1-.03.06L9.74 19.95a4.5 4.5 0 0 1-6.14-1.65ZM2.34 7.9a4.49 4.49 0 0 1 2.37-1.98v5.68a.77.77 0 0 0 .39.68l5.81 3.35-2.02 1.17a.08.08 0 0 1-.07 0l-4.83-2.79A4.5 4.5 0 0 1 2.34 7.9Zm16.6 3.86-5.84-3.4L15.12 7.2a.08.08 0 0 1 .07 0l4.83 2.79a4.49 4.49 0 0 1-.68 8.1v-5.68a.79.79 0 0 0-.4-.66Zm2.01-3.02-.14-.09-4.77-2.78a.78.78 0 0 0-.79 0L9.41 9.23V6.9a.07.07 0 0 1 .03-.06l4.83-2.79a4.5 4.5 0 0 1 6.68 4.66ZM8.31 12.86l-2.02-1.16a.08.08 0 0 1-.04-.06V6.07a4.5 4.5 0 0 1 7.38-3.45l-.14.08L8.7 5.46a.79.79 0 0 0-.39.68v6.72Zm1.1-2.37L12 8.99l2.61 1.5v3l-2.6 1.5-2.61-1.5v-3Z"
        />
      </svg>
    ),
  },
  {
    name: "Gemini",
    mark: (
      <svg viewBox="0 0 24 24" width="26" height="26" aria-hidden="true">
        <defs>
          <linearGradient id="gemini-grad" x1="2" y1="20" x2="22" y2="4">
            <stop offset="0" stopColor="#4285F4" />
            <stop offset="0.5" stopColor="#9B72CB" />
            <stop offset="1" stopColor="#D96570" />
          </linearGradient>
        </defs>
        <path
          fill="url(#gemini-grad)"
          d="M12 2c.4 5.2 4.8 9.6 10 10-5.2.4-9.6 4.8-10 10-.4-5.2-4.8-9.6-10-10 5.2-.4 9.6-4.8 10-10Z"
        />
      </svg>
    ),
  },
  {
    name: "Copilot",
    mark: (
      <svg viewBox="0 0 24 24" width="26" height="26" aria-hidden="true">
        <path
          fill="#1F6FEB"
          d="M6.4 8.6C7.7 7.2 9.4 6.5 12 6.5s4.3.7 5.6 2.1c1.4-.25 2.6.3 3.1 1.35.42.9.3 2-.5 3v1.75c0 2.6-3.1 4.3-8.2 4.3s-8.2-1.7-8.2-4.3V12.95c-.8-1-.92-2.1-.5-3 .5-1.05 1.7-1.6 3.1-1.35Z"
        />
        <path
          fill="#1F6FEB"
          strokeLinecap="round"
          d="M11.1 4.6a.9.9 0 0 1 1.8 0V6.6h-1.8V4.6Z"
        />
        <ellipse cx="9.1" cy="13.2" rx="1.15" ry="1.7" fill="#fff" />
        <ellipse cx="14.9" cy="13.2" rx="1.15" ry="1.7" fill="#fff" />
      </svg>
    ),
  },
];
