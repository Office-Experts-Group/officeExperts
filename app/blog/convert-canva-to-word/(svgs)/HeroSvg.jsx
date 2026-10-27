// /app/blog/convert-canva-to-word/(svgs)/HeroSvg.jsx
// Hero illustration: a generic design canvas becoming an editable Word template.
// Generic shapes only (no third-party logos). Colours match styles/globals.scss:
// $accent #046999, $accent-light #e8f4fa, $text-primary #0d1b2a, $dark-bg #111820.

const HeroSvg = () => (
  <svg
    viewBox="0 0 520 380"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-labelledby="ctw-hero-title ctw-hero-desc"
    style={{ width: "100%", height: "auto", display: "block" }}
  >
    <title id="ctw-hero-title">A Canva design becoming a Word template</title>
    <desc id="ctw-hero-desc">
      On the left, a colourful design canvas with a header block, a logo circle
      and an image area. An arrow labelled .dotx leads to an editable Word
      document on the right with a ruler, a heading, body text and a fillable
      content control.
    </desc>
    <defs>
      <linearGradient id="ctw-hero-canvas" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#0a86bf" />
        <stop offset="1" stopColor="#046999" />
      </linearGradient>
      <filter id="ctw-hero-shadow" x="-20%" y="-20%" width="140%" height="150%">
        <feDropShadow
          dx="0"
          dy="10"
          stdDeviation="12"
          floodColor="#000000"
          floodOpacity="0.35"
        />
      </filter>
    </defs>

    {/* Design canvas (left) */}
    <g filter="url(#ctw-hero-shadow)" transform="rotate(-4 120 190)">
      <rect x="30" y="60" width="190" height="250" rx="14" fill="#ffffff" />
      <rect
        x="30"
        y="60"
        width="190"
        height="86"
        rx="14"
        fill="url(#ctw-hero-canvas)"
      />
      <rect
        x="30"
        y="120"
        width="190"
        height="26"
        fill="url(#ctw-hero-canvas)"
      />
      <circle cx="68" cy="102" r="20" fill="#ffffff" opacity="0.95" />
      <circle cx="68" cy="102" r="9" fill="#046999" />
      <rect x="100" y="90" width="90" height="10" rx="5" fill="#ffffff" />
      <rect
        x="100"
        y="108"
        width="60"
        height="8"
        rx="4"
        fill="#ffffff"
        opacity="0.6"
      />
      <rect x="48" y="164" width="154" height="62" rx="8" fill="#e8f4fa" />
      <path
        d="M48 226 L98 190 L128 212 L158 186 L202 226 Z"
        fill="#046999"
        opacity="0.35"
      />
      <circle cx="170" cy="182" r="9" fill="#ffffff" />
      <rect x="48" y="242" width="150" height="7" rx="3.5" fill="#cfd8df" />
      <rect x="48" y="258" width="120" height="7" rx="3.5" fill="#cfd8df" />
      <rect x="48" y="274" width="86" height="18" rx="9" fill="#046999" />
    </g>

    {/* Arrow (centre) */}
    <path
      d="M214 190 C 245 150, 275 150, 306 190"
      fill="none"
      stroke="#5bbce6"
      strokeWidth="3"
      strokeDasharray="6 7"
      strokeLinecap="round"
    />
    <path
      d="M296 176 L308 192 L290 196"
      fill="none"
      stroke="#5bbce6"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <rect
      x="232"
      y="118"
      width="58"
      height="26"
      rx="13"
      fill="#18232e"
      stroke="#5bbce6"
      strokeWidth="1.5"
    />
    <text
      x="261"
      y="136"
      textAnchor="middle"
      fontSize="14"
      fontWeight="700"
      fill="#5bbce6"
      fontFamily="ui-monospace, Menlo, Consolas, monospace"
    >
      .dotx
    </text>

    {/* Word template (right) */}
    <g filter="url(#ctw-hero-shadow)" transform="rotate(3 400 190)">
      <rect x="300" y="50" width="196" height="270" rx="10" fill="#ffffff" />
      {/* ruler */}
      <rect x="300" y="50" width="196" height="22" rx="10" fill="#f2f3f5" />
      <rect x="300" y="62" width="196" height="10" fill="#f2f3f5" />
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
        <rect
          key={i}
          x={318 + i * 15}
          y={i % 2 ? 60 : 57}
          width="1.5"
          height={i % 2 ? 6 : 9}
          fill="#a0a2a6"
        />
      ))}
      {/* header */}
      <circle cx="326" cy="96" r="10" fill="#046999" />
      <rect x="344" y="90" width="60" height="6" rx="3" fill="#cfd8df" />
      <rect x="344" y="101" width="40" height="5" rx="2.5" fill="#e3e8ec" />
      {/* heading */}
      <rect x="318" y="128" width="130" height="14" rx="3" fill="#046999" />
      <rect x="318" y="152" width="158" height="6" rx="3" fill="#cfd8df" />
      <rect x="318" y="165" width="150" height="6" rx="3" fill="#cfd8df" />
      <rect x="318" y="178" width="120" height="6" rx="3" fill="#cfd8df" />
      {/* content control */}
      <rect
        x="318"
        y="200"
        width="158"
        height="38"
        rx="6"
        fill="#e8f4fa"
        stroke="#046999"
        strokeWidth="1.5"
        strokeDasharray="5 4"
      />
      <rect x="326" y="194" width="62" height="14" rx="3" fill="#046999" />
      <text
        x="357"
        y="205"
        textAnchor="middle"
        fontSize="9.5"
        fontWeight="700"
        fill="#ffffff"
        fontFamily="system-ui, sans-serif"
      >
        Client name
      </text>
      <rect x="328" y="218" width="70" height="6" rx="3" fill="#9ccbe2" />
      {/* footer */}
      <rect x="318" y="262" width="158" height="1.5" fill="#cfd8df" />
      <rect x="318" y="276" width="80" height="6" rx="3" fill="#cfd8df" />
      <rect x="440" y="276" width="36" height="6" rx="3" fill="#cfd8df" />
    </g>

    {/* Labels */}
    <text
      x="110"
      y="352"
      textAnchor="middle"
      fontSize="15"
      fill="#ffffffa6"
      fontFamily="system-ui, sans-serif"
    >
      Canva design
    </text>
    <text
      x="400"
      y="352"
      textAnchor="middle"
      fontSize="15"
      fill="#ffffffa6"
      fontFamily="system-ui, sans-serif"
    >
      Editable Word template
    </text>
  </svg>
);

export default HeroSvg;
