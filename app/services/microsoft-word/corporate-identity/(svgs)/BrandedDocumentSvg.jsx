// /services/microsoft-word/corporate-identity/(svgs)/BrandedDocumentSvg.jsx
//
// SVG attributes can't read SCSS variables, so the hex values below mirror
// the globals.scss tokens:
//   accent #046999 · accent-on-dark #6fc3e8 · accent-dark #034e72
//   accent-light #e8f4fa · text-primary #0d1b2a · line #e3e8ec
//   line-strong #d4d6d9 · text-muted #9a9da1 · light-bg #f7f8f9
//
// The numbered markers (1–5) match the numbered tiles in
// CorporateIdentityBento.jsx — keep the two in sync if either is reordered.

const markers = [
  { n: "1", x: 360, y: 62, zone: { x: 56, y: 40, w: 288, h: 44 } },
  { n: "2", x: 40, y: 128, zone: { x: 56, y: 104, w: 216, h: 48 } },
  { n: "3", x: 360, y: 180, zone: { x: 56, y: 158, w: 288, h: 44 } },
  { n: "4", x: 40, y: 382, zone: { x: 56, y: 324, w: 288, h: 116 } },
  { n: "5", x: 360, y: 476, zone: { x: 56, y: 466, w: 288, h: 20 } },
];

const css = `
  .bds-pulse {
    transform-box: fill-box;
    transform-origin: center;
    animation: bds-pulse 2.8s ease-out infinite;
  }
  @keyframes bds-pulse {
    0%   { transform: scale(1);   opacity: 0.55; }
    100% { transform: scale(2);   opacity: 0; }
  }
  @media (prefers-reduced-motion: reduce) {
    .bds-pulse { animation: none; opacity: 0; }
  }
`;

