import Image from "next/image";

export function SemrushGetStarted() {
  return (
    <section className="bg-white pt-6 sm:pt-10 pb-12 sm:pb-20">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="relative rounded-3xl overflow-hidden p-8 sm:p-12 lg:p-16"
          style={{
            background:
              "linear-gradient(135deg, #ffe6d8 0%, #ffd6c4 50%, #ffc4b0 100%)",
          }}
        >
          {/* Team portrait — fills the right half of the card */}
          <div className="hidden lg:block absolute inset-y-0 right-0 w-[58%] xl:w-[55%] pointer-events-none">
            <div className="relative w-full h-full">
              <Image
                src="/portraits/team.webp"
                alt="Team collaborating on a growth strategy"
                fill
                sizes="(min-width: 1280px) 55vw, 58vw"
                className="object-cover object-center"
                style={{
                  maskImage:
                    "linear-gradient(to left, black 50%, transparent 95%)",
                  WebkitMaskImage:
                    "linear-gradient(to left, black 50%, transparent 95%)",
                }}
              />
            </div>
          </div>

          <div className="relative z-10 max-w-[680px]">
            <h2 className="text-[26px] sm:text-[40px] lg:text-[54px] font-black text-[#0f0f1a] leading-[1.06] tracking-[-1.2px] [text-wrap:balance]">
              <span className="block">Three steps to a</span>
              <span className="block">growth system that</span>
              <span className="block">runs without you.</span>
            </h2>
            <p className="text-[14px] sm:text-[16px] text-[#3a3a4a] mt-5 mb-7 max-w-[480px] leading-[1.55]">
              Discovery, build, and operate. A market scan, a connected launch, and continuous optimization — with one named team owning every step.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#"
                className="inline-flex items-center justify-center px-6 h-[48px] bg-[#0f0f1a] text-white text-[14px] font-semibold rounded-full hover:bg-black transition-colors"
              >
                Start with a Free Audit
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center px-6 h-[48px] bg-white text-[#0f0f1a] text-[14px] font-semibold rounded-full border border-[#0f0f1a]/15 hover:bg-gray-50 transition-colors"
              >
                Talk to a Strategist
              </a>
            </div>

            <ul className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10">
              {[
                { n: "01", t: "Discovery", d: "Market & growth analysis", time: "2 weeks" },
                { n: "02", t: "Build", d: "Growth infrastructure", time: "3–4 weeks" },
                { n: "03", t: "Operate", d: "Optimize & scale", time: "Ongoing" },
              ].map((s) => (
                <li key={s.n} className="bg-white/60 backdrop-blur rounded-xl p-4 border border-white">
                  <div className="text-[10px] font-black text-[#ff521c] mb-2">{s.n}</div>
                  <div className="text-[15px] font-bold text-[#0f0f1a] mb-1">{s.t}</div>
                  <div className="text-[12px] text-[#5a5a6a] mb-2">{s.d}</div>
                  <div className="text-[11px] text-[#3a3a4a] font-medium">{s.time}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
