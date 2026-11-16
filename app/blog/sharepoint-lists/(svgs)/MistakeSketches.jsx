// /app/blog/sharepoint-lists/(svgs)/MistakeSketches.jsx
// Five small "Avoid" vs "Do this" sketches, decorative (aria-hidden).
// Hard-coded hex values and the tokens they match:
//   #046999 $accent, #e8f4fa $accent-light, #0d1b2a $text-primary,
//   #4a5568 $text-secondary, #ffffff $white
//   Slate (#64748b, #94a3b8, #f1f5f9, #e2e8f0) is the muted "avoid" palette.

const SLATE = "#64748b";
const SLATE_LINE = "#94a3b8";
const SLATE_BG = "#f1f5f9";
const SLATE_CELL = "#e2e8f0";
const ACCENT = "#046999";
const ACCENT_BG = "#e8f4fa";

function Frame({ avoid, children }) {
  return (
    <svg
      viewBox="0 0 420 190"
      aria-hidden="true"
      focusable="false"
      fontFamily="aptos"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="8"
        y="8"
        width="196"
        height="174"
        rx="12"
        fill={SLATE_BG}
        stroke={SLATE_LINE}
        strokeDasharray="6 5"
      />
      <rect
        x="216"
        y="8"
        width="196"
        height="174"
        rx="12"
        fill={ACCENT_BG}
        stroke={ACCENT}
        strokeOpacity="0.5"
      />
      <text x="22" y="32" fontSize="14" fontWeight="700" fill={SLATE}>
        Avoid
      </text>
      <text x="230" y="32" fontSize="14" fontWeight="700" fill={ACCENT}>
        Do this
      </text>
      <text x="22" y="166" fontSize="14" fill={SLATE}>
        {avoid[0]}
      </text>
      <text x="230" y="166" fontSize="14" fontWeight="600" fill={ACCENT}>
        {avoid[1]}
      </text>
      {children}
    </svg>
  );
}

/* 1. Linking by title instead of ID */
export function KeySketch() {
  const messy = ["Late delivery", "Late Delivery", "late delivry"];
  return (
    <Frame avoid={["Typos break links", "One ID, one match"]}>
      <g transform="rotate(-1.2 106 96)">
        {messy.map((text, i) => (
          <g key={text}>
            <rect
              x="22"
              y={48 + i * 34}
              width="168"
              height="28"
              rx="6"
              fill="#ffffff"
              stroke={SLATE_LINE}
              strokeDasharray="4 3"
            />
            <text x="32" y={48 + i * 34 + 19} fontSize="14" fill={SLATE}>
              {text}
            </text>
          </g>
        ))}
      </g>
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <rect
            x="230"
            y={48 + i * 34}
            width="168"
            height="28"
            rx="6"
            fill="#ffffff"
            stroke={ACCENT}
            strokeOpacity="0.45"
          />
          <text x="240" y={48 + i * 34 + 19} fontSize="14" fill="#4a5568">
            IssueId
          </text>
          <text
            x="388"
            y={48 + i * 34 + 19}
            fontSize="14"
            fontWeight="700"
            textAnchor="end"
            fill={ACCENT}
          >
            1
          </text>
        </g>
      ))}
    </Frame>
  );
}

/* 2. Filtering in the app instead of in SharePoint */
function ListBox({ x }) {
  return (
    <g>
      <rect
        x={x}
        y="52"
        width="48"
        height="70"
        rx="8"
        fill="#ffffff"
        stroke={SLATE_LINE}
      />
      {[64, 76, 88, 100].map((y) => (
        <line
          key={y}
          x1={x + 8}
          x2={x + 40}
          y1={y}
          y2={y}
          stroke={SLATE_LINE}
          strokeWidth="3"
          strokeLinecap="round"
        />
      ))}
    </g>
  );
}

