"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Logo from "./Logo";

const nav = [
  { href: "/", label: "Home" },
  { href: "/countries/", label: "Countries" },
  { href: "/books/", label: "Books" },
  { href: "/videos/", label: "Videos" },
  { href: "/ebook/", label: "E Book" },
  { href: "/profile/", label: "Profile" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href.replace(/\/$/, "")));

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-black/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Logo />
        <nav className="hidden gap-7 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`font-heading text-sm font-medium uppercase tracking-wider transition-colors hover:text-white ${
                isActive(item.href) ? "text-white" : "text-gold"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <button
          type="button"
          className="font-heading text-sm uppercase tracking-wider text-gold md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>
      {open && (
        <nav id="mobile-nav" className="border-t border-white/10 px-4 pb-4 md:hidden">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={`block py-2 font-heading uppercase tracking-wider ${isActive(item.href) ? "text-white" : "text-gold"}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
