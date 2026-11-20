// /app/services/microsoft-access/integrate-access-with-power-bi/(svgs)/ApbiRoutesArt.jsx
// One informative diagram per route tab, drawn for the dark panel they sit on.
// Hex values and the tokens they match:
//   #18232e $dark-surface, #1a2a3a $dark-mid, #111820 $dark-bg, #046999 $accent,
//   #6fc3e8 $accent-on-dark, #ffffff $white (labels use $white-88 / $white-65,
//   strokes use $white-12 to $white-35 as opacity)

const LINE = "#6fc3e8";
const BOX = "#1a2a3a";

const Head = ({ x, y, dir = "right" }) => (
  <polygon
    points={
      dir === "right"
        ? `${x},${y} ${x - 8},${y - 5} ${x - 8},${y + 5}`
        : `${x},${y} ${x + 8},${y - 5} ${x + 8},${y + 5}`
    }
    fill={LINE}
  />
);

const Label = ({ x, y, children, opacity = 0.88, anchor = "middle", bold }) => (
  <text
    x={x}
    y={y}
    fontSize="14"
    fontWeight={bold ? 700 : 400}
    fill="#ffffff"
    fillOpacity={opacity}
    textAnchor={anchor}
  >
    {children}
  </text>
);

const Node = ({ x, y, w, h }) => (
  <rect
    x={x}
    y={y}
    width={w}
    height={h}
    rx="12"
    fill={BOX}
    stroke="#ffffff"
    strokeOpacity="0.16"
  />
);

// Route one: Access file, gateway, Power BI service, your team.
export const ApbiRouteDirectArt = () => (
  <svg
    viewBox="0 0 520 210"
    fontFamily="aptos"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-labelledby="apbi-route-direct-title apbi-route-direct-desc"
  >
    <title id="apbi-route-direct-title">
      Connecting Power BI straight to an Access file
    </title>
    <desc id="apbi-route-direct-desc">
      An Access file and a data gateway sit on your network. The gateway passes
      data to the Power BI service in the cloud on a schedule, and your team
      opens the reports from there.
    </desc>

    <g stroke="#ffffff" strokeOpacity="0.3" fill="none">
      <path d="M8 30V26H242V30M284 30V26H518V30" />
    </g>
    <Label x="125" y="18" opacity={0.65}>
      On your network
    </Label>
    <Label x="401" y="18" opacity={0.65}>
      In the cloud
    </Label>

    {[8, 146, 284, 422].map((x) => (
      <Node key={x} x={x} y="44" w="96" h="128" />
    ))}

    {/* Access file: a cylinder */}
    <g fill="none" stroke={LINE} strokeWidth="1.8">
      <path d="M38 76v30c0 4 8 7 18 7s18-3 18-7V76" />
      <path d="M38 91c0 4 8 7 18 7s18-3 18-7" />
      <ellipse cx="56" cy="76" rx="18" ry="7" fill="#046999" />
    </g>
    <Label x="56" y="150">
      Access file
    </Label>

    {/* gateway: a small server with an arch over it */}
    <g fill="none" stroke={LINE} strokeWidth="1.8" strokeLinecap="round">
      <rect x="176" y="80" width="36" height="30" rx="6" />
      <path d="M182 91h24M182 99h14" />
      <path d="M170 74q24-22 48 0" />
    </g>
    <circle cx="206" cy="99" r="2.4" fill={LINE} />
    <Label x="194" y="150">
      Gateway
    </Label>

    {/* Power BI service: a cloud holding bars */}
    <path
      d="M312 106a11 11 0 0 1 1-21 15 15 0 0 1 29-3 12 12 0 0 1 5 24z"
      fill="none"
      stroke={LINE}
      strokeWidth="1.8"
      strokeLinejoin="round"
    />
    <g fill="#046999">
      <rect x="319" y="94" width="5" height="9" rx="1" />
      <rect x="327" y="88" width="5" height="15" rx="1" />
      <rect x="335" y="92" width="5" height="11" rx="1" />
    </g>
    <Label x="332" y="132">
      Power BI
    </Label>
    <Label x="332" y="150">
      service
    </Label>

    {/* your team */}
    <g fill={LINE}>
      <circle cx="456" cy="82" r="5" />
      <circle cx="470" cy="76" r="5.5" />
      <circle cx="484" cy="82" r="5" />
      <path d="M447 106c0-8 4-12 9-12s9 4 9 12z" fillOpacity="0.6" />
      <path d="M460 104c0-9 4-14 10-14s10 5 10 14z" />
      <path d="M475 106c0-8 4-12 9-12s9 4 9 12z" fillOpacity="0.6" />
    </g>
    <Label x="470" y="150">
      Your team
    </Label>

    {/* arrows */}
    <g stroke={LINE} strokeWidth="1.8" strokeLinecap="round">
      <path d="M108 108H138" strokeDasharray="4 4" />
      <path d="M246 108H276" strokeDasharray="4 4" />
      <path d="M388 108H414" />
    </g>
    <Head x={144} y={108} />
    <Head x={282} y={108} />
    <Head x={420} y={108} />

    <Label x="260" y="198" opacity={0.65}>
      Refreshed on a schedule you choose
    </Label>
  </svg>
);

