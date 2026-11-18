// /app/blog/20-advanced-excel-shortcuts/(svgs)/HeroSvg.jsx
// Hero illustration: a small sales sheet with filter buttons, a selected
// range feeding an AutoSum, and the AutoSum keycaps in front.
// Sits directly on the dark hero, no panel.
// Hex values -> tokens: #1f3347 / #2b3d4e dark surface tints,
// #046999 $accent, #6fc3e8 $accent-on-dark, #f7f8f9 $light-bg, #ffffff $white.
import React from "react";
import { KEY_ICONS } from "./KeyCaps";

const COLS = [
  { x: 60, label: "A", head: "Region" },
  { x: 160, label: "B", head: "Sales" },
  { x: 260, label: "C", head: "Units" },
  { x: 360, label: "D", head: "Margin" },
];

const ROWS = [
  ["North", "$12,400", "310", "18%"],
  ["South", "$9,800", "244", "15%"],
  ["East", "$14,200", "352", "21%"],
  ["West", "$8,600", "198", "12%"],
  ["Central", "$11,300", "276", "17%"],
];

const TOTAL = ["Total", "$56,300", "1,380", ""];

const GRID_LINE = "#2b3d4e";
const HEAD_TOP = 68;
const DATA_TOP = 104;
const ROW_H = 38;
const TOTAL_TOP = DATA_TOP + ROW_H * ROWS.length;
const GRID_BOTTOM = TOTAL_TOP + ROW_H;

function HeroKey({ x, y, icon, char }) {
  return (
    <g>
      <rect x={x} y={y + 6} width="56" height="52" rx="10" fill="#8fa6b6" />
      <rect x={x} y={y} width="56" height="52" rx="10" fill="#f7f8f9" />
      {icon && (
        <g
          transform={`translate(${x + 16} ${y + 14}) scale(1)`}
          fill="none"
          stroke="#046999"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d={KEY_ICONS[icon]} />
        </g>
      )}
      {char && (
        <text
          x={x + 28}
          y={y + 35}
          textAnchor="middle"
          fontSize="26"
          fontWeight="700"
          fill="#0d1b2a"
        >
          {char}
        </text>
      )}
    </g>
  );
}

export default function HeroSvg() {
  return (
    <svg
      viewBox="0 0 480 420"
      role="img"
      aria-labelledby="aes-hero-title aes-hero-desc"
      fontFamily="aptos"
      style={{ width: "100%", height: "auto", display: "block" }}
    >
      <title id="aes-hero-title">A spreadsheet and the AutoSum shortcut</title>
      <desc id="aes-hero-desc">
        A sales sheet with filter buttons on the header row. A column of sales
        figures is selected and the formula bar shows a SUM formula. In front
        are the keycaps for the AutoSum shortcut on a Mac.
      </desc>

      {/* formula bar */}
      <rect x="20" y="4" width="440" height="30" rx="8" fill="#1f3347" />
      <text
        x="34"
        y="24"
        fontSize="14"
        fontStyle="italic"
        fontWeight="700"
        fill="#6fc3e8"
      >
        fx
      </text>
      <path d="M58 10v18" stroke={GRID_LINE} strokeWidth="1.5" />
      <text x="72" y="24" fontSize="14" fontWeight="600" fill="#ffffff">
        =SUM(B2:B6)
      </text>

      {/* column letters */}
      <rect x="20" y="44" width="440" height="24" fill="#1f3347" />
      {COLS.map((c) => (
        <text
          key={c.label}
          x={c.x + 50}
          y="61"
          textAnchor="middle"
          fontSize="14"
          fontWeight="600"
          fill="#8fb3c7"
        >
          {c.label}
        </text>
      ))}

      {/* header row */}
      <rect x="60" y={HEAD_TOP} width="400" height="36" fill="#046999" />
      {COLS.map((c) => (
        <g key={c.head}>
          <text
            x={c.x + 12}
            y={HEAD_TOP + 23}
            fontSize="14"
            fontWeight="700"
            fill="#ffffff"
          >
            {c.head}
          </text>
          <rect
            x={c.x + 72}
            y={HEAD_TOP + 8}
            width="20"
            height="20"
            rx="4"
            fill="#034e72"
            stroke="#6fc3e8"
            strokeWidth="1"
          />
          <path d={`M${c.x + 77} ${HEAD_TOP + 15}h10l-5 6z`} fill="#ffffff" />
        </g>
      ))}

      {/* data rows */}
      {ROWS.map((row, i) => {
        const top = DATA_TOP + ROW_H * i;
        return (
          <g key={row[0]}>
            {row.map((cell, j) => (
              <text
                key={j}
                x={j === 0 ? COLS[j].x + 12 : COLS[j].x + 88}
                y={top + 24}
                textAnchor={j === 0 ? "start" : "end"}
                fontSize="14"
                fill="#c7d6e0"
              >
                {cell}
              </text>
            ))}
          </g>
        );
      })}

      {/* total row */}
      <rect x="60" y={TOTAL_TOP} width="400" height={ROW_H} fill="#1f3347" />
      <rect x="160" y={TOTAL_TOP} width="100" height={ROW_H} fill="#046999" />
      {TOTAL.map((cell, j) => (
        <text
          key={j}
          x={j === 0 ? COLS[j].x + 12 : COLS[j].x + 88}
          y={TOTAL_TOP + 24}
          textAnchor={j === 0 ? "start" : "end"}
          fontSize="14"
          fontWeight="700"
          fill="#ffffff"
        >
          {cell}
        </text>
      ))}

      {/* grid lines */}
      {[0, 1, 2, 3, 4, 5, 6].map((i) => {
        const y = i === 0 ? HEAD_TOP : DATA_TOP + ROW_H * (i - 1);
        return (
          <path key={i} d={`M20 ${y}H460`} stroke={GRID_LINE} strokeWidth="1" />
        );
      })}
      <path d={`M20 ${GRID_BOTTOM}H460`} stroke={GRID_LINE} strokeWidth="1" />
      {[20, 60, 160, 260, 360, 460].map((x) => (
        <path
          key={x}
          d={`M${x} 44V${GRID_BOTTOM}`}
          stroke={GRID_LINE}
          strokeWidth="1"
        />
      ))}

      {/* row numbers */}
      {[1, 2, 3, 4, 5, 6, 7].map((n, i) => {
        const top = i === 0 ? HEAD_TOP : DATA_TOP + ROW_H * (i - 1);
        const h = i === 0 ? 36 : ROW_H;
        return (
          <text
            key={n}
            x="40"
            y={top + h / 2 + 5}
            textAnchor="middle"
            fontSize="14"
            fill="#6b8799"
          >
            {n}
          </text>
        );
      })}

      {/* selected range B2:B6 */}
      <rect
        x="160"
        y={DATA_TOP}
        width="100"
        height={ROW_H * ROWS.length}
        fill="#6fc3e8"
        fillOpacity="0.12"
        stroke="#6fc3e8"
        strokeWidth="2"
        strokeDasharray="6 4"
      />
      <rect x="255" y={TOTAL_TOP - 6} width="10" height="10" fill="#6fc3e8" />

      {/* AutoSum keys */}
      <HeroKey x={128} y={352} icon="command" />
      <HeroKey x={212} y={352} icon="shift" />
      <HeroKey x={296} y={352} char="T" />
      <text x="198" y="386" textAnchor="middle" fontSize="20" fill="#6fc3e8">
        +
      </text>
      <text x="282" y="386" textAnchor="middle" fontSize="20" fill="#6fc3e8">
        +
      </text>
    </svg>
  );
}
