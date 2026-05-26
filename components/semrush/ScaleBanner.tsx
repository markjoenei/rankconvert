"use client";

import Image from "next/image";
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
    // Outer: pulled up to overlap previous section + tall scroll runway for the pin.
    <div
      ref={wrapperRef}
      className="relative z-10 bg-[#ede5ff] md:h-[180vh] md:-mt-[20vh]"
    >
      <section className="md:sticky md:top-0 md:h-screen md:flex md:items-center bg-[#ede5ff] py-6 md:py-0 overflow-hidden md:rounded-t-[32px] md:shadow-[0_-20px_60px_rgba(60,40,120,0.18)]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div
            ref={cardRef}
            className="relative rounded-2xl overflow-hidden bg-black min-h-[500px] sm:min-h-[560px] transition-[transform,opacity] duration-100 will-change-transform"
          >
            <CurtainBars className="absolute right-0 top-0 w-[55%] h-[40%] opacity-90" origin="top-right" />
            <CurtainBars className="absolute left-0 bottom-0 w-full h-[35%] opacity-90" origin="bottom" />

            <div className="relative z-10 grid lg:grid-cols-[1fr_1.3fr] gap-8 px-7 sm:px-12 lg:px-16 py-10 sm:py-14 lg:py-20">
            <div className="flex flex-col justify-between max-w-[480px]">
              <div>
                <h2 className="normal-case text-[28px] sm:text-[40px] lg:text-[50px] font-black text-white leading-[1.06] tracking-[-0.8px] mb-6 [text-wrap:balance]">
                  <span className="block">Are you still</span>
                  <span className="block">guessing</span>
                  <span className="block">what&apos;s working?</span>
                </h2>
                <p className="text-[14px] sm:text-[15px] text-white/70 leading-[1.55] mb-4 max-w-[420px]">
                  Most practices fly blind — a patchwork of tools, hunches, and agency reports that never quite add up. There&apos;s a better way to run growth.
                </p>
                <p className="text-[14px] sm:text-[15px] text-white/70 leading-[1.55] max-w-[420px]">
                  PRACPROS handles the strategy, systems, execution, and optimization in the background. You get a hands-off engine and a dashboard that shows exactly what results are being produced.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 mt-8 lg:mt-12">
                <a
                  href="#"
                  className="inline-flex items-center justify-center px-6 h-[44px] bg-white text-[#0f0f1a] text-[13px] font-semibold rounded-full hover:bg-gray-100 transition-colors"
                >
                  Get a Free Growth Audit
                </a>
                <a
                  href="#"
                  className="inline-flex items-center justify-center px-6 h-[44px] bg-transparent text-white text-[13px] font-semibold rounded-full border border-white/60 hover:bg-white/10 transition-colors"
                >
                  Schedule a Strategy Call
                </a>
              </div>
            </div>

            <div className="relative">
              <ComparisonDashboard />
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
}

function CurtainBars({ className, origin }: { className?: string; origin: "top-right" | "bottom" }) {
  return (
    <svg
      className={className}
      viewBox={origin === "top-right" ? "0 0 600 200" : "0 0 1200 200"}
      preserveAspectRatio="none"
      aria-hidden
    >
      {Array.from({ length: origin === "top-right" ? 60 : 120 }).map((_, i) => {
        const w = origin === "top-right" ? 600 : 1200;
        const x = (i / (origin === "top-right" ? 60 : 120)) * w;
        const fromTop = origin === "top-right";
        const baseColor = i % 3 === 0 ? "#3dd7c2" : i % 3 === 1 ? "#7c5cff" : "#5fb4ff";
        return (
          <line
            key={i}
            x1={x}
            y1={fromTop ? 0 : 200}
            x2={x}
            y2={fromTop ? 200 : 0}
            stroke={baseColor}
            strokeWidth="2"
            opacity={0.35 + (i % 7) * 0.05}
          />
        );
      })}
    </svg>
  );
}

function ComparisonDashboard() {
  return (
    <div className="bg-[#f4f5f7] rounded-xl overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.5)] p-6 sm:p-8">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="relative w-11 h-11 rounded-full overflow-hidden ring-2 ring-white shadow shrink-0">
            <Image
              src="/portraits/owner-confident.webp"
              alt="Practice owner"
              fill
              sizes="44px"
              className="object-cover"
            />
          </div>
          <div>
            <div className="text-[15px] sm:text-[16px] font-bold text-[#0f0f1a] leading-none">Dr. Patel</div>
            <div className="text-[12px] text-gray-500 mt-1">Operator&apos;s view</div>
          </div>
        </div>
        <span className="text-[12px] text-[#1a8754] bg-[#dcf2e2] px-3 py-1.5 rounded-full font-bold flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-[#1a8754] animate-pulse" />
          Live
        </span>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <ComparisonCard
          title="Without PRACPROS"
          tone="bad"
          items={[
            "Fragmented vendors",
            "Guessing where leads come from",
            "Agency reports you can't decode",
            "Front desk drowning in inquiries",
          ]}
        />
        <ComparisonCard
          title="With PRACPROS"
          tone="good"
          items={[
            "One connected growth engine",
            "Live attribution search → chair",
            "Dashboard readable in 30s",
            "Inquiries answered in <60s",
          ]}
        />
      </div>

      <div className="grid grid-cols-4 gap-3">
        {[
          { v: "47s", l: "avg response" },
          { v: "+38%", l: "pipeline" },
          { v: "4.9★", l: "rating" },
          { v: "24/7", l: "uptime" },
        ].map((m) => (
          <div key={m.l} className="bg-white border border-gray-200 rounded-lg p-4">
            <div className="text-[22px] sm:text-[26px] font-black text-[#0f0f1a] leading-none">{m.v}</div>
            <div className="text-[11px] text-gray-500 mt-2">{m.l}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ComparisonCard({
  title,
  tone,
  items,
}: {
  title: string;
  tone: "good" | "bad";
  items: string[];
}) {
  const accent = tone === "good" ? "#10b981" : "#fb7185";
  const icon =
    tone === "good" ? (
      <path d="M2.5 6.5l2.5 2.5 4.5-5" stroke="white" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    ) : (
      <path d="M3 3l6 6M9 3l-6 6" stroke="white" strokeWidth="1.7" strokeLinecap="round" />
    );
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 sm:p-5">
      <div className="flex items-center gap-2 mb-3">
        <span
          className="inline-flex items-center justify-center w-5 h-5 rounded-full"
          style={{ backgroundColor: accent }}
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
            {icon}
          </svg>
        </span>
        <span className="text-[13px] font-bold text-[#0f0f1a]">{title}</span>
      </div>
      <ul className="space-y-2 text-[12px] text-gray-700">
        {items.map((i) => (
          <li key={i} className="flex items-start gap-2">
            <span className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0" style={{ backgroundColor: accent }} />
            {i}
          </li>
        ))}
      </ul>
    </div>
  );
}
