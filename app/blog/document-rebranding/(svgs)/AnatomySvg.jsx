// /app/blog/document-rebranding/(svgs)/AnatomySvg.jsx
// Hard-coded theme hex (token names): $accent #046999, $accent-light #e8f4fa,
// $text-primary #0d1b2a, $text-secondary #4a5568.
// Anatomy of a well-built branded Word template, with numbered pins.

function Pin({ cx, cy, n }) {
  return (
    <g>
      <circle
        cx={cx}
        cy={cy}
        r="13"
        fill="#046999"
        stroke="#ffffff"
        strokeWidth="2"
      />
      <text
        x={cx}
        y={cy + 5}
        textAnchor="middle"
        fontSize="14"
        fontWeight="700"
        fill="#ffffff"
      >
        {n}
      </text>
    </g>
  );
}

function Callout({ x, y, line1, line2 }) {
  return (
    <g>
      <rect
        x={x}
        y={y}
        width="150"
        height="64"
        rx="10"
        fill="#e8f4fa"
        stroke="#046999"
      />
      <text x={x + 12} y={y + 26} fontSize="15" fontWeight="700" fill="#0d1b2a">
        {line1}
      </text>
      <text x={x + 12} y={y + 46} fontSize="15" fill="#4a5568">
        {line2}
      </text>
    </g>
  );
}

export default function AnatomySvg() {
  return (
    <svg
      viewBox="0 0 560 440"
      role="img"
      aria-labelledby="drb-anatomy-title drb-anatomy-desc"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "100%", height: "auto" }}
    >
      <title id="drb-anatomy-title">
        Anatomy of a well-built branded template
      </title>
      <desc id="drb-anatomy-desc">
        A Word page with five numbered parts: the logo in the header, theme
        colours and fonts, heading styles, a Quick Part block for cover details,
        and footer fields.
      </desc>

      {/* Page */}
      <rect
        x="190"
        y="20"
        width="180"
        height="400"
        rx="10"
        fill="#ffffff"
        stroke="#cbd5e1"
      />
      <circle cx="215" cy="50" r="10" fill="#046999" />
      <rect x="232" y="45" width="60" height="10" rx="3" fill="#94a3b8" />
      <rect x="190" y="70" width="180" height="8" fill="#046999" />
      <rect x="206" y="118" width="120" height="14" rx="3" fill="#0d1b2a" />
      <rect x="206" y="146" width="148" height="8" rx="3" fill="#cbd5e1" />
      <rect x="206" y="162" width="136" height="8" rx="3" fill="#cbd5e1" />
      <rect x="206" y="178" width="148" height="8" rx="3" fill="#cbd5e1" />
      <rect x="206" y="204" width="90" height="11" rx="3" fill="#046999" />
      <rect x="206" y="226" width="148" height="8" rx="3" fill="#cbd5e1" />
      <rect x="206" y="242" width="110" height="8" rx="3" fill="#cbd5e1" />
      <rect
        x="206"
        y="270"
        width="148"
        height="64"
        rx="8"
        fill="#e8f4fa"
        stroke="#046999"
      />
      <rect x="218" y="284" width="90" height="8" rx="3" fill="#046999" />
      <rect x="218" y="302" width="120" height="8" rx="3" fill="#94a3b8" />
      <rect x="206" y="372" width="148" height="1" fill="#cbd5e1" />
      <rect x="206" y="388" width="70" height="8" rx="3" fill="#94a3b8" />
      <rect x="330" y="388" width="24" height="8" rx="3" fill="#94a3b8" />

      {/* Leader lines */}
      <path d="M158 50 H177" stroke="#046999" strokeWidth="2" />
      <path d="M158 125 H177" stroke="#046999" strokeWidth="2" />
      <path d="M158 392 H177" stroke="#046999" strokeWidth="2" />
      <path d="M383 74 H402" stroke="#046999" strokeWidth="2" />
      <path d="M383 302 H402" stroke="#046999" strokeWidth="2" />

      {/* Left callouts */}
      <Callout x={8} y={18} line1="Logo in header" line2="swapped once" />
      <Callout x={8} y={93} line1="Heading styles" line2="set once, reused" />
      <Callout x={8} y={360} line1="Footer fields" line2="update everywhere" />
      {/* Right callouts */}
      <Callout x={402} y={42} line1="Theme colours" line2="and fonts" />
      <Callout
        x={402}
        y={270}
        line1="Quick Part block"
        line2="for cover details"
      />

      {/* Pins */}
      <Pin cx={190} cy={50} n="1" />
      <Pin cx={370} cy={74} n="2" />
      <Pin cx={190} cy={125} n="3" />
      <Pin cx={370} cy={302} n="4" />
      <Pin cx={190} cy={392} n="5" />
    </svg>
  );
}
