// /app/services/microsoft-power-platform/microsoft-power-bi/(svgs)/PbsvServiceArt.jsx
// Spot illustrations for the six service tiles. Each takes a `tone` so it is
// drawn for the tile it sits on: "light" (white or $accent-light tiles),
// "dark" ($dark-bg or $dark-surface tiles) or "accent" ($accent tiles).
// Hex values and the tokens they match:
//   light:  #ffffff $white · #d4d6d9 $line-strong · #0d1b2a $text-primary
//           #c6e3f1 tint of $accent · #046999 $accent · #6fc3e8 $accent-on-dark
//           #e8f4fa $accent-light
//   dark:   #18232e $dark-surface · #33475b (line on dark) · #3d5268 (muted bar)
//           #6fc3e8 $accent-on-dark · #046999 $accent · #223647 (raised surface)
//   accent: #034e72 $accent-dark · #5fa3c0 (line on accent) · #6fa9c4 (muted bar)
//           #ffffff $white · #6fc3e8 $accent-on-dark · #0b7cae (raised surface)

const TONES = {
  light: {
    s: "#ffffff",
    l: "#d4d6d9",
    i: "#0d1b2a",
    m: "#c6e3f1",
    a: "#046999",
    b: "#6fc3e8",
    t: "#e8f4fa",
  },
  dark: {
    s: "#18232e",
    l: "#33475b",
    i: "#ffffff",
    m: "#3d5268",
    a: "#6fc3e8",
    b: "#046999",
    t: "#223647",
  },
  accent: {
    s: "#034e72",
    l: "#5fa3c0",
    i: "#ffffff",
    m: "#6fa9c4",
    a: "#ffffff",
    b: "#6fc3e8",
    t: "#0b7cae",
  },
};

const SVG_PROPS = {
  viewBox: "0 0 160 120",
  "aria-hidden": "true",
  focusable: "false",
};

export function PbsvDashboardArt({ tone = "dark" }) {
  const p = TONES[tone];
  return (
    <svg {...SVG_PROPS}>
      <rect
        x="8"
        y="8"
        width="144"
        height="104"
        rx="10"
        fill={p.s}
        stroke={p.l}
        strokeWidth="1.500"
      />
      <circle cx="20" cy="20" r="3" fill={p.b} />
      <circle cx="30" cy="20" r="3" fill={p.m} />
      <circle cx="40" cy="20" r="3" fill={p.m} />
      <rect x="20" y="30" width="34" height="20" rx="4" fill={p.t} />
      <rect x="62" y="30" width="34" height="20" rx="4" fill={p.t} />
      <rect x="104" y="30" width="34" height="20" rx="4" fill={p.a} />
      <rect x="26" y="37" width="14" height="3" rx="1.500" fill={p.m} />
      <rect x="68" y="37" width="14" height="3" rx="1.500" fill={p.m} />
      <rect x="22" y="80" width="10" height="18" rx="2" fill={p.b} />
      <rect x="36" y="68" width="10" height="30" rx="2" fill={p.a} />
      <rect x="50" y="74" width="10" height="24" rx="2" fill={p.b} />
      <rect x="64" y="60" width="10" height="38" rx="2" fill={p.a} />
      <rect x="78" y="70" width="10" height="28" rx="2" fill={p.b} />
      <line x1="18" y1="98" x2="92" y2="98" stroke={p.l} />
      <circle
        cx="120"
        cy="78"
        r="16"
        fill="none"
        stroke={p.t}
        strokeWidth="8"
      />
      <circle
        cx="120"
        cy="78"
        r="16"
        fill="none"
        stroke={p.a}
        strokeWidth="8"
        strokeDasharray="64 37"
        transform="rotate(-90 120 78)"
      />
    </svg>
  );
}

export function PbsvModelArt({ tone = "light" }) {
  const p = TONES[tone];
  const table = (x, y, key) => (
    <g key={key}>
      <rect
        x={x}
        y={y}
        width="36"
        height="26"
        rx="5"
        fill={p.s}
        stroke={p.l}
        strokeWidth="1.500"
      />
      <rect x={x} y={y} width="36" height="8" rx="4" fill={p.b} />
      <rect x={x + 6} y={y + 13} width="24" height="3" rx="1.500" fill={p.m} />
      <rect x={x + 6} y={y + 19} width="16" height="3" rx="1.500" fill={p.m} />
    </g>
  );
  return (
    <svg {...SVG_PROPS}>
      <g stroke={p.l} strokeWidth="2">
        <path d="M44 33L66 52" />
        <path d="M116 33L94 52" />
        <path d="M44 87L66 68" />
        <path d="M116 87L94 68" />
      </g>
      <rect x="62" y="40" width="36" height="40" rx="6" fill={p.a} />
      <rect x="68" y="48" width="24" height="4" rx="2" fill={p.s} />
      <rect
        x="68"
        y="57"
        width="24"
        height="4"
        rx="2"
        fill={p.s}
        opacity="0.7"
      />
      <rect
        x="68"
        y="66"
        width="16"
        height="4"
        rx="2"
        fill={p.s}
        opacity="0.5"
      />
      {table(10, 8, "a")}
      {table(114, 8, "b")}
      {table(10, 86, "c")}
      {table(114, 86, "d")}
    </svg>
  );
}

