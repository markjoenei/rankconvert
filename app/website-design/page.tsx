import type { Metadata } from "next";
import { ServiceHero } from "@/components/service/ServiceHero";
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
      <ServiceHero
        eyebrow="5-Star Rated by Australian Business Owners"
        title="Professional Website Design"
        titleHighlight="Melbourne"
        subtitle="Professional website design that turns visitors into customers. Built specifically for Australian businesses."
        bullets={[
          "High-Converting Designs That Bring More Leads",
          "Professionally Showcases Your Business",
          "Get FREE 30-Minute Website Strategy Session",
        ]}
      />

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
      <Reveal variant="right"><SemrushGetStarted /></Reveal>
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
