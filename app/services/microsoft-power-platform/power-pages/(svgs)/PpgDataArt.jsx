// /app/services/microsoft-power-platform/power-pages/(svgs)/PpgDataArt.jsx
// Spot illustrations for the data integration bento. Each is drawn for the
// tile it sits on: Direct (accent tile), Virtual (dark tile),
// Automate (white tile), Permissions (dark mid tile).
// Hex values and tokens: #046999 $accent, #e8f4fa $accent-light,
// #6fc3e8 $accent-on-dark, #034e72 $accent-dark, #111820 $dark-bg,
// #18232e $dark-surface, #1a2a3a $dark-mid, #0d1b2a $text-primary,
// #d4d6d9 $line-strong, #ffffff $white.

const common = {
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  "aria-hidden": "true",
  focusable: "false",
};

// On the solid accent tile: a Dataverse table, a filter, then the portal page.
export const PpgDirectArt = () => (
  <svg viewBox="0 0 320 200" {...common}>
    <rect
      x="10"
      y="26"
      width="132"
      height="150"
      rx="12"
      fill="#ffffff"
      fillOpacity="0.12"
      stroke="#ffffff"
      strokeOpacity="0.7"
      strokeWidth="2"
    />
    <path
      d="M10 38 a12 12 0 0 1 12 -12 H130 a12 12 0 0 1 12 12 V54 H10 Z"
      fill="#ffffff"
      fillOpacity="0.25"
    />
    <path
      d="M10 84 H142 M10 114 H142 M10 144 H142 M58 54 V176 M100 54 V176"
      stroke="#ffffff"
      strokeOpacity="0.35"
      strokeWidth="1.5"
    />
    <rect
      x="12"
      y="86"
      width="128"
      height="28"
      fill="#ffffff"
      fillOpacity="0.28"
    />
    <rect
      x="12"
      y="146"
      width="128"
      height="28"
      fill="#ffffff"
      fillOpacity="0.28"
    />
    <rect x="20" y="64" width="26" height="6" rx="3" fill="#ffffff" />
    <rect x="66" y="64" width="26" height="6" rx="3" fill="#ffffff" />
    <rect x="108" y="64" width="22" height="6" rx="3" fill="#ffffff" />
    <rect
      x="20"
      y="96"
      width="26"
      height="6"
      rx="3"
      fill="#ffffff"
      fillOpacity="0.9"
    />
    <rect
      x="66"
      y="96"
      width="22"
      height="6"
      rx="3"
      fill="#ffffff"
      fillOpacity="0.9"
    />
    <rect
      x="20"
      y="126"
      width="26"
      height="6"
      rx="3"
      fill="#ffffff"
      fillOpacity="0.5"
    />
    <rect
      x="66"
      y="126"
      width="30"
      height="6"
      rx="3"
      fill="#ffffff"
      fillOpacity="0.5"
    />
    <rect
      x="20"
      y="156"
      width="26"
      height="6"
      rx="3"
      fill="#ffffff"
      fillOpacity="0.9"
    />
    <rect
      x="66"
      y="156"
      width="18"
      height="6"
      rx="3"
      fill="#ffffff"
      fillOpacity="0.9"
    />

    <path
      d="M142 100 H154 M142 160 L154 120"
      stroke="#ffffff"
      strokeWidth="2"
      strokeDasharray="3 4"
    />
    <path d="M154 78 H212 L192 112 V148 L174 158 V112 Z" fill="#ffffff" />
    <path
      d="M196 112 H212"
      stroke="#ffffff"
      strokeWidth="2"
      strokeDasharray="3 4"
    />

    <rect x="214" y="36" width="96" height="128" rx="10" fill="#ffffff" />
    <path
      d="M214 46 a10 10 0 0 1 10 -10 H300 a10 10 0 0 1 10 10 V56 H214 Z"
      fill="#e8f4fa"
    />
    <circle cx="226" cy="46" r="3" fill="#046999" />
    <circle cx="236" cy="46" r="3" fill="#046999" fillOpacity="0.5" />
    <rect
      x="224"
      y="68"
      width="76"
      height="20"
      rx="5"
      fill="#e8f4fa"
      stroke="#046999"
      strokeWidth="1.5"
    />
    <rect x="230" y="75" width="30" height="6" rx="3" fill="#046999" />
    <rect
      x="224"
      y="96"
      width="76"
      height="20"
      rx="5"
      fill="#e8f4fa"
      stroke="#046999"
      strokeWidth="1.5"
    />
    <rect x="230" y="103" width="38" height="6" rx="3" fill="#046999" />
    <rect x="224" y="124" width="52" height="8" rx="4" fill="#d4d6d9" />
    <circle cx="238" cy="146" r="7" fill="#046999" />
    <rect x="250" y="143" width="40" height="6" rx="3" fill="#d4d6d9" />
  </svg>
);

