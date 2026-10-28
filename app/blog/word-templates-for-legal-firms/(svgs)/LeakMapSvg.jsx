// /app/blog/word-templates-for-legal-firms/(svgs)/LeakMapSvg.jsx
// Anatomy diagram: where a copied matter file carries the last client's details.
// Theme hex used: $accent #046999, $accent-light #e8f4fa, $text-primary #0d1b2a,
// $text-secondary #4a5568, $replace-x #c0392b.

const left = [
  {
    n: 1,
    y: 20,
    title: "Client name in the header",
    l1: "Last matter’s name left",
    l2: "in a header or title.",
  },
  {
    n: 2,
    y: 176,
    title: "Superseded clause",
    l1: "Old wording reused",
    l2: "without a compliance check.",
  },
  {
    n: 5,
    y: 352,
    title: "Footer reference",
    l1: "File number from a",
    l2: "different matter.",
  },
];
const right = [
  {
    n: 3,
    y: 60,
    title: "Document properties",
    l1: "Author and title fields",
    l2: "carry over silently.",
  },
  {
    n: 4,
    y: 252,
    title: "Comments and edits",
    l1: "Tracked changes and notes",
    l2: "still sit in the file.",
  },
];

function Callout({ x, y, n, title, l1, l2 }) {
  return (
    <g>
      <rect
        x={x}
        y={y}
        width="224"
        height="96"
        rx="12"
        fill="#ffffff"
        stroke="#c4d6e0"
      />
      <circle cx={x + 26} cy={y + 26} r="12" fill="#046999" />
      <text
        x={x + 26}
        y={y + 31}
        fontSize="14"
        fontWeight="700"
        fill="#ffffff"
        textAnchor="middle"
      >
        {n}
      </text>
      <text x={x + 46} y={y + 31} fontSize="15" fontWeight="700" fill="#0d1b2a">
        {title}
      </text>
      <text x={x + 16} y={y + 60} fontSize="14" fill="#4a5568">
        {l1}
      </text>
      <text x={x + 16} y={y + 78} fontSize="14" fill="#4a5568">
        {l2}
      </text>
    </g>
  );
}

export default function LeakMapSvg() {
  return (
    <svg
      viewBox="0 0 820 480"
      role="img"
      aria-labelledby="lfw-leak-title lfw-leak-desc"
      style={{ width: "100%", height: "auto", display: "block" }}
    >
      <title id="lfw-leak-title">
        Five places a copied legal document can leak old matter details
      </title>
      <desc id="lfw-leak-desc">
        A document with five numbered pins: the header, an outdated clause, the
        document properties, comments and tracked changes, and the footer
        reference.
      </desc>

      {/* connectors */}
      <g stroke="#046999" strokeWidth="1.5" strokeDasharray="3 4" fill="none">
        <path d="M234 68 L300 70" />
        <path d="M234 224 L300 210" />
        <path d="M234 400 L300 424" />
        <path d="M586 108 L540 62" />
        <path d="M586 300 L540 270" />
      </g>

      {/* document */}
      <rect
        x="290"
        y="20"
        width="260"
        height="440"
        rx="12"
        fill="#f7f8f9"
        stroke="#b9c4cd"
      />
      <rect x="290" y="20" width="260" height="68" rx="12" fill="#e8f4fa" />
      <rect x="290" y="76" width="260" height="12" fill="#e8f4fa" />
      <rect x="312" y="40" width="110" height="10" rx="3" fill="#046999" />
      <rect
        x="312"
        y="60"
        width="150"
        height="14"
        rx="3"
        fill="#ffffff"
        stroke="#c0392b"
        strokeDasharray="4 3"
      />
      <rect
        x="318"
        y="64"
        width="86"
        height="6"
        rx="3"
        fill="#c0392b"
        opacity="0.55"
      />

      {[112, 130, 148].map((y, i) => (
        <rect
          key={y}
          x="312"
          y={y}
          width={216 - i * 22}
          height="7"
          rx="3"
          fill="#d1d8de"
        />
      ))}
      <rect
        x="306"
        y="176"
        width="228"
        height="62"
        rx="8"
        fill="#ffffff"
        stroke="#c0392b"
        strokeDasharray="5 4"
      />
      <rect x="320" y="190" width="150" height="8" rx="3" fill="#9a9da1" />
      <rect x="320" y="208" width="196" height="7" rx="3" fill="#d1d8de" />
      <rect x="320" y="222" width="130" height="7" rx="3" fill="#d1d8de" />

      {[262, 280, 298, 316, 334, 352, 370].map((y, i) => (
        <rect
          key={y}
          x="312"
          y={y}
          width={216 - (i % 3) * 30}
          height="7"
          rx="3"
          fill="#d1d8de"
        />
      ))}

      {/* comment balloon */}
      <rect
        x="486"
        y="246"
        width="56"
        height="34"
        rx="8"
        fill="#fff6d9"
        stroke="#d9b94a"
      />
      <path d="M498 280 l-6 10 l16 -10 z" fill="#fff6d9" stroke="#d9b94a" />

      {/* footer */}
      <rect
        x="312"
        y="408"
        width="216"
        height="26"
        rx="6"
        fill="#ffffff"
        stroke="#c0392b"
        strokeDasharray="4 3"
      />
      <rect x="322" y="417" width="96" height="8" rx="3" fill="#9a9da1" />

      {/* properties tab */}
      <rect
        x="494"
        y="34"
        width="44"
        height="24"
        rx="6"
        fill="#ffffff"
        stroke="#046999"
      />
      <rect x="502" y="42" width="28" height="3" rx="1.5" fill="#046999" />
      <rect x="502" y="49" width="20" height="3" rx="1.5" fill="#046999" />

      {/* pins */}
      {[
        [300, 68, 1],
        [300, 208, 2],
        [538, 56, 3],
        [538, 266, 4],
        [300, 422, 5],
      ].map(([cx, cy, n]) => (
        <g key={n}>
          <circle
            cx={cx}
            cy={cy}
            r="13"
            fill="#046999"
            stroke="#ffffff"
            strokeWidth="2"
          />
          <text
            x={cx}
            y={cy + 5}
            fontSize="14"
            fontWeight="700"
            fill="#ffffff"
            textAnchor="middle"
          >
            {n}
          </text>
        </g>
      ))}

      {left.map((c) => (
        <Callout key={c.n} x={10} {...c} />
      ))}
      {right.map((c) => (
        <Callout key={c.n} x={586} {...c} />
      ))}
    </svg>
  );
}
