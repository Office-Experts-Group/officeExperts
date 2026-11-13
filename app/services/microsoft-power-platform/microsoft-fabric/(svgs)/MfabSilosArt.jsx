// /app/services/microsoft-power-platform/microsoft-fabric/(svgs)/MfabSilosArt.jsx
// Before / after illustrations for the data silos section, plus four small
// spot illustrations for the benefit row. All drawn for dark or accent tiles.
// Colours (tokens): #18232e $dark-surface, #111820 $dark-bg, #6fc3e8
// $accent-on-dark, #046999 $accent, #034e72 $accent-dark, #e8f4fa
// $accent-light, #0d1b2a $text-primary, #c0392b $replace-x, #ffffff $white.

const BeforeBox = ({ x, y, w, label }) => (
  <g>
    <rect
      x={x}
      y={y}
      width={w}
      height="48"
      rx="10"
      fill="#111820"
      stroke="#ffffff"
      strokeOpacity="0.18"
    />
    <rect
      x={x + 12}
      y={y + 18}
      width="12"
      height="12"
      rx="3"
      fill="#6fc3e8"
      fillOpacity="0.6"
    />
    <text x={x + 32} y={y + 29} fontSize="15" fill="#ffffff" fillOpacity="0.88">
      {label}
    </text>
  </g>
);

const CopyFile = ({ x, y }) => (
  <g>
    <rect
      x={x + 4}
      y={y - 4}
      width="16"
      height="20"
      rx="2"
      fill="#18232e"
      stroke="#ffffff"
      strokeOpacity="0.35"
    />
    <rect
      x={x}
      y={y}
      width="16"
      height="20"
      rx="2"
      fill="#18232e"
      stroke="#ffffff"
      strokeOpacity="0.55"
    />
    <path
      d={`M${x + 4} ${y + 7}h8M${x + 4} ${y + 12}h6`}
      stroke="#ffffff"
      strokeOpacity="0.45"
    />
  </g>
);

