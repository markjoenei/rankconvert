import type { Metadata } from "next";
import { ServiceHero } from "@/components/service/ServiceHero";
import { ShopifyPerformanceWidget } from "@/components/service/ShopifyPerformanceWidget";
import { LeadForm } from "@/components/ui/LeadForm";
import { ServicePainPoint } from "@/components/service/ServicePainPoint";
import { ServiceValueProp } from "@/components/service/ServiceValueProp";
import { ServiceProcess } from "@/components/service/ServiceProcess";
import { ServiceFAQ } from "@/components/service/ServiceFAQ";
import { PortfolioGrid } from "@/components/service/PortfolioGrid";
import { SemrushEdgeBanner } from "@/components/semrush/EdgeBanner";
import { SemrushDataStats } from "@/components/semrush/DataStats";
import { SemrushGetStarted } from "@/components/semrush/GetStarted";
import { SemrushSolutions } from "@/components/semrush/Solutions";
import { SemrushNews } from "@/components/semrush/News";
import { SemrushPreFooterCTA } from "@/components/semrush/PreFooterCTA";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Melbourne Shopify Developers — RankConvert",
  description:
    "Melbourne Shopify developers that specialise in optimising your store for high conversion rates and maximum sales.",
};

const STORES = [
  {
    client: "Eucy — @shannenmichaela",
    category: "Influencer · Shopify Store",
    description:
      "We optimised Instagram influencer @shannenmichaela's Shopify store. In the first month of working together, we lifted sales nearly 3× with a 4.63% conversion rate.",
    image: "https://i0.wp.com/rankconvert.com.au/wp-content/uploads/2026/05/eucy-shopify-store-development.webp?fit=1440%2C900&ssl=1",
    imageAlt: "Eucy Shopify store development",
    accentColor: "#a78bfa",
  },
  {
    client: "Sprociety Coffee",
    category: "Café & Coffee Roastery · Melbourne",
    description:
      "A Shopify store built for Sprociety to sell their roasted coffee beans while showcasing their Bayswater café brand.",
    image: "https://i0.wp.com/rankconvert.com.au/wp-content/uploads/2026/04/sprociety-website-design-hero-section.webp?fit=1440%2C900&ssl=1",
    imageAlt: "Sprociety Coffee Shopify store",
    accentColor: "#f5c842",
  },
  {
    client: "Evolved H2O",
    category: "Health & Wellness · Melbourne",
    description:
      "We helped grow Evolved H2O from the ground up — scaling to 6 figures in the first 6 months with a conversion-first store and SEO-driven traffic.",
    image: "https://i0.wp.com/rankconvert.com.au/wp-content/uploads/2026/05/evolved-h2o-seo-success-1.webp?fit=1440%2C900&ssl=1",
    imageAlt: "Evolved H2O Shopify store",
    accentColor: "#60a5fa",
  },
  {
    client: "2nd Hand Fitness",
    category: "Fitness & Lifestyle · Melbourne",
    description:
      "We redesigned the store layout and product pages, delivering a 50% conversion rate lift. We also built a system to organise their 250+ product catalogue.",
    image: "https://i0.wp.com/rankconvert.com.au/wp-content/uploads/2026/05/2nd-hand-fitness-shopify-store.webp?fit=1440%2C900&ssl=1",
    imageAlt: "2nd Hand Fitness Shopify store",
    accentColor: "#f97316",
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

const FEATURES = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
        <rect x="2" y="4" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="1.4" />
        <path d="M2 8h16" stroke="currentColor" strokeWidth="1.4" />
      </svg>
    ),
    title: "Custom store design",
    body: "Bespoke design that matches your brand — never a stock theme.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
        <path d="M3 12l4-8 3 6 3-4 4 8" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" strokeLinecap="round" />
      </svg>
    ),
    title: "Conversion-optimised checkout",
    body: "Cart, upsell logic and one-page checkout tuned for fewer drop-offs.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
        <circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="1.4" />
        <path d="M10 5v5l3 2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
    title: "Subscriptions & bundles",
    body: "Recurring revenue via subscriptions, bundles and volume-based discounts.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
        <circle cx="10" cy="10" r="7.5" stroke="currentColor" strokeWidth="1.4" />
        <path d="M2.5 10h15M10 2.5c2.5 2.5 3.8 5 3.8 7.5s-1.3 5-3.8 7.5c-2.5-2.5-3.8-5-3.8-7.5S7.5 5 10 2.5z" stroke="currentColor" strokeWidth="1.2" />
      </svg>
    ),
    title: "SEO product & collection pages",
    body: "Meta, structure and content built so your store earns organic traffic.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
        <rect x="3" y="3" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.4" />
        <rect x="11" y="3" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.4" />
        <rect x="3" y="11" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.4" />
        <rect x="11" y="11" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.4" />
      </svg>
    ),
    title: "Product catalogue setup",
    body: "Clean product data, variants, options and inventory — no data hell.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
        <path d="M4 6l6 6 6-6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M4 12l6 6 6-6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Migration & 301 redirects",
    body: "Move from WooCommerce, Magento, Wix, Squarespace — SEO preserved.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
        <path d="M10 2v16M2 10h16" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
    title: "Speed & Core Web Vitals",
    body: "Sub-2-second load times with all Core Web Vitals in the green.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
        <rect x="3" y="4" width="14" height="12" rx="2" stroke="currentColor" strokeWidth="1.4" />
        <path d="M7 10l2 2 4-4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Analytics & pixel setup",
    body: "GA4, GTM, Meta pixel, TikTok pixel — all tracking cleanly from day one.",
  },
];