export const BrandedDocumentSvg = () => (
  <svg
    viewBox="0 0 400 520"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-labelledby="bds-title"
  >
    <title id="bds-title">
      A branded Word document with five highlighted zones: header and logo,
      heading styles, locked content controls, a branded table, and a footer
      with page numbering.
    </title>
    <style>{css}</style>

    <defs>
      <filter
        id="bds-shadow"
        x="-20%"
        y="-10%"
        width="140%"
        height="130%"
      >
        <feDropShadow
          dx="0"
          dy="18"
          stdDeviation="16"
          floodColor="#000"
          floodOpacity="0.35"
        />
      </filter>
      <clipPath id="bds-page">
        <rect x="40" y="20" width="320" height="470" rx="10" />
      </clipPath>
    </defs>

    {/* Page peeking out behind, for depth */}
    <rect
      x="56"
      y="34"
      width="320"
      height="470"
      rx="10"
      fill="#1a2a3a"
      stroke="#ffffff"
      strokeOpacity="0.08"
      transform="rotate(3 216 270)"
    />

    {/* Main page */}
    <g filter="url(#bds-shadow)">
      <rect x="40" y="20" width="320" height="470" rx="10" fill="#ffffff" />
    </g>
    <rect
      x="40"
      y="20"
      width="320"
      height="6"
      fill="#046999"
      clipPath="url(#bds-page)"
    />

    {/* 1 — Header & logo lockup */}
    <rect x="64" y="48" width="30" height="30" rx="8" fill="#046999" />
    <circle
      cx="79"
      cy="63"
      r="8"
      fill="none"
      stroke="#ffffff"
      strokeWidth="2.5"
    />
    <circle cx="79" cy="63" r="2.5" fill="#6fc3e8" />
    <rect x="102" y="52" width="86" height="9" rx="4" fill="#0d1b2a" />
    <rect
      x="102"
      y="67"
      width="58"
      height="4"
      rx="2"
      fill="#9a9da1"
      opacity="0.6"
    />
    <rect x="272" y="50" width="64" height="3.5" rx="1.75" fill="#cbd2d8" />
    <rect x="288" y="58" width="48" height="3.5" rx="1.75" fill="#cbd2d8" />
    <rect x="280" y="66" width="56" height="3.5" rx="1.75" fill="#cbd2d8" />
    <line x1="64" y1="92" x2="336" y2="92" stroke="#e3e8ec" />

    {/* 2 — Heading styles */}
    <rect x="64" y="112" width="200" height="14" rx="3" fill="#0d1b2a" />
    <rect x="64" y="136" width="130" height="9" rx="3" fill="#046999" />

    {/* 3 — Locked content controls */}
    <rect
      x="64"
      y="164"
      width="40"
      height="4"
      rx="2"
      fill="#9a9da1"
      opacity="0.6"
    />
    <rect
      x="206"
      y="164"
      width="30"
      height="4"
      rx="2"
      fill="#9a9da1"
      opacity="0.6"
    />
    {[64, 206].map((x, i) => (
      <g key={x}>
        <rect
          x={x}
          y="172"
          width="130"
          height="24"
          rx="5"
          fill="#046999"
          fillOpacity="0.07"
          stroke="#046999"
          strokeWidth="1.2"
          strokeDasharray="4 3"
        />
        <rect
          x={x + 10}
          y="181"
          width={i === 0 ? 70 : 54}
          height="6"
          rx="3"
          fill="#0d1b2a"
          opacity="0.7"
        />
        {/* padlock */}
        <rect x={x + 108} y="181" width="10" height="8" rx="2" fill="#046999" />
        <path
          d={`M${x + 110} 181 v-2.5 a3 3 0 0 1 6 0 v2.5`}
          fill="none"
          stroke="#046999"
          strokeWidth="1.6"
        />
      </g>
    ))}

    {/* Body copy */}
    {[
      [216, 272],
      [227, 266],
      [238, 272],
      [249, 180],
    ].map(([y, w]) => (
      <rect
        key={y}
        x="64"
        y={y}
        width={w}
        height="4.5"
        rx="2.25"
        fill="#d4d6d9"
      />
    ))}
    <rect x="64" y="266" width="110" height="9" rx="3" fill="#046999" />
    {[
      [284, 272],
      [295, 250],
      [306, 140],
    ].map(([y, w]) => (
      <rect
        key={y}
        x="64"
        y={y}
        width={w}
        height="4.5"
        rx="2.25"
        fill="#d4d6d9"
      />
    ))}

    {/* 4 — Branded table */}
    <path d="M64 334 a4 4 0 0 1 4-4 h264 a4 4 0 0 1 4 4 v18 h-272 z" fill="#046999" />
    <rect x="76" y="338" width="52" height="5" rx="2.5" fill="#fff" opacity="0.9" />
    <rect x="196" y="338" width="30" height="5" rx="2.5" fill="#fff" opacity="0.9" />
    <rect x="292" y="338" width="34" height="5" rx="2.5" fill="#fff" opacity="0.9" />

    <rect x="64" y="372" width="272" height="20" fill="#f7f8f9" />
    <rect x="64" y="412" width="272" height="22" fill="#e8f4fa" />
    {[372, 392, 412].map((y) => (
      <line key={y} x1="64" y1={y} x2="336" y2={y} stroke="#e3e8ec" />
    ))}
    {[
      [352, 96],
      [372, 80],
      [392, 110],
    ].map(([y, w]) => (
      <g key={y}>
        <rect x="76" y={y + 7} width={w} height="5" rx="2.5" fill="#0d1b2a" opacity="0.6" />
        <rect x="196" y={y + 7} width="24" height="5" rx="2.5" fill="#9a9da1" />
        <rect x="294" y={y + 7} width="32" height="5" rx="2.5" fill="#9a9da1" />
      </g>
    ))}
    <rect x="76" y="420" width="44" height="6" rx="3" fill="#046999" />
    <rect x="288" y="420" width="38" height="6" rx="3" fill="#046999" />
    <rect
      x="64"
      y="330"
      width="272"
      height="104"
      rx="4"
      fill="none"
      stroke="#e3e8ec"
    />

    {/* 5 — Footer, pagination & markings */}
    <line x1="64" y1="462" x2="336" y2="462" stroke="#e3e8ec" />
    <rect x="64" y="468" width="66" height="14" rx="7" fill="#046999" fillOpacity="0.1" />
    <text
      x="97"
      y="478"
      textAnchor="middle"
      fontSize="6.5"
      fontWeight="700"
      letterSpacing="0.6"
      fill="#046999"
    >
      CONFIDENTIAL
    </text>
    <text x="200" y="478" textAnchor="middle" fontSize="7" fill="#9a9da1">
      v2.4
    </text>
    <text x="336" y="478" textAnchor="end" fontSize="7" fill="#9a9da1">
      Page 1 of 4
    </text>

    {/* Zone outlines + numbered markers */}
    {markers.map(({ n, x, y, zone }, i) => (
      <g key={n}>
        <rect
          x={zone.x}
          y={zone.y}
          width={zone.w}
          height={zone.h}
          rx="6"
          fill="none"
          stroke="#6fc3e8"
          strokeOpacity="0.55"
          strokeDasharray="3 3"
        />
        <circle
          className="bds-pulse"
          cx={x}
          cy={y}
          r="13"
          fill="none"
          stroke="#6fc3e8"
          strokeWidth="1.5"
          style={{ animationDelay: `${i * 0.45}s` }}
        />
        <circle cx={x} cy={y} r="13" fill="#6fc3e8" stroke="#111820" strokeWidth="2.5" />
        <text
          x={x}
          y={y}
          dy="0.35em"
          textAnchor="middle"
          fontSize="13"
          fontWeight="700"
          fill="#111820"
        >
          {n}
        </text>
      </g>
    ))}
  </svg>
);
