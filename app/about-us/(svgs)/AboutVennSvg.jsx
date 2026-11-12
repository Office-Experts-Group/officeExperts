// /about-us/(svgs)/AboutVennSvg.jsx
// Three overlapping circles (development, design, business) meeting at the
// client's solution. Overlap tones come from mix-blend-mode in the SCSS.
import styles from "@/styles/aboutVennSvg.module.scss";

export const AboutVennSvg = () => (
  <svg
    className={styles.svg}
    viewBox="0 0 400 370"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-labelledby="about-venn-title"
  >
    <title id="about-venn-title">
      Software development, design and business experience overlapping to
      create your solution
    </title>

    {/* Circles — centres form a triangle around (200, 200) */}
    <circle className={styles.dev} cx="200" cy="130" r="110" />
    <circle className={styles.design} cx="140" cy="235" r="110" />
    <circle className={styles.biz} cx="260" cy="235" r="110" />

    {/* Labels sit in each circle's non-overlapping area */}
    <text className={styles.title} x="200" y="66" textAnchor="middle">
      Development
    </text>
    <text className={styles.sub} x="200" y="85" textAnchor="middle">
      VBA · .NET · Python · JS
    </text>

    <text className={styles.title} x="104" y="282" textAnchor="middle">
      Design
    </text>
    <text className={styles.sub} x="104" y="301" textAnchor="middle">
      Templates · UX · Brand
    </text>

    <text className={styles.title} x="296" y="282" textAnchor="middle">
      Business
    </text>
    <text className={styles.sub} x="296" y="301" textAnchor="middle">
      Process · Requirements
    </text>

    {/* Centre: the client's solution */}
    <circle className={styles.ring} cx="200" cy="200" r="36" />
    <circle className={styles.core} cx="200" cy="200" r="36" />
    <text className={styles.coreText} x="200" y="196" textAnchor="middle">
      Your
    </text>
    <text className={styles.coreText} x="200" y="211" textAnchor="middle">
      solution
    </text>
  </svg>
);
