// /app/blog/20-advanced-excel-shortcuts/(svgs)/PickShortcutSvg.jsx
// Decision diagram: what slows you down most -> shortcuts to learn first.
// Hex values -> tokens: #046999 $accent, #e8f4fa $accent-light,
// #b8d8e8 accent border tint, #0d1b2a $text-primary, #ffffff $white.
import React from "react";

const BOX_W = 172;
const BOX_Y = 130;
const BOX_H = 122;

const OUTCOMES = [
  {
    x: 15,
    label: "Repeating yourself",
    lines: ["Repeat Last Action", "Copy Value Above", "Paste Special"],
  },
  {
    x: 201,
    label: "Totals and formats",
    lines: ["AutoSum", "Format Cells", "Currency, Percentage"],
  },
  {
    x: 387,
    label: "Big sheets",
    lines: ["Select to End", "Current Region", "Switch Worksheets"],
  },
  {
    x: 573,
    label: "Checking formulas",
    lines: ["Formula View", "Named Ranges", "Back to Active Cell"],
  },
];

export default function PickShortcutSvg() {
  return (
    <svg
      viewBox="0 0 760 270"
      role="img"
      aria-labelledby="aes-pick-title aes-pick-desc"
      fontFamily="aptos"
      style={{ width: "100%", height: "auto", display: "block" }}
    >
      <title id="aes-pick-title">Which shortcuts to learn first</title>
      <desc id="aes-pick-desc">
        Start with what slows you down most. If you repeat yourself, learn
        Repeat Last Action, Copy Value From Above and Paste Special. For totals
        and formats, learn AutoSum, Format Cells, Currency and Percentage. For
        big sheets, learn Select to End of Data, Select Current Region and
        Switch Worksheets. For checking formulas, learn Toggle Formula View,
        Named Ranges and Return to Active Cell.
      </desc>

      <rect x="230" y="10" width="300" height="60" rx="14" fill="#046999" />
      <text
        x="380"
        y="46"
        textAnchor="middle"
        fontSize="17"
        fontWeight="700"
        fill="#ffffff"
      >
        What slows you down most?
      </text>

      <g
        fill="none"
        stroke="#046999"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M380 70V100M101 100H659" />
        {OUTCOMES.map((o) => {
          const cx = o.x + BOX_W / 2;
          return (
            <path
              key={o.label}
              d={`M${cx} 100V${BOX_Y - 2}M${cx - 6} ${BOX_Y - 8}l6 6 6-6`}
            />
          );
        })}
      </g>

      {OUTCOMES.map((o) => (
        <g key={o.label}>
          <rect
            x={o.x}
            y={BOX_Y}
            width={BOX_W}
            height={BOX_H}
            rx="14"
            fill="#e8f4fa"
            stroke="#b8d8e8"
          />
          <text
            x={o.x + 16}
            y={BOX_Y + 30}
            fontSize="15"
            fontWeight="700"
            fill="#046999"
          >
            {o.label}
          </text>
          {o.lines.map((line, i) => (
            <text
              key={line}
              x={o.x + 16}
              y={BOX_Y + 56 + i * 20}
              fontSize="14"
              fill="#0d1b2a"
            >
              {line}
            </text>
          ))}
        </g>
      ))}
    </svg>
  );
}
