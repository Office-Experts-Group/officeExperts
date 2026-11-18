// /app/services/microsoft-excel/excel-formulas-and-custom-formulas/(svgs)/FormulasIntroSvg.jsx

/*
  Intro diagram: a small sheet, the formula that reads it, and the result.
  Hex values and the tokens they match (globals.scss):
    #046999 $accent            #0a85bf lighter accent (gradient end)
    #e8f4fa $accent-light      #d0eaf6 accent tint (gradient end)
    #e2edf4 grid line          #4a5568 $text-secondary
    #ffffff $white
*/

const GRID_Y = [60, 120, 180, 240, 300, 360];
const GRID_X = [80, 160, 240, 320, 400, 480];
const HEADERS = [
  { x: 80, letter: "A", opacity: 0.9 },
  { x: 164, letter: "B", opacity: 0.75 },
  { x: 248, letter: "C", opacity: 0.6 },
  { x: 332, letter: "D", opacity: 0.45 },
];
const ROW_Y = [82, 122, 162, 202];
const CELL_OPACITY = [1, 0.7, 0.5, 0.4];
const COLUMN_A = ["1,240", "3,810", "2,090", "4,550"];
const COLUMN_B = ["0.18", "0.22", "0.15", "0.27"];
const COLUMN_C = ["=A2*B2", "=A3*B3", "=A4*B4", "=A5*B5"];
const COLUMN_D = ["223.20", "838.20", "313.50", "1228.50"];
const TAGS = [
  { y: 330, label: "VLOOKUP" },
  { y: 366, label: "INDEX/MATCH" },
  { y: 402, label: "SUMPRODUCT" },
];
const DOTS = [
  { cx: 460, cy: 50, r: 5, op: 0.35 },
  { cx: 475, cy: 68, r: 3, op: 0.2 },
  { cx: 490, cy: 42, r: 4, op: 0.25 },
];

const FormulasIntroSvg = () => (
  <svg
    viewBox="0 0 520 420"
    xmlns="http://www.w3.org/2000/svg"
    fontFamily="aptos"
    role="img"
    aria-labelledby="frm-intro-svg-title frm-intro-svg-desc"
  >
    <title id="frm-intro-svg-title">
      A formula turning sheet data into a result
    </title>
    <desc id="frm-intro-svg-desc">
      A small spreadsheet with units, rates and a formula column. Below it, a
      SUMIF formula adds up the totals where units are above 2,000 and returns
      2,380.20.
    </desc>
    <defs>
      <linearGradient id="frm-intro-cell" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#e8f4fa" />
        <stop offset="100%" stopColor="#d0eaf6" />
      </linearGradient>
      <linearGradient id="frm-intro-accent" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#046999" />
        <stop offset="100%" stopColor="#0a85bf" />
      </linearGradient>
      <filter
        id="frm-intro-shadow"
        x="-10%"
        y="-10%"
        width="120%"
        height="120%"
      >
        <feDropShadow
          dx="0"
          dy="4"
          stdDeviation="6"
          floodColor="#046999"
          floodOpacity="0.12"
        />
      </filter>
    </defs>

    {/* Grid background lines */}
    {GRID_Y.map((y) => (
      <line
        key={`h${y}`}
        x1="20"
        y1={y}
        x2="500"
        y2={y}
        stroke="#e2edf4"
        strokeWidth="1"
      />
    ))}
    {GRID_X.map((x) => (
      <line
        key={`v${x}`}
        x1={x}
        y1="20"
        x2={x}
        y2="400"
        stroke="#e2edf4"
        strokeWidth="1"
      />
    ))}

    {/* Header row */}
    {HEADERS.map(({ x, letter, opacity }) => (
      <g key={letter}>
        <rect
          x={x}
          y="40"
          width="80"
          height="32"
          rx="3"
          fill="#046999"
          opacity={opacity}
        />
        <text
          x={x + 40}
          y="61"
          textAnchor="middle"
          fill="#ffffff"
          fontSize="14"
          fontWeight="700"
          letterSpacing="1"
        >
          {letter}
        </text>
      </g>
    ))}

    {/* Data rows */}
    {ROW_Y.map((y, ri) => (
      <g key={`row${ri}`}>
        {HEADERS.map(({ x }, ci) => (
          <rect
            key={x}
            x={x}
            y={y}
            width="80"
            height="32"
            rx="2"
            fill="url(#frm-intro-cell)"
            opacity={CELL_OPACITY[ci]}
          />
        ))}
        <text
          x="120"
          y={y + 21}
          textAnchor="middle"
          fill="#4a5568"
          fontSize="14"
        >
          {COLUMN_A[ri]}
        </text>
        <text
          x="204"
          y={y + 21}
          textAnchor="middle"
          fill="#4a5568"
          fontSize="14"
        >
          {COLUMN_B[ri]}
        </text>
        <text
          x="288"
          y={y + 21}
          textAnchor="middle"
          fill="#046999"
          fontSize="14"
          fontWeight="600"
        >
          {COLUMN_C[ri]}
        </text>
        <text
          x="372"
          y={y + 21}
          textAnchor="middle"
          fill="#4a5568"
          fontSize="14"
        >
          {COLUMN_D[ri]}
        </text>
      </g>
    ))}

    {/* Formula bar */}
    <rect
      x="80"
      y="250"
      width="332"
      height="44"
      rx="4"
      fill="#ffffff"
      stroke="#046999"
      strokeWidth="1.5"
      filter="url(#frm-intro-shadow)"
    />
    <rect x="80" y="250" width="40" height="44" rx="4" fill="#046999" />
    <text
      x="100"
      y="277"
      textAnchor="middle"
      fill="#ffffff"
      fontSize="14"
      fontWeight="700"
    >
      fx
    </text>
    <text
      x="270"
      y="277"
      textAnchor="middle"
      fill="#046999"
      fontSize="14"
      fontWeight="600"
      fontFamily="monospace"
    >
      {'=SUMIF(A2:A5,">2000",D2:D5)'}
    </text>

    {/* Connector from the formula bar to the result */}
    <path
      d="M 350 294 L 350 312"
      stroke="#046999"
      strokeWidth="1.5"
      strokeDasharray="4 3"
      opacity="0.5"
    />

    {/* Result callout */}
    <rect
      x="288"
      y="312"
      width="124"
      height="72"
      rx="6"
      fill="url(#frm-intro-accent)"
      filter="url(#frm-intro-shadow)"
    />
    <text
      x="350"
      y="334"
      textAnchor="middle"
      fill="#ffffffbf"
      fontSize="14"
      fontWeight="700"
      letterSpacing="2"
    >
      RESULT
    </text>
    <text
      x="350"
      y="364"
      textAnchor="middle"
      fill="#ffffff"
      fontSize="20"
      fontWeight="800"
    >
      2,380.20
    </text>

    {/* Function tags */}
    {TAGS.map(({ y, label }) => (
      <g key={label}>
        <rect
          x="82"
          y={y - 18}
          width={label.length * 8.6 + 28}
          height="26"
          rx="13"
          fill="#e8f4fa"
        />
        <text x="94" y={y} fill="#046999" fontSize="14" fontWeight="700">
          {label}
        </text>
      </g>
    ))}

    {/* Accent dot cluster */}
    {DOTS.map(({ cx, cy, r, op }) => (
      <circle key={cx} cx={cx} cy={cy} r={r} fill="#046999" opacity={op} />
    ))}
  </svg>
);

export default FormulasIntroSvg;
