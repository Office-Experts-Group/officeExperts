// /app/services/microsoft-power-platform/power-bi-data-integration/(svgs)/PbdiRouteArt.jsx
// Spot illustrations for the three integration routes, plus the small icons for "what we review first".
// "builtin" is drawn for the light tile, "pipeline" for the pale blue tile, "custom" for the solid accent tile.
// Hex values and the tokens they match:
//   #046999 $accent, #034e72 $accent-dark, #e8f4fa $accent-light, #6fc3e8 $accent-on-dark,
//   #0b2433 $ink, #d4d6d9 $line-strong, #c0392b $before-border, #ffffff $white, #111820 $dark-bg

const Wrap = ({ children }) => (
  <svg
    viewBox="0 0 200 110"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    focusable="false"
    preserveAspectRatio="xMinYMid meet"
  >
    {children}
  </svg>
);

// Ready-made connectors feeding a report
const Builtin = () => (
  <Wrap>
    <g fill="#ffffff" stroke="#046999" strokeWidth="2.2">
      <rect x="6" y="8" width="34" height="34" rx="8" />
      <rect x="6" y="68" width="34" height="34" rx="8" />
      <rect x="48" y="38" width="34" height="34" rx="8" />
    </g>
    <path
      d="M14 20h18M14 26h18M14 32h12"
      stroke="#046999"
      strokeWidth="2.2"
      strokeLinecap="round"
    />
    <path
      d="M12 80h22v14H12zM12 87h22M21 80v14"
      fill="none"
      stroke="#046999"
      strokeWidth="2"
    />
    <path
      d="M56 58a6 6 0 0 1 3-11 8 8 0 0 1 15 2 5.5 5.5 0 0 1 0 9z"
      fill="#e8f4fa"
      stroke="#046999"
      strokeWidth="2"
      strokeLinejoin="round"
    />
    <g fill="none" stroke="#046999" strokeWidth="2.2" strokeLinecap="round">
      <path d="M40 25h14c10 0 10 20 20 20" />
      <path d="M40 85h14c10 0 10-30 20-30" />
      <path d="M82 55h22" />
    </g>
    <rect x="108" y="14" width="86" height="82" rx="12" fill="#111820" />
    <g fill="#6fc3e8">
      <rect x="122" y="62" width="12" height="20" rx="2" />
      <rect x="140" y="48" width="12" height="34" rx="2" />
      <rect x="158" y="56" width="12" height="26" rx="2" />
      <circle cx="180" cy="28" r="4" />
    </g>
    <path
      d="M122 40h30"
      stroke="#ffffff"
      strokeOpacity="0.6"
      strokeWidth="3"
      strokeLinecap="round"
    />
  </Wrap>
);

// Messy rows through a funnel into tidy rows
const Pipeline = () => (
  <Wrap>
    <g stroke="#046999" strokeWidth="2.6" strokeLinecap="round">
      <path d="M8 18h44" />
      <path d="M8 34h30" />
      <path d="M8 50h52" />
    </g>
    <rect x="56" y="10" width="10" height="10" fill="#c0392b" />
    <path
      d="M8 66h26"
      stroke="#046999"
      strokeWidth="2.6"
      strokeLinecap="round"
      strokeDasharray="3 6"
    />
    <path
      d="M72 10h50L108 52v28l-14 12V52z"
      fill="#ffffff"
      stroke="#046999"
      strokeWidth="2.4"
      strokeLinejoin="round"
    />
    <path
      d="M82 22h30M90 36h14"
      stroke="#046999"
      strokeWidth="2.2"
      strokeLinecap="round"
    />
    <path
      d="M126 36h14"
      stroke="#046999"
      strokeWidth="2.4"
      strokeLinecap="round"
    />
    <path
      d="M136 30l8 6-8 6"
      fill="none"
      stroke="#046999"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <rect
      x="150"
      y="12"
      width="44"
      height="86"
      rx="8"
      fill="#ffffff"
      stroke="#046999"
      strokeWidth="2.2"
    />
    <rect x="151" y="13" width="42" height="18" rx="7" fill="#046999" />
    <g stroke="#046999" strokeWidth="2.4" strokeLinecap="round">
      <path d="M158 44h28" />
      <path d="M158 58h28" />
      <path d="M158 72h28" />
      <path d="M158 86h28" />
    </g>
  </Wrap>
);