export function FilterSketch() {
  return (
    <Frame avoid={["App filters", "List filters"]}>
      <ListBox x={22} />
      <path
        d="M76 87 H110"
        stroke={SLATE}
        strokeWidth="5"
        strokeDasharray="5 4"
      />
      <rect
        x="116"
        y="52"
        width="48"
        height="70"
        rx="8"
        fill="#ffffff"
        stroke={SLATE_LINE}
      />
      <polygon
        points="124,66 156,66 144,86 144,104 136,104 136,86"
        fill={SLATE_CELL}
        stroke={SLATE}
      />

      <ListBox x={226} />
      <polygon
        points="284,66 316,66 304,86 304,104 296,104 296,86"
        fill={ACCENT_BG}
        stroke={ACCENT}
        strokeWidth="1.5"
      />
      <path d="M278 87 H292" stroke={ACCENT} strokeWidth="2" />
      <path
        d="M320 87 H338"
        stroke={ACCENT}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <rect
        x="344"
        y="52"
        width="48"
        height="70"
        rx="8"
        fill="#ffffff"
        stroke={ACCENT}
        strokeOpacity="0.6"
      />
      <line
        x1="352"
        x2="384"
        y1="76"
        y2="76"
        stroke={ACCENT}
        strokeWidth="3"
        strokeLinecap="round"
      />
    </Frame>
  );
}

/* 3. Forgetting to refresh the data source after adding a column */
export function RefreshSketch() {
  return (
    <Frame avoid={["New column missing", "Refresh the source"]}>
      <rect
        x="22"
        y="52"
        width="168"
        height="76"
        rx="8"
        fill="#ffffff"
        stroke={SLATE_LINE}
      />
      <rect x="22" y="52" width="112" height="24" rx="0" fill={SLATE_CELL} />
      <line x1="78" x2="78" y1="52" y2="128" stroke={SLATE_LINE} />
      <line x1="22" x2="190" y1="76" y2="76" stroke={SLATE_LINE} />
      <line x1="22" x2="190" y1="102" y2="102" stroke={SLATE_LINE} />
      <rect
        x="134"
        y="52"
        width="56"
        height="76"
        fill="none"
        stroke={SLATE_LINE}
        strokeDasharray="4 3"
      />
      <text
        x="162"
        y="96"
        fontSize="16"
        fontWeight="700"
        textAnchor="middle"
        fill={SLATE}
      >
        ?
      </text>

      <rect
        x="230"
        y="52"
        width="168"
        height="76"
        rx="8"
        fill="#ffffff"
        stroke={ACCENT}
        strokeOpacity="0.5"
      />
      <rect x="230" y="52" width="112" height="24" fill={ACCENT_BG} />
      <rect x="342" y="52" width="56" height="24" fill={ACCENT} />
      <line x1="286" x2="286" y1="52" y2="128" stroke="#cbd5e1" />
      <line x1="342" x2="342" y1="52" y2="128" stroke="#cbd5e1" />
      <line x1="230" x2="398" y1="76" y2="76" stroke="#cbd5e1" />
      <line x1="230" x2="398" y1="102" y2="102" stroke="#cbd5e1" />
      <rect x="350" y="84" width="40" height="8" rx="4" fill={ACCENT} />
      <rect x="350" y="110" width="40" height="8" rx="4" fill={ACCENT} />
      <path
        d="M394 36 A8 8 0 1 1 389 27.5 M389 22 V28 H383"
        fill="none"
        stroke={ACCENT}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Frame>
  );
}

