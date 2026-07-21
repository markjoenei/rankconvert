"use client";

import { useEffect, useRef, useState } from "react";

type Variant = "up" | "down" | "left" | "right" | "scale" | "blur" | "fade";

export function Reveal({
  children,
  variant = "up",
  delay = 0,
  duration = 900,
  threshold = 0.12,
  className = "",
}: {
  children: React.ReactNode;
  variant?: Variant;
  delay?: number;
  duration?: number;
  threshold?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Fire immediately if the element is already in view on mount
    const rect = el.getBoundingClientRect();
    const vh = window.innerHeight || 0;
    if (rect.top < vh * 0.9 && rect.bottom > 0) {
      setVisible(true);
      return;
    }

    const io = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            setVisible(true);
            io.disconnect();
          }
        });
      },
      { threshold, rootMargin: "0px 0px -60px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);

  return (
    <div
      ref={ref}
      data-reveal={variant}
      data-in={visible ? "true" : "false"}
      className={`reveal ${className}`}
      style={{
        transitionDelay: `${delay}ms`,
        transitionDuration: `${duration}ms`,
      }}
    >
      {children}
    </div>
  );
}
