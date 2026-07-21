import type { Metadata } from "next";
import { ServiceHero } from "@/components/service/ServiceHero";
import { ServicePainPoint } from "@/components/service/ServicePainPoint";
import { ServiceValueProp } from "@/components/service/ServiceValueProp";
import { ServiceFAQ } from "@/components/service/ServiceFAQ";
import { SemrushEdgeBanner } from "@/components/semrush/EdgeBanner";
import { SemrushDataStats } from "@/components/semrush/DataStats";
import { SemrushAIVisibility } from "@/components/semrush/AIVisibility";
import { SemrushGetStarted } from "@/components/semrush/GetStarted";
import { SemrushSolutions } from "@/components/semrush/Solutions";
import { SemrushNews } from "@/components/semrush/News";
import { SemrushPreFooterCTA } from "@/components/semrush/PreFooterCTA";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Melbourne Shopify Developers — Stores Built to Sell",
  description:
    "High-quality Shopify stores designed to load fast, look premium, and maximise sales from day one.",
};

export default function ShopifyPage() {
  return (
    <>
      <ServiceHero
        eyebrow="5-Star Rated by Australian Business Owners"
        title="Melbourne Shopify"
        titleHighlight="Developers"
        subtitle="Premium Shopify stores that look world-class, load in a blink, and are built around one thing — selling more of your product."
        bullets={["4.63% avg. conversion rate", "Bundles & subscriptions", "Month-to-month"]}
      />

      <Reveal variant="up"><SemrushEdgeBanner /></Reveal>

      <Reveal variant="up">
        <ServicePainPoint
          eyebrow="Sound familiar?"
          title="A store full of traffic that just isn't converting."
          intro="Getting eyeballs onto a Shopify store is only half the battle. Most stores lose the sale in the last 30 seconds because of clunky product pages, awkward checkouts, or a lack of trust signals."
          pains={[
            "Add-to-cart clicks that never make it to checkout",
            "Product pages that don't build enough desire",
            "Zero repeat purchases — no subscriptions, bundles, or upsell logic",
            "A theme that looks nice but slows the whole store down",
          ]}
        />
      </Reveal>

      <Reveal variant="left">
        <ServiceValueProp
          eyebrow="What a great store does"
          title="Turn browsers into loyal, repeat customers."
          body="We build Shopify stores around a proven conversion framework — clean product pages, streamlined checkout, subscription and bundle logic, and content that helps customers say yes with confidence."
          outcomes={[
            { value: "2.5×", label: "Sales in month one" },
            { value: "4.63%", label: "Conversion rate" },
            { value: "20+", label: "New subscribers" },
            { value: "1st", label: "Month ROI positive" },
          ]}
        />
      </Reveal>

      <Reveal variant="left"><SemrushDataStats /></Reveal>
      <Reveal variant="blur"><SemrushAIVisibility /></Reveal>
      <Reveal variant="right"><SemrushGetStarted /></Reveal>
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
              q: "What theme do you use?",
              a: "We tailor the store to your brand rather than shoe-horning it into a stock theme. Fast, mobile-first, and every element chosen to reduce checkout friction.",
            },
            {
              q: "Will the store rank in Google?",
              a: "Absolutely. Every product and collection page is built with proper structure, metadata, and content — so the store earns traffic, not just pays for it.",
            },
            {
              q: "Do you offer ongoing store management?",
              a: "Yes. Optional monthly retainers cover CRO experiments, new product launches, and ongoing content — all month-to-month.",
            },
          ]}
        />
      </Reveal>

      <Reveal variant="up"><SemrushNews /></Reveal>
      <Reveal variant="scale"><SemrushPreFooterCTA /></Reveal>
    </>
  );
}
