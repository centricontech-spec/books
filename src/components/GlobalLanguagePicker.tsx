"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { DEFAULT_GLOBAL_LANGUAGE, globalLanguages, isGlobalLanguage } from "@/data/editions";

// Switches the Global Edition reader's covers to another language.
export default function GlobalLanguagePicker() {
  const router = useRouter();
  const pathname = usePathname();
  const lang = useSearchParams().get("lang");
  return (
    <label className="block text-sm">
      <span className="mb-1 block font-heading uppercase tracking-wider text-white/60">Cover language</span>
      <select
        value={isGlobalLanguage(lang) ? lang : DEFAULT_GLOBAL_LANGUAGE}
        onChange={(e) => router.replace(`${pathname}?lang=${e.target.value}`, { scroll: false })}
        className="w-full rounded border border-gold/60 bg-black px-3 py-2 text-white"
      >
        {globalLanguages.map((l) => (
          <option key={l.id} value={l.id}>
            {l.label}
          </option>
        ))}
      </select>
    </label>
  );
}
