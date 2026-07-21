const FEATURES = [
  "Search Engine Optimisation",
  "Website Design",
  "Shopify Stores",
  "Conversion Rate Optimisation",
  "Social Media Marketing",
  "Melbourne Based",
  "Australian Owned",
  "Month to Month",
];

export function SemrushLogoBar() {
  const loop = [...FEATURES, ...FEATURES];

  return (
    <section
      className="py-8 sm:py-10 border-y border-white/[0.06] overflow-hidden"
      style={{ background: "linear-gradient(90deg, #0d0f16 0%, #131521 50%, #0d0f16 100%)" }}
    >
      <div
        className="flex w-max gap-10 sm:gap-14 marquee-track"
        style={{ animation: "marquee 36s linear infinite" }}
      >
        {loop.map((f, i) => (
          <span
            key={`${f}-${i}`}
            className="shrink-0 inline-flex items-center gap-10 sm:gap-14 text-[18px] sm:text-[22px] lg:text-[26px] font-bold tracking-tight text-white/70"
          >
            {f}
            <span className="w-1.5 h-1.5 rounded-full bg-[#f5c842]/60 shrink-0" />
          </span>
        ))}
      </div>
    </section>
  );
}
