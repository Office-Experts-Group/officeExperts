// app/test-page/(svgs)/HomeIcons.jsx
// Line icons for the new home page sections. All use currentColor, so the
// parent's colour sets them, and are decorative (aria-hidden).

// Shared stroke settings so every icon has the same line weight
const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

// HomeTrust: specialists in nearly every major city
export const TeamMapIcon = () => (
  <svg viewBox="0 0 32 32" width="32" height="32" aria-hidden="true" {...stroke}>
    <path d="M16 28s-8-7.4-8-14a8 8 0 0 1 16 0c0 6.6-8 14-8 14Z" />
    <circle cx="16" cy="13" r="2.6" />
    <path d="M16 15.6c-2.4 0-4 1.3-4 3" />
    <path d="M16 15.6c2.4 0 4 1.3 4 3" />
  </svg>
);

// HomeTrust: plain English conversations
export const ChatIcon = () => (
  <svg viewBox="0 0 32 32" width="32" height="32" aria-hidden="true" {...stroke}>
    <path d="M5 8.5A3.5 3.5 0 0 1 8.5 5h11A3.5 3.5 0 0 1 23 8.5v6a3.5 3.5 0 0 1-3.5 3.5H12l-5 4v-4.3A3.5 3.5 0 0 1 5 14.5Z" />
    <path d="M23 11h.5A3.5 3.5 0 0 1 27 14.5v6a3.5 3.5 0 0 1-2 3.2V28l-4.6-3.6H17a3.5 3.5 0 0 1-3.2-2" />
    <path d="M10 10.5h8M10 14h5" />
  </svg>
);

// HomeTrust: still here after go-live
export const SupportIcon = () => (
  <svg viewBox="0 0 32 32" width="32" height="32" aria-hidden="true" {...stroke}>
    <circle cx="16" cy="16" r="11" />
    <circle cx="16" cy="16" r="4.5" />
    <path d="m8.2 8.2 4.6 4.6M19.2 19.2l4.6 4.6M23.8 8.2l-4.6 4.6M12.8 19.2l-4.6 4.6" />
  </svg>
);

// HomeTestimonials: large opening quote mark
export const QuoteIcon = () => (
  <svg viewBox="0 0 32 24" width="32" height="24" aria-hidden="true" fill="currentColor">
    <path d="M0 24V14.4C0 6.6 4.3 1.8 11.4 0l1.4 3.4C8.9 4.8 7 7.5 6.8 11H13v13H0Zm19 0V14.4C19 6.6 23.3 1.8 30.4 0l1.4 3.4C27.9 4.8 26 7.5 25.8 11H32v13H19Z" />
  </svg>
);

// HomeLocations: map pin for each city link
export const PinIcon = () => (
  <svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true" {...stroke}>
    <path d="M8 14.5S3 10 3 6.3a5 5 0 0 1 10 0C13 10 8 14.5 8 14.5Z" />
    <circle cx="8" cy="6.3" r="1.7" />
  </svg>
);

// Testimonials pause/play toggle
export const PauseIcon = () => (
  <svg viewBox="0 0 12 12" width="12" height="12" aria-hidden="true" fill="currentColor">
    <rect x="2" y="1.5" width="2.6" height="9" rx="1" />
    <rect x="7.4" y="1.5" width="2.6" height="9" rx="1" />
  </svg>
);

export const PlayIcon = () => (
  <svg viewBox="0 0 12 12" width="12" height="12" aria-hidden="true" fill="currentColor">
    <path d="M3 1.8v8.4a.6.6 0 0 0 .9.5l6.6-4.2a.6.6 0 0 0 0-1L3.9 1.3a.6.6 0 0 0-.9.5Z" />
  </svg>
);

// Links ("Read all testimonials", "View all locations")
export const ArrowIcon = () => (
  <svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true" {...stroke} strokeWidth="2">
    <path d="M3 8h10M9 4l4 4-4 4" />
  </svg>
);
