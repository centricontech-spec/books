import type { Metadata } from "next";
import Link from "next/link";
import Flag from "@/components/Flag";
import { editions } from "@/data/editions";
import { formatPrice, getProduct } from "@/data/shop";

export const metadata: Metadata = { title: "E Book", description: "MANA GLOBAL e-books in every country edition and language." };

export default function EbookPage() {
  const ebook = getProduct("ebook");
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="font-heading text-3xl uppercase tracking-wider text-gold">E Book</h1>
      <p className="mt-3 max-w-2xl text-white/80">
        Every country edition is available as an e-book for {formatPrice(ebook.price)}. Choose your edition, read a preview online, then order the e-book.
      </p>
      <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {editions.map((e) => (
          <Link key={e.slug} href={`/books/${e.slug}/`} className="flex items-center gap-3 rounded bg-leaf/80 px-4 py-3 transition hover:bg-leaf-light">
            <Flag code={e.flag} label={e.country} className="w-10" />
            <span className="font-heading uppercase tracking-wide">{e.country}</span>
            <span className="ml-auto text-sm text-gold">{e.language}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
