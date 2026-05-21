"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type Accent =
  | { kind: "triangle"; color: string }
  | { kind: "dots"; color: string; count: number }
  | { kind: "bars"; color1: string; color2: string }
  | { kind: "rings"; color: string };

type Scene = {
  key: string;
  src: string;
  alt: string;
  objectPosition?: string;
  scale?: number;
  bubble: string;
  stat: { value: string; label: string };
  chip: { dotColor: string; text: string };
  accent: Accent;
  accentLabel?: { text: string; tone: string };
};

const SCENES: Scene[] = [
  {
    key: "recall",
    src: "/dentists/recall.png",
    alt: "Smiling dental professional in blue scrubs with stethoscope",
    objectPosition: "center top",
    bubble: "Recall 600 overdue patients within minutes",
    stat: { value: "+22%", label: "production" },
    chip: { dotColor: "bg-brand-500", text: "0 missed calls today" },
    accent: { kind: "triangle", color: "var(--color-accent-blush)" },
    accentLabel: { text: "AI recall", tone: "bg-accent-butter text-ink" },
  },
  {
    key: "schedule",
    src: "/dentists/schedule.png",
    alt: "Female dentist with curly hair smiling, arms crossed",
    objectPosition: "center top",
    scale: 1.05,
    bubble: "Fill every chair-hour, automatically",
    stat: { value: "−42%", label: "no-shows" },
    chip: { dotColor: "bg-brand-500", text: "Chairs 96% booked this week" },
    accent: { kind: "bars", color1: "var(--color-brand-400)", color2: "var(--color-accent-butter)" },
    accentLabel: { text: "Smart scheduler", tone: "bg-accent-sky text-ink" },
  },
];

const ROTATION_MS = 5200;

