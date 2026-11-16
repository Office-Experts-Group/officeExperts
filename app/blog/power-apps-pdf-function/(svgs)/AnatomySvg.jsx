// /app/blog/power-apps-pdf-function/(svgs)/AnatomySvg.jsx
// Annotated artefact: a screen designed to become one A4 PDF page.
// Hex values and the tokens they match:
//   #046999 $accent          #e8f4fa $accent-light     #0d1b2a $text-primary
//   #4a5568 $text-secondary  #ffffff $white            #f7f8f9 $light-bg
//   #e3e8ec $line            #d4d6d9 $line-strong      #9a9da1 $text-muted
import React from "react";

const LEFT = [
  {
    n: 1,
    cy: 74,
    title: "Header container",
    lines: ["Logo, title and date", "stay together."],
  },
  {
    n: 3,
    cy: 213,
    title: "One vertical gallery",
    lines: ["Nested galleries are", "not supported."],
  },
  {
    n: 5,
    cy: 330,
    title: "Mind the margins",
    lines: ["Default is 0.5 in a side.", "Change it with Margin."],
  },
];

const RIGHT = [
  {
    n: 2,
    cy: 126,
    title: "Summary tiles",
    lines: ["Fixed size, so nothing", "is cut off."],
  },
  {
    n: 4,
    cy: 293,
    title: "Text, not charts",
    lines: ["Charts and maps are", "not supported."],
  },
];

const Chip = ({ cx, cy, n }) => (
  <g>
    <circle cx={cx} cy={cy} r="12" fill="#046999" />
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
);

const Callout = ({ side, n, cy, title, lines }) => {
  const x = side === "left" ? 10 : 510;
  const pinX = side === "left" ? 270 : 490;
  const edge = side === "left" ? x + 240 : x;
  const leaderEnd = side === "left" ? pinX - 12 : pinX + 12;
  return (
    <g>
      <line
        x1={edge}
        y1={cy}
        x2={leaderEnd}
        y2={cy}
        stroke="#046999"
        strokeWidth="1.5"
      />
      <rect
        x={x}
        y={cy - 46}
        width="240"
        height="92"
        rx="14"
        fill="#ffffff"
        stroke="#046999"
        strokeOpacity="0.28"
      />
      <Chip cx={x + 28} cy={cy - 20} n={n} />
      <text
        x={x + 52}
        y={cy - 15}
        fontSize="16"
        fontWeight="700"
        fill="#0d1b2a"
      >
        {title}
      </text>
      <text x={x + 20} y={cy + 12} fontSize="14" fill="#4a5568">
        {lines[0]}
      </text>
      <text x={x + 20} y={cy + 32} fontSize="14" fill="#4a5568">
        {lines[1]}
      </text>
    </g>
  );
};

const AnatomySvg = () => (
  <svg
    viewBox="0 0 760 410"
    role="img"
    aria-labelledby="papdf-anatomy-title papdf-anatomy-desc"
    xmlns="http://www.w3.org/2000/svg"
    fontFamily="aptos"
  >
    <title id="papdf-anatomy-title">
      Anatomy of a screen designed for PDF output
    </title>
    <desc id="papdf-anatomy-desc">
      An A4 portrait page with a header container, two summary tiles, a vertical
      gallery of records and a totals strip, all inside a dashed margin line.
      Five numbered notes explain the header, the summary tiles, the single
      vertical gallery, using text instead of charts, and the page margins.
    </desc>

    {/* the page */}
    <rect
      x="270"
      y="40"
      width="220"
      height="311"
      rx="8"
      fill="#ffffff"
      stroke="#d4d6d9"
      strokeWidth="1.5"
    />
    <rect
      x="282"
      y="52"
      width="196"
      height="287"
      fill="none"
      stroke="#046999"
      strokeWidth="1.2"
      strokeDasharray="5 4"
    />

    {/* header */}
    <rect x="286" y="56" width="188" height="40" rx="6" fill="#046999" />
    <circle cx="306" cy="76" r="10" fill="#ffffff" opacity="0.9" />
    <rect x="324" y="68" width="96" height="8" rx="4" fill="#ffffff" />
    <rect
      x="324"
      y="82"
      width="62"
      height="6"
      rx="3"
      fill="#ffffff"
      opacity="0.55"
    />

    {/* tiles */}
    <rect x="286" y="106" width="92" height="40" rx="6" fill="#e8f4fa" />
    <rect
      x="294"
      y="114"
      width="34"
      height="5"
      rx="2.5"
      fill="#046999"
      opacity="0.55"
    />
    <rect x="294" y="127" width="50" height="9" rx="4.5" fill="#0d1b2a" />
    <rect x="382" y="106" width="92" height="40" rx="6" fill="#e8f4fa" />
    <rect
      x="390"
      y="114"
      width="40"
      height="5"
      rx="2.5"
      fill="#046999"
      opacity="0.55"
    />
    <rect x="390" y="127" width="56" height="9" rx="4.5" fill="#0d1b2a" />

    {/* gallery */}
    {[0, 1, 2, 3, 4].map((i) => {
      const y = 158 + i * 22;
      return (
        <g key={i}>
          <rect
            x="286"
            y={y}
            width="188"
            height="20"
            fill={i % 2 ? "#f7f8f9" : "#ffffff"}
            stroke="#e3e8ec"
          />
          <circle cx="297" cy={y + 10} r="4" fill="#046999" opacity="0.7" />
          <rect
            x="308"
            y={y + 7}
            width={70 - i * 5}
            height="6"
            rx="3"
            fill="#4a5568"
            opacity="0.7"
          />
          <rect
            x="432"
            y={y + 7}
            width="34"
            height="6"
            rx="3"
            fill="#4a5568"
            opacity="0.4"
          />
        </g>
      );
    })}

    {/* totals */}
    <rect x="286" y="278" width="188" height="30" rx="6" fill="#e8f4fa" />
    <rect
      x="296"
      y="290"
      width="48"
      height="6"
      rx="3"
      fill="#046999"
      opacity="0.6"
    />
    <rect x="410" y="287" width="56" height="12" rx="6" fill="#0d1b2a" />

    {/* sign-off */}
    <line x1="286" y1="326" x2="352" y2="326" stroke="#9a9da1" />
    <line x1="412" y1="326" x2="474" y2="326" stroke="#9a9da1" />

    {/* callouts */}
    {LEFT.map((c) => (
      <Callout key={c.n} side="left" {...c} />
    ))}
    {RIGHT.map((c) => (
      <Callout key={c.n} side="right" {...c} />
    ))}

    {/* pins on the page */}
    <Chip cx={270} cy={74} n={1} />
    <Chip cx={490} cy={126} n={2} />
    <Chip cx={270} cy={213} n={3} />
    <Chip cx={490} cy={293} n={4} />
    <Chip cx={270} cy={330} n={5} />
  </svg>
);

export default AnatomySvg;
