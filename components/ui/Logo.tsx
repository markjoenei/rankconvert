import Image from "next/image";

type LogoProps = {
  className?: string;
  imageClassName?: string;
  invert?: boolean;
};

export function Logo({
  className = "",
  imageClassName = "h-9 w-auto md:h-10",
  invert = false,
}: LogoProps) {
  return (
    <span className={`inline-flex items-center ${className}`}>
      <Image
        src="/brand/pracpros-logo-v2.png"
        alt="PracPros Dental Marketing"
        width={1091}
        height={229}
        priority
        className={`${imageClassName} ${invert ? "brightness-0 invert" : ""}`}
      />
    </span>
  );
}
