"use client";

import { useEffect, useRef, useState } from "react";

type CountUpProps = {
  value: string;
  duration?: number;
};

/**
 * Parses a value like "412%", "47s", "4.9★", "6.4×", "−54%", "+3.2×" and
 * animates the numeric portion from 0 to the target when the element enters
 * the viewport. Leading sign and trailing suffix are preserved verbatim.
 */
export function CountUp({ value, duration = 1600 }: CountUpProps) {
  const match = /^([+\-−]?)([0-9]+(?:\.[0-9]+)?)([\s\S]*)$/.exec(value);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!match) return;
    const target = parseFloat(match[2]);
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true;
            const start = performance.now();
            const tick = (now: number) => {
              const t = Math.min(1, (now - start) / duration);
              const eased = 1 - Math.pow(1 - t, 3); // easeOutCubic
              setProgress(target * eased);
              if (t < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
          }
        });
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [match, duration]);

  if (!match) return <span>{value}</span>;
  const sign = match[1];
  const numStr = match[2];
  const suffix = match[3];
  const decimals = numStr.includes(".") ? numStr.split(".")[1].length : 0;
  const display = progress.toFixed(decimals);

  return (
    <span ref={ref}>
      {sign}
      {display}
      {suffix}
    </span>
  );
}
