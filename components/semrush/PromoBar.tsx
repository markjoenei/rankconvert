import Link from "next/link";

export function SemrushPromoBar() {
  return (
    <div
      className="w-full text-white text-[12px] sm:text-[13px]"
      style={{
        background:
          "linear-gradient(90deg, #8a6bff 0%, #c862ff 35%, #ff5a8d 65%, #ff7a3c 100%)",
      }}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 h-[34px] sm:h-[36px] flex items-center justify-center gap-2 sm:gap-3 text-center">
        <span className="font-bold uppercase tracking-wider">
          New 2026 Dental Growth Benchmark
        </span>
        <span className="hidden sm:inline opacity-60">·</span>
        <Link
          href="#"
          className="hidden sm:inline-flex items-center gap-1 font-medium underline-offset-2 hover:underline"
        >
          Get your free audit
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
            <path
              d="M3 6h6m0 0L6.5 3.5M9 6L6.5 8.5"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}
