import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { SemrushPreFooterCTA } from "@/components/semrush/PreFooterCTA";

export const metadata: Metadata = {
  title: "Sitemap — RankConvert",
  description:
    "A full map of every page on rankconvert.com.au — main pages, service pages and legal pages.",
};

type Group = {
  heading: string;
  description: string;
  accent: string;
  items: { label: string; href: string; hint?: string }[];
};

const GROUPS: Group[] = [
  {
    heading: "Main",
    description: "Core pages that introduce RankConvert and the way we work.",
    accent: "#f5c842",
    items: [
      { label: "Home", href: "/", hint: "Melbourne Digital Marketing Services" },
      { label: "About", href: "/about", hint: "The RankConvert story, team and values" },
      { label: "Blog", href: "/blog", hint: "SEO and digital marketing insights" },
      { label: "Contact", href: "/contact", hint: "Book a free strategy call or send a message" },
    ],
  },
  {
    heading: "Services",
    description: "Deep dives into each digital marketing service we deliver.",
    accent: "#60a5fa",
    items: [
      { label: "SEO Consultant Melbourne", href: "/seo", hint: "670.93% average organic traffic growth" },
      { label: "Professional Website Design Melbourne", href: "/website-design", hint: "Sites built to rank and convert" },
      { label: "Melbourne Shopify Developers", href: "/shopify", hint: "6- and 7-figure store development" },
      { label: "Conversion Rate Optimisation Melbourne", href: "/cro", hint: "More revenue from the same traffic" },
      { label: "Social Media Marketing Melbourne", href: "/social-media", hint: "Organic content that actually sells" },
    ],
  },
  {
    heading: "Legal",
    description: "How we handle your data, and the terms that apply when we work together.",
    accent: "#a78bfa",
    items: [
      { label: "Privacy Policy", href: "/privacy-policy", hint: "How we handle your information" },
      { label: "Terms of Service", href: "/terms-of-service", hint: "The terms of any engagement" },
      { label: "Sitemap", href: "/sitemap", hint: "This page" },
    ],
  },
];

export default function SitemapPage() {
  const totalPages = GROUPS.reduce((n, g) => n + g.items.length, 0);

  return (
    <>
      {/* Hero */}
      <section
        className="relative overflow-hidden"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(91,155,213,0.18) 0%, transparent 60%), linear-gradient(180deg, #10121a 0%, #09090e 60%, #0b0d14 100%)",
        }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 lg:pt-24 pb-12 sm:pb-16 lg:pb-20">
          <div className="max-w-[820px] mx-auto text-center">
            <div className="text-[11px] font-bold uppercase tracking-widest mb-3" style={{ color: "#f5c842" }}>
              Site map
            </div>
            <h1 className="text-[32px] sm:text-[48px] lg:text-[60px] font-black text-white leading-[1.05] tracking-[-1.6px] mb-5">
              Every page on RankConvert.
            </h1>
            <p className="text-[15px] sm:text-[17px] text-white/60 leading-[1.65] max-w-[600px] mx-auto">
              A complete index of {totalPages} pages across the site — grouped by main pages, services and legal.
            </p>
          </div>
        </div>
      </section>

      {/* Groups */}
      <Reveal variant="up">
        <section className="py-14 sm:py-20" style={{ background: "#f6f6f8" }}>
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-5 sm:gap-6">
              {GROUPS.map(g => (
                <article
                  key={g.heading}
                  className="rounded-2xl p-6 sm:p-7 flex flex-col"
                  style={{ background: "#ffffff", border: "1px solid rgba(0,0,0,0.08)" }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span
                      className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                      style={{ background: `${g.accent}18`, border: `1px solid ${g.accent}40` }}
                    >
                      <span className="w-2 h-2 rounded-full" style={{ background: g.accent }} />
                    </span>
                    <div>
                      <h2 className="text-[16px] sm:text-[18px] font-black text-[#09090e] leading-[1.2]">
                        {g.heading}
                      </h2>
                      <div className="text-[11px] text-[#09090e]/40 font-semibold uppercase tracking-widest">
                        {g.items.length} pages
                      </div>
                    </div>
                  </div>

                  <p className="text-[13px] leading-[1.6] mb-5" style={{ color: "rgba(9,9,14,0.55)" }}>
                    {g.description}
                  </p>

                  <ul className="space-y-2 mt-auto">
                    {g.items.map(it => (
                      <li key={it.href}>
                        <Link
                          href={it.href}
                          className="group flex items-start justify-between gap-3 rounded-lg p-3 transition-colors hover:bg-[#f6f6f8]"
                          style={{ border: "1px solid rgba(0,0,0,0.06)" }}
                        >
                          <div className="min-w-0">
                            <div className="text-[13px] sm:text-[14px] font-bold text-[#09090e] leading-[1.3]">
                              {it.label}
                            </div>
                            {it.hint && (
                              <div className="text-[11px] mt-0.5" style={{ color: "rgba(9,9,14,0.5)" }}>
                                {it.hint}
                              </div>
                            )}
                          </div>
                          <svg
                            width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden
                            className="text-[#09090e]/30 group-hover:text-[#f5c842] shrink-0 transition-colors mt-1"
                          >
                            <path d="M4 3h6v6M10 3L3 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>

            <div className="mt-10 text-center">
              <div className="text-[12px] text-[#09090e]/50">
                Looking for something specific?{" "}
                <Link href="/contact" className="text-[#c9971a] font-bold underline underline-offset-2">
                  Get in touch
                </Link>{" "}
                and we&apos;ll point you in the right direction.
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal variant="scale">
        <SemrushPreFooterCTA />
      </Reveal>
    </>
  );
}
