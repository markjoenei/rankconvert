import Image from "next/image";

export function SemrushCustomerWin() {
  return (
    <section className="bg-white py-14 sm:py-20 lg:py-24">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 sm:mb-12">
          <div className="text-[11px] font-bold uppercase tracking-widest text-[#0f0f1a] mb-3">
            Customer Stories
          </div>
          <h2 className="text-[26px] sm:text-[38px] lg:text-[50px] font-black text-[#0f0f1a] leading-[1.06] tracking-[-1px] [text-wrap:balance]">
            <span className="block">Practices winning</span>
            <span className="block">their market.</span>
          </h2>
          <p className="text-[14px] sm:text-[15px] text-[#5a5a6a] leading-[1.55] mt-5 max-w-[600px]">
            Real practices. Real numbers — pulled from their live dashboard, not a case-study deck.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1.7fr_1fr] gap-4 sm:gap-5">
          {/* Dark quote card */}
          <article className="bg-[#0c0c0e] rounded-2xl p-7 sm:p-9 flex flex-col gap-6 min-h-[280px]">
            <div className="flex items-center gap-2 text-white text-[11px] font-bold uppercase tracking-widest">
              <span className="inline-flex items-center justify-center w-5 h-5 bg-[#ff521c] rounded-[3px] text-white text-[10px] font-black">
                B
              </span>
              Brighthill Family Dental
              <span className="text-white/40 normal-case font-normal">· General · Suburban</span>
            </div>

            <div className="flex items-start gap-3">
              <svg width="22" height="18" viewBox="0 0 22 18" fill="none" aria-hidden className="shrink-0 text-white/80 mt-1">
                <path
                  d="M0 18V11C0 5 3 1 9 0v4c-3 1-4 3-4 6h4v8H0zm12 0V11c0-6 3-10 9-11v4c-3 1-4 3-4 6h4v8h-9z"
                  fill="currentColor"
                />
              </svg>
              <p className="text-[15px] sm:text-[17px] text-white leading-[1.55] font-medium max-w-[640px]">
                We rebuilt the front desk around the dashboard. On Monday morning we know exactly what Friday produced — without asking anyone.
              </p>
            </div>

            <div className="flex items-center justify-between gap-3 mt-auto">
              <div className="flex items-center gap-3">
                <div className="relative w-10 h-10 rounded-full overflow-hidden shrink-0 ring-2 ring-white/20">
                  <Image
                    src="/portraits/dr-lee.webp"
                    alt="Dr. Lee, Owner of Brighthill Family Dental"
                    fill
                    sizes="40px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="text-[13px] font-bold text-white">Dr. Lee</div>
                  <div className="text-[11px] text-white/60">Owner</div>
                </div>
              </div>
              <a
                href="#"
                className="text-[12px] font-semibold text-white/80 hover:text-white inline-flex items-center gap-1"
              >
                Read story
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
                  <path d="M3 6h6m0 0L6.5 3.5M9 6L6.5 8.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </article>

          {/* Stat card */}
          <article className="relative rounded-2xl overflow-hidden p-7 sm:p-9 min-h-[280px] flex flex-col justify-between bg-[#f3f1ec]">
            <div
              className="absolute top-0 right-0 w-[60%] h-[60%] pointer-events-none"
              style={{
                background:
                  "linear-gradient(135deg, transparent 30%, #d8c8ff 60%, #f5b8e0 100%)",
                clipPath: "polygon(100% 0, 100% 100%, 0 0)",
              }}
            />
            <div
              className="absolute top-0 right-0 w-[60%] h-[60%] pointer-events-none opacity-50"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(45deg, transparent 0, transparent 6px, rgba(255,255,255,0.5) 7px, transparent 8px)",
                clipPath: "polygon(100% 0, 100% 100%, 0 0)",
              }}
            />

            <div className="relative z-10 flex-1 flex items-start">
              <div className="text-[#0f0f1a] font-black leading-[0.95] tracking-[-2.5px] text-[64px] sm:text-[88px] lg:text-[104px]">
                +62%
              </div>
            </div>

            <div className="relative z-10 mt-auto">
              <div className="text-[13px] font-bold text-[#ff521c]">New patients</div>
              <div className="text-[12px] text-[#ff521c]/80">Six months from launch. Tracked live.</div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
