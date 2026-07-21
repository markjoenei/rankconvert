import Image from "next/image";

type Win = {
  no: string;
  clientName: string;
  clientMeta: string;
  clientInitial: string;
  primaryColor: string;
  tags: { label: string; color: string }[];
  hero: { value: string; label: string };
  title: string;
  desc: string;
  stats: { value: string; label: string }[];
  images: string[];
  imageLayout: "single" | "trio";
  imageAlt: string;
};

const WINS: Win[] = [
  {
    no: "01",
    clientName: "Eucy",
    clientMeta: "@shannenmichaela · Shopify store",
    clientInitial: "E",
    primaryColor: "#a78bfa",
    tags: [
      { label: "Shopify", color: "#a78bfa" },
      { label: "CRO", color: "#f97316" },
    ],
    hero: { value: "2.5×", label: "Sales in month one" },
    title: "4.63% Conversion Rate & 2.5× Increase in Sales",
    desc: "We optimised Instagram influencer @shannenmichaela's Shopify store, achieving a 2.5× increase in sales in the first month. We also implemented bundles and subscriptions, generating 20+ active subscribers month one.",
    stats: [
      { value: "2.5×", label: "Sales lift" },
      { value: "4.63%", label: "Conversion" },
      { value: "20+", label: "Subscribers" },
    ],
    images: [
      "https://i0.wp.com/rankconvert.com.au/wp-content/uploads/2026/05/eucy-shopify-store-development.webp?fit=800%2C558&ssl=1",
    ],
    imageLayout: "single",
    imageAlt: "Eucy Shopify store development",
  },
  {
    no: "02",
    clientName: "YoungConstruct",
    clientMeta: "50+ page site · Construction · Melbourne",
    clientInitial: "Y",
    primaryColor: "#60a5fa",
    tags: [
      { label: "Website Design", color: "#60a5fa" },
      { label: "SEO", color: "#f5c842" },
    ],
    hero: { value: "345%", label: "Traffic growth" },
    title: "345% Traffic Growth & 5%+ Conversion Rate",
    desc: "We built a 50+ page SEO and CRO optimised website for YoungConstruct to drive organic traffic and convert visitors into enquiries.",
    stats: [
      { value: "345%", label: "More leads" },
      { value: "5%+", label: "Conversion" },
      { value: "ROI+", label: "First months" },
    ],
    images: [
      "https://i0.wp.com/rankconvert.com.au/wp-content/uploads/2026/05/youngconstruct-website-design-update.png?fit=800%2C488&ssl=1",
    ],
    imageLayout: "single",
    imageAlt: "YoungConstruct website design",
  },
  {
    no: "03",
    clientName: "Prestige Global Events",
    clientMeta: "Events · Melbourne · Organic social",
    clientInitial: "P",
    primaryColor: "#f472b6",
    tags: [{ label: "Social Media", color: "#f472b6" }],
    hero: { value: "1.6M", label: "Views · single post" },
    title: "1.6M Views & 1,000+ Organic Followers in 3 Months",
    desc: "We've driven strong organic growth for Prestige, with videos reaching up to 1.6M views on a single post, hundreds of thousands more across multiple posts, and thousands of likes, comments and shares — plus 1,000+ new followers in 3 months.",
    stats: [
      { value: "1.6M", label: "Peak views" },
      { value: "100K+", label: "Per post" },
      { value: "1,000+", label: "Followers · 3mo" },
    ],
    images: [
      "https://i0.wp.com/rankconvert.com.au/wp-content/uploads/2026/05/prestige-global-events-social-media-success.png?fit=277%2C433&ssl=1",
      "https://i0.wp.com/rankconvert.com.au/wp-content/uploads/2026/05/prestige-global-events-social-media-win-1.png?fit=270%2C368&ssl=1",
      "https://i0.wp.com/rankconvert.com.au/wp-content/uploads/2026/05/social-media-marketing-success.png?fit=274%2C432&ssl=1",
    ],
    imageLayout: "trio",
    imageAlt: "Prestige Global Events social media wins",
  },
];

const AGGREGATE = [
  { value: "8.9M+", label: "Views generated" },
  { value: "5,000+", label: "Extra leads" },
  { value: "$1M+", label: "Client revenue" },
  { value: "100%", label: "Retention" },
];

