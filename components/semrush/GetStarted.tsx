import Image from "next/image";

export function SemrushGetStarted({ bottomOverlap = false }: { bottomOverlap?: boolean } = {}) {
  return (
    <section
      className={
        bottomOverlap
          ? "pt-20 sm:pt-36 lg:pt-52 pb-40 sm:pb-52 md:pb-[20rem] lg:pb-[26rem]"
          : "pt-20 sm:pt-36 lg:pt-52 pb-14 sm:pb-20 lg:pb-24"
      }
      style={{ background: "#ffffff" }}
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="relative rounded-3xl p-8 sm:p-12 lg:p-16"
          style={{
            background: "linear-gradient(135deg, #0f1017 0%, #0d1520 50%, #0f1017 100%)",
            border: "1px solid rgba(245,200,66,0.15)",
          }}
        >
          {/* Green glow top-right */}
          <div
            className="absolute top-0 right-0 w-[500px] h-[400px] pointer-events-none"
            style={{
              background: "radial-gradient(ellipse at top right, rgba(245,200,66,0.12) 0%, transparent 65%)",
            }}
          />
          {/* Green glow bottom-left */}
          <div
            className="absolute bottom-0 left-0 w-[300px] h-[300px] pointer-events-none"
            style={{
              background: "radial-gradient(ellipse at bottom left, rgba(96,165,250,0.08) 0%, transparent 65%)",
            }}
          />

          {/* Happy client — absolutely positioned right side, head clearly above card */}
          <div
            className="hidden lg:block absolute pointer-events-none select-none"
            style={{
              right: "1%",
              bottom: 0,
              width: "62%",
              maxWidth: 860,
              height: "185%",
              zIndex: 5,
            }}
            aria-hidden
          >
            <Image
              src="/brand/happy-client.png"
              alt=""
              fill
              className="object-contain object-bottom"
              sizes="860px"
              priority={false}
            />
          </div>

          <div className="relative z-10 max-w-[680px]">
            <div className="text-[11px] font-bold uppercase tracking-widest mb-5" style={{ color: "#f5c842" }}>
              How it works
            </div>
            <h2 className="text-[26px] sm:text-[38px] lg:text-[50px] font-black text-white leading-[1.06] tracking-[-1px] mb-5">
              <span className="block">Three steps to</span>
              <span className="block">more sales &amp; leads.</span>
            </h2>
            <p className="text-[14px] sm:text-[16px] mt-5 mb-7 max-w-[480px] leading-[1.6]" style={{ color: "rgba(255,255,255,0.55)" }}>
              A free strategy call, a custom growth plan, and then we get to work. Simple, transparent, and accountable to results.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-6 h-[48px] text-[#09090e] text-[14px] font-bold rounded-full hover:bg-[#e6b830] transition-colors"
                style={{ background: "#f5c842" }}
              >
                Scale My Business Today
              </a>
              <a
                href="tel:0478186355"
                className="inline-flex items-center justify-center px-6 h-[48px] text-white text-[14px] font-semibold rounded-full border border-white/15 hover:bg-white/8 transition-colors"
              >
                Call 0478 186 355
              </a>
            </div>

            <ul className="grid grid-cols-3 gap-2 sm:gap-4 mt-10">
              {[
                {
                  n: "01",
                  t: "Book Free Strategy Call",
                  d: "Share your business goals and current challenges with our team",
                  time: "30 minutes",
                },
                {
                  n: "02",
                  t: "Receive Custom Growth Plan",
                  d: "We map out a tailored strategy to grow your online presence",
                  time: "Within 48 hours",
                },
                {
                  n: "03",
                  t: "Enjoy More Sales & Leads",
                  d: "We execute the plan and you see measurable results",
                  time: "Ongoing",
                },
              ].map((s) => (
                <li
                  key={s.n}
                  className="rounded-xl p-2 sm:p-4"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  <div className="text-[9px] sm:text-[10px] font-black mb-1 sm:mb-2" style={{ color: "#f5c842" }}>{s.n}</div>
                  <div className="text-[10px] sm:text-[15px] font-bold text-white mb-1 leading-tight">{s.t}</div>
                  <div className="text-[9px] sm:text-[12px] mb-1 sm:mb-2 leading-snug" style={{ color: "rgba(255,255,255,0.45)" }}>{s.d}</div>
                  <div className="text-[9px] sm:text-[11px] font-semibold" style={{ color: "#f5c842" }}>{s.time}</div>
                </li>
              ))}
            </ul>

            {/* Trust row */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-8 text-[12px]" style={{ color: "rgba(255,255,255,0.35)" }}>
              <span className="flex items-center gap-1.5">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                  <circle cx="7" cy="7" r="6" stroke="#f5c842" strokeWidth="1.2" />
                  <path d="M4.5 7l1.8 1.8L9.5 5" stroke="#f5c842" strokeWidth="1.2" strokeLinecap="round" />
                </svg>
                No lock-in contracts
              </span>
              <span className="flex items-center gap-1.5">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                  <circle cx="7" cy="7" r="6" stroke="#f5c842" strokeWidth="1.2" />
                  <path d="M4.5 7l1.8 1.8L9.5 5" stroke="#f5c842" strokeWidth="1.2" strokeLinecap="round" />
                </svg>
                Australian owned &amp; operated
              </span>
              <span className="flex items-center gap-1.5">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                  <circle cx="7" cy="7" r="6" stroke="#f5c842" strokeWidth="1.2" />
                  <path d="M4.5 7l1.8 1.8L9.5 5" stroke="#f5c842" strokeWidth="1.2" strokeLinecap="round" />
                </svg>
                5-star Google rated
              </span>
              <span className="flex items-center gap-1.5">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                  <circle cx="7" cy="7" r="6" stroke="#f5c842" strokeWidth="1.2" />
                  <path d="M4.5 7l1.8 1.8L9.5 5" stroke="#f5c842" strokeWidth="1.2" strokeLinecap="round" />
                </svg>
                Results-based pricing
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
