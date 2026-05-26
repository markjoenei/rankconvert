export function SemrushHero() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #d8e8e0 0%, #e0e0f5 30%, #e5e1f5 60%, #f0eaf5 100%)",
      }}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 lg:pt-20 pb-0">
        <div className="text-center max-w-[960px] mx-auto">
          <h1 className="normal-case text-[24px] sm:text-[40px] lg:text-[56px] font-black text-[#0f0f1a] leading-[1.06] tracking-[-1.2px] mb-5 animate-fade-up">
            <span className="block whitespace-nowrap">Your competitors aren&apos;t</span>
            <span className="block whitespace-nowrap">out-dentisting you.</span>
            <span className="block whitespace-nowrap">
              They&apos;re <span className="text-[#ff521c]">out-marketing</span> you.
            </span>
          </h1>
          <p className="text-[15px] sm:text-[16px] text-[#3a3a4a] leading-[1.5] mb-7 max-w-[540px] mx-auto animate-fade-up" style={{ animationDelay: "0.1s" }}>
            The connected growth engine that finds patients, answers first, and books them — before a competitor can.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-5 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <a
              href="#"
              className="inline-flex items-center justify-center px-6 h-[48px] bg-[#ff521c] text-white text-[14px] font-semibold rounded-full hover:bg-[#e0461a] transition-colors"
            >
              Start Free Audit
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center px-6 h-[48px] bg-white text-[#0f0f1a] text-[14px] font-semibold rounded-full border border-[#0f0f1a]/15 hover:bg-gray-50 transition-colors"
            >
              Book a Demo
            </a>
          </div>

          {/* Trust line */}
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[12px] text-[#5a5a6a] animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <span className="inline-flex items-center gap-1.5">
              <span className="flex text-[#ff521c]">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} width="12" height="12" viewBox="0 0 12 12" fill="currentColor" aria-hidden>
                    <path d="M6 0l1.6 4 4.4.4-3.3 2.9 1 4.3L6 9.4l-3.7 2.2 1-4.3L0 4.4 4.4 4 6 0z" />
                  </svg>
                ))}
              </span>
              <span className="font-semibold text-[#0f0f1a]">4.9</span>
              <span>from 200+ practices</span>
            </span>
            <span className="hidden sm:inline">·</span>
            <span>No credit card required</span>
            <span className="hidden sm:inline">·</span>
            <span>Audit in 5 business days</span>
          </div>
        </div>

        {/* Dashboard mockup */}
        <div className="mt-10 sm:mt-14 lg:mt-16 max-w-[1100px] mx-auto animate-fade-up" style={{ animationDelay: "0.4s" }}>
          <PracticeDashboardMockup />
        </div>
      </div>
    </section>
  );
}

