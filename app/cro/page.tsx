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
  title: "Conversion Rate Optimisation Melbourne — Turn Traffic Into Sales",
  description:
    "Same traffic, more revenue. Data-led CRO that lifts conversion rates 3.9× on average.",
};

export default function CROPage() {
  return (
    <>
      <ServiceHero
        title="Conversion Rate Optimisation"
        titleHighlight="Melbourne"
        subtitle="Get more revenue out of the traffic you already have. Data-led experiments, real user testing, and iterative wins that compound month after month."
        bullets={[
          "3.9× Average Conversion Rate Lift",
          "Zero Extra Ad Spend Required",
          "Data-Led Experiments & Real User Testing",
        ]}
      />

      <Reveal variant="up"><SemrushEdgeBanner /></Reveal>

      <Reveal variant="up">
        <ServicePainPoint
          eyebrow="Sound familiar?"
          title="Plenty of traffic — barely any of it converts."
          intro="Getting people to the site was the hard part. But if the page can't do its job, all that ad spend and SEO effort turns into a hefty bounce rate instead of a full pipeline."
          pains={[
            "High traffic but a conversion rate stuck at 1% or less",
            "Visitors making it to the pricing page and vanishing",
            "Enquiry forms nobody bothers to submit",
            "No idea which page element is quietly killing the sale",
          ]}
        />
      </Reveal>

      <Reveal variant="left">
        <ServiceValueProp
          eyebrow="What CRO unlocks"
          title="More revenue from the visitors you already have."
          body="We audit every step of your funnel — messaging, layout, trust, speed, friction — and run structured experiments that move the conversion needle without needing more traffic."
          outcomes={[
            { value: "3.9×", label: "Avg. conversion lift" },
            { value: "0", label: "Extra ad spend" },
            { value: "A/B", label: "Real experiments" },
            { value: "Weekly", label: "Improvements" },
          ]}
        />
      </Reveal>

      <Reveal variant="left"><SemrushDataStats /></Reveal>
      <Reveal variant="blur"><SemrushAIVisibility /></Reveal>
      <Reveal variant="right"><SemrushGetStarted bottomOverlap /></Reveal>
      <Reveal variant="up"><SemrushSolutions /></Reveal>

      <Reveal variant="left">
        <ServiceFAQ
          title="Conversion Rate Optimisation FAQs"
          intro="Straight answers for owners weighing up CRO."
          items={[
            {
              q: "How long until I see a conversion lift?",
              a: "Small wins land in the first 30 days. Bigger structural lifts usually take 60–90 days of iterative testing.",
            },
            {
              q: "Do I need a lot of traffic for CRO to work?",
              a: "Not necessarily. Sites with lower traffic can still benefit from UX audits, messaging tightening, and page-speed work — we just adapt the testing approach.",
            },
            {
              q: "Will you replace my whole site?",
              a: "Usually no. CRO is about iterating on what works, not throwing it out. If the site fundamentally needs rebuilding, we'll say so honestly.",
            },
            {
              q: "How do you decide what to test?",
              a: "We combine analytics, heatmaps, session recordings, and old-fashioned user common sense. Every test has a hypothesis attached to a specific revenue outcome.",
            },
          ]}
        />
      </Reveal>

      <Reveal variant="up"><SemrushNews /></Reveal>
      <Reveal variant="scale"><SemrushPreFooterCTA /></Reveal>
    </>
  );
}
