// /app/blog/file-attachments-in-power-apps/(svgs)/HeroSvg.jsx
// Hero illustration: files attached in a Power Apps form travel through a flow
// into a document library, tagged with the saved record's ID.
// Hex values map to tokens: #111820 $dark-bg, #18232e $dark-surface,
// #1a2a3a $dark-mid, #046999 $accent, #6fc3e8 $accent-on-dark,
// white tints = $white-88 / $white-55 / $white-18 / $white-08.
// Sits straight on the dark hero background, no panel behind it.

const HeroSvg = () => (
  <svg
    viewBox="0 0 600 490"
    role="img"
    aria-labelledby="fa-hero-title fa-hero-desc"
    fontFamily="aptos"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title id="fa-hero-title">Files flowing from a form into a library</title>
    <desc id="fa-hero-desc">
      A Power Apps form with three attached files. A flow takes each file and
      saves it to a document library, where every file carries the ID of the
      record that was just saved.
    </desc>
    <defs>
      <marker
        id="fa-hero-arrow"
        viewBox="0 0 10 10"
        refX="8"
        refY="5"
        markerWidth="7"
        markerHeight="7"
        orient="auto-start-reverse"
      >
        <path d="M1 1 9 5 1 9z" fill="#6fc3e8" />
      </marker>
    </defs>

    {/* soft rings and dots, top right */}
    <g fill="none" stroke="#ffffff" strokeOpacity="0.09">
      <circle cx="500" cy="66" r="20" />
      <circle cx="500" cy="66" r="40" />
      <circle cx="500" cy="66" r="60" />
    </g>
    <g fill="#6fc3e8" fillOpacity="0.5">
      <circle cx="500" cy="66" r="4" />
      <circle cx="440" cy="106" r="2.5" />
      <circle cx="560" cy="26" r="2.5" />
      <circle cx="560" cy="106" r="2.5" />
    </g>

    {/* form card */}
    <rect
      x="16"
      y="36"
      width="240"
      height="410"
      rx="16"
      fill="#18232e"
      stroke="#ffffff"
      strokeOpacity="0.18"
    />
    <text
      x="36"
      y="70"
      fontSize="16"
      fontWeight="700"
      fill="#ffffff"
      fillOpacity="0.9"
    >
      New request
    </text>
    <g fill="#ffffff" fillOpacity="0.25">
      <circle cx="204" cy="64" r="3.5" />
      <circle cx="218" cy="64" r="3.5" />
      <circle cx="232" cy="64" r="3.5" />
    </g>
    <path d="M16 84h240" stroke="#ffffff" strokeOpacity="0.1" />

    <text x="36" y="110" fontSize="14" fill="#ffffff" fillOpacity="0.6">
      Title
    </text>
    <rect
      x="36"
      y="118"
      width="200"
      height="30"
      rx="8"
      fill="#111820"
      stroke="#ffffff"
      strokeOpacity="0.18"
    />
    <text x="48" y="138" fontSize="14" fill="#ffffff" fillOpacity="0.9">
      Roof inspection
    </text>

    <text x="36" y="174" fontSize="14" fill="#ffffff" fillOpacity="0.6">
      Details
    </text>
    <rect
      x="36"
      y="182"
      width="200"
      height="44"
      rx="8"
      fill="#111820"
      stroke="#ffffff"
      strokeOpacity="0.18"
    />
    <rect
      x="48"
      y="194"
      width="150"
      height="6"
      rx="3"
      fill="#ffffff"
      fillOpacity="0.25"
    />
    <rect
      x="48"
      y="208"
      width="96"
      height="6"
      rx="3"
      fill="#ffffff"
      fillOpacity="0.25"
    />

    {/* attachment control */}
    <rect
      x="36"
      y="238"
      width="200"
      height="130"
      rx="10"
      fill="#111820"
      stroke="#6fc3e8"
      strokeOpacity="0.7"
      strokeDasharray="5 4"
    />
    <g
      transform="translate(46 246) scale(0.75)"
      fill="none"
      stroke="#6fc3e8"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20.5 11.5 12 20a5.5 5.5 0 0 1-7.8-7.8l8.5-8.5a3.7 3.7 0 0 1 5.2 5.2l-8.5 8.5a1.8 1.8 0 0 1-2.6-2.6l7.8-7.8" />
    </g>
    <text x="68" y="262" fontSize="14" fontWeight="700" fill="#6fc3e8">
      Attach files
    </text>
    {[
      ["quote.pdf", 274],
      ["photo.jpg", 302],
      ["scope.docx", 330],
    ].map(([name, y]) => (
      <g key={name}>
        <rect x="46" y={y} width="180" height="24" rx="6" fill="#1a2a3a" />
        <path
          d={`M56 ${y + 5}h7l4 4v9a1 1 0 0 1-1 1h-10a1 1 0 0 1-1-1v-12a1 1 0 0 1 1-1Z`}
          fill="none"
          stroke="#6fc3e8"
          strokeWidth="1.4"
          strokeLinejoin="round"
        />
        <text x="76" y={y + 17} fontSize="14" fill="#ffffff" fillOpacity="0.9">
          {name}
        </text>
        <path
          d={`M208 ${y + 8}l8 8m0 -8l-8 8`}
          stroke="#ffffff"
          strokeOpacity="0.4"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </g>
    ))}

    <rect x="140" y="384" width="96" height="36" rx="8" fill="#046999" />
    <text
      x="188"
      y="407"
      fontSize="15"
      fontWeight="700"
      fill="#ffffff"
      textAnchor="middle"
    >
      Save
    </text>

    {/* card to flow */}
    <path
      d="M256 304h46"
      stroke="#6fc3e8"
      strokeWidth="2"
      strokeDasharray="6 5"
      markerEnd="url(#fa-hero-arrow)"
    />
    <g
      transform="translate(266 290)"
      fill="#1a2a3a"
      stroke="#6fc3e8"
      strokeWidth="1.4"
      strokeLinejoin="round"
    >
      <path
        d="M0 0h9l5 5v13a1 1 0 0 1-1 1H0a1 1 0 0 1-1-1V1a1 1 0 0 1 1-1Z"
        transform="translate(1 -4)"
      />
    </g>

    {/* flow node */}
    <circle
      cx="338"
      cy="304"
      r="28"
      fill="#046999"
      stroke="#6fc3e8"
      strokeWidth="2"
    />
    <g
      transform="translate(326 292)"
      fill="none"
      stroke="#ffffff"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M13 3 5 13.5h6L10 21l8-10.5h-6L13 3Z" />
    </g>
    <text
      x="338"
      y="354"
      fontSize="14"
      fontWeight="700"
      fill="#ffffff"
      fillOpacity="0.9"
      textAnchor="middle"
    >
      Flow
    </text>
    <text
      x="338"
      y="374"
      fontSize="14"
      fill="#ffffff"
      fillOpacity="0.6"
      textAnchor="middle"
    >
      once per file
    </text>

    {/* flow to library */}
    <path
      d="M366 304h40"
      stroke="#6fc3e8"
      strokeWidth="2"
      strokeDasharray="6 5"
      markerEnd="url(#fa-hero-arrow)"
    />

    {/* document library */}
    <text x="410" y="138" fontSize="14" fontWeight="700" fill="#6fc3e8">
      Document library
    </text>
    <rect
      x="410"
      y="150"
      width="174"
      height="188"
      rx="12"
      fill="#18232e"
      stroke="#ffffff"
      strokeOpacity="0.18"
    />
    <text
      x="422"
      y="172"
      fontSize="14"
      fontWeight="700"
      fill="#ffffff"
      fillOpacity="0.6"
    >
      Name
    </text>
    <text
      x="506"
      y="172"
      fontSize="14"
      fontWeight="700"
      fill="#ffffff"
      fillOpacity="0.6"
    >
      ParentId
    </text>
    <path d="M410 182h174" stroke="#ffffff" strokeOpacity="0.14" />
    <rect
      x="414"
      y="186"
      width="166"
      height="112"
      rx="6"
      fill="#046999"
      fillOpacity="0.28"
    />
    {[
      ["quote.pdf", "42", 208, 1],
      ["photo.jpg", "42", 244, 1],
      ["scope.docx", "42", 280, 1],
      ["other.xlsx", "17", 316, 0.45],
    ].map(([name, id, y, o]) => (
      <g key={name} opacity={o}>
        <text x="422" y={y} fontSize="14" fill="#ffffff">
          {name}
        </text>
        <text x="506" y={y} fontSize="14" fontWeight="700" fill="#6fc3e8">
          {id}
        </text>
      </g>
    ))}
    <path
      d="M410 226h174M410 262h174M410 298h174"
      stroke="#ffffff"
      strokeOpacity="0.08"
    />

    {/* record ID travels back to the library */}
    <rect x="410" y="352" width="126" height="30" rx="15" fill="#046999" />
    <text
      x="473"
      y="372"
      fontSize="14"
      fontWeight="700"
      fill="#ffffff"
      textAnchor="middle"
    >
      ParentId = 42
    </text>
    <path
      d="M188 420C188 462 473 462 473 386"
      fill="none"
      stroke="#6fc3e8"
      strokeWidth="2"
      strokeDasharray="6 5"
      markerEnd="url(#fa-hero-arrow)"
    />
    <text
      x="330"
      y="482"
      fontSize="14"
      fill="#ffffff"
      fillOpacity="0.6"
      textAnchor="middle"
    >
      ID from the saved record
    </text>
  </svg>
);

export default HeroSvg;
