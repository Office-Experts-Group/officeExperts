// app/(svgs)/ServiceStoryIcons.jsx
// Original platform icons for the home hero services story. Each is a coloured
// rounded tile with a simple line glyph, in the colour family people associate
// with the product, so they read as "Word", "Excel" and so on without using
// Microsoft's artwork, letters or shapes. Drawn in a 56 x 56 box centred on 0,0.
// Tile colours are set per platform in servicesStory.module.scss (data-tone).

// Same stylesheet as ServicesStory, for the tile, sheen and glyph classes
import styles from "@/styles/servicesStory.module.scss";

// Line glyphs, drawn in a 32 x 32 box centred on 0,0
const glyphs = {
  // Page with a folded corner and text lines
  word: (
    <>
      <path d="M-9 -13h11l7 7v19h-18z M2 -13v7h7" className={styles.glyph} />
      <path d="M-5 0h10M-5 5h10M-5 10h6" className={styles.glyph} />
    </>
  ),
  // Grid with one highlighted cell
  excel: (
    <>
      <rect x="-12" y="-12" width="24" height="24" rx="4" className={styles.glyph} />
      <rect x="-4" y="-4" width="8" height="8" className={styles.glyphFill} />
      <path d="M-12 -4h24M-12 4h24M-4 -12v24M4 -12v24" className={styles.glyph} />
    </>
  ),
  // Presentation screen on a stand, with a pie chart
  powerpoint: (
    <>
      <rect x="-13" y="-12" width="26" height="18" rx="2.5" className={styles.glyph} />
      <path d="M0 6v6M-5 13h10" className={styles.glyph} />
      <path d="M-1 -3a4.5 4.5 0 1 0 4.5 4.5h-4.5z" className={styles.glyphFill} />
      <path d="M1.5 -5a4.5 4.5 0 0 1 4.5 4.5h-4.5z" className={styles.glyphFill} />
    </>
  ),
  // Envelope
  outlook: (
    <>
      <rect x="-13" y="-9" width="26" height="18" rx="3" className={styles.glyph} />
      <path d="M-12 -8l12 9 12-9" className={styles.glyph} />
    </>
  ),
  // Table with a header row
  access: (
    <>
      <rect x="-13" y="-11" width="26" height="22" rx="3" className={styles.glyph} />
      <rect x="-13" y="-11" width="26" height="7" rx="3" className={styles.glyphFill} />
      <path d="M-13 3h26M-3 -4v15" className={styles.glyph} />
    </>
  ),
  // Database cylinder
  sqlserver: (
    <>
      <ellipse cx="0" cy="-8" rx="11" ry="4" className={styles.glyph} />
      <path d="M-11 -8v16q11 8 22 0v-16M-11 0q11 8 22 0" className={styles.glyph} />
    </>
  ),
  // Three linked nodes
  sharepoint: (
    <>
      <path d="M-6 -5L7 -2M-6 -5L-1 8M7 -2L-1 8" className={styles.glyph} />
      <circle cx="-6" cy="-5" r="4.5" className={styles.glyphFill} />
      <circle cx="7" cy="-2" r="4.5" className={styles.glyphFill} />
      <circle cx="-1" cy="8" r="4.5" className={styles.glyphFill} />
    </>
  ),
  // Two people
  teams: (
    <>
      <circle cx="-4" cy="-5" r="4.5" className={styles.glyph} />
      <path d="M-13 11q0-8 9-8t9 8" className={styles.glyph} />
      <circle cx="7" cy="-7" r="3.5" className={styles.glyph} />
      <path d="M8 -1q6 1 6 8" className={styles.glyph} />
    </>
  ),
  // Phone with app tiles
  powerapps: (
    <>
      <rect x="-8" y="-13" width="16" height="26" rx="3.5" className={styles.glyph} />
      <rect x="-4.5" y="-8" width="4" height="4" rx="1" className={styles.glyphFill} />
      <rect x="0.5" y="-8" width="4" height="4" rx="1" className={styles.glyphFill} />
      <rect x="-4.5" y="-3" width="4" height="4" rx="1" className={styles.glyphFill} />
    </>
  ),
  // Double chevron flow
  powerautomate: (
    <>
      <path d="M-12 -9l9 9-9 9" className={styles.glyph} />
      <path d="M1 -9l9 9-9 9" className={styles.glyph} />
    </>
  ),
  // Bar chart
  powerbi: (
    <>
      <rect x="-11" y="1" width="5" height="11" rx="1.5" className={styles.glyphFill} />
      <rect x="-2.5" y="-5" width="5" height="17" rx="1.5" className={styles.glyphFill} />
      <rect x="6" y="-12" width="5" height="24" rx="1.5" className={styles.glyphFill} />
    </>
  ),
  // Web page layout
  powerpages: (
    <>
      <rect x="-13" y="-11" width="26" height="22" rx="3" className={styles.glyph} />
      <path d="M-13 -5h26M2 0h7M2 5h5" className={styles.glyph} />
      <rect x="-9" y="-1" width="8" height="8" rx="1.5" className={styles.glyphFill} />
    </>
  ),
  // Terminal prompt
  python: (
    <>
      <rect x="-13" y="-11" width="26" height="22" rx="3" className={styles.glyph} />
      <path d="M-8 -4l4 3.5-4 3.5M0 4h7" className={styles.glyphAccent} />
    </>
  ),
  // Curly braces
  javascript: (
    <>
      <path
        d="M-5 -12q-4 0-4 4v4q0 3-3 4q3 1 3 4v4q0 4 4 4M5 -12q4 0 4 4v4q0 3 3 4q-3 1-3 4v4q0 4-4 4"
        className={styles.glyph}
      />
      <circle cx="0" cy="0" r="2" className={styles.glyphFill} />
    </>
  ),
  // Cog: macros running in the background
  vba: (
    <>
      <circle cx="0" cy="0" r="5.5" className={styles.glyph} />
      <path
        d="M0 -13v4M0 9v4M-13 0h4M9 0h4M-9.2 -9.2l2.8 2.8M6.4 6.4l2.8 2.8M9.2 -9.2l-2.8 2.8M-6.4 6.4l-2.8 2.8"
        className={styles.glyph}
      />
    </>
  ),
  // Large and small sparkle
  aiagents: (
    <>
      <path d="M-3 -11q2 8 10 10q-8 2-10 10q-2-8-10-10q8-2 10-10z" className={styles.glyphFill} />
      <path d="M9 -13q1 3.5 4 4q-3 0.5-4 4q-1-3.5-4-4q3-0.5 4-4z" className={styles.glyphFill} />
    </>
  ),
};

// Rounded tile, a soft top sheen for depth, then the glyph
export const ServiceIcon = ({ id }) => (
  <>
    <rect x="-28" y="-28" width="56" height="56" rx="15" className={styles.tileBg} />
    <rect x="-28" y="-28" width="56" height="56" rx="15" fill="url(#ss-sheen)" />
    {glyphs[id] ?? null}
  </>
);
