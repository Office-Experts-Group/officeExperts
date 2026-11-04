// app/(svgs)/HeroStoryGlyphs.jsx
// Neutral line glyphs for the hero story tiles, drawn in a 32 x 32 box centred
// on 0,0. They stand in for the official product icons until USE_LOGOS is
// switched on in utils/heroStoryScene.js, and stay for tools with no logo
// (website, CRM, accounting). Colours come from the heroStory stylesheet.

// Same stylesheet as HeroStory, for the glyph stroke and fill classes
import styles from "@/styles/heroStory.module.scss";

const glyphs = {
  // Spreadsheet grid
  excel: (
    <>
      <rect x="-12" y="-12" width="24" height="24" rx="4" className={styles.glyph} />
      <rect x="-4" y="-4" width="8" height="8" className={styles.glyphFill} />
      <path d="M-12 -4h24M-12 4h24M-4 -12v24M4 -12v24" className={styles.glyph} />
    </>
  ),
  // Document with a folded corner
  word: (
    <>
      <path d="M-9 -13h11l7 7v19h-18z M2 -13v7h7" className={styles.glyph} />
      <path d="M-5 0h10M-5 5h10M-5 10h6" className={styles.glyphAccent} />
    </>
  ),
  // Database table
  access: (
    <>
      <rect x="-13" y="-11" width="26" height="22" rx="3" className={styles.glyph} />
      <rect x="-13" y="-11" width="26" height="7" rx="3" className={styles.glyphFill} />
      <path d="M-13 3h26M-3 -4v15" className={styles.glyph} />
    </>
  ),
  // Envelope
  outlook: (
    <>
      <rect x="-13" y="-9" width="26" height="18" rx="3" className={styles.glyph} />
      <path d="M-12 -8l12 9 12-9" className={styles.glyphAccent} />
    </>
  ),
  // Browser window with a globe
  website: (
    <>
      <rect x="-13" y="-11" width="26" height="22" rx="3" className={styles.glyph} />
      <path d="M-13 -5h26" className={styles.glyph} />
      <circle cx="0" cy="3.5" r="4.5" className={styles.glyphAccent} />
      <path d="M-4.5 3.5h9" className={styles.glyphAccent} />
    </>
  ),
  // Contact card
  crm: (
    <>
      <rect x="-13" y="-12" width="26" height="24" rx="4" className={styles.glyph} />
      <circle cx="0" cy="-3" r="4" className={styles.glyphAccent} />
      <path d="M-7 8q7-8 14 0" className={styles.glyphAccent} />
    </>
  ),
  // Receipt
  accounting: (
    <>
      <path d="M-10 -13h20v26l-3.3-2.5-3.4 2.5-3.3-2.5-3.3 2.5-3.4-2.5-3.3 2.5z" className={styles.glyph} />
      <path d="M-5 -6h10M-5 -1h10M-5 4h6" className={styles.glyphAccent} />
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
  // Bar chart
  powerbi: (
    <>
      <rect x="-11" y="1" width="5" height="11" rx="1.5" className={styles.glyphFill} />
      <rect x="-2.5" y="-5" width="5" height="17" rx="1.5" className={styles.glyphFill} />
      <rect x="6" y="-12" width="5" height="24" rx="1.5" className={styles.glyphFill} />
    </>
  ),
  // Double chevron flow
  powerautomate: (
    <>
      <path d="M-12 -9l9 9-9 9" className={styles.glyph} />
      <path d="M1 -9l9 9-9 9" className={styles.glyphAccent} />
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
  // Web page layout
  powerpages: (
    <>
      <rect x="-13" y="-11" width="26" height="22" rx="3" className={styles.glyph} />
      <path d="M-13 -5h26" className={styles.glyph} />
      <rect x="-9" y="-1" width="8" height="8" rx="1.5" className={styles.glyphFill} />
      <path d="M2 0h7M2 5h5" className={styles.glyphAccent} />
    </>
  ),
  // Stacked data layers
  dataverse: (
    <>
      <path d="M0 -12l12 6-12 6-12-6z" className={styles.glyphAccent} />
      <path d="M-12 0l12 6 12-6M-12 6l12 6 12-6" className={styles.glyph} />
    </>
  ),
  // Database cylinder
  sql: (
    <>
      <ellipse cx="0" cy="-8" rx="11" ry="4" className={styles.glyphAccent} />
      <path d="M-11 -8v16q11 8 22 0v-16M-11 0q11 8 22 0" className={styles.glyph} />
    </>
  ),
  // Sparkle
  aiagents: (
    <path d="M0 -13q2 9 11 11q-9 2-11 11q-2-9-11-11q9-2 11-11z" className={styles.glyphFill} />
  ),
};

export const StoryGlyph = ({ id }) => glyphs[id] ?? null;
