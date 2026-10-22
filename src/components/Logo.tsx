import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2 font-display text-xl font-bold tracking-wide text-gold sm:text-2xl">
      <span>MANA</span>
      <Image src="/img/globe.png" alt="" width={44} height={44} className="rounded-full" priority />
      <span>GLOBAL</span>
    </Link>
  );
}
