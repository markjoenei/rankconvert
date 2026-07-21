"use client";

import { useState } from "react";

const FAQS = [
  {
    q: "What services does RankConvert offer?",
    a: "We offer Search Engine Optimisation (SEO), Website Design, Shopify store development, Conversion Rate Optimisation (CRO), and Social Media Marketing. We take a holistic approach to your digital presence rather than offering isolated services.",
  },
  {
    q: "How do I know which service is right for my business?",
    a: "Book a free strategy call and we'll analyse your current digital presence, your goals, and your competition to recommend the best path forward. There's no obligation — just honest advice about what will move the needle for your business.",
  },
  {
    q: "How long does it take to see results from SEO?",
    a: "For SEO, you'll typically start seeing meaningful results within 3–6 months, with compounding growth over time. Our fastest result was 5,203% traffic growth for Evolved H2O in just 9 months. Website design and CRO can show conversion improvements within weeks.",
  },
  {
    q: "Are there any lock-in contracts?",
    a: "No. We operate on a month-to-month basis because we believe our results should speak for themselves. If you're not happy, you can leave at any time. We're confident enough in our work that we don't need to lock you in.",
  },
  {
    q: "What makes RankConvert different from other agencies?",
    a: "We're an Australian-owned business that operates on a competency-based pricing model — you pay for results, not just hours. We're also completely transparent about what we're doing and why, with clear reporting so you always know what your money is producing.",
  },
  {
    q: "Do you work with businesses outside Melbourne?",
    a: "Yes. While we're Melbourne-based, we work with businesses across all of Australia. Our services are fully remote and our SEO and digital marketing strategies are effective nationally and internationally.",
  },
];

export function SemrushFAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-14 sm:py-20 lg:py-24" style={{ background: "linear-gradient(180deg, #10121a 0%, #09090e 55%, #0b0d14 100%)" }}>
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-10 lg:gap-16">
          <div>
            <div className="text-[11px] font-bold uppercase tracking-widest mb-3" style={{ color: "#f5c842" }}>
              Frequently asked
            </div>
            <h2 className="text-[26px] sm:text-[38px] lg:text-[50px] font-black text-white leading-[1.06] tracking-[-1px] mb-5">
              <span className="block">Questions business</span>
              <span className="block">owners ask before</span>
              <span className="block">they get started.</span>
            </h2>
            <p className="text-[14px] sm:text-[15px] leading-[1.6] max-w-[360px]" style={{ color: "rgba(255,255,255,0.5)" }}>
              If you have a question that isn&apos;t answered here, book a free strategy call and we&apos;ll give you a straight answer.
            </p>
            <a
              href="#"
              className="inline-flex items-center justify-center px-5 h-[40px] mt-6 text-[13px] font-bold text-[#09090e] rounded-full hover:bg-[#e6b830] transition-colors"
              style={{ background: "#f5c842" }}
            >
              Book Free Strategy Call
            </a>
          </div>

          <ul
            className="divide-y"
            style={{
              borderTop: "1px solid rgba(255,255,255,0.08)",
              borderBottom: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            {FAQS.map((item, i) => {
              const isOpen = open === i;
              return (
                <li key={i} style={{ borderColor: "rgba(255,255,255,0.08)" }}>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full flex items-start justify-between gap-4 py-5 text-left"
                  >
                    <span className="text-[15px] sm:text-[16px] font-semibold text-white leading-[1.35]">
                      {item.q}
                    </span>
                    <span
                      className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all"
                      style={{
                        border: isOpen ? "none" : "1px solid rgba(255,255,255,0.15)",
                        background: isOpen ? "#f5c842" : "transparent",
                        transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                      }}
                    >
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
                        <path d="M6 2v8M2 6h8" stroke={isOpen ? "#09090e" : "white"} strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                    </span>
                  </button>
                  <div
                    className="overflow-hidden transition-[max-height,opacity] duration-500 ease-in-out"
                    style={{ maxHeight: isOpen ? 400 : 0, opacity: isOpen ? 1 : 0 }}
                  >
                    <p className="text-[13px] sm:text-[14px] leading-[1.65] pb-5 pr-12" style={{ color: "rgba(255,255,255,0.55)" }}>
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
