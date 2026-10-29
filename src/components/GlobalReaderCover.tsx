"use client";

import { useSearchParams } from "next/navigation";
import { DEFAULT_GLOBAL_LANGUAGE, globalCoverSrc, isGlobalLanguage } from "@/data/editions";
import Cover from "./Cover";

// The Global Edition cover in the language picked (?lang=french), English by default.
export default function GlobalReaderCover({ side, title }: { side: "front" | "back"; title: string }) {
  const lang = useSearchParams().get("lang");
  const src = globalCoverSrc(isGlobalLanguage(lang) ? lang : DEFAULT_GLOBAL_LANGUAGE, side);
  return <Cover key={src} src={src} alt={`${title} ${side} cover`} priority={side === "front"} />;
}
