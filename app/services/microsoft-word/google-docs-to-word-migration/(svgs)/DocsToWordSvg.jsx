// app/google-docs-to-word-migration/(svgs)/DocsToWordSvg.jsx

// A plain page on the left becomes a fully structured Word document on the right.
// Purely decorative, so it is hidden from assistive technology.
export const DocsToWordSvg = () => (
  <svg viewBox="0 0 560 380" fill="none" aria-hidden="true">
    {/* ── Basic page (before) ── */}
    <rect x="16" y="70" width="170" height="240" rx="10" fill="#fff" stroke="#cfd5dc" strokeWidth="1.5" />
    <rect x="36" y="96" width="90" height="9" rx="4.5" fill="#9aa3ad" />
    {[124, 142, 160, 178].map((y, i) => (
      <rect key={y} x="36" y={y} width={[130, 118, 130, 86][i]} height="6" rx="3" fill="#dfe3e8" />
    ))}
    <rect x="36" y="204" width="130" height="56" rx="6" fill="#eef0f3" />
    <rect x="36" y="276" width="100" height="6" rx="3" fill="#dfe3e8" />

    {/* ── Migration path ── */}
    <path d="M198 190H272" stroke="#046999" strokeWidth="2.5" strokeDasharray="6 7" strokeLinecap="round" />
    <path d="M262 178l14 12-14 12" stroke="#046999" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    {[210, 230, 250].map((x, i) => (
      <circle key={x} cx={x} cy="190" r="4.5" fill="#046999" opacity={0.3 + i * 0.3} />
    ))}

    {/* ── Structured Word page (after) ── */}
    <rect x="290" y="30" width="250" height="320" rx="12" fill="#fff" stroke="#cfd5dc" strokeWidth="1.5" />

    {/* Ribbon */}
    <path d="M290 74V42a12 12 0 0 1 12-12h226a12 12 0 0 1 12 12v32z" fill="#046999" />
    {[304, 334, 364, 394].map((x, i) => (
      <rect key={x} x={x} y="44" width="22" height="22" rx="5" fill="#fff" opacity={i < 3 ? 0.9 : 0.45} />
    ))}
    <rect x="440" y="44" width="76" height="22" rx="5" fill="#fff" opacity="0.2" />

    {/* Header, title and subtitle */}
    <rect x="310" y="88" width="210" height="10" rx="5" fill="#046999" opacity="0.18" />
    <rect x="310" y="112" width="140" height="14" rx="7" fill="#111820" />
    <rect x="310" y="134" width="90" height="7" rx="3.5" fill="#9aa3ad" />

    {/* Two columns of text */}
    {[0, 1, 2, 3, 4, 5].map((r) => (
      <g key={r}>
        <rect x="310" y={158 + r * 14} width={[96, 84, 96, 90, 96, 60][r]} height="6" rx="3" fill="#dfe3e8" />
        <rect x="424" y={158 + r * 14} width={[96, 96, 80, 96, 70, 96][r]} height="6" rx="3" fill="#dfe3e8" />
      </g>
    ))}

    {/* Table with a dark header row */}
    <rect x="310" y="252" width="210" height="64" rx="6" fill="#fff" stroke="#dfe3e8" strokeWidth="1.5" />
    <path d="M310 270v-12a6 6 0 0 1 6-6h198a6 6 0 0 1 6 6v12z" fill="#111820" />
    <path d="M310 288h210M310 304h210M380 270v46M450 270v46" stroke="#dfe3e8" strokeWidth="1.5" />

    {/* Footer */}
    <rect x="310" y="330" width="60" height="6" rx="3" fill="#9aa3ad" />
    <rect x="490" y="328" width="30" height="10" rx="5" fill="#046999" opacity="0.4" />

    {/* Floating feature chips */}
    <rect x="262" y="100" width="76" height="26" rx="13" fill="#111820" />
    <circle cx="278" cy="113" r="4.5" fill="#fff" opacity="0.85" />
    <rect x="290" y="109" width="36" height="8" rx="4" fill="#fff" opacity="0.5" />

    <rect x="498" y="196" width="58" height="26" rx="13" fill="#046999" />
    <circle cx="514" cy="209" r="4.5" fill="#fff" />
    <rect x="525" y="205" width="22" height="8" rx="4" fill="#fff" opacity="0.6" />

    <rect x="262" y="290" width="70" height="26" rx="13" fill="#111820" />
    <circle cx="278" cy="303" r="4.5" fill="#fff" opacity="0.85" />
    <rect x="290" y="299" width="30" height="8" rx="4" fill="#fff" opacity="0.5" />
  </svg>
);
