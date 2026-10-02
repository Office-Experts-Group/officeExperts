// app/services/ai-agent-development/(svgs)/MultiAgentFlowSvg.jsx

// Decorative pipeline for the hero. Column positions are kept in one place so
// the connector paths below can be calculated from them rather than hand-typed.

const COL = {
  input: { x: 30, w: 190 },
  orch: { x: 290, w: 150, y: 140, h: 64 },
  agent: { x: 520, w: 200 },
  review: { x: 800, w: 170, y: 112, h: 120 },
  output: { x: 1040, w: 140 },
};

const CHIP_H = 44;
const MID_Y = 172; // vertical centre shared by orchestrator and review

const inputs = [
  { label: "Inbound email", y: 70 },
  { label: "Applications and PDFs", y: 150 },
  { label: "Web and market data", y: 230 },
];

const agents = [
  { label: "Research agent", y: 46 },
  { label: "Compliance agent", y: 114 },
  { label: "Financial agent", y: 182 },
  { label: "Drafting agent", y: 250 },
];

const outputs = [
  { label: "Word report", y: 70 },
  { label: "SharePoint list", y: 150 },
  { label: "Teams alert", y: 230 },
];

const columnLabels = [
  { x: 125, text: "INPUTS" },
  { x: 365, text: "ORCHESTRATE" },
  { x: 620, text: "SPECIALIST AGENTS" },
  { x: 885, text: "HUMAN REVIEW" },
  { x: 1110, text: "OUTPUTS" },
];

// Smooth horizontal S-curve between two points
const curve = (x1, y1, x2, y2) => {
  const mid = (x1 + x2) / 2;
  return `M${x1} ${y1} C${mid} ${y1} ${mid} ${y2} ${x2} ${y2}`;
};

// Shared chip renderer for inputs, agents and outputs
const Chip = ({ x, y, w, label, variant }) => (
  <g>
    <rect
      x={x}
      y={y}
      width={w}
      height={CHIP_H}
      rx="6"
      fill={variant === "agent" ? "#ffffff" : "#f7f8f9"}
      stroke={variant === "agent" ? "#046999" : "rgba(0,0,0,0.11)"}
      strokeWidth={variant === "agent" ? 1.5 : 1}
    />
    {variant === "agent" && (
      <circle cx={x + 20} cy={y + CHIP_H / 2} r="5" fill="#046999" />
    )}
    <text
      x={variant === "agent" ? x + 36 : x + 16}
      y={y + CHIP_H / 2 + 4.5}
      fill="#0d1b2a"
      fontSize="13"
      fontWeight={variant === "agent" ? 700 : 600}
    >
      {label}
    </text>
  </g>
);

