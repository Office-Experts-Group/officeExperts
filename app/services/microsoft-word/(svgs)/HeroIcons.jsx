// app/test-page/(svgs)/HeroIcons.jsx
// Small UI icons for the home hero: link arrow and the slideshow pause/play toggle.
// Stroke and fill use currentColor, so they take the colour of their parent.

export const ArrowIcon = () => (
  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path
      d="M3 8h10M9 4l4 4-4 4"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const PauseIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor" aria-hidden="true">
    <rect x="2" y="1.5" width="2.6" height="9" rx="1" />
    <rect x="7.4" y="1.5" width="2.6" height="9" rx="1" />
  </svg>
);

export const PlayIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor" aria-hidden="true">
    <path d="M3 1.8v8.4a.6.6 0 0 0 .9.5l6.6-4.2a.6.6 0 0 0 0-1L3.9 1.3a.6.6 0 0 0-.9.5Z" />
  </svg>
);
