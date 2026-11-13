// /app/services/microsoft-power-platform/sharepoint-consulting-and-development/(svgs)/SpcdWhyUsArt.jsx
// Art for SpcdWhyUs. Decorative throughout.
//   SpcdStatementArt: three snapshots of one SharePoint site structure (day
//     one, year one, year two), stacked like a deck. It grows but stays tidy.
//     Drawn for the accent statement band.
//   SpcdDiffArt: one spot illustration per differentiator, for white cards.
//
// Hex values and matching globals.scss tokens:
//   #046999 $accent          #034e72 $accent-dark     #e8f4fa $accent-light
//   #6fc3e8 $accent-on-dark  #0d1b2a $text-primary    #4a5568 $text-secondary
//   #d4d6d9 $line-strong     #ffffff $white

const Tree = ({ x, y, sites, dark }) => {
  const hubFill = dark ? "#046999" : "#034e72";
  const step = 180 / sites;
  const siteX = (i) => x + 20 + step * (i + 0.5);
  return (
    <g>
      <rect
        x={x + 82}
        y={y + 42}
        width="56"
        height="22"
        rx="5"
        fill={hubFill}
      />
      <path d={`M${x + 110} ${y + 64}v10`} stroke={hubFill} strokeWidth="1.6" />
      <path
        d={`M${siteX(0)} ${y + 74}H${siteX(sites - 1)}`}
        stroke={hubFill}
        strokeWidth="1.6"
      />
      {Array.from({ length: sites }, (_, i) => {
        const cx = siteX(i);
        return (
          <g key={i}>
            <path d={`M${cx} ${y + 74}v8`} stroke={hubFill} strokeWidth="1.6" />
            <rect
              x={cx - 16}
              y={y + 82}
              width="32"
              height="26"
              rx="4"
              fill="#ffffff"
              stroke={hubFill}
              strokeWidth="1.3"
            />
            <rect
              x={cx - 10}
              y={y + 89}
              width="20"
              height="4"
              rx="2"
              fill={hubFill}
              fillOpacity="0.6"
            />
            <rect
              x={cx - 10}
              y={y + 97}
              width="14"
              height="4"
              rx="2"
              fill="#d4d6d9"
            />
          </g>
        );
      })}
    </g>
  );
};

export const SpcdStatementArt = () => (
  <svg
    viewBox="0 0 420 300"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    focusable="false"
  >
    {/* Day one (back) */}
    <rect
      x="20"
      y="20"
      width="220"
      height="130"
      rx="16"
      fill="#e8f4fa"
      fillOpacity="0.55"
    />
    <text x="38" y="46" fontSize="14" fontWeight="700" fill="#034e72">
      Day one
    </text>
    <Tree x={20} y={20} sites={2} />

    {/* Year one (middle) */}
    <rect x="100" y="85" width="220" height="130" rx="16" fill="#e8f4fa" />
    <text x="118" y="111" fontSize="14" fontWeight="700" fill="#034e72">
      Year one
    </text>
    <Tree x={100} y={85} sites={3} />

    {/* Year two (front) */}
    <rect x="180" y="150" width="220" height="130" rx="16" fill="#ffffff" />
    <text x="198" y="176" fontSize="14" fontWeight="700" fill="#0d1b2a">
      Year two
    </text>
    <Tree x={180} y={150} sites={4} dark />
    <g transform="translate(366 158)">
      <path
        d="M12 0l12 4.5v8c0 7-5 11.5-12 13.5C5 24 0 19.5 0 12.5v-8z"
        fill="#046999"
      />
      <path
        d="M7 12.5l3.5 3.5 6.5-7"
        stroke="#ffffff"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  </svg>
);

const Svg = ({ children }) => (
  <svg
    width="72"
    height="72"
    viewBox="0 0 72 72"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    focusable="false"
  >
    <rect width="72" height="72" rx="18" fill="#e8f4fa" />
    {children}
  </svg>
);

