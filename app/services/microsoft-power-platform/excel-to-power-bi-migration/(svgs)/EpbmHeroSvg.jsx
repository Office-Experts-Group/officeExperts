// /app/services/microsoft-power-platform/excel-to-power-bi-migration/(svgs)/EpbmHeroSvg.jsx

// Hero illustration: a cluttered spreadsheet feeding a live dashboard.
// The only animated SVG on the page: flowClass moves the dashed flow lines and
// liveClass pulses the "refreshed" dot. Both are reduced-motion safe (SCSS).
// Colours (globals.scss tokens):
//   #18232e $dark-surface   #046999 $accent   #6fc3e8 $accent-on-dark
//   #0eaa0e $success        white at 4-75% ($white-xx)

const COLS = [22, 74, 126, 178];
const ROWS = [146, 176, 206, 236, 266, 296];
const FILL = [
  [26, 18, 30, 14],
  [20, 28, 16, 24],
  [30, 12, 22, 28],
  [16, 24, 30, 18],
  [24, 30, 14, 22],
  [18, 16, 26, 30],
];
// "col-row" cells that feed the dashboard
const HIGHLIGHT = ["2-1", "3-3", "1-5"];
const BARS = [40, 62, 50, 78, 66, 92, 84];

const EpbmHeroSvg = ({ flowClass = "", liveClass = "" }) => (
  <svg
    viewBox="0 0 560 400"
    role="img"
    aria-labelledby="epbm-hero-title epbm-hero-desc"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title id="epbm-hero-title">
      Spreadsheet data flowing into a dashboard
    </title>
    <desc id="epbm-hero-desc">
      A crowded spreadsheet on the left sends selected cells through a single
      data model into a live dashboard on the right, with summary tiles, a bar
      chart, a donut chart and a trend line.
    </desc>

    <defs>
      <marker
        id="epbm-hero-arrow"
        viewBox="0 0 10 10"
        refX="8"
        refY="5"
        markerWidth="7"
        markerHeight="7"
        orient="auto-start-reverse"
      >
        <path d="M0 0 10 5 0 10Z" fill="#6fc3e8" />
      </marker>
    </defs>

    {/* Spreadsheet */}
    <text
      x="8"
      y="56"
      fontSize="14"
      fontWeight="700"
      letterSpacing="1.5"
      fill="rgba(255,255,255,0.55)"
    >
      SPREADSHEETS
    </text>
    <rect
      x="8"
      y="70"
      width="232"
      height="290"
      rx="16"
      fill="#18232e"
      stroke="rgba(255,255,255,0.12)"
    />
    {[30, 44, 58].map((cx) => (
      <circle key={cx} cx={cx} cy="92" r="4" fill="rgba(255,255,255,0.18)" />
    ))}
    <text x="74" y="96" fontSize="13" fill="rgba(255,255,255,0.55)">
      report_v7_FINAL.xlsx
    </text>
    <line x1="8" y1="110" x2="240" y2="110" stroke="rgba(255,255,255,0.08)" />
    {["A", "B", "C", "D"].map((letter, i) => (
      <text
        key={letter}
        x={COLS[i] + 24}
        y="134"
        fontSize="12"
        textAnchor="middle"
        fill="rgba(255,255,255,0.35)"
      >
        {letter}
      </text>
    ))}
    {ROWS.map((y, r) =>
      COLS.map((x, c) => {
        const lit = HIGHLIGHT.includes(`${c}-${r}`);
        return (
          <g key={`${c}-${r}`}>
            <rect
              x={x}
              y={y}
              width="48"
              height="24"
              rx="4"
              fill={lit ? "rgba(111,195,232,0.14)" : "rgba(255,255,255,0.04)"}
              stroke={lit ? "#6fc3e8" : "rgba(255,255,255,0.08)"}
            />
            <rect
              x={x + 8}
              y={y + 10}
              width={FILL[r][c]}
              height="4"
              rx="2"
              fill={lit ? "#6fc3e8" : "rgba(255,255,255,0.18)"}
            />
          </g>
        );
      }),
    )}
    <rect x="22" y="332" width="56" height="16" rx="4" fill="#046999" />
    <rect
      x="84"
      y="332"
      width="56"
      height="16"
      rx="4"
      fill="rgba(255,255,255,0.08)"
    />
    <rect
      x="146"
      y="332"
      width="56"
      height="16"
      rx="4"
      fill="rgba(255,255,255,0.08)"
    />

    {/* Flow into the model */}
    <g
      className={flowClass}
      fill="none"
      stroke="#6fc3e8"
      strokeWidth="2"
      strokeDasharray="6 6"
      strokeLinecap="round"
    >
      <path d="M240 188 C258 188 256 222 266 226" />
      <path d="M240 248 C256 248 256 234 266 232" />
      <path d="M240 308 C262 308 260 240 268 236" />
      <path d="M294 229 L310 229" markerEnd="url(#epbm-hero-arrow)" />
    </g>
    <circle
      cx="276"
      cy="229"
      r="18"
      fill="#046999"
      stroke="#6fc3e8"
      strokeWidth="2"
    />
    <path
      d="M268 222 h6 l6 7 -6 7 h-6 M280 229 h6"
      fill="none"
      stroke="#ffffff"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <text
      x="291"
      y="272"
      fontSize="12"
      textAnchor="middle"
      fill="rgba(255,255,255,0.55)"
    >
      Model
    </text>

    {/* Dashboard */}
    <text
      x="312"
      y="26"
      fontSize="14"
      fontWeight="700"
      letterSpacing="1.5"
      fill="#6fc3e8"
    >
      LIVE DASHBOARD
    </text>
    <rect
      x="312"
      y="40"
      width="240"
      height="340"
      rx="16"
      fill="#18232e"
      stroke="rgba(111,195,232,0.4)"
    />
    <circle
      className={liveClass}
      cx="334"
      cy="66"
      r="9"
      fill="rgba(14,170,14,0.35)"
    />
    <circle cx="334" cy="66" r="5" fill="#0eaa0e" />
    <text x="346" y="71" fontSize="12" fill="rgba(255,255,255,0.55)">
      Refreshed automatically
    </text>

    <rect
      x="328"
      y="88"
      width="100"
      height="56"
      rx="10"
      fill="rgba(255,255,255,0.06)"
    />
    <rect
      x="340"
      y="102"
      width="40"
      height="5"
      rx="2.5"
      fill="rgba(255,255,255,0.25)"
    />
    <rect x="340" y="116" width="56" height="14" rx="4" fill="#6fc3e8" />
    <rect
      x="436"
      y="88"
      width="100"
      height="56"
      rx="10"
      fill="rgba(255,255,255,0.06)"
    />
    <rect
      x="448"
      y="102"
      width="40"
      height="5"
      rx="2.5"
      fill="rgba(255,255,255,0.25)"
    />
    <rect
      x="448"
      y="116"
      width="48"
      height="14"
      rx="4"
      fill="rgba(255,255,255,0.75)"
    />
    <path
      d="M508 128 l7 -8 7 8"
      fill="none"
      stroke="#0eaa0e"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    <rect
      x="328"
      y="156"
      width="208"
      height="120"
      rx="10"
      fill="rgba(255,255,255,0.04)"
    />
    {BARS.map((h, i) => (
      <rect
        key={i}
        x={344 + i * 26}
        y={262 - h}
        width="14"
        height={h}
        rx="3"
        fill={i > 4 ? "#6fc3e8" : "#046999"}
      />
    ))}
    <polyline
      points={BARS.map((h, i) => `${351 + i * 26},${254 - h}`).join(" ")}
      fill="none"
      stroke="rgba(255,255,255,0.55)"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />

    <rect
      x="328"
      y="288"
      width="96"
      height="78"
      rx="10"
      fill="rgba(255,255,255,0.04)"
    />
    <circle
      cx="376"
      cy="327"
      r="22"
      fill="none"
      stroke="rgba(255,255,255,0.12)"
      strokeWidth="9"
    />
    <circle
      cx="376"
      cy="327"
      r="22"
      fill="none"
      stroke="#6fc3e8"
      strokeWidth="9"
      strokeDasharray="90 139"
      transform="rotate(-90 376 327)"
    />

    <rect
      x="432"
      y="288"
      width="104"
      height="78"
      rx="10"
      fill="rgba(255,255,255,0.04)"
    />
    <path
      d="M444 350 L460 340 L476 344 L492 326 L508 330 L524 312 L524 356 L444 356 Z"
      fill="rgba(4,105,153,0.35)"
    />
    <path
      d="M444 350 L460 340 L476 344 L492 326 L508 330 L524 312"
      fill="none"
      stroke="#6fc3e8"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default EpbmHeroSvg;
