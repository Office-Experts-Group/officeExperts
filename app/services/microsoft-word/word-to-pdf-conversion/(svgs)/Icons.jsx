// app/word-to-pdf-conversion/(svgs)/Icons.jsx

// Right-pointing chevron, used for expandable rows and links
export const ChevronIcon = () => (
  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path
      d="M6 4l4 4-4 4"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Right-pointing arrow, used for CTA links
export const ArrowIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path
      d="M3 8h10M9 4l4 4-4 4"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Checkmark, used in trust and feature lists
export const CheckIcon = () => (
  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path
      d="M3 8.5l3 3 7-7"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Document-to-document conversion glyph used in the hero and services sections
export const ConversionVisual = () => (
  <svg viewBox="0 0 320 220" fill="none" aria-hidden="true">
    {/* Word document */}
    <rect x="24" y="34" width="110" height="150" rx="6" fill="#046999" opacity="0.08" />
    <rect x="24" y="34" width="110" height="150" rx="6" stroke="#046999" strokeWidth="1.5" />
    <text x="79" y="70" textAnchor="middle" fontSize="22" fontWeight="700" fill="#046999">
      W
    </text>
    <line x1="42" y1="96" x2="116" y2="96" stroke="#046999" strokeWidth="1.2" opacity="0.4" />
    <line x1="42" y1="112" x2="116" y2="112" stroke="#046999" strokeWidth="1.2" opacity="0.4" />
    <line x1="42" y1="128" x2="98" y2="128" stroke="#046999" strokeWidth="1.2" opacity="0.4" />

    {/* Arrow */}
    <path
      d="M148 109h34m0 0l-10-10m10 10l-10 10"
      stroke="#046999"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    {/* PDF document */}
    <rect x="196" y="34" width="110" height="150" rx="6" fill="#0d1b2a" opacity="0.04" />
    <rect x="196" y="34" width="110" height="150" rx="6" stroke="#0d1b2a" strokeWidth="1.5" />
    <rect x="214" y="52" width="46" height="20" rx="3" fill="#c0392b" />
    <text x="237" y="66" textAnchor="middle" fontSize="11" fontWeight="700" fill="#ffffff">
      PDF
    </text>
    <line x1="214" y1="96" x2="288" y2="96" stroke="#0d1b2a" strokeWidth="1.2" opacity="0.3" />
    <line x1="214" y1="112" x2="288" y2="112" stroke="#0d1b2a" strokeWidth="1.2" opacity="0.3" />
    <line x1="214" y1="128" x2="270" y2="128" stroke="#0d1b2a" strokeWidth="1.2" opacity="0.3" />
  </svg>
);
