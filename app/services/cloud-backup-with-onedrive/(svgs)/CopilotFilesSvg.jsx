// app/services/cloud-backup-with-onedrive/(svgs)/CopilotFilesSvg.jsx
// Files pass through a permissions shield before reaching a Copilot answer panel. One file
// carries an "Anyone link" tag and is stopped short of the shield, showing oversharing being
// fixed first. Drawn for the dark OneDriveCopilot section using globals.scss hex values.
// Decorative only: the wrapper in OneDriveCopilot is aria-hidden.

// File cards on the left. `y` is the top of each card; `blocked` marks the overshared file.
const files = [
  { y: 40, blocked: false },
  { y: 110, blocked: false },
  { y: 180, blocked: true },
  { y: 250, blocked: false },
];

export const CopilotFilesSvg = () => (
  <svg
    viewBox="0 0 520 380"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    focusable="false"
    fontFamily="inherit"
  >
    {/* Dashed link into the answer panel; animation stops for reduced motion */}
    <style>{`
      .cfFlow { stroke-dasharray: 4 6; animation: cfFlow 1.6s linear infinite; }
      @keyframes cfFlow { to { stroke-dashoffset: -20; } }
      @media (prefers-reduced-motion: reduce) { .cfFlow { animation: none; } }
    `}</style>

    {/* ── File cards and their lines to the shield ── */}
    {files.map(({ y, blocked }) => {
      const mid = y + 28;
      return (
        <g key={y}>
          {/* Allowed files reach the shield; the blocked one stops at a cross */}
          <path
            d={
              blocked
                ? `M190 ${mid}H222`
                : `M190 ${mid}C215 ${mid} 215 170 236 170`
            }
            stroke="rgba(255,255,255,0.18)"
            strokeWidth="1.5"
          />
          {blocked && (
            <path
              d={`M224 ${mid - 6}l12 12M236 ${mid - 6}l-12 12`}
              stroke="#c53030"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          )}
          <rect
            x="20"
            y={y}
            width="170"
            height="56"
            rx="12"
            fill="#18232e"
            stroke="rgba(255,255,255,0.12)"
          />
          <rect
            x="36"
            y={y + 14}
            width="22"
            height="28"
            rx="4"
            fill="rgba(111,195,232,0.18)"
          />
          <rect
            x="70"
            y={y + 16}
            width="90"
            height="7"
            rx="3.5"
            fill="rgba(255,255,255,0.35)"
          />
          {blocked ? (
            <>
              <rect
                x="70"
                y={y + 30}
                width="80"
                height="18"
                rx="9"
                fill="rgba(197,48,48,0.35)"
              />
              <text
                x="110"
                y={y + 43}
                fill="rgba(255,255,255,0.88)"
                fontSize="10"
                fontWeight="700"
                textAnchor="middle"
              >
                Anyone link
              </text>
            </>
          ) : (
            <rect
              x="70"
              y={y + 32}
              width="60"
              height="6"
              rx="3"
              fill="rgba(255,255,255,0.18)"
            />
          )}
        </g>
      );
    })}

    {/* ── Permissions shield ── */}
    <path
      d="M270 128l34 12v28c0 22-15 38-34 46-19-8-34-24-34-46v-28z"
      fill="#1a2a3a"
      stroke="#6fc3e8"
      strokeWidth="2"
      strokeLinejoin="round"
    />
    <path
      d="M263 166v-6a7 7 0 0 1 14 0v6"
      stroke="#6fc3e8"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <rect x="259" y="166" width="22" height="18" rx="3" fill="#6fc3e8" />
    <text
      x="270"
      y="236"
      fill="rgba(255,255,255,0.55)"
      fontSize="11"
      fontWeight="700"
      textAnchor="middle"
    >
      Permissions
    </text>

    {/* Shield to answer panel */}
    <path
      className="cfFlow"
      d="M306 170H330"
      stroke="#6fc3e8"
      strokeWidth="2"
      strokeLinecap="round"
    />

    {/* ── Copilot answer panel ── */}
    <rect
      x="330"
      y="40"
      width="176"
      height="300"
      rx="18"
      fill="#18232e"
      stroke="rgba(255,255,255,0.12)"
    />
    <text
      x="348"
      y="68"
      fill="rgba(255,255,255,0.55)"
      fontSize="11"
      fontWeight="700"
      letterSpacing="2"
    >
      COPILOT
    </text>

    {/* Question bubble */}
    <rect x="372" y="84" width="120" height="44" rx="12" fill="#046999" />
    <text x="384" y="102" fill="#ffffff" fontSize="11">
      Summarise the
    </text>
    <text x="384" y="118" fill="#ffffff" fontSize="11">
      Henderson job
    </text>

    {/* Answer lines */}
    <rect x="344" y="142" width="148" height="110" rx="12" fill="#1a2a3a" />
    {[
      [158, 124, 0.35],
      [174, 110, 0.18],
      [190, 118, 0.18],
      [206, 80, 0.18],
      [222, 100, 0.18],
    ].map(([y, w, o]) => (
      <rect
        key={y}
        x="356"
        y={y}
        width={w}
        height="6"
        rx="3"
        fill={`rgba(255,255,255,${o})`}
      />
    ))}

    {/* Sources chip */}
    <rect
      x="344"
      y="264"
      width="74"
      height="20"
      rx="10"
      stroke="rgba(255,255,255,0.18)"
    />
    <text
      x="381"
      y="278"
      fill="rgba(255,255,255,0.65)"
      fontSize="10"
      textAnchor="middle"
    >
      3 sources
    </text>

    {/* Prompt box */}
    <rect
      x="344"
      y="300"
      width="148"
      height="26"
      rx="13"
      fill="#111820"
      stroke="rgba(255,255,255,0.12)"
    />
    <text x="358" y="317" fill="rgba(255,255,255,0.35)" fontSize="10">
      Ask about these files
    </text>

    {/* Caption under the files */}
    <text x="20" y="340" fill="rgba(255,255,255,0.55)" fontSize="12">
      Only files a person can open
    </text>
    <text x="20" y="358" fill="rgba(255,255,255,0.55)" fontSize="12">
      reach the answer.
    </text>
  </svg>
);
