// /app/services/microsoft-power-platform/microsoft-fabric/(svgs)/MfabCapabilityArt.jsx
// The OneLake hub and its spoke lines for the capabilities section, plus one
// spot illustration per workload card (drawn for white cards).
// Colours (tokens): #046999 $accent, #e8f4fa $accent-light, #cfe6f2 (light
// accent wash), #6fc3e8 $accent-on-dark, #111820 $dark-bg, #18232e
// $dark-surface, #c0392b $replace-x, #ffffff $white.

// Spoke lines from each card row into the hub. Stretched to the column with
// preserveAspectRatio="none", so y = 100 / 300 / 500 always lands on the
// centre of each of the three equal rows. Strokes don't scale.
export const MfabHubSpokes = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 100 600"
    preserveAspectRatio="none"
    aria-hidden="true"
    focusable="false"
  >
    <g
      fill="none"
      stroke="#046999"
      strokeOpacity="0.45"
      strokeWidth="1.6"
      strokeDasharray="4 5"
      vectorEffect="non-scaling-stroke"
    >
      <path d="M0 100C30 100 34 300 50 300" vectorEffect="non-scaling-stroke" />
      <path d="M0 300H50" vectorEffect="non-scaling-stroke" />
      <path d="M0 500C30 500 34 300 50 300" vectorEffect="non-scaling-stroke" />
      <path
        d="M100 100C70 100 66 300 50 300"
        vectorEffect="non-scaling-stroke"
      />
      <path d="M100 300H50" vectorEffect="non-scaling-stroke" />
      <path
        d="M100 500C70 500 66 300 50 300"
        vectorEffect="non-scaling-stroke"
      />
    </g>
  </svg>
);

export const MfabHubSvg = () => (
  <svg viewBox="0 0 260 260" role="img" aria-labelledby="mfab-hub-title">
    <title id="mfab-hub-title">
      OneLake at the centre, shared by all six Fabric workloads
    </title>
    <circle
      cx="130"
      cy="130"
      r="124"
      fill="#f2f3f5"
      stroke="#046999"
      strokeOpacity="0.35"
      strokeDasharray="4 6"
    />
    <circle
      cx="130"
      cy="130"
      r="98"
      fill="#ffffff"
      stroke="#cfe6f2"
      strokeWidth="2"
    />
    {/* six nodes on the outer ring: three left, three right */}
    {[150, 180, 210, 30, 0, 330].map((deg) => {
      const r = (deg * Math.PI) / 180;
      return (
        <circle
          key={deg}
          cx={130 + 124 * Math.cos(r)}
          cy={130 - 124 * Math.sin(r)}
          r="6"
          fill={deg === 0 || deg === 180 ? "#046999" : "#6fc3e8"}
          stroke="#ffffff"
          strokeWidth="2"
        />
      );
    })}
    <circle cx="130" cy="130" r="76" fill="#111820" />
    <path
      d="M84 134c0-14 20-24 46-24s46 10 46 24-20 24-46 24-46-10-46-24z"
      fill="#046999"
    />
    <path
      d="M96 132c8-4 16-4 24 0s16 4 24 0M128 142c8-4 16-4 24 0"
      fill="none"
      stroke="#6fc3e8"
      strokeWidth="1.5"
    />
    <text
      x="130"
      y="98"
      fontSize="20"
      fontWeight="700"
      fill="#ffffff"
      textAnchor="middle"
    >
      OneLake
    </text>
    <text x="130" y="178" fontSize="14" fill="#6fc3e8" textAnchor="middle">
      shared by all six
    </text>
  </svg>
);

const Frame = ({ children }) => (
  <svg viewBox="0 0 56 56" aria-hidden="true" focusable="false">
    <rect width="56" height="56" rx="14" fill="#e8f4fa" />
    {children}
  </svg>
);

