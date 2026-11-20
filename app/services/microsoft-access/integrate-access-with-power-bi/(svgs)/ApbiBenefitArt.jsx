// /app/services/microsoft-access/integrate-access-with-power-bi/(svgs)/ApbiBenefitArt.jsx
// Spot illustrations for the benefits section, drawn for a white background.
// Decorative, so no text and aria-hidden.
// Hex values and the tokens they match:
//   #ffffff $white, #f7f8f9 $light-bg, #e8f4fa $accent-light, #e3e8ec $line,
//   #d4d6d9 $line-strong, #046999 $accent, #034e72 $accent-dark, #0b2433 $ink,
//   #4a5568 $text-secondary, #c0392b $replace-x

const svgProps = {
  viewBox: "0 0 120 90",
  xmlns: "http://www.w3.org/2000/svg",
  "aria-hidden": "true",
  focusable: "false",
};

// Interactive dashboards: one bar picked, the donut answers.
export const ApbiInteractiveArt = () => (
  <svg {...svgProps}>
    <rect
      x="6"
      y="6"
      width="108"
      height="78"
      rx="10"
      fill="#f7f8f9"
      stroke="#e3e8ec"
    />
    <rect x="6" y="6" width="108" height="16" rx="10" fill="#e8f4fa" />
    <rect x="6" y="14" width="108" height="8" fill="#e8f4fa" />
    <circle cx="16" cy="14" r="2.5" fill="#046999" />
    <circle cx="24" cy="14" r="2.5" fill="#d4d6d9" />
    {[22, 34, 26, 44, 30, 38].map((h, i) => (
      <rect
        key={i}
        x={16 + i * 12}
        y={74 - h}
        width="8"
        height={h}
        rx="2"
        fill="#046999"
        fillOpacity={i === 3 ? 1 : 0.25}
      />
    ))}
    <g transform="rotate(-90 94 48)" fill="none" strokeWidth="8">
      <circle cx="94" cy="48" r="13" stroke="#e8f4fa" />
      <circle
        cx="94"
        cy="48"
        r="13"
        stroke="#046999"
        strokeDasharray="36 45.7"
      />
    </g>
    <path
      d="M58 50v18l4.2-4 3.4 7.4 3.2-1.5-3.4-7.2 5.8-.2z"
      fill="#0b2433"
      stroke="#ffffff"
      strokeWidth="1.4"
      strokeLinejoin="round"
    />
  </svg>
);

// Centralised sharing: one dashboard reaching a laptop, a phone and a team chat.
export const ApbiSharingArt = () => (
  <svg {...svgProps}>
    <g fill="none" stroke="#046999" strokeWidth="1.5" strokeDasharray="4 4">
      <path d="M46 40L28 24M74 40L92 24M60 58V66" />
    </g>
    <rect x="38" y="28" width="44" height="32" rx="6" fill="#046999" />
    {[10, 18, 14, 22].map((h, i) => (
      <rect
        key={i}
        x={46 + i * 8}
        y={54 - h}
        width="5"
        height={h}
        rx="1.5"
        fill="#ffffff"
        fillOpacity={i === 3 ? 1 : 0.6}
      />
    ))}
    <rect
      x="8"
      y="6"
      width="30"
      height="20"
      rx="3"
      fill="#ffffff"
      stroke="#0b2433"
      strokeWidth="1.6"
    />
    <path d="M4 30h38l-3-4H7z" fill="#0b2433" />
    <rect
      x="86"
      y="4"
      width="22"
      height="34"
      rx="5"
      fill="#ffffff"
      stroke="#0b2433"
      strokeWidth="1.6"
    />
    <path
      d="M92 11h10M92 17h10"
      stroke="#046999"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <rect
      x="30"
      y="66"
      width="60"
      height="18"
      rx="9"
      fill="#e8f4fa"
      stroke="#046999"
      strokeWidth="1.4"
    />
    <circle cx="44" cy="75" r="3" fill="#046999" />
    <circle cx="60" cy="75" r="3" fill="#046999" fillOpacity="0.6" />
    <circle cx="76" cy="75" r="3" fill="#046999" fillOpacity="0.3" />
  </svg>
);

