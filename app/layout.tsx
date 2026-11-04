import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ChapinTV - Streaming Premium | 4000+ Canales en Vivo",
  description:
    "Streaming premium con 4,000+ canales en vivo, 59,000 películas y 8,000 series en HD/FHD/4K. Soporte 24/7 y hasta 4 dispositivos.",
  keywords:
    "streaming, iptv, canales en vivo, películas online, series online, deportes en vivo, chapin, chapintv",
  authors: [{ name: "ChapinTV" }],
  creator: "ChapinTV",
  publisher: "ChapinTV",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "ChapinTV - Streaming Premium",
    description:
      "4,000+ canales en vivo, 59,000 películas y 8,000 series en HD/FHD/4K",
    url: "https://raymond-solutions.com/chapin",
    siteName: "ChapinTV",
    locale: "es_GT",
    type: "website",
    images: [
      {
        url: "/images/logochapinv.webp",
        width: 1200,
        height: 630,
        alt: "ChapinTV Streaming",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ChapinTV - Streaming Premium",
    description: "4,000+ canales en vivo, 59,000 películas y 8,000 series",
    images: ["/images/logochapinv.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "tu-codigo-de-verificacion-aqui",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link
          rel="icon"
          href="/favicon-16x16.png"
          type="image/png"
          sizes="16x16"
        />
        <link
          rel="icon"
          href="/favicon-32x32.png"
          type="image/png"
          sizes="32x32"
        />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={inter.className} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
