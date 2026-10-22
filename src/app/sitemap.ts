import type { MetadataRoute } from "next";
import { editions } from "@/data/editions";

export const dynamic = "force-static";

const base = "https://www.mana-global.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["/", "/countries/", "/books/", "/videos/", "/ebook/", "/profile/", "/read/global-edition/"];
  return [
    ...pages.map((p) => ({ url: base + p })),
    ...editions.flatMap((e) => [{ url: `${base}/books/${e.slug}/` }, { url: `${base}/read/${e.slug}/` }]),
  ];
}
