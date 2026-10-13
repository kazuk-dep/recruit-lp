/**
 * 住宅・道路・地下の水道管をつないだ「街の断面図」。
 * 写真の代わりに仕事の全体像を伝えるためのシンプルなフラット図解。
 */
export function CityInfrastructureIllustration() {
  const navy = "#0F172A";
  const pipe = "#0284C7";

  return (
    <svg
      viewBox="0 0 360 230"
      className="h-auto w-full"
      role="img"
      aria-label="住宅と道路の地下を水道管が通っている街の断面図"
    >
      {/* 地下 */}
      <rect x="0" y="122" width="360" height="108" fill="#F0F9FF" />
      <path d="M0 152 H360" stroke="#E0F2FE" strokeWidth="1.5" strokeDasharray="4 6" />
      <line x1="0" y1="122" x2="360" y2="122" stroke={navy} strokeWidth="1.5" />

      {/* 住宅（左） */}
      <path d="M24 78 L58 50 L92 78" fill="none" stroke={navy} strokeWidth="1.5" strokeLinejoin="round" />
      <rect x="30" y="76" width="56" height="46" fill="#fff" stroke={navy} strokeWidth="1.5" />
      <rect x="40" y="88" width="12" height="12" fill="#E0F2FE" stroke={navy} strokeWidth="1.2" />
      <rect x="62" y="96" width="14" height="26" fill="#fff" stroke={navy} strokeWidth="1.2" />

      {/* 木 */}
      <circle cx="108" cy="96" r="11" fill="#D1FAE5" stroke="#059669" strokeWidth="1.2" />
      <line x1="108" y1="107" x2="108" y2="122" stroke="#059669" strokeWidth="1.5" />

      {/* 道路 */}
      <rect x="124" y="114" width="122" height="8" fill="#334155" />
      <path d="M130 118 H240" stroke="#fff" strokeWidth="1.2" strokeDasharray="8 7" />
      {/* マンホールと縦坑 */}
      <ellipse cx="185" cy="114" rx="9" ry="2.5" fill="#94A3B8" />
      <path d="M185 122 V186" stroke="#94A3B8" strokeWidth="1.2" strokeDasharray="3 4" />

      {/* 集合住宅（右） */}
      <rect x="262" y="58" width="72" height="64" fill="#fff" stroke={navy} strokeWidth="1.5" />
      {[0, 1, 2].map((row) =>
        [0, 1, 2].map((col) => (
          <rect
            key={`${row}-${col}`}
            x={272 + col * 20}
            y={68 + row * 16}
            width="11"
            height="9"
            fill="#E0F2FE"
            stroke={navy}
            strokeWidth="1"
          />
        )),
      )}

      {/* 給水管（本管から住宅へ） */}
      <path d="M58 190 V122" stroke={pipe} strokeWidth="4" />
      <path d="M298 190 V122" stroke={pipe} strokeWidth="4" />

      {/* 水道本管 */}
      <line x1="0" y1="190" x2="360" y2="190" stroke={pipe} strokeWidth="10" />
      {[30, 120, 240, 330].map((x) => (
        <rect key={x} x={x - 3} y="183" width="6" height="14" fill="#0369A1" />
      ))}
      {/* 水の流れ */}
      <path d="M140 190 h18 M152 186 l6 4 -6 4" stroke="#fff" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />

      {/* ラベル */}
      <g fontSize="10" fontWeight="600" fill="#475569">
        <text x="30" y="42">住宅</text>
        <text x="172" y="106">道路</text>
        <text x="262" y="50">集合住宅</text>
        <text x="12" y="216" fill={pipe}>水道管</text>
      </g>
    </svg>
  );
}
