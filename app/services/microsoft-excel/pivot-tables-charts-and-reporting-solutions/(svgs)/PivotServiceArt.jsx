// /app/services/microsoft-excel/pivot-tables-charts-and-reporting-solutions/(svgs)/PivotServiceArt.jsx
// One spot illustration per service tile, each drawn for its tile colour.
// Decorative only (aria-hidden). Colour tokens (hard-coded hex):
//   #046999 $accent         #034e72 $accent-dark     #6fc3e8 $accent-on-dark
//   #e8f4fa $accent-light   #111820 $dark-bg         #18232e $dark-surface
//   #1a2a3a $dark-mid       #0b2433 $ink             #ffffff $white
//   #c0392b $replace-x      #9a9da1 $text-muted      #e3e8ec $line
import React from "react";

const svgProps = {
  fontFamily: "aptos",
  "aria-hidden": "true",
  focusable: "false",
  style: { width: "100%", height: "100%", display: "block" },
};

/* ───────────── 1. Pivot tables: accent tile ───────────── */

const RAW_ROWS = ["a..f", "..a.", ".f..", "a...", "..f.", ".a.a", "f..."];

export const PivotTablesArt = () => (
  <svg viewBox="0 0 440 340" {...svgProps}>
    <rect
      x="26"
      y="44"
      width="388"
      height="262"
      rx="28"
      fill="#034e72"
      fillOpacity="0.5"
      transform="rotate(-3 220 175)"
    />

    {/* raw data sheet */}
    <g transform="translate(16 74) rotate(-6)">
      <rect
        width="156"
        height="192"
        rx="12"
        fill="#ffffff"
        fillOpacity="0.12"
        stroke="#ffffff"
        strokeOpacity="0.35"
      />
      {RAW_ROWS.map((row, r) =>
        row
          .split("")
          .map((c, i) => (
            <rect
              key={`${r}-${i}`}
              x={10 + i * 36}
              y={12 + r * 26}
              width="30"
              height="18"
              rx="4"
              fill={c === "f" ? "#c0392b" : c === "a" ? "#6fc3e8" : "#ffffff"}
              fillOpacity={c === "f" ? 0.95 : c === "a" ? 0.65 : 0.22}
            />
          )),
      )}
    </g>

    {/* dotted flows into the pivot */}
    <g
      fill="none"
      stroke="#6fc3e8"
      strokeWidth="3"
      strokeLinecap="round"
      strokeDasharray="1 9"
    >
      <path d="M172 110 C 208 110, 214 96, 246 96" />
      <path d="M176 168 C 208 168, 216 160, 246 160" />
      <path d="M170 226 C 208 226, 214 224, 246 224" />
    </g>
    <g fill="#6fc3e8">
      <polygon points="246,89 257,96 246,103" />
      <polygon points="246,153 257,160 246,167" />
      <polygon points="246,217 257,224 246,231" />
    </g>

    {/* pivot table card */}
    <g transform="translate(258 44)">
      <rect
        x="8"
        y="10"
        width="168"
        height="238"
        rx="14"
        fill="#034e72"
        fillOpacity="0.6"
      />
      <rect width="168" height="238" rx="14" fill="#ffffff" />
      <path
        d="M0 14a14 14 0 0 1 14-14h140a14 14 0 0 1 14 14v16H0z"
        fill="#111820"
      />
      <rect
        x="14"
        y="11"
        width="40"
        height="8"
        rx="4"
        fill="#ffffff"
        fillOpacity="0.6"
      />
      <rect
        x="90"
        y="11"
        width="28"
        height="8"
        rx="4"
        fill="#ffffff"
        fillOpacity="0.6"
      />
      <rect
        x="128"
        y="11"
        width="28"
        height="8"
        rx="4"
        fill="#ffffff"
        fillOpacity="0.6"
      />
      <path d="M0 30h76v208H14a14 14 0 0 1-14-14z" fill="#e8f4fa" />
      {[0, 1, 2, 3, 4].map((r) => (
        <g key={r}>
          <rect
            x="10"
            y={42 + r * 32}
            width="12"
            height="12"
            rx="3"
            fill="#ffffff"
            stroke="#046999"
            strokeWidth="1.5"
          />
          <path
            d={`M13 ${48 + r * 32}h6`}
            stroke="#046999"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          {r % 2 === 0 && (
            <path
              d={`M16 ${45 + r * 32}v6`}
              stroke="#046999"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          )}
          <rect
            x="28"
            y={44 + r * 32}
            width={26 + ((r * 9) % 18)}
            height="8"
            rx="4"
            fill="#4a5568"
            fillOpacity="0.5"
          />
          <rect
            x="86"
            y={43 + r * 32}
            width={30 + ((r * 17) % 50)}
            height="10"
            rx="5"
            fill={r === 3 ? "#6fc3e8" : "#046999"}
          />
          <path d={`M0 ${62 + r * 32}H168`} stroke="#e3e8ec" />
        </g>
      ))}
      <path
        d="M0 202H168V224a14 14 0 0 1-14 14H14A14 14 0 0 1 0 224z"
        fill="#111820"
      />
      <text x="12" y="226" fontSize="14" fontWeight="700" fill="#ffffff">
        Total
      </text>
      <rect x="86" y="216" width="70" height="10" rx="5" fill="#6fc3e8" />
    </g>

    {/* field tag */}
    <g transform="translate(326 12) rotate(6)">
      <rect width="96" height="32" rx="16" fill="#111820" />
      <text
        x="48"
        y="21"
        textAnchor="middle"
        fontSize="14"
        fontWeight="700"
        fill="#ffffff"
      >
        Σ Values
      </text>
    </g>

    {/* slicer */}
    <g transform="translate(206 246) rotate(5)">
      <rect
        width="108"
        height="76"
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
        Year
      </text>
      <rect x="12" y="34" width="40" height="24" rx="12" fill="#6fc3e8" />
      <rect
        x="56"
        y="34"
        width="40"
        height="24"
        rx="12"
        fill="#ffffff"
        fillOpacity="0.14"
      />
    </g>

    {/* pivot chart bubble */}
    <circle cx="396" cy="296" r="36" fill="#ffffff" />
    {[14, 26, 20, 32].map((h, i) => (
      <rect
        key={i}
        x={378 + i * 10}
        y={314 - h}
        width="7"
        height={h}
        rx="2"
        fill={i === 3 ? "#6fc3e8" : "#046999"}
      />
    ))}
  </svg>
);

