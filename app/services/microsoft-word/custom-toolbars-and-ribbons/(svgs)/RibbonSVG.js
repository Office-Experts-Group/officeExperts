// /services/microsoft-word/custom-toolbars-and-ribbons/(svgs)/RibbonSVG.js

// Stylised Word window showing a custom "Formatting" ribbon tab.
// SVG cannot read Sass variables, so the hex values below are the brand colours from globals.scss.
// Gradient and filter ids are prefixed "rb-" so they never clash with other inline SVGs on the page.

// One ribbon button: a rounded tile with a glyph (drawn around 0,0) and a label underneath
const RibbonButton = ({ x, label, children }) => (
  <g>
    <rect
      x={x}
      y="98"
      width="48"
      height="62"
      rx="6"
      fill="#fff"
      stroke="#e3e8ec"
    />
    <g
      transform={`translate(${x + 24} 122)`}
      fill="none"
      stroke="#046999"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {children}
    </g>
    <text
      x={x + 24}
      y="150"
      textAnchor="middle"
      fontSize="8.5"
      fontWeight="700"
      fill="#9a9da1"
    >
      {label}
    </text>
  </g>
);

// Style gallery buttons - the first is the "active" one applied to the page heading
const styleButtons = [
  { x: 36, size: 17, label: "H1", active: true },
  { x: 90, size: 14, label: "H2" },
  { x: 144, size: 11, label: "Body" },
];

// Group captions sit under the ribbon, centred on each group
const groupLabels = [
  { x: 114, text: "STYLES" },
  { x: 267, text: "TABLES" },
  { x: 393, text: "CLEAN UP" },
  { x: 492, text: "INSERT" },
];

