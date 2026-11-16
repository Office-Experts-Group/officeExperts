// /app/services/microsoft-power-platform/(svgs)/PphEngageArt.jsx
// Four spot icons for the "ways to work with us" tiles. Drawn for a tile on
// $accent-dark. Decorative, so aria-hidden. No text inside.
// Hex → token: #6fc3e8 $accent-on-dark, #046999 $accent, #034e72 $accent-dark,
// #ffffff $white, #e8f4fa $accent-light

const p = {
  viewBox: "0 0 88 88",
  "aria-hidden": "true",
  focusable: "false",
  style: { display: "block", width: "100%", height: "auto" },
};
const line = {
  fill: "none",
  stroke: "#6fc3e8",
  strokeWidth: 2.6,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

// Quote or hourly rate: a quote sheet with a clock
export const PphQuoteArt = () => (
  <svg {...p}>
    <path d="M18 10h34l12 12v50H18z" fill="#046999" {...line} />
    <path d="M52 10v12h12" {...line} strokeWidth="2" />
    <path
      d="M26 34h20M26 44h14M26 54h16"
      {...line}
      strokeWidth="2.2"
      opacity="0.7"
    />
    <circle cx="62" cy="62" r="14" fill="#034e72" {...line} />
    <path d="M62 53v9l6 4" {...line} stroke="#ffffff" strokeWidth="2.4" />
  </svg>
);

// Ongoing support: headset with a chat bubble
export const PphOngoingArt = () => (
  <svg {...p}>
    <path d="M16 46a28 28 0 0 1 56 0" {...line} strokeWidth="3.4" />
    <rect
      x="10"
      y="44"
      width="12"
      height="22"
      rx="5"
      fill="#046999"
      {...line}
    />
    <rect
      x="66"
      y="44"
      width="12"
      height="22"
      rx="5"
      fill="#046999"
      {...line}
    />
    <path d="M72 66c0 10-9 14-22 14" {...line} />
    <rect x="40" y="76" width="16" height="8" rx="4" fill="#6fc3e8" />
    <path d="M36 40l5 5 11-12" {...line} stroke="#ffffff" strokeWidth="3" />
  </svg>
);

// Remote or onsite: laptop with a location pin
export const PphRemoteArt = () => (
  <svg {...p}>
    <rect
      x="12"
      y="22"
      width="48"
      height="34"
      rx="4"
      fill="#046999"
      {...line}
    />
    <path d="M6 62h60l-4 6H10z" fill="#6fc3e8" />
    <path
      d="M20 32h18M20 40h12"
      {...line}
      stroke="#ffffff"
      strokeWidth="2.2"
      opacity="0.8"
    />
    <path
      d="M64 8c-8 0-14 6-14 14 0 10 14 24 14 24s14-14 14-24c0-8-6-14-14-14z"
      fill="#034e72"
      {...line}
    />
    <circle cx="64" cy="22" r="5" fill="#ffffff" />
  </svg>
);

// Tailored training: whiteboard and a person
export const PphTrainingArt = () => (
  <svg {...p}>
    <rect
      x="22"
      y="10"
      width="58"
      height="40"
      rx="4"
      fill="#046999"
      {...line}
    />
    <path
      d="M32 24h20M32 32h12"
      {...line}
      stroke="#ffffff"
      strokeWidth="2.2"
      opacity="0.8"
    />
    {[10, 16, 22].map((h, i) => (
      <rect
        key={i}
        x={58 + i * 6}
        y={42 - h}
        width="4"
        height={h}
        rx="1.5"
        fill="#6fc3e8"
      />
    ))}
    <path d="M50 50v8M36 58h28" {...line} strokeWidth="2.2" />
    <circle cx="16" cy="44" r="7" fill="#6fc3e8" />
    <path d="M4 80c0-16 24-16 24 0z" fill="#6fc3e8" />
    <path d="M26 62l12-8" {...line} strokeWidth="3" />
  </svg>
);
