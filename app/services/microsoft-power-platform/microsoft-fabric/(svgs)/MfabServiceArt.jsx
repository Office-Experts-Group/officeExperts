// /app/services/microsoft-power-platform/microsoft-fabric/(svgs)/MfabServiceArt.jsx
// One spot illustration per service tile, drawn for the tile it sits on:
// assessment (dark tile), migration (accent tile), the rest (white tiles).
// Decorative.
// Colours (tokens): #046999 $accent, #034e72 $accent-dark, #e8f4fa
// $accent-light, #cfe6f2 (light accent wash), #6fc3e8 $accent-on-dark,
// #111820 $dark-bg, #18232e $dark-surface, #c0392b $replace-x, #ffffff $white.

const svgProps = {
  viewBox: "0 0 160 110",
  "aria-hidden": "true",
  focusable: "false",
};

// Dark tile: review board with a magnifier over a chart and a cost dial
const Assessment = () => (
  <svg {...svgProps}>
    <rect
      x="8"
      y="10"
      width="100"
      height="90"
      rx="10"
      fill="#18232e"
      stroke="#ffffff"
      strokeOpacity="0.12"
    />
    <rect
      x="20"
      y="22"
      width="40"
      height="6"
      rx="3"
      fill="#ffffff"
      fillOpacity="0.7"
    />
    <g fill="#6fc3e8">
      <rect x="22" y="66" width="10" height="20" rx="2" fillOpacity="0.6" />
      <rect x="36" y="56" width="10" height="30" rx="2" />
      <rect x="50" y="60" width="10" height="26" rx="2" fillOpacity="0.6" />
      <rect x="64" y="46" width="10" height="40" rx="2" />
      <rect x="78" y="52" width="10" height="34" rx="2" fillOpacity="0.6" />
    </g>
    <circle
      cx="96"
      cy="56"
      r="22"
      fill="#111820"
      fillOpacity="0.4"
      stroke="#ffffff"
      strokeWidth="3"
    />
    <path
      d="M112 72l22 22"
      stroke="#ffffff"
      strokeWidth="6"
      strokeLinecap="round"
    />
    <path
      d="M86 58l7 7 13-14"
      fill="none"
      stroke="#6fc3e8"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle
      cx="140"
      cy="26"
      r="14"
      fill="none"
      stroke="#ffffff"
      strokeOpacity="0.2"
      strokeWidth="5"
    />
    <path
      d="M140 12a14 14 0 0 1 13 18"
      fill="none"
      stroke="#6fc3e8"
      strokeWidth="5"
    />
  </svg>
);

// White tile: workspaces stacked on the lake, with a padlock
const Implementation = () => (
  <svg {...svgProps}>
    <ellipse
      cx="80"
      cy="88"
      rx="66"
      ry="16"
      fill="#e8f4fa"
      stroke="#046999"
      strokeWidth="1.4"
    />
    <path
      d="M34 88c8-4 16-4 24 0s16 4 24 0 16-4 24 0"
      fill="none"
      stroke="#046999"
      strokeOpacity="0.35"
      strokeWidth="1.4"
    />
    {[
      { x: 26, label: "#046999" },
      { x: 64, label: "#111820" },
      { x: 102, label: "#6fc3e8" },
    ].map(({ x, label }) => (
      <g key={x}>
        <rect
          x={x}
          y="30"
          width="32"
          height="40"
          rx="6"
          fill="#ffffff"
          stroke="#cfe6f2"
          strokeWidth="1.5"
        />
        <rect x={x} y="30" width="32" height="10" rx="5" fill={label} />
        <path
          d={`M${x + 6} 50h20M${x + 6} 58h14`}
          stroke="#046999"
          strokeOpacity="0.45"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d={`M${x + 16} 70v10`}
          stroke="#046999"
          strokeWidth="1.5"
          strokeDasharray="2 2"
        />
      </g>
    ))}
    <rect x="124" y="8" width="24" height="18" rx="4" fill="#111820" />
    <path
      d="M129 8V4a7 7 0 0 1 14 0v4"
      fill="none"
      stroke="#111820"
      strokeWidth="2.4"
    />
    <circle cx="136" cy="17" r="2.5" fill="#6fc3e8" />
  </svg>
);

