import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import BuyButton from "@/components/BuyButton";
import Cover from "@/components/Cover";
import Flag from "@/components/Flag";
import PriceBox from "@/components/PriceBox";
import { countries, coverSrc, coverVariants, editions, editionTitle, getEdition } from "@/data/editions";
import { getProduct } from "@/data/shop";

export const dynamicParams = false;

export function generateStaticParams() {
  return editions.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({ params }: PageProps<"/books/[slug]">): Promise<Metadata> {
  const edition = getEdition((await params).slug);
  if (!edition) return {};
  return {
    title: `${edition.country} ${edition.language} Edition`,
    description: `MANA GLOBAL ${edition.country} edition in ${edition.language} by Robin Terry. Read it online, or order the soft cover, Global Edition hard cover, video app or e-book.`,
    openGraph: { images: [coverSrc(edition, "colour")] },
  };
}

export default async function EditionPage({ params }: PageProps<"/books/[slug]">) {
  const edition = getEdition((await params).slug);
  if (!edition) notFound();
  const country = countries.find((c) => c.id === edition.countryId)!;
  const soft = getProduct("softcover");
  const name = editionTitle(edition);

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <div className="mb-8 flex flex-wrap items-center gap-4">
        <Flag code={edition.flag} label={edition.country} className="w-16" />
        <div>
          <h1 className="font-heading text-3xl uppercase tracking-wider text-gold">{edition.country}</h1>
          <p className="text-white/70">{edition.language} edition</p>
        </div>
        {country.editions.length > 1 && (
          <div className="ml-auto flex flex-wrap gap-2">
            {country.editions.map((e) => (
              <Link
                key={e.slug}
                href={`/books/${e.slug}/`}
                className={`rounded border px-3 py-1 text-sm ${e.slug === edition.slug ? "border-gold bg-gold text-black" : "border-gold/60 text-gold hover:bg-gold/20"}`}
              >
                {e.language}
              </Link>
            ))}
          </div>
        )}
      </div>

      <div className="grid gap-10 lg:grid-cols-[1fr_300px]">
        <div>
          <h2 className="mb-4 font-heading text-lg uppercase tracking-wider">Choose your book</h2>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {coverVariants.map((v) => (
              <figure key={v.id} className="flex flex-col">
                <Link href={`/read/${edition.slug}/`} title="Read online">
                  <Cover src={coverSrc(edition, v.id)} alt={`${name} ${v.label.toLowerCase()}`} className="transition hover:scale-[1.03]" />
                </Link>
                <figcaption className="mt-3 flex flex-1 flex-col gap-2 text-center">
                  <span className="font-heading text-sm uppercase tracking-wide">Soft cover · {v.id}</span>
                  {!edition.hasCovers && <span className="text-xs text-white/50">Country cover coming soon</span>}
                  <BuyButton product={soft} detail={`${name}, ${v.id} cover`} className="mt-auto" />
                </figcaption>
              </figure>
            ))}
            <figure className="flex flex-col">
              <Link href="/read/global-edition/" title="Read the Global Edition online">
                <Cover src="/covers/global-edition.jpg" alt="MANA GLOBAL Global Edition hard cover" className="transition hover:scale-[1.03]" />
              </Link>
              <figcaption className="mt-3 flex flex-1 flex-col gap-2 text-center">
                <span className="font-heading text-sm uppercase tracking-wide">Global Edition · Hard cover</span>
                <BuyButton product={getProduct("hardcover")} className="mt-auto" />
              </figcaption>
            </figure>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <div className="dashed-gold flex flex-col items-center gap-3 rounded bg-leaf p-6 text-center">
              <span className="font-heading text-xl uppercase tracking-wider text-gold">Video</span>
              <p className="text-sm text-white/85">The {edition.language} edition presented as a video app.</p>
              <BuyButton product={getProduct("video")} detail={name} />
            </div>
            <div className="dashed-gold flex flex-col items-center gap-3 rounded bg-leaf p-6 text-center">
              <span className="font-heading text-xl uppercase tracking-wider text-gold">E Book</span>
              <p className="text-sm text-white/85">Read the {edition.language} edition on any phone, tablet or computer.</p>
              <BuyButton product={getProduct("ebook")} detail={name} />
            </div>
          </div>
        </div>

        <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
          <PriceBox />
          <Link
            href={`/read/${edition.slug}/`}
            className="block rounded border-2 border-gold px-4 py-3 text-center font-heading uppercase tracking-wider text-gold hover:bg-gold hover:text-black"
          >
            Read this edition online
          </Link>
          <p className="text-sm text-white/60">
            Click a cover to start reading. Every country edition sets out the Unalienable Rights and the Global Charter 2026 in {edition.language}.
          </p>
        </aside>
      </div>
    </div>
  );
}
