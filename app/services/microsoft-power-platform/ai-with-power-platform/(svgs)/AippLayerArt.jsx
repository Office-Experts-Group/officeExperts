// /app/services/microsoft-power-platform/ai-with-power-platform/(svgs)/AippLayerArt.jsx
// Decorative spot illustrations for the three "layers" tiles, each drawn for
// the tile it sits on: agent (accent tile), flow (dark tile), data (light tile).
// Colours (hex, with matching globals.scss tokens):
//   #046999 $accent · #034e72 $accent-dark · #6fc3e8 $accent-on-dark
//   #18232e $dark-surface · #1a2a3a $dark-mid · #e8f4fa $accent-light
//   #0d1b2a $text-primary · #ffffff $white

export const AippAgentArt = () => (
  <svg viewBox="0 0 280 190" aria-hidden="true" focusable="false">
    {/* chat window */}
    <rect
      x="10"
      y="10"
      width="260"
      height="170"
      rx="16"
      fill="#034e72"
      stroke="#ffffff"
      strokeOpacity="0.4"
    />
    <path d="M10 40h260" stroke="#ffffff" strokeOpacity="0.25" />
    <circle cx="28" cy="25" r="4" fill="#ffffff" fillOpacity="0.6" />
    <circle cx="42" cy="25" r="4" fill="#ffffff" fillOpacity="0.4" />
    <circle cx="56" cy="25" r="4" fill="#ffffff" fillOpacity="0.25" />

    {/* staff question */}
    <rect x="96" y="54" width="158" height="30" rx="15" fill="#ffffff" />
    <rect
      x="112"
      y="66"
      width="90"
      height="6"
      rx="3"
      fill="#046999"
      fillOpacity="0.55"
    />
    <rect
      x="208"
      y="66"
      width="30"
      height="6"
      rx="3"
      fill="#046999"
      fillOpacity="0.3"
    />

    {/* agent answer */}
    <circle cx="34" cy="116" r="14" fill="#ffffff" />
    <path
      d="M34 106C34.7 112 38 115.3 44 116C38 116.7 34.7 120 34 126C33.3 120 30 116.7 24 116C30 115.3 33.3 112 34 106Z"
      fill="#046999"
    />
    <rect
      x="56"
      y="98"
      width="196"
      height="48"
      rx="14"
      fill="#ffffff"
      fillOpacity="0.14"
      stroke="#ffffff"
      strokeOpacity="0.5"
    />
    <rect
      x="68"
      y="108"
      width="150"
      height="6"
      rx="3"
      fill="#ffffff"
      fillOpacity="0.85"
    />
    <rect
      x="68"
      y="120"
      width="110"
      height="6"
      rx="3"
      fill="#ffffff"
      fillOpacity="0.55"
    />

    {/* source chip */}
    <rect x="68" y="152" width="92" height="20" rx="10" fill="#ffffff" />
    <path
      d="M78 157h8l3 3v8h-11z"
      fill="none"
      stroke="#046999"
      strokeWidth="1.4"
      strokeLinejoin="round"
    />
    <rect
      x="94"
      y="160"
      width="56"
      height="5"
      rx="2.5"
      fill="#046999"
      fillOpacity="0.6"
    />
  </svg>
);

