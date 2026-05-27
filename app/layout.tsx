import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-sans-geist",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-mono-geist",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.pracpros.com"),
  title: {
    default: "PracPros — AI-Native Dental Growth Platform",
    template: "%s · PracPros",
  },
  description:
    "PRACPROS is a dental marketing agency specializing in AI-native patient acquisition systems, Google Premier Partner advertising, conversion-optimized websites, local SEO, and speed-to-lead automation.",
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: "/icon.svg",
    shortcut: "/icon.svg",
  },
  openGraph: {
    title: "PracPros — AI-Native Dental Growth Platform",
    description:
      "Google Premier Partner. AI-native patient acquisition for dental practices serious about growth.",
    type: "website",
    url: "https://www.pracpros.com",
    siteName: "PracPros",
    images: [{ url: "/brand/pracpros-logo-v2.png", width: 1091, height: 229, alt: "PracPros Dental Marketing" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "PracPros — AI-Native Dental Growth Platform",
    description:
      "Google Premier Partner. AI-native patient acquisition for dental practices serious about growth.",
    images: ["/brand/pracpros-logo-v2.png"],
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
