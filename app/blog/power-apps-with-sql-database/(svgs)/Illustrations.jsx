// /app/blog/power-apps-with-sql-database/(svgs)/Illustrations.jsx
// Five "Avoid" vs "Do this" sketches for the common mistakes section.
// Avoid panels: slate, dashed frame, messy. Do this panels: accent, clean.
// Decorative: aria-hidden, the card heading carries the meaning.
// Hex values map to tokens: #e8f4fa $accent-light, #046999 $accent,
// #0d1b2a $text-primary, #4a5568 $text-secondary, #ffffff $white.
// Slate (#64748b, #f1f5f9) is used only for the "Avoid" panels.

const SLATE = "#64748b";
const SLATE_BG = "#f1f5f9";
const ACCENT = "#046999";
const ACCENT_BG = "#e8f4fa";
const INK = "#0d1b2a";

const Frame = ({ children }) => (
  <svg
    viewBox="0 0 320 150"
    aria-hidden="true"
    focusable="false"
    fontFamily="aptos, sans-serif"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="8"
      y="6"
      width="144"
      height="138"
      rx="12"
      fill={SLATE_BG}
      stroke={SLATE}
      strokeWidth="1.5"
      strokeDasharray="5 4"
    />
    <rect
      x="168"
      y="6"
      width="144"
      height="138"
      rx="12"
      fill={ACCENT_BG}
      stroke={ACCENT}
      strokeOpacity="0.5"
      strokeWidth="1.5"
    />
    <text x="22" y="27" fontSize="14" fontWeight="700" fill={SLATE}>
      Avoid
    </text>
    <text x="182" y="27" fontSize="14" fontWeight="700" fill={ACCENT}>
      Do this
    </text>
    {children}
  </svg>
);

const Key = ({ x, y, s = 1, color }) => (
  <g
    transform={`translate(${x} ${y}) scale(${s})`}
    fill="none"
    stroke={color}
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="-14" cy="0" r="9" />
    <path d="M-5 0H22M14 0v8M22 0v6" />
  </g>
);

/* 1. Admin login vs a dedicated app user */
const AdminSketch = () => (
  <Frame>
    <g transform="rotate(-12 80 76)">
      <Key x={80} y={70} s={1.9} color={SLATE} />
    </g>
    <path
      d="M30 48l10 6M124 50l-9 7M28 98l11-5M126 100l-11-4"
      stroke={SLATE}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeDasharray="3 3"
    />
    <text
      x="80"
      y="128"
      fontSize="14"
      fontWeight="700"
      fill={SLATE}
      textAnchor="middle"
    >
      full admin access
    </text>

    <Key x={240} y={60} s={1} color={ACCENT} />
    <rect x="200" y="84" width="80" height="24" rx="12" fill={ACCENT} />
    <text
      x="240"
      y="101"
      fontSize="14"
      fontWeight="700"
      fill="#ffffff"
      textAnchor="middle"
    >
      EXECUTE
    </text>
    <text
      x="240"
      y="128"
      fontSize="14"
      fontWeight="700"
      fill={INK}
      textAnchor="middle"
    >
      app user only
    </text>
  </Frame>
);

const MiniTable = ({ x, y, color, fill = "#ffffff" }) => (
  <g>
    <rect
      x={x}
      y={y}
      width="44"
      height="52"
      rx="6"
      fill={fill}
      stroke={color}
      strokeWidth="1.5"
    />
    <path
      d={`M${x} ${y + 6}a6 6 0 0 1 6-6h32a6 6 0 0 1 6 6v8H${x}Z`}
      fill={color}
    />
    <path
      d={`M${x + 8} ${y + 26}h28M${x + 8} ${y + 38}h20`}
      stroke={color}
      strokeOpacity="0.5"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </g>
);

/* 2. No foreign key vs a declared foreign key */
const KeySketch = () => (
  <Frame>
    <MiniTable x={22} y={46} color={SLATE} />
    <MiniTable x={92} y={50} color={SLATE} />
    <path
      d="M66 74h8M82 76h6"
      stroke={SLATE}
      strokeWidth="2"
      strokeDasharray="3 3"
      strokeLinecap="round"
    />
    <text
      x="115"
      y="96"
      fontSize="16"
      fontWeight="700"
      fill={SLATE}
      textAnchor="middle"
    >
      ?
    </text>
    <text
      x="80"
      y="128"
      fontSize="14"
      fontWeight="700"
      fill={SLATE}
      textAnchor="middle"
    >
      orphan orders
    </text>

    <MiniTable x={182} y={48} color={ACCENT} />
    <MiniTable x={252} y={48} color={ACCENT} />
    <path d="M226 74h16" stroke={ACCENT} strokeWidth="2" />
    <path
      d="M242 74 252 68M242 74 252 74M242 74 252 80"
      stroke={ACCENT}
      strokeWidth="2"
      strokeLinecap="round"
    />
    <text
      x="240"
      y="128"
      fontSize="14"
      fontWeight="700"
      fill={INK}
      textAnchor="middle"
    >
      FOREIGN KEY
    </text>
  </Frame>
);

