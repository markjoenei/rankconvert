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
  title: "Social Media Marketing Melbourne — Organic Growth That Sells",
  description:
    "Viral, high-quality organic content that builds your brand and brings customers through the door. 1.6M views on a single post.",
};

export default function SocialMediaPage() {
  return (
    <>
      <ServiceHero
        eyebrow="5-Star Rated by Australian Business Owners"
        title="Social Media"
        titleHighlight="That Actually Sells"
        subtitle="High-quality organic content that grows your following, builds trust, and turns scroll-stoppers into paying customers — no ad spend required."
        bullets={["1.6M views on one post", "1,000+ followers in 3mo", "100% organic"]}
      />

      <Reveal variant="up"><SemrushEdgeBanner /></Reveal>

      <Reveal variant="up">
        <ServicePainPoint
          eyebrow="Sound familiar?"
          title="Posting weekly, hearing crickets."
          intro="Most business social accounts hover around 30 likes and a few polite comments. The content takes hours to make, brings nothing to the bottom line, and slowly kills your motivation to post at all."
          pains={[
            "Videos that get 300 views and no enquiries",
            "Zero clue what to actually post each week",
            "Followers who never turn into customers",
            "Content that looks amateur next to competitors",
          ]}
        />
      </Reveal>

      <Reveal variant="left">
        <ServiceValueProp
          eyebrow="What great social looks like"
          title="Content that builds your brand and your pipeline."
          body="We handle the strategy, filming direction, editing, hooks, captions and posting cadence. You get a social channel that actually looks and feels like a category leader — and starts pulling customers toward you."
          outcomes={[
            { value: "1.6M", label: "Peak views" },
            { value: "1,000+", label: "New followers" },
            { value: "100K+", label: "Per post reach" },
            { value: "0", label: "Ad spend" },
          ]}
        />
      </Reveal>

      <Reveal variant="left"><SemrushDataStats /></Reveal>
      <Reveal variant="blur"><SemrushAIVisibility /></Reveal>
      <Reveal variant="right"><SemrushGetStarted /></Reveal>
      <Reveal variant="up"><SemrushSolutions /></Reveal>

      <Reveal variant="left">
        <ServiceFAQ
          title="Social Media Marketing FAQs"
          intro="What owners want to know before handing over their brand voice."
          items={[
            {
              q: "Do you write and film the content, or do I?",
              a: "Both models work. Fully-managed clients hand off strategy and captions to us and either film themselves or bring us in for shoot days. Coaching clients get the strategy and templates and film everything themselves.",
            },
            {
              q: "Which platforms do you cover?",
              a: "Instagram, TikTok, YouTube Shorts, and LinkedIn are the four we focus on. We match the mix to your audience and category.",
            },
            {
              q: "How long until posts actually start pulling reach?",
              a: "Reach usually starts climbing in month 2–3 as the algorithm learns the account. The first month is about establishing a consistent, on-brand feed.",
            },
            {
              q: "Will this actually bring customers or just followers?",
              a: "Both. Content is written around real buying triggers, not vanity engagement. Every post has a purpose in the customer journey.",
            },
          ]}
        />
      </Reveal>

      <Reveal variant="up"><SemrushNews /></Reveal>
      <Reveal variant="scale"><SemrushPreFooterCTA /></Reveal>
    </>
  );
}
