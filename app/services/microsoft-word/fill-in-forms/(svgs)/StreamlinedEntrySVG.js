// app/fill-in-forms/(svgs)/StreamlinedEntrySVG.js
//
// Tree-style diagram: one person enters data once into a simplified form,
// which then branches out to multiple destinations (a Word document, a
// spreadsheet and a database). Distinct from FormFieldsMockSVG.js, which
// shows a detailed, filled-in form — this illustrates the "one entry, many
// outputs" idea behind the page's data-extraction content rather than
// repeating the same mock form. Colours are hardcoded to match the values
// behind the globals.scss tokens ($accent, $text-primary, $text-secondary,
// $grayBGC, $border) since this is a self-contained illustration rather
// than an icon meant to inherit currentColor.

export const StreamlinedEntrySVG = () => (
  <svg
    viewBox="0 0 520 420"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="se-accentGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#046999" />
        <stop offset="100%" stopColor="#0a85bf" />
      </linearGradient>
    </defs>

    {/* ── Person, entering data once ── */}
    <g>
      <circle cx="52" cy="150" r="20" fill="#e8f4fa" />
      <circle cx="52" cy="143" r="8" fill="#046999" />
      <path d="M36 168c0-9 7-16 16-16s16 7 16 16" fill="#046999" />
      <text
        x="52"
        y="196"
        textAnchor="middle"
        fill="#4a5568"
        fontSize="10"
        fontWeight="700"
      >
        Enters data
      </text>
      <text x="52" y="209" textAnchor="middle" fill="#a0a2a6" fontSize="9">
        once
      </text>
    </g>

    {/* ── Connector: person to form ── */}
    <path
      d="M84 150 C 110 150, 120 150, 148 150"
      fill="none"
      stroke="#046999"
      strokeWidth="1.75"
      strokeDasharray="1 7"
      strokeLinecap="round"
    />

    {/* ── Simplified form silhouette ── */}
    <g>
      <rect
        x="150"
        y="96"
        width="140"
        height="108"
        rx="10"
        fill="#ffffff"
        stroke="rgba(0,0,0,0.11)"
        strokeWidth="1.25"
      />
      <rect x="150" y="96" width="140" height="24" rx="10" fill="#f2f3f5" />
      <rect x="150" y="110" width="140" height="10" fill="#f2f3f5" />
      <circle cx="164" cy="108" r="3" fill="rgba(0,0,0,0.16)" />
      <circle cx="174" cy="108" r="3" fill="rgba(0,0,0,0.16)" />

      <rect
        x="164"
        y="134"
        width="112"
        height="16"
        rx="4"
        fill="#ffffff"
        stroke="#046999"
        strokeWidth="1.4"
      />
      <rect
        x="164"
        y="158"
        width="112"
        height="16"
        rx="4"
        fill="#ffffff"
        stroke="rgba(0,0,0,0.11)"
        strokeWidth="1.25"
      />
      <rect
        x="164"
        y="182"
        width="112"
        height="16"
        rx="4"
        fill="#ffffff"
        stroke="rgba(0,0,0,0.11)"
        strokeWidth="1.25"
      />
    </g>

    {/* ── Branching connectors: form to three destinations ── */}
    <path
      d="M291 130 C 340 100, 380 78, 420 62"
      fill="none"
      stroke="#046999"
      strokeWidth="1.75"
      strokeDasharray="1 7"
      strokeLinecap="round"
      opacity="0.6"
    />
    <path
      d="M291 150 C 350 150, 380 150, 420 150"
      fill="none"
      stroke="#046999"
      strokeWidth="1.75"
      strokeDasharray="1 7"
      strokeLinecap="round"
      opacity="0.6"
    />
    <path
      d="M291 170 C 340 210, 380 240, 420 258"
      fill="none"
      stroke="#046999"
      strokeWidth="1.75"
      strokeDasharray="1 7"
      strokeLinecap="round"
      opacity="0.6"
    />

    {/* ── Destination 1: Word document ── */}
    <g>
      <rect
        x="420"
        y="32"
        width="60"
        height="60"
        rx="10"
        fill="#ffffff"
        stroke="rgba(0,0,0,0.08)"
        strokeWidth="1.25"
      />
      <rect
        x="436"
        y="50"
        width="28"
        height="24"
        rx="2"
        fill="none"
        stroke="#046999"
        strokeWidth="1.4"
      />
      <path
        d="M441 58h18M441 64h18M441 70h11"
        stroke="#046999"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <text x="450" y="106" textAnchor="middle" fill="#4a5568" fontSize="9">
        Word document
      </text>
    </g>

    {/* ── Destination 2: spreadsheet ── */}
    <g>
      <rect x="420" y="120" width="60" height="60" rx="10" fill="#e8f4fa" />
      <rect
        x="435"
        y="135"
        width="30"
        height="30"
        rx="2"
        fill="none"
        stroke="#046999"
        strokeWidth="1.4"
      />
      <path
        d="M435 145h30M435 155h30M445 135v30M455 135v30"
        stroke="#046999"
        strokeWidth="1"
        opacity="0.7"
      />
      <text x="450" y="194" textAnchor="middle" fill="#4a5568" fontSize="9">
        Spreadsheet
      </text>
    </g>

    {/* ── Destination 3: database ── */}
    <g>
      <rect
        x="420"
        y="208"
        width="60"
        height="60"
        rx="10"
        fill="#ffffff"
        stroke="rgba(0,0,0,0.08)"
        strokeWidth="1.25"
      />
      <ellipse
        cx="450"
        cy="228"
        rx="14"
        ry="5"
        fill="none"
        stroke="#046999"
        strokeWidth="1.4"
      />
      <path
        d="M436 228v14c0 2.76 6.27 5 14 5s14-2.24 14-5v-14"
        fill="none"
        stroke="#046999"
        strokeWidth="1.4"
      />
      <path
        d="M436 235c0 2.76 6.27 5 14 5s14-2.24 14-5"
        fill="none"
        stroke="#046999"
        strokeWidth="1.4"
      />
      <text x="450" y="282" textAnchor="middle" fill="#4a5568" fontSize="9">
        Database
      </text>
    </g>

    {/* ── Result callout beneath the form ── */}
    <rect
      x="150"
      y="330"
      width="200"
      height="52"
      rx="10"
      fill="url(#se-accentGrad)"
    />
    <path
      d="M170 356l8 8 14-17"
      stroke="#ffffff"
      strokeWidth="2.25"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <text x="200" y="352" fill="#ffffff" fontSize="10.5" fontWeight="700">
      One entry point,
    </text>
    <text x="200" y="366" fill="rgba(255,255,255,0.8)" fontSize="9.5">
      every destination stays in sync
    </text>

    {/* ── Connector: form down to callout ── */}
    <path
      d="M220 204 L220 330"
      fill="none"
      stroke="#046999"
      strokeWidth="1.75"
      strokeDasharray="1 7"
      strokeLinecap="round"
      opacity="0.5"
    />

    {/* ── Decorative accent dots ── */}
    <circle cx="30" cy="330" r="4" fill="#046999" opacity="0.16" />
    <circle cx="500" cy="330" r="5" fill="#046999" opacity="0.14" />
    <circle cx="500" cy="16" r="4" fill="#046999" opacity="0.16" />
  </svg>
);
