// app/corporate-identity/(svgs)/BrandedDocumentSvg.jsx

// A single annotated document, built to sit inside CorporateIdentityAnatomy.
// Each numbered marker on the page corresponds to a zone in the copy list
// rendered alongside it, so the component and this file share numbering —
// if the callouts here change position, update the copy list to match.
export const BrandedDocumentSvg = () => (
  <svg
    viewBox="0 0 480 600"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="bd-pageGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#ffffff" />
        <stop offset="100%" stopColor="#f7fbfd" />
      </linearGradient>
      <linearGradient id="bd-headerGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#046999" />
        <stop offset="100%" stopColor="#0a85bf" />
      </linearGradient>
      <filter id="bd-pageShadow" x="-20%" y="-10%" width="140%" height="120%">
        <feDropShadow
          dx="0"
          dy="18"
          stdDeviation="24"
          floodColor="#0d1b2a"
          floodOpacity="0.16"
        />
      </filter>
    </defs>

    {/* ── Page body ── */}
    <rect
      x="40"
      y="20"
      width="400"
      height="560"
      rx="6"
      fill="url(#bd-pageGrad)"
      stroke="#e2edf4"
      strokeWidth="1.5"
      filter="url(#bd-pageShadow)"
    />

    {/* ── 1. Branded header / logo lockup ── */}
    <rect x="40" y="20" width="400" height="64" rx="6" fill="url(#bd-headerGrad)" />
    <rect x="40" y="66" width="400" height="18" fill="url(#bd-headerGrad)" />
    <rect x="66" y="42" width="34" height="22" rx="3" fill="#ffffff" opacity="0.92" />
    <text x="72" y="58" fontSize="10" fontWeight="800" fill="#046999">OE</text>
    <rect x="112" y="44" width="120" height="8" rx="2" fill="#ffffff" opacity="0.8" />
    <rect x="112" y="58" width="80" height="6" rx="2" fill="#ffffff" opacity="0.55" />
    <rect x="330" y="46" width="80" height="6" rx="2" fill="#ffffff" opacity="0.5" />

    {/* Marker 1 */}
    <circle cx="400" cy="52" r="12" fill="#046999" stroke="#ffffff" strokeWidth="2" />
    <text x="400" y="56" textAnchor="middle" fontSize="11" fontWeight="800" fill="#ffffff">1</text>

    {/* ── Document title block ── */}
    <rect x="66" y="112" width="230" height="16" rx="2" fill="#0d1b2a" opacity="0.85" />
    <rect x="66" y="136" width="140" height="8" rx="2" fill="#9a9da1" />

    {/* ── 2. Heading styles ── */}
    <rect x="66" y="168" width="160" height="10" rx="2" fill="#046999" />
    <rect x="66" y="186" width="330" height="7" rx="2" fill="#d7dee3" />
    <rect x="66" y="200" width="330" height="7" rx="2" fill="#d7dee3" />
    <rect x="66" y="214" width="260" height="7" rx="2" fill="#d7dee3" />

    {/* Marker 2 */}
    <circle cx="240" cy="172" r="12" fill="#046999" stroke="#ffffff" strokeWidth="2" />
    <text x="240" y="176" textAnchor="middle" fontSize="11" fontWeight="800" fill="#ffffff">2</text>

    {/* ── 3. Locked content control (client name field) ── */}
    <rect
      x="66"
      y="240"
      width="200"
      height="26"
      rx="3"
      fill="#e8f4fa"
      stroke="#046999"
      strokeWidth="1.3"
      strokeDasharray="3 2"
    />
    <text x="76" y="257" fontSize="9" fontWeight="700" fill="#046999" fontFamily="monospace">
      [Client Name]
    </text>
    <rect x="280" y="248" width="10" height="10" rx="2" fill="#046999" opacity="0.15" />
    <path d="M283 253l2 2 4-4" stroke="#046999" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />

    {/* Marker 3 */}
    <circle cx="330" cy="253" r="12" fill="#046999" stroke="#ffffff" strokeWidth="2" />
    <text x="330" y="257" textAnchor="middle" fontSize="11" fontWeight="800" fill="#ffffff">3</text>

    {/* Body paragraph lines */}
    <rect x="66" y="290" width="330" height="7" rx="2" fill="#e6e9ec" />
    <rect x="66" y="304" width="330" height="7" rx="2" fill="#e6e9ec" />
    <rect x="66" y="318" width="300" height="7" rx="2" fill="#e6e9ec" />
    <rect x="66" y="332" width="330" height="7" rx="2" fill="#e6e9ec" />
    <rect x="66" y="346" width="220" height="7" rx="2" fill="#e6e9ec" />

    {/* ── 4. Small branded table ── */}
    <rect x="66" y="372" width="330" height="88" rx="3" stroke="#d7dee3" strokeWidth="1.2" fill="none" />
    <rect x="66" y="372" width="330" height="20" rx="3" fill="#e8f4fa" />
    <rect x="66" y="392" width="1" height="68" fill="#d7dee3" />
    <rect x="176" y="372" width="1" height="88" fill="#d7dee3" />
    <rect x="286" y="372" width="1" height="88" fill="#d7dee3" />
    {[392, 414, 436].map((y) => (
      <rect key={y} x="66" y={y} width="330" height="1" fill="#eef1f3" />
    ))}
    <text x="82" y="386" fontSize="8" fontWeight="700" fill="#046999">ITEM</text>
    <text x="192" y="386" fontSize="8" fontWeight="700" fill="#046999">QTY</text>
    <text x="302" y="386" fontSize="8" fontWeight="700" fill="#046999">TOTAL</text>

    {/* Marker 4 */}
    <circle cx="396" cy="380" r="12" fill="#046999" stroke="#ffffff" strokeWidth="2" />
    <text x="396" y="384" textAnchor="middle" fontSize="11" fontWeight="800" fill="#ffffff">4</text>

    {/* ── 5. Footer with page numbering + confidentiality mark ── */}
    <rect x="40" y="536" width="400" height="1" fill="#e2edf4" />
    <rect x="66" y="552" width="90" height="6" rx="2" fill="#c3ccd1" />
    <text x="410" y="558" textAnchor="end" fontSize="8" fill="#9a9da1" fontFamily="monospace">
      Page 1 of 4
    </text>
    <rect x="66" y="566" width="150" height="6" rx="2" fill="#c0392b" opacity="0.55" />

    {/* Marker 5 */}
    <circle cx="240" cy="558" r="12" fill="#046999" stroke="#ffffff" strokeWidth="2" />
    <text x="240" y="562" textAnchor="middle" fontSize="11" fontWeight="800" fill="#ffffff">5</text>

    {/* ── Decorative accent dots, top-right of page ── */}
    {[
      { cx: 452, cy: 100, r: 4, op: 0.3 },
      { cx: 462, cy: 118, r: 3, op: 0.2 },
      { cx: 444, cy: 128, r: 2.5, op: 0.22 },
    ].map(({ cx, cy, r, op }, i) => (
      <circle key={i} cx={cx} cy={cy} r={r} fill="#046999" opacity={op} />
    ))}
  </svg>
);
