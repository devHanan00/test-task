type HalcyonLogoProps = {
  variant?: "navy" | "white";
  className?: string;
};

export function HalcyonLogo({ variant = "navy", className = "" }: HalcyonLogoProps) {
  const src = variant === "white" ? "/halcyon/logo-white.svg" : "/halcyon/logo.svg";

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt="Halcyon"
      width={136}
      height={33}
      className={`h-[33px] w-[136px] ${className}`}
    />
  );
}
