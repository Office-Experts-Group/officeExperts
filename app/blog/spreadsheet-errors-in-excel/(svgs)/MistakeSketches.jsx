// /app/blog/spreadsheet-errors-in-excel/(svgs)/MistakeSketches.jsx
// Five small "Avoid" (slate, dashed, messy) vs "Do this" (accent, clean) sketches.
// Hex values map to tokens: #046999 $accent, #e8f4fa $accent-light,
// #0d1b2a $text-primary, #4a5568 $text-secondary, #f7f8f9 $light-bg,
// #e3e8ec $line, #94a3b8 slate (avoid frames), #c0392b $replace-x.

const SLATE = "#94a3b8";
const INK = "#0d1b2a";
const ACCENT = "#046999";
const FLAG = "#c0392b";

function Frame({ id, title, desc, className, children }) {
  return (
    <svg
      className={className}
      viewBox="0 0 290 130"
      role="img"
      aria-labelledby={`${id}-title ${id}-desc`}
      fontFamily="aptos"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title id={`${id}-title`}>{title}</title>
      <desc id={`${id}-desc`}>{desc}</desc>
      <rect
        x="6"
        y="6"
        width="132"
        height="118"
        rx="10"
        fill="#f7f8f9"
        stroke={SLATE}
        strokeWidth="1.5"
        strokeDasharray="6 5"
      />
      <rect
        x="152"
        y="6"
        width="132"
        height="118"
        rx="10"
        fill="#e8f4fa"
        stroke={ACCENT}
        strokeOpacity="0.4"
        strokeWidth="1.5"
      />
      <text x="20" y="28" fontSize="14" fontWeight="700" fill="#64748b">
        Avoid
      </text>
      <text x="166" y="28" fontSize="14" fontWeight="700" fill={ACCENT}>
        Do this
      </text>
      {children}
    </svg>
  );
}

export function SketchHardCoded({ className }) {
  return (
    <Frame
      id="sse-sk-hard"
      className={className}
      title="Typed numbers inside formulas"
      desc="Left: a formula with a mystery 1.1 typed inside it. Right: the formula points at a labelled Rate cell."
    >
      <rect
        x="16"
        y="46"
        width="112"
        height="30"
        rx="4"
        fill="#ffffff"
        stroke={SLATE}
        strokeDasharray="4 3"
      />
      <text x="24" y="66" fontSize="15" fill={INK}>
        =B2*1.1
      </text>
      <text x="22" y="104" fontSize="14" fill={FLAG}>
        why 1.1?
      </text>

      <rect
        x="162"
        y="46"
        width="112"
        height="30"
        rx="4"
        fill="#ffffff"
        stroke={ACCENT}
      />
      <text x="168" y="66" fontSize="14" fill={INK}>
        =B2*(1+Rate)
      </text>
      <rect
        x="162"
        y="86"
        width="112"
        height="28"
        rx="4"
        fill="#ffffff"
        stroke={ACCENT}
      />
      <rect x="162" y="86" width="52" height="28" rx="4" fill={ACCENT} />
      <text x="170" y="105" fontSize="14" fontWeight="700" fill="#ffffff">
        Rate
      </text>
      <text x="224" y="105" fontSize="14" fill={INK}>
        10%
      </text>
      <path d="M218 86V80" stroke={ACCENT} strokeWidth="1.5" />
    </Frame>
  );
}

export function SketchVersions({ className }) {
  return (
    <Frame
      id="sse-sk-ver"
      className={className}
      title="Copies named final, final2 and FINAL_v7"
      desc="Left: three copies of the same budget with confusing names. Right: one file with a version log."
    >
      {[
        { x: 12, y: 38, t: "Budget_final" },
        { x: 20, y: 64, t: "Budget_final2" },
        { x: 14, y: 90, t: "FINAL_v7" },
      ].map((f) => (
        <g key={f.t}>
          <rect
            x={f.x}
            y={f.y}
            width="114"
            height="22"
            rx="4"
            fill="#ffffff"
            stroke={SLATE}
            strokeDasharray="4 3"
          />
          <text x={f.x + 8} y={f.y + 16} fontSize="14" fill={INK}>
            {f.t}
          </text>
        </g>
      ))}

      <rect
        x="162"
        y="40"
        width="112"
        height="28"
        rx="6"
        fill="#ffffff"
        stroke={ACCENT}
      />
      <path
        d="M172 49h8M172 54h8M172 59h5"
        stroke={ACCENT}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <text x="188" y="59" fontSize="14" fill={INK}>
        Budget
      </text>
      <rect
        x="162"
        y="78"
        width="112"
        height="38"
        rx="6"
        fill="#ffffff"
        stroke={ACCENT}
        strokeOpacity="0.5"
      />
      <text x="170" y="94" fontSize="14" fontWeight="700" fill={ACCENT}>
        Version log
      </text>
      <path
        d="M170 104h60M170 109h40"
        stroke={SLATE}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M252 98l4 4 8-9"
        stroke={ACCENT}
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Frame>
  );
}

