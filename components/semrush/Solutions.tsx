"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

type Solution = {
  tag: string;
  title: string;
  body: string;
  image: string;
  imageAlt: string;
  accentColor: string;
  cta: string;
  href: string;
};

const SOLUTIONS: Solution[] = [
  {
    tag: "SEO",
    title: "Rank higher in Google and bring in customers ready to buy",
    body: "670.93% average organic traffic growth. Focused, high-intent customers who are actively searching for what you sell.",
    image: "https://i0.wp.com/rankconvert.com.au/wp-content/uploads/2026/05/seo-consultant-services.webp?fit=1536%2C1024&ssl=1",
    imageAlt: "SEO consultant services",
    accentColor: "#f5c842",
    cta: "SEO Services",
    href: "/seo",
  },
  {
    tag: "Website Design",
    title: "Clean, professional websites scientifically engineered to convert",
    body: "Not just a pretty site — a conversion machine. Built to turn visitors into leads and leads into paying customers.",
    image: "https://i0.wp.com/rankconvert.com.au/wp-content/uploads/2026/05/professional-website-design-services.webp?fit=1536%2C1024&ssl=1",
    imageAlt: "Professional website design services",
    accentColor: "#60a5fa",
    cta: "Website Services",
    href: "/website-design",
  },
  {
    tag: "Shopify",
    title: "High quality Shopify stores designed to sell your product",
    body: "Optimised Shopify stores that look great, load fast, and are built to maximise sales from day one.",
    image: "https://i0.wp.com/rankconvert.com.au/wp-content/uploads/2026/05/shopify-developer-services.webp?fit=1536%2C1024&ssl=1",
    imageAlt: "Shopify developer services",
    accentColor: "#a78bfa",
    cta: "Shopify Services",
    href: "/shopify",
  },
  {
    tag: "CRO",
    title: "Improve your conversion rate and watch revenue go up",
    body: "3.9x boost in conversion rates. Turn existing traffic into more leads without spending more on ads.",
    image: "https://i0.wp.com/rankconvert.com.au/wp-content/uploads/2026/05/conversion-rate-optimisation-services.webp?fit=1536%2C1024&ssl=1",
    imageAlt: "Conversion rate optimisation services",
    accentColor: "#f97316",
    cta: "CRO Services",
    href: "/cro",
  },
  {
    tag: "Social Media",
    title: "Viral, high-quality content designed to grow your brand",
    body: "Engaging social media content that builds your audience, drives brand awareness, and generates real business results.",
    image: "https://i0.wp.com/rankconvert.com.au/wp-content/uploads/2026/05/social-media-marketing-services.webp?fit=1536%2C1024&ssl=1",
    imageAlt: "Social media marketing services",
    accentColor: "#f472b6",
    cta: "Social Media Services",
    href: "/social-media",
  },
];

