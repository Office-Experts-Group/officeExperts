// app/services/app-and-custom-development/(svgs)/PowerPagesSvg.jsx

// A sign-in page, a permissions shield, then Dataverse records: external users only reach what they are allowed to see
export const PowerPagesSvg = () => (
  <svg
    viewBox="0 0 480 300"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="pp-accent" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#046999" />
        <stop offset="100%" stopColor="#0a85bf" />
      </linearGradient>
      <filter id="pp-shadow" x="-10%" y="-10%" width="120%" height="120%">
        <feDropShadow
          dx="0"
          dy="4"
          stdDeviation="6"
          floodColor="#046999"
          floodOpacity="0.14"
        />
      </filter>
    </defs>

    {/* Sign-in window */}
    <rect
      x="16"
      y="40"
      width="190"
      height="220"
      rx="10"
      fill="#fff"
      stroke="#046999"
      strokeWidth="1.5"
      filter="url(#pp-shadow)"
    />
    <path
      d="M 16 50 a 10 10 0 0 1 10 -10 h 170 a 10 10 0 0 1 10 10 v 16 h -190 z"
      fill="#046999"
    />
    {[34, 48, 62].map((cx) => (
      <circle key={cx} cx={cx} cy="53" r="3.5" fill="#fff" opacity="0.8" />
    ))}
    <circle
      cx="111"
      cy="106"
      r="18"
      fill="#e8f4fa"
      stroke="#046999"
      strokeOpacity="0.5"
    />
    <circle cx="111" cy="101" r="6" fill="#046999" opacity="0.7" />
    <path d="M 99 116 a 12 9 0 0 1 24 0" fill="#046999" opacity="0.7" />
    <rect x="40" y="140" width="142" height="22" rx="5" fill="#e8f4fa" />
    <rect x="40" y="172" width="142" height="22" rx="5" fill="#e8f4fa" />
    <rect
      x="40"
      y="208"
      width="142"
      height="26"
      rx="13"
      fill="url(#pp-accent)"
    />

    {/* Permissions shield with a tick */}
    <path
      d="M 270 100 l 40 14 v 42 c 0 28 -18 46 -40 56 c -22 -10 -40 -28 -40 -56 v -42 z"
      fill="#e8f4fa"
      stroke="#046999"
      strokeWidth="1.5"
      transform="translate(-10 0)"
    />
    <path
      d="M 249 160 l 14 14 l 28 -30"
      fill="none"
      stroke="#046999"
      strokeWidth="5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    {/* Dataverse records */}
    <path
      d="M 370 80 v 120 c 0 12 24 20 54 20 s 54 -8 54 -20 v -120"
      transform="translate(-24 0)"
      fill="#e8f4fa"
      stroke="#046999"
      strokeOpacity="0.6"
    />
    <ellipse
      cx="400"
      cy="80"
      rx="54"
      ry="16"
      fill="#d0eaf6"
      stroke="#046999"
      strokeOpacity="0.6"
    />
    {[116, 146, 176].map((y) => (
      <g key={y}>
        <rect
          x="364"
          y={y}
          width="72"
          height="8"
          rx="4"
          fill="#046999"
          opacity="0.45"
        />
      </g>
    ))}
    <text
      x="400"
      y="256"
      textAnchor="middle"
      fill="#046999"
      fontSize="10"
      fontWeight="700"
      letterSpacing="1.5"
    >
      DATAVERSE
    </text>

    {/* Arrows from sign-in to shield to data */}
    <g stroke="#046999" strokeWidth="1.5" strokeDasharray="4 3" fill="none">
      <path d="M 206 150 L 232 150" />
      <path d="M 306 150 L 346 150" />
    </g>
  </svg>
);
