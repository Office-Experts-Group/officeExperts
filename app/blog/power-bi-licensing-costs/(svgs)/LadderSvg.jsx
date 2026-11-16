// /app/blog/power-bi-licensing-costs/(svgs)/LadderSvg.jsx
// Licence ladder: five options from Free to Fabric. Hard-coded hex values on a light panel:
// #e8f4fa $accent-light, #046999 $accent, #034e72 $accent-dark, #0b2433 $ink,
// #4a5568 $text-secondary, #d4d6d9 $line-strong.

const STEPS = [
  {
    title: "Free",
    chip: "No charge",
    lines: ["For personal use,", "limited sharing"],
    fill: "#e8f4fa",
    ink: "#0b2433",
    stroke: "rgba(4,105,153,0.28)",
    top: 230,
  },
  {
    title: "Pro",
    chip: "Per user",
    lines: ["One licence per", "creator and", "viewer"],
    fill: "#cfe7f3",
    ink: "#0b2433",
    stroke: "rgba(4,105,153,0.28)",
    top: 200,
  },
  {
    title: "PPU",
    chip: "Per user",
    lines: ["Premium Per User,", "extra features", "and refreshes"],
    fill: "#9fd0e8",
    ink: "#0b2433",
    stroke: "rgba(4,105,153,0.28)",
    top: 170,
  },
  {
    title: "Capacity",
    chip: "Per capacity",
    lines: ["P, EM and A SKUs,", "capacity you rent", "by the month"],
    fill: "#046999",
    ink: "#ffffff",
    stroke: "#046999",
    top: 140,
  },
  {
    title: "Fabric",
    chip: "Per capacity",
    lines: ["F SKUs: capacity", "plus a wider data", "platform"],
    fill: "#034e72",
    ink: "#ffffff",
    stroke: "#034e72",
    top: 110,
  },
];

const STEP_X = 148;
const X0 = 13;
const BOX_W = 142;
const BASE = 330;
const chipWidth = (text) => Math.round(text.length * 8.4 + 28);

const Person = ({ x, y }) => (
  <g
    transform={`translate(${x} ${y})`}
    fill="none"
    stroke="#046999"
    strokeWidth="2"
    strokeLinecap="round"
  >
    <circle cx="0" cy="0" r="5" />
    <path d="M-8 17a8 8 0 0 1 16 0" />
  </g>
);

const Server = ({ x, y }) => (
  <g
    transform={`translate(${x} ${y})`}
    fill="none"
    stroke="#046999"
    strokeWidth="2"
    strokeLinecap="round"
  >
    <rect x="-22" y="-4" width="44" height="12" rx="3" />
    <rect x="-22" y="12" width="44" height="12" rx="3" />
    <path d="M-14 2h.01M-14 18h.01M-6 2h14M-6 18h14" />
  </g>
);

const LadderSvg = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 760 410"
    role="img"
    aria-labelledby="pbl-ladder-title pbl-ladder-desc"
    fontFamily="aptos, 'Segoe UI', Arial, sans-serif"
  >
    <title id="pbl-ladder-title">
      Power BI licence options from Free to Fabric
    </title>
    <desc id="pbl-ladder-desc">
      Five steps rise from left to right: Free, Pro, Premium Per User, Premium
      capacity and Fabric. The first three are paid per user and the last two
      are paid per capacity. Each step adds features and a higher fixed cost.
    </desc>
    <defs>
      <marker
        id="pbl-ladder-arrow"
        viewBox="0 0 10 10"
        refX="8"
        refY="5"
        markerWidth="8"
        markerHeight="8"
        orient="auto"
      >
        <path d="M1 1l8 4-8 4z" fill="#4a5568" />
      </marker>
    </defs>

    <path
      d="M13 58h722"
      stroke="#4a5568"
      strokeWidth="2"
      fill="none"
      markerEnd="url(#pbl-ladder-arrow)"
    />
    <text x="13" y="38" fontSize="15" fontWeight="700" fill="#4a5568">
      More features, higher fixed cost
    </text>

    {STEPS.map((s, i) => {
      const x = X0 + i * STEP_X;
      return (
        <g key={s.title}>
          <rect
            x={x}
            y={s.top - 34}
            width={chipWidth(s.chip)}
            height="24"
            rx="12"
            fill="#ffffff"
            stroke="#d4d6d9"
          />
          <text
            x={x + chipWidth(s.chip) / 2}
            y={s.top - 17}
            textAnchor="middle"
            fontSize="14"
            fontWeight="700"
            fill="#046999"
          >
            {s.chip}
          </text>
          <rect
            x={x}
            y={s.top}
            width={BOX_W}
            height={BASE - s.top}
            rx="10"
            fill={s.fill}
            stroke={s.stroke}
          />
          <text
            x={x + 14}
            y={s.top + 30}
            fontSize="18"
            fontWeight="700"
            fill={s.ink}
          >
            {s.title}
          </text>
          {s.lines.map((line, n) => (
            <text
              key={line}
              x={x + 14}
              y={s.top + 54 + n * 20}
              fontSize="14"
              fill={s.ink}
            >
              {line}
            </text>
          ))}
          {i < 3 ? (
            <g>
              {[0, 1, 2, 3, 4].map((p) => (
                <Person key={p} x={x + 22 + p * 24} y={354} />
              ))}
            </g>
          ) : (
            <Server x={x + BOX_W / 2} y={352} />
          )}
        </g>
      );
    })}
  </svg>
);

export default LadderSvg;
