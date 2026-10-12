// app/services/microsoft-office-365/app-and-custom-development/(svgs)/AiFlowSvg.jsx

// Information in → AI agent → your systems → human review, with a feedback loop back to the agent
// Drawn for a dark background
const nodes = [
  { x: 20, title: "Information in", sub: "Emails, forms, documents" },
  { x: 200, title: "AI agent", sub: "Reads, decides, acts", highlight: true },
  { x: 380, title: "Your systems", sub: "SharePoint, CRM, Dataverse" },
  { x: 560, title: "Human review", sub: "Approve or adjust" },
];

const NODE_WIDTH = 140;

export const AiFlowSvg = () => (
  <svg viewBox="0 0 720 190" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <defs>
      <linearGradient id="af-accent" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#046999" />
        <stop offset="100%" stopColor="#0a85bf" />
      </linearGradient>
    </defs>

    {/* Arrows between nodes */}
    {[160, 340, 520].map((x) => (
      <g key={x} stroke="#0a85bf" strokeWidth="2" fill="none">
        <path d={`M ${x} 70 L ${x + 36} 70`} />
        <path d={`M ${x + 30} 64 L ${x + 36} 70 L ${x + 30} 76`} strokeLinecap="round" strokeLinejoin="round" />
      </g>
    ))}

    {/* Nodes */}
    {nodes.map(({ x, title, sub, highlight }) => (
      <g key={title}>
        <rect
          x={x}
          y="30"
          width={NODE_WIDTH}
          height="80"
          rx="10"
          fill={highlight ? "url(#af-accent)" : "#fff"}
          fillOpacity={highlight ? 1 : 0.06}
          stroke="#fff"
          strokeOpacity={highlight ? 0 : 0.18}
        />
        <text x={x + NODE_WIDTH / 2} y="66" textAnchor="middle" fill="#fff" fontSize="14" fontWeight="700">
          {title}
        </text>
        <text x={x + NODE_WIDTH / 2} y="86" textAnchor="middle" fill="#fff" fillOpacity="0.65" fontSize="10.5">
          {sub}
        </text>
      </g>
    ))}

    {/* Feedback loop from review back to the agent */}
    <path d="M 630 110 V 160 H 270 V 116" fill="none" stroke="#fff" strokeOpacity="0.35" strokeWidth="1.5" strokeDasharray="5 4" />
    <path d="M 264 122 L 270 114 L 276 122" fill="none" stroke="#fff" strokeOpacity="0.35" strokeWidth="1.5" />
    <text x="450" y="154" textAnchor="middle" fill="#fff" fillOpacity="0.55" fontSize="10.5" letterSpacing="1.5">
      FEEDBACK IMPROVES THE NEXT RUN
    </text>
  </svg>
);
