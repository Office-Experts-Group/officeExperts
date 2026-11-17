// /app/services/microsoft-power-platform/power-apps/(svgs)/PappsAppsArt.jsx
// Five app scenes for the tabbed "apps we build" section, plus five tab icons.
// Scenes are drawn straight onto the $accent-light panel from the module.
// Hex values and the tokens they match:
//   #046999 $accent, #034e72 $accent-dark, #6fc3e8 $accent-on-dark,
//   #e8f4fa $accent-light, #0d1b2a $text-primary, #4a5568 $text-secondary,
//   #9a9da1 $text-muted, #e3e8ec $line, #d4d6d9 $line-strong,
//   #f7f8f9 $light-bg, #ffffff $white, #c0392b $replace-x, #0eaa0e $success

const sceneProps = (id) => ({
  viewBox: "0 0 420 320",
  role: "img",
  "aria-labelledby": `papps-apps-${id}-title`,
  fontFamily: "aptos",
  width: "100%",
  height: "auto",
});

const topBar = (x, y, w, h, r) =>
  `M${x} ${y + h} V${y + r} Q${x} ${y} ${x + r} ${y} H${x + w - r} Q${x + w} ${y} ${x + w} ${y + r} V${y + h} Z`;

const Pill = ({ x, y, w, label, kind = "tint" }) => (
  <g>
    <rect
      x={x}
      y={y}
      width={w}
      height="24"
      rx="12"
      fill={
        kind === "solid" ? "#046999" : kind === "warn" ? "#c0392b" : "#e8f4fa"
      }
    />
    <text
      x={x + w / 2}
      y={y + 17}
      textAnchor="middle"
      fontSize="14"
      fontWeight="700"
      fill={kind === "tint" ? "#046999" : "#ffffff"}
    >
      {label}
    </text>
  </g>
);

const Check = ({ x, y }) => (
  <path
    d={`M${x - 4} ${y} l3.5 3.5 l6.5 -7.5`}
    fill="none"
    stroke="#ffffff"
    strokeWidth="2.4"
    strokeLinecap="round"
    strokeLinejoin="round"
  />
);

// 1. Request and approval apps
export const PappsApprovalScene = () => (
  <svg {...sceneProps("approval")}>
    <title id="papps-apps-approval-title">
      A tablet list of purchase requests and a phone showing one request moving
      through approval
    </title>
    <rect x="16" y="46" width="262" height="212" rx="18" fill="#0d1b2a" />
    <rect x="24" y="54" width="246" height="196" rx="11" fill="#ffffff" />
    <path d={topBar(24, 54, 246, 34, 11)} fill="#046999" />
    <text x="38" y="77" fontSize="14" fontWeight="700" fill="#ffffff">
      Requests
    </text>
    {[
      { y: 96, label: "Laptop stand", pill: "Pending", kind: "tint" },
      { y: 140, label: "Course fee", pill: "Approved", kind: "solid" },
      { y: 184, label: "Software", pill: "Pending", kind: "tint" },
    ].map(({ y, label, pill, kind }) => (
      <g key={label}>
        <line x1="24" x2="270" y1={y} y2={y} stroke="#e3e8ec" />
        <circle cx="46" cy={y + 22} r="12" fill="#e8f4fa" />
        <circle cx="46" cy={y + 18} r="4" fill="#046999" />
        <path d={`M38 ${y + 30} q8 -9 16 0`} fill="#046999" />
        <text x="62" y={y + 27} fontSize="14" fill="#0d1b2a">
          {label}
        </text>
        <Pill x={158} y={y + 10} w={74} label={pill} kind={kind} />
      </g>
    ))}

    <rect x="244" y="66" width="164" height="240" rx="24" fill="#0d1b2a" />
    <rect x="251" y="75" width="150" height="222" rx="17" fill="#ffffff" />
    <path d={topBar(251, 75, 150, 32, 17)} fill="#046999" />
    <text x="263" y="97" fontSize="14" fontWeight="700" fill="#ffffff">
      Approve?
    </text>
    <text x="263" y="132" fontSize="14" fontWeight="700" fill="#0d1b2a">
      Laptop stand
    </text>
    <text x="263" y="152" fontSize="14" fill="#4a5568">
      Asked by Sam
    </text>
    <path
      d="M272 186 H380"
      stroke="#e3e8ec"
      strokeWidth="3"
      strokeLinecap="round"
    />
    <path
      d="M272 186 H326"
      stroke="#046999"
      strokeWidth="3"
      strokeLinecap="round"
    />
    <circle cx="272" cy="186" r="9" fill="#046999" />
    <Check x={272} y={186} />
    <circle
      cx="326"
      cy="186"
      r="9"
      fill="#ffffff"
      stroke="#046999"
      strokeWidth="3"
    />
    <circle cx="326" cy="186" r="3.5" fill="#046999" />
    <circle
      cx="380"
      cy="186"
      r="9"
      fill="#ffffff"
      stroke="#d4d6d9"
      strokeWidth="3"
    />
    {[
      [272, "Sent"],
      [326, "Review"],
      [374, "Done"],
    ].map(([x, t]) => (
      <text
        key={t}
        x={x}
        y="216"
        textAnchor="middle"
        fontSize="14"
        fill="#4a5568"
      >
        {t}
      </text>
    ))}
    <rect x="259" y="238" width="64" height="40" rx="10" fill="#046999" />
    <text
      x="291"
      y="263"
      textAnchor="middle"
      fontSize="14"
      fontWeight="700"
      fill="#ffffff"
    >
      Approve
    </text>
    <rect
      x="329"
      y="238"
      width="64"
      height="40"
      rx="10"
      fill="#ffffff"
      stroke="#d4d6d9"
    />
    <text
      x="361"
      y="263"
      textAnchor="middle"
      fontSize="14"
      fontWeight="700"
      fill="#0d1b2a"
    >
      Decline
    </text>

    <rect x="276" y="14" width="132" height="34" rx="17" fill="#046999" />
    <circle cx="296" cy="31" r="6" fill="#6fc3e8" />
    <text x="310" y="36" fontSize="14" fontWeight="700" fill="#ffffff">
      New request
    </text>
  </svg>
);

