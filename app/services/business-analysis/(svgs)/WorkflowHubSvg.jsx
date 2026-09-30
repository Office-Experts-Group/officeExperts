// app/services/business-analysis/(svgs)/WorkflowHubSvg.jsx

// ── WorkflowHubSvg ────────────────────────────────────────────────────────────
// "One joined-up picture": six business areas around a single hub, joined to
// the centre and to each other by the outer ring.
// Colours mirror globals.scss tokens ($accent, $accent-light, $text-primary).
const CENTRE = 240;
const RADIUS = 160;

// Labels in clockwise order from the top; they match the area rows in
// BusinessAnalysisAreas.jsx (shortened to fit the circles)
const labels = [
  "Documents",
  "Finance",
  "Operations",
  "Workflow",
  "Customers",
  "Integration",
];

// Positions each node evenly around the ring, starting at 12 o'clock
const getNodePosition = (index) => {
  const angle = ((index * 60 - 90) * Math.PI) / 180;
  return {
    x: Math.round(CENTRE + RADIUS * Math.cos(angle)),
    y: Math.round(CENTRE + RADIUS * Math.sin(angle)),
  };
};

export const WorkflowHubSvg = () => {
  const nodes = labels.map((label, i) => ({ label, ...getNodePosition(i) }));

  return (
    <svg
      viewBox="0 0 480 480"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      {/* Outer ring linking every area to its neighbours */}
      <circle
        cx={CENTRE}
        cy={CENTRE}
        r={RADIUS}
        fill="none"
        stroke="#046999"
        strokeDasharray="4 6"
        opacity="0.35"
      />

      {/* Spokes */}
      <g stroke="#046999" strokeWidth="1.25" opacity="0.5">
        {nodes.map((n) => (
          <line key={`s-${n.label}`} x1={CENTRE} y1={CENTRE} x2={n.x} y2={n.y} />
        ))}
      </g>

      {/* Hub */}
      <circle cx={CENTRE} cy={CENTRE} r="66" fill="#046999" />
      <circle
        cx={CENTRE}
        cy={CENTRE}
        r="78"
        fill="none"
        stroke="#046999"
        opacity="0.2"
      />
      <g fontWeight="700" fill="#ffffff" textAnchor="middle">
        <text x={CENTRE} y={CENTRE - 4} fontSize="15">
          Your
        </text>
        <text x={CENTRE} y={CENTRE + 15} fontSize="15">
          business
        </text>
      </g>

      {/* Area nodes */}
      {nodes.map((n) => (
        <g key={n.label}>
          <circle
            cx={n.x}
            cy={n.y}
            r="44"
            fill="#ffffff"
            stroke="rgba(4,105,153,0.3)"
            strokeWidth="1.5"
          />
          <circle cx={n.x} cy={n.y - 16} r="3.5" fill="#046999" />
          <text
            x={n.x}
            y={n.y + 9}
            fontSize="12"
            fontWeight="700"
            fill="#0d1b2a"
            textAnchor="middle"
          >
            {n.label}
          </text>
        </g>
      ))}
    </svg>
  );
};
