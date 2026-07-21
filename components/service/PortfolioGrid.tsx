import Image from "next/image";

export type PortfolioItem = {
  client: string;
  category: string;
  description: string;
  image: string;
  imageAlt: string;
  accentColor?: string;
};

export function PortfolioGrid({
  eyebrow,
  title,
  subtitle,
  items,
  theme = "light",
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  items: PortfolioItem[];
  theme?: "light" | "dark";
}) {
  const isLight = theme === "light";
  const bg = isLight
    ? "#f6f6f8"
    : "linear-gradient(180deg, #10121a 0%, #09090e 55%, #0b0d14 100%)";
  const textColor = isLight ? "#09090e" : "#ffffff";
  const bodyColor = isLight ? "rgba(9,9,14,0.55)" : "rgba(255,255,255,0.55)";
  const kickerColor = isLight ? "#c9971a" : "#f5c842";
  const cardBg = isLight ? "#ffffff" : "#0f1017";
  const cardBorder = isLight ? "rgba(0,0,0,0.08)" : "rgba(255,255,255,0.07)";
  const mutedColor = isLight ? "rgba(9,9,14,0.4)" : "rgba(255,255,255,0.4)";

  return (
    <section className="py-14 sm:py-20 lg:py-24" style={{ background: bg }}>
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-[720px] mb-10 sm:mb-14">
          <div className="text-[11px] font-bold uppercase tracking-widest mb-3" style={{ color: kickerColor }}>
            {eyebrow}
          </div>
          <h2
            className="text-[26px] sm:text-[38px] lg:text-[50px] font-black leading-[1.06] tracking-[-1px] mb-5"
            style={{ color: textColor }}
          >
            {title}
          </h2>
          <p className="text-[14px] sm:text-[16px] leading-[1.6] max-w-[600px]" style={{ color: bodyColor }}>
            {subtitle}
          </p>
        </div>

        <div className="flex sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 overflow-x-auto snap-x snap-mandatory -mx-4 px-4 sm:mx-0 sm:px-0 sm:overflow-visible [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {items.map((it, i) => (
            <article
              key={i}
              className="group rounded-2xl overflow-hidden flex flex-col shrink-0 w-[85%] snap-center sm:w-auto sm:shrink"
              style={{ background: cardBg, border: `1px solid ${cardBorder}` }}
            >
              <div className="relative w-full overflow-hidden" style={{ aspectRatio: "16/10", background: "#0a0b10" }}>
                <Image
                  src={it.image}
                  alt={it.imageAlt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
                />
                {it.accentColor && (
                  <div
                    className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest"
                    style={{
                      color: it.accentColor,
                      background: `${it.accentColor}22`,
                      border: `1px solid ${it.accentColor}55`,
                      backdropFilter: "blur(6px)",
                    }}
                  >
                    {it.category}
                  </div>
                )}
              </div>
              <div className="p-5 flex flex-col gap-2">
                {!it.accentColor && (
                  <div className="text-[10px] font-bold uppercase tracking-widest" style={{ color: mutedColor }}>
                    {it.category}
                  </div>
                )}
                <h3 className="text-[15px] sm:text-[17px] font-black leading-[1.25] tracking-tight" style={{ color: textColor }}>
                  {it.client}
                </h3>
                <p className="text-[12px] sm:text-[13px] leading-[1.6]" style={{ color: bodyColor }}>
                  {it.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
