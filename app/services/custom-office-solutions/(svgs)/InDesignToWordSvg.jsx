// app/services/custom-office-solutions/(svgs)/InDesignToWordSvg.jsx
// Design section illustration: a fixed InDesign/PDF layout on the left is rebuilt as a
// working Word template on the right, with style tags, a fill-in field and a styled table.
// Decorative only, so it is hidden from assistive tech.
// Colours are hardcoded hex values that match globals.scss.

// Style rows on the Word page. `y` is the top of each row's tag pill.
const tags = [
  { label: "H1", y: 64 },
  { label: "Body", y: 90 },
  { label: "Field", y: 131 },
  { label: "Table", y: 163 },
  { label: "Note", y: 222 },
];

// Text-line widths for the two columns on the InDesign page
const columnLines = [64, 64, 60, 64, 52, 64];

export const InDesignToWordSvg = () => (
  <svg
    viewBox="0 0 480 310"
    width="480"
    height="310"
    fill="none"
    aria-hidden="true"
    focusable="false"
  >
    {/* ── Left: designed layout (InDesign or PDF) ── */}
    <rect
      x="16"
      y="24"
      width="172"
      height="232"
      rx="12"
      fill="#f7f8f9"
      stroke="#e3e8ec"
      strokeWidth="1.5"
    />
    {/* Hero image block */}
    <rect x="32" y="40" width="140" height="70" rx="8" fill="#034e72" />
    <polygon
      points="44,100 70,70 88,90 100,78 126,100"
      fill="rgba(255, 255, 255, 0.35)"
    />
    <circle cx="150" cy="60" r="8" fill="rgba(255, 255, 255, 0.35)" />
    {/* Headline */}
    <rect x="32" y="124" width="110" height="10" rx="3" fill="#0d1b2a" />
    {/* Two text columns */}
    {columnLines.map((w, i) => (
      <g key={`col-${i}`}>
        <rect x="32" y={146 + i * 12} width={w} height="5" rx="2.5" fill="#d4d6d9" />
        <rect x="108" y={146 + i * 12} width={w} height="5" rx="2.5" fill="#d4d6d9" />
      </g>
    ))}
    <rect x="32" y="218" width="50" height="5" rx="2.5" fill="#d4d6d9" />
    <rect x="32" y="230" width="40" height="5" rx="2.5" fill="#d4d6d9" />
    {/* Pull quote */}
    <rect x="108" y="218" width="64" height="24" rx="4" fill="rgba(4, 105, 153, 0.12)" />
    <rect x="116" y="227" width="44" height="5" rx="2.5" fill="#046999" />

    <text x="102" y="282" textAnchor="middle" fill="#0d1b2a" fontSize="13" fontWeight="700" fontFamily="inherit">
      .indd or PDF
    </text>
    <text x="102" y="300" textAnchor="middle" fill="#9a9da1" fontSize="11" fontFamily="inherit">
      Looks right, can&apos;t be edited
    </text>

    {/* ── Middle: rebuild arrow ── */}
    <line x1="198" y1="140" x2="218" y2="140" stroke="#d4d6d9" strokeWidth="2" strokeLinecap="round" />
    <line x1="262" y1="140" x2="280" y2="140" stroke="#d4d6d9" strokeWidth="2" strokeLinecap="round" />
    <path d="M274 133l7 7-7 7" stroke="#d4d6d9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="240" cy="140" r="20" fill="#046999" />
    <path d="M231 140l6 6 12-12" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    <text x="240" y="178" textAnchor="middle" fill="#9a9da1" fontSize="11" fontFamily="inherit">
      Rebuilt
    </text>

    {/* ── Right: working Word template ── */}
    <rect
      x="292"
      y="24"
      width="172"
      height="232"
      rx="12"
      fill="#ffffff"
      stroke="#d4d6d9"
      strokeWidth="1.5"
    />
    {/* Title bar: rounded rect plus a square strip so only the top corners are rounded */}
    <rect x="292" y="24" width="172" height="26" rx="12" fill="#046999" />
    <rect x="292" y="38" width="172" height="12" fill="#046999" />
    <circle cx="306" cy="37" r="2.5" fill="rgba(255, 255, 255, 0.6)" />
    <circle cx="316" cy="37" r="2.5" fill="rgba(255, 255, 255, 0.6)" />
    <circle cx="326" cy="37" r="2.5" fill="rgba(255, 255, 255, 0.6)" />
    <text x="452" y="41" textAnchor="end" fill="#ffffff" fontSize="10" fontWeight="700" fontFamily="inherit">
      Template.dotx
    </text>

    {/* Style tag pills down the left margin */}
    {tags.map(({ label, y }) => (
      <g key={label}>
        <rect x="302" y={y} width="36" height="14" rx="7" fill="rgba(4, 105, 153, 0.1)" />
        <text x="320" y={y + 10} textAnchor="middle" fill="#046999" fontSize="8" fontWeight="700" fontFamily="inherit">
          {label}
        </text>
      </g>
    ))}

    {/* H1 */}
    <rect x="346" y="66" width="100" height="10" rx="3" fill="#0d1b2a" />
    {/* Body text */}
    <rect x="346" y="92" width="104" height="5" rx="2.5" fill="#d4d6d9" />
    <rect x="346" y="102" width="96" height="5" rx="2.5" fill="#d4d6d9" />
    <rect x="346" y="112" width="70" height="5" rx="2.5" fill="#d4d6d9" />
    {/* Fill-in field (content control) */}
    <rect x="346" y="128" width="104" height="20" rx="4" fill="#f7f8f9" stroke="#9a9da1" strokeDasharray="3 3" />
    <text x="354" y="142" fill="#9a9da1" fontSize="9" fontFamily="inherit">
      Client name
    </text>
    {/* Styled table */}
    <rect x="346" y="160" width="104" height="48" rx="4" stroke="#e3e8ec" strokeWidth="1.5" />
    <rect x="346" y="160" width="104" height="12" rx="4" fill="#111820" />
    <rect x="346" y="166" width="104" height="6" fill="#111820" />
    <path d="M346 184h104M346 196h104M380 172v36M414 172v36" stroke="#e3e8ec" strokeWidth="1.5" />
    {/* Note */}
    <rect x="346" y="224" width="90" height="5" rx="2.5" fill="#d4d6d9" />
    <rect x="346" y="234" width="60" height="5" rx="2.5" fill="#d4d6d9" />

    <text x="378" y="282" textAnchor="middle" fill="#0d1b2a" fontSize="13" fontWeight="700" fontFamily="inherit">
      .docx or .dotx
    </text>
    <text x="378" y="300" textAnchor="middle" fill="#9a9da1" fontSize="11" fontFamily="inherit">
      Styled, locked and editable
    </text>
  </svg>
);
