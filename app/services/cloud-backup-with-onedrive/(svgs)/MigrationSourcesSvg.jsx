// app/services/cloud-backup-with-onedrive/(svgs)/MigrationSourcesSvg.jsx
// Five file sources converge on an audit-and-map step, which splits them into OneDrive for
// personal files and SharePoint for team files. Generic labels only, no product logos.
// Drawn for the light-grey OneDriveMigration section, so cards are white. Hex values match
// globals.scss tokens. Decorative only: the wrapper in OneDriveMigration is aria-hidden.

// Source pills on the left. `y` is the top of each pill.
const sources = [
  { y: 30, label: "File server" },
  { y: 90, label: "Office NAS" },
  { y: 150, label: "Google Drive" },
  { y: 210, label: "Dropbox" },
  { y: 270, label: "Box" },
];

// Destination cards on the right. `y` is the top of each card.
const destinations = [
  {
    y: 40,
    title: "OneDrive",
    sub: "Personal working files",
    chip: "1 owner",
    chipWidth: 64,
  },
  {
    y: 190,
    title: "SharePoint",
    sub: "Team files and Teams",
    chip: "Whole team",
    chipWidth: 84,
  },
];

export const MigrationSourcesSvg = () => (
  <svg
    viewBox="0 0 520 380"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    focusable="false"
    fontFamily="inherit"
  >
    {/* ── Sources and their lines into the hub ── */}
    {sources.map(({ y, label }) => (
      <g key={label}>
        <path
          d={`M150 ${y + 22}C195 ${y + 22} 195 170 228 170`}
          stroke="#046999"
          strokeOpacity="0.5"
          strokeWidth="1.6"
        />
        <rect
          x="10"
          y={y}
          width="140"
          height="44"
          rx="22"
          fill="#ffffff"
          stroke="#e3e8ec"
        />
        <circle cx="34" cy={y + 22} r="10" fill="#f7f8f9" stroke="#d4d6d9" />
        <circle cx="34" cy={y + 22} r="4" fill="#046999" />
        <text
          x="52"
          y={y + 27}
          fill="#0d1b2a"
          fontSize="13"
          fontWeight="600"
        >
          {label}
        </text>
      </g>
    ))}

    {/* ── Lines from the hub to each destination ── */}
    <path
      d="M288 170C315 170 315 95 340 95"
      stroke="#046999"
      strokeWidth="2"
    />
    <path
      d="M288 170C315 170 315 245 340 245"
      stroke="#046999"
      strokeWidth="2"
    />

    {/* ── Audit and map hub ── */}
    <circle cx="258" cy="170" r="30" fill="#046999" />
    <text
      x="258"
      y="167"
      fill="#ffffff"
      fontSize="11"
      fontWeight="700"
      textAnchor="middle"
    >
      Audit
    </text>
    <text
      x="258"
      y="181"
      fill="#ffffff"
      fontSize="11"
      fontWeight="700"
      textAnchor="middle"
    >
      &amp; map
    </text>

    {/* ── Destinations ── */}
    {destinations.map(({ y, title, sub, chip, chipWidth }) => (
      <g key={title}>
        <rect
          x="340"
          y={y}
          width="170"
          height="110"
          rx="18"
          fill="#ffffff"
          stroke="#e3e8ec"
        />
        <text
          x="360"
          y={y + 34}
          fill="#0d1b2a"
          fontSize="15"
          fontWeight="700"
        >
          {title}
        </text>
        <text x="360" y={y + 54} fill="#4a5568" fontSize="12">
          {sub}
        </text>
        <rect
          x="360"
          y={y + 70}
          width={chipWidth}
          height="22"
          rx="11"
          fill="#f7f8f9"
        />
        <text
          x={360 + chipWidth / 2}
          y={y + 85}
          fill="#046999"
          fontSize="11"
          fontWeight="700"
          textAnchor="middle"
        >
          {chip}
        </text>
      </g>
    ))}

    <text x="10" y="356" fill="#4a5568" fontSize="12">
      Every file lands where it still makes sense after someone leaves.
    </text>
  </svg>
);
