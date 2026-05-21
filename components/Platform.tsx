import Image from "next/image";
import { Button } from "./ui/Button";

function PlatformVisual() {
  const nodes = [
    {
      label: "Website + SEO",
      side: "left",
      top: "8%",
      color: "bg-accent-mint",
      iconBg: "bg-accent-mint",
      icon: (
        <path d="M2 6h12M2 10h12M4 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z" stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      ),
    },
    {
      label: "Google Ads",
      side: "left",
      top: "32%",
      color: "bg-accent-butter",
      iconBg: "bg-accent-butter",
      icon: (
        <path d="M8 1.5l5.5 9.5h-11L8 1.5z M8 7L10.5 14h-5L8 7z" fill="currentColor" />
      ),
    },
    {
      label: "Reviews & Reputation",
      side: "left",
      top: "58%",
      color: "bg-accent-blush",
      iconBg: "bg-accent-blush",
      icon: (
        <path d="M8 1l2 4.5 5 .5-3.7 3.3 1.2 5L8 11.7 3.5 14.3l1.2-5L1 6l5-.5L8 1z" fill="currentColor" />
      ),
    },
    {
      label: "Lead Response · 60s",
      side: "right",
      top: "12%",
      color: "bg-accent-sky",
      iconBg: "bg-accent-sky",
      icon: (
        <path d="M8 2v6l4 2 M8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      ),
    },
    {
      label: "Front Desk AI",
      side: "right",
      top: "40%",
      color: "bg-accent-lavender",
      iconBg: "bg-accent-lavender",
      icon: (
        <path d="M5 6.5a3 3 0 0 1 6 0v1a3 3 0 0 1-6 0v-1z M2.5 13.5c0-2.5 2.5-4 5.5-4s5.5 1.5 5.5 4" stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      ),
    },
    {
      label: "ROI Dashboard",
      side: "right",
      top: "66%",
      color: "bg-brand-100",
      iconBg: "bg-brand-100",
      icon: (
        <path d="M2 13l4-5 3 3 5-7 M11 4h3v3" stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      ),
    },
  ];

  return (
    <div className="relative mx-auto w-full max-w-[820px]">
      <div className="relative aspect-[5/5.6] w-full">
        {/* Outer glow */}
        <div
          aria-hidden
          className="absolute -inset-4 rounded-[48px] blur-3xl opacity-70"
          style={{
            background:
              "radial-gradient(60% 60% at 50% 50%, rgba(67,69,75,0.45), transparent 70%)",
          }}
        />

        {/* Background grid panel */}
        <div
          aria-hidden
          className="absolute inset-[6%] rounded-[28px] overflow-hidden"
          style={{
            background:
              "linear-gradient(180deg, #faf9f7 0%, #faf9f7 100%)",
            border: "1px solid var(--color-border)",
          }}
        >
          <div
            className="absolute inset-0 opacity-60"
            style={{
              backgroundImage:
                "linear-gradient(rgba(67,69,75,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(67,69,75,0.08) 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />
        </div>

        {/* Connecting curves with animated dash */}
        <svg
          aria-hidden
          viewBox="0 0 600 672"
          className="absolute inset-0 h-full w-full"
          fill="none"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="rgba(67,69,75,0.05)" />
              <stop offset="50%" stopColor="rgba(67,69,75,0.55)" />
              <stop offset="100%" stopColor="rgba(67,69,75,0.05)" />
            </linearGradient>
          </defs>
          <g stroke="url(#lineGrad)" strokeWidth="1.6" fill="none">
            <path d="M120 90 C 220 110, 260 240, 300 336" />
            <path d="M120 240 C 220 250, 260 300, 300 336" />
            <path d="M120 430 C 220 410, 260 380, 300 336" />
            <path d="M480 130 C 380 170, 340 270, 300 336" />
            <path d="M480 300 C 400 310, 360 320, 300 336" />
            <path d="M480 480 C 380 440, 340 380, 300 336" />
          </g>
          <g stroke="rgba(67,69,75,0.7)" strokeWidth="1.4" strokeDasharray="3 6" fill="none">
            <path d="M120 90 C 220 110, 260 240, 300 336">
              <animate attributeName="stroke-dashoffset" from="0" to="-36" dur="4s" repeatCount="indefinite" />
            </path>
            <path d="M120 240 C 220 250, 260 300, 300 336">
              <animate attributeName="stroke-dashoffset" from="0" to="-36" dur="4.5s" repeatCount="indefinite" />
            </path>
            <path d="M120 430 C 220 410, 260 380, 300 336">
              <animate attributeName="stroke-dashoffset" from="0" to="-36" dur="5s" repeatCount="indefinite" />
            </path>
            <path d="M480 130 C 380 170, 340 270, 300 336">
              <animate attributeName="stroke-dashoffset" from="0" to="36" dur="4.2s" repeatCount="indefinite" />
            </path>
            <path d="M480 300 C 400 310, 360 320, 300 336">
              <animate attributeName="stroke-dashoffset" from="0" to="36" dur="3.8s" repeatCount="indefinite" />
            </path>
            <path d="M480 480 C 380 440, 340 380, 300 336">
              <animate attributeName="stroke-dashoffset" from="0" to="36" dur="4.6s" repeatCount="indefinite" />
            </path>
          </g>
        </svg>

        {/* Central dashboard card */}
        <div className="absolute left-1/2 top-1/2 w-[58%] -translate-x-1/2 -translate-y-1/2">
          <div className="overflow-hidden rounded-[20px] border border-border bg-white shadow-[0_40px_80px_-30px_rgba(10,10,10,0.4)]">
            {/* Header bar */}
            <div className="flex items-center justify-between border-b border-border bg-subtle/60 px-4 py-3">
              <div className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-brand-400" />
                <span className="h-2 w-2 rounded-full bg-brand-300" />
                <span className="h-2 w-2 rounded-full bg-brand-400" />
              </div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-2.5 py-1 text-[10.5px] font-semibold uppercase tracking-[0.14em] text-ink shadow-card">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-500 animate-pulse" />
                Live · PracPros IQ
              </span>
            </div>

            {/* Image header */}
            <div className="relative aspect-[16/10] w-full overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1100&q=85"
                alt="Connected growth dashboard"
                fill
                sizes="(min-width: 1024px) 480px, 60vw"
                className="object-cover"
                unoptimized
              />
              <div
                aria-hidden
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(255,255,255,0) 30%, rgba(10,10,10,0.7) 100%)",
                }}
              />
              <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
                <div>
                  <div className="text-[10.5px] font-semibold uppercase tracking-[0.14em] text-white/85">
                    Pipeline · this month
                  </div>
                  <div className="mt-0.5 font-display text-[28px] font-semibold leading-none tracking-tight text-white">
                    +38%
                  </div>
                </div>
                <span className="rounded-full bg-brand-500/95 px-2 py-0.5 text-[10.5px] font-semibold text-white">
                  ▲ on target
                </span>
              </div>
            </div>

            {/* Mini-rows */}
            <div className="space-y-2 p-3">
              {[
                { label: "New patients", value: "126", pct: 78 },
                { label: "Booked from web", value: "84%", pct: 92 },
                { label: "Avg response time", value: "47s", pct: 96 },
              ].map((r) => (
                <div
                  key={r.label}
                  className="flex items-center gap-3 rounded-lg border border-border bg-subtle/50 px-3 py-2"
                >
                  <span className="flex-1 truncate text-[12px] font-medium text-ink">
                    {r.label}
                  </span>
                  <div className="h-1.5 w-20 overflow-hidden rounded-full bg-ink/10">
                    <div
                      className="h-full rounded-full bg-brand-500"
                      style={{ width: `${r.pct}%` }}
                    />
                  </div>
                  <span className="w-12 text-right text-[12px] font-semibold tabular-nums text-ink">
                    {r.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Central node dot below the card */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="relative h-3 w-3">
              <span className="absolute inset-0 rounded-full bg-brand-500" />
              <span className="absolute -inset-2 rounded-full bg-brand-500/30 animate-ping" />
            </div>
          </div>
        </div>

        {/* Floating node chips */}
        {nodes.map((n, i) => (
          <div
            key={n.label}
            className={`absolute z-10 inline-flex items-center gap-2.5 rounded-2xl border border-border bg-white py-2 pl-2 pr-3.5 shadow-card animate-float-soft ${
              n.side === "left" ? "left-0" : "right-0"
            }`}
            style={{
              top: n.top,
              animationDuration: `${6 + (i % 3)}s`,
              animationDelay: `${(i % 5) * 0.25}s`,
            }}
          >
            <span
              className={`grid h-7 w-7 shrink-0 place-items-center rounded-lg ${n.iconBg} text-ink/80`}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden>
                {n.icon}
              </svg>
            </span>
            <span className="text-[12.5px] font-semibold tracking-tight text-ink whitespace-nowrap">
              {n.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function Platform() {
  return (
    <section
      id="platform"
      className="relative isolate overflow-hidden py-20 md:py-28 text-ink"
      style={{ background: "#faf9f7" }}
    >
      {/* Soft brand grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-[1]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(67,69,75,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(67,69,75,0.05) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(ellipse 70% 70% at 50% 50%, black 30%, transparent 95%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 70% at 50% 50%, black 30%, transparent 95%)",
        }}
      />

      <div className="container-page relative">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:items-center">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-white/80 px-3 py-1 text-[12px] font-medium uppercase tracking-[0.14em] text-ink-soft backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-500" aria-hidden />
              The PracPros Platform
            </span>
            <h2 className="mt-5 font-display text-4xl md:text-5xl lg:text-[64px] leading-[1.04] font-semibold tracking-[-0.028em] text-ink">
              You Have Marketing.
              <span className="block">
                What You Don&rsquo;t Have Is a{" "}
                <span className="relative inline-block">
                  <span className="relative z-10" style={{ color: "#FF521C" }}>System</span>
                  <span
                    aria-hidden
                    className="absolute inset-x-0 bottom-1 h-3 -z-0 bg-accent-butter/60"
                    style={{ filter: "blur(0.5px)" }}
                  />
                </span>
                .
              </span>
            </h2>

            <div className="mt-6 space-y-5 text-[16.5px] leading-[1.65] text-ink-soft">
              <p>
                Most dental practices are failing because their marketing is
                fragmented. A website, maybe some SEO, Google Ads, a social
                media post here and there, a reputation tool that nobody checks,
                and a front desk handling inquiries manually at the speed of
                human reaction.
              </p>
              <p>
                That patchwork approach worked a decade ago. It doesn&rsquo;t
                anymore.
              </p>
              <p>
                Patients move fast. They search, compare, and contact multiple
                offices within minutes. They book with whoever responds first.
              </p>
              <p>
                The practice that wins is rarely the most skilled. It&rsquo;s
                the most systematic. It&rsquo;s the one with a connected growth
                engine that finds patients where they&rsquo;re searching,
                engages them before a competitor can, and converts inquiries
                into booked appointments without relying on a perfect front-desk
                day.
              </p>
              <p className="font-semibold text-ink">
                Most practices don&rsquo;t have that system.{" "}
                <span className="text-brand-600">PRACPROS builds it.</span>
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button
                href="#growth-audit"
                variant="primary"
                size="md"
                trailingIcon
              >
                Get a Free Growth Audit
              </Button>
              <Button
                href="#platform"
                size="md"
                variant="secondary"
              >
                Explore the platform
              </Button>
            </div>
          </div>

          <PlatformVisual />
        </div>
      </div>
    </section>
  );
}