// A locked-away system reached through a custom connector
const Custom = () => (
  <Wrap>
    <rect
      x="6"
      y="14"
      width="56"
      height="82"
      rx="10"
      fill="#034e72"
      stroke="#ffffff"
      strokeWidth="2.4"
    />
    <g fill="#e8f4fa">
      <rect x="16" y="26" width="36" height="8" rx="3" />
      <rect x="16" y="42" width="36" height="8" rx="3" />
    </g>
    <rect x="22" y="72" width="24" height="16" rx="4" fill="#ffffff" />
    <path
      d="M27 72v-6a7 7 0 0 1 14 0v6"
      fill="none"
      stroke="#ffffff"
      strokeWidth="2.6"
    />
    <circle cx="34" cy="80" r="2.4" fill="#034e72" />
    <g
      fill="none"
      stroke="#ffffff"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M62 55h18" strokeDasharray="1 6" />
      <path d="M120 55h18" />
      <path d="M132 49l6 6-6 6" />
    </g>
    <rect x="80" y="30" width="42" height="50" rx="12" fill="#ffffff" />
    <g
      fill="none"
      stroke="#046999"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M96 43c-6 0-3 9-8 12 5 3 2 12 8 12" />
      <path d="M106 43c6 0 3 9 8 12-5 3-2 12-8 12" />
    </g>
    <rect x="144" y="22" width="52" height="66" rx="10" fill="#111820" />
    <g fill="#6fc3e8">
      <rect x="154" y="58" width="9" height="18" rx="2" />
      <rect x="167" y="46" width="9" height="30" rx="2" />
      <rect x="180" y="52" width="9" height="24" rx="2" />
    </g>
    <path
      d="M154 36h22"
      stroke="#ffffff"
      strokeOpacity="0.6"
      strokeWidth="3"
      strokeLinecap="round"
    />
  </Wrap>
);

const ART = { builtin: Builtin, pipeline: Pipeline, custom: Custom };

const PbdiRouteArt = ({ kind }) => {
  const Art = ART[kind];
  return Art ? <Art /> : null;
};

export default PbdiRouteArt;

// Icons for the "what we review first" panel. They sit on dark tiles.
const ReviewWrap = ({ children }) => (
  <svg
    width="36"
    height="36"
    viewBox="0 0 36 36"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    focusable="false"
  >
    <rect width="36" height="36" rx="10" fill="#1a2a3a" />
    {children}
  </svg>
);

const REVIEW = {
  databases: (
    <g fill="none" stroke="#6fc3e8" strokeWidth="2" strokeLinecap="round">
      <ellipse cx="18" cy="11" rx="8" ry="3.4" />
      <path d="M10 11v14c0 1.9 3.6 3.4 8 3.4s8-1.5 8-3.4V11" />
      <path d="M10 18c0 1.9 3.6 3.4 8 3.4s8-1.5 8-3.4" />
    </g>
  ),
  spreadsheets: (
    <g fill="none" stroke="#6fc3e8" strokeWidth="2" strokeLinecap="round">
      <rect x="9" y="9" width="18" height="18" rx="3" />
      <path d="M9 15h18M9 21h18M15 9v18" />
    </g>
  ),
  cloud: (
    <path
      d="M12 26h12a5 5 0 0 0 .8-9.9A7 7 0 0 0 11 15a5.5 5.5 0 0 0 1 11z"
      fill="none"
      stroke="#6fc3e8"
      strokeWidth="2"
      strokeLinejoin="round"
    />
  ),
  tools: (
    <g
      fill="none"
      stroke="#6fc3e8"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="9" y="9" width="8" height="8" rx="2" />
      <rect x="19" y="19" width="8" height="8" rx="2" />
      <path d="M17 13h5a3 3 0 0 1 3 3v3M19 23h-5a3 3 0 0 1-3-3v-3" />
    </g>
  ),
};

export const PbdiReviewArt = ({ kind }) => (
  <ReviewWrap>{REVIEW[kind]}</ReviewWrap>
);
