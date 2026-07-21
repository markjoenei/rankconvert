export function SemrushCustomerWin() {
  return (
    <section className="py-14 sm:py-20 lg:py-24" style={{ background: "#f6f6f8" }}>
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 sm:mb-12">
          <div className="text-[11px] font-bold uppercase tracking-widest mb-3" style={{ color: "#c9971a" }}>
            Client Success Stories
          </div>
          <h2 className="text-[26px] sm:text-[38px] lg:text-[50px] font-black text-[#09090e] leading-[1.06] tracking-[-1px]">
            <span className="block">Australian businesses</span>
            <span className="block">growing with us.</span>
          </h2>
          <p className="text-[14px] sm:text-[15px] leading-[1.6] mt-5 max-w-[600px]" style={{ color: "rgba(9,9,14,0.5)" }}>
            Real clients. Real numbers. Pulled directly from their analytics — not a marketing deck.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1.7fr_1fr] gap-4 sm:gap-5">
          {/* Quote card */}
          <article
            className="rounded-2xl p-7 sm:p-9 flex flex-col gap-6 min-h-[280px]"
            style={{ background: "#ffffff", border: "1px solid rgba(0,0,0,0.08)" }}
          >
            <div className="flex items-center gap-2 text-[#09090e] text-[11px] font-bold uppercase tracking-widest">
              <span
                className="inline-flex items-center justify-center w-5 h-5 rounded-[3px] text-[#09090e] text-[10px] font-black"
                style={{ background: "#f5c842" }}
              >
                E
              </span>
              Evolved H2O
              <span className="text-[#09090e]/30 normal-case font-normal">· Water filtration · Melbourne</span>
            </div>

            <div className="flex items-start gap-3">
              <svg width="22" height="18" viewBox="0 0 22 18" fill="none" aria-hidden className="shrink-0 text-[#09090e]/40 mt-1">
                <path
                  d="M0 18V11C0 5 3 1 9 0v4c-3 1-4 3-4 6h4v8H0zm12 0V11c0-6 3-10 9-11v4c-3 1-4 3-4 6h4v8h-9z"
                  fill="currentColor"
                />
              </svg>
              <p className="text-[15px] sm:text-[17px] text-[#09090e] leading-[1.6] font-medium max-w-[640px]">
                RankConvert took our organic traffic from almost nothing to over 5,000% growth in just 9 months.
                We went from invisible online to being the first result our customers find.
              </p>
            </div>

            <div className="flex items-center justify-between gap-3 mt-auto">
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full shrink-0 flex items-center justify-center text-[#09090e] font-black text-[14px]"
                  style={{ background: "#f5c842" }}
                >
                  E
                </div>
                <div>
                  <div className="text-[13px] font-bold text-[#09090e]">Evolved H2O</div>
                  <div className="text-[11px] text-[#09090e]/40">Water filtration · Melbourne</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} width="12" height="12" viewBox="0 0 12 12" fill="#f5c842" aria-hidden>
                    <path d="M6 0l1.6 4 4.4.4-3.3 2.9 1 4.3L6 9.4l-3.7 2.2 1-4.3L0 4.4 4.4 4 6 0z" />
                  </svg>
                ))}
              </div>
            </div>
          </article>

          {/* Stat card */}
          <article
            className="relative rounded-2xl overflow-hidden p-7 sm:p-9 min-h-[280px] flex flex-col justify-between"
            style={{ background: "#ffffff", border: "1px solid rgba(0,0,0,0.08)" }}
          >
            <div
              className="absolute top-0 right-0 w-[70%] h-[70%] pointer-events-none"
              style={{
                background: "radial-gradient(ellipse at top right, rgba(245,200,66,0.18) 0%, transparent 70%)",
              }}
            />

            <div className="relative z-10 flex-1 flex items-start">
              <div className="font-black leading-[0.9] tracking-[-2.5px] text-[60px] sm:text-[80px] lg:text-[96px]" style={{ color: "#f5c842" }}>
                5,203%
              </div>
            </div>

            <div className="relative z-10 mt-auto">
              <div className="text-[13px] font-bold text-[#09090e]">Organic traffic growth</div>
              <div className="text-[12px] text-[#09090e]/40">Evolved H2O · 9 months · Google verified</div>
            </div>
          </article>
        </div>

        {/* Three mini client cards — horizontal scroll on mobile, grid on sm+ */}
        <div className="flex sm:grid sm:grid-cols-3 gap-4 mt-4 sm:mt-5 overflow-x-auto snap-x snap-mandatory -mx-4 px-4 sm:mx-0 sm:px-0 sm:overflow-visible [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {[
            {
              client: "YoungConstruct",
              industry: "Construction",
              metric: "345%",
              metricLabel: "Traffic growth",
              quote: "ROI positive within the first few months. 5%+ conversion rate.",
            },
            {
              client: "Eucy",
              industry: "E-commerce",
              metric: "4.63%",
              metricLabel: "Conversion rate",
              quote: "2.5x increase in sales in the first month. 20+ subscriptions generated.",
            },
            {
              client: "Sprociety Coffee",
              industry: "Hospitality",
              metric: "5★",
              metricLabel: "Google rating",
              quote: "Our digital presence completely transformed. Customers find us everywhere now.",
            },
          ].map((card) => (
            <article
              key={card.client}
              className="rounded-xl p-5 flex flex-col gap-3 shrink-0 w-[85%] snap-center sm:w-auto sm:shrink"
              style={{ background: "#ffffff", border: "1px solid rgba(0,0,0,0.07)" }}
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-[13px] font-bold text-[#09090e]">{card.client}</div>
                  <div className="text-[11px] text-[#09090e]/35">{card.industry}</div>
                </div>
                <div className="text-right">
                  <div className="text-[18px] font-black" style={{ color: "#f5c842" }}>{card.metric}</div>
                  <div className="text-[10px] text-[#09090e]/35">{card.metricLabel}</div>
                </div>
              </div>
              <p className="text-[12px] text-[#09090e]/50 leading-[1.5]">&ldquo;{card.quote}&rdquo;</p>
              <div className="flex items-center gap-1 mt-auto">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} width="10" height="10" viewBox="0 0 12 12" fill="#f5c842" aria-hidden>
                    <path d="M6 0l1.6 4 4.4.4-3.3 2.9 1 4.3L6 9.4l-3.7 2.2 1-4.3L0 4.4 4.4 4 6 0z" />
                  </svg>
                ))}
                <span className="text-[10px] text-[#09090e]/35 ml-1">Google Verified</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
