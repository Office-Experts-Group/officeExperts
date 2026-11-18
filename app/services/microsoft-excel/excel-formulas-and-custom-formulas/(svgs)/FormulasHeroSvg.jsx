// /app/services/microsoft-excel/excel-formulas-and-custom-formulas/(svgs)/FormulasHeroSvg.jsx

/*
  Hero illustration: a formula bar, a small spreadsheet and a result badge,
  joined by dashed "wires" that run along the grid gutters. Sits directly on
  the dark hero background, no panel.

  Only this SVG animates. The hero module passes classes in:
    flowClass  dash-offset animation on the wires
    liveClass  pulse on the "Live" dot ring

  Hex values and the tokens they match (globals.scss):
    #111820 $dark-bg          #18232e $dark-surface
    #046999 $accent           #6fc3e8 $accent-on-dark
    #ffffff $white            #ffffffbf $white-75 (approx)
*/

const COL_X = [20, 152, 284, 416];
const COL_W = 124;
const ROW_Y = [106, 150, 194, 238];
const ROW_H = 36;
const HEADERS = ["Product", "State", "Units", "Total"];
const HEADER_OPACITY = [0.95, 0.8, 0.65, 0.5];
const ROWS = [
  ["Widget", "NSW", "1,240", "223.20"],
  ["Gasket", "VIC", "3,810", "838.20"],
  ["Bracket", "NSW", "2,090", "313.50"],
  ["Valve", "QLD", "4,550", "1,228.50"],
];
const HIGHLIGHT = new Set(["0-1", "0-3", "2-1", "2-3"]);

const CHIPS = [
  { x: 250, y: 354, w: 88, label: "VLOOKUP", filled: false },
  { x: 348, y: 354, w: 122, label: "INDEX/MATCH", filled: false },
  { x: 250, y: 396, w: 114, label: "SUMPRODUCT", filled: false },
  { x: 374, y: 396, w: 118, label: "Custom UDF", filled: true },
];

const FormulasHeroSvg = ({ flowClass = "", liveClass = "" }) => (
  <svg
    viewBox="0 0 560 440"
    xmlns="http://www.w3.org/2000/svg"
    fontFamily="aptos"
    aria-hidden="true"
    focusable="false"
  >
    {/* Formula bar */}
    <rect x="20" y="10" width="520" height="44" rx="6" fill="#18232e" />
    <rect x="20" y="10" width="48" height="44" rx="6" fill="#046999" />
    <text
      x="44"
      y="38"
      textAnchor="middle"
      fill="#ffffff"
      fontSize="16"
      fontWeight="700"
    >
      fx
    </text>
    <text
      x="82"
      y="38"
      fill="#6fc3e8"
      fontSize="15"
      fontWeight="600"
      fontFamily="monospace"
    >
      {'=SUMPRODUCT((B2:B5="NSW")*D2:D5)'}
    </text>
    <circle
      className={liveClass}
      cx="518"
      cy="32"
      r="5"
      fill="#6fc3e8"
      opacity="0.45"
    />
    <circle cx="518" cy="32" r="5" fill="#6fc3e8" />
    <text x="502" y="37" textAnchor="end" fill="#ffffffbf" fontSize="14">
      Live
    </text>

    {/* Column headers */}
    {COL_X.map((x, c) => (
      <g key={HEADERS[c]}>
        <rect
          x={x}
          y="64"
          width={COL_W}
          height="32"
          rx="4"
          fill="#046999"
          opacity={HEADER_OPACITY[c]}
        />
        <text x={x + 12} y="85" fill="#ffffff" fontSize="14" fontWeight="700">
          {HEADERS[c]}
        </text>
      </g>
    ))}

    {/* Data cells */}
    {ROWS.map((row, r) =>
      row.map((value, c) => {
        const hot = HIGHLIGHT.has(`${r}-${c}`);
        return (
          <g key={`${r}-${c}`}>
            <rect
              x={COL_X[c]}
              y={ROW_Y[r]}
              width={COL_W}
              height={ROW_H}
              rx="4"
              fill={hot ? "#6fc3e8" : "#ffffff"}
              opacity={hot ? 0.2 : 0.08}
            />
            {hot && (
              <rect
                x={COL_X[c]}
                y={ROW_Y[r]}
                width={COL_W}
                height={ROW_H}
                rx="4"
                fill="none"
                stroke="#6fc3e8"
                strokeWidth="1.5"
              />
            )}
            <text
              x={COL_X[c] + 12}
              y={ROW_Y[r] + 23}
              fill={c === 3 ? "#6fc3e8" : "#ffffffbf"}
              fontSize="14"
              fontWeight={c === 3 ? 700 : 400}
            >
              {value}
            </text>
          </g>
        );
      }),
    )}

    {/* Wires from the matching cells down to the result, along the gutters */}
    <path
      className={flowClass}
      d="M478 142 V146 H280 V334 H120 V352"
      fill="none"
      stroke="#6fc3e8"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeDasharray="6 6"
    />
    <path
      className={flowClass}
      d="M478 230 V234 H280"
      fill="none"
      stroke="#6fc3e8"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeDasharray="6 6"
    />
    <circle cx="478" cy="142" r="3.5" fill="#6fc3e8" />
    <circle cx="478" cy="230" r="3.5" fill="#6fc3e8" />
    <circle cx="120" cy="352" r="3.5" fill="#6fc3e8" />

    {/* Result badge */}
    <rect x="20" y="352" width="200" height="76" rx="8" fill="#046999" />
    <text
      x="38"
      y="378"
      fill="#ffffffbf"
      fontSize="14"
      fontWeight="700"
      letterSpacing="1.5"
    >
      NSW TOTAL
    </text>
    <text x="38" y="410" fill="#ffffff" fontSize="26" fontWeight="800">
      536.70
    </text>

    {/* Function chips */}
    {CHIPS.map(({ x, y, w, label, filled }) => (
      <g key={label}>
        <rect
          x={x}
          y={y}
          width={w}
          height="30"
          rx="15"
          fill={filled ? "#046999" : "#ffffff"}
          opacity={filled ? 1 : 0.1}
        />
        <text
          x={x + w / 2}
          y={y + 20}
          textAnchor="middle"
          fill={filled ? "#ffffff" : "#6fc3e8"}
          fontSize="14"
          fontWeight="700"
        >
          {label}
        </text>
      </g>
    ))}
  </svg>
);

export default FormulasHeroSvg;
