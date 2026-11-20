// /app/services/microsoft-access/access-database-optimisation-and-repair/(svgs)/AorServiceArt.jsx
// Spot art for the seven service tiles. Each piece is drawn for the tile it sits on and
// takes a tone: "light", "dark", "accent" or "deep" (palettes and token names in AorPalette.js).
// Decorative only, so aria-hidden. No brand logos: windows, tables and cylinders stand in.
import React from "react";
import { PALETTES } from "./AorPalette";

const Frame = ({ viewBox, children }) => (
  <svg
    viewBox={viewBox}
    aria-hidden="true"
    focusable="false"
    style={{ width: "100%", height: "auto", display: "block" }}
  >
    {children}
  </svg>
);

// Performance analysis and diagnosis: query timings under a magnifier, plus a stopwatch
export const AorAnalysisArt = ({ tone = "dark" }) => {
  const P = PALETTES[tone];
  return (
    <Frame viewBox="0 0 220 150">
      <rect
        x="10"
        y="14"
        width="150"
        height="102"
        rx="10"
        fill={P.surface}
        stroke={P.line}
      />
      <path d="M22 28v76h128" fill="none" stroke={P.line} />
      <rect x="28" y="34" width="86" height="9" rx="4.5" fill={P.accent} />
      <rect
        x="28"
        y="52"
        width="48"
        height="9"
        rx="4.5"
        fill={P.accent}
        opacity="0.55"
      />
      <rect x="28" y="70" width="112" height="9" rx="4.5" fill={P.warn} />
      <rect
        x="28"
        y="88"
        width="68"
        height="9"
        rx="4.5"
        fill={P.accent}
        opacity="0.55"
      />
      <circle
        cx="150"
        cy="88"
        r="30"
        fill={P.soft}
        fillOpacity="0.92"
        stroke={P.ink}
        strokeWidth="4"
      />
      <path
        d="M172 110l26 26"
        stroke={P.ink}
        strokeWidth="9"
        strokeLinecap="round"
      />
      <path
        d="M130 94l9-13 9 9 11-17 9 12"
        fill="none"
        stroke={P.hi}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx="190"
        cy="36"
        r="16"
        fill={P.surface}
        stroke={P.accent}
        strokeWidth="2.5"
      />
      <rect x="186" y="14" width="8" height="5" rx="2" fill={P.accent} />
      <path
        d="M190 36V26M190 36l7 4"
        stroke={P.ink}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </Frame>
  );
};

// Database splitting and backend optimisation: two front-end copies sharing one data file
export const AorSplitArt = ({ tone = "light" }) => {
  const P = PALETTES[tone];
  return (
    <Frame viewBox="0 0 160 120">
      {[12, 62].map((y) => (
        <g key={y}>
          <rect
            x="8"
            y={y}
            width="56"
            height="38"
            rx="7"
            fill={P.surface}
            stroke={P.line}
          />
          <path d={`M8 ${y + 10}h56`} stroke={P.line} />
          <circle cx="16" cy={y + 5} r="1.8" fill={P.mute} />
          <circle cx="22" cy={y + 5} r="1.8" fill={P.mute} />
          <rect
            x="16"
            y={y + 16}
            width="30"
            height="5"
            rx="2.5"
            fill={P.accent}
            opacity="0.8"
          />
          <rect
            x="16"
            y={y + 25}
            width="22"
            height="5"
            rx="2.5"
            fill={P.line}
          />
          <circle cx="64" cy={y + 19} r="4" fill={P.accent} />
        </g>
      ))}
      <path
        d="M68 31C84 31 88 42 98 46M68 81C84 81 88 70 98 66"
        fill="none"
        stroke={P.accent}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <ellipse
        cx="124"
        cy="84"
        rx="26"
        ry="8"
        fill={P.soft}
        stroke={P.accent}
        strokeWidth="2"
      />
      <path d="M98 36v48M150 36v48" stroke={P.accent} strokeWidth="2" />
      <path
        d="M98 60a26 8 0 0 0 52 0"
        fill="none"
        stroke={P.accent}
        strokeWidth="1.5"
        opacity="0.6"
      />
      <ellipse
        cx="124"
        cy="36"
        rx="26"
        ry="8"
        fill={P.surface}
        stroke={P.accent}
        strokeWidth="2"
      />
      <rect
        x="112"
        y="46"
        width="24"
        height="5"
        rx="2.5"
        fill={P.ink}
        opacity="0.65"
      />
      <rect
        x="112"
        y="68"
        width="16"
        height="5"
        rx="2.5"
        fill={P.ink}
        opacity="0.35"
      />
      <circle
        cx="124"
        cy="104"
        r="7"
        fill={P.surface}
        stroke={P.accent}
        strokeWidth="2"
      />
      <path
        d="M121 104l2.5 2.5 4.5-5"
        fill="none"
        stroke={P.accent}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Frame>
  );
};

