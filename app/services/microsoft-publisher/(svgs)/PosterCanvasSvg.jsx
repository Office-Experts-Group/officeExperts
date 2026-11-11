// app/services/microsoft-publisher/(svgs)/PosterCanvasSvg.jsx
// PowerPoint-as-layout-tool illustration: an editor window with Slide Master layout
// thumbnails, an A3 portrait poster with margin guides, and theme and export panels.
// Original artwork, no Microsoft product icons. Hex values mirror globals.scss tokens:
// #046999 $accent, #034e72 $accent-dark, #0b2433 $ink, #6fc3e8 $accent-on-dark,
// #e3e8ec $line, #f7f8f9 $light-bg, #0d1b2a $text-primary, #9a9da1 $text-muted.

export const PosterCanvasSvg = () => (
  <svg
    viewBox="0 0 520 440"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    focusable="false"
  >
    {/* ── Editor window ── */}
    <rect x="1" y="1" width="518" height="438" rx="18" fill="#f7f8f9" stroke="#e3e8ec" />
    <path d="M1 19A18 18 0 0 1 19 1h482a18 18 0 0 1 18 18v27H1z" fill="#ffffff" />
    <path d="M1 46h518" stroke="#e3e8ec" />
    {/* Page size chip in the toolbar */}
    <rect x="150" y="12" width="176" height="22" rx="11" fill="#046999" />
    <text x="238" y="27" textAnchor="middle" fill="#ffffff" fontSize="10" fontWeight="700">
      A3 portrait · 297 × 420 mm
    </text>
    <g fill="#e3e8ec">
      <rect x="18" y="18" width="44" height="10" rx="5" />
      <rect x="70" y="18" width="30" height="10" rx="5" />
      <rect x="452" y="16" width="50" height="14" rx="7" />
    </g>

    {/* ── Slide Master layout thumbnails ── */}
    <text x="18" y="72" fill="#9a9da1" fontSize="8" fontWeight="700" letterSpacing="1.5">
      LAYOUTS
    </text>
    <g transform="translate(18 82)">
      {/* Selected layout */}
      <rect width="56" height="78" rx="6" fill="#ffffff" stroke="#0d1b2a" strokeOpacity="0.45" strokeWidth="1.5" />
      <rect x="6" y="6" width="44" height="30" rx="3" fill="#046999" fillOpacity="0.8" />
      <rect x="6" y="42" width="36" height="5" rx="2.5" fill="#0d1b2a" />
      <rect x="6" y="52" width="44" height="3" rx="1.5" fill="#9a9da1" />
      <rect x="6" y="59" width="38" height="3" rx="1.5" fill="#9a9da1" />
    </g>
    <g transform="translate(18 172)">
      <rect width="56" height="78" rx="6" fill="#ffffff" stroke="#e3e8ec" />
      <rect x="6" y="8" width="30" height="5" rx="2.5" fill="#0d1b2a" fillOpacity="0.6" />
      <rect x="6" y="20" width="21" height="40" rx="3" fill="#e3e8ec" />
      <rect x="29" y="20" width="21" height="40" rx="3" fill="#e3e8ec" />
    </g>
    <g transform="translate(18 262)">
      <rect width="56" height="78" rx="6" fill="#ffffff" stroke="#e3e8ec" />
      <rect x="6" y="6" width="44" height="66" rx="3" fill="#0b2433" fillOpacity="0.85" />
      <rect x="12" y="50" width="30" height="5" rx="2.5" fill="#ffffff" fillOpacity="0.8" />
    </g>
    <g transform="translate(18 352)">
      <rect width="56" height="70" rx="6" fill="#ffffff" stroke="#e3e8ec" />
      <rect x="6" y="8" width="44" height="5" rx="2.5" fill="#0d1b2a" fillOpacity="0.6" />
      <rect x="6" y="20" width="44" height="3" rx="1.5" fill="#e3e8ec" />
      <rect x="6" y="28" width="44" height="3" rx="1.5" fill="#e3e8ec" />
      <rect x="6" y="36" width="34" height="3" rx="1.5" fill="#e3e8ec" />
    </g>

    {/* ── A3 poster on the canvas ── */}
    {/* Soft shadow */}
    <rect x="114" y="72" width="248" height="350" rx="6" fill="#0d1b2a" fillOpacity="0.06" />
    <g transform="translate(108 64)">
      <rect width="248" height="350" rx="4" fill="#ffffff" />
      {/* Hero image area */}
      <rect width="248" height="170" rx="4" fill="#046999" />
      <rect y="160" width="248" height="10" fill="#046999" />
      <circle cx="190" cy="54" r="18" fill="#6fc3e8" fillOpacity="0.7" />
      <path d="M0 170l58-62 40 38 34-28 56 52z" fill="#034e72" />
      <path d="M120 170l48-40 38 26 42-34v48z" fill="#0b2433" fillOpacity="0.6" />
      {/* Headline and body */}
      <rect x="22" y="190" width="170" height="16" rx="4" fill="#0d1b2a" />
      <rect x="22" y="212" width="120" height="16" rx="4" fill="#0d1b2a" />
      <g fill="#9a9da1" fillOpacity="0.6">
        <rect x="22" y="244" width="204" height="5" rx="2.5" />
        <rect x="22" y="256" width="196" height="5" rx="2.5" />
        <rect x="22" y="268" width="204" height="5" rx="2.5" />
        <rect x="22" y="280" width="140" height="5" rx="2.5" />
      </g>
      {/* Footer strip with logo placeholder and date pill */}
      <rect y="308" width="248" height="42" fill="#0b2433" />
      <rect x="22" y="321" width="38" height="16" rx="3" fill="#ffffff" fillOpacity="0.85" />
      <rect x="166" y="321" width="60" height="16" rx="8" fill="#6fc3e8" />
      {/* Margin guides */}
      <rect
        x="14"
        y="14"
        width="220"
        height="322"
        stroke="#6fc3e8"
        strokeWidth="1"
        strokeDasharray="4 4"
      />
    </g>

    {/* ── Properties panel ── */}
    <g transform="translate(374 64)">
      <rect width="128" height="358" rx="12" fill="#ffffff" stroke="#e3e8ec" />
      <text x="14" y="24" fill="#9a9da1" fontSize="8" fontWeight="700" letterSpacing="1.5">
        THEME COLOURS
      </text>
      <circle cx="24" cy="44" r="9" fill="#046999" />
      <circle cx="48" cy="44" r="9" fill="#034e72" />
      <circle cx="72" cy="44" r="9" fill="#0b2433" />
      <circle cx="96" cy="44" r="9" fill="#6fc3e8" />
      <path d="M14 70h100" stroke="#e3e8ec" />
      <text x="14" y="92" fill="#9a9da1" fontSize="8" fontWeight="700" letterSpacing="1.5">
        FONTS
      </text>
      <text x="14" y="122" fill="#0d1b2a" fontSize="24" fontWeight="700">
        Aa
      </text>
      <rect x="56" y="104" width="56" height="6" rx="3" fill="#0d1b2a" fillOpacity="0.7" />
      <rect x="56" y="116" width="40" height="5" rx="2.5" fill="#9a9da1" fillOpacity="0.6" />
      <path d="M14 142h100" stroke="#e3e8ec" />
      <text x="14" y="164" fill="#9a9da1" fontSize="8" fontWeight="700" letterSpacing="1.5">
        GUIDES
      </text>
      <rect x="14" y="174" width="100" height="22" rx="6" fill="#f7f8f9" />
      <rect x="20" y="180" width="10" height="10" rx="2" stroke="#6fc3e8" strokeDasharray="2 2" />
      <text x="38" y="189" fill="#0d1b2a" fontSize="9" fontWeight="700">
        Margins 15 mm
      </text>
      <path d="M14 214h100" stroke="#e3e8ec" />
      <text x="14" y="236" fill="#9a9da1" fontSize="8" fontWeight="700" letterSpacing="1.5">
        EXPORT
      </text>
      <g fontSize="9" fontWeight="700" textAnchor="middle">
        <rect x="14" y="248" width="48" height="22" rx="11" fill="#046999" />
        <text x="38" y="262" fill="#ffffff">
          PDF
        </text>
        <rect x="66" y="248" width="48" height="22" rx="11" fill="#f7f8f9" stroke="#e3e8ec" />
        <text x="90" y="262" fill="#0d1b2a">
          PNG
        </text>
        <rect x="14" y="278" width="100" height="22" rx="11" fill="#f7f8f9" stroke="#e3e8ec" />
        <text x="64" y="292" fill="#0d1b2a">
          High quality print
        </text>
      </g>
    </g>
  </svg>
);
