// /app/services/microsoft-access/integrate-access-with-power-bi/(svgs)/ApbiProcessArt.jsx
// Spot illustrations for the five-step process, drawn for the deep accent
// background. Decorative, so no text and aria-hidden.
// Hex values and the tokens they match:
//   #034e72 $accent-dark (the section background), #046999 $accent,
//   #6fc3e8 $accent-on-dark, #ffffff $white (fills use $white-08 to $white-35
//   as opacity), #111820 $dark-bg

const svgProps = {
  viewBox: "0 0 120 80",
  xmlns: "http://www.w3.org/2000/svg",
  "aria-hidden": "true",
  focusable: "false",
};

const Table = ({ x, y, w = 44, rows = 3, accent }) => (
  <g>
    <rect
      x={x}
      y={y}
      width={w}
      height={10 + rows * 9}
      rx="5"
      fill="#ffffff"
      fillOpacity="0.1"
      stroke="#ffffff"
      strokeOpacity="0.45"
    />
    <path
      d={`M${x} ${y + 5}a5 5 0 0 1 5-5h${w - 10}a5 5 0 0 1 5 5v5H${x}z`}
      fill={accent ? "#6fc3e8" : "#046999"}
    />
    {Array.from({ length: rows }).map((_, i) => (
      <path
        key={i}
        d={`M${x + 6} ${y + 15 + i * 9}h${i % 2 ? w - 22 : w - 12}`}
        stroke="#ffffff"
        strokeOpacity="0.5"
        strokeWidth="2"
        strokeLinecap="round"
      />
    ))}
  </g>
);

// Review the database: a magnifier over the tables.
export const ApbiReviewArt = () => (
  <svg {...svgProps}>
    <Table x={8} y={12} />
    <Table x={54} y={20} w={40} rows={2} />
    <circle
      cx="76"
      cy="46"
      r="16"
      fill="#034e72"
      fillOpacity="0.7"
      stroke="#6fc3e8"
      strokeWidth="3"
    />
    <path
      d="M88 58l14 14"
      stroke="#6fc3e8"
      strokeWidth="5"
      strokeLinecap="round"
    />
    <path
      d="M68 46h16M68 52h10"
      stroke="#ffffff"
      strokeOpacity="0.8"
      strokeWidth="2.4"
      strokeLinecap="round"
    />
    <path
      d="M68 40h10"
      stroke="#6fc3e8"
      strokeWidth="2.4"
      strokeLinecap="round"
    />
  </svg>
);

// Tidy and connect: two tables joined, with a fixed cell ticked.
export const ApbiTidyArt = () => (
  <svg {...svgProps}>
    <Table x={6} y={14} w={40} />
    <Table x={74} y={14} w={40} accent />
    <path
      d="M46 34H74"
      stroke="#6fc3e8"
      strokeWidth="2"
      strokeDasharray="4 3"
    />
    <path
      d="M46 34l7-4M46 34l7 4"
      stroke="#6fc3e8"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <circle cx="94" cy="62" r="11" fill="#6fc3e8" />
    <path
      d="M88.5 62.5l4 4 7-8"
      fill="none"
      stroke="#034e72"
      strokeWidth="2.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 62h24M12 68h14"
      stroke="#ffffff"
      strokeOpacity="0.5"
      strokeWidth="2.4"
      strokeLinecap="round"
    />
  </svg>
);

// Build the model: a fact table with four lookups around it.
export const ApbiModelArt = () => (
  <svg {...svgProps}>
    <g stroke="#6fc3e8" strokeWidth="1.6" fill="none">
      <path d="M26 20L48 34M94 20L72 34M26 60L48 46M94 60L72 46" />
    </g>
    <rect x="46" y="30" width="28" height="20" rx="5" fill="#6fc3e8" />
    <path
      d="M52 38h16M52 44h10"
      stroke="#034e72"
      strokeWidth="2.4"
      strokeLinecap="round"
    />
    {[
      [8, 10],
      [80, 10],
      [8, 50],
      [80, 50],
    ].map(([x, y]) => (
      <g key={`${x}-${y}`}>
        <rect
          x={x}
          y={y}
          width="32"
          height="20"
          rx="5"
          fill="#ffffff"
          fillOpacity="0.1"
          stroke="#ffffff"
          strokeOpacity="0.5"
        />
        <path
          d={`M${x + 6} ${y + 8}h20M${x + 6} ${y + 14}h12`}
          stroke="#ffffff"
          strokeOpacity="0.55"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </g>
    ))}
  </svg>
);

// Design the dashboards: a wireframe with a pencil.
export const ApbiDesignArt = () => (
  <svg {...svgProps}>
    <rect
      x="8"
      y="8"
      width="88"
      height="62"
      rx="8"
      fill="#ffffff"
      fillOpacity="0.1"
      stroke="#ffffff"
      strokeOpacity="0.45"
    />
    <rect x="16" y="16" width="22" height="14" rx="3" fill="#6fc3e8" />
    <rect
      x="42"
      y="16"
      width="22"
      height="14"
      rx="3"
      fill="#ffffff"
      fillOpacity="0.3"
    />
    <rect
      x="68"
      y="16"
      width="20"
      height="14"
      rx="3"
      fill="#ffffff"
      fillOpacity="0.3"
    />
    {[10, 18, 13, 22].map((h, i) => (
      <rect
        key={i}
        x={18 + i * 10}
        y={62 - h}
        width="6"
        height={h}
        rx="1.5"
        fill="#ffffff"
        fillOpacity={i === 3 ? 0.9 : 0.4}
      />
    ))}
    <path
      d="M64 56l8-8 8 4 8-10"
      fill="none"
      stroke="#6fc3e8"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeDasharray="4 3"
    />
    <path d="M86 70l6-22 8 4-14 18z" fill="#6fc3e8" />
    <path d="M92 48l8 4 3-5-8-4z" fill="#ffffff" />
    <path d="M86 70l-1 6 6-3z" fill="#ffffff" />
  </svg>
);

// Publish, refresh and hand over: a cloud, a refresh arrow and a key.
export const ApbiPublishArt = () => (
  <svg {...svgProps}>
    <path
      d="M24 50a12 12 0 0 1 2-23 18 18 0 0 1 34-3 14 14 0 0 1 6 26z"
      fill="#ffffff"
      fillOpacity="0.1"
      stroke="#ffffff"
      strokeOpacity="0.55"
      strokeWidth="1.6"
      strokeLinejoin="round"
    />
    <path
      d="M45 44V30M39 36l6-7 6 7"
      fill="none"
      stroke="#6fc3e8"
      strokeWidth="2.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M76 20a14 14 0 0 1 20 4"
      fill="none"
      stroke="#6fc3e8"
      strokeWidth="2.4"
      strokeLinecap="round"
    />
    <path d="M93 16l6 9-10 1z" fill="#6fc3e8" />
    <circle
      cx="30"
      cy="64"
      r="6"
      fill="none"
      stroke="#ffffff"
      strokeWidth="2.2"
    />
    <path
      d="M36 64h22M50 64v6M56 64v4"
      fill="none"
      stroke="#ffffff"
      strokeWidth="2.2"
      strokeLinecap="round"
    />
    <g fill="#6fc3e8">
      <circle cx="86" cy="58" r="4" />
      <circle cx="100" cy="52" r="4" fillOpacity="0.6" />
      <circle cx="100" cy="66" r="4" fillOpacity="0.6" />
    </g>
    <path
      d="M90 56l7-3M90 60l7 4"
      stroke="#6fc3e8"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
  </svg>
);
