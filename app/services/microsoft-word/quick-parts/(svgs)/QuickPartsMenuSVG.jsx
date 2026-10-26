// /services/microsoft-word/quick-parts/(svgs)/QuickPartsMenuSVG.jsx

// Illustration of a Word document with the Insert > Quick Parts menu open.
// Decorative only, so it is hidden from assistive tech.
export const QuickPartsMenuSVG = () => (
  <svg viewBox="0 0 520 440" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <defs>
      <filter id="qp-shadow" x="-10%" y="-10%" width="120%" height="120%">
        <feDropShadow dx="0" dy="6" stdDeviation="10" floodColor="#0d1b2a" floodOpacity="0.12" />
      </filter>
    </defs>

    {/* ── Document page in the background ── */}
    <rect x="20" y="20" width="300" height="400" rx="8" fill="#f2f3f5" />
    <rect x="44" y="48" width="140" height="12" rx="3" fill="#0d1b2a" opacity="0.8" />
    {[78, 94, 110, 126].map((y, i) => (
      <rect key={y} x="44" y={y} width={i === 3 ? 160 : 250} height="6" rx="3" fill="#9a9da1" opacity="0.5" />
    ))}

    {/* Block that has just been inserted from the gallery */}
    <rect x="36" y="150" width="268" height="96" rx="6" fill="#046999" />
    <rect x="52" y="166" width="110" height="8" rx="3" fill="#ffffff" />
    {[186, 200, 214].map((y) => (
      <rect key={y} x="52" y={y} width="230" height="5" rx="2.5" fill="#ffffff" opacity="0.55" />
    ))}
    <text x="52" y="236" fill="#ffffff" fontSize="9" fontWeight="700" letterSpacing="1">
      INSERTED · STANDARD TERMS
    </text>

    {[270, 286, 302, 318, 334].map((y, i) => (
      <rect key={y} x="44" y={y} width={i === 4 ? 120 : 250} height="6" rx="3" fill="#9a9da1" opacity="0.5" />
    ))}

    {/* ── Quick Parts dropdown ── */}
    <g filter="url(#qp-shadow)">
      <rect x="230" y="60" width="270" height="330" rx="10" fill="#ffffff" />
    </g>
    <text x="250" y="88" fill="#0d1b2a" fontSize="11" fontWeight="700">
      General
    </text>

    {/* Gallery thumbnails */}
    {[
      { y: 100, label: "Cover page", active: false },
      { y: 150, label: "Standard terms", active: true },
      { y: 200, label: "Signature block", active: false },
    ].map(({ y, label, active }) => (
      <g key={label}>
        <rect x="246" y={y} width="238" height="42" rx="6" fill={active ? "#046999" : "#f2f3f5"} />
        <rect x="256" y={y + 9} width="34" height="24" rx="3" fill={active ? "#ffffff" : "#d9dde2"} opacity={active ? 0.9 : 1} />
        <text x="302" y={y + 25} fill={active ? "#ffffff" : "#0d1b2a"} fontSize="11" fontWeight="600">
          {label}
        </text>
      </g>
    ))}

    <line x1="246" y1="258" x2="484" y2="258" stroke="#e2e5e9" />

    {/* Menu commands under the gallery */}
    {["AutoText", "Document Property", "Field…", "Building Blocks Organizer…", "Save Selection to Gallery…"].map(
      (item, i) => (
        <text key={item} x="256" y={280 + i * 22} fill="#4a5568" fontSize="10.5">
          {item}
        </text>
      ),
    )}
  </svg>
);
