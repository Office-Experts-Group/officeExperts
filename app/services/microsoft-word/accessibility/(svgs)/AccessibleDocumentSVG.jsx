// app/accessibility/(svgs)/AccessibleDocumentSVG.jsx

// Replaces the stock photo in PageSegmentMain. Shows a structured document
// (tagged heading, body text, accessible table) being read aloud by
// assistive technology — grounds the hero visual in the page's actual
// subject rather than a generic office photo.
const AccessibleDocumentSVG = () => (
  <svg
    viewBox="0 0 600 400"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    fill="none"
    style={{ overflow: "visible" }}
  >
    <defs>
      <linearGradient id="adx-pageGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#ffffff" />
        <stop offset="100%" stopColor="#e8f4fa" />
      </linearGradient>
      <filter id="adx-shadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow
          dx="0"
          dy="10"
          stdDeviation="16"
          floodColor="#046999"
          floodOpacity="0.14"
        />
      </filter>
    </defs>

    {/* Background accent shape */}
    <circle cx="470" cy="90" r="120" fill="#046999" opacity="0.05" />

    {/* Document page */}
    <rect
      x="90"
      y="40"
      width="320"
      height="330"
      rx="10"
      fill="url(#adx-pageGrad)"
      stroke="#046999"
      strokeWidth="1.5"
      filter="url(#adx-shadow)"
    />

    {/* H1 tag + heading bar */}
    <rect x="118" y="66" width="30" height="16" rx="3" fill="#046999" />
    <text
      x="133"
      y="78"
      textAnchor="middle"
      fill="#fff"
      fontSize="8"
      fontWeight="700"
    >
      H1
    </text>
    <rect
      x="156"
      y="68"
      width="150"
      height="12"
      rx="2"
      fill="#046999"
      opacity="0.85"
    />

    {/* Body lines */}
    <rect
      x="118"
      y="96"
      width="272"
      height="7"
      rx="2"
      fill="rgba(13,27,42,0.12)"
    />
    <rect
      x="118"
      y="109"
      width="240"
      height="7"
      rx="2"
      fill="rgba(13,27,42,0.12)"
    />

    {/* H2 tag + heading bar */}
    <rect
      x="118"
      y="134"
      width="30"
      height="15"
      rx="3"
      fill="#046999"
      opacity="0.85"
    />
    <text
      x="133"
      y="145"
      textAnchor="middle"
      fill="#fff"
      fontSize="7.5"
      fontWeight="700"
    >
      H2
    </text>
    <rect
      x="156"
      y="135"
      width="110"
      height="11"
      rx="2"
      fill="#046999"
      opacity="0.65"
    />

    <rect
      x="118"
      y="160"
      width="272"
      height="7"
      rx="2"
      fill="rgba(13,27,42,0.12)"
    />
    <rect
      x="118"
      y="173"
      width="220"
      height="7"
      rx="2"
      fill="rgba(13,27,42,0.12)"
    />

    {/* Accessible table with header row */}
    <rect
      x="118"
      y="198"
      width="272"
      height="90"
      rx="4"
      stroke="#046999"
      strokeWidth="1.3"
      opacity="0.4"
    />
    <rect
      x="118"
      y="198"
      width="272"
      height="22"
      rx="4"
      fill="#046999"
      opacity="0.85"
    />
    <text x="140" y="213" fill="#fff" fontSize="7.5" fontWeight="700">
      Item
    </text>
    <text x="230" y="213" fill="#fff" fontSize="7.5" fontWeight="700">
      Status
    </text>
    <text x="320" y="213" fill="#fff" fontSize="7.5" fontWeight="700">
      Owner
    </text>
    <line
      x1="118"
      y1="242"
      x2="390"
      y2="242"
      stroke="rgba(4,105,153,0.2)"
      strokeWidth="1"
    />
    <line
      x1="118"
      y1="266"
      x2="390"
      y2="266"
      stroke="rgba(4,105,153,0.2)"
      strokeWidth="1"
    />
    <line
      x1="204"
      y1="220"
      x2="204"
      y2="288"
      stroke="rgba(4,105,153,0.15)"
      strokeWidth="1"
    />
    <line
      x1="290"
      y1="220"
      x2="290"
      y2="288"
      stroke="rgba(4,105,153,0.15)"
      strokeWidth="1"
    />
    {[232, 256, 280].map((y) => (
      <g key={y}>
        <rect
          x="132"
          y={y}
          width="56"
          height="6"
          rx="1.5"
          fill="rgba(13,27,42,0.14)"
        />
        <rect
          x="218"
          y={y}
          width="48"
          height="6"
          rx="1.5"
          fill="rgba(13,27,42,0.14)"
        />
        <rect
          x="304"
          y={y}
          width="44"
          height="6"
          rx="1.5"
          fill="rgba(13,27,42,0.14)"
        />
      </g>
    ))}

    {/* Alt-text tagged image placeholder near the foot of the page */}
    <rect
      x="118"
      y="300"
      width="60"
      height="46"
      rx="4"
      stroke="#046999"
      strokeWidth="1.3"
      strokeDasharray="4 3"
      fill="rgba(4,105,153,0.06)"
    />
    <path
      d="M126 336l10-11 7 7 6-6 11 10"
      stroke="#046999"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      opacity="0.5"
    />
    <rect
      x="188"
      y="308"
      width="202"
      height="7"
      rx="2"
      fill="rgba(13,27,42,0.12)"
    />
    <rect
      x="188"
      y="321"
      width="202"
      height="7"
      rx="2"
      fill="rgba(13,27,42,0.12)"
    />
    <rect
      x="188"
      y="334"
      width="150"
      height="7"
      rx="2"
      fill="rgba(13,27,42,0.12)"
    />

    {/* Assistive technology announcement bubble, overlapping the page edge */}
    <path
      d="M400 150h84a10 10 0 0 1 10 10v52a10 10 0 0 1-10 10h-56l-18 22v-22h-10a10 10 0 0 1-10-10v-52a10 10 0 0 1 10-10z"
      fill="#046999"
      filter="url(#adx-shadow)"
    />
    <path
      d="M418 172v28M432 165v42M446 172v28M460 168v36"
      stroke="#fff"
      strokeWidth="2.4"
      strokeLinecap="round"
    />

    {/* Reading-order path connecting the tags down the page */}
    <path
      d="M133 82 V134 M133 149 V198"
      stroke="#046999"
      strokeWidth="1.3"
      strokeDasharray="3 3"
      opacity="0.4"
    />
  </svg>
);

export default AccessibleDocumentSVG;
