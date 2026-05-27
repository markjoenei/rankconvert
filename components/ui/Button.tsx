import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "outline";
type Size = "sm" | "md" | "lg";

const base =
  "group inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-tight transition-all duration-200 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-brand-500 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap will-change-transform";

const variants: Record<Variant, string> = {
  primary:
    "bg-[#FF521C] text-white shadow-[0_10px_24px_-12px_rgba(255,82,28,0.55)] hover:bg-[#e0461a] hover:shadow-[0_16px_32px_-14px_rgba(255,82,28,0.6)] hover:-translate-y-[1px] active:translate-y-0",
  secondary:
    "bg-white text-ink border border-border hover:border-ink/30 hover:-translate-y-[1px] active:translate-y-0 shadow-[0_1px_0_rgba(67,69,75,0.05)]",
  ghost:
    "text-ink hover:bg-ink/[0.04]",
  outline:
    "border border-ink/15 text-ink hover:border-[#FF521C] hover:bg-[#FF521C] hover:text-white",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-[13px]",
  md: "h-11 px-5 text-[14px]",
  lg: "h-12 px-6 text-[15px]",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
  trailingIcon?: boolean;
};

type ButtonAsLinkProps = CommonProps &
  Omit<ComponentProps<typeof Link>, "className" | "children">;

export function Button({
  variant = "primary",
  size = "md",
  className = "",
  children,
  trailingIcon = false,
  ...rest
}: ButtonAsLinkProps) {
  const cls = `${base} ${variants[variant]} ${sizes[size]} ${className}`;
  return (
    <Link className={cls} {...rest}>
      <span>{children}</span>
      {trailingIcon && (
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          aria-hidden
          className="transition-transform duration-200 group-hover:translate-x-0.5"
        >
          <path
            d="M3 7h8m0 0L7.5 3.5M11 7l-3.5 3.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </Link>
  );
}
