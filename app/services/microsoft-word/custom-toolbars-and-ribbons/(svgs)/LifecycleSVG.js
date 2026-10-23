// /services/microsoft-word/custom-toolbars-and-ribbons/(svgs)/LifecycleSVG.js

// Document lifecycle track (draft, edit, approve, publish) with the custom components
// that support it hanging underneath.
// SVG cannot read Sass variables, so the hex values below are the brand colours from globals.scss.
// The gradient id is prefixed "lc-" so it never clashes with other inline SVGs on the page.

// Each stage: x position on the track, label, and an icon drawn around 0,0
const stages = [
  {
    x: 130,
    label: "Draft",
    icon: <path d="M-10 10l2-7L4-9l5 5L-3 8zM1-6l5 5" />,
  },
  {
    x: 377,
    label: "Edit",
    icon: <path d="M-10-6h20M-10 0h20M-10 6h11" />,
  },
  {
    x: 623,
    label: "Approve",
    icon: <path d="M-10 0l6 7L10-8" />,
  },
  {
    x: 870,
    label: "Publish",
    icon: <path d="M-8-2v11h16V-2M0 6V-10M-5-5l5-5 5 5" />,
  },
];

// Custom components that support a stage (width is the pill width in SVG units)
const features = [
  { x: 130, width: 200, text: "Pre-populated templates" },
  { x: 377, width: 220, text: "Context-sensitive toolbars" },
  { x: 870, width: 258, text: "Standardised headers and footers" },
];

// Midpoints between stages, where the direction chevrons sit
const chevrons = [253.5, 500, 746.5];

export const LifecycleSVG = () => (
  <svg
    viewBox="0 0 1000 230"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-label="Document lifecycle: draft, edit, approve and publish, supported by pre-populated templates, context-sensitive toolbars and standardised headers and footers"
  >
    <defs>
      <linearGradient id="lc-accent" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#046999" />
        <stop offset="100%" stopColor="#0a85bf" />
      </linearGradient>
    </defs>

    {/* Track */}
    <path
      d="M130 72H870"
      stroke="#cfd8df"
      strokeWidth="3"
      strokeLinecap="round"
    />
    {chevrons.map((x) => (
      <g key={x} transform={`translate(${x} 72)`}>
        <circle r="13" fill="#fff" />
        <path
          d="M-3-6l6 6-6 6"
          fill="none"
          stroke="#9a9da1"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    ))}

    {/* Supporting components: dashed link down to a pill */}
    {features.map(({ x, width, text }) => (
      <g key={text}>
        <path
          d={`M${x} 146V176`}
          stroke="#cfd8df"
          strokeWidth="1.5"
          strokeDasharray="3 4"
        />
        <rect
          x={x - width / 2}
          y="176"
          width={width}
          height="36"
          rx="18"
          fill="#f2f3f5"
        />
        <circle cx={x - width / 2 + 18} cy="194" r="3.5" fill="#046999" />
        <text
          x={x - width / 2 + 30}
          y="198.5"
          fontSize="13"
          fontWeight="600"
          fill="#0d1b2a"
        >
          {text}
        </text>
      </g>
    ))}

    {/* Stage nodes */}
    {stages.map(({ x, label, icon }) => (
      <g key={label} transform={`translate(${x} 72)`}>
        <circle r="42" fill="#f2f3f5" />
        <circle r="34" fill="url(#lc-accent)" />
        <g
          fill="none"
          stroke="#fff"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {icon}
        </g>
        <text
          y="72"
          textAnchor="middle"
          fontSize="20"
          fontWeight="800"
          fill="#0d1b2a"
        >
          {label}
        </text>
      </g>
    ))}
  </svg>
);
