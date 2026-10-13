type MarkerTextProps = {
  children: React.ReactNode;
  color?: "blue" | "green";
  onDark?: boolean;
};

const COLORS: Record<string, Record<string, string>> = {
  blue:  { light: "rgba(186,230,252,0.75)", dark: "rgba(56,189,248,0.40)" },
  green: { light: "rgba(167,243,208,0.75)", dark: "rgba(52,211,153,0.40)" },
};

export function MarkerText({ children, color = "blue", onDark = false }: MarkerTextProps) {
  const fill = COLORS[color][onDark ? "dark" : "light"];
  return (
    <span
      style={{
        backgroundImage: `linear-gradient(transparent 55%, ${fill} 55%)`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
      }}
    >
      {children}
    </span>
  );
}
