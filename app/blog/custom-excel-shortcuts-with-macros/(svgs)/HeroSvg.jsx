// /app/blog/custom-excel-shortcuts-with-macros/(svgs)/HeroSvg.jsx
//
// Hero illustration: a spreadsheet, the keys pressed, and the macros they run.
// Sits directly on the dark hero (no panel). Colours are hard-coded:
//   #18232e $dark-surface, #1a2a3a $dark-mid, #111820 $dark-bg,
//   #6fc3e8 $accent-on-dark, #ffffff $white, #3a5169 / #8fa3b5 muted slate.

import React from "react";

const COLS = ["A", "B", "C", "D", "E"];
const COL_X = 52;
const COL_W = 66;
const ROW_Y = 84;
const ROW_H = 38;
const HIGHLIGHT_ROW = 2;

// Bar widths per row and column (data stand-ins).
const BARS = [
  [40, 28, 44, 24, 36],
  [34, 44, 26, 40, 30],
  [42, 36, 44, 38, 40],
  [28, 40, 32, 44, 26],
  [44, 30, 38, 28, 42],
  [32, 42, 28, 36, 44],
];

const RESULTS = [
  { title: "Highlight row", sub: "Ctrl+Shift+H", icon: "row" },
  { title: "Clear filters", sub: "Ctrl+Shift+C", icon: "filter" },
  { title: "Timestamp", sub: "Ctrl+Shift+T", icon: "clock" },
  { title: "Save backup", sub: "Ctrl+Shift+S", icon: "copy" },
];

function ResultIcon({ type }) {
  const common = {
    fill: "none",
    stroke: "#6fc3e8",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };
  if (type === "row") {
    return (
      <g {...common}>
        <rect x="1" y="2" width="22" height="5" rx="1.5" />
        <rect x="1" y="9.5" width="22" height="5" rx="1.5" fill="#6fc3e8" />
        <rect x="1" y="17" width="22" height="5" rx="1.5" />
      </g>
    );
  }
  if (type === "filter") {
    return <path {...common} d="M2 3h20l-8 9.5V21l-4-2v-6.5L2 3Z" />;
  }
  if (type === "clock") {
    return (
      <g {...common}>
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2.5" />
      </g>
    );
  }
  return (
    <g {...common}>
      <rect x="8" y="8" width="14" height="14" rx="2.5" />
      <path d="M16 8V4.5A2.5 2.5 0 0 0 13.5 2h-9A2.5 2.5 0 0 0 2 4.5v9A2.5 2.5 0 0 0 4.5 16H8" />
    </g>
  );
}

