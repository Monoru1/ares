import type { Metadata } from "next";
import { playfair, inter } from "@/lib/fonts";
import { SmoothScroll } from "@/components/providers/SmoothScroll";
import { RouteScrollReset } from "@/components/providers/RouteScrollReset";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MobileBookingBar } from "@/components/layout/MobileBookingBar";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Arès Studio — Elias Moreau, photographe",
    template: "%s — Ares Studio",
  },
  description:
    "Elias Moreau, photographe mariage, portrait et événement. Des images simples et fortes, livrées proprement. Normandie, Paris et partout en France.",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "ARÈS Studio",
    title: "Arès Studio — Elias Moreau, photographe",
    description: "Photographe mariage, portrait et événement. Normandie, Paris et partout en France.",
    url: siteUrl,
  },
  twitter: {
    card: "summary_large_image",
    title: "Arès Studio — Elias Moreau, photographe",
    description: "Photographe mariage, portrait et événement. Normandie, Paris et partout en France.",
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
          <RouteScrollReset />
          <Navbar />
          {children}
          <Footer />
          <MobileBookingBar />
        </SmoothScroll>
      </body>
    </html>
  );
}
