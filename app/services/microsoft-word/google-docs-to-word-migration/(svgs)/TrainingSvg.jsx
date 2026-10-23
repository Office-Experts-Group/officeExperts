// app/google-docs-to-word-migration/(svgs)/TrainingSvg.jsx

// A screen showing a lesson, with a cursor and a speech bubble.
export const TrainingSvg = () => (
  <svg viewBox="0 0 120 120" fill="none" aria-hidden="true">
    <rect x="12" y="18" width="96" height="66" rx="7" fill="currentColor" opacity="0.12" />
    <rect x="12" y="18" width="96" height="66" rx="7" stroke="currentColor" strokeWidth="2" />
    <path d="M44 96h32M60 84v12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />

    {/* Lesson content */}
    <path d="M26 32h28M26 42h20" stroke="currentColor" strokeWidth="4" strokeLinecap="round" opacity="0.6" />
    <circle cx="82" cy="50" r="14" fill="currentColor" />
    <path d="M78 43l12 7-12 7z" fill="#111820" />

    {/* Cursor */}
    <path d="M52 56l22 8-9 3-3 9z" fill="currentColor" stroke="#111820" strokeWidth="1.5" strokeLinejoin="round" />

    {/* Speech bubble */}
    <path d="M78 6h26a6 6 0 0 1 6 6v8a6 6 0 0 1-6 6h-8l-6 6v-6h-12a6 6 0 0 1-6-6v-8a6 6 0 0 1 6-6z" fill="currentColor" />
    <path d="M82 13h20M82 19h12" stroke="#111820" strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);
