// /app/services/microsoft-excel/pivot-tables-charts-and-reporting-solutions/(svgs)/PivotIndustriesArt.jsx
// One spot illustration per industry panel, drawn for the dark panel surface.
// Decorative only (aria-hidden). riseClass (from the module) lets the bars grow in.
// Colour tokens (hard-coded hex):
//   #046999 $accent         #6fc3e8 $accent-on-dark  #111820 $dark-bg
//   #18232e $dark-surface   #1a2a3a $dark-mid        #ffffff $white (with opacity)
import React from "react";

const svgProps = {
  viewBox: "0 0 360 260",
  fontFamily: "aptos",
  "aria-hidden": "true",
  focusable: "false",
  style: { width: "100%", height: "auto", display: "block" },
};

const Person = ({ x, y, r = 14, fill = "#6fc3e8" }) => (
  <g transform={`translate(${x} ${y})`}>
    <circle r={r} fill="#1a2a3a" stroke={fill} strokeWidth="2" />
    <circle cy={-r * 0.2} r={r * 0.3} fill={fill} />
    <path
      d={`M${-r * 0.55} ${r * 0.62}a${r * 0.55} ${r * 0.45} 0 0 1 ${r * 1.1} 0`}
      fill={fill}
    />
  </g>
);

export const FinanceArt = ({ riseClass }) => (
  <svg {...svgProps}>
    <rect x="22" y="28" width="196" height="204" rx="14" fill="#1a2a3a" />
    <rect
      x="38"
      y="44"
      width="70"
      height="8"
      rx="4"
      fill="#ffffff"
      fillOpacity="0.6"
    />
    <rect
      x="38"
      y="60"
      width="42"
      height="6"
      rx="3"
      fill="#ffffff"
      fillOpacity="0.25"
    />
    <path
      d="M38 120H202M38 150H202M38 180H202"
      stroke="#ffffff"
      strokeOpacity="0.08"
    />
    <g className={riseClass}>
      {[56, 92, 70, 112, 84, 130].map((h, i) => (
        <g key={i}>
          <rect
            x={44 + i * 26}
            y={206 - h}
            width="18"
            height={h}
            rx="4"
            fill={i === 5 ? "#6fc3e8" : "#046999"}
          />
          <rect
            x={44 + i * 26}
            y={206 - h}
            width="18"
            height="5"
            rx="2.5"
            fill="#6fc3e8"
          />
        </g>
      ))}
    </g>
    <path
      d="M53 150L79 114L105 136L131 96L157 118L183 76"
      fill="none"
      stroke="#ffffff"
      strokeOpacity="0.85"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M38 206H202" stroke="#ffffff" strokeOpacity="0.25" />

    <g transform="translate(236 38)">
      <rect
        width="104"
        height="64"
        rx="12"
        fill="#111820"
        stroke="#6fc3e8"
        strokeOpacity="0.5"
      />
      <text x="14" y="28" fontSize="16" fontWeight="700" fill="#ffffff">
        P&amp;L
      </text>
      <rect x="14" y="40" width="48" height="6" rx="3" fill="#6fc3e8" />
      <rect
        x="14"
        y="50"
        width="30"
        height="5"
        rx="2.5"
        fill="#ffffff"
        fillOpacity="0.3"
      />
      <path
        d="M72 46l8-8 6 4 10-12"
        fill="none"
        stroke="#6fc3e8"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>

    {[0, 1, 2, 3].map((i) => (
      <g key={i}>
        <ellipse cx="288" cy={216 - i * 16} rx="44" ry="13" fill="#046999" />
        <ellipse
          cx="288"
          cy={211 - i * 16}
          rx="44"
          ry="13"
          fill="#6fc3e8"
          fillOpacity={i === 3 ? 1 : 0.55}
        />
      </g>
    ))}
    <ellipse
      cx="288"
      cy="147"
      rx="18"
      ry="5"
      fill="none"
      stroke="#111820"
      strokeWidth="2"
    />
  </svg>
);

export const SalesArt = ({ riseClass }) => (
  <svg {...svgProps}>
    <g className={riseClass}>
      {[
        [30, 190, 0.95],
        [52, 150, 0.75],
        [74, 110, 0.55],
        [96, 70, 0.35],
      ].map(([x, w, o], i) => (
        <path
          key={i}
          d={`M${130 - w / 2} ${34 + i * 50}h${w}l-14 40h${-(w - 28)}z`}
          fill="#046999"
          fillOpacity={o}
        />
      ))}
    </g>
    {[0, 1, 2, 3].map((i) => (
      <rect
        key={i}
        x={118 - (3 - i) * 0 - (i === 3 ? 0 : 0)}
        y={50 + i * 50}
        width="24"
        height="6"
        rx="3"
        fill="#ffffff"
        fillOpacity="0.7"
      />
    ))}
    <path
      d="M130 218v12"
      stroke="#6fc3e8"
      strokeWidth="3"
      strokeLinecap="round"
    />
    <circle cx="130" cy="236" r="6" fill="#6fc3e8" />

    {/* target */}
    <g transform="translate(278 70)">
      <circle r="46" fill="#1a2a3a" />
      <circle r="34" fill="none" stroke="#046999" strokeWidth="6" />
      <circle r="20" fill="none" stroke="#6fc3e8" strokeWidth="6" />
      <circle r="7" fill="#ffffff" />
      <path
        d="M0 0L38 -34"
        stroke="#ffffff"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path d="M30 -38l10 -2-2 10z" fill="#6fc3e8" />
    </g>

    {/* growth bars */}
    <g className={riseClass}>
      {[26, 44, 62, 86].map((h, i) => (
        <rect
          key={i}
          x={236 + i * 26}
          y={230 - h}
          width="18"
          height={h}
          rx="4"
          fill={i === 3 ? "#6fc3e8" : "#046999"}
        />
      ))}
    </g>
    <path d="M236 230H334" stroke="#ffffff" strokeOpacity="0.25" />
  </svg>
);

