export function GoogleReviewsBadge({ rating = "5.0" }: { rating?: string }) {
  return (
    <div
      className="inline-flex items-center gap-2.5 pl-3.5 pr-4 py-2 rounded-full whitespace-nowrap"
      style={{
        background: "rgba(255,255,255,0.04)",
        border: "1px solid rgba(245,200,66,0.28)",
        boxShadow: "0 8px 24px -8px rgba(0,0,0,0.5)",
        backdropFilter: "blur(8px)",
      }}
    >
      {/* Google G logo */}
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden className="shrink-0">
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.27-4.74 3.27-8.1z" fill="#4285F4"/>
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.24 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84A11 11 0 0012 23z" fill="#34A853"/>
        <path d="M5.84 14.1a6.6 6.6 0 010-4.2V7.07H2.18a11 11 0 000 9.87l3.66-2.84z" fill="#FBBC05"/>
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1a11 11 0 00-9.82 6.07l3.66 2.84C6.71 7.3 9.14 5.38 12 5.38z" fill="#EA4335"/>
      </svg>

      <span className="text-[12px] font-bold text-white/90">Google Reviews</span>

      <span className="w-px h-4 bg-white/15" />

      <span className="text-[13px] font-black text-white">{rating}</span>

      <span className="flex items-center text-[#fbbc04]">
        {Array.from({ length: 5 }).map((_, i) => (
          <svg key={i} width="12" height="12" viewBox="0 0 12 12" fill="currentColor" aria-hidden>
            <path d="M6 0l1.6 4 4.4.4-3.3 2.9 1 4.3L6 9.4l-3.7 2.2 1-4.3L0 4.4 4.4 4 6 0z" />
          </svg>
        ))}
      </span>
    </div>
  );
}
