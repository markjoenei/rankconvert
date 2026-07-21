import Link from "next/link";

export type ServiceHeroProps = {
  eyebrow: string;
  title: string;
  titleHighlight: string;
  subtitle: string;
  bullets: string[];
};

export function ServiceHero({ eyebrow, title, titleHighlight, subtitle, bullets }: ServiceHeroProps) {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(91,155,213,0.18) 0%, transparent 60%), linear-gradient(180deg, #10121a 0%, #09090e 60%, #0b0d14 100%)",
      }}
    >
      {/* Grid bg */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 lg:pt-24 pb-14 sm:pb-20 lg:pb-24">
        <div className="max-w-[860px] mx-auto text-center">
          <div
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full mb-6 border text-[12px] font-semibold text-white/80 animate-fade-up"
            style={{
              background: "rgba(245,200,66,0.08)",
              borderColor: "rgba(245,200,66,0.25)",
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#f5c842] animate-pulse" />
            {eyebrow}
          </div>

          <h1
            className="text-[32px] sm:text-[48px] lg:text-[64px] font-black text-white leading-[1.03] tracking-[-1.8px] mb-5 animate-fade-up"
            style={{ animationDelay: "0.05s" }}
          >
            {title}{" "}
            <span style={{ color: "#f5c842" }}>{titleHighlight}</span>
          </h1>

          <p
            className="text-[15px] sm:text-[18px] text-white/60 leading-[1.6] mb-8 max-w-[640px] mx-auto animate-fade-up"
            style={{ animationDelay: "0.1s" }}
          >
            {subtitle}
          </p>

          <div
            className="flex flex-wrap items-center justify-center gap-3 mb-10 animate-fade-up"
            style={{ animationDelay: "0.15s" }}
          >
            <Link
              href="#lead-form"
              className="inline-flex items-center justify-center px-7 h-[50px] bg-[#f5c842] text-[#09090e] text-[14px] font-bold rounded-full hover:bg-[#e6b830] transition-colors"
            >
              Scale My Business Today
            </Link>
            <a
              href="tel:0478186355"
              className="inline-flex items-center justify-center gap-2 px-6 h-[50px] bg-white/5 text-white text-[14px] font-semibold rounded-full border border-white/10 hover:bg-white/10 transition-colors"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                <path
                  d="M2 3.5a1.5 1.5 0 011.5-1.5h1.4a1 1 0 01.95.68l.7 2.09a1 1 0 01-.24 1.02L5.4 6.8a8 8 0 003.8 3.8l1-.9a1 1 0 011.02-.24l2.1.7a1 1 0 01.68.95V12.5A1.5 1.5 0 0112.5 14C6.7 14 2 9.3 2 3.5z"
                  stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"
                />
              </svg>
              0478 186 355
            </a>
          </div>

          <ul
            className="flex flex-wrap items-center justify-center gap-x-5 gap-y-3 text-[13px] text-white/70 animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            {bullets.map(b => (
              <li key={b} className="flex items-center gap-1.5">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden className="shrink-0">
                  <circle cx="7" cy="7" r="6" fill="rgba(245,200,66,0.15)" stroke="#f5c842" strokeWidth="1.1" />
                  <path d="M4.5 7l1.8 1.8L9.5 5" stroke="#f5c842" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {b}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
