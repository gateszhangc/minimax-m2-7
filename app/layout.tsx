import type { Metadata } from "next";
import type { Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { GoogleAnalytics } from "@/components/google-analytics";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { StructuredData } from "@/components/structured-data";
import { buildWebsiteSchema } from "@/lib/metadata";
import { siteDescription, siteName, siteUrl } from "@/lib/site-content";

const plexSans = localFont({
  src: "./fonts/ibm-plex-sans-latin.woff2",
  weight: "300 700",
  variable: "--font-plex-sans",
  display: "swap",
});

const bricolage = localFont({
  src: "./fonts/bricolage-grotesque-latin.woff2",
  weight: "400 800",
  variable: "--font-bricolage",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteName,
  description: siteDescription,
  applicationName: siteName,
  alternates: {
    canonical: "/",
  },
  keywords: [
    "MiniMax M2.7 guide",
    "MiniMax M2.7 API",
    "MiniMax M2.7 pricing",
    "MiniMax M2.7 benchmarks",
    "MiniMax M2.7 features",
    "MiniMax-M2.7-highspeed",
  ],
  openGraph: {
    title: siteName,
    description: siteDescription,
    url: siteUrl,
    siteName,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description: siteDescription,
  },
};

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "#0a0f18",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${plexSans.variable} ${bricolage.variable} dark h-full antialiased`}
    >
      <body className="min-h-full bg-background text-foreground">
        <GoogleAnalytics />
        <StructuredData data={buildWebsiteSchema()} />
        <div className="pointer-events-none fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(145,198,255,0.12),transparent_28%),linear-gradient(to_right,rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.025)_1px,transparent_1px)] [background-size:100%_100%,72px_72px,72px_72px]" />
          <div className="absolute left-1/2 top-[-16rem] h-[38rem] w-[64rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(109,224,255,0.24)_0%,rgba(109,224,255,0.08)_35%,transparent_72%)] blur-3xl" />
          <div className="absolute bottom-[-12rem] right-[-8rem] h-[26rem] w-[26rem] rounded-full bg-[radial-gradient(circle,rgba(219,255,102,0.22)_0%,rgba(219,255,102,0.06)_42%,transparent_70%)] blur-3xl" />
        </div>
        <div className="relative mx-auto flex min-h-screen w-full max-w-[1440px] flex-col px-4 pb-6 sm:px-6 lg:px-8">
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
