// app/google-docs-to-word-migration/(svgs)/PageLayoutSvg.jsx

// A page with margin guides, header and footer, two columns and a ruler.
// Uses currentColor so the parent card decides the colour.
export const PageLayoutSvg = () => (
  <svg viewBox="0 0 300 160" fill="none" aria-hidden="true">
    {/* Ruler down the left edge */}
    <path d="M44 8v144" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
    {Array.from({ length: 13 }, (_, i) => (
      <path
        key={i}
        d={`M44 ${14 + i * 11}h${i % 4 === 0 ? 14 : 8}`}
        stroke="currentColor"
        strokeWidth="1.5"
        opacity="0.5"
      />
    ))}

    {/* Page */}
    <rect x="96" y="8" width="108" height="144" rx="6" fill="currentColor" opacity="0.1" />
    <rect x="96" y="8" width="108" height="144" rx="6" stroke="currentColor" strokeWidth="2" />

    {/* Header and footer */}
    <rect x="108" y="18" width="84" height="8" rx="4" fill="currentColor" opacity="0.55" />
    <rect x="108" y="134" width="40" height="6" rx="3" fill="currentColor" opacity="0.55" />
    <circle cx="184" cy="137" r="5" fill="currentColor" />

    {/* Margin guides */}
    <path
      d="M108 34v94M192 34v94M96 34h108M96 128h108M150 34v94"
      stroke="currentColor"
      strokeWidth="1"
      strokeDasharray="3 4"
      opacity="0.5"
    />

    {/* Two columns of text */}
    {[0, 1, 2, 3, 4, 5, 6].map((r) => (
      <g key={r}>
        <rect x="112" y={42 + r * 12} width={[30, 26, 30, 22, 30, 28, 16][r]} height="5" rx="2.5" fill="currentColor" opacity="0.6" />
        <rect x="156" y={42 + r * 12} width={[30, 30, 24, 30, 26, 30, 20][r]} height="5" rx="2.5" fill="currentColor" opacity="0.6" />
      </g>
    ))}

    {/* Style and layout badges */}
    <rect x="232" y="30" width="52" height="24" rx="12" stroke="currentColor" strokeWidth="2" />
    <rect x="244" y="38" width="28" height="8" rx="4" fill="currentColor" opacity="0.7" />
    <rect x="232" y="68" width="52" height="24" rx="12" fill="currentColor" />
    <path d="M250 80h16" stroke="#111820" strokeWidth="3" strokeLinecap="round" />
    <rect x="232" y="106" width="52" height="24" rx="12" stroke="currentColor" strokeWidth="2" />
    <rect x="244" y="114" width="20" height="8" rx="4" fill="currentColor" opacity="0.7" />
  </svg>
);
