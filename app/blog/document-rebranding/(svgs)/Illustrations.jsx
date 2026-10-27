// /app/blog/document-rebranding/(svgs)/Illustrations.jsx
// Hard-coded theme hex (token names): $accent #046999, $accent-light #e8f4fa,
// slate #94a3b8 / #64748b / #f1f5f9 for the "Avoid" panels.
// Five small "Avoid" vs "Do this" sketches for the common mistakes section.

function Panel({ x, kind, children }) {
  const avoid = kind === "avoid";
  return (
    <g>
      <rect
        x={x}
        y="6"
        width="164"
        height="148"
        rx="12"
        fill={avoid ? "#f1f5f9" : "#e8f4fa"}
        stroke={avoid ? "#94a3b8" : "#046999"}
        strokeDasharray={avoid ? "6 5" : undefined}
      />
      <text
        x={x + 14}
        y="32"
        fontSize="14"
        fontWeight="700"
        letterSpacing="0.6"
        fill={avoid ? "#64748b" : "#046999"}
      >
        {avoid ? "AVOID" : "DO THIS"}
      </text>
      {children}
    </g>
  );
}

function Svg({ id, title, desc, children }) {
  return (
    <svg
      viewBox="0 0 360 160"
      role="img"
      aria-labelledby={`${id}-title ${id}-desc`}
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "100%", height: "auto" }}
    >
      <title id={`${id}-title`}>{title}</title>
      <desc id={`${id}-desc`}>{desc}</desc>
      {children}
    </svg>
  );
}

export function BrokenLinksSketch() {
  return (
    <Svg
      id="drb-broken"
      title="Broken links versus tested links"
      desc="Left: an image and a page joined by a broken dashed line. Right: the same two joined by a solid, tested link."
    >
      <Panel x={8} kind="avoid">
        <rect
          x="26"
          y="70"
          width="44"
          height="44"
          rx="6"
          fill="#cbd5e1"
          stroke="#94a3b8"
          strokeDasharray="4 3"
        />
        <rect
          x="110"
          y="70"
          width="44"
          height="44"
          rx="6"
          fill="#cbd5e1"
          stroke="#94a3b8"
        />
        <path
          d="M72 92 H82"
          stroke="#94a3b8"
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray="2 5"
        />
        <path
          d="M96 92 H108"
          stroke="#94a3b8"
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray="2 5"
        />
        <path
          d="M84 84 L94 100 M94 84 L84 100"
          stroke="#64748b"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </Panel>
      <Panel x={188} kind="do">
        <rect
          x="206"
          y="70"
          width="44"
          height="44"
          rx="6"
          fill="#ffffff"
          stroke="#046999"
        />
        <rect
          x="290"
          y="70"
          width="44"
          height="44"
          rx="6"
          fill="#ffffff"
          stroke="#046999"
        />
        <path
          d="M252 92 H288"
          stroke="#046999"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <circle cx="270" cy="92" r="9" fill="#046999" />
        <path
          d="M265 92 l4 4 7-8"
          stroke="#ffffff"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Panel>
    </Svg>
  );
}

export function TeamsSketch() {
  return (
    <Svg
      id="drb-teams"
      title="Inconsistent teams versus one template repository"
      desc="Left: three differently styled and tilted documents. Right: one master document feeding three identical documents."
    >
      <Panel x={8} kind="avoid">
        <rect
          x="24"
          y="68"
          width="36"
          height="48"
          rx="4"
          fill="#cbd5e1"
          stroke="#94a3b8"
          transform="rotate(-8 42 92)"
        />
        <rect
          x="66"
          y="74"
          width="36"
          height="48"
          rx="4"
          fill="#e2e8f0"
          stroke="#94a3b8"
          transform="rotate(5 84 98)"
        />
        <rect
          x="108"
          y="66"
          width="36"
          height="48"
          rx="4"
          fill="#94a3b8"
          stroke="#64748b"
          transform="rotate(-3 126 90)"
        />
      </Panel>
      <Panel x={188} kind="do">
        <rect x="246" y="48" width="44" height="34" rx="4" fill="#046999" />
        <path
          d="M268 84 V96 M232 96 H304 M232 96 V102 M268 96 V102 M304 96 V102"
          stroke="#046999"
          strokeWidth="2"
          fill="none"
        />
        <rect
          x="214"
          y="104"
          width="36"
          height="40"
          rx="4"
          fill="#ffffff"
          stroke="#046999"
        />
        <rect
          x="250"
          y="104"
          width="36"
          height="40"
          rx="4"
          fill="#ffffff"
          stroke="#046999"
        />
        <rect
          x="286"
          y="104"
          width="36"
          height="40"
          rx="4"
          fill="#ffffff"
          stroke="#046999"
        />
      </Panel>
    </Svg>
  );
}

