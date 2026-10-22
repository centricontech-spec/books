import type { Metadata } from "next";
import BuyButton from "@/components/BuyButton";
import { getProduct } from "@/data/shop";

export const metadata: Metadata = { title: "Videos", description: "MANA GLOBAL video app by Robin Terry." };

export default function VideosPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 text-center">
      <h1 className="font-heading text-3xl uppercase tracking-wider text-gold">Videos</h1>
      <div className="dashed-gold mt-8 rounded bg-leaf p-10">
        <p className="font-heading text-xl uppercase tracking-wider">MANA GLOBAL Video App</p>
        <p className="mx-auto mt-3 max-w-lg text-white/85">
          Every country edition of MANA GLOBAL presented as video. Videos will be published here soon. Order the video app for your country edition now.
        </p>
        <BuyButton product={getProduct("video")} className="mt-6" />
      </div>
    </div>
  );
}
