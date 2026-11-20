// /app/services/microsoft-access/access-database-optimisation-and-repair/(svgs)/AorProcessArt.jsx
// Spot art for the four process steps. Drawn for the dark cards ($dark-bg).
// Hex values come from AorPalette.js (dark): $dark-surface, $dark-mid, $white, $white-65,
// $white-18, $accent-on-dark, $replace-x.
import React from "react";
import { PALETTES } from "./AorPalette";

const P = PALETTES.dark;

const Frame = ({ children }) => (
  <svg
    viewBox="0 0 120 90"
    aria-hidden="true"
    focusable="false"
    style={{ width: "100%", height: "auto", display: "block" }}
  >
    {children}
  </svg>
);

// Back up and triage: the live file, a safe copy and a shield
export const AorBackupArt = () => (
  <Frame>
    <path
      d="M10 12h26l10 10v44a3 3 0 0 1-3 3H10a3 3 0 0 1-3-3V15a3 3 0 0 1 3-3z"
      fill={P.surface}
      stroke={P.line}
      strokeWidth="1.5"
    />
    <path
      d="M36 12v10h10"
      fill={P.soft}
      stroke={P.line}
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
    <rect x="15" y="34" width="24" height="5" rx="2.5" fill={P.accent} />
    <rect x="15" y="44" width="16" height="5" rx="2.5" fill={P.line} />
    <rect x="15" y="54" width="20" height="5" rx="2.5" fill={P.line} />
    <path
      d="M52 44h14"
      stroke={P.accent}
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeDasharray="2 5"
    />
    <path
      d="M61 38l7 6-7 6"
      fill="none"
      stroke={P.accent}
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M76 20h26l10 10v44a3 3 0 0 1-3 3H76a3 3 0 0 1-3-3V23a3 3 0 0 1 3-3z"
      fill={P.soft}
      stroke={P.accent}
      strokeWidth="1.8"
    />
    <path
      d="M102 20v10h10"
      fill={P.surface}
      stroke={P.accent}
      strokeWidth="1.8"
      strokeLinejoin="round"
    />
    <rect x="81" y="42" width="24" height="5" rx="2.5" fill={P.accent} />
    <rect x="81" y="52" width="16" height="5" rx="2.5" fill={P.line} />
    <circle
      cx="96"
      cy="70"
      r="13"
      fill={P.surface}
      stroke={P.accent}
      strokeWidth="2"
    />
    <path
      d="M96 61l8 3v5c0 5-3.5 8-8 10-4.5-2-8-5-8-10v-5z"
      fill="none"
      stroke={P.accent}
      strokeWidth="1.8"
      strokeLinejoin="round"
    />
    <path
      d="M92 70l3 3 5-6"
      fill="none"
      stroke={P.accent}
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Frame>
);

// Diagnose: database under a magnifier with a pulse line
export const AorDiagnoseArt = () => (
  <Frame>
    <ellipse
      cx="42"
      cy="62"
      rx="26"
      ry="8"
      fill={P.soft}
      stroke={P.accent}
      strokeWidth="1.8"
    />
    <path d="M16 30v32M68 30v32" stroke={P.accent} strokeWidth="1.8" />
    <path
      d="M16 46a26 8 0 0 0 52 0"
      fill="none"
      stroke={P.accent}
      strokeWidth="1.5"
      opacity="0.6"
    />
    <ellipse
      cx="42"
      cy="30"
      rx="26"
      ry="8"
      fill={P.surface}
      stroke={P.accent}
      strokeWidth="1.8"
    />
    <rect x="26" y="52" width="14" height="4" rx="2" fill={P.accent} />
    <rect x="46" y="40" width="12" height="4" rx="2" fill={P.line} />
    <circle
      cx="78"
      cy="42"
      r="20"
      fill={P.soft}
      fillOpacity="0.9"
      stroke={P.ink}
      strokeWidth="3.5"
    />
    <path
      d="M93 57l16 16"
      stroke={P.ink}
      strokeWidth="7"
      strokeLinecap="round"
    />
    <path
      d="M62 44h6l4-9 6 16 4-10h6"
      fill="none"
      stroke={P.warn}
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Frame>
);

// Fix, quick wins first: wrench over a gauge
export const AorFixArt = () => (
  <Frame>
    <path
      d="M14 66A46 46 0 0 1 106 66"
      fill="none"
      stroke={P.line}
      strokeWidth="9"
      strokeLinecap="round"
    />
    <path
      d="M14 66A46 46 0 0 1 36 28"
      fill="none"
      stroke={P.warn}
      strokeWidth="9"
      strokeLinecap="round"
    />
    <path
      d="M60 20A46 46 0 0 1 106 66"
      fill="none"
      stroke={P.accent}
      strokeWidth="9"
      strokeLinecap="round"
    />
    <path
      d="M60 66l26-30"
      stroke={P.ink}
      strokeWidth="4"
      strokeLinecap="round"
    />
    <circle cx="60" cy="66" r="8" fill={P.ink} />
    <circle cx="60" cy="66" r="3" fill={P.surface} />
    <g
      transform="rotate(-35 34 64)"
      fill={P.surface}
      stroke={P.accent}
      strokeWidth="2"
    >
      <rect x="28" y="52" width="12" height="32" rx="6" />
      <path d="M26 52v-8h5v4h6v-4h5v8z" />
      <circle cx="34" cy="76" r="2" fill={P.accent} stroke="none" />
    </g>
  </Frame>
);

// Test and hand over: clipboard report and a maintenance calendar
export const AorHandoverArt = () => (
  <Frame>
    <rect
      x="12"
      y="12"
      width="48"
      height="66"
      rx="7"
      fill={P.surface}
      stroke={P.line}
      strokeWidth="1.5"
    />
    <rect
      x="26"
      y="7"
      width="20"
      height="10"
      rx="4"
      fill={P.soft}
      stroke={P.accent}
      strokeWidth="1.8"
    />
    <path
      d="M20 32h5l3 4 7-9"
      fill="none"
      stroke={P.accent}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <rect x="38" y="30" width="16" height="4" rx="2" fill={P.line} />
    <path
      d="M20 48h5l3 4 7-9"
      fill="none"
      stroke={P.accent}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <rect x="38" y="46" width="12" height="4" rx="2" fill={P.line} />
    <rect
      x="20"
      y="62"
      width="34"
      height="5"
      rx="2.5"
      fill={P.accent}
      opacity="0.5"
    />
    <rect
      x="66"
      y="26"
      width="46"
      height="50"
      rx="7"
      fill={P.soft}
      stroke={P.accent}
      strokeWidth="1.8"
    />
    <rect x="66" y="26" width="46" height="13" rx="7" fill={P.accent} />
    <path
      d="M78 21v10M100 21v10"
      stroke={P.ink}
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    {[0, 1, 2].map((row) =>
      [0, 1, 2].map((col) => (
        <rect
          key={`${row}-${col}`}
          x={72 + col * 13}
          y={46 + row * 10}
          width="9"
          height="6"
          rx="2"
          fill={row === 1 && col === 1 ? P.accent : P.line}
        />
      )),
    )}
  </Frame>
);
