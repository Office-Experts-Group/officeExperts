// /app/blog/microsoft-word-for-mac/(svgs)/TemplateAnatomySvg.jsx
// Anatomy: a Windows-built template with five numbered pins marking where it
// usually breaks on Mac. Pins 1, 3, 5 on the left, 2 and 4 on the right.
// Hard-coded hex (light panel). Tokens: $accent #046999, $accent-light #e8f4fa,
// $text-primary #0d1b2a, $text-secondary #4a5568.
// Callout boxes are 96 tall: title baseline +28, lines +52 and +72.

const LEFT = [
  {
    n: 1,
    pinY: 56,
    y: 8,
    title: "Custom ribbon tab",
    lines: ["Ribbon XML support", "differs on Mac"],
  },
  {
    n: 3,
    pinY: 204,
    y: 156,
    title: "Content controls",
    lines: ["Some ActiveX and form", "controls are missing"],
  },
  {
    n: 5,
    pinY: 405,
    y: 357,
    title: "Mail merge fields",
    lines: ["Basic on Mac, with", "fewer data sources"],
  },
];

const RIGHT = [
  {
    n: 2,
    pinY: 132,
    y: 84,
    title: "Macro button",
    lines: ["VBA runs with limits", "and sandboxing"],
  },
  {
    n: 4,
    pinY: 315,
    y: 267,
    title: "Add-in task pane",
    lines: ["Many add-ins have no", "Mac version"],
  },
];

function Callout({ x, y, title, lines }) {
  return (
    <g>
      <rect
        x={x}
        y={y}
        width="200"
        height="96"
        rx="12"
        fill="#ffffff"
        stroke="#cfdbe3"
        strokeWidth="1.5"
      />
      <text x={x + 14} y={y + 28} fontSize="15" fontWeight="700" fill="#0d1b2a">
        {title}
      </text>
      <text x={x + 14} y={y + 52} fontSize="14" fill="#4a5568">
        {lines[0]}
      </text>
      <text x={x + 14} y={y + 72} fontSize="14" fill="#4a5568">
        {lines[1]}
      </text>
    </g>
  );
}

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

export default function TemplateAnatomySvg() {
  return (
    <svg
      viewBox="0 0 720 530"
      role="img"
      aria-labelledby="wfm-anatomy-title wfm-anatomy-desc"
      style={{ width: "100%", height: "auto", display: "block" }}
    >
      <title id="wfm-anatomy-title">
        Where a Windows-built template usually breaks on Mac
      </title>
      <desc id="wfm-anatomy-desc">
        An annotated template with five numbered markers: a custom ribbon tab, a
        macro button, content controls, an add-in task pane and mail merge
        fields. Each is a common point of failure when the template is opened in
        Word for Mac.
      </desc>

      {/* Document */}
      <rect
        x="250"
        y="30"
        width="220"
        height="470"
        rx="14"
        fill="#ffffff"
        stroke="#9bb7c7"
        strokeWidth="1.5"
      />

      {/* 1 Ribbon strip */}
      <rect
        x="262"
        y="42"
        width="196"
        height="28"
        rx="6"
        fill="#e8f4fa"
        stroke="#046999"
        strokeOpacity="0.4"
      />
      <rect x="270" y="52" width="34" height="8" rx="3" fill="#046999" />
      <rect
        x="312"
        y="52"
        width="34"
        height="8"
        rx="3"
        fill="#046999"
        opacity="0.6"
      />
      <rect
        x="354"
        y="52"
        width="34"
        height="8"
        rx="3"
        fill="#046999"
        opacity="0.35"
      />

      <rect
        x="262"
        y="84"
        width="120"
        height="12"
        rx="6"
        fill="#0d1b2a"
        opacity="0.85"
      />
      <rect x="262" y="106" width="196" height="8" rx="4" fill="#d5e3ec" />

      {/* 2 Macro button */}
      <rect x="262" y="116" width="196" height="32" rx="8" fill="#046999" />
      <rect
        x="278"
        y="127"
        width="70"
        height="10"
        rx="5"
        fill="#ffffff"
        opacity="0.85"
      />

      {/* 3 Content control */}
      <rect
        x="262"
        y="184"
        width="196"
        height="40"
        rx="6"
        fill="none"
        stroke="#046999"
        strokeWidth="1.5"
        strokeDasharray="5 4"
      />
      <rect x="274" y="199" width="90" height="10" rx="5" fill="#9bb7c7" />

      {/* Body text lines */}
      <rect x="262" y="240" width="196" height="8" rx="4" fill="#d5e3ec" />
      <rect x="262" y="258" width="106" height="8" rx="4" fill="#d5e3ec" />
      <rect x="262" y="276" width="106" height="8" rx="4" fill="#d5e3ec" />
      <rect x="262" y="294" width="106" height="8" rx="4" fill="#d5e3ec" />
      <rect x="262" y="312" width="106" height="8" rx="4" fill="#d5e3ec" />
      <rect x="262" y="330" width="106" height="8" rx="4" fill="#d5e3ec" />
      <rect x="262" y="348" width="106" height="8" rx="4" fill="#d5e3ec" />

      {/* 4 Add-in pane */}
      <rect
        x="380"
        y="260"
        width="78"
        height="110"
        rx="8"
        fill="#e8f4fa"
        stroke="#046999"
        strokeOpacity="0.4"
      />
      <rect
        x="390"
        y="272"
        width="46"
        height="8"
        rx="4"
        fill="#046999"
        opacity="0.7"
      />
      <rect x="390" y="290" width="58" height="8" rx="4" fill="#9bb7c7" />
      <rect x="390" y="306" width="58" height="8" rx="4" fill="#9bb7c7" />
      <rect x="390" y="322" width="40" height="8" rx="4" fill="#9bb7c7" />

      {/* 5 Merge field */}
      <rect
        x="262"
        y="390"
        width="120"
        height="30"
        rx="6"
        fill="#e8f4fa"
        stroke="#046999"
        strokeOpacity="0.4"
      />
      <rect
        x="272"
        y="401"
        width="76"
        height="8"
        rx="4"
        fill="#046999"
        opacity="0.7"
      />
      <rect x="262" y="440" width="196" height="8" rx="4" fill="#d5e3ec" />
      <rect x="262" y="458" width="140" height="8" rx="4" fill="#d5e3ec" />

      {/* Leaders and callouts */}
      {LEFT.map((c) => (
        <g key={c.n}>
          <line
            x1="210"
            y1={c.pinY}
            x2="250"
            y2={c.pinY}
            stroke="#9bb7c7"
            strokeWidth="2"
          />
          <Callout x={10} y={c.y} title={c.title} lines={c.lines} />
          <Pin cx={250} cy={c.pinY} n={c.n} />
        </g>
      ))}
      {RIGHT.map((c) => (
        <g key={c.n}>
          <line
            x1="470"
            y1={c.pinY}
            x2="510"
            y2={c.pinY}
            stroke="#9bb7c7"
            strokeWidth="2"
          />
          <Callout x={510} y={c.y} title={c.title} lines={c.lines} />
          <Pin cx={470} cy={c.pinY} n={c.n} />
        </g>
      ))}
    </svg>
  );
}
