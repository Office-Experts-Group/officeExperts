// /app/services/microsoft-excel/excel-formulas-and-custom-formulas/(svgs)/FormulasPillarArt.jsx

/*
  Spot art for the three pillars in FormulasDark. Decorative. They sit on a
  light tile ($accent-light), so the strokes use the accent colour.
  Hex / rgba values and the tokens they match (globals.scss):
    #046999 / rgba(4,105,153,x)  $accent at different opacities
*/

export const FormulasPerformanceArt = () => (
  <svg
    viewBox="0 0 80 80"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    focusable="false"
    fill="none"
  >
    {/* Outer ring and the arc that shows how much is left in the tank */}
    <circle
      cx="40"
      cy="40"
      r="30"
      stroke="rgba(4,105,153,0.18)"
      strokeWidth="1.5"
    />
    <circle
      cx="40"
      cy="40"
      r="30"
      stroke="#046999"
      strokeWidth="2"
      strokeDasharray="94 94"
      strokeDashoffset="47"
      strokeLinecap="round"
      transform="rotate(-90 40 40)"
      opacity="0.6"
    />

    {/* Gauge needle */}
    <line
      x1="40"
      y1="40"
      x2="56"
      y2="26"
      stroke="#046999"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <circle cx="40" cy="40" r="3" fill="#046999" />

    {/* Warning mark at the low end of the gauge */}
    <circle
      cx="18"
      cy="52"
      r="3.5"
      stroke="rgba(4,105,153,0.4)"
      strokeWidth="1.5"
    />
    <line
      x1="18"
      y1="49.5"
      x2="18"
      y2="51.5"
      stroke="rgba(4,105,153,0.4)"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <circle cx="18" cy="53.5" r="0.6" fill="rgba(4,105,153,0.4)" />

    {/* Tick marks */}
    {[0, 30, 60, 90, 120, 150, 180].map((deg) => {
      const rad = ((deg - 90) * Math.PI) / 180;
      return (
        <line
          key={deg}
          x1={40 + 26 * Math.cos(rad)}
          y1={40 + 26 * Math.sin(rad)}
          x2={40 + 30 * Math.cos(rad)}
          y2={40 + 30 * Math.sin(rad)}
          stroke="rgba(4,105,153,0.3)"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      );
    })}
  </svg>
);

export const FormulasDesignArt = () => (
  <svg
    viewBox="0 0 80 80"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    focusable="false"
    fill="none"
  >
    {/* Cell border grid */}
    <rect
      x="10"
      y="10"
      width="60"
      height="60"
      rx="4"
      stroke="rgba(4,105,153,0.2)"
      strokeWidth="1.5"
    />
    <line x1="10" y1="30" x2="70" y2="30" stroke="rgba(4,105,153,0.15)" />
    <line x1="10" y1="50" x2="70" y2="50" stroke="rgba(4,105,153,0.15)" />
    <line x1="35" y1="10" x2="35" y2="70" stroke="rgba(4,105,153,0.15)" />

    {/* Active cell */}
    <rect x="35" y="50" width="35" height="20" fill="rgba(4,105,153,0.12)" />
    <rect
      x="35"
      y="50"
      width="35"
      height="20"
      stroke="#046999"
      strokeWidth="1.5"
    />

    {/* Equals sign in the active cell */}
    <line
      x1="46"
      y1="57"
      x2="59"
      y2="57"
      stroke="#046999"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <line
      x1="46"
      y1="63"
      x2="59"
      y2="63"
      stroke="#046999"
      strokeWidth="2"
      strokeLinecap="round"
    />

    {/* fx cell */}
    <rect x="10" y="10" width="25" height="20" fill="rgba(4,105,153,0.08)" />
    <text
      x="22.5"
      y="25"
      textAnchor="middle"
      fill="rgba(4,105,153,0.7)"
      fontSize="14"
      fontWeight="700"
      fontFamily="monospace"
    >
      fx
    </text>

    {/* Sample data in the other cells */}
    {[
      [52, 20],
      [52, 40],
      [17, 40],
      [17, 60],
    ].map(([cx, cy]) => (
      <rect
        key={`${cx}-${cy}`}
        x={cx - 6}
        y={cy - 4}
        width="18"
        height="8"
        rx="2"
        fill="rgba(4,105,153,0.1)"
      />
    ))}
  </svg>
);

export const FormulasCustomArt = () => (
  <svg
    viewBox="0 0 80 80"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    focusable="false"
    fill="none"
  >
    {/* Gear rings */}
    <circle
      cx="40"
      cy="40"
      r="18"
      stroke="rgba(4,105,153,0.25)"
      strokeWidth="1.5"
    />
    <circle
      cx="40"
      cy="40"
      r="10"
      stroke="#046999"
      strokeWidth="2"
      opacity="0.7"
    />
    <circle cx="40" cy="40" r="4" fill="#046999" opacity="0.6" />

    {/* Gear teeth */}
    {Array.from({ length: 8 }, (_, i) => (
      <rect
        key={i}
        x="37.5"
        y="15"
        width="5"
        height="8"
        rx="1.5"
        fill="rgba(4,105,153,0.35)"
        transform={`rotate(${i * 45} 40 40)`}
      />
    ))}

    {/* Wrench handle */}
    <path
      d="M 54 26 L 62 18"
      stroke="#046999"
      strokeWidth="2.5"
      strokeLinecap="round"
      opacity="0.7"
    />
    <circle
      cx="56"
      cy="24"
      r="5"
      stroke="#046999"
      strokeWidth="2"
      opacity="0.5"
    />

    {/* Decorative dots */}
    <circle cx="14" cy="20" r="2" fill="rgba(4,105,153,0.2)" />
    <circle cx="20" cy="14" r="1.5" fill="rgba(4,105,153,0.15)" />
    <circle cx="66" cy="60" r="2" fill="rgba(4,105,153,0.2)" />
    <circle cx="60" cy="66" r="1.5" fill="rgba(4,105,153,0.15)" />
  </svg>
);
