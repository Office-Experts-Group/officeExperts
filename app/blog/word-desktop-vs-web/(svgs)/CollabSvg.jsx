// /app/blog/word-desktop-vs-web/(svgs)/CollabSvg.jsx
// How desktop co-authoring works: one file in SharePoint or OneDrive, several clients.
// Hex values: $accent #046999, $accent-light #e8f4fa, $text-primary #0d1b2a, $text-secondary #4a5568.

const clients = [
  {
    x: 16,
    solid: true,
    a: "Desktop Word",
    b: "Full ribbon and",
    c: "track changes",
  },
  {
    x: 172,
    solid: true,
    a: "Desktop Word",
    b: "Compare, merge",
    c: "and macros",
  },
  {
    x: 328,
    solid: false,
    a: "Word for web",
    b: "Quick edits and",
    c: "light review",
  },
  { x: 484, solid: false, a: "Mobile app", b: "Comments and", c: "approvals" },
];

export default function CollabSvg() {
  return (
    <svg
      viewBox="0 0 640 400"
      role="img"
      aria-labelledby="wdw-collab-title wdw-collab-desc"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "100%", height: "auto", display: "block" }}
    >
      <title id="wdw-collab-title">
        Co-authoring from SharePoint or OneDrive
      </title>
      <desc id="wdw-collab-desc">
        One document stored in SharePoint or OneDrive is opened by two desktop
        Word users, one person using Word for the web and one using the mobile
        app. All four sync through the shared file.
      </desc>

      <defs>
        <marker
          id="wdw-collab-arrow"
          viewBox="0 0 10 10"
          refX="8"
          refY="5"
          markerWidth="7"
          markerHeight="7"
          orient="auto-start-reverse"
        >
          <path d="M1 1l8 4-8 4z" fill="#046999" />
        </marker>
      </defs>

      {/* shared file */}
      <rect x="190" y="24" width="260" height="96" rx="16" fill="#046999" />
      <text
        x="320"
        y="62"
        textAnchor="middle"
        fontSize="19"
        fontWeight="700"
        fill="#ffffff"
      >
        SharePoint or OneDrive
      </text>
      <text
        x="320"
        y="90"
        textAnchor="middle"
        fontSize="15"
        fill="#ffffff"
        fillOpacity="0.85"
      >
        The file must live here
      </text>

      {/* connectors */}
      {clients.map((c, i) => {
        const cx = c.x + 70;
        const mx = 320 + (cx - 320) * 0.25;
        return (
          <path
            key={i}
            d={`M${cx} 230 C${cx} 180 ${mx} 170 ${mx} 122`}
            fill="none"
            stroke="#046999"
            strokeWidth="2.5"
            strokeDasharray={c.solid ? "0" : "6 6"}
            markerStart="url(#wdw-collab-arrow)"
            markerEnd="url(#wdw-collab-arrow)"
          />
        );
      })}

      <rect
        x="236"
        y="158"
        width="168"
        height="32"
        rx="16"
        fill="#ffffff"
        stroke="#9fc3d4"
      />
      <text
        x="320"
        y="179"
        textAnchor="middle"
        fontSize="15"
        fill="#0d1b2a"
        fontWeight="600"
      >
        Real-time sync
      </text>

      {/* clients */}
      {clients.map((c) => (
        <g key={c.x}>
          <rect
            x={c.x}
            y="232"
            width="140"
            height="120"
            rx="14"
            fill={c.solid ? "#046999" : "#e8f4fa"}
            stroke={c.solid ? "#046999" : "#9fc3d4"}
          />
          <text
            x={c.x + 70}
            y="266"
            textAnchor="middle"
            fontSize="16"
            fontWeight="700"
            fill={c.solid ? "#ffffff" : "#0d1b2a"}
          >
            {c.a}
          </text>
          <text
            x={c.x + 70}
            y="294"
            textAnchor="middle"
            fontSize="15"
            fill={c.solid ? "#ffffff" : "#4a5568"}
          >
            {c.b}
          </text>
          <text
            x={c.x + 70}
            y="314"
            textAnchor="middle"
            fontSize="15"
            fill={c.solid ? "#ffffff" : "#4a5568"}
          >
            {c.c}
          </text>
        </g>
      ))}

      <text x="156" y="384" textAnchor="middle" fontSize="14" fill="#4a5568">
        Recommended for complex documents
      </text>
      <text x="556" y="384" textAnchor="middle" fontSize="14" fill="#4a5568">
        Convenient backup
      </text>
    </svg>
  );
}