/* ───────────── 2. Power Query: dark tile ───────────── */

const gearTeeth = [0, 45, 90, 135, 180, 225, 270, 315];

export const PowerQueryArt = () => (
  <svg viewBox="0 0 320 220" {...svgProps}>
    {/* sources */}
    <g transform="translate(18 22)">
      <rect
        width="46"
        height="38"
        rx="6"
        fill="#1a2a3a"
        stroke="#6fc3e8"
        strokeOpacity="0.7"
      />
      <path
        d="M0 13h46M0 25h46M16 0v38M31 0v38"
        stroke="#6fc3e8"
        strokeOpacity="0.35"
      />
    </g>
    <g transform="translate(18 82)">
      <path
        d="M0 8V34a23 8 0 0 0 46 0V8"
        fill="#1a2a3a"
        stroke="#6fc3e8"
        strokeOpacity="0.7"
      />
      <ellipse
        cx="23"
        cy="8"
        rx="23"
        ry="8"
        fill="#1a2a3a"
        stroke="#6fc3e8"
        strokeOpacity="0.7"
      />
      <path
        d="M0 21a23 8 0 0 0 46 0"
        fill="none"
        stroke="#6fc3e8"
        strokeOpacity="0.35"
      />
    </g>
    <g transform="translate(16 138)">
      <path
        d="M12 38C2 38 0 24 11 22 11 8 32 6 35 20 46 18 52 36 40 38Z"
        fill="#1a2a3a"
        stroke="#6fc3e8"
        strokeOpacity="0.7"
      />
      <text
        x="26"
        y="33"
        textAnchor="middle"
        fontSize="14"
        fontWeight="700"
        fill="#6fc3e8"
      >
        {"{ }"}
      </text>
    </g>

    {/* messy bits in transit */}
    <g>
      <rect
        x="78"
        y="34"
        width="9"
        height="9"
        rx="2"
        fill="#c0392b"
        transform="rotate(18 82 38)"
      />
      <rect
        x="92"
        y="52"
        width="8"
        height="8"
        rx="2"
        fill="#6fc3e8"
        fillOpacity="0.6"
        transform="rotate(-14 96 56)"
      />
      <rect
        x="80"
        y="86"
        width="8"
        height="8"
        rx="2"
        fill="#6fc3e8"
        fillOpacity="0.6"
        transform="rotate(25 84 90)"
      />
      <rect
        x="96"
        y="102"
        width="9"
        height="9"
        rx="2"
        fill="#c0392b"
        transform="rotate(-20 100 106)"
      />
      <rect
        x="82"
        y="146"
        width="9"
        height="9"
        rx="2"
        fill="#6fc3e8"
        fillOpacity="0.6"
        transform="rotate(12 86 150)"
      />
      <rect
        x="98"
        y="132"
        width="8"
        height="8"
        rx="2"
        fill="#c0392b"
        transform="rotate(-28 102 136)"
      />
    </g>
    <g
      fill="none"
      stroke="#6fc3e8"
      strokeOpacity="0.55"
      strokeWidth="2"
      strokeLinecap="round"
      strokeDasharray="1 7"
    >
      <path d="M68 41C92 41 98 110 118 110" />
      <path d="M68 100C92 100 98 110 118 110" />
      <path d="M66 157C92 157 98 110 118 110" />
    </g>

    {/* pipeline */}
    <rect
      x="118"
      y="94"
      width="116"
      height="32"
      rx="16"
      fill="#1a2a3a"
      stroke="#6fc3e8"
      strokeOpacity="0.6"
    />
    <circle cx="146" cy="110" r="21" fill="#046999" />
    <path d="M135 102h22l-8 10v9l-6-3v-6z" fill="#ffffff" />
    <circle cx="190" cy="110" r="21" fill="#6fc3e8" />
    <g transform="translate(190 110)" fill="#111820">
      {gearTeeth.map((a) => (
        <rect
          key={a}
          x="-2.5"
          y="-14"
          width="5"
          height="6"
          rx="1"
          transform={`rotate(${a})`}
        />
      ))}
      <circle r="9" fill="none" stroke="#111820" strokeWidth="3.5" />
      <circle r="2.5" />
    </g>
    <path
      d="M234 110H246"
      stroke="#6fc3e8"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <polygon points="244,104 254,110 244,116" fill="#6fc3e8" />

    {/* tidy output */}
    <g transform="translate(256 74)">
      <rect
        width="52"
        height="72"
        rx="8"
        fill="#18232e"
        stroke="#6fc3e8"
        strokeOpacity="0.7"
      />
      <path d="M0 8a8 8 0 0 1 8-8h36a8 8 0 0 1 8 8v10H0z" fill="#046999" />
      {[0, 1, 2].map((r) => (
        <g key={r}>
          <rect
            x="8"
            y={28 + r * 14}
            width="14"
            height="5"
            rx="2.5"
            fill="#ffffff"
            fillOpacity="0.55"
          />
          <rect
            x="28"
            y={28 + r * 14}
            width="16"
            height="5"
            rx="2.5"
            fill="#6fc3e8"
            fillOpacity="0.7"
          />
        </g>
      ))}
      <circle cx="50" cy="2" r="11" fill="#6fc3e8" />
      <path
        d="M44.5 2.5l4 4 7-7.5"
        fill="none"
        stroke="#111820"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>

    {/* refresh */}
    <path
      d="M177 28.4A18 18 0 1 1 152.4 35"
      fill="none"
      stroke="#6fc3e8"
      strokeWidth="3"
      strokeLinecap="round"
    />
    <polygon points="146,28 158,32 150,42" fill="#6fc3e8" />
    <polygon points="164,38 164,50 175,44" fill="#6fc3e8" />

    <text
      x="176"
      y="176"
      textAnchor="middle"
      fontSize="14"
      fontWeight="700"
      fill="#ffffff"
      fillOpacity="0.75"
    >
      Merge, clean, reshape
    </text>
    <rect
      x="130"
      y="190"
      width="92"
      height="6"
      rx="3"
      fill="#ffffff"
      fillOpacity="0.08"
    />
  </svg>
);

