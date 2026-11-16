// /app/services/microsoft-power-platform/(svgs)/PphLifecycleArt.jsx
// Five spot illustrations for the project stages (design, build, deploy, train,
// support). Drawn for an $accent-light art area on a white card. Decorative.
// Hex → token: #046999 $accent, #034e72 $accent-dark, #6fc3e8 $accent-on-dark,
// #e8f4fa $accent-light, #0d1b2a $text-primary, #4a5568 $text-secondary,
// #9a9da1 $text-muted, #d4d6d9 $line-strong, #f7f8f9 $light-bg, #ffffff $white

const p = {
  viewBox: "0 0 200 120",
  "aria-hidden": "true",
  focusable: "false",
  style: { display: "block", width: "100%", height: "auto" },
};

// Design: wireframe sketch with a pencil
export const PphDesignArt = () => (
  <svg {...p}>
    <rect
      x="28"
      y="14"
      width="124"
      height="92"
      rx="8"
      fill="#ffffff"
      stroke="#046999"
      strokeWidth="1.8"
    />
    <rect
      x="36"
      y="22"
      width="40"
      height="76"
      rx="4"
      fill="#f7f8f9"
      stroke="#9a9da1"
      strokeWidth="1.2"
      strokeDasharray="4 3"
    />
    <rect
      x="84"
      y="22"
      width="60"
      height="22"
      rx="4"
      fill="#e8f4fa"
      stroke="#046999"
      strokeWidth="1.2"
      strokeDasharray="4 3"
    />
    <rect
      x="84"
      y="52"
      width="26"
      height="46"
      rx="4"
      fill="#f7f8f9"
      stroke="#9a9da1"
      strokeWidth="1.2"
      strokeDasharray="4 3"
    />
    <rect
      x="118"
      y="52"
      width="26"
      height="46"
      rx="4"
      fill="#f7f8f9"
      stroke="#9a9da1"
      strokeWidth="1.2"
      strokeDasharray="4 3"
    />
    <path
      d="M44 34h24M44 44h18M44 54h24"
      stroke="#9a9da1"
      strokeWidth="2.4"
      strokeLinecap="round"
    />
    <path
      d="M154 96l22-52 8 4-20 52-8 4z"
      fill="#046999"
      transform="rotate(8 170 70)"
    />
    <path d="M150 104l6-10 6 2z" fill="#0d1b2a" transform="rotate(8 170 70)" />
    <path
      d="M172 40l8 4"
      stroke="#6fc3e8"
      strokeWidth="4"
      strokeLinecap="round"
    />
  </svg>
);

// Build: two screens and code braces
export const PphBuildArt = () => (
  <svg {...p}>
    <rect
      x="22"
      y="22"
      width="92"
      height="66"
      rx="8"
      fill="#ffffff"
      stroke="#046999"
      strokeWidth="1.8"
    />
    <path d="M22 34h92" stroke="#046999" strokeWidth="1.4" />
    <circle cx="31" cy="28" r="2" fill="#6fc3e8" />
    <circle cx="38" cy="28" r="2" fill="#d4d6d9" />
    <path
      d="M34 48h20M34 58h32M34 68h16"
      stroke="#9a9da1"
      strokeWidth="2.6"
      strokeLinecap="round"
    />
    <path
      d="M64 48h14"
      stroke="#046999"
      strokeWidth="2.6"
      strokeLinecap="round"
    />
    <rect x="88" y="52" width="76" height="52" rx="8" fill="#046999" />
    <path
      d="M114 68l-8 9 8 9M138 68l8 9-8 9"
      fill="none"
      stroke="#ffffff"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M130 64l-8 26"
      stroke="#6fc3e8"
      strokeWidth="3"
      strokeLinecap="round"
    />
    <g
      transform="translate(160 30)"
      fill="none"
      stroke="#034e72"
      strokeWidth="2.4"
      strokeLinecap="round"
    >
      <circle r="7" />
      <path d="M0-13v5M0 8v5M-13 0h5M8 0h5M-9.2-9.2l3.5 3.5M5.7 5.7l3.5 3.5M-9.2 9.2l3.5-3.5M5.7-5.7l3.5-3.5" />
    </g>
  </svg>
);

