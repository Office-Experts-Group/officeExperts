// app/google-docs-to-word-migration/(svgs)/CustomRibbonSvg.jsx

// A Word-style ribbon with one custom group added. Colour comes from currentColor.
export const CustomRibbonSvg = () => (
  <svg viewBox="0 0 300 160" fill="none" aria-hidden="true">
    {/* Ribbon body */}
    <rect x="10" y="30" width="280" height="110" rx="10" fill="currentColor" opacity="0.1" />
    <rect x="10" y="30" width="280" height="110" rx="10" stroke="currentColor" strokeWidth="2" />

    {/* Tabs, with the first active */}
    <rect x="22" y="12" width="48" height="18" rx="6" fill="currentColor" />
    {[80, 128, 176].map((x) => (
      <rect key={x} x={x} y="16" width="40" height="10" rx="5" fill="currentColor" opacity="0.5" />
    ))}

    {/* Standard groups */}
    {[24, 66].map((x) => (
      <g key={x}>
        <rect x={x} y="46" width="28" height="28" rx="6" fill="currentColor" opacity="0.45" />
        <rect x={x} y="82" width="28" height="6" rx="3" fill="currentColor" opacity="0.4" />
      </g>
    ))}
    <path d="M110 44v82" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />

    {/* Custom group: dashed outline with plus button */}
    <rect x="122" y="42" width="156" height="86" rx="8" stroke="currentColor" strokeWidth="2" strokeDasharray="5 5" />
    {[136, 176, 216].map((x) => (
      <g key={x}>
        <rect x={x} y="54" width="32" height="32" rx="7" fill="currentColor" />
        <path d={`M${x + 10} 70h12`} stroke="#111820" strokeWidth="3" strokeLinecap="round" />
        <rect x={x - 2} y="94" width="36" height="6" rx="3" fill="currentColor" opacity="0.6" />
      </g>
    ))}
    <rect x="136" y="108" width="128" height="6" rx="3" fill="currentColor" opacity="0.3" />
  </svg>
);