export const OperationsArt = ({ riseClass }) => (
  <svg {...svgProps}>
    {/* gauge */}
    <g transform="translate(280 78)">
      <path
        d="M-52 0a52 52 0 0 1 104 0"
        fill="none"
        stroke="#ffffff"
        strokeOpacity="0.12"
        strokeWidth="14"
        strokeLinecap="round"
      />
      <path
        d="M-52 0a52 52 0 0 1 80 -44"
        fill="none"
        stroke="#6fc3e8"
        strokeWidth="14"
        strokeLinecap="round"
      />
      <path
        d="M0 0L22 -34"
        stroke="#ffffff"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <circle r="8" fill="#046999" stroke="#ffffff" strokeWidth="2" />
    </g>

    {/* shelving */}
    <g
      stroke="#6fc3e8"
      strokeOpacity="0.5"
      strokeWidth="3"
      strokeLinecap="round"
    >
      <path d="M30 36V176M200 36V176M30 74H200M30 126H200" />
    </g>
    <g className={riseClass}>
      <rect x="42" y="42" width="40" height="30" rx="4" fill="#046999" />
      <rect x="90" y="42" width="28" height="30" rx="4" fill="#6fc3e8" />
      <rect
        x="126"
        y="42"
        width="60"
        height="30"
        rx="4"
        fill="#046999"
        fillOpacity="0.7"
      />
      <rect
        x="42"
        y="94"
        width="56"
        height="30"
        rx="4"
        fill="#6fc3e8"
        fillOpacity="0.8"
      />
      <rect x="106" y="94" width="40" height="30" rx="4" fill="#046999" />
      <rect
        x="42"
        y="146"
        width="36"
        height="28"
        rx="4"
        fill="#046999"
        fillOpacity="0.7"
      />
      <rect x="86" y="146" width="56" height="28" rx="4" fill="#6fc3e8" />
    </g>
    <path
      d="M60 52h14M104 52h8M140 52h30M58 104h26"
      stroke="#111820"
      strokeOpacity="0.5"
      strokeWidth="3"
      strokeLinecap="round"
    />

    {/* conveyor */}
    <rect
      x="20"
      y="206"
      width="320"
      height="18"
      rx="9"
      fill="#1a2a3a"
      stroke="#6fc3e8"
      strokeOpacity="0.4"
    />
    {[44, 84, 124, 164, 204, 244, 284, 320].map((x) => (
      <circle key={x} cx={x} cy="215" r="4" fill="#6fc3e8" fillOpacity="0.6" />
    ))}
    <g className={riseClass}>
      <rect x="236" y="168" width="40" height="34" rx="5" fill="#046999" />
      <path d="M236 180h40M256 168v12" stroke="#6fc3e8" strokeWidth="2.5" />
      <rect x="290" y="178" width="30" height="24" rx="5" fill="#6fc3e8" />
    </g>
  </svg>
);

export const HrArt = ({ riseClass }) => (
  <svg {...svgProps}>
    <g
      fill="none"
      stroke="#6fc3e8"
      strokeOpacity="0.5"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M180 76V104M96 104H264M96 104V132M264 104V132M180 104V132" />
      <path d="M96 164V176M60 176H132M60 176V190M132 176V190M264 164V176M228 176H300M228 176V190M300 176V190" />
    </g>
    <circle cx="180" cy="52" r="30" fill="#046999" fillOpacity="0.35" />
    <Person x={180} y={52} r={22} />
    <Person x={96} y={148} r={18} fill="#ffffff" />
    <Person x={180} y={148} r={18} />
    <Person x={264} y={148} r={18} fill="#ffffff" />
    {[60, 132, 228, 300].map((x, i) => (
      <Person
        key={x}
        x={x}
        y={210}
        r={14}
        fill={i % 2 ? "#6fc3e8" : "#ffffff"}
      />
    ))}
    <g className={riseClass} transform="translate(8 0)">
      {[14, 24, 34].map((h, i) => (
        <rect
          key={i}
          x={286 + i * 20}
          y={78 - h}
          width="12"
          height={h}
          rx="3"
          fill="#046999"
        />
      ))}
    </g>
    <rect
      x="22"
      y="40"
      width="64"
      height="22"
      rx="11"
      fill="#111820"
      stroke="#6fc3e8"
      strokeOpacity="0.5"
    />
    <rect x="34" y="48" width="40" height="6" rx="3" fill="#6fc3e8" />
  </svg>
);

