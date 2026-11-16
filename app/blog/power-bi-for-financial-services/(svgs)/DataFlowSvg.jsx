// /app/blog/power-bi-for-financial-services/(svgs)/DataFlowSvg.jsx
// Map diagram: where finance data comes from, the governed model in the middle,
// and the role-based views people get out of it. Sits on a light panel.
// Colours (hard-coded): #046999 $accent, #e8f4fa $accent-light, #0d1b2a $text-primary,
// #4a5568 $text-secondary, #ffffff $white, #cfe3ee tint of $accent-border.

import React from "react";

const ACCENT = "#046999";
const LIGHT = "#e8f4fa";
const INK = "#0d1b2a";
const SOFT = "#4a5568";
const EDGE = "#b9d6e5";

const SOURCES = [
  "Core banking",
  "CRM",
  "Accounting/ERP",
  "Spreadsheets",
  "Regulatory files",
];
const OUTPUTS = [
  "Board dashboard",
  "Compliance pack",
  "Risk monitor",
  "Client insights",
];

// Small glyphs, drawn in a 20x20 box at the chip's left edge.
const SourceGlyph = ({ kind }) => {
  const s = {
    fill: "none",
    stroke: ACCENT,
    strokeWidth: 1.6,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };
  switch (kind) {
    case 0:
      return (
        <g {...s}>
          <path d="M2 8l8-5 8 5M4 8v8M8 8v8M12 8v8M16 8v8M2 18h16" />
        </g>
      );
    case 1:
      return (
        <g {...s}>
          <circle cx="7" cy="7" r="3" />
          <path d="M1.5 17c0-3 2.5-5 5.5-5s5.5 2 5.5 5" />
          <circle cx="14.5" cy="8" r="2.2" />
          <path d="M14.5 12.5c2 0 3.6 1.4 3.6 3.5" />
        </g>
      );
    case 2:
      return (
        <g {...s}>
          <rect x="3" y="2" width="14" height="16" rx="2" />
          <path d="M6 6h8M6 10h2M10 10h2M14 10h0M6 14h2M10 14h2M14 14h0" />
        </g>
      );
    case 3:
      return (
        <g {...s}>
          <rect x="2" y="3" width="16" height="14" rx="2" />
          <path d="M2 8h16M2 12.5h16M7.5 3v14M12.5 3v14" />
        </g>
      );
    default:
      return (
        <g {...s}>
          <path d="M4 2h8l4 4v12H4zM12 2v4h4M7 11h6M7 14.5h4" />
        </g>
      );
  }
};

const OutputGlyph = ({ kind }) => {
  const s = {
    fill: "none",
    stroke: ACCENT,
    strokeWidth: 1.6,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };
  switch (kind) {
    case 0:
      return (
        <g {...s}>
          <path d="M3 17V9M8 17V4M13 17v-6M18 17V7" />
        </g>
      );
    case 1:
      return (
        <g {...s}>
          <path d="M10 2l7 2.6v5c0 4.4-3 7-7 8.4-4-1.4-7-4-7-8.4v-5L10 2z" />
          <path d="M7 10l2.2 2.2L13.5 8" />
        </g>
      );
    case 2:
      return (
        <g {...s}>
          <path d="M10 3l8 14H2L10 3zM10 8.5v4M10 15h0" />
        </g>
      );
    default:
      return (
        <g {...s}>
          <circle cx="10" cy="7" r="3.2" />
          <path d="M3.5 17.5c0-3.4 2.9-5.6 6.5-5.6s6.5 2.2 6.5 5.6" />
        </g>
      );
  }
};

// Pulls an arrow end-point toward the middle of the model box.
const squeeze = (y) => Math.round(174 + (y - 174) * 0.55);

const Arrow = ({ x1, y1, x2, y2 }) => (
  <path
    d={`M${x1} ${y1}L${x2} ${y2}`}
    stroke={ACCENT}
    strokeWidth="2"
    strokeLinecap="round"
    markerEnd="url(#pbifs-map-arrow)"
  />
);

