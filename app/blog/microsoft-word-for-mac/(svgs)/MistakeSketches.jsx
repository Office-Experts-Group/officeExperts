// /app/blog/microsoft-word-for-mac/(svgs)/MistakeSketches.jsx
// Five small "Avoid" vs "Do this" sketches for the common mistakes section.
// Avoid = slate, dashed frame, messy. Do this = accent, clean.
// Hard-coded hex. Tokens: $accent #046999, $accent-light #e8f4fa,
// $text-primary #0d1b2a, slate #64748b / #94a3b8 / #f1f5f9.
// Generic shapes only. Panel labels sit at least 18px below the panel top.

const SLATE = "#64748b";
const SLATE_LIGHT = "#94a3b8";
const SLATE_BG = "#f1f5f9";
const ACCENT = "#046999";
const ACCENT_BG = "#e8f4fa";
const INK = "#0d1b2a";

function Frame({ side, label }) {
  const avoid = side === "avoid";
  const x = avoid ? 10 : 190;
  return (
    <g>
      <rect
        x={x}
        y="10"
        width="160"
        height="150"
        rx="12"
        fill={avoid ? SLATE_BG : ACCENT_BG}
        stroke={avoid ? SLATE_LIGHT : ACCENT}
        strokeWidth="1.5"
        strokeDasharray={avoid ? "6 5" : undefined}
      />
      <text
        x={x + 14}
        y="32"
        fontSize="14"
        fontWeight="700"
        letterSpacing="0.8"
        fill={avoid ? SLATE : ACCENT}
      >
        {label}
      </text>
    </g>
  );
}

function Sketch({ id, title, desc, children }) {
  return (
    <svg
      viewBox="0 0 360 170"
      role="img"
      aria-labelledby={`${id}-title ${id}-desc`}
      style={{ width: "100%", height: "auto", display: "block" }}
    >
      <title id={`${id}-title`}>{title}</title>
      <desc id={`${id}-desc`}>{desc}</desc>
      <Frame side="avoid" label="AVOID" />
      <Frame side="do" label="DO THIS" />
      {children}
    </svg>
  );
}

// 1. Assuming a Windows file behaves the same: untested vs checked on both
export function SketchAssume() {
  return (
    <Sketch
      id="wfm-sk1"
      title="Assuming a file will behave the same"
      desc="An untested document with misaligned content, against a document checked on both a PC and a Mac."
    >
      <g transform="rotate(-4 90 95)">
        <rect
          x="52"
          y="52"
          width="76"
          height="90"
          rx="6"
          fill="#ffffff"
          stroke={SLATE}
          strokeWidth="1.5"
        />
        <rect x="62" y="64" width="40" height="6" rx="3" fill={SLATE_LIGHT} />
        <rect x="62" y="78" width="56" height="6" rx="3" fill={SLATE_LIGHT} />
        <rect x="70" y="92" width="48" height="6" rx="3" fill={SLATE_LIGHT} />
        <rect x="58" y="106" width="30" height="6" rx="3" fill={SLATE_LIGHT} />
      </g>
      <text x="136" y="70" fontSize="22" fontWeight="700" fill={SLATE}>
        ?
      </text>

      <rect
        x="200"
        y="62"
        width="62"
        height="70"
        rx="6"
        fill="#ffffff"
        stroke={ACCENT}
        strokeWidth="1.5"
      />
      <rect
        x="208"
        y="72"
        width="34"
        height="6"
        rx="3"
        fill={ACCENT}
        opacity="0.6"
      />
      <rect x="208" y="84" width="46" height="6" rx="3" fill="#b9d4e2" />
      <rect x="208" y="96" width="46" height="6" rx="3" fill="#b9d4e2" />
      <text
        x="231"
        y="124"
        textAnchor="middle"
        fontSize="14"
        fontWeight="600"
        fill={INK}
      >
        PC
      </text>

      <rect
        x="274"
        y="62"
        width="62"
        height="70"
        rx="6"
        fill="#ffffff"
        stroke={ACCENT}
        strokeWidth="1.5"
      />
      <rect
        x="282"
        y="72"
        width="34"
        height="6"
        rx="3"
        fill={ACCENT}
        opacity="0.6"
      />
      <rect x="282" y="84" width="46" height="6" rx="3" fill="#b9d4e2" />
      <rect x="282" y="96" width="46" height="6" rx="3" fill="#b9d4e2" />
      <text
        x="305"
        y="124"
        textAnchor="middle"
        fontSize="14"
        fontWeight="600"
        fill={INK}
      >
        Mac
      </text>

      <circle cx="268" cy="48" r="11" fill={ACCENT} />
      <polyline
        points="263,48 267,52 274,44"
        fill="none"
        stroke="#ffffff"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Sketch>
  );
}

