// /app/services/microsoft-power-platform/power-automate/(svgs)/PautoCapabilityArt.jsx
// One spot illustration per capability tile, each drawn for the tile it sits on.
// Decorative, so aria-hidden. Palettes:
//   FlowArt     on $accent       (#046999): white shapes, #034e72, #6fc3e8
//   AiArt       on $dark-surface (#18232e): #1a2a3a, #6fc3e8, white at low opacity
//   ApprovalArt on $white:       #e8f4fa, #046999, #0b2433, #9a9da1, #f7f8f9
//   AgentArt    on $dark-mid     (#1a2a3a): #6fc3e8, white at low opacity
//   ApiArt      on $accent-dark  (#034e72): white shapes, #6fc3e8

const frame = {
  viewBox: "0 0 240 130",
  "aria-hidden": "true",
  focusable: "false",
  xmlns: "http://www.w3.org/2000/svg",
};

export const PautoFlowArt = () => (
  <svg {...frame}>
    <g fill="none" stroke="#6fc3e8" strokeWidth="2.2" strokeLinecap="round">
      <path d="M76 65h18" />
      <path d="M146 65C160 65 160 32 176 32" />
      <path d="M146 65C160 65 160 98 176 98" />
      <path d="M45 86v18" strokeDasharray="3 5" />
    </g>
    <rect x="14" y="44" width="62" height="42" rx="10" fill="#ffffff" />
    <path d="M49 49L35 68h9l-4 15 15-21h-9z" fill="#046999" />
    <path
      d="M120 40l26 25-26 25-26-25z"
      fill="#034e72"
      stroke="#6fc3e8"
      strokeWidth="2"
    />
    <path
      d="M110 65h20M120 55v20"
      stroke="#6fc3e8"
      strokeWidth="1.6"
      strokeLinecap="round"
      opacity="0.7"
    />
    <rect x="176" y="14" width="52" height="36" rx="9" fill="#ffffff" />
    <path
      d="M190 32l6 6 12-13"
      fill="none"
      stroke="#046999"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <rect x="176" y="80" width="52" height="36" rx="9" fill="#6fc3e8" />
    <path
      d="M196 106v-9a6 6 0 1 1 12 0v9l2 3h-16z"
      fill="none"
      stroke="#034e72"
      strokeWidth="2.2"
      strokeLinejoin="round"
    />
    <circle
      cx="45"
      cy="110"
      r="10"
      fill="#034e72"
      stroke="#ffffff"
      strokeWidth="2"
    />
    <path
      d="M45 104v6l4 2"
      fill="none"
      stroke="#ffffff"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
  </svg>
);

export const PautoAiArt = () => (
  <svg {...frame}>
    <rect
      x="22"
      y="14"
      width="78"
      height="102"
      rx="8"
      fill="#1a2a3a"
      stroke="#6fc3e8"
      strokeOpacity="0.5"
    />
    <rect
      x="32"
      y="24"
      width="30"
      height="6"
      rx="3"
      fill="#ffffff"
      opacity="0.3"
    />
    <rect
      x="32"
      y="38"
      width="58"
      height="10"
      rx="3"
      fill="#6fc3e8"
      opacity="0.55"
    />
    <rect
      x="32"
      y="54"
      width="52"
      height="5"
      rx="2.5"
      fill="#ffffff"
      opacity="0.18"
    />
    <rect
      x="32"
      y="64"
      width="40"
      height="10"
      rx="3"
      fill="#6fc3e8"
      opacity="0.55"
    />
    <rect
      x="32"
      y="80"
      width="54"
      height="5"
      rx="2.5"
      fill="#ffffff"
      opacity="0.18"
    />
    <rect
      x="32"
      y="92"
      width="46"
      height="10"
      rx="3"
      fill="#6fc3e8"
      opacity="0.55"
    />
    <rect x="16" y="68" width="90" height="3" rx="1.5" fill="#6fc3e8" />
    <path
      d="M108 65h16m-5-5l5 5-5 5"
      fill="none"
      stroke="#6fc3e8"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <rect
      x="132"
      y="26"
      width="90"
      height="78"
      rx="8"
      fill="#ffffff"
      fillOpacity="0.06"
      stroke="#6fc3e8"
      strokeOpacity="0.6"
    />
    <rect
      x="132"
      y="26"
      width="90"
      height="16"
      rx="8"
      fill="#6fc3e8"
      opacity="0.25"
    />
    <path
      d="M132 58h90M132 74h90M132 90h90M162 42v62"
      stroke="#ffffff"
      strokeOpacity="0.16"
    />
    <rect
      x="140"
      y="48"
      width="14"
      height="5"
      rx="2.5"
      fill="#ffffff"
      opacity="0.45"
    />
    <rect
      x="170"
      y="48"
      width="44"
      height="5"
      rx="2.5"
      fill="#6fc3e8"
      opacity="0.8"
    />
    <rect
      x="140"
      y="64"
      width="14"
      height="5"
      rx="2.5"
      fill="#ffffff"
      opacity="0.45"
    />
    <rect
      x="170"
      y="64"
      width="34"
      height="5"
      rx="2.5"
      fill="#6fc3e8"
      opacity="0.8"
    />
    <rect
      x="140"
      y="80"
      width="14"
      height="5"
      rx="2.5"
      fill="#ffffff"
      opacity="0.45"
    />
    <rect
      x="170"
      y="80"
      width="40"
      height="5"
      rx="2.5"
      fill="#6fc3e8"
      opacity="0.8"
    />
    <path
      d="M118 12l2.2 5.8 5.8 2.2-5.8 2.2-2.2 5.8-2.2-5.8-5.8-2.2 5.8-2.2z"
      fill="#6fc3e8"
    />
  </svg>
);