// Index optimisation and query tuning: a table pointing to an index tree
export const AorIndexArt = ({ tone = "accent" }) => {
  const P = PALETTES[tone];
  return (
    <Frame viewBox="0 0 160 120">
      <rect
        x="8"
        y="14"
        width="66"
        height="90"
        rx="8"
        fill={P.surface}
        stroke={P.line}
      />
      <rect x="8" y="14" width="66" height="16" rx="8" fill={P.soft} />
      <path d="M8 46h66M8 62h66M8 78h66M8 94h66M32 30v74" stroke={P.line} />
      <rect x="9" y="63" width="64" height="15" fill={P.hi} opacity="0.28" />
      <rect x="14" y="67" width="12" height="5" rx="2.5" fill={P.ink} />
      <rect
        x="38"
        y="67"
        width="28"
        height="5"
        rx="2.5"
        fill={P.ink}
        opacity="0.75"
      />
      <path
        d="M118 38L98 62M118 38l20 24M98 62L88 92M98 62l10 30M138 62l-10 30M138 62l10 30"
        stroke={P.line}
        strokeWidth="2"
      />
      <circle
        cx="118"
        cy="30"
        r="9"
        fill={P.surface}
        stroke={P.ink}
        strokeWidth="2.5"
      />
      <circle
        cx="98"
        cy="62"
        r="8"
        fill={P.surface}
        stroke={P.ink}
        strokeWidth="2"
      />
      <circle
        cx="138"
        cy="62"
        r="8"
        fill={P.surface}
        stroke={P.ink}
        strokeWidth="2"
      />
      {[84, 108, 126, 148].map((x, i) => (
        <rect
          key={x}
          x={x - 8}
          y="92"
          width="16"
          height="12"
          rx="4"
          fill={i === 1 ? P.hi : P.surface}
          stroke={P.ink}
          strokeWidth="1.5"
        />
      ))}
      <path
        d="M100 98C90 112 74 108 76 74"
        fill="none"
        stroke={P.hi}
        strokeWidth="2.5"
        strokeDasharray="4 4"
        strokeLinecap="round"
      />
      <path d="M71 80l5-8 6 7z" fill={P.hi} />
    </Frame>
  );
};