// Automated refresh: a clock with a refresh arrow feeding a report.
export const ApbiRefreshArt = () => (
  <svg {...svgProps}>
    <circle
      cx="40"
      cy="45"
      r="22"
      fill="#e8f4fa"
      stroke="#046999"
      strokeWidth="2"
    />
    <path
      d="M40 31v14l9 6"
      fill="none"
      stroke="#0b2433"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="40" cy="45" r="2.6" fill="#0b2433" />
    <path
      d="M16 30a30 30 0 0 1 42-6"
      fill="none"
      stroke="#046999"
      strokeWidth="2.4"
      strokeLinecap="round"
    />
    <path d="M56 14l8 10-12 3z" fill="#046999" />
    <path
      d="M64 62a30 30 0 0 1-40 10"
      fill="none"
      stroke="#046999"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeOpacity="0.5"
    />
    <path
      d="M64 46H74"
      stroke="#046999"
      strokeWidth="2"
      strokeDasharray="3 3"
    />
    <rect
      x="76"
      y="26"
      width="38"
      height="40"
      rx="6"
      fill="#ffffff"
      stroke="#0b2433"
      strokeWidth="1.6"
    />
    {[10, 18, 13, 22].map((h, i) => (
      <rect
        key={i}
        x={83 + i * 7}
        y={58 - h}
        width="4.5"
        height={h}
        rx="1.2"
        fill="#046999"
      />
    ))}
    <path
      d="M81 36h26"
      stroke="#d4d6d9"
      strokeWidth="2.4"
      strokeLinecap="round"
    />
  </svg>
);

// Cross-data analysis: four kinds of source merging into one chart.
export const ApbiCrossDataArt = () => (
  <svg {...svgProps}>
    <g fill="none" stroke="#046999" strokeWidth="1.4">
      <path d="M32 17C46 17 46 45 56 45" />
      <path d="M32 37C46 37 46 45 56 45" />
      <path d="M32 57C46 57 46 45 56 45" />
      <path d="M32 77C46 77 46 45 56 45" />
    </g>
    <g fill="none" stroke="#0b2433" strokeWidth="1.6" strokeLinecap="round">
      <ellipse cx="20" cy="12" rx="9" ry="3.5" fill="#e8f4fa" />
      <path d="M11 12v9c0 2 4 3.5 9 3.5s9-1.5 9-3.5v-9" />
      <rect x="11" y="30" width="18" height="14" rx="2" fill="#e8f4fa" />
      <path d="M11 37h18M20 30v14" />
      <path d="M11 54h18M11 60h18M11 66h11" />
      <path
        d="M12 85a5 5 0 0 1 1-10 7 7 0 0 1 13-1 5 5 0 0 1 2 11z"
        fill="#e8f4fa"
        strokeLinejoin="round"
      />
    </g>
    <rect
      x="56"
      y="14"
      width="58"
      height="62"
      rx="8"
      fill="#ffffff"
      stroke="#046999"
      strokeWidth="1.8"
    />
    {[16, 26, 20, 32].map((h, i) => (
      <rect
        key={i}
        x={64 + i * 11}
        y={62 - h}
        width="7"
        height={h}
        rx="1.5"
        fill="#046999"
        fillOpacity={i === 3 ? 1 : 0.35}
      />
    ))}
    <path
      d="M64 30l11 6 11-8 14 4"
      fill="none"
      stroke="#0b2433"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Modern visuals and AI-driven insights: an outlier picked out on a trend.
export const ApbiInsightArt = () => (
  <svg {...svgProps}>
    <rect
      x="6"
      y="22"
      width="108"
      height="62"
      rx="10"
      fill="#f7f8f9"
      stroke="#e3e8ec"
    />
    <path
      d="M16 66L34 58 50 62 66 40 82 52 104 46V74H16z"
      fill="#046999"
      fillOpacity="0.12"
    />
    <polyline
      points="16,66 34,58 50,62 66,40 82,52 104,46"
      fill="none"
      stroke="#046999"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle
      cx="66"
      cy="40"
      r="8"
      fill="none"
      stroke="#c0392b"
      strokeWidth="1.8"
      strokeDasharray="3 3"
    />
    <circle cx="66" cy="40" r="3.4" fill="#c0392b" />
    <rect x="46" y="4" width="40" height="18" rx="9" fill="#0b2433" />
    <path
      d="M58 8.5l1.6 3.4 3.4 1.6-3.4 1.6-1.6 3.4-1.6-3.4-3.4-1.6 3.4-1.6z"
      fill="#ffffff"
    />
    <path
      d="M68 13h10"
      stroke="#ffffff"
      strokeOpacity="0.7"
      strokeWidth="2.4"
      strokeLinecap="round"
    />
    <path d="M66 22v10" stroke="#0b2433" strokeWidth="1.4" />
  </svg>
);
