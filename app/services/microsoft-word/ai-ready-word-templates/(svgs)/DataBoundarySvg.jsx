// app/copilot-and-ai-templates/(svgs)/DataBoundarySvg.jsx
// What stays inside a Microsoft 365 tenant (Copilot grounded in your content,
// governed by your permissions) versus a third-party AI add-in outside it.

const ACCENT = "#046999";
const ACCENT_LIGHT = "#e8f4fa";
const INK = "#0d1b2a";
const SECONDARY = "#4a5568";
const MUTED = "#9a9da1";

// Generic glyphs only (no product logos)
const glyphs = {
  doc: (
    <>
      <path d="M-9-12h12l6 6v18h-18z" fill="none" stroke={ACCENT} strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M-5-2h10M-5 3h10M-5 8h6" stroke={ACCENT} strokeWidth="1.6" strokeLinecap="round" />
    </>
  ),
  mail: (
    <>
      <rect x="-12" y="-8" width="24" height="17" rx="2" fill="none" stroke={ACCENT} strokeWidth="1.6" />
      <path d="M-12-7l12 9 12-9" fill="none" stroke={ACCENT} strokeWidth="1.6" strokeLinejoin="round" />
    </>
  ),
  folder: (
    <path d="M-12-8h8l3 3h13v14h-24z" fill="none" stroke={ACCENT} strokeWidth="1.6" strokeLinejoin="round" />
  ),
  shield: (
    <>
      <path d="M0-12l10 4v7c0 7-4.5 11-10 13-5.5-2-10-6-10-13v-7z" fill="none" stroke={ACCENT} strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M-4 0l3 3 5-6" fill="none" stroke={ACCENT} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
};

const sparkle =
  "M0-14c1.6 8.3 4.8 11.4 13 13-8.2 1.6-11.4 4.8-13 13-1.6-8.2-4.8-11.4-13-13 8.2-1.6 11.4-4.7 13-13z";

// Satellite nodes around Copilot, inside the tenant
const nodes = [
  { cx: 80, cy: 110, glyph: "doc", label: "Documents" },
  { cx: 80, cy: 230, glyph: "mail", label: "Email" },
  { cx: 290, cy: 110, glyph: "folder", label: "SharePoint" },
  { cx: 290, cy: 230, glyph: "shield", label: "Permissions" },
];

export const DataBoundarySvg = () => (
  <svg
    viewBox="0 0 520 320"
    xmlns="http://www.w3.org/2000/svg"
    fontFamily="inherit"
    aria-hidden="true"
  >
    {/* ── Tenant boundary ── */}
    <rect
      x="16"
      y="20"
      width="340"
      height="280"
      rx="18"
      fill={ACCENT_LIGHT}
      fillOpacity="0.6"
      stroke={ACCENT}
      strokeDasharray="6 5"
    />
    <text x="36" y="48" fontSize="12" fontWeight="700" fill={ACCENT}>
      Your Microsoft 365 tenant
    </text>

    {/* Connectors to Copilot */}
    {nodes.map((n) => (
      <line key={n.label} x1={n.cx} y1={n.cy} x2="185" y2="170" stroke={ACCENT} strokeOpacity="0.35" strokeWidth="1.5" />
    ))}

    {/* Satellite nodes */}
    {nodes.map((n) => (
      <g key={n.label}>
        <rect x={n.cx - 28} y={n.cy - 28} width="56" height="56" rx="12" fill="#fff" stroke={ACCENT} strokeOpacity="0.3" />
        <g transform={`translate(${n.cx} ${n.cy})`}>{glyphs[n.glyph]}</g>
        <text x={n.cx} y={n.cy + 44} fontSize="10.5" fill={SECONDARY} textAnchor="middle">
          {n.label}
        </text>
      </g>
    ))}

    {/* Copilot hub */}
    <circle cx="185" cy="170" r="34" fill={ACCENT} />
    <path d={sparkle} transform="translate(185 170)" fill="#fff" />
    <text x="185" y="224" fontSize="11.5" fontWeight="700" fill={INK} textAnchor="middle">
      Copilot
    </text>

    {/* ── Outside the tenant: third-party add-in ── */}
    <defs>
      <marker id="db-arrow" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="8" markerHeight="8" orient="auto">
        <path d="M0 0l8 4-8 4z" fill={MUTED} />
      </marker>
    </defs>
    <path d="M320 170 H424" stroke={MUTED} strokeWidth="1.5" strokeDasharray="4 4" markerEnd="url(#db-arrow)" />
    <text x="392" y="160" fontSize="9.5" fill={SECONDARY} textAnchor="middle">
      leaves tenant
    </text>
    <rect x="430" y="136" width="72" height="68" rx="12" fill="#fff" stroke={MUTED} strokeDasharray="4 3" />
    <path d={sparkle} transform="translate(466 170)" fill={MUTED} />
    <text x="466" y="224" fontSize="10.5" fill={SECONDARY} textAnchor="middle">
      Third-party
    </text>
    <text x="466" y="238" fontSize="10.5" fill={SECONDARY} textAnchor="middle">
      AI add-in
    </text>
  </svg>
);