// 2. Sending macro-enabled files to Mac users: .docm with gear vs clean .docx
export function SketchMacro() {
  const teeth = [0, 60, 120, 180, 240, 300];
  return (
    <Sketch
      id="wfm-sk2"
      title="Sending macro-enabled files to Mac users"
      desc="A macro-enabled .docm file carrying a gear, against a clean .docx file."
    >
      <rect
        x="40"
        y="54"
        width="70"
        height="86"
        rx="6"
        fill="#ffffff"
        stroke={SLATE}
        strokeWidth="1.5"
        strokeDasharray="4 3"
      />
      <rect x="50" y="64" width="34" height="6" rx="3" fill={SLATE_LIGHT} />
      <rect x="50" y="76" width="50" height="6" rx="3" fill={SLATE_LIGHT} />
      <g transform="translate(75 108)">
        <circle r="11" fill="none" stroke={SLATE} strokeWidth="2" />
        {teeth.map((deg) => (
          <rect
            key={deg}
            x="-2.5"
            y="-17"
            width="5"
            height="6"
            rx="1.5"
            fill={SLATE}
            transform={`rotate(${deg})`}
          />
        ))}
      </g>
      <rect x="116" y="112" width="44" height="22" rx="6" fill={SLATE} />
      <text
        x="138"
        y="128"
        textAnchor="middle"
        fontSize="14"
        fontWeight="600"
        fill="#ffffff"
      >
        .docm
      </text>

      <rect
        x="214"
        y="54"
        width="70"
        height="86"
        rx="6"
        fill="#ffffff"
        stroke={ACCENT}
        strokeWidth="1.5"
      />
      <rect
        x="224"
        y="64"
        width="34"
        height="6"
        rx="3"
        fill={ACCENT}
        opacity="0.6"
      />
      <rect x="224" y="76" width="50" height="6" rx="3" fill="#b9d4e2" />
      <rect x="224" y="88" width="50" height="6" rx="3" fill="#b9d4e2" />
      <rect x="224" y="100" width="38" height="6" rx="3" fill="#b9d4e2" />
      <rect x="290" y="112" width="44" height="22" rx="6" fill={ACCENT} />
      <text
        x="312"
        y="128"
        textAnchor="middle"
        fontSize="14"
        fontWeight="600"
        fill="#ffffff"
      >
        .docx
      </text>
    </Sketch>
  );
}

// 3. Using unusual fonts: jumbled sizes vs three standard, even samples
export function SketchFonts() {
  return (
    <Sketch
      id="wfm-sk3"
      title="Using unusual fonts"
      desc="Mismatched, jumbled letters against three evenly spaced standard font samples."
    >
      <text
        x="30"
        y="96"
        fontSize="34"
        fontWeight="700"
        fill={SLATE}
        transform="rotate(-8 40 90)"
      >
        A
      </text>
      <text
        x="62"
        y="118"
        fontSize="22"
        fontStyle="italic"
        fill={SLATE_LIGHT}
        transform="rotate(6 70 112)"
      >
        a
      </text>
      <text
        x="88"
        y="92"
        fontSize="28"
        fontFamily="serif"
        fill={SLATE}
        transform="rotate(-5 96 86)"
      >
        g
      </text>
      <text
        x="40"
        y="140"
        fontSize="18"
        fontFamily="monospace"
        fill={SLATE_LIGHT}
      >
        Aa?
      </text>

      <text x="206" y="88" fontSize="26" fontWeight="600" fill={INK}>
        Aa
      </text>
      <text x="262" y="88" fontSize="26" fontFamily="serif" fill={INK}>
        Aa
      </text>
      <text x="206" y="130" fontSize="26" fill={INK}>
        Aa
      </text>
      <rect x="262" y="112" width="60" height="22" rx="6" fill={ACCENT} />
      <text
        x="292"
        y="128"
        textAnchor="middle"
        fontSize="14"
        fontWeight="600"
        fill="#ffffff"
      >
        Same
      </text>
    </Sketch>
  );
}