// White tile: code editor feeding a pipeline into a live dashboard
const CustomDev = () => (
  <svg {...svgProps}>
    <rect x="8" y="14" width="64" height="74" rx="8" fill="#111820" />
    <circle cx="18" cy="24" r="2.5" fill="#c0392b" />
    <circle cx="26" cy="24" r="2.5" fill="#6fc3e8" />
    <circle cx="34" cy="24" r="2.5" fill="#ffffff" fillOpacity="0.5" />
    <path
      d="M18 40l-6 6 6 6M30 40l6 6-6 6"
      fill="none"
      stroke="#6fc3e8"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M42 40h20M42 48h14M18 64h40M18 72h28"
      stroke="#ffffff"
      strokeOpacity="0.45"
      strokeWidth="2.4"
      strokeLinecap="round"
    />
    <path
      d="M72 50h14l6-10h10M92 40l6 10h8"
      fill="none"
      stroke="#046999"
      strokeWidth="2"
      strokeLinejoin="round"
    />
    <rect
      x="106"
      y="24"
      width="46"
      height="56"
      rx="8"
      fill="#ffffff"
      stroke="#cfe6f2"
      strokeWidth="1.5"
    />
    <path
      d="M114 66l8-8 8 4 8-12 8-4"
      fill="none"
      stroke="#046999"
      strokeWidth="2"
      strokeLinejoin="round"
    />
    <circle cx="146" cy="46" r="3.5" fill="#046999" />
    <rect x="114" y="32" width="20" height="5" rx="2.5" fill="#111820" />
  </svg>
);

// Accent tile: older server moved across into OneLake, matching totals
const Migration = () => (
  <svg {...svgProps}>
    <rect
      x="10"
      y="22"
      width="44"
      height="66"
      rx="6"
      fill="none"
      stroke="#ffffff"
      strokeOpacity="0.65"
      strokeWidth="1.8"
    />
    <path
      d="M18 36h28M18 48h28M18 60h28M18 72h28"
      stroke="#ffffff"
      strokeOpacity="0.45"
      strokeWidth="2"
    />
    <circle cx="44" cy="36" r="2" fill="#6fc3e8" />
    <circle cx="44" cy="48" r="2" fill="#6fc3e8" />
    <path
      d="M60 55h34"
      stroke="#ffffff"
      strokeWidth="2.4"
      strokeDasharray="5 4"
    />
    <path
      d="M88 47l9 8-9 8"
      fill="none"
      stroke="#ffffff"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <ellipse cx="126" cy="62" rx="28" ry="18" fill="#e8f4fa" />
    <path
      d="M106 60c6-3 12-3 18 0s12 3 18 0"
      fill="none"
      stroke="#046999"
      strokeWidth="1.6"
    />
    <rect x="104" y="14" width="44" height="22" rx="11" fill="#034e72" />
    <path
      d="M114 25l4 4 8-8"
      fill="none"
      stroke="#6fc3e8"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <rect
      x="130"
      y="23"
      width="12"
      height="4"
      rx="2"
      fill="#ffffff"
      fillOpacity="0.8"
    />
  </svg>
);

// White tile: trainer at a screen with a playbook
const Training = () => (
  <svg {...svgProps}>
    <rect
      x="44"
      y="12"
      width="104"
      height="66"
      rx="8"
      fill="#e8f4fa"
      stroke="#cfe6f2"
      strokeWidth="1.5"
    />
    <g fill="#046999">
      <rect x="58" y="50" width="10" height="16" rx="2" />
      <rect x="72" y="40" width="10" height="26" rx="2" fill="#6fc3e8" />
      <rect x="86" y="32" width="10" height="34" rx="2" />
    </g>
    <path
      d="M106 34h30M106 44h24M106 54h28"
      stroke="#046999"
      strokeOpacity="0.45"
      strokeWidth="2.4"
      strokeLinecap="round"
    />
    <path
      d="M90 78v16M76 98h28"
      stroke="#cfe6f2"
      strokeWidth="3"
      strokeLinecap="round"
    />
    <circle cx="24" cy="44" r="10" fill="#111820" />
    <path d="M8 98c0-18 7-30 16-30s16 12 16 30z" fill="#111820" />
    <path
      d="M36 74l16-14"
      stroke="#111820"
      strokeWidth="4"
      strokeLinecap="round"
    />
    <rect x="110" y="84" width="30" height="20" rx="3" fill="#046999" />
    <path d="M125 84v20" stroke="#ffffff" strokeOpacity="0.6" />
  </svg>
);

export const MfabServiceArt = ({ type }) => {
  switch (type) {
    case "assessment":
      return <Assessment />;
    case "implementation":
      return <Implementation />;
    case "development":
      return <CustomDev />;
    case "migration":
      return <Migration />;
    default:
      return <Training />;
  }
};
