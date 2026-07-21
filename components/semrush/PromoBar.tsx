import Link from "next/link";

export function SemrushPromoBar() {
  return (
    <div
      className="w-full text-white text-[12px] sm:text-[13px]"
      style={{
        background:
          "linear-gradient(90deg, #3b78c4 0%, #5b9bd5 35%, #f5c842 70%, #e6b830 100%)",
      }}
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 h-[34px] sm:h-[36px] flex items-center justify-center gap-2 sm:gap-3 text-center">
        <span className="font-bold uppercase tracking-wider">
          Free Business Growth Consultation — Limited spots available
        </span>
        <span className="hidden sm:inline opacity-70">·</span>
        <Link
          href="/contact"
          className="hidden sm:inline-flex items-center gap-1 font-medium underline-offset-2 hover:underline"
        >
          Book yours today
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
