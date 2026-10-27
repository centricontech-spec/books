"use client";

import { useSearchParams } from "next/navigation";
import { isCoverVariant, type Edition } from "@/data/editions";
import EditionCover from "./EditionCover";

// The cover the reader clicked on the edition page (?cover=black|colour|white), colour by default.
export default function ReaderCover({ edition, side }: { edition: Edition; side: "front" | "back" }) {
  const cover = useSearchParams().get("cover");
  return <EditionCover edition={edition} variant={isCoverVariant(cover) ? cover : "colour"} side={side} priority={side === "front"} />;
}
