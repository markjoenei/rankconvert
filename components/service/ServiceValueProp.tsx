export type ServiceValuePropProps = {
  eyebrow: string;
  title: string;
  body: string;
  outcomes: { value: string; label: string }[];
};

export function ServiceValueProp({ eyebrow, title, body, outcomes }: ServiceValuePropProps) {
  return (
    <section className="py-14 sm:py-20 lg:py-24" style={{ background: "#f6f6f8" }}>
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1fr_1fr] gap-10 lg:gap-16 items-center">
          <div>
            <div className="text-[11px] font-bold uppercase tracking-widest mb-3" style={{ color: "#c9971a" }}>
              {eyebrow}
            </div>
            <h2 className="text-[26px] sm:text-[38px] lg:text-[50px] font-black text-[#09090e] leading-[1.06] tracking-[-1px] mb-5">
              {title}
            </h2>
            <p className="text-[14px] sm:text-[16px] leading-[1.7]" style={{ color: "rgba(9,9,14,0.6)" }}>
              {body}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {outcomes.map((o, i) => (
              <div
                key={i}
                className="rounded-2xl p-4 sm:p-6"
                style={{ background: "#ffffff", border: "1px solid rgba(0,0,0,0.08)" }}
              >
                <div className="font-black tracking-tight leading-none mb-2" style={{ color: "#f5c842", fontSize: "clamp(22px, 5.5vw, 42px)" }}>
                  {o.value}
                </div>
                <div className="text-[11px] sm:text-[13px] font-semibold text-[#09090e]/75 leading-tight">{o.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
