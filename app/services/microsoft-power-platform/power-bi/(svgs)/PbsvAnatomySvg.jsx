// /app/services/microsoft-power-platform/power-bi/(svgs)/PbsvAnatomySvg.jsx
// Annotated report diagram for the "anatomy" section. Sits on a dark section.
// Hex values and the tokens they match:
//   #ffffff $white · #f7f8f9 $light-bg · #e3e8ec $line · #d4d6d9 $line-strong
//   #e8f4fa $accent-light · #046999 $accent · #6fc3e8 $accent-on-dark
//   #0d1b2a $text-primary · #4a5568 $text-secondary · #1a2a3a $dark-mid

const LEFT = [
  { label: "Row-level security", y: 88, tx: 404, w: 180 },
  { label: "KPI cards", y: 170, tx: 404, w: 106 },
  { label: "Cross-filtering", y: 320, tx: 404, w: 155 },
  { label: "Drill through", y: 498, tx: 404, w: 139 },
];

const RIGHT = [
  { label: "Slicers", y: 88, tx: 936, w: 89 },
  { label: "Drill down", y: 246, tx: 1023, w: 114 },
  { label: "Trend line", y: 330, tx: 1036, w: 114 },
  { label: "Scheduled refresh", y: 582, tx: 1037, w: 171 },
];

const LEFT_EDGE = 346;
const RIGHT_EDGE = 1092;

function Callout({ label, y, tx, w, side }) {
  const edge = side === "left" ? LEFT_EDGE : RIGHT_EDGE;
  const x = side === "left" ? LEFT_EDGE - w : RIGHT_EDGE;
  return (
    <g>
      <line
        x1={edge}
        y1={y}
        x2={tx}
        y2={y}
        stroke="#6fc3e8"
        strokeWidth="1.5"
      />
      <circle cx={tx} cy={y} r="9" fill="#6fc3e8" opacity="0.3" />
      <circle cx={tx} cy={y} r="4.5" fill="#6fc3e8" />
      <rect
        x={x}
        y={y - 17}
        width={w}
        height="34"
        rx="17"
        fill="#1a2a3a"
        stroke="#6fc3e8"
        strokeOpacity="0.6"
      />
      <text x={x + 16} y={y + 5} fontSize="15" fontWeight="700" fill="#ffffff">
        {label}
      </text>
    </g>
  );
}

