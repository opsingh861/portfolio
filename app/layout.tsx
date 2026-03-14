import type { Metadata } from "next";
import { Syne, DM_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import { portfolioConfig } from "@/portfolio.config";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  display: "swap",
});

const dmMono = DM_Mono({
  variable: "--font-dm-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(portfolioConfig.meta.url),
  title: `${portfolioConfig.meta.name} — ${portfolioConfig.meta.title}`,
  description: portfolioConfig.meta.description,
  keywords: [
    "Backend Engineer",
    "API Engineer",
    "Aditya Dhanraj",
    "Node.js",
    ".NET",
    "DevSecOps",
    "Bangalore",
    "Software Engineer",
  ],
  authors: [{ name: portfolioConfig.meta.name }],
  openGraph: {
    title: `${portfolioConfig.meta.name} — ${portfolioConfig.meta.title}`,
    description: portfolioConfig.meta.description,
    url: portfolioConfig.meta.url,
    siteName: portfolioConfig.meta.name,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: portfolioConfig.meta.name }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${portfolioConfig.meta.name} — ${portfolioConfig.meta.title}`,
    description: portfolioConfig.meta.description,
    images: ["/og-image.png"],
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: portfolioConfig.meta.name,
  jobTitle: portfolioConfig.meta.title,
  url: portfolioConfig.meta.url,
  email: portfolioConfig.meta.email,
  sameAs: [portfolioConfig.meta.linkedin, portfolioConfig.meta.github],
  address: { "@type": "PostalAddress", addressLocality: "Bangalore", addressCountry: "IN" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${syne.variable} ${dmMono.variable} noise`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
