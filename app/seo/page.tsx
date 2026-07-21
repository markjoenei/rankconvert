import type { Metadata } from "next";
import { ServiceHero } from "@/components/service/ServiceHero";
import { SeoRankWidget } from "@/components/service/SeoRankWidget";
import { LeadForm } from "@/components/ui/LeadForm";
import { ServicePainPoint } from "@/components/service/ServicePainPoint";
import { ServiceValueProp } from "@/components/service/ServiceValueProp";
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
  title: "Melbourne SEO Consultant — RankConvert",
  description:
    "Melbourne SEO Consultant services that turn Google searches into leads and sales. 670.93% average organic traffic growth.",
};

const CASE_STUDIES = [
  {
    client: "Evolved H2O — Ranking #1 for Competitive Commercial Keywords",
    category: "E-commerce · Health & Wellness",
    description:
      "Ranked #1 and top 3 for the most competitive commercial keywords in the hydrogen water space — 457% organic traffic growth and 5,203% sales in 9 months.",
    image: "https://i0.wp.com/rankconvert.com.au/wp-content/uploads/2025/12/evolved-h2o-ecommerce-website-build.jpg?fit=1440%2C900&ssl=1",
    imageAlt: "Evolved H2O ecommerce website SEO case study",
    accentColor: "#f5c842",
  },
  {
    client: "YoungConstruct — 345% Traffic Growth",
    category: "Construction · Domestic Renovations",
    description:
      "A 50+ page SEO- and CRO-optimised site for YoungConstruct with a 345% lift in potential leads and money made back inside the first 6 months.",
    image: "https://i0.wp.com/rankconvert.com.au/wp-content/uploads/2025/12/youngconstruct-seo-website-design.jpg?fit=1440%2C900&ssl=1",
    imageAlt: "YoungConstruct SEO case study",
    accentColor: "#60a5fa",
  },
  {
    client: "DCG Plumbing — Ranking #1 for Specialty Niche Keyword",
    category: "Trades · Melbourne Plumbing",
    description:
      "Ranked #1 for their main specialty niche keyword and #4 for the most competitive keyword in their niche — all within the first 6 months.",
    image: "https://i0.wp.com/rankconvert.com.au/wp-content/uploads/2026/03/dcg-plumbing-hero.png?fit=1440%2C900&ssl=1",
    imageAlt: "DCG Plumbing SEO case study",
    accentColor: "#a78bfa",
  },
];

const SERP_RESULTS = [
  { title: "Melbourne SEO Consultant | Book a Free Strategy Call — RankConvert", url: "rankconvert.com.au", snippet: "Melbourne SEO services that turn Google searches into a predictable pipeline of qualified leads. 670% average traffic growth. No lock-in.", rank: 1, you: true },
  { title: "Local SEO Melbourne | Agency Comparison", url: "example-agency.com.au", snippet: "Compare Melbourne SEO agencies. We handle multiple industries and campaigns...", rank: 2 },
  { title: "SEO Services Melbourne · Traffic Growth", url: "another-agency.com", snippet: "Full service SEO firm with 10+ years of experience across all industries...", rank: 3 },
];

