// /app/services/microsoft-power-platform/power-bi-data-integration/(svgs)/PbdiHeroSvg.jsx
// Hero illustration: three floating isometric layers. Raw sources at the bottom (spreadsheet with a flagged cell,
// database, cloud, API) rise through a star-schema data model into a dashboard layer at the top.
// This is the only animated SVG on the page. flowClass animates the dashed rising lines, liveClass pulses the live dot.
// Hex values and the tokens they match:
//   #046999 $accent, #e8f4fa $accent-light, #111820 $dark-bg, #1a2a3a $dark-mid, #6fc3e8 $accent-on-dark,
//   #0b2433 $text-primary, #c0392b $replace-x, #ffffff $white
// Other shades (slab sides, table headers, grid lines) are tints of those tokens, drawn for depth.

const CX = 250;
const HALF_W = 156;
const HALF_H = 90;
const T = 14;

// One floating slab: top face, then the two side faces that give it thickness.
const Slab = ({ cy, top, left, right, stroke }) => (
  <g>
    <polygon
      points={`${CX - HALF_W},${cy} ${CX},${cy + HALF_H} ${CX},${cy + HALF_H + T} ${CX - HALF_W},${cy + T}`}
      fill={left}
    />
    <polygon
      points={`${CX},${cy + HALF_H} ${CX + HALF_W},${cy} ${CX + HALF_W},${cy + T} ${CX},${cy + HALF_H + T}`}
      fill={right}
    />
    <polygon
      points={`${CX},${cy - HALF_H} ${CX + HALF_W},${cy} ${CX},${cy + HALF_H} ${CX - HALF_W},${cy}`}
      fill={top}
      stroke={stroke}
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
  </g>
);

// Maps flat layer coordinates (-90 to 90) onto the isometric top face.
const iso = (cy) => `translate(${CX} ${cy}) matrix(0.866 0.5 -0.866 0.5 0 0)`;

const gridLines = [-60, -30, 0, 30, 60];

