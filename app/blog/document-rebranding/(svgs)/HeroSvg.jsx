// /app/blog/document-rebranding/(svgs)/HeroSvg.jsx
// Hard-coded theme hex (token names): $accent #046999, $accent-light #e8f4fa,
// $dark-surface #18232e, $text-primary #0d1b2a, accent on dark #5bbce6.
// Before to after: the same document structure, old brand to new brand.

export default function HeroSvg() {
  return (
    <svg
      viewBox="0 0 520 400"
      role="img"
      aria-labelledby="drb-hero-title drb-hero-desc"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "100%", height: "auto" }}
    >
      <title id="drb-hero-title">A document before and after a rebrand</title>
      <desc id="drb-hero-desc">
        Two pages with the same layout. The old page uses muted grey branding.
        The new page has the updated header colour and logo, and the headings,
        body text and signature block are unchanged.
      </desc>
      <defs>
        <marker
          id="drb-hero-arrow"
          viewBox="0 0 10 10"
          refX="8"
          refY="5"
          markerWidth="8"
          markerHeight="8"
          orient="auto-start-reverse"
        >
          <path d="M0 0 L10 5 L0 10 z" fill="#5bbce6" />
        </marker>
      </defs>

      <rect
        x="1"
        y="1"
        width="518"
        height="398"
        rx="16"
        fill="#18232e"
        stroke="rgba(255,255,255,0.12)"
      />

      {/* Old page */}
      <rect
        x="40"
        y="70"
        width="170"
        height="230"
        rx="10"
        fill="#2b3947"
        stroke="#3d4d5d"
      />
      <rect x="52" y="84" width="146" height="16" rx="4" fill="#64748b" />
      <circle cx="66" cy="132" r="12" fill="#64748b" />
      <rect x="86" y="126" width="80" height="12" rx="3" fill="#475569" />
      <rect x="52" y="160" width="146" height="8" rx="3" fill="#475569" />
      <rect x="52" y="178" width="120" height="8" rx="3" fill="#475569" />
      <rect x="52" y="196" width="140" height="8" rx="3" fill="#475569" />
      <rect x="52" y="214" width="100" height="8" rx="3" fill="#475569" />
      <rect
        x="52"
        y="248"
        width="146"
        height="34"
        rx="8"
        fill="#334155"
        stroke="#64748b"
      />
      <rect x="62" y="260" width="90" height="8" rx="3" fill="#64748b" />

      {/* Arrow */}
      <path
        d="M225 185 H293"
        stroke="#5bbce6"
        strokeWidth="4"
        strokeLinecap="round"
        markerEnd="url(#drb-hero-arrow)"
      />
      <text
        x="260"
        y="214"
        textAnchor="middle"
        fontSize="14"
        fill="rgba(255,255,255,0.65)"
      >
        Same
      </text>
      <text
        x="260"
        y="232"
        textAnchor="middle"
        fontSize="14"
        fill="rgba(255,255,255,0.65)"
      >
        structure
      </text>

      {/* New page */}
      <rect x="310" y="70" width="170" height="230" rx="10" fill="#ffffff" />
      <path
        d="M310 106 V80 a10 10 0 0 1 10-10 H470 a10 10 0 0 1 10 10 V106 Z"
        fill="#046999"
      />
      <rect x="326" y="82" width="60" height="12" rx="3" fill="#ffffff" />
      <circle cx="326" cy="132" r="12" fill="#046999" />
      <circle cx="326" cy="132" r="5" fill="#5bbce6" />
      <rect x="346" y="126" width="80" height="12" rx="3" fill="#0d1b2a" />
      <rect x="322" y="160" width="146" height="8" rx="3" fill="#cbd5e1" />
      <rect x="322" y="178" width="120" height="8" rx="3" fill="#cbd5e1" />
      <rect x="322" y="196" width="140" height="8" rx="3" fill="#cbd5e1" />
      <rect x="322" y="214" width="100" height="8" rx="3" fill="#cbd5e1" />
      <rect
        x="322"
        y="248"
        width="146"
        height="34"
        rx="8"
        fill="#e8f4fa"
        stroke="#046999"
      />
      <rect x="332" y="260" width="90" height="8" rx="3" fill="#046999" />

      <text
        x="125"
        y="338"
        textAnchor="middle"
        fontSize="16"
        fill="rgba(255,255,255,0.75)"
      >
        Old brand
      </text>
      <text x="395" y="338" textAnchor="middle" fontSize="16" fill="#5bbce6">
        New brand
      </text>
    </svg>
  );
}
