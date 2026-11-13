// /app/services/microsoft-power-platform/excel-to-power-bi-migration/(svgs)/EpbmApproachArt.jsx

// Illustrations for the three options in EpbmApproach ($light-bg section).
// Each sits in a solid tile: EpbmFullMigrationArt on $accent, the other two on
// $dark-bg, so the strokes are light. Decorative (aria-hidden).
// Colours (globals.scss tokens):
//   #6fc3e8 $accent-on-dark   #046999 $accent   white at 15-90% ($white-xx)

const svgProps = {
  viewBox: "0 0 120 80",
  xmlns: "http://www.w3.org/2000/svg",
  "aria-hidden": "true",
  focusable: "false",
};

const MiniSheet = ({ x, y, faded = false }) => (
  <g opacity={faded ? 0.45 : 1}>
    <rect
      x={x}
      y={y}
      width="38"
      height="44"
      rx="6"
      fill="rgba(255,255,255,0.15)"
      stroke="rgba(255,255,255,0.6)"
    />
    {[0, 1, 2, 3].map((r) => (
      <rect
        key={r}
        x={x + 7}
        y={y + 9 + r * 8}
        width="24"
        height="4"
        rx="2"
        fill="rgba(255,255,255,0.6)"
      />
    ))}
  </g>
);

const MiniDash = ({ x, y }) => (
  <g>
    <rect x={x} y={y} width="44" height="44" rx="6" fill="#ffffff" />
    {[14, 22, 18, 30].map((h, i) => (
      <rect
        key={i}
        x={x + 7 + i * 8}
        y={y + 38 - h}
        width="5"
        height={h}
        rx="1.5"
        fill={i === 3 ? "#6fc3e8" : "#046999"}
      />
    ))}
  </g>
);

// Spreadsheet retired, dashboard takes over (on $accent)
export const EpbmFullMigrationArt = () => (
  <svg {...svgProps}>
    <MiniSheet x={8} y={18} faded />
    <path
      d="M14 22 l26 36"
      stroke="rgba(255,255,255,0.7)"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M52 40 H66 M60 34 l6 6 -6 6"
      fill="none"
      stroke="#ffffff"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <MiniDash x={70} y={18} />
  </svg>
);

// Excel and Power BI side by side, linked (on $dark-bg)
export const EpbmHybridArt = () => (
  <svg {...svgProps}>
    <MiniSheet x={10} y={18} />
    <MiniDash x={66} y={18} />
    <path
      d="M50 32 C56 26 60 26 64 32"
      fill="none"
      stroke="#6fc3e8"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M64 48 C60 54 56 54 50 48"
      fill="none"
      stroke="#6fc3e8"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <circle cx="57" cy="40" r="4" fill="#6fc3e8" />
  </svg>
);

// A running dashboard with a health line and a wrench (on $dark-bg)
export const EpbmOngoingSupportArt = () => (
  <svg {...svgProps}>
    <rect
      x="10"
      y="14"
      width="78"
      height="52"
      rx="8"
      fill="rgba(255,255,255,0.1)"
      stroke="rgba(255,255,255,0.35)"
    />
    <path
      d="M18 46 H34 L40 32 L48 56 L54 40 L58 46 H80"
      fill="none"
      stroke="#6fc3e8"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle
      cx="96"
      cy="24"
      r="14"
      fill="#046999"
      stroke="#6fc3e8"
      strokeWidth="1.5"
    />
    <path
      d="M100 17 a5 5 0 0 0 -6.5 6 l-6 6 2.5 2.5 6 -6 a5 5 0 0 0 6 -6.5 l-3 3 -2.5 -.5 -.5 -2.5 Z"
      fill="#ffffff"
    />
  </svg>
);
