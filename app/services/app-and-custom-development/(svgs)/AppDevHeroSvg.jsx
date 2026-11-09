// app/services/app-and-custom-development/(svgs)/AppDevHeroSvg.jsx
// Hero illustration: a custom application connected to the systems it talks to
// through one REST API. Decorative only, so the parent wraps it in aria-hidden.
//
// Colours are hard-coded because SVG attributes cannot read Sass variables:
//   #18232e = $dark-surface   #1a2a3a = $dark-mid   #046999 = $accent
//   #6fc3e8 = $accent-on-dark #0d1b2a = $text-primary   #0eaa0e = $success

const MONO = "ui-monospace, SFMono-Regular, Menlo, Consolas, monospace";

// The four systems around the API: position, title and the records each holds
const systems = [
  { x: 0, y: 0, title: "SQL Server", rows: ["Customers", "Orders", "Invoices"] },
  { x: 462, y: 0, title: "CRM", rows: ["Contacts", "Deals", "Activities"] },
  { x: 0, y: 398, title: "SharePoint", rows: ["Documents", "Lists", "Permissions"] },
  { x: 462, y: 398, title: "3rd party apps", rows: ["Payments", "Accounting", "Shipping"] },
];

// Where each connector meets a card edge
const nodes = [
  [89, 124],
  [551, 124],
  [89, 398],
  [551, 398],
  [214, 220],
  [427, 220],
  [214, 302],
  [427, 302],
];

// Header band path: square at the bottom, rounded (14px) at the top
const headerPath = (x, y, w) =>
  `M${x} ${y + 36}V${y + 14}a14 14 0 0 1 14-14h${w - 28}a14 14 0 0 1 14 14V${y + 36}Z`;

// Dark table card with a header band and a list of fields.
// The first `filled` rows get a solid dot, the rest a hollow one.
const TableCard = ({
  x,
  y,
  w = 178,
  h = 124,
  title,
  rows,
  filled = 1,
  headerFill = "#1a2a3a",
  mono = false,
}) => (
  <g>
    <rect x={x} y={y} width={w} height={h} rx="14" fill="#18232e" />
    <path d={headerPath(x, y, w)} fill={headerFill} />
    <rect
      x={x + 0.5}
      y={y + 0.5}
      width={w - 1}
      height={h - 1}
      rx="14"
      stroke="#2a3d4f"
    />
    <text x={x + 16} y={y + 23} fontSize="13" fontWeight="700" fill="#fff">
      {title}
    </text>
    {rows.map((row, i) => (
      <g key={row}>
        <circle
          cx={x + 20}
          cy={y + 53 + i * 26}
          r="3.5"
          fill={i < filled ? "#6fc3e8" : "none"}
          stroke={i < filled ? "none" : "#6fc3e8"}
          strokeOpacity=".6"
        />
        <text
          x={x + 33}
          y={y + 57 + i * 26}
          fontSize="12"
          fill="#fff"
          fillOpacity=".8"
          fontFamily={mono ? MONO : undefined}
        >
          {row}
        </text>
      </g>
    ))}
  </g>
);

export const AppDevHeroSvg = () => (
  <svg
    viewBox="0 0 640 522"
    fill="none"
    fontFamily="inherit"
    aria-hidden="true"
    focusable="false"
  >
    {/* Connectors: solid elbows to the API, dashed links to the app and endpoint */}
    <g stroke="#6fc3e8" strokeOpacity=".45" strokeWidth="1.5">
      <path d="M89 124V220H214" />
      <path d="M551 124V220H427" />
      <path d="M89 398V302H214" />
      <path d="M551 398V302H427" />
      <path d="M320.5 130V173M320.5 349V398" strokeDasharray="4 4" />
    </g>

    {systems.map((card) => (
      <TableCard key={card.title} {...card} />
    ))}

    {/* Centre: the API, one endpoint per connected system */}
    <TableCard
      x={214}
      y={173}
      w={213}
      h={176}
      title="Custom API"
      rows={["/customers", "/orders", "/documents", "/payments", "/reports"]}
      filled={4}
      headerFill="#046999"
      mono
    />

    {/* Top: the finished application, shown as a small browser window */}
    <g>
      <rect x="214" y="0" width="213" height="130" rx="14" fill="#fff" />
      <circle cx="232" cy="17" r="3" fill="#cfd8df" />
      <circle cx="243" cy="17" r="3" fill="#cfd8df" />
      <circle cx="254" cy="17" r="3" fill="#cfd8df" />
      <rect x="270" y="10" width="140" height="14" rx="7" fill="#eef2f5" />
      <text x="232" y="48" fontSize="11" fontWeight="700" fill="#0d1b2a">
        Customer portal
      </text>
      <rect x="232" y="60" width="110" height="14" rx="4" fill="#eef2f5" />
      <rect x="232" y="80" width="110" height="14" rx="4" fill="#eef2f5" />
      <rect x="232" y="102" width="64" height="18" rx="3" fill="#046999" />
      <text
        x="264"
        y="114.5"
        textAnchor="middle"
        fontSize="10"
        fontWeight="700"
        fill="#fff"
      >
        Save
      </text>
      <rect x="356" y="30" width="54" height="18" rx="9" fill="#0eaa0e" fillOpacity=".14" />
      <circle cx="368" cy="39" r="3" fill="#0eaa0e" />
      <text x="376" y="43" fontSize="10" fontWeight="700" fill="#0a7a0a">
        Live
      </text>
      <rect x="356" y="60" width="54" height="60" rx="6" fill="#eef2f5" />
      <circle cx="383" cy="79" r="9" fill="#cfd8df" />
      <rect x="366" y="96" width="34" height="5" rx="2.5" fill="#cfd8df" />
      <rect x="370" y="106" width="26" height="5" rx="2.5" fill="#dfe6ec" />
    </g>

    {/* Bottom: a live endpoint response */}
    <g>
      <rect x="214" y="398" width="213" height="124" rx="14" fill="#046999" />
      <text
        x="232"
        y="424"
        fontSize="10"
        fontWeight="700"
        letterSpacing="2"
        fill="#fff"
        fillOpacity=".7"
      >
        ENDPOINT
      </text>
      <rect x="367" y="410" width="44" height="20" rx="10" fill="#fff" fillOpacity=".16" />
      <text
        x="389"
        y="424"
        textAnchor="middle"
        fontSize="10"
        fontWeight="700"
        fill="#fff"
      >
        REST
      </text>
      <text x="232" y="456" fontSize="14" fontWeight="700" fill="#fff" fontFamily={MONO}>
        GET /customers
      </text>
      <text x="232" y="496" fontSize="30" fontWeight="700" fill="#fff">
        200 OK
      </text>
    </g>

    <g fill="#6fc3e8">
      {nodes.map(([cx, cy]) => (
        <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="3.5" />
      ))}
    </g>
  </svg>
);
