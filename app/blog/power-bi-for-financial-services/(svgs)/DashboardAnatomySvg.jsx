// /app/blog/power-bi-for-financial-services/(svgs)/DashboardAnatomySvg.jsx
// Anatomy diagram: one finance dashboard with six numbered pins and callouts.
// Colours (hard-coded): #046999 $accent, #e8f4fa $accent-light, #0d1b2a $text-primary,
// #4a5568 $text-secondary, #ffffff $white, #f7f8f9 $light-bg, #cfd8df tint of $border.

import React from "react";

const ACCENT = "#046999";
const LIGHT = "#e8f4fa";
const INK = "#0d1b2a";
const SOFT = "#4a5568";
const PANEL = "#f7f8f9";
const EDGE = "#cfd8df";

const Pin = ({ cx, cy, n }) => (
  <g>
    <circle
      cx={cx}
      cy={cy}
      r="13"
      fill={ACCENT}
      stroke="#ffffff"
      strokeWidth="2.5"
    />
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

const Callout = ({ x, y, anchor, title, line }) => (
  <g textAnchor={anchor}>
    <text x={x} y={y} fontSize="14" fontWeight="700" fill={INK}>
      {title}
    </text>
    <text x={x} y={y + 18} fontSize="14" fill={SOFT}>
      {line}
    </text>
  </g>
);

export default function DashboardAnatomySvg() {
  return (
    <svg
      viewBox="0 0 640 420"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-labelledby="pbifs-anatomy-title pbifs-anatomy-desc"
      fontFamily="aptos"
      style={{ width: "100%", height: "auto", display: "block" }}
    >
      <title id="pbifs-anatomy-title">Anatomy of a finance dashboard</title>
      <desc id="pbifs-anatomy-desc">
        A dashboard with six numbered parts. One, role-based filters across the
        top. Two, headline KPI tiles. Three, a trend chart over time. Four, a
        mix by segment chart. Five, a detail table you can drill through into.
        Six, a footer showing the data source and last refresh time.
      </desc>

      {/* Dashboard frame */}
      <rect
        x="150"
        y="20"
        width="340"
        height="360"
        rx="12"
        fill="#ffffff"
        stroke={EDGE}
        strokeWidth="1.5"
      />
      <rect x="150" y="20" width="340" height="34" rx="12" fill={INK} />
      <rect x="150" y="40" width="340" height="14" fill={INK} />
      {[0, 1, 2].map((i) => (
        <circle
          key={i}
          cx={166 + i * 12}
          cy="37"
          r="3"
          fill="#ffffff"
          opacity="0.5"
        />
      ))}
      {[0, 1].map((i) => (
        <g key={i}>
          <rect
            x={366 + i * 60}
            y="28"
            width="52"
            height="18"
            rx="9"
            fill="#ffffff"
            opacity="0.16"
          />
          <rect
            x={374 + i * 60}
            y="35"
            width="26"
            height="4"
            rx="2"
            fill="#ffffff"
            opacity="0.7"
          />
        </g>
      ))}

      {/* KPI tiles */}
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <rect
            x={162 + i * 108}
            y="66"
            width="100"
            height="54"
            rx="8"
            fill={PANEL}
            stroke={EDGE}
          />
          <rect
            x={172 + i * 108}
            y="76"
            width="40"
            height="5"
            rx="2.5"
            fill={SOFT}
            opacity="0.5"
          />
          <rect
            x={172 + i * 108}
            y="88"
            width={i === 1 ? 48 : 56}
            height="13"
            rx="3"
            fill={INK}
          />
          <path
            d={`M${172 + i * 108} 110h24`}
            stroke={i === 2 ? "#e57368" : ACCENT}
            strokeWidth="3"
            strokeLinecap="round"
          />
        </g>
      ))}

      {/* Trend chart */}
      <rect
        x="162"
        y="132"
        width="200"
        height="120"
        rx="8"
        fill={PANEL}
        stroke={EDGE}
      />
      <rect
        x="172"
        y="142"
        width="52"
        height="5"
        rx="2.5"
        fill={SOFT}
        opacity="0.5"
      />
      <line x1="174" y1="236" x2="350" y2="236" stroke={EDGE} />
      {[28, 40, 34, 52, 46, 64, 72].map((bh, i) => (
        <rect
          key={i}
          x={176 + i * 24}
          y={236 - bh}
          width="14"
          height={bh}
          rx="3"
          fill={LIGHT}
          stroke={ACCENT}
          strokeOpacity="0.4"
        />
      ))}
      <path
        d="M183 206L207 196L231 200L255 184L279 188L303 172L327 164"
        fill="none"
        stroke={ACCENT}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="327" cy="164" r="4" fill={ACCENT} />

      {/* Mix by segment */}
      <rect
        x="370"
        y="132"
        width="108"
        height="120"
        rx="8"
        fill={PANEL}
        stroke={EDGE}
      />
      <rect
        x="380"
        y="142"
        width="40"
        height="5"
        rx="2.5"
        fill={SOFT}
        opacity="0.5"
      />
      <g transform="rotate(-90 424 196)" fill="none" strokeWidth="14">
        <circle cx="424" cy="196" r="26" stroke={LIGHT} />
        <circle
          cx="424"
          cy="196"
          r="26"
          stroke={ACCENT}
          strokeDasharray="82 164"
        />
        <circle
          cx="424"
          cy="196"
          r="26"
          stroke="#6fc3e8"
          strokeDasharray="46 164"
          strokeDashoffset="-84"
        />
        <circle
          cx="424"
          cy="196"
          r="26"
          stroke={INK}
          strokeDasharray="26 164"
          strokeDashoffset="-132"
        />
      </g>

      {/* Drill-through table */}
      <rect
        x="162"
        y="264"
        width="316"
        height="82"
        rx="8"
        fill={PANEL}
        stroke={EDGE}
      />
      <rect x="162" y="264" width="316" height="18" rx="8" fill={LIGHT} />
      <rect x="162" y="274" width="316" height="8" fill={LIGHT} />
      {[0, 1, 2].map((i) => (
        <rect
          key={i}
          x={174 + i * 90}
          y="270"
          width="44"
          height="5"
          rx="2.5"
          fill={ACCENT}
          opacity="0.7"
        />
      ))}
      {[0, 1, 2].map((r) => (
        <g key={r}>
          {r === 1 && (
            <rect
              x="164"
              y={288 + r * 18}
              width="312"
              height="16"
              fill={ACCENT}
              opacity="0.12"
            />
          )}
          {[0, 1, 2].map((c) => (
            <rect
              key={c}
              x={174 + c * 90}
              y={293 + r * 18}
              width={c === 1 ? 36 : 50}
              height="5"
              rx="2.5"
              fill={SOFT}
              opacity="0.45"
            />
          ))}
          <path
            d={`M458 ${291 + r * 18}l5 5-5 5`}
            fill="none"
            stroke={ACCENT}
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      ))}

      {/* Footer: source and refresh */}
      <rect x="162" y="354" width="316" height="18" rx="6" fill={PANEL} />
      <circle cx="174" cy="363" r="4" fill="#0eaa0e" />
      <rect
        x="184"
        y="361"
        width="70"
        height="4"
        rx="2"
        fill={SOFT}
        opacity="0.45"
      />
      <rect
        x="400"
        y="361"
        width="66"
        height="4"
        rx="2"
        fill={SOFT}
        opacity="0.45"
      />

      {/* Pins and leader lines */}
      <g stroke={ACCENT} strokeWidth="1.5" strokeDasharray="3 3">
        <line x1="150" y1="93" x2="162" y2="93" />
        <line x1="150" y1="192" x2="162" y2="192" />
        <line x1="478" y1="192" x2="490" y2="192" />
        <line x1="478" y1="316" x2="490" y2="316" />
        <line x1="478" y1="363" x2="490" y2="363" />
      </g>
      <Pin cx={150} cy={37} n="1" />
      <Pin cx={150} cy={93} n="2" />
      <Pin cx={150} cy={192} n="3" />
      <Pin cx={490} cy={192} n="4" />
      <Pin cx={490} cy={316} n="5" />
      <Pin cx={490} cy={363} n="6" />

      {/* Callouts */}
      <Callout x={128} y={33} anchor="end" title="Role-based" line="filters" />
      <Callout x={128} y={89} anchor="end" title="Headline" line="KPIs" />
      <Callout x={128} y={188} anchor="end" title="Trend over" line="time" />
      <Callout x={512} y={188} anchor="start" title="Mix by" line="segment" />
      <Callout
        x={512}
        y={312}
        anchor="start"
        title="Drill-through"
        line="detail"
      />
      <Callout
        x={512}
        y={359}
        anchor="start"
        title="Source and"
        line="refresh time"
      />
    </svg>
  );
}
