// /app/services/microsoft-power-platform/sharepoint-consulting-and-development/(svgs)/SpcdCopilotArt.jsx
// Spot illustrations for SpcdCopilot: three blockers (drawn for the dark
// section) and three tools (two on dark surface tiles, one on the accent tile).
// Decorative.
//
// Hex values and matching globals.scss tokens:
//   #046999 $accent          #034e72 $accent-dark     #6fc3e8 $accent-on-dark
//   #18232e $dark-surface    #1a2a3a $dark-mid        #c53030 $error
//   #ffffff $white (reduced opacity for $white-55 / $white-18)

const Svg = ({ children }) => (
  <svg
    width="64"
    height="64"
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    focusable="false"
  >
    {children}
  </svg>
);

// An open padlock with a crowd behind it
const Oversharing = () => (
  <Svg>
    <rect width="64" height="64" rx="16" fill="#1a2a3a" />
    {[16, 28, 40, 48].map((x, i) => (
      <g key={x} opacity={0.35 + i * 0.12}>
        <circle cx={x} cy="20" r="4" fill="#ffffff" />
        <path d={`M${x - 6} 31a6 6 0 0 1 12 0`} fill="#ffffff" />
      </g>
    ))}
    <rect x="20" y="34" width="24" height="18" rx="4" fill="#c53030" />
    <path
      d="M25 34v-4a7 7 0 0 1 13.4-2.8"
      stroke="#c53030"
      strokeWidth="3"
      strokeLinecap="round"
    />
    <circle cx="32" cy="42" r="2.4" fill="#ffffff" />
    <path d="M32 44v3" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
  </Svg>
);

// Stacked duplicate documents, the back one dated and faded
const Outdated = () => (
  <Svg>
    <rect width="64" height="64" rx="16" fill="#1a2a3a" />
    <path d="M16 12h18l6 6v24H16z" fill="#ffffff" fillOpacity="0.18" />
    <path
      d="M22 18h18l6 6v26H22z"
      fill="#18232e"
      stroke="#ffffff"
      strokeOpacity="0.55"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
    <path
      d="M27 30h13M27 35h13M27 40h8"
      stroke="#ffffff"
      strokeOpacity="0.45"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
    <circle
      cx="44"
      cy="46"
      r="9"
      fill="#18232e"
      stroke="#6fc3e8"
      strokeWidth="1.8"
    />
    <path
      d="M44 41.5V46l3 2"
      stroke="#6fc3e8"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

// An old-style page with a dashed outline and a search lens that comes up empty
const Classic = () => (
  <Svg>
    <rect width="64" height="64" rx="16" fill="#1a2a3a" />
    <rect
      x="12"
      y="13"
      width="32"
      height="36"
      rx="3"
      stroke="#ffffff"
      strokeOpacity="0.5"
      strokeWidth="1.5"
      strokeDasharray="3 3"
    />
    <rect
      x="16"
      y="18"
      width="8"
      height="26"
      rx="1"
      fill="#ffffff"
      fillOpacity="0.18"
    />
    <path
      d="M28 20h12M28 25h10M28 30h12"
      stroke="#ffffff"
      strokeOpacity="0.3"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
    <circle
      cx="42"
      cy="40"
      r="8"
      fill="#1a2a3a"
      stroke="#6fc3e8"
      strokeWidth="2"
    />
    <path
      d="M48 46l6 6"
      stroke="#6fc3e8"
      strokeWidth="2.6"
      strokeLinecap="round"
    />
    <path
      d="M39 40h6"
      stroke="#6fc3e8"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
  </Svg>
);

// Chat bubble with a governance shield: an admin assistant
const AdminAgent = () => (
  <Svg>
    <rect width="64" height="64" rx="16" fill="#046999" fillOpacity="0.25" />
    <path
      d="M12 16h30a4 4 0 0 1 4 4v14a4 4 0 0 1-4 4H24l-8 6v-6h-4a4 4 0 0 1-4-4V20a4 4 0 0 1 4-4z"
      fill="#18232e"
      stroke="#6fc3e8"
      strokeWidth="1.6"
      strokeLinejoin="round"
    />
    <path
      d="M16 25h18M16 30h12"
      stroke="#ffffff"
      strokeOpacity="0.55"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
    <path d="M46 30l9 3.5v7c0 6-4 9.5-9 11-5-1.5-9-5-9-11v-7z" fill="#6fc3e8" />
    <path
      d="M42.5 41l2.5 2.5 4.5-5"
      stroke="#18232e"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

// A tag being attached to a document automatically
const AutoTag = () => (
  <Svg>
    <rect width="64" height="64" rx="16" fill="#046999" fillOpacity="0.25" />
    <path
      d="M14 12h18l7 7v31H14z"
      fill="#18232e"
      stroke="#ffffff"
      strokeOpacity="0.55"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
    <path
      d="M19 26h14M19 31h14M19 36h9"
      stroke="#ffffff"
      strokeOpacity="0.4"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
    <path d="M36 38h12l6 6-6 6H36z" fill="#6fc3e8" />
    <circle cx="40.5" cy="44" r="2" fill="#18232e" />
    <path
      d="M47 14c.6 2.8 1.2 3.4 4 4-2.8.6-3.4 1.2-4 4-.6-2.8-1.2-3.4-4-4 2.8-.6 3.4-1.2 4-4z"
      fill="#6fc3e8"
    />
  </Svg>
);

// A clipboard checklist under a magnifier (drawn for the accent tile)
const Assessment = () => (
  <Svg>
    <rect width="64" height="64" rx="16" fill="#034e72" />
    <rect x="14" y="12" width="28" height="38" rx="4" fill="#ffffff" />
    <rect x="22" y="9" width="12" height="7" rx="2" fill="#6fc3e8" />
    {[23, 31, 39].map((y, i) => (
      <g key={y}>
        <path
          d={`M18.5 ${y}l2 2 3.5-3.5`}
          stroke={i < 2 ? "#046999" : "#ffffff"}
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d={`M27 ${y + 0.5}h10`}
          stroke="#046999"
          strokeOpacity="0.45"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </g>
    ))}
    <circle
      cx="44"
      cy="42"
      r="8"
      fill="#034e72"
      stroke="#ffffff"
      strokeWidth="2.2"
    />
    <path
      d="M50 48l5.5 5.5"
      stroke="#ffffff"
      strokeWidth="2.8"
      strokeLinecap="round"
    />
  </Svg>
);

const SPCD_COPILOT_ART = {
  oversharing: Oversharing,
  outdated: Outdated,
  classic: Classic,
  adminAgent: AdminAgent,
  autoTag: AutoTag,
  assessment: Assessment,
};

const SpcdCopilotArt = ({ type }) => {
  const Art = SPCD_COPILOT_ART[type];
  return Art ? <Art /> : null;
};

export default SpcdCopilotArt;