export const ConstructionArt = ({ riseClass }) => (
  <svg {...svgProps}>
    {/* crane */}
    <g
      stroke="#6fc3e8"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    >
      <path
        d="M250 232V30M274 232V30M250 54L274 78L250 102L274 126L250 150L274 174L250 198L274 222"
        strokeOpacity="0.55"
      />
      <path d="M40 34H330" />
      <path d="M262 14V34M214 34L262 14L310 34" />
      <path d="M90 34V90" strokeOpacity="0.7" />
    </g>
    <rect x="260" y="26" width="26" height="16" rx="3" fill="#046999" />
    <rect x="70" y="90" width="40" height="22" rx="4" fill="#6fc3e8" />

    {/* building rising */}
    <g className={riseClass}>
      {[0, 1, 2, 3].map((i) => (
        <g key={i}>
          <rect
            x="40"
            y={192 - i * 34}
            width="150"
            height="30"
            rx="4"
            fill="#046999"
            fillOpacity={1 - i * 0.14}
          />
          {[0, 1, 2, 3].map((w) => (
            <rect
              key={w}
              x={52 + w * 34}
              y={200 - i * 34}
              width="20"
              height="14"
              rx="2"
              fill="#6fc3e8"
              fillOpacity="0.8"
            />
          ))}
        </g>
      ))}
    </g>
    <path
      d="M24 226H336"
      stroke="#ffffff"
      strokeOpacity="0.3"
      strokeWidth="2"
    />

    {/* progress */}
    <rect
      x="40"
      y="238"
      width="150"
      height="8"
      rx="4"
      fill="#ffffff"
      fillOpacity="0.12"
    />
    <rect x="40" y="238" width="104" height="8" rx="4" fill="#6fc3e8" />
  </svg>
);

export const HealthcareArt = ({ riseClass }) => (
  <svg {...svgProps}>
    {/* heartbeat */}
    <path
      d="M20 44H100L116 18L134 72L152 30L162 44H340"
      fill="none"
      stroke="#6fc3e8"
      strokeWidth="3.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    {/* clipboard */}
    <g transform="translate(30 90)">
      <rect
        width="130"
        height="150"
        rx="14"
        fill="#1a2a3a"
        stroke="#ffffff"
        strokeOpacity="0.18"
      />
      <rect x="38" y="-8" width="54" height="20" rx="8" fill="#046999" />
      {[0, 1, 2].map((r) => (
        <g key={r}>
          <circle
            cx="26"
            cy={44 + r * 36}
            r="10"
            fill="#6fc3e8"
            fillOpacity={r === 2 ? 0.25 : 1}
          />
          {r < 2 && (
            <path
              d={`M21 ${44 + r * 36}l4 4 7-8`}
              fill="none"
              stroke="#111820"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          )}
          <rect
            x="46"
            y={38 + r * 36}
            width={60 - r * 8}
            height="6"
            rx="3"
            fill="#ffffff"
            fillOpacity="0.6"
          />
          <rect
            x="46"
            y={50 + r * 36}
            width="40"
            height="5"
            rx="2.5"
            fill="#ffffff"
            fillOpacity="0.25"
          />
        </g>
      ))}
    </g>

    {/* calendar */}
    <g transform="translate(190 96)">
      <rect
        width="144"
        height="108"
        rx="12"
        fill="#1a2a3a"
        stroke="#ffffff"
        strokeOpacity="0.18"
      />
      <path
        d="M0 12a12 12 0 0 1 12-12h120a12 12 0 0 1 12 12v18H0z"
        fill="#046999"
      />
      {[0, 1, 2, 3, 4].map((c) =>
        [0, 1, 2].map((r) => (
          <rect
            key={`${c}-${r}`}
            x={12 + c * 25}
            y={42 + r * 20}
            width="18"
            height="13"
            rx="3"
            fill={c === 3 && r === 1 ? "#6fc3e8" : "#ffffff"}
            fillOpacity={c === 3 && r === 1 ? 1 : 0.14}
          />
        )),
      )}
    </g>

    {/* volume bars + plus badge */}
    <g className={riseClass}>
      {[18, 30, 24, 40].map((h, i) => (
        <rect
          key={i}
          x={200 + i * 22}
          y={236 - h}
          width="14"
          height={h}
          rx="3"
          fill={i === 3 ? "#6fc3e8" : "#046999"}
        />
      ))}
    </g>
    <circle cx="312" cy="212" r="22" fill="#6fc3e8" />
    <path
      d="M312 202v20M302 212h20"
      stroke="#111820"
      strokeWidth="5"
      strokeLinecap="round"
    />
  </svg>
);
