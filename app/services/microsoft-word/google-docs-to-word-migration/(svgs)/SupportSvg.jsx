// app/google-docs-to-word-migration/(svgs)/SupportSvg.jsx

// A headset around a clock face, with a circling arrow for round-the-clock support.
export const SupportSvg = () => (
  <svg viewBox="0 0 120 120" fill="none" aria-hidden="true">
    {/* Clock */}
    <circle cx="60" cy="64" r="30" fill="currentColor" opacity="0.12" />
    <circle cx="60" cy="64" r="30" stroke="currentColor" strokeWidth="2" />
    <path d="M60 46v18l12 8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />

    {/* Headset band and ear cups */}
    <path d="M18 64V58a42 42 0 0 1 84 0v6" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    <rect x="10" y="58" width="14" height="26" rx="5" fill="currentColor" />
    <rect x="96" y="58" width="14" height="26" rx="5" fill="currentColor" />

    {/* Microphone */}
    <path d="M103 84c0 14-12 22-30 22" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    <circle cx="70" cy="106" r="4" fill="currentColor" />

    {/* Circling arrow */}
    <path d="M60 22a42 42 0 0 1 30 12M84 26l8 8-10 3" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.6" />
  </svg>
);