/* 3. Firewall open to everyone vs your IP only */
const FirewallSketch = () => (
  <Frame>
    <path
      d="M42 40v18M80 38v20M118 41v17"
      stroke={SLATE}
      strokeWidth="2"
      strokeLinecap="round"
      strokeDasharray="3 3"
    />
    <rect
      x="22"
      y="62"
      width="34"
      height="38"
      rx="4"
      fill={SLATE}
      fillOpacity="0.35"
      stroke={SLATE}
    />
    <rect
      x="104"
      y="62"
      width="34"
      height="38"
      rx="4"
      fill={SLATE}
      fillOpacity="0.35"
      stroke={SLATE}
    />
    <path
      d="M42 104v6M80 104v6M118 104v6"
      stroke={SLATE}
      strokeWidth="2"
      strokeLinecap="round"
      strokeDasharray="3 3"
    />
    <text
      x="80"
      y="130"
      fontSize="14"
      fontWeight="700"
      fill={SLATE}
      textAnchor="middle"
    >
      any IP address
    </text>

    <path
      d="M240 40v22"
      stroke={ACCENT}
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <path
      d="M234 56l6 8 6-8"
      fill="none"
      stroke={ACCENT}
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <rect
      x="182"
      y="68"
      width="50"
      height="38"
      rx="4"
      fill={ACCENT}
      fillOpacity="0.3"
      stroke={ACCENT}
    />
    <rect
      x="248"
      y="68"
      width="50"
      height="38"
      rx="4"
      fill={ACCENT}
      fillOpacity="0.3"
      stroke={ACCENT}
    />
    <text
      x="240"
      y="130"
      fontSize="14"
      fontWeight="700"
      fill={INK}
      textAnchor="middle"
    >
      your IP only
    </text>
  </Frame>
);

/* 4. Pulling every row vs shaping the result in SQL */
const RowsSketch = () => (
  <Frame>
    {[40, 47, 54, 61, 68, 75, 82, 89, 96].map((y, i) => (
      <rect
        key={y}
        x={34 + (i % 3) * 3}
        y={y}
        width={90 - (i % 4) * 6}
        height="5"
        rx="2.5"
        fill={SLATE}
        fillOpacity="0.55"
      />
    ))}
    <text
      x="80"
      y="124"
      fontSize="14"
      fontWeight="700"
      fill={SLATE}
      textAnchor="middle"
    >
      every row
    </text>

    {[38, 46, 54].map((y) => (
      <rect
        key={y}
        x="196"
        y={y}
        width="88"
        height="5"
        rx="2.5"
        fill={ACCENT}
        fillOpacity="0.4"
      />
    ))}
    <path d="M196 66h88l-30 22h-28Z" fill={ACCENT} />
    <rect x="218" y="92" width="44" height="5" rx="2.5" fill={ACCENT} />
    <rect x="218" y="100" width="44" height="5" rx="2.5" fill={ACCENT} />
    <text
      x="240"
      y="126"
      fontSize="14"
      fontWeight="700"
      fill={INK}
      textAnchor="middle"
    >
      only what is needed
    </text>
  </Frame>
);

/* 5. Dates stored as text vs real date types */
const TypesSketch = () => (
  <Frame>
    {[
      { y: 40, t: "12/4/26", r: -3 },
      { y: 64, t: "4 Dec", r: 2 },
      { y: 88, t: "Dec 4th?", r: -2 },
    ].map((c) => (
      <g key={c.t} transform={`rotate(${c.r} 80 ${c.y + 10})`}>
        <rect
          x="34"
          y={c.y}
          width="92"
          height="20"
          rx="5"
          fill="#ffffff"
          stroke={SLATE}
          strokeDasharray="4 3"
        />
        <text x="44" y={c.y + 15} fontSize="14" fill={SLATE}>
          {c.t}
        </text>
      </g>
    ))}
    <text
      x="80"
      y="128"
      fontSize="14"
      fontWeight="700"
      fill={SLATE}
      textAnchor="middle"
    >
      stored as text
    </text>

    <rect
      x="200"
      y="38"
      width="80"
      height="62"
      rx="9"
      fill="#ffffff"
      stroke={ACCENT}
      strokeWidth="1.5"
    />
    <path d="M200 47a9 9 0 0 1 9-9h62a9 9 0 0 1 9 9v13h-80Z" fill={ACCENT} />
    <path
      d="M216 34v8M264 34v8"
      stroke={INK}
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <text
      x="240"
      y="86"
      fontSize="14"
      fontWeight="700"
      fill={INK}
      textAnchor="middle"
    >
      2026-12-04
    </text>
    <text
      x="240"
      y="128"
      fontSize="14"
      fontWeight="700"
      fill={INK}
      textAnchor="middle"
    >
      real date type
    </text>
  </Frame>
);

export const MistakeSketches = [
  AdminSketch,
  KeySketch,
  FirewallSketch,
  RowsSketch,
  TypesSketch,
];
