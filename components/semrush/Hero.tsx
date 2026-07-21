"use client";

import { useState } from "react";
import { GoogleReviewsBadge } from "@/components/ui/GoogleReviewsBadge";

export function SemrushHero() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(91,155,213,0.18) 0%, transparent 60%), linear-gradient(180deg, #10121a 0%, #09090e 60%, #0b0d14 100%)",
      }}
    >
      {/* Grid bg */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 lg:pt-28 pb-0">

        {/* Two-column layout: text left, form right */}
        <div className="grid lg:grid-cols-[1.5fr_1fr] gap-10 lg:gap-14 items-center">

          {/* Left — headline content */}
          <div className="text-center lg:text-left max-w-[760px] mx-auto lg:mx-0">
            {/* Google Reviews badge */}
            <div className="mb-6 animate-fade-up">
              <GoogleReviewsBadge rating="5.0" />
            </div>

            <h1
              className="text-[36px] sm:text-[56px] lg:text-[76px] font-black text-white leading-[1.02] tracking-[-2px] mb-5 animate-fade-up"
              style={{ animationDelay: "0.05s" }}
            >
              Melbourne Digital
              <br />
              <span style={{ color: "#f5c842" }}>Marketing Services</span>
            </h1>

            <p
              className="text-[15px] sm:text-[17px] text-white/60 leading-[1.6] mb-8 animate-fade-up"
              style={{ animationDelay: "0.1s" }}
            >
              Digital marketing strategies that <strong className="text-white">ACTUALLY</strong> grow your
              business. More customers, more sales, more money.
            </p>

            {/* CTA buttons */}
            <div
              className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-8 animate-fade-up"
              style={{ animationDelay: "0.15s" }}
            >
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-7 h-[50px] bg-[#f5c842] text-[#09090e] text-[14px] font-bold rounded-full hover:bg-[#e6b830] transition-colors"
              >
                Scale My Business Today
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-7 h-[50px] bg-white/5 text-white text-[14px] font-semibold rounded-full border border-white/10 hover:bg-white/10 transition-colors"
              >
                Book Free Consultation
              </a>
            </div>

            {/* Trust line */}
            <div
              className="flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-2 text-[12px] text-white/45 animate-fade-up"
              style={{ animationDelay: "0.2s" }}
            >
              <span className="inline-flex items-center gap-1.5">
                <span className="flex text-[#f5c842]">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg key={i} width="12" height="12" viewBox="0 0 12 12" fill="currentColor" aria-hidden>
                      <path d="M6 0l1.6 4 4.4.4-3.3 2.9 1 4.3L6 9.4l-3.7 2.2 1-4.3L0 4.4 4.4 4 6 0z" />
                    </svg>
                  ))}
                </span>
                <span className="font-semibold text-white">5.0</span>
                <span>Google Verified Reviews</span>
              </span>
              <span className="hidden sm:inline">·</span>
              <span>No lock-in contracts</span>
              <span className="hidden sm:inline">·</span>
              <span>Australian owned &amp; operated</span>
            </div>
          </div>

          {/* Right — lead capture form card */}
          <div
            className="rounded-2xl p-6 sm:p-7 animate-fade-up w-full max-w-[420px] mx-auto lg:mx-0 lg:ml-auto"
            style={{
              background: "#0f1017",
              border: "1px solid rgba(255,255,255,0.08)",
              boxShadow: "0 32px 80px rgba(0,0,0,0.5)",
              animationDelay: "0.1s",
            }}
          >
            {/* Card header */}
            <div className="mb-6">
              <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color: "#f5c842" }}>
                Free consultation
              </span>
              <h2 className="text-[17px] sm:text-[20px] font-black text-white leading-[1.25] mt-1.5">
                Book Free Business Growth
                <br />
                Consultation Today
              </h2>
            </div>

            <LeadForm />
          </div>

        </div>

        {/* Stats strip */}
        <div
          className="mt-14 sm:mt-18 lg:mt-20 max-w-[1100px] mx-auto animate-fade-up"
          style={{ animationDelay: "0.25s" }}
        >
          <StatsStrip />
        </div>
      </div>
    </section>
  );
}

function LeadForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  if (submitted) {
    return (
      <div className="py-10 text-center">
        <div
          className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4"
          style={{ background: "rgba(245,200,66,0.12)", border: "1px solid rgba(245,200,66,0.3)" }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path d="M5 12l5 5L20 7" stroke="#f5c842" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <div className="text-[17px] font-bold text-white mb-1">You&apos;re all set!</div>
        <div className="text-[13px] text-white/50">We&apos;ll be in touch within 24 hours.</div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <input
        type="text"
        placeholder="Your name*"
        required
        className="w-full px-4 py-3 rounded-xl text-[14px] text-white outline-none transition-colors"
        style={{
          background: "rgba(255,255,255,0.06)",
          border: "1px solid rgba(255,255,255,0.10)",
          color: "white",
        }}
        onFocus={e => (e.currentTarget.style.borderColor = "rgba(245,200,66,0.5)")}
        onBlur={e => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.10)")}
      />
      <input
        type="text"
        placeholder="Company name*"
        required
        className="w-full px-4 py-3 rounded-xl text-[14px] text-white outline-none transition-colors"
        style={{
          background: "rgba(255,255,255,0.06)",
          border: "1px solid rgba(255,255,255,0.10)",
        }}
        onFocus={e => (e.currentTarget.style.borderColor = "rgba(245,200,66,0.5)")}
        onBlur={e => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.10)")}
      />
      <input
        type="email"
        placeholder="Email*"
        required
        className="w-full px-4 py-3 rounded-xl text-[14px] text-white outline-none transition-colors"
        style={{
          background: "rgba(255,255,255,0.06)",
          border: "1px solid rgba(255,255,255,0.10)",
        }}
        onFocus={e => (e.currentTarget.style.borderColor = "rgba(245,200,66,0.5)")}
        onBlur={e => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.10)")}
      />
      <input
        type="tel"
        placeholder="Phone number*"
        required
        className="w-full px-4 py-3 rounded-xl text-[14px] text-white outline-none transition-colors"
        style={{
          background: "rgba(255,255,255,0.06)",
          border: "1px solid rgba(255,255,255,0.10)",
        }}
        onFocus={e => (e.currentTarget.style.borderColor = "rgba(245,200,66,0.5)")}
        onBlur={e => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.10)")}
      />
      <input
        type="url"
        placeholder="Website url"
        className="w-full px-4 py-3 rounded-xl text-[14px] text-white outline-none transition-colors"
        style={{
          background: "rgba(255,255,255,0.06)",
          border: "1px solid rgba(255,255,255,0.10)",
        }}
        onFocus={e => (e.currentTarget.style.borderColor = "rgba(245,200,66,0.5)")}
        onBlur={e => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.10)")}
      />

      <button
        type="submit"
        disabled={loading}
        className="w-full py-3.5 mt-1 text-[#09090e] text-[14px] font-bold rounded-full transition-colors disabled:opacity-70"
        style={{ background: "#f5c842" }}
        onMouseEnter={e => { if (!loading) e.currentTarget.style.background = "#e6b830"; }}
        onMouseLeave={e => { e.currentTarget.style.background = "#f5c842"; }}
      >
        {loading ? "Submitting…" : "Scale My Business Today"}
      </button>

      <p className="text-center text-[11px] text-white/30 mt-1">
        No lock-in contracts · Free strategy call · 100% confidential
      </p>
    </form>
  );
}

function StatsStrip() {
  const stats = [
    { value: "670.93%", label: "Average Organic Traffic Growth", sub: "SEO Jiu Jitsu methodology" },
    { value: "2–5×", label: "ROI on Average", sub: "Proven across all services" },
    { value: "3.9×", label: "Conversion Rate Boost", sub: "From traffic to paying customers" },
    { value: "5,203%", label: "Best Client Result", sub: "Evolved H2O · 9 months" },
  ];

  return (
    <div
      className="rounded-t-2xl overflow-hidden"
      style={{
        background: "#0f1017",
        boxShadow: "0 -2px 0 rgba(255,255,255,0.04), 0 40px 80px -12px rgba(0,0,0,0.8)",
      }}
    >
      {/* Browser chrome */}
      <div className="bg-[#0f1017] px-4 py-3 flex items-center gap-3 border-b border-white/[0.06]">
        <div className="flex gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
        </div>
        <div className="flex-1 bg-white/[0.06] border border-white/[0.08] rounded-md px-3 py-1 text-[10px] text-white/40 flex items-center justify-center gap-1.5">
          <svg width="9" height="9" viewBox="0 0 12 12" fill="none" aria-hidden className="text-[#f5c842]/60">
            <path d="M3.5 5V3.5a2.5 2.5 0 015 0V5M2.5 5h7v5.5h-7V5z" stroke="currentColor" strokeWidth="1.1" />
          </svg>
          rankconvert.com.au/dashboard
        </div>
        <div className="w-14 shrink-0" />
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/[0.06]">
        {stats.map((s, i) => (
          <div key={i} className="p-4 sm:p-6 lg:p-7 flex flex-col gap-1">
            <div
              className="font-black leading-none tracking-tight"
              style={{ color: "#f5c842", fontSize: "clamp(20px, 5.5vw, 36px)" }}
            >
              {s.value}
            </div>
            <div className="text-[11px] sm:text-[13px] font-semibold text-white mt-1 leading-tight">{s.label}</div>
            <div className="text-[10px] sm:text-[11px] text-white/40 leading-tight">{s.sub}</div>
          </div>
        ))}
      </div>

      {/* Activity bar */}
      <div className="border-t border-white/[0.06] px-5 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2 text-[11px] text-white/40">
          <span className="w-1.5 h-1.5 rounded-full bg-[#f5c842] animate-pulse" />
          Live results · Updated in real time
        </div>
        <div className="flex items-center gap-4 text-[11px] text-white/30">
          <span className="text-[#f5c842] font-semibold text-white/60">grow@rankconvert.com.au</span>
          <span className="hidden sm:inline">·</span>
          <span className="hidden sm:inline">0478 186 355</span>
        </div>
      </div>
    </div>
  );
}
