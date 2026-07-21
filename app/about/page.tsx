import type { Metadata } from "next";
import { ServiceHero } from "@/components/service/ServiceHero";
import { SemrushDataStats } from "@/components/semrush/DataStats";
import { SemrushAIVisibility } from "@/components/semrush/AIVisibility";
import { SemrushGetStarted } from "@/components/semrush/GetStarted";
import { SemrushSolutions } from "@/components/semrush/Solutions";
import { SemrushPreFooterCTA } from "@/components/semrush/PreFooterCTA";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "About RankConvert — Melbourne Digital Marketing Agency",
  description:
    "The team, the story and the philosophy behind Melbourne's competency-based digital marketing agency.",
};

const VALUES = [
  {
    tag: "01",
    title: "Results before promises.",
    body: "Every strategy is built around a measurable outcome — traffic, leads, revenue, or conversions. If we can't show a way to move the number, we don't sell you the service.",
  },
  {
    tag: "02",
    title: "Small clients, huge focus.",
    body: "We keep the roster tight on purpose. Fewer clients means more hours on each account, which means better rankings, cleaner sites, and quicker wins.",
  },
  {
    tag: "03",
    title: "Month-to-month, always.",
    body: "No lock-ins, no exit fees, no fine print. If we're not adding value you can end the engagement any month — most clients simply choose not to.",
  },
  {
    tag: "04",
    title: "Honest reporting.",
    body: "Simple monthly reports that show what changed, what worked, and what's next. Zero fluff, zero vanity metrics dressed up as wins.",
  },
];

export default function AboutPage() {
  return (
    <>
      <ServiceHero
        eyebrow="About RankConvert"
        title="The team helping Australian"
        titleHighlight="businesses grow online."
        subtitle="A Melbourne-based, Australian-owned agency focused on real outcomes for real businesses — not agency-of-the-week awards."
        bullets={["Melbourne-based", "Christian owned", "Results-first pricing"]}
      />

      {/* Story */}
      <Reveal variant="up">
        <section className="py-16 sm:py-24" style={{ background: "#f6f6f8" }}>
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-[1fr_1.15fr] gap-10 lg:gap-16">
              <div>
                <div className="text-[11px] font-bold uppercase tracking-widest mb-3" style={{ color: "#c9971a" }}>
                  Why we started
                </div>
                <h2 className="text-[26px] sm:text-[38px] lg:text-[50px] font-black text-[#09090e] leading-[1.06] tracking-[-1px] mb-5">
                  Built for owners tired of agency spin.
                </h2>
              </div>
              <div className="space-y-4 text-[15px] sm:text-[16px] leading-[1.7]" style={{ color: "rgba(9,9,14,0.65)" }}>
                <p>
                  RankConvert started because too many talented business owners were being sold marketing they didn&apos;t need,
                  couldn&apos;t measure, and couldn&apos;t exit. We wanted something different — a small, sharp team that treats
                  each client like a partner and each dollar spent like our own.
                </p>
                <p>
                  Today we work with a handful of ambitious Australian businesses across trades, e-commerce, hospitality and
                  services. Our clients get senior attention, transparent reporting, and a strategy that&apos;s tied to actual
                  business outcomes — not agency vanity.
                </p>
                <p>
                  We&apos;re proudly Melbourne-based, Christian-owned, and here for the long haul.
                </p>
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      {/* Values grid */}
      <Reveal variant="blur">
        <section
          className="py-16 sm:py-24"
          style={{ background: "linear-gradient(180deg, #12141c 0%, #0a0b10 55%, #0c0e15 100%)" }}
        >
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-[720px] mx-auto mb-12">
              <div className="text-[11px] font-bold uppercase tracking-widest mb-3" style={{ color: "#f5c842" }}>
                How we work
              </div>
              <h2 className="text-[26px] sm:text-[38px] lg:text-[50px] font-black text-white leading-[1.06] tracking-[-1px]">
                Four principles we don&apos;t compromise on.
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
              {VALUES.map(v => (
                <article
                  key={v.tag}
                  className="rounded-2xl p-6 sm:p-8"
                  style={{ background: "#0f1017", border: "1px solid rgba(255,255,255,0.07)" }}
                >
                  <div className="text-[11px] font-black mb-3" style={{ color: "#f5c842" }}>{v.tag}</div>
                  <h3 className="text-[18px] sm:text-[22px] font-black text-white leading-[1.2] tracking-tight mb-3">
                    {v.title}
                  </h3>
                  <p className="text-[13px] sm:text-[14px] leading-[1.65]" style={{ color: "rgba(255,255,255,0.6)" }}>
                    {v.body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal variant="left"><SemrushDataStats /></Reveal>
      <Reveal variant="blur"><SemrushAIVisibility /></Reveal>
      <Reveal variant="right"><SemrushGetStarted /></Reveal>
      <Reveal variant="up"><SemrushSolutions /></Reveal>
      <Reveal variant="scale"><SemrushPreFooterCTA /></Reveal>
    </>
  );
}
