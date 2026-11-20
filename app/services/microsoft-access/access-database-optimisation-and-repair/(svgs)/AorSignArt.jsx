// /app/services/microsoft-access/access-database-optimisation-and-repair/(svgs)/AorSignArt.jsx
// Spot art for the six warning signs in the intro. Drawn for the light tile ($light-bg).
// Hex values come from AorPalette.js (light): $white, $accent-light, $text-primary,
// $text-muted, $line-strong, $accent, $replace-x.
import React from "react";
import { PALETTES } from "./AorPalette";

const P = PALETTES.light;

const Frame = ({ children }) => (
  <svg
    viewBox="0 0 96 72"
    aria-hidden="true"
    focusable="false"
    style={{ width: "100%", height: "auto", display: "block" }}
  >
    {children}
  </svg>
);

// Forms taking minutes to open
const SlowForm = () => (
  <Frame>
    <rect
      x="8"
      y="8"
      width="80"
      height="56"
      rx="7"
      fill={P.surface}
      stroke={P.line}
    />
    <path d="M8 21h80" stroke={P.line} />
    <circle cx="16" cy="14.5" r="2.2" fill={P.line} />
    <circle cx="23" cy="14.5" r="2.2" fill={P.line} />
    <circle
      cx="48"
      cy="42"
      r="15"
      fill={P.soft}
      stroke={P.accent}
      strokeWidth="2"
    />
    <path
      d="M48 42V31M48 42l8 5"
      stroke={P.ink}
      strokeWidth="2.2"
      strokeLinecap="round"
    />
    <path
      d="M48 27a15 15 0 0 1 14 9"
      fill="none"
      stroke={P.warn}
      strokeWidth="3"
      strokeLinecap="round"
    />
    <rect x="16" y="52" width="14" height="4" rx="2" fill={P.line} />
    <rect x="66" y="52" width="14" height="4" rx="2" fill={P.line} />
  </Frame>
);

// Queries timing out
const SlowQuery = () => (
  <Frame>
    <rect x="8" y="10" width="62" height="9" rx="4.5" fill={P.accent} />
    <rect
      x="8"
      y="26"
      width="40"
      height="9"
      rx="4.5"
      fill={P.accent}
      opacity="0.6"
    />
    <rect x="8" y="42" width="78" height="9" rx="4.5" fill={P.warn} />
    <path d="M80 38v17" stroke={P.ink} strokeWidth="2" strokeDasharray="2 2" />
    <rect x="8" y="58" width="30" height="5" rx="2.5" fill={P.line} />
    <path
      d="M58 24h14l-7 9zM58 44h14l-7-9z"
      fill={P.soft}
      stroke={P.ink}
      strokeWidth="1.4"
      strokeLinejoin="round"
    />
    <path
      d="M60 26h10M63 31h4"
      stroke={P.accent}
      strokeWidth="1.6"
      strokeLinecap="round"
    />
  </Frame>
);

// Crashes and freezes
const Crash = () => (
  <Frame>
    <rect
      x="10"
      y="8"
      width="76"
      height="54"
      rx="7"
      fill={P.surface}
      stroke={P.line}
    />
    <path d="M10 21h76" stroke={P.line} />
    <rect x="18" y="28" width="34" height="5" rx="2.5" fill={P.line} />
    <rect x="18" y="38" width="24" height="5" rx="2.5" fill={P.line} />
    <path
      d="M60 20l-11 17h9l-6 18 17-23h-10l7-12z"
      fill={P.warn}
      stroke={P.surface}
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
    <path d="M18 52l6-3v8z" fill={P.ink} />
  </Frame>
);

// Cryptic error messages
const ErrorBox = () => (
  <Frame>
    <rect
      x="12"
      y="8"
      width="72"
      height="56"
      rx="8"
      fill={P.surface}
      stroke={P.line}
    />
    <path
      d="M30 20l11 19H19z"
      fill={P.soft}
      stroke={P.warn}
      strokeWidth="2.2"
      strokeLinejoin="round"
    />
    <path
      d="M30 26v7"
      stroke={P.warn}
      strokeWidth="2.2"
      strokeLinecap="round"
    />
    <circle cx="30" cy="36" r="1.3" fill={P.warn} />
    <rect
      x="50"
      y="20"
      width="26"
      height="4"
      rx="2"
      fill={P.ink}
      opacity="0.7"
    />
    <rect x="50" y="29" width="20" height="4" rx="2" fill={P.line} />
    <rect x="50" y="38" width="24" height="4" rx="2" fill={P.line} />
    <rect x="52" y="50" width="24" height="9" rx="4.5" fill={P.accent} />
  </Frame>
);

// File size growing disproportionately
const Growth = () => (
  <Frame>
    <path
      d="M14 10h26l10 10v38a3 3 0 0 1-3 3H14a3 3 0 0 1-3-3V13a3 3 0 0 1 3-3z"
      fill={P.surface}
      stroke={P.line}
      strokeWidth="1.5"
    />
    <path
      d="M40 10v10h10"
      fill={P.soft}
      stroke={P.line}
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
    <rect x="19" y="30" width="24" height="5" rx="2.5" fill={P.accent} />
    <rect
      x="19"
      y="40"
      width="16"
      height="5"
      rx="2.5"
      fill={P.accent}
      opacity="0.55"
    />
    <rect x="19" y="50" width="20" height="5" rx="2.5" fill={P.line} />
    <path d="M60 58V30" stroke={P.warn} strokeWidth="3" strokeLinecap="round" />
    <path
      d="M52 38l8-10 8 10"
      fill="none"
      stroke={P.warn}
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M74 58V44M82 58V36"
      stroke={P.warn}
      strokeWidth="3"
      strokeLinecap="round"
      opacity="0.45"
    />
  </Frame>
);

// Slow for several people at once
const MultiUser = () => (
  <Frame>
    <ellipse
      cx="48"
      cy="52"
      rx="16"
      ry="5"
      fill={P.soft}
      stroke={P.accent}
      strokeWidth="1.5"
    />
    <path d="M32 52V40M64 52V40" stroke={P.accent} strokeWidth="1.5" />
    <ellipse
      cx="48"
      cy="40"
      rx="16"
      ry="5"
      fill={P.surface}
      stroke={P.accent}
      strokeWidth="1.5"
    />
    <path
      d="M18 24l22 12M48 20v14M78 24L56 36"
      stroke={P.line}
      strokeWidth="2"
      strokeDasharray="3 3"
    />
    {[18, 48, 78].map((x) => (
      <g key={x}>
        <circle cx={x} cy="12" r="5" fill={P.ink} opacity="0.75" />
        <path d={`M${x - 9} 24a9 8 0 0 1 18 0z`} fill={P.ink} opacity="0.75" />
      </g>
    ))}
    <circle cx="48" cy="62" r="5" fill={P.warn} />
    <path
      d="M48 59v3l2 1.5"
      stroke={P.surface}
      strokeWidth="1.3"
      strokeLinecap="round"
      fill="none"
    />
  </Frame>
);

export const AOR_SIGN_ART = {
  form: SlowForm,
  query: SlowQuery,
  crash: Crash,
  error: ErrorBox,
  growth: Growth,
  users: MultiUser,
};