// 4. Buying an add-in before checking Mac support: mismatched piece vs snapped in
export function SketchAddin() {
  return (
    <Sketch
      id="wfm-sk4"
      title="Buying an add-in before checking Mac support"
      desc="A puzzle piece that does not fit its slot, against a piece that snaps in with a tick."
    >
      <rect
        x="40"
        y="60"
        width="64"
        height="64"
        rx="8"
        fill="#ffffff"
        stroke={SLATE}
        strokeWidth="1.5"
        strokeDasharray="4 3"
      />
      <circle
        cx="104"
        cy="92"
        r="9"
        fill={SLATE_BG}
        stroke={SLATE}
        strokeWidth="1.5"
      />
      <g transform="rotate(14 128 100)">
        <rect x="108" y="84" width="40" height="40" rx="8" fill={SLATE_LIGHT} />
        <rect x="102" y="96" width="14" height="16" rx="7" fill={SLATE_LIGHT} />
      </g>
      <text
        x="86"
        y="146"
        textAnchor="middle"
        fontSize="14"
        fontWeight="600"
        fill={SLATE}
      >
        No Mac
      </text>

      <rect
        x="206"
        y="60"
        width="64"
        height="64"
        rx="8"
        fill="#ffffff"
        stroke={ACCENT}
        strokeWidth="1.5"
      />
      <rect x="270" y="84" width="40" height="40" rx="8" fill={ACCENT} />
      <rect x="264" y="96" width="14" height="16" rx="7" fill={ACCENT} />
      <circle cx="318" cy="68" r="11" fill={ACCENT} />
      <polyline
        points="313,68 317,72 324,64"
        fill="none"
        stroke="#ffffff"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <text
        x="272"
        y="146"
        textAnchor="middle"
        fontSize="14"
        fontWeight="600"
        fill={INK}
      >
        Checked first
      </text>
    </Sketch>
  );
}

// 5. Emailing copies instead of sharing a cloud link
export function SketchShare() {
  return (
    <Sketch
      id="wfm-sk5"
      title="Emailing copies instead of sharing a link"
      desc="A pile of emailed copies of the same file, against one cloud file shared with several people."
    >
      <g>
        <rect
          x="46"
          y="76"
          width="56"
          height="64"
          rx="6"
          fill="#ffffff"
          stroke={SLATE}
          strokeWidth="1.5"
          strokeDasharray="4 3"
          transform="rotate(-8 74 108)"
        />
        <rect
          x="60"
          y="68"
          width="56"
          height="64"
          rx="6"
          fill="#ffffff"
          stroke={SLATE}
          strokeWidth="1.5"
          strokeDasharray="4 3"
          transform="rotate(5 88 100)"
        />
        <rect
          x="74"
          y="62"
          width="56"
          height="64"
          rx="6"
          fill="#ffffff"
          stroke={SLATE}
          strokeWidth="1.5"
        />
        <rect x="82" y="74" width="30" height="6" rx="3" fill={SLATE_LIGHT} />
        <rect x="82" y="86" width="40" height="6" rx="3" fill={SLATE_LIGHT} />
      </g>

      <path
        d="M258 94a12 12 0 0 1 1-23 17 17 0 0 1 32 4 10 10 0 0 1 1 19z"
        fill="#ffffff"
        stroke={ACCENT}
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <line
        x1="262"
        y1="96"
        x2="226"
        y2="132"
        stroke={ACCENT}
        strokeWidth="2"
      />
      <line
        x1="275"
        y1="96"
        x2="275"
        y2="132"
        stroke={ACCENT}
        strokeWidth="2"
      />
      <line
        x1="288"
        y1="96"
        x2="324"
        y2="132"
        stroke={ACCENT}
        strokeWidth="2"
      />
      <circle cx="226" cy="138" r="9" fill={ACCENT} />
      <circle cx="275" cy="138" r="9" fill={ACCENT} />
      <circle cx="324" cy="138" r="9" fill={ACCENT} />
    </Sketch>
  );
}
