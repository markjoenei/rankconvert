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
    farCard: 280,
    midChip: 240,
    nearShape: 180,
    nearBar: 200,
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

      <div className="absolute left-[3%] top-[14%]" style={slide("left", SHIFT.farCard)}>
        <div
          className="w-[200px] rounded-xl border border-border bg-white p-3 shadow-card animate-float-soft"
          style={{ animationDuration: "7s" }}
        >
          <div className="flex items-center justify-between">
            <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-ink-soft">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-500 animate-pulse" />
              Live · PracPros IQ
            </span>
          </div>
          <div className="mt-2 font-display text-[26px] font-semibold leading-none tracking-[-0.02em] text-ink">
            +38%
          </div>
          <div className="text-[10.5px] font-medium uppercase tracking-[0.1em] text-muted">
            Pipeline this month
          </div>
          <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-ink/10">
            <div className="h-full w-[78%] rounded-full bg-brand-500" />
          </div>
        </div>
      </div>

      <div className="absolute left-[5%] top-[42%]" style={slide("left", SHIFT.midChip)}>
        <div
          className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-3 py-2 shadow-card animate-float-soft"
          style={{ animationDuration: "8s", animationDelay: "0.6s" }}
        >
          <span className="grid h-6 w-6 place-items-center rounded-full bg-accent-mint text-brand-700">
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden>
              <path d="M3 8L6.5 11.5L13 4.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          <div className="leading-tight">
            <div className="text-[11.5px] font-semibold text-ink">Booked · 1:30pm</div>
            <div className="text-[10.5px] text-muted">New patient · Whitening</div>
          </div>
        </div>
      </div>

      <div className="absolute left-[8%] bottom-[18%]" style={slide("left", SHIFT.nearShape)}>
        <svg width="84" height="84" viewBox="0 0 84 84" aria-hidden>
          <polygon points="42,6 78,72 6,72" fill="var(--color-accent-blush)" />
        </svg>
      </div>

      <div className="absolute left-[3%] bottom-[6%]" style={slide("left", SHIFT.nearBar)}>
        <svg
          viewBox="0 0 100 40"
          className="w-[90px] animate-float-soft"
          style={{ animationDuration: "6s", animationDelay: "0.3s" }}
          aria-hidden
        >
          <circle cx="14" cy="20" r="9" fill="var(--color-brand-500)" />
          <circle cx="40" cy="20" r="9" fill="var(--color-brand-300)" />
          <circle cx="66" cy="20" r="9" fill="var(--color-brand-500)" />
        </svg>
      </div>

      {/* ── RIGHT SIDE ────────────────────────────────────────── */}

      <div className="absolute right-[3%] top-[12%]" style={slide("right", SHIFT.farCard)}>
        <div
          className="w-[220px] rounded-xl border border-border bg-white p-3 shadow-card animate-float-soft"
          style={{ animationDuration: "8.5s" }}
        >
          <div className="flex items-center gap-2">
            <span className="grid h-7 w-7 place-items-center rounded-lg bg-accent-sky text-brand-700">
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden>
                <circle cx="8" cy="8" r="6.4" stroke="currentColor" strokeWidth="1.5" />
                <path d="M8 4.5V8L10.4 9.6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </span>
            <div className="leading-tight">
              <div className="text-[10.5px] font-medium uppercase tracking-[0.1em] text-muted">
                Avg response
              </div>
              <div className="font-display text-[20px] font-semibold tracking-[-0.02em] text-ink">
                47 sec
              </div>
            </div>
          </div>
          <div className="mt-2.5 grid grid-cols-7 gap-1">
            {[60, 45, 70, 38, 55, 32, 47].map((h, i) => (
              <div
                key={i}
                className="rounded-sm bg-brand-500/70"
                style={{ height: `${h * 0.3 + 6}px` }}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="absolute right-[5%] top-[44%]" style={slide("right", SHIFT.midChip)}>
        <div
          className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-3 py-2 shadow-card animate-float-soft"
          style={{ animationDuration: "7.5s", animationDelay: "0.4s" }}
        >
          <span className="grid h-6 w-6 place-items-center rounded-full bg-accent-butter text-brand-600">
            <svg width="14" height="14" viewBox="0 0 16 16" aria-hidden>
              <path d="M8 1l2 4.5 5 .5-3.7 3.3 1.2 5L8 11.7 3.5 14.3l1.2-5L1 6l5-.5L8 1z" fill="currentColor" />
            </svg>
          </span>
          <div className="leading-tight">
            <div className="text-[11.5px] font-semibold text-ink">4.9 ★ · 1,247 reviews</div>
            <div className="text-[10.5px] text-muted">+38 this week</div>
          </div>
        </div>
      </div>

      <div className="absolute right-[7%] bottom-[20%]" style={slide("right", SHIFT.nearShape)}>
        <svg width="92" height="92" viewBox="0 0 100 100" aria-hidden>
          <circle cx="50" cy="50" r="40" fill="none" stroke="var(--color-accent-lavender)" strokeWidth="10" />
          <circle cx="50" cy="50" r="14" fill="var(--color-brand-500)" />
        </svg>
      </div>

      <div className="absolute right-[3%] bottom-[8%]" style={slide("right", SHIFT.nearBar)}>
        <div className="w-[110px]">
          <div className="h-1.5 w-[80%] rounded-full bg-accent-butter mb-1.5" />
          <div className="h-1.5 w-[100%] rounded-full bg-brand-400 mb-1.5" />
          <div className="h-1.5 w-[62%] rounded-full bg-accent-sky" />
        </div>
      </div>
    </div>
  );
}