export function SemrushSolutions() {
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

    const cardWidth = (el.firstElementChild as HTMLElement | null)?.offsetWidth ?? 400;
    const step = cardWidth + 16;

    const id = window.setInterval(() => {
      if (pausedRef.current || document.hidden) return;
      const max = el.scrollWidth - el.clientWidth;
      if (el.scrollLeft >= max - 4) {
        el.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        el.scrollBy({ left: step, behavior: "smooth" });
      }
    }, 3500);

    return () => {
      window.clearInterval(id);
      el.removeEventListener("mouseenter", onEnter);
      el.removeEventListener("mouseleave", onLeave);
      el.removeEventListener("touchstart", onEnter);
      el.removeEventListener("touchend", onLeave);
    };
  }, []);

  return (
    <section
      className="relative z-20 py-14 sm:py-20 lg:py-24 md:-mt-[20vh] md:rounded-t-[32px]"
      style={{ background: "linear-gradient(180deg, #10121a 0%, #09090e 55%, #0b0d14 100%)", boxShadow: "0 -20px 60px rgba(0,0,0,0.4)" }}
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6 mb-10 sm:mb-12">
          <div className="max-w-[680px]">
            <div className="flex items-center gap-1.5 mb-3">
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#f5c842]">
                Our Services
              </span>
              <span className="text-[11px] font-medium text-white/30">
                ( {SOLUTIONS.length} )
              </span>
            </div>
            <h2 className="text-[26px] sm:text-[38px] lg:text-[50px] font-black text-white leading-[1.06] tracking-[-1px] mb-4">
              Our Digital Marketing Services
            </h2>
            <p className="text-[14px] sm:text-[15px] leading-[1.6] max-w-[520px]" style={{ color: "rgba(255,255,255,0.55)" }}>
              Supporting services designed to help your website grow, perform, and convert.
            </p>
          </div>
          <div className="hidden lg:flex items-center gap-2 shrink-0">
            <button
              onClick={() => scroll("prev")}
              aria-label="Previous"
              className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                <path d="M9 3l-4 4 4 4" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              onClick={() => scroll("next")}
              aria-label="Next"
              className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                <path d="M5 3l4 4-4 4" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>

        {/* Desktop scroller */}
        <div
          ref={scrollerRef}
          className="hidden lg:flex gap-4 overflow-x-auto snap-x snap-mandatory pb-2 -mx-4 px-4 scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {SOLUTIONS.map((s, i) => (
            <SolutionCard key={i} solution={s} />
          ))}
        </div>

        {/* Mobile stacked */}
        <ul
          className="lg:hidden divide-y"
          style={{ borderTop: "1px solid rgba(255,255,255,0.07)", borderBottom: "1px solid rgba(255,255,255,0.07)" }}
        >
          {SOLUTIONS.map((s, i) => (
            <li key={i} style={{ borderColor: "rgba(255,255,255,0.07)" }}>
              <div className="flex items-center justify-between gap-4 py-4">
                <div>
                  <div className="mb-1">
                    <span
                      className="inline-block text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full"
                      style={{
                        color: s.accentColor,
                        background: `${s.accentColor}18`,
                        border: `1px solid ${s.accentColor}30`,
                      }}
                    >
                      {s.tag}
                    </span>
                  </div>
                  <div className="text-[15px] font-semibold text-white leading-[1.3]">{s.title}</div>
                </div>
                <span className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center shrink-0">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                    <path d="M7 3v8M3 7h8" stroke="white" strokeWidth="1.4" strokeLinecap="round" />
                  </svg>
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function SolutionCard({ solution }: { solution: Solution }) {
  return (
    <article
      className="snap-start shrink-0 w-[380px] rounded-2xl p-4 flex flex-col gap-3 relative overflow-hidden"
      style={{
        background: "#0f1017",
        border: "1px solid rgba(255,255,255,0.07)",
      }}
    >
      {/* Accent glow top */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px] pointer-events-none"
        style={{ background: `linear-gradient(90deg, transparent, ${solution.accentColor}80, transparent)` }}
      />

      {/* Live-site service image — top */}
      <div
        className="relative z-10 rounded-xl overflow-hidden"
        style={{
          aspectRatio: "3/2",
          border: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <Image
          src={solution.image}
          alt={solution.imageAlt}
          fill
          className="object-cover"
          sizes="380px"
        />
      </div>

      {/* Text — bottom */}
      <div className="relative z-10">
        <div className="mb-3">
          <span
            className="inline-block text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full"
            style={{
              color: solution.accentColor,
              background: `${solution.accentColor}18`,
              border: `1px solid ${solution.accentColor}30`,
            }}
          >
            {solution.tag}
          </span>
        </div>

        <h3 className="text-[18px] font-black text-white leading-[1.2] tracking-tight mb-2">
          {solution.title}
        </h3>
        <p className="text-[12px] text-white/50 leading-[1.6] mb-4">{solution.body}</p>

        <a
          href={solution.href}
          className="inline-flex items-center gap-1.5 text-[12px] font-bold px-3.5 h-9 rounded-full transition-colors"
          style={{
            color: solution.accentColor,
            background: `${solution.accentColor}14`,
            border: `1px solid ${solution.accentColor}40`,
          }}
          onMouseEnter={e => (e.currentTarget.style.background = `${solution.accentColor}22`)}
          onMouseLeave={e => (e.currentTarget.style.background = `${solution.accentColor}14`)}
        >
          {solution.cta}
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden>
            <path d="M3 2h5v5M8 2L2 8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>
    </article>
  );
}
