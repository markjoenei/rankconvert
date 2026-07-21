"use client";

import { useEffect, useRef } from "react";

export function SemrushScaleBanner() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const card = cardRef.current;
    if (!wrapper || !card) return;

    const mq = window.matchMedia("(min-width: 768px)");

    const onScroll = () => {
      if (!mq.matches) {
        card.style.transform = "";
        card.style.opacity = "";
        card.style.transformOrigin = "";
        return;
      }
      const rect = wrapper.getBoundingClientRect();
      const total = rect.height - window.innerHeight;
      if (total <= 0) return;
      const progress = Math.max(0, Math.min(1, -rect.top / total));
      const t = Math.max(0, (progress - 0.6) / 0.4);
      const scale = 1 - t * 0.08;
      const opacity = 1 - t * 0.55;
      const translateY = t * -24;
      card.style.transform = `translateY(${translateY}px) scale(${scale})`;
      card.style.opacity = String(opacity);
      card.style.transformOrigin = "center top";
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    mq.addEventListener("change", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      mq.removeEventListener("change", onScroll);
    };
  }, []);

  return (
    <div ref={wrapperRef} className="relative z-10 bg-[#09090e] md:h-[180vh] md:-mt-[20vh]">
      <section className="md:sticky md:top-0 md:h-screen md:flex md:items-center bg-[#09090e] py-6 md:py-0 overflow-hidden md:rounded-t-[32px]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div
            ref={cardRef}
            className="relative rounded-2xl overflow-hidden min-h-[500px] sm:min-h-[560px] transition-[transform,opacity] duration-100 will-change-transform"
            style={{
              background: "#0f1017",
              border: "1px solid rgba(255,255,255,0.07)",
            }}
          >
            {/* Decorative bars */}
            <DecorBars className="absolute right-0 top-0 w-[55%] h-[40%] opacity-70" fromTop />
            <DecorBars className="absolute left-0 bottom-0 w-full h-[30%] opacity-70" />

            <div className="relative z-10 grid lg:grid-cols-[1fr_1.3fr] gap-8 px-7 sm:px-12 lg:px-16 py-10 sm:py-14 lg:py-20">
              <div className="flex flex-col justify-between max-w-[480px]">
                <div>
                  <h2 className="text-[28px] sm:text-[40px] lg:text-[50px] font-black text-white leading-[1.06] tracking-[-0.8px] mb-6">
                    <span className="block">Are you still</span>
                    <span className="block">invisible online?</span>
                  </h2>
                  <p className="text-[14px] sm:text-[15px] text-white/55 leading-[1.6] mb-4 max-w-[420px]">
                    Most businesses throw money at ads and agencies but see little return. Without a
                    proper strategy, your website is just an online brochure nobody sees.
                  </p>
                  <p className="text-[14px] sm:text-[15px] text-white/55 leading-[1.6] max-w-[420px]">
                    RankConvert handles your entire digital presence — SEO, design, Shopify,
                    conversions, and social media — so you can focus on running your business.
                  </p>
                </div>
                <div className="flex flex-wrap gap-3 mt-8 lg:mt-12">
                  <a
                    href="#"
                    className="inline-flex items-center justify-center px-6 h-[44px] bg-[#f5c842] text-[#09090e] text-[13px] font-bold rounded-full hover:bg-[#e6b830] transition-colors"
                  >
                    Get a Free Growth Plan
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center justify-center px-6 h-[44px] bg-transparent text-white text-[13px] font-semibold rounded-full border border-white/20 hover:bg-white/8 transition-colors"
                  >
                    Schedule a Strategy Call
                  </a>
                </div>
              </div>

              <div className="relative">
                <ComparisonCard />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function DecorBars({ className, fromTop }: { className?: string; fromTop?: boolean }) {
  return (
    <svg
      className={className}
      viewBox={fromTop ? "0 0 600 200" : "0 0 1200 200"}
      preserveAspectRatio="none"
      aria-hidden
    >
      {Array.from({ length: fromTop ? 60 : 120 }).map((_, i) => {
        const w = fromTop ? 600 : 1200;
        const x = (i / (fromTop ? 60 : 120)) * w;
        const color = i % 3 === 0 ? "#f5c842" : i % 3 === 1 ? "#60a5fa" : "#a78bfa";
        return (
          <line
            key={i}
            x1={x}
            y1={fromTop ? 0 : 200}
            x2={x}
            y2={fromTop ? 200 : 0}
            stroke={color}
            strokeWidth="1.5"
            opacity={0.25 + (i % 7) * 0.05}
          />
        );
      })}
    </svg>
  );
}

function ComparisonCard() {
  return (
    <div
      className="rounded-xl overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.6)] p-6 sm:p-8"
      style={{
        background: "#131620",
        border: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <div className="flex items-center justify-between mb-6">
        <div className="text-[15px] sm:text-[16px] font-bold text-white leading-none">
          Business Impact Analysis
        </div>
        <span className="text-[12px] text-[#f5c842] bg-[#f5c842]/10 border border-[#f5c842]/20 px-3 py-1.5 rounded-full font-bold flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-[#f5c842] animate-pulse" />
          Live
        </span>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <CompareCol
          title="Without RankConvert"
          tone="bad"
          items={[
            "Invisible in Google search",
            "Low-converting website",
            "Missing easy sales",
            "Wasting ad budget",
          ]}
        />
        <CompareCol
          title="With RankConvert"
          tone="good"
          items={[
            "Ranking for buying keywords",
            "Website converts visitors",
            "Automated lead flow",
            "Measurable ROI monthly",
          ]}
        />
      </div>

      <div className="grid grid-cols-4 gap-3">
        {[
          { v: "670%", l: "traffic growth" },
          { v: "3.9×", l: "conversions" },
          { v: "2–5×", l: "ROI" },
          { v: "100%", l: "Aus owned" },
        ].map((m) => (
          <div
            key={m.l}
            className="rounded-lg p-3 sm:p-4"
            style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}
          >
            <div className="text-[18px] sm:text-[22px] font-black text-[#f5c842] leading-none">{m.v}</div>
            <div className="text-[10px] text-white/40 mt-1.5">{m.l}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function CompareCol({ title, tone, items }: { title: string; tone: "good" | "bad"; items: string[] }) {
  const accent = tone === "good" ? "#f5c842" : "#fb7185";
  const icon =
    tone === "good" ? (
      <path d="M2.5 6.5l2.5 2.5 4.5-5" stroke="white" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    ) : (
      <path d="M3 3l6 6M9 3l-6 6" stroke="white" strokeWidth="1.7" strokeLinecap="round" />
    );
  return (
    <div
      className="rounded-lg p-4 sm:p-5"
      style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}
    >
      <div className="flex items-center gap-2 mb-3">
        <span
          className="inline-flex items-center justify-center w-5 h-5 rounded-full"
          style={{ backgroundColor: accent }}
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>{icon}</svg>
        </span>
        <span className="text-[12px] font-bold text-white">{title}</span>
      </div>
      <ul className="space-y-2 text-[11px] text-white/55">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2">
            <span className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0" style={{ backgroundColor: accent }} />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
