// /services/microsoft-word/companies-and-organisations/(svgs)/TemplateTreeSvg.js
// Decorative diagram: one master template branching into in-house sub templates,
// all inside a dashed "controlled environment". Hex values come from globals.scss.

// Sub templates the in-house team can create from the master
const CHILDREN = [
  { cx: 90, label: "Reports" },
  { cx: 260, label: "Letters" },
  { cx: 430, label: "Proposals" },
];

// A small page: coloured header band, then lines of "text". Reused for the master and each sub template
const MiniPage = ({ x, y, w, h }) => (
  <g>
    <rect
      x={x}
      y={y}
      width={w}
      height={h}
      rx="8"
      fill="#fff"
      stroke="#e2e6ea"
      filter="url(#tt-shadow)"
    />
    <path
      d={`M${x} ${y + 18}V${y + 8}a8 8 0 0 1 8-8h${w - 16}a8 8 0 0 1 8 8v10z`}
      fill="#046999"
    />
    <rect x={x + 14} y={y + 32} width={w * 0.5} height="7" rx="3" fill="#0d1b2a" />
    <rect x={x + 14} y={y + 48} width={w - 28} height="5" rx="2.5" fill="#e2e6ea" />
    <rect x={x + 14} y={y + 60} width={w - 40} height="5" rx="2.5" fill="#e2e6ea" />
    <rect x={x + 14} y={y + 72} width={w - 56} height="5" rx="2.5" fill="#e2e6ea" />
  </g>
);

export const TemplateTreeSvg = () => (
  <svg
    viewBox="0 0 520 400"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <defs>
      <filter id="tt-shadow" x="-10%" y="-10%" width="120%" height="125%">
        <feDropShadow
          dx="0"
          dy="6"
          stdDeviation="8"
          floodColor="#0d1b2a"
          floodOpacity="0.1"
        />
      </filter>
    </defs>

    {/* ── Controlled environment fence ── */}
    <rect
      x="6"
      y="6"
      width="508"
      height="388"
      rx="18"
      fill="none"
      stroke="#046999"
      strokeDasharray="5 6"
      opacity="0.3"
    />
    <circle cx="40" cy="40" r="16" fill="#046999" />
    <path
      d="M36 39v-3a4 4 0 0 1 8 0v3"
      fill="none"
      stroke="#fff"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <rect x="33" y="39" width="14" height="10" rx="2" fill="#fff" />

    {/* ── Master template ── */}
    <MiniPage x={190} y={24} w={140} h={112} />
    <rect x="185" y="148" width="150" height="22" rx="11" fill="#046999" />
    <text
      x="260"
      y="163"
      textAnchor="middle"
      fill="#fff"
      fontSize="10"
      fontWeight="700"
      letterSpacing="1.5"
    >
      MASTER TEMPLATE
    </text>

    {/* ── Connectors ── */}
    <path
      d="M260 170v26M90 196h340M90 196v28M260 196v28M430 196v28"
      fill="none"
      stroke="#046999"
      strokeWidth="2"
      strokeLinecap="round"
      opacity="0.45"
    />
    {CHILDREN.map((child) => (
      <circle key={child.cx} cx={child.cx} cy="196" r="4" fill="#046999" />
    ))}

    {/* ── Sub templates ── */}
    {CHILDREN.map((child) => (
      <g key={child.label}>
        <MiniPage x={child.cx - 60} y={224} w={120} h={100} />
        <rect
          x={child.cx - 40}
          y="340"
          width="80"
          height="22"
          rx="11"
          fill="#fff"
          stroke="#e2e6ea"
        />
        <text
          x={child.cx}
          y="355"
          textAnchor="middle"
          fill="#454545"
          fontSize="11"
          fontWeight="700"
        >
          {child.label}
        </text>
      </g>
    ))}

    <text
      x="260"
      y="384"
      textAnchor="middle"
      fill="#a0a2a6"
      fontSize="9"
      fontWeight="700"
      letterSpacing="2"
    >
      CONTROLLED TEMPLATE ENVIRONMENT
    </text>
  </svg>
);
