// /app/blog/power-bi-in-healthcare-analytics/(svgs)/Illustrations.jsx
// Five small "Avoid" versus "Do this" sketches for the common mistakes cards.
// Decorative: the card heading and text carry the meaning.
// Hex values map to globals.scss tokens:
//   #046999 $accent, #034e72 $accent-dark, #e8f4fa $accent-light,
//   #bcd9e6 ~ $accent-border on white, #f1f5f9 / #e2e8f0 / #cbd5e1 / #94a3b8 /
//   #64748b slate (the "avoid" palette), #c0392b $replace-x (tiny accents only).

const Frame = ({ children }) => (
  <svg
    viewBox="0 0 340 170"
    aria-hidden="true"
    focusable="false"
    fontFamily="aptos"
    style={{ width: "100%", height: "auto", display: "block" }}
  >
    <rect
      x="4"
      y="4"
      width="156"
      height="162"
      rx="12"
      fill="#f1f5f9"
      stroke="#94a3b8"
      strokeWidth="1.5"
      strokeDasharray="6 5"
    />
    <rect
      x="180"
      y="4"
      width="156"
      height="162"
      rx="12"
      fill="#e8f4fa"
      stroke="#046999"
      strokeWidth="1.5"
    />
    <text x="18" y="28" fontSize="14" fontWeight="700" fill="#64748b">
      Avoid
    </text>
    <text x="194" y="28" fontSize="14" fontWeight="700" fill="#046999">
      Do this
    </text>
    {children}
  </svg>
);

/* 1. A wall of charts versus a focused page */
export const FocusSketch = () => (
  <Frame>
    <g stroke="#94a3b8" strokeWidth="1.2">
      <rect
        x="18"
        y="44"
        width="60"
        height="40"
        rx="4"
        fill="#e2e8f0"
        transform="rotate(-4 48 64)"
      />
      <rect
        x="70"
        y="52"
        width="70"
        height="44"
        rx="4"
        fill="#cbd5e1"
        transform="rotate(3 105 74)"
      />
    </g>
    <circle cx="44" cy="116" r="18" fill="#cbd5e1" />
    <path d="M44 116V98a18 18 0 0 1 16 24z" fill="#94a3b8" />
    <g fill="#94a3b8">
      {[14, 28, 18, 34, 22].map((h, i) => (
        <rect
          key={i}
          x={72 + i * 12}
          y={148 - h}
          width="8"
          height={h}
          rx="1.5"
        />
      ))}
    </g>
    <path
      d="M96 108l10-12 8 8 10-14 10 6"
      fill="none"
      stroke="#64748b"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="142" cy="46" r="3" fill="#c0392b" />

    {[194, 238, 282].map((x) => (
      <g key={x}>
        <rect
          x={x}
          y="42"
          width="38"
          height="30"
          rx="6"
          fill="#ffffff"
          stroke="#bcd9e6"
        />
        <rect x={x + 7} y="52" width="22" height="6" rx="3" fill="#046999" />
        <rect x={x + 7} y="62" width="12" height="4" rx="2" fill="#bcd9e6" />
      </g>
    ))}
    <rect
      x="194"
      y="82"
      width="126"
      height="68"
      rx="6"
      fill="#ffffff"
      stroke="#bcd9e6"
    />
    <path d="M204 118h106" stroke="#bcd9e6" strokeDasharray="4 4" />
    <path
      d="M204 134l20-12 20 6 20-20 20 6 24-18"
      fill="none"
      stroke="#046999"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Frame>
);

/* 2. Building alone versus with a clinical champion */
export const ChampionSketch = () => (
  <Frame>
    <circle cx="36" cy="102" r="9" fill="#94a3b8" />
    <path d="M20 144a16 16 0 0 1 32 0z" fill="#cbd5e1" stroke="#94a3b8" />
    <rect
      x="66"
      y="70"
      width="78"
      height="56"
      rx="6"
      fill="#e2e8f0"
      stroke="#94a3b8"
      strokeWidth="1.5"
    />
    <text
      x="105"
      y="108"
      fontSize="28"
      fontWeight="700"
      fill="#94a3b8"
      textAnchor="middle"
    >
      ?
    </text>
    <path
      d="M105 126v10M92 136h26"
      stroke="#94a3b8"
      strokeWidth="1.5"
      strokeLinecap="round"
    />

    <circle cx="210" cy="104" r="9" fill="#046999" />
    <path d="M194 144a16 16 0 0 1 32 0z" fill="#046999" />
    <circle
      cx="310"
      cy="104"
      r="9"
      fill="#e8f4fa"
      stroke="#046999"
      strokeWidth="1.5"
    />
    <path
      d="M294 144a16 16 0 0 1 32 0z"
      fill="#bcd9e6"
      stroke="#046999"
      strokeWidth="1.5"
    />
    <rect
      x="232"
      y="72"
      width="54"
      height="44"
      rx="5"
      fill="#ffffff"
      stroke="#046999"
      strokeWidth="1.5"
    />
    <path
      d="M245 96l6 6 13-14"
      fill="none"
      stroke="#046999"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M259 116v8M248 124h22"
      stroke="#046999"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </Frame>
);

