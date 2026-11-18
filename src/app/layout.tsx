import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import { SITE_CONFIG } from "@/data/site";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: SITE_CONFIG.seo.title,
    template: "%s — Keshika K S",
  },
  description: SITE_CONFIG.seo.description,
  authors: [{ name: SITE_CONFIG.authorName, url: SITE_CONFIG.links.blog }],
  creator: SITE_CONFIG.authorName,
  openGraph: {
    title: SITE_CONFIG.seo.title,
    description: SITE_CONFIG.seo.description,
    type: "website",
    locale: "en_IN",
    siteName: `${SITE_CONFIG.authorName} — Writer’s Portfolio`,
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_CONFIG.seo.title,
    description: SITE_CONFIG.seo.description,
  },
};

export const viewport: Viewport = {
  themeColor: "#111111",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${inter.variable}`}
    >
      <body className="min-h-screen bg-[#F4EEDF] text-[#111111] font-sans antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-[#111111] focus:text-[#F4EEDF] focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:border focus:border-[#00D6C9]"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
