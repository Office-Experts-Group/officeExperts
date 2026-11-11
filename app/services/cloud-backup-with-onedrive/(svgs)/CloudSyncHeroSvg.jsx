// app/services/cloud-backup-with-onedrive/(svgs)/CloudSyncHeroSvg.jsx
// Hero illustration: a laptop and phone syncing to the cloud copy, with a restore point list
// where the two latest points are affected and an earlier clean point is chosen for recovery.
// Drawn for the dark hero. Colours are the hex values of the globals.scss tokens, because SVG
// attributes can't read Sass variables. Decorative only: the wrapper in OneDriveHero is aria-hidden.

// Restore point rows, top to bottom. `state` drives the row styling below.
const points = [
  { time: "Today 09:40", state: "affected" },
  { time: "Today 09:30", state: "affected" },
  { time: "Today 09:20", state: "clean" },
  { time: "Last week", state: "normal" },
];

export const CloudSyncHeroSvg = () => (
  <svg
    viewBox="0 0 520 440"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    focusable="false"
    fontFamily="inherit"
  >
    {/* Dashed sync lines drift towards the cloud; animation stops for reduced motion */}
    <style>{`
      .cshFlow { stroke-dasharray: 4 6; animation: cshFlow 1.6s linear infinite; }
      @keyframes cshFlow { to { stroke-dashoffset: -20; } }
      @media (prefers-reduced-motion: reduce) { .cshFlow { animation: none; } }
    `}</style>

    <defs>
      <radialGradient id="cshGlow" cx="0.5" cy="0.5" r="0.5">
        <stop offset="0" stopColor="#046999" stopOpacity="0.45" />
        <stop offset="1" stopColor="#046999" stopOpacity="0" />
      </radialGradient>
    </defs>

    {/* Soft glow behind the cloud panel */}
    <circle cx="365" cy="105" r="150" fill="url(#cshGlow)" />

    {/* ── Cloud panel ── */}
    <rect
      x="250"
      y="30"
      width="230"
      height="150"
      rx="20"
      fill="#18232e"
      stroke="rgba(255,255,255,0.12)"
    />
    <text
      x="272"
      y="56"
      fill="rgba(255,255,255,0.55)"
      fontSize="11"
      fontWeight="700"
      letterSpacing="2"
    >
      CLOUD COPY
    </text>
    <path
      d="M330 154h72a26 26 0 0 0 2-52 34 34 0 0 0-64-8 31 31 0 0 0-10 60z"
      fill="rgba(111,195,232,0.08)"
      stroke="#6fc3e8"
      strokeWidth="2.5"
      strokeLinejoin="round"
    />
    <text
      x="365"
      y="173"
      fill="rgba(255,255,255,0.55)"
      fontSize="11"
      textAnchor="middle"
    >
      Synced 2 min ago
    </text>

    {/* ── Laptop ── */}
    <rect
      x="30"
      y="230"
      width="170"
      height="108"
      rx="10"
      fill="#18232e"
      stroke="rgba(255,255,255,0.12)"
    />
    {[255, 275, 295, 315].map((y, i) => (
      <g key={y}>
        <rect
          x="48"
          y={y - 7}
          width="14"
          height="14"
          rx="3"
          fill="rgba(111,195,232,0.25)"
        />
        <rect
          x="70"
          y={y - 3}
          width={[90, 70, 100, 60][i]}
          height="6"
          rx="3"
          fill="rgba(255,255,255,0.18)"
        />
      </g>
    ))}
    <path
      d="M14 346h202l-12 12H26z"
      fill="#1a2a3a"
      stroke="rgba(255,255,255,0.12)"
    />

    {/* ── Phone ── */}
    <rect
      x="230"
      y="290"
      width="62"
      height="112"
      rx="12"
      fill="#18232e"
      stroke="rgba(255,255,255,0.12)"
    />
    <rect
      x="251"
      y="298"
      width="20"
      height="4"
      rx="2"
      fill="rgba(255,255,255,0.18)"
    />
    {[316, 336, 356].map((y) => (
      <rect
        key={y}
        x="242"
        y={y}
        width="38"
        height="6"
        rx="3"
        fill="rgba(255,255,255,0.18)"
      />
    ))}

    {/* ── Sync lines from each device to the cloud ── */}
    <path
      className="cshFlow"
      d="M115 226C115 170 220 200 280 182"
      stroke="#6fc3e8"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      className="cshFlow"
      d="M261 286C261 240 320 230 330 184"
      stroke="#6fc3e8"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <circle cx="115" cy="226" r="4" fill="#6fc3e8" />
    <circle cx="261" cy="286" r="4" fill="#6fc3e8" />

    {/* Link from the cloud copy down to its restore points */}
    <path
      d="M420 180v34"
      stroke="rgba(255,255,255,0.18)"
      strokeWidth="2"
      strokeDasharray="3 4"
    />

    {/* ── Restore points panel ── */}
    <rect
      x="318"
      y="214"
      width="180"
      height="196"
      rx="18"
      fill="#18232e"
      stroke="rgba(255,255,255,0.12)"
    />
    <text
      x="336"
      y="240"
      fill="rgba(255,255,255,0.55)"
      fontSize="11"
      fontWeight="700"
      letterSpacing="2"
    >
      RESTORE POINTS
    </text>

    {points.map(({ time, state }, i) => {
      const y = 254 + i * 36;
      const isClean = state === "clean";
      return (
        <g key={time}>
          <rect
            x="330"
            y={y}
            width="156"
            height="28"
            rx="8"
            fill={isClean ? "#046999" : "#1a2a3a"}
          />
          <text
            x="342"
            y={y + 18}
            fill={isClean ? "#ffffff" : "rgba(255,255,255,0.65)"}
            fontSize="12"
            fontWeight={isClean ? "700" : "400"}
          >
            {time}
          </text>
          {/* Right-hand status: red dot for affected, label for the clean point */}
          {state === "affected" && (
            <circle cx="472" cy={y + 14} r="4" fill="#c53030" />
          )}
          {isClean && (
            <text
              x="476"
              y={y + 18}
              fill="rgba(255,255,255,0.88)"
              fontSize="11"
              fontWeight="700"
              textAnchor="end"
            >
              Restore
            </text>
          )}
          {state === "normal" && (
            <circle cx="472" cy={y + 14} r="3" fill="rgba(255,255,255,0.35)" />
          )}
        </g>
      );
    })}
  </svg>
);