/* 4. Deleting the parent and leaving orphans */
export function OrphanSketch() {
  return (
    <Frame avoid={["Orphaned actions", "Children first"]}>
      <rect
        x="68"
        y="50"
        width="68"
        height="28"
        rx="6"
        fill="none"
        stroke={SLATE_LINE}
        strokeDasharray="4 3"
      />
      <text x="102" y="69" fontSize="14" textAnchor="middle" fill={SLATE_LINE}>
        Issue
      </text>
      <path
        d="M80 54 L124 74 M124 54 L80 74"
        stroke={SLATE_LINE}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      {[26, 118].map((x) => (
        <g key={x}>
          <path
            d={`M${x + 30} 108 L${x + 30 < 100 ? 90 : 114} 84`}
            stroke={SLATE_LINE}
            strokeDasharray="3 3"
          />
          <rect
            x={x}
            y="108"
            width="60"
            height="28"
            rx="6"
            fill="#ffffff"
            stroke={SLATE}
          />
          <text
            x={x + 30}
            y="127"
            fontSize="14"
            textAnchor="middle"
            fill={SLATE}
          >
            Action
          </text>
        </g>
      ))}
      <text
        x="102"
        y="97"
        fontSize="14"
        fontWeight="700"
        textAnchor="middle"
        fill={SLATE}
      >
        ?
      </text>

      <circle cx="262" cy="64" r="10" fill={ACCENT} />
      <text
        x="262"
        y="69"
        fontSize="14"
        fontWeight="700"
        textAnchor="middle"
        fill="#ffffff"
      >
        1
      </text>
      <circle cx="362" cy="64" r="10" fill={ACCENT} />
      <text
        x="362"
        y="69"
        fontSize="14"
        fontWeight="700"
        textAnchor="middle"
        fill="#ffffff"
      >
        2
      </text>
      <rect
        x="228"
        y="84"
        width="68"
        height="30"
        rx="6"
        fill="#ffffff"
        stroke={ACCENT}
      />
      <text x="262" y="104" fontSize="14" textAnchor="middle" fill="#0d1b2a">
        Actions
      </text>
      <rect
        x="328"
        y="84"
        width="68"
        height="30"
        rx="6"
        fill="#ffffff"
        stroke={ACCENT}
      />
      <text x="362" y="104" fontSize="14" textAnchor="middle" fill="#0d1b2a">
        Issue
      </text>
      <path
        d="M300 99 H322"
        stroke={ACCENT}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M318 93 L324 99 L318 105"
        fill="none"
        stroke={ACCENT}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Frame>
  );
}

/* 5. Reading the selected item from a gallery on another screen */
export function VariableSketch() {
  return (
    <Frame avoid={["Reads another screen", "Store it once"]}>
      <rect
        x="30"
        y="46"
        width="110"
        height="24"
        rx="6"
        fill="#ffffff"
        stroke={SLATE}
      />
      <text x="85" y="63" fontSize="14" textAnchor="middle" fill={SLATE}>
        Screen A
      </text>
      <rect
        x="30"
        y="114"
        width="110"
        height="24"
        rx="6"
        fill="#ffffff"
        stroke={SLATE}
      />
      <text x="85" y="131" fontSize="14" textAnchor="middle" fill={SLATE}>
        Screen B
      </text>
      <path
        d="M140 126 C 178 126, 178 58, 144 58"
        fill="none"
        stroke={SLATE}
        strokeDasharray="4 4"
      />
      <text
        x="168"
        y="98"
        fontSize="16"
        fontWeight="700"
        textAnchor="middle"
        fill={SLATE}
      >
        ?
      </text>

      <rect
        x="250"
        y="46"
        width="110"
        height="24"
        rx="6"
        fill="#ffffff"
        stroke={ACCENT}
      />
      <text x="305" y="63" fontSize="14" textAnchor="middle" fill="#0d1b2a">
        Screen A
      </text>
      <rect x="250" y="80" width="110" height="24" rx="12" fill={ACCENT} />
      <text
        x="305"
        y="97"
        fontSize="14"
        fontWeight="700"
        textAnchor="middle"
        fill="#ffffff"
      >
        varIssue
      </text>
      <rect
        x="250"
        y="114"
        width="110"
        height="24"
        rx="6"
        fill="#ffffff"
        stroke={ACCENT}
      />
      <text x="305" y="131" fontSize="14" textAnchor="middle" fill="#0d1b2a">
        Screen B
      </text>
      <path
        d="M305 70 V80 M305 104 V114"
        stroke={ACCENT}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </Frame>
  );
}
