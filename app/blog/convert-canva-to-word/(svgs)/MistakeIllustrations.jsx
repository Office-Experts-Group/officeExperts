// /app/blog/convert-canva-to-word/(svgs)/MistakeIllustrations.jsx
// Five small before/after sketches for the "mistakes" section. Each has an
// "Avoid" panel (muted, messy) and a "Do this" panel (clean, on-brand).
// Colours: $accent #046999, $accent-light #e8f4fa, slate greys for the "avoid" side.

const SLATE = "#7a8794";
const SLATE_LIGHT = "#a0a2a6";
const LINE = "#cfd8df";
const ACCENT = "#046999";
const ACCENT_LIGHT = "#e8f4fa";

const Sketch = ({ id, title, avoid, good }) => (
  <svg
    viewBox="0 0 280 112"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-labelledby={`${id}-title`}
    style={{ width: "100%", height: "auto", display: "block" }}
  >
    <title id={`${id}-title`}>{title}</title>

    {/* Avoid panel */}
    <g transform="translate(6 6)">
      <rect
        width="122"
        height="78"
        rx="9"
        fill="#f2f3f5"
        stroke={LINE}
        strokeDasharray="4 3"
      />
      {avoid}
    </g>

    {/* Arrow */}
    <path
      d="M134 45 H146 M141 40 L147 45 L141 50"
      fill="none"
      stroke={ACCENT}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    {/* Do-this panel */}
    <g transform="translate(152 6)">
      <rect
        width="122"
        height="78"
        rx="9"
        fill={ACCENT_LIGHT}
        stroke={ACCENT}
        strokeOpacity="0.55"
      />
      {good}
    </g>

    <g
      fontFamily="system-ui, -apple-system, 'Segoe UI', sans-serif"
      fontSize="10.5"
      fontWeight="700"
      letterSpacing="1.2"
      textAnchor="middle"
    >
      <text x="67" y="102" fill="#4a5568">
        AVOID
      </text>
      <text x="213" y="102" fill={ACCENT}>
        DO THIS
      </text>
    </g>
  </svg>
);

/* 1. Stacked text boxes -> a table */
export const TextBoxesSketch = () => (
  <Sketch
    id="ctw-mk1"
    title="Loose, overlapping text boxes compared with a tidy table"
    avoid={
      <>
        <rect x="8" y="8" width="106" height="62" rx="5" fill="#e3e8ec" />
        <g transform="rotate(-5 40 22)">
          <rect
            x="10"
            y="10"
            width="60"
            height="26"
            rx="3"
            fill="#fff"
            stroke={SLATE_LIGHT}
            strokeDasharray="3 2"
          />
          <rect x="16" y="17" width="38" height="5" rx="2.5" fill={SLATE} />
          <rect x="16" y="26" width="26" height="4" rx="2" fill={LINE} />
        </g>
        <g transform="rotate(4 70 42)">
          <rect
            x="40"
            y="28"
            width="66"
            height="26"
            rx="3"
            fill="#fff"
            stroke={SLATE_LIGHT}
            strokeDasharray="3 2"
          />
          <rect x="46" y="35" width="44" height="5" rx="2.5" fill={SLATE} />
          <rect x="46" y="44" width="30" height="4" rx="2" fill={LINE} />
        </g>
        <g transform="rotate(-2 30 58)">
          <rect
            x="14"
            y="48"
            width="54"
            height="20"
            rx="3"
            fill="#fff"
            stroke={SLATE_LIGHT}
            strokeDasharray="3 2"
          />
          <rect x="20" y="55" width="34" height="4" rx="2" fill={LINE} />
        </g>
      </>
    }
    good={
      <>
        <rect
          x="10"
          y="10"
          width="102"
          height="58"
          rx="4"
          fill="#fff"
          stroke={ACCENT}
        />
        <path d="M10 14a4 4 0 0 1 4-4h94a4 4 0 0 1 4 4v10H10Z" fill={ACCENT} />
        <line x1="10" y1="43" x2="112" y2="43" stroke={LINE} />
        <line x1="61" y1="10" x2="61" y2="68" stroke={LINE} />
        <rect x="18" y="15" width="30" height="5" rx="2.5" fill="#fff" />
        <rect x="69" y="15" width="30" height="5" rx="2.5" fill="#fff" />
        <rect x="18" y="31" width="32" height="4" rx="2" fill={LINE} />
        <rect x="69" y="31" width="36" height="4" rx="2" fill={LINE} />
        <rect x="18" y="52" width="26" height="4" rx="2" fill={LINE} />
        <rect x="69" y="52" width="30" height="4" rx="2" fill={LINE} />
      </>
    }
  />
);

