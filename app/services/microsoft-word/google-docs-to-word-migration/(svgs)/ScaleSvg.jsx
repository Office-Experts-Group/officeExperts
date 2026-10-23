// app/google-docs-to-word-migration/(svgs)/ScaleSvg.jsx

// Bars growing past a dashed "where Google Docs starts to slow" line.
// Bars below the line are muted; those above it carry on at full strength.
export const ScaleSvg = () => (
  <svg viewBox="0 0 300 160" fill="none" aria-hidden="true">
    <path d="M10 146h280" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />

    {/* Bars: height grows with page count */}
    {[
      { x: 24, h: 26 },
      { x: 62, h: 44 },
      { x: 100, h: 62 },
      { x: 138, h: 84 },
      { x: 176, h: 108 },
      { x: 214, h: 130 },
    ].map(({ x, h }) => (
      <rect
        key={x}
        x={x}
        y={146 - h}
        width="28"
        height={h}
        rx="5"
        fill="currentColor"
        opacity={h > 70 ? 1 : 0.35}
      />
    ))}

    {/* Threshold line */}
    <path d="M10 76h280" stroke="currentColor" strokeWidth="2" strokeDasharray="6 6" opacity="0.7" />
    <circle cx="10" cy="76" r="5" fill="currentColor" />

    {/* Upward arrow */}
    <path d="M268 40v-24M258 26l10-10 10 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