// 2. Inspections and field apps
export const PappsFieldScene = () => (
  <svg {...sceneProps("field")}>
    <title id="papps-apps-field-title">
      A phone inspection checklist with a photo and location, and cards showing
      the photo, location and sign off captured on site
    </title>
    <rect x="130" y="24" width="160" height="272" rx="26" fill="#0d1b2a" />
    <rect x="137" y="33" width="146" height="254" rx="19" fill="#ffffff" />
    <path d={topBar(137, 33, 146, 36, 19)} fill="#046999" />
    <text x="151" y="57" fontSize="14" fontWeight="700" fill="#ffffff">
      Site check
    </text>
    {[
      { y: 82, label: "Roof", done: true },
      { y: 112, label: "Gutters", done: true },
      { y: 142, label: "Foundation", done: false },
    ].map(({ y, label, done }) => (
      <g key={label}>
        <rect
          x="151"
          y={y}
          width="20"
          height="20"
          rx="6"
          fill={done ? "#046999" : "#ffffff"}
          stroke={done ? "#046999" : "#d4d6d9"}
          strokeWidth="1.6"
        />
        {done && <Check x={161} y={y + 10} />}
        <text x="180" y={y + 15} fontSize="14" fill="#0d1b2a">
          {label}
        </text>
      </g>
    ))}
    <rect x="151" y="174" width="118" height="66" rx="9" fill="#e8f4fa" />
    <path
      d="M190 220 L210 202 L230 220"
      fill="none"
      stroke="#046999"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <rect x="196" y="218" width="28" height="16" fill="#046999" />
    <circle cx="253" cy="190" r="10" fill="#046999" />
    <circle
      cx="253"
      cy="190"
      r="4"
      fill="none"
      stroke="#ffffff"
      strokeWidth="2"
    />
    <path
      d="M160 262 a6 6 0 1 1 12 0 c0 4 -6 9 -6 9 s-6 -5 -6 -9 z"
      fill="#046999"
    />
    <circle cx="166" cy="262" r="2.2" fill="#ffffff" />
    <text x="180" y="270" fontSize="14" fill="#4a5568">
      Location saved
    </text>

    {[
      { x: 6, y: 66, w: 104, t: "Photo", icon: "camera" },
      { x: 298, y: 110, w: 114, t: "Signed off", icon: "check" },
      { x: 298, y: 214, w: 104, t: "Sent", icon: "send" },
    ].map(({ x, y, w, t, icon }) => (
      <g key={t}>
        <rect
          x={x}
          y={y}
          width={w}
          height="48"
          rx="12"
          fill="#ffffff"
          stroke="#e3e8ec"
        />
        <circle
          cx={x + 20}
          cy={y + 24}
          r="11"
          fill={icon === "check" ? "#046999" : "#e8f4fa"}
        />
        {icon === "check" && <Check x={x + 20} y={y + 24} />}
        {icon === "camera" && (
          <>
            <rect
              x={x + 14}
              y={y + 19}
              width="12"
              height="9"
              rx="2"
              fill="#046999"
            />
            <circle cx={x + 20} cy={y + 23.5} r="2.2" fill="#e8f4fa" />
          </>
        )}
        {icon === "send" && (
          <path
            d={`M${x + 14} ${y + 24} h10 m-4 -4 l4 4 l-4 4`}
            fill="none"
            stroke="#046999"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        )}
        <text
          x={x + 38}
          y={y + 29}
          fontSize="14"
          fontWeight="700"
          fill="#0d1b2a"
        >
          {t}
        </text>
      </g>
    ))}
    <path
      d="M122 90 H132 M298 134 H288 M296 238 H288"
      stroke="#046999"
      strokeWidth="2"
      strokeDasharray="4 4"
      strokeLinecap="round"
    />
  </svg>
);

