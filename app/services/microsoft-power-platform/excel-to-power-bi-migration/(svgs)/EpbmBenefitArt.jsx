// /app/services/microsoft-power-platform/excel-to-power-bi-migration/(svgs)/EpbmBenefitArt.jsx

// Spot illustrations for the EpbmBenefits bento. Decorative (aria-hidden).
// All except EpbmDecisionArt sit on $dark-surface cards; EpbmDecisionArt sits
// on the solid $accent CTA tile. Colours (globals.scss tokens):
//   #6fc3e8 $accent-on-dark   #046999 $accent   #0eaa0e $success
//   #111820 $dark-bg          white at 6-75% ($white-xx)

const svgProps = {
  xmlns: "http://www.w3.org/2000/svg",
  "aria-hidden": "true",
  focusable: "false",
};

// Trend line that keeps updating, with a refresh timeline underneath
export const EpbmRealtimeArt = () => (
  <svg viewBox="0 0 300 180" {...svgProps}>
    <rect
      x="0"
      y="0"
      width="300"
      height="180"
      rx="16"
      fill="rgba(255,255,255,0.05)"
    />
    {[50, 90, 130].map((y) => (
      <line
        key={y}
        x1="20"
        y1={y}
        x2="280"
        y2={y}
        stroke="rgba(255,255,255,0.08)"
      />
    ))}
    <path
      d="M20 122 L60 108 L100 114 L140 86 L180 94 L220 66 L256 50 L256 140 L20 140 Z"
      fill="rgba(4,105,153,0.35)"
    />
    <path
      d="M20 122 L60 108 L100 114 L140 86 L180 94 L220 66 L256 50"
      fill="none"
      stroke="#6fc3e8"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M256 50 L280 40"
      fill="none"
      stroke="#6fc3e8"
      strokeWidth="3"
      strokeLinecap="round"
      strokeDasharray="3 6"
    />
    <circle
      cx="256"
      cy="50"
      r="13"
      fill="none"
      stroke="#6fc3e8"
      strokeOpacity="0.4"
      strokeWidth="2"
    />
    <circle cx="256" cy="50" r="6" fill="#6fc3e8" />
    <circle cx="28" cy="24" r="4" fill="#0eaa0e" />
    <rect
      x="38"
      y="21"
      width="62"
      height="6"
      rx="3"
      fill="rgba(255,255,255,0.35)"
    />
    {/* refresh ticks */}
    {[40, 90, 140, 190, 240].map((x) => (
      <g key={x}>
        <circle
          cx={x}
          cy="160"
          r="4"
          fill={x === 240 ? "#6fc3e8" : "rgba(255,255,255,0.25)"}
        />
      </g>
    ))}
    <line
      x1="44"
      y1="160"
      x2="236"
      y2="160"
      stroke="rgba(255,255,255,0.15)"
      strokeDasharray="2 6"
    />
  </svg>
);

// A bar chart filtered by a chip, one bar selected by a cursor
export const EpbmInteractiveArt = () => (
  <svg viewBox="0 0 220 110" {...svgProps}>
    <rect x="6" y="6" width="56" height="18" rx="9" fill="#6fc3e8" />
    <rect x="14" y="13" width="28" height="4" rx="2" fill="#111820" />
    <path
      d="M48 12 l6 6 m0 -6 l-6 6"
      stroke="#111820"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
    <rect
      x="68"
      y="6"
      width="44"
      height="18"
      rx="9"
      fill="rgba(255,255,255,0.1)"
    />
    <rect
      x="76"
      y="13"
      width="28"
      height="4"
      rx="2"
      fill="rgba(255,255,255,0.4)"
    />
    {[36, 52, 28, 66, 44, 58].map((h, i) => (
      <rect
        key={i}
        x={10 + i * 28}
        y={104 - h}
        width="18"
        height={h}
        rx="4"
        fill={i === 3 ? "#6fc3e8" : "rgba(255,255,255,0.14)"}
      />
    ))}
    <path
      d="M100 52 L100 76 L106 70 L111 81 L116 79 L111 68 L119 68 Z"
      fill="#ffffff"
      stroke="#111820"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
    <rect
      x="150"
      y="30"
      width="62"
      height="34"
      rx="8"
      fill="rgba(255,255,255,0.12)"
      stroke="rgba(111,195,232,0.5)"
    />
    <rect x="158" y="38" width="30" height="5" rx="2.5" fill="#6fc3e8" />
    <rect
      x="158"
      y="49"
      width="44"
      height="5"
      rx="2.5"
      fill="rgba(255,255,255,0.4)"
    />
  </svg>
);