// On the dark tile: an outside system, a ghost "virtual" table, the portal.
export const PpgVirtualArt = () => (
  <svg viewBox="0 0 420 140" {...common}>
    {/* External system (cloud with endpoints) */}
    <path
      d="M30 104 C8 104 4 74 26 68 C26 40 62 30 76 52 C94 40 122 54 116 80 C134 82 134 104 114 104 Z"
      fill="#ffffff"
      fillOpacity="0.08"
      stroke="#6fc3e8"
      strokeWidth="2"
      strokeLinejoin="round"
    />
    <rect x="42" y="64" width="56" height="7" rx="3.5" fill="#6fc3e8" />
    <rect
      x="42"
      y="78"
      width="40"
      height="7"
      rx="3.5"
      fill="#ffffff"
      fillOpacity="0.5"
    />
    <rect
      x="42"
      y="92"
      width="48"
      height="7"
      rx="3.5"
      fill="#ffffff"
      fillOpacity="0.3"
    />

    <path
      d="M128 76 H168"
      stroke="#6fc3e8"
      strokeWidth="2"
      strokeDasharray="4 5"
    />
    <path d="M168 76 l-7 -4 v8 z" fill="#6fc3e8" />

    {/* Virtual table: dashed outline, ghost rows */}
    <rect
      x="176"
      y="22"
      width="112"
      height="100"
      rx="10"
      fill="#ffffff"
      fillOpacity="0.05"
      stroke="#6fc3e8"
      strokeWidth="2"
      strokeDasharray="6 5"
    />
    <rect
      x="178"
      y="24"
      width="108"
      height="20"
      rx="8"
      fill="#6fc3e8"
      fillOpacity="0.22"
    />
    <rect x="188" y="31" width="30" height="6" rx="3" fill="#6fc3e8" />
    <rect
      x="188"
      y="56"
      width="40"
      height="6"
      rx="3"
      fill="#ffffff"
      fillOpacity="0.45"
    />
    <rect
      x="240"
      y="56"
      width="36"
      height="6"
      rx="3"
      fill="#ffffff"
      fillOpacity="0.25"
    />
    <rect
      x="188"
      y="74"
      width="34"
      height="6"
      rx="3"
      fill="#ffffff"
      fillOpacity="0.45"
    />
    <rect
      x="240"
      y="74"
      width="28"
      height="6"
      rx="3"
      fill="#ffffff"
      fillOpacity="0.25"
    />
    <rect
      x="188"
      y="92"
      width="44"
      height="6"
      rx="3"
      fill="#ffffff"
      fillOpacity="0.3"
    />
    <rect
      x="240"
      y="92"
      width="22"
      height="6"
      rx="3"
      fill="#ffffff"
      fillOpacity="0.15"
    />
    <rect
      x="188"
      y="108"
      width="30"
      height="6"
      rx="3"
      fill="#ffffff"
      fillOpacity="0.15"
    />

    <path d="M288 76 H322" stroke="#6fc3e8" strokeWidth="2" />
    <path d="M322 76 l-7 -4 v8 z" fill="#6fc3e8" />

    {/* Portal page */}
    <rect
      x="330"
      y="28"
      width="80"
      height="92"
      rx="10"
      fill="#ffffff"
      fillOpacity="0.1"
      stroke="#ffffff"
      strokeOpacity="0.6"
      strokeWidth="2"
    />
    <path
      d="M330 38 a10 10 0 0 1 10 -10 H400 a10 10 0 0 1 10 10 V46 H330 Z"
      fill="#ffffff"
      fillOpacity="0.25"
    />
    <rect
      x="340"
      y="58"
      width="60"
      height="14"
      rx="4"
      fill="#6fc3e8"
      fillOpacity="0.85"
    />
    <rect
      x="340"
      y="78"
      width="60"
      height="14"
      rx="4"
      fill="#ffffff"
      fillOpacity="0.3"
    />
    <rect
      x="340"
      y="98"
      width="38"
      height="8"
      rx="4"
      fill="#ffffff"
      fillOpacity="0.2"
    />
  </svg>
);

