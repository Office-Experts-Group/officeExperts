// app/google-docs-to-word-migration/(svgs)/DocumentFlowSvg.jsx

// A stack of loose documents flowing into one finished, approved document.
// Sits on the dark closing panel, so it is drawn in currentColor (white) with a dark tick.
export const DocumentFlowSvg = () => (
  <svg viewBox="0 0 400 320" fill="none" aria-hidden="true">
    {/* Stack of source documents, fading back */}
    {[0, 1, 2].map((i) => (
      <g key={i} opacity={1 - i * 0.28}>
        <rect x={20 + i * 16} y={90 - i * 14} width="100" height="130" rx="8" fill="#111820" stroke="currentColor" strokeWidth="2" />
        <rect x={34 + i * 16} y={106 - i * 14} width="54" height="8" rx="4" fill="currentColor" opacity="0.7" />
        {[126, 138, 150].map((y) => (
          <rect key={y} x={34 + i * 16} y={y - i * 14} width="72" height="5" rx="2.5" fill="currentColor" opacity="0.45" />
        ))}
      </g>
    ))}

    {/* Flow */}
    <path d="M150 150c40 0 50-10 80-10" stroke="currentColor" strokeWidth="2.5" strokeDasharray="6 7" strokeLinecap="round" opacity="0.7" />
    {[170, 190, 210].map((x, i) => (
      <circle key={x} cx={x} cy={149 - i * 3} r="4.5" fill="currentColor" opacity={0.3 + i * 0.3} />
    ))}

    {/* Finished document */}
    <rect x="236" y="30" width="148" height="220" rx="10" fill="currentColor" opacity="0.1" />
    <rect x="236" y="30" width="148" height="220" rx="10" stroke="currentColor" strokeWidth="2" />
    <path d="M236 62V40a10 10 0 0 1 10-10h128a10 10 0 0 1 10 10v22z" fill="currentColor" />
    {[250, 270, 290].map((x) => (
      <rect key={x} x={x} y="40" width="14" height="14" rx="4" fill="#111820" opacity="0.7" />
    ))}
    <rect x="252" y="80" width="90" height="12" rx="6" fill="currentColor" />
    {[106, 118, 130, 142].map((y, i) => (
      <rect key={y} x="252" y={y} width={[116, 100, 116, 76][i]} height="5" rx="2.5" fill="currentColor" opacity="0.5" />
    ))}
    <rect x="252" y="166" width="116" height="48" rx="5" stroke="currentColor" strokeWidth="1.5" opacity="0.7" />
    <path d="M252 182h116M290 166v48M330 166v48" stroke="currentColor" strokeWidth="1.5" opacity="0.7" />

    {/* Approval badge */}
    <circle cx="368" cy="244" r="26" fill="currentColor" />
    <path d="M356 244l9 9 15-18" stroke="#111820" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
