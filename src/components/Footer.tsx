import Link from "next/link";
import { ORDER_EMAIL } from "@/data/shop";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-white/10 bg-panel">
      <div className="mx-auto grid max-w-6xl gap-6 px-4 py-10 text-sm text-white/70 sm:grid-cols-3">
        <div>
          <p className="font-display text-lg font-bold text-gold">MANA GLOBAL</p>
          <p className="mt-1">Change the Government, Change the World</p>
          <p className="text-gold">If You Do Not Know Your Rights You Have No Rights</p>
        </div>
        <div className="space-y-1">
          <Link href="/countries/" className="block hover:text-gold">All country editions</Link>
          <Link href="/read/global-edition/" className="block hover:text-gold">Read the Global Edition</Link>
          <Link href="/profile/" className="block hover:text-gold">About Robin Terry</Link>
        </div>
        <div className="space-y-1">
          <p>Robin Terry, Author</p>
          <a href={`mailto:${ORDER_EMAIL}`} className="block hover:text-gold">{ORDER_EMAIL}</a>
          <p>© {new Date().getFullYear()} Robin Terry. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
