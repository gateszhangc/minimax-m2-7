import type { MetadataRoute } from "next";
import { siteHost } from "@/lib/site-config";
import { siteUrl } from "@/lib/site-content";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    host: siteHost,
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
