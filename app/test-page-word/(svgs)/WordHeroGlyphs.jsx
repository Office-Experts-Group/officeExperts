// app/(svgs)/WordHeroGlyphs.jsx
// Small line icons for the Word hero story: the custom ribbon buttons, the
// Quick Parts gallery and the green tick. Drawn in a 20 x 20 box centred on 0,0.
// Colours come from the wordHeroStory stylesheet.

// Same stylesheet as WordHeroStory, for the glyph stroke and fill classes
import styles from "@/styles/wordHeroStory.module.scss";

const glyphs = {
  // New quote: document with a plus
  quote: (
    <>
      <path d="M-6 -8h7l5 5v11h-12z" className={styles.glyph} />
      <path d="M0 0v6M-3 3h6" className={styles.glyphAccent} />
    </>
  ),
  // Letter: envelope
  letter: (
    <>
      <rect x="-8" y="-6" width="16" height="12" rx="2" className={styles.glyph} />
      <path d="M-7 -5l7 5.5 7-5.5" className={styles.glyphAccent} />
    </>
  ),
  // Clauses: stacked building blocks
  clauses: (
    <>
      <rect x="-8" y="-8" width="16" height="6" rx="1.5" className={styles.glyphAccent} />
      <rect x="-8" y="1" width="16" height="7" rx="1.5" className={styles.glyph} />
    </>
  ),
  // Styles: Aa
  styles: (
    <text y="4.5" textAnchor="middle" className={styles.glyphText}>
      Aa
    </text>
  ),
  // Quick Part row marker
  part: <rect x="-4" y="-4" width="8" height="8" rx="2" className={styles.glyphFill} />,
};

export const WordGlyph = ({ id }) => glyphs[id] ?? null;

// Green tick badge, centred on 0,0
export const TickBadge = ({ r = 7 }) => (
  <>
    <circle r={r} className={styles.tickDot} />
    <path d={`M${-r * 0.43} 0l${r * 0.3} ${r * 0.3} ${r * 0.57}-${r * 0.6}`} className={styles.tickMark} />
  </>
);
