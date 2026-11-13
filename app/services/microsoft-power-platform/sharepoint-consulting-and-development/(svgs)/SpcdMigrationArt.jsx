// /app/services/microsoft-power-platform/sharepoint-consulting-and-development/(svgs)/SpcdMigrationArt.jsx
// Art for SpcdMigration. Decorative throughout.
//   SpcdMilestoneGlyph: 24 x 24 glyphs inside the timeline nodes (currentColor,
//     so the node's status colour decides the palette).
//   SpcdReasonArt: spot illustrations for the four "why move" cards, drawn for
//     light cards.
//
// Hex values and matching globals.scss tokens:
//   #046999 $accent   #e8f4fa $accent-light   #0d1b2a $text-primary
//   #c53030 $error    #d4d6d9 $line-strong    #ffffff $white

const GLYPHS = {
  server: (
    <>
      <rect x="5" y="3.5" width="14" height="17" rx="2.5" />
      <path d="M8.5 8h4M8.5 12h4M8.5 16h4" />
      <circle cx="15.5" cy="8" r="0.6" />
    </>
  ),
  mail: (
    <>
      <rect x="3.5" y="5.5" width="17" height="13" rx="2.5" />
      <path d="M4.5 7l7.5 6 7.5-6" />
    </>
  ),
  serverOff: (
    <>
      <rect x="5" y="3.5" width="14" height="17" rx="2.5" />
      <path d="M9 9l6 6M15 9l-6 6" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s-6.5-6.2-6.5-11a6.5 6.5 0 0 1 13 0c0 4.8-6.5 11-6.5 11z" />
      <circle cx="12" cy="10" r="2.4" />
    </>
  ),
  spark: (
    <path d="M12 3.5c1 4.6 2 5.6 6.5 6.5-4.5.9-5.5 1.9-6.5 6.5-1-4.6-2-5.6-6.5-6.5 4.5-.9 5.5-1.9 6.5-6.5zM18.5 15.5c.4 1.8.8 2.2 2.5 2.5-1.7.3-2.1.7-2.5 2.5-.4-1.8-.8-2.2-2.5-2.5 1.7-.3 2.1-.7 2.5-2.5z" />
  ),
};

export const SpcdMilestoneGlyph = ({ type }) => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    focusable="false"
  >
    {GLYPHS[type]}
  </svg>
);

const Svg = ({ children }) => (
  <svg
    width="72"
    height="56"
    viewBox="0 0 72 56"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    focusable="false"
  >
    {children}
  </svg>
);

// A safety net with a gap torn in it
const NoSafetyNet = () => (
  <Svg>
    <rect width="72" height="56" rx="14" fill="#e8f4fa" />
    <path
      d="M10 18c8 10 16 10 26 0M36 18c10 10 18 10 26 0"
      stroke="#046999"
      strokeWidth="1.6"
    />
    <path
      d="M10 18v20M62 18v20"
      stroke="#0d1b2a"
      strokeWidth="2.4"
      strokeLinecap="round"
    />
    <path
      d="M14 24l6 14M20 26l-4 12M26 26l4 12M30 24l-6 14M44 25l4 13M50 26l-4 12M56 24l2 14"
      stroke="#046999"
      strokeOpacity="0.45"
      strokeWidth="1.2"
    />
    <path
      d="M33 30l3 4 3-4"
      stroke="#c53030"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="36" cy="10" r="4" fill="#c53030" />
  </Svg>
);

// Two test runs side by side, both passing before cutover
const TestRuns = () => (
  <Svg>
    <rect width="72" height="56" rx="14" fill="#e8f4fa" />
    {[10, 38].map((x, i) => (
      <g key={x}>
        <rect
          x={x}
          y="12"
          width="24"
          height="32"
          rx="4"
          fill="#ffffff"
          stroke="#046999"
          strokeWidth="1.4"
        />
        <path
          d={`M${x + 5} 20h14M${x + 5} 25h10`}
          stroke="#d4d6d9"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <circle
          cx={x + 12}
          cy="35"
          r="5"
          fill={i === 1 ? "#046999" : "#ffffff"}
          stroke="#046999"
          strokeWidth="1.4"
        />
        <path
          d={`M${x + 9.6} 35.2l1.7 1.7 3-3.2`}
          stroke={i === 1 ? "#ffffff" : "#046999"}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    ))}
  </Svg>
);

// A calendar with a chosen block of weeks highlighted
const Schedule = () => (
  <Svg>
    <rect width="72" height="56" rx="14" fill="#e8f4fa" />
    <rect
      x="16"
      y="10"
      width="40"
      height="36"
      rx="5"
      fill="#ffffff"
      stroke="#046999"
      strokeWidth="1.4"
    />
    <path d="M16 19h40" stroke="#046999" strokeWidth="1.4" />
    <path
      d="M25 7v6M47 7v6"
      stroke="#046999"
      strokeWidth="2"
      strokeLinecap="round"
    />
    {[0, 1, 2, 3].map((c) =>
      [0, 1, 2].map((r) => (
        <rect
          key={`${c}-${r}`}
          x={20 + c * 9}
          y={23 + r * 7}
          width="6"
          height="4.5"
          rx="1.2"
          fill={r === 1 && c > 0 ? "#046999" : "#d4d6d9"}
        />
      )),
    )}
  </Svg>
);

// Clean files feeding a spark
const CopilotReady = () => (
  <Svg>
    <rect width="72" height="56" rx="14" fill="#e8f4fa" />
    <path
      d="M12 14h14l5 5v23H12z"
      fill="#ffffff"
      stroke="#046999"
      strokeWidth="1.4"
      strokeLinejoin="round"
    />
    <path
      d="M16 25h11M16 30h11M16 35h7"
      stroke="#046999"
      strokeOpacity="0.5"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
    <path
      d="M33 28h8"
      stroke="#046999"
      strokeWidth="1.6"
      strokeDasharray="2 3"
      strokeLinecap="round"
    />
    <circle cx="52" cy="28" r="12" fill="#046999" />
    <path
      d="M52 20c.9 4.4 1.8 5.3 6 6-4.2.7-5.1 1.6-6 6-.9-4.4-1.8-5.3-6-6 4.2-.7 5.1-1.6 6-6z"
      fill="#ffffff"
    />
  </Svg>
);

const REASON_ART = {
  safetyNet: NoSafetyNet,
  testing: TestRuns,
  schedule: Schedule,
  copilot: CopilotReady,
};

export const SpcdReasonArt = ({ type }) => {
  const Art = REASON_ART[type];
  return Art ? <Art /> : null;
};
