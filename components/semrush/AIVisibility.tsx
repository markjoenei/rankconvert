const SOURCES: { name: string; value: number; color: "teal" | "purple" }[] = [
  { name: "Google Search", value: 8.2, color: "teal" },
  { name: "Google Maps", value: 7.4, color: "purple" },
  { name: "ChatGPT", value: 4.1, color: "teal" },
  { name: "AI Overviews", value: 3.6, color: "purple" },
  { name: "Perplexity", value: 2.8, color: "teal" },
  { name: "Instagram", value: 2.4, color: "purple" },
  { name: "TikTok", value: 2.0, color: "teal" },
  { name: "Yelp", value: 1.6, color: "teal" },
  { name: "Reddit", value: 1.2, color: "purple" },
  { name: "Referrals", value: 1.0, color: "teal" },
];

const MAX = 10;

export function SemrushAIVisibility() {
  return (
    <section className="relative bg-[#0c0c0e] py-16 sm:py-24 overflow-hidden">
      <div className="absolute left-0 top-0 bottom-0 w-[10%] sm:w-[14%] pointer-events-none">
        <BarColumn color="purple" vertical />
      </div>
      <div className="absolute right-0 top-0 bottom-0 w-[10%] sm:w-[14%] pointer-events-none">
        <BarColumn color="purple" vertical />
      </div>
      <div className="absolute inset-x-0 bottom-0 h-[100px] sm:h-[140px] pointer-events-none">
        <BarColumn color="teal" />
      </div>

      <div className="relative max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="text-center max-w-[720px] mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-white/8 border border-white/15 mb-6">
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden>
              <path d="M11 1l1.8 6.5L19 9l-6.2 1.6L11 17l-1.8-6.4L3 9l6.2-1.5L11 1z" fill="white" />
              <circle cx="17" cy="3.5" r="1.2" fill="white" />
              <circle cx="3.5" cy="14.5" r="0.9" fill="white" />
            </svg>
          </div>
          <h2
            className="text-[28px] sm:text-[48px] lg:text-[68px] font-black leading-[1.02] tracking-[-1.4px] mb-5 [text-wrap:balance]"
            style={{
              background:
                "linear-gradient(90deg, #ffffff 0%, #ffffff 40%, #fff7c2 65%, #ffd0a0 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            <span className="block">Patients are searching</span>
            <span className="block">in five different places.</span>
          </h2>
          <p className="text-[14px] sm:text-[16px] text-white/70 leading-[1.55] max-w-[520px] mx-auto mb-7">
            From Google Maps to ChatGPT, the moment a patient looks for a dentist — we make sure your practice is the answer.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 px-6 h-[44px] bg-[#ff521c] text-white text-[13px] font-semibold rounded-full hover:bg-[#e0461a] transition-colors"
          >
            Audit my visibility
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
              <path d="M4 3h5v5M9 3L3 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>

        {/* Chart card */}
        <div className="bg-white rounded-2xl p-5 sm:p-7 lg:p-9 shadow-[0_30px_80px_rgba(0,0,0,0.4)]">
          <div className="flex items-center justify-between mb-5 pb-3 border-b border-gray-100">
            <div className="text-[12px] font-bold text-[#0f0f1a]">Discovery channel</div>
            <div className="text-[12px] font-bold text-[#0f0f1a]">% Share of new patients</div>
            <div className="text-[10px] text-gray-400 hidden sm:block">Last 90 days · benchmark</div>
          </div>

          <ul className="space-y-3 sm:space-y-4">
            {SOURCES.map((b) => (
              <li
                key={b.name}
                className="grid grid-cols-[110px_40px_1fr] sm:grid-cols-[150px_50px_1fr] items-center gap-3"
              >
                <span className="text-[12px] sm:text-[13px] text-[#0f0f1a] font-medium truncate">
                  {b.name}
                </span>
                <span className="text-[12px] sm:text-[13px] text-[#0f0f1a] tabular-nums">
                  {b.value}
                </span>
                <div
                  className="h-[6px] sm:h-[8px] rounded-full"
                  style={{
                    width: `${(b.value / MAX) * 100}%`,
                    background:
                      b.color === "teal"
                        ? "linear-gradient(90deg, #1bd7a1, #5fe2c8)"
                        : "linear-gradient(90deg, #a78bfa, #c4b5fd)",
                  }}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function BarColumn({ color, vertical }: { color: "teal" | "purple"; vertical?: boolean }) {
  const count = vertical ? 20 : 100;
  if (vertical) {
    return (
      <svg className="w-full h-full" viewBox="0 0 60 800" preserveAspectRatio="none" aria-hidden>
        {Array.from({ length: count }).map((_, i) => {
          const y = (i / count) * 800;
          const fill = color === "teal" ? "#1bd7a1" : "#7c5cff";
          return (
            <line
              key={i}
              x1="0"
              y1={y}
              x2="60"
              y2={y}
              stroke={fill}
              strokeWidth="1.4"
              opacity={0.25 + ((i * 13) % 7) * 0.04}
            />
          );
        })}
      </svg>
    );
  }
  return (
    <svg className="w-full h-full" viewBox="0 0 1200 160" preserveAspectRatio="none" aria-hidden>
      {Array.from({ length: count }).map((_, i) => {
        const x = (i / count) * 1200;
        const fill = i % 2 === 0 ? "#1bd7a1" : "#7c5cff";
        return (
          <line
            key={i}
            x1={x}
            y1="160"
            x2={x}
            y2={Math.max(0, 60 + ((i * 17) % 70))}
            stroke={fill}
            strokeWidth="2"
            opacity={0.55}
          />
        );
      })}
    </svg>
  );
}
