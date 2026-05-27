"use client";

import { useState } from "react";

const FAQS = [
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

export function SemrushFAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-white py-14 sm:py-20 lg:py-24">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-10 lg:gap-16">
          <div>
            <div className="text-[11px] font-bold uppercase tracking-widest text-[#0f0f1a] mb-3">
              Frequently asked
            </div>
            <h2 className="text-[24px] sm:text-[32px] lg:text-[40px] font-black text-[#0f0f1a] leading-[1.06] tracking-[-0.8px] mb-5 [text-wrap:balance]">
              <span className="block">The questions practice</span>
              <span className="block">owners ask before</span>
              <span className="block">they switch.</span>
            </h2>
            <p className="text-[14px] sm:text-[15px] text-[#5a5a6a] leading-[1.55] max-w-[360px]">
              If your question isn&apos;t here, the audit is the fastest way to a specific answer for your market.
            </p>
            <a
              href="#"
              className="inline-flex items-center justify-center px-5 h-[40px] mt-6 border border-[#0f0f1a]/30 text-[13px] font-semibold text-[#0f0f1a] rounded-full hover:bg-gray-50 transition-colors"
            >
              Get a Free Audit
            </a>
          </div>

          <ul className="divide-y divide-gray-200 border-t border-b border-gray-200">
            {FAQS.map((item, i) => {
              const isOpen = open === i;
              return (
                <li key={i}>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full flex items-start justify-between gap-4 py-5 text-left"
                  >
                    <span className="text-[15px] sm:text-[16px] font-semibold text-[#0f0f1a] leading-[1.35]">
                      {item.q}
                    </span>
                    <span
                      className={`w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center shrink-0 transition-transform ${
                        isOpen ? "rotate-45 bg-[#0f0f1a] border-[#0f0f1a]" : ""
                      }`}
                    >
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
                        <path d="M6 2v8M2 6h8" stroke={isOpen ? "white" : "#0f0f1a"} strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                    </span>
                  </button>
                  <div
                    className="overflow-hidden transition-[max-height,opacity] duration-500 ease-in-out"
                    style={{ maxHeight: isOpen ? 400 : 0, opacity: isOpen ? 1 : 0 }}
                  >
                    <p className="text-[13px] sm:text-[14px] text-[#3a3a4a] leading-[1.6] pb-5 pr-12">
                      {item.a}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