/* ───────────── 3. PowerPivot: light tile ───────────── */

const Dim = ({ x, y }) => (
  <g transform={`translate(${x} ${y})`}>
    <rect
      width="70"
      height="44"
      rx="8"
      fill="#e8f4fa"
      stroke="#046999"
      strokeWidth="1.5"
    />
    <path d="M0 8a8 8 0 0 1 8-8h54a8 8 0 0 1 8 8v6H0z" fill="#111820" />
    <rect
      x="9"
      y="22"
      width="30"
      height="5"
      rx="2.5"
      fill="#046999"
      fillOpacity="0.55"
    />
    <rect
      x="9"
      y="32"
      width="46"
      height="5"
      rx="2.5"
      fill="#046999"
      fillOpacity="0.35"
    />
  </g>
);

const One = ({ cx, cy }) => (
  <g>
    <circle cx={cx} cy={cy} r="10" fill="#046999" />
    <text
      x={cx}
      y={cy + 5}
      textAnchor="middle"
      fontSize="14"
      fontWeight="700"
      fill="#ffffff"
    >
      1
    </text>
  </g>
);

export const PowerPivotArt = () => (
  <svg viewBox="0 0 320 220" {...svgProps}>
    {/* relationships */}
    <g
      fill="none"
      stroke="#046999"
      strokeWidth="2"
      strokeLinejoin="round"
      strokeLinecap="round"
    >
      <path d="M65 60V100H96" />
      <path d="M255 60V100H224" />
      <path d="M65 160V120H96" />
      <path d="M255 160V120H224" />
      {/* crow's feet */}
      <path d="M96 100L110 92M96 100L110 108M96 120L110 112M96 120L110 128" />
      <path d="M224 100L210 92M224 100L210 108M224 120L210 112M224 120L210 128" />
    </g>
    <One cx={65} cy={74} />
    <One cx={255} cy={74} />
    <One cx={65} cy={146} />
    <One cx={255} cy={146} />

    <Dim x={30} y={16} />
    <Dim x={220} y={16} />
    <Dim x={30} y={160} />
    <Dim x={220} y={160} />

    {/* fact table */}
    <g transform="translate(110 78)">
      <rect width="100" height="64" rx="8" fill="#046999" />
      <path d="M0 8a8 8 0 0 1 8-8h84a8 8 0 0 1 8 8v12H0z" fill="#034e72" />
      <rect
        x="10"
        y="7"
        width="34"
        height="6"
        rx="3"
        fill="#ffffff"
        fillOpacity="0.8"
      />
      {[0, 1, 2].map((r) => (
        <g key={r}>
          <rect
            x="10"
            y={28 + r * 12}
            width="22"
            height="5"
            rx="2.5"
            fill="#ffffff"
            fillOpacity="0.75"
          />
          <rect
            x="40"
            y={28 + r * 12}
            width={30 + r * 8}
            height="5"
            rx="2.5"
            fill="#6fc3e8"
          />
        </g>
      ))}
    </g>

    {/* time intelligence */}
    <circle
      cx="160"
      cy="38"
      r="20"
      fill="#ffffff"
      stroke="#046999"
      strokeWidth="2.5"
    />
    <path
      d="M160 38V26M160 38l8 5"
      stroke="#046999"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <circle cx="160" cy="38" r="2.5" fill="#046999" />

    {/* DAX measure */}
    <rect x="112" y="166" width="96" height="32" rx="16" fill="#111820" />
    <text
      x="160"
      y="187"
      textAnchor="middle"
      fontSize="14"
      fontWeight="700"
      letterSpacing="1"
      fill="#ffffff"
    >
      DAX
    </text>
  </svg>
);

