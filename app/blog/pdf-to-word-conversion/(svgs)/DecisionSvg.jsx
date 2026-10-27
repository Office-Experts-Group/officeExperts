// /app/blog/pdf-to-word-conversion/(svgs)/DecisionSvg.jsx
// Decision flow: three yes/no questions leading to the recommended route.
// Recommended outcomes are solid $accent #046999; the DIY outcome is light $accent-light #e8f4fa.
// Other values: $text-primary #0d1b2a, $text-secondary #4a5568. Server component.

const QUESTIONS = [
  { y: 20, lines: ["Is the document", "confidential?"] },
  { y: 160, lines: ["Does it contain tables,", "columns or scanned pages?"] },
  { y: 300, lines: ["Will you reuse it", "as a template?"] },
];

const OUTCOMES = [
  {
    y: 8,
    label: "RECOMMENDED",
    lines: ["Professional conversion,", "handled securely"],
  },
  {
    y: 148,
    label: "RECOMMENDED",
    lines: ["Professional rebuild", "of layout and structure"],
  },
  {
    y: 288,
    label: "RECOMMENDED",
    lines: ["Professional rebuild", "plus a reusable template"],
  },
];

export default function DecisionSvg() {
  return (
    <svg
      viewBox="0 0 760 540"
      role="img"
      aria-labelledby="ptw-decision-title ptw-decision-desc"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "100%", height: "auto", display: "block" }}
    >
      <title id="ptw-decision-title">
        Which PDF to Word route should you use?
      </title>
      <desc id="ptw-decision-desc">
        Three questions. Confidential files, files with tables, columns or
        scans, and files that will become templates all point to a professional
        conversion. If the answer to all three is no, a free tool or Word&apos;s
        own PDF open is fine.
      </desc>

      {QUESTIONS.map((q, i) => (
        <g key={q.y}>
          <rect
            x="40"
            y={q.y}
            width="300"
            height="72"
            rx="12"
            fill="#ffffff"
            stroke="#046999"
            strokeWidth="1.5"
          />
          <text
            x="60"
            y={q.y + 30}
            fontSize="16"
            fontWeight="600"
            fill="#0d1b2a"
          >
            {q.lines[0]}
          </text>
          <text
            x="60"
            y={q.y + 54}
            fontSize="16"
            fontWeight="600"
            fill="#0d1b2a"
          >
            {q.lines[1]}
          </text>

          {/* Yes arrow */}
          <path
            d={`M340 ${q.y + 36}h88`}
            stroke="#046999"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <path
            d={`M420 ${q.y + 28}l10 8-10 8`}
            fill="none"
            stroke="#046999"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <text
            x="384"
            y={q.y + 24}
            textAnchor="middle"
            fontSize="14"
            fontWeight="700"
            fill="#046999"
          >
            Yes
          </text>

          {/* No arrow */}
          <path
            d={`M190 ${q.y + 72}v${i < 2 ? 56 : 40}`}
            stroke="#4a5568"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <path
            d={`M182 ${q.y + (i < 2 ? 116 : 100)}l8 10 8-10`}
            fill="none"
            stroke="#4a5568"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <text
            x="208"
            y={q.y + 102}
            fontSize="14"
            fontWeight="700"
            fill="#4a5568"
          >
            No
          </text>
        </g>
      ))}

      {OUTCOMES.map((o) => (
        <g key={o.y}>
          <rect
            x="440"
            y={o.y}
            width="300"
            height="96"
            rx="12"
            fill="#046999"
          />
          <text
            x="460"
            y={o.y + 30}
            fontSize="14"
            fontWeight="700"
            letterSpacing="1"
            fill="#ffffff"
            fillOpacity="0.8"
          >
            {o.label}
          </text>
          <text
            x="460"
            y={o.y + 56}
            fontSize="16"
            fontWeight="600"
            fill="#ffffff"
          >
            {o.lines[0]}
          </text>
          <text
            x="460"
            y={o.y + 76}
            fontSize="16"
            fontWeight="600"
            fill="#ffffff"
          >
            {o.lines[1]}
          </text>
        </g>
      ))}

      {/* DIY outcome */}
      <rect
        x="40"
        y="428"
        width="300"
        height="96"
        rx="12"
        fill="#e8f4fa"
        stroke="#046999"
        strokeOpacity="0.4"
      />
      <text
        x="60"
        y="458"
        fontSize="14"
        fontWeight="700"
        letterSpacing="1"
        fill="#046999"
      >
        FINE TO DIY
      </text>
      <text x="60" y="484" fontSize="16" fontWeight="600" fill="#0d1b2a">
        A free tool or Word&apos;s own
      </text>
      <text x="60" y="504" fontSize="16" fontWeight="600" fill="#0d1b2a">
        PDF open will do
      </text>
    </svg>
  );
}
