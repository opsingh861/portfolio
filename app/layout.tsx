import type { Metadata } from "next";
import { Syne, DM_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { GoogleAnalytics } from "@next/third-parties/google";
import Script from "next/script";
import "./globals.css";
import { portfolioConfig } from "@/portfolio.config";
import AnalyticsProvider from "@/components/providers/AnalyticsProvider";

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
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${syne.variable} ${dmMono.variable} noise`}>
        <AnalyticsProvider>
          {children}
        </AnalyticsProvider>
        <Analytics />
        <SpeedInsights />
        {process.env.NEXT_PUBLIC_GA_ID && (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
        )}
        {process.env.NEXT_PUBLIC_CLARITY_ID && (
          <Script
            id="microsoft-clarity"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window,document,"clarity","script","${process.env.NEXT_PUBLIC_CLARITY_ID}");`,
            }}
          />
        )}
      </body>
    </html>
  );
}
