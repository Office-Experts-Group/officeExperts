// /app/blog/export-to-pdf-in-power-apps/(svgs)/DecisionSvg.jsx
// Informative diagram: which PDF route to choose, as yes/no questions.
// Hex values map to tokens: #046999 $accent, #e8f4fa $accent-light, #0d1b2a $text-primary,
// #4a5568 $text-secondary, #e3e8ec $line, #ffffff $white.
import React from "react";

function Question({ x, y, w, lines }) {
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={w}
        height="68"
        rx="12"
        fill="#ffffff"
        stroke="#046999"
        strokeOpacity="0.5"
        strokeWidth="1.5"
      />
      <text
        fontSize="15"
        fontWeight="700"
        fill="#0d1b2a"
        textAnchor="middle"
        x={x + w / 2}
      >
        <tspan x={x + w / 2} y={y + 28}>
          {lines[0]}
        </tspan>
        <tspan x={x + w / 2} y={y + 50}>
          {lines[1]}
        </tspan>
      </text>
    </g>
  );
}

function Pill({ cx, cy, label }) {
  return (
    <g>
      <rect
        x={cx - 24}
        y={cy - 13}
        width="48"
        height="26"
        rx="13"
        fill="#ffffff"
        stroke="#046999"
        strokeOpacity="0.5"
      />
      <text
        x={cx}
        y={cy + 5}
        fontSize="14"
        fontWeight="700"
        fill="#046999"
        textAnchor="middle"
      >
        {label}
      </text>
    </g>
  );
}

function Outcome({ x, tag, title, sub, solid = false }) {
  const fg = solid ? "#ffffff" : "#0d1b2a";
  const mute = solid ? "#e8f4fa" : "#4a5568";
  const tagColor = solid ? "#e8f4fa" : "#046999";
  return (
    <g>
      <rect
        x={x}
        y="300"
        width="175"
        height="96"
        rx="12"
        fill={solid ? "#046999" : "#e8f4fa"}
        stroke="#046999"
        strokeOpacity={solid ? 1 : 0.4}
        strokeWidth="1.5"
      />
      <text x={x + 14} y="330" fontSize="14" fontWeight="700" fill={tagColor}>
        {tag}
      </text>
      <text x={x + 14} y="356" fontSize="15" fontWeight="700" fill={fg}>
        {title}
      </text>
      <text x={x + 14} y="376" fontSize="14" fill={mute}>
        {sub}
      </text>
    </g>
  );
}

export default function DecisionSvg() {
  const line = {
    fill: "none",
    stroke: "#046999",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };
  return (
    <svg
      viewBox="0 0 780 412"
      xmlns="http://www.w3.org/2000/svg"
      fontFamily="aptos"
      role="img"
      aria-labelledby="pdf-decision-title pdf-decision-desc"
      style={{ width: "100%", height: "auto", display: "block" }}
    >
      <title id="pdf-decision-title">Which PDF method should you use?</title>
      <desc id="pdf-decision-desc">
        A decision tree. If the PDF is built from one saved record and you do
        not need page headers, footers or strict branding, use the HTML to PDF
        flow in this guide. If you do need them, use a Word template flow. If
        the PDF is not built from one record, use the Power Apps PDF function
        when a copy of the screen is enough, otherwise a paginated report.
      </desc>

      {/* connectors */}
      <path {...line} d="M390 84 V104 H195 V150" />
      <path {...line} d="M390 104 H585 V150" />
      <path {...line} d="M195 218 V250 H97.5 V300" />
      <path {...line} d="M195 250 H292.5 V300" />
      <path {...line} d="M585 218 V250 H487.5 V300" />
      <path {...line} d="M585 250 H682.5 V300" />

      <Question
        x={260}
        y={16}
        w={260}
        lines={["Is the PDF built from", "one saved record?"]}
      />
      <Question
        x={65}
        y={150}
        w={260}
        lines={["Need page headers, footers", "or strict branding?"]}
      />
      <Question
        x={455}
        y={150}
        w={260}
        lines={["Is a copy of the screen", "enough for your users?"]}
      />

      <Pill cx={195} cy={127} label="Yes" />
      <Pill cx={585} cy={127} label="No" />
      <Pill cx={97.5} cy={275} label="No" />
      <Pill cx={292.5} cy={275} label="Yes" />
      <Pill cx={487.5} cy={275} label="Yes" />
      <Pill cx={682.5} cy={275} label="No" />

      <Outcome
        x={10}
        tag="Recommended"
        title="HTML to PDF flow"
        sub="This guide’s method"
        solid
      />
      <Outcome
        x={205}
        tag="More control"
        title="Word template"
        sub="Headers and footers"
      />
      <Outcome
        x={400}
        tag="Quick capture"
        title="PDF function"
        sub="Screen as a PDF"
      />
      <Outcome
        x={595}
        tag="Heavy reporting"
        title="Paginated report"
        sub="Long, data-heavy"
      />
    </svg>
  );
}
