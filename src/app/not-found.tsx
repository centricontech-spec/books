import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-xl px-4 py-24 text-center">
      <h1 className="font-heading text-3xl uppercase tracking-wider text-gold">Page not found</h1>
      <p className="mt-3 text-white/70">That page does not exist. Choose your country to find your edition.</p>
      <Link href="/" className="mt-6 inline-block rounded bg-gold px-6 py-3 font-heading uppercase tracking-wider text-black">Go home</Link>
    </div>
  );
}
