export type ServicePainPointProps = {
  eyebrow: string;
  title: string;
  intro: string;
  pains: string[];
};

export function ServicePainPoint({ eyebrow, title, intro, pains }: ServicePainPointProps) {
  return (
    <section
      className="relative py-16 sm:py-24 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #12141c 0%, #0a0b10 55%, #0c0e15 100%)" }}
    >
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "34px 34px",
          maskImage: "radial-gradient(ellipse 70% 60% at 50% 50%, black 30%, transparent 80%)",
          WebkitMaskImage: "radial-gradient(ellipse 70% 60% at 50% 50%, black 30%, transparent 80%)",
        }}
      />

      <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-10 lg:gap-16 items-center">
          <div>
            <div className="text-[11px] font-bold uppercase tracking-widest mb-3" style={{ color: "#f5c842" }}>
              {eyebrow}
            </div>
            <h2 className="text-[26px] sm:text-[38px] lg:text-[50px] font-black text-white leading-[1.06] tracking-[-1px] mb-5">
              {title}
            </h2>
            <p className="text-[14px] sm:text-[16px] leading-[1.7]" style={{ color: "rgba(255,255,255,0.6)" }}>
              {intro}
            </p>
          </div>

          <ul className="space-y-3">
            {pains.map((p, i) => (
              <li
                key={i}
                className="flex items-start gap-3 p-4 sm:p-5 rounded-xl"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.07)",
                }}
              >
                <span
                  className="w-8 h-8 rounded-full flex items-center justify-center shrink-0"
                  style={{ background: "rgba(239,68,68,0.12)", border: "1px solid rgba(239,68,68,0.3)" }}
                >
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
                    <path d="M3 3l6 6M9 3l-6 6" stroke="#ef4444" strokeWidth="1.6" strokeLinecap="round" />
                  </svg>
                </span>
                <span className="text-[14px] sm:text-[15px] text-white/85 leading-[1.55] mt-1">{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