// Route two: Access front end and Power BI both use SQL Server.
export const ApbiRouteSqlArt = () => (
  <svg
    viewBox="0 0 520 210"
    fontFamily="aptos"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-labelledby="apbi-route-sql-title apbi-route-sql-desc"
  >
    <title id="apbi-route-sql-title">
      Reporting from a SQL Server back end
    </title>
    <desc id="apbi-route-sql-desc">
      Access forms and reports read and write the tables held in SQL Server.
      Power BI reads from the same SQL Server tables.
    </desc>

    {[8, 198, 388].map((x) => (
      <Node key={x} x={x} y="40" w="124" h="128" />
    ))}

    {/* Access forms and reports: a form window */}
    <g fill="none" stroke={LINE} strokeWidth="1.8" strokeLinecap="round">
      <rect x="44" y="60" width="52" height="42" rx="6" />
      <path d="M44 70h52M52 80h22M52 88h22" />
    </g>
    <rect x="80" y="82" width="10" height="12" rx="2" fill="#046999" />
    <Label x="70" y="132">
      Access forms
    </Label>
    <Label x="70" y="150">
      and reports
    </Label>

    {/* SQL Server: a filled cylinder */}
    <g stroke={LINE} strokeWidth="1.8">
      <path d="M236 70v32c0 5 10 8 24 8s24-3 24-8V70" fill="#046999" />
      <path d="M236 86c0 5 10 8 24 8s24-3 24-8" fill="none" />
      <ellipse cx="260" cy="70" rx="24" ry="8" fill="#046999" />
    </g>
    <Label x="260" y="132">
      SQL Server
    </Label>
    <Label x="260" y="150">
      holds the tables
    </Label>

    {/* Power BI: a chart frame */}
    <g fill="none" stroke={LINE} strokeWidth="1.8" strokeLinecap="round">
      <rect x="426" y="60" width="52" height="42" rx="6" />
      <path d="M434 94l10-12 8 6 12-16" strokeLinejoin="round" />
    </g>
    <g fill="#046999">
      <rect x="436" y="86" width="5" height="10" rx="1" />
      <rect x="446" y="80" width="5" height="16" rx="1" />
      <rect x="456" y="84" width="5" height="12" rx="1" />
      <rect x="466" y="74" width="5" height="22" rx="1" />
    </g>
    <Label x="450" y="132">
      Power BI
    </Label>
    <Label x="450" y="150">
      reads from SQL
    </Label>

    <g stroke={LINE} strokeWidth="1.8" strokeLinecap="round">
      <path d="M140 104H190" />
      <path d="M330 104H380" />
    </g>
    <Head x={196} y={104} />
    <Head x={134} y={104} dir="left" />
    <Head x={386} y={104} />

    <Label x="260" y="198" opacity={0.65}>
      Access forms still work. Power BI reads the same tables.
    </Label>
  </svg>
);