/* 3. Reporting from the live system versus from a modelled copy */
export const WarehouseSketch = () => (
  <Frame>
    <rect
      x="20"
      y="44"
      width="50"
      height="38"
      rx="5"
      fill="#e2e8f0"
      stroke="#94a3b8"
      strokeWidth="1.5"
    />
    <path
      d="M28 74V62M38 74V56M48 74V66"
      stroke="#94a3b8"
      strokeWidth="4"
      strokeLinecap="round"
    />
    <g fill="none" stroke="#64748b" strokeWidth="1.3" strokeLinecap="round">
      <path d="M40 82C46 112 98 90 112 112" />
      <path d="M52 82C50 104 90 128 108 120" />
      <path d="M30 82C34 118 100 140 118 124" />
      <path d="M62 82C70 96 84 104 124 110" />
    </g>
    <ellipse cx="120" cy="114" rx="20" ry="6" fill="#cbd5e1" stroke="#94a3b8" />
    <path d="M100 114v26a20 6 0 0 0 40 0v-26" fill="#cbd5e1" stroke="#94a3b8" />
    <circle cx="146" cy="46" r="3" fill="#c0392b" />

    <g fill="#ffffff" stroke="#046999" strokeWidth="1.2">
      <rect x="192" y="56" width="18" height="14" rx="3" />
      <rect x="192" y="80" width="18" height="14" rx="3" />
      <rect x="192" y="104" width="18" height="14" rx="3" />
    </g>
    <g fill="none" stroke="#046999" strokeWidth="1.5" strokeLinecap="round">
      <path d="M212 63h8l8 30M212 87h16M212 111h8l8-14" />
    </g>
    <ellipse cx="250" cy="92" rx="20" ry="6" fill="#bcd9e6" stroke="#046999" />
    <path d="M230 92v32a20 6 0 0 0 40 0V92" fill="#bcd9e6" stroke="#046999" />
    <path
      d="M272 108h12M279 103l6 5-6 5"
      fill="none"
      stroke="#046999"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <rect
      x="290"
      y="84"
      width="38"
      height="48"
      rx="5"
      fill="#ffffff"
      stroke="#046999"
      strokeWidth="1.5"
    />
    <path
      d="M297 124V112M305 124V104M313 124V116"
      stroke="#046999"
      strokeWidth="4"
      strokeLinecap="round"
    />
  </Frame>
);

/* 4. Competing definitions versus one agreed definition */
export const DefinitionSketch = () => (
  <Frame>
    <g fill="none" strokeWidth="8" strokeLinecap="round">
      <path d="M28 122A24 24 0 0 1 76 122" stroke="#e2e8f0" />
      <path d="M28 122A24 24 0 0 1 44 100" stroke="#94a3b8" />
      <path d="M88 122A24 24 0 0 1 136 122" stroke="#e2e8f0" />
      <path d="M88 122A24 24 0 0 1 126 106" stroke="#94a3b8" />
    </g>
    <text
      x="82"
      y="82"
      fontSize="24"
      fontWeight="700"
      fill="#c0392b"
      textAnchor="middle"
    >
      ?
    </text>
    <rect x="32" y="134" width="40" height="6" rx="3" fill="#cbd5e1" />
    <rect x="92" y="134" width="40" height="6" rx="3" fill="#cbd5e1" />

    <g fill="none" strokeWidth="8" strokeLinecap="round">
      <path d="M208 122A24 24 0 0 1 256 122" stroke="#bcd9e6" />
      <path d="M208 122A24 24 0 0 1 252 108" stroke="#046999" />
    </g>
    <rect x="212" y="134" width="40" height="6" rx="3" fill="#bcd9e6" />
    <rect
      x="270"
      y="64"
      width="56"
      height="76"
      rx="6"
      fill="#ffffff"
      stroke="#046999"
      strokeWidth="1.5"
    />
    <path
      d="M278 80h40M278 90h40M278 100h28"
      stroke="#bcd9e6"
      strokeWidth="3"
      strokeLinecap="round"
    />
    <circle cx="298" cy="124" r="9" fill="#046999" />
    <path
      d="M293 124l4 4 7-8"
      fill="none"
      stroke="#ffffff"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Frame>
);

/* 5. Everyone sees everything versus role-based access */
export const AccessSketch = () => (
  <Frame>
    {[48, 68, 88, 108].map((y) => (
      <g key={y}>
        <circle cx="26" cy={y + 4} r="5" fill="#94a3b8" />
        <rect x="38" y={y} width="70" height="8" rx="4" fill="#94a3b8" />
        <rect x="114" y={y} width="26" height="8" rx="4" fill="#cbd5e1" />
      </g>
    ))}
    <rect x="118" y="132" width="22" height="16" rx="3" fill="#94a3b8" />
    <path
      d="M122 132v-8a7 7 0 0 1 13-3.5"
      fill="none"
      stroke="#64748b"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <circle cx="146" cy="46" r="3" fill="#c0392b" />

    {[48, 68, 88, 108].map((y, i) => (
      <g key={y}>
        <circle cx="204" cy={y + 4} r="5" fill="#046999" />
        {i % 2 === 0 ? (
          <rect x="216" y={y} width="70" height="8" rx="4" fill="#046999" />
        ) : (
          <path
            d={`M219 ${y + 4}H284`}
            stroke="#bcd9e6"
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray="2 6"
          />
        )}
        <rect x="292" y={y} width="26" height="8" rx="4" fill="#bcd9e6" />
      </g>
    ))}
    <rect x="296" y="132" width="22" height="16" rx="3" fill="#046999" />
    <path
      d="M300 132v-8a7 7 0 0 1 14 0v8"
      fill="none"
      stroke="#034e72"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <circle cx="198" cy="140" r="6" fill="#046999" />
    <circle cx="214" cy="140" r="6" fill="#bcd9e6" stroke="#046999" />
  </Frame>
);