export default function SEOPage() {
  return (
    <>
      <ServiceHero
        title="SEO Consultant"
        titleHighlight="Melbourne"
        subtitle="Melbourne SEO Consultant services that turn Google searches into leads and sales for your business."
        bullets={[
          "670.93% Average Organic Traffic Growth",
          "Consistent Monthly Leads From Google",
          "Get FREE 30-Minute SEO Strategy Session",
        ]}
        rightSlot={
          <div className="relative w-full max-w-[440px] mx-auto lg:mx-0 lg:ml-auto">
            {/* SEO widget layered BEHIND, peeks out bottom-right */}
            <div
              className="absolute inset-0 hidden lg:block"
              style={{ transform: "translate(80px, 40px)", zIndex: 1 }}
              aria-hidden
            >
              <SeoRankWidget />
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
          eyebrow="Struggling to Get Consistent Leads from Google?"
          title="What happens when your business isn't visible where customers are searching?"
          intro="If Google can't find you, nor can the customers who are actively searching to buy what you sell. Every day you're invisible is a day competitors are eating your market."
          pains={[
            "Inconsistent work with busy periods followed by quiet weeks",
            "Low quality leads that waste time or chase the cheapest price",
            "Losing high-value jobs to competitors ranking above you",
            "Spending too much on Meta ads with no results",
          ]}
        />
      </Reveal>

      <Reveal variant="left">
        <ServiceValueProp
          eyebrow="Turn Your Website Into a Consistent Lead Generator"
          title="Consistent, compounding leads from Google search."
          body="Proper SEO turns your website into a consistent lead generator. Instead of relying on luck or ads, you start attracting people who are actively searching for your services. The enquiries are higher quality, your business shows up ahead of competitors, and your lead flow becomes steady and predictable over time."
          outcomes={[
            { value: "670%", label: "Traffic growth (avg.)" },
            { value: "2–5×", label: "Higher-quality leads" },
            { value: "3–6mo", label: "First real results" },
            { value: "100%", label: "Month-to-month" },
          ]}
        />
      </Reveal>

      {/* UX enhancement: Google SERP preview showing what ranking looks like */}
      <Reveal variant="blur">
        <section
          className="py-16 sm:py-24"
          style={{ background: "linear-gradient(180deg, #12141c 0%, #0a0b10 55%, #0c0e15 100%)" }}
        >
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-[720px] mx-auto mb-10 sm:mb-14">
              <div className="text-[11px] font-bold uppercase tracking-widest mb-3" style={{ color: "#f5c842" }}>
                What #1 looks like
              </div>
              <h2 className="text-[26px] sm:text-[38px] lg:text-[50px] font-black text-white leading-[1.06] tracking-[-1px] mb-5">
                Own the top result for the searches that matter.
              </h2>
              <p className="text-[14px] sm:text-[16px] leading-[1.6]" style={{ color: "rgba(255,255,255,0.6)" }}>
                Here&apos;s what a real page-one result looks like when we&apos;re done. The top three organic results
                take roughly 68% of all clicks — everything below page one is essentially invisible.
              </p>
            </div>

            {/* Google search mockup */}
            <div
              className="max-w-[820px] mx-auto rounded-2xl overflow-hidden"
              style={{ background: "#ffffff", boxShadow: "0 40px 100px -20px rgba(0,0,0,0.6)" }}
            >
              {/* Google search bar */}
              <div className="px-6 py-5 border-b border-black/[0.08]">
                <div className="flex items-center gap-3">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.27-4.74 3.27-8.1z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.24 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84A11 11 0 0012 23z" fill="#34A853"/>
                    <path d="M5.84 14.1a6.6 6.6 0 010-4.2V7.07H2.18a11 11 0 000 9.87l3.66-2.84z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1a11 11 0 00-9.82 6.07l3.66 2.84C6.71 7.3 9.14 5.38 12 5.38z" fill="#EA4335"/>
                  </svg>
                  <div className="flex-1 flex items-center gap-2 px-4 py-2.5 rounded-full border border-black/10 text-[14px] text-[#09090e]">
                    <span className="text-[#09090e]">melbourne seo consultant</span>
                    <span className="ml-auto flex items-center gap-3 text-[#4285F4]">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
                        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
                      </svg>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
                        <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.6" />
                        <path d="M21 21l-5-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                      </svg>
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-5 mt-4 text-[12px] text-[#09090e]/60">
                  <span className="text-[#4285F4] border-b-2 border-[#4285F4] pb-1.5">All</span>
                  <span>Images</span>
                  <span>Maps</span>
                  <span>News</span>
                  <span>Videos</span>
                  <span className="ml-auto text-[11px] text-[#09090e]/45">About 4,320,000 results (0.32 seconds)</span>
                </div>
              </div>

              {/* Results */}
              <div className="p-6 space-y-6">
                {SERP_RESULTS.map(r => (
                  <div
                    key={r.rank}
                    className="relative pl-3"
                    style={r.you ? { borderLeft: "3px solid #f5c842" } : { borderLeft: "3px solid transparent" }}
                  >
                    {r.you && (
                      <span
                        className="absolute -left-1.5 -top-2 px-2 py-0.5 rounded-full text-[9px] font-black uppercase tracking-widest text-[#09090e]"
                        style={{ background: "#f5c842" }}
                      >
                        You · #1
                      </span>
                    )}
                    <div className="text-[12px] text-[#09090e]/70 mb-0.5">{r.url}</div>
                    <div className="text-[16px] leading-[1.4] font-medium mb-1" style={{ color: r.you ? "#1a0dab" : "#1a0dab" }}>
                      {r.title}
                    </div>
                    <div className="text-[13px] leading-[1.5] text-[#09090e]/65 max-w-[600px]">
                      {r.snippet}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center mt-8 text-[13px]" style={{ color: "rgba(255,255,255,0.5)" }}>
              Positions <span className="font-bold text-white">1</span>, <span className="font-bold text-white">2</span> and <span className="font-bold text-white">3</span> take ~68% of clicks. Everything below page one takes less than 1%.
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal variant="left"><SemrushDataStats /></Reveal>

      {/* Real client SEO case studies */}
      <Reveal variant="up">
        <PortfolioGrid
          eyebrow="Proven SEO results"
          title="Proven SEO Results Across Industries"
          subtitle="Just some of our clients we have helped rank on page 1 in Google, turning their website traffic into paying customers."
          items={CASE_STUDIES}
          theme="dark"
        />
      </Reveal>

      <Reveal variant="right"><SemrushGetStarted bottomOverlap /></Reveal>
      <Reveal variant="up"><SemrushSolutions /></Reveal>

      <Reveal variant="left">
        <ServiceFAQ
          title="Melbourne SEO Consultant FAQs"
          intro="Real questions from business owners weighing up SEO for the first time."
          items={[
            {
              q: "How long until I see results from SEO?",
              a: "SEO is a long-term strategy, not an overnight fix. Most businesses start seeing movement within 3–6 months, with stronger, more competitive results building over time. The upside: once rankings are earned they tend to be stable and continue producing leads consistently.",
            },
            {
              q: "Do I have to lock into a long contract?",
              a: "No. Our SEO services are completely month-to-month. We don't believe in locking clients into long-term contracts — we focus on delivering results so you actually want to stay.",
            },
            {
              q: "How do I know SEO will actually bring me more leads?",
              a: "We focus on the quality of work we deliver for current clients, not the quantity of new clients we bring on. Our goal is simple: destroy your competition (ethically) and elevate your business to the top of Google for the searches that matter.",
            },
            {
              q: "Should I do paid ads or SEO?",
              a: "Paid ads are like going to the fruit shop — you get instant results, but you have to keep going back every week to maintain supply. The moment you stop, the fruit stops. SEO is like planting a fruit tree — it takes time to grow, but once established, it produces consistently for the long term.",
            },
            {
              q: "Do I really need SEO if I already get work through referrals?",
              a: "Referrals are great, but they're not always consistent. SEO adds a predictable flow of leads by making sure your business shows up when new customers are searching for your services.",
            },
          ]}
        />
      </Reveal>

      <Reveal variant="up"><SemrushNews /></Reveal>
      <Reveal variant="scale"><SemrushPreFooterCTA /></Reveal>
    </>
  );
}
