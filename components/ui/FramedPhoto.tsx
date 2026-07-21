import Image from "next/image";

export function FramedPhoto({
  src,
  alt,
  label,
  sublabel,
  aspectRatio = "1/1",
  sizes = "(max-width: 1024px) 100vw, 560px",
  theme = "dark",
  accentColor = "#f5c842",
}: {
  src: string;
  alt: string;
  label?: string;
  sublabel?: string;
  aspectRatio?: string;
  sizes?: string;
  theme?: "light" | "dark";
  accentColor?: string;
}) {
  const OFFSET = 20;

  return (
    <div
      className="relative"
      style={{
        paddingRight: OFFSET,
        paddingBottom: OFFSET,
      }}
    >
      {/* Offset accent block behind photo */}
      <div
        className="absolute rounded-md pointer-events-none"
        style={{
          top: OFFSET,
          left: OFFSET,
          right: 0,
          bottom: 0,
          background: accentColor,
          zIndex: 0,
        }}
        aria-hidden
      />

      {/* Photo on top */}
      <div
        className="relative rounded-md overflow-hidden"
        style={{
          aspectRatio,
          background: theme === "dark" ? "#0a0b10" : "#f6f6f8",
          boxShadow: "0 20px 50px -20px rgba(0,0,0,0.5)",
          zIndex: 1,
        }}
      >
        <Image src={src} alt={alt} fill className="object-cover" sizes={sizes} />

        {label && (
          <div
            className="absolute bottom-0 left-0 right-0 px-5 py-4 text-white"
            style={{ background: "linear-gradient(to top, rgba(0,0,0,0.85), transparent)" }}
          >
            <div className="text-[10px] font-bold uppercase tracking-widest text-[#f5c842] mb-1">
              {label}
            </div>
            {sublabel && <div className="text-[13px] font-semibold leading-tight">{sublabel}</div>}
          </div>
        )}
      </div>
    </div>
  );
}