// A data store with rows streaming in and still room to spare
export const EpbmScaleArt = () => (
  <svg viewBox="0 0 220 110" {...svgProps}>
    {[18, 34, 50, 66, 82].map((y, i) => (
      <rect
        key={y}
        x={6 + i * 6}
        y={y}
        width={60 - i * 8}
        height="6"
        rx="3"
        fill="rgba(255,255,255,0.15)"
        opacity={1 - i * 0.12}
      />
    ))}
    <path
      d="M78 54 H104"
      stroke="#6fc3e8"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeDasharray="4 5"
    />
    <path
      d="M100 48 l7 6 -7 6"
      fill="none"
      stroke="#6fc3e8"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M118 22 v64 c0 8 18 14 40 14 s40 -6 40 -14 v-64"
      fill="rgba(4,105,153,0.35)"
      stroke="#6fc3e8"
      strokeWidth="2"
    />
    <ellipse
      cx="158"
      cy="22"
      rx="40"
      ry="12"
      fill="#18232e"
      stroke="#6fc3e8"
      strokeWidth="2"
    />
    <path
      d="M118 46 c0 8 18 14 40 14 s40 -6 40 -14"
      fill="none"
      stroke="#6fc3e8"
      strokeWidth="2"
    />
    <path
      d="M118 68 c0 8 18 14 40 14 s40 -6 40 -14"
      fill="none"
      stroke="rgba(111,195,232,0.4)"
      strokeWidth="2"
      strokeDasharray="4 4"
    />
    <path
      d="M206 76 V36 M200 42 l6 -6 6 6"
      fill="none"
      stroke="rgba(255,255,255,0.55)"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Three people connected to one dashboard
export const EpbmSharedArt = () => (
  <svg viewBox="0 0 220 110" {...svgProps}>
    <g stroke="rgba(111,195,232,0.5)" strokeWidth="2" strokeDasharray="4 5">
      <path d="M40 30 L86 50" />
      <path d="M40 84 L86 66" />
      <path d="M180 30 L134 50" />
    </g>
    <rect
      x="80"
      y="30"
      width="60"
      height="50"
      rx="8"
      fill="rgba(255,255,255,0.1)"
      stroke="#6fc3e8"
      strokeWidth="1.5"
    />
    {[16, 26, 20, 32].map((h, i) => (
      <rect
        key={i}
        x={90 + i * 11}
        y={70 - h}
        width="7"
        height={h}
        rx="2"
        fill={i === 3 ? "#6fc3e8" : "rgba(255,255,255,0.45)"}
      />
    ))}
    {[
      [30, 26],
      [30, 86],
      [190, 26],
    ].map(([cx, cy]) => (
      <g key={`${cx}-${cy}`}>
        <circle cx={cx} cy={cy - 6} r="7" fill="rgba(255,255,255,0.75)" />
        <path
          d={`M${cx - 12} ${cy + 14} a12 11 0 0 1 24 0 Z`}
          fill="rgba(255,255,255,0.75)"
        />
      </g>
    ))}
    <circle
      cx="190"
      cy="86"
      r="14"
      fill="none"
      stroke="rgba(255,255,255,0.18)"
      strokeDasharray="3 4"
    />
    <path
      d="M184 86 h12 M190 80 v12"
      stroke="rgba(255,255,255,0.35)"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

// A shield in front of a table where some rows are hidden
export const EpbmSecurityArt = () => (
  <svg viewBox="0 0 220 110" {...svgProps}>
    <rect
      x="8"
      y="10"
      width="140"
      height="92"
      rx="10"
      fill="rgba(255,255,255,0.06)"
      stroke="rgba(255,255,255,0.14)"
    />
    {[24, 42, 60, 78].map((y, i) => {
      const visible = i === 0 || i === 2;
      return (
        <g key={y}>
          <rect
            x="20"
            y={y}
            width="30"
            height="8"
            rx="4"
            fill={visible ? "#6fc3e8" : "rgba(255,255,255,0.08)"}
          />
          <rect
            x="58"
            y={y}
            width="72"
            height="8"
            rx="4"
            fill={visible ? "rgba(255,255,255,0.55)" : "rgba(255,255,255,0.08)"}
          />
        </g>
      );
    })}
    <path
      d="M168 18 L206 30 V58 C206 80 190 94 168 102 C146 94 130 80 130 58 V30 Z"
      fill="#046999"
      stroke="#6fc3e8"
      strokeWidth="2"
      strokeLinejoin="round"
    />
    <rect x="156" y="54" width="24" height="20" rx="4" fill="#ffffff" />
    <path
      d="M161 54 v-6 a7 7 0 0 1 14 0 v6"
      fill="none"
      stroke="#ffffff"
      strokeWidth="3"
    />
    <circle cx="168" cy="63" r="3" fill="#046999" />
  </svg>
);

// A target with an arrow, for the solid accent CTA tile
export const EpbmDecisionArt = () => (
  <svg viewBox="0 0 120 100" {...svgProps}>
    <circle cx="52" cy="54" r="40" fill="rgba(255,255,255,0.12)" />
    <circle
      cx="52"
      cy="54"
      r="27"
      fill="none"
      stroke="rgba(255,255,255,0.55)"
      strokeWidth="3"
    />
    <circle
      cx="52"
      cy="54"
      r="14"
      fill="none"
      stroke="#ffffff"
      strokeWidth="3"
    />
    <circle cx="52" cy="54" r="5" fill="#ffffff" />
    <path
      d="M56 50 L104 12"
      stroke="#111820"
      strokeWidth="3.5"
      strokeLinecap="round"
    />
    <path
      d="M96 8 l12 0 -2 12 Z M100 18 l8 -8"
      fill="#6fc3e8"
      stroke="#111820"
      strokeWidth="2"
      strokeLinejoin="round"
    />
  </svg>
);
