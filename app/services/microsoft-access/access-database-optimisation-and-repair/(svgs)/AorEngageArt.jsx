// /app/services/microsoft-access/access-database-optimisation-and-repair/(svgs)/AorEngageArt.jsx
// Spot art for the "ways to work with us" section.
// AorEscalationArt is drawn for the solid $accent tile (palette "accent");
// the three engagement icons are drawn for light tiles (palette "light").
// Hex values come from AorPalette.js.
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

// A small problem grows into a big one the longer it is left
export const AorEscalationArt = () => {
  const P = PALETTES.accent;
  return (
    <Frame viewBox="0 0 280 150">
      <path
        d="M16 20v110h256"
        fill="none"
        stroke={P.line}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M16 90h256M16 50h256"
        stroke={P.line}
        strokeWidth="1"
        strokeDasharray="3 6"
        opacity="0.6"
      />
      <path
        d="M16 126C80 124 128 116 170 92S238 32 266 18V126z"
        fill={P.ink}
        opacity="0.12"
      />
      <path
        d="M16 126C80 124 128 116 170 92S238 32 266 18"
        fill="none"
        stroke={P.ink}
        strokeWidth="4"
        strokeLinecap="round"
      />
      {[
        [64, 124],
        [128, 112],
        [190, 80],
      ].map(([x, y]) => (
        <circle
          key={x}
          cx={x}
          cy={y}
          r="6"
          fill={P.surface}
          stroke={P.ink}
          strokeWidth="3"
        />
      ))}
      <path
        d="M240 4l17 28h-34z"
        fill={P.surface}
        stroke={P.ink}
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <path
        d="M240 13v9"
        stroke={P.ink}
        strokeWidth="3"
        strokeLinecap="round"
      />
      <circle cx="240" cy="27" r="1.8" fill={P.ink} />
      <rect
        x="28"
        y="30"
        width="46"
        height="8"
        rx="4"
        fill={P.ink}
        opacity="0.5"
      />
      <rect
        x="28"
        y="44"
        width="30"
        height="8"
        rx="4"
        fill={P.ink}
        opacity="0.3"
      />
    </Frame>
  );
};

// Emergency repair and recovery: a damaged file and a lifebuoy
export const AorRescueArt = () => {
  const P = PALETTES.light;
  return (
    <Frame viewBox="0 0 100 80">
      <path
        d="M12 8h24l10 10v50a3 3 0 0 1-3 3H12a3 3 0 0 1-3-3V11a3 3 0 0 1 3-3z"
        fill={P.surface}
        stroke={P.line}
        strokeWidth="1.5"
      />
      <path
        d="M36 8v10h10"
        fill={P.soft}
        stroke={P.line}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M8 36l10 5-7 5 12 6"
        fill="none"
        stroke={P.warn}
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect x="16" y="22" width="14" height="4" rx="2" fill={P.line} />
      <circle
        cx="64"
        cy="46"
        r="22"
        fill={P.soft}
        stroke={P.accent}
        strokeWidth="9"
      />
      <circle cx="64" cy="46" r="10" fill={P.surface} />
      <path
        d="M48 30l10 10M80 30L70 40M48 62l10-10M80 62L70 52"
        stroke={P.surface}
        strokeWidth="9"
      />
      <circle
        cx="64"
        cy="46"
        r="26.5"
        fill="none"
        stroke={P.accent}
        strokeWidth="1.5"
      />
      <circle
        cx="64"
        cy="46"
        r="17.5"
        fill="none"
        stroke={P.accent}
        strokeWidth="1.5"
      />
    </Frame>
  );
};

// Health check and tune-up: gauge with a wrench
export const AorTuneUpArt = () => {
  const P = PALETTES.light;
  return (
    <Frame viewBox="0 0 100 80">
      <path
        d="M12 56A38 38 0 0 1 88 56"
        fill="none"
        stroke={P.line}
        strokeWidth="9"
        strokeLinecap="round"
      />
      <path
        d="M12 56A38 38 0 0 1 30 24"
        fill="none"
        stroke={P.warn}
        strokeWidth="9"
        strokeLinecap="round"
      />
      <path
        d="M50 18A38 38 0 0 1 88 56"
        fill="none"
        stroke={P.accent}
        strokeWidth="9"
        strokeLinecap="round"
      />
      <path
        d="M50 56l22-24"
        stroke={P.ink}
        strokeWidth="4"
        strokeLinecap="round"
      />
      <circle cx="50" cy="56" r="7" fill={P.ink} />
      <circle cx="50" cy="56" r="2.5" fill={P.surface} />
      <rect x="30" y="62" width="40" height="8" rx="4" fill={P.soft} />
      <rect x="30" y="62" width="30" height="8" rx="4" fill={P.accent} />
    </Frame>
  );
};

// Ongoing care: calendar, repeat loop and a shield
export const AorCareArt = () => {
  const P = PALETTES.light;
  return (
    <Frame viewBox="0 0 100 80">
      <rect
        x="8"
        y="14"
        width="56"
        height="58"
        rx="8"
        fill={P.surface}
        stroke={P.line}
        strokeWidth="1.5"
      />
      <rect x="8" y="14" width="56" height="16" rx="8" fill={P.accent} />
      <path
        d="M22 9v10M50 9v10"
        stroke={P.ink}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      {[0, 1, 2].map((row) =>
        [0, 1, 2].map((col) => (
          <rect
            key={`${row}-${col}`}
            x={16 + col * 16}
            y={37 + row * 11}
            width="11"
            height="7"
            rx="2"
            fill={row === 0 && col === 2 ? P.accent : P.line}
          />
        )),
      )}
      <circle
        cx="72"
        cy="52"
        r="17"
        fill={P.soft}
        stroke={P.accent}
        strokeWidth="2"
      />
      <path
        d="M72 42l9 3.500v6.500c0 5.5-4 9-9 11-5-2-9-5.5-9-11v-6.500z"
        fill={P.surface}
        stroke={P.accent}
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M68 52l3 3 6-7"
        fill="none"
        stroke={P.accent}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Frame>
  );
};
