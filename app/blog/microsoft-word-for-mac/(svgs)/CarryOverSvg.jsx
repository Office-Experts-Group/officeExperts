// /app/blog/microsoft-word-for-mac/(svgs)/CarryOverSvg.jsx
// Map: what carries across from Windows Word to Word for Mac, and what does not.
// Hard-coded hex (sits on a light panel). Tokens: $accent #046999,
// $accent-light #e8f4fa, $text-primary #0d1b2a, $text-secondary #4a5568,
// slate #64748b / #cbd5e1 for the "does not carry across" rows.

const CARRIES = [
  { from: "Styles and tables", to: "Works the same" },
  { from: "Track Changes", to: "Works the same" },
  { from: "OneDrive and SharePoint", to: "Works the same" },
  { from: "PDF export and print", to: "Works the same" },
];

const DOES_NOT = [
  { from: "VBA macros", to: "Limited" },
  { from: "ActiveX and COM controls", to: "Unavailable" },
  { from: "Third-party add-ins", to: "Often unavailable" },
  { from: "Full Developer tab", to: "Reduced" },
];

export default function CarryOverSvg() {
  const rowHeight = 56;
  const firstGroupY = 84;
  const secondGroupY = 350;

  return (
    <svg
      viewBox="0 0 600 600"
      role="img"
      aria-labelledby="wfm-map-title wfm-map-desc"
      style={{ width: "100%", height: "auto", display: "block" }}
    >
      <title id="wfm-map-title">What carries across from Windows to Mac</title>
      <desc id="wfm-map-desc">
        Four everyday features work the same on both platforms: styles and
        tables, Track Changes, cloud storage and PDF export. Four
        Windows-specific features are limited or unavailable on Mac: VBA macros,
        ActiveX and COM controls, third-party add-ins and the full Developer
        tab.
      </desc>

      <text x="10" y="28" fontSize="16" fontWeight="700" fill="#0d1b2a">
        In Windows Word
      </text>
      <text
        x="590"
        y="28"
        textAnchor="end"
        fontSize="16"
        fontWeight="700"
        fill="#0d1b2a"
      >
        In Word for Mac
      </text>

      <text
        x="10"
        y="68"
        fontSize="14"
        fontWeight="700"
        letterSpacing="1"
        fill="#046999"
      >
        CARRIES ACROSS
      </text>
      {CARRIES.map((row, i) => {
        const y = firstGroupY + i * rowHeight;
        return (
          <g key={row.from}>
            <rect
              x="10"
              y={y}
              width="230"
              height="44"
              rx="10"
              fill="#ffffff"
              stroke="#cfdbe3"
            />
            <text x="26" y={y + 28} fontSize="15" fill="#0d1b2a">
              {row.from}
            </text>
            <line
              x1="252"
              y1={y + 22}
              x2="338"
              y2={y + 22}
              stroke="#046999"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <polygon
              points={`336,${y + 14} 350,${y + 22} 336,${y + 30}`}
              fill="#046999"
            />
            <rect
              x="360"
              y={y}
              width="230"
              height="44"
              rx="10"
              fill="#e8f4fa"
              stroke="#046999"
              strokeOpacity="0.4"
            />
            <text
              x="376"
              y={y + 28}
              fontSize="15"
              fontWeight="600"
              fill="#046999"
            >
              {row.to}
            </text>
          </g>
        );
      })}

      <text
        x="10"
        y="334"
        fontSize="14"
        fontWeight="700"
        letterSpacing="1"
        fill="#64748b"
      >
        DOES NOT CARRY ACROSS
      </text>
      {DOES_NOT.map((row, i) => {
        const y = secondGroupY + i * rowHeight;
        return (
          <g key={row.from}>
            <rect
              x="10"
              y={y}
              width="230"
              height="44"
              rx="10"
              fill="#ffffff"
              stroke="#cfdbe3"
            />
            <text x="26" y={y + 28} fontSize="15" fill="#0d1b2a">
              {row.from}
            </text>
            <line
              x1="252"
              y1={y + 22}
              x2="338"
              y2={y + 22}
              stroke="#64748b"
              strokeWidth="2.5"
              strokeDasharray="6 6"
              strokeLinecap="round"
            />
            <polygon
              points={`336,${y + 14} 350,${y + 22} 336,${y + 30}`}
              fill="#64748b"
            />
            <rect
              x="360"
              y={y}
              width="230"
              height="44"
              rx="10"
              fill="#f1f5f9"
              stroke="#94a3b8"
              strokeDasharray="5 4"
            />
            <text
              x="376"
              y={y + 28}
              fontSize="15"
              fontWeight="600"
              fill="#475569"
            >
              {row.to}
            </text>
          </g>
        );
      })}
    </svg>
  );
}
