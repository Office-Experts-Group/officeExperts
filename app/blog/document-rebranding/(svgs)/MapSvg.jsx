// /app/blog/document-rebranding/(svgs)/MapSvg.jsx
// Hard-coded theme hex (token names): $accent #046999, $accent-light #e8f4fa,
// $text-primary #0d1b2a, $text-secondary #4a5568, $light-bg #f1f5f9.
// What carries across a rebrand and what gets updated.

const ROWS = [
  { from: "Heading levels, numbering", to: "Kept as is", solid: false },
  { from: "Approved legal wording", to: "Kept as is", solid: false },
  { from: "Headers, footers, breaks", to: "Kept as is", solid: false },
  { from: "Logo and secondary marks", to: "Swapped once", solid: true },
  { from: "Colours and fonts", to: "Set once in styles", solid: true },
  {
    from: "Name, ABN, contact details",
    to: "Updated in one pass",
    solid: true,
  },
];

export default function MapSvg() {
  return (
    <svg
      viewBox="0 0 560 420"
      role="img"
      aria-labelledby="drb-map-title drb-map-desc"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "100%", height: "auto" }}
    >
      <title id="drb-map-title">What carries across a document rebrand</title>
      <desc id="drb-map-desc">
        Heading structure, approved wording and headers and footers are kept as
        they are. The logo, colours, fonts and company details are the only
        things updated.
      </desc>
      <defs>
        <marker
          id="drb-map-arrow"
          viewBox="0 0 10 10"
          refX="8"
          refY="5"
          markerWidth="8"
          markerHeight="8"
          orient="auto-start-reverse"
        >
          <path d="M0 0 L10 5 L0 10 z" fill="#4a5568" />
        </marker>
      </defs>

      <text x="10" y="26" fontSize="14" fontWeight="700" fill="#4a5568">
        In your documents
      </text>
      <text x="310" y="26" fontSize="14" fontWeight="700" fill="#4a5568">
        After the rebrand
      </text>

      {ROWS.map((row, i) => {
        const y = 44 + i * 56;
        return (
          <g key={row.from}>
            <rect
              x="10"
              y={y}
              width="230"
              height="44"
              rx="10"
              fill="#f1f5f9"
              stroke="#cbd5e1"
            />
            <text x="24" y={y + 28} fontSize="15" fill="#0d1b2a">
              {row.from}
            </text>
            <path
              d={`M248 ${y + 22} H298`}
              stroke="#4a5568"
              strokeWidth="2"
              strokeLinecap="round"
              markerEnd="url(#drb-map-arrow)"
            />
            <rect
              x="310"
              y={y}
              width="240"
              height="44"
              rx="10"
              fill={row.solid ? "#046999" : "#e8f4fa"}
              stroke="#046999"
            />
            <text
              x="326"
              y={y + 28}
              fontSize="15"
              fontWeight="600"
              fill={row.solid ? "#ffffff" : "#0d1b2a"}
            >
              {row.to}
            </text>
          </g>
        );
      })}

      <rect
        x="10"
        y="386"
        width="18"
        height="18"
        rx="4"
        fill="#e8f4fa"
        stroke="#046999"
      />
      <text x="36" y="400" fontSize="14" fill="#4a5568">
        Carries across
      </text>
      <rect x="170" y="386" width="18" height="18" rx="4" fill="#046999" />
      <text x="196" y="400" fontSize="14" fill="#4a5568">
        Changed once, applied everywhere
      </text>
    </svg>
  );
}
