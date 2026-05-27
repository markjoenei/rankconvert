"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Scroll-driven side elements: when the section is centered in the viewport,
 * elements translate horizontally inward (left items shift right, right items
 * shift left). When far from the center, they sit at their resting outer
 * positions. The result reads as the elements "gathering" toward the centerpiece
 * as the user scrolls past.
 */
export function SideElements() {
  const ref = useRef<HTMLDivElement>(null);
  const [intensity, setIntensity] = useState(0);

  useEffect(() => {
    let raf = 0;

    const update = () => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const sectionCenter = rect.top + rect.height / 2;
      const viewportCenter = vh / 2;
      const range = rect.height / 2 + vh / 2;
      // t: -1 → section is below viewport, 0 → perfectly centered, +1 → above
      const t = Math.max(-1, Math.min(1, (sectionCenter - viewportCenter) / range));
      // Curve so the effect is gentler at edges and stronger near center.
      const i = Math.pow(1 - Math.abs(t), 1.5);
      setIntensity(i);
    };

    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  // Per-element max travel (px). Positive numbers; sign is applied in style.
  const SHIFT = {
    farCard: 240,
    midChip: 210,
    nearShape: 160,
    nearBar: 180,
  };

  // Reusable wrapper: handles scroll translation; inner div still floats.
  const slide = (side: "left" | "right", distance: number): React.CSSProperties => ({
    transform: `translateX(${(side === "left" ? 1 : -1) * intensity * distance}px)`,
    transition: "transform 120ms cubic-bezier(0.22, 1, 0.36, 1)",
    willChange: "transform",
  });

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none absolute inset-0 hidden lg:block"
    >
      {/* ── LEFT SIDE ─────────────────────────────────────────── */}

      {/* ─ Pipeline metric card ─ */}
      <div className="absolute left-[2%] top-[10%]" style={slide("left", SHIFT.farCard)}>
        <div
          className="group relative w-[240px] overflow-hidden rounded-2xl border border-border bg-white p-4 shadow-[0_24px_50px_-22px_rgba(67,69,75,0.35)] backdrop-blur-sm animate-float-soft"
          style={{ animationDuration: "7s" }}
        >
          {/* soft brand glow */}
          <div
            aria-hidden
            className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full blur-2xl opacity-50"
            style={{ background: "radial-gradient(circle, rgba(255,82,28,0.4), transparent 70%)" }}
          />
          <div className="relative flex items-center justify-between">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-50 px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.14em] text-brand-700">
              <span aria-hidden className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-500 opacity-60" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-brand-500" />
              </span>
              Live · IQ
            </span>
            <span className="font-mono text-[10px] text-muted">May</span>
          </div>
          <div className="relative mt-3 flex items-baseline gap-2">
            <span className="font-display text-[36px] font-semibold leading-none tracking-[-0.03em] text-ink">
              +38%
            </span>
            <span className="text-[11px] font-semibold text-brand-600">▲ on target</span>
          </div>
          <div className="relative text-[11px] font-medium uppercase tracking-[0.1em] text-muted">
            Pipeline this month
          </div>
          <div className="relative mt-3 h-1.5 w-full overflow-hidden rounded-full bg-ink/10">
            <div className="h-full w-[78%] origin-left rounded-full bg-gradient-to-r from-brand-500 to-brand-400" />
          </div>
        </div>
      </div>

      {/* ─ Booking chip ─ */}
      <div className="absolute left-[4%] top-[44%]" style={slide("left", SHIFT.midChip)}>
        <div
          className="group inline-flex items-center gap-3 rounded-2xl border border-border bg-white px-4 py-3 shadow-[0_18px_40px_-20px_rgba(67,69,75,0.35)] backdrop-blur-sm animate-float-soft"
          style={{ animationDuration: "8s", animationDelay: "0.6s" }}
        >
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-50 text-brand-700 shadow-card">
            <svg width="18" height="18" viewBox="0 0 16 16" fill="none" aria-hidden>
              <path d="M3 8L6.5 11.5L13 4.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          <div className="leading-tight">
            <div className="font-display text-[13.5px] font-semibold tracking-tight text-ink">
              Booked · Fri 1:30pm
            </div>
            <div className="mt-0.5 flex items-center gap-1.5 font-mono text-[10.5px] text-muted">
              <span aria-hidden className="h-1 w-1 rounded-full bg-brand-500 animate-pulse" />
              New patient · Whitening
            </div>
          </div>
        </div>
      </div>

      {/* ─ Decorative shape ─ */}
      <div className="absolute left-[6%] bottom-[18%]" style={slide("left", SHIFT.nearShape)}>
        <div className="relative">
          <svg width="96" height="96" viewBox="0 0 84 84" aria-hidden className="animate-wobble-soft">
            <polygon points="42,6 78,72 6,72" fill="var(--color-accent-blush)" />
          </svg>
          <span
            aria-hidden
            className="pointer-events-none absolute inset-0 blur-2xl opacity-40"
            style={{ background: "radial-gradient(circle at 50% 50%, rgba(255,82,28,0.35), transparent 70%)" }}
          />
        </div>
      </div>

      {/* ─ Dots row ─ */}
      <div className="absolute left-[3%] bottom-[6%]" style={slide("left", SHIFT.nearBar)}>
        <svg
          viewBox="0 0 100 40"
          className="w-[108px] animate-float-soft"
          style={{ animationDuration: "6s", animationDelay: "0.3s" }}
          aria-hidden
        >
          <circle cx="14" cy="20" r="10" fill="var(--color-brand-500)" />
          <circle cx="42" cy="20" r="10" fill="var(--color-brand-300)" />
          <circle cx="70" cy="20" r="10" fill="var(--color-brand-500)" />
        </svg>
      </div>

      {/* ── RIGHT SIDE ────────────────────────────────────────── */}

      {/* ─ Response-time card ─ */}
      <div className="absolute right-[2%] top-[10%]" style={slide("right", SHIFT.farCard)}>
        <div
          className="group relative w-[260px] overflow-hidden rounded-2xl border border-border bg-white p-4 shadow-[0_24px_50px_-22px_rgba(67,69,75,0.35)] backdrop-blur-sm animate-float-soft"
          style={{ animationDuration: "8.5s" }}
        >
          <div
            aria-hidden
            className="pointer-events-none absolute -left-8 -bottom-8 h-24 w-24 rounded-full blur-2xl opacity-50"
            style={{ background: "radial-gradient(circle, rgba(255,82,28,0.35), transparent 70%)" }}
          />
          <div className="relative flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-50 text-brand-700 shadow-card">
              <svg width="20" height="20" viewBox="0 0 16 16" fill="none" aria-hidden>
                <circle cx="8" cy="8" r="6.4" stroke="currentColor" strokeWidth="1.6" />
                <path d="M8 4.5V8L10.4 9.6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
            </span>
            <div className="leading-tight">
              <div className="text-[11px] font-medium uppercase tracking-[0.1em] text-muted">
                Avg response
              </div>
              <div className="font-display text-[26px] font-semibold tracking-[-0.02em] text-ink">
                47 sec
              </div>
            </div>
            <span className="ml-auto inline-flex items-center gap-1 rounded-full bg-brand-50 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-brand-700">
              24/7
            </span>
          </div>
          <div className="relative mt-3 grid grid-cols-7 gap-1.5">
            {[60, 45, 70, 38, 55, 32, 47].map((h, i) => (
              <div
                key={i}
                className="rounded-sm bg-gradient-to-t from-brand-500 to-brand-300 opacity-90"
                style={{ height: `${h * 0.4 + 8}px` }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* ─ Review chip ─ */}
      <div className="absolute right-[4%] top-[44%]" style={slide("right", SHIFT.midChip)}>
        <div
          className="group inline-flex items-center gap-3 rounded-2xl border border-border bg-white px-4 py-3 shadow-[0_18px_40px_-20px_rgba(67,69,75,0.35)] backdrop-blur-sm animate-float-soft"
          style={{ animationDuration: "7.5s", animationDelay: "0.4s" }}
        >
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-50 text-brand-700 shadow-card">
            <svg width="18" height="18" viewBox="0 0 16 16" aria-hidden>
              <path d="M8 1l2 4.5 5 .5-3.7 3.3 1.2 5L8 11.7 3.5 14.3l1.2-5L1 6l5-.5L8 1z" fill="currentColor" />
            </svg>
          </span>
          <div className="leading-tight">
            <div className="font-display text-[14.5px] font-semibold tracking-tight text-ink">
              4.9 ★ · 1,247 reviews
            </div>
            <div className="mt-0.5 flex items-center gap-1.5 font-mono text-[10.5px] text-brand-600">
              <svg width="9" height="9" viewBox="0 0 9 9" aria-hidden>
                <path d="M1 6L4.5 2.5L7 5L8 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              </svg>
              +38 this week
            </div>
          </div>
        </div>
      </div>

      {/* ─ Ring decoration ─ */}
      <div className="absolute right-[5%] bottom-[18%]" style={slide("right", SHIFT.nearShape)}>
        <div className="relative">
          <svg width="108" height="108" viewBox="0 0 100 100" aria-hidden className="animate-wobble-soft">
            <circle cx="50" cy="50" r="42" fill="none" stroke="var(--color-brand-200)" strokeWidth="10" />
            <circle cx="50" cy="50" r="16" fill="var(--color-brand-500)" />
          </svg>
          <span
            aria-hidden
            className="pointer-events-none absolute inset-0 blur-2xl opacity-50"
            style={{ background: "radial-gradient(circle at 50% 50%, rgba(255,82,28,0.4), transparent 70%)" }}
          />
        </div>
      </div>

      {/* ─ Channel bars ─ */}
      <div className="absolute right-[3%] bottom-[7%]" style={slide("right", SHIFT.nearBar)}>
        <div className="w-[140px] rounded-2xl border border-border bg-white p-3 shadow-card animate-float-soft" style={{ animationDuration: "9s", animationDelay: "0.8s" }}>
          <div className="text-[9.5px] font-semibold uppercase tracking-[0.14em] text-muted">
            Channels
          </div>
          <div className="mt-2 space-y-1.5">
            <div className="h-2 w-[80%] rounded-full bg-brand-500" />
            <div className="h-2 w-[100%] rounded-full bg-brand-300" />
            <div className="h-2 w-[62%] rounded-full bg-brand-200" />
          </div>
        </div>
      </div>
    </div>
  );
}
