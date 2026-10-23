// app/google-docs-to-word-migration/(svgs)/PositioningSvg.jsx

// An anchored shape with selection handles and text wrapping around it.
export const PositioningSvg = () => (
  <svg viewBox="0 0 160 100" fill="none" aria-hidden="true">
    {/* Text wraps around the shape: rows beside it stop short */}
    {[10, 22, 34, 46, 58, 70, 82].map((y, i) => (
      <rect
        key={y}
        x="8"
        y={y}
        width={y > 20 && y < 72 ? 62 - (i % 2) * 8 : 144 - (i % 3) * 14}
        height="6"
        rx="3"
        fill="currentColor"
        opacity="0.5"
      />
    ))}

    {/* Alignment guides */}
    <path d="M8 46h144M112 6v88" stroke="currentColor" strokeWidth="1" strokeDasharray="3 4" opacity="0.45" />

    {/* Positioned object with corner handles */}
    <rect x="84" y="24" width="56" height="46" rx="6" fill="currentColor" opacity="0.25" />
    <rect x="84" y="24" width="56" height="46" rx="6" stroke="currentColor" strokeWidth="2" />
    {[[84, 24], [140, 24], [84, 70], [140, 70]].map(([x, y]) => (
      <rect key={`${x}${y}`} x={x - 3.5} y={y - 3.5} width="7" height="7" fill="currentColor" />
    ))}

    {/* Anchor */}
    <circle cx="112" cy="46" r="4" fill="currentColor" />
  </svg>
);
