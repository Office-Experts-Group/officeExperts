// /app/blog/convert-canva-to-word/(svgs)/TemplateAnatomySvg.jsx
// Annotated Word template: where styles, content controls, tables and brand assets live.
// Colours: $accent #046999, $accent-light #e8f4fa, $text-primary #0d1b2a, $text-secondary #4a5568.

const Pin = ({ n, x, y }) => (
  <g>
    <circle cx={x} cy={y} r="13" fill="#046999" />
    <text
      x={x}
      y={y + 5}
      textAnchor="middle"
      fontSize="14"
      fontWeight="700"
      fill="#ffffff"
    >
      {n}
    </text>
  </g>
);

const TemplateAnatomySvg = () => (
  <svg
    viewBox="0 0 600 460"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-labelledby="ctw-anatomy-title ctw-anatomy-desc"
    style={{ width: "100%", height: "auto", display: "block" }}
  >
    <title id="ctw-anatomy-title">Anatomy of a brand-safe Word template</title>
    <desc id="ctw-anatomy-desc">
      A Word page with five numbered parts: 1 the header and footer holding logo
      and contact details, 2 heading and body styles, 3 a content control for
      fillable text, 4 a table for structure, and 5 theme colours and fonts set
      on the Design tab.
    </desc>
    <defs>
      <filter
        id="ctw-anatomy-shadow"
        x="-20%"
        y="-10%"
        width="140%"
        height="130%"
      >
        <feDropShadow
          dx="0"
          dy="6"
          stdDeviation="8"
          floodColor="#0d1b2a"
          floodOpacity="0.18"
        />
      </filter>
    </defs>

    <g fontFamily="system-ui, -apple-system, 'Segoe UI', sans-serif">
      {/* Page */}
      <g filter="url(#ctw-anatomy-shadow)">
        <rect
          x="180"
          y="16"
          width="240"
          height="428"
          rx="6"
          fill="#ffffff"
          stroke="#0000001a"
        />
      </g>

      {/* 1 Header */}
      <rect x="196" y="30" width="208" height="46" rx="4" fill="#f7f8f9" />
      <circle cx="220" cy="53" r="12" fill="#046999" />
      <rect x="240" y="44" width="70" height="7" rx="3.5" fill="#cfd8df" />
      <rect x="240" y="56" width="48" height="6" rx="3" fill="#e3e8ec" />
      <rect x="338" y="48" width="52" height="6" rx="3" fill="#cfd8df" />
      <rect x="350" y="60" width="40" height="6" rx="3" fill="#e3e8ec" />

      {/* 2 Heading + body */}
      <rect x="196" y="100" width="150" height="16" rx="3" fill="#046999" />
      <rect x="196" y="126" width="100" height="9" rx="3" fill="#7fb7d1" />
      <rect x="196" y="148" width="208" height="6" rx="3" fill="#cfd8df" />
      <rect x="196" y="161" width="200" height="6" rx="3" fill="#cfd8df" />
      <rect x="196" y="174" width="180" height="6" rx="3" fill="#cfd8df" />
      <rect x="196" y="187" width="204" height="6" rx="3" fill="#cfd8df" />

      {/* 3 Content control */}
      <rect
        x="196"
        y="216"
        width="208"
        height="52"
        rx="6"
        fill="#e8f4fa"
        stroke="#046999"
        strokeWidth="1.8"
        strokeDasharray="6 4"
      />
      <rect x="206" y="209" width="76" height="16" rx="3" fill="#046999" />
      <text
        x="244"
        y="221"
        textAnchor="middle"
        fontSize="10.5"
        fontWeight="700"
        fill="#fff"
      >
        Client name
      </text>
      <rect x="208" y="238" width="96" height="7" rx="3.5" fill="#9ccbe2" />
      <rect x="208" y="252" width="64" height="6" rx="3" fill="#bcdcec" />

      {/* 4 Table */}
      <rect
        x="196"
        y="292"
        width="208"
        height="62"
        rx="3"
        fill="#ffffff"
        stroke="#cfd8df"
      />
      <rect x="196" y="292" width="208" height="20" fill="#046999" />
      <line x1="196" y1="333" x2="404" y2="333" stroke="#cfd8df" />
      <line x1="268" y1="292" x2="268" y2="354" stroke="#cfd8df" />
      <line x1="336" y1="292" x2="336" y2="354" stroke="#cfd8df" />
      <rect x="206" y="320" width="44" height="5" rx="2.5" fill="#cfd8df" />
      <rect x="206" y="341" width="36" height="5" rx="2.5" fill="#cfd8df" />

      {/* Footer */}
      <rect x="196" y="402" width="208" height="1.5" fill="#cfd8df" />
      <rect x="196" y="416" width="86" height="6" rx="3" fill="#cfd8df" />
      <rect x="366" y="416" width="38" height="6" rx="3" fill="#cfd8df" />

      {/* Pins on the page */}
      <Pin n="1" x="196" y="30" />
      <Pin n="2" x="196" y="100" />
      <Pin n="3" x="404" y="216" />
      <Pin n="4" x="404" y="292" />

      {/* Left callouts */}
      <path
        d="M170 53 H 200"
        stroke="#046999"
        strokeWidth="2"
        strokeDasharray="4 4"
      />
      <text x="10" y="40" fontSize="15" fontWeight="700" fill="#0d1b2a">
        1 Header and footer
      </text>
      <text x="10" y="60" fontSize="14" fill="#4a5568">
        Logo and contact
      </text>
      <text x="10" y="78" fontSize="14" fill="#4a5568">
        details live here
      </text>

      <path
        d="M170 124 H 196"
        stroke="#046999"
        strokeWidth="2"
        strokeDasharray="4 4"
      />
      <text x="10" y="112" fontSize="15" fontWeight="700" fill="#0d1b2a">
        2 Styles
      </text>
      <text x="10" y="132" fontSize="14" fill="#4a5568">
        Heading 1, Heading 2
      </text>
      <text x="10" y="150" fontSize="14" fill="#4a5568">
        and Body text
      </text>

      <path
        d="M170 390 H 200"
        stroke="#046999"
        strokeWidth="2"
        strokeDasharray="4 4"
      />
      <text x="10" y="352" fontSize="15" fontWeight="700" fill="#0d1b2a">
        5 Theme colours
      </text>
      <text x="10" y="372" fontSize="14" fill="#4a5568">
        and fonts, set once
      </text>
      <text x="10" y="390" fontSize="14" fill="#4a5568">
        on the Design tab
      </text>

      {/* Right callouts */}
      <path
        d="M417 229 H 440"
        stroke="#046999"
        strokeWidth="2"
        strokeDasharray="4 4"
      />
      <text x="446" y="200" fontSize="15" fontWeight="700" fill="#0d1b2a">
        3 Content control
      </text>
      <text x="446" y="220" fontSize="14" fill="#4a5568">
        A fillable area
      </text>
      <text x="446" y="238" fontSize="14" fill="#4a5568">
        that is locked in
      </text>
      <text x="446" y="256" fontSize="14" fill="#4a5568">
        place
      </text>

      <path
        d="M417 305 H 440"
        stroke="#046999"
        strokeWidth="2"
        strokeDasharray="4 4"
      />
      <text x="446" y="292" fontSize="15" fontWeight="700" fill="#0d1b2a">
        4 Tables
      </text>
      <text x="446" y="312" fontSize="14" fill="#4a5568">
        Structure, not
      </text>
      <text x="446" y="330" fontSize="14" fill="#4a5568">
        spaces or tabs
      </text>

      <Pin n="5" x="196" y="390" />
    </g>
  </svg>
);

export default TemplateAnatomySvg;