export function SemrushAIVisibility() {
  return (
    <section className="relative py-16 sm:py-24 lg:py-28 overflow-hidden" style={{ background: "linear-gradient(180deg, #12141c 0%, #0a0b10 55%, #0c0e15 100%)" }}>
      {/* Ambient background: soft grid + top glow */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "34px 34px",
          maskImage: "radial-gradient(ellipse 80% 60% at 50% 0%, black 30%, transparent 80%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 60% at 50% 0%, black 30%, transparent 80%)",
        }}
      />
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center top, rgba(245,200,66,0.10) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-[780px] mx-auto mb-12 sm:mb-16">
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-5"
            style={{
              background: "rgba(245,200,66,0.08)",
              border: "1px solid rgba(245,200,66,0.22)",
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#f5c842] animate-pulse" />
            <span className="text-[11px] font-bold uppercase tracking-widest text-white/85">
              Real client results
            </span>
          </div>
          <h2 className="text-[26px] sm:text-[38px] lg:text-[50px] font-black text-white leading-[1.06] tracking-[-1px] mb-5">
            Some of Our{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #f5c842 0%, #e6b830 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Client Wins
            </span>
          </h2>
          <p className="text-[14px] sm:text-[17px] leading-[1.6] max-w-[560px] mx-auto" style={{ color: "rgba(255,255,255,0.55)" }}>
            Some of the many wins we have achieved for our clients across our various disciplines.
          </p>

          {/* Aggregate stats bar */}
          <div className="mt-10 pt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6" style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
            {AGGREGATE.map(a => (
              <div key={a.label} className="text-center">
                <div className="text-[22px] sm:text-[28px] font-black tracking-tight" style={{ color: "#f5c842" }}>
                  {a.value}
                </div>
                <div className="text-[11px] sm:text-[12px] text-white/50 mt-1">{a.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Cards */}
        <div className="flex flex-col gap-6 sm:gap-8">
          {WINS.map((w, i) => (
            <WinCard key={w.no} win={w} reverse={i % 2 === 1} />
          ))}
        </div>

        {/* + Many More */}
        <div className="text-center mt-12 sm:mt-16">
          <div className="inline-flex items-center gap-4">
            <span className="h-px w-12 bg-white/15" />
            <span
              className="inline-flex items-center gap-2 text-[12px] font-bold tracking-widest uppercase px-4 py-2 rounded-full"
              style={{
                color: "#f5c842",
                background: "rgba(245,200,66,0.08)",
                border: "1px solid rgba(245,200,66,0.25)",
              }}
            >
              + Many More Wins!
            </span>
            <span className="h-px w-12 bg-white/15" />
          </div>
        </div>

      </div>
    </section>
  );
}

function WinCard({ win, reverse }: { win: Win; reverse: boolean }) {
  return (
    <article
      className="relative rounded-3xl overflow-hidden group"
      style={{
        background:
          "linear-gradient(180deg, #0f1017 0%, #0c0d14 100%)",
        border: "1px solid rgba(255,255,255,0.07)",
      }}
    >
      {/* Category glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: reverse ? "auto" : "-40%",
          bottom: reverse ? "-40%" : "auto",
          right: reverse ? "auto" : "-20%",
          left: reverse ? "-20%" : "auto",
          width: "60%",
          height: "80%",
          background: `radial-gradient(ellipse at center, ${win.primaryColor}18 0%, transparent 65%)`,
        }}
      />

      {/* Case study number watermark */}
      <div
        className="absolute pointer-events-none select-none font-black leading-none tracking-tight"
        style={{
          top: 24,
          right: 32,
          fontSize: "clamp(80px, 14vw, 180px)",
          color: "rgba(255,255,255,0.03)",
          letterSpacing: "-6px",
        }}
      >
        {win.no}
      </div>

      <div className="relative grid lg:grid-cols-2 gap-6 sm:gap-10 p-5 sm:p-8 lg:p-10 items-center">

        {/* Image */}
        <div className={reverse ? "lg:order-2" : ""}>
          {win.imageLayout === "single" ? (
            <SingleImage win={win} />
          ) : (
            <TrioImage win={win} />
          )}
        </div>

        {/* Content */}
        <div className={reverse ? "lg:order-1" : ""}>
          {/* Tags */}
          <div className="flex flex-wrap items-center gap-2 mb-5">
            {win.tags.map(t => (
              <span
                key={t.label}
                className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full"
                style={{
                  color: t.color,
                  background: `${t.color}18`,
                  border: `1px solid ${t.color}35`,
                }}
              >
                {t.label}
              </span>
            ))}
            <span className="text-[10px] font-bold text-white/30 tracking-widest ml-1">
              CASE STUDY {win.no}
            </span>
          </div>

          {/* Hero stat */}
          <div className="flex items-baseline gap-3 mb-5">
            <span
              className="font-black leading-none tracking-[-3px]"
              style={{
                fontSize: "clamp(48px, 6vw, 78px)",
                color: win.primaryColor,
              }}
            >
              {win.hero.value}
            </span>
            <span className="text-[12px] sm:text-[13px] font-semibold text-white/70 uppercase tracking-widest">
              {win.hero.label}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-[18px] sm:text-[22px] lg:text-[24px] font-black text-white leading-[1.2] tracking-[-0.5px] mb-3">
            {win.title}
          </h3>
          <p className="text-[13px] sm:text-[14px] leading-[1.65] mb-6" style={{ color: "rgba(255,255,255,0.55)" }}>
            {win.desc}
          </p>

          {/* Stats grid */}
          <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-6">
            {win.stats.map((s, i) => (
              <div
                key={i}
                className="rounded-xl p-3 text-center"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                <div className="text-[16px] sm:text-[20px] font-black text-white leading-none">
                  {s.value}
                </div>
                <div className="text-[9px] sm:text-[10px] text-white/45 mt-1.5 tracking-wide uppercase">
                  {s.label}
                </div>
              </div>
            ))}
          </div>

          {/* Client identity chip */}
          <div className="flex items-center gap-3 pt-5" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center font-black text-[15px] shrink-0"
              style={{
                background: win.primaryColor,
                color: "#09090e",
              }}
            >
              {win.clientInitial}
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-[13px] font-bold text-white truncate">{win.clientName}</div>
              <div className="text-[11px] text-white/45 truncate">{win.clientMeta}</div>
            </div>
            <div className="flex items-center gap-0.5 shrink-0">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg key={i} width="11" height="11" viewBox="0 0 12 12" fill="#f5c842" aria-hidden>
                  <path d="M6 0l1.6 4 4.4.4-3.3 2.9 1 4.3L6 9.4l-3.7 2.2 1-4.3L0 4.4 4.4 4 6 0z" />
                </svg>
              ))}
            </div>
          </div>
        </div>

      </div>
    </article>
  );
}

/* ---------- Image layouts ---------- */

function SingleImage({ win }: { win: Win }) {
  return (
    <div
      className="relative rounded-2xl overflow-hidden shadow-2xl"
      style={{
        border: "1px solid rgba(255,255,255,0.08)",
        boxShadow: `0 40px 80px -20px rgba(0,0,0,0.6), 0 0 0 1px ${win.primaryColor}12`,
      }}
    >
      {/* Browser chrome */}
      <div className="bg-[#0a0b10] px-3 py-2.5 flex items-center gap-2 border-b border-white/[0.06]">
        <div className="flex gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
        </div>
        <div className="flex-1 flex justify-center">
          <div className="bg-white/[0.06] rounded-md px-3 py-1 text-[10px] text-white/40 max-w-[240px] w-full text-center truncate">
            {win.clientName.toLowerCase().replace(/\s+/g, "")}.com
          </div>
        </div>
        <div className="w-14" />
      </div>

      {/* Image */}
      <div className="relative" style={{ aspectRatio: "16/10" }}>
        <Image
          src={win.images[0]}
          alt={win.imageAlt}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 540px"
        />

        {/* Corner ribbon with hero stat */}
        <div
          className="absolute top-3 left-3 px-3 py-1.5 rounded-full text-[11px] font-black text-[#09090e] shadow-lg"
          style={{ background: win.primaryColor }}
        >
          {win.hero.value} {win.hero.label.split("·")[0].trim().toLowerCase()}
        </div>
      </div>
    </div>
  );
}

function TrioImage({ win }: { win: Win }) {
  return (
    <div
      className="relative rounded-2xl overflow-hidden flex items-center justify-center gap-3 sm:gap-4 py-8 sm:py-10 px-4"
      style={{
        background: `radial-gradient(ellipse at center, ${win.primaryColor}15 0%, #0a0b10 70%)`,
        border: "1px solid rgba(255,255,255,0.08)",
        minHeight: 340,
        boxShadow: `0 40px 80px -20px rgba(0,0,0,0.6), 0 0 0 1px ${win.primaryColor}12`,
      }}
    >
      {win.images.map((img, idx) => {
        const isCenter = idx === 1;
        return (
          <div
            key={idx}
            className="relative rounded-[22px] overflow-hidden shrink-0"
            style={{
              width: isCenter ? 140 : 120,
              aspectRatio: "9/16",
              background: "#000",
              border: "3px solid #1a1c25",
              boxShadow: isCenter
                ? `0 25px 50px rgba(0,0,0,0.5), 0 0 0 1px ${win.primaryColor}40`
                : "0 15px 30px rgba(0,0,0,0.35)",
              transform: `translateY(${isCenter ? -8 : 8}px) rotate(${idx === 0 ? -4 : idx === 2 ? 4 : 0}deg)`,
              zIndex: isCenter ? 2 : 1,
            }}
          >
            <Image src={img} alt="" fill className="object-cover" sizes="140px" />

            {/* Live badge on center */}
            {isCenter && (
              <div className="absolute top-2 left-1/2 -translate-x-1/2 flex items-center gap-1 px-1.5 py-0.5 rounded-full" style={{ background: "rgba(0,0,0,0.7)", backdropFilter: "blur(8px)" }}>
                <span className="w-1 h-1 rounded-full bg-red-500 animate-pulse" />
                <span className="text-[8px] font-bold text-white uppercase tracking-widest">Live</span>
              </div>
            )}

            {/* Bottom overlay with views */}
            <div
              className="absolute bottom-0 left-0 right-0 px-2 py-1.5"
              style={{ background: "linear-gradient(to top, rgba(0,0,0,0.85), transparent)" }}
            >
              <div className="flex items-center justify-between text-[9px] text-white font-semibold">
                <span className="flex items-center gap-1">
                  <svg width="9" height="9" viewBox="0 0 12 12" fill="currentColor" aria-hidden>
                    <path d="M6 3C3.5 3 1.4 4.5 0 6c1.4 1.5 3.5 3 6 3s4.6-1.5 6-3c-1.4-1.5-3.5-3-6-3zm0 5a2 2 0 110-4 2 2 0 010 4z" />
                  </svg>
                  {isCenter ? "1.6M" : idx === 0 ? "428K" : "312K"}
                </span>
                <span>â™¥</span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
