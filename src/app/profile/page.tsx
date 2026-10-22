import type { Metadata } from "next";
import Image from "next/image";
import { authorBio } from "@/components/AuthorPanel";

export const metadata: Metadata = { title: "Profile", description: "Robin Terry, author of MANA GLOBAL." };

export default function ProfilePage() {
  return (
    <div className="mx-auto grid max-w-5xl gap-10 px-4 py-14 md:grid-cols-[280px_1fr]">
      <div>
        <Image src="/img/robin-terry.jpg" alt="Robin Terry" width={480} height={480} className="w-full rounded border-2 border-gold" priority />
        <p className="mt-4 text-center font-heading text-lg uppercase tracking-wider">Robin Terry</p>
        <p className="text-center text-sm text-white/60">Author · Katanning, Western Australia</p>
      </div>
      <div className="leading-relaxed">
        <h1 className="mb-6 font-heading text-3xl uppercase tracking-wider text-gold">Profile</h1>
        {authorBio.map((p) => (
          <p key={p.slice(0, 20)} className="mb-4 text-lg text-white/85">{p}</p>
        ))}
        <p className="mt-6 font-heading uppercase tracking-wider text-gold">Regards, Robin Terry</p>
      </div>
    </div>
  );
}
