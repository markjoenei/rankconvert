"use client";

import { useState } from "react";

export function LeadForm({
  eyebrow = "Free consultation",
  title = "Book Free Business Growth Consultation Today",
}: {
  eyebrow?: string;
  title?: string;
}) {
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

  const inputStyle: React.CSSProperties = {
    background: "rgba(255,255,255,0.06)",
    border: "1px solid rgba(255,255,255,0.10)",
  };

  return (
    <div
      className="rounded-2xl p-6 sm:p-7 w-full max-w-[440px] mx-auto lg:mx-0 lg:ml-auto animate-fade-up"
      style={{
        background: "#0f1017",
        border: "1px solid rgba(255,255,255,0.08)",
        boxShadow: "0 32px 80px rgba(0,0,0,0.5)",
        animationDelay: "0.1s",
      }}
    >
      <div className="mb-6">
        <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color: "#f5c842" }}>{eyebrow}</span>
        <h2 className="text-[17px] sm:text-[20px] font-black text-white leading-[1.25] mt-1.5">{title}</h2>
      </div>

      {submitted ? (
        <div className="py-8 text-center">
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
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input type="text" placeholder="Your name*" required className="w-full px-4 py-3 rounded-xl text-[14px] text-white outline-none" style={inputStyle} />
          <input type="text" placeholder="Company name*" required className="w-full px-4 py-3 rounded-xl text-[14px] text-white outline-none" style={inputStyle} />
          <input type="email" placeholder="Email*" required className="w-full px-4 py-3 rounded-xl text-[14px] text-white outline-none" style={inputStyle} />
          <input type="tel" placeholder="Phone number*" required className="w-full px-4 py-3 rounded-xl text-[14px] text-white outline-none" style={inputStyle} />
          <input type="url" placeholder="Website url" className="w-full px-4 py-3 rounded-xl text-[14px] text-white outline-none" style={inputStyle} />
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3.5 mt-1 text-[#09090e] text-[14px] font-bold rounded-full transition-colors disabled:opacity-70 hover:bg-[#e6b830]"
            style={{ background: "#f5c842" }}
          >
            {loading ? "Submitting…" : "Scale My Business Today"}
          </button>
          <p className="text-center text-[11px] text-white/30 mt-1">
            No lock-in contracts · Free strategy call · 100% confidential
          </p>
        </form>
      )}
    </div>
  );
}
