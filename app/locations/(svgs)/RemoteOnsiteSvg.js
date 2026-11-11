// app/locations/(svgs)/RemoteOnsiteSvg.js
// Laptop (remote consultant) linked to an office building (on-site visit).
// Built for a white background.

export const RemoteOnsiteSvg = () => (
  <svg
    viewBox="0 0 440 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-label="A consultant working remotely from a laptop, connected to a client's office for on-site visits"
    style={{ width: "100%", height: "auto", display: "block" }}
  >
    <defs>
      <style>{`
        @keyframes ro-dash {
          to { stroke-dashoffset: -20; }
        }
        .ro-dash { stroke-dasharray: 4 6; animation: ro-dash 1.6s linear infinite; }
        @media (prefers-reduced-motion: reduce) {
          .ro-dash { animation: none; }
        }
      `}</style>
    </defs>

    {/* ── Laptop ── */}
    <rect
      x="40"
      y="56"
      width="110"
      height="72"
      rx="8"
      fill="#ffffff"
      stroke="#046999"
      strokeWidth="2"
    />
    <rect x="54" y="72" width="50" height="6" rx="3" fill="#0b2433" />
    <rect x="54" y="88" width="82" height="6" rx="3" fill="#d4d6d9" />
    <rect x="54" y="102" width="66" height="6" rx="3" fill="#d4d6d9" />
    <path d="M24 136H166L156 150H34L24 136Z" fill="#046999" />

    {/* ── Connection ── */}
    <path
      className="ro-dash"
      d="M154 92C204 36 262 36 306 84"
      stroke="#046999"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <circle cx="154" cy="92" r="4" fill="#046999" />
    <circle cx="306" cy="84" r="4" fill="#046999" />

    {/* ── Office building ── */}
    <rect
      x="310"
      y="56"
      width="90"
      height="94"
      rx="6"
      fill="#ffffff"
      stroke="#0b2433"
      strokeWidth="2"
    />
    <g fill="#046999" fillOpacity="0.3">
      <rect x="324" y="70" width="14" height="12" rx="2" />
      <rect x="348" y="70" width="14" height="12" rx="2" />
      <rect x="372" y="70" width="14" height="12" rx="2" />
      <rect x="324" y="92" width="14" height="12" rx="2" />
      <rect x="348" y="92" width="14" height="12" rx="2" />
      <rect x="372" y="92" width="14" height="12" rx="2" />
    </g>
    <rect x="346" y="120" width="18" height="30" rx="2" fill="#0b2433" />

    {/* ── Labels ── */}
    <rect x="62" y="166" width="66" height="24" rx="12" fill="#0b2433" />
    <text
      x="95"
      y="182"
      textAnchor="middle"
      fontFamily="system-ui, -apple-system, sans-serif"
      fontSize="11"
      fontWeight="700"
      fill="#ffffff"
    >
      Remote
    </text>

    <rect x="318" y="166" width="74" height="24" rx="12" fill="#ffffff" stroke="#d4d6d9" />
    <text
      x="355"
      y="182"
      textAnchor="middle"
      fontFamily="system-ui, -apple-system, sans-serif"
      fontSize="11"
      fontWeight="700"
      fill="#0b2433"
    >
      On-site
    </text>
  </svg>
);
