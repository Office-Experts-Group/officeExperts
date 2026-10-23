// app/accessibility/(svgs)/ContrastSVG.jsx

// Split contrast disc with a sample text swatch — represents WCAG 2.1
// colour-contrast and perceivability requirements.
const ContrastSVG = () => (
  <svg
    viewBox="0 0 80 80"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    fill="none"
  >
    {/* Half-filled contrast disc */}
    <circle cx="40" cy="34" r="18" stroke="#046999" strokeWidth="1.6" />
    <path d="M40 16a18 18 0 0 1 0 36z" fill="#046999" opacity="0.85" />

    {/* Text sample bars — pass swatch */}
    <rect x="14" y="58" width="26" height="9" rx="2" fill="#046999" />
    <text x="27" y="65" textAnchor="middle" fill="#fff" fontSize="6.5" fontWeight="700">
      Aa
    </text>

    {/* Text sample bars — fail swatch, muted */}
    <rect x="44" y="58" width="26" height="9" rx="2" fill="rgba(4,105,153,0.2)" />
    <text x="57" y="65" textAnchor="middle" fill="rgba(4,105,153,0.55)" fontSize="6.5" fontWeight="700">
      Aa
    </text>

    {/* Decorative measurement ticks around the disc */}
    {[0, 60, 120, 180, 240, 300].map((deg, i) => {
      const rad = ((deg - 90) * Math.PI) / 180;
      const x1 = 40 + 21 * Math.cos(rad);
      const y1 = 34 + 21 * Math.sin(rad);
      const x2 = 40 + 24 * Math.cos(rad);
      const y2 = 34 + 24 * Math.sin(rad);
      return (
        <line
          key={i}
          x1={x1}
          y1={y1}
          x2={x2}
          y2={y2}
          stroke="rgba(4,105,153,0.3)"
          strokeWidth="1.3"
          strokeLinecap="round"
        />
      );
    })}
  </svg>
);

export default ContrastSVG;
