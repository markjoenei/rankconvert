type EyebrowProps = {
  children: React.ReactNode;
  className?: string;
};

export function Eyebrow({ children, className = "" }: EyebrowProps) {
  return (
    <div
      className={`inline-flex items-center gap-2 rounded-full border border-border bg-white/60 px-3 py-1 text-[12px] font-medium uppercase tracking-[0.14em] text-muted backdrop-blur ${className}`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-brand-500" aria-hidden />
      {children}
    </div>
  );
}