// SharePoint at the centre, linked to the tools around it
const Ecosystem = () => (
  <Svg>
    {[
      [16, 18],
      [56, 18],
      [16, 54],
      [56, 54],
    ].map(([x, y], i) => (
      <g key={`${x}-${y}`}>
        <path
          d={`M36 36L${x} ${y}`}
          stroke="#046999"
          strokeWidth="1.5"
          strokeDasharray="3 3"
        />
        {i === 0 && (
          <rect
            x={x - 7}
            y={y - 7}
            width="14"
            height="14"
            rx="3"
            fill="#ffffff"
            stroke="#046999"
            strokeWidth="1.4"
          />
        )}
        {i === 1 && (
          <circle
            cx={x}
            cy={y}
            r="7.5"
            fill="#ffffff"
            stroke="#046999"
            strokeWidth="1.4"
          />
        )}
        {i === 2 && (
          <path
            d={`M${x - 7} ${y + 6}h14M${x - 4} ${y + 6}v-6M${x + 1} ${y + 6}v-11M${x + 6} ${y + 6}v-8`}
            stroke="#046999"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
        )}
        {i === 3 && (
          <path
            d={`M${x - 7} ${y}h14M${x + 2} ${y - 5}l5 5-5 5`}
            stroke="#046999"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        )}
      </g>
    ))}
    <circle cx="36" cy="36" r="12" fill="#046999" />
    <path
      d="M30 33h12M30 37.5h8"
      stroke="#ffffff"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </Svg>
);

// A location pin above a spread of connected team members
const Nationwide = () => (
  <Svg>
    <path
      d="M12 52c8-6 14 4 24-2s16 2 24-4"
      stroke="#046999"
      strokeOpacity="0.35"
      strokeWidth="1.5"
    />
    {[
      [16, 50],
      [30, 46],
      [44, 52],
      [58, 44],
    ].map(([x, y]) => (
      <circle
        key={`${x}-${y}`}
        cx={x}
        cy={y}
        r="4"
        fill="#ffffff"
        stroke="#046999"
        strokeWidth="1.5"
      />
    ))}
    <path
      d="M36 40s-11-9.5-11-17a11 11 0 0 1 22 0c0 7.5-11 17-11 17z"
      fill="#046999"
    />
    <circle cx="36" cy="23" r="4" fill="#ffffff" />
  </Svg>
);

// A plan with governance built in from the first line
const GovernanceFirst = () => (
  <Svg>
    <rect
      x="14"
      y="12"
      width="32"
      height="46"
      rx="4"
      fill="#ffffff"
      stroke="#046999"
      strokeWidth="1.5"
    />
    <path
      d="M20 22h20M20 29h14M20 36h18M20 43h10"
      stroke="#d4d6d9"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path d="M20 22h8" stroke="#046999" strokeWidth="2" strokeLinecap="round" />
    <path
      d="M50 30l10 4v8c0 7-4.5 11-10 13-5.5-2-10-6-10-13v-8z"
      fill="#046999"
    />
    <path
      d="M45.5 42.5l3 3 6-6.5"
      stroke="#ffffff"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

// Two speech bubbles: a straight answer
const StraightTalk = () => (
  <Svg>
    <path
      d="M12 16h30a4 4 0 0 1 4 4v14a4 4 0 0 1-4 4H24l-7 6v-6h-5a4 4 0 0 1-4-4V20a4 4 0 0 1 4-4z"
      fill="#ffffff"
      stroke="#046999"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
    <path
      d="M15 25h20M15 30h13"
      stroke="#d4d6d9"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M60 34H34a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h16l7 5v-5h3a4 4 0 0 0 4-4V38a4 4 0 0 0-4-4z"
      fill="#046999"
    />
    <path
      d="M40 44.5l4 4 8-8.5"
      stroke="#ffffff"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

const DIFF_ART = {
  ecosystem: Ecosystem,
  australian: Nationwide,
  governance: GovernanceFirst,
  honest: StraightTalk,
};

export const SpcdDiffArt = ({ type }) => {
  const Art = DIFF_ART[type];
  return Art ? <Art /> : null;
};
