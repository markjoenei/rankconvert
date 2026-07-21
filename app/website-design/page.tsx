import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ServicePainPoint } from "@/components/service/ServicePainPoint";
import { ServiceValueProp } from "@/components/service/ServiceValueProp";
import { ServiceFAQ } from "@/components/service/ServiceFAQ";
import { PortfolioGrid } from "@/components/service/PortfolioGrid";
import { GoogleReviewsBadge } from "@/components/ui/GoogleReviewsBadge";
import { LeadForm } from "@/components/ui/LeadForm";
import { SemrushEdgeBanner } from "@/components/semrush/EdgeBanner";
import { SemrushDataStats } from "@/components/semrush/DataStats";
import { SemrushGetStarted } from "@/components/semrush/GetStarted";
import { SemrushSolutions } from "@/components/semrush/Solutions";
import { SemrushNews } from "@/components/semrush/News";
import { SemrushPreFooterCTA } from "@/components/semrush/PreFooterCTA";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Professional Website Design Melbourne — RankConvert",
  description:
    "Professional website design that turns visitors into customers. High-converting websites built specifically for Australian businesses.",
};

const PROJECTS = [
  {
    client: "DCG Plumbing",
    category: "Trades · Multi-page SEO Site",
    description:
      "An SEO-optimised site with multiple service pages, hitting page-one Google rankings for the main keywords within the first three months.",
    image: "https://i0.wp.com/rankconvert.com.au/wp-content/uploads/2026/04/dcg-plumbing-website-design-hero-section.png?fit=1440%2C900&ssl=1",
    imageAlt: "DCG Plumbing website hero design",
    accentColor: "#60a5fa",
  },
  {
    client: "Sprociety",
    category: "Café · Shopify Store",
    description:
      "A Shopify store built to sell Sprociety's roasted coffee beans while showcasing their Bayswater café brand and atmosphere.",
    image: "https://i0.wp.com/rankconvert.com.au/wp-content/uploads/2026/04/sprociety-website-design-hero-section.webp?fit=1440%2C900&ssl=1",
    imageAlt: "Sprociety Coffee Shopify store",
    accentColor: "#a78bfa",
  },
  {
    client: "XL Fitness",
    category: "Fitness · Conversion-Focused Site",
    description:
      "A conversion-focused, tech-style build for a state-of-the-art gym — delivered in just 7 days ahead of their launch.",
    image: "https://i0.wp.com/rankconvert.com.au/wp-content/uploads/2026/04/xl-fitness-website-design-hero-section.webp?fit=1440%2C900&ssl=1",
    imageAlt: "XL Fitness website hero design",
    accentColor: "#f97316",
  },
  {
    client: "YoungConstruct",
    category: "Construction · 50+ Page SEO",
    description:
      "A large-scale 50+ page website for YoungConstruct, fully SEO-optimised and converting visitors at 5%+.",
    image: "https://i0.wp.com/rankconvert.com.au/wp-content/uploads/2026/05/youngconstruct-website-design-update.png?fit=1440%2C900&ssl=1",
    imageAlt: "YoungConstruct website design",
    accentColor: "#f5c842",
  },
  {
    client: "AAD Plumbing",
    category: "Trades · Fast Launch",
    description:
      "A simple, fast website for AAD Plumbing that helped launch the business and start generating enquiries from day one.",
    image: "https://i0.wp.com/rankconvert.com.au/wp-content/uploads/2026/04/aad-plumbing-website-design-hero-sectino.webp?fit=1440%2C900&ssl=1",
    imageAlt: "AAD Plumbing website design",
    accentColor: "#60a5fa",
  },
  {
    client: "4K Nasal Strips",
    category: "E-commerce · Health & Wellness",
    description:
      "A high-converting ecommerce store for 4K Nasal Strips currently maintaining a 4%+ conversion rate on cold traffic.",
    image: "https://i0.wp.com/rankconvert.com.au/wp-content/uploads/2026/04/4k-nasal-strips-website-design-hero-section.webp?fit=1440%2C900&ssl=1",
    imageAlt: "4K Nasal Strips ecommerce store",
    accentColor: "#f472b6",
  },
];

