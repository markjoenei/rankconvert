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
  title: "Melbourne SEO Consultant — Rank Higher, Convert More",
  description:
    "Melbourne SEO services that turn Google searches into a predictable pipeline of qualified leads. 670% average traffic growth. No lock-in contracts.",
};

export default function SEOPage() {
  return (
    <>
      <ServiceHero
        eyebrow="5-Star Rated by Australian Business Owners"
        title="Melbourne SEO"
        titleHighlight="That Actually Ranks"
        subtitle="Turn Google search into a reliable channel that fills your calendar with buying-intent enquiries — month after month, without ad spend."
        bullets={["670% avg. traffic growth", "Month-to-month", "Australian owned"]}
      />

      <Reveal variant="up"><SemrushEdgeBanner /></Reveal>

      <Reveal variant="up">
        <ServicePainPoint
          eyebrow="Sound familiar?"
          title="Invisible in Google means invisible to customers."
          intro="When high-intent buyers can't find you online, the leads dry up and you're left leaning on referrals, cold outreach, or expensive paid ads to plug the gap."
          pains={[
            "Feast-and-famine months where enquiries stop cold",
            "Tyre-kickers who just want the cheapest quote",
            "Competitors outranking you for your best keywords",
            "Google Ads spend that dries up the second you pause it",
          ]}
        />
      </Reveal>

      <Reveal variant="left">
        <ServiceValueProp
          eyebrow="What good SEO looks like"
          title="Consistent, compounding leads from Google search."
          body="Instead of chasing every marketing trend, we build long-term visibility for the keywords your best customers are actually searching. The result is a steady flow of high-quality enquiries that keeps growing month over month."
          outcomes={[
            { value: "670%", label: "Traffic growth (avg.)" },
            { value: "2–5×", label: "Higher-quality leads" },
            { value: "3–6mo", label: "First real results" },
            { value: "100%", label: "Month-to-month" },
          ]}
        />
      </Reveal>

      <Reveal variant="left"><SemrushDataStats /></Reveal>
      <Reveal variant="blur"><SemrushAIVisibility /></Reveal>
      <Reveal variant="right"><SemrushGetStarted /></Reveal>
      <Reveal variant="up"><SemrushSolutions /></Reveal>

      <Reveal variant="left">
        <ServiceFAQ
          title="Melbourne SEO Consultant FAQs"
          intro="Real questions from business owners weighing up SEO for the first time."
          items={[
            {
              q: "How long until I see results from SEO?",
              a: "Most clients start seeing meaningful movement within 3–6 months, with results compounding from there. Rankings tend to stick once earned, so the long-term lead flow is much more stable than paid ads.",
            },
            {
              q: "Do I have to lock into a long contract?",
              a: "No. Every engagement is month-to-month. We believe results should keep you here — not a contract clause.",
            },
            {
              q: "How do I know SEO will actually bring leads (not just traffic)?",
              a: "We target buying-intent keywords, not vanity terms. Every strategy is built around the searches that customers use right before they contact a business like yours.",
            },
            {
              q: "Should I do SEO or Google Ads?",
              a: "Both have a place. Ads are like buying fruit at the shop — instant supply, but the moment you stop paying, the fruit stops. SEO is planting a tree: it takes longer to fruit, but once it does, it keeps producing.",
            },
            {
              q: "I already get most work from referrals — do I still need SEO?",
              a: "Referrals are gold but they're unpredictable. SEO adds a second, always-on channel so a slow month of referrals doesn't turn into a quiet month for the business.",
            },
          ]}
        />
      </Reveal>

      <Reveal variant="up"><SemrushNews /></Reveal>
      <Reveal variant="scale"><SemrushPreFooterCTA /></Reveal>
    </>
  );
}
