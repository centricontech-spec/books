import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Fragment, Suspense } from "react";
import BuyButton from "@/components/BuyButton";
import Cover from "@/components/Cover";
import EditionCover from "@/components/EditionCover";
import EditorialReviewPage from "@/components/EditorialReviewPage";
import GlobalLanguagePicker from "@/components/GlobalLanguagePicker";
import GlobalReaderCover from "@/components/GlobalReaderCover";
import ReaderCover from "@/components/ReaderCover";
import { editions, editionTitle, getEdition, BLANK_PAGES, globalCoverSrc, MANUSCRIPT_PAGES, type Edition } from "@/data/editions";
import { EDITORIAL_REVIEW } from "@/data/editorialReview";
import { getProduct, GLOBAL_EDITION_YEAR } from "@/data/shop";

const GLOBAL = "global-edition";

export const dynamicParams = false;

export function generateStaticParams() {
  return [{ slug: GLOBAL }, ...editions.map((e) => ({ slug: e.slug }))];
}

function resolve(slug: string) {
  if (slug === GLOBAL) return { title: `Global Edition ${GLOBAL_EDITION_YEAR}`, from: 1, to: MANUSCRIPT_PAGES, edition: undefined };
  const edition = getEdition(slug);
  if (!edition) return undefined;
  return { title: `${edition.country} · ${edition.language}`, from: edition.pages[0], to: edition.pages[1], edition };
}

function BookCover({ edition, side, title }: { edition?: Edition; side: "front" | "back"; title: string }) {
  if (!edition) {
    return (
      <Suspense fallback={<Cover src={globalCoverSrc(undefined, side)} alt={`${title} ${side} cover`} priority={side === "front"} />}>
        <GlobalReaderCover side={side} title={title} />
      </Suspense>
    );
  }
  return (
    <Suspense fallback={<EditionCover edition={edition} variant="colour" side={side} />}>
      <ReaderCover edition={edition} side={side} />
    </Suspense>
  );
}

export async function generateMetadata({ params }: PageProps<"/read/[slug]">): Promise<Metadata> {
  const book = resolve((await params).slug);
  if (!book) return {};
  return {
    title: `Read online: ${book.title}`,
    description: `Read MANA GLOBAL ${book.title} by Robin Terry online: the Unalienable Rights and the Global Charter 2026.`,
  };
}

export default async function ReaderPage({ params }: PageProps<"/read/[slug]">) {
  const { slug } = await params;
  const book = resolve(slug);
  if (!book) notFound();
  const pages = Array.from({ length: book.to - book.from + 1 }, (_, i) => book.from + i).filter((p) => !BLANK_PAGES.includes(p));
  const name = book.edition ? editionTitle(book.edition) : undefined;
  const hasEditorialReview = !book.edition;

  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="font-heading text-sm uppercase tracking-wider text-white/60">Read online</p>
          <h1 className="font-heading text-3xl uppercase tracking-wider text-gold">{book.title}</h1>
          <p className="text-sm text-white/60">{pages.length + (hasEditorialReview ? 1 : 0)} pages</p>
        </div>
        <Link href={book.edition ? `/books/${book.edition.slug}/` : "/books/"} className="text-gold underline-offset-4 hover:underline">
          ← Back to the books
        </Link>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1fr_260px]">
        <div className="space-y-6">
          <figure id="cover" className="mx-auto max-w-[560px]">
            <BookCover edition={book.edition} side="front" title={book.title} />
          </figure>
          {pages.map((p) => (
            <Fragment key={p}>
              <figure id={`page-${p}`} className="mx-auto max-w-[760px] bg-white shadow-xl shadow-black/60">
                <Image
                  src={`/reader/page-${String(p).padStart(3, "0")}.jpg`}
                  alt={`${book.title}, page ${p}`}
                  width={900}
                  height={1345}
                  className="h-auto w-full"
                />
              </figure>
              {hasEditorialReview && p === EDITORIAL_REVIEW.afterPage && (
                <figure id="editorial-review" className="mx-auto max-w-[760px] shadow-xl shadow-black/60">
                  <EditorialReviewPage />
                </figure>
              )}
            </Fragment>
          ))}
          <figure id="back-cover" className="mx-auto max-w-[560px]">
            <BookCover edition={book.edition} side="back" title={book.title} />
          </figure>
        </div>

        <aside className="space-y-4 lg:sticky lg:top-24 lg:self-start">
          <p className="font-heading uppercase tracking-wider">Own this book</p>
          {book.edition ? (
            <>
              <BuyButton product={getProduct("softcover")} detail={name} label="Soft cover" className="w-full" />
              <p className="-mt-2 text-xs text-white/60">Black, colour or white cover: pick it on the <Link href={`/books/${book.edition.slug}/`} className="text-gold">edition page</Link></p>
              <BuyButton product={getProduct("ebook")} detail={name} label="E-Book" className="w-full" />
              <BuyButton product={getProduct("video")} detail={name} label="Video App" className="w-full" />
            </>
          ) : null}
          <BuyButton product={getProduct("hardcover")} label={`Global Edition ${GLOBAL_EDITION_YEAR}`} className="w-full" />
          <p className="pt-2 text-center text-sm text-gold">FREE Postage</p>
          {!book.edition && (
            <Suspense>
              <GlobalLanguagePicker />
            </Suspense>
          )}
          {!book.edition && (
            <nav className="max-h-[40vh] overflow-y-auto rounded border border-white/10 p-3 text-sm">
              <p className="mb-2 font-heading uppercase tracking-wider text-white/60">Jump to</p>
              {editions
                .filter((e) => e.slug !== "new-zealand-maori")
                .map((e) => (
                  <a key={e.slug} href={`#page-${e.pages[0]}`} className="block py-0.5 text-white/80 hover:text-gold">
                    {e.country} {e.language}
                  </a>
                ))}
            </nav>
          )}
        </aside>
      </div>
    </div>
  );
}