const HEALTH_CHECKS = [
  { label: "Loads in under 2 seconds on 4G", impact: "High" },
  { label: "Mobile-first, thumb-friendly layout", impact: "High" },
  { label: "Clear primary call-to-action above the fold", impact: "High" },
  { label: "Trust signals (reviews, guarantees, credentials)", impact: "Medium" },
  { label: "SEO-optimised titles, meta, and heading hierarchy", impact: "High" },
  { label: "Real product/service imagery — no generic stock", impact: "Medium" },
  { label: "Enquiry form no more than 4 fields deep", impact: "High" },
  { label: "Written for humans, not for a template", impact: "Medium" },
];

export default function WebsiteDesignPage() {
  return (
    <>
      {/* Hero with 3-column vertical portfolio marquee background */}
      <section
        className="relative overflow-hidden"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(91,155,213,0.18) 0%, transparent 60%), linear-gradient(180deg, #10121a 0%, #09090e 60%, #0b0d14 100%)",
        }}
      >
        {/* 3-column portfolio marquee — right side only, behind the form */}
        <div
          className="hidden lg:block absolute inset-y-0 pointer-events-none overflow-hidden"
          style={{ right: 0, width: "42%" }}
          aria-hidden
        >
          <div className="absolute inset-0 flex gap-3 opacity-[0.55]">
            {[
              { src: "/portfolio/4knasalstrips.png", dir: "up"   as const, dur: "48s" },
              { src: "/portfolio/aadplumbing.png",   dir: "down" as const, dur: "56s" },
              { src: "/portfolio/dcgplumbing.png",   dir: "up"   as const, dur: "52s" },
            ].map((col, i) => (
              <div
                key={i}
                className="relative flex-1 h-full overflow-hidden"
                style={{ minHeight: "100%" }}
              >
                <div
                  className="absolute inset-x-0 top-0 flex flex-col"
                  style={{
                    animation: `${col.dir === "up" ? "marquee-y-up" : "marquee-y-down"} ${col.dur} linear infinite`,
                    willChange: "transform",
                  }}
                >
                  {[0, 1].map(k => (
                    <div key={k} className="relative w-full" style={{ paddingBottom: "220%" }}>
                      <Image
                        src={col.src}
                        alt=""
                        fill
                        className="object-cover object-top rounded-xl"
                        sizes="140px"
                        priority={false}
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Fade in from the left so the marquee blends with the dark hero */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(90deg, #09090e 0%, rgba(9,9,14,0.85) 15%, rgba(9,9,14,0.2) 55%, rgba(9,9,14,0) 100%)",
            }}
          />
          {/* Top/bottom edge fade */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(9,9,14,0.9) 0%, rgba(9,9,14,0) 12%, rgba(9,9,14,0) 88%, rgba(9,9,14,0.9) 100%)",
            }}
          />
        </div>

        {/* Grid overlay */}
        <div
          className="absolute inset-0 pointer-events-none opacity-40"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        {/* Content */}
        <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 lg:pt-24 pb-14 sm:pb-20 lg:pb-24">
          <div className="grid lg:grid-cols-[1.5fr_1fr] gap-10 lg:gap-14 items-center">

            <div className="text-center lg:text-left max-w-[760px] mx-auto lg:mx-0">
              <div className="mb-6 animate-fade-up">
                <GoogleReviewsBadge rating="5.0" />
              </div>

              <h1
                className="text-[32px] sm:text-[48px] lg:text-[64px] font-black text-white leading-[1.03] tracking-[-1.8px] mb-5 animate-fade-up"
                style={{ animationDelay: "0.05s" }}
              >
                Professional Website Design{" "}
                <span style={{ color: "#f5c842" }}>Melbourne</span>
              </h1>

              <p
                className="text-[15px] sm:text-[18px] text-white/70 leading-[1.6] mb-8 max-w-[620px] mx-auto lg:mx-0 animate-fade-up"
                style={{ animationDelay: "0.1s" }}
              >
                Professional website design that turns visitors into customers. Built specifically for Australian businesses.
              </p>

              <div
                className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-8 animate-fade-up"
                style={{ animationDelay: "0.15s" }}
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-7 h-[50px] bg-[#f5c842] text-[#09090e] text-[14px] font-bold rounded-full hover:bg-[#e6b830] transition-colors"
                >
                  Scale My Business Today
                </Link>
                <a
                  href="tel:0478186355"
                  className="inline-flex items-center justify-center gap-2 px-6 h-[50px] bg-white/5 text-white text-[14px] font-semibold rounded-full border border-white/10 hover:bg-white/10 transition-colors backdrop-blur-sm"
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                    <path d="M2 3.5a1.5 1.5 0 011.5-1.5h1.4a1 1 0 01.95.68l.7 2.09a1 1 0 01-.24 1.02L5.4 6.8a8 8 0 003.8 3.8l1-.9a1 1 0 011.02-.24l2.1.7a1 1 0 01.68.95V12.5A1.5 1.5 0 0112.5 14C6.7 14 2 9.3 2 3.5z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
                  </svg>
                  0478 186 355
                </a>
              </div>

              <ul
                className="flex flex-wrap items-center justify-center lg:justify-start gap-x-5 gap-y-3 text-[13px] text-white/75 animate-fade-up"
                style={{ animationDelay: "0.2s" }}
              >
                {[
                  "High-Converting Designs That Bring More Leads",
                  "Professionally Showcases Your Business",
                  "Get FREE 30-Minute Website Strategy Session",
                ].map(b => (
                  <li key={b} className="flex items-center gap-1.5">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden className="shrink-0">
                      <circle cx="7" cy="7" r="6" fill="rgba(245,200,66,0.15)" stroke="#f5c842" strokeWidth="1.1" />
                      <path d="M4.5 7l1.8 1.8L9.5 5" stroke="#f5c842" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {b}
                  </li>
                ))}
              </ul>
            </div>

            <LeadForm />
          </div>
        </div>
      </section>

      <Reveal variant="up"><SemrushEdgeBanner /></Reveal>

      <Reveal variant="up">
        <ServicePainPoint
          eyebrow="Struggling Without Professional Website Design?"
          title="What happens when your business has a low-quality website — or none at all?"
          intro="A weak online presence quietly costs you the customers you never even knew were looking. Every day, high-intent buyers are checking you out — and either enquiring or clicking away in seconds."
          pains={[
            "Potential customers can't find you or don't trust you",
            "Losing jobs to competitors with a stronger online presence",
            "Relying purely on word of mouth with inconsistent work",
            "First impressions that make your business look outdated or unprofessional",
          ]}
        />
      </Reveal>

      <Reveal variant="left">
        <ServiceValueProp
          eyebrow="Turn Your Website Into a High-Converting Asset"
          title="Websites Built to Rank, Convert & Grow."
          body="A well-designed website should do more than look good. We build websites engineered to rank on Google and convert visitors into real enquiries and customers. Anyone can create a nice-looking site — very few are built with the right structure, sales psychology, and SEO strategy to actually drive results. That's where our difference is."
          outcomes={[
            { value: "3.9×", label: "Avg. conversion lift" },
            { value: "5%+", label: "Site-wide conversion" },
            { value: "SEO-1st", label: "Structure & content" },
            { value: "Mobile", label: "First design" },
          ]}
        />
      </Reveal>

      {/* Portfolio grid — real live-site projects */}
      <Reveal variant="up">
        <PortfolioGrid
          eyebrow="Our recent work"
          title="Recent Professional Website Designs for Our Melbourne Clients"
          subtitle="A look inside some of the websites we've crafted for our clients across trades, hospitality, fitness, e-commerce and construction."
          items={PROJECTS}
          theme="light"
        />
      </Reveal>

      {/* UX enhancement: Website Grader self-check */}
      <Reveal variant="right">
        <section
          className="py-16 sm:py-24"
          style={{ background: "linear-gradient(180deg, #12141c 0%, #0a0b10 55%, #0c0e15 100%)" }}
        >
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-[1fr_1.1fr] gap-10 lg:gap-16 items-start">
              <div>
                <div className="text-[11px] font-bold uppercase tracking-widest mb-3" style={{ color: "#f5c842" }}>
                  Free self-check
                </div>
                <h2 className="text-[26px] sm:text-[38px] lg:text-[50px] font-black text-white leading-[1.06] tracking-[-1px] mb-5">
                  Grade your website in 60 seconds.
                </h2>
                <p className="text-[14px] sm:text-[16px] leading-[1.7] mb-6" style={{ color: "rgba(255,255,255,0.6)" }}>
                  Tick every box your current website already nails. If you score below 6 out of 8, the site is quietly costing
                  you leads every week.
                </p>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 h-[46px] text-[#09090e] text-[13px] font-bold rounded-full hover:bg-[#e6b830] transition-colors"
                  style={{ background: "#f5c842" }}
                >
                  Get a Free Site Audit
                </a>
              </div>

              <ul className="space-y-2.5">
                {HEALTH_CHECKS.map((c, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 p-4 rounded-xl"
                    style={{
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(255,255,255,0.07)",
                    }}
                  >
                    <span
                      className="w-6 h-6 rounded-md flex items-center justify-center shrink-0 mt-0.5"
                      style={{ background: "rgba(245,200,66,0.10)", border: "1px solid rgba(245,200,66,0.30)" }}
                    >
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
                        <path d="M3 6l2 2 4-5" stroke="#f5c842" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span className="flex-1 text-[13px] sm:text-[14px] text-white/85 leading-[1.5]">{c.label}</span>
                    <span
                      className="text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full shrink-0 mt-0.5"
                      style={{
                        color: c.impact === "High" ? "#f5c842" : "#60a5fa",
                        background: c.impact === "High" ? "rgba(245,200,66,0.10)" : "rgba(96,165,250,0.10)",
                        border: `1px solid ${c.impact === "High" ? "rgba(245,200,66,0.30)" : "rgba(96,165,250,0.30)"}`,
                      }}
                    >
                      {c.impact}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal variant="left"><SemrushDataStats /></Reveal>
      <Reveal variant="right"><SemrushGetStarted bottomOverlap /></Reveal>
      <Reveal variant="up"><SemrushSolutions /></Reveal>

      <Reveal variant="left">
        <ServiceFAQ
          title="Professional Website Design FAQs"
          intro="The most frequently asked questions about our professional website design services."
          items={[
            {
              q: "How long does a website build take?",
              a: "Most projects wrap in 4–8 weeks. Larger 50+ page sites with heavy SEO content can run 8–12 weeks. Turnaround comes down to how fast we can lock in content and imagery with you — and yes, we've delivered launch-ready sites in as little as 7 days when the brief is tight.",
            },
            {
              q: "Will the site be built for SEO from day one?",
              a: "Yes. Every page structure, URL, meta setup and content brief is built with search in mind so the site can start earning rankings the moment it's live — not months after a separate SEO rebuild.",
            },
            {
              q: "Do you build in WordPress, Shopify, or custom?",
              a: "We match the platform to the goal. Service businesses usually go on a lightweight WordPress or Next.js build. E-commerce is Shopify. We'll recommend the fit before we start.",
            },
            {
              q: "Can I edit the site myself after launch?",
              a: "Absolutely. We hand over training and simple content-editing access so you can update copy, images and blog posts without depending on us.",
            },
            {
              q: "Are there lock-in contracts after launch?",
              a: "No. Every ongoing engagement is month-to-month. If you want to run the site yourself, that's fine — we'll leave you with everything you need.",
            },
          ]}
        />
      </Reveal>

      <Reveal variant="up"><SemrushNews /></Reveal>
      <Reveal variant="scale"><SemrushPreFooterCTA /></Reveal>
    </>
  );
}
