import type { Metadata } from "next";
import { Barlow_Condensed, Cinzel, Oswald } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const cinzel = Cinzel({ variable: "--font-cinzel", subsets: ["latin"], weight: ["700", "900"] });
const oswald = Oswald({ variable: "--font-oswald", subsets: ["latin"], weight: ["400", "500", "600"] });
const barlow = Barlow_Condensed({ variable: "--font-barlow", subsets: ["latin"], weight: ["400", "500", "600"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.mana-global.com"),
  title: {
    default: "MANA GLOBAL · Change the Government, Change the World",
    template: "%s · MANA GLOBAL",
  },
  description:
    "MANA GLOBAL by Robin Terry: a declaration of unalienable rights and a Global Charter, published in country editions and languages around the world. If you do not know your rights you have no rights.",
  authors: [{ name: "Robin Terry" }],
  openGraph: {
    type: "website",
    siteName: "MANA GLOBAL",
    images: ["/covers/global-edition.jpg"],
  },
  icons: { icon: "/img/globe.png" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${cinzel.variable} ${oswald.variable} ${barlow.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
