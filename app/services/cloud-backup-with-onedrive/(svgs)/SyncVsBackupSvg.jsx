// app/services/cloud-backup-with-onedrive/(svgs)/SyncVsBackupSvg.jsx
// Two panels. Top: sync, where one deleted file is deleted on the laptop, cloud and phone.
// Bottom: backup, a week of restore points with an incident on Thursday and a roll back to
// the clean Wednesday copy. Drawn for a white section using globals.scss hex values.
// Decorative only: the wrapper in OneDriveSyncVsBackup is aria-hidden.

// Device nodes in the sync panel, left to right
const devices = [
  { x: 90, label: "Laptop" },
  { x: 260, label: "Cloud" },
  { x: 430, label: "Phone" },
];

// Restore points in the backup panel. `state` drives the marker drawn for each day.
const days = [
  { x: 60, label: "Mon", state: "point" },
  { x: 160, label: "Tue", state: "point" },
  { x: 260, label: "Wed", state: "clean" },
  { x: 360, label: "Thu", state: "incident" },
  { x: 460, label: "Now", state: "now" },
];

export const SyncVsBackupSvg = () => (
  <svg
    viewBox="0 0 520 400"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    focusable="false"
    fontFamily="inherit"
  >
    <defs>
      <marker
        id="svbArrow"
        viewBox="0 0 10 10"
        refX="8"
        refY="5"
        markerWidth="7"
        markerHeight="7"
        orient="auto-start-reverse"
      >
        <path d="M0 0L10 5L0 10z" fill="#9a9da1" />
      </marker>
      <marker
        id="svbArrowAccent"
        viewBox="0 0 10 10"
        refX="8"
        refY="5"
        markerWidth="7"
        markerHeight="7"
        orient="auto-start-reverse"
      >
        <path d="M0 0L10 5L0 10z" fill="#046999" />
      </marker>
    </defs>

    {/* ════ Sync panel ════ */}
    <rect x="0" y="0" width="520" height="180" rx="24" fill="#f7f8f9" />
    <text
      x="28"
      y="38"
      fill="#046999"
      fontSize="11"
      fontWeight="700"
      letterSpacing="2"
    >
      SYNC
    </text>
    <text x="78" y="38" fill="#4a5568" fontSize="12">
      One copy, mirrored everywhere
    </text>

    {/* Arrows between devices */}
    <path
      d="M147 105H203"
      stroke="#9a9da1"
      strokeWidth="1.5"
      markerEnd="url(#svbArrow)"
    />
    <path
      d="M317 105H373"
      stroke="#9a9da1"
      strokeWidth="1.5"
      markerEnd="url(#svbArrow)"
    />

    {devices.map(({ x, label }) => (
      <g key={label}>
        <rect
          x={x - 55}
          y="69"
          width="110"
          height="72"
          rx="14"
          fill="#ffffff"
          stroke="#e3e8ec"
        />
        {/* Document with a folded corner */}
        <path
          d={`M${x - 13} 80h18l8 8v24h-26z`}
          fill="#f7f8f9"
          stroke="#d4d6d9"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        {/* Red cross: the deletion reached this device too */}
        <path
          d={`M${x - 7} 90l14 14M${x + 7} 90l-14 14`}
          stroke="#c0392b"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <text
          x={x}
          y="132"
          fill="#4a5568"
          fontSize="11"
          fontWeight="600"
          textAnchor="middle"
        >
          {label}
        </text>
      </g>
    ))}

    <text x="28" y="166" fill="#4a5568" fontSize="12">
      Delete or encrypt it once and the damage syncs to every device.
    </text>

    {/* ════ Backup panel ════ */}
    <rect x="0" y="210" width="520" height="190" rx="24" fill="#f7f8f9" />
    <text
      x="28"
      y="248"
      fill="#046999"
      fontSize="11"
      fontWeight="700"
      letterSpacing="2"
    >
      BACKUP
    </text>
    <text x="96" y="248" fill="#4a5568" fontSize="12">
      Separate copies you can roll back to
    </text>

    {/* Timeline */}
    <path d="M40 310H480" stroke="#d4d6d9" strokeWidth="2" />

    {/* Roll back from the clean Wednesday point to now */}
    <path
      d="M262 296C300 256 420 256 455 294"
      stroke="#046999"
      strokeWidth="2"
      fill="none"
      markerEnd="url(#svbArrowAccent)"
    />

    {days.map(({ x, label, state }) => (
      <g key={label}>
        {state === "point" && (
          <circle
            cx={x}
            cy="310"
            r="9"
            fill="#ffffff"
            stroke="#046999"
            strokeWidth="2"
          />
        )}
        {state === "clean" && (
          <>
            <circle cx={x} cy="310" r="12" fill="#046999" />
            <path
              d={`M${x - 5} 310l3.5 3.5 6.5-7`}
              stroke="#ffffff"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </>
        )}
        {state === "incident" && (
          <>
            <circle
              cx={x}
              cy="310"
              r="9"
              fill="#ffffff"
              stroke="#c0392b"
              strokeWidth="2"
            />
            <path
              d={`M${x - 4} 306l8 8M${x + 4} 306l-8 8`}
              stroke="#c0392b"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </>
        )}
        {state === "now" && (
          <circle
            cx={x}
            cy="310"
            r="9"
            fill="#ffffff"
            stroke="#046999"
            strokeWidth="2"
            strokeDasharray="3 3"
          />
        )}
        <text
          x={x}
          y="342"
          fill={state === "clean" ? "#046999" : "#4a5568"}
          fontSize="11"
          fontWeight={state === "clean" ? "700" : "600"}
          textAnchor="middle"
        >
          {label}
        </text>
      </g>
    ))}

    <text x="28" y="378" fill="#4a5568" fontSize="12">
      Roll back to the last clean copy, not just the latest version.
    </text>
  </svg>
);
