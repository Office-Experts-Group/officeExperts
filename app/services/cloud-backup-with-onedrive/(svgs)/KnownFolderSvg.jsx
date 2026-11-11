// app/services/cloud-backup-with-onedrive/(svgs)/KnownFolderSvg.jsx
// Known Folder Move: Desktop, Documents and Pictures flow into the cloud copy, then out to a
// replacement laptop that has the files back straight away. Drawn for the light-grey
// OneDriveSetup section, so the cards are white. Hex values match globals.scss tokens.
// Decorative only: the wrapper in OneDriveSetup is aria-hidden.

// Folder cards on the left. `y` is the top of each card; the line leaves from its middle.
const folders = [
  { y: 40, label: "Desktop" },
  { y: 158, label: "Documents" },
  { y: 276, label: "Pictures" },
];

export const KnownFolderSvg = () => (
  <svg
    viewBox="0 0 480 380"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    focusable="false"
    fontFamily="inherit"
  >
    {/* Dashed lines move towards the cloud; animation stops for reduced motion */}
    <style>{`
      .kfFlow { stroke-dasharray: 3 5; animation: kfFlow 1.4s linear infinite; }
      @keyframes kfFlow { to { stroke-dashoffset: -16; } }
      @media (prefers-reduced-motion: reduce) { .kfFlow { animation: none; } }
    `}</style>

    <text
      x="20"
      y="22"
      fill="#9a9da1"
      fontSize="11"
      fontWeight="700"
      letterSpacing="2"
    >
      KNOWN FOLDERS
    </text>

    {/* ── Folder cards and their lines to the cloud ── */}
    {folders.map(({ y, label }) => (
      <g key={label}>
        <path
          className="kfFlow"
          d={`M180 ${y + 32}C220 ${y + 32} 220 190 242 190`}
          stroke="#046999"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <rect
          x="20"
          y={y}
          width="160"
          height="64"
          rx="14"
          fill="#ffffff"
          stroke="#e3e8ec"
        />
        <path
          d={`M38 ${y + 22}h14l4 5h22v20H38z`}
          fill="#046999"
          strokeLinejoin="round"
        />
        <text
          x="92"
          y={y + 38}
          fill="#0d1b2a"
          fontSize="14"
          fontWeight="700"
        >
          {label}
        </text>
      </g>
    ))}

    {/* ── Cloud ── */}
    <circle cx="290" cy="190" r="48" fill="#ffffff" stroke="#e3e8ec" />
    <path
      d="M270 205h40a15 15 0 0 0 1-30 20 20 0 0 0-37-4 18 18 0 0 0-4 34z"
      stroke="#046999"
      strokeWidth="2.5"
      strokeLinejoin="round"
    />
    <text
      x="290"
      y="258"
      fill="#0d1b2a"
      fontSize="13"
      fontWeight="700"
      textAnchor="middle"
    >
      OneDrive
    </text>

    {/* Cloud to new laptop */}
    <path
      className="kfFlow"
      d="M338 190H362"
      stroke="#046999"
      strokeWidth="2"
      strokeLinecap="round"
    />

    {/* ── Replacement laptop ── */}
    <rect
      x="372"
      y="146"
      width="96"
      height="64"
      rx="8"
      fill="#ffffff"
      stroke="#e3e8ec"
    />
    {[160, 176, 192].map((y) => (
      <g key={y}>
        <path d={`M384 ${y}h6l2 2.5h8v8.5h-16z`} fill="#046999" />
        <rect x="406" y={y + 3} width="48" height="5" rx="2.5" fill="#e3e8ec" />
      </g>
    ))}
    <path d="M362 214h116l-8 8H370z" fill="#e3e8ec" />

    {/* Success badge */}
    <circle cx="464" cy="148" r="11" fill="#0eaa0e" />
    <path
      d="M459 148l3.5 3.5 6.5-7"
      stroke="#ffffff"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    <text
      x="420"
      y="246"
      fill="#0d1b2a"
      fontSize="13"
      fontWeight="700"
      textAnchor="middle"
    >
      New laptop
    </text>
    <text
      x="420"
      y="264"
      fill="#4a5568"
      fontSize="11"
      textAnchor="middle"
    >
      Files back in minutes
    </text>
  </svg>
);