export default function PbsvAnatomySvg() {
  const bars = [
    { name: "Cases", y: 276, w: 100 },
    { name: "Pumps", y: 312, w: 120, hot: true },
    { name: "Kits", y: 348, w: 76 },
    { name: "Parts", y: 384, w: 52 },
  ];
  const pts = [
    [676, 360],
    [724, 348],
    [772, 352],
    [820, 326],
    [868, 334],
    [916, 300],
    [964, 310],
    [1016, 274],
  ];
  const line = pts.map(([x, y]) => `${x} ${y}`).join(" L");
  const detail = [
    { name: "Harbour Cafe", y: 490, w: 220, v: "$38k" },
    { name: "Ridge Hardware", y: 516, w: 170, v: "$29k" },
    { name: "Bay Supplies", y: 542, w: 110, v: "$18k" },
  ];

  return (
    <svg
      viewBox="140 0 1160 660"
      fontFamily="aptos"
      role="img"
      aria-labelledby="pbsv-anatomy-title pbsv-anatomy-desc"
      focusable="false"
    >
      <title id="pbsv-anatomy-title">Anatomy of a Power BI report</title>
      <desc id="pbsv-anatomy-desc">
        A sales dashboard with callouts naming its parts: row-level security,
        KPI cards, cross-filtering, drill through, slicers, drill down, a trend
        line and scheduled refresh.
      </desc>
      <defs>
        <clipPath id="pbsv-anatomy-clip">
          <rect x="380" y="60" width="680" height="544" rx="20" />
        </clipPath>
      </defs>

      {/* dashboard shell */}
      <rect x="380" y="60" width="680" height="544" rx="20" fill="#f7f8f9" />
      <g clipPath="url(#pbsv-anatomy-clip)">
        <rect x="380" y="60" width="680" height="52" fill="#ffffff" />
        <rect x="380" y="112" width="680" height="1" fill="#e3e8ec" />
      </g>

      {/* header: security chip, title, slicers */}
      <rect x="404" y="74" width="106" height="28" rx="14" fill="#e8f4fa" />
      <rect x="416" y="86" width="11" height="9" rx="2" fill="#046999" />
      <path
        d="M418.5 86v-3a3 3 0 0 1 6 0v3"
        fill="none"
        stroke="#046999"
        strokeWidth="2"
      />
      <text x="434" y="93" fontSize="14" fontWeight="700" fill="#046999">
        QLD team
      </text>
      <text x="530" y="93" fontSize="16" fontWeight="700" fill="#0d1b2a">
        Sales overview
      </text>
      <rect
        x="720"
        y="74"
        width="104"
        height="28"
        rx="14"
        fill="#ffffff"
        stroke="#d4d6d9"
      />
      <text x="736" y="93" fontSize="14" fill="#4a5568">
        FY2025
      </text>
      <path
        d="M802 86l5 5 5-5"
        fill="none"
        stroke="#4a5568"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect
        x="836"
        y="74"
        width="100"
        height="28"
        rx="14"
        fill="#ffffff"
        stroke="#d4d6d9"
      />
      <text x="852" y="93" fontSize="14" fill="#4a5568">
        Region
      </text>
      <path
        d="M914 86l5 5 5-5"
        fill="none"
        stroke="#4a5568"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* KPI cards */}
      {[
        { x: 404, l: "Revenue", v: "$4.82m", hot: true },
        { x: 622, l: "Orders", v: "12,480" },
        { x: 840, l: "Margin", v: "31.2%" },
      ].map((k) => (
        <g key={k.l}>
          <rect
            x={k.x}
            y="128"
            width="196"
            height="84"
            rx="12"
            fill={k.hot ? "#046999" : "#ffffff"}
            stroke={k.hot ? "#046999" : "#e3e8ec"}
          />
          <text
            x={k.x + 18}
            y="154"
            fontSize="14"
            fill={k.hot ? "#ffffff" : "#4a5568"}
            opacity={k.hot ? 0.85 : 1}
          >
            {k.l}
          </text>
          <text
            x={k.x + 18}
            y="190"
            fontSize="26"
            fontWeight="700"
            fill={k.hot ? "#ffffff" : "#0d1b2a"}
          >
            {k.v}
          </text>
        </g>
      ))}

      {/* bar chart card (cross-filtering) */}
      <rect
        x="404"
        y="228"
        width="230"
        height="190"
        rx="12"
        fill="#ffffff"
        stroke="#e3e8ec"
      />
      <text x="420" y="254" fontSize="14" fontWeight="700" fill="#0d1b2a">
        By product
      </text>
      {bars.map((b) => (
        <g key={b.name}>
          <text x="420" y={b.y + 16} fontSize="14" fill="#4a5568">
            {b.name}
          </text>
          <rect
            x="476"
            y={b.y}
            width={b.w}
            height="22"
            rx="6"
            fill={b.hot ? "#046999" : "#c6e3f1"}
          />
        </g>
      ))}

      {/* revenue trend card (trend line, drill down) */}
      <rect
        x="656"
        y="228"
        width="380"
        height="190"
        rx="12"
        fill="#ffffff"
        stroke="#e3e8ec"
      />
      <text x="672" y="254" fontSize="14" fontWeight="700" fill="#0d1b2a">
        Revenue trend
      </text>
      <circle cx="980" cy="246" r="11" fill="#e8f4fa" />
      <path
        d="M980 240v11M975.500 247l4.500 4.500 4.500-4.500"
        fill="none"
        stroke="#046999"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="1012" cy="246" r="11" fill="#e8f4fa" />
      <path
        d="M1006 246h12M1013 241l5 5-5 5"
        fill="none"
        stroke="#046999"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <line
        x1="676"
        y1="300"
        x2="1016"
        y2="300"
        stroke="#e3e8ec"
        strokeDasharray="2 6"
      />
      <line
        x1="676"
        y1="348"
        x2="1016"
        y2="348"
        stroke="#e3e8ec"
        strokeDasharray="2 6"
      />
      <line x1="676" y1="398" x2="1016" y2="398" stroke="#e3e8ec" />
      <path d={`M${line} L1016 398 L676 398 Z`} fill="#e8f4fa" />
      <path
        d={`M${line}`}
        fill="none"
        stroke="#046999"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {pts.map(([x, y]) => (
        <circle
          key={x}
          cx={x}
          cy={y}
          r="4"
          fill="#ffffff"
          stroke="#046999"
          strokeWidth="2"
        />
      ))}
      <circle cx="1016" cy="274" r="8" fill="#046999" opacity="0.2" />

      {/* detail page (drill through target) */}
      <rect
        x="404"
        y="436"
        width="632"
        height="124"
        rx="12"
        fill="#ffffff"
        stroke="#e3e8ec"
      />
      <text x="420" y="462" fontSize="14" fontWeight="700" fill="#0d1b2a">
        Detail: Pumps
      </text>
      <path
        d="M986 456l-5-5 5-5"
        fill="none"
        stroke="#046999"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        transform="translate(-6 1)"
      />
      <text x="990" y="462" fontSize="14" fontWeight="700" fill="#046999">
        Back
      </text>
      {detail.map((d) => (
        <g key={d.name}>
          <text x="420" y={d.y} fontSize="14" fill="#4a5568">
            {d.name}
          </text>
          <rect
            x="600"
            y={d.y - 11}
            width={d.w}
            height="10"
            rx="5"
            fill="#6fc3e8"
          />
          <text x="940" y={d.y} fontSize="14" fontWeight="700" fill="#0d1b2a">
            {d.v}
          </text>
        </g>
      ))}

      {/* refresh footer */}
      <text x="1016" y="586" fontSize="14" fill="#4a5568" textAnchor="end">
        Refreshed 8:02 am
      </text>
      <path
        d="M1025 581a5 5 0 1 1 2 4"
        fill="none"
        stroke="#046999"
        strokeWidth="2"
        strokeLinecap="round"
        transform="translate(5 0)"
      />

      {LEFT.map((c) => (
        <Callout key={c.label} {...c} side="left" />
      ))}
      {RIGHT.map((c) => (
        <Callout key={c.label} {...c} side="right" />
      ))}
    </svg>
  );
}