export const MfabBeforeArt = () => (
  <svg
    viewBox="0 0 480 300"
    role="img"
    aria-labelledby="mfab-before-title mfab-before-desc"
  >
    <title id="mfab-before-title">Without Fabric</title>
    <desc id="mfab-before-desc">
      A CRM, a finance system, spreadsheets and a data warehouse are joined by
      tangled copy and export lines. Two reports built from different copies
      show different revenue figures.
    </desc>

    {/* tangled copy lines */}
    <g
      fill="none"
      stroke="#ffffff"
      strokeOpacity="0.35"
      strokeWidth="1.5"
      strokeDasharray="5 5"
    >
      <path d="M140 60C220 60 260 90 330 66" />
      <path d="M90 86C80 140 100 170 110 204" />
      <path d="M380 88C400 140 380 170 372 206" />
      <path d="M140 72C230 120 260 190 310 222" />
      <path d="M330 78C250 120 200 170 170 206" />
      <path d="M180 228C240 250 270 250 310 232" />
    </g>
    <text
      x="236"
      y="58"
      fontSize="14"
      fill="#ffffff"
      fillOpacity="0.55"
      textAnchor="middle"
    >
      export
    </text>
    <text
      x="236"
      y="266"
      fontSize="14"
      fill="#ffffff"
      fillOpacity="0.55"
      textAnchor="middle"
    >
      copy, paste, repeat
    </text>
    <CopyFile x={70} y={134} />
    <CopyFile x={392} y={136} />

    <BeforeBox x={30} y={36} w={110} label="CRM" />
    <BeforeBox x={330} y={42} w={120} label="Finance" />
    <BeforeBox x={30} y={204} w={150} label="Spreadsheets" />
    <BeforeBox x={310} y={208} w={140} label="Warehouse" />

    {/* two reports that disagree */}
    <rect
      x="200"
      y="112"
      width="100"
      height="70"
      rx="10"
      fill="#18232e"
      stroke="#ffffff"
      strokeOpacity="0.35"
    />
    <rect
      x="182"
      y="128"
      width="100"
      height="70"
      rx="10"
      fill="#111820"
      stroke="#ffffff"
      strokeOpacity="0.55"
    />
    <text x="196" y="152" fontSize="14" fill="#ffffff" fillOpacity="0.65">
      Revenue
    </text>
    <text x="196" y="182" fontSize="20" fontWeight="700" fill="#ffffff">
      $4.1M
    </text>
    <text
      x="294"
      y="126"
      fontSize="14"
      fill="#ffffff"
      fillOpacity="0.55"
      textAnchor="end"
    >
      $3.8M
    </text>
    <path d="M296 166l12-22 12 22z" fill="#c0392b" />
    <path
      d="M308 152v6M308 162v1"
      stroke="#ffffff"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

export const MfabAfterArt = () => (
  <svg
    viewBox="0 0 480 300"
    role="img"
    aria-labelledby="mfab-after-title mfab-after-desc"
  >
    <title id="mfab-after-title">With Fabric</title>
    <desc id="mfab-after-desc">
      The same systems connect once to OneLake. A single report reads from that
      one copy and shows one revenue figure, protected by shared security.
    </desc>

    {["CRM", "Finance", "Spreadsheets"].map((label, i) => {
      const y = 34 + i * 92;
      return (
        <g key={label}>
          <rect x="12" y={y} width="148" height="48" rx="10" fill="#ffffff" />
          <rect
            x="24"
            y={y + 18}
            width="12"
            height="12"
            rx="3"
            fill="#046999"
          />
          <text x="44" y={y + 29} fontSize="15" fill="#0d1b2a">
            {label}
          </text>
          <path
            d={`M160 ${y + 24}C194 ${y + 24} 184 150 196 150`}
            fill="none"
            stroke="#ffffff"
            strokeWidth="2"
            strokeOpacity="0.85"
          />
        </g>
      );
    })}

    {/* OneLake */}
    <ellipse cx="256" cy="150" rx="64" ry="46" fill="#e8f4fa" />
    <path
      d="M214 132c10-5 20-5 30 0s20 5 30 0"
      fill="none"
      stroke="#046999"
      strokeOpacity="0.4"
      strokeWidth="1.5"
    />
    <text
      x="256"
      y="156"
      fontSize="16"
      fontWeight="700"
      fill="#0d1b2a"
      textAnchor="middle"
    >
      OneLake
    </text>
    <text x="256" y="176" fontSize="14" fill="#034e72" textAnchor="middle">
      one copy
    </text>

    <path d="M320 150h28" stroke="#ffffff" strokeWidth="2" />
    <path
      d="M342 144l7 6-7 6"
      fill="none"
      stroke="#ffffff"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    {/* single trusted report */}
    <rect x="352" y="70" width="112" height="160" rx="12" fill="#ffffff" />
    <text x="366" y="98" fontSize="14" fill="#4a5568">
      Revenue
    </text>
    <text x="366" y="126" fontSize="20" fontWeight="700" fill="#0d1b2a">
      $4.1M
    </text>
    <g fill="#046999">
      <rect x="368" y="176" width="12" height="36" rx="2" fill="#6fc3e8" />
      <rect x="386" y="164" width="12" height="48" rx="2" fill="#6fc3e8" />
      <rect x="404" y="154" width="12" height="58" rx="2" />
      <rect x="422" y="168" width="12" height="44" rx="2" fill="#6fc3e8" />
    </g>
    {/* shared security badge */}
    <circle cx="452" cy="74" r="16" fill="#111820" />
    <path
      d="M452 64l8 3v6c0 5-3 8-8 10-5-2-8-5-8-10v-6z"
      fill="none"
      stroke="#6fc3e8"
      strokeWidth="1.6"
      strokeLinejoin="round"
    />
  </svg>
);

// Spot art for the four benefit items (decorative)
export const MfabSilosBenefitArt = ({ type }) => {
  const common = {
    viewBox: "0 0 64 64",
    "aria-hidden": "true",
    focusable: "false",
  };

  if (type === "storage") {
    return (
      <svg {...common}>
        <rect width="64" height="64" rx="16" fill="#18232e" />
        <ellipse cx="32" cy="38" rx="20" ry="11" fill="#046999" />
        <path
          d="M18 36c5-3 9-3 14 0s9 3 14 0"
          fill="none"
          stroke="#6fc3e8"
          strokeWidth="1.6"
        />
        <path
          d="M24 14v12M32 10v16M40 14v12"
          stroke="#6fc3e8"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M21 23l3 3 3-3M29 23l3 3 3-3M37 23l3 3 3-3"
          fill="none"
          stroke="#6fc3e8"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    );
  }
  if (type === "movement") {
    return (
      <svg {...common}>
        <rect width="64" height="64" rx="16" fill="#18232e" />
        <rect
          x="12"
          y="20"
          width="16"
          height="22"
          rx="3"
          fill="none"
          stroke="#6fc3e8"
          strokeWidth="1.6"
        />
        <rect
          x="36"
          y="20"
          width="16"
          height="22"
          rx="3"
          fill="none"
          stroke="#ffffff"
          strokeOpacity="0.35"
          strokeWidth="1.6"
          strokeDasharray="3 3"
        />
        <path
          d="M28 31h8"
          stroke="#ffffff"
          strokeOpacity="0.55"
          strokeWidth="1.6"
        />
        <path
          d="M24 44l16-24"
          stroke="#c0392b"
          strokeWidth="2.4"
          strokeLinecap="round"
        />
        <circle cx="20" cy="50" r="5" fill="#046999" />
        <path
          d="M20 47v6M18 49h3.5a1.2 1.2 0 0 1 0 2.4H18"
          stroke="#ffffff"
          strokeWidth="1.2"
          fill="none"
        />
      </svg>
    );
  }
  if (type === "security") {
    return (
      <svg {...common}>
        <rect width="64" height="64" rx="16" fill="#18232e" />
        <path
          d="M32 12l16 6v12c0 11-7 18-16 22-9-4-16-11-16-22V18z"
          fill="#046999"
        />
        <rect x="25" y="29" width="14" height="11" rx="2" fill="#ffffff" />
        <path
          d="M28 29v-3a4 4 0 0 1 8 0v3"
          fill="none"
          stroke="#ffffff"
          strokeWidth="2"
        />
        <circle cx="32" cy="34.5" r="1.8" fill="#046999" />
      </svg>
    );
  }
  // simplified management
  return (
    <svg {...common}>
      <rect width="64" height="64" rx="16" fill="#18232e" />
      <path
        d="M14 22h36M14 32h36M14 42h36"
        stroke="#ffffff"
        strokeOpacity="0.35"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="24" cy="22" r="5" fill="#6fc3e8" />
      <circle
        cx="40"
        cy="32"
        r="5"
        fill="#046999"
        stroke="#6fc3e8"
        strokeWidth="1.6"
      />
      <circle cx="30" cy="42" r="5" fill="#6fc3e8" />
    </svg>
  );
};
