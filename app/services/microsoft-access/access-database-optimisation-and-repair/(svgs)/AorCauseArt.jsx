// /app/services/microsoft-access/access-database-optimisation-and-repair/(svgs)/AorCauseArt.jsx
// Tab icons for the causes picker. Drawn for dark tiles, and they stay readable on the
// solid $accent tile used for the selected tab.
// Hex values come from AorPalette.js (dark): $dark-surface, $dark-mid, $white, $white-65,
// $white-18, $accent-on-dark, $replace-x.
import React from "react";
import { PALETTES } from "./AorPalette";

const P = PALETTES.dark;

const Frame = ({ children }) => (
  <svg
    viewBox="0 0 48 48"
    aria-hidden="true"
    focusable="false"
    style={{ width: "100%", height: "auto", display: "block" }}
  >
    {children}
  </svg>
);

const FileBloat = () => (
  <Frame>
    <ellipse
      cx="22"
      cy="34"
      rx="15"
      ry="5"
      fill={P.soft}
      stroke={P.accent}
      strokeWidth="1.6"
    />
    <path d="M7 22v12M37 22v12" stroke={P.accent} strokeWidth="1.6" />
    <ellipse
      cx="22"
      cy="22"
      rx="15"
      ry="5"
      fill={P.surface}
      stroke={P.accent}
      strokeWidth="1.6"
    />
    <path d="M7 14v8M37 14v8" stroke={P.accent} strokeWidth="1.6" />
    <ellipse
      cx="22"
      cy="14"
      rx="15"
      ry="5"
      fill={P.soft}
      stroke={P.accent}
      strokeWidth="1.6"
    />
    <path
      d="M42 30V12M37 17l5-6 5 6"
      fill="none"
      stroke={P.warn}
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <rect
      x="14"
      y="30"
      width="6"
      height="3"
      rx="1.5"
      fill={P.ink}
      opacity="0.7"
    />
    <rect x="24" y="19" width="8" height="3" rx="1.5" fill={P.mute} />
  </Frame>
);

const TableKey = () => (
  <Frame>
    <rect
      x="5"
      y="9"
      width="30"
      height="30"
      rx="5"
      fill={P.surface}
      stroke={P.line}
      strokeWidth="1.5"
    />
    <rect x="5" y="9" width="30" height="8" rx="5" fill={P.soft} />
    <path d="M5 25h30M5 32h30M16 17v22" stroke={P.line} />
    <circle
      cx="36"
      cy="30"
      r="5"
      fill={P.surface}
      stroke={P.accent}
      strokeWidth="2"
    />
    <path
      d="M40 34l6 6M43 37l3-3M45 39l2-2"
      fill="none"
      stroke={P.accent}
      strokeWidth="2"
      strokeLinecap="round"
    />
    <rect x="20" y="20" width="10" height="3" rx="1.5" fill={P.accent} />
  </Frame>
);

const MemoryChip = () => (
  <Frame>
    <rect
      x="4"
      y="14"
      width="40"
      height="18"
      rx="3"
      fill={P.soft}
      stroke={P.accent}
      strokeWidth="1.6"
    />
    {[9, 18, 27, 36].map((x) => (
      <rect
        key={x}
        x={x}
        y="18"
        width="6"
        height="8"
        rx="1.5"
        fill={P.surface}
        stroke={P.line}
      />
    ))}
    <path
      d="M8 32v5M14 32v5M20 32v5M26 32v5M32 32v5M38 32v5"
      stroke={P.accent}
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M24 5v6M20 8h8"
      stroke={P.warn}
      strokeWidth="2.2"
      strokeLinecap="round"
    />
    <path d="M10 41h28" stroke={P.line} strokeWidth="2" strokeLinecap="round" />
    <path d="M10 41h22" stroke={P.warn} strokeWidth="2" strokeLinecap="round" />
  </Frame>
);

const FunnelQuery = () => (
  <Frame>
    <path
      d="M5 8h30L24 22v13l-8-5V22z"
      fill={P.soft}
      stroke={P.accent}
      strokeWidth="1.8"
      strokeLinejoin="round"
    />
    <path
      d="M12 13h16"
      stroke={P.ink}
      strokeWidth="2"
      strokeLinecap="round"
      opacity="0.7"
    />
    <circle
      cx="35"
      cy="33"
      r="7"
      fill={P.surface}
      stroke={P.ink}
      strokeWidth="2"
    />
    <path
      d="M40 38l5 5"
      stroke={P.ink}
      strokeWidth="2.4"
      strokeLinecap="round"
    />
    <path d="M32 33h6" stroke={P.warn} strokeWidth="2" strokeLinecap="round" />
  </Frame>
);

const CodeLoop = () => (
  <Frame>
    <rect
      x="4"
      y="8"
      width="40"
      height="32"
      rx="5"
      fill={P.surface}
      stroke={P.line}
      strokeWidth="1.5"
    />
    <path d="M4 16h40" stroke={P.line} />
    <path
      d="M15 24l-5 4 5 4M33 24l5 4-5 4"
      fill="none"
      stroke={P.accent}
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M26 22l-4 12"
      stroke={P.ink}
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M12 12h.01M17 12h.01"
      stroke={P.mute}
      strokeWidth="2.4"
      strokeLinecap="round"
    />
    <path
      d="M36 12a4 4 0 1 1-2.5 3.6"
      fill="none"
      stroke={P.warn}
      strokeWidth="1.8"
      strokeLinecap="round"
    />
  </Frame>
);

const BrokenFile = () => (
  <Frame>
    <path
      d="M10 5h19l9 9v27a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2z"
      fill={P.surface}
      stroke={P.line}
      strokeWidth="1.5"
    />
    <path
      d="M29 5v9h9"
      fill={P.soft}
      stroke={P.line}
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
    <path
      d="M6 24l9 5-6 5 11 6"
      fill="none"
      stroke={P.warn}
      strokeWidth="2.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M30 22l6 8-7 3"
      fill="none"
      stroke={P.warn}
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <rect x="14" y="14" width="10" height="3" rx="1.5" fill={P.mute} />
  </Frame>
);

export const AOR_CAUSE_ART = {
  file: FileBloat,
  design: TableKey,
  memory: MemoryChip,
  queries: FunnelQuery,
  vba: CodeLoop,
  corruption: BrokenFile,
};
