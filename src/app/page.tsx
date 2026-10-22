import Image from "next/image";
import Link from "next/link";
import AuthorPanel from "@/components/AuthorPanel";
import CountryTile from "@/components/CountryTile";
import { countries, editions } from "@/data/editions";

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-14 md:grid-cols-[1fr_auto] md:py-20">
          <div>
            <h1 className="font-display text-5xl font-black tracking-wide text-gold sm:text-6xl">MANA GLOBAL</h1>
            <p className="mt-5 font-heading text-2xl uppercase tracking-wide text-white sm:text-3xl">
              “If You Do Not Know Your Rights You Have No Rights”
            </p>
            <p className="mt-3 font-heading text-xl uppercase tracking-wide text-leaf-light sm:text-2xl">
              Change the Government, Change the World
            </p>
            <p className="mt-6 max-w-xl text-lg text-white/75">
              A declaration of unalienable rights and a Global Charter by Robin Terry, published in {countries.length} countries and{" "}
              {new Set(editions.map((e) => e.language)).size} languages. Choose your country to see its editions, read the book online and order your copy.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#countries" className="rounded bg-gold px-6 py-3 font-heading font-semibold uppercase tracking-wider text-black hover:bg-white">
                Choose your country
              </a>
              <Link href="/read/global-edition/" className="rounded border-2 border-gold px-6 py-3 font-heading font-semibold uppercase tracking-wider text-gold hover:bg-gold hover:text-black">
                Read the Global Edition
              </Link>
            </div>
          </div>
          <Image src="/img/globe.webp" alt="Spinning globe" width={280} height={280} className="mx-auto rounded-full" priority unoptimized />
        </div>
      </section>

      <section id="countries" className="mx-auto grid max-w-6xl scroll-mt-20 gap-8 px-4 py-14 lg:grid-cols-[1fr_380px]">
        <div>
          <h2 className="mb-6 font-heading text-2xl uppercase tracking-wider text-gold">Choose your country</h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {countries.map((c) => (
              <CountryTile key={c.id} country={c} />
            ))}
          </div>
        </div>
        <div className="lg:sticky lg:top-24 lg:self-start">
          <AuthorPanel />
        </div>
      </section>
    </>
  );
}
