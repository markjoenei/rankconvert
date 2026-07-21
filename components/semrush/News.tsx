"use client";

import { useEffect, useRef } from "react";

type Testimonial = {
  badge: string;
  client: string;
  industry: string;
  quote: string;
  author: string;
  role: string;
  metric: string;
  metricLabel: string;
  accentColor: string;
};

const TESTIMONIALS: Testimonial[] = [
  {
    badge: "SEO",
    client: "Evolved H2O",
    industry: "Water filtration · Melbourne",
    quote: "The results speak for themselves. 5,203% traffic growth in 9 months. RankConvert completely transformed our online presence — we went from invisible to dominating our niche.",
    author: "Evolved H2O Team",
    role: "Water Filtration Business",
    metric: "5,203%",
    metricLabel: "Traffic growth",
    accentColor: "#f5c842",
  },
  {
    badge: "SEO + CRO",
    client: "YoungConstruct",
    industry: "Construction · Australia",
    quote: "345% traffic growth and a 5%+ conversion rate within the first few months. We were ROI positive faster than expected. RankConvert delivered everything they promised.",
    author: "Aidan Young",
    role: "Founder, YoungConstruct",
    metric: "345%",
    metricLabel: "Traffic growth",
    accentColor: "#60a5fa",
  },
  {
    badge: "Shopify",
    client: "Eucy",
    industry: "E-commerce · Australia",
    quote: "A 4.63% conversion rate and 2.5x increase in sales in our very first month. Plus 20+ new subscriptions generated immediately. Outstanding results from the RankConvert team.",
    author: "Eucy Team",
    role: "E-commerce Brand",
    metric: "2.5×",
    metricLabel: "Sales increase",
    accentColor: "#a78bfa",
  },
  {
    badge: "Social Media",
    client: "Prestige Global Events",
    industry: "Events · Melbourne",
    quote: "1.6 million views on a single post. Over 1,000 organic followers in just 3 months. Our brand awareness has skyrocketed thanks to RankConvert's social media strategy.",
    author: "Prestige Events Team",
    role: "Event Management Company",
    metric: "1.6M",
    metricLabel: "Views — 1 post",
    accentColor: "#f472b6",
  },
  {
    badge: "SEO",
    client: "EOC Metal Roofing",
    industry: "Trades · Melbourne",
    quote: "RankConvert helped us rank for all the right keywords. Our phone doesn't stop ringing now. The investment has paid back many times over.",
    author: "Emmanuel Chibs",
    role: "Owner, EOC Metal Roofing",
    metric: "Top 3",
    metricLabel: "Google ranking",
    accentColor: "#f97316",
  },
  {
    badge: "Website + SEO",
    client: "Sprociety Coffee",
    industry: "Hospitality · Melbourne",
    quote: "Jono and the team at RankConvert completely transformed our digital presence. New website, better SEO, more customers. Couldn't be happier with the results.",
    author: "Jono East",
    role: "Owner, Sprociety Coffee",
    metric: "5★",
    metricLabel: "Google rating",
    accentColor: "#fbbf24",
  },
];