// 3. Inventory and asset trackers
export const PappsStockScene = () => (
  <svg {...sceneProps("stock")}>
    <title id="papps-apps-stock-title">
      A tablet stock list with a low stock flag and a phone scanning a barcode
    </title>
    <rect x="12" y="30" width="262" height="212" rx="18" fill="#0d1b2a" />
    <rect x="20" y="38" width="246" height="196" rx="11" fill="#ffffff" />
    <path d={topBar(20, 38, 246, 34, 11)} fill="#046999" />
    <text x="34" y="61" fontSize="14" fontWeight="700" fill="#ffffff">
      Stock
    </text>
    {[
      { y: 84, label: "Cable ties", fill: 32, low: false },
      { y: 132, label: "Gloves", fill: 9, low: true },
      { y: 180, label: "Tape", fill: 24, low: false },
    ].map(({ y, label, fill, low }) => (
      <g key={label}>
        <line x1="20" x2="266" y1={y} y2={y} stroke="#e3e8ec" />
        <text x="34" y={y + 30} fontSize="14" fill="#0d1b2a">
          {label}
        </text>
        <rect x="112" y={y + 20} width="46" height="10" rx="5" fill="#e3e8ec" />
        <rect
          x="112"
          y={y + 20}
          width={fill}
          height="10"
          rx="5"
          fill={low ? "#c0392b" : "#046999"}
        />
        {low && <Pill x={168} y={y + 14} w={52} label="Low" kind="warn" />}
      </g>
    ))}

    <rect x="244" y="82" width="162" height="226" rx="24" fill="#0d1b2a" />
    <rect x="251" y="91" width="148" height="208" rx="17" fill="#ffffff" />
    <text
      x="325"
      y="118"
      textAnchor="middle"
      fontSize="14"
      fontWeight="700"
      fill="#0d1b2a"
    >
      Scan item
    </text>
    {[
      0, 3, 5, 9, 12, 14, 18, 21, 23, 27, 30, 33, 36, 39, 41, 45, 48, 51, 54,
      57, 59, 63, 66, 69,
    ].map((o, i) => (
      <rect
        key={i}
        x={270 + o}
        y="140"
        width={i % 3 === 0 ? 3 : 2}
        height="56"
        fill="#0d1b2a"
      />
    ))}
    {[
      "M262 132 v-12 h12",
      "M376 120 h12 v12",
      "M262 204 v12 h12",
      "M388 204 v12 h-12",
    ].map((d) => (
      <path
        key={d}
        d={d}
        fill="none"
        stroke="#046999"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ))}
    <path
      d="M262 168 H388"
      stroke="#c0392b"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <text x="325" y="240" textAnchor="middle" fontSize="14" fill="#4a5568">
      Cable ties
    </text>
    <rect x="271" y="252" width="108" height="36" rx="9" fill="#046999" />
    <text
      x="325"
      y="275"
      textAnchor="middle"
      fontSize="14"
      fontWeight="700"
      fill="#ffffff"
    >
      Check out
    </text>
  </svg>
);