// Form and report performance: form with an open combo box, report page behind
export const AorFormArt = ({ tone = "light" }) => {
  const P = PALETTES[tone];
  return (
    <Frame viewBox="0 0 160 120">
      <path
        d="M92 10h34l16 16v76a4 4 0 0 1-4 4H92a4 4 0 0 1-4-4V14a4 4 0 0 1 4-4z"
        fill={P.surface}
        stroke={P.line}
      />
      <path
        d="M126 10v16h16"
        fill={P.soft}
        stroke={P.line}
        strokeLinejoin="round"
      />
      <rect x="98" y="36" width="34" height="5" rx="2.5" fill={P.line} />
      <rect x="98" y="48" width="26" height="5" rx="2.5" fill={P.line} />
      <path
        d="M98 100V76M110 100V66M122 100V82M134 100V72"
        stroke={P.accent}
        strokeWidth="6"
        strokeLinecap="round"
        opacity="0.5"
      />
      <rect
        x="8"
        y="22"
        width="100"
        height="84"
        rx="8"
        fill={P.surface}
        stroke={P.ink}
        strokeWidth="1.5"
      />
      <path d="M8 36h100" stroke={P.line} />
      <circle cx="17" cy="29" r="2" fill={P.mute} />
      <circle cx="24" cy="29" r="2" fill={P.mute} />
      <rect
        x="18"
        y="44"
        width="80"
        height="14"
        rx="4"
        fill={P.surface}
        stroke={P.accent}
        strokeWidth="1.8"
      />
      <path
        d="M86 49l4 4 4-4"
        fill="none"
        stroke={P.accent}
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect
        x="18"
        y="60"
        width="80"
        height="34"
        rx="4"
        fill={P.surface}
        stroke={P.line}
      />
      <rect x="19" y="61" width="78" height="10" fill={P.soft} />
      <rect x="24" y="64" width="40" height="4" rx="2" fill={P.accent} />
      <rect x="24" y="75" width="52" height="4" rx="2" fill={P.line} />
      <rect x="24" y="85" width="34" height="4" rx="2" fill={P.line} />
    </Frame>
  );
};

// VBA code optimisation: a slow DLookup line swapped for a recordset
export const AorVbaArt = ({ tone = "dark" }) => {
  const P = PALETTES[tone];
  return (
    <Frame viewBox="0 0 160 120">
      <rect
        x="8"
        y="10"
        width="100"
        height="100"
        rx="9"
        fill={P.surface}
        stroke={P.line}
      />
      <path d="M8 26h100" stroke={P.line} />
      <circle cx="17" cy="18" r="2.2" fill={P.mute} />
      <circle cx="25" cy="18" r="2.2" fill={P.mute} />
      <rect x="18" y="34" width="38" height="6" rx="3" fill={P.accent} />
      <rect x="26" y="46" width="62" height="6" rx="3" fill={P.line} />
      <rect x="26" y="58" width="48" height="6" rx="3" fill={P.line} />
      <path
        d="M26 74q4-5 8 0t8 0 8 0 8 0 8 0"
        fill="none"
        stroke={P.warn}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <rect x="18" y="84" width="28" height="6" rx="3" fill={P.accent} />
      <path
        d="M92 38a10 10 0 1 1-3 7.5"
        fill="none"
        stroke={P.hi}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path d="M86 36l5 5 5-6z" fill={P.hi} />
      <path
        d="M108 76H122"
        stroke={P.hi}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeDasharray="3 4"
      />
      <rect
        x="124"
        y="56"
        width="30"
        height="40"
        rx="5"
        fill={P.soft}
        stroke={P.hi}
        strokeWidth="2"
      />
      <path
        d="M124 68h30M124 80h30M136 56v40"
        stroke={P.hi}
        strokeWidth="1.2"
        opacity="0.7"
      />
    </Frame>
  );
};

