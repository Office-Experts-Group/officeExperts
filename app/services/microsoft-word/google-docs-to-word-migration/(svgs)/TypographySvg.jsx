// app/google-docs-to-word-migration/(svgs)/TypographySvg.jsx

// A large "Aa" sitting on typographic guide lines. Colour comes from currentColor.
export const TypographySvg = () => (
  <svg viewBox="0 0 160 100" fill="none" aria-hidden="true">
    {/* Cap height, x-height and baseline guides */}
    <path d="M8 22h144M8 42h144" stroke="currentColor" strokeWidth="1" strokeDasharray="3 4" opacity="0.5" />
    <path d="M8 74h144" stroke="currentColor" strokeWidth="2" opacity="0.8" />

    <text x="24" y="74" fontSize="64" fontWeight="800" fill="currentColor" letterSpacing="-2">
      Aa
    </text>

    {/* Character spacing arrows */}
    <path d="M100 88h40M104 84l-4 4 4 4M136 84l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="14" cy="74" r="4" fill="currentColor" />
  </svg>
);