/* ───────────── 4. Dashboards: dark surface tile ───────────── */

const KPIS = [
  ["$2.4m", "+12%"],
  ["18.2k", "+4%"],
  ["94%", "+2%"],
];

export const DashboardsArt = () => (
  <svg viewBox="0 0 440 340" {...svgProps}>
    <rect
      x="46"
      y="48"
      width="384"
      height="262"
      rx="16"
      fill="#111820"
      transform="rotate(2.5 238 179)"
    />

    <g transform="translate(28 30)">
      <rect
        width="384"
        height="262"
        rx="16"
        fill="#1a2a3a"
        stroke="#ffffff"
        strokeOpacity="0.12"
      />
      <circle cx="20" cy="21" r="4" fill="#ffffff" fillOpacity="0.35" />
      <circle cx="34" cy="21" r="4" fill="#ffffff" fillOpacity="0.35" />
      <circle cx="48" cy="21" r="4" fill="#ffffff" fillOpacity="0.35" />
      <rect x="232" y="10" width="48" height="22" rx="11" fill="#6fc3e8" />
      <rect
        x="284"
        y="10"
        width="48"
        height="22"
        rx="11"
        fill="#ffffff"
        fillOpacity="0.12"
      />
      <rect
        x="336"
        y="10"
        width="36"
        height="22"
        rx="11"
        fill="#ffffff"
        fillOpacity="0.12"
      />

      {KPIS.map(([v, d], i) => (
        <g key={v} transform={`translate(${14 + i * 128} 48)`}>
          <rect width="116" height="72" rx="10" fill="#18232e" />
          <rect
            x="12"
            y="11"
            width="46"
            height="5"
            rx="2.5"
            fill="#ffffff"
            fillOpacity="0.35"
          />
          <text x="12" y="42" fontSize="22" fontWeight="700" fill="#ffffff">
            {v}
          </text>
          <text x="12" y="62" fontSize="14" fontWeight="700" fill="#6fc3e8">
            {d}
          </text>
          <path
            d="M80 60l8-8 6 4 10-12"
            fill="none"
            stroke="#6fc3e8"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      ))}

      {/* line + area chart */}
      <rect x="14" y="132" width="236" height="118" rx="10" fill="#18232e" />
      <path
        d="M28 160H236M28 190H236M28 220H236"
        stroke="#ffffff"
        strokeOpacity="0.08"
      />
      <path
        d="M28 222L68 198L108 208L148 174L188 184L228 150V236H28Z"
        fill="#6fc3e8"
        fillOpacity="0.16"
      />
      <path
        d="M28 222L68 198L108 208L148 174L188 184L228 150"
        fill="none"
        stroke="#6fc3e8"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {[
        [28, 222],
        [68, 198],
        [108, 208],
        [148, 174],
        [188, 184],
        [228, 150],
      ].map(([cx, cy]) => (
        <circle
          key={cx}
          cx={cx}
          cy={cy}
          r="4.5"
          fill="#18232e"
          stroke="#6fc3e8"
          strokeWidth="2"
        />
      ))}
      <rect x="122" y="140" width="52" height="24" rx="6" fill="#6fc3e8" />
      <text
        x="148"
        y="157"
        textAnchor="middle"
        fontSize="14"
        fontWeight="700"
        fill="#111820"
      >
        Jul
      </text>
      <path
        d="M148 164V170"
        stroke="#6fc3e8"
        strokeWidth="2"
        strokeLinecap="round"
      />

      {/* donut */}
      <rect x="262" y="132" width="108" height="118" rx="10" fill="#18232e" />
      <g
        transform="translate(316 184) rotate(-90)"
        fill="none"
        strokeWidth="14"
      >
        <circle r="30" stroke="#ffffff" strokeOpacity="0.14" />
        <circle r="30" stroke="#6fc3e8" strokeDasharray="128 189" />
        <circle
          r="30"
          stroke="#046999"
          strokeDasharray="36 189"
          strokeDashoffset="-128"
        />
      </g>
      <text
        x="316"
        y="190"
        textAnchor="middle"
        fontSize="16"
        fontWeight="700"
        fill="#ffffff"
      >
        68%
      </text>
      <circle cx="292" cy="232" r="4" fill="#6fc3e8" />
      <circle cx="316" cy="232" r="4" fill="#046999" />
      <circle cx="340" cy="232" r="4" fill="#ffffff" fillOpacity="0.3" />
    </g>

    {/* cursor */}
    <path
      d="M352 244l0 24 7-6 5 12 7-3-5-11 10-1z"
      fill="#ffffff"
      stroke="#111820"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />

    {/* auto-refresh badge */}
    <circle
      cx="52"
      cy="300"
      r="28"
      fill="#046999"
      stroke="#6fc3e8"
      strokeOpacity="0.5"
    />
    <path
      d="M38 298a14 14 0 0 1 24-8"
      fill="none"
      stroke="#ffffff"
      strokeWidth="3"
      strokeLinecap="round"
    />
    <polygon points="64,282 66,296 54,292" fill="#ffffff" />
    <path
      d="M66 304a14 14 0 0 1-24 8"
      fill="none"
      stroke="#ffffff"
      strokeWidth="3"
      strokeLinecap="round"
    />
    <polygon points="40,320 38,306 50,310" fill="#ffffff" />
  </svg>
);