export const MfabCapabilityArt = ({ type }) => {
  switch (type) {
    case "factory":
      // Pipeline: sources merging through a transform step
      return (
        <Frame>
          <rect x="9" y="12" width="10" height="8" rx="2" fill="#6fc3e8" />
          <rect x="9" y="24" width="10" height="8" rx="2" fill="#046999" />
          <rect x="9" y="36" width="10" height="8" rx="2" fill="#6fc3e8" />
          <path
            d="M19 16c6 0 6 12 10 12M19 28h10M19 40c6 0 6-12 10-12"
            fill="none"
            stroke="#046999"
            strokeWidth="1.6"
          />
          <rect x="29" y="21" width="12" height="14" rx="3" fill="#111820" />
          <path
            d="M32 28h6M35 25v6"
            stroke="#6fc3e8"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          <path
            d="M41 28h6M44 25l3 3-3 3"
            fill="none"
            stroke="#046999"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </Frame>
      );
    case "engineering":
      // Notebook with code lines and a spark
      return (
        <Frame>
          <rect
            x="11"
            y="10"
            width="28"
            height="36"
            rx="4"
            fill="#ffffff"
            stroke="#046999"
            strokeWidth="1.6"
          />
          <path
            d="M16 18h12M16 24h16M20 30h10M16 36h14"
            stroke="#046999"
            strokeOpacity="0.55"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M42 20l2.4 6.6L51 29l-6.6 2.4L42 38l-2.4-6.6L33 29l6.6-2.4z"
            fill="#111820"
          />
          <circle cx="42" cy="29" r="2" fill="#6fc3e8" />
        </Frame>
      );
    case "warehouse":
      // Star schema: fact table with lookups
      return (
        <Frame>
          <rect x="20" y="20" width="16" height="16" rx="3" fill="#111820" />
          <path d="M20 26h16M26 26v10" stroke="#6fc3e8" strokeWidth="1.2" />
          {[
            [8, 9],
            [36, 9],
            [8, 37],
            [36, 37],
          ].map(([x, y]) => (
            <rect
              key={`${x}-${y}`}
              x={x}
              y={y}
              width="12"
              height="10"
              rx="2"
              fill="#ffffff"
              stroke="#046999"
              strokeWidth="1.4"
            />
          ))}
          <path
            d="M20 19l-2-1M36 19l2-1M20 37l-2 1M36 37l2 1"
            stroke="#046999"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </Frame>
      );
    case "science":
      // Scatter plot with a fitted curve and prediction point
      return (
        <Frame>
          <path
            d="M11 44h34M11 44V11"
            stroke="#046999"
            strokeOpacity="0.45"
            strokeWidth="1.6"
          />
          <g fill="#046999">
            <circle cx="16" cy="38" r="2.2" />
            <circle cx="21" cy="34" r="2.2" />
            <circle cx="25" cy="36" r="2.2" />
            <circle cx="29" cy="28" r="2.2" />
            <circle cx="33" cy="26" r="2.2" />
          </g>
          <path
            d="M14 40C24 36 30 26 46 15"
            fill="none"
            stroke="#111820"
            strokeWidth="1.8"
          />
          <circle
            cx="42"
            cy="18"
            r="4"
            fill="#ffffff"
            stroke="#111820"
            strokeWidth="1.8"
            strokeDasharray="2 2"
          />
        </Frame>
      );
    case "realtime":
      // Live stream with an alert spike
      return (
        <Frame>
          <rect x="9" y="12" width="38" height="28" rx="5" fill="#111820" />
          <path
            d="M13 30h6l3-6 4 10 4-16 3 12h10"
            fill="none"
            stroke="#6fc3e8"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          <circle cx="30" cy="18" r="2.4" fill="#c0392b" />
          <circle cx="43" cy="17" r="2.4" fill="#6fc3e8" />
          <path
            d="M20 46h16"
            stroke="#046999"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </Frame>
      );
    default:
      // Dashboard: KPI, bars and a donut
      return (
        <Frame>
          <rect
            x="8"
            y="10"
            width="40"
            height="36"
            rx="5"
            fill="#ffffff"
            stroke="#046999"
            strokeWidth="1.4"
          />
          <rect x="13" y="15" width="12" height="5" rx="1.5" fill="#111820" />
          <g fill="#046999">
            <rect x="13" y="32" width="4" height="9" rx="1" />
            <rect x="19" y="27" width="4" height="14" rx="1" fill="#6fc3e8" />
            <rect x="25" y="23" width="4" height="18" rx="1" />
          </g>
          <circle
            cx="38"
            cy="30"
            r="6"
            fill="none"
            stroke="#6fc3e8"
            strokeWidth="3.5"
          />
          <path
            d="M38 24a6 6 0 0 1 6 6"
            fill="none"
            stroke="#046999"
            strokeWidth="3.5"
          />
        </Frame>
      );
  }
};
