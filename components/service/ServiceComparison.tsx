export type ComparisonColumn = {
  name: string;
  sub?: string;
  highlight?: boolean;
};

export type ComparisonRow = {
  feature: string;
  values: (boolean | string)[];
};

export type ServiceComparisonProps = {
  eyebrow: string;
  title: string;
  intro: string;
  columns: ComparisonColumn[];
  rows: ComparisonRow[];
  cta?: { label: string; href: string };
  theme?: "light" | "dark";
};

export function ServiceComparison({
  eyebrow,
  title,
  intro,
  columns,
  rows,
  cta,
  theme = "light",
}: ServiceComparisonProps) {
  const dark = theme === "dark";
  const gridCols = `1.4fr repeat(${columns.length}, 1fr)`;

  return (
    <section
      className="py-16 sm:py-24"
      style={{
        background: dark
          ? "linear-gradient(180deg, #12141c 0%, #0a0b10 55%, #0c0e15 100%)"
          : "#ffffff",
      }}
    >
      <div className="max-w-[1080px] mx-auto px-4 sm:px-6 lg:px-8">
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

        {/* Table (scrolls horizontally on mobile) */}
        <div className="overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div
            className="min-w-[720px] rounded-2xl overflow-hidden"
            style={{
              background: dark ? "rgba(255,255,255,0.03)" : "#ffffff",
              border: dark
                ? "1px solid rgba(255,255,255,0.07)"
                : "1px solid rgba(0,0,0,0.08)",
            }}
          >
            {/* Header row */}
            <div
              className="grid"
              style={{ gridTemplateColumns: gridCols }}
            >
              <div
                className="p-4 sm:p-5 text-[11px] font-bold uppercase tracking-widest"
                style={{
                  color: dark ? "rgba(255,255,255,0.4)" : "rgba(9,9,14,0.4)",
                }}
              >
                Feature
              </div>
              {columns.map((c, i) => (
                <div
                  key={i}
                  className="p-4 sm:p-5 text-center"
                  style={{
                    background: c.highlight
                      ? dark
                        ? "rgba(245,200,66,0.08)"
                        : "rgba(245,200,66,0.10)"
                      : undefined,
                  }}
                >
                  <div
                    className={`text-[13px] sm:text-[15px] font-black leading-tight ${
                      dark ? "text-white" : "text-[#09090e]"
                    }`}
                  >
                    {c.name}
                  </div>
                  {c.sub && (
                    <div
                      className="text-[11px] font-semibold mt-1"
                      style={{
                        color: c.highlight
                          ? "#f5c842"
                          : dark
                            ? "rgba(255,255,255,0.4)"
                            : "rgba(9,9,14,0.5)",
                      }}
                    >
                      {c.sub}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Body rows */}
            {rows.map((row, i) => (
              <div
                key={i}
                className="grid border-t"
                style={{
                  gridTemplateColumns: gridCols,
                  borderColor: dark
                    ? "rgba(255,255,255,0.06)"
                    : "rgba(0,0,0,0.06)",
                }}
              >
                <div
                  className={`p-4 sm:p-5 text-[13px] sm:text-[14px] font-semibold ${
                    dark ? "text-white/90" : "text-[#09090e]/85"
                  }`}
                >
                  {row.feature}
                </div>
                {row.values.map((v, j) => (
                  <div
                    key={j}
                    className="p-4 sm:p-5 text-center flex items-center justify-center"
                    style={{
                      background: columns[j].highlight
                        ? dark
                          ? "rgba(245,200,66,0.05)"
                          : "rgba(245,200,66,0.06)"
                        : undefined,
                    }}
                  >
                    {typeof v === "boolean" ? (
                      v ? (
                        <span
                          className="inline-flex w-6 h-6 rounded-full items-center justify-center"
                          style={{
                            background: "rgba(245,200,66,0.15)",
                            border: "1px solid rgba(245,200,66,0.4)",
                          }}
                        >
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
                            <path
                              d="M3 6l2 2 4-5"
                              stroke="#f5c842"
                              strokeWidth="1.6"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                      ) : (
                        <span
                          className="inline-flex w-6 h-6 rounded-full items-center justify-center"
                          style={{
                            background: dark
                              ? "rgba(239,68,68,0.10)"
                              : "rgba(239,68,68,0.08)",
                            border: "1px solid rgba(239,68,68,0.3)",
                          }}
                        >
                          <svg width="10" height="10" viewBox="0 0 12 12" fill="none" aria-hidden>
                            <path
                              d="M3 3l6 6M9 3l-6 6"
                              stroke="#ef4444"
                              strokeWidth="1.6"
                              strokeLinecap="round"
                            />
                          </svg>
                        </span>
                      )
                    ) : (
                      <span
                        className={`text-[12px] sm:text-[13px] font-semibold ${
                          dark ? "text-white/85" : "text-[#09090e]/80"
                        }`}
                      >
                        {v}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {cta && (
          <div className="text-center mt-8 sm:mt-10">
            <a
              href={cta.href}
              className="inline-flex items-center justify-center px-7 h-[50px] text-[#09090e] text-[14px] font-bold rounded-full hover:bg-[#e6b830] transition-colors"
              style={{ background: "#f5c842" }}
            >
              {cta.label}
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
