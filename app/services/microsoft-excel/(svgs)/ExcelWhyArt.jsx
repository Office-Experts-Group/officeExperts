// /app/services/microsoft-excel/(svgs)/ExcelWhyArt.jsx
// Spot illustrations for the ExcelWhy dark bento. All sit on dark tiles
// ($dark-surface / $dark-mid). Decorative: the tile text carries the meaning.
//
// Colours (hard-coded hex, matching globals.scss tokens):
//   #111820 $dark-bg   #18232e $dark-surface   #1a2a3a $dark-mid
//   #046999 $accent    #6fc3e8 $accent-on-dark  #ffffff $white

const svgProps = {
  "aria-hidden": "true",
  focusable: "false",
  fontFamily: "aptos",
};

// A senior developer's profile card with their core skills
export const SeniorArt = () => (
  <svg viewBox="0 0 260 150" {...svgProps}>
    <rect
      x="10"
      y="10"
      width="240"
      height="130"
      rx="14"
      fill="#1a2a3a"
      stroke="#ffffff"
      strokeOpacity="0.12"
    />
    <circle cx="48" cy="50" r="22" fill="#111820" />
    <circle cx="48" cy="44" r="8" fill="#6fc3e8" />
    <path d="M34 64a14 11 0 0 1 28 0z" fill="#6fc3e8" />
    <rect
      x="82"
      y="34"
      width="96"
      height="9"
      rx="4.5"
      fill="#ffffff"
      fillOpacity="0.8"
    />
    <rect
      x="82"
      y="52"
      width="64"
      height="7"
      rx="3.5"
      fill="#ffffff"
      fillOpacity="0.35"
    />
    <rect x="182" y="30" width="58" height="26" rx="13" fill="#046999" />
    <text
      x="211"
      y="48"
      textAnchor="middle"
      fontSize="14"
      fontWeight="700"
      fill="#ffffff"
    >
      Senior
    </text>
    <path d="M24 86h212" stroke="#ffffff" strokeOpacity="0.12" />
    {[
      { x: 24, w: 46, label: "VBA" },
      { x: 76, w: 104, label: "Power Query" },
      { x: 186, w: 50, label: "SQL" },
    ].map((chip) => (
      <g key={chip.label}>
        <rect
          x={chip.x}
          y="100"
          width={chip.w}
          height="26"
          rx="13"
          fill="none"
          stroke="#6fc3e8"
          strokeOpacity="0.7"
        />
        <text
          x={chip.x + chip.w / 2}
          y="118"
          textAnchor="middle"
          fontSize="14"
          fill="#6fc3e8"
        >
          {chip.label}
        </text>
      </g>
    ))}
  </svg>
);

// Workbooks getting more capable along a timeline
export const HistoryArt = () => {
  const stages = [
    { x: 14, rows: 2, tone: 0.35 },
    { x: 76, rows: 3, tone: 0.55 },
    { x: 138, rows: 3, tone: 0.75, chart: true },
    { x: 200, rows: 3, tone: 1, chart: true, live: true },
  ];
  return (
    <svg viewBox="0 0 260 150" {...svgProps}>
      <path
        d="M20 124H240"
        stroke="#ffffff"
        strokeOpacity="0.2"
        strokeWidth="2"
      />
      <path
        d="M20 124H240"
        stroke="#6fc3e8"
        strokeWidth="2"
        strokeDasharray="4 6"
      />
      {stages.map((stage, i) => (
        <g key={stage.x} opacity={stage.tone}>
          <rect
            x={stage.x}
            y={30 - i * 4}
            width="48"
            height={60 + i * 8}
            rx="6"
            fill="#1a2a3a"
            stroke="#6fc3e8"
            strokeOpacity="0.6"
          />
          <path
            d={`M${stage.x} ${44 - i * 4}h48`}
            stroke="#ffffff"
            strokeOpacity="0.25"
          />
          {Array.from({ length: stage.rows }, (_, r) => (
            <rect
              key={r}
              x={stage.x + 8}
              y={52 - i * 4 + r * 10}
              width={32 - r * 6}
              height="4"
              rx="2"
              fill="#ffffff"
              fillOpacity="0.5"
            />
          ))}
          {stage.chart && (
            <path
              d={`M${stage.x + 10} ${82 + i * 4}v-8M${stage.x + 20} ${82 + i * 4}v-14M${stage.x + 30} ${82 + i * 4}v-10M${stage.x + 40} ${82 + i * 4}v-18`}
              stroke="#6fc3e8"
              strokeWidth="4"
              strokeLinecap="round"
            />
          )}
          <circle
            cx={stage.x + 24}
            cy="124"
            r={stage.live ? 7 : 5}
            fill={stage.live ? "#6fc3e8" : "#111820"}
            stroke="#6fc3e8"
            strokeWidth="2"
          />
        </g>
      ))}
    </svg>
  );
};

