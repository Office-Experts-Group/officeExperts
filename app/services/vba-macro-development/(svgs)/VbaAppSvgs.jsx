// /services/vba-macro-development/(svgs)/VbaAppSvgs.jsx
// Line icons for the Office applications and the PDF output used across this page.
// Each icon draws in currentColor, so the parent sets the colour with `color`.
// Props are spread last so the hero illustration can reuse them as nested <svg> elements (x, y, width, height).
const base = {
  viewBox: "0 0 64 64",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2.5,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": "true",
  focusable: "false",
};

export const VbaExcelSvg = (props) => (
  <svg {...base} {...props}>
    <rect x="8" y="8" width="48" height="48" rx="10" />
    <path
      d="M8 24h48M8 40h48M24 8v48M40 8v48"
      strokeWidth="1.8"
      strokeOpacity="0.55"
    />
    <rect
      x="25"
      y="25"
      width="14"
      height="14"
      rx="2"
      fill="currentColor"
      fillOpacity="0.22"
      stroke="none"
    />
  </svg>
);

export const VbaWordSvg = (props) => (
  <svg {...base} {...props}>
    <rect x="8" y="8" width="48" height="48" rx="10" />
    <path d="M18 22h28" strokeWidth="4" />
    <path
      d="M18 33h28M18 41h28M18 49h15"
      strokeWidth="2.2"
      strokeOpacity="0.7"
    />
  </svg>
);

export const VbaAccessSvg = (props) => (
  <svg {...base} {...props}>
    <rect x="8" y="8" width="48" height="48" rx="10" />
    <ellipse cx="32" cy="22" rx="12" ry="4.5" />
    <path d="M20 22v20c0 2.5 5.4 4.5 12 4.5s12-2 12-4.5V22" />
    <path
      d="M20 32c0 2.5 5.4 4.5 12 4.5s12-2 12-4.5"
      strokeOpacity="0.6"
    />
  </svg>
);

export const VbaPowerPointSvg = (props) => (
  <svg {...base} {...props}>
    <rect x="8" y="8" width="48" height="48" rx="10" />
    <rect x="16" y="17" width="32" height="22" rx="3" />
    <path d="M23 33v-4M29 33v-9M35 33v-6M41 33v-11" strokeWidth="2.4" />
    <path d="M32 39v7M25 47h14" strokeOpacity="0.7" />
  </svg>
);

export const VbaOutlookSvg = (props) => (
  <svg {...base} {...props}>
    <rect x="8" y="8" width="48" height="48" rx="10" />
    <rect x="15" y="21" width="34" height="23" rx="4" />
    <path d="M16 24l16 12 16-12" />
  </svg>
);

export const VbaPdfSvg = (props) => (
  <svg {...base} {...props}>
    <path d="M16 10a2 2 0 0 1 2-2h20l12 12v34a2 2 0 0 1-2 2H18a2 2 0 0 1-2-2z" />
    <path d="M38 8v12h12" />
    <text
      x="33"
      y="44"
      textAnchor="middle"
      fontSize="11"
      fontWeight="700"
      fontFamily="sans-serif"
      fill="currentColor"
      stroke="none"
    >
      PDF
    </text>
  </svg>
);