/* ───────────── 5. VBA automation: tint tile ───────────── */

export const VbaArt = () => (
  <svg viewBox="0 0 320 220" {...svgProps}>
    {/* report stack */}
    <g transform="translate(26 54)">
      <rect
        x="10"
        y="6"
        width="76"
        height="100"
        rx="8"
        fill="#ffffff"
        stroke="#046999"
        strokeOpacity="0.35"
        transform="rotate(-9 48 56)"
      />
      <rect
        x="5"
        y="3"
        width="76"
        height="100"
        rx="8"
        fill="#ffffff"
        stroke="#046999"
        strokeOpacity="0.5"
        transform="rotate(-4 43 53)"
      />
      <rect
        width="76"
        height="100"
        rx="8"
        fill="#ffffff"
        stroke="#046999"
        strokeWidth="1.5"
      />
      <rect
        x="10"
        y="10"
        width="38"
        height="6"
        rx="3"
        fill="#0b2433"
        fillOpacity="0.75"
      />
      {[14, 26, 20, 34].map((h, i) => (
        <rect
          key={i}
          x={10 + i * 16}
          y={68 - h}
          width="10"
          height={h}
          rx="2"
          fill={i === 3 ? "#6fc3e8" : "#046999"}
        />
      ))}
      <rect
        x="10"
        y="76"
        width="56"
        height="4"
        rx="2"
        fill="#9a9da1"
        fillOpacity="0.6"
      />
      <rect
        x="10"
        y="86"
        width="40"
        height="4"
        rx="2"
        fill="#9a9da1"
        fillOpacity="0.6"
      />
    </g>

    {/* run button */}
    <circle
      cx="160"
      cy="112"
      r="45"
      fill="none"
      stroke="#046999"
      strokeWidth="2"
      strokeDasharray="3 8"
      strokeLinecap="round"
    />
    <circle cx="160" cy="112" r="32" fill="#046999" />
    <polygon points="152,98 152,126 177,112" fill="#ffffff" />

    {/* arrows */}
    <path
      d="M108 112H114"
      stroke="#046999"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <path
      d="M206 112H214"
      stroke="#046999"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <polygon points="212,106 222,112 212,118" fill="#046999" />

    {/* envelope */}
    <g transform="translate(224 84)">
      <rect
        width="78"
        height="54"
        rx="8"
        fill="#ffffff"
        stroke="#046999"
        strokeWidth="1.5"
      />
      <path
        d="M0 8L39 34 78 8"
        fill="none"
        stroke="#046999"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M66 14V-4a5 5 0 0 1 10 0V14"
        fill="none"
        stroke="#046999"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <circle cx="78" cy="56" r="11" fill="#046999" />
      <path
        d="M72.5 56.5l4 4 7-7.5"
        fill="none"
        stroke="#ffffff"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>

    {/* schedule clock */}
    <circle
      cx="160"
      cy="30"
      r="17"
      fill="#ffffff"
      stroke="#0b2433"
      strokeWidth="2"
    />
    <path
      d="M160 30V19M160 30l7 4"
      stroke="#0b2433"
      strokeWidth="2.2"
      strokeLinecap="round"
    />

    {/* code window */}
    <g transform="translate(92 168)">
      <rect width="136" height="38" rx="8" fill="#111820" />
      <circle cx="12" cy="11" r="3" fill="#ffffff" fillOpacity="0.35" />
      <circle cx="23" cy="11" r="3" fill="#ffffff" fillOpacity="0.35" />
      <rect x="36" y="8" width="38" height="5" rx="2.5" fill="#6fc3e8" />
      <rect
        x="12"
        y="22"
        width="22"
        height="5"
        rx="2.5"
        fill="#ffffff"
        fillOpacity="0.5"
      />
      <rect
        x="38"
        y="22"
        width="60"
        height="5"
        rx="2.5"
        fill="#6fc3e8"
        fillOpacity="0.55"
      />
    </g>
  </svg>
);