// Route three: several sources feed one model and many reports.
export const ApbiRouteBlendArt = () => (
  <svg
    viewBox="0 0 520 224"
    fontFamily="aptos"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-labelledby="apbi-route-blend-title apbi-route-blend-desc"
  >
    <title id="apbi-route-blend-title">
      Blending Access with other data in one Power BI model
    </title>
    <desc id="apbi-route-blend-desc">
      Access, Excel files, SharePoint lists and online services feed a single
      Power BI model. Sales, Operations and Finance reports all draw from that
      one model.
    </desc>

    {[
      [16, "Access"],
      [64, "Excel files"],
      [112, "SharePoint lists"],
      [160, "Online services"],
    ].map(([y, label], i) => (
      <g key={label}>
        <rect
          x="8"
          y={y}
          width="152"
          height="40"
          rx="12"
          fill={BOX}
          stroke="#ffffff"
          strokeOpacity="0.16"
        />
        <g fill="none" stroke={LINE} strokeWidth="1.6" strokeLinecap="round">
          {i === 0 && (
            <>
              <path d="M20 29v10c0 2 4 3.5 8 3.5s8-1.5 8-3.5V29" />
              <ellipse cx="28" cy="29" rx="8" ry="3.5" />
            </>
          )}
          {i === 1 && (
            <>
              <rect x="20" y={y + 10} width="16" height="20" rx="3" />
              <path d={`M20 ${y + 17}h16M20 ${y + 24}h16M28 ${y + 10}v20`} />
            </>
          )}
          {i === 2 && (
            <path
              d={`M21 ${y + 13}h14M21 ${y + 20}h14M21 ${y + 27}h9`}
              strokeWidth="2.2"
            />
          )}
          {i === 3 && (
            <path
              d={`M21 ${y + 28}a6 6 0 0 1 1-12 8 8 0 0 1 15-1 6 6 0 0 1 2 13z`}
              strokeLinejoin="round"
            />
          )}
        </g>
        <Label x="46" y={y + 25} anchor="start">
          {label}
        </Label>
      </g>
    ))}

    <g fill="none" stroke={LINE} strokeWidth="1.6" strokeLinecap="round">
      <path d="M160 36C192 36 190 108 214 108" />
      <path d="M160 84C190 84 190 108 214 108" />
      <path d="M160 132C190 132 190 108 214 108" />
      <path d="M160 180C192 180 190 108 214 108" />
    </g>

    {/* one model */}
    <rect
      x="214"
      y="64"
      width="100"
      height="88"
      rx="12"
      fill="#046999"
      stroke={LINE}
      strokeWidth="1.5"
    />
    <g fill="#ffffff">
      <rect x="254" y="76" width="20" height="12" rx="2" />
      <rect x="226" y="74" width="14" height="8" rx="2" fillOpacity="0.6" />
      <rect x="288" y="74" width="14" height="8" rx="2" fillOpacity="0.6" />
      <rect x="226" y="90" width="14" height="8" rx="2" fillOpacity="0.6" />
      <rect x="288" y="90" width="14" height="8" rx="2" fillOpacity="0.6" />
    </g>
    <g stroke="#ffffff" strokeOpacity="0.6" fill="none">
      <path d="M240 78H254M274 82H288M240 94L254 86M274 86L288 94" />
    </g>
    <Label x="264" y="128" bold>
      One model
    </Label>

    {/* reports */}
    <g fill="none" stroke={LINE} strokeWidth="1.6" strokeLinecap="round">
      <path d="M314 108H344" />
      <path d="M344 108C358 108 358 51 372 51" />
      <path d="M344 108H372" />
      <path d="M344 108C358 108 358 175 372 175" />
    </g>
    {[
      [24, "Sales"],
      [86, "Operations"],
      [148, "Finance"],
    ].map(([y, label], i) => (
      <g key={label}>
        <rect
          x="372"
          y={y}
          width="140"
          height="54"
          rx="12"
          fill={BOX}
          stroke="#ffffff"
          strokeOpacity="0.16"
        />
        <Label x="384" y={y + 32} anchor="start">
          {label}
        </Label>
        <g fill={i === 0 ? LINE : "#046999"}>
          <rect x="470" y={y + 28} width="6" height="14" rx="1" />
          <rect x="480" y={y + 20} width="6" height="22" rx="1" />
          <rect x="490" y={y + 24} width="6" height="18" rx="1" />
        </g>
      </g>
    ))}
  </svg>
);
