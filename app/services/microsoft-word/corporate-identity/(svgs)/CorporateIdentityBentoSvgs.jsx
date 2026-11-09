// /services/microsoft-word/corporate-identity/(svgs)/CorporateIdentityBentoSvgs.jsx
//
// One custom illustration per bento tile. Decorative only (the tile text
// carries the meaning), so each is aria-hidden.
//
// Hex values mirror globals.scss: accent #046999 · accent-on-dark #6fc3e8 ·
// accent-dark #034e72 · accent-light #e8f4fa · text-primary #0d1b2a ·
// line #e3e8ec · line-strong #d4d6d9 · text-muted #9a9da1 · light-bg #f7f8f9
// Anything drawn with `currentColor` is tinted per tile in the SCSS module.

const svgProps = {
  xmlns: "http://www.w3.org/2000/svg",
  "aria-hidden": "true",
  focusable: "false",
};

/* 1 — Header & logo lockup: identical letterhead repeated, snapped to guides */
export const HeaderLockupSvg = () => (
  <svg viewBox="0 0 360 200" {...svgProps}>
    {/* alignment guides */}
    <g stroke="currentColor" strokeWidth="1" strokeDasharray="3 4">
      <line x1="48" y1="4" x2="48" y2="196" />
      <line x1="4" y1="98" x2="356" y2="98" />
    </g>

    {/* stacked copies of the same page */}
    <rect x="48" y="14" width="264" height="160" rx="10" fill="#fff" opacity="0.28" />
    <rect x="58" y="14" width="244" height="5" rx="2.5" fill="#6fc3e8" opacity="0.6" />
    <rect x="39" y="29" width="282" height="160" rx="10" fill="#fff" opacity="0.55" />
    <rect x="49" y="29" width="262" height="5" rx="2.5" fill="#6fc3e8" opacity="0.8" />

    {/* front page */}
    <rect x="30" y="44" width="300" height="170" rx="10" fill="#fff" />
    <rect x="40" y="44" width="280" height="5" rx="2.5" fill="#6fc3e8" />

    <rect x="48" y="62" width="28" height="28" rx="7" fill="#046999" />
    <circle cx="62" cy="76" r="7" fill="none" stroke="#fff" strokeWidth="2.2" />
    <circle cx="62" cy="76" r="2.2" fill="#6fc3e8" />
    {/* selection handles = locked in place */}
    {[
      [48, 62],
      [76, 62],
      [48, 90],
      [76, 90],
    ].map(([x, y]) => (
      <rect
        key={`${x}-${y}`}
        x={x - 2.5}
        y={y - 2.5}
        width="5"
        height="5"
        rx="1"
        fill="#fff"
        stroke="#046999"
        strokeWidth="1"
      />
    ))}
    <rect x="86" y="66" width="78" height="8" rx="4" fill="#0d1b2a" />
    <rect x="86" y="80" width="52" height="4" rx="2" fill="#9a9da1" opacity="0.6" />
    <rect x="258" y="64" width="54" height="3.5" rx="1.75" fill="#cbd2d8" />
    <rect x="268" y="72" width="44" height="3.5" rx="1.75" fill="#cbd2d8" />
    <rect x="262" y="80" width="50" height="3.5" rx="1.75" fill="#cbd2d8" />
    <line x1="48" y1="98" x2="312" y2="98" stroke="#e3e8ec" />

    <rect x="48" y="114" width="150" height="10" rx="3" fill="#0d1b2a" opacity="0.85" />
    <rect x="48" y="136" width="264" height="4.5" rx="2.25" fill="#d4d6d9" />
    <rect x="48" y="147" width="240" height="4.5" rx="2.25" fill="#d4d6d9" />
    <rect x="48" y="158" width="200" height="4.5" rx="2.25" fill="#d4d6d9" />
  </svg>
);

