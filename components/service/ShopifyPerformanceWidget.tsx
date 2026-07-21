const METRICS = [
  { label: "Conversion rate", value: "4.63%", delta: "+3.9×", positive: true, tone: "#a78bfa" },
  { label: "Avg. order value", value: "$87.20", delta: "+18%", positive: true, tone: "#60a5fa" },
  { label: "Cart abandonment", value: "38%", delta: "−24%", positive: true, tone: "#f472b6" },
];

const REVENUE_POINTS = [8, 12, 14, 18, 20, 26, 30, 34, 42, 48, 58, 72];

const TOP_PRODUCTS = [
  { name: "Eucy Bundle · 3 pack", units: 128, revenue: "$11,168" },
  { name: "Nasal Strips Starter Kit", units: 96, revenue: "$4,320" },
  { name: "Sprociety Roast · 500g", units: 74, revenue: "$2,590" },
];

export function ShopifyPerformanceWidget() {
  const maxR = Math.max(...REVENUE_POINTS);
  const w = 240;
  const h = 56;
  const barGap = 4;
  const barW = (w - barGap * (REVENUE_POINTS.length - 1)) / REVENUE_POINTS.length;

  return (
    <div
      className="w-full max-w-[440px] mx-auto lg:mx-0 lg:ml-auto rounded-2xl p-5 sm:p-6 animate-fade-up"
      style={{
        background: "linear-gradient(180deg, #0f1017 0%, #0a0b12 100%)",
        border: "1px solid rgba(255,255,255,0.08)",
        boxShadow: "0 32px 80px rgba(0,0,0,0.5)",
        animationDelay: "0.1s",
      }}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <span className="relative flex w-2 h-2">
            <span className="absolute inset-0 rounded-full bg-[#a78bfa] animate-ping opacity-75" />
            <span className="relative rounded-full w-2 h-2 bg-[#a78bfa]" />
          </span>
          <span className="text-[10px] font-bold uppercase tracking-widest text-white/60">Store Health Score</span>
        </div>
        <span
          className="text-[10px] font-black px-2 py-0.5 rounded-full"
          style={{ color: "#a78bfa", background: "rgba(167,139,250,0.10)", border: "1px solid rgba(167,139,250,0.28)" }}
        >
          A+ Grade
        </span>
      </div>

      {/* Store input mockup */}
      <div
        className="flex items-center gap-2 rounded-xl px-3 py-2 mb-4"
        style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.10)" }}
      >
        <svg width="14" height="14" viewBox="0 0 20 20" fill="none" aria-hidden className="text-white/40 shrink-0">
          <path d="M4 4h12l-1.5 12H5.5L4 4z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
          <path d="M7 4V2h6v2" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
        </svg>
        <span className="text-[12px] text-white/70 flex-1 truncate">yourstore.myshopify.com</span>
        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full text-[#09090e]" style={{ background: "#f5c842" }}>
          Audit
        </span>
      </div>

      {/* Metrics grid */}
      <div className="grid grid-cols-3 gap-2 mb-4">
        {METRICS.map(m => (
          <div
            key={m.label}
            className="rounded-xl p-2.5"
            style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}
          >
            <div className="text-[14px] font-black text-white leading-none">{m.value}</div>
            <div className="flex items-center gap-1 mt-1">
              <span className="text-[9px] font-bold" style={{ color: m.tone }}>{m.delta}</span>
            </div>
            <div className="text-[9px] text-white/40 mt-1.5 leading-tight">{m.label}</div>
          </div>
        ))}
      </div>

      {/* Revenue chart (bars) */}
      <div
        className="rounded-xl p-3 mb-4"
        style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}
      >
        <div className="flex items-baseline justify-between mb-2">
          <div>
            <div className="text-[10px] text-white/40 uppercase tracking-widest">Monthly revenue</div>
            <div className="text-[16px] font-black text-white leading-none">$142,830</div>
          </div>
          <span className="text-[10px] font-bold text-[#22c55e]">+2.5× vs prior</span>
        </div>
        <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} className="w-full h-auto" aria-hidden>
          <defs>
            <linearGradient id="shopifyBar" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#a78bfa" />
              <stop offset="100%" stopColor="#a78bfa" stopOpacity="0.3" />
            </linearGradient>
          </defs>
          {REVENUE_POINTS.map((v, i) => {
            const bh = Math.max(4, (v / maxR) * (h - 4));
            const x = i * (barW + barGap);
            const y = h - bh;
            const isLast = i === REVENUE_POINTS.length - 1;
            return (
              <rect
                key={i}
                x={x}
                y={y}
                width={barW}
                height={bh}
                rx="1.5"
                fill={isLast ? "#f5c842" : "url(#shopifyBar)"}
              />
            );
          })}
        </svg>
      </div>

      {/* Top products */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <span className="text-[10px] font-bold uppercase tracking-widest text-white/40">Top sellers</span>
          <span className="text-[10px] text-white/40">This week</span>
        </div>
        <ul className="space-y-1.5">
          {TOP_PRODUCTS.map((p, i) => (
            <li
              key={p.name}
              className="flex items-center justify-between gap-3 py-1.5 px-2 rounded-lg"
              style={{ background: "rgba(255,255,255,0.03)" }}
            >
              <div className="flex items-center gap-2 min-w-0">
                <span
                  className="w-5 h-5 rounded-md flex items-center justify-center text-[10px] font-black text-[#09090e] shrink-0"
                  style={{ background: i === 0 ? "#f5c842" : "rgba(255,255,255,0.15)", color: i === 0 ? "#09090e" : "rgba(255,255,255,0.7)" }}
                >
                  {i + 1}
                </span>
                <div className="min-w-0">
                  <div className="text-[11px] text-white truncate">{p.name}</div>
                  <div className="text-[9px] text-white/40">{p.units} units</div>
                </div>
              </div>
              <div className="text-[11px] font-bold text-white shrink-0">{p.revenue}</div>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex items-center justify-between mt-3 text-[10px] text-white/35">
        <span className="flex items-center gap-1.5">
          <svg width="10" height="10" viewBox="0 0 12 12" fill="currentColor" aria-hidden className="text-[#a78bfa]">
            <circle cx="6" cy="6" r="5" />
          </svg>
          Shopify Analytics
        </span>
        <span>Live · Updated 3 min ago</span>
      </div>
    </div>
  );
}