export default function DataFlowSvg() {
  return (
    <svg
      viewBox="0 0 640 390"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-labelledby="pbifs-map-title pbifs-map-desc"
      fontFamily="aptos"
      style={{ width: "100%", height: "auto", display: "block" }}
    >
      <title id="pbifs-map-title">
        How finance data flows through Power BI
      </title>
      <desc id="pbifs-map-desc">
        Five sources (core banking, CRM, accounting or ERP, spreadsheets and
        regulatory files) feed one governed data model made of a transactions
        table and customer, product, date and region lookups, protected by
        row-level security. The model feeds four views: a board dashboard, a
        compliance pack, a risk monitor and client insights. Scheduled refresh,
        data quality checks and audit logs run underneath.
      </desc>

      <defs>
        <marker
          id="pbifs-map-arrow"
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

      <g fill={ACCENT} fontSize="14" fontWeight="700" letterSpacing="1.5">
        <text x="10" y="24">
          SOURCES
        </text>
        <text x="240" y="24">
          MODEL
        </text>
        <text x="470" y="24">
          VIEWS
        </text>
      </g>

      {/* Sources */}
      {SOURCES.map((label, i) => {
        const y = 40 + i * 56;
        return (
          <g key={label}>
            <rect
              x="10"
              y={y}
              width="160"
              height="44"
              rx="10"
              fill="#ffffff"
              stroke={EDGE}
            />
            <g transform={`translate(20 ${y + 12})`}>
              <SourceGlyph kind={i} />
            </g>
            <text x="48" y={y + 27} fontSize="14" fill={INK}>
              {label}
            </text>
            <Arrow x1="170" y1={y + 22} x2="236" y2={squeeze(y + 22)} />
          </g>
        );
      })}

      {/* Model */}
      <rect
        x="240"
        y="40"
        width="160"
        height="268"
        rx="14"
        fill={LIGHT}
        stroke={EDGE}
      />
      <g stroke={ACCENT} strokeOpacity="0.5" strokeWidth="1.5">
        <line x1="282" y1="128" x2="310" y2="150" />
        <line x1="358" y1="128" x2="330" y2="150" />
        <line x1="282" y1="230" x2="310" y2="194" />
        <line x1="358" y1="230" x2="330" y2="194" />
      </g>
      {[
        ["Customer", 246, 96],
        ["Product", 322, 96],
        ["Date", 246, 230],
        ["Region", 322, 230],
      ].map(([label, x, y]) => (
        <g key={label}>
          <rect
            x={x}
            y={y}
            width="72"
            height="32"
            rx="7"
            fill="#ffffff"
            stroke={ACCENT}
            strokeOpacity="0.5"
          />
          <text
            x={x + 36}
            y={y + 21}
            fontSize="14"
            fill={INK}
            textAnchor="middle"
          >
            {label}
          </text>
        </g>
      ))}
      <rect x="266" y="150" width="108" height="44" rx="9" fill={ACCENT} />
      <text
        x="320"
        y="177"
        fontSize="14"
        fontWeight="700"
        fill="#ffffff"
        textAnchor="middle"
      >
        Transactions
      </text>
      <text
        x="320"
        y="76"
        fontSize="14"
        fontWeight="700"
        fill={INK}
        textAnchor="middle"
      >
        Governed model
      </text>
      <rect
        x="246"
        y="270"
        width="148"
        height="28"
        rx="14"
        fill="#ffffff"
        stroke={ACCENT}
      />
      <g
        transform="translate(256 274)"
        fill="none"
        stroke={ACCENT}
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M2 8h12v8H2zM5 8V5.5a3 3 0 0 1 6 0V8" />
      </g>
      <text x="278" y="289" fontSize="14" fill={INK}>
        Row-level security
      </text>

      {/* Views */}
      {OUTPUTS.map((label, i) => {
        const y = 40 + i * 70;
        return (
          <g key={label}>
            <rect
              x="470"
              y={y}
              width="160"
              height="56"
              rx="10"
              fill="#ffffff"
              stroke={EDGE}
            />
            <g transform={`translate(480 ${y + 18})`}>
              <OutputGlyph kind={i} />
            </g>
            <text x="508" y={y + 33} fontSize="14" fill={INK}>
              {label}
            </text>
            <Arrow x1="404" y1={squeeze(y + 28)} x2="466" y2={y + 28} />
          </g>
        );
      })}

      {/* Underlying controls strip */}
      <rect
        x="10"
        y="332"
        width="620"
        height="44"
        rx="10"
        fill={LIGHT}
        stroke={EDGE}
      />
      <g
        fill="none"
        stroke={ACCENT}
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M30 346a8 8 0 0 1 13.5-3M44 340v4h-4M44 354a8 8 0 0 1-13.5 3M30 360v-4h4" />
      </g>
      <text x="58" y="359" fontSize="14" fill={SOFT}>
        Scheduled refresh, data quality checks and audit logs run underneath.
      </text>
    </svg>
  );
}
