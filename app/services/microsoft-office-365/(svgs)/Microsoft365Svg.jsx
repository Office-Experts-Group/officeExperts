// app/services/microsoft-365/(svgs)/Microsoft365Svg.jsx
// Custom illustration for the "Unlock the Power of Office 365" segment.
// Above the waterline: the familiar apps most teams use day to day.
// Below it: the wider ecosystem already included in the subscription, all feeding one hub.
// Pure SVG with SMIL animation, so it renders on the server with no client JavaScript.

// Colours mirror globals.scss tokens (SVG attributes can't read Sass variables)
const c = {
  accent: "#046999", // $accent
  accentOnDark: "#6fc3e8", // $accent-on-dark
  lightBg: "#f7f8f9", // $light-bg
  textPrimary: "#0d1b2a", // $text-primary
  textSecondary: "#4a5568", // $text-secondary
  textMuted: "#9a9da1", // $text-muted
  darkBg: "#111820", // $dark-bg
  darkSurface: "#18232e", // $dark-surface
  darkMid: "#1a2a3a", // $dark-mid
};

// Hub centre, every connection line ends here
const HUB = { x: 300, y: 320 };

// Top row: the apps everyone recognises (glyphs drawn inside a 40x40 tile icon)
const apps = [
  {
    label: "Word",
    sub: "Documents",
    x: 51,
    icon: (
      <g fill="#fff">
        <rect x="10" y="12" width="20" height="2.5" rx="1.25" />
        <rect x="10" y="19" width="20" height="2.5" rx="1.25" />
        <rect x="10" y="26" width="13" height="2.5" rx="1.25" />
      </g>
    ),
  },
  {
    label: "Excel",
    sub: "Spreadsheets",
    x: 225,
    icon: (
      <g fill="#fff">
        <rect x="11" y="11" width="8" height="8" rx="1.5" />
        <rect x="21" y="11" width="8" height="8" rx="1.5" opacity="0.55" />
        <rect x="11" y="21" width="8" height="8" rx="1.5" opacity="0.55" />
        <rect x="21" y="21" width="8" height="8" rx="1.5" />
      </g>
    ),
  },
  {
    label: "Outlook",
    sub: "Email",
    x: 399,
    icon: (
      <g fill="none" stroke="#fff" strokeWidth="2" strokeLinejoin="round">
        <rect x="9" y="12" width="22" height="16" rx="2" />
        <path d="M10 13.5l10 7.5 10-7.5" />
      </g>
    ),
  },
];

