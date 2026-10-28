// /app/blog/word-templates-for-legal-firms/(svgs)/FieldFlowSvg.jsx
// Hub and spoke: one client name typed once, updated everywhere it appears.
// Theme hex used: $accent #046999, $accent-light #e8f4fa, $text-primary #0d1b2a,
// $text-secondary #4a5568.

const targets = [
  { y: 16, title: "Document header", sub: "Matter title block" },
  { y: 112, title: "Salutation", sub: "Dear client name" },
  { y: 208, title: "Signature block", sub: "Execution page" },
  { y: 304, title: "Footer reference", sub: "File and matter number" },
];

export default function FieldFlowSvg() {
  return (
    <svg
      viewBox="0 0 760 400"
      role="img"
      aria-labelledby="lfw-field-title lfw-field-desc"
      style={{ width: "100%", height: "auto", display: "block" }}
    >
      <title id="lfw-field-title">
        One entry updating four places in a document
      </title>
      <desc id="lfw-field-desc">
        A client name is typed once into a document property, which then fills
        the header, salutation, signature block and footer reference.
      </desc>

      <g fill="none" stroke="#046999" strokeWidth="2" strokeLinecap="round">
        <path d="M224 200 H284" />
        {targets.map((t) => (
          <path
            key={t.y}
            d={`M456 200 C490 200 484 ${t.y + 36} 520 ${t.y + 36}`}
          />
        ))}
      </g>
      {targets.map((t) => (
        <circle key={t.y} cx="520" cy={t.y + 36} r="4" fill="#046999" />
      ))}

      <rect
        x="16"
        y="144"
        width="208"
        height="112"
        rx="14"
        fill="#ffffff"
        stroke="#046999"
        strokeWidth="2"
      />
      <text x="36" y="176" fontSize="14" fontWeight="700" fill="#046999">
        TYPED ONCE
      </text>
      <rect x="36" y="190" width="168" height="34" rx="8" fill="#e8f4fa" />
      <text x="48" y="212" fontSize="16" fontWeight="700" fill="#0d1b2a">
        Client name
      </text>

      <rect x="284" y="176" width="172" height="48" rx="24" fill="#046999" />
      <text
        x="370"
        y="206"
        fontSize="14"
        fontWeight="700"
        fill="#ffffff"
        textAnchor="middle"
      >
        DOCPROPERTY
      </text>

      {targets.map((t) => (
        <g key={t.y}>
          <rect
            x="520"
            y={t.y}
            width="224"
            height="72"
            rx="12"
            fill="#e8f4fa"
            stroke="#b9d6e5"
          />
          <text
            x="540"
            y={t.y + 30}
            fontSize="15"
            fontWeight="700"
            fill="#0d1b2a"
          >
            {t.title}
          </text>
          <text x="540" y={t.y + 52} fontSize="14" fill="#4a5568">
            {t.sub}
          </text>
        </g>
      ))}
    </svg>
  );
}