export function VersionsSketch() {
  return (
    <Svg
      id="drb-versions"
      title="Version chaos versus one current version"
      desc="Left: a messy pile of overlapping documents. Right: one clearly current document with older versions filed in an archive folder."
    >
      <Panel x={8} kind="avoid">
        <rect
          x="30"
          y="64"
          width="46"
          height="58"
          rx="4"
          fill="#e2e8f0"
          stroke="#94a3b8"
          transform="rotate(-10 53 93)"
        />
        <rect
          x="52"
          y="62"
          width="46"
          height="58"
          rx="4"
          fill="#cbd5e1"
          stroke="#94a3b8"
          transform="rotate(6 75 91)"
        />
        <rect
          x="74"
          y="70"
          width="46"
          height="58"
          rx="4"
          fill="#e2e8f0"
          stroke="#94a3b8"
          transform="rotate(-4 97 99)"
        />
        <rect
          x="94"
          y="64"
          width="46"
          height="58"
          rx="4"
          fill="#94a3b8"
          stroke="#64748b"
          transform="rotate(12 117 93)"
        />
      </Panel>
      <Panel x={188} kind="do">
        <rect
          x="212"
          y="62"
          width="48"
          height="64"
          rx="4"
          fill="#ffffff"
          stroke="#046999"
          strokeWidth="2"
        />
        <rect x="220" y="74" width="32" height="6" rx="2" fill="#046999" />
        <rect x="220" y="88" width="26" height="5" rx="2" fill="#cbd5e1" />
        <rect x="220" y="98" width="30" height="5" rx="2" fill="#cbd5e1" />
        <path
          d="M284 84 a4 4 0 0 1 4-4 h14 l5 6 h20 a4 4 0 0 1 4 4 v34 a4 4 0 0 1-4 4 h-39 a4 4 0 0 1-4-4 z"
          fill="#ffffff"
          stroke="#046999"
        />
      </Panel>
    </Svg>
  );
}

export function EmbeddedSketch() {
  return (
    <Svg
      id="drb-embedded"
      title="Missed embedded content versus a full sweep"
      desc="Left: a chart with off-brand mismatched bars. Right: the same chart with every bar in the brand colours."
    >
      <Panel x={8} kind="avoid">
        <path d="M30 124 H142" stroke="#94a3b8" strokeWidth="2" />
        <rect x="38" y="96" width="18" height="28" fill="#cbd5e1" />
        <rect x="66" y="78" width="18" height="46" fill="#94a3b8" />
        <rect
          x="94"
          y="88"
          width="18"
          height="36"
          fill="#e2e8f0"
          stroke="#94a3b8"
        />
        <rect x="122" y="70" width="18" height="54" fill="#64748b" />
      </Panel>
      <Panel x={188} kind="do">
        <path d="M210 124 H322" stroke="#046999" strokeWidth="2" />
        <rect x="218" y="96" width="18" height="28" fill="#5bbce6" />
        <rect x="246" y="78" width="18" height="46" fill="#046999" />
        <rect x="274" y="88" width="18" height="36" fill="#5bbce6" />
        <rect x="302" y="70" width="18" height="54" fill="#046999" />
      </Panel>
    </Svg>
  );
}

export function RushSketch() {
  return (
    <Svg
      id="drb-rush"
      title="A rushed rollout versus a phased one"
      desc="Left: a crowd of identical documents all pushed out at once. Right: three rising steps showing a phased rollout."
    >
      <Panel x={8} kind="avoid">
        <rect
          x="26"
          y="66"
          width="22"
          height="30"
          rx="3"
          fill="#cbd5e1"
          stroke="#94a3b8"
        />
        <rect
          x="52"
          y="66"
          width="22"
          height="30"
          rx="3"
          fill="#cbd5e1"
          stroke="#94a3b8"
        />
        <rect
          x="78"
          y="66"
          width="22"
          height="30"
          rx="3"
          fill="#cbd5e1"
          stroke="#94a3b8"
        />
        <rect
          x="104"
          y="66"
          width="22"
          height="30"
          rx="3"
          fill="#cbd5e1"
          stroke="#94a3b8"
        />
        <rect
          x="26"
          y="102"
          width="22"
          height="30"
          rx="3"
          fill="#cbd5e1"
          stroke="#94a3b8"
        />
        <rect
          x="52"
          y="102"
          width="22"
          height="30"
          rx="3"
          fill="#cbd5e1"
          stroke="#94a3b8"
        />
        <rect
          x="78"
          y="102"
          width="22"
          height="30"
          rx="3"
          fill="#cbd5e1"
          stroke="#94a3b8"
        />
        <rect
          x="104"
          y="102"
          width="22"
          height="30"
          rx="3"
          fill="#cbd5e1"
          stroke="#94a3b8"
        />
        <path
          d="M134 98 H152 M146 90 l8 8 -8 8"
          stroke="#64748b"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Panel>
      <Panel x={188} kind="do">
        <rect x="212" y="108" width="34" height="28" rx="4" fill="#5bbce6" />
        <rect x="252" y="90" width="34" height="46" rx="4" fill="#2f95c4" />
        <rect x="292" y="68" width="34" height="68" rx="4" fill="#046999" />
      </Panel>
    </Svg>
  );
}
