type MarkerTextProps = {
  children: React.ReactNode;
  color?: "blue" | "green";
  onDark?: boolean;
};

export function MarkerText({ children, color = "blue", onDark = false }: MarkerTextProps) {
  const bgClass = onDark
    ? color === "green"
      ? "bg-emerald-400/40"
      : "bg-sky-400/40"
    : color === "green"
    ? "bg-emerald-200/75"
    : "bg-sky-200/75";

  return (
    <span className="relative inline-block">
      <span
        aria-hidden
        className={`absolute left-0 right-0 bottom-[0.1em] h-[0.4em] rounded-sm ${bgClass}`}
      />
      <span className="relative">{children}</span>
    </span>
  );
}
