import Link from "next/link";
import type { Country } from "@/data/editions";
import Flag from "./Flag";

export default function CountryTile({ country }: { country: Country }) {
  const [first] = country.editions;
  return (
    <div className="flex flex-col overflow-hidden rounded border-b-4 border-gold bg-tile transition hover:bg-[#8f8f8f]">
      <Link href={`/books/${first.slug}/`} className="flex flex-1 flex-col items-center justify-center gap-3 px-3 py-5 text-center">
        <Flag code={country.flag} label={country.name} className="w-14" />
        <span className="font-heading text-sm uppercase tracking-wider text-white">{country.name}</span>
      </Link>
      {country.editions.length > 1 && (
        <div className="flex flex-wrap justify-center gap-1 bg-black/25 px-2 py-2">
          {country.editions.map((e) => (
            <Link
              key={e.slug}
              href={`/books/${e.slug}/`}
              className="rounded bg-black/40 px-2 py-0.5 text-xs text-gold hover:bg-gold hover:text-black"
            >
              {e.language}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