/* ───────────── 6. Power BI: deep accent tile ───────────── */

export const PowerBiArt = () => (
  <svg viewBox="0 0 360 220" {...svgProps}>
    {/* share nodes */}
    <g stroke="#6fc3e8" strokeWidth="2" strokeLinecap="round">
      <path d="M40 40L72 26M40 40L72 58" />
    </g>
    <g fill="#6fc3e8">
      <circle cx="40" cy="40" r="8" />
      <circle cx="72" cy="26" r="8" />
      <circle cx="72" cy="58" r="8" />
    </g>

    {/* spreadsheet */}
    <g transform="translate(12 106)">
      <rect
        width="64"
        height="62"
        rx="8"
        fill="#ffffff"
        fillOpacity="0.1"
        stroke="#ffffff"
        strokeOpacity="0.4"
      />
      <path
        d="M0 21h64M0 41h64M22 0v62M43 0v62"
        stroke="#ffffff"
        strokeOpacity="0.3"
      />
      <rect
        x="25"
        y="24"
        width="15"
        height="14"
        rx="2"
        fill="#6fc3e8"
        fillOpacity="0.7"
      />
      <rect
        x="46"
        y="44"
        width="15"
        height="14"
        rx="2"
        fill="#6fc3e8"
        fillOpacity="0.4"
      />
    </g>
    <path
      d="M80 136C96 136 98 106 112 106"
      fill="none"
      stroke="#6fc3e8"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeDasharray="1 7"
    />
    <polygon points="108,100 120,106 108,112" fill="#6fc3e8" />

    {/* laptop */}
    <rect
      x="124"
      y="22"
      width="190"
      height="118"
      rx="10"
      fill="#111820"
      stroke="#ffffff"
      strokeOpacity="0.4"
      strokeWidth="2"
    />
    <rect
      x="142"
      y="36"
      width="44"
      height="6"
      rx="3"
      fill="#ffffff"
      fillOpacity="0.5"
    />
    <rect
      x="142"
      y="48"
      width="28"
      height="5"
      rx="2.5"
      fill="#ffffff"
      fillOpacity="0.25"
    />
    {[30, 50, 38, 66, 48].map((h, i) => (
      <g key={i}>
        <rect
          x={146 + i * 26}
          y={124 - h}
          width="16"
          height={h}
          rx="3"
          fill="#6fc3e8"
          fillOpacity="0.85"
        />
      </g>
    ))}
    <path
      d="M154 100L180 86L206 92L232 70L258 78"
      fill="none"
      stroke="#ffffff"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M110 140H328L320 154H118Z" fill="#ffffff" fillOpacity="0.25" />
    <rect
      x="193"
      y="140"
      width="52"
      height="5"
      rx="2.5"
      fill="#ffffff"
      fillOpacity="0.3"
    />

    {/* phone */}
    <g transform="translate(272 62)">
      <rect
        width="76"
        height="142"
        rx="14"
        fill="#18232e"
        stroke="#ffffff"
        strokeOpacity="0.6"
        strokeWidth="2"
      />
      <rect
        x="26"
        y="8"
        width="24"
        height="5"
        rx="2.5"
        fill="#ffffff"
        fillOpacity="0.3"
      />
      <g transform="translate(38 52) rotate(-90)" fill="none" strokeWidth="9">
        <circle r="17" stroke="#ffffff" strokeOpacity="0.18" />
        <circle r="17" stroke="#6fc3e8" strokeDasharray="70 107" />
        <circle
          r="17"
          stroke="#046999"
          strokeDasharray="22 107"
          strokeDashoffset="-70"
        />
      </g>
      {[16, 28, 20].map((h, i) => (
        <rect
          key={i}
          x={14 + i * 18}
          y={118 - h}
          width="12"
          height={h}
          rx="3"
          fill="#6fc3e8"
          fillOpacity={0.9 - i * 0.2}
        />
      ))}
      <rect
        x="24"
        y="130"
        width="28"
        height="4"
        rx="2"
        fill="#ffffff"
        fillOpacity="0.35"
      />
    </g>

    {/* live signal */}
    <g fill="none" stroke="#6fc3e8" strokeWidth="3" strokeLinecap="round">
      <path d="M322 48a12 12 0 0 1 16 0" />
      <path d="M316 41a20 20 0 0 1 28 0" />
      <path d="M310 34a28 28 0 0 1 40 0" />
    </g>
    <circle cx="330" cy="54" r="3.5" fill="#6fc3e8" />
  </svg>
);
