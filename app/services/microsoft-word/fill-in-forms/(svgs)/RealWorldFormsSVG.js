// app/fill-in-forms/(svgs)/RealWorldFormsSVG.js

export const RealWorldFormsSVG = () => (
  <svg
    viewBox="0 0 400 360"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    {/* ── Back document: government / compliance style, tilted right ── */}
    <g transform="rotate(6 200 190)">
      <rect
        x="130"
        y="60"
        width="180"
        height="230"
        rx="10"
        fill="#ffffff"
        stroke="rgba(0,0,0,0.09)"
        strokeWidth="1.25"
      />
      <rect x="150" y="86" width="90" height="9" rx="4" fill="#e2e4e7" />
      <rect x="150" y="106" width="140" height="6" rx="3" fill="#f2f3f5" />
      <rect x="150" y="120" width="120" height="6" rx="3" fill="#f2f3f5" />
      {Array.from({ length: 4 }).map((_, i) => (
        <g key={i} transform={`translate(150 ${146 + i * 26})`}>
          <rect
            width="16"
            height="16"
            rx="3"
            fill="none"
            stroke="#a0a2a6"
            strokeWidth="1.25"
          />
          <rect
            x="26"
            width="114"
            height="16"
            rx="3"
            fill="none"
            stroke="rgba(0,0,0,0.1)"
            strokeWidth="1.1"
          />
        </g>
      ))}
    </g>

    {/* ── Middle document: staff intake sheet, tilted left ── */}
    <g transform="rotate(-5 190 190)">
      <rect
        x="100"
        y="50"
        width="180"
        height="230"
        rx="10"
        fill="#ffffff"
        stroke="rgba(0,0,0,0.1)"
        strokeWidth="1.25"
      />
      <rect
        x="120"
        y="76"
        width="100"
        height="9"
        rx="4"
        fill="#046999"
        opacity="0.85"
      />
      <rect x="120" y="96" width="140" height="6" rx="3" fill="#f2f3f5" />
      {Array.from({ length: 3 }).map((_, i) => (
        <rect
          key={i}
          x="120"
          y={122 + i * 28}
          width="140"
          height="18"
          rx="4"
          fill="#ffffff"
          stroke="#046999"
          strokeWidth="1.3"
        />
      ))}
      <rect x="120" y="234" width="140" height="30" rx="6" fill="#e8f4fa" />
      <path
        d="M132 249l6 6 12-13"
        stroke="#046999"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </g>

    {/* ── Front document: compliance checklist, straight ── */}
    <g>
      <rect
        x="70"
        y="66"
        width="180"
        height="230"
        rx="10"
        fill="#ffffff"
        stroke="rgba(0,0,0,0.1)"
        strokeWidth="1.25"
      />
      <rect x="70" y="66" width="180" height="34" rx="10" fill="#046999" />
      <rect x="70" y="84" width="180" height="16" fill="#046999" />
      <text x="88" y="88" fill="#ffffff" fontSize="12" fontWeight="700">
        Site Inspection Form
      </text>

      {Array.from({ length: 5 }).map((_, i) => (
        <g key={i} transform={`translate(88 ${118 + i * 30})`}>
          <rect
            width="16"
            height="16"
            rx="3"
            fill={i < 3 ? "#046999" : "none"}
            stroke="#046999"
            strokeWidth="1.4"
          />
          {i < 3 && (
            <path
              d="M4 8l3 3 6-7"
              stroke="#ffffff"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
          )}
          <rect x="26" width="118" height="7" rx="3.5" fill="#f2f3f5" />
        </g>
      ))}
    </g>

    {/* ── Decorative accent dots ── */}
    <circle cx="30" cy="60" r="4" fill="#046999" opacity="0.16" />
    <circle cx="370" cy="300" r="5" fill="#046999" opacity="0.14" />
    <circle cx="352" cy="46" r="3" fill="#046999" opacity="0.2" />
  </svg>
);
