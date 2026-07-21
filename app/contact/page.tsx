import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { SemrushSolutions } from "@/components/semrush/Solutions";
import { SemrushPreFooterCTA } from "@/components/semrush/PreFooterCTA";

export const metadata: Metadata = {
  title: "Contact RankConvert — Melbourne Digital Marketing Agency",
  description:
    "Book a free strategy call, or reach us by phone or email. Melbourne-based, Australian-owned.",
};

const METHODS = [
  {
    label: "Call us",
    value: "0478 186 355",
    href: "tel:0478186355",
    hint: "Mon–Fri, 9am–5pm AEST",
    icon: (
      <svg width="20" height="20" viewBox="0 0 14 14" fill="none" aria-hidden>
        <path
          d="M2 3.5a1.5 1.5 0 011.5-1.5h1.4a1 1 0 01.95.68l.7 2.09a1 1 0 01-.24 1.02L5.4 6.8a8 8 0 003.8 3.8l1-.9a1 1 0 011.02-.24l2.1.7a1 1 0 01.68.95V12.5A1.5 1.5 0 0112.5 14C6.7 14 2 9.3 2 3.5z"
          stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    label: "Email us",
    value: "grow@rankconvert.com.au",
    href: "mailto:grow@rankconvert.com.au",
    hint: "We reply within 24 hours",
    icon: (
      <svg width="20" height="20" viewBox="0 0 18 18" fill="none" aria-hidden>
        <rect x="2" y="4" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.4" />
        <path d="M2 5l7 5 7-5" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: "Visit us",
    value: "Melbourne, Australia",
    href: "#",
    hint: "Remote-first, meet by appointment",
    icon: (
      <svg width="20" height="20" viewBox="0 0 18 18" fill="none" aria-hidden>
        <path d="M9 1c-3.3 0-6 2.6-6 5.8 0 4.5 6 10.2 6 10.2s6-5.7 6-10.2C15 3.6 12.3 1 9 1z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
        <circle cx="9" cy="6.8" r="2" stroke="currentColor" strokeWidth="1.4" />
      </svg>
    ),
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
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
          <div className="max-w-[820px] mx-auto text-center">
            <div
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full mb-6 border text-[12px] font-semibold text-white/80 animate-fade-up"
              style={{ background: "rgba(245,200,66,0.08)", borderColor: "rgba(245,200,66,0.25)" }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#f5c842] animate-pulse" />
              Free strategy call · 30 minutes
            </div>
            <h1 className="text-[32px] sm:text-[48px] lg:text-[64px] font-black text-white leading-[1.03] tracking-[-1.8px] mb-5 animate-fade-up">
              Let&apos;s talk about{" "}
              <span style={{ color: "#f5c842" }}>growing your business.</span>
            </h1>
            <p className="text-[15px] sm:text-[18px] text-white/60 leading-[1.6] max-w-[620px] mx-auto animate-fade-up">
              Tell us where you&apos;re stuck and where you want to go — we&apos;ll come back within 24 hours
              with a straight answer and a plan.
            </p>
          </div>
        </div>
      </section>

      {/* Contact methods + form */}
      <Reveal variant="up">
        <section className="py-16 sm:py-24" style={{ background: "#f6f6f8" }}>
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-[1fr_1fr] gap-8 lg:gap-14">

              {/* Methods */}
              <div className="space-y-4">
                <div className="text-[11px] font-bold uppercase tracking-widest mb-3" style={{ color: "#c9971a" }}>
                  Get in touch
                </div>
                <h2 className="text-[26px] sm:text-[38px] lg:text-[50px] font-black text-[#09090e] leading-[1.06] tracking-[-1px] mb-4">
                  Prefer to skip the form?
                </h2>
                <p className="text-[14px] sm:text-[16px] leading-[1.7] mb-6" style={{ color: "rgba(9,9,14,0.6)" }}>
                  Pick a channel that suits you. We answer every enquiry personally — no chatbots, no offshore call centre.
                </p>

                <div className="space-y-3">
                  {METHODS.map(m => (
                    <Link
                      key={m.label}
                      href={m.href}
                      className="flex items-center gap-4 rounded-2xl p-5 transition-colors hover:bg-white"
                      style={{ background: "#ffffff", border: "1px solid rgba(0,0,0,0.08)" }}
                    >
                      <span
                        className="w-11 h-11 rounded-full flex items-center justify-center shrink-0 text-[#09090e]"
                        style={{ background: "rgba(245,200,66,0.18)", border: "1px solid rgba(245,200,66,0.35)" }}
                      >
                        {m.icon}
                      </span>
                      <div className="flex-1 min-w-0">
                        <div className="text-[11px] font-bold uppercase tracking-widest text-[#09090e]/40 mb-0.5">{m.label}</div>
                        <div className="text-[15px] sm:text-[16px] font-bold text-[#09090e] truncate">{m.value}</div>
                        <div className="text-[11px] text-[#09090e]/45 mt-0.5">{m.hint}</div>
                      </div>
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden className="text-[#09090e]/40 shrink-0">
                        <path d="M4 3h6v6M10 3L3 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Form */}
              <form
                className="rounded-2xl p-6 sm:p-8 flex flex-col gap-3"
                style={{ background: "#0f1017", border: "1px solid rgba(255,255,255,0.08)", boxShadow: "0 32px 80px rgba(0,0,0,0.5)" }}
              >
                <div className="mb-3">
                  <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color: "#f5c842" }}>Send a message</span>
                  <h3 className="text-[17px] sm:text-[20px] font-black text-white leading-[1.25] mt-1.5">Tell us about your project</h3>
                </div>

                <input
                  type="text"
                  placeholder="Your name*"
                  required
                  className="w-full px-4 py-3 rounded-xl text-[14px] text-white outline-none"
                  style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.10)" }}
                />
                <input
                  type="email"
                  placeholder="Email*"
                  required
                  className="w-full px-4 py-3 rounded-xl text-[14px] text-white outline-none"
                  style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.10)" }}
                />
                <input
                  type="tel"
                  placeholder="Phone*"
                  required
                  className="w-full px-4 py-3 rounded-xl text-[14px] text-white outline-none"
                  style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.10)" }}
                />
                <input
                  type="url"
                  placeholder="Website (optional)"
                  className="w-full px-4 py-3 rounded-xl text-[14px] text-white outline-none"
                  style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.10)" }}
                />
                <textarea
                  rows={4}
                  placeholder="What can we help with?"
                  className="w-full px-4 py-3 rounded-xl text-[14px] text-white outline-none resize-none"
                  style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.10)" }}
                />

                <button
                  type="submit"
                  className="w-full py-3.5 mt-1 text-[#09090e] text-[14px] font-bold rounded-full transition-colors"
                  style={{ background: "#f5c842" }}
                >
                  Send message
                </button>

                <p className="text-center text-[11px] text-white/30 mt-1">
                  We reply within 24 hours. Zero spam.
                </p>
              </form>

            </div>
          </div>
        </section>
      </Reveal>

      <Reveal variant="up"><SemrushSolutions /></Reveal>
      <Reveal variant="scale"><SemrushPreFooterCTA /></Reveal>
    </>
  );
}
