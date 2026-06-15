import type { Metadata } from "next";
import { playfair, inter } from "@/lib/fonts";
import { SmoothScroll } from "@/components/providers/SmoothScroll";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Ares Studio — Luxury Photography",
    template: "%s — Ares Studio",
  },
  description:
    "Luxury photography for timeless stories. Weddings, portraits and editorial work crafted with cinematic precision.",
  openGraph: {
    type: "website",
    siteName: "Ares Studio",
    title: "Ares Studio — Luxury Photography",
    description: "Luxury photography for timeless stories.",
    url: siteUrl,
  },
  twitter: {
    card: "summary_large_image",
    title: "Ares Studio — Luxury Photography",
    description: "Luxury photography for timeless stories.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable}`}
      suppressHydrationWarning
    >
      <body className="bg-void text-ivory antialiased">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
