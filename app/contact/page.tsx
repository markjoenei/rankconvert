import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { ServiceFAQ } from "@/components/service/ServiceFAQ";
import { SemrushSolutions } from "@/components/semrush/Solutions";
import { SemrushNews } from "@/components/semrush/News";
import { SemrushPreFooterCTA } from "@/components/semrush/PreFooterCTA";

export const metadata: Metadata = {
  title: "Contact RankConvert — Book a Free Strategy Call",
  description:
    "Book your free 30-minute strategy call. Tell us about your business and we'll come back within 24 hours with a clear plan.",
};

const NEXT_STEPS = [
  {
    n: "01",
    title: "Submit the form",
    body: "Tell us a bit about your business, where you're at, and what you're trying to achieve.",
    hint: "Takes 60 seconds",
  },
  {
    n: "02",
    title: "We review & reply",
    body: "We'll look through your details and reply within 24 hours to line up a free 30-minute strategy call.",
    hint: "Within 24 hours",
  },
  {
    n: "03",
    title: "Free strategy call",
    body: "On the call we'll dig into your goals and current setup, then outline a clear plan tailored to your business.",
    hint: "30 minutes · No pressure",
  },
  {
    n: "04",
    title: "Get to work",
    body: "If it's a fit, we scope, price and start — usually inside a few days. If not, you keep the plan.",
    hint: "No obligation to proceed",
  },
];