/* 2 — Heading styles: named styles, not manual formatting */
export const HeadingStylesSvg = () => (
  <svg viewBox="0 0 360 200" {...svgProps}>
    <rect x="20" y="16" width="320" height="168" rx="12" fill="#f7f8f9" stroke="#e3e8ec" />

    {/* Heading 1 */}
    <rect x="38" y="36" width="74" height="22" rx="11" fill="#046999" />
    <text x="75" y="47" dy="0.35em" textAnchor="middle" fontSize="9" fontWeight="700" fill="#fff">
      Heading 1
    </text>
    <rect x="128" y="40" width="176" height="14" rx="3" fill="#0d1b2a" />

    {/* Heading 2 */}
    <rect x="38" y="70" width="74" height="22" rx="11" fill="#e8f4fa" stroke="#046999" strokeOpacity="0.5" />
    <text x="75" y="81" dy="0.35em" textAnchor="middle" fontSize="9" fontWeight="700" fill="#046999">
      Heading 2
    </text>
    <rect x="128" y="75" width="124" height="10" rx="3" fill="#046999" />

    {/* Body */}
    <rect x="38" y="104" width="74" height="22" rx="11" fill="#fff" stroke="#d4d6d9" />
    <text x="75" y="115" dy="0.35em" textAnchor="middle" fontSize="9" fontWeight="700" fill="#777a7e">
      Body
    </text>
    <rect x="128" y="105" width="196" height="4.5" rx="2.25" fill="#d4d6d9" />
    <rect x="128" y="116" width="170" height="4.5" rx="2.25" fill="#d4d6d9" />
    <rect x="128" y="127" width="104" height="4.5" rx="2.25" fill="#d4d6d9" />

    {/* The thing Styles replace */}
    <line x1="38" y1="144" x2="322" y2="144" stroke="#e3e8ec" />
    <text
      x="38"
      y="164"
      fontSize="10"
      fill="#9a9da1"
      textDecoration="line-through"
    >
      Manual bold + 14pt
    </text>
    <circle cx="316" cy="160" r="9" fill="#c0392b" fillOpacity="0.12" />
    <path
      d="M312 156 l8 8 M320 156 l-8 8"
      stroke="#c0392b"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
  </svg>
);

/* 3 — Locked content controls: guided fields inside a protected layout */
export const ContentControlsSvg = () => {
  const Lock = ({ x, y }) => (
    <g>
      <rect x={x} y={y + 3} width="12" height="9" rx="2" fill="#046999" />
      <path
        d={`M${x + 2.5} ${y + 3} v-2.5 a3.5 3.5 0 0 1 7 0 v2.5`}
        fill="none"
        stroke="#046999"
        strokeWidth="1.8"
      />
    </g>
  );

  return (
    <svg viewBox="0 0 360 220" {...svgProps}>
      <rect x="24" y="12" width="312" height="196" rx="12" fill="#fff" stroke="#e3e8ec" />

      {/* Filled field */}
      <rect x="44" y="30" width="76" height="16" rx="4" fill="#046999" />
      <text x="82" y="38" dy="0.35em" textAnchor="middle" fontSize="8.5" fontWeight="700" fill="#fff">
        Client name
      </text>
      <rect x="44" y="46" width="272" height="30" rx="6" fill="#046999" fillOpacity="0.07" stroke="#046999" strokeWidth="1.2" strokeDasharray="4 3" />
      <text x="56" y="61" dy="0.35em" fontSize="11" fill="#0d1b2a">
        Northwind Traders
      </text>
      <Lock x={292} y={55} />

      {/* Filled field */}
      <rect x="44" y="90" width="44" height="16" rx="4" fill="#046999" />
      <text x="66" y="98" dy="0.35em" textAnchor="middle" fontSize="8.5" fontWeight="700" fill="#fff">
        Date
      </text>
      <rect x="44" y="106" width="272" height="30" rx="6" fill="#046999" fillOpacity="0.07" stroke="#046999" strokeWidth="1.2" strokeDasharray="4 3" />
      <text x="56" y="121" dy="0.35em" fontSize="11" fill="#0d1b2a">
        08 / 11 / 2026
      </text>
      <Lock x={292} y={115} />

      {/* Active field with guided prompt */}
      <rect x="44" y="150" width="66" height="16" rx="4" fill="#046999" />
      <text x="77" y="158" dy="0.35em" textAnchor="middle" fontSize="8.5" fontWeight="700" fill="#fff">
        Reference
      </text>
      <rect x="44" y="166" width="272" height="30" rx="6" fill="#fff" stroke="#046999" strokeWidth="1.6" />
      <rect x="56" y="174" width="1.8" height="14" fill="#046999" />
      <text x="64" y="181" dy="0.35em" fontSize="11" fill="#9a9da1" fontStyle="italic">
        Enter reference…
      </text>

      {/* Tooltip bubble */}
      <rect x="214" y="138" width="102" height="20" rx="10" fill="#0d1b2a" />
      <path d="M236 158 l6 7 l6 -7 z" fill="#0d1b2a" />
      <text x="265" y="148" dy="0.35em" textAnchor="middle" fontSize="8.5" fontWeight="700" fill="#fff">
        Guided prompt
      </text>
    </svg>
  );
};

