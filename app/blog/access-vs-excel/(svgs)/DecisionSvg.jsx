// /app/blog/access-vs-excel/(svgs)/DecisionSvg.jsx
// Decision flow: four yes/no questions leading to Access, Excel or both.
// Hex values map to tokens: #046999 $accent, #e8f4fa $accent-light, #0d1b2a $text-primary,
// #4a5568 $text-secondary, #111820 $dark-bg, #6fc3e8 $accent-on-dark, #ffffff $white.

const QUESTIONS = [
  {
    y: 10,
    lines: ["Do several people need to", "edit records at the same time?"],
    out: ["Use Access", "Built for shared, live data."],
    access: true,
  },
  {
    y: 134,
    lines: ["Does your data link across", "lists, like customers and orders?"],
    out: ["Use Access", "Relationships keep data tidy."],
    access: true,
  },
  {
    y: 258,
    lines: ["Is most of the work calculations,", "charts or what-if analysis?"],
    out: ["Use Excel", "Built for analysis and charts."],
    access: false,
  },
  {
    y: 382,
    lines: ["Will it grow beyond a few", "hundred thousand rows?"],
    out: ["Use Access", "It copes better with growth."],
    access: true,
  },
];

export default function DecisionSvg({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 640 750"
      fontFamily="aptos"
      role="img"
      aria-labelledby="avx-decision-title avx-decision-desc"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title id="avx-decision-title">
        Decision flow: Access, Excel or both
      </title>
      <desc id="avx-decision-desc">
        Ask four questions in order. If several people edit at once, choose
        Access. If your data links across lists, choose Access. If the work is
        mostly calculations and charts, choose Excel. If the data will grow past
        a few hundred thousand rows, choose Access, otherwise Excel. If you need
        to store and analyse, use both.
      </desc>

      {QUESTIONS.map((q, i) => (
        <g key={q.y}>
          <rect
            x="10"
            y={q.y}
            width="320"
            height="84"
            rx="14"
            fill="#e8f4fa"
            stroke="#046999"
            strokeOpacity="0.3"
          />
          <text x="26" y={q.y + 36} fontSize="15" fill="#0d1b2a">
            {q.lines[0]}
          </text>
          <text x="26" y={q.y + 60} fontSize="15" fill="#0d1b2a">
            {q.lines[1]}
          </text>

          <path
            d={`M334 ${q.y + 42} H366`}
            stroke="#046999"
            strokeWidth="2.4"
            strokeLinecap="round"
          />
          <path
            d={`M364 ${q.y + 35} L378 ${q.y + 42} L364 ${q.y + 49} Z`}
            fill="#046999"
          />
          <text
            x="356"
            y={q.y + 30}
            fontSize="14"
            fontWeight="700"
            fill="#046999"
            textAnchor="middle"
          >
            Yes
          </text>

          <rect
            x="382"
            y={q.y}
            width="248"
            height="84"
            rx="14"
            fill={q.access ? "#046999" : "#e8f4fa"}
            stroke="#046999"
            strokeOpacity={q.access ? 1 : 0.3}
          />
          <text
            x="400"
            y={q.y + 38}
            fontSize="17"
            fontWeight="700"
            fill={q.access ? "#ffffff" : "#046999"}
          >
            {q.out[0]}
          </text>
          <text
            x="400"
            y={q.y + 62}
            fontSize="14"
            fill={q.access ? "#ffffff" : "#0d1b2a"}
          >
            {q.out[1]}
          </text>

          {i < QUESTIONS.length - 1 && (
            <g>
              <path
                d={`M170 ${q.y + 86} V${q.y + 108}`}
                stroke="#4a5568"
                strokeWidth="2.4"
                strokeLinecap="round"
              />
              <path
                d={`M163 ${q.y + 106} L170 ${q.y + 120} L177 ${q.y + 106} Z`}
                fill="#4a5568"
              />
              <text
                x="188"
                y={q.y + 110}
                fontSize="14"
                fontWeight="700"
                fill="#4a5568"
              >
                No
              </text>
            </g>
          )}
        </g>
      ))}

      {/* final no: Excel */}
      <path
        d="M170 468 V498"
        stroke="#4a5568"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <path d="M163 496 L170 508 L177 496 Z" fill="#4a5568" />
      <text x="188" y="490" fontSize="14" fontWeight="700" fill="#4a5568">
        No
      </text>
      <rect
        x="10"
        y="512"
        width="320"
        height="84"
        rx="14"
        fill="#e8f4fa"
        stroke="#046999"
        strokeOpacity="0.3"
      />
      <text x="28" y="550" fontSize="17" fontWeight="700" fill="#046999">
        Use Excel
      </text>
      <text x="28" y="574" fontSize="14" fill="#0d1b2a">
        Simple and quick for small lists.
      </text>

      {/* both */}
      <rect x="10" y="636" width="620" height="100" rx="14" fill="#111820" />
      <text x="30" y="676" fontSize="17" fontWeight="700" fill="#ffffff">
        Storing data and analysing it? Use both.
      </text>
      <text x="30" y="702" fontSize="14" fill="#ffffff" fillOpacity="0.8">
        Access keeps the records safe and shared. Excel reports on them.
      </text>
      <g
        stroke="#6fc3e8"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <ellipse cx="548" cy="670" rx="20" ry="8" />
        <path d="M528 670 V692 C528 697 537 700 548 700 C559 700 568 697 568 692 V670" />
        <path d="M578 686 H596" />
        <path d="M590 679 L598 686 L590 693" />
        <rect x="606" y="672" width="5" height="18" rx="1.5" />
        <rect x="614" y="664" width="5" height="26" rx="1.5" />
      </g>
    </svg>
  );
}
