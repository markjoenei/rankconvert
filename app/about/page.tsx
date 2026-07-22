import type { Metadata } from "next";
import { SemrushDataStats } from "@/components/semrush/DataStats";
import { SemrushGetStarted } from "@/components/semrush/GetStarted";
import { SemrushSolutions } from "@/components/semrush/Solutions";
import { SemrushPreFooterCTA } from "@/components/semrush/PreFooterCTA";
import { Reveal } from "@/components/ui/Reveal";
import { GoogleReviewsBadge } from "@/components/ui/GoogleReviewsBadge";
import { FramedPhoto } from "@/components/ui/FramedPhoto";

export const metadata: Metadata = {
  title: "About RankConvert — Melbourne Digital Marketing Agency",
  description:
    "The story, philosophy and team behind RankConvert — a Melbourne-based, Australian-owned digital marketing agency focused on real business outcomes.",
};

const TIMELINE = [
  {
    year: "2023",
    title: "The idea",
    body:
      "Frustration builds after watching capable business owners get sold marketing they didn't need, couldn't measure, and couldn't exit. RankConvert is sketched out on the back of a napkin — small, sharp, honest.",
  },
  {
    year: "2024",
    title: "First results",
    body:
      "Early projects prove the model works. Evolved H2O, YoungConstruct and Sprociety Coffee become foundational case studies — each with clear, measurable outcomes.",
  },
  {
    year: "2025",
    title: "Scaling the wins",
    body:
      "The client roster grows to service businesses, e-commerce brands, and hospitality operators across Melbourne. The 670% average traffic growth benchmark is set.",
  },
  {
    year: "2026",
    title: "Team and reach",
    body:
      "A small team of specialists forms around a Christian-owned, competency-based ethos. Month-to-month agreements become the standard — no lock-ins, no surprises.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero — About */}
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

        <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 lg:pt-24 pb-14 sm:pb-20 lg:pb-24">
          <div className="text-center max-w-[760px] mx-auto">
            <div className="mb-6 animate-fade-up flex justify-center">
              <GoogleReviewsBadge rating="5.0" />
            </div>

            <h1
              className="whitespace-nowrap font-black text-white leading-[1.03] tracking-[-2px] mb-5 animate-fade-up"
              style={{ animationDelay: "0.05s", fontSize: "clamp(24px, 7.5vw, 68px)" }}
            >
              The RankConvert{" "}
              <span style={{ color: "#f5c842" }}>Story</span>
            </h1>

            <p
              className="text-[15px] sm:text-[18px] text-white/65 leading-[1.65] max-w-[620px] mx-auto animate-fade-up"
              style={{ animationDelay: "0.1s" }}
            >
              RankConvert exists to help capable business owners turn confusion into clarity, and websites into
              reliable growth engines, through honest strategy, transparency, and results that actually matter.
            </p>
          </div>
        </div>
      </section>

      {/* Why RankConvert was created — with founder photo */}
      <Reveal variant="up">
        <section className="py-16 sm:py-24" style={{ background: "#f6f6f8" }}>
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-[1.05fr_1fr] gap-10 lg:gap-16 items-center">
              <div>
                <div className="text-[11px] font-bold uppercase tracking-widest mb-3" style={{ color: "#c9971a" }}>
                  The RankConvert Story
                </div>
                <h2 className="text-[26px] sm:text-[38px] lg:text-[50px] font-black text-[#09090e] leading-[1.06] tracking-[-1px] mb-5">
                  Why RankConvert Was Created
                </h2>
                <div className="space-y-4 text-[15px] sm:text-[16px] leading-[1.7]" style={{ color: "rgba(9,9,14,0.65)" }}>
                  <p>
                    RankConvert was created to help businesses get found online — and turn that attention into real leads and sales.
                  </p>
                  <p>
                    After seeing how many businesses were stuck with poor websites, weak SEO and inconsistent results, the focus became clear. Build websites and marketing systems that don&apos;t just look good, but actually perform.
                  </p>
                  <p>
                    From early projects through to working with established brands, the goal has stayed the same: deliver measurable results through strategy, structure and execution.
                  </p>
                </div>
              </div>

              <FramedPhoto
                src="https://i0.wp.com/rankconvert.com.au/wp-content/uploads/2026/05/IMG_8752-1.webp?fit=1024%2C1280&ssl=1"
                alt="RankConvert founder Jake Marler with client Daniel Miller, founder of XL Fitness"
                label="Founder + client"
                sublabel="Jake Marler (right) with Jono East, owner of Sprociety."
                theme="light"
              />
            </div>
          </div>
        </section>
      </Reveal>

      {/* How we approach growth */}
      <Reveal variant="right">
        <section
          className="py-16 sm:py-24"
          style={{ background: "linear-gradient(180deg, #12141c 0%, #0a0b10 55%, #0c0e15 100%)" }}
        >
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-[1fr_1.05fr] gap-10 lg:gap-16 items-center">
              <div className="order-2 lg:order-1">
                <FramedPhoto
                  src="https://i0.wp.com/rankconvert.com.au/wp-content/uploads/2026/05/rankconvert-founder-jake-marler-with-seo-client.webp?fit=1024%2C1280&ssl=1"
                  alt="RankConvert founder Jake Marler with client Jono East, owner of Sprociety"
                  label="Founder + client"
                  sublabel="Jake Marler with Daniel Miller, founder of XL Fitness & 2nd Hand Fitness."
                  theme="dark"
                />
              </div>

              <div className="order-1 lg:order-2">
                <div className="text-[11px] font-bold uppercase tracking-widest mb-3" style={{ color: "#f5c842" }}>
                  Our approach
                </div>
                <h2 className="text-[26px] sm:text-[38px] lg:text-[50px] font-black text-white leading-[1.06] tracking-[-1px] mb-5">
                  How We Approach Growth
                </h2>
                <div className="space-y-4 text-[15px] sm:text-[16px] leading-[1.7]" style={{ color: "rgba(255,255,255,0.65)" }}>
                  <p>
                    The approach is simple: build systems that drive real business growth.
                  </p>
                  <p>
                    That means combining SEO, website design, Shopify optimisation and CRO into a single online presence that attracts the right traffic and converts it into customers.
                  </p>
                  <p>
                    Everything is built with performance in mind — clear structure, strong messaging, a focus on results. The goal isn&apos;t just more traffic, but more leads, more sales, and more consistent growth over time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      {/* UX enhancement: RankConvert story timeline */}
      <Reveal variant="up">
        <section className="py-16 sm:py-24" style={{ background: "#f6f6f8" }}>
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-[720px] mb-10 sm:mb-14">
              <div className="text-[11px] font-bold uppercase tracking-widest mb-3" style={{ color: "#c9971a" }}>
                The journey
              </div>
              <h2 className="text-[26px] sm:text-[38px] lg:text-[50px] font-black text-[#09090e] leading-[1.06] tracking-[-1px] mb-5">
                Where RankConvert has been.
              </h2>
              <p className="text-[14px] sm:text-[16px] leading-[1.7]" style={{ color: "rgba(9,9,14,0.6)" }}>
                A short timeline of how we got here — and what shaped the way we work with clients today.
              </p>
            </div>

            <ol className="relative">
              <div
                className="absolute left-4 sm:left-6 top-3 bottom-3 w-px"
                style={{ background: "linear-gradient(180deg, transparent 0%, rgba(9,9,14,0.15) 15%, rgba(9,9,14,0.15) 85%, transparent 100%)" }}
              />
              {TIMELINE.map((t, i) => (
                <li key={i} className="relative pl-14 sm:pl-20 pb-8 last:pb-0">
                  <span
                    className="absolute left-0 top-0 w-9 h-9 sm:w-13 sm:h-13 rounded-full flex items-center justify-center font-black text-[11px] sm:text-[13px] shrink-0"
                    style={{
                      background: "#f5c842",
                      color: "#09090e",
                      boxShadow: "0 6px 18px -4px rgba(245,200,66,0.5)",
                    }}
                  >
                    {t.year}
                  </span>
                  <div
                    className="rounded-2xl p-5 sm:p-6"
                    style={{ background: "#ffffff", border: "1px solid rgba(0,0,0,0.08)" }}
                  >
                    <h3 className="text-[16px] sm:text-[18px] font-black text-[#09090e] leading-[1.25] tracking-tight mb-2">
                      {t.title}
                    </h3>
                    <p className="text-[13px] sm:text-[14px] leading-[1.65]" style={{ color: "rgba(9,9,14,0.6)" }}>
                      {t.body}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>
      </Reveal>

      <Reveal variant="left"><SemrushDataStats /></Reveal>
      <Reveal variant="right"><SemrushGetStarted /></Reveal>
      <Reveal variant="up"><SemrushSolutions /></Reveal>
      <Reveal variant="scale"><SemrushPreFooterCTA /></Reveal>
    </>
  );
}
