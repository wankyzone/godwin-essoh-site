import type { MetadataRoute } from "next";
import { siteOrigin, withBasePath } from "@/lib/site";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: siteOrigin
      ? new URL(withBasePath("/sitemap.xml"), siteOrigin).toString()
      : undefined,
  };
}