// On the white tile: a form submission starts a flow with three outcomes.
export const PpgAutomateArt = () => (
  <svg viewBox="0 0 240 130" {...common}>
    <rect
      x="8"
      y="14"
      width="64"
      height="86"
      rx="8"
      fill="#ffffff"
      stroke="#046999"
      strokeWidth="2"
    />
    <rect
      x="16"
      y="24"
      width="48"
      height="8"
      rx="4"
      fill="#e8f4fa"
      stroke="#046999"
      strokeWidth="1"
    />
    <rect
      x="16"
      y="38"
      width="48"
      height="8"
      rx="4"
      fill="#e8f4fa"
      stroke="#046999"
      strokeWidth="1"
    />
    <rect
      x="16"
      y="52"
      width="28"
      height="8"
      rx="4"
      fill="#e8f4fa"
      stroke="#046999"
      strokeWidth="1"
    />
    <rect x="16" y="72" width="34" height="14" rx="4" fill="#046999" />

    <path
      d="M72 58 H96"
      stroke="#046999"
      strokeWidth="2"
      strokeDasharray="3 4"
    />
    <circle cx="116" cy="58" r="20" fill="#046999" />
    <path d="M120 44 L108 62 H116 L112 74 L126 54 H117 Z" fill="#ffffff" />

    <path
      d="M136 58 C150 58 150 24 164 24 M136 58 H164 M136 58 C150 58 150 92 164 92"
      stroke="#046999"
      strokeWidth="2"
    />

    {/* Email */}
    <rect
      x="164"
      y="12"
      width="64"
      height="24"
      rx="6"
      fill="#e8f4fa"
      stroke="#046999"
      strokeWidth="1.6"
    />
    <path
      d="M170 18 L196 30 L222 18"
      stroke="#046999"
      strokeWidth="1.6"
      strokeLinejoin="round"
    />
    {/* Approval */}
    <rect
      x="164"
      y="46"
      width="64"
      height="24"
      rx="6"
      fill="#e8f4fa"
      stroke="#046999"
      strokeWidth="1.6"
    />
    <circle cx="180" cy="58" r="7" fill="#046999" />
    <path
      d="M176.5 58 l2.5 2.5 4.5 -5"
      stroke="#ffffff"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <rect x="192" y="55" width="28" height="6" rx="3" fill="#d4d6d9" />
    {/* New record */}
    <rect
      x="164"
      y="80"
      width="64"
      height="24"
      rx="6"
      fill="#e8f4fa"
      stroke="#046999"
      strokeWidth="1.6"
    />
    <path d="M164 92 H228 M184 80 V104" stroke="#046999" strokeWidth="1.2" />
    <rect
      x="186"
      y="93"
      width="40"
      height="10"
      fill="#6fc3e8"
      fillOpacity="0.5"
    />
  </svg>
);

// On the dark mid tile: three roles, each with read and write switches.
export const PpgPermissionsArt = () => {
  const rows = [
    { y: 14, read: true, write: false },
    { y: 52, read: true, write: true },
    { y: 90, read: false, write: false },
  ];
  return (
    <svg viewBox="0 0 240 130" {...common}>
      {rows.map((r, i) => (
        <g key={r.y}>
          <rect
            x="8"
            y={r.y}
            width="224"
            height="32"
            rx="10"
            fill="#ffffff"
            fillOpacity="0.07"
          />
          <circle
            cx="26"
            cy={r.y + 16}
            r="9"
            fill="#6fc3e8"
            fillOpacity={i === 2 ? 0.35 : 0.9}
          />
          <circle cx="26" cy={r.y + 13} r="3" fill="#111820" />
          <path d={`M20 ${r.y + 23} a6 5 0 0 1 12 0 Z`} fill="#111820" />
          <rect
            x="44"
            y={r.y + 13}
            width={[56, 48, 40][i]}
            height="6"
            rx="3"
            fill="#ffffff"
            fillOpacity="0.6"
          />

          {/* Read: eye */}
          <rect
            x="148"
            y={r.y + 4}
            width="34"
            height="24"
            rx="12"
            fill={r.read ? "#6fc3e8" : "none"}
            stroke="#6fc3e8"
            strokeWidth="1.5"
            strokeDasharray={r.read ? "0" : "3 3"}
            strokeOpacity={r.read ? 1 : 0.55}
          />
          <path
            d={`M158 ${r.y + 16} q7 -7 14 0 q-7 7 -14 0 Z`}
            stroke={r.read ? "#111820" : "#6fc3e8"}
            strokeOpacity={r.read ? 1 : 0.55}
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <circle
            cx="165"
            cy={r.y + 16}
            r="2"
            fill={r.read ? "#111820" : "#6fc3e8"}
            fillOpacity={r.read ? 1 : 0.55}
          />

          {/* Write: pencil */}
          <rect
            x="190"
            y={r.y + 4}
            width="34"
            height="24"
            rx="12"
            fill={r.write ? "#6fc3e8" : "none"}
            stroke="#6fc3e8"
            strokeWidth="1.5"
            strokeDasharray={r.write ? "0" : "3 3"}
            strokeOpacity={r.write ? 1 : 0.55}
          />
          <path
            d={`M200 ${r.y + 21} l1.5 -5 8 -8 3.5 3.5 -8 8 Z`}
            stroke={r.write ? "#111820" : "#6fc3e8"}
            strokeOpacity={r.write ? 1 : 0.55}
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </g>
      ))}
    </svg>
  );
};
