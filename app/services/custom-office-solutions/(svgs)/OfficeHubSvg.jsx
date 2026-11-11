// app/services/custom-office-solutions/(svgs)/OfficeHubSvg.jsx
// Intro illustration: six original app glyphs orbiting a central "Your business" card,
// showing the whole suite customised as one connected system.
// Decorative only, so it is hidden from assistive tech.
// Colours are hardcoded hex values that match globals.scss ($accent, $dark-bg, $line etc.).
import {
  DocumentIcon,
  GridIcon,
  DatabaseIcon,
  MailIcon,
  SlideIcon,
  FlowIcon,
} from "./AppIcons";

// Centre of the hub card; every connector runs from a tile to here
const cx = 230;
const cy = 210;

// Tiles sit on an ellipse (rx 132, ry 147) around the centre.
// `filled` alternates accent tiles with outlined white tiles.
const tiles = [
  { x: 230, y: 63, Icon: DocumentIcon, label: "Word", filled: true },
  { x: 344, y: 136, Icon: GridIcon, label: "Excel", filled: false },
  { x: 344, y: 284, Icon: DatabaseIcon, label: "Access", filled: true },
  { x: 230, y: 357, Icon: MailIcon, label: "Outlook", filled: false },
  { x: 116, y: 284, Icon: SlideIcon, label: "PowerPoint", filled: true },
  { x: 116, y: 136, Icon: FlowIcon, label: "Power Platform", filled: false },
];

export const OfficeHubSvg = () => (
  <svg
    viewBox="0 0 460 420"
    width="460"
    height="420"
    fill="none"
    aria-hidden="true"
    focusable="false"
  >
    {/* Orbit ring */}
    <ellipse
      cx={cx}
      cy={cy}
      rx="132"
      ry="147"
      stroke="#e3e8ec"
      strokeWidth="1.5"
      strokeDasharray="4 7"
    />

    {/* Connectors, drawn first so tiles and the hub card sit on top */}
    {tiles.map(({ x, y, label }) => (
      <g key={`line-${label}`}>
        <line x1={x} y1={y} x2={cx} y2={cy} stroke="#d4d6d9" strokeWidth="1.5" />
        <circle cx={(x + cx) / 2} cy={(y + cy) / 2} r="3.5" fill="#046999" />
      </g>
    ))}

    {/* Soft glow behind the hub */}
    <circle cx={cx} cy={cy} r="78" fill="rgba(4, 105, 153, 0.08)" />

    {/* Hub card */}
    <rect x="160" y="178" width="140" height="64" rx="16" fill="#111820" />
    <text
      x={cx}
      y="206"
      textAnchor="middle"
      fill="#ffffff"
      fontSize="14"
      fontWeight="700"
      fontFamily="inherit"
    >
      Your business
    </text>
    <text
      x={cx}
      y="226"
      textAnchor="middle"
      fill="#6fc3e8"
      fontSize="11"
      fontFamily="inherit"
    >
      one connected system
    </text>

    {/* App tiles with labels. paintOrder="stroke" puts a white halo behind
        each label so it stays readable where it crosses a connector. */}
    {tiles.map(({ x, y, Icon, label, filled }) => (
      <g key={label}>
        <rect
          x={x - 32}
          y={y - 32}
          width="64"
          height="64"
          rx="18"
          fill={filled ? "#046999" : "#ffffff"}
          stroke={filled ? "none" : "#d4d6d9"}
          strokeWidth="1.5"
        />
        <Icon
          x={x - 14}
          y={y - 14}
          width="28"
          height="28"
          color={filled ? "#ffffff" : "#046999"}
        />
        <text
          x={x}
          y={y + 50}
          textAnchor="middle"
          fill="#0d1b2a"
          fontSize="12"
          fontWeight="700"
          fontFamily="inherit"
          stroke="#ffffff"
          strokeWidth="5"
          paintOrder="stroke"
        >
          {label}
        </text>
      </g>
    ))}
  </svg>
);
