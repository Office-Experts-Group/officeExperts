// /app/blog/power-bi-for-financial-services/(svgs)/DecisionSvg.jsx
// Decision flow: three yes/no questions leading to the recommended option.
// Colours (hard-coded): #046999 $accent, #e8f4fa $accent-light, #0d1b2a $text-primary,
// #4a5568 $text-secondary, #ffffff $white, #b9d6e5 tint of $accent-border.

import React from "react";

const ACCENT = "#046999";
const LIGHT = "#e8f4fa";
const INK = "#0d1b2a";
const SOFT = "#4a5568";
const EDGE = "#b9d6e5";

const Question = ({ y, lines }) => (
  <g>
    <rect
      x="20"
      y={y}
      width="310"
      height="70"
      rx="12"
      fill="#ffffff"
      stroke={ACCENT}
      strokeOpacity="0.55"
    />
    <text
      x="175"
      y={y + 29}
      fontSize="15"
      fontWeight="700"
      fill={INK}
      textAnchor="middle"
    >
      {lines[0]}
    </text>
    <text
      x="175"
      y={y + 51}
      fontSize="15"
      fontWeight="700"
      fill={INK}
      textAnchor="middle"
    >
      {lines[1]}
    </text>
  </g>
);

export default function DecisionSvg() {
  return (
    <svg
      viewBox="0 0 640 510"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-labelledby="pbifs-decision-title pbifs-decision-desc"
      fontFamily="aptos"
      style={{ width: "100%", height: "auto", display: "block" }}
    >
      <title id="pbifs-decision-title">
        Decision guide: is Power BI the right fit for your reporting?
      </title>
      <desc id="pbifs-decision-desc">
        Question one asks whether several systems or spreadsheets feed the same
        monthly reports. If no, a tidy spreadsheet or one simple report may be
        enough. If yes, question two asks whether different roles need their own
        view of the same data. If no, the same outcome applies. If yes, question
        three asks whether your main need is a fixed-format statutory filing. If
        yes, use a dedicated tool for filings and Power BI for management views.
        If no, Power BI is a good fit, so start with one high-impact dashboard.
      </desc>

      <defs>
        <marker
          id="pbifs-decision-arrow"
          viewBox="0 0 10 10"
          refX="8"
          refY="5"
          markerWidth="7"
          markerHeight="7"
          orient="auto"
        >
          <path d="M0 0L10 5L0 10z" fill={ACCENT} />
        </marker>
      </defs>

      {/* Questions */}
      <Question
        y={30}
        lines={[
          "Do several systems or spreadsheets",
          "feed the same monthly reports?",
        ]}
      />
      <Question
        y={150}
        lines={["Do different roles need their own", "view of the same data?"]}
      />
      <Question
        y={270}
        lines={["Is your main need a fixed-format", "statutory filing?"]}
      />

      {/* Connectors */}
      <g
        fill="none"
        stroke={ACCENT}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        markerEnd="url(#pbifs-decision-arrow)"
      >
        <path d="M175 100V146" />
        <path d="M175 220V266" />
        <path d="M175 340V398" />
        <path d="M330 65H360V108H386" />
        <path d="M330 185H360V140H386" />
        <path d="M330 305H386" />
      </g>

      {/* Yes / no labels */}
      <g fontSize="14" fontWeight="700" fill={ACCENT}>
        <text x="187" y="128">
          Yes
        </text>
        <text x="187" y="248">
          Yes
        </text>
        <text x="187" y="373">
          No
        </text>
        <text x="338" y="56">
          No
        </text>
        <text x="338" y="177">
          No
        </text>
        <text x="342" y="296">
          Yes
        </text>
      </g>

      {/* Outcome: not yet */}
      <rect
        x="390"
        y="75"
        width="240"
        height="92"
        rx="12"
        fill={LIGHT}
        stroke={EDGE}
      />
      <text
        x="406"
        y="101"
        fontSize="14"
        fontWeight="700"
        fill={ACCENT}
        letterSpacing="1.2"
      >
        NOT YET
      </text>
      <text x="406" y="125" fontSize="15" fill={INK}>
        A tidy spreadsheet or one
      </text>
      <text x="406" y="145" fontSize="15" fill={INK}>
        simple report may be enough
      </text>

      {/* Outcome: pair them up */}
      <rect
        x="390"
        y="252"
        width="240"
        height="110"
        rx="12"
        fill={LIGHT}
        stroke={EDGE}
      />
      <text
        x="406"
        y="278"
        fontSize="14"
        fontWeight="700"
        fill={ACCENT}
        letterSpacing="1.2"
      >
        PAIR THEM UP
      </text>
      <text x="406" y="302" fontSize="15" fill={INK}>
        Use a dedicated tool for
      </text>
      <text x="406" y="322" fontSize="15" fill={INK}>
        filings and Power BI for
      </text>
      <text x="406" y="342" fontSize="15" fill={INK}>
        management views
      </text>

      {/* Outcome: recommended */}
      <rect x="20" y="402" width="310" height="92" rx="12" fill={ACCENT} />
      <text
        x="40"
        y="432"
        fontSize="14"
        fontWeight="700"
        fill="#ffffff"
        letterSpacing="1.2"
      >
        GOOD FIT
      </text>
      <text x="40" y="456" fontSize="16" fontWeight="700" fill="#ffffff">
        Start with one high-impact
      </text>
      <text x="40" y="477" fontSize="16" fontWeight="700" fill="#ffffff">
        dashboard
      </text>

      <text x="406" y="400" fontSize="14" fill={SOFT}>
        Either answer can change as
      </text>
      <text x="406" y="420" fontSize="14" fill={SOFT}>
        your reporting grows.
      </text>
    </svg>
  );
}
