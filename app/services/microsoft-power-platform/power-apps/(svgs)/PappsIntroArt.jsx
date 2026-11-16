// /app/services/microsoft-power-platform/microsoft-power-apps/(svgs)/PappsIntroArt.jsx
// Spot illustrations for the four intro outcomes. Decorative, light palette.
// Hex values and the tokens they match:
//   #046999 $accent, #e8f4fa $accent-light, #0d1b2a $text-primary,
//   #9a9da1 $text-muted, #d4d6d9 $line-strong, #ffffff $white, #6fc3e8 $accent-on-dark

const frame = {
  viewBox: "0 0 120 90",
  width: "100%",
  height: "auto",
  "aria-hidden": "true",
  focusable: "false",
};

// Tailored workflow: three steps joined by a path that bends around a block.
export const PappsWorkflowArt = () => (
  <svg {...frame}>
    <rect
      x="8"
      y="14"
      width="30"
      height="22"
      rx="6"
      fill="#e8f4fa"
      stroke="#046999"
      strokeWidth="2"
    />
    <rect x="82" y="54" width="30" height="22" rx="6" fill="#046999" />
    <rect
      x="45"
      y="34"
      width="30"
      height="22"
      rx="6"
      fill="#ffffff"
      stroke="#046999"
      strokeWidth="2"
    />
    <path
      d="M38 25 H60 V34 M60 56 V65 H82"
      fill="none"
      stroke="#046999"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeDasharray="4 4"
    />
    <path
      d="M14 22 h18 M14 28 h10"
      stroke="#046999"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M89 62 l5 5 l10 -10"
      fill="none"
      stroke="#ffffff"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="60" cy="45" r="4" fill="#6fc3e8" />
  </svg>
);

// Friendly interface: a small screen with a field, a toggle and a pointer.
export const PappsScreenArt = () => (
  <svg {...frame}>
    <rect
      x="14"
      y="10"
      width="86"
      height="64"
      rx="10"
      fill="#ffffff"
      stroke="#d4d6d9"
      strokeWidth="2"
    />
    <rect x="14" y="10" width="86" height="16" rx="10" fill="#e8f4fa" />
    <rect x="14" y="20" width="86" height="6" fill="#e8f4fa" />
    <circle cx="25" cy="18" r="2.5" fill="#046999" />
    <circle cx="33" cy="18" r="2.5" fill="#9a9da1" />
    <rect x="24" y="34" width="46" height="8" rx="4" fill="#d4d6d9" />
    <rect
      x="24"
      y="48"
      width="66"
      height="10"
      rx="5"
      fill="#ffffff"
      stroke="#d4d6d9"
      strokeWidth="1.5"
    />
    <rect x="74" y="33" width="16" height="10" rx="5" fill="#046999" />
    <circle cx="85" cy="38" r="3.5" fill="#ffffff" />
    <path
      d="M78 52 l0 22 l6 -5 l4 9 l4 -2 l-4 -9 l8 0 z"
      fill="#0d1b2a"
      stroke="#ffffff"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
  </svg>
);

// Automation: two gears with a forward arrow.
export const PappsAutomationArt = () => (
  <svg {...frame}>
    <g transform="translate(40 40)">
      <circle r="18" fill="#e8f4fa" stroke="#046999" strokeWidth="2" />
      <circle r="6" fill="#ffffff" stroke="#046999" strokeWidth="2" />
      {[0, 45, 90, 135, 180, 225, 270, 315].map((a) => (
        <rect
          key={a}
          x="-3.5"
          y="-24"
          width="7"
          height="8"
          rx="2"
          fill="#046999"
          transform={`rotate(${a})`}
        />
      ))}
    </g>
    <g transform="translate(82 56)">
      <circle r="11" fill="#046999" />
      <circle r="4" fill="#ffffff" />
      {[0, 60, 120, 180, 240, 300].map((a) => (
        <rect
          key={a}
          x="-2.5"
          y="-16"
          width="5"
          height="6"
          rx="1.5"
          fill="#046999"
          transform={`rotate(${a})`}
        />
      ))}
    </g>
    <path
      d="M18 76 H64 l-6 -5 M64 76 l-6 5"
      fill="none"
      stroke="#9a9da1"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Accuracy: a table row with a required field highlighted and a tick.
export const PappsAccuracyArt = () => (
  <svg {...frame}>
    <rect
      x="10"
      y="12"
      width="100"
      height="62"
      rx="8"
      fill="#ffffff"
      stroke="#d4d6d9"
      strokeWidth="2"
    />
    <rect x="10" y="12" width="100" height="14" rx="8" fill="#e8f4fa" />
    <rect x="10" y="20" width="100" height="6" fill="#e8f4fa" />
    <rect x="18" y="17" width="24" height="4" rx="2" fill="#046999" />
    <rect x="52" y="17" width="24" height="4" rx="2" fill="#046999" />
    <rect x="86" y="17" width="16" height="4" rx="2" fill="#046999" />
    {[34, 46, 58].map((y, i) => (
      <g key={y}>
        <rect x="18" y={y} width="24" height="5" rx="2.5" fill="#d4d6d9" />
        <rect
          x="52"
          y={y}
          width={i === 1 ? 30 : 22}
          height="5"
          rx="2.5"
          fill="#d4d6d9"
        />
      </g>
    ))}
    <rect
      x="46"
      y="40"
      width="40"
      height="16"
      rx="5"
      fill="#ffffff"
      stroke="#046999"
      strokeWidth="2"
    />
    <rect
      x="52"
      y="46"
      width="22"
      height="4"
      rx="2"
      fill="#046999"
      opacity="0.5"
    />
    <circle cx="92" cy="60" r="13" fill="#046999" />
    <path
      d="M85 60 l5 5 l9 -10"
      fill="none"
      stroke="#ffffff"
      strokeWidth="2.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
