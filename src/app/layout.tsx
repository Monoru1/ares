import type { Metadata } from "next";
import { playfair, inter } from "@/lib/fonts";
import { SmoothScroll } from "@/components/providers/SmoothScroll";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "ARÈS Studio — Photographie de luxe",
    template: "%s — Ares Studio",
  },
  description:
    "Photographie de luxe pour les histoires qui durent. Mariages, portraits, mode et événements, captés avec une précision cinématographique.",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "ARÈS Studio",
    title: "ARÈS Studio — Photographie de luxe",
    description: "Garder ce que le temps essaie d'effacer.",
    url: siteUrl,
  },
  twitter: {
    card: "summary_large_image",
    title: "ARÈS Studio — Photographie de luxe",
    description: "Garder ce que le temps essaie d'effacer.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="fr"
      className={`${playfair.variable} ${inter.variable}`}
      suppressHydrationWarning
    >
      <body className="bg-void text-ivory antialiased">
        <SmoothScroll>
          <Navbar />
          {children}
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
