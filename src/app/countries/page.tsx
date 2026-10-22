import type { Metadata } from "next";
import Link from "next/link";
import Flag from "@/components/Flag";
import { editions } from "@/data/editions";

export const metadata: Metadata = {
  title: "Countries",
  description: "Every country and language edition of MANA GLOBAL by Robin Terry.",
};

const points = [
  ["Clear Moral Conviction", ""],
  ["Global Perspective", "By presenting content across multiple countries and languages, MANA GLOBAL emphasizes universal and inclusive human rights as borderless."],
  ["Educational Value", "The repeated emphasis on knowing one’s unalienable rights."],
  ["Consistency of Core Themes", "Freedom, justice, accountability, and resistance to corporate government."],
  ["Manifesto-Style Impact", "The declarative and structured rights-based listings give the work the feel of a modern charter or constitutional proposal."],
];

export default function CountriesPage() {
  return (
    <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 lg:grid-cols-2">
      <section className="dashed-gold self-start rounded p-6 leading-relaxed lg:sticky lg:top-24">
        <h1 className="font-display text-2xl font-bold text-white">MANA GLOBAL</h1>
        <p className="text-gold">Change the Government, Change the World</p>
        <p className="mb-4 text-gold">If You Do Not Know Your Rights You Have No Rights</p>
        <p className="mb-3">
          Mana Global is a political and civil rights presentation. It is a proposal of good government, unalienable human rights, and a systemic reform process across global societies. Mana Global is both a declaration of unalienable rights and a call to collective thinking.
        </p>
        <p className="mb-3">
          There is a moral urgency and conviction, aiming to educate readers on fundamental rights while challenging the political, legal, corporate and economic systems. It is a global and multilingual presentation to reinforce the international charter.
        </p>
        <p className="mb-3">This manuscript is grounded in the concept of natural justice and unalienable rights, reinforcing that RIGHTS precede government authority.</p>
        <ul className="list-disc space-y-1 pl-5">
          {points.map(([title, text]) => (
            <li key={title}>
              <span className="text-gold">{title}</span>
              {text && `: ${text}`}
            </li>
          ))}
        </ul>
      </section>

      <section className="rounded bg-tile/40 p-4">
        <h2 className="mb-4 font-heading text-xl uppercase tracking-wider text-gold">{editions.length} editions</h2>
        <ul className="divide-y divide-white/10">
          {editions.map((e) => (
            <li key={e.slug}>
              <Link href={`/books/${e.slug}/`} className="flex items-center gap-4 rounded px-2 py-2.5 hover:bg-black/40">
                <Flag code={e.flag} label={e.country} className="w-12" />
                <span className="leading-tight">
                  <span className="block font-heading uppercase tracking-wide text-white">{e.country}</span>
                  <span className="text-sm text-white/70">{e.language}</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
