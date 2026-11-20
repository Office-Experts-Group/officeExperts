// /app/services/microsoft-access/sql-server-solutions/(svgs)/SqlsApproachArt.jsx
// Spot illustrations for the "ways to work with us" tiles on $dark-surface.
// Decorative, no text.
//   #1a2a3a $dark-mid, #223a50 (lift of $dark-mid), #111820 $dark-bg,
//   #6fc3e8 $accent-on-dark, #ffffff $white.
import React from "react";

const common = {
  viewBox: "0 0 120 100",
  "aria-hidden": "true",
  focusable: "false",
};
const A = "#6fc3e8";

export const SqlsRemoteArt = ({ className }) => (
  <svg {...common} className={className}>
    <rect
      x="22"
      y="26"
      width="76"
      height="50"
      rx="7"
      fill="#1a2a3a"
      stroke={A}
      strokeWidth="2"
    />
    <rect
      x="31"
      y="35"
      width="58"
      height="9"
      rx="3"
      fill={A}
      fillOpacity=".6"
    />
    <rect
      x="31"
      y="50"
      width="38"
      height="5"
      rx="2.5"
      fill="#ffffff"
      fillOpacity=".3"
    />
    <rect
      x="31"
      y="60"
      width="48"
      height="5"
      rx="2.5"
      fill="#ffffff"
      fillOpacity=".3"
    />
    <path
      d="M12 76h96l-8 12H20z"
      fill="#223a50"
      stroke={A}
      strokeWidth="2"
      strokeLinejoin="round"
    />
    <path
      d="M38 14a30 30 0 0 1 44 0M46 20a19 19 0 0 1 28 0"
      fill="none"
      stroke={A}
      strokeWidth="3"
      strokeLinecap="round"
    />
    <circle cx="60" cy="26" r="3" fill={A} />
  </svg>
);

export const SqlsOnsiteArt = ({ className }) => (
  <svg {...common} className={className}>
    <rect
      x="18"
      y="30"
      width="58"
      height="60"
      rx="5"
      fill="#1a2a3a"
      stroke={A}
      strokeWidth="2"
    />
    {[40, 54, 68].map((y) => (
      <g key={y}>
        <rect
          x="26"
          y={y}
          width="12"
          height="9"
          rx="2"
          fill={A}
          fillOpacity=".6"
        />
        <rect
          x="48"
          y={y}
          width="12"
          height="9"
          rx="2"
          fill={A}
          fillOpacity=".6"
        />
      </g>
    ))}
    <rect
      x="38"
      y="78"
      width="12"
      height="12"
      rx="2"
      fill="#111820"
      stroke={A}
    />
    <path
      d="M86 84c-14-14-22-24-22-34a22 22 0 0 1 44 0c0 10-8 20-22 34z"
      fill="#223a50"
      stroke={A}
      strokeWidth="2.5"
      strokeLinejoin="round"
    />
    <circle cx="86" cy="50" r="8" fill={A} />
  </svg>
);

export const SqlsSupportArt = ({ className }) => (
  <svg {...common} className={className}>
    <path
      d="M22 56a38 38 0 0 1 76 0"
      fill="none"
      stroke={A}
      strokeWidth="5"
      strokeLinecap="round"
    />
    <rect
      x="12"
      y="52"
      width="16"
      height="26"
      rx="7"
      fill="#223a50"
      stroke={A}
      strokeWidth="3"
    />
    <rect
      x="92"
      y="52"
      width="16"
      height="26"
      rx="7"
      fill="#223a50"
      stroke={A}
      strokeWidth="3"
    />
    <path
      d="M100 78c0 10-10 14-24 14"
      fill="none"
      stroke={A}
      strokeWidth="3"
      strokeLinecap="round"
    />
    <rect x="62" y="86" width="16" height="10" rx="5" fill={A} />
    <path
      d="M60 36l16 6v12c0 9-7 15-16 18-9-3-16-9-16-18V42z"
      fill="#1a2a3a"
      stroke={A}
      strokeWidth="2.5"
      strokeLinejoin="round"
    />
    <path
      d="M53 55l5 5 9-11"
      fill="none"
      stroke={A}
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
