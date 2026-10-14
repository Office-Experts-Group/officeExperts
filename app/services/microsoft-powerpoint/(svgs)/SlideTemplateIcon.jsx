// app/(svgs)/SlideTemplateIcon.jsx
// Slide layout with a title bar, text lines and an image placeholder,
// for PowerPoint templates and master slides.
// Stroke icon that inherits currentColor.

export const SlideTemplateIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    focusable="false"
  >
    <rect x="3" y="4" width="18" height="16" rx="2" />
    <path d="M3 9h18M7 13h5M7 16h3" />
    <rect x="14" y="12" width="4" height="5" rx="0.5" />
  </svg>
);
