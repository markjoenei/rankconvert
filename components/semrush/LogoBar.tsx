const FEATURES = [
  "Google Premier Partner",
  "AI-Optimized Sites",
  "Sub-60s Response",
  "SEO · AEO · GEO",
  "Real-Time ROI",
  "Trusted North America",
];

export function SemrushLogoBar() {
  // Duplicate so the marquee can loop seamlessly (translate -50%)
  const loop = [...FEATURES, ...FEATURES];

  return (
    <section className="bg-white py-10 sm:py-14 border-b border-gray-100 overflow-hidden">
      <div
        className="flex w-max gap-10 sm:gap-14 marquee-track"
        style={{
          animation: "marquee 30s linear infinite",
        }}
      >
        {loop.map((f, i) => (
          <span
            key={`${f}-${i}`}
            className="shrink-0 inline-flex items-center gap-10 sm:gap-14 text-[20px] sm:text-[26px] lg:text-[32px] font-extrabold tracking-tight text-[#0f0f1a]"
          >
            {f}
            <span className="w-2 h-2 rounded-full bg-[#ff521c]/70 shrink-0" />
          </span>
        ))}
      </div>
    </section>
  );
}
