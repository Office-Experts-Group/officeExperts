// app/copilot-and-ai-templates/(svgs)/AgentWorkflowSvg.jsx
// Custom AI agent flow: business inputs → agent (templates + rules) →
// human approval → finished outputs.

const ACCENT = "#046999";
const INK = "#0d1b2a";
const SECONDARY = "#4a5568";

// Small generic glyphs, drawn around a 0,0 origin
const icons = {
  mail: (
    <>
      <rect
        x="-9"
        y="-6"
        width="18"
        height="13"
        rx="2"
        fill="none"
        stroke={ACCENT}
        strokeWidth="1.5"
      />
      <path
        d="M-9-5l9 7 9-7"
        fill="none"
        stroke={ACCENT}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </>
  ),
  table: (
    <>
      <rect
        x="-9"
        y="-8"
        width="18"
        height="16"
        rx="2"
        fill="none"
        stroke={ACCENT}
        strokeWidth="1.5"
      />
      <path d="M-9-2h18M-9 3h18M-2-8v16" stroke={ACCENT} strokeWidth="1.5" />
    </>
  ),
  doc: (
    <>
      <path
        d="M-7-9h9l5 5v13h-14z"
        fill="none"
        stroke={ACCENT}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M-4-1h8M-4 3h8"
        stroke={ACCENT}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </>
  ),
};

const inputs = [
  { label: "Shared inbox", icon: "mail" },
  { label: "Job and client data", icon: "table" },
  { label: "Documents and PDFs", icon: "doc" },
];

const outputs = [
  { label: "Branded invoice", icon: "doc" },
  { label: "Formatted report", icon: "doc" },
  { label: "Drafted reply", icon: "mail" },
];

const ROWS = [40, 118, 196]; // top y of each pill
const PILL_W = 170;
const PILL_H = 44;

const Pill = ({ x, y, label, icon }) => (
  <g>
    <rect
      x={x}
      y={y}
      width={PILL_W}
      height={PILL_H}
      rx="10"
      fill="#fff"
      stroke={ACCENT}
      strokeOpacity="0.3"
    />
    <g transform={`translate(${x + 24} ${y + PILL_H / 2})`}>{icons[icon]}</g>
    <text x={x + 44} y={y + 26} fontSize="11.5" fill={INK}>
      {label}
    </text>
  </g>
);

export const AgentWorkflowSvg = () => (
  <svg
    // Cropped to the drawn content (pills span x 20–780, y 40–240),
    // with 1 unit spare so the pill strokes aren't clipped
    viewBox="19 39 762 202"
    xmlns="http://www.w3.org/2000/svg"
    fontFamily="inherit"
    aria-hidden="true"
  >
    <defs>
      <marker
        id="aw-arrow"
        viewBox="0 0 8 8"
        refX="7"
        refY="4"
        markerWidth="7"
        markerHeight="7"
        orient="auto"
      >
        <path d="M0 0l8 4-8 4z" fill={ACCENT} />
      </marker>
    </defs>

    {/* ── Connectors (drawn first so nodes sit on top) ── */}
    {ROWS.map((y) => (
      <path
        key={`in-${y}`}
        d={`M190 ${y + 22} C 245 ${y + 22}, 250 140, 300 140`}
        fill="none"
        stroke={ACCENT}
        strokeOpacity="0.45"
        strokeWidth="1.5"
      />
    ))}
    <path
      d="M470 140 H508"
      stroke={ACCENT}
      strokeOpacity="0.6"
      strokeWidth="1.5"
      markerEnd="url(#aw-arrow)"
    />
    {ROWS.map((y) => (
      <path
        key={`out-${y}`}
        d={`M575 140 C 595 140, 590 ${y + 22}, 606 ${y + 22}`}
        fill="none"
        stroke={ACCENT}
        strokeOpacity="0.45"
        strokeWidth="1.5"
        markerEnd="url(#aw-arrow)"
      />
    ))}

    {/* ── Inputs ── */}
    {inputs.map((item, i) => (
      <Pill key={item.label} x={20} y={ROWS[i]} {...item} />
    ))}

    {/* ── Agent ── */}
    <rect x="300" y="80" width="170" height="120" rx="16" fill={ACCENT} />
    <path
      d="M334 108c1.4 7.3 4.2 10 11.5 11.5-7.3 1.4-10 4.2-11.5 11.5-1.4-7.3-4.2-10-11.5-11.5 7.3-1.4 10-4.2 11.5-11.5z"
      fill="#fff"
    />
    <text x="356" y="125" fontSize="15" fontWeight="700" fill="#fff">
      AI agent
    </text>
    <text x="322" y="160" fontSize="10.5" fill="#fff" fillOpacity="0.8">
      Your templates, approved
    </text>
    <text x="322" y="175" fontSize="10.5" fill="#fff" fillOpacity="0.8">
      content and rules
    </text>

    {/* ── Human approval ── */}
    <circle
      cx="542"
      cy="140"
      r="30"
      fill="#fff"
      stroke={ACCENT}
      strokeWidth="1.5"
    />
    <path
      d="M530 140l8 8 15-16"
      fill="none"
      stroke={ACCENT}
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <text x="542" y="190" fontSize="10.5" fill={SECONDARY} textAnchor="middle">
      Human
    </text>
    <text x="542" y="204" fontSize="10.5" fill={SECONDARY} textAnchor="middle">
      approval
    </text>

    {/* ── Outputs ── */}
    {outputs.map((item, i) => (
      <Pill key={item.label} x={610} y={ROWS[i]} {...item} />
    ))}
  </svg>
);