// 4. Customer and job trackers
export const PappsTrackerScene = () => (
  <svg {...sceneProps("tracker")}>
    <title id="papps-apps-tracker-title">
      A tablet board with enquiry cards in New, Quoted and Won columns and a
      quote emailed message
    </title>
    <rect x="12" y="20" width="396" height="254" rx="20" fill="#0d1b2a" />
    <rect x="20" y="28" width="380" height="238" rx="13" fill="#ffffff" />
    <path d={topBar(20, 28, 380, 34, 13)} fill="#046999" />
    <text x="34" y="51" fontSize="14" fontWeight="700" fill="#ffffff">
      Enquiries
    </text>
    {[
      { x: 30, t: "New", cards: ["Smith St", "Park Rd", "Beach Rd"] },
      { x: 150, t: "Quoted", cards: ["Hill Ave", "Dock Rd"] },
      { x: 270, t: "Won", cards: ["Lake St"] },
    ].map(({ x, t, cards }) => (
      <g key={t}>
        <text x={x + 4} y="84" fontSize="14" fontWeight="700" fill="#4a5568">
          {t}
        </text>
        <rect x={x} y="92" width="112" height="164" rx="9" fill="#f7f8f9" />
        {cards.map((c, i) => (
          <g key={c}>
            <rect
              x={x + 8}
              y={100 + i * 52}
              width="96"
              height="44"
              rx="8"
              fill="#ffffff"
              stroke="#e3e8ec"
            />
            <text
              x={x + 18}
              y={119 + i * 52}
              fontSize="14"
              fontWeight="700"
              fill="#0d1b2a"
            >
              {c}
            </text>
            <rect
              x={x + 18}
              y={127 + i * 52}
              width="46"
              height="5"
              rx="2.5"
              fill="#9a9da1"
              opacity="0.5"
            />
            {t === "Won" && (
              <>
                <circle cx={x + 88} cy={122 + i * 52} r="8" fill="#046999" />
                <Check x={x + 88} y={122 + i * 52} />
              </>
            )}
          </g>
        ))}
      </g>
    ))}
    <g transform="translate(156 208) rotate(4)">
      <rect
        width="100"
        height="46"
        rx="8"
        fill="#ffffff"
        stroke="#046999"
        strokeWidth="2"
      />
      <text x="10" y="21" fontSize="14" fontWeight="700" fill="#0d1b2a">
        Pier Rd
      </text>
      <rect
        x="10"
        y="30"
        width="46"
        height="5"
        rx="2.5"
        fill="#046999"
        opacity="0.5"
      />
    </g>
    <rect x="268" y="276" width="140" height="34" rx="17" fill="#046999" />
    <text
      x="338"
      y="298"
      textAnchor="middle"
      fontSize="14"
      fontWeight="700"
      fill="#ffffff"
    >
      Quote emailed
    </text>
  </svg>
);