/* 2. Spaces and tabs -> aligned table cells */
export const SpacesSketch = () => (
  <Sketch
    id="ctw-mk2"
    title="Text lined up with spaces drifting out of alignment, compared with aligned cells"
    avoid={
      <>
        {[
          [18, 72],
          [38, 80],
          [58, 66],
        ].map(([y, x2]) => (
          <g key={y}>
            <rect x="12" y={y} width="32" height="7" rx="3.5" fill={SLATE} />
            {[0, 1, 2].map((d) => (
              <circle
                key={d}
                cx={50 + d * 6}
                cy={y + 3.5}
                r="1.6"
                fill={SLATE_LIGHT}
              />
            ))}
            <rect x={x2} y={y} width="36" height="7" rx="3.5" fill={SLATE} />
          </g>
        ))}
      </>
    }
    good={
      <>
        <line
          x1="62"
          y1="8"
          x2="62"
          y2="70"
          stroke={ACCENT}
          strokeDasharray="3 3"
        />
        {[8, 29, 49, 70].map((y) => (
          <line key={y} x1="8" y1={y} x2="114" y2={y} stroke={LINE} />
        ))}
        {[18, 38, 58].map((y) => (
          <g key={y}>
            <rect
              x="14"
              y={y - 1}
              width="32"
              height="7"
              rx="3.5"
              fill={ACCENT}
            />
            <rect
              x="70"
              y={y - 1}
              width="36"
              height="7"
              rx="3.5"
              fill="#7fb7d1"
            />
          </g>
        ))}
      </>
    }
  />
);

/* 3. One flat image -> real text plus images */
export const FlatImageSketch = () => (
  <Sketch
    id="ctw-mk3"
    title="A whole design pasted as one flat image compared with real editable text"
    avoid={
      <>
        <rect x="8" y="8" width="106" height="62" rx="5" fill="#cfd8df" />
        <path d="M8 70 L40 38 L58 54 L80 30 L114 62 V70Z" fill="#9aa7b2" />
        <circle cx="94" cy="24" r="8" fill="#e3e8ec" />
        <rect
          x="18"
          y="18"
          width="46"
          height="6"
          rx="3"
          fill="#fff"
          opacity="0.7"
        />
        <rect
          x="18"
          y="30"
          width="34"
          height="5"
          rx="2.5"
          fill="#fff"
          opacity="0.55"
        />
        <rect x="80" y="53" width="30" height="14" rx="7" fill="#4a5568" />
        <text
          x="95"
          y="63"
          textAnchor="middle"
          fontSize="8.5"
          fontWeight="700"
          fill="#fff"
          fontFamily="system-ui, sans-serif"
        >
          JPG
        </text>
      </>
    }
    good={
      <>
        <circle cx="20" cy="20" r="8" fill={ACCENT} />
        <rect x="34" y="14" width="46" height="6" rx="3" fill={ACCENT} />
        <rect x="34" y="24" width="30" height="4" rx="2" fill="#7fb7d1" />
        <rect x="12" y="38" width="52" height="4" rx="2" fill={LINE} />
        <rect x="12" y="47" width="46" height="4" rx="2" fill={LINE} />
        <rect x="12" y="56" width="50" height="4" rx="2" fill={LINE} />
        <rect x="72" y="36" width="42" height="30" rx="4" fill="#bcdcec" />
        <path
          d="M72 66 L86 50 L95 59 L104 48 L114 62 V66Z"
          fill={ACCENT}
          opacity="0.5"
        />
        <circle cx="104" cy="44" r="3.5" fill="#fff" />
      </>
    }
  />
);

