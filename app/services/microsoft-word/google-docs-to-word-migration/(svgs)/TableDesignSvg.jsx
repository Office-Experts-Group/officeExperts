// app/google-docs-to-word-migration/(svgs)/TableDesignSvg.jsx

// A table split across a page break: merged cells, shading, a nested table and a repeated header row.
export const TableDesignSvg = () => (
  <svg viewBox="0 0 160 100" fill="none" aria-hidden="true">
    {/* Header row */}
    <rect x="10" y="6" width="140" height="14" rx="3" fill="currentColor" />

    {/* Body: grid lines, merged cell, shaded cell */}
    <rect x="50" y="20" width="100" height="16" fill="currentColor" opacity="0.25" />
    <rect x="10" y="36" width="40" height="14" fill="currentColor" opacity="0.15" />
    <path d="M10 20h140M10 36h140M10 50h140M50 6v44M100 36v14M10 6v44M150 6v44" stroke="currentColor" strokeWidth="1.5" opacity="0.8" />

    {/* Nested table */}
    <rect x="104" y="39" width="42" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.2" />
    <path d="M125 39v8" stroke="currentColor" strokeWidth="1.2" />

    {/* Page break */}
    <path d="M0 58h160" stroke="currentColor" strokeWidth="2" strokeDasharray="6 5" opacity="0.7" />

    {/* Repeated header row on the next page */}
    <rect x="10" y="66" width="140" height="14" rx="3" fill="currentColor" />
    <rect x="10" y="80" width="140" height="14" fill="currentColor" opacity="0.15" />
    <path d="M10 80h140M10 94h140M50 66v28M100 66v28M10 66v28M150 66v28" stroke="currentColor" strokeWidth="1.5" opacity="0.8" />
  </svg>
);
