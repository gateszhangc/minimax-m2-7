import type { MetadataRoute } from "next";
import { navItems, siteUrl } from "@/lib/site-content";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return navItems.map((item) => ({
    url: new URL(item.href, siteUrl).toString(),
    lastModified: now,
    changeFrequency: item.href === "/" ? "weekly" : "monthly",
    priority: item.href === "/" ? 1 : 0.8,
  }));
}
