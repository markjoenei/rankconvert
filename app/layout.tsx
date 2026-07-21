import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SemrushPromoBar } from "@/components/semrush/PromoBar";
import { SemrushNavbar } from "@/components/semrush/Navbar";
import { SemrushFooter } from "@/components/semrush/Footer";
import { Reveal } from "@/components/ui/Reveal";

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
  metadataBase: new URL("https://rankconvert.com.au"),
  title: {
    default: "RankConvert — Melbourne Digital Marketing Services",
    template: "%s · RankConvert",
  },
  description:
    "Digital marketing strategies that ACTUALLY grow your business. SEO, website design, Shopify, CRO, and social media marketing for Australian businesses. 670% average organic traffic growth.",
  icons: {
    icon: [
      { url: "/brand/rankconvert-favicon.jpg", type: "image/jpeg", sizes: "any" },
    ],
    apple: { url: "/brand/rankconvert-favicon.jpg", type: "image/jpeg" },
    shortcut: "/brand/rankconvert-favicon.jpg",
  },
  openGraph: {
    title: "RankConvert — Melbourne Digital Marketing Services",
    description:
      "Proven strategies that consistently bring 2–5x ROI. SEO, website design, Shopify, CRO, and social media for Australian businesses.",
    type: "website",
    url: "https://rankconvert.com.au",
    siteName: "RankConvert",
    images: [{ url: "/brand/pracpros-logo-v2.png", width: 1091, height: 229, alt: "RankConvert Digital Marketing" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "RankConvert — Melbourne Digital Marketing Services",
    description:
      "Proven strategies that consistently bring 2–5x ROI. SEO, website design, Shopify, CRO, and social media for Australian businesses.",
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
        <div className="bg-[#09090e] min-h-screen">
          <SemrushPromoBar />
          <SemrushNavbar />
          <main>{children}</main>
          <Reveal variant="fade" duration={700}>
            <SemrushFooter />
          </Reveal>
        </div>
      </body>
    </html>
  );
}
