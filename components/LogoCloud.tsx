const badges = [
  "Google Premier Partner",
  "AI-Optimized Sites",
  "Sub-60s Response",
  "SEO · AEO · GEO",
  "Real-Time ROI",
  "Trusted North America",
];

export function LogoCloud() {
  const items = [...badges, ...badges];
  return (
    <section
      aria-label="Trust badges"
      className="relative border-y border-border bg-paper py-16 md:py-24"
    >
      <div className="relative overflow-hidden">
        {/* Edge fades */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 md:w-48"
          style={{
            background:
              "linear-gradient(90deg, #faf9f7 0%, rgba(250,249,247,0.85) 60%, transparent 100%)",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 md:w-48"
          style={{
            background:
              "linear-gradient(-90deg, #faf9f7 0%, rgba(250,249,247,0.85) 60%, transparent 100%)",
          }}
        />

        <ul
          className="marquee-track flex w-max items-center gap-14 md:gap-24"
          style={{ animation: "marquee 38s linear infinite" }}
        >
          {items.map((label, i) => (
            <li
              key={`${label}-${i}`}
              className="font-display text-[28px] sm:text-[34px] md:text-[42px] lg:text-[48px] font-semibold tracking-[-0.02em] text-ink-soft whitespace-nowrap select-none"
            >
              {label}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
