// /app/services/microsoft-excel/pivot-tables-charts-and-reporting-solutions/(svgs)/PivotHeroSvg.jsx
// Animated hero illustration. Sits directly on the dark hero background.
// Colour tokens (hard-coded hex):
//   #111820 $dark-bg      #18232e $dark-surface   #1a2a3a $dark-mid
//   #046999 $accent       #6fc3e8 $accent-on-dark #c0392b $replace-x
//   #ffffff $white (with opacity for $white-88 / $white-35 / $white-18 / $white-12 / $white-08)
// flowClass animates the dashed flow lines, liveClass pulses the "Live" dot.
import React from "react";

// "." normal cell, "a" accent cell, "f" flagged (bad data) cell
const SHEETS = [
  { x: 14, y: 40, rot: -5, cells: ["a...", "..f.", ".a..", "...f"] },
  { x: 30, y: 200, rot: 3, cells: ["....", "f..a", "..a.", ".f.."] },
  { x: 10, y: 360, rot: -3, cells: [".a..", "...f", "f...", "..a."] },
];

const Workbook = ({ x, y, rot, cells }) => (
  <g transform={`translate(${x} ${y}) rotate(${rot})`}>
    <rect
      width="150"
      height="118"
      rx="12"
      fill="#18232e"
      stroke="#ffffff"
      strokeOpacity="0.18"
    />
    <rect width="150" height="24" rx="12" fill="#046999" />
    <rect y="12" width="150" height="12" fill="#046999" />
    <circle cx="14" cy="12" r="3" fill="#ffffff" fillOpacity="0.55" />
    <circle cx="26" cy="12" r="3" fill="#ffffff" fillOpacity="0.35" />
    {cells.map((row, r) =>
      row
        .split("")
        .map((c, i) => (
          <rect
            key={`${r}-${i}`}
            x={10 + i * 33}
            y={32 + r * 19}
            width="30"
            height="15"
            rx="3"
            fill={c === "f" ? "#c0392b" : c === "a" ? "#6fc3e8" : "#ffffff"}
            fillOpacity={c === "f" ? 0.9 : c === "a" ? 0.4 : 0.08}
          />
        )),
    )}
  </g>
);

