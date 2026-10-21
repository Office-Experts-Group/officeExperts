// app/services/dashboards/(svgs)/AiChatSvg.jsx
// Decorative illustration for DashboardsAi: a plain-English question, an AI answer with
// a small comparison chart, and a real-time alert toast.
// IDs are prefixed "ac-" to avoid clashes with other SVGs on the page.

export const AiChatSvg = () => (
  <svg
    viewBox="0 0 460 440"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    focusable="false"
  >
    <defs>
      <filter id="ac-shadow" x="-10%" y="-10%" width="120%" height="130%">
        <feDropShadow
          dx="0"
          dy="6"
          stdDeviation="8"
          floodColor="#046999"
          floodOpacity="0.14"
        />
      </filter>
    </defs>

    {/* ── Panel ── */}
    <rect
      x="10"
      y="10"
      width="440"
      height="380"
      rx="12"
      fill="#fff"
      stroke="rgba(0,0,0,0.08)"
      filter="url(#ac-shadow)"
    />
    <path
      d="M10 52 V22 a12 12 0 0 1 12 -12 H438 a12 12 0 0 1 12 12 V52 Z"
      fill="#f7f8f9"
    />
    {/* Sparkle mark */}
    <path
      d="M34 22 L37 29 L44 31 L37 33 L34 40 L31 33 L24 31 L31 29 Z"
      fill="#046999"
    />
    <text x="54" y="35" fontSize="11" fontWeight="700" fill="#0d1b2a">
      Ask your data
    </text>
    <text x="436" y="35" fontSize="8" fill="#9a9da1" textAnchor="end">
      Sales model
    </text>

    {/* ── User question (right aligned) ── */}
    <rect x="170" y="70" width="262" height="48" rx="12" fill="#046999" />
    <text x="186" y="90" fontSize="10.5" fill="#fff">
      Why did gross margin drop in
    </text>
    <text x="186" y="106" fontSize="10.5" fill="#fff">
      Queensland last month?
    </text>

    {/* ── AI answer ── */}
    <rect x="28" y="134" width="300" height="200" rx="12" fill="#e8f4fa" />
    <text x="44" y="158" fontSize="10.5" fill="#0d1b2a">
      Freight costs rose 14% after the
    </text>
    <text x="44" y="174" fontSize="10.5" fill="#0d1b2a">
      Brisbane carrier change on 3 Sept.
    </text>
    <text x="44" y="190" fontSize="10.5" fill="#0d1b2a">
      Margin fell from 39.2% to 35.8%.
    </text>

    {/* Mini comparison chart: August vs September */}
    <rect x="44" y="204" width="268" height="100" rx="8" fill="#fff" />
    <line x1="60" y1="284" x2="296" y2="284" stroke="#f2f3f5" />
    {[
      { x: 84, h: 60, label: "Margin Aug", fill: "#046999", op: 0.45 },
      { x: 134, h: 52, label: "Margin Sep", fill: "#046999", op: 1 },
      { x: 204, h: 30, label: "Freight Aug", fill: "#c0392b", op: 0.45 },
      { x: 254, h: 46, label: "Freight Sep", fill: "#c0392b", op: 1 },
    ].map(({ x, h, label, fill, op }) => (
      <g key={label}>
        <rect
          x={x}
          y={284 - h}
          width="28"
          height={h}
          rx="3"
          fill={fill}
          opacity={op}
        />
        <text
          x={x + 14}
          y="297"
          fontSize="7"
          fill="#9a9da1"
          textAnchor="middle"
        >
          {label}
        </text>
      </g>
    ))}
    <text x="44" y="322" fontSize="8" fill="#4a5568">
      Source: Sales model · Freight table
    </text>

    {/* ── Input bar ── */}
    <rect
      x="28"
      y="348"
      width="404"
      height="28"
      rx="14"
      fill="#f7f8f9"
      stroke="rgba(0,0,0,0.08)"
    />
    <text x="46" y="366" fontSize="9.5" fill="#9a9da1">
      Ask a question…
    </text>

    {/* ── Real-time alert toast overlapping the panel ── */}
    <g filter="url(#ac-shadow)">
      <rect x="200" y="380" width="250" height="52" rx="8" fill="#111820" />
      <rect x="200" y="380" width="5" height="52" rx="2" fill="#c0392b" />
      <text x="218" y="402" fontSize="10" fontWeight="700" fill="#fff">
        Alert: stock cover below 10 days
      </text>
      <text x="218" y="419" fontSize="8.5" fill="rgba(255,255,255,0.65)">
        Sent to Teams · 9:42 am
      </text>
    </g>
  </svg>
);
