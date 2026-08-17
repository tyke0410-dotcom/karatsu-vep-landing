interface WaveDividerProps {
  color?: string;
  flip?: boolean;
  className?: string;
}

export default function WaveDivider({
  color = "oklch(0.98 0.005 80)",
  flip = false,
  className = "",
}: WaveDividerProps) {
  return (
    <div
      className={`wave-divider ${className}`}
      style={{ transform: flip ? "rotate(180deg)" : "none" }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1200 60"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,30 C200,60 400,0 600,30 C800,60 1000,0 1200,30 L1200,60 L0,60 Z"
          fill={color}
        />
      </svg>
    </div>
  );
}
