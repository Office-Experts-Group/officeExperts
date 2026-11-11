// app/services/cloud-based-solutions-with-azure/(svgs)/SharePointLibrarySvg.jsx
// Illustration for AzureSharePoint: a document library with version and status columns, a dark
// version history popover and an approval flow underneath.
// Decorative only. Colours are hardcoded hex values that match globals.scss tokens ($success included).

// Library rows: y position, name bar width, version and status pill style
const rows = [
  { y: 150, w: 92, version: "v3.0", status: "Approved", fill: "#0eaa0e", text: "#0eaa0e" },
  { y: 186, w: 110, version: "v2.1", status: "In review", fill: "#046999", text: "#046999" },
  { y: 222, w: 78, version: "v1.4", status: "Approved", fill: "#0eaa0e", text: "#0eaa0e" },
  { y: 258, w: 100, version: "v0.3", status: "Draft", fill: "#777a7e", text: "#777a7e" },
];

// Version history entries in the popover
const versions = [
  { y: 214, text: "v2.1 · Current", current: true },
  { y: 242, text: "v2.0 · Approved" },
  { y: 270, text: "v1.2 · Edited" },
  { y: 298, text: "v1.0 · Created" },
];

export const SharePointLibrarySvg = () => (
  <svg
    viewBox="0 0 480 400"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    focusable="false"
    fontFamily="inherit"
  >
    {/* ── Library card ── */}
    <rect x="10" y="40" width="330" height="300" rx="16" fill="#ffffff" stroke="#e3e8ec" />
    <text x="34" y="76" fontSize="15" fontWeight="700" fill="#0d1b2a">
      Client contracts
    </text>
    <rect x="34" y="90" width="62" height="22" rx="11" fill="#046999" />
    <text x="65" y="105" textAnchor="middle" fontSize="11" fontWeight="700" fill="#ffffff">
      + New
    </text>
    <rect x="104" y="90" width="66" height="22" rx="11" fill="#ffffff" stroke="#e3e8ec" />
    <text x="137" y="105" textAnchor="middle" fontSize="11" fontWeight="600" fill="#4a5568">
      Upload
    </text>

    {/* Column headings */}
    <g fontSize="9.5" fontWeight="700" fill="#9a9da1" letterSpacing="1">
      <text x="56" y="134">NAME</text>
      <text x="196" y="134">VERSION</text>
      <text x="262" y="134">STATUS</text>
    </g>
    <path d="M24 142 H326" stroke="#e3e8ec" />

    {/* Highlighted row, the one whose history is open */}
    <rect x="18" y="182" width="314" height="34" rx="6" fill="#f7f8f9" />

    {rows.map((row) => (
      <g key={row.y}>
        {/* Document icon with a folded corner */}
        <path
          d={`M34 ${row.y + 4} h10 l5 5 v15 h-15 z`}
          fill="#ffffff"
          stroke="#046999"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <rect x="58" y={row.y + 8} width={row.w} height="6" rx="3" fill="#d4d6d9" />
        <rect x="58" y={row.y + 19} width="56" height="5" rx="2.5" fill="#e3e8ec" />
        <text x="196" y={row.y + 18} fontSize="11" fontWeight="600" fill="#4a5568">
          {row.version}
        </text>
        <rect x="258" y={row.y + 6} width="64" height="18" rx="9" fill={row.fill} fillOpacity="0.12" />
        <text x="290" y={row.y + 18.5} textAnchor="middle" fontSize="10" fontWeight="700" fill={row.text}>
          {row.status}
        </text>
        <path d={`M24 ${row.y + 36} H326`} stroke="#f2f3f5" />
      </g>
    ))}

    {/* ── Version history popover ── */}
    <rect x="326" y="168" width="144" height="152" rx="14" fill="#111820" />
    <text x="342" y="192" fontSize="12" fontWeight="700" fill="#ffffff">
      Version history
    </text>
    <path d="M346 214 V298" stroke="#ffffff" strokeOpacity="0.18" strokeWidth="2" />
    {versions.map((v) => (
      <g key={v.y}>
        <circle
          cx="346"
          cy={v.y}
          r="4.5"
          fill={v.current ? "#6fc3e8" : "#111820"}
          stroke={v.current ? "#6fc3e8" : "#ffffff"}
          strokeOpacity={v.current ? 1 : 0.35}
          strokeWidth="2"
        />
        <text
          x="358"
          y={v.y + 4}
          fontSize="10.5"
          fontWeight={v.current ? "700" : "500"}
          fill={v.current ? "#6fc3e8" : "#ffffff"}
          fillOpacity={v.current ? 1 : 0.75}
        >
          {v.text}
        </text>
      </g>
    ))}

    {/* ── Approval flow ── */}
    <rect x="10" y="356" width="96" height="30" rx="15" fill="#ffffff" stroke="#e3e8ec" />
    <text x="58" y="375" textAnchor="middle" fontSize="11" fontWeight="700" fill="#4a5568">
      Submitted
    </text>
    <rect x="132" y="356" width="96" height="30" rx="15" fill="#ffffff" stroke="#e3e8ec" />
    <text x="180" y="375" textAnchor="middle" fontSize="11" fontWeight="700" fill="#4a5568">
      Reviewed
    </text>
    <rect x="254" y="356" width="96" height="30" rx="15" fill="#046999" />
    <text x="302" y="375" textAnchor="middle" fontSize="11" fontWeight="700" fill="#ffffff">
      Approved
    </text>
    <g stroke="#9a9da1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M110 371 H126 M121 366 l5 5 l-5 5" />
      <path d="M232 371 H248 M243 366 l5 5 l-5 5" />
    </g>
  </svg>
);