// Office Experts at the centre of Excel, Word, Access and Power Platform
export const GroupArt = () => {
  const apps = [
    { x: 24, y: 18, kind: "sheet" },
    { x: 196, y: 18, kind: "doc" },
    { x: 24, y: 96, kind: "db" },
    { x: 196, y: 96, kind: "flow" },
  ];
  return (
    <svg viewBox="0 0 260 150" {...svgProps}>
      {apps.map((app) => (
        <path
          key={`l-${app.kind}`}
          d={`M${app.x + 20} ${app.y + 18}L130 75`}
          stroke="#6fc3e8"
          strokeOpacity="0.45"
          strokeWidth="1.5"
          strokeDasharray="3 4"
        />
      ))}
      {apps.map((app) => (
        <g key={app.kind}>
          <rect
            x={app.x}
            y={app.y}
            width="40"
            height="36"
            rx="9"
            fill="#1a2a3a"
            stroke="#6fc3e8"
            strokeOpacity="0.7"
          />
          {app.kind === "sheet" && (
            <path
              d={`M${app.x + 10} ${app.y + 9}h20v18h-20zM${app.x + 10} ${app.y + 15}h20M${app.x + 10} ${app.y + 21}h20M${app.x + 18} ${app.y + 9}v18`}
              fill="none"
              stroke="#ffffff"
              strokeWidth="1.4"
            />
          )}
          {app.kind === "doc" && (
            <path
              d={`M${app.x + 12} ${app.y + 8}h11l5 5v15h-16zM${app.x + 15} ${app.y + 17}h10M${app.x + 15} ${app.y + 21}h10M${app.x + 15} ${app.y + 25}h6`}
              fill="none"
              stroke="#ffffff"
              strokeWidth="1.4"
            />
          )}
          {app.kind === "db" && (
            <g fill="none" stroke="#ffffff" strokeWidth="1.4">
              <ellipse cx={app.x + 20} cy={app.y + 11} rx="9" ry="3.5" />
              <path
                d={`M${app.x + 11} ${app.y + 11}v14c0 2 4 3.5 9 3.5s9-1.5 9-3.5V${app.y + 11}M${app.x + 11} ${app.y + 18}c0 2 4 3.5 9 3.5s9-1.5 9-3.5`}
              />
            </g>
          )}
          {app.kind === "flow" && (
            <g fill="none" stroke="#ffffff" strokeWidth="1.4">
              <rect x={app.x + 9} y={app.y + 8} width="8" height="8" rx="2" />
              <rect x={app.x + 23} y={app.y + 20} width="8" height="8" rx="2" />
              <path d={`M${app.x + 17} ${app.y + 12}h4a2 2 0 0 1 2 2v6`} />
            </g>
          )}
        </g>
      ))}
      <rect x="66" y="58" width="128" height="34" rx="17" fill="#046999" />
      <text
        x="130"
        y="80"
        textAnchor="middle"
        fontSize="14"
        fontWeight="700"
        fill="#ffffff"
      >
        Office Experts
      </text>
    </svg>
  );
};

// A quick support request and the reply
export const SupportArt = () => (
  <svg viewBox="0 0 260 150" {...svgProps}>
    <rect x="10" y="16" width="196" height="40" rx="14" fill="#1a2a3a" />
    <path d="M24 56l-4 10 14-10z" fill="#1a2a3a" />
    <text x="24" y="41" fontSize="14" fill="#ffffff" fillOpacity="0.85">
      Can we add a new region?
    </text>
    <rect x="54" y="80" width="196" height="40" rx="14" fill="#046999" />
    <path d="M236 120l4 10-14-10z" fill="#046999" />
    <text x="68" y="105" fontSize="14" fill="#ffffff">
      Done, it’s in the report.
    </text>
    <circle cx="30" cy="104" r="12" fill="#6fc3e8" />
    <path
      d="M25 104l3.5 3.5 7-7.5"
      fill="none"
      stroke="#111820"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
