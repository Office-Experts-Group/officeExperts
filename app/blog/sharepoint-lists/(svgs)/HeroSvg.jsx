// /app/blog/sharepoint-lists/(svgs)/HeroSvg.jsx
// Hero illustration: an Issues list and an Actions list joined by the IssueId
// column, plus a "View Issue" app screen filtered to one issue.
// Hard-coded hex values and the tokens they match:
//   #111820 $dark-bg, #18232e $dark-surface, #1a2a3a $dark-mid,
//   #6fc3e8 $accent-on-dark, #046999 $accent, #ffffff $white (opacity = $white-xx)

const ISSUES = [
  { id: 1, title: "Late delivery", colour: "#6fc3e8" },
  { id: 2, title: "Site access", colour: "#ffffff" },
  { id: 3, title: "Invoice error", colour: "#2f8fbf" },
];

const ACTIONS = [
  { id: 1, issue: 1, title: "Call courier" },
  { id: 2, issue: 2, title: "Book visit" },
  { id: 3, issue: 1, title: "Email client" },
  { id: 4, issue: 3, title: "Fix invoice" },
  { id: 5, issue: 1, title: "Log claim" },
];

const ISSUE_ROW_Y = (i) => 112 + i * 34;
const ACTION_ROW_Y = (i) => 162 + i * 34;

export default function HeroSvg() {
  return (
    <svg
      viewBox="0 0 560 480"
      role="img"
      aria-labelledby="sp-hero-title sp-hero-desc"
      fontFamily="aptos"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title id="sp-hero-title">Two linked SharePoint lists</title>
      <desc id="sp-hero-desc">
        An Issues list with three rows and an Actions list with five rows. Each
        action has an IssueId that points back to one issue, and a Power Apps
        screen shows only the actions for the selected issue.
      </desc>
      <defs>
        <marker
          id="sp-hero-arrow"
          viewBox="0 0 10 10"
          refX="9"
          refY="5"
          markerWidth="8"
          markerHeight="8"
          orient="auto"
        >
          <path d="M0 0 L10 5 L0 10 z" fill="#6fc3e8" />
        </marker>
      </defs>

      {/* Issues list */}
      <rect
        x="10"
        y="30"
        width="240"
        height="196"
        rx="16"
        fill="#18232e"
        stroke="#ffffff"
        strokeOpacity="0.18"
      />
      <text x="28" y="62" fontSize="16" fontWeight="700" fill="#ffffff">
        Issues
      </text>
      <text x="28" y="101" fontSize="14" fill="#ffffff" fillOpacity="0.55">
        ID
      </text>
      <text x="70" y="101" fontSize="14" fill="#ffffff" fillOpacity="0.55">
        Title
      </text>
      {ISSUES.map((issue, i) => (
        <g key={issue.id}>
          <rect
            x="20"
            y={ISSUE_ROW_Y(i)}
            width="220"
            height="30"
            rx="8"
            fill="#ffffff"
            fillOpacity="0.06"
          />
          <text
            x="32"
            y={ISSUE_ROW_Y(i) + 20}
            fontSize="14"
            fontWeight="700"
            fill={issue.colour}
          >
            {issue.id}
          </text>
          <text
            x="70"
            y={ISSUE_ROW_Y(i) + 20}
            fontSize="14"
            fill="#ffffff"
            fillOpacity="0.88"
          >
            {issue.title}
          </text>
        </g>
      ))}

      {/* Actions list */}
      <rect
        x="310"
        y="80"
        width="240"
        height="266"
        rx="16"
        fill="#18232e"
        stroke="#ffffff"
        strokeOpacity="0.18"
      />
      <text x="328" y="112" fontSize="16" fontWeight="700" fill="#ffffff">
        Actions
      </text>
      <text x="328" y="151" fontSize="14" fill="#ffffff" fillOpacity="0.55">
        ID
      </text>
      <text x="364" y="151" fontSize="14" fill="#ffffff" fillOpacity="0.55">
        IssueId
      </text>
      <text x="440" y="151" fontSize="14" fill="#ffffff" fillOpacity="0.55">
        Title
      </text>
      {ACTIONS.map((action, i) => {
        const y = ACTION_ROW_Y(i);
        const issue = ISSUES[action.issue - 1];
        const issueY = ISSUE_ROW_Y(action.issue - 1);
        return (
          <g key={action.id}>
            <rect
              x="320"
              y={y}
              width="220"
              height="30"
              rx="8"
              fill="#ffffff"
              fillOpacity="0.06"
            />
            <text
              x="332"
              y={y + 20}
              fontSize="14"
              fill="#ffffff"
              fillOpacity="0.75"
            >
              {action.id}
            </text>
            <rect
              x="362"
              y={y + 4}
              width="40"
              height="22"
              rx="11"
              fill={issue.colour}
              fillOpacity="0.18"
              stroke={issue.colour}
            />
            <text
              x="382"
              y={y + 20}
              fontSize="14"
              fontWeight="700"
              textAnchor="middle"
              fill={issue.colour}
            >
              {action.issue}
            </text>
            <text
              x="440"
              y={y + 20}
              fontSize="14"
              fill="#ffffff"
              fillOpacity="0.88"
            >
              {action.title}
            </text>
            <path
              d={`M310 ${y + 15} C 282 ${y + 15}, 280 ${issueY + 15}, 250 ${
                issueY + 15
              }`}
              fill="none"
              stroke={issue.colour}
              strokeWidth="2"
              strokeOpacity="0.9"
            />
            <circle cx="310" cy={y + 15} r="4" fill={issue.colour} />
            <circle cx="250" cy={issueY + 15} r="4" fill={issue.colour} />
          </g>
        );
      })}

      {/* Power Apps screen */}
      <rect
        x="10"
        y="262"
        width="240"
        height="200"
        rx="16"
        fill="#1a2a3a"
        stroke="#ffffff"
        strokeOpacity="0.18"
      />
      <path
        d="M10 296 V278 Q10 262 26 262 H234 Q250 262 250 278 V296 Z"
        fill="#046999"
      />
      <text x="26" y="284" fontSize="14" fontWeight="700" fill="#ffffff">
        View Issue
      </text>
      <text x="26" y="324" fontSize="15" fontWeight="700" fill="#ffffff">
        Late delivery
      </text>
      <text x="26" y="346" fontSize="14" fill="#ffffff" fillOpacity="0.55">
        Actions for this issue
      </text>
      {["Call courier", "Email client"].map((label, i) => (
        <g key={label}>
          <rect
            x="26"
            y={356 + i * 30}
            width="208"
            height="24"
            rx="8"
            fill="#ffffff"
            fillOpacity="0.08"
          />
          <text
            x="38"
            y={356 + i * 30 + 17}
            fontSize="14"
            fill="#ffffff"
            fillOpacity="0.88"
          >
            {label}
          </text>
        </g>
      ))}
      <rect
        x="26"
        y="418"
        width="112"
        height="26"
        rx="6"
        fill="#046999"
        stroke="#6fc3e8"
      />
      <text
        x="82"
        y="436"
        fontSize="14"
        fontWeight="700"
        textAnchor="middle"
        fill="#ffffff"
      >
        Add action
      </text>

      {/* Filter arrow: screen reads only the matching actions */}
      <path
        d="M250 380 C 282 380, 288 330, 306 330"
        fill="none"
        stroke="#6fc3e8"
        strokeWidth="2"
        strokeDasharray="5 5"
        markerEnd="url(#sp-hero-arrow)"
      />
    </svg>
  );
}
