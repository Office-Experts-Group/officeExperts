// /app/blog/ultimate-guide-to-word-templates/(svgs)/HeroSvg.jsx
// Hero illustration: one master template feeding three documents.
// Theme values used (hard-coded, sits on the dark hero):
// $dark-surface #18232e, $accent #046999, $accent-on-dark #5bbce6, $white-75.

export default function HeroSvg() {
  return (
    <svg
      viewBox="0 0 520 440"
      role="img"
      aria-labelledby="uwt-hero-title uwt-hero-desc"
      style={{ width: "100%", height: "auto", display: "block" }}
    >
      <title id="uwt-hero-title">One master template, many documents</title>
      <desc id="uwt-hero-desc">
        A master template with a header band, logo, headings and body text
        passes its structure to three documents: a letter, a report and an
        invoice.
      </desc>

      <defs>
        <marker
          id="uwt-hero-arrow"
          viewBox="0 0 10 10"
          refX="8"
          refY="5"
          markerWidth="7"
          markerHeight="7"
          orient="auto-start-reverse"
        >
          <path
            d="M1 1 9 5 1 9"
            fill="none"
            stroke="#5bbce6"
            strokeWidth="1.8"
          />
        </marker>
      </defs>

      {/* soft guide rings */}
      <circle
        cx="140"
        cy="225"
        r="170"
        fill="none"
        stroke="#5bbce6"
        strokeOpacity="0.1"
      />
      <circle
        cx="140"
        cy="225"
        r="120"
        fill="none"
        stroke="#5bbce6"
        strokeOpacity="0.12"
      />

      {/* master template */}
      <rect
        x="40"
        y="90"
        width="200"
        height="270"
        rx="14"
        fill="#18232e"
        stroke="#5bbce6"
        strokeWidth="2"
      />
      <path
        d="M40 104a14 14 0 0 1 14-14h172a14 14 0 0 1 14 14v38H40v-38Z"
        fill="#046999"
      />
      <rect
        x="56"
        y="104"
        width="26"
        height="26"
        rx="6"
        fill="#ffffff"
        fillOpacity="0.9"
      />
      <rect
        x="92"
        y="108"
        width="90"
        height="8"
        rx="4"
        fill="#ffffff"
        fillOpacity="0.85"
      />
      <rect
        x="92"
        y="122"
        width="60"
        height="6"
        rx="3"
        fill="#ffffff"
        fillOpacity="0.5"
      />
      <rect x="56" y="162" width="110" height="12" rx="4" fill="#5bbce6" />
      <rect
        x="56"
        y="188"
        width="168"
        height="7"
        rx="3.5"
        fill="#ffffff"
        fillOpacity="0.35"
      />
      <rect
        x="56"
        y="204"
        width="156"
        height="7"
        rx="3.5"
        fill="#ffffff"
        fillOpacity="0.35"
      />
      <rect
        x="56"
        y="220"
        width="168"
        height="7"
        rx="3.5"
        fill="#ffffff"
        fillOpacity="0.35"
      />
      <rect
        x="56"
        y="246"
        width="80"
        height="10"
        rx="4"
        fill="#5bbce6"
        fillOpacity="0.7"
      />
      <rect
        x="56"
        y="268"
        width="168"
        height="7"
        rx="3.5"
        fill="#ffffff"
        fillOpacity="0.35"
      />
      <rect
        x="56"
        y="284"
        width="130"
        height="7"
        rx="3.5"
        fill="#ffffff"
        fillOpacity="0.35"
      />
      <rect
        x="56"
        y="316"
        width="168"
        height="26"
        rx="6"
        fill="none"
        stroke="#5bbce6"
        strokeOpacity="0.6"
        strokeDasharray="5 4"
      />
      <text
        x="140"
        y="333"
        textAnchor="middle"
        fill="#ffffff"
        fillOpacity="0.75"
        fontSize="14"
      >
        Content goes here
      </text>
      <text
        x="140"
        y="394"
        textAnchor="middle"
        fill="#ffffff"
        fontSize="16"
        fontWeight="700"
      >
        Master template
      </text>

      {/* connectors */}
      <path
        d="M244 190C290 190 300 70 334 70"
        fill="none"
        stroke="#5bbce6"
        strokeWidth="2"
        markerEnd="url(#uwt-hero-arrow)"
      />
      <path
        d="M244 225H334"
        fill="none"
        stroke="#5bbce6"
        strokeWidth="2"
        markerEnd="url(#uwt-hero-arrow)"
      />
      <path
        d="M244 260C290 260 300 360 334 360"
        fill="none"
        stroke="#5bbce6"
        strokeWidth="2"
        markerEnd="url(#uwt-hero-arrow)"
      />

      {/* three derived documents */}
      {[
        { y: 20, label: "Letter", lines: [96, 70] },
        { y: 165, label: "Report", lines: [96, 84] },
        { y: 310, label: "Invoice", lines: [96, 56] },
      ].map((d) => (
        <g key={d.label}>
          <rect
            x="340"
            y={d.y}
            width="160"
            height="100"
            rx="12"
            fill="#18232e"
            stroke="#ffffff"
            strokeOpacity="0.28"
          />
          <path
            d={`M340 ${d.y + 12}a12 12 0 0 1 12-12h136a12 12 0 0 1 12 12v12H340V${d.y + 12}Z`}
            fill="#046999"
          />
          <rect
            x="352"
            y={d.y + 7}
            width="10"
            height="10"
            rx="3"
            fill="#ffffff"
            fillOpacity="0.9"
          />
          <text
            x="420"
            y={d.y + 56}
            textAnchor="middle"
            fill="#ffffff"
            fontSize="16"
            fontWeight="700"
          >
            {d.label}
          </text>
          <rect
            x="358"
            y={d.y + 70}
            width={d.lines[0]}
            height="6"
            rx="3"
            fill="#ffffff"
            fillOpacity="0.3"
          />
          <rect
            x="358"
            y={d.y + 82}
            width={d.lines[1]}
            height="6"
            rx="3"
            fill="#ffffff"
            fillOpacity="0.3"
          />
        </g>
      ))}
    </svg>
  );
}
