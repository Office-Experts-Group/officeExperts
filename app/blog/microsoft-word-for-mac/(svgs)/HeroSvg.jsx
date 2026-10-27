// /app/blog/microsoft-word-for-mac/(svgs)/HeroSvg.jsx
// Hero illustration: a Windows-built document, adapted, becomes a Mac-ready one.
// Hard-coded hex values (dark hero panel). Tokens: $dark-surface #18232e,
// $accent #046999, accent on dark #5bbce6, $accent-light #e8f4fa,
// $text-primary #0d1b2a, $replace-x #c0392b (tiny warning accent only).
// Generic shapes only, no brand logos.

export default function HeroSvg() {
  const gearTeeth = [0, 45, 90, 135, 180, 225, 270, 315];

  return (
    <svg
      viewBox="0 0 560 380"
      role="img"
      aria-labelledby="wfm-hero-title wfm-hero-desc"
      style={{ width: "100%", height: "auto", display: "block" }}
    >
      <title id="wfm-hero-title">A document adapted for Mac</title>
      <desc id="wfm-hero-desc">
        A document built on Windows, with a macro, a content control and a
        custom ribbon, is adapted into a simpler document that works on a Mac.
      </desc>

      <text
        x="125"
        y="46"
        textAnchor="middle"
        fontSize="16"
        fontWeight="600"
        fill="rgba(255,255,255,0.75)"
      >
        Built on Windows
      </text>
      <text
        x="435"
        y="46"
        textAnchor="middle"
        fontSize="16"
        fontWeight="600"
        fill="rgba(255,255,255,0.75)"
      >
        Works on Mac
      </text>

      {/* Left document: Windows-built */}
      <rect
        x="20"
        y="70"
        width="210"
        height="270"
        rx="14"
        fill="#18232e"
        stroke="#5bbce6"
        strokeOpacity="0.55"
        strokeWidth="1.5"
      />
      <rect x="36" y="86" width="178" height="26" rx="6" fill="#1f3a50" />
      <rect x="44" y="94" width="30" height="10" rx="3" fill="#5bbce6" />
      <rect
        x="82"
        y="94"
        width="30"
        height="10"
        rx="3"
        fill="#5bbce6"
        opacity="0.6"
      />
      <rect
        x="120"
        y="94"
        width="30"
        height="10"
        rx="3"
        fill="#5bbce6"
        opacity="0.35"
      />
      <rect x="36" y="128" width="150" height="8" rx="4" fill="#2b4a63" />
      <rect x="36" y="146" width="178" height="8" rx="4" fill="#2b4a63" />
      <rect x="36" y="164" width="120" height="8" rx="4" fill="#2b4a63" />
      <rect
        x="36"
        y="186"
        width="178"
        height="44"
        rx="6"
        fill="none"
        stroke="#5bbce6"
        strokeWidth="1.5"
        strokeDasharray="5 4"
      />
      <text x="48" y="213" fontSize="14" fill="rgba(255,255,255,0.88)">
        Content control
      </text>

      <g transform="translate(70 285)">
        <circle r="20" fill="none" stroke="#5bbce6" strokeWidth="2.5" />
        <circle r="7" fill="none" stroke="#5bbce6" strokeWidth="2.5" />
        {gearTeeth.map((deg) => (
          <rect
            key={deg}
            x="-3.5"
            y="-30"
            width="7"
            height="10"
            rx="2"
            fill="#5bbce6"
            transform={`rotate(${deg})`}
          />
        ))}
      </g>
      <text x="108" y="291" fontSize="15" fill="rgba(255,255,255,0.88)">
        Macro
      </text>

      <circle cx="222" cy="70" r="14" fill="#c0392b" />
      <text
        x="222"
        y="76"
        textAnchor="middle"
        fontSize="17"
        fontWeight="700"
        fill="#ffffff"
      >
        !
      </text>

      {/* Arrow */}
      <line
        x1="244"
        y1="205"
        x2="306"
        y2="205"
        stroke="#5bbce6"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <polygon points="304,194 322,205 304,216" fill="#5bbce6" />
      <text
        x="282"
        y="238"
        textAnchor="middle"
        fontSize="14"
        fontWeight="600"
        fill="#5bbce6"
      >
        Adapt
      </text>

      {/* Right document: Mac-ready */}
      <rect
        x="330"
        y="70"
        width="210"
        height="270"
        rx="14"
        fill="#f2f8fb"
        stroke="#5bbce6"
        strokeWidth="1.5"
      />
      <rect x="346" y="86" width="178" height="26" rx="6" fill="#046999" />
      <rect x="346" y="128" width="100" height="10" rx="5" fill="#046999" />
      <rect x="346" y="148" width="178" height="8" rx="4" fill="#b9d4e2" />
      <rect x="346" y="166" width="150" height="8" rx="4" fill="#b9d4e2" />
      <rect
        x="346"
        y="186"
        width="178"
        height="44"
        rx="6"
        fill="#e8f4fa"
        stroke="#046999"
        strokeWidth="1.5"
      />
      <text x="358" y="213" fontSize="14" fill="#0d1b2a">
        Styles and tables
      </text>

      <path
        d="M352 306a14 14 0 0 1 2-27 20 20 0 0 1 38 5 12 12 0 0 1 2 22z"
        fill="#e8f4fa"
        stroke="#046999"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <text x="410" y="298" fontSize="15" fill="#0d1b2a">
        Cloud
      </text>

      <circle cx="532" cy="70" r="14" fill="#046999" />
      <polyline
        points="525,70 530,75 539,64"
        fill="none"
        stroke="#ffffff"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