export function SemrushNews() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(false);

  const scroll = (dir: "prev" | "next") => {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollBy({
      left: dir === "next" ? el.clientWidth * 0.8 : -el.clientWidth * 0.8,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    const onEnter = () => (pausedRef.current = true);
    const onLeave = () => (pausedRef.current = false);
    el.addEventListener("mouseenter", onEnter);
    el.addEventListener("mouseleave", onLeave);
    el.addEventListener("touchstart", onEnter, { passive: true });
    el.addEventListener("touchend", onLeave, { passive: true });

    const cardWidth = (el.firstElementChild as HTMLElement | null)?.offsetWidth ?? 340;
    const step = cardWidth + 16;

    const id = window.setInterval(() => {
      if (pausedRef.current || document.hidden) return;
      const max = el.scrollWidth - el.clientWidth;
      if (el.scrollLeft >= max - 4) {
        el.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        el.scrollBy({ left: step, behavior: "smooth" });
      }
    }, 4500);

    return () => {
      window.clearInterval(id);
      el.removeEventListener("mouseenter", onEnter);
      el.removeEventListener("mouseleave", onLeave);
      el.removeEventListener("touchstart", onEnter);
      el.removeEventListener("touchend", onLeave);
    };
  }, []);

  return (
    <section className="py-14 sm:py-20" style={{ background: "#f6f6f8" }}>
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6 mb-8 sm:mb-10">
          <div>
            <div className="flex items-center gap-1.5 mb-3">
              <span className="text-[11px] font-bold uppercase tracking-widest" style={{ color: "#c9971a" }}>
                Client Testimonials
              </span>
              <span className="text-[11px] font-medium text-[#09090e]/25">( {TESTIMONIALS.length} )</span>
            </div>
            <h2 className="text-[26px] sm:text-[38px] lg:text-[50px] font-black text-[#09090e] leading-[1.06] tracking-[-1px]">
              More Testimonials from Business Owners
            </h2>
            <p className="text-[14px] sm:text-[15px] leading-[1.6] mt-4 max-w-[540px]" style={{ color: "rgba(9,9,14,0.55)" }}>
              See what real business owners say about our digital marketing services.
            </p>
          </div>
          <div className="hidden md:flex items-center gap-2 shrink-0">
            <button
              onClick={() => scroll("prev")}
              aria-label="Previous"
              className="w-12 h-12 rounded-full border border-[#09090e]/15 flex items-center justify-center hover:bg-[#09090e]/5 transition-colors"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                <path d="M9 3l-4 4 4 4" stroke="#09090e" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              onClick={() => scroll("next")}
              aria-label="Next"
              className="w-12 h-12 rounded-full border border-[#09090e]/15 flex items-center justify-center hover:bg-[#09090e]/5 transition-colors"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                <path d="M5 3l4 4-4 4" stroke="#09090e" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>

        <div
          ref={scrollerRef}
          className="grid grid-flow-col auto-cols-[85%] sm:auto-cols-[44%] lg:auto-cols-[calc((100%-3rem)/3)] gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-2 -mx-4 px-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {TESTIMONIALS.map((t, i) => (
            <TestimonialCard key={i} testimonial={t} />
          ))}
        </div>

        <div className="flex md:hidden items-center justify-center gap-2 mt-8">
          <button onClick={() => scroll("prev")} aria-label="Previous" className="w-10 h-10 rounded-full border border-[#09090e]/15 flex items-center justify-center">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
              <path d="M9 3l-4 4 4 4" stroke="#09090e" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button onClick={() => scroll("next")} aria-label="Next" className="w-10 h-10 rounded-full border border-[#09090e]/15 flex items-center justify-center">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
              <path d="M5 3l4 4-4 4" stroke="#09090e" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ testimonial: t }: { testimonial: Testimonial }) {
  return (
    <article
      className="snap-start rounded-2xl p-6 flex flex-col gap-4"
      style={{ background: "#ffffff", border: "1px solid rgba(0,0,0,0.08)" }}
    >
      <div className="flex items-center justify-between">
        <span
          className="text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full"
          style={{
            color: t.accentColor,
            background: `${t.accentColor}18`,
            border: `1px solid ${t.accentColor}30`,
          }}
        >
          {t.badge}
        </span>
        <span className="text-[14px] font-black" style={{ color: t.accentColor }}>{t.metric}</span>
      </div>

      <div>
        <div className="text-[14px] font-bold text-[#09090e] mb-0.5">{t.client}</div>
        <div className="text-[11px] text-[#09090e]/35">{t.industry}</div>
      </div>

      <div className="flex items-start gap-2.5 flex-1">
        <svg width="18" height="14" viewBox="0 0 22 18" fill="none" aria-hidden className="shrink-0 text-[#09090e]/25 mt-0.5">
          <path d="M0 18V11C0 5 3 1 9 0v4c-3 1-4 3-4 6h4v8H0zm12 0V11c0-6 3-10 9-11v4c-3 1-4 3-4 6h4v8h-9z" fill="currentColor" />
        </svg>
        <p className="text-[13px] text-[#09090e]/65 leading-[1.6]">{t.quote}</p>
      </div>

      <div className="flex items-center justify-between mt-auto pt-3" style={{ borderTop: "1px solid rgba(0,0,0,0.07)" }}>
        <div>
          <div className="text-[12px] font-semibold text-[#09090e]">{t.author}</div>
          <div className="text-[11px] text-[#09090e]/35">{t.role}</div>
        </div>
        <div className="flex items-center gap-0.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <svg key={i} width="10" height="10" viewBox="0 0 12 12" fill="#fbbf24" aria-hidden>
              <path d="M6 0l1.6 4 4.4.4-3.3 2.9 1 4.3L6 9.4l-3.7 2.2 1-4.3L0 4.4 4.4 4 6 0z" />
            </svg>
          ))}
        </div>
      </div>
    </article>
  );
}
