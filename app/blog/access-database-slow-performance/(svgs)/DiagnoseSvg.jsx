// /app/blog/access-database-slow-performance/(svgs)/DiagnoseSvg.jsx
// Symptom to likely-cause map. Solid line = check first, dashed = then check.
// Hex to token: #046999 $accent, #e8f4fa $accent-light, #0d1b2a $text-primary,
// #4a5568 $text-secondary, #f7f8f9 $light-bg, #bcd9e8 (accent tint border).
import React from "react";

const SYMPTOMS = [
  {
    line1: "Forms take 30+ seconds to open",
    line2: "Check file location, then indexes",
    links: [0, 1],
  },
  {
    line1: "Queries were fast, now slow",
    line2: "Check queries, then file size",
    links: [2, 3],
  },
  {
    line1: "Slower the longer Access is open",
    line2: "Check open forms",
    links: [5],
  },
  {
    line1: "Random freezing, patchy slowness",
    line2: "Check antivirus, then network",
    links: [6, 0],
  },
  {
    line1: "File is huge (1 GB or more)",
    line2: "Check bloat, then long text fields",
    links: [3, 4],
  },
];

const KILLERS = [
  "Network share",
  "Indexes",
  "Queries and VBA",
  "File bloat",
  "Memo and attachments",
  "Open forms",
  "Antivirus and sync",
];

const leftY = (i) => 20 + i * 88;
const leftCy = (i) => leftY(i) + 34;
const rightY = (j) => 20 + j * 60;
const rightCy = (j) => rightY(j) + 23;

export default function DiagnoseSvg() {
  return (
    <svg
      viewBox="0 0 760 480"
      role="img"
      aria-labelledby="asp-diagnose-title asp-diagnose-desc"
      fontFamily="aptos, sans-serif"
    >
      <title id="asp-diagnose-title">
        Symptoms mapped to the seven performance killers
      </title>
      <desc id="asp-diagnose-desc">
        Five common symptoms on the left connect to the performance killer to
        check first and the one to check next. Forms that are slow to open point
        to the network share, then indexes. Slow queries point to query design,
        then file bloat. Slowdown over a session points to open forms. Random
        freezing points to antivirus and sync, then the network. A huge file
        points to bloat, then memo and attachment fields.
      </desc>

      {SYMPTOMS.map((s, i) =>
        s.links.map((j, k) => (
          <path
            key={`${i}-${j}`}
            d={`M360 ${leftCy(i)} C430 ${leftCy(i)} 430 ${rightCy(j)} 500 ${rightCy(j)}`}
            fill="none"
            stroke="#046999"
            strokeWidth={k === 0 ? 3 : 2}
            strokeDasharray={k === 0 ? undefined : "6 5"}
            strokeOpacity={k === 0 ? 1 : 0.6}
          />
        )),
      )}

      {SYMPTOMS.map((s, i) => (
        <g key={s.line1}>
          <rect
            x="10"
            y={leftY(i)}
            width="350"
            height="68"
            rx="12"
            fill="#f7f8f9"
            stroke="#d4d6d9"
            strokeWidth="1.5"
          />
          <text
            x="26"
            y={leftY(i) + 28}
            fontSize="15"
            fontWeight="700"
            fill="#0d1b2a"
          >
            {s.line1}
          </text>
          <text x="26" y={leftY(i) + 51} fontSize="14" fill="#4a5568">
            {s.line2}
          </text>
        </g>
      ))}

      {KILLERS.map((label, j) => (
        <g key={label}>
          <rect
            x="500"
            y={rightY(j)}
            width="250"
            height="46"
            rx="23"
            fill="#e8f4fa"
            stroke="#bcd9e8"
            strokeWidth="1.5"
          />
          <circle cx="525" cy={rightCy(j)} r="14" fill="#046999" />
          <text
            x="525"
            y={rightCy(j) + 5}
            textAnchor="middle"
            fontSize="14"
            fontWeight="700"
            fill="#ffffff"
          >
            {j + 1}
          </text>
          <text x="550" y={rightCy(j) + 5} fontSize="14" fill="#0d1b2a">
            {label}
          </text>
        </g>
      ))}

      <line
        x1="10"
        y1="462"
        x2="46"
        y2="462"
        stroke="#046999"
        strokeWidth="3"
      />
      <text x="56" y="467" fontSize="14" fill="#4a5568">
        Check first
      </text>
      <line
        x1="170"
        y1="462"
        x2="206"
        y2="462"
        stroke="#046999"
        strokeWidth="2"
        strokeDasharray="6 5"
        strokeOpacity="0.6"
      />
      <text x="216" y="467" fontSize="14" fill="#4a5568">
        Then check
      </text>
    </svg>
  );
}
