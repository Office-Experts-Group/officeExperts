// /services/add-in-creation/(svgs)/AddInHeroSvg.js
// An Office-style app window with a custom ribbon tab and task pane, showing what an add-in
// adds to an app. Original artwork, not a Microsoft product screen.
export const AddInHeroSvg = () => (
  <svg
    viewBox="0 0 560 440"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="aih-accent" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#046999" />
        <stop offset="100%" stopColor="#0a85bf" />
      </linearGradient>
      <filter id="aih-shadow" x="-10%" y="-10%" width="120%" height="130%">
        <feDropShadow
          dx="0"
          dy="12"
          stdDeviation="14"
          floodColor="#0d1b2a"
          floodOpacity="0.12"
        />
      </filter>
    </defs>

    {/* ── Backdrop ── */}
    <rect width="560" height="440" rx="36" fill="#f2f3f5" />

    {/* ── App window ── */}
    <rect
      x="36"
      y="44"
      width="488"
      height="330"
      rx="18"
      fill="#ffffff"
      filter="url(#aih-shadow)"
    />
    {[62, 80, 98].map((cx) => (
      <circle key={cx} cx={cx} cy="68" r="5" fill="#e3e8ec" />
    ))}

    {/* ── Tabs, with the add-in's own tab highlighted ── */}
    {[
      { x: 130, label: "Home" },
      { x: 186, label: "Insert" },
      { x: 246, label: "Review" },
    ].map(({ x, label }) => (
      <text key={label} x={x} y="72" fill="#777a7e" fontSize="12">
        {label}
      </text>
    ))}
    <rect x="322" y="55" width="108" height="26" rx="13" fill="url(#aih-accent)" />
    <text
      x="376"
      y="72"
      textAnchor="middle"
      fill="#ffffff"
      fontSize="12"
      fontWeight="700"
    >
      Your add-in
    </text>

    {/* ── Ribbon ── */}
    <rect x="36" y="92" width="488" height="64" fill="#f7f8f9" />
    {[56, 94, 132].map((x) => (
      <rect key={x} x={x} y="104" width="26" height="26" rx="7" fill="#e3e8ec" />
    ))}
    <line x1="180" y1="102" x2="180" y2="146" stroke="#e3e8ec" strokeWidth="1.5" />
    {[
      { x: 330, label: "Import" },
      { x: 376, label: "Check" },
      { x: 422, label: "Insert" },
    ].map(({ x, label }) => (
      <g key={label}>
        <rect
          x={x}
          y="102"
          width="32"
          height="30"
          rx="8"
          fill="url(#aih-accent)"
        />
        <text
          x={x + 16}
          y="147"
          textAnchor="middle"
          fill="#4a5568"
          fontSize="9"
        >
          {label}
        </text>
      </g>
    ))}
    {/* ── Document skeleton ── */}
    <rect x="60" y="178" width="120" height="14" rx="7" fill="#cfd4d9" />
    {[
      { y: 206, w: 230 },
      { y: 224, w: 200 },
      { y: 242, w: 222 },
      { y: 260, w: 150 },
      { y: 288, w: 226 },
      { y: 306, w: 190 },
      { y: 324, w: 214 },
      { y: 342, w: 120 },
    ].map(({ y, w }) => (
      <rect key={y} x="60" y={y} width={w} height="9" rx="4.5" fill="#e3e8ec" />
    ))}

    {/* ── Task pane ── */}
    <path
      d="M326 160 H524 V356 a18 18 0 0 1 -18 18 H326 Z"
      fill="#ffffff"
    />
    <line x1="326" y1="160" x2="326" y2="374" stroke="#e3e8ec" strokeWidth="1.5" />
    <rect x="326" y="160" width="198" height="30" fill="url(#aih-accent)" />
    <text x="342" y="180" fill="#ffffff" fontSize="12" fontWeight="700">
      Your add-in
    </text>

    <text x="342" y="214" fill="#777a7e" fontSize="10">
      Client
    </text>
    <rect x="342" y="220" width="166" height="26" rx="7" fill="#f2f3f5" />
    <rect x="352" y="229" width="70" height="8" rx="4" fill="#cfd4d9" />

    <text x="342" y="266" fill="#777a7e" fontSize="10">
      Template
    </text>
    <rect x="342" y="272" width="166" height="26" rx="7" fill="#f2f3f5" />
    <rect x="352" y="281" width="92" height="8" rx="4" fill="#cfd4d9" />
    <path
      d="M492 283 l5 5 l5 -5"
      fill="none"
      stroke="#777a7e"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    <rect x="342" y="314" width="12" height="12" rx="3" fill="#046999" />
    <path
      d="M345 320 l2.5 2.5 l4 -5"
      fill="none"
      stroke="#ffffff"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <text x="362" y="324" fill="#4a5568" fontSize="10">
      Apply brand styles
    </text>

    <rect x="342" y="338" width="166" height="24" rx="7" fill="url(#aih-accent)" />
    <text
      x="425"
      y="354"
      textAnchor="middle"
      fill="#ffffff"
      fontSize="11"
      fontWeight="700"
    >
      Run
    </text>

    {/* ── Floating "live data" card ── */}
    <rect
      x="16"
      y="322"
      width="160"
      height="84"
      rx="16"
      fill="#ffffff"
      filter="url(#aih-shadow)"
    />
    <text x="32" y="346" fill="#777a7e" fontSize="10" fontWeight="700">
      LIVE DATA
    </text>
    {[
      { x: 34, h: 18 },
      { x: 52, h: 30 },
      { x: 70, h: 22 },
      { x: 88, h: 38 },
    ].map(({ x, h }) => (
      <rect
        key={x}
        x={x}
        y={394 - h}
        width="12"
        height={h}
        rx="3"
        fill="#046999"
        opacity={0.55 + h / 100}
      />
    ))}
    <text x="116" y="384" fill="#0d1b2a" fontSize="16" fontWeight="800">
      +24%
    </text>

    {/* ── Floating AI badge ── */}
    <circle cx="508" cy="40" r="24" fill="#111820" />
    <path
      d="M508 27 l3 8.5 l8.5 3 l-8.5 3 l-3 8.5 l-3 -8.5 l-8.5 -3 l8.5 -3 z"
      fill="#6fc3e8"
    />
  </svg>
);
