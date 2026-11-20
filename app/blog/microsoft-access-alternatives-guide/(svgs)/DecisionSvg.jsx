// /app/blog/microsoft-access-alternatives-guide/(svgs)/DecisionSvg.jsx
// Informative diagram: a yes/no flow from "what is wrong?" to the recommended starting point.
// Hex values match tokens: #0d1b2a $text-primary, #4a5568 $text-secondary, #046999 $accent,
// #e8f4fa $accent-light, rgba accent border approximated as #9cc6da, #ffffff white.

const questions = [
  { y: 16, lines: ["Is it slow, unstable or", "throwing errors?"] },
  { y: 140, lines: ["Need more users, more data", "or access from anywhere?"] },
  {
    y: 264,
    lines: ["Need native mobile apps or", "a browser-only front end?"],
  },
];

const outcomes = [
  {
    x: 10,
    y: 4,
    label: "FIX FIRST",
    lines: ["Optimise and repair,", "then reassess"],
  },
  {
    x: 560,
    y: 128,
    label: "STAY PUT",
    lines: ["Keep Access as it is,", "with regular check-ups"],
  },
  {
    x: 560,
    y: 252,
    label: "ADD ON TOP",
    lines: ["Power Apps or a web", "front end, same data"],
  },
];

export default function DecisionSvg() {
  return (
    <svg
      viewBox="0 0 760 520"
      role="img"
      aria-labelledby="aag-decision-title aag-decision-desc"
      xmlns="http://www.w3.org/2000/svg"
      fontFamily="aptos"
    >
      <title id="aag-decision-title">
        Decision flow for choosing an Access alternative
      </title>
      <desc id="aag-decision-desc">
        Start by asking whether Access is slow, unstable or throwing errors. If
        yes, optimise and repair first, then reassess. If no, ask whether you
        need more users, more data or access from anywhere. If no, keep Access
        as it is. If yes, ask whether you need native mobile apps or a
        browser-only front end. If yes, add Power Apps or a web front end on the
        same data. If no, the recommended start is to keep the Access front-end
        and move the data to SQL Server or Azure SQL.
      </desc>

      {/* Questions */}
      {questions.map((q) => (
        <g key={q.y}>
          <rect
            x="240"
            y={q.y}
            width="280"
            height="72"
            rx="12"
            fill="#ffffff"
            stroke="#046999"
            strokeWidth="1.6"
          />
          <text
            x="380"
            y={q.y + 31}
            fontSize="15"
            fill="#0d1b2a"
            textAnchor="middle"
          >
            {q.lines[0]}
          </text>
          <text
            x="380"
            y={q.y + 52}
            fontSize="15"
            fill="#0d1b2a"
            textAnchor="middle"
          >
            {q.lines[1]}
          </text>
        </g>
      ))}

      {/* Side outcomes */}
      {outcomes.map((o) => (
        <g key={o.label}>
          <rect
            x={o.x}
            y={o.y}
            width="190"
            height="96"
            rx="12"
            fill="#e8f4fa"
            stroke="#9cc6da"
          />
          <text
            x={o.x + 16}
            y={o.y + 28}
            fontSize="14"
            fontWeight="700"
            fill="#046999"
          >
            {o.label}
          </text>
          <text x={o.x + 16} y={o.y + 54} fontSize="15" fill="#0d1b2a">
            {o.lines[0]}
          </text>
          <text x={o.x + 16} y={o.y + 74} fontSize="15" fill="#0d1b2a">
            {o.lines[1]}
          </text>
        </g>
      ))}

      {/* Recommended outcome */}
      <rect x="210" y="380" width="340" height="130" rx="14" fill="#046999" />
      <text
        x="232"
        y="410"
        fontSize="14"
        fontWeight="700"
        fill="#ffffff"
        opacity="0.85"
      >
        RECOMMENDED START
      </text>
      <text x="232" y="438" fontSize="16" fontWeight="700" fill="#ffffff">
        Keep the Access front-end and
      </text>
      <text x="232" y="460" fontSize="16" fontWeight="700" fill="#ffffff">
        move the data to SQL Server
      </text>
      <text x="232" y="482" fontSize="16" fontWeight="700" fill="#ffffff">
        or Azure SQL
      </text>

      {/* Connectors */}
      <g
        fill="none"
        stroke="#046999"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M240 52H206M212 46l-7 6 7 6" />
        <path d="M380 88V134M374 128l6 7 6-7" />
        <path d="M520 176H554M548 170l7 6-7 6" />
        <path d="M380 212V258M374 252l6 7 6-7" />
        <path d="M520 300H554M548 294l7 6-7 6" />
        <path d="M380 336V374M374 368l6 7 6-7" />
      </g>

      {/* Yes / No labels */}
      <g fontSize="14" fontWeight="700" fill="#4a5568">
        <text x="223" y="42" textAnchor="middle">
          Yes
        </text>
        <text x="394" y="116">
          No
        </text>
        <text x="537" y="166" textAnchor="middle">
          No
        </text>
        <text x="394" y="240">
          Yes
        </text>
        <text x="537" y="290" textAnchor="middle">
          Yes
        </text>
        <text x="394" y="364">
          No
        </text>
      </g>
    </svg>
  );
}