// Below the waterline: the rest of the ecosystem (icons drawn around 0,0 within ±7)
const tools = [
  {
    label: "Copilot AI",
    side: "left",
    y: 250,
    icon: (
      <path
        d="M0-7C1-2 2-1 7 0 2 1 1 2 0 7-1 2-2 1-7 0-2-1-1-2 0-7Z"
        fill={c.accentOnDark}
      />
    ),
  },
  {
    label: "Power Automate",
    side: "left",
    y: 320,
    icon: (
      <path
        d="M-6-3H4M1-6l3 3-3 3M6 3H-4M-1 0l-3 3 3 3"
        fill="none"
        stroke={c.accentOnDark}
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    label: "SharePoint",
    side: "left",
    y: 390,
    icon: (
      <g fill="none" stroke={c.accentOnDark} strokeWidth="1.6">
        <rect x="-6" y="-6" width="12" height="12" rx="2" />
        <path d="M-6-2H6M-2-2V6" />
      </g>
    ),
  },
  {
    label: "Power Apps",
    side: "right",
    y: 250,
    icon: (
      <g
        fill="none"
        stroke={c.accentOnDark}
        strokeWidth="1.6"
        strokeLinecap="round"
      >
        <rect x="-4.5" y="-7" width="9" height="14" rx="2" />
        <path d="M-1.5 4H1.5" />
      </g>
    ),
  },
  {
    label: "Power BI",
    side: "right",
    y: 320,
    icon: (
      <g fill={c.accentOnDark}>
        <rect x="-6.5" y="1" width="3.5" height="6" rx="1" />
        <rect x="-1.75" y="-3" width="3.5" height="10" rx="1" />
        <rect x="3" y="-7" width="3.5" height="14" rx="1" />
      </g>
    ),
  },
  {
    label: "Azure Cloud",
    side: "right",
    y: 390,
    icon: (
      <path
        d="M-4.5 5H4.5A3.5 3.5 0 0 0 4.2-2 5 5 0 0 0-4.6-1.5 3.3 3.3 0 0 0-4.5 5Z"
        fill="none"
        stroke={c.accentOnDark}
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    ),
  },
];

// Pills are 150 wide; left pills start at x 32, right pills at x 418
const pillX = (side) => (side === "left" ? 32 : 418);

// Curved link from a pill's inner edge into the hub
const toolPath = ({ side, y }) => {
  const isLeft = side === "left";
  const edge = isLeft ? 182 : 418;
  const c1 = isLeft ? 230 : 370;
  const c2 = isLeft ? 250 : 350;
  return `M${edge} ${y}C${c1} ${y} ${c2} ${HUB.y} ${HUB.x} ${HUB.y}`;
};

// Link from the bottom of an app tile down through the waterline to the top of the hub
const appPath = ({ x }) => {
  const cx = x + 75;
  return `M${cx} 148C${cx} 230 ${HUB.x} 200 ${HUB.x} 276`;
};

export const Microsoft365Svg = () => (
  <svg
    viewBox="0 0 600 460"
    width="100%"
    role="img"
    aria-labelledby="m365-title m365-desc"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title id="m365-title">The Microsoft 365 ecosystem</title>
    <desc id="m365-desc">
      Word, Excel and Outlook sit above the surface, connected to the rest of
      Microsoft 365 below: Copilot AI, Power Automate, SharePoint, Power Apps,
      Power BI and Azure, all included in your existing subscription.
    </desc>

    {/* Hide the moving dots and pulse for visitors who prefer reduced motion */}
    <style>
      {"@media (prefers-reduced-motion: reduce){.m365-motion{display:none}}"}
    </style>

    <defs>
      <clipPath id="m365-clip">
        <rect width="600" height="460" rx="24" />
      </clipPath>
      <linearGradient id="m365-depth" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor={c.darkSurface} />
        <stop offset="1" stopColor={c.darkBg} />
      </linearGradient>
      <radialGradient id="m365-glow">
        <stop offset="0" stopColor={c.accent} stopOpacity="0.55" />
        <stop offset="1" stopColor={c.accent} stopOpacity="0" />
      </radialGradient>
      <filter id="m365-shadow" x="-20%" y="-20%" width="140%" height="160%">
        <feDropShadow
          dy="6"
          stdDeviation="9"
          floodColor={c.textPrimary}
          floodOpacity="0.08"
        />
      </filter>
    </defs>

    <g clipPath="url(#m365-clip)">
      {/* Surface and depth: a faint accent swell behind the dark water */}
      <rect width="600" height="460" fill={c.lightBg} />
      <path
        d="M0 168C100 148 200 188 300 168S500 148 600 168V460H0Z"
        fill={c.accent}
        opacity="0.18"
      />
      <path
        d="M0 178C100 158 200 198 300 178S500 158 600 178V460H0Z"
        fill="url(#m365-depth)"
      />

      {/* App tiles to hub (drawn first so tiles and hub cover the line ends) */}
      {apps.map((app, i) => (
        <path
          key={app.label}
          id={`m365-app-link-${i}`}
          d={appPath(app)}
          fill="none"
          stroke={c.accent}
          strokeWidth="1.5"
          strokeDasharray="3 5"
          opacity="0.7"
        />
      ))}

      {/* Pills to hub */}
      {tools.map((tool, i) => (
        <path
          key={tool.label}
          id={`m365-tool-link-${i}`}
          d={toolPath(tool)}
          fill="none"
          stroke={c.accentOnDark}
          strokeWidth="1.5"
          opacity="0.3"
        />
      ))}

      <text
        x="32"
        y="42"
        fontSize="11"
        fontWeight="700"
        letterSpacing="2"
        fill={c.textMuted}
      >
        WHAT MOST TEAMS USE
      </text>

      {/* Familiar app tiles */}
      {apps.map((app) => (
        <g key={app.label} transform={`translate(${app.x} 64)`}>
          <rect
            width="150"
            height="84"
            rx="16"
            fill="#fff"
            filter="url(#m365-shadow)"
          />
          <g transform="translate(18 22)">
            <rect width="40" height="40" rx="10" fill={c.accent} />
            {app.icon}
          </g>
          <text
            x="70"
            y="38"
            fontSize="15"
            fontWeight="700"
            fill={c.textPrimary}
          >
            {app.label}
          </text>
          <text x="70" y="56" fontSize="11" fill={c.textSecondary}>
            {app.sub}
          </text>
        </g>
      ))}

      {/* Ecosystem pills */}
      {tools.map((tool) => (
        <g
          key={tool.label}
          transform={`translate(${pillX(tool.side)} ${tool.y - 20})`}
        >
          <rect
            width="150"
            height="40"
            rx="20"
            fill={c.darkMid}
            stroke="#fff"
            strokeOpacity="0.08"
          />
          <circle cx="20" cy="20" r="13" fill={c.accent} fillOpacity="0.35" />
          <g transform="translate(20 20)">{tool.icon}</g>
          <text
            x="41"
            y="24.5"
            fontSize="13"
            fontWeight="600"
            fill="#fff"
            fillOpacity="0.88"
          >
            {tool.label}
          </text>
        </g>
      ))}

      {/* Hub with a slow breathing glow */}
      <circle cx={HUB.x} cy={HUB.y} r="64" fill="url(#m365-glow)">
        <animate
          className="m365-motion"
          attributeName="r"
          values="58;72;58"
          dur="4s"
          repeatCount="indefinite"
        />
      </circle>
      <circle cx={HUB.x} cy={HUB.y} r="44" fill={c.accent} />
      <circle
        cx={HUB.x}
        cy={HUB.y}
        r="44"
        fill="none"
        stroke="#fff"
        strokeOpacity="0.18"
        strokeWidth="6"
      />
      <text
        x={HUB.x}
        y={HUB.y + 6}
        textAnchor="middle"
        fontSize="18"
        fontWeight="700"
        fill="#fff"
      >
        M365
      </text>

      {/* Data dots travelling along each link toward the hub */}
      <g className="m365-motion">
        {apps.map((app, i) => (
          <circle key={app.label} r="3" fill={c.accent}>
            <animateMotion
              dur="3.6s"
              begin={`${i * 0.7}s`}
              repeatCount="indefinite"
            >
              <mpath href={`#m365-app-link-${i}`} />
            </animateMotion>
          </circle>
        ))}
        {tools.map((tool, i) => (
          <circle key={tool.label} r="3" fill={c.accentOnDark}>
            <animateMotion
              dur="3s"
              begin={`${i * 0.45}s`}
              repeatCount="indefinite"
            >
              <mpath href={`#m365-tool-link-${i}`} />
            </animateMotion>
          </circle>
        ))}
      </g>

      <text
        x="300"
        y="442"
        textAnchor="middle"
        fontSize="11"
        fontWeight="700"
        letterSpacing="2"
        fill={c.accentOnDark}
      >
        ALREADY IN YOUR SUBSCRIPTION
      </text>
    </g>
  </svg>
);
