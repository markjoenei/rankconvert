export type ServiceProcessStep = {
  n: string;
  title: string;
  body: string;
  deliverable: string;
  timing: string;
};

export type ServiceProcessProps = {
  eyebrow: string;
  title: string;
  intro: string;
  steps: ServiceProcessStep[];
  theme?: "light" | "dark";
};

export function ServiceProcess({
  eyebrow,
  title,
  intro,
  steps,
  theme = "light",
}: ServiceProcessProps) {
  const dark = theme === "dark";
  return (
    <section
      className="py-16 sm:py-24"
      style={{
        background: dark
          ? "linear-gradient(180deg, #12141c 0%, #0a0b10 55%, #0c0e15 100%)"
          : "#f6f6f8",
      }}
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-[720px] mx-auto mb-10 sm:mb-14">
          <div
            className="text-[11px] font-bold uppercase tracking-widest mb-3"
            style={{ color: dark ? "#f5c842" : "#c9971a" }}
          >
            {eyebrow}
          </div>
          <h2
            className={`text-[26px] sm:text-[38px] lg:text-[46px] font-black leading-[1.06] tracking-[-1px] mb-5 ${
              dark ? "text-white" : "text-[#09090e]"
            }`}
          >
            {title}
          </h2>
          <p
            className="text-[14px] sm:text-[16px] leading-[1.65]"
            style={{ color: dark ? "rgba(255,255,255,0.6)" : "rgba(9,9,14,0.6)" }}
          >
            {intro}
          </p>
        </div>

        <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {steps.map((s, i) => (
            <li
              key={i}
              className="rounded-2xl p-5 sm:p-6 flex flex-col"
              style={{
                background: dark ? "rgba(255,255,255,0.03)" : "#ffffff",
                border: dark
                  ? "1px solid rgba(255,255,255,0.07)"
                  : "1px solid rgba(0,0,0,0.08)",
              }}
            >
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center mb-4 text-[13px] font-black"
                style={{ color: "#09090e", background: "#f5c842" }}
              >
                {s.n}
              </div>
              <h3
                className={`text-[16px] sm:text-[17px] font-black leading-tight mb-2 tracking-tight ${
                  dark ? "text-white" : "text-[#09090e]"
                }`}
              >
                {s.title}
              </h3>
              <p
                className="text-[13px] leading-[1.55] mb-4"
                style={{
                  color: dark ? "rgba(255,255,255,0.55)" : "rgba(9,9,14,0.6)",
                }}
              >
                {s.body}
              </p>
              <div
                className="mt-auto pt-3 border-t space-y-1"
                style={{
                  borderColor: dark
                    ? "rgba(255,255,255,0.06)"
                    : "rgba(0,0,0,0.06)",
                }}
              >
                <div
                  className="text-[10px] font-bold uppercase tracking-widest"
                  style={{
                    color: dark ? "rgba(255,255,255,0.4)" : "rgba(9,9,14,0.4)",
                  }}
                >
                  Deliverable
                </div>
                <div
                  className={`text-[12px] sm:text-[13px] font-semibold ${
                    dark ? "text-white/85" : "text-[#09090e]/85"
                  }`}
                >
                  {s.deliverable}
                </div>
                <div
                  className="text-[11px] font-semibold pt-1"
                  style={{ color: "#f5c842" }}
                >
                  {s.timing}
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