export default function HeroSvg({ flowClass = "", pulseClass = "" }) {
  return (
    <svg
      viewBox="0 0 600 430"
      fontFamily="aptos, sans-serif"
      role="img"
      aria-labelledby="cxs-hero-title cxs-hero-desc"
    >
      <title id="cxs-hero-title">One keystroke runs a macro</title>
      <desc id="cxs-hero-desc">
        A spreadsheet with one row highlighted, the Control, Shift and H keys,
        and four macro results: highlight row, clear filters, timestamp and save
        backup.
      </desc>

      {/* Spreadsheet window */}
      <rect
        x="16"
        y="16"
        width="372"
        height="304"
        rx="16"
        fill="#18232e"
        stroke="#ffffff"
        strokeOpacity="0.14"
      />
      <path
        d="M16 56V32a16 16 0 0 1 16-16h340a16 16 0 0 1 16 16v24Z"
        fill="#1a2a3a"
      />
      <circle cx="40" cy="36" r="5" fill="#3a5169" />
      <circle cx="58" cy="36" r="5" fill="#3a5169" />
      <circle cx="76" cy="36" r="5" fill="#3a5169" />
      <rect x="100" y="26" width="272" height="20" rx="6" fill="#111820" />
      <rect x="110" y="33" width="64" height="6" rx="3" fill="#3a5169" />

      {/* Column and row headers */}
      <rect x="16" y="56" width="372" height="28" fill="#1a2a3a" />
      <rect x="16" y="84" width="36" height="228" fill="#1a2a3a" />
      {COLS.map((col, i) => (
        <text
          key={col}
          x={COL_X + COL_W * i + COL_W / 2}
          y="75"
          textAnchor="middle"
          fontSize="14"
          fontWeight="600"
          fill="#8fa3b5"
        >
          {col}
        </text>
      ))}

      {/* Highlighted row sits behind the grid lines */}
      <rect
        x={COL_X}
        y={ROW_Y + ROW_H * HIGHLIGHT_ROW}
        width={COL_W * 5}
        height={ROW_H}
        fill="#6fc3e8"
        fillOpacity="0.2"
      />

      {BARS.map((row, r) => (
        <g key={r}>
          <text
            x="34"
            y={ROW_Y + ROW_H * r + 24}
            textAnchor="middle"
            fontSize="14"
            fill="#8fa3b5"
          >
            {r + 1}
          </text>
          <line
            x1="16"
            x2="388"
            y1={ROW_Y + ROW_H * (r + 1)}
            y2={ROW_Y + ROW_H * (r + 1)}
            stroke="#ffffff"
            strokeOpacity="0.08"
          />
          {row.map((w, c) => (
            <rect
              key={c}
              x={COL_X + COL_W * c + 10}
              y={ROW_Y + ROW_H * r + 15}
              width={w}
              height="8"
              rx="4"
              fill={r === HIGHLIGHT_ROW ? "#cfeaf7" : "#3a5169"}
            />
          ))}
        </g>
      ))}
      {COLS.slice(0, 4).map((col, c) => (
        <line
          key={col}
          x1={COL_X + COL_W * (c + 1)}
          x2={COL_X + COL_W * (c + 1)}
          y1="56"
          y2="312"
          stroke="#ffffff"
          strokeOpacity="0.08"
        />
      ))}
      <rect
        x={COL_X + COL_W}
        y={ROW_Y + ROW_H * HIGHLIGHT_ROW}
        width={COL_W}
        height={ROW_H}
        fill="none"
        stroke="#6fc3e8"
        strokeWidth="2"
      />

      {/* Keys */}
      {[
        { x: 16, w: 76, label: "Ctrl" },
        { x: 116, w: 92, label: "Shift" },
        { x: 232, w: 56, label: "H" },
      ].map((k) => (
        <g key={k.label}>
          <rect
            x={k.x}
            y="346"
            width={k.w}
            height="56"
            rx="12"
            fill="#3a5169"
          />
          <rect
            x={k.x}
            y="340"
            width={k.w}
            height="56"
            rx="12"
            fill="#1a2a3a"
            stroke="#6fc3e8"
            strokeOpacity="0.6"
            strokeWidth="1.5"
          />
          <text
            x={k.x + k.w / 2}
            y="375"
            textAnchor="middle"
            fontSize="18"
            fontWeight="700"
            fill="#ffffff"
          >
            {k.label}
          </text>
        </g>
      ))}
      <text x="104" y="376" textAnchor="middle" fontSize="20" fill="#8fa3b5">
        +
      </text>
      <text x="220" y="376" textAnchor="middle" fontSize="20" fill="#8fa3b5">
        +
      </text>

      {/* Flow from the keys to the results */}
      <path
        className={flowClass}
        d="M296 368H398V58"
        fill="none"
        stroke="#6fc3e8"
        strokeWidth="2"
        strokeDasharray="6 8"
        strokeLinecap="round"
      />
      <circle className={pulseClass} cx="296" cy="368" r="5" fill="#6fc3e8" />

      {/* Results */}
      {RESULTS.map((item, i) => {
        const y = 16 + i * 100;
        return (
          <g key={item.title}>
            <path
              className={flowClass}
              d={`M398 ${y + 42}H408`}
              stroke="#6fc3e8"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <rect
              x="408"
              y={y}
              width="184"
              height="84"
              rx="14"
              fill="#18232e"
              stroke="#6fc3e8"
              strokeOpacity="0.35"
            />
            <g transform={`translate(424 ${y + 30})`}>
              <ResultIcon type={item.icon} />
            </g>
            <text
              x="460"
              y={y + 36}
              fontSize="16"
              fontWeight="700"
              fill="#ffffff"
            >
              {item.title}
            </text>
            <text x="460" y={y + 58} fontSize="14" fill="#8fa3b5">
              {item.sub}
            </text>
          </g>
        );
      })}
    </svg>
  );
}
