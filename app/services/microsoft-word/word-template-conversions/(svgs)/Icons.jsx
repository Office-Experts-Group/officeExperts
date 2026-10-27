// /word-template-conversions/(svgs)/Icons.jsx
// Custom inline SVGs for the page. All are server components (no client JS),
// decorative (aria-hidden) and take their colour from the parent via currentColor.

// Shared attributes for the 48px line icons
const line = {
  viewBox: "0 0 48 48",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
  focusable: "false",
};

// ── Tile and step icons ──────────────────────────────────────────────

// Design layers turning into a document (Adobe to Word)
export const LayersIcon = () => (
  <svg {...line}>
    <rect x="6" y="6" width="22" height="28" rx="3" />
    <path d="M20 14h16a3 3 0 0 1 3 3v21a3 3 0 0 1-3 3H17" />
    <path d="M12 14h10M12 20h10M12 26h6" />
  </svg>
);

// PDF page with a conversion arrow
export const PdfIcon = () => (
  <svg {...line}>
    <path d="M12 5h17l9 9v27a2 2 0 0 1-2 2H12a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2z" />
    <path d="M29 5v9h9M18 30h12m-4-4 4 4-4 4" />
  </svg>
);

// Four tiles, "other formats"
export const GridIcon = () => (
  <svg {...line}>
    <rect x="8" y="8" width="14" height="14" rx="3" />
    <rect x="26" y="8" width="14" height="14" rx="3" />
    <rect x="8" y="26" width="14" height="14" rx="3" />
    <rect x="26" y="26" width="14" height="14" rx="3" />
  </svg>
);

// Fillable form with checkboxes and a signature line
export const FormIcon = () => (
  <svg {...line}>
    <rect x="8" y="6" width="32" height="36" rx="4" />
    <rect x="14" y="13" width="6" height="6" rx="1.5" />
    <path d="M25 16h10" />
    <rect x="14" y="24" width="6" height="6" rx="1.5" />
    <path d="m15.5 27 1.5 1.5 2.5-3M25 27h10M14 37q4-6 7 0t7-2" />
  </svg>
);

// Template page with a branded header block
export const TemplateIcon = () => (
  <svg {...line}>
    <rect x="8" y="6" width="32" height="36" rx="4" />
    <rect x="13" y="11" width="22" height="8" rx="2" fill="currentColor" fillOpacity=".18" />
    <path d="M13 25h22M13 31h22M13 37h12" />
  </svg>
);

// Shield with a tick, secure handling
export const ShieldIcon = () => (
  <svg {...line}>
    <path d="M24 5 8 11v11c0 10 7 17 16 21 9-4 16-11 16-21V11z" />
    <path d="m17 24 5 5 9-10" />
  </svg>
);

// ── Problem list icons ───────────────────────────────────────────────

// A flat page with nothing to interact with
export const FlatIcon = () => (
  <svg {...line}>
    <path d="M12 5h17l9 9v27a2 2 0 0 1-2 2H12a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2z" />
    <path d="M29 5v9h9M16 24h16M16 31h16" strokeDasharray="2 4" />
    <path d="m8 40 32-32" />
  </svg>
);

// Two offset pages that should match but don't
export const DriftIcon = () => (
  <svg {...line}>
    <rect x="6" y="9" width="22" height="30" rx="3" />
    <rect x="20" y="9" width="22" height="30" rx="3" strokeDasharray="3 4" />
    <path d="M12 17h10M12 23h10M12 29h6" />
  </svg>
);

// Table with a broken row
export const TableIcon = () => (
  <svg {...line}>
    <rect x="6" y="10" width="36" height="28" rx="3" />
    <path d="M6 19h36M18 10v28M30 10v12M30 27v11" />
  </svg>
);

// Two letter A shapes, "Aa", for font substitution
export const FontIcon = () => (
  <svg {...line}>
    <path d="m7 37 11-27 11 27M11 28h14M31 37l5-13 5 13M33 32h6" />
  </svg>
);

// Padlock, privacy risk
export const LockIcon = () => (
  <svg {...line}>
    <rect x="10" y="21" width="28" height="20" rx="4" />
    <path d="M16 21v-5a8 8 0 0 1 16 0v5" />
    <circle cx="24" cy="31" r="2.5" />
  </svg>
);

// ── Small UI icons ───────────────────────────────────────────────────

export const ArrowIcon = () => (
  <svg
    viewBox="0 0 20 20"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    focusable="false"
  >
    <path d="M4 10h12m-5-5 5 5-5 5" />
  </svg>
);

export const ChevronIcon = () => (
  <svg
    viewBox="0 0 20 20"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    focusable="false"
  >
    <path d="m5 8 5 5 5-5" />
  </svg>
);

export const CheckIcon = () => (
  <svg
    viewBox="0 0 20 20"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    focusable="false"
  >
    <path d="m4.5 10.5 3.5 3.5 7.5-8" />
  </svg>
);

