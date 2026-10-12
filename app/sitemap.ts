import type { MetadataRoute } from "next";
import { navigation } from "@/content/site";
import { siteOrigin, withBasePath } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  if (!siteOrigin) {
    return [];
  }

  return navigation.map((item) => ({
    url: new URL(withBasePath(item.href), siteOrigin).toString(),
  }));
}