const PbdiHeroSvg = ({ flowClass = "", liveClass = "" }) => (
  <svg
    viewBox="0 0 560 500"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    focusable="false"
  >
    {/* soft ground shadow */}
    <ellipse cx={CX} cy="484" rx="176" ry="15" fill="#e8f4fa" />

    {/* ---------- bottom layer: your data ---------- */}
    <Slab
      cy={384}
      top="#ffffff"
      left="#c9dfec"
      right="#aecde1"
      stroke="#046999"
    />
    <g transform={iso(384)}>
      <g stroke="#046999" strokeOpacity="0.09" strokeWidth="1">
        {gridLines.map((n) => (
          <g key={n}>
            <line x1={n} y1="-90" x2={n} y2="90" />
            <line x1="-90" y1={n} x2="90" y2={n} />
          </g>
        ))}
      </g>

      {/* four source tiles */}
      <g fill="#e8f4fa" stroke="#046999" strokeWidth="1.5">
        <rect x="-42" y="-42" width="46" height="46" rx="6" />
        <rect x="12" y="-42" width="46" height="46" rx="6" />
        <rect x="-42" y="12" width="46" height="46" rx="6" />
        <rect x="12" y="12" width="46" height="46" rx="6" />
      </g>

      {/* spreadsheet with one flagged cell */}
      <g transform="translate(-19 -19)">
        <rect
          x="-14"
          y="-14"
          width="28"
          height="28"
          rx="3"
          fill="#ffffff"
          stroke="#046999"
          strokeWidth="1.5"
        />
        <path
          d="M-14 -11 a3 3 0 0 1 3 -3 h22 a3 3 0 0 1 3 3 v5 h-28z"
          fill="#046999"
        />
        <g stroke="#9bb8c9" strokeWidth="1.5">
          <line x1="-5" y1="-6" x2="-5" y2="14" />
          <line x1="4" y1="-6" x2="4" y2="14" />
          <line x1="-14" y1="1" x2="14" y2="1" />
          <line x1="-14" y1="8" x2="14" y2="8" />
        </g>
        <rect x="4.5" y="1.5" width="9" height="6.5" fill="#c0392b" />
      </g>

      {/* database */}
      <g
        transform="translate(35 -19)"
        fill="#ffffff"
        stroke="#046999"
        strokeWidth="1.5"
        strokeLinejoin="round"
      >
        <path d="M-12 -9 V9 A12 4.5 0 0 0 12 9 V-9" />
        <path d="M-12 0 A12 4.5 0 0 0 12 0" fill="none" />
        <ellipse cx="0" cy="-9" rx="12" ry="4.5" />
      </g>

      {/* cloud app */}
      <g transform="translate(-19 35)">
        <path
          d="M-10 8 C-17 8 -17 -3 -9 -3 C-8 -12 7 -12 9 -4 C17 -4 18 8 10 8 Z"
          fill="#ffffff"
          stroke="#046999"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </g>

      {/* API braces */}
      <g
        transform="translate(35 35)"
        fill="none"
        stroke="#046999"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M-4 -12 C-10 -12 -8 -3 -13 0 C-8 3 -10 12 -4 12" />
        <path d="M4 -12 C10 -12 8 -3 13 0 C8 3 10 12 4 12" />
        <circle cx="0" cy="0" r="2.5" fill="#046999" stroke="none" />
      </g>
    </g>

    {/* ---------- middle layer: the data model ---------- */}
    <Slab
      cy={244}
      top="#046999"
      left="#035177"
      right="#02405c"
      stroke="#046999"
    />
    <g transform={iso(244)}>
      <g stroke="#ffffff" strokeOpacity="0.15" strokeWidth="1">
        {gridLines.map((n) => (
          <g key={n}>
            <line x1={n} y1="-90" x2={n} y2="90" />
            <line x1="-90" y1={n} x2="90" y2={n} />
          </g>
        ))}
      </g>

      {/* relationships */}
      <g stroke="#ffffff" strokeWidth="2" strokeLinecap="round">
        <line x1="8" y1="-8" x2="8" y2="-32" />
        <line x1="8" y1="24" x2="8" y2="48" />
        <line x1="-14" y1="8" x2="-28" y2="8" />
        <line x1="30" y1="8" x2="44" y2="8" />
      </g>
      <g fill="#ffffff">
        <circle cx="8" cy="-32" r="2.8" />
        <circle cx="8" cy="48" r="2.8" />
        <circle cx="-28" cy="8" r="2.8" />
        <circle cx="44" cy="8" r="2.8" />
      </g>

      {/* fact table */}
      <g>
        <rect
          x="-14"
          y="-8"
          width="44"
          height="32"
          rx="4"
          fill="#ffffff"
          stroke="#111820"
          strokeWidth="1.5"
        />
        <path
          d="M-14 -4 a4 4 0 0 1 4 -4 h36 a4 4 0 0 1 4 4 v5 h-44z"
          fill="#111820"
        />
        <g stroke="#9bb8c9" strokeWidth="2" strokeLinecap="round">
          <line x1="-8" y1="8" x2="24" y2="8" />
          <line x1="-8" y1="14" x2="24" y2="14" />
          <line x1="-8" y1="20" x2="14" y2="20" />
        </g>
      </g>

      {/* lookup tables */}
      {[
        [-8, -56],
        [44, -4],
        [-8, 48],
        [-60, -4],
      ].map(([x, y]) => (
        <g key={`${x}-${y}`}>
          <rect x={x} y={y} width="32" height="24" rx="3.5" fill="#ffffff" />
          <path
            d={`M${x} ${y + 3.5} a3.5 3.5 0 0 1 3.5 -3.5 h25 a3.5 3.5 0 0 1 3.5 3.5 v4.5 h-32z`}
            fill="#bfe3f4"
          />
          <g stroke="#9bb8c9" strokeWidth="2" strokeLinecap="round">
            <line x1={x + 5} y1={y + 13} x2={x + 27} y2={y + 13} />
            <line x1={x + 5} y1={y + 19} x2={x + 20} y2={y + 19} />
          </g>
        </g>
      ))}
    </g>

    {/* ---------- top layer: the dashboard ---------- */}
    <Slab
      cy={104}
      top="#1a2a3a"
      left="#0d141b"
      right="#080d12"
      stroke="#2c4256"
    />
    <g transform={iso(104)}>
      {/* KPI strip with the live dot */}
      <rect
        x="-72"
        y="-72"
        width="144"
        height="34"
        rx="6"
        fill="#111820"
        stroke="#2c4256"
        strokeWidth="1"
      />
      <rect x="-62" y="-61" width="54" height="10" rx="3" fill="#ffffff" />
      <rect
        x="-62"
        y="-46"
        width="30"
        height="4"
        rx="2"
        fill="#6fc3e8"
        opacity="0.8"
      />
      <circle
        className={liveClass}
        cx="56"
        cy="-55"
        r="5"
        fill="none"
        stroke="#6fc3e8"
        strokeWidth="2"
      />
      <circle cx="56" cy="-55" r="3.5" fill="#6fc3e8" />

      {/* bar chart card */}
      <rect
        x="-72"
        y="-30"
        width="86"
        height="102"
        rx="6"
        fill="#111820"
        stroke="#2c4256"
        strokeWidth="1"
      />
      <line
        x1="-62"
        y1="62"
        x2="4"
        y2="62"
        stroke="#2c4256"
        strokeWidth="1.5"
      />
      <rect x="-62" y="32" width="11" height="30" rx="2" fill="#6fc3e8" />
      <rect x="-45" y="10" width="11" height="52" rx="2" fill="#6fc3e8" />
      <rect x="-28" y="22" width="11" height="40" rx="2" fill="#6fc3e8" />
      <rect x="-11" y="-2" width="11" height="64" rx="2" fill="#ffffff" />

      {/* trend line card */}
      <rect
        x="22"
        y="-30"
        width="50"
        height="48"
        rx="6"
        fill="#111820"
        stroke="#2c4256"
        strokeWidth="1"
      />
      <polyline
        points="30,8 40,-2 48,4 58,-14 66,-10"
        fill="none"
        stroke="#6fc3e8"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="66" cy="-10" r="3" fill="#ffffff" />

      {/* share card */}
      <rect
        x="22"
        y="24"
        width="50"
        height="48"
        rx="6"
        fill="#111820"
        stroke="#2c4256"
        strokeWidth="1"
      />
      <circle
        cx="47"
        cy="48"
        r="14"
        fill="none"
        stroke="#2c4256"
        strokeWidth="6"
      />
      <circle
        cx="47"
        cy="48"
        r="14"
        fill="none"
        stroke="#6fc3e8"
        strokeWidth="6"
        strokeDasharray="58 30"
        transform="rotate(-90 47 48)"
      />
    </g>

    {/* ---------- rising data: sources -> model -> dashboard ---------- */}
    <g fill="none" stroke="#046999" strokeWidth="2.5" strokeLinecap="round">
      <path className={flowClass} strokeDasharray="6 6" d="M140 372 V290" />
      <path className={flowClass} strokeDasharray="6 6" d="M360 372 V290" />
      <path className={flowClass} strokeDasharray="6 6" d="M140 232 V150" />
      <path className={flowClass} strokeDasharray="6 6" d="M360 232 V150" />
    </g>
    <g fill="#046999">
      <polygon points="140,284 134,293 146,293" />
      <polygon points="360,284 354,293 366,293" />
      <polygon points="140,144 134,153 146,153" />
      <polygon points="360,144 354,153 366,153" />
    </g>
    <g fill="#ffffff" stroke="#046999" strokeWidth="2">
      <ellipse cx="140" cy="372" rx="9" ry="4.5" />
      <ellipse cx="360" cy="372" rx="9" ry="4.5" />
      <ellipse cx="140" cy="232" rx="9" ry="4.5" />
      <ellipse cx="360" cy="232" rx="9" ry="4.5" />
    </g>

    {/* cleaned-up check on the way into the model */}
    <circle
      cx="140"
      cy="330"
      r="10"
      fill="#ffffff"
      stroke="#046999"
      strokeWidth="2"
    />
    <path
      d="M135 330 l3.5 3.5 l6.5 -7"
      fill="none"
      stroke="#046999"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    {/* layer labels */}
    <g fill="#0b2433" fontSize="16" fontWeight="700">
      <line
        x1="414"
        y1="104"
        x2="428"
        y2="104"
        stroke="#046999"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <text x="436" y="110">
        Dashboard
      </text>
      <line
        x1="414"
        y1="244"
        x2="428"
        y2="244"
        stroke="#046999"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <text x="436" y="250">
        Data model
      </text>
      <line
        x1="414"
        y1="384"
        x2="428"
        y2="384"
        stroke="#046999"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <text x="436" y="390">
        Your data
      </text>
    </g>
  </svg>
);

export default PbdiHeroSvg;