export const AippFlowArt = () => (
  <svg viewBox="0 0 280 150" aria-hidden="true" focusable="false">
    {/* trigger */}
    <rect
      x="8"
      y="54"
      width="52"
      height="42"
      rx="10"
      fill="#1a2a3a"
      stroke="#6fc3e8"
    />
    <path
      d="M20 66h28M20 75h20"
      stroke="#6fc3e8"
      strokeWidth="2.4"
      strokeLinecap="round"
    />
    <path
      d="M20 85h12"
      stroke="#ffffff"
      strokeOpacity="0.4"
      strokeWidth="2.4"
      strokeLinecap="round"
    />

    <path
      d="M60 75h26"
      stroke="#6fc3e8"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M80 70l7 5l-7 5"
      fill="none"
      stroke="#6fc3e8"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    {/* AI step */}
    <circle
      cx="116"
      cy="75"
      r="26"
      fill="#046999"
      stroke="#6fc3e8"
      strokeWidth="2"
    />
    <path
      d="M116 58C117 69 122 73.5 133 75C122 76.5 117 81 116 92C115 81 110 76.5 99 75C110 73.5 115 69 116 58Z"
      fill="#ffffff"
    />

    {/* branch */}
    <path
      d="M142 75C160 75 160 38 182 38M142 75h40M142 75C160 75 160 112 182 112"
      fill="none"
      stroke="#6fc3e8"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <rect
      x="184"
      y="22"
      width="88"
      height="32"
      rx="9"
      fill="#1a2a3a"
      stroke="#6fc3e8"
    />
    <path
      d="M198 38l5 5l10-11"
      fill="none"
      stroke="#6fc3e8"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <rect
      x="222"
      y="35"
      width="38"
      height="6"
      rx="3"
      fill="#ffffff"
      fillOpacity="0.5"
    />
    <rect
      x="184"
      y="59"
      width="88"
      height="32"
      rx="9"
      fill="#1a2a3a"
      stroke="#6fc3e8"
    />
    <rect
      x="196"
      y="72"
      width="30"
      height="6"
      rx="3"
      fill="#ffffff"
      fillOpacity="0.5"
    />
    <rect x="232" y="72" width="28" height="6" rx="3" fill="#046999" />
    <rect
      x="184"
      y="96"
      width="88"
      height="32"
      rx="9"
      fill="#1a2a3a"
      stroke="#6fc3e8"
      strokeDasharray="4 3"
    />
    <circle
      cx="204"
      cy="112"
      r="8"
      fill="none"
      stroke="#6fc3e8"
      strokeWidth="2"
    />
    <path
      d="M204 107v5l3 2"
      fill="none"
      stroke="#6fc3e8"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <rect
      x="220"
      y="109"
      width="40"
      height="6"
      rx="3"
      fill="#ffffff"
      fillOpacity="0.5"
    />
  </svg>
);

export const AippDataArt = () => (
  <svg viewBox="0 0 280 150" aria-hidden="true" focusable="false">
    {/* table with rows, one row locked */}
    <rect
      x="12"
      y="14"
      width="170"
      height="122"
      rx="12"
      fill="#ffffff"
      stroke="#046999"
      strokeWidth="1.6"
    />
    <rect x="12" y="14" width="170" height="26" rx="12" fill="#e8f4fa" />
    <path d="M12 40h170" stroke="#046999" strokeOpacity="0.4" />
    <rect x="26" y="24" width="40" height="6" rx="3" fill="#046999" />
    <rect
      x="86"
      y="24"
      width="30"
      height="6"
      rx="3"
      fill="#046999"
      fillOpacity="0.5"
    />
    {[56, 78, 100].map((y, i) => (
      <g key={y}>
        <rect
          x="26"
          y={y}
          width="44"
          height="6"
          rx="3"
          fill="#0d1b2a"
          fillOpacity="0.5"
        />
        <rect
          x="86"
          y={y}
          width={i === 1 ? 20 : 56}
          height="6"
          rx="3"
          fill="#0d1b2a"
          fillOpacity="0.3"
        />
      </g>
    ))}
    {/* locked row */}
    <rect
      x="20"
      y="70"
      width="154"
      height="20"
      rx="6"
      fill="#046999"
      fillOpacity="0.12"
    />
    <rect x="144" y="74" width="12" height="10" rx="2" fill="#046999" />
    <path
      d="M147 74v-3a3 3 0 0 1 6 0v3"
      fill="none"
      stroke="#046999"
      strokeWidth="2"
      strokeLinecap="round"
    />

    {/* audit log */}
    <rect
      x="198"
      y="30"
      width="70"
      height="90"
      rx="10"
      fill="#e8f4fa"
      stroke="#046999"
      strokeWidth="1.6"
    />
    {[44, 62, 80, 98].map((y) => (
      <g key={y}>
        <circle cx="212" cy={y + 3} r="3.5" fill="#046999" />
        <rect
          x="222"
          y={y}
          width="34"
          height="6"
          rx="3"
          fill="#0d1b2a"
          fillOpacity="0.4"
        />
      </g>
    ))}

    {/* shield over both */}
    <path
      d="M184 96l20 7v14c0 12-8 19-20 24c-12-5-20-12-20-24v-14z"
      fill="#046999"
      stroke="#ffffff"
      strokeWidth="2.4"
    />
    <path
      d="M175 120l6 6l11-12"
      fill="none"
      stroke="#ffffff"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
