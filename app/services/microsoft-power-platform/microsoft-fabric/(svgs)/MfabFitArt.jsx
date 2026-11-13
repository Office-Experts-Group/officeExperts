// /app/services/microsoft-power-platform/microsoft-fabric/(svgs)/MfabFitArt.jsx
// Spot illustrations for the "is Fabric right for you" signs, drawn for the
// dark section background. Decorative.
// Colours (tokens): #18232e $dark-surface, #111820 $dark-bg, #6fc3e8
// $accent-on-dark, #046999 $accent, #c0392b $replace-x, #ffffff $white.

const Frame = ({ children }) => (
  <svg viewBox="0 0 72 72" aria-hidden="true" focusable="false">
    <rect
      width="72"
      height="72"
      rx="18"
      fill="#18232e"
      stroke="#ffffff"
      strokeOpacity="0.08"
    />
    {children}
  </svg>
);

export const MfabFitArt = ({ type }) => {
  switch (type) {
    case "systems":
      // Three systems hand-stitched into one report
      return (
        <Frame>
          <rect x="10" y="12" width="18" height="12" rx="3" fill="#046999" />
          <rect x="10" y="30" width="18" height="12" rx="3" fill="#6fc3e8" />
          <rect x="10" y="48" width="18" height="12" rx="3" fill="#046999" />
          <path
            d="M28 18c10 0 8 16 16 18M28 36h16M28 54c10 0 8-16 16-18"
            fill="none"
            stroke="#ffffff"
            strokeOpacity="0.45"
            strokeWidth="1.5"
            strokeDasharray="3 3"
          />
          <rect x="44" y="24" width="18" height="24" rx="3" fill="#ffffff" />
          <path
            d="M48 31h10M48 36h8M48 41h10"
            stroke="#046999"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </Frame>
      );
    case "excel":
      // Linked workbooks with a broken link
      return (
        <Frame>
          <rect x="10" y="18" width="22" height="26" rx="3" fill="#ffffff" />
          <path
            d="M10 25h22M17 25v19M24 25v19M10 32h22M10 38h22"
            stroke="#046999"
            strokeOpacity="0.5"
          />
          <rect x="40" y="30" width="22" height="26" rx="3" fill="#ffffff" />
          <path
            d="M40 37h22M47 37v19M54 37v19M40 44h22M40 50h22"
            stroke="#046999"
            strokeOpacity="0.5"
          />
          <path
            d="M32 30h3M38 40h2"
            stroke="#6fc3e8"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M34 36l4-4M36 38l3-3"
            stroke="#c0392b"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </Frame>
      );
    case "realtime":
      // Stopwatch with a live pulse
      return (
        <Frame>
          <circle
            cx="36"
            cy="40"
            r="18"
            fill="none"
            stroke="#ffffff"
            strokeOpacity="0.85"
            strokeWidth="2.2"
          />
          <path
            d="M32 18h8M36 18v4M50 26l3-3"
            stroke="#ffffff"
            strokeOpacity="0.85"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          <path
            d="M24 41h6l3-7 5 13 3-6h7"
            fill="none"
            stroke="#6fc3e8"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <circle cx="52" cy="54" r="4" fill="#6fc3e8" />
        </Frame>
      );
    default:
      // Older server moving up into the lake
      return (
        <Frame>
          <rect
            x="10"
            y="34"
            width="22"
            height="26"
            rx="3"
            fill="none"
            stroke="#ffffff"
            strokeOpacity="0.55"
            strokeWidth="1.6"
          />
          <path
            d="M14 42h14M14 50h14"
            stroke="#ffffff"
            strokeOpacity="0.45"
            strokeWidth="1.6"
          />
          <circle cx="26" cy="42" r="1.4" fill="#6fc3e8" />
          <path
            d="M30 30c4-10 10-14 16-14"
            fill="none"
            stroke="#6fc3e8"
            strokeWidth="1.8"
            strokeDasharray="3 3"
          />
          <path
            d="M42 12l5 4-5 4"
            fill="none"
            stroke="#6fc3e8"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <ellipse cx="52" cy="40" rx="12" ry="8" fill="#046999" />
          <path
            d="M43 39c3-2 6-2 9 0s6 2 9 0"
            fill="none"
            stroke="#6fc3e8"
            strokeWidth="1.4"
          />
        </Frame>
      );
  }
};
