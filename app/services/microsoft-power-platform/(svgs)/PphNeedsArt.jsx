// /app/services/microsoft-power-platform/(svgs)/PphNeedsArt.jsx
// Six small spot icons for the "which tool fits the job" tiles. Drawn for the
// dark tile ($dark-mid). Decorative, so aria-hidden. No text inside.
// Hex → token: #6fc3e8 $accent-on-dark, #046999 $accent, #1a2a3a $dark-mid,
// #18232e $dark-surface, #ffffff $white, #9a9da1 $text-muted

const p = {
  viewBox: "0 0 72 72",
  "aria-hidden": "true",
  focusable: "false",
  style: { display: "block", width: "100%", height: "auto" },
};
const line = {
  fill: "none",
  stroke: "#6fc3e8",
  strokeWidth: 2.4,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

// Replace spreadsheets with an app: grid → phone
export const PphNeedAppArt = () => (
  <svg {...p}>
    <rect
      x="6"
      y="38"
      width="24"
      height="22"
      rx="3"
      fill="#18232e"
      {...line}
      strokeWidth="2"
    />
    <path
      d="M6 46h24M6 53h24M14 38v22M22 38v22"
      {...line}
      strokeWidth="1.4"
      opacity="0.6"
    />
    <rect
      x="38"
      y="10"
      width="26"
      height="50"
      rx="6"
      fill="#18232e"
      {...line}
    />
    <path d="M43 20h16M43 28h16M43 36h10" {...line} strokeWidth="2" />
    <circle
      cx="57"
      cy="50"
      r="4"
      fill="#046999"
      stroke="#6fc3e8"
      strokeWidth="1.6"
    />
    <path
      d="M31 48c4 0 3-4 7-4"
      {...line}
      strokeWidth="1.8"
      strokeDasharray="2 3"
    />
  </svg>
);

// One clear dashboard: bars, line and a dot
export const PphNeedBiArt = () => (
  <svg {...p}>
    <rect
      x="8"
      y="10"
      width="56"
      height="48"
      rx="6"
      fill="#18232e"
      {...line}
      strokeWidth="2"
    />
    {[18, 28, 22, 34].map((h, i) => (
      <rect
        key={i}
        x={16 + i * 11}
        y={50 - h}
        width="7"
        height={h}
        rx="2"
        fill="#6fc3e8"
        opacity={i === 3 ? 1 : 0.45}
      />
    ))}
    <path
      d="M16 30l11-8 11 4 14-12"
      {...line}
      stroke="#ffffff"
      strokeWidth="2"
    />
    <circle
      cx="52"
      cy="14"
      r="3.4"
      fill="#046999"
      stroke="#ffffff"
      strokeWidth="1.6"
    />
  </svg>
);

// Excel to Power BI: grid → bars
export const PphNeedMigrateArt = () => (
  <svg {...p}>
    <rect
      x="5"
      y="20"
      width="26"
      height="30"
      rx="4"
      fill="#18232e"
      {...line}
      strokeWidth="2"
    />
    <path
      d="M5 30h26M5 40h26M14 20v30M23 20v30"
      {...line}
      strokeWidth="1.4"
      opacity="0.6"
    />
    <path d="M34 35h8" {...line} />
    <path d="M40 30l5 5-5 5" {...line} />
    {[14, 22, 30].map((h, i) => (
      <rect
        key={i}
        x={48 + i * 8}
        y={50 - h}
        width="6"
        height={h}
        rx="2"
        fill="#6fc3e8"
        opacity={0.5 + i * 0.25}
      />
    ))}
    <path d="M46 52h24" {...line} strokeWidth="1.6" />
  </svg>
);

// Connect systems: two nodes, loop arrows and a bolt
export const PphNeedConnectArt = () => (
  <svg {...p}>
    <rect
      x="6"
      y="26"
      width="18"
      height="20"
      rx="5"
      fill="#18232e"
      {...line}
      strokeWidth="2"
    />
    <rect
      x="48"
      y="26"
      width="18"
      height="20"
      rx="5"
      fill="#18232e"
      {...line}
      strokeWidth="2"
    />
    <path d="M24 30c6-14 18-14 24 0" {...line} strokeWidth="2" />
    <path d="M44 26l4 4 4-5" {...line} strokeWidth="2" />
    <path d="M48 42c-6 14-18 14-24 0" {...line} strokeWidth="2" />
    <path d="M28 46l-4-4-4 5" {...line} strokeWidth="2" />
    <path d="M37 28l-5 9h5l-2 8 7-10h-5z" fill="#6fc3e8" />
  </svg>
);

// Customer portal: browser with a padlock
export const PphNeedPortalArt = () => (
  <svg {...p}>
    <rect
      x="6"
      y="12"
      width="60"
      height="48"
      rx="7"
      fill="#18232e"
      {...line}
      strokeWidth="2"
    />
    <path d="M6 24h60" {...line} strokeWidth="1.6" />
    <circle cx="13" cy="18" r="1.8" fill="#6fc3e8" />
    <circle cx="19" cy="18" r="1.8" fill="#6fc3e8" opacity="0.5" />
    <rect
      x="28"
      y="38"
      width="16"
      height="13"
      rx="3"
      fill="#046999"
      stroke="#6fc3e8"
      strokeWidth="2"
    />
    <path d="M31 38v-4a5 5 0 0 1 10 0v4" {...line} strokeWidth="2" />
    <path
      d="M13 32h10M13 40h8M13 48h10"
      {...line}
      strokeWidth="1.6"
      opacity="0.6"
    />
  </svg>
);

// AI in a process: sparkle over a document
export const PphNeedAiArt = () => (
  <svg {...p}>
    <path d="M14 10h26l12 12v38H14z" fill="#18232e" {...line} strokeWidth="2" />
    <path d="M40 10v12h12" {...line} strokeWidth="2" />
    <path
      d="M22 34h14M22 42h10M22 50h14"
      {...line}
      strokeWidth="1.8"
      opacity="0.6"
    />
    <path d="M52 34l3 7 7 3-7 3-3 7-3-7-7-3 7-3z" fill="#6fc3e8" />
    <path
      d="M60 14l1.4 3.2 3.2 1.4-3.2 1.4L60 23l-1.4-3-3.2-1.4 3.2-1.4z"
      fill="#ffffff"
    />
  </svg>
);