function PracticeDashboardMockup() {
  return (
    <div
      className="rounded-t-2xl overflow-hidden relative"
      style={{
        background: "#0a0c12",
        boxShadow:
          "0 -2px 0 rgba(255,255,255,0.04), 0 40px 80px -12px rgba(0,0,0,0.6), 0 20px 40px -10px rgba(40,20,80,0.4)",
      }}
    >
      {/* Browser chrome */}
      <div className="bg-[#0a0c12] px-3 py-2.5 flex items-center gap-3 border-b border-white/8">
        <div className="flex gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
        </div>
        <div className="flex-1 flex justify-center">
          <div className="bg-white/5 border border-white/10 rounded-md px-3 py-1 text-[10px] text-white/50 w-[280px] flex items-center gap-1.5">
            <svg width="9" height="9" viewBox="0 0 12 12" fill="none" aria-hidden className="text-white/40">
              <path d="M3.5 5V3.5a2.5 2.5 0 015 0V5M2.5 5h7v5.5h-7V5z" stroke="currentColor" strokeWidth="1.1" />
            </svg>
            app.pracpros.com
          </div>
        </div>
        <div className="w-16" />
      </div>

      {/* App body */}
      <div className="flex min-h-[460px]">
        {/* Sidebar */}
        <aside className="hidden sm:flex w-[180px] bg-[#0d1018] border-r border-white/6 flex-col">
          <div className="px-3 py-3 border-b border-white/6 flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-[#ff521c] flex items-center justify-center text-white text-[11px] font-black">
              P
            </div>
            <div>
              <div className="text-[11px] text-white font-bold leading-none">PracPros</div>
              <div className="text-[8px] text-white/50 mt-0.5">brighthill.dental</div>
            </div>
          </div>

          <nav className="flex-1 px-2 py-2.5 overflow-hidden">
            <SidebarSection label="Overview" />
            <SidebarItem icon="grid" item="Dashboard" active />
            <SidebarItem icon="users" item="New Patients" />

            <SidebarSection label="Visibility" />
            <SidebarItem icon="globe" item="Website + SEO" />
            <SidebarItem icon="target" item="Google Ads" />
            <SidebarItem icon="map" item="Google Maps" />
            <SidebarItem icon="spark" item="AI Visibility" />

            <SidebarSection label="Engagement" />
            <SidebarItem icon="bolt" item="Lead Response" />
            <SidebarItem icon="chat" item="Front Desk AI" />
            <SidebarItem icon="star" item="Reviews" />
            <SidebarItem icon="gift" item="Referrals" />

            <SidebarSection label="Operations" />
            <SidebarItem icon="gear" item="Automations" />
            <SidebarItem icon="chart" item="ROI Dashboard" />
          </nav>

          <div className="px-3 py-3 border-t border-white/6 flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#ff521c] to-[#ff8a5c]" />
            <div className="min-w-0">
              <div className="text-[10px] text-white font-semibold truncate">Dr. Lee</div>
              <div className="text-[8px] text-white/50 truncate">Owner · Brighthill</div>
            </div>
          </div>
        </aside>

        {/* Content */}
        <div className="flex-1 p-3 sm:p-5 min-w-0 overflow-hidden bg-[#0a0c12]">
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="normal-case text-[15px] sm:text-[17px] font-bold text-white">
                Growth Overview
              </h3>
              <div className="text-[10px] text-white/40 mt-0.5">
                Last 30 days · Updated 2 min ago
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button className="text-[10px] text-white/70 border border-white/10 bg-white/5 px-2.5 py-1 rounded-md hover:bg-white/10 transition">
                30d
              </button>
              <span className="text-[10px] text-[#4ade80] bg-[#4ade80]/10 border border-[#4ade80]/20 px-2.5 py-1 rounded-md font-semibold flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#4ade80] animate-pulse" />
                Live
              </span>
            </div>
          </div>

          {/* Metric cards row */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 mb-3">
            <KpiCard label="New Patients" value="126" delta="+22%" sparkColor="#4ade80" spark={[8, 10, 9, 12, 14, 13, 16, 18, 17, 22]} />
            <KpiCard label="Pipeline" value="$184K" delta="+38%" sparkColor="#a78bfa" spark={[12, 14, 16, 15, 19, 22, 24, 26, 28, 32]} />
            <KpiCard label="ROAS" value="6.4×" delta="+0.8" sparkColor="#ff7a3c" spark={[18, 17, 19, 20, 22, 21, 24, 25, 26, 28]} />
            <KpiCard label="Rating" value="4.9★" delta="+38" sparkColor="#fbbf24" spark={[15, 16, 16, 17, 17, 18, 19, 20, 21, 22]} />
          </div>

          {/* Big chart */}
          <div className="border border-white/8 bg-[#0e1119] rounded-lg p-3 mb-3">
            <div className="flex items-center justify-between mb-3">
              <div>
                <div className="text-[10px] text-white/50 mb-0.5">New Patients by Source</div>
                <div className="text-[14px] sm:text-[16px] font-bold text-white">126 booked · last 30 days</div>
              </div>
              <div className="flex items-center gap-3 text-[9px]">
                <Legend color="#3b82f6" label="Search" />
                <Legend color="#4ade80" label="Maps" />
                <Legend color="#a78bfa" label="Social" />
                <Legend color="#ff7a3c" label="Referrals" />
              </div>
            </div>
            <StackedAreaChart />
          </div>

          {/* Lower row */}
          <div className="grid grid-cols-2 gap-2">
            <div className="border border-white/8 bg-[#0e1119] rounded-lg p-3">
              <div className="flex items-center justify-between mb-2.5">
                <div className="text-[10px] font-semibold text-white">Source mix</div>
                <span className="text-[9px] text-white/40">30d</span>
              </div>
              <ul className="space-y-2 text-[9px]">
                <SourceRow color="#3b82f6" label="Google Search" value={42} />
                <SourceRow color="#4ade80" label="Google Maps" value={28} />
                <SourceRow color="#a78bfa" label="Social / Reels" value={18} />
                <SourceRow color="#ff7a3c" label="Referrals" value={12} />
              </ul>
            </div>

            <div className="border border-white/8 bg-[#0e1119] rounded-lg p-3">
              <div className="flex items-center justify-between mb-2.5">
                <div className="text-[10px] font-semibold text-white">Live activity</div>
                <span className="text-[9px] text-[#4ade80] flex items-center gap-1">
                  <span className="w-1 h-1 rounded-full bg-[#4ade80] animate-pulse" />
                  streaming
                </span>
              </div>
              <ul className="space-y-2 text-[9px] text-white/80">
                <Activity time="2m" name="Maria" action="booked whitening" detail="Fri 2:30 · Google Maps" dot="#4ade80" />
                <Activity time="8m" name="Theo" action="chat answered in 14s" detail="Instagram → site" dot="#a78bfa" />
                <Activity time="21m" name="Patel family" action="called · Invisalign" detail="Routed to Dr. Lee · 4:12" dot="#ff7a3c" />
                <Activity time="38m" name="Olivia K." action="left 5★ review" detail="auto-thank-you sent" dot="#fbbf24" />
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------- dashboard subcomponents ---------- */

function SidebarSection({ label }: { label: string }) {
  return (
    <div className="px-2 pt-3 pb-1.5">
      <span className="text-[7.5px] text-white/35 uppercase tracking-[0.12em] font-bold">
        {label}
      </span>
    </div>
  );
}

function SidebarItem({ icon, item, active = false }: { icon: IconName; item: string; active?: boolean }) {
  return (
    <button
      type="button"
      className={`w-full px-2 py-1.5 rounded-md flex items-center gap-2 text-[10px] transition-colors ${
        active
          ? "bg-white/8 text-white font-semibold ring-1 ring-white/10"
          : "text-white/55 hover:bg-white/5 hover:text-white/80"
      }`}
    >
      <SidebarIcon name={icon} active={active} />
      <span className="truncate">{item}</span>
      {active && (
        <span className="ml-auto w-1 h-3 rounded-sm bg-[#ff521c]" />
      )}
    </button>
  );
}

type IconName = "grid" | "users" | "globe" | "target" | "map" | "spark" | "bolt" | "chat" | "star" | "gift" | "gear" | "chart";

function SidebarIcon({ name, active }: { name: IconName; active: boolean }) {
  const stroke = active ? "white" : "rgba(255,255,255,0.5)";
  const props = { width: 12, height: 12, viewBox: "0 0 16 16", fill: "none", "aria-hidden": true as const, className: "shrink-0" };
  switch (name) {
    case "grid":
      return <svg {...props}><rect x="2" y="2" width="5" height="5" stroke={stroke} strokeWidth="1.3" /><rect x="9" y="2" width="5" height="5" stroke={stroke} strokeWidth="1.3" /><rect x="2" y="9" width="5" height="5" stroke={stroke} strokeWidth="1.3" /><rect x="9" y="9" width="5" height="5" stroke={stroke} strokeWidth="1.3" /></svg>;
    case "users":
      return <svg {...props}><circle cx="6" cy="5" r="2.2" stroke={stroke} strokeWidth="1.2" /><path d="M2 13.5c0-2.2 1.8-4 4-4s4 1.8 4 4M11 7a2 2 0 100-2M14 13.5c0-1.5-1-2.8-2.5-3.4" stroke={stroke} strokeWidth="1.2" strokeLinecap="round" /></svg>;
    case "globe":
      return <svg {...props}><circle cx="8" cy="8" r="6" stroke={stroke} strokeWidth="1.2" /><path d="M2 8h12M8 2c2 2 2 10 0 12M8 2c-2 2-2 10 0 12" stroke={stroke} strokeWidth="1.2" /></svg>;
    case "target":
      return <svg {...props}><circle cx="8" cy="8" r="6" stroke={stroke} strokeWidth="1.2" /><circle cx="8" cy="8" r="3" stroke={stroke} strokeWidth="1.2" /><circle cx="8" cy="8" r="1" fill={stroke} /></svg>;
    case "map":
      return <svg {...props}><path d="M6 14V3l-4 2v11l4-2zM6 3l4 2v11l-4-2V3zm4 2l4-2v11l-4 2" stroke={stroke} strokeWidth="1.2" strokeLinejoin="round" /></svg>;
    case "spark":
      return <svg {...props}><path d="M8 1l1.4 4.6L14 7l-4.6 1.4L8 13l-1.4-4.6L2 7l4.6-1.4L8 1z" stroke={stroke} strokeWidth="1.2" strokeLinejoin="round" /></svg>;
    case "bolt":
      return <svg {...props}><path d="M9 2L3 9h4l-1 5 6-7H8l1-5z" stroke={stroke} strokeWidth="1.2" strokeLinejoin="round" /></svg>;
    case "chat":
      return <svg {...props}><path d="M2 4a2 2 0 012-2h8a2 2 0 012 2v6a2 2 0 01-2 2H7l-3 2.5V12H4a2 2 0 01-2-2V4z" stroke={stroke} strokeWidth="1.2" strokeLinejoin="round" /></svg>;
    case "star":
      return <svg {...props}><path d="M8 1.5l1.9 4.2 4.6.4-3.5 3 1.1 4.5L8 11.3 3.9 13.6 5 9.1 1.5 6.1l4.6-.4L8 1.5z" stroke={stroke} strokeWidth="1.2" strokeLinejoin="round" /></svg>;
    case "gift":
      return <svg {...props}><rect x="2" y="6" width="12" height="3" stroke={stroke} strokeWidth="1.2" /><rect x="3" y="9" width="10" height="5" stroke={stroke} strokeWidth="1.2" /><path d="M8 6V3M8 6c-1.5-1.5-4-1-4 0M8 6c1.5-1.5 4-1 4 0" stroke={stroke} strokeWidth="1.2" /></svg>;
    case "gear":
      return <svg {...props}><circle cx="8" cy="8" r="2" stroke={stroke} strokeWidth="1.2" /><path d="M8 1v2M8 13v2M1 8h2M13 8h2M3 3l1.5 1.5M11.5 11.5L13 13M3 13l1.5-1.5M11.5 4.5L13 3" stroke={stroke} strokeWidth="1.2" strokeLinecap="round" /></svg>;
    case "chart":
      return <svg {...props}><path d="M2 13h12M3 11V8M6 11V4M9 11V6M12 11V2" stroke={stroke} strokeWidth="1.2" strokeLinecap="round" /></svg>;
  }
}

function KpiCard({
  label,
  value,
  delta,
  sparkColor,
  spark,
}: {
  label: string;
  value: string;
  delta: string;
  sparkColor: string;
  spark: number[];
}) {
  const max = Math.max(...spark);
  const min = Math.min(...spark);
  const range = Math.max(1, max - min);
  const d = spark
    .map((v, i) => `${i === 0 ? "M" : "L"}${(i / (spark.length - 1)) * 80},${24 - ((v - min) / range) * 22}`)
    .join(" ");
  const area = `${d} L80,24 L0,24 Z`;

  return (
    <div className="border border-white/8 bg-[#0e1119] rounded-lg p-2.5 relative overflow-hidden">
      <div className="text-[9px] text-white/50 mb-1">{label}</div>
      <div className="flex items-baseline justify-between gap-2">
        <span className="text-[16px] sm:text-[20px] font-black text-white leading-none">{value}</span>
        <span className="text-[9px] text-[#4ade80] font-bold">{delta}</span>
      </div>
      <svg viewBox="0 0 80 24" className="mt-2 w-full h-[24px]" preserveAspectRatio="none" aria-hidden>
        <defs>
          <linearGradient id={`g-${label}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={sparkColor} stopOpacity="0.35" />
            <stop offset="100%" stopColor={sparkColor} stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d={area} fill={`url(#g-${label})`} />
        <path d={d} stroke={sparkColor} strokeWidth="1.4" fill="none" />
      </svg>
    </div>
  );
}

function Legend({ color, label }: { color: string; label: string }) {
  return (
    <span className="inline-flex items-center gap-1 text-white/55">
      <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: color }} />
      {label}
    </span>
  );
}

function StackedAreaChart() {
  const w = 600;
  const h = 110;
  const series: { color: string; pts: number[] }[] = [
    { color: "#3b82f6", pts: [22, 24, 28, 26, 32, 35, 38, 36, 42, 46, 48, 52] },
    { color: "#4ade80", pts: [12, 14, 16, 18, 18, 22, 24, 26, 28, 30, 32, 34] },
    { color: "#a78bfa", pts: [6, 8, 8, 10, 12, 14, 14, 16, 18, 20, 22, 22] },
    { color: "#ff7a3c", pts: [4, 4, 6, 6, 8, 8, 10, 10, 12, 12, 14, 14] },
  ];

  // Compute stacked y per index
  const stacks = series[0].pts.map((_, i) =>
    series.reduce((acc, s) => acc + s.pts[i], 0)
  );
  const maxY = Math.max(...stacks);

  // Build layered paths bottom-up
  const layers: { color: string; d: string }[] = [];
  const cumulative = series[0].pts.map(() => 0);

  for (const s of series) {
    const top = s.pts.map((v, i) => cumulative[i] + v);
    const dTop = top
      .map((v, i) => `${i === 0 ? "M" : "L"}${(i / (s.pts.length - 1)) * w},${h - (v / maxY) * h}`)
      .join(" ");
    const dBot = [...cumulative]
      .reverse()
      .map((v, i) => `L${((s.pts.length - 1 - i) / (s.pts.length - 1)) * w},${h - (v / maxY) * h}`)
      .join(" ");
    layers.push({ color: s.color, d: `${dTop} ${dBot} Z` });
    s.pts.forEach((v, i) => (cumulative[i] += v));
  }

  return (
    <div>
      <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-[110px]" preserveAspectRatio="none" aria-hidden>
        {[0.25, 0.5, 0.75].map((y) => (
          <line key={y} x1="0" y1={h * y} x2={w} y2={h * y} stroke="rgba(255,255,255,0.06)" />
        ))}
        {layers.map((l, i) => (
          <path key={i} d={l.d} fill={l.color} fillOpacity="0.55" />
        ))}
      </svg>
      <div className="flex justify-between mt-1 text-[8px] text-white/30">
        {["Apr 26", "Apr 30", "May 4", "May 8", "May 12", "May 16", "May 20", "May 24", "Today"].map((d) => (
          <span key={d}>{d}</span>
        ))}
      </div>
    </div>
  );
}

function SourceRow({ color, label, value }: { color: string; label: string; value: number }) {
  return (
    <li className="flex items-center gap-2">
      <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: color }} />
      <span className="flex-1 text-white/70">{label}</span>
      <div className="h-1.5 w-16 bg-white/8 rounded-full overflow-hidden">
        <div className="h-full rounded-full" style={{ width: `${value * 1.6}%`, backgroundColor: color }} />
      </div>
      <span className="w-8 text-right text-white/80 font-semibold">{value}%</span>
    </li>
  );
}

function Activity({ time, name, action, detail, dot }: { time: string; name: string; action: string; detail: string; dot: string }) {
  return (
    <li className="flex items-start gap-2">
      <span className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0" style={{ backgroundColor: dot }} />
      <span className="text-[8px] text-white/45 w-7 shrink-0 mt-px">{time}</span>
      <span className="flex-1 min-w-0">
        <span className="font-semibold text-white">{name}</span> {action}
        <span className="block text-white/40 text-[8px] mt-0.5">{detail}</span>
      </span>
    </li>
  );
}
