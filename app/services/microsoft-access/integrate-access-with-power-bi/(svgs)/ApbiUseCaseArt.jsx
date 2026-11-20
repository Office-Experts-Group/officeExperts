// /app/services/microsoft-access/integrate-access-with-power-bi/(svgs)/ApbiUseCaseArt.jsx
// Spot illustrations for the use case rows, drawn for a light grey background.
// Decorative, so no text and aria-hidden.
// Hex values and the tokens they match:
//   #ffffff $white, #f2f3f5 $grayBGC, #e8f4fa $accent-light, #e3e8ec $line,
//   #d4d6d9 $line-strong, #046999 $accent, #034e72 $accent-dark, #0b2433 $ink,
//   #111820 $dark-bg, #6fc3e8 $accent-on-dark

const svgProps = {
  viewBox: "0 0 96 72",
  xmlns: "http://www.w3.org/2000/svg",
  "aria-hidden": "true",
  focusable: "false",
};

// Sales performance: regional bars against a target line, with a map pin.
export const ApbiSalesArt = () => (
  <svg {...svgProps}>
    <rect
      x="4"
      y="6"
      width="88"
      height="60"
      rx="10"
      fill="#ffffff"
      stroke="#d4d6d9"
    />
    <path d="M14 56h68" stroke="#e3e8ec" strokeWidth="1.6" />
    {[18, 28, 22, 36, 26].map((h, i) => (
      <rect
        key={i}
        x={16 + i * 13}
        y={56 - h}
        width="9"
        height={h}
        rx="2"
        fill="#046999"
        fillOpacity={i === 3 ? 1 : 0.35}
      />
    ))}
    <path
      d="M12 31H84"
      stroke="#0b2433"
      strokeWidth="1.5"
      strokeDasharray="4 3"
    />
    <path
      d="M71 8c-4.4 0-8 3.4-8 7.6 0 5.6 8 12.4 8 12.4s8-6.8 8-12.4C79 11.4 75.4 8 71 8z"
      fill="#0b2433"
      stroke="#ffffff"
      strokeWidth="1.6"
    />
    <circle cx="71" cy="15.4" r="2.8" fill="#6fc3e8" />
  </svg>
);

// Operational efficiency: Access, Excel and an online tool joined in one view.
export const ApbiOperationsArt = () => (
  <svg {...svgProps}>
    <g fill="none" stroke="#046999" strokeWidth="1.5" strokeDasharray="3 3">
      <path d="M26 16L44 30M26 36H44M26 56L44 42" />
    </g>
    <g fill="#ffffff" stroke="#0b2433" strokeWidth="1.5">
      <rect x="6" y="8" width="20" height="16" rx="4" />
      <rect x="6" y="28" width="20" height="16" rx="4" />
      <rect x="6" y="48" width="20" height="16" rx="4" />
    </g>
    <g fill="none" stroke="#046999" strokeWidth="1.6" strokeLinecap="round">
      <path d="M10 14h12M10 18h8" />
      <path d="M10 34h12M10 38h12M16 31v10" />
      <path d="M11 58a4 4 0 0 1 1-7 5 5 0 0 1 9 0 4 4 0 0 1 1 7z" />
    </g>
    <rect x="44" y="10" width="46" height="52" rx="8" fill="#046999" />
    <rect x="50" y="16" width="14" height="12" rx="3" fill="#ffffff" />
    <rect
      x="68"
      y="16"
      width="16"
      height="12"
      rx="3"
      fill="#ffffff"
      fillOpacity="0.55"
    />
    {[8, 14, 10, 18].map((h, i) => (
      <rect
        key={i}
        x={52 + i * 8}
        y={54 - h}
        width="5"
        height={h}
        rx="1.2"
        fill="#ffffff"
        fillOpacity={i === 3 ? 1 : 0.6}
      />
    ))}
    <path d="M50 36h34" stroke="#6fc3e8" strokeWidth="1.6" />
  </svg>
);

// Internal reporting portals: a portal page with a navigation rail and live tiles.
export const ApbiPortalArt = () => (
  <svg {...svgProps}>
    <rect
      x="4"
      y="6"
      width="88"
      height="60"
      rx="10"
      fill="#ffffff"
      stroke="#d4d6d9"
    />
    <path
      d="M4 16a10 10 0 0 1 10-10h68a10 10 0 0 1 10 10v2H4z"
      fill="#0b2433"
    />
    <circle cx="13" cy="12" r="2" fill="#6fc3e8" />
    <circle cx="20" cy="12" r="2" fill="#ffffff" fillOpacity="0.5" />
    <rect x="12" y="24" width="14" height="34" rx="4" fill="#e8f4fa" />
    <path
      d="M15 30h8M15 36h8M15 42h8"
      stroke="#046999"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
    <rect x="32" y="24" width="24" height="16" rx="4" fill="#046999" />
    <rect x="60" y="24" width="24" height="16" rx="4" fill="#e8f4fa" />
    <rect x="32" y="44" width="52" height="14" rx="4" fill="#f2f3f5" />
    <path
      d="M36 54l8-6 8 3 10-6 10 4"
      fill="none"
      stroke="#046999"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M70 28v8M75 31v5M80 29v7"
      stroke="#046999"
      strokeWidth="2.4"
      strokeLinecap="round"
    />
  </svg>
);