export function HeroCollage() {
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => {
      setIdx((i) => (i + 1) % SCENES.length);
    }, ROTATION_MS);
    return () => clearInterval(t);
  }, [paused]);

  const scene = SCENES[idx];

  return (
    <div
      className="relative mx-auto w-full max-w-[1080px]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="relative mx-auto aspect-[16/9] w-full max-w-[980px]">
        {/* Base glow */}
        <div
          aria-hidden
          className="absolute inset-x-10 top-10 bottom-0 rounded-[40px] blur-3xl opacity-50 animate-scene-in"
          style={{
            background:
              "radial-gradient(60% 60% at 50% 50%, rgba(67,69,75,0.45), transparent 70%)",
            animationDelay: "0ms",
          }}
        />

        {/* Grid block backdrop — entrance wrapper (mounts once), inner keeps drift/pulse */}
        <div
          aria-hidden
          className="absolute -left-[12%] -right-[12%] top-[32%] bottom-0 animate-scene-in-up"
          style={{ animationDelay: "80ms" }}
        >
          <div
            className="absolute inset-0 rounded-[10px] overflow-hidden animate-grid-pulse"
            style={{
              background: "var(--color-accent-mint)",
              boxShadow: "0 30px 80px -30px rgba(0,0,0,0.55)",
              transformOrigin: "center",
            }}
          >
            <div
              className="absolute inset-0 animate-grid-drift"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(67,69,75,0.55) 1.5px, transparent 1.5px), linear-gradient(90deg, rgba(67,69,75,0.55) 1.5px, transparent 1.5px)",
                backgroundSize: "44px 44px",
              }}
            />
            <div
              className="absolute -inset-y-4 -inset-x-1/4 animate-marquee opacity-30"
              style={{
                background:
                  "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.55) 50%, transparent 100%)",
                width: "200%",
                animationDuration: "12s",
              }}
            />
          </div>
        </div>

        {/* Dynamic accent shape (changes per scene) */}
        <div
          key={`accent-${scene.key}`}
          className="absolute left-[22%] top-[8%] w-[16%] animate-scene-in-left"
          style={{ animationDelay: "60ms" }}
        >
          <div className="animate-wobble-soft">
            <AccentShape accent={scene.accent} />
          </div>
        </div>

        {/* Lavender block — entrance wrapper + inner float */}
        <div
          aria-hidden
          className="absolute right-[8%] top-[8%] h-[42%] w-[14%] animate-scene-in-right"
          style={{ animationDelay: "180ms" }}
        >
          <div
            className="absolute inset-0 rounded-md rotate-[6deg] animate-float-soft"
            style={{ background: "var(--color-brand-700)", animationDuration: "7s" }}
          />
        </div>

        {/* Yellow / brand diagonal bars (entrance + float) */}
        <div
          aria-hidden
          className="absolute right-[10%] bottom-[10%] h-[3.5%] w-[18%] animate-scene-in-up"
          style={{ animationDelay: "260ms" }}
        >
          <div
            className="absolute inset-0 rotate-[-30deg] rounded-sm animate-float-soft"
            style={{ background: "var(--color-accent-butter)", animationDuration: "5.5s" }}
          />
        </div>
        <div
          aria-hidden
          className="absolute right-[6%] bottom-[16%] h-[3.5%] w-[14%] animate-scene-in-up"
          style={{ animationDelay: "320ms" }}
        >
          <div
            className="absolute inset-0 rotate-[-30deg] rounded-sm animate-float-soft"
            style={{ background: "var(--color-brand-400)", animationDuration: "6.5s", animationDelay: "0.6s" }}
          />
        </div>

        {/* Small mint square (entrance + float, hover-fade) */}
        <div
          aria-hidden
          className="absolute right-[3%] bottom-[4%] h-[10%] w-[7%] animate-scene-in-up"
          style={{ animationDelay: "380ms" }}
        >
          <div
            className="absolute inset-0 rounded-sm cursor-pointer transition-opacity duration-300 hover:opacity-0 animate-float-soft"
            style={{ background: "var(--color-accent-mint)", animationDuration: "8s", animationDelay: "0.3s" }}
          />
        </div>

        {/* Brand dots (entrance + float) */}
        <div
          aria-hidden
          className="absolute left-[24%] bottom-[14%] w-[14%] animate-scene-in-up"
          style={{ animationDelay: "440ms" }}
        >
          <svg
            viewBox="0 0 200 80"
            className="block w-full animate-float-soft"
            style={{ animationDuration: "6s", animationDelay: "0.9s" }}
          >
            <circle cx="30" cy="40" r="22" fill="var(--color-brand-500)" />
            <circle cx="80" cy="40" r="22" fill="var(--color-brand-500)" />
            <circle cx="130" cy="40" r="22" fill="var(--color-brand-500)" />
          </svg>
        </div>

        {/* Portrait — all scenes stacked, cross-fade between them */}
        <div className="absolute left-1/2 top-[2%] h-[98%] w-[46%] -translate-x-1/2 animate-portrait-bob">
          <div
            className="relative h-full w-full"
            style={{ filter: "drop-shadow(0 30px 30px rgba(0,0,0,0.35))" }}
          >
            {SCENES.map((s, i) => {
              const active = i === idx;
              return (
                <div
                  key={s.key}
                  aria-hidden={!active}
                  className="absolute inset-0"
                  style={{
                    opacity: active ? 1 : 0,
                    transform: `translateY(${active ? 0 : 14}px) scale(${active ? 1 : 0.97})`,
                    transformOrigin: "center bottom",
                    transition:
                      "opacity 900ms cubic-bezier(0.22, 1, 0.36, 1), transform 900ms cubic-bezier(0.22, 1, 0.36, 1), filter 900ms ease-out",
                    filter: active ? "blur(0)" : "blur(6px)",
                    pointerEvents: active ? "auto" : "none",
                  }}
                >
                  <Image
                    src={s.src}
                    alt={s.alt}
                    fill
                    sizes="(min-width: 1024px) 460px, 50vw"
                    className="object-contain"
                    style={{
                      objectPosition: s.objectPosition ?? "center bottom",
                      transform: s.scale ? `scale(${s.scale})` : undefined,
                      transformOrigin: "center bottom",
                    }}
                    priority={i === 0}
                  />
                </div>
              );
            })}
            {scene.accentLabel ? (
              <span
                key={`label-${scene.key}`}
                className={`absolute left-1/2 -translate-x-1/2 bottom-2 inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] shadow-card animate-scene-in-up whitespace-nowrap ${scene.accentLabel.tone}`}
                style={{ animationDelay: "320ms" }}
              >
                <span className="h-1.5 w-1.5 rounded-full bg-ink/70" />
                {scene.accentLabel.text}
              </span>
            ) : null}
          </div>
        </div>

        {/* Chat-bubble callout (left) — keyed entrance + continuous float */}
        <div
          key={`bubble-${scene.key}`}
          className="absolute left-[2%] top-[28%] w-[36%] max-w-[360px] animate-scene-in-left"
          style={{ animationDelay: "140ms" }}
        >
          <div
            className="relative rounded-[14px] bg-white p-4 pl-3 shadow-[0_24px_50px_-20px_rgba(0,0,0,0.5)] animate-float-soft"
            style={{ animationDuration: "7s" }}
          >
            <span
              aria-hidden
              className="absolute -left-[10px] top-5 h-0 w-0"
              style={{
                borderTop: "10px solid transparent",
                borderBottom: "10px solid transparent",
                borderRight: "12px solid #ffffff",
              }}
            />
            <div className="flex items-start gap-3">
              <span
                aria-hidden
                className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full text-[12px] font-bold text-white"
                style={{ background: "var(--color-brand-500)" }}
              >
                P
              </span>
              <p className="font-display text-[15px] md:text-[18px] leading-[1.2] tracking-[-0.01em] text-ink">
                {scene.bubble}
              </p>
            </div>
          </div>
        </div>

        {/* Stat callout (right) — keyed entrance + continuous float */}
        <div
          key={`stat-${scene.key}`}
          className="absolute right-[4%] top-[18%] w-[18%] min-w-[140px] animate-scene-in-right"
          style={{ animationDelay: "220ms" }}
        >
          <div
            className="rounded-[10px] p-3 shadow-[0_24px_50px_-20px_rgba(0,0,0,0.5)] animate-float-soft"
            style={{
              background: "var(--color-brand-900)",
              animationDuration: "9s",
              animationDelay: "0.4s",
            }}
          >
            <div className="text-[10px] font-semibold uppercase tracking-[0.14em] text-white/70">
              {scene.stat.label}
            </div>
            <div className="mt-1 font-display text-[42px] md:text-[54px] leading-none font-semibold tracking-[-0.03em] text-white">
              {scene.stat.value}
            </div>
          </div>
        </div>

        {/* Bottom-left chip — keyed entrance + continuous float */}
        <div
          key={`chip-${scene.key}`}
          className="absolute left-[6%] bottom-[10%] animate-scene-in-up"
          style={{ animationDelay: "360ms" }}
        >
          <div
            className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-ink shadow-card animate-float-soft"
            style={{ animationDuration: "8s", animationDelay: "0.7s" }}
          >
            <span className={`h-1.5 w-1.5 rounded-full ${scene.chip.dotColor}`} />
            <span>{scene.chip.text}</span>
          </div>
        </div>
      </div>

      {/* Slider indicators (overlay on bottom of grid, no extra space below) */}
      <div className="pointer-events-none absolute inset-x-0 bottom-3 z-10 flex items-center justify-center gap-2">
        {SCENES.map((s, i) => (
          <button
            key={s.key}
            type="button"
            aria-label={`Show scene ${i + 1}`}
            onClick={() => setIdx(i)}
            className="group pointer-events-auto relative h-1.5 overflow-hidden rounded-full transition-all"
            style={{ width: i === idx ? 36 : 14 }}
          >
            <span className="absolute inset-0 bg-ink/25" />
            {i === idx && !paused ? (
              <span
                key={`bar-${s.key}-${idx}`}
                className="absolute inset-y-0 left-0 bg-ink"
                style={{
                  animation: `marquee-bar ${ROTATION_MS}ms linear forwards`,
                }}
              />
            ) : (
              <span
                className={`absolute inset-0 ${
                  i === idx ? "bg-ink" : "bg-ink/40 group-hover:bg-ink/70"
                }`}
              />
            )}
          </button>
        ))}
      </div>

      <style jsx>{`
        @keyframes marquee-bar {
          from {
            width: 0%;
          }
          to {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
}

function AccentShape({ accent }: { accent: Accent }) {
  switch (accent.kind) {
    case "triangle":
      return (
        <svg viewBox="0 0 200 200" className="w-full -rotate-[18deg]">
          <polygon points="100,10 190,180 10,180" fill={accent.color} />
        </svg>
      );
    case "dots":
      return (
        <svg viewBox="0 0 200 200" className="w-full">
          {Array.from({ length: accent.count }).map((_, i) => (
            <circle
              key={i}
              cx={30 + i * 45}
              cy={100 + (i % 2 === 0 ? -12 : 12)}
              r="20"
              fill={accent.color}
            />
          ))}
        </svg>
      );
    case "bars":
      return (
        <svg viewBox="0 0 200 200" className="w-full">
          <rect x="20" y="60" width="160" height="22" rx="4" transform="rotate(-12 100 71)" fill={accent.color1} />
          <rect x="20" y="110" width="120" height="22" rx="4" transform="rotate(-12 80 121)" fill={accent.color2} />
        </svg>
      );
    case "rings":
      return (
        <svg viewBox="0 0 200 200" className="w-full">
          <circle cx="100" cy="100" r="80" fill="none" stroke={accent.color} strokeWidth="18" />
          <circle cx="100" cy="100" r="40" fill={accent.color} />
        </svg>
      );
  }
}
