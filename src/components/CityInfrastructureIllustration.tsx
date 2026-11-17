/**
 * 住宅・道路・地下の水道管／下水道管をつないだ「街の断面図」。
 * A＝建物の中の配管工事、B＝道路から住宅への引き込み工事 を記号で示す。
 * 記号の見た目は WorkSection の説明ブロックと揃えている。
 */
const NAVY = "#0F172A";

function Marker({ x, y, label }: { x: number; y: number; label: string }) {
  return (
    <g>
      <circle cx={x} cy={y} r="8.5" fill={NAVY} />
      <text x={x} y={y + 3.6} textAnchor="middle" fontSize="10" fontWeight="700" fill="#fff">
        {label}
      </text>
    </g>
  );
}

export function CityInfrastructureIllustration() {
  const navy = NAVY;
  const pipe = "#0284C7";
  const drain = "#64748B";

  return (
    <svg
      viewBox="0 0 360 248"
      className="h-auto w-full"
      role="img"
      aria-label="街の断面図。A：住宅や集合住宅の中の給排水配管。B：道路の下の水道管・下水道管から住宅へ配管を引き込む工事。"
    >
      {/* 地下 */}
      <rect x="0" y="122" width="360" height="126" fill="#F0F9FF" />
      <path d="M0 152 H360" stroke="#E0F2FE" strokeWidth="1.5" strokeDasharray="4 6" />
      <line x1="0" y1="122" x2="360" y2="122" stroke={navy} strokeWidth="1.5" />

      {/* 住宅（左） */}
      <path d="M24 78 L58 50 L92 78" fill="none" stroke={navy} strokeWidth="1.5" strokeLinejoin="round" />
      <rect x="30" y="76" width="56" height="46" fill="#fff" stroke={navy} strokeWidth="1.5" />
      <rect x="38" y="84" width="12" height="12" fill="#E0F2FE" stroke={navy} strokeWidth="1.2" />
      <rect x="64" y="96" width="14" height="26" fill="#fff" stroke={navy} strokeWidth="1.2" />
      {/* A：住宅内の給水・排水配管 */}
      <path d="M44 122 V108 H58 V100" stroke={pipe} strokeWidth="2.5" fill="none" strokeLinejoin="round" />
      <path d="M54 104 H62" stroke={pipe} strokeWidth="2.5" strokeLinecap="round" />
      <path d="M56 122 V112" stroke={drain} strokeWidth="2.5" />

      {/* 木 */}
      <circle cx="108" cy="96" r="11" fill="#D1FAE5" stroke="#059669" strokeWidth="1.2" />
      <line x1="108" y1="107" x2="108" y2="122" stroke="#059669" strokeWidth="1.5" />

      {/* 道路 */}
      <rect x="124" y="114" width="122" height="8" fill="#334155" />
      <path d="M130 118 H240" stroke="#fff" strokeWidth="1.2" strokeDasharray="8 7" />
      {/* マンホールと縦坑 */}
      <ellipse cx="185" cy="114" rx="9" ry="2.5" fill="#94A3B8" />
      <path d="M185 122 V218" stroke="#94A3B8" strokeWidth="1.2" strokeDasharray="3 4" />

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
      {/* A：集合住宅内の立て管 */}
      <path d="M288 122 V64" stroke={pipe} strokeWidth="2.5" />
      <path d="M308 122 V64" stroke={drain} strokeWidth="2.5" />

      {/* B：本管から住宅への引き込み（給水） */}
      <path d="M44 186 V122" stroke={pipe} strokeWidth="4" />
      <path d="M288 186 V122" stroke={pipe} strokeWidth="4" />
      {/* B：住宅から下水道管への引き込み（排水） */}
      <path d="M56 222 V122" stroke={drain} strokeWidth="4" />
      <path d="M308 222 V122" stroke={drain} strokeWidth="4" />

      {/* 水道本管 */}
      <line x1="0" y1="186" x2="360" y2="186" stroke={pipe} strokeWidth="10" />
      {[20, 120, 240, 340].map((x) => (
        <rect key={x} x={x - 3} y="179" width="6" height="14" fill="#0369A1" />
      ))}
      <path d="M140 186 h18 M152 182 l6 4 -6 4" stroke="#fff" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />

      {/* 下水道管 */}
      <line x1="0" y1="222" x2="360" y2="222" stroke={drain} strokeWidth="9" />

      {/* 記号 */}
      <Marker x={14} y={100} label="A" />
      <Marker x={347} y={90} label="A" />
      <Marker x={24} y={152} label="B" />
      <Marker x={268} y={152} label="B" />

      {/* ラベル */}
      <g fontSize="10" fontWeight="600" fill="#475569">
        <text x="30" y="42">住宅</text>
        <text x="172" y="106">道路</text>
        <text x="262" y="50">集合住宅</text>
        <text x="196" y="174" fill={pipe}>水道管</text>
        <text x="196" y="242" fill={drain}>下水道管</text>
      </g>
    </svg>
  );
}