const METHODS = [
  {
    label: "Call us",
    value: "0478 186 355",
    href: "tel:0478186355",
    hint: "Mon–Fri, 9am–5pm AEST",
    icon: (
      <svg width="20" height="20" viewBox="0 0 14 14" fill="none" aria-hidden>
        <path d="M2 3.5a1.5 1.5 0 011.5-1.5h1.4a1 1 0 01.95.68l.7 2.09a1 1 0 01-.24 1.02L5.4 6.8a8 8 0 003.8 3.8l1-.9a1 1 0 011.02-.24l2.1.7a1 1 0 01.68.95V12.5A1.5 1.5 0 0112.5 14C6.7 14 2 9.3 2 3.5z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
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
    hint: "Remote-first · Meet by appointment",
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
      {/* Hero + Form */}
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
          <div className="grid lg:grid-cols-[1.4fr_1fr] gap-10 lg:gap-14 items-center">
            <div className="text-center lg:text-left">
              <div
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full mb-6 border text-[12px] font-semibold text-white/80 animate-fade-up"
                style={{ background: "rgba(245,200,66,0.08)", borderColor: "rgba(245,200,66,0.25)" }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#f5c842] animate-pulse" />
                5-Star Rated by Australian Business Owners
              </div>
              <h1 className="text-[32px] sm:text-[48px] lg:text-[64px] font-black text-white leading-[1.03] tracking-[-1.8px] mb-5 animate-fade-up">
                Let&apos;s Grow Your{" "}
                <span style={{ color: "#f5c842" }}>Business Online.</span>
              </h1>
              <p className="text-[15px] sm:text-[18px] text-white/60 leading-[1.65] mb-6 max-w-[620px] mx-auto lg:mx-0 animate-fade-up">
                Whether you&apos;re looking to bring in more traffic, generate more leads, or increase your sales — it all starts with the right strategy. We work with businesses across SEO, website design, Shopify optimisation, CRO and social media to build systems that actually drive results.
              </p>
              <p className="text-[14px] sm:text-[16px] text-white/50 leading-[1.7] max-w-[620px] mx-auto lg:mx-0 animate-fade-up">
                Tell us a bit about your business, where you&apos;re at, and what you&apos;re trying to achieve. From there, we&apos;ll map out a clear plan to help you grow your presence online, attract the right customers, and turn that attention into real enquiries and revenue.
              </p>
            </div>

            {/* Form card */}
            <form
              id="lead-form"
              className="rounded-2xl p-6 sm:p-7 w-full max-w-[440px] mx-auto lg:ml-auto animate-fade-up"
              style={{ background: "#0f1017", border: "1px solid rgba(255,255,255,0.08)", boxShadow: "0 32px 80px rgba(0,0,0,0.5)" }}
            >
              <div className="mb-6">
                <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color: "#f5c842" }}>Free strategy call</span>
                <h2 className="text-[17px] sm:text-[20px] font-black text-white leading-[1.25] mt-1.5">Book Free Business Growth Consultation Today</h2>
              </div>
              <div className="flex flex-col gap-3">
                <input type="text" placeholder="Your name*" required className="w-full px-4 py-3 rounded-xl text-[14px] text-white outline-none" style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.10)" }} />
                <input type="text" placeholder="Company name*" required className="w-full px-4 py-3 rounded-xl text-[14px] text-white outline-none" style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.10)" }} />
                <input type="email" placeholder="Email*" required className="w-full px-4 py-3 rounded-xl text-[14px] text-white outline-none" style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.10)" }} />
                <input type="tel" placeholder="Phone number*" required className="w-full px-4 py-3 rounded-xl text-[14px] text-white outline-none" style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.10)" }} />
                <input type="url" placeholder="Website url" className="w-full px-4 py-3 rounded-xl text-[14px] text-white outline-none" style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.10)" }} />
                <button type="submit" className="w-full py-3.5 mt-1 text-[#09090e] text-[14px] font-bold rounded-full hover:bg-[#e6b830] transition-colors" style={{ background: "#f5c842" }}>
                  Scale My Business Today
                </button>
                <p className="text-center text-[11px] text-white/30 mt-1">
                  No lock-in contracts · Free strategy call · 100% confidential
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* UX section 1: What happens after you submit */}
      <Reveal variant="up">
        <section className="py-16 sm:py-24" style={{ background: "#f6f6f8" }}>
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-[720px] mx-auto mb-10 sm:mb-14">
              <div className="text-[11px] font-bold uppercase tracking-widest mb-3" style={{ color: "#c9971a" }}>
                What happens next
              </div>
              <h2 className="text-[26px] sm:text-[38px] lg:text-[50px] font-black text-[#09090e] leading-[1.06] tracking-[-1px] mb-5">
                From submit to strategy in four steps.
              </h2>
              <p className="text-[14px] sm:text-[16px] leading-[1.7]" style={{ color: "rgba(9,9,14,0.6)" }}>
                No pressure, no chatbots, no offshore call centre. Every enquiry is handled personally.
              </p>
            </div>

            <div className="flex sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 overflow-x-auto snap-x snap-mandatory -mx-4 px-4 sm:mx-0 sm:px-0 sm:overflow-visible [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {NEXT_STEPS.map((s, i) => (
                <div
                  key={s.n}
                  className="relative rounded-2xl p-6 shrink-0 w-[82%] snap-center sm:w-auto sm:shrink"
                  style={{ background: "#ffffff", border: "1px solid rgba(0,0,0,0.08)" }}
                >
                  {i < NEXT_STEPS.length - 1 && (
                    <span className="hidden lg:block absolute top-1/2 -right-3 -translate-y-1/2 text-[#09090e]/25">
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
                        <path d="M5 4l6 5-6 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  )}
                  <div className="flex items-center gap-2 mb-4">
                    <span
                      className="w-9 h-9 rounded-full flex items-center justify-center font-black text-[13px]"
                      style={{ background: "#f5c842", color: "#09090e" }}
                    >
                      {s.n}
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#09090e]/50">{s.hint}</span>
                  </div>
                  <h3 className="text-[15px] sm:text-[17px] font-black text-[#09090e] leading-[1.25] mb-2">{s.title}</h3>
                  <p className="text-[13px] leading-[1.6]" style={{ color: "rgba(9,9,14,0.6)" }}>{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      {/* UX section 2: Alternative contact methods */}
      <Reveal variant="right">
        <section
          className="py-16 sm:py-24"
          style={{ background: "linear-gradient(180deg, #12141c 0%, #0a0b10 55%, #0c0e15 100%)" }}
        >
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-[1fr_1.15fr] gap-10 lg:gap-14 items-center">
              <div>
                <div className="text-[11px] font-bold uppercase tracking-widest mb-3" style={{ color: "#f5c842" }}>
                  Skip the form
                </div>
                <h2 className="text-[26px] sm:text-[38px] lg:text-[50px] font-black text-white leading-[1.06] tracking-[-1px] mb-5">
                  Prefer to phone or email?
                </h2>
                <p className="text-[14px] sm:text-[16px] leading-[1.7] mb-6" style={{ color: "rgba(255,255,255,0.6)" }}>
                  Pick whichever channel suits you. We answer every enquiry personally — usually within a few hours.
                </p>
                <div className="flex items-center gap-2 text-[12px]" style={{ color: "#f5c842" }}>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#f5c842] animate-pulse" />
                  Currently accepting new clients for 2026
                </div>
              </div>

              <div className="space-y-3">
                {METHODS.map(m => (
                  <Link
                    key={m.label}
                    href={m.href}
                    className="flex items-center gap-4 rounded-2xl p-5 transition-colors group"
                    style={{ background: "#0f1017", border: "1px solid rgba(255,255,255,0.08)" }}
                  >
                    <span
                      className="w-11 h-11 rounded-full flex items-center justify-center shrink-0 text-[#f5c842]"
                      style={{ background: "rgba(245,200,66,0.10)", border: "1px solid rgba(245,200,66,0.28)" }}
                    >
                      {m.icon}
                    </span>
                    <div className="flex-1 min-w-0">
                      <div className="text-[10px] font-bold uppercase tracking-widest text-white/40 mb-0.5">{m.label}</div>
                      <div className="text-[15px] sm:text-[16px] font-bold text-white truncate">{m.value}</div>
                      <div className="text-[11px] text-white/45 mt-0.5">{m.hint}</div>
                    </div>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden className="text-white/30 group-hover:text-[#f5c842] shrink-0 transition-colors">
                      <path d="M4 3h6v6M10 3L3 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      {/* Case study callout — Evolved H2O */}
      <Reveal variant="up">
        <section className="py-16 sm:py-24" style={{ background: "#f6f6f8" }}>
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
            <article
              className="grid lg:grid-cols-[1fr_1.1fr] gap-8 lg:gap-10 rounded-3xl overflow-hidden p-6 sm:p-8 lg:p-10 items-center"
              style={{ background: "#ffffff", border: "1px solid rgba(0,0,0,0.08)" }}
            >
              <div
                className="relative rounded-2xl overflow-hidden"
                style={{ aspectRatio: "16/11", border: "1px solid rgba(0,0,0,0.06)" }}
              >
                <Image
                  src="https://i0.wp.com/rankconvert.com.au/wp-content/uploads/2025/12/evolved-h2o-ecommerce-website-build.jpg?fit=1440%2C900&ssl=1"
                  alt="Evolved H2O ecommerce build"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 600px"
                />
                <div
                  className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-widest text-[#09090e]"
                  style={{ background: "#f5c842" }}
                >
                  Case study
                </div>
              </div>

              <div>
                <div className="text-[11px] font-bold uppercase tracking-widest mb-3" style={{ color: "#c9971a" }}>
                  E-commerce · Health &amp; Wellness
                </div>
                <h2 className="text-[24px] sm:text-[32px] lg:text-[38px] font-black text-[#09090e] leading-[1.1] tracking-[-1px] mb-4">
                  5,203% Sales Increase for Evolved H2O&apos;s Online Store
                </h2>
                <p className="text-[14px] sm:text-[15px] leading-[1.7] mb-5" style={{ color: "rgba(9,9,14,0.6)" }}>
                  In just 9 months, Evolved H2O saw a remarkable transformation. By combining targeted SEO,
                  conversion-optimised site improvements, and content built for a health-focused audience, we
                  positioned their hydrogen water bottles as a premium choice in the wellness market.
                </p>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { v: "5,203%", l: "Sales lift" },
                    { v: "457%", l: "Traffic growth" },
                    { v: "9mo", l: "Timeframe" },
                  ].map(s => (
                    <div key={s.l} className="p-3 rounded-xl text-center" style={{ background: "#f6f6f8", border: "1px solid rgba(0,0,0,0.06)" }}>
                      <div className="text-[18px] sm:text-[22px] font-black" style={{ color: "#f5c842" }}>{s.v}</div>
                      <div className="text-[10px] text-[#09090e]/50 mt-1 tracking-wide uppercase">{s.l}</div>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          </div>
        </section>
      </Reveal>

      <Reveal variant="up"><SemrushNews /></Reveal>

      <Reveal variant="left">
        <ServiceFAQ
          title="Frequently Asked Questions"
          intro="The most frequently asked questions about our professional digital marketing services."
          items={[
            {
              q: "What happens after I submit the form?",
              a: "We'll review your details and get back to you within 24 hours to discuss your goals and the best way forward. From there, we'll outline a clear plan tailored to your business.",
            },
            {
              q: "How much does it cost to work with you?",
              a: "Pricing depends on your goals and the scope of work. We tailor everything to your business, but we'll give you clear, upfront pricing before anything starts.",
            },
            {
              q: "Is there any obligation after submitting this form?",
              a: "No. Submitting the form simply starts the conversation. There's no pressure, no lock-in, and no commitment required.",
            },
            {
              q: "How long does it take to get started?",
              a: "Most projects can get started within a few days once we've agreed on the approach. If you're on a tight timeline, let us know — we've delivered projects in as little as 7 days.",
            },
            {
              q: "Do you work with businesses like mine?",
              a: "We work with a wide range of businesses — from local service providers to ecommerce brands. If you're looking to grow your business online, we can help.",
            },
          ]}
        />
      </Reveal>

      <Reveal variant="up"><SemrushSolutions /></Reveal>
      <Reveal variant="scale"><SemrushPreFooterCTA /></Reveal>
    </>
  );
}
