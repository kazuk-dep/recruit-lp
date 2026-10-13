type IconProps = { className?: string };

const base = {
  viewBox: "0 0 32 32",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

/** 技術：スパナ */
export function ToolIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M20.5 5.5a6 6 0 0 0-7.6 7.6L5.5 20.5a2.5 2.5 0 0 0 3.5 3.5l7.4-7.4a6 6 0 0 0 7.6-7.6l-3.6 3.6-3-.6-.6-3z" />
    </svg>
  );
}

/** 未経験から：芽 */
export function SproutIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M16 27V15" />
      <path d="M16 15c0-5-4-8-9-8 0 5 4 8 9 8z" />
      <path d="M16 18c0-4 3-7 8-7 0 4-3 7-8 7z" />
      <path d="M10 27h12" />
    </svg>
  );
}

/** 資格：証書 */
export function CertificateIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <rect x="5" y="6" width="22" height="16" rx="1" />
      <path d="M9 11h10M9 15h6" />
      <circle cx="22" cy="21" r="3.5" />
      <path d="M20.5 24l-1 4 2.5-1.2 2.5 1.2-1-4" />
    </svg>
  );
}

/** 自分に残る力：積み上がるブロック */
export function StackIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <rect x="5" y="20" width="22" height="6" />
      <rect x="8" y="13" width="16" height="7" />
      <rect x="12" y="6" width="8" height="7" />
    </svg>
  );
}