export function SketchLayout({ className }) {
  return (
    <Frame
      id="sse-sk-layout"
      className={className}
      title="Merged cells and blank rows"
      desc="Left: a table with a merged heading and a blank row. Right: a tidy table with one header row and one record per row."
    >
      <rect
        x="16"
        y="40"
        width="112"
        height="18"
        rx="3"
        fill="#e2e8f0"
        stroke={SLATE}
        strokeDasharray="4 3"
      />
      <path d="M72 40v18" stroke="none" />
      <g stroke={SLATE} strokeDasharray="4 3" fill="#ffffff">
        <rect x="16" y="62" width="56" height="16" />
        <rect x="72" y="62" width="56" height="16" />
        <rect x="16" y="94" width="56" height="16" />
        <rect x="72" y="94" width="56" height="16" />
      </g>
      <rect
        x="14"
        y="78"
        width="116"
        height="16"
        rx="3"
        fill="none"
        stroke={FLAG}
        strokeDasharray="3 3"
      />
      <path
        d="M26 70h28M82 70h22M26 102h18M82 102h34"
        stroke={SLATE}
        strokeWidth="2"
        strokeLinecap="round"
      />

      <rect x="162" y="40" width="112" height="18" rx="3" fill={ACCENT} />
      <path
        d="M170 49h22M204 49h22M238 49h22"
        stroke="#ffffff"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <g stroke={ACCENT} strokeOpacity="0.4" fill="#ffffff">
        <rect x="162" y="58" width="112" height="18" />
        <rect x="162" y="76" width="112" height="18" />
        <rect x="162" y="94" width="112" height="18" />
        <path d="M199 58v54M236 58v54" fill="none" />
      </g>
      <path
        d="M168 67h24M205 67h20M242 67h26M168 85h18M205 85h24M242 85h16M168 103h22M205 103h18M242 103h28"
        stroke={SLATE}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </Frame>
  );
}

export function SketchLocks({ className }) {
  return (
    <Frame
      id="sse-sk-lock"
      className={className}
      title="Leaving every cell unlocked"
      desc="Left: a formula cell typed over with a fixed number. Right: a locked formula cell above an open input cell."
    >
      <rect
        x="16"
        y="40"
        width="112"
        height="28"
        rx="4"
        fill="#ffffff"
        stroke={SLATE}
        strokeDasharray="4 3"
      />
      <text x="22" y="59" fontSize="14" fill="#94a3b8">
        =SUM(B2:B9)
      </text>
      <path d="M20 54h104" stroke={FLAG} strokeWidth="1.5" />
      <rect
        x="16"
        y="78"
        width="112"
        height="30"
        rx="4"
        fill="#fff5f5"
        stroke={FLAG}
      />
      <text x="24" y="99" fontSize="15" fill={INK}>
        4,200
      </text>
      <path
        d="M104 100l12-12 4 4-12 12-5 1z"
        fill="none"
        stroke={FLAG}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />

      <rect
        x="162"
        y="40"
        width="112"
        height="28"
        rx="4"
        fill="#ffffff"
        stroke={ACCENT}
      />
      <text x="168" y="59" fontSize="14" fill={INK}>
        =SUM(B2:B9)
      </text>
      <g
        transform="translate(254 45)"
        fill="none"
        stroke={ACCENT}
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="0" y="7" width="14" height="10" rx="2" fill="#e8f4fa" />
        <path d="M3 7V5a4 4 0 018 0v2" />
      </g>
      <rect
        x="162"
        y="78"
        width="112"
        height="30"
        rx="4"
        fill="#fffbe6"
        stroke={ACCENT}
      />
      <text x="168" y="98" fontSize="14" fill={INK}>
        Input cell
      </text>
    </Frame>
  );
}

export function SketchOwner({ className }) {
  return (
    <Frame
      id="sse-sk-owner"
      className={className}
      title="One person holds all the knowledge"
      desc="Left: a single person surrounded by question marks. Right: two people and a notes page that explains the workbook."
    >
      <g fill="none" stroke={SLATE} strokeWidth="2" strokeLinecap="round">
        <circle cx="72" cy="66" r="13" strokeDasharray="4 3" />
        <path d="M44 112c2-16 13-25 28-25s26 9 28 25" strokeDasharray="4 3" />
      </g>
      <text x="100" y="50" fontSize="16" fontWeight="700" fill={FLAG}>
        ?
      </text>
      <text x="24" y="52" fontSize="16" fontWeight="700" fill={FLAG}>
        ?
      </text>

      <g fill="none" stroke={ACCENT} strokeWidth="2" strokeLinecap="round">
        <circle cx="178" cy="58" r="9" />
        <path d="M160 92c1-11 8-17 18-17s17 6 18 17" />
        <circle cx="262" cy="58" r="9" />
        <path d="M244 92c1-11 8-17 18-17s17 6 18 17" />
      </g>
      <rect
        x="196"
        y="54"
        width="48"
        height="64"
        rx="5"
        fill="#ffffff"
        stroke={ACCENT}
      />
      <text x="204" y="72" fontSize="14" fontWeight="700" fill={ACCENT}>
        Notes
      </text>
      <path
        d="M204 82h32M204 91h26M204 100h30"
        stroke={SLATE}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </Frame>
  );
}