/* 4. Missing fonts -> installed or embedded fonts */
export const FontsSketch = () => (
  <Sketch
    id="ctw-mk4"
    title="Missing font boxes compared with a font that displays correctly"
    avoid={
      <>
        {[14, 40, 66].map((x) => (
          <rect
            key={x}
            x={x}
            y="18"
            width="20"
            height="28"
            rx="3"
            fill="none"
            stroke={SLATE}
            strokeWidth="1.8"
          />
        ))}
        <text
          x="98"
          y="42"
          fontSize="22"
          fontWeight="700"
          fill={SLATE_LIGHT}
          fontFamily="system-ui, sans-serif"
        >
          ?
        </text>
        <rect x="14" y="56" width="70" height="6" rx="3" fill={LINE} />
      </>
    }
    good={
      <>
        <text
          x="14"
          y="48"
          fontSize="34"
          fontWeight="700"
          fill={ACCENT}
          fontFamily="system-ui, -apple-system, 'Segoe UI', sans-serif"
        >
          Aa
        </text>
        <text
          x="66"
          y="48"
          fontSize="34"
          fontWeight="400"
          fill="#0d1b2a"
          fontFamily="system-ui, -apple-system, 'Segoe UI', sans-serif"
        >
          Bb
        </text>
        <rect x="14" y="54" width="62" height="16" rx="8" fill={ACCENT} />
        <text
          x="45"
          y="65.5"
          textAnchor="middle"
          fontSize="9"
          fontWeight="700"
          fill="#fff"
          fontFamily="system-ui, sans-serif"
        >
          Embedded
        </text>
      </>
    }
  />
);

/* 5. Hand formatting -> Styles */
export const StylesSketch = () => (
  <Sketch
    id="ctw-mk5"
    title="Inconsistent hand formatting compared with consistent Word Styles"
    avoid={
      <>
        <rect x="12" y="12" width="58" height="10" rx="5" fill={SLATE} />
        <rect x="16" y="28" width="84" height="6" rx="3" fill={LINE} />
        <rect x="10" y="38" width="70" height="6" rx="3" fill={SLATE_LIGHT} />
        <rect x="14" y="52" width="46" height="12" rx="6" fill="#5e6b78" />
        <rect x="18" y="68" width="86" height="4" rx="2" fill={LINE} />
      </>
    }
    good={
      <>
        <rect x="12" y="12" width="62" height="10" rx="5" fill={ACCENT} />
        <rect x="12" y="28" width="90" height="5" rx="2.5" fill={LINE} />
        <rect x="12" y="38" width="80" height="5" rx="2.5" fill={LINE} />
        <rect x="12" y="52" width="62" height="10" rx="5" fill={ACCENT} />
        <rect x="12" y="66" width="86" height="5" rx="2.5" fill={LINE} />
        <rect x="88" y="10" width="24" height="14" rx="7" fill={ACCENT} />
        <text
          x="100"
          y="20"
          textAnchor="middle"
          fontSize="8"
          fontWeight="700"
          fill="#fff"
          fontFamily="system-ui, sans-serif"
        >
          H1
        </text>
        <rect
          x="84"
          y="46"
          width="30"
          height="14"
          rx="7"
          fill="#fff"
          stroke={ACCENT}
        />
        <text
          x="99"
          y="56"
          textAnchor="middle"
          fontSize="8"
          fontWeight="700"
          fill={ACCENT}
          fontFamily="system-ui, sans-serif"
        >
          Body
        </text>
      </>
    }
  />
);
