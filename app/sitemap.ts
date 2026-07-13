import type { MetadataRoute } from "next";

// Set NEXT_PUBLIC_SITE_URL once a real domain is registered and deployed.
const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://listenlm.example";

const ROUTES = [
  "",
  "/download",
  "/how-it-works",
  "/about",
  "/accessibility-statement",
  "/privacy",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
  }));
}
