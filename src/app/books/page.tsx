import type { Metadata } from "next";
import Link from "next/link";
import Cover from "@/components/Cover";
import EditionCover from "@/components/EditionCover";
import PriceBox from "@/components/PriceBox";
import { editions, globalCoverSrc } from "@/data/editions";
import { GLOBAL_EDITION_YEAR } from "@/data/shop";

export const metadata: Metadata = {
  title: "Books",
  description: "All MANA GLOBAL books: the Global Edition hard cover and every country edition in soft cover.",
};

export default function BooksPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <div className="mb-10 grid items-start gap-8 md:grid-cols-[220px_1fr_280px]">
        <Link href="/read/global-edition/">
          <Cover src={globalCoverSrc()} alt={`MANA GLOBAL Global Edition ${GLOBAL_EDITION_YEAR}`} />
        </Link>
        <div>
          <h1 className="font-heading text-3xl uppercase tracking-wider text-gold">The Books</h1>
          <p className="mt-3 leading-relaxed text-white/80">
            The <span className="text-gold">Global Edition {GLOBAL_EDITION_YEAR}</span> is a hard cover book bringing every country edition together. Each country edition is
            also available as a soft cover with a choice of three covers: black, colour or white, as a video app, and as an e-book.
          </p>
        </div>
        <PriceBox />
      </div>
      <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 lg:grid-cols-6">
        {editions.map((e) => (
          <Link key={e.slug} href={`/books/${e.slug}/`} className="group text-center">
            <EditionCover edition={e} variant="colour" className="transition group-hover:scale-[1.03]" />
            <span className="mt-2 block font-heading text-sm uppercase tracking-wide">{e.country}</span>
            <span className="text-xs text-white/60">{e.language}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