// ── Decorative backgrounds ───────────────────────────────────────────

// Dot lattice used as a faint texture in accent and dark tiles
export const DotGrid = ({ className }) => (
  <svg className={className} viewBox="0 0 160 160" aria-hidden="true" focusable="false">
    <defs>
      <pattern id="oe-dots" width="16" height="16" patternUnits="userSpaceOnUse">
        <circle cx="2" cy="2" r="1.5" fill="currentColor" />
      </pattern>
    </defs>
    <rect width="160" height="160" fill="url(#oe-dots)" />
  </svg>
);

// Concentric rings behind the "25+ years" stat
export const Rings = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 200 200"
    fill="none"
    stroke="currentColor"
    aria-hidden="true"
    focusable="false"
  >
    <circle cx="100" cy="100" r="30" />
    <circle cx="100" cy="100" r="55" strokeDasharray="3 6" />
    <circle cx="100" cy="100" r="80" />
    <circle cx="100" cy="100" r="98" strokeDasharray="1 8" />
  </svg>
);

// ── Hero illustration ────────────────────────────────────────────────
// A flat source page on the left becomes a structured Word template on the
// right. Colours come from CSS custom properties set in templateHero.module.scss
// (--accent for highlights, --bg for text sitting on solid fills).
export const ConversionVisual = () => (
  <svg
    viewBox="0 0 520 400"
    fill="none"
    role="img"
    aria-label="A flat PDF page being rebuilt as a structured Word template"
    focusable="false"
  >
    {/* Source page */}
    <rect x="24" y="70" width="160" height="210" rx="12" fill="currentColor" fillOpacity=".06" stroke="currentColor" strokeOpacity=".35" />
    <rect x="42" y="90" width="52" height="22" rx="6" fill="currentColor" fillOpacity=".85" />
    <text x="52" y="106" fontSize="12" fontWeight="700" fill="var(--bg)">PDF</text>
    <rect x="42" y="128" width="124" height="8" rx="4" fill="currentColor" fillOpacity=".3" />
    <rect x="42" y="144" width="100" height="8" rx="4" fill="currentColor" fillOpacity=".2" />
    <rect x="42" y="160" width="116" height="8" rx="4" fill="currentColor" fillOpacity=".2" />
    <rect x="42" y="186" width="124" height="64" rx="8" stroke="currentColor" strokeOpacity=".35" strokeDasharray="4 5" />
    <path d="m58 238 22-26 16 18 12-12 18 20" stroke="currentColor" strokeOpacity=".35" strokeLinecap="round" strokeLinejoin="round" />

    {/* Conversion path */}
    <path d="M196 175c30-60 68-60 100-8" stroke="var(--accent)" strokeWidth="2" strokeDasharray="5 6" strokeLinecap="round" />
    <path d="m286 160 12 8-14 8" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="246" cy="118" r="22" fill="var(--accent)" />
    <path d="m246 106 3.5 8.5 8.5 3.5-8.5 3.5-3.5 8.5-3.5-8.5-8.5-3.5 8.5-3.5z" fill="var(--bg)" />

    {/* Target Word template */}
    <rect x="316" y="120" width="180" height="240" rx="12" fill="var(--accent)" fillOpacity=".18" stroke="var(--accent)" strokeWidth="2" />
    <rect x="334" y="138" width="40" height="40" rx="9" fill="var(--accent)" />
    <path d="m343 151 4.5 18 6-14 6 14 4.5-18" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    <rect x="386" y="146" width="92" height="12" rx="6" fill="currentColor" fillOpacity=".85" />
    <rect x="386" y="166" width="60" height="8" rx="4" fill="currentColor" fillOpacity=".4" />
    <rect x="334" y="194" width="144" height="8" rx="4" fill="currentColor" fillOpacity=".3" />
    <rect x="334" y="210" width="120" height="8" rx="4" fill="currentColor" fillOpacity=".3" />
    <rect x="334" y="234" width="144" height="60" rx="8" stroke="currentColor" strokeOpacity=".5" />
    <path d="M334 254h144M334 274h144M382 234v60M430 234v60" stroke="currentColor" strokeOpacity=".35" />

    {/* Floating status chips */}
    <g>
      <rect x="40" y="316" width="132" height="32" rx="16" fill="var(--accent)" />
      <path d="m56 332 4 4 8-9" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      <text x="76" y="337" fontSize="12" fontWeight="600" fill="#fff">Fully editable</text>
    </g>
    <g>
      <rect x="340" y="304" width="144" height="32" rx="16" fill="var(--bg)" stroke="var(--accent)" />
      <circle cx="358" cy="320" r="5" fill="var(--accent)" />
      <text x="372" y="325" fontSize="12" fontWeight="600" fill="currentColor">Styles applied</text>
    </g>
  </svg>
);
