// app/(svgs)/MigrationIcon.jsx
// Arrow carrying content from an older box to a newer, higher one,
// for upgrades and migration. Stroke icon that inherits currentColor.

export const MigrationIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    focusable="false"
  >
    <rect x="2" y="13" width="8" height="8" rx="1.5" />
    <rect x="14" y="3" width="8" height="8" rx="1.5" />
    <path d="M6 13v-3a3 3 0 0 1 3-3h3M10.5 5l2 2-2 2" />
  </svg>
);
