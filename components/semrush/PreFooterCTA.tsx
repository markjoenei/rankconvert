export function SemrushPreFooterCTA() {
  return (
    <section
      className="relative py-20 sm:py-28 lg:py-32 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #10121a 0%, #09090e 55%, #0b0d14 100%)" }}
    >
      {/* Ambient grid + radial glows */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "34px 34px",
          maskImage: "radial-gradient(ellipse 70% 60% at 50% 50%, black 30%, transparent 80%)",
          WebkitMaskImage: "radial-gradient(ellipse 70% 60% at 50% 50%, black 30%, transparent 80%)",
        }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(245,200,66,0.12) 0%, transparent 65%)",
        }}
      />

      <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-[1120px] mx-auto">

          {/* 5-star rated badge */}
          <div
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full mb-7"
            style={{
              background: "rgba(245,200,66,0.08)",
              border: "1px solid rgba(245,200,66,0.25)",
            }}
          >
            <span className="flex text-[#f5c842]">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg key={i} width="12" height="12" viewBox="0 0 12 12" fill="currentColor" aria-hidden>
                  <path d="M6 0l1.6 4 4.4.4-3.3 2.9 1 4.3L6 9.4l-3.7 2.2 1-4.3L0 4.4 4.4 4 6 0z" />
                </svg>
              ))}
            </span>
            <span className="text-[11px] font-bold uppercase tracking-widest text-white/85">
              5-Star Rated by Australian Business Owners
            </span>
          </div>

          <h2 className="text-[24px] sm:text-[36px] lg:text-[46px] font-black text-white leading-[1.1] tracking-[-1.2px] mb-6 lg:whitespace-nowrap">
            Ready to Scale Your{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #f5c842 0%, #e6b830 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Business Online?
            </span>
          </h2>

          <p className="text-[13px] sm:text-[14px] lg:text-[15px] leading-[1.65] max-w-[1040px] mx-auto mb-10 line-clamp-4" style={{ color: "rgba(255,255,255,0.6)" }}>
            Feeling lost in the digital landscape? You&apos;re not alone. Many business owners struggle to
            leverage online platforms effectively, missing out on the growth potential that exists outside
            their traditional market spaces. At RankConvert, we specialize in transforming your digital
            presence into a strategic growth engine. Our proven techniques empower you to connect with your
            audience genuinely, optimizing every stage of their journey. Reach out today, and together we
            can unlock new revenue streams for your business.
          </p>

          {/* CTA */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="#"
              className="inline-flex items-center justify-center px-8 h-[54px] text-[#09090e] text-[14px] font-bold rounded-full hover:bg-[#e6b830] transition-colors shadow-[0_20px_50px_-12px_rgba(245,200,66,0.5)]"
              style={{ background: "#f5c842" }}
            >
              Scale My Business Today
            </a>
            <a
              href="tel:0478186355"
              className="inline-flex items-center gap-2 px-6 h-[54px] text-white text-[14px] font-semibold rounded-full border border-white/12 hover:bg-white/5 transition-colors"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                <path
                  d="M2 3.5a1.5 1.5 0 011.5-1.5h1.4a1 1 0 01.95.68l.7 2.09a1 1 0 01-.24 1.02L5.4 6.8a8 8 0 003.8 3.8l1-.9a1 1 0 011.02-.24l2.1.7a1 1 0 01.68.95V12.5A1.5 1.5 0 0112.5 14C6.7 14 2 9.3 2 3.5z"
                  stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"
                />
              </svg>
              0478 186 355
            </a>
          </div>

          {/* Trust chips */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mt-8 text-[12px]" style={{ color: "rgba(255,255,255,0.4)" }}>
            <span className="flex items-center gap-1.5">
              <svg width="12" height="12" viewBox="0 0 14 14" fill="none" aria-hidden>
                <circle cx="7" cy="7" r="6" stroke="#f5c842" strokeWidth="1.2" />
                <path d="M4.5 7l1.8 1.8L9.5 5" stroke="#f5c842" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              No lock-in contracts
            </span>
            <span className="flex items-center gap-1.5">
              <svg width="12" height="12" viewBox="0 0 14 14" fill="none" aria-hidden>
                <circle cx="7" cy="7" r="6" stroke="#f5c842" strokeWidth="1.2" />
                <path d="M4.5 7l1.8 1.8L9.5 5" stroke="#f5c842" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Free strategy call
            </span>
            <span className="flex items-center gap-1.5">
              <svg width="12" height="12" viewBox="0 0 14 14" fill="none" aria-hidden>
                <circle cx="7" cy="7" r="6" stroke="#f5c842" strokeWidth="1.2" />
                <path d="M4.5 7l1.8 1.8L9.5 5" stroke="#f5c842" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Australian owned &amp; operated
            </span>
          </div>

        </div>
      </div>
    </section>
  );
}
