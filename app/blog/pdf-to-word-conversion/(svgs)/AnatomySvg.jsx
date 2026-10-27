// /app/blog/pdf-to-word-conversion/(svgs)/AnatomySvg.jsx
// Anatomy of a properly rebuilt Word page, with six numbered pins and left/right callouts.
// Theme values hard-coded: $accent #046999, $accent-light #e8f4fa, $text-primary #0d1b2a,
// $text-secondary #4a5568, $text-muted #9a9da1. Server component.

const CALLOUTS = [
  {
    n: 1,
    side: "left",
    y: 20,
    title: "Header and footer",
    lines: ["Set once, repeated on", "every page"],
  },
  {
    n: 2,
    side: "right",
    y: 58,
    title: "Real heading styles",
    lines: ["Navigation pane and", "contents list work"],
  },
  {
    n: 3,
    side: "left",
    y: 150,
    title: "Flowing paragraphs",
    lines: ["Text reflows when you", "edit, no manual breaks"],
  },
  {
    n: 4,
    side: "right",
    y: 220,
    title: "Rebuilt table",
    lines: ["True cells, borders and", "alignment, not text boxes"],
  },
  {
    n: 5,
    side: "left",
    y: 310,
    title: "Anchored image",
    lines: ["Wrapping and position", "stay with the text"],
  },
  {
    n: 6,
    side: "right",
    y: 408,
    title: "Fields and numbering",
    lines: ["Page numbers and cross-", "references update"],
  },
];

export default function AnatomySvg() {
  return (
    <svg
      viewBox="0 0 760 520"
      role="img"
      aria-labelledby="ptw-anatomy-title ptw-anatomy-desc"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "100%", height: "auto", display: "block" }}
    >
      <title id="ptw-anatomy-title">
        Anatomy of a properly rebuilt Word page
      </title>
      <desc id="ptw-anatomy-desc">
        A Word page with six numbered pins: header and footer, heading styles,
        flowing paragraphs, a rebuilt table, an anchored image and page-number
        fields.
      </desc>

      {/* Page */}
      <rect
        x="250"
        y="20"
        width="260"
        height="470"
        rx="10"
        fill="#ffffff"
        stroke="#cfd8dc"
        strokeWidth="1.5"
      />

      {/* Header */}
      <rect x="270" y="40" width="36" height="14" rx="3" fill="#046999" />
      <rect x="316" y="43" width="90" height="8" rx="3" fill="#cfd8dc" />
      <path d="M270 66h220" stroke="#e1e6ea" />

      {/* Title */}
      <rect
        x="270"
        y="88"
        width="170"
        height="16"
        rx="3"
        fill="#0d1b2a"
        fillOpacity="0.85"
      />
      <rect x="270" y="112" width="110" height="8" rx="3" fill="#9a9da1" />

      {/* Paragraph */}
      {[150, 166, 182, 198].map((y, i) => (
        <rect
          key={y}
          x="270"
          y={y}
          width={i === 3 ? 120 : 220}
          height="8"
          rx="3"
          fill="#cfd8dc"
        />
      ))}

      {/* Table */}
      <rect
        x="270"
        y="225"
        width="220"
        height="72"
        rx="4"
        fill="#ffffff"
        stroke="#046999"
      />
      <rect x="270" y="225" width="220" height="24" rx="4" fill="#046999" />
      <path
        d="M270 273h220M343 225v72M416 225v72"
        stroke="#046999"
        strokeOpacity="0.5"
      />
      <path d="M270 249h220" stroke="#046999" strokeOpacity="0.5" />

      {/* Image with wrapping text */}
      <rect
        x="270"
        y="318"
        width="80"
        height="64"
        rx="4"
        fill="#e8f4fa"
        stroke="#046999"
        strokeOpacity="0.5"
      />
      <path
        d="M278 372l22-20 16 14 12-10 14 16"
        fill="none"
        stroke="#046999"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      {[322, 338, 354, 370].map((y) => (
        <rect
          key={y}
          x="360"
          y={y}
          width="130"
          height="8"
          rx="3"
          fill="#cfd8dc"
        />
      ))}

      {/* Footer */}
      <path d="M270 430h220" stroke="#e1e6ea" />
      <text x="380" y="458" textAnchor="middle" fontSize="14" fill="#4a5568">
        Page 3 of 12
      </text>

      {/* Pins, connectors and callouts */}
      {CALLOUTS.map((c) => {
        const cy = c.y + 42;
        const left = c.side === "left";
        const boxX = left ? 20 : 540;
        const pinX = left ? 250 : 510;
        return (
          <g key={c.n}>
            <path
              d={left ? `M220 ${cy}H${pinX - 11}` : `M${pinX + 11} ${cy}H540`}
              stroke="#046999"
              strokeWidth="1.5"
              strokeDasharray="4 3"
            />
            <rect
              x={boxX}
              y={c.y}
              width="200"
              height="84"
              rx="10"
              fill="#e8f4fa"
              stroke="#046999"
              strokeOpacity="0.4"
            />
            <text
              x={boxX + 16}
              y={c.y + 26}
              fontSize="15"
              fontWeight="700"
              fill="#0d1b2a"
            >
              {c.title}
            </text>
            <text x={boxX + 16} y={c.y + 48} fontSize="14" fill="#4a5568">
              {c.lines[0]}
            </text>
            <text x={boxX + 16} y={c.y + 66} fontSize="14" fill="#4a5568">
              {c.lines[1]}
            </text>
            <circle
              cx={pinX}
              cy={cy}
              r="11"
              fill="#046999"
              stroke="#ffffff"
              strokeWidth="2"
            />
            <text
              x={pinX}
              y={cy + 5}
              textAnchor="middle"
              fontSize="14"
              fontWeight="700"
              fill="#ffffff"
            >
              {c.n}
            </text>
          </g>
        );
      })}
    </svg>
  );
}
