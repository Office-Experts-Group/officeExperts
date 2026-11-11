// app/services/microsoft-publisher/(svgs)/PublisherHeroSvg.jsx
// Hero illustration: a retired .pub page (dashed outline, linked text frames) flowing
// into a styles-based Word page and a PowerPoint slide. Original artwork, no Microsoft
// product icons. Hex values mirror globals.scss tokens, as SVG can't read SCSS variables:
// #046999 $accent, #6fc3e8 $accent-on-dark, #18232e $dark-surface, #0d1b2a $text-primary,
// #4a5568 $text-secondary, #c0392b $replace-x, #f8f8f8 $offWhite.

export const PublisherHeroSvg = () => (
  <svg
    viewBox="0 0 560 460"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    focusable="false"
  >
    {/* ── Retired .pub page ── */}
    <g transform="translate(16 110)">
      <rect
        width="200"
        height="268"
        rx="16"
        fill="#18232e"
        stroke="#ffffff"
        strokeOpacity="0.22"
        strokeDasharray="6 6"
      />
      {/* Masthead frame */}
      <rect x="18" y="22" width="164" height="36" rx="6" fill="#ffffff" fillOpacity="0.08" />
      <rect x="30" y="34" width="92" height="12" rx="3" fill="#ffffff" fillOpacity="0.25" />
      {/* Picture frame with placeholder cross */}
      <rect x="18" y="72" width="78" height="66" rx="6" stroke="#ffffff" strokeOpacity="0.2" />
      <path d="M18 72l78 66M96 72l-78 66" stroke="#ffffff" strokeOpacity="0.12" />
      {/* Text frame one */}
      <rect x="104" y="72" width="78" height="66" rx="6" stroke="#ffffff" strokeOpacity="0.2" />
      <g fill="#ffffff" fillOpacity="0.2">
        <rect x="114" y="84" width="58" height="5" rx="2.5" />
        <rect x="114" y="96" width="50" height="5" rx="2.5" />
        <rect x="114" y="108" width="58" height="5" rx="2.5" />
        <rect x="114" y="120" width="38" height="5" rx="2.5" />
      </g>
      {/* Chain: Publisher's linked text boxes */}
      <g transform="translate(143 144)" stroke="#6fc3e8" strokeWidth="1.5">
        <rect x="-10" y="-4" width="11" height="8" rx="4" />
        <rect x="-1" y="-4" width="11" height="8" rx="4" />
      </g>
      {/* Text frame two (overflow continues here) */}
      <rect x="18" y="150" width="164" height="70" rx="6" stroke="#ffffff" strokeOpacity="0.2" />
      <g fill="#ffffff" fillOpacity="0.2">
        <rect x="30" y="162" width="140" height="5" rx="2.5" />
        <rect x="30" y="174" width="128" height="5" rx="2.5" />
        <rect x="30" y="186" width="140" height="5" rx="2.5" />
        <rect x="30" y="198" width="96" height="5" rx="2.5" />
      </g>
      {/* Overflow marker, bottom right of the frame */}
      <rect x="160" y="211" width="22" height="13" rx="2" fill="#18232e" stroke="#c0392b" />
      <text x="171" y="220.5" textAnchor="middle" fill="#c0392b" fontSize="8.5" fontWeight="700">
        A…
      </text>
      {/* File type chip */}
      <rect x="18" y="234" width="52" height="20" rx="10" fill="#ffffff" fillOpacity="0.08" />
      <text x="44" y="248" textAnchor="middle" fill="#ffffff" fillOpacity="0.55" fontSize="11" fontWeight="700">
        .pub
      </text>
    </g>

    {/* Retired badge pinned to the page */}
    <g transform="translate(38 94)">
      <rect width="118" height="28" rx="14" fill="#c0392b" />
      <text x="59" y="18.5" textAnchor="middle" fill="#ffffff" fontSize="10.5" fontWeight="700" letterSpacing="1.2">
        RETIRED 2026
      </text>
    </g>

    {/* ── Conversion flow ── */}
    <path d="M216 244H236" stroke="#6fc3e8" strokeOpacity="0.6" strokeWidth="1.5" strokeDasharray="4 5" />
    <path
      d="M272 244C292 244 284 160 302 160"
      stroke="#6fc3e8"
      strokeOpacity="0.6"
      strokeWidth="1.5"
      strokeDasharray="4 5"
    />
    <path
      d="M272 244C292 244 294 383 314 383"
      stroke="#6fc3e8"
      strokeOpacity="0.6"
      strokeWidth="1.5"
      strokeDasharray="4 5"
    />
    <circle cx="254" cy="244" r="18" fill="#046999" />
    <path
      d="M246 244h15M255 238l6 6-6 6"
      stroke="#ffffff"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    {/* ── Word page, built on styles ── */}
    <g transform="translate(302 24)">
      <rect width="236" height="270" rx="16" fill="#f8f8f8" />
      {/* Accent header band, square bottom corners */}
      <rect width="236" height="56" rx="16" fill="#046999" />
      <rect y="40" width="236" height="16" fill="#046999" />
      <rect x="22" y="21" width="120" height="14" rx="4" fill="#ffffff" fillOpacity="0.9" />
      <rect x="192" y="19" width="22" height="18" rx="4" fill="#ffffff" fillOpacity="0.35" />
      {/* Heading with its style tag */}
      <rect x="22" y="76" width="128" height="12" rx="3" fill="#0d1b2a" />
      <rect x="158" y="73" width="58" height="18" rx="9" fill="#046999" />
      <text x="187" y="85.5" textAnchor="middle" fill="#ffffff" fontSize="9" fontWeight="700">
        Heading 1
      </text>
      {/* Column one */}
      <g fill="#4a5568" fillOpacity="0.35">
        <rect x="22" y="104" width="90" height="5" rx="2.5" />
        <rect x="22" y="116" width="90" height="5" rx="2.5" />
        <rect x="22" y="128" width="82" height="5" rx="2.5" />
        <rect x="22" y="140" width="90" height="5" rx="2.5" />
        <rect x="22" y="152" width="70" height="5" rx="2.5" />
        <rect x="22" y="164" width="88" height="5" rx="2.5" />
        <rect x="22" y="176" width="90" height="5" rx="2.5" />
        <rect x="22" y="188" width="60" height="5" rx="2.5" />
      </g>
      {/* Column two: picture then text */}
      <rect x="124" y="104" width="90" height="54" rx="6" fill="#046999" fillOpacity="0.14" />
      <path d="M130 152l22-22 14 14 10-10 32 18" stroke="#046999" strokeOpacity="0.5" strokeWidth="1.5" />
      <circle cx="196" cy="118" r="5" fill="#046999" fillOpacity="0.45" />
      <g fill="#4a5568" fillOpacity="0.35">
        <rect x="124" y="168" width="90" height="5" rx="2.5" />
        <rect x="124" y="180" width="86" height="5" rx="2.5" />
        <rect x="124" y="192" width="64" height="5" rx="2.5" />
      </g>
      {/* Pull quote block */}
      <rect x="22" y="208" width="192" height="34" rx="8" fill="#046999" fillOpacity="0.08" />
      <rect x="34" y="219" width="140" height="5" rx="2.5" fill="#046999" fillOpacity="0.6" />
      <rect x="34" y="229" width="96" height="5" rx="2.5" fill="#046999" fillOpacity="0.6" />
      {/* File type chip */}
      <rect x="22" y="250" width="54" height="14" rx="7" fill="#0d1b2a" fillOpacity="0.08" />
      <text x="49" y="260" textAnchor="middle" fill="#4a5568" fontSize="9" fontWeight="700">
        .docx
      </text>
    </g>

    {/* ── PowerPoint slide ── */}
    <g transform="translate(314 320)">
      <rect width="224" height="126" rx="12" fill="#ffffff" />
      {/* Accent side panel, square right corners */}
      <rect width="86" height="126" rx="12" fill="#046999" />
      <rect x="74" width="12" height="126" fill="#046999" />
      <rect x="14" y="20" width="56" height="8" rx="3" fill="#ffffff" fillOpacity="0.9" />
      <rect x="14" y="34" width="40" height="8" rx="3" fill="#ffffff" fillOpacity="0.55" />
      <rect x="14" y="96" width="50" height="16" rx="8" fill="#ffffff" fillOpacity="0.2" />
      <text x="39" y="107.5" textAnchor="middle" fill="#ffffff" fontSize="9" fontWeight="700">
        .pptx
      </text>
      {/* Picture and caption */}
      <rect x="100" y="16" width="110" height="62" rx="6" fill="#046999" fillOpacity="0.12" />
      <path d="M106 72l20-20 12 12 9-9 32 17" stroke="#046999" strokeOpacity="0.5" strokeWidth="1.5" />
      <g fill="#4a5568" fillOpacity="0.35">
        <rect x="100" y="92" width="100" height="5" rx="2.5" />
        <rect x="100" y="104" width="76" height="5" rx="2.5" />
      </g>
    </g>

    {/* Decorative sparkles */}
    <g fill="#6fc3e8">
      <circle cx="250" cy="70" r="3" fillOpacity="0.5" />
      <circle cx="232" cy="96" r="2" fillOpacity="0.35" />
      <circle cx="268" cy="410" r="2.5" fillOpacity="0.4" />
    </g>
  </svg>
);
