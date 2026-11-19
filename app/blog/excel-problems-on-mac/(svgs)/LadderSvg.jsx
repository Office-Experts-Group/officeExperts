// /app/blog/excel-problems-on-mac/(svgs)/LadderSvg.jsx
// The fix ladder: six steps from the quickest fix to a clean reinstall. White panel.
// Hex values match: $accent #046999, $accent-light #e8f4fa, $text-primary #0d1b2a,
// $text-secondary #4a5568, $line-strong #d4d6d9, $white #ffffff.

const STEPS = [
  {
    t: ["Restart", "and retry"],
    h: 66,
    fill: "#e8f4fa",
    ink: "#0d1b2a",
    effort: "Seconds",
  },
  {
    t: ["Update", "everything"],
    h: 104,
    fill: "#cfe6f2",
    ink: "#0d1b2a",
    effort: "Minutes",
  },
  {
    t: ["Reset", "settings"],
    h: 142,
    fill: "#a9d3e8",
    ink: "#0d1b2a",
    effort: "Minutes",
  },
  {
    t: ["Clear", "caches"],
    h: 180,
    fill: "#4f9cc2",
    ink: "#ffffff",
    effort: "Minutes",
  },
  {
    t: ["Test a", "new user"],
    h: 218,
    fill: "#17799f",
    ink: "#ffffff",
    effort: "A while",
  },
  {
    t: ["Clean", "reinstall"],
    h: 256,
    fill: "#046999",
    ink: "#ffffff",
    effort: "Last resort",
  },
];

const BASE = 300;

const LadderSvg = () => (
  <svg
    viewBox="0 0 640 400"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-labelledby="epm-ladder-title epm-ladder-desc"
    fontFamily="aptos"
  >
    <title id="epm-ladder-title">The Excel for Mac fix ladder</title>
    <desc id="epm-ladder-desc">
      Six steps that rise in effort: restart and retry, update Excel and macOS,
      reset settings, clear caches, test a new user account, then a clean
      reinstall as the last resort.
    </desc>

    <line
      x1="62"
      y1="212"
      x2="570"
      y2="26"
      stroke="#046999"
      strokeWidth="2"
      strokeDasharray="6 6"
      strokeLinecap="round"
    />
    <polygon points="574,24 564.8,33.7 560.6,22.5" fill="#046999" />

    {STEPS.map((s, i) => {
      const x = 14 + i * 104;
      const top = BASE - s.h;
      return (
        <g key={s.effort + i}>
          <rect x={x} y={top} width="96" height={s.h} rx="10" fill={s.fill} />
          <text
            x={x + 48}
            y={top + 28}
            fontSize="15"
            fontWeight="700"
            fill={s.ink}
            textAnchor="middle"
          >
            {s.t[0]}
          </text>
          <text
            x={x + 48}
            y={top + 50}
            fontSize="15"
            fontWeight="700"
            fill={s.ink}
            textAnchor="middle"
          >
            {s.t[1]}
          </text>
          <text
            x={x + 48}
            y={BASE + 28}
            fontSize="14"
            fill="#4a5568"
            textAnchor="middle"
          >
            {s.effort}
          </text>
        </g>
      );
    })}

    <line
      x1="8"
      y1={BASE}
      x2="632"
      y2={BASE}
      stroke="#d4d6d9"
      strokeWidth="2"
    />
    <text x="14" y="226" fontSize="14" fontWeight="700" fill="#046999">
      Start here
    </text>
    <text x="320" y="372" fontSize="14" fill="#4a5568" textAnchor="middle">
      More effort and more disruption as you climb. Stop as soon as Excel
      behaves.
    </text>
  </svg>
);

export default LadderSvg;