// Deploy: box going up to the cloud, users below
export const PphDeployArt = () => (
  <svg {...p}>
    <path
      d="M62 54a18 18 0 0 1 34-7 15 15 0 0 1 22 13 13 13 0 0 1-4 25H66a14 14 0 0 1-4-31z"
      fill="#ffffff"
      stroke="#046999"
      strokeWidth="1.8"
      transform="translate(0 -8)"
    />
    <path
      d="M92 58V30M82 40l10-10 10 10"
      fill="none"
      stroke="#046999"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      transform="translate(0 -2)"
    />
    <path d="M22 100l8-12 8 12M162 100l8-12 8 12" fill="none" stroke="none" />
    {[44, 92, 140].map((x, i) => (
      <g key={x}>
        <circle
          cx={x + 8}
          cy="86"
          r="8"
          fill={i === 1 ? "#046999" : "#6fc3e8"}
        />
        <path
          d={`M${x - 6} 112c0-12 28-12 28 0z`}
          fill={i === 1 ? "#046999" : "#6fc3e8"}
        />
      </g>
    ))}
    <path
      d="M52 72l10-8M100 72v-6M148 72l-10-8"
      stroke="#9a9da1"
      strokeWidth="1.6"
      strokeDasharray="3 3"
      strokeLinecap="round"
    />
  </svg>
);

// Train: presenter, board with a chart, attendee
export const PphTrainArt = () => (
  <svg {...p}>
    <rect
      x="48"
      y="14"
      width="112"
      height="70"
      rx="6"
      fill="#ffffff"
      stroke="#046999"
      strokeWidth="1.8"
    />
    <path
      d="M60 30h36M60 40h24"
      stroke="#9a9da1"
      strokeWidth="2.6"
      strokeLinecap="round"
    />
    {[16, 26, 20, 34].map((h, i) => (
      <rect
        key={i}
        x={106 + i * 12}
        y={72 - h}
        width="8"
        height={h}
        rx="2"
        fill="#046999"
        opacity={i === 3 ? 1 : 0.35}
      />
    ))}
    <path
      d="M100 84v10M84 94h32"
      stroke="#9a9da1"
      strokeWidth="2.6"
      strokeLinecap="round"
    />
    <circle cx="32" cy="56" r="9" fill="#034e72" />
    <path d="M16 106c0-18 32-18 32 0z" fill="#034e72" />
    <path
      d="M44 74l14-12"
      stroke="#034e72"
      strokeWidth="3.4"
      strokeLinecap="round"
    />
    <circle cx="170" cy="76" r="8" fill="#6fc3e8" />
    <path d="M156 106c0-16 28-16 28 0z" fill="#6fc3e8" />
    <path
      d="M170 60v-8M164 54l6-6 6 6"
      fill="none"
      stroke="#046999"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Support: headset and a ticket thread
export const PphSupportArt = () => (
  <svg {...p}>
    <path
      d="M44 62a34 34 0 0 1 68 0"
      fill="none"
      stroke="#046999"
      strokeWidth="5"
      strokeLinecap="round"
    />
    <rect x="36" y="58" width="14" height="26" rx="6" fill="#046999" />
    <rect x="106" y="58" width="14" height="26" rx="6" fill="#046999" />
    <path
      d="M112 84c0 12-10 18-26 18"
      fill="none"
      stroke="#034e72"
      strokeWidth="3.4"
      strokeLinecap="round"
    />
    <rect x="76" y="96" width="20" height="10" rx="5" fill="#034e72" />
    <rect
      x="128"
      y="22"
      width="52"
      height="34"
      rx="8"
      fill="#ffffff"
      stroke="#046999"
      strokeWidth="1.6"
    />
    <path
      d="M128 44l-8 10v-10z"
      fill="#ffffff"
      stroke="#046999"
      strokeWidth="1.6"
      strokeLinejoin="round"
    />
    <path
      d="M138 34h32M138 44h20"
      stroke="#9a9da1"
      strokeWidth="2.6"
      strokeLinecap="round"
    />
    <circle cx="150" cy="82" r="14" fill="#046999" />
    <path
      d="M143 82l5 5 9-10"
      fill="none"
      stroke="#ffffff"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
