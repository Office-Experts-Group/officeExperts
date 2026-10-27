// /app/blog/google-docs-vs-microsoft-word/(svgs)/EcosystemSvg.jsx
// Hub and spoke: one document connected to the systems around it.
// Theme values used (hard-coded hex): $accent #046999, $accent-light #e8f4fa,
// $white #ffffff, $text-primary #0d1b2a, $text-secondary #4a5568.

const LEFT = [
  { y: 30, title: "Shared storage", note: "Co-authoring and versions" },
  { y: 153, title: "Team chat", note: "Review and approvals" },
  { y: 276, title: "Business data", note: "CRM and ERP records" },
];

const RIGHT = [
  { y: 30, title: "Branded templates", note: "Styles and locked layouts" },
  { y: 153, title: "Automation", note: "Macros and add-ins" },
  { y: 276, title: "Compliance records", note: "Signatures and audit trails" },
];

function Node({ x, y, title, note }) {
  return (
    <g>
      <rect
        x={x}
        y={y}
        width="230"
        height="84"
        rx="12"
        fill="#ffffff"
        stroke="#046999"
        strokeWidth="1.5"
      />
      <text x={x + 20} y={y + 34} fontSize="16" fontWeight="700" fill="#0d1b2a">
        {title}
      </text>
      <text x={x + 20} y={y + 60} fontSize="14" fill="#4a5568">
        {note}
      </text>
    </g>
  );
}

export default function EcosystemSvg() {
  return (
    <svg
      viewBox="0 0 760 390"
      role="img"
      aria-labelledby="gdw-eco-title gdw-eco-desc"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "100%", height: "auto" }}
    >
      <title id="gdw-eco-title">
        A Word document connected to business systems
      </title>
      <desc id="gdw-eco-desc">
        A central document is connected to six things around it: shared storage,
        team chat, business data, branded templates, automation and compliance
        records.
      </desc>

      {/* spokes */}
      {LEFT.map((n) => (
        <path
          key={`l${n.y}`}
          d={`M260 ${n.y + 42}L380 195`}
          stroke="#046999"
          strokeOpacity="0.45"
          strokeWidth="2"
        />
      ))}
      {RIGHT.map((n) => (
        <path
          key={`r${n.y}`}
          d={`M500 ${n.y + 42}L380 195`}
          stroke="#046999"
          strokeOpacity="0.45"
          strokeWidth="2"
        />
      ))}

      {/* hub */}
      <circle cx="380" cy="195" r="92" fill="#e8f4fa" />
      <circle cx="380" cy="195" r="74" fill="#046999" />
      <text
        x="380"
        y="190"
        textAnchor="middle"
        fontSize="18"
        fontWeight="700"
        fill="#ffffff"
      >
        Your
      </text>
      <text
        x="380"
        y="214"
        textAnchor="middle"
        fontSize="18"
        fontWeight="700"
        fill="#ffffff"
      >
        document
      </text>

      {LEFT.map((n) => (
        <Node key={n.title} x={30} {...n} />
      ))}
      {RIGHT.map((n) => (
        <Node key={n.title} x={500} {...n} />
      ))}
    </svg>
  );
}
