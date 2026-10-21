// app/services/dashboards/(svgs)/DashboardSvg.jsx
// Decorative dashboard illustration for DashboardsIntro.
// Colours are hex values matching the globals.scss tokens, because SCSS variables
// can't be read inside inline SVG. Gradient and filter IDs are prefixed "db-" so they
// can't clash with other SVGs on the page.

// KPI tiles across the top of the illustration
const kpis = [
  { x: 30, label: "REVENUE", value: "$1.24M", delta: "+12.4%", down: false },
  {
    x: 190,
    label: "GROSS MARGIN",
    value: "38.6%",
    delta: "+2.1 pts",
    down: false,
  },
  { x: 350, label: "OPEN ORDERS", value: "412", delta: "-3.8%", down: true },
];

// Bar chart values (pixel heights) and labels
const bars = [
  { label: "NSW", h: 120 },
  { label: "VIC", h: 96 },
  { label: "QLD", h: 74 },
  { label: "WA", h: 58 },
  { label: "SA", h: 40 },
  { label: "TAS", h: 24 },
];

// Points for the trend line, joined into a path below
const trend = [
  [330, 245],
  [352, 236],
  [374, 240],
  [396, 222],
  [418, 226],
  [440, 208],
  [462, 212],
  [476, 196],
];
const trendLine = trend
  .map(([x, y], i) => `${i ? "L" : "M"}${x} ${y}`)
  .join(" ");
const trendArea = `${trendLine} L476 255 L330 255 Z`;

// Donut maths: circumference of r=26 is ~163.4, 68% of that is ~111
const DONUT_CIRC = 163.4;
const DONUT_VALUE = 0.68;

export const DashboardSvg = () => (
  <svg
    viewBox="0 0 520 400"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    focusable="false"
  >
    <defs>
      <linearGradient id="db-area" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#046999" stopOpacity="0.25" />
        <stop offset="100%" stopColor="#046999" stopOpacity="0" />
      </linearGradient>
      <filter id="db-shadow" x="-10%" y="-10%" width="120%" height="120%">
        <feDropShadow
          dx="0"
          dy="6"
          stdDeviation="8"
          floodColor="#046999"
          floodOpacity="0.12"
        />
      </filter>
    </defs>

    {/* ── Window frame ── */}
    <rect
      x="10"
      y="10"
      width="500"
      height="380"
      rx="10"
      fill="#fff"
      stroke="rgba(0,0,0,0.08)"
      filter="url(#db-shadow)"
    />
    <path
      d="M10 46 V20 a10 10 0 0 1 10 -10 H500 a10 10 0 0 1 10 10 V46 Z"
      fill="#f7f8f9"
    />
    {[30, 44, 58].map((cx) => (
      <circle key={cx} cx={cx} cy="28" r="4" fill="#e2edf4" />
    ))}
    <text x="80" y="32" fontSize="10" fontWeight="700" fill="#4a5568">
      Sales overview
    </text>
    <text x="490" y="32" fontSize="8" fill="#9a9da1" textAnchor="end">
      Refreshed 2 min ago
    </text>

    {/* ── KPI tiles ── */}
    {kpis.map(({ x, label, value, delta, down }) => (
      <g key={label}>
        <rect x={x} y="62" width="140" height="70" rx="6" fill="#e8f4fa" />
        <text
          x={x + 14}
          y="82"
          fontSize="7.5"
          fontWeight="700"
          letterSpacing="1.5"
          fill="#4a5568"
        >
          {label}
        </text>
        <text x={x + 14} y="108" fontSize="20" fontWeight="800" fill="#0d1b2a">
          {value}
        </text>
        <text
          x={x + 14}
          y="124"
          fontSize="9"
          fontWeight="700"
          fill={down ? "#c0392b" : "#046999"}
        >
          {delta}
        </text>
      </g>
    ))}

    {/* ── Bar chart panel ── */}
    <rect
      x="30"
      y="148"
      width="270"
      height="222"
      rx="6"
      fill="#fff"
      stroke="rgba(0,0,0,0.08)"
    />
    <text x="46" y="170" fontSize="9" fontWeight="700" fill="#0d1b2a">
      Revenue by region
    </text>
    {[225, 265, 305].map((y) => (
      <line key={y} x1="46" y1={y} x2="286" y2={y} stroke="#f2f3f5" />
    ))}
    {bars.map(({ label, h }, i) => {
      const x = 52 + i * 38;
      return (
        <g key={label}>
          <rect
            x={x}
            y={345 - h}
            width="24"
            height={h}
            rx="3"
            fill="#046999"
            opacity={1 - i * 0.12}
          />
          <text
            x={x + 12}
            y="360"
            fontSize="8"
            textAnchor="middle"
            fill="#9a9da1"
          >
            {label}
          </text>
        </g>
      );
    })}

    {/* ── Trend line panel ── */}
    <rect
      x="316"
      y="148"
      width="174"
      height="120"
      rx="6"
      fill="#fff"
      stroke="rgba(0,0,0,0.08)"
    />
    <text x="330" y="170" fontSize="9" fontWeight="700" fill="#0d1b2a">
      Monthly trend
    </text>
    <path d={trendArea} fill="url(#db-area)" />
    <path
      d={trendLine}
      fill="none"
      stroke="#046999"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle
      cx="476"
      cy="196"
      r="4"
      fill="#046999"
      stroke="#fff"
      strokeWidth="2"
    />

    {/* ── Donut panel ── */}
    <rect
      x="316"
      y="280"
      width="174"
      height="90"
      rx="6"
      fill="#fff"
      stroke="rgba(0,0,0,0.08)"
    />
    <circle
      cx="360"
      cy="325"
      r="26"
      fill="none"
      stroke="#e8f4fa"
      strokeWidth="10"
    />
    <circle
      cx="360"
      cy="325"
      r="26"
      fill="none"
      stroke="#046999"
      strokeWidth="10"
      strokeDasharray={`${DONUT_CIRC * DONUT_VALUE} ${DONUT_CIRC}`}
      transform="rotate(-90 360 325)"
    />
    <text
      x="360"
      y="329"
      fontSize="11"
      fontWeight="800"
      fill="#0d1b2a"
      textAnchor="middle"
    >
      68%
    </text>
    <text x="400" y="315" fontSize="9" fontWeight="700" fill="#0d1b2a">
      On-time
    </text>
    <text x="400" y="329" fontSize="8" fill="#4a5568">
      delivery rate
    </text>
    <text x="400" y="345" fontSize="8" fill="#9a9da1">
      Target 75%
    </text>
  </svg>
);