export const MultiAgentFlowSvg = () => (
  <svg
    viewBox="0 0 1200 340"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    {/* ── Column labels ── */}
    {columnLabels.map(({ x, text }) => (
      <text
        key={text}
        x={x}
        y="22"
        textAnchor="middle"
        fill="#9a9da1"
        fontSize="10"
        fontWeight="700"
        letterSpacing="2"
      >
        {text}
      </text>
    ))}

    {/* ── Connectors (animated via .af-flow in the hero SCSS) ── */}
    <g fill="none" stroke="#046999" strokeWidth="1.5" opacity="0.55">
      {inputs.map(({ y }) => (
        <path
          key={`in-${y}`}
          className="af-flow"
          d={curve(
            COL.input.x + COL.input.w,
            y + CHIP_H / 2,
            COL.orch.x,
            MID_Y,
          )}
        />
      ))}
      {agents.map(({ y }) => (
        <path
          key={`ag-in-${y}`}
          className="af-flow"
          d={curve(COL.orch.x + COL.orch.w, MID_Y, COL.agent.x, y + CHIP_H / 2)}
        />
      ))}
      {agents.map(({ y }) => (
        <path
          key={`ag-out-${y}`}
          className="af-flow"
          d={curve(
            COL.agent.x + COL.agent.w,
            y + CHIP_H / 2,
            COL.review.x,
            MID_Y,
          )}
        />
      ))}
      {outputs.map(({ y }) => (
        <path
          key={`out-${y}`}
          className="af-flow"
          d={curve(
            COL.review.x + COL.review.w,
            MID_Y,
            COL.output.x,
            y + CHIP_H / 2,
          )}
        />
      ))}
    </g>

    {/* ── Feedback loop: reviewer decisions train the agents ── */}
    <path
      d="M885 232 C885 326 620 326 620 300"
      fill="none"
      stroke="#046999"
      strokeWidth="1.5"
      strokeDasharray="3 5"
    />
    <path d="M614 306 L620 296 L626 306" fill="none" stroke="#046999" strokeWidth="1.5" />
    <text x="752" y="334" textAnchor="middle" fill="#4a5568" fontSize="11" fontStyle="italic">
      Reviewer decisions train the agents
    </text>

    {/* ── Inputs ── */}
    {inputs.map(({ label, y }) => (
      <Chip key={label} x={COL.input.x} y={y} w={COL.input.w} label={label} />
    ))}

    {/* ── Orchestrator ── */}
    <rect
      x={COL.orch.x}
      y={COL.orch.y}
      width={COL.orch.w}
      height={COL.orch.h}
      rx="32"
      fill="#046999"
    />
    <text x={COL.orch.x + COL.orch.w / 2} y={MID_Y - 3} textAnchor="middle" fill="#ffffff" fontSize="13" fontWeight="700">
      Orchestrator
    </text>
    <text x={COL.orch.x + COL.orch.w / 2} y={MID_Y + 14} textAnchor="middle" fill="rgba(255,255,255,0.65)" fontSize="10">
      routes each task
    </text>

    {/* ── Specialist agents ── */}
    {agents.map(({ label, y }) => (
      <Chip key={label} x={COL.agent.x} y={y} w={COL.agent.w} label={label} variant="agent" />
    ))}

    {/* ── Human review panel ── */}
    <rect
      x={COL.review.x}
      y={COL.review.y}
      width={COL.review.w}
      height={COL.review.h}
      rx="8"
      fill="#ffffff"
      stroke="#0d1b2a"
      strokeWidth="1.5"
    />
    <circle cx={COL.review.x + 30} cy={COL.review.y + 32} r="12" fill="#e8f4fa" />
    <circle cx={COL.review.x + 30} cy={COL.review.y + 28} r="4" fill="#046999" />
    <path
      d={`M${COL.review.x + 22} ${COL.review.y + 40} q8 -9 16 0`}
      fill="#046999"
    />
    <text x={COL.review.x + 52} y={COL.review.y + 36} fill="#0d1b2a" fontSize="13" fontWeight="700">
      Your team
    </text>
    {/* Approve / send back buttons */}
    <rect x={COL.review.x + 16} y={COL.review.y + 62} width="66" height="26" rx="4" fill="#046999" />
    <text x={COL.review.x + 49} y={COL.review.y + 79} textAnchor="middle" fill="#ffffff" fontSize="10.5" fontWeight="700">
      Approve
    </text>
    <rect x={COL.review.x + 88} y={COL.review.y + 62} width="66" height="26" rx="4" fill="none" stroke="rgba(4,105,153,0.3)" />
    <text x={COL.review.x + 121} y={COL.review.y + 79} textAnchor="middle" fill="#046999" fontSize="10.5" fontWeight="700">
      Send back
    </text>
    <text x={COL.review.x + 16} y={COL.review.y + 108} fill="#9a9da1" fontSize="10">
      Every finding referenced
    </text>

    {/* ── Outputs ── */}
    {outputs.map(({ label, y }) => (
      <Chip key={label} x={COL.output.x} y={y} w={COL.output.w} label={label} />
    ))}
  </svg>
);
