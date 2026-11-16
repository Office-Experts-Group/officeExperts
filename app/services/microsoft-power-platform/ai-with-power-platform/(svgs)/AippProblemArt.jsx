// /app/services/microsoft-power-platform/ai-with-power-platform/(svgs)/AippProblemArt.jsx
// Decorative spot illustrations for the three "gap" tiles, each drawn for the
// tile it sits on: disconnected (dark tile), security (light tile) and
// expertise (accent tile).
// Colours (hex, with matching globals.scss tokens):
//   #18232e $dark-surface · #1a2a3a $dark-mid · #6fc3e8 $accent-on-dark
//   #046999 $accent · #e8f4fa $accent-light · #0d1b2a $text-primary
//   #ffffff $white · #c0392b $replace-x

export const AippDisconnectedArt = () => (
  <svg viewBox="0 0 240 160" aria-hidden="true" focusable="false">
    {/* pilot demo window */}
    <rect
      x="12"
      y="38"
      width="84"
      height="84"
      rx="12"
      fill="#1a2a3a"
      stroke="#6fc3e8"
    />
    <path d="M12 58h84" stroke="#6fc3e8" strokeOpacity="0.5" />
    <circle cx="24" cy="48" r="3" fill="#6fc3e8" />
    <circle cx="35" cy="48" r="3" fill="#6fc3e8" fillOpacity="0.6" />
    <path
      d="M54 70C55 80 60 85 69 86C60 87 55 92 54 102C53 92 48 87 39 86C48 85 53 80 54 70Z"
      fill="#6fc3e8"
    />
    <rect
      x="30"
      y="108"
      width="48"
      height="5"
      rx="2.5"
      fill="#ffffff"
      fillOpacity="0.25"
    />

    {/* broken connections */}
    <path
      d="M96 64h22M96 80h22M96 96h22"
      stroke="#6fc3e8"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M126 64h8M126 80h8M126 96h8"
      stroke="#6fc3e8"
      strokeOpacity="0.4"
      strokeWidth="2"
      strokeLinecap="round"
      strokeDasharray="2 4"
    />

    {/* business systems out of reach */}
    <rect
      x="148"
      y="30"
      width="80"
      height="28"
      rx="8"
      fill="none"
      stroke="#ffffff"
      strokeOpacity="0.35"
      strokeDasharray="4 3"
    />
    <rect
      x="148"
      y="66"
      width="80"
      height="28"
      rx="8"
      fill="none"
      stroke="#ffffff"
      strokeOpacity="0.35"
      strokeDasharray="4 3"
    />
    <rect
      x="148"
      y="102"
      width="80"
      height="28"
      rx="8"
      fill="none"
      stroke="#ffffff"
      strokeOpacity="0.35"
      strokeDasharray="4 3"
    />
    <rect
      x="158"
      y="41"
      width="36"
      height="6"
      rx="3"
      fill="#ffffff"
      fillOpacity="0.3"
    />
    <rect
      x="158"
      y="77"
      width="48"
      height="6"
      rx="3"
      fill="#ffffff"
      fillOpacity="0.3"
    />
    <rect
      x="158"
      y="113"
      width="30"
      height="6"
      rx="3"
      fill="#ffffff"
      fillOpacity="0.3"
    />
  </svg>
);

export const AippSecurityArt = () => (
  <svg viewBox="0 0 240 160" aria-hidden="true" focusable="false">
    {/* data store */}
    <path
      d="M14 40v40a28 9 0 0 0 56 0V40"
      fill="#e8f4fa"
      stroke="#046999"
      strokeWidth="1.6"
    />
    <ellipse
      cx="42"
      cy="40"
      rx="28"
      ry="9"
      fill="#ffffff"
      stroke="#046999"
      strokeWidth="1.6"
    />
    <path
      d="M14 60a28 9 0 0 0 56 0"
      fill="none"
      stroke="#046999"
      strokeOpacity="0.5"
      strokeWidth="1.4"
    />

    {/* path to a question mark */}
    <path
      d="M74 66h40"
      stroke="#046999"
      strokeWidth="2"
      strokeLinecap="round"
      strokeDasharray="3 5"
    />

    {/* shield with question mark */}
    <path
      d="M150 22l36 13v28c0 24-15 38-36 46c-21-8-36-22-36-46V35z"
      fill="#046999"
    />
    <path
      d="M138 58c0-7 5-12 12-12s12 4 12 10c0 8-12 8-12 17"
      fill="none"
      stroke="#ffffff"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="150" cy="86" r="3.5" fill="#ffffff" />

    {/* clouds of unknown destinations */}
    <path
      d="M196 118h22a9 9 0 0 0 0-18c-1-8-14-12-20-4c-8-2-14 3-14 10c-7 0-9 12 12 12z"
      fill="#ffffff"
      stroke="#046999"
      strokeOpacity="0.5"
      strokeWidth="1.4"
      strokeDasharray="3 3"
    />
    <path
      transform="translate(24 0)"
      d="M190 46h14a6 6 0 0 0 0-12c-1-5-9-8-13-3c-5-1-9 2-9 7c-5 0-6 8 8 8z"
      fill="#ffffff"
      stroke="#046999"
      strokeOpacity="0.5"
      strokeWidth="1.4"
      strokeDasharray="3 3"
    />

    {/* third-party app with open lock */}
    <rect
      x="22"
      y="104"
      width="44"
      height="34"
      rx="8"
      fill="#ffffff"
      stroke="#c0392b"
      strokeWidth="1.6"
    />
    <rect x="37" y="116" width="14" height="11" rx="2" fill="#c0392b" />
    <path
      d="M40 116v-4a4 4 0 0 1 8 0"
      fill="none"
      stroke="#c0392b"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

export const AippExpertiseArt = () => (
  <svg viewBox="0 0 240 160" aria-hidden="true" focusable="false">
    {/* person */}
    <circle
      cx="56"
      cy="52"
      r="20"
      fill="none"
      stroke="#ffffff"
      strokeWidth="2.4"
    />
    <path
      d="M18 128c0-22 17-38 38-38s38 16 38 38"
      fill="none"
      stroke="#ffffff"
      strokeWidth="2.4"
      strokeLinecap="round"
    />
    <path
      d="M50 50c2 4 8 4 12 0"
      fill="none"
      stroke="#ffffff"
      strokeWidth="2"
      strokeLinecap="round"
    />

    {/* settings panel with toggles left off */}
    <rect
      x="116"
      y="26"
      width="108"
      height="100"
      rx="12"
      fill="#ffffff"
      fillOpacity="0.1"
      stroke="#ffffff"
      strokeWidth="1.6"
    />
    {[44, 70, 96].map((y, i) => (
      <g key={y}>
        <rect
          x="128"
          y={y}
          width="40"
          height="6"
          rx="3"
          fill="#ffffff"
          fillOpacity="0.6"
        />
        <rect
          x="182"
          y={y - 5}
          width="32"
          height="16"
          rx="8"
          fill="none"
          stroke="#ffffff"
          strokeWidth="1.6"
        />
        <circle cx={i === 1 ? 205 : 190} cy={y + 3} r="5" fill="#ffffff" />
      </g>
    ))}

    {/* question mark floating above */}
    <circle cx="96" cy="26" r="13" fill="#ffffff" />
    <path
      d="M90.5 24c0-3.4 2.4-5.4 5.5-5.4s5.5 2 5.5 4.8c0 3.8-5.5 3.6-5.5 8"
      fill="none"
      stroke="#046999"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="96" cy="35" r="1.6" fill="#046999" />
  </svg>
);
