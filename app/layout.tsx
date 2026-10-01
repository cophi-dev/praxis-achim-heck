import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { site } from "@/lib/site";
import "./globals.css";

const outfit = Outfit({ variable: "--font-outfit", subsets: ["latin"], display: "swap" });
const cormorant = Cormorant_Garamond({ variable: "--font-cormorant", subsets: ["latin"], weight: ["500", "600", "700"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.achimheck.de"),
  title: { default: `${site.title} | ${site.tagline}`, template: `%s | ${site.title}` },
  description: site.description,
  keywords: ["Osteopathie Hamburg", "Heilpraktiker Langenhorn", "Physiotherapie Hamburg Nord", "Chiropraktik Hamburg", "Achim Heck", "Sportphysiotherapie"],
  openGraph: {
    title: site.title,
    description: site.description,
    locale: "de_DE",
    type: "website",
    images: [{ url: "/images/praxis.jpg", width: 900, height: 701 }],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="de" className={`${outfit.variable} ${cormorant.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-paper text-ink">
        <JsonLd />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <a href={site.phoneHref} className="fixed right-4 bottom-4 z-40 rounded-full bg-navy px-5 py-3 text-[0.7rem] tracking-[0.16em] text-cream uppercase shadow-lg md:hidden">Anrufen</a>
      </body>
    </html>
  );
}
