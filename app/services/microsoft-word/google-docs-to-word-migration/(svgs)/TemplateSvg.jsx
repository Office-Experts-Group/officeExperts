// app/google-docs-to-word-migration/(svgs)/TemplateSvg.jsx

// A template page with locked layout blocks, content controls and a padlock.
export const TemplateSvg = () => (
  <svg viewBox="0 0 120 120" fill="none" aria-hidden="true">
    <rect x="22" y="8" width="76" height="104" rx="7" fill="currentColor" opacity="0.12" />
    <rect x="22" y="8" width="76" height="104" rx="7" stroke="currentColor" strokeWidth="2" />

    {/* Locked brand block */}
    <rect x="32" y="18" width="56" height="16" rx="4" fill="currentColor" />

    {/* Content controls */}
    <rect x="32" y="44" width="56" height="14" rx="3" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 3" />
    <rect x="32" y="64" width="56" height="14" rx="3" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 3" />
    <rect x="32" y="84" width="34" height="14" rx="3" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 3" />

    {/* Padlock */}
    <circle cx="88" cy="94" r="16" fill="#111820" />
    <rect x="78" y="93" width="20" height="14" rx="3" fill="currentColor" />
    <path d="M82 93v-4a6 6 0 0 1 12 0v4" stroke="currentColor" strokeWidth="2.5" />
  </svg>
);
