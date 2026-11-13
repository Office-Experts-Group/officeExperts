// /app/services/microsoft-power-platform/excel-to-power-bi-migration/(svgs)/EpbmServiceArt.jsx

// Spot illustrations for the EpbmServices bento cards. Decorative only
// (aria-hidden): the card heading carries the meaning. Each one is drawn for
// the tile it sits on:
//   EpbmAssessArt    dark tile  ($dark-bg)  #6fc3e8, white alphas
//   EpbmTransformArt white tile             #046999, #e8f4fa, #d4d6d9, #c0392b
//   EpbmDashboardArt accent tile ($accent)  white alphas, #6fc3e8
//   EpbmTrainingArt  white tile             #046999, #e8f4fa, #d4d6d9, #0d1b2a
//   EpbmSupportArt   white tile             #046999, #e8f4fa, #d4d6d9, #0eaa0e

const svgProps = {
  xmlns: "http://www.w3.org/2000/svg",
  "aria-hidden": "true",
  focusable: "false",
};

// Magnifier over a workbook, spotting problem cells, with a route to a flag
export const EpbmAssessArt = () => (
  <svg viewBox="0 0 360 200" {...svgProps}>
    <rect
      x="10"
      y="20"
      width="200"
      height="150"
      rx="14"
      fill="rgba(255,255,255,0.05)"
      stroke="rgba(255,255,255,0.16)"
    />
    <rect
      x="10"
      y="20"
      width="200"
      height="26"
      rx="14"
      fill="rgba(255,255,255,0.06)"
    />
    {[0, 1, 2, 3].map((r) =>
      [0, 1, 2, 3].map((c) => {
        const flagged = (r === 1 && c === 2) || (r === 3 && c === 0);
        return (
          <rect
            key={`${r}-${c}`}
            x={24 + c * 46}
            y={58 + r * 26}
            width="38"
            height="18"
            rx="4"
            fill={flagged ? "rgba(111,195,232,0.2)" : "rgba(255,255,255,0.07)"}
            stroke={flagged ? "#6fc3e8" : "none"}
          />
        );
      }),
    )}
    {/* magnifier */}
    <circle
      cx="166"
      cy="104"
      r="40"
      fill="rgba(17,24,32,0.75)"
      stroke="#6fc3e8"
      strokeWidth="5"
    />
    <rect
      x="144"
      y="94"
      width="44"
      height="20"
      rx="5"
      fill="rgba(111,195,232,0.2)"
      stroke="#6fc3e8"
      strokeWidth="1.5"
    />
    <path
      d="M160 104 h16"
      stroke="#6fc3e8"
      strokeWidth="3"
      strokeLinecap="round"
    />
    <path
      d="M195 133 L222 160"
      stroke="#6fc3e8"
      strokeWidth="8"
      strokeLinecap="round"
    />
    {/* route to a flag */}
    <path
      d="M230 150 C262 150 252 92 290 92 C318 92 318 58 334 50"
      fill="none"
      stroke="rgba(255,255,255,0.4)"
      strokeWidth="2"
      strokeDasharray="5 6"
      strokeLinecap="round"
    />
    <circle cx="230" cy="150" r="5" fill="#6fc3e8" />
    <circle cx="290" cy="92" r="5" fill="rgba(255,255,255,0.6)" />
    <path
      d="M334 22 V58"
      stroke="#ffffff"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <path d="M336 23 h20 l-6 8 6 8 h-20 Z" fill="#6fc3e8" />
  </svg>
);

// Messy rows pass through a funnel and come out as a tidy table
export const EpbmTransformArt = () => (
  <svg viewBox="0 0 240 120" {...svgProps}>
    {[
      [8, 18, 40, "#d4d6d9"],
      [22, 34, 28, "#c0392b"],
      [4, 50, 46, "#d4d6d9"],
      [16, 66, 22, "#d4d6d9"],
      [10, 82, 36, "rgba(192,57,43,0.55)"],
      [26, 98, 30, "#d4d6d9"],
    ].map(([x, y, w, fill], i) => (
      <rect
        key={i}
        x={x}
        y={y}
        width={w}
        height="7"
        rx="3.5"
        fill={fill}
        transform={`rotate(${[-6, 4, -3, 7, -5, 3][i]} ${x} ${y})`}
      />
    ))}
    <path
      d="M78 20 H146 L122 58 V92 L102 102 V58 Z"
      fill="#e8f4fa"
      stroke="#046999"
      strokeWidth="2"
      strokeLinejoin="round"
    />
    <path
      d="M90 34 H134"
      stroke="#046999"
      strokeWidth="2"
      strokeLinecap="round"
      strokeDasharray="4 5"
    />
    <rect
      x="156"
      y="18"
      width="78"
      height="86"
      rx="10"
      fill="#ffffff"
      stroke="#046999"
      strokeWidth="1.5"
    />
    <rect x="156" y="18" width="78" height="18" rx="9" fill="#046999" />
    {[46, 60, 74, 88].map((y) => (
      <g key={y}>
        <rect
          x="166"
          y={y}
          width="22"
          height="6"
          rx="3"
          fill="#046999"
          opacity="0.6"
        />
        <rect x="194" y={y} width="30" height="6" rx="3" fill="#d4d6d9" />
      </g>
    ))}
  </svg>
);