export function PbsvLiveServiceArt({ tone = "accent" }) {
  const p = TONES[tone];
  return (
    <svg {...SVG_PROPS}>
      <rect
        x="8"
        y="14"
        width="144"
        height="92"
        rx="10"
        fill={p.s}
        stroke={p.l}
        strokeWidth="1.500"
      />
      <line x1="20" y1="82" x2="140" y2="82" stroke={p.l} />
      <line
        x1="20"
        y1="58"
        x2="140"
        y2="58"
        stroke={p.l}
        strokeDasharray="2 6"
      />
      <path
        d="M20 76L42 76L54 48L72 90L90 58L104 70L124 40"
        fill="none"
        stroke={p.i}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M124 40L136 30"
        fill="none"
        stroke={p.b}
        strokeWidth="3"
        strokeLinecap="round"
        strokeDasharray="3 5"
      />
      <circle cx="124" cy="40" r="10" fill={p.b} opacity="0.3" />
      <circle cx="124" cy="40" r="5" fill={p.b} />
      <polygon points="30,26 24,38 30,38 27,48 36,34 30,34" fill={p.b} />
      <rect x="46" y="24" width="30" height="8" rx="4" fill={p.t} />
    </svg>
  );
}

export function PbsvSecurityArt({ tone = "light" }) {
  const p = TONES[tone];
  const row = (y, on, key) => (
    <g key={key}>
      <rect
        x="8"
        y={y}
        width="48"
        height="20"
        rx="10"
        fill={on ? p.a : p.t}
        stroke={on ? p.a : p.l}
      />
      <circle cx="19" cy={y + 10} r="5" fill={on ? p.s : p.m} />
      <rect
        x="28"
        y={y + 7}
        width="20"
        height="6"
        rx="3"
        fill={on ? p.s : p.m}
      />
    </g>
  );
  return (
    <svg {...SVG_PROPS}>
      {row(22, false, "r1")}
      {row(50, true, "r2")}
      {row(78, false, "r3")}
      <path d="M56 60H78" stroke={p.l} strokeWidth="2" strokeDasharray="3 4" />
      <path
        d="M118 12L148 24V54C148 76 136 94 118 104C100 94 88 76 88 54V24Z"
        fill={p.a}
      />
      <path
        d="M118 22L140 31V54C140 70 131 84 118 93C105 84 96 70 96 54V31Z"
        fill="none"
        stroke={p.s}
        strokeOpacity="0.5"
        strokeWidth="1.500"
      />
      <rect x="108" y="50" width="20" height="16" rx="3" fill={p.s} />
      <path
        d="M112 50v-5a6 6 0 0 1 12 0v5"
        fill="none"
        stroke={p.s}
        strokeWidth="3"
      />
      <circle cx="118" cy="58" r="2.500" fill={p.a} />
    </svg>
  );
}

export function PbsvReviewArt({ tone = "light" }) {
  const p = TONES[tone];
  return (
    <svg {...SVG_PROPS}>
      <rect x="10" y="64" width="18" height="34" rx="3" fill={p.m} />
      <rect x="34" y="46" width="18" height="52" rx="3" fill={p.m} />
      <rect x="58" y="56" width="18" height="42" rx="3" fill={p.m} />
      <rect x="82" y="30" width="18" height="68" rx="3" fill={p.m} />
      <line x1="6" y1="98" x2="112" y2="98" stroke={p.l} strokeWidth="2" />
      <circle
        cx="94"
        cy="52"
        r="26"
        fill={p.s}
        fillOpacity="0.94"
        stroke={p.a}
        strokeWidth="5"
      />
      <path
        d="M82 52l9 9 16-19"
        fill="none"
        stroke={p.a}
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M113 71l22 22"
        stroke={p.a}
        strokeWidth="9"
        strokeLinecap="round"
      />
      <path d="M130 20l5 5-5 5-5-5z" fill={p.b} />
      <circle cx="144" cy="40" r="3" fill={p.b} />
    </svg>
  );
}

export function PbsvTrainingArt({ tone = "dark" }) {
  const p = TONES[tone];
  const head = (x, key) => (
    <g key={key}>
      <circle cx={x} cy="86" r="8" fill={p.b} />
      <path d={`M${x - 14} 112c0-11 6-17 14-17s14 6 14 17z`} fill={p.a} />
    </g>
  );
  return (
    <svg {...SVG_PROPS}>
      <rect
        x="22"
        y="8"
        width="116"
        height="62"
        rx="8"
        fill={p.s}
        stroke={p.l}
        strokeWidth="1.500"
      />
      <rect x="34" y="42" width="12" height="20" rx="2" fill={p.b} />
      <rect x="52" y="30" width="12" height="32" rx="2" fill={p.a} />
      <rect x="70" y="36" width="12" height="26" rx="2" fill={p.b} />
      <path
        d="M92 52l12-16 10 8 14-20"
        fill="none"
        stroke={p.i}
        strokeWidth="2.500"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <line x1="80" y1="70" x2="80" y2="76" stroke={p.l} strokeWidth="2" />
      {head(40, "h1")}
      {head(80, "h2")}
      {head(120, "h3")}
    </svg>
  );
}
