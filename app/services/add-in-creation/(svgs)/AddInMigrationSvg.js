// /services/add-in-creation/(svgs)/AddInMigrationSvg.js
// A legacy add-in on top, an arrow, and the same tool rebuilt on a supported platform below.
const legacyPoints = ["Windows only", "Breaks on update", "Not in new Outlook"];
const modernPoints = ["Windows", "Mac", "Web"];

export const AddInMigrationSvg = () => (
  <svg
    viewBox="0 0 520 420"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="aim-accent" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#046999" />
        <stop offset="100%" stopColor="#0a85bf" />
      </linearGradient>
    </defs>

    {/* ── Legacy add-in ── */}
    <rect x="20" y="16" width="480" height="164" rx="24" fill="#f2f3f5" />
    <path
      d="M52 66 L72 30 L92 66 Z"
      fill="#c0392b"
      stroke="#c0392b"
      strokeWidth="6"
      strokeLinejoin="round"
    />
    <rect x="70" y="42" width="4" height="12" rx="2" fill="#ffffff" />
    <circle cx="72" cy="59" r="2.4" fill="#ffffff" />
    <text x="112" y="56" fill="#0d1b2a" fontSize="20" fontWeight="800">
      Legacy add-in
    </text>
    {legacyPoints.map((label, i) => (
      <g key={label}>
        <rect x={52 + i * 132} y="100" width="124" height="34" rx="17" fill="#ffffff" />
        <text
          x={52 + i * 132 + 62}
          y="122"
          textAnchor="middle"
          fill="#4a5568"
          fontSize="12"
          fontWeight="600"
        >
          {label}
        </text>
      </g>
    ))}
    <rect x="52" y="148" width="190" height="8" rx="4" fill="#cfd4d9" />

    {/* ── Arrow ── */}
    <circle cx="260" cy="210" r="24" fill="#0d1b2a" />
    <path
      d="M260 198 V220 M250 211 L260 221 L270 211"
      fill="none"
      stroke="#ffffff"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    {/* ── Rebuilt on a supported platform ── */}
    <rect x="20" y="240" width="480" height="164" rx="24" fill="url(#aim-accent)" />
    <circle cx="72" cy="282" r="20" fill="#ffffff" />
    <path
      d="M63 282 l7 7 l12 -14"
      fill="none"
      stroke="#046999"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <text x="112" y="290" fill="#ffffff" fontSize="20" fontWeight="800">
      Supported and maintained
    </text>
    {modernPoints.map((label, i) => (
      <g key={label}>
        <rect
          x={52 + i * 100}
          y="330"
          width="88"
          height="34"
          rx="17"
          fill="#ffffff"
          opacity="0.2"
        />
        <text
          x={52 + i * 100 + 44}
          y="352"
          textAnchor="middle"
          fill="#ffffff"
          fontSize="13"
          fontWeight="700"
        >
          {label}
        </text>
      </g>
    ))}
    <text x="364" y="352" fill="#ffffff" fontSize="13" opacity="0.85">
      Deployed centrally
    </text>
  </svg>
);
