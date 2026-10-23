// app/popup-forms/(svgs)/PopupFormsSVG.js

export const PopupFormsSVG = () => (
  <svg
    viewBox="0 0 520 420"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="pf-cellGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#e8f4fa" />
        <stop offset="100%" stopColor="#d0eaf6" />
      </linearGradient>
      <linearGradient id="pf-accentGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#046999" />
        <stop offset="100%" stopColor="#0a85bf" />
      </linearGradient>
      <filter id="pf-shadow" x="-10%" y="-10%" width="120%" height="120%">
        <feDropShadow
          dx="0"
          dy="4"
          stdDeviation="6"
          floodColor="#046999"
          floodOpacity="0.12"
        />
      </filter>
    </defs>

    {/* ── Background document, behind the popup ── */}
    <rect x="220" y="20" width="260" height="360" rx="6" fill="#fff" stroke="#e2edf4" strokeWidth="1.5" />
    <rect x="248" y="52" width="140" height="10" rx="2" fill="rgba(4,105,153,0.18)" />
    {[92, 116, 140, 164, 188].map((y) => (
      <rect key={y} x="248" y={y} width="204" height="7" rx="2" fill="#eef3f6" />
    ))}
    {/* Merged field placeholders inside the document */}
    <rect x="248" y="212" width="90" height="9" rx="2" fill="url(#pf-cellGrad)" />
    <rect x="346" y="212" width="106" height="9" rx="2" fill="url(#pf-cellGrad)" opacity="0.7" />
    {[248, 272, 296].map((y) => (
      <rect key={y} x="248" y={y + 12} width="204" height="7" rx="2" fill="#eef3f6" />
    ))}

    {/* ── Popup form window, foreground ── */}
    <rect
      x="30"
      y="90"
      width="240"
      height="260"
      rx="8"
      fill="#fff"
      stroke="#046999"
      strokeWidth="1.8"
      filter="url(#pf-shadow)"
    />

    {/* Title bar */}
    <rect x="30" y="90" width="240" height="34" rx="8" fill="url(#pf-accentGrad)" />
    <rect x="30" y="112" width="240" height="12" fill="url(#pf-accentGrad)" />
    <text x="48" y="112" fill="#fff" fontSize="12" fontWeight="700" letterSpacing="0.5">
      Client Intake Form
    </text>
    {/* Close control */}
    <circle cx="252" cy="107" r="7" fill="rgba(255,255,255,0.18)" />
    <path d="M249 104l6 6M255 104l-6 6" stroke="#fff" strokeWidth="1.4" strokeLinecap="round" />

    {/* Field 1 — text input, filled */}
    <text x="48" y="146" fill="#4a5568" fontSize="9" fontWeight="600">Full name</text>
    <rect x="48" y="152" width="192" height="24" rx="4" fill="url(#pf-cellGrad)" stroke="#046999" strokeWidth="1.3" />
    <text x="58" y="168" fill="#0d1b2a" fontSize="10">Amelia Ferreira</text>

    {/* Field 2 — dropdown */}
    <text x="48" y="192" fill="#4a5568" fontSize="9" fontWeight="600">Department</text>
    <rect x="48" y="198" width="192" height="24" rx="4" fill="#f7fafc" stroke="rgba(4,105,153,0.3)" strokeWidth="1.2" />
    <text x="58" y="214" fill="#4a5568" fontSize="10">Client Services ▾</text>

    {/* Field 3 — validated date field, green tick */}
    <text x="48" y="238" fill="#4a5568" fontSize="9" fontWeight="600">Start date</text>
    <rect x="48" y="244" width="150" height="24" rx="4" fill="#f7fafc" stroke="rgba(4,105,153,0.3)" strokeWidth="1.2" />
    <text x="58" y="260" fill="#4a5568" fontSize="10">14 / 09 / 2026</text>
    <circle cx="222" cy="256" r="10" fill="#046999" />
    <path d="M217 256l3.5 3.5L227 252" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />

    {/* Submit button */}
    <rect x="48" y="292" width="192" height="34" rx="6" fill="url(#pf-accentGrad)" />
    <text x="144" y="313" textAnchor="middle" fill="#fff" fontSize="11" fontWeight="700">
      Insert into Document
    </text>

    {/* ── Connector arrow from form to document ── */}
    <path
      d="M 270 220 C 300 220, 300 220, 220 220"
      stroke="#046999"
      strokeWidth="1.6"
      strokeDasharray="4 3"
      opacity="0.55"
      fill="none"
    />
    <path
      d="M226 214l-8 6 8 6"
      stroke="#046999"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
      opacity="0.55"
    />

    {/* ── Accent dot cluster ── */}
    {[
      { cx: 470, cy: 40, r: 5, op: 0.3 },
      { cx: 486, cy: 58, r: 3, op: 0.2 },
      { cx: 495, cy: 30, r: 4, op: 0.25 },
    ].map(({ cx, cy, r, op }, i) => (
      <circle key={i} cx={cx} cy={cy} r={r} fill="#046999" opacity={op} />
    ))}
  </svg>
);