const PivotHeroSvg = ({ flowClass, liveClass }) => (
  <svg
    viewBox="0 0 640 520"
    role="img"
    aria-labelledby="pvt-hero-title pvt-hero-desc"
    fontFamily="aptos"
    style={{ width: "100%", height: "auto", display: "block" }}
  >
    <title id="pvt-hero-title">
      Messy workbooks cleaned up and turned into a reporting dashboard
    </title>
    <desc id="pvt-hero-desc">
      Three Excel workbooks with flagged bad cells flow into a clean and combine
      step, which feeds a live dashboard made of slicers, KPI tiles, a pivot
      table and a pivot chart.
    </desc>

    {/* sparkles */}
    <g
      stroke="#6fc3e8"
      strokeOpacity="0.5"
      strokeWidth="2"
      strokeLinecap="round"
    >
      <path d="M200 24v14M193 31h14" />
      <path d="M352 150v10M347 155h10" />
      <path d="M262 486v10M257 491h10" />
      <path d="M612 30v12M606 36h12" />
    </g>

    {/* source workbooks */}
    {SHEETS.map((s) => (
      <Workbook key={s.y} {...s} />
    ))}

    {/* flow: workbooks into the clean-up step */}
    <g
      fill="none"
      stroke="#6fc3e8"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeDasharray="5 11"
    >
      <path className={flowClass} d="M168 100 C 232 100, 206 260, 252 260" />
      <path className={flowClass} d="M184 262 C 214 262, 232 260, 252 260" />
      <path className={flowClass} d="M162 420 C 232 420, 206 260, 252 260" />
    </g>

    {/* clean and combine step */}
    <circle
      cx="300"
      cy="260"
      r="58"
      fill="none"
      stroke="#6fc3e8"
      strokeOpacity="0.3"
      strokeDasharray="3 7"
    />
    <circle
      cx="300"
      cy="260"
      r="46"
      fill="#1a2a3a"
      stroke="#6fc3e8"
      strokeWidth="2"
    />
    <path d="M276 238h48l-18 24v22l-12 8v-30z" fill="#6fc3e8" />
    <circle
      cx="322"
      cy="226"
      r="8"
      fill="#046999"
      stroke="#6fc3e8"
      strokeWidth="2"
    />
    <circle cx="322" cy="226" r="2.5" fill="#ffffff" />
    <circle cx="271" cy="300" r="4" fill="#6fc3e8" fillOpacity="0.6" />
    <circle cx="329" cy="296" r="4" fill="#6fc3e8" fillOpacity="0.6" />
    <text
      x="300"
      y="346"
      textAnchor="middle"
      fontSize="14"
      fontWeight="700"
      fill="#ffffff"
      fillOpacity="0.88"
    >
      Clean &amp; combine
    </text>

    {/* flow: step into the dashboard */}
    <path
      className={flowClass}
      d="M350 260 C 372 260, 370 232, 396 232"
      fill="none"
      stroke="#6fc3e8"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeDasharray="5 11"
    />

    {/* dashboard window */}
    <g transform="translate(396 60)">
      <rect
        width="234"
        height="400"
        rx="16"
        fill="#18232e"
        stroke="#ffffff"
        strokeOpacity="0.12"
      />
      <circle cx="18" cy="20" r="4" fill="#ffffff" fillOpacity="0.35" />
      <circle cx="32" cy="20" r="4" fill="#ffffff" fillOpacity="0.35" />
      <circle cx="46" cy="20" r="4" fill="#ffffff" fillOpacity="0.35" />
      <rect
        x="160"
        y="9"
        width="60"
        height="24"
        rx="12"
        fill="#111820"
        stroke="#6fc3e8"
        strokeOpacity="0.45"
      />
      <circle className={liveClass} cx="175" cy="21" r="4" fill="#6fc3e8" />
      <text
        x="185"
        y="26"
        fontSize="14"
        fontWeight="700"
        fill="#ffffff"
        fillOpacity="0.88"
      >
        Live
      </text>

      {/* slicers */}
      <rect x="14" y="44" width="58" height="24" rx="12" fill="#6fc3e8" />
      <rect x="26" y="54" width="34" height="5" rx="2.5" fill="#111820" />
      <rect
        x="78"
        y="44"
        width="58"
        height="24"
        rx="12"
        fill="#ffffff"
        fillOpacity="0.12"
      />
      <rect
        x="90"
        y="54"
        width="34"
        height="5"
        rx="2.5"
        fill="#ffffff"
        fillOpacity="0.5"
      />
      <rect
        x="142"
        y="44"
        width="58"
        height="24"
        rx="12"
        fill="#ffffff"
        fillOpacity="0.12"
      />
      <rect
        x="154"
        y="54"
        width="34"
        height="5"
        rx="2.5"
        fill="#ffffff"
        fillOpacity="0.5"
      />

      {/* KPI tiles */}
      <rect x="14" y="82" width="100" height="70" rx="10" fill="#1a2a3a" />
      <rect
        x="24"
        y="92"
        width="42"
        height="5"
        rx="2.5"
        fill="#ffffff"
        fillOpacity="0.35"
      />
      <text x="24" y="120" fontSize="22" fontWeight="700" fill="#ffffff">
        $2.4m
      </text>
      <text x="24" y="141" fontSize="14" fontWeight="700" fill="#6fc3e8">
        +12%
      </text>
      <rect x="120" y="82" width="100" height="70" rx="10" fill="#1a2a3a" />
      <rect
        x="130"
        y="92"
        width="42"
        height="5"
        rx="2.5"
        fill="#ffffff"
        fillOpacity="0.35"
      />
      <text x="130" y="120" fontSize="22" fontWeight="700" fill="#ffffff">
        18.2k
      </text>
      <text x="130" y="141" fontSize="14" fontWeight="700" fill="#6fc3e8">
        +4%
      </text>

      {/* pivot table */}
      <rect
        x="14"
        y="164"
        width="206"
        height="126"
        rx="10"
        fill="#111820"
        stroke="#ffffff"
        strokeOpacity="0.1"
      />
      <rect x="14" y="164" width="206" height="22" rx="10" fill="#046999" />
      <rect x="14" y="176" width="206" height="10" fill="#046999" />
      <rect
        x="40"
        y="172"
        width="44"
        height="6"
        rx="3"
        fill="#ffffff"
        fillOpacity="0.75"
      />
      <rect
        x="140"
        y="172"
        width="26"
        height="6"
        rx="3"
        fill="#ffffff"
        fillOpacity="0.75"
      />
      <rect
        x="180"
        y="172"
        width="26"
        height="6"
        rx="3"
        fill="#ffffff"
        fillOpacity="0.75"
      />
      {[0, 1, 2, 3].map((r) => (
        <g key={r}>
          {r % 2 === 0 && (
            <rect
              x="15"
              y={186 + r * 18}
              width="204"
              height="18"
              fill="#ffffff"
              fillOpacity="0.04"
            />
          )}
          <rect
            x="24"
            y={191 + r * 18}
            width="8"
            height="8"
            rx="2"
            fill="none"
            stroke="#6fc3e8"
            strokeWidth="1.5"
          />
          <path
            d={`M26 ${195 + r * 18}h4`}
            stroke="#6fc3e8"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <rect
            x="40"
            y={193 + r * 18}
            width={36 + ((r * 13) % 22)}
            height="5"
            rx="2.5"
            fill="#ffffff"
            fillOpacity="0.5"
          />
          <rect
            x="140"
            y={193 + r * 18}
            width="26"
            height="5"
            rx="2.5"
            fill="#ffffff"
            fillOpacity="0.32"
          />
          <rect
            x="180"
            y={193 + r * 18}
            width="26"
            height="5"
            rx="2.5"
            fill="#ffffff"
            fillOpacity="0.32"
          />
        </g>
      ))}
      <rect
        x="15"
        y="258"
        width="204"
        height="31"
        rx="9"
        fill="#6fc3e8"
        fillOpacity="0.2"
      />
      <text x="24" y="278" fontSize="14" fontWeight="700" fill="#ffffff">
        Total
      </text>
      <rect x="140" y="270" width="26" height="5" rx="2.5" fill="#6fc3e8" />
      <rect x="180" y="270" width="26" height="5" rx="2.5" fill="#6fc3e8" />

      {/* pivot chart */}
      <rect
        x="14"
        y="302"
        width="206"
        height="84"
        rx="10"
        fill="#111820"
        stroke="#ffffff"
        strokeOpacity="0.1"
      />
      <path d="M26 372H208" stroke="#ffffff" strokeOpacity="0.2" />
      {[24, 38, 30, 52, 44, 60].map((h, i) => (
        <g key={i}>
          <rect
            x={30 + i * 30}
            y={372 - h}
            width="18"
            height={h}
            rx="3"
            fill="#046999"
          />
          <rect
            x={30 + i * 30}
            y={372 - h}
            width="18"
            height="5"
            rx="2.5"
            fill="#6fc3e8"
          />
        </g>
      ))}
      <path
        d="M39 340 L69 346 L99 330 L129 336 L159 322 L189 316"
        fill="none"
        stroke="#ffffff"
        strokeOpacity="0.85"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {[
        [39, 340],
        [69, 346],
        [99, 330],
        [129, 336],
        [159, 322],
        [189, 316],
      ].map(([cx, cy]) => (
        <circle
          key={cx}
          cx={cx}
          cy={cy}
          r="3"
          fill="#111820"
          stroke="#ffffff"
          strokeWidth="1.5"
        />
      ))}
    </g>

    {/* floating slicer card */}
    <g transform="translate(336 418) rotate(-6)">
      <rect
        width="104"
        height="70"
        rx="10"
        fill="#111820"
        stroke="#6fc3e8"
        strokeOpacity="0.5"
      />
      <text
        x="12"
        y="24"
        fontSize="14"
        fontWeight="700"
        fill="#ffffff"
        fillOpacity="0.88"
      >
        Region
      </text>
      <rect x="12" y="34" width="38" height="20" rx="10" fill="#6fc3e8" />
      <rect
        x="54"
        y="34"
        width="38"
        height="20"
        rx="10"
        fill="#ffffff"
        fillOpacity="0.14"
      />
    </g>

    {/* floating donut */}
    <g transform="translate(590 462)">
      <circle r="42" fill="#111820" stroke="#6fc3e8" strokeOpacity="0.5" />
      <g transform="rotate(-90)" fill="none" strokeWidth="12">
        <circle r="24" stroke="#ffffff" strokeOpacity="0.2" />
        <circle r="24" stroke="#6fc3e8" strokeDasharray="72 151" />
        <circle
          r="24"
          stroke="#046999"
          strokeDasharray="42 151"
          strokeDashoffset="-72"
        />
      </g>
    </g>
  </svg>
);

export default PivotHeroSvg;