// A dashboard on the accent tile, with a cursor drilling into one bar
export const EpbmDashboardArt = () => (
  <svg viewBox="0 0 240 120" {...svgProps}>
    <rect
      x="6"
      y="8"
      width="190"
      height="104"
      rx="12"
      fill="rgba(255,255,255,0.14)"
    />
    <rect
      x="18"
      y="20"
      width="44"
      height="10"
      rx="5"
      fill="rgba(255,255,255,0.5)"
    />
    <rect x="68" y="20" width="30" height="10" rx="5" fill="#ffffff" />
    {[30, 48, 38, 60, 44, 70].map((h, i) => (
      <rect
        key={i}
        x={22 + i * 26}
        y={100 - h}
        width="16"
        height={h}
        rx="3"
        fill={i === 3 ? "#ffffff" : "rgba(255,255,255,0.4)"}
      />
    ))}
    {/* tooltip */}
    <rect x="118" y="20" width="62" height="30" rx="7" fill="#ffffff" />
    <rect x="126" y="28" width="30" height="5" rx="2.5" fill="#046999" />
    <rect x="126" y="38" width="44" height="5" rx="2.5" fill="#6fc3e8" />
    {/* cursor */}
    <circle cx="108" cy="56" r="14" fill="rgba(255,255,255,0.2)" />
    <path
      d="M104 48 L104 72 L110 66 L115 77 L120 75 L115 64 L123 64 Z"
      fill="#ffffff"
      stroke="#046999"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
    {/* drill-down card */}
    <rect
      x="204"
      y="34"
      width="30"
      height="62"
      rx="8"
      fill="rgba(255,255,255,0.22)"
    />
    {[46, 58, 70, 82].map((y, i) => (
      <rect
        key={y}
        x="211"
        y={y}
        width={[16, 12, 14, 9][i]}
        height="5"
        rx="2.5"
        fill="#ffffff"
      />
    ))}
  </svg>
);

// A trainer's screen and three people learning
export const EpbmTrainingArt = () => (
  <svg viewBox="0 0 240 120" {...svgProps}>
    <rect
      x="44"
      y="6"
      width="152"
      height="74"
      rx="10"
      fill="#e8f4fa"
      stroke="#046999"
      strokeWidth="1.5"
    />
    <path
      d="M60 62 L84 46 L104 54 L132 30 L152 38 L180 20"
      fill="none"
      stroke="#046999"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="180" cy="20" r="4" fill="#046999" />
    <rect
      x="58"
      y="18"
      width="44"
      height="6"
      rx="3"
      fill="#046999"
      opacity="0.4"
    />
    <path d="M120 80 V90" stroke="#d4d6d9" strokeWidth="3" />
    {[70, 120, 170].map((cx, i) => (
      <g key={cx}>
        <circle cx={cx} cy="96" r="9" fill={i === 1 ? "#046999" : "#d4d6d9"} />
        <path
          d={`M${cx - 15} 120 a15 13 0 0 1 30 0 Z`}
          fill={i === 1 ? "#046999" : "#d4d6d9"}
        />
      </g>
    ))}
    {/* lightbulb above the middle learner */}
    <circle
      cx="214"
      cy="40"
      r="10"
      fill="#ffffff"
      stroke="#0d1b2a"
      strokeWidth="1.5"
    />
    <path
      d="M210 52 h8 M211 56 h6"
      stroke="#0d1b2a"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M214 22 v-6 M228 28 l4 -4 M200 28 l-4 -4"
      stroke="#046999"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

// A performance gauge beside a steady health line and a wrench
export const EpbmSupportArt = () => (
  <svg viewBox="0 0 320 120" {...svgProps}>
    <path
      d="M20 100 A60 60 0 0 1 140 100"
      fill="none"
      stroke="#e8f4fa"
      strokeWidth="14"
      strokeLinecap="round"
    />
    <path
      d="M20 100 A60 60 0 0 1 118 54"
      fill="none"
      stroke="#046999"
      strokeWidth="14"
      strokeLinecap="round"
    />
    <path
      d="M80 100 L116 66"
      stroke="#0d1b2a"
      strokeWidth="4"
      strokeLinecap="round"
    />
    <circle cx="80" cy="100" r="8" fill="#0d1b2a" />
    <rect
      x="166"
      y="22"
      width="146"
      height="78"
      rx="12"
      fill="#ffffff"
      stroke="#d4d6d9"
    />
    <path
      d="M178 70 H206 L214 50 L224 86 L234 60 L242 70 H300"
      fill="none"
      stroke="#046999"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="180" cy="36" r="4" fill="#0eaa0e" />
    <rect x="190" y="33" width="46" height="6" rx="3" fill="#d4d6d9" />
    <path
      d="M286 30 a10 10 0 0 0 -13 12 l-14 14 5 5 14 -14 a10 10 0 0 0 12 -13 l-6 6 -5 -1 -1 -5 Z"
      fill="#e8f4fa"
      stroke="#046999"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
  </svg>
);
