// app/services/microsoft-publisher/(svgs)/RebuildSvg.jsx
// Before and after: a Publisher page of loose, coordinate-pinned frames (one overlapping,
// one overflowing) beside the same page rebuilt as a Word template, aligned to margins
// and labelled with the styles that now drive it. Original artwork.
// Hex values mirror globals.scss tokens: #046999 $accent, #0d1b2a $text-primary,
// #9a9da1 $text-muted, #e3e8ec $line, #c0392b $replace-x, #fdf6f5 $before-bg.

export const RebuildSvg = () => (
  <svg
    viewBox="0 0 540 368"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    focusable="false"
  >
    {/* ── Before: Publisher frames ── */}
    <text x="10" y="36" fill="#9a9da1" fontSize="10" fontWeight="700" letterSpacing="2">
      BEFORE · PUBLISHER
    </text>
    <g transform="translate(10 52)">
      <rect width="200" height="300" rx="16" fill="#fdf6f5" />
      {/* Masthead frame, pinned by coordinates */}
      <rect x="18" y="20" width="158" height="30" rx="4" stroke="#c0392b" strokeDasharray="3 3" />
      <rect x="28" y="30" width="90" height="10" rx="3" fill="#0d1b2a" fillOpacity="0.7" />
      <text x="18" y="62" fill="#c0392b" fontSize="8" fontWeight="700">
        x 1.2 cm · y 0.8 cm
      </text>
      {/* Picture frame, nudged off-grid */}
      <g transform="rotate(-3 62 112)">
        <rect x="18" y="74" width="88" height="70" rx="4" fill="#e3e8ec" stroke="#c0392b" strokeDasharray="3 3" />
      </g>
      {/* Text frame overlapping the picture */}
      <rect x="92" y="96" width="88" height="80" rx="4" fill="#ffffff" stroke="#c0392b" strokeDasharray="3 3" />
      <g fill="#9a9da1" fillOpacity="0.7">
        <rect x="100" y="106" width="70" height="4" rx="2" />
        <rect x="100" y="116" width="64" height="4" rx="2" />
        <rect x="100" y="126" width="70" height="4" rx="2" />
        <rect x="100" y="136" width="52" height="4" rx="2" />
        <rect x="100" y="146" width="70" height="4" rx="2" />
        <rect x="100" y="156" width="60" height="4" rx="2" />
      </g>
      {/* Overflow marker */}
      <rect x="164" y="168" width="22" height="13" rx="2" fill="#ffffff" stroke="#c0392b" />
      <text x="175" y="177.5" textAnchor="middle" fill="#c0392b" fontSize="8.5" fontWeight="700">
        A…
      </text>
      {/* Body frame, a little too wide for the page */}
      <rect x="14" y="196" width="178" height="74" rx="4" stroke="#c0392b" strokeDasharray="3 3" />
      <g fill="#9a9da1" fillOpacity="0.7">
        <rect x="24" y="208" width="150" height="4" rx="2" />
        <rect x="24" y="218" width="140" height="4" rx="2" />
        <rect x="24" y="228" width="156" height="4" rx="2" />
        <rect x="24" y="238" width="120" height="4" rx="2" />
        <rect x="24" y="248" width="150" height="4" rx="2" />
      </g>
      <text x="14" y="288" fill="#c0392b" fontSize="8" fontWeight="700">
        x 0.4 cm · y 9.6 cm
      </text>
    </g>

    {/* ── Arrow between ── */}
    <circle cx="255" cy="202" r="20" fill="#046999" />
    <path
      d="M246 202h17M257 195l7 7-7 7"
      stroke="#ffffff"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    {/* ── After: Word template driven by styles ── */}
    <text x="300" y="36" fill="#9a9da1" fontSize="10" fontWeight="700" letterSpacing="2">
      AFTER · WORD TEMPLATE
    </text>
    <g transform="translate(300 52)">
      <rect width="200" height="300" rx="16" fill="#ffffff" stroke="#e3e8ec" />
      {/* Margin guides */}
      <path d="M18 14v272M182 14v272" stroke="#e3e8ec" strokeDasharray="3 4" />
      {/* Title */}
      <rect x="18" y="22" width="120" height="12" rx="3" fill="#0d1b2a" />
      {/* Heading */}
      <rect x="18" y="52" width="88" height="8" rx="3" fill="#046999" />
      {/* Two even columns: picture, then text */}
      <rect x="18" y="72" width="78" height="64" rx="4" fill="#e3e8ec" />
      <path d="M24 130l18-18 12 12 8-8 28 14" stroke="#9a9da1" strokeWidth="1.5" />
      <g fill="#9a9da1" fillOpacity="0.7">
        <rect x="104" y="74" width="78" height="4" rx="2" />
        <rect x="104" y="84" width="72" height="4" rx="2" />
        <rect x="104" y="94" width="78" height="4" rx="2" />
        <rect x="104" y="104" width="64" height="4" rx="2" />
        <rect x="104" y="114" width="78" height="4" rx="2" />
        <rect x="104" y="124" width="58" height="4" rx="2" />
      </g>
      {/* Caption */}
      <rect x="18" y="144" width="60" height="4" rx="2" fill="#046999" fillOpacity="0.6" />
      {/* Body text */}
      <g fill="#9a9da1" fillOpacity="0.7">
        <rect x="18" y="172" width="164" height="4" rx="2" />
        <rect x="18" y="182" width="156" height="4" rx="2" />
        <rect x="18" y="192" width="164" height="4" rx="2" />
        <rect x="18" y="202" width="130" height="4" rx="2" />
        <rect x="18" y="212" width="164" height="4" rx="2" />
        <rect x="18" y="222" width="108" height="4" rx="2" />
      </g>
      {/* Content control placeholder for staff to fill in */}
      <rect x="18" y="242" width="164" height="26" rx="6" fill="#f7f8f9" />
      <rect x="28" y="252" width="80" height="6" rx="3" fill="#046999" fillOpacity="0.35" />
    </g>

    {/* Style labels overlapping the right edge, each lined up with its element */}
    <g fontSize="9" fontWeight="700" textAnchor="middle">
      <rect x="452" y="70" width="76" height="20" rx="10" fill="#0d1b2a" />
      <text x="490" y="83.5" fill="#ffffff">
        Title
      </text>
      <rect x="452" y="98" width="76" height="20" rx="10" fill="#046999" />
      <text x="490" y="111.5" fill="#ffffff">
        Heading 1
      </text>
      <rect x="452" y="186" width="76" height="20" rx="10" fill="#046999" />
      <text x="490" y="199.5" fill="#ffffff">
        Caption
      </text>
      <rect x="452" y="244" width="76" height="20" rx="10" fill="#046999" />
      <text x="490" y="257.5" fill="#ffffff">
        Body
      </text>
      <rect x="452" y="300" width="76" height="20" rx="10" fill="#0d1b2a" />
      <text x="490" y="313.5" fill="#ffffff">
        Fill-in field
      </text>
    </g>
  </svg>
);
