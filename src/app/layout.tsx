import type { Metadata } from "next";
import { Bebas_Neue, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const bebasNeue = Bebas_Neue({
  variable: "--font-display",
  subsets: ["latin"],
  weight: "400",
});

const SITE_URL = "https://abhijith-jaideep.vercel.app";
const TITLE = "Abhijith Jaideep | Software Engineer, Mobile & Web";
const DESCRIPTION =
  "Software Engineer based in Melbourne building production mobile and web apps end-to-end: native Android, Flutter, React, Flask APIs, and AWS infrastructure. Full working rights, no sponsorship required.";

// og:image and twitter:image are injected automatically from
// src/app/opengraph-image.png, so they are not declared here.
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  authors: [{ name: "Abhijith Jaideep", url: SITE_URL }],
  creator: "Abhijith Jaideep",
  keywords: [
    "Software Engineer Melbourne",
    "Mobile Developer Melbourne",
    "Android Developer",
    "Kotlin",
    "Jetpack Compose",
    "Flutter",
    "Full Stack Developer",
    "Flask",
    "AWS",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: SITE_URL,
    siteName: "Abhijith Jaideep",
    title: TITLE,
    description: DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${bebasNeue.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
