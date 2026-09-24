type WaveDividerProps = {
  variant?: "light" | "dark" | "warm";
  className?: string;
  animated?: boolean;
};

const fills = {
  light: "#FFFFFF",
  dark: "#1B2F5B",
  warm: "#F5F0EA",
};

export function WaveDivider({
  variant = "light",
  className = "",
  animated = false,
}: WaveDividerProps) {
  return (
    <div
      className={`w-full overflow-hidden leading-none ${animated ? "animate-wave-drift" : ""} ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="block w-[102%] -ml-[1%]"
        preserveAspectRatio="none"
      >
        <path
          d="M0 24C240 48 480 0 720 24C960 48 1200 0 1440 24V48H0V24Z"
          fill={fills[variant]}
        />
        <path
          d="M0 32C360 8 720 40 1080 16C1260 4 1380 20 1440 24"
          stroke="#F4622A"
          strokeWidth="1"
          strokeOpacity="0.35"
          fill="none"
        />
      </svg>
    </div>
  );
}
