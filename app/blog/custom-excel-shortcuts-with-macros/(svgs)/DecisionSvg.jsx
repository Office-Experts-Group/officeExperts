// /app/blog/custom-excel-shortcuts-with-macros/(svgs)/DecisionSvg.jsx
//
// Decision flow: where should a macro live? Sits on a light panel.
// Colours (hard-coded): #046999 $accent, #e8f4fa $accent-light,
// #0d1b2a $text-primary, #4a5568 $text-secondary, #d4d6d9 $line-strong,
// #ffffff $white.

import React from "react";

function Arrow({ x1, y1, x2, y2 }) {
  const horizontal = y1 === y2;
  const head = horizontal
    ? `${x2},${y2} ${x2 - 9},${y2 - 6} ${x2 - 9},${y2 + 6}`
    : `${x2},${y2} ${x2 - 6},${y2 - 9} ${x2 + 6},${y2 - 9}`;
  return (
    <g>
      <line
        x1={x1}
        y1={y1}
        x2={horizontal ? x2 - 8 : x2}
        y2={horizontal ? y2 : y2 - 8}
        stroke="#046999"
        strokeWidth="2"
      />
      <polygon points={head} fill="#046999" />
    </g>
  );
}

function Question({ y, lines }) {
  return (
    <g>
      <rect
        x="40"
        y={y}
        width="280"
        height="90"
        rx="14"
        fill="#ffffff"
        stroke="#046999"
        strokeWidth="2"
      />
      {lines.map((line, i) => (
        <text
          key={line}
          x="180"
          y={y + 38 + i * 24}
          textAnchor="middle"
          fontSize="16"
          fontWeight="600"
          fill="#0d1b2a"
        >
          {line}
        </text>
      ))}
    </g>
  );
}

function Outcome({ x, y, solid, line1, line2 }) {
  return (
    <g>
      <rect
        x={x}
        y={y}
        width="260"
        height="96"
        rx="14"
        fill={solid ? "#046999" : "#e8f4fa"}
        stroke="#046999"
        strokeWidth="2"
      />
      <text
        x={x + 18}
        y={y + 30}
        fontSize="14"
        fontWeight="700"
        letterSpacing="1.5"
        fill={solid ? "#ffffff" : "#046999"}
      >
        STORE IT IN
      </text>
      <text
        x={x + 18}
        y={y + 56}
        fontSize="16"
        fontWeight="700"
        fill={solid ? "#ffffff" : "#0d1b2a"}
      >
        {line1}
      </text>
      <text
        x={x + 18}
        y={y + 76}
        fontSize="14"
        fill={solid ? "#ffffff" : "#4a5568"}
      >
        {line2}
      </text>
    </g>
  );
}

export default function DecisionSvg() {
  return (
    <svg
      viewBox="0 0 700 440"
      fontFamily="aptos, sans-serif"
      role="img"
      aria-labelledby="cxs-decision-title cxs-decision-desc"
    >
      <title id="cxs-decision-title">Where should your macro live?</title>
      <desc id="cxs-decision-desc">
        If you will use the macro in many workbooks, store it in the Personal
        Macro Workbook. If a colleague needs it too, store it in a macro-enabled
        .xlsm workbook. Otherwise any .xlsm workbook will do.
      </desc>

      <Question
        y={20}
        lines={["Will you use it in", "many different workbooks?"]}
      />
      <Arrow x1={320} y1={65} x2={398} y2={65} />
      <text
        x="359"
        y="55"
        textAnchor="middle"
        fontSize="14"
        fontWeight="700"
        fill="#046999"
      >
        Yes
      </text>
      <Outcome
        x={400}
        y={17}
        solid
        line1="Personal Macro Workbook"
        line2="Runs in every file you open"
      />

      <Arrow x1={180} y1={110} x2={180} y2={168} />
      <text x="194" y="146" fontSize="14" fontWeight="700" fill="#046999">
        No
      </text>

      <Question y={170} lines={["Does a colleague need", "the same macro?"]} />
      <Arrow x1={320} y1={215} x2={398} y2={215} />
      <text
        x="359"
        y="205"
        textAnchor="middle"
        fontSize="14"
        fontWeight="700"
        fill="#046999"
      >
        Yes
      </text>
      <Outcome
        x={400}
        y={167}
        line1="This workbook (.xlsm)"
        line2="Colleagues must allow macros"
      />

      <Arrow x1={180} y1={260} x2={180} y2={318} />
      <text x="194" y="296" fontSize="14" fontWeight="700" fill="#046999">
        No
      </text>
      <Outcome
        x={40}
        y={320}
        line1="Any workbook (.xlsm)"
        line2="Fine for a one-off task"
      />

      <rect
        x="400"
        y="320"
        width="260"
        height="96"
        rx="14"
        fill="none"
        stroke="#d4d6d9"
        strokeWidth="2"
        strokeDasharray="6 5"
      />
      <text x="418" y="348" fontSize="14" fontWeight="700" fill="#0d1b2a">
        Not sure?
      </text>
      <text x="418" y="370" fontSize="14" fill="#4a5568">
        Start with the Personal
      </text>
      <text x="418" y="390" fontSize="14" fill="#4a5568">
        Macro Workbook. Share it
      </text>
      <text x="418" y="408" fontSize="14" fill="#4a5568">
        later by copying it.
      </text>
    </svg>
  );
}
