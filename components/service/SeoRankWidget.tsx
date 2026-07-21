const KEYWORDS = [
  { term: "melbourne seo consultant", rank: 1, change: 5, volume: "1.3K" },
  { term: "seo services melbourne", rank: 2, change: 8, volume: "2.1K" },
  { term: "melbourne digital marketing", rank: 4, change: 12, volume: "3.4K" },
  { term: "seo agency near me", rank: 3, change: 6, volume: "890" },
  { term: "local seo melbourne", rank: 5, change: 9, volume: "720" },
];

const TRAFFIC_POINTS = [12, 18, 15, 24, 22, 32, 30, 42, 48, 55, 63, 74];

export function SeoRankWidget() {
  const maxT = Math.max(...TRAFFIC_POINTS);
  const w = 240;
  const h = 60;
  const path = TRAFFIC_POINTS
    .map((v, i) => `${i === 0 ? "M" : "L"} ${(i / (TRAFFIC_POINTS.length - 1)) * w} ${h - (v / maxT) * (h - 6) - 3}`)
    .join(" ");
  const area = `${path} L ${w} ${h} L 0 ${h} Z`;

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
            <span className="absolute inset-0 rounded-full bg-[#22c55e] animate-ping opacity-75" />
            <span className="relative rounded-full w-2 h-2 bg-[#22c55e]" />
          </span>
          <span className="text-[10px] font-bold uppercase tracking-widest text-white/60">Live SERP Tracker</span>
        </div>
        <span
          className="text-[10px] font-bold px-2 py-0.5 rounded-full"
          style={{ color: "#22c55e", background: "rgba(34,197,94,0.10)", border: "1px solid rgba(34,197,94,0.28)" }}
        >
          All up
        </span>
      </div>

      {/* Search input mockup */}
      <div
        className="flex items-center gap-2 rounded-xl px-3 py-2 mb-4"
        style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.10)" }}
      >
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden className="text-white/40 shrink-0">
          <circle cx="6" cy="6" r="4.5" stroke="currentColor" strokeWidth="1.4" />
          <path d="M13 13l-3.5-3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        </svg>
        <span className="text-[12px] text-white/70 flex-1 truncate">rankconvert.com.au</span>
        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full text-[#09090e]" style={{ background: "#f5c842" }}>
          Analyse
        </span>
      </div>

      {/* Keyword table */}
      <div className="mb-4">
        <div className="grid grid-cols-[1fr_auto_auto] gap-3 pb-2 mb-1 text-[10px] font-bold uppercase tracking-widest text-white/35 border-b border-white/[0.06]">
          <span>Keyword</span>
          <span className="text-right">Rank</span>
          <span className="text-right w-10">Trend</span>
        </div>
        <ul className="divide-y divide-white/[0.05]">
          {KEYWORDS.map(k => (
            <li key={k.term} className="grid grid-cols-[1fr_auto_auto] gap-3 items-center py-2">
              <div className="min-w-0">
                <div className="text-[12px] text-white truncate">{k.term}</div>
                <div className="text-[10px] text-white/35">{k.volume}/mo searches</div>
              </div>
              <span
                className="text-[11px] font-black px-2 py-0.5 rounded-full min-w-[32px] text-center"
                style={
                  k.rank === 1
                    ? { color: "#09090e", background: "#f5c842" }
                    : { color: "#f5c842", background: "rgba(245,200,66,0.10)", border: "1px solid rgba(245,200,66,0.28)" }
                }
              >
                #{k.rank}
              </span>
              <span className="text-right flex items-center justify-end gap-1 w-10">
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden className="text-[#22c55e]">
                  <path d="M5 8V2M2 5l3-3 3 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-[11px] font-bold text-[#22c55e]">{k.change}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Traffic chart */}
      <div
        className="rounded-xl p-3"
        style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}
      >
        <div className="flex items-baseline justify-between mb-2">
          <div>
            <div className="text-[10px] text-white/40 uppercase tracking-widest">Organic traffic</div>
            <div className="text-[16px] font-black text-white leading-none">+670%</div>
          </div>
          <div className="text-[10px] text-white/40">Last 12 months</div>
        </div>
        <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} className="w-full h-auto" aria-hidden>
          <defs>
            <linearGradient id="seoArea" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#f5c842" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#f5c842" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d={area} fill="url(#seoArea)" />
          <path d={path} fill="none" stroke="#f5c842" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          {TRAFFIC_POINTS.map((v, i) => {
            if (i !== TRAFFIC_POINTS.length - 1) return null;
            const cx = (i / (TRAFFIC_POINTS.length - 1)) * w;
            const cy = h - (v / maxT) * (h - 6) - 3;
            return <circle key={i} cx={cx} cy={cy} r="3" fill="#f5c842" stroke="#0f1017" strokeWidth="2" />;
          })}
        </svg>
      </div>

      <div className="flex items-center justify-between mt-3 text-[10px] text-white/35">
        <span className="flex items-center gap-1.5">
          <svg width="10" height="10" viewBox="0 0 12 12" fill="currentColor" aria-hidden className="text-white/50">
            <circle cx="6" cy="6" r="5" />
          </svg>
          Google Search Console
        </span>
        <span>Updated 12 min ago</span>
      </div>
    </div>
  );
}
