// /app/blog/power-apps-with-sql-database/(svgs)/DecisionSvg.jsx
// Decision flow: which data source fits? Recommended outcome in solid accent,
// the others in light accent.
// Hex values map to tokens: #e8f4fa $accent-light, #046999 $accent,
// #0d1b2a $text-primary, #4a5568 $text-secondary, #ffffff $white.

const Pill = ({ x, y, label }) => (
  <g>
    <rect
      x={x - 22}
      y={y - 13}
      width="44"
      height="26"
      rx="13"
      fill="#ffffff"
      stroke="#046999"
      strokeOpacity="0.5"
    />
    <text
      x={x}
      y={y + 5}
      fontSize="14"
      fontWeight="700"
      fill="#046999"
      textAnchor="middle"
    >
      {label}
    </text>
  </g>
);

const DecisionSvg = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 900 392"
    role="img"
    aria-labelledby="pasql-decision-title pasql-decision-desc"
    fontFamily="aptos, sans-serif"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title id="pasql-decision-title">
      Which data source should your Power App use?
    </title>
    <desc id="pasql-decision-desc">
      A two-question decision flow. If you do not need enforced relationships,
      larger tables or data shared with other systems, a SharePoint list is
      enough. If you do, and the app stays inside the Power Platform with
      built-in security roles, consider Dataverse. Otherwise an Azure SQL
      database is the recommended choice.
    </desc>

    <defs>
      <marker
        id="pasql-decision-arrow"
        viewBox="0 0 10 10"
        refX="8"
        refY="5"
        markerWidth="8"
        markerHeight="8"
        orient="auto-start-reverse"
      >
        <path d="M1 1.5 8.5 5 1 8.5Z" fill="#046999" />
      </marker>
    </defs>

    {/* Start */}
    <rect x="12" y="156" width="156" height="84" rx="14" fill="#0d1b2a" />
    <text
      x="90"
      y="190"
      fontSize="16"
      fontWeight="700"
      fill="#ffffff"
      textAnchor="middle"
    >
      Choosing a
    </text>
    <text
      x="90"
      y="212"
      fontSize="16"
      fontWeight="700"
      fill="#ffffff"
      textAnchor="middle"
    >
      data source
    </text>
    <path
      d="M170 198H212"
      stroke="#046999"
      strokeWidth="2"
      markerEnd="url(#pasql-decision-arrow)"
    />

    {/* Question 1 */}
    <rect
      x="214"
      y="132"
      width="214"
      height="132"
      rx="14"
      fill="#ffffff"
      stroke="#046999"
      strokeOpacity="0.45"
    />
    <text
      x="321"
      y="166"
      fontSize="15"
      fontWeight="700"
      fill="#0d1b2a"
      textAnchor="middle"
    >
      Do you need enforced
    </text>
    <text
      x="321"
      y="188"
      fontSize="15"
      fontWeight="700"
      fill="#0d1b2a"
      textAnchor="middle"
    >
      relationships, bigger
    </text>
    <text
      x="321"
      y="210"
      fontSize="15"
      fontWeight="700"
      fill="#0d1b2a"
      textAnchor="middle"
    >
      tables, or data shared
    </text>
    <text
      x="321"
      y="232"
      fontSize="15"
      fontWeight="700"
      fill="#0d1b2a"
      textAnchor="middle"
    >
      with other systems?
    </text>

    {/* Outcome: SharePoint */}
    <rect
      x="214"
      y="16"
      width="214"
      height="72"
      rx="14"
      fill="#e8f4fa"
      stroke="#046999"
      strokeOpacity="0.35"
    />
    <text
      x="321"
      y="46"
      fontSize="17"
      fontWeight="700"
      fill="#0d1b2a"
      textAnchor="middle"
    >
      SharePoint list
    </text>
    <text x="321" y="68" fontSize="14" fill="#4a5568" textAnchor="middle">
      Simple data, small teams
    </text>
    <path
      d="M321 130V92"
      stroke="#046999"
      strokeWidth="2"
      markerEnd="url(#pasql-decision-arrow)"
    />
    <Pill x={321} y={111} label="No" />

    {/* Question 2 */}
    <path
      d="M430 198H474"
      stroke="#046999"
      strokeWidth="2"
      markerEnd="url(#pasql-decision-arrow)"
    />
    <Pill x={452} y={198} label="Yes" />
    <rect
      x="476"
      y="132"
      width="214"
      height="132"
      rx="14"
      fill="#ffffff"
      stroke="#046999"
      strokeOpacity="0.45"
    />
    <text
      x="583"
      y="177"
      fontSize="15"
      fontWeight="700"
      fill="#0d1b2a"
      textAnchor="middle"
    >
      Will the app stay inside
    </text>
    <text
      x="583"
      y="199"
      fontSize="15"
      fontWeight="700"
      fill="#0d1b2a"
      textAnchor="middle"
    >
      Power Platform, using its
    </text>
    <text
      x="583"
      y="221"
      fontSize="15"
      fontWeight="700"
      fill="#0d1b2a"
      textAnchor="middle"
    >
      built-in security roles?
    </text>

    {/* Outcome: Dataverse */}
    <rect
      x="476"
      y="16"
      width="214"
      height="72"
      rx="14"
      fill="#e8f4fa"
      stroke="#046999"
      strokeOpacity="0.35"
    />
    <text
      x="583"
      y="46"
      fontSize="17"
      fontWeight="700"
      fill="#0d1b2a"
      textAnchor="middle"
    >
      Dataverse
    </text>
    <text x="583" y="68" fontSize="14" fill="#4a5568" textAnchor="middle">
      Built-in roles and tables
    </text>
    <path
      d="M583 130V92"
      stroke="#046999"
      strokeWidth="2"
      markerEnd="url(#pasql-decision-arrow)"
    />
    <Pill x={583} y={111} label="Yes" />

    {/* Outcome: Azure SQL (recommended) */}
    <path
      d="M692 198H724"
      stroke="#046999"
      strokeWidth="2"
      markerEnd="url(#pasql-decision-arrow)"
    />
    <Pill x={708} y={176} label="No" />
    <rect x="726" y="144" width="162" height="108" rx="14" fill="#046999" />
    <text
      x="807"
      y="182"
      fontSize="18"
      fontWeight="700"
      fill="#ffffff"
      textAnchor="middle"
    >
      Azure SQL
    </text>
    <text
      x="807"
      y="204"
      fontSize="18"
      fontWeight="700"
      fill="#ffffff"
      textAnchor="middle"
    >
      database
    </text>
    <text x="807" y="234" fontSize="14" fill="#ffffff" textAnchor="middle">
      Recommended here
    </text>

    {/* Footnote */}
    <rect
      x="12"
      y="312"
      width="876"
      height="52"
      rx="12"
      fill="#ffffff"
      stroke="#046999"
      strokeOpacity="0.25"
    />
    <text x="450" y="343" fontSize="15" fill="#0d1b2a" textAnchor="middle">
      Start with the simplest option that meets the need. Licensing differs for
      each, so check before you build.
    </text>
  </svg>
);

export default DecisionSvg;
