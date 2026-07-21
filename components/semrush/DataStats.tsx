import Image from "next/image";

const STATS = [
  {
    value: "670%",
    label: "Average Traffic Growth",
    desc: "Our sites are built SEO-first, driving compounding organic traffic from day one.",
  },
  {
    value: "2–5×",
    label: "More Leads & Enquiries",
    desc: "Our SEO brings in high-intent traffic that converts into consistent leads.",
  },
];

const TESTIMONIAL = {
  quote:
    "In just 9 months, RankConvert helped us grow Evolved H2O by 5,203%. Their SEO strategy, conversion-focused site improvements, and content built for health conscious audiences positioned our hydrogen water bottles as a premium choice in the wellness market.",
  author: "Lachy M",
  role: "Founder, Evolved H2O",
  initial: "L",
};

export function SemrushDataStats() {
  return (
    <section
      className="relative py-14 sm:py-20 lg:py-24 overflow-hidden"
      style={{ background: "#f6f6f8" }}
    >
      {/* Background image — growth/consulting imagery, faded, slow Ken Burns zoom */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="relative w-full h-full animate-zoom-burn" style={{ opacity: 0.09 }}>
          <Image
            src="https://i0.wp.com/rankconvert.com.au/wp-content/uploads/2026/05/seo-consultant-services.webp?fit=1536%2C1024&ssl=1"
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
        {/* Edge fade so image blends into the section background */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, #f6f6f8 0%, rgba(246,246,248,0) 18%, rgba(246,246,248,0) 82%, #f6f6f8 100%), linear-gradient(to right, rgba(246,246,248,0.6) 0%, rgba(246,246,248,0) 25%, rgba(246,246,248,0) 75%, rgba(246,246,248,0.6) 100%)",
          }}
        />
      </div>

      <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="max-w-[720px] mb-10 sm:mb-14">
          <div className="text-[11px] font-bold uppercase tracking-widest mb-3" style={{ color: "#c9971a" }}>
            We&apos;re here to help
          </div>
          <h2 className="text-[26px] sm:text-[38px] lg:text-[50px] font-black text-[#09090e] leading-[1.06] tracking-[-1px] mb-5">
            We&apos;re Here to Help You Grow
          </h2>
          <p className="text-[14px] sm:text-[16px] leading-[1.6] max-w-[620px]" style={{ color: "rgba(9,9,14,0.55)" }}>
            With an average 670% traffic increase and 3.9× boost in conversion rates for our clients, we know
            what it takes to scale ambitious businesses online.
          </p>
        </div>

        {/* Stats + testimonial */}
        <div className="grid lg:grid-cols-[1fr_1.15fr] gap-5 lg:gap-6">

          {/* Left: stat cards + CTA */}
          <div className="flex flex-col gap-4">
            {STATS.map(s => (
              <div
                key={s.value}
                className="rounded-2xl p-6 sm:p-7"
                style={{ background: "#ffffff", border: "1px solid rgba(0,0,0,0.08)" }}
              >
                <div className="flex items-baseline gap-3 mb-2 flex-wrap">
                  <span
                    className="font-black tracking-tight leading-none"
                    style={{ color: "#f5c842", fontSize: "clamp(40px, 5.2vw, 60px)" }}
                  >
                    {s.value}
                  </span>
                  <span className="text-[13px] sm:text-[15px] font-bold text-[#09090e]">{s.label}</span>
                </div>
                <p className="text-[13px] sm:text-[14px] leading-[1.55]" style={{ color: "rgba(9,9,14,0.55)" }}>
                  {s.desc}
                </p>
              </div>
            ))}

            <a
              href="#"
              className="mt-2 inline-flex items-center justify-center px-7 h-[50px] text-[#09090e] text-[14px] font-bold rounded-full hover:bg-[#e6b830] transition-colors self-start"
              style={{ background: "#f5c842" }}
            >
              Scale My Business Today
            </a>
          </div>

          {/* Right: testimonial card */}
          <article
            className="rounded-2xl p-7 sm:p-9 flex flex-col gap-6"
            style={{ background: "#ffffff", border: "1px solid rgba(0,0,0,0.08)" }}
          >
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg key={i} width="14" height="14" viewBox="0 0 12 12" fill="#f5c842" aria-hidden>
                  <path d="M6 0l1.6 4 4.4.4-3.3 2.9 1 4.3L6 9.4l-3.7 2.2 1-4.3L0 4.4 4.4 4 6 0z" />
                </svg>
              ))}
              <span className="text-[11px] font-semibold text-[#09090e]/50 ml-2">Google Verified</span>
            </div>

            <div className="flex items-start gap-3">
              <svg width="24" height="20" viewBox="0 0 22 18" fill="none" aria-hidden className="shrink-0 text-[#09090e]/25 mt-1">
                <path
                  d="M0 18V11C0 5 3 1 9 0v4c-3 1-4 3-4 6h4v8H0zm12 0V11c0-6 3-10 9-11v4c-3 1-4 3-4 6h4v8h-9z"
                  fill="currentColor"
                />
              </svg>
              <p className="text-[15px] sm:text-[17px] leading-[1.6] font-medium text-[#09090e]">
                {TESTIMONIAL.quote}
              </p>
            </div>

            <div className="flex items-center gap-3 mt-auto pt-4" style={{ borderTop: "1px solid rgba(0,0,0,0.06)" }}>
              <div
                className="w-11 h-11 rounded-full flex items-center justify-center text-[#09090e] font-black text-[16px] shrink-0"
                style={{ background: "#f5c842" }}
              >
                {TESTIMONIAL.initial}
              </div>
              <div>
                <div className="text-[14px] font-bold text-[#09090e]">{TESTIMONIAL.author}</div>
                <div className="text-[12px] text-[#09090e]/50">{TESTIMONIAL.role}</div>
              </div>
            </div>
          </article>

        </div>
      </div>
    </section>
  );
}