export const PautoApprovalArt = () => (
  <svg {...frame}>
    <rect
      x="12"
      y="8"
      width="160"
      height="52"
      rx="10"
      fill="#e8f4fa"
      stroke="#046999"
      strokeOpacity="0.5"
    />
    <circle
      cx="36"
      cy="34"
      r="13"
      fill="#ffffff"
      stroke="#046999"
      strokeWidth="1.6"
    />
    <circle cx="36" cy="30" r="4.5" fill="#046999" />
    <path d="M28 41a8 7 0 0 1 16 0z" fill="#046999" />
    <rect
      x="58"
      y="20"
      width="62"
      height="6"
      rx="3"
      fill="#0b2433"
      opacity="0.75"
    />
    <rect x="58" y="32" width="44" height="5" rx="2.5" fill="#9a9da1" />
    <rect x="124" y="30" width="40" height="22" rx="6" fill="#046999" />
    <path
      d="M135 41l5 5 9-10"
      fill="none"
      stroke="#ffffff"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle
      cx="34"
      cy="98"
      r="15"
      fill="#f7f8f9"
      stroke="#9a9da1"
      strokeWidth="1.6"
      strokeDasharray="3 3"
    />
    <path d="M38 90a9 9 0 1 0 0 16 7 7 0 0 1 0-16z" fill="#9a9da1" />
    <path
      d="M54 98h40m-6-6l6 6-6 6"
      fill="none"
      stroke="#046999"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="116" cy="98" r="15" fill="#046999" />
    <circle cx="116" cy="93" r="4.5" fill="#ffffff" />
    <path d="M108 106a8 7 0 0 1 16 0z" fill="#ffffff" />
    <path
      d="M140 98h26"
      stroke="#d4d6d9"
      strokeWidth="2"
      strokeLinecap="round"
      strokeDasharray="2 5"
    />
    <circle
      cx="198"
      cy="82"
      r="22"
      fill="#ffffff"
      stroke="#0b2433"
      strokeWidth="1.6"
    />
    <path
      d="M198 68v14l9 6"
      fill="none"
      stroke="#046999"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M186 114l12-5 12 5"
      fill="none"
      stroke="#9a9da1"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
    <path
      d="M214 30v14m0 0l-4-4m4 4l4-4"
      fill="none"
      stroke="#046999"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M206 20h16"
      stroke="#d4d6d9"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

export const PautoAgentArt = () => (
  <svg {...frame}>
    <rect
      x="12"
      y="12"
      width="150"
      height="24"
      rx="7"
      fill="#ffffff"
      fillOpacity="0.08"
    />
    <rect
      x="12"
      y="40"
      width="150"
      height="24"
      rx="7"
      fill="#ffffff"
      fillOpacity="0.08"
    />
    <rect
      x="12"
      y="68"
      width="150"
      height="24"
      rx="7"
      fill="#6fc3e8"
      fillOpacity="0.18"
      stroke="#6fc3e8"
    />
    <rect
      x="12"
      y="96"
      width="150"
      height="24"
      rx="7"
      fill="#ffffff"
      fillOpacity="0.08"
    />
    <g fill="#6fc3e8">
      <circle cx="26" cy="24" r="4" />
      <circle cx="26" cy="52" r="4" />
      <circle cx="26" cy="108" r="4" />
    </g>
    <circle cx="26" cy="80" r="5" fill="#ffffff" />
    <g fill="#ffffff" opacity="0.5">
      <rect x="40" y="21" width="70" height="5" rx="2.5" />
      <rect x="40" y="49" width="56" height="5" rx="2.5" />
      <rect x="40" y="105" width="64" height="5" rx="2.5" />
    </g>
    <rect
      x="40"
      y="77"
      width="82"
      height="5"
      rx="2.5"
      fill="#ffffff"
      opacity="0.85"
    />
    <path
      d="M166 80h12"
      stroke="#6fc3e8"
      strokeWidth="2"
      strokeLinecap="round"
      strokeDasharray="2 4"
    />
    <circle
      cx="204"
      cy="56"
      r="26"
      fill="none"
      stroke="#6fc3e8"
      strokeWidth="2"
    />
    <path
      d="M182 56s7-11 22-11 22 11 22 11-7 11-22 11-22-11-22-11z"
      fill="#1a2a3a"
      stroke="#6fc3e8"
      strokeWidth="1.6"
    />
    <circle cx="204" cy="56" r="6" fill="#6fc3e8" />
    <circle cx="206" cy="54" r="2" fill="#ffffff" />
    <path
      d="M196 106a12 12 0 1 0 8 15 9 9 0 0 1-8-15z"
      fill="#6fc3e8"
      opacity="0.9"
    />
    <path
      d="M222 100l1.4 3.4 3.4 1.4-3.4 1.4-1.4 3.4-1.4-3.4-3.4-1.4 3.4-1.4z"
      fill="#ffffff"
      opacity="0.8"
    />
  </svg>
);

export const PautoApiArt = () => (
  <svg {...frame}>
    <g
      stroke="#6fc3e8"
      strokeWidth="2"
      strokeLinecap="round"
      strokeDasharray="3 5"
      fill="none"
    >
      <path d="M96 52L58 36" />
      <path d="M144 52l38-16" />
      <path d="M96 78l-38 16" />
      <path d="M144 78l38 16" />
      <path d="M120 47V30" />
    </g>
    <circle cx="120" cy="65" r="22" fill="#ffffff" />
    <path
      d="M110 65h8m4 0h8M118 60l-5 5 5 5M122 60l5 5-5 5"
      fill="none"
      stroke="#034e72"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <g fill="#ffffff" fillOpacity="0.1" stroke="#6fc3e8" strokeWidth="1.6">
      <rect x="28" y="14" width="46" height="36" rx="9" />
      <rect x="166" y="14" width="46" height="36" rx="9" />
      <rect x="28" y="80" width="46" height="36" rx="9" />
      <rect x="166" y="80" width="46" height="36" rx="9" />
      <rect x="98" y="4" width="44" height="26" rx="8" />
    </g>
    {/* cloud */}
    <path
      d="M40 40h22a7 7 0 0 0 0-14 9 9 0 0 0-17-2 7 7 0 0 0-5 16z"
      fill="none"
      stroke="#ffffff"
      strokeWidth="1.8"
      strokeLinejoin="round"
    />
    {/* database */}
    <ellipse
      cx="189"
      cy="23"
      rx="12"
      ry="4.5"
      fill="none"
      stroke="#ffffff"
      strokeWidth="1.8"
    />
    <path
      d="M177 23v14c0 2.5 5.4 4.5 12 4.5s12-2 12-4.5V23"
      fill="none"
      stroke="#ffffff"
      strokeWidth="1.8"
    />
    {/* ledger */}
    <rect
      x="42"
      y="88"
      width="18"
      height="22"
      rx="2"
      fill="none"
      stroke="#ffffff"
      strokeWidth="1.8"
    />
    <path
      d="M46 95h10M46 100h10M46 105h6"
      stroke="#ffffff"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
    {/* REST braces */}
    <path
      d="M184 92c-4 0-5 2-5 5v3c0 2-1 3-3 3 2 0 3 1 3 3v3c0 3 1 5 5 5M196 92c4 0 5 2 5 5v3c0 2 1 3 3 3-2 0-3 1-3 3v3c0 3-1 5-5 5"
      fill="none"
      stroke="#ffffff"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
    {/* legacy server */}
    <rect
      x="108"
      y="9"
      width="24"
      height="7"
      rx="2"
      fill="none"
      stroke="#ffffff"
      strokeWidth="1.6"
    />
    <rect
      x="108"
      y="18"
      width="24"
      height="7"
      rx="2"
      fill="none"
      stroke="#ffffff"
      strokeWidth="1.6"
    />
    <circle cx="113" cy="12.5" r="1.2" fill="#6fc3e8" />
    <circle cx="113" cy="21.5" r="1.2" fill="#6fc3e8" />
  </svg>
);