export default function ShopifyPage() {
  return (
    <>
      <ServiceHero
        title="Melbourne Shopify"
        titleHighlight="Developers"
        subtitle="Melbourne Shopify developers that specialise in optimising your store for high conversion rates and maximum sales."
        bullets={[
          "Experience Growing 6 and 7-Figure Shopify Stores",
          "Consistently High Conversion Rates of 3–5%",
          "Sales Increases for Our Clients of 2×–5.71×",
        ]}
        rightSlot={
          <div className="relative w-full max-w-[440px] mx-auto lg:mx-0 lg:ml-auto">
            {/* Shopify widget layered BEHIND, peeks out bottom-right */}
            <div
              className="absolute inset-0 hidden lg:block"
              style={{ transform: "translate(80px, 40px)", zIndex: 1 }}
              aria-hidden
            >
              <ShopifyPerformanceWidget />
            </div>
            {/* Form on top */}
            <div className="relative" style={{ zIndex: 10 }}>
              <LeadForm />
            </div>
          </div>
        }
      />

      <Reveal variant="up"><SemrushEdgeBanner /></Reveal>

      <Reveal variant="up">
        <ServicePainPoint
          eyebrow="Struggling to Grow Your Shopify Store?"
          title="What happens when your Shopify store isn't growing the way it should?"
          intro="Getting visitors is only half of ecommerce. Most stores lose the sale in the last thirty seconds because of clunky product pages, awkward checkouts, or a lack of trust signals."
          pains={[
            "Stuck at the same traffic or conversion rate with no clear path to improve",
            "Spending money on marketing but still getting poor conversion results",
            "Feeling lost with all the different strategies and not knowing what actually works",
            "Not knowing who to trust or wanting to avoid overseas agencies that don't understand the Australian market",
          ]}
        />
      </Reveal>

      <Reveal variant="left">
        <ServiceValueProp
          eyebrow="Turn Your Online Store Into an E-Commerce Success"
          title="Turn browsers into loyal, repeat customers."
          body="Proper optimisation turns your Shopify store into a driver of ecommerce success. Instead of relying on ads or guesswork, you start attracting people who are ready to buy. The traffic is higher quality, your store converts better, and your sales become more consistent over time."
          outcomes={[
            { value: "3–5%", label: "Conversion rate" },
            { value: "2–5.7×", label: "Sales increases" },
            { value: "6–7fig", label: "Stores scaled" },
            { value: "AU", label: "Local team" },
          ]}
        />
      </Reveal>

      {/* UX enhancement: Shopify build process */}
      <Reveal variant="up">
        <ServiceProcess
          eyebrow="Our Shopify build process"
          title="How we ship high-converting Shopify stores."
          intro="A proven three-stage build that turns your product catalogue into a conversion-optimised store ready to scale on paid and organic channels."
          theme="dark"
          steps={[
            {
              n: "01",
              title: "Store strategy & UX",
              body: "We map buyer journey, category structure, product data and conversion pathways before a single pixel is designed.",
              deliverable: "Store map + UX brief",
              timing: "Week 1",
            },
            {
              n: "02",
              title: "Custom design & build",
              body: "We design and build a bespoke Shopify theme around your brand, then configure product migration, subscriptions, bundles, reviews and upsells.",
              deliverable: "Conversion-ready staging store",
              timing: "Week 2–6",
            },
            {
              n: "03",
              title: "Launch & optimisation",
              body: "301 redirects, GA4, GTM, pixels, conversion tracking, QA — then live launch with a 30-day post-launch CRO sprint.",
              deliverable: "Live store + CRO report",
              timing: "Week 7 onward",
            },
          ]}
        />
      </Reveal>

      {/* Real Shopify store showcase */}
      <Reveal variant="up">
        <PortfolioGrid
          eyebrow="Store showcase"
          title="Australian Shopify Stores We Have Helped Grow & Improve"
          subtitle="A look inside some of the Shopify stores we've helped grow, launch and optimise across health, fitness, hospitality and lifestyle."
          items={STORES}
          theme="light"
        />
      </Reveal>

      {/* UX enhancement: What's included */}
      <Reveal variant="right">
        <section
          className="py-16 sm:py-24"
          style={{ background: "linear-gradient(180deg, #12141c 0%, #0a0b10 55%, #0c0e15 100%)" }}
        >
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-[720px] mx-auto mb-10 sm:mb-14">
              <div className="text-[11px] font-bold uppercase tracking-widest mb-3" style={{ color: "#f5c842" }}>
                Everything included
              </div>
              <h2 className="text-[26px] sm:text-[38px] lg:text-[50px] font-black text-white leading-[1.06] tracking-[-1px] mb-5">
                Every store ships with the fundamentals.
              </h2>
              <p className="text-[14px] sm:text-[16px] leading-[1.6]" style={{ color: "rgba(255,255,255,0.6)" }}>
                No stripped-down starter tier. Every build includes what a modern Shopify store actually needs to convert.
              </p>
            </div>

            <div className="flex sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 overflow-x-auto snap-x snap-mandatory -mx-4 px-4 sm:mx-0 sm:px-0 sm:overflow-visible [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {FEATURES.map(f => (
                <div
                  key={f.title}
                  className="rounded-2xl p-5 sm:p-6 flex flex-col gap-3 shrink-0 w-[72%] snap-start sm:w-auto sm:shrink"
                  style={{
                    background: "#0f1017",
                    border: "1px solid rgba(255,255,255,0.07)",
                  }}
                >
                  <span
                    className="w-11 h-11 rounded-xl flex items-center justify-center text-[#f5c842]"
                    style={{ background: "rgba(245,200,66,0.10)", border: "1px solid rgba(245,200,66,0.28)" }}
                  >
                    {f.icon}
                  </span>
                  <h3 className="text-[14px] sm:text-[15px] font-black text-white leading-[1.25] tracking-tight">{f.title}</h3>
                  <p className="text-[12px] sm:text-[13px] leading-[1.55]" style={{ color: "rgba(255,255,255,0.55)" }}>
                    {f.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal variant="left"><SemrushDataStats /></Reveal>
      <Reveal variant="right"><SemrushGetStarted bottomOverlap /></Reveal>
      <Reveal variant="up"><SemrushSolutions /></Reveal>

      <Reveal variant="left">
        <ServiceFAQ
          title="Shopify Web Developer FAQs"
          intro="What owners ask before handing us the keys to their store."
          items={[
            {
              q: "Can you migrate my existing store to Shopify?",
              a: "Yes — from WooCommerce, Magento, Wix, Squarespace, or a custom build. We handle products, customers, historical orders, and 301 redirects so SEO isn't lost.",
            },
            {
              q: "Do you set up subscriptions and bundles?",
              a: "Yes. Both drive higher average order value and lifetime value. We recommend and configure the right apps for your product mix.",
            },
            {
              q: "Do you build custom themes or use a stock theme?",
              a: "We tailor the store to your brand rather than shoe-horning it into a stock theme. Fast, mobile-first, and every element chosen to reduce checkout friction.",
            },
            {
              q: "Will the store rank in Google?",
              a: "Absolutely. Every product and collection page is built with proper structure, metadata and content — so the store earns traffic, not just pays for it.",
            },
            {
              q: "Do you offer ongoing store management?",
              a: "Yes. Optional monthly retainers cover CRO experiments, new product launches and ongoing content — all month-to-month, no lock-ins.",
            },
          ]}
        />
      </Reveal>

      <Reveal variant="up"><SemrushNews /></Reveal>
      <Reveal variant="scale"><SemrushPreFooterCTA /></Reveal>
    </>
  );
}
