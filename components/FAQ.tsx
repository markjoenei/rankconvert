"use client";

import { useState } from "react";
import { Reveal } from "./Reveal";

type Item = {
  q: string;
  a: string;
};

const items: Item[] = [
  {
    q: "How is PRACPROS different from a typical dental marketing agency?",
    a: "Most agencies sell a service — a website, ads, or SEO — and leave the rest to you. PRACPROS builds a connected system: visibility, response, conversion, reputation, and reporting all run as one engine, accountable to one dashboard. You see exactly what every channel produced this week.",
  },
  {
    q: "How fast do we see results?",
    a: "Most practices see measurable wins inside the first 30 days — typically faster response times, recovered leads, and new bookings from existing traffic. Compounding visibility (organic, maps, AI) usually takes 60–90 days to fully kick in.",
  },
  {
    q: "Do you work with multi-location practices and DSOs?",
    a: "Yes. PRACPROS scales across locations with shared infrastructure and per-office dashboards. Operations leads see roll-up performance; individual offices keep their voice, reviews, and local visibility.",
  },
  {
    q: "What does the onboarding process look like?",
    a: "Two weeks of discovery and market mapping, three to four weeks of build and connect, then a live launch followed by ongoing optimization. You get a named strategist, engineer, and growth ops lead — and weekly progress reviews.",
  },
  {
    q: "Do you replace our front desk or work alongside them?",
    a: "Alongside. Speed-to-lead automation handles after-hours, overflow, and rapid first-touch. Your team picks up where personal context matters most. The dashboard shows where each lead was answered, by whom, and how fast.",
  },
  {
    q: "What's included in the free Growth Audit?",
    a: "A market-specific scan: keyword gaps, map-pack rankings, AI-answer visibility, current speed-to-lead, and a forecast of patients you're likely losing this month. We deliver it within 5 business days.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section
      aria-label="Frequently asked questions"
      className="relative overflow-hidden py-16 md:py-24"
      style={{ background: "#faf9f7" }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-[1]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(67,69,75,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(67,69,75,0.05) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(ellipse 70% 70% at 50% 50%, black 30%, transparent 95%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 70% at 50% 50%, black 30%, transparent 95%)",
        }}
      />

      <div className="container-page relative grid items-start gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
        {/* Left intro */}
        <Reveal className="lg:sticky lg:top-32">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-white/80 px-3 py-1 text-[12px] font-medium uppercase tracking-[0.14em] text-ink-soft backdrop-blur shadow-card">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-500" aria-hidden />
            Frequently asked
          </span>
          <h2 className="mt-5 font-display text-4xl md:text-5xl lg:text-[56px] leading-[1.05] font-semibold tracking-[-0.028em] text-ink">
            The questions practice owners ask{" "}
            <span className="text-[#FF521C]">before they switch.</span>
          </h2>
          <p className="mt-5 text-[16.5px] leading-[1.6] text-ink-soft">
            If your question isn&rsquo;t here, the audit is the fastest way to a
            specific answer for your market.
          </p>
        </Reveal>

        {/* FAQ list */}
        <Reveal delay={100} className="divide-y divide-border rounded-3xl border border-border bg-white shadow-card">
          {items.map((item, i) => {
            const isOpen = open === i;
            return (
              <details
                key={item.q}
                open={isOpen}
                onToggle={(e) => {
                  if ((e.target as HTMLDetailsElement).open) setOpen(i);
                  else if (open === i) setOpen(null);
                }}
                className="group px-6 py-5 md:px-8 md:py-6 [&_summary::-webkit-details-marker]:hidden"
              >
                <summary className="flex cursor-pointer list-none items-start justify-between gap-6">
                  <span className="font-display text-[17px] md:text-[19px] font-semibold tracking-tight text-ink">
                    {item.q}
                  </span>
                  <span
                    aria-hidden
                    className={`mt-1 grid h-8 w-8 shrink-0 place-items-center rounded-full border border-border text-ink-soft transition-all duration-300 ${
                      isOpen
                        ? "rotate-45 border-brand-300 bg-brand-50 text-brand-700"
                        : "group-hover:border-ink/30"
                    }`}
                  >
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path
                        d="M7 2v10M2 7h10"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                </summary>
                <p className="mt-4 max-w-2xl text-[15px] leading-[1.65] text-ink-soft">
                  {item.a}
                </p>
              </details>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