// SQL Server migration: an Access window feeding a server rack
export const AorSqlArt = ({ tone = "deep" }) => {
  const P = PALETTES[tone];
  return (
    <Frame viewBox="0 0 220 150">
      <rect
        x="8"
        y="34"
        width="84"
        height="66"
        rx="9"
        fill={P.soft}
        stroke={P.line}
      />
      <path d="M8 50h84" stroke={P.line} />
      <circle cx="18" cy="42" r="2.5" fill={P.mute} />
      <circle cx="26" cy="42" r="2.5" fill={P.mute} />
      <rect x="18" y="58" width="46" height="6" rx="3" fill={P.hi} />
      <rect x="18" y="70" width="60" height="6" rx="3" fill={P.line} />
      <rect x="18" y="82" width="34" height="6" rx="3" fill={P.line} />
      <path
        d="M98 67H124"
        stroke={P.ink}
        strokeWidth="3"
        strokeLinecap="round"
        strokeDasharray="2 6"
      />
      <path
        d="M118 59l9 8-9 8"
        fill="none"
        stroke={P.ink}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {[14, 50, 86].map((y) => (
        <g key={y}>
          <rect
            x="132"
            y={y}
            width="80"
            height="30"
            rx="6"
            fill={P.surface}
            stroke={P.ink}
            strokeWidth="1.8"
          />
          <rect x="140" y={y + 11} width="34" height="8" rx="3" fill={P.soft} />
          <circle cx="190" cy={y + 15} r="3.5" fill={P.hi} />
          <circle cx="201" cy={y + 15} r="3.5" fill={P.ink} opacity="0.5" />
        </g>
      ))}
      <circle
        cx="108"
        cy="122"
        r="14"
        fill={P.surface}
        stroke={P.ink}
        strokeWidth="2"
      />
      <path
        d="M108 112l8 3v6c0 5-4 8-8 10-4-2-8-5-8-10v-6z"
        fill="none"
        stroke={P.hi}
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M104 121l3 3 5-6"
        fill="none"
        stroke={P.hi}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Frame>
  );
};

// Regular maintenance planning: calendar, repair loop and a protected backup
export const AorMaintenanceArt = ({ tone = "light" }) => {
  const P = PALETTES[tone];
  return (
    <Frame viewBox="0 0 250 120">
      <rect
        x="8"
        y="16"
        width="84"
        height="88"
        rx="9"
        fill={P.surface}
        stroke={P.line}
      />
      <rect x="8" y="16" width="84" height="22" rx="9" fill={P.accent} />
      <path
        d="M28 10v12M72 10v12"
        stroke={P.ink}
        strokeWidth="3"
        strokeLinecap="round"
      />
      {[0, 1, 2, 3].map((row) =>
        [0, 1, 2, 3].map((col) => (
          <rect
            key={`${row}-${col}`}
            x={18 + col * 18}
            y={46 + row * 14}
            width="12"
            height="8"
            rx="2.5"
            fill={row === 1 && col === 2 ? P.accent : P.line}
            opacity={row === 1 && col === 2 ? 1 : 0.7}
          />
        )),
      )}
      <path
        d="M104 60h18"
        stroke={P.accent}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeDasharray="2 5"
      />
      <circle
        cx="148"
        cy="60"
        r="24"
        fill={P.soft}
        stroke={P.accent}
        strokeWidth="2"
      />
      <path
        d="M135 52a15 15 0 0 1 25-3M161 68a15 15 0 0 1-25 3"
        fill="none"
        stroke={P.ink}
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path d="M163 40l-1 11-10-3zM133 80l1-11 10 3z" fill={P.ink} />
      <path
        d="M176 60h18"
        stroke={P.accent}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeDasharray="2 5"
      />
      <ellipse
        cx="220"
        cy="82"
        rx="20"
        ry="7"
        fill={P.soft}
        stroke={P.accent}
        strokeWidth="2"
      />
      <path d="M200 40v42M240 40v42" stroke={P.accent} strokeWidth="2" />
      <ellipse
        cx="220"
        cy="40"
        rx="20"
        ry="7"
        fill={P.surface}
        stroke={P.accent}
        strokeWidth="2"
      />
      <path
        d="M200 61a20 7 0 0 0 40 0"
        fill="none"
        stroke={P.accent}
        strokeWidth="1.5"
        opacity="0.6"
      />
      <circle cx="220" cy="100" r="9" fill={P.accent} />
      <path
        d="M215.5 100l3 3 6-6.5"
        fill="none"
        stroke={P.surface}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Frame>
  );
};
