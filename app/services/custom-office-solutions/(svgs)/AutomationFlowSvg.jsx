// app/services/custom-office-solutions/(svgs)/AutomationFlowSvg.jsx
// Automation section illustration, drawn for the dark section background:
// one form submission runs through your business rules and produces a document,
// a report and a logged email without anyone copying and pasting.
// Decorative only, so it is hidden from assistive tech.
// Colours are hardcoded hex/rgba values that match globals.scss ($dark-surface, $accent etc.).
import { DocumentIcon, GridIcon, MailIcon } from "./AppIcons";

// Hub centre
const hx = 240;
const hy = 150;

// Output cards, centred vertically on `y`
const outputs = [
  { y: 72, Icon: DocumentIcon, name: "Proposal.docx", note: "Ready to send" },
  { y: 150, Icon: GridIcon, name: "Report.xlsx", note: "Refreshed nightly" },
  { y: 228, Icon: MailIcon, name: "Email sent", note: "Logged to the CRM" },
];

// Form field rows on the input card (top of each label bar)
const fields = [112, 150];

// Eight cog teeth around the hub, one every 45 degrees
const teeth = [0, 45, 90, 135, 180, 225, 270, 315];

export const AutomationFlowSvg = () => (
  <svg
    viewBox="0 0 480 300"
    width="480"
    height="300"
    fill="none"
    aria-hidden="true"
    focusable="false"
  >
    {/* ── Input: form card ── */}
    <rect
      x="16"
      y="70"
      width="128"
      height="160"
      rx="16"
      fill="#18232e"
      stroke="rgba(255, 255, 255, 0.12)"
    />
    <text x="32" y="98" fill="#ffffff" fontSize="12" fontWeight="700" fontFamily="inherit">
      New order
    </text>
    {fields.map((y) => (
      <g key={y}>
        <rect x="32" y={y} width="40" height="6" rx="3" fill="rgba(255, 255, 255, 0.35)" />
        <rect x="32" y={y + 10} width="96" height="18" rx="5" fill="rgba(255, 255, 255, 0.08)" />
      </g>
    ))}
    <rect x="32" y="192" width="96" height="22" rx="6" fill="#046999" />
    <text x="80" y="207" textAnchor="middle" fill="#ffffff" fontSize="10" fontWeight="700" fontFamily="inherit">
      Submit
    </text>

    {/* ── Connectors ── */}
    <path
      d="M144 150H196"
      stroke="rgba(255, 255, 255, 0.18)"
      strokeWidth="2"
      strokeDasharray="5 5"
    />
    {outputs.map(({ y }) => (
      <g key={`link-${y}`}>
        <path
          d={`M284 ${hy} C 304 ${hy}, 304 ${y}, 324 ${y}`}
          stroke="rgba(255, 255, 255, 0.18)"
          strokeWidth="2"
        />
        <circle cx="324" cy={y} r="3.5" fill="#6fc3e8" />
      </g>
    ))}

    {/* ── Hub: business rules cog ── */}
    {teeth.map((angle) => (
      <rect
        key={angle}
        x={hx - 6}
        y={hy - 48}
        width="12"
        height="14"
        rx="3"
        fill="#046999"
        transform={`rotate(${angle} ${hx} ${hy})`}
      />
    ))}
    <circle cx={hx} cy={hy} r="40" fill="#046999" />
    <circle cx={hx} cy={hy} r="15" stroke="#ffffff" strokeWidth="3" />
    <text
      x={hx}
      y="222"
      textAnchor="middle"
      fill="rgba(255, 255, 255, 0.65)"
      fontSize="11"
      fontFamily="inherit"
    >
      Your business rules
    </text>

    {/* ── Outputs ── */}
    {outputs.map(({ y, Icon, name, note }) => (
      <g key={name}>
        <rect
          x="330"
          y={y - 26}
          width="140"
          height="52"
          rx="12"
          fill="#18232e"
          stroke="rgba(255, 255, 255, 0.12)"
        />
        <Icon x="342" y={y - 12} width="24" height="24" color="#6fc3e8" />
        <text x="376" y={y - 2} fill="#ffffff" fontSize="12" fontWeight="700" fontFamily="inherit">
          {name}
        </text>
        <text x="376" y={y + 14} fill="rgba(255, 255, 255, 0.55)" fontSize="10" fontFamily="inherit">
          {note}
        </text>
      </g>
    ))}
  </svg>
);