// 5. Internal portals and dashboards
export const PappsPortalScene = () => (
  <svg {...sceneProps("portal")}>
    <title id="papps-apps-portal-title">
      A browser window showing a staff hub with forms, tasks and reports tiles
    </title>
    <rect
      x="12"
      y="24"
      width="396"
      height="276"
      rx="16"
      fill="#ffffff"
      stroke="#d4d6d9"
      strokeWidth="2"
    />
    <path d={topBar(12, 24, 396, 30, 16)} fill="#e3e8ec" />
    {[28, 42, 56].map((x, i) => (
      <circle
        key={x}
        cx={x}
        cy="39"
        r="4"
        fill={i === 0 ? "#c0392b" : "#9a9da1"}
        opacity={i === 0 ? 0.7 : 0.6}
      />
    ))}
    <rect x="84" y="31" width="220" height="16" rx="8" fill="#ffffff" />
    <rect x="28" y="68" width="364" height="62" rx="11" fill="#046999" />
    <text x="44" y="106" fontSize="18" fontWeight="700" fill="#ffffff">
      Staff hub
    </text>
    <rect
      x="262"
      y="86"
      width="114"
      height="26"
      rx="13"
      fill="#ffffff"
      fillOpacity="0.2"
    />
    <circle
      cx="279"
      cy="99"
      r="5"
      fill="none"
      stroke="#ffffff"
      strokeWidth="2"
    />
    <path
      d="M283 103 l5 5"
      stroke="#ffffff"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <text x="296" y="104" fontSize="14" fill="#ffffff">
      Search
    </text>
    {[
      { x: 28, t: "Forms" },
      { x: 150, t: "Tasks" },
      { x: 272, t: "Reports" },
    ].map(({ x, t }) => (
      <g key={t}>
        <rect x={x} y="146" width="120" height="110" rx="11" fill="#e8f4fa" />
        <text x={x + 14} y="242" fontSize="14" fontWeight="700" fill="#0d1b2a">
          {t}
        </text>
      </g>
    ))}
    <rect
      x="52"
      y="166"
      width="38"
      height="46"
      rx="6"
      fill="#ffffff"
      stroke="#046999"
      strokeWidth="2"
    />
    <path
      d="M60 180 h22 M60 189 h22 M60 198 h14"
      stroke="#046999"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <rect x="176" y="168" width="20" height="20" rx="5" fill="#046999" />
    <path
      d="M181 178 l4 4 l6 -7"
      fill="none"
      stroke="#ffffff"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <rect
      x="176"
      y="194"
      width="20"
      height="20"
      rx="5"
      fill="#ffffff"
      stroke="#046999"
      strokeWidth="2"
    />
    <path
      d="M204 178 h38 M204 204 h28"
      stroke="#046999"
      strokeWidth="3"
      strokeLinecap="round"
    />
    {[
      [296, 36],
      [310, 24],
      [324, 46],
      [338, 32],
    ].map(([x, h]) => (
      <rect
        key={x}
        x={x}
        y={212 - h}
        width="10"
        height={h}
        rx="3"
        fill="#046999"
      />
    ))}
    <path
      d="M292 214 H354"
      stroke="#046999"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <rect x="28" y="266" width="364" height="22" rx="11" fill="#f7f8f9" />
    <rect
      x="42"
      y="274"
      width="70"
      height="6"
      rx="3"
      fill="#9a9da1"
      opacity="0.6"
    />
  </svg>
);

// Tab icons, 28px, drawn in currentColor
const iconProps = {
  viewBox: "0 0 28 28",
  width: "28",
  height: "28",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": "true",
  focusable: "false",
};

export const PappsApprovalIcon = () => (
  <svg {...iconProps}>
    <rect x="5" y="3" width="15" height="20" rx="3" />
    <path d="M9 9h7M9 13h4" />
    <circle cx="20" cy="20" r="5" fill="currentColor" stroke="none" />
    <path d="M17.8 20l1.6 1.6 2.8-3.2" stroke="#ffffff" />
  </svg>
);

export const PappsFieldIcon = () => (
  <svg {...iconProps}>
    <path d="M14 25s8-6.5 8-13a8 8 0 0 0-16 0c0 6.5 8 13 8 13z" />
    <circle cx="14" cy="12" r="3" />
  </svg>
);

export const PappsStockIcon = () => (
  <svg {...iconProps}>
    <path d="M4 8l10-5 10 5v12l-10 5-10-5z" />
    <path d="M4 8l10 5 10-5M14 13v12" />
  </svg>
);

export const PappsTrackerIcon = () => (
  <svg {...iconProps}>
    <rect x="3" y="4" width="6" height="20" rx="2" />
    <rect x="11" y="4" width="6" height="13" rx="2" />
    <rect x="19" y="4" width="6" height="8" rx="2" />
  </svg>
);

export const PappsPortalIcon = () => (
  <svg {...iconProps}>
    <rect x="3" y="3" width="9" height="9" rx="2" />
    <rect x="16" y="3" width="9" height="9" rx="2" />
    <rect x="3" y="16" width="9" height="9" rx="2" />
    <rect x="16" y="16" width="9" height="9" rx="2" />
  </svg>
);