export const RibbonSVG = () => (
  <svg
    viewBox="0 0 560 440"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-label="A Word window with a custom Formatting tab on the ribbon applying a heading style in one click"
  >
    <defs>
      <linearGradient id="rb-accent" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#046999" />
        <stop offset="100%" stopColor="#0a85bf" />
      </linearGradient>
      <filter id="rb-shadow" x="-10%" y="-10%" width="120%" height="125%">
        <feDropShadow
          dx="0"
          dy="10"
          stdDeviation="14"
          floodColor="#0d1b2a"
          floodOpacity="0.14"
        />
      </filter>
      <filter id="rb-page-shadow" x="-10%" y="-10%" width="120%" height="120%">
        <feDropShadow
          dx="0"
          dy="3"
          stdDeviation="5"
          floodColor="#0d1b2a"
          floodOpacity="0.1"
        />
      </filter>
    </defs>

    {/* ── Window ── */}
    <rect
      x="20"
      y="20"
      width="520"
      height="400"
      rx="14"
      fill="#fff"
      filter="url(#rb-shadow)"
    />

    {/* Title bar */}
    <path d="M20 56V34a14 14 0 0 1 14-14h492a14 14 0 0 1 14 14v22z" fill="#f2f3f5" />
    {[44, 60, 76].map((cx) => (
      <circle key={cx} cx={cx} cy="38" r="4" fill="#d0d4d8" />
    ))}
    <text x="280" y="42" textAnchor="middle" fontSize="10" fill="#9a9da1">
      Document1 – Word
    </text>

    {/* ── Tabs: the custom tab is highlighted ── */}
    {[
      { x: 44, text: "File" },
      { x: 92, text: "Home" },
      { x: 142, text: "Insert" },
      { x: 198, text: "Layout" },
      { x: 358, text: "Review" },
      { x: 412, text: "View" },
    ].map(({ x, text }) => (
      <text key={text} x={x} y="77" fontSize="11" fill="#4a5568">
        {text}
      </text>
    ))}
    <rect x="250" y="60" width="88" height="28" rx="6" fill="url(#rb-accent)" />
    <text
      x="294"
      y="78"
      textAnchor="middle"
      fontSize="11"
      fontWeight="800"
      fill="#fff"
    >
      Formatting
    </text>

    {/* ── Ribbon body ── */}
    <rect x="20" y="88" width="520" height="100" fill="#fafbfc" />
    <path d="M20 188H540" stroke="#e3e8ec" />

    {/* Group dividers */}
    {[204, 330, 456].map((x) => (
      <path key={x} d={`M${x} 100V168`} stroke="#e3e8ec" />
    ))}

    {/* Styles group */}
    {styleButtons.map(({ x, size, label, active }) => (
      <g key={label}>
        <rect
          x={x}
          y="98"
          width="48"
          height="62"
          rx="6"
          fill={active ? "url(#rb-accent)" : "#fff"}
          stroke={active ? "none" : "#e3e8ec"}
        />
        <text
          x={x + 24}
          y="126"
          textAnchor="middle"
          fontSize={size}
          fontWeight="800"
          fill={active ? "#fff" : "#0d1b2a"}
        >
          Aa
        </text>
        <text
          x={x + 24}
          y="150"
          textAnchor="middle"
          fontSize="8.5"
          fontWeight="700"
          fill={active ? "rgba(255,255,255,0.85)" : "#9a9da1"}
        >
          {label}
        </text>
      </g>
    ))}

    {/* Tables group */}
    <RibbonButton x={216} label="Table">
      <rect x="-11" y="-8" width="22" height="16" rx="2" />
      <path d="M-11 -2.5h22M-11 3h22M-3.5 -8v16" />
    </RibbonButton>
    <RibbonButton x={270} label="Caption">
      <rect x="-11" y="-9" width="22" height="11" rx="2" />
      <path d="M-8 6h16M-5 10h10" />
    </RibbonButton>

    {/* Clean up group */}
    <RibbonButton x={342} label="Styles">
      <path
        d="M0 -10l2.6 7.4L10 0l-7.4 2.6L0 10l-2.6-7.4L-10 0l7.4-2.6z"
        fill="#046999"
        stroke="none"
      />
    </RibbonButton>
    <RibbonButton x={396} label="Lists">
      <path d="M-10 -6h2M-5 -6h15M-10 0h2M-5 0h15M-10 6h2M-5 6h9" />
    </RibbonButton>

    {/* Insert group */}
    <RibbonButton x={468} label="Cover">
      <rect x="-8" y="-11" width="16" height="22" rx="2" />
      <rect x="-4" y="-7" width="8" height="6" rx="1" fill="#046999" stroke="none" />
      <path d="M-4 4h8" />
    </RibbonButton>

    {/* Group captions */}
    {groupLabels.map(({ x, text }) => (
      <text
        key={text}
        x={x}
        y="180"
        textAnchor="middle"
        fontSize="8"
        fontWeight="700"
        letterSpacing="1.5"
        fill="#9a9da1"
      >
        {text}
      </text>
    ))}

    {/* ── Document canvas ── */}
    <path
      d="M20 188H540V406a14 14 0 0 1-14 14H34a14 14 0 0 1-14-14z"
      fill="#eef2f5"
    />
    <rect
      x="150"
      y="206"
      width="260"
      height="190"
      rx="4"
      fill="#fff"
      filter="url(#rb-page-shadow)"
    />

    {/* Page content: heading, body copy, subheading, table */}
    <rect x="174" y="226" width="130" height="12" rx="3" fill="url(#rb-accent)" />
    {[
      { y: 250, w: 212 },
      { y: 262, w: 196 },
      { y: 274, w: 204 },
      { y: 312, w: 212 },
      { y: 324, w: 180 },
    ].map(({ y, w }) => (
      <rect key={y} x="174" y={y} width={w} height="5" rx="2.5" fill="#e3e8ec" />
    ))}
    <rect x="174" y="294" width="84" height="8" rx="2" fill="#0d1b2a" opacity="0.75" />
    <rect x="174" y="344" width="212" height="12" rx="2" fill="#046999" opacity="0.85" />
    {[356, 367].map((y) => (
      <g key={y}>
        <rect x="174" y={y} width="212" height="11" fill="#f2f3f5" />
        <path d={`M244.7 ${y}v11M315.3 ${y}v11`} stroke="#fff" />
      </g>
    ))}

    {/* One click on H1 styles the heading: dashed link, then the cursor */}
    <path
      d="M60 160C60 210 110 232 168 232"
      fill="none"
      stroke="#046999"
      strokeWidth="1.5"
      strokeDasharray="4 4"
    />
    <circle cx="168" cy="232" r="3" fill="#046999" />
    <path
      transform="translate(72 138)"
      d="M0 0v17l4.5-4 3.2 7 2.6-1.2-3.2-6.8H15z"
      fill="#0d1b2a"
      stroke="#fff"
      strokeWidth="1.2"
      strokeLinejoin="round"
    />
  </svg>
);
