// /app/services/microsoft-power-platform/power-bi/(svgs)/PbsvProcessArt.jsx
// Spot illustrations for the five process stages (dark cards, $dark-surface).
// Hex values and the tokens they match:
//   #223647 (raised surface on $dark-surface) · #33475b (line on dark)
//   #6fc3e8 $accent-on-dark · #046999 $accent · #034e72 $accent-dark
//   #ffffff $white · #3d5268 (muted fill on dark) · #0eaa0e $success

const SVG_PROPS = {
  viewBox: "0 0 96 96",
  "aria-hidden": "true",
  focusable: "false",
};

export function PbsvScopeArt() {
  return (
    <svg {...SVG_PROPS}>
      <circle cx="48" cy="48" r="44" fill="#223647" />
      <rect
        x="22"
        y="16"
        width="40"
        height="52"
        rx="6"
        fill="#18232e"
        stroke="#33475b"
        strokeWidth="2"
      />
      <rect x="32" y="12" width="20" height="9" rx="4" fill="#046999" />
      <rect x="29" y="30" width="26" height="4" rx="2" fill="#6fc3e8" />
      <rect x="29" y="40" width="20" height="4" rx="2" fill="#3d5268" />
      <rect x="29" y="50" width="24" height="4" rx="2" fill="#3d5268" />
      <path
        d="M52 62h26a6 6 0 0 1 6 6v6a6 6 0 0 1-6 6H68l-8 7v-7h-8a6 6 0 0 1-6-6v-6a6 6 0 0 1 6-6z"
        fill="#046999"
      />
      <path
        d="M62 68.500a4.500 4.500 0 1 1 5 4.400v2.100"
        fill="none"
        stroke="#ffffff"
        strokeWidth="2.600"
        strokeLinecap="round"
      />
      <circle cx="67" cy="78.500" r="1.600" fill="#ffffff" />
    </svg>
  );
}

export function PbsvConnectModelArt() {
  return (
    <svg {...SVG_PROPS}>
      <circle cx="48" cy="48" r="44" fill="#223647" />
      <g stroke="#33475b" strokeWidth="2.500">
        <path d="M30 28L42 42" />
        <path d="M66 28L54 42" />
        <path d="M30 70L42 56" />
        <path d="M66 70L54 56" />
      </g>
      <rect x="38" y="38" width="20" height="20" rx="4" fill="#046999" />
      <rect x="42" y="44" width="12" height="3" rx="1.500" fill="#ffffff" />
      <rect
        x="42"
        y="50"
        width="8"
        height="3"
        rx="1.500"
        fill="#ffffff"
        opacity="0.7"
      />
      {[
        [14, 14],
        [58, 14],
        [14, 62],
        [58, 62],
      ].map(([x, y]) => (
        <g key={`${x}-${y}`}>
          <rect
            x={x}
            y={y}
            width="24"
            height="20"
            rx="4"
            fill="#18232e"
            stroke="#6fc3e8"
            strokeWidth="1.800"
          />
          <rect x={x} y={y} width="24" height="6" rx="3" fill="#6fc3e8" />
          <rect
            x={x + 5}
            y={y + 10}
            width="14"
            height="3"
            rx="1.500"
            fill="#3d5268"
          />
        </g>
      ))}
    </svg>
  );
}

export function PbsvDesignArt() {
  return (
    <svg {...SVG_PROPS}>
      <circle cx="48" cy="48" r="44" fill="#223647" />
      <rect
        x="16"
        y="22"
        width="56"
        height="44"
        rx="6"
        fill="#18232e"
        stroke="#33475b"
        strokeWidth="2"
      />
      <rect x="22" y="28" width="14" height="10" rx="2" fill="#046999" />
      <rect x="40" y="28" width="14" height="10" rx="2" fill="#3d5268" />
      <rect x="58" y="28" width="8" height="10" rx="2" fill="#3d5268" />
      <rect x="22" y="42" width="22" height="18" rx="2" fill="#3d5268" />
      <rect
        x="48"
        y="42"
        width="18"
        height="18"
        rx="2"
        fill="none"
        stroke="#6fc3e8"
        strokeWidth="1.800"
        strokeDasharray="3 3"
      />
      <path d="M60 80l-2-10 22-22 8 8-22 22z" fill="#6fc3e8" />
      <path d="M60 80l-2-10 6 4z" fill="#ffffff" />
      <path
        d="M78 46l8 8"
        stroke="#046999"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function PbsvSecureArt() {
  return (
    <svg {...SVG_PROPS}>
      <circle cx="48" cy="48" r="44" fill="#223647" />
      <path
        d="M48 14L72 24V46C72 62 62 74 48 82C34 74 24 62 24 46V24Z"
        fill="#046999"
      />
      <path
        d="M48 22L65 29.500V46C65 57 58 66 48 72C38 66 31 57 31 46V29.500Z"
        fill="none"
        stroke="#6fc3e8"
        strokeWidth="1.800"
      />
      <path
        d="M38 47l7 8 14-16"
        fill="none"
        stroke="#ffffff"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect
        x="10"
        y="62"
        width="22"
        height="9"
        rx="4.500"
        fill="#18232e"
        stroke="#33475b"
      />
      <rect
        x="64"
        y="62"
        width="22"
        height="9"
        rx="4.500"
        fill="#18232e"
        stroke="#33475b"
      />
      <circle cx="16" cy="66.500" r="2.500" fill="#6fc3e8" />
      <circle cx="80" cy="66.500" r="2.500" fill="#6fc3e8" />
    </svg>
  );
}

export function PbsvSupportArt() {
  return (
    <svg {...SVG_PROPS}>
      <circle cx="48" cy="48" r="44" fill="#223647" />
      <rect
        x="18"
        y="18"
        width="46"
        height="32"
        rx="6"
        fill="#18232e"
        stroke="#33475b"
        strokeWidth="2"
      />
      <rect x="25" y="36" width="6" height="8" rx="1.500" fill="#6fc3e8" />
      <rect x="35" y="30" width="6" height="14" rx="1.500" fill="#046999" />
      <rect x="45" y="26" width="6" height="18" rx="1.500" fill="#6fc3e8" />
      <circle cx="68" cy="52" r="8" fill="#6fc3e8" />
      <path d="M52 82c0-10 7-16 16-16s16 6 16 16z" fill="#046999" />
      <circle cx="28" cy="66" r="7" fill="#3d5268" />
      <path d="M14 86c0-8 6-13 14-13s14 5 14 13z" fill="#3d5268" />
      <path
        d="M44 62l4-4 4 4"
        fill="none"
        stroke="#6fc3e8"
        strokeWidth="2.200"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