/* 4 — Branded tables & data blocks */
export const BrandedTableSvg = () => (
  <svg viewBox="0 0 360 200" {...svgProps}>
    <rect x="24" y="24" width="312" height="160" rx="10" fill="#fff" />

    {/* header */}
    <path d="M24 34 a10 10 0 0 1 10-10 h292 a10 10 0 0 1 10 10 v18 h-312 z" fill="#034e72" />
    <rect x="40" y="35" width="56" height="6" rx="3" fill="#fff" opacity="0.9" />
    <rect x="178" y="35" width="38" height="6" rx="3" fill="#fff" opacity="0.9" />
    <rect x="244" y="35" width="30" height="6" rx="3" fill="#fff" opacity="0.9" />
    <rect x="292" y="35" width="28" height="6" rx="3" fill="#fff" opacity="0.9" />

    {/* rows */}
    <rect x="24" y="76" width="312" height="26" fill="#f7f8f9" />
    <rect x="24" y="128" width="312" height="26" fill="#f7f8f9" />
    {[
      [52, 110],
      [78, 84],
      [104, 124],
      [128, 96],
    ].map(([y, w]) => (
      <g key={y}>
        <rect x="40" y={y + 10} width={w} height="5" rx="2.5" fill="#0d1b2a" opacity="0.6" />
        <rect x="178" y={y + 10} width="30" height="5" rx="2.5" fill="#9a9da1" />
        <rect x="244" y={y + 10} width="24" height="5" rx="2.5" fill="#9a9da1" />
        <rect x="292" y={y + 10} width="28" height="5" rx="2.5" fill="#9a9da1" />
      </g>
    ))}
    {[76, 102, 128, 154].map((y) => (
      <line key={y} x1="24" y1={y} x2="336" y2={y} stroke="#e3e8ec" />
    ))}
    {/* column guides */}
    <g stroke="#046999" strokeOpacity="0.15" strokeDasharray="2 3">
      <line x1="168" y1="52" x2="168" y2="154" />
      <line x1="232" y1="52" x2="232" y2="154" />
      <line x1="280" y1="52" x2="280" y2="154" />
    </g>

    {/* total row */}
    <path d="M24 154 h312 v20 a10 10 0 0 1 -10 10 h-292 a10 10 0 0 1 -10 -10 z" fill="#e8f4fa" />
    <rect x="40" y="165" width="48" height="7" rx="3.5" fill="#046999" />
    <rect x="288" y="165" width="32" height="7" rx="3.5" fill="#046999" />

    {/* brand palette badge */}
    <rect x="222" y="6" width="112" height="24" rx="12" fill="#fff" stroke="#e3e8ec" />
    {["#046999", "#6fc3e8", "#034e72", "#0d1b2a"].map((c, i) => (
      <circle key={c} cx={246 + i * 22} cy="18" r="7" fill={c} />
    ))}
  </svg>
);

/* 5 — Footer, pagination & markings: three pages, each stamped automatically */
export const FooterMarkingsSvg = () => {
  const pages = [14, 224, 434];
  const lines = [
    [28, 150],
    [38, 162],
    [48, 134],
    [58, 156],
    [68, 96],
  ];

  return (
    <svg viewBox="0 0 640 130" {...svgProps}>
      {pages.map((x, i) => (
        <g key={x}>
          <rect x={x} y="8" width="192" height="150" rx="10" fill="#fff" />
          {lines.map(([y, w]) => (
            <rect
              key={y}
              x={x + 14}
              y={y}
              width={w + (i === 1 ? 6 : 0)}
              height="4.5"
              rx="2.25"
              fill="#d4d6d9"
            />
          ))}
          <line x1={x + 14} y1="94" x2={x + 178} y2="94" stroke="#e3e8ec" />
          <rect x={x + 14} y="102" width="62" height="14" rx="7" fill="#046999" fillOpacity="0.1" />
          <text
            x={x + 45}
            y="109"
            dy="0.35em"
            textAnchor="middle"
            fontSize="6.5"
            fontWeight="700"
            letterSpacing="0.6"
            fill="#046999"
          >
            CONFIDENTIAL
          </text>
          <text x={x + 178} y="109" dy="0.35em" textAnchor="end" fontSize="7.5" fontWeight="700" fill="#4a5568">
            Page {i + 1} of 3
          </text>
          <text x={x + 112} y="109" dy="0.35em" textAnchor="middle" fontSize="7" fill="#9a9da1">
            v2.4
          </text>
        </g>
      ))}

      {/* "automatic" arrows between pages */}
      {[206, 416].map((x) => (
        <path
          key={x}
          d={`M${x + 2} 62 h14 m-5 -5 l5 5 l-5 5`}
          fill="none"
          stroke="#6fc3e8"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      ))}
    </svg>
  );
};
