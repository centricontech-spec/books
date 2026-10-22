import Image from "next/image";

export const authorBio = [
  "My name is Robin Terry originally from New Zealand now living in Katanning, Western Australia. I am 78 years old and retired. I was a shearer for 40 plus years. I am of Maori descent Ngati Maniapoto and Ngapuhi. My bloodline also goes back to Essex in England of the Hughes genealogy, and Anderson of Scotland.",
  "I became interested in politics in 1974. I held a public meeting in the lounge of the Riverina Hotel in Hamilton NZ; 300 to 400 people turned up, it was overflowing. Six months later I was approached to stand as an Independent in the next elections. I declined and moved to Australia.",
  "I started writing this book Mana Global as one book and as you can see it has morphed into 166 editions. “INTERESTING” if nothing else.",
  "I believe the World is in turmoil; the dishonesty and immoral behaviour in the political arena leaves a lot to be desired. “We have a World to save.”",
];

export default function AuthorPanel() {
  return (
    <aside className="dashed-white rounded p-5 text-[15px] leading-relaxed text-white/90">
      {authorBio.map((p) => (
        <p key={p.slice(0, 20)} className="mb-3">{p}</p>
      ))}
      <div className="mt-5 flex items-center justify-between gap-4">
        <div className="text-center font-heading">
          <p className="font-semibold uppercase tracking-wider">Robin Terry Author</p>
          <p className="text-sm text-white/60">www.mana-global.com</p>
        </div>
        <Image src="/img/robin-terry.jpg" alt="Robin Terry" width={120} height={120} className="rounded" />
      </div>
    </aside>
  );
}
