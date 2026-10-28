// /app/blog/word-templates-for-legal-firms/(svgs)/LadderSvg.jsx
// Five-step maturity ladder from "Save As" copies to automation.
// Theme hex used: $accent #046999, $accent-light #e8f4fa, $text-primary #0d1b2a.

const steps = [
  { l1: "Save As", l2: "copies" },
  { l1: "Styles and", l2: ".dotx files" },
  { l1: "Fields and", l2: "Quick Parts" },
  { l1: "Governed", l2: "library" },
  { l1: "Automation", l2: "layer" },
];

export default function LadderSvg() {
  const w = 148;
  const base = 410;
  return (
    <svg
      viewBox="0 0 760 420"
      role="img"
      aria-labelledby="lfw-ladder-title lfw-ladder-desc"
      style={{ width: "100%", height: "auto", display: "block" }}
    >
      <title id="lfw-ladder-title">
        Template maturity ladder for a legal firm
      </title>
      <desc id="lfw-ladder-desc">
        Five rising steps: Save As copies, Styles and template files, fields and
        Quick Parts, a governed library, then an automation layer. Step two is
        marked as the place to start.
      </desc>

      {steps.map((s, i) => {
        const h = 120 + i * 50;
        const x = 10 + i * w;
        const top = base - h;
        const last = i === steps.length - 1;
        const first = i === 0;
        return (
          <g key={s.l1}>
            <rect
              x={x}
              y={top}
              width={w - 6}
              height={h}
              rx="12"
              fill={last ? "#046999" : first ? "#f1f3f5" : "#e8f4fa"}
              stroke={last ? "#046999" : first ? "#c4ccd4" : "#b9d6e5"}
              strokeDasharray={first ? "5 4" : undefined}
            />
            <text
              x={x + 16}
              y={top + 28}
              fontSize="14"
              fontWeight="700"
              fill={last ? "#bfe6f7" : "#046999"}
            >
              {`STEP ${i + 1}`}
            </text>
            <text
              x={x + 16}
              y={top + 56}
              fontSize="16"
              fontWeight="700"
              fill={last ? "#ffffff" : "#0d1b2a"}
            >
              {s.l1}
            </text>
            <text
              x={x + 16}
              y={top + 78}
              fontSize="16"
              fontWeight="700"
              fill={last ? "#ffffff" : "#0d1b2a"}
            >
              {s.l2}
            </text>
          </g>
        );
      })}

      <g>
        <rect
          x={10 + w + 14}
          y={base - 170 - 44}
          width="104"
          height="30"
          rx="15"
          fill="#0d1b2a"
        />
        <text
          x={10 + w + 14 + 52}
          y={base - 170 - 24}
          fontSize="14"
          fontWeight="700"
          fill="#ffffff"
          textAnchor="middle"
        >
          Start here
        </text>
        <path
          d={`M${10 + w + 66} ${base - 170 - 14} v10`}
          stroke="#0d1b2a"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
}
