// /app/services/microsoft-power-platform/sharepoint-consulting-and-development/(svgs)/SpcdCopilotSvg.jsx
// Informative diagram for SpcdCopilot, drawn for a dark background: a staff
// member asks Copilot a question, Copilot passes through a permission check,
// then reads from SharePoint, where it meets an outdated copy, an overshared
// file and a hard-to-find classic site. Its answer quotes the outdated copy.
//
// Hex values and matching globals.scss tokens:
//   #046999 $accent          #6fc3e8 $accent-on-dark  #18232e $dark-surface
//   #1a2a3a $dark-mid        #0d1b2a $text-primary    #c53030 $error
//   #ffffff $white (also used at reduced opacity for $white-75 / $white-55 / $white-18 / $white-12)

const Doc = ({ x, y, stroke }) => (
  <path
    d={`M${x} ${y}h10l5 5v15H${x}z`}
    fill="none"
    stroke={stroke}
    strokeWidth="1.5"
    strokeLinejoin="round"
  />
);

const SpcdCopilotSvg = () => (
  <svg
    viewBox="0 0 600 470"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-labelledby="spcd-copilot-svg-title spcd-copilot-svg-desc"
  >
    <title id="spcd-copilot-svg-title">How Copilot finds its answers</title>
    <desc id="spcd-copilot-svg-desc">
      A staff member asks Copilot about the travel policy. Copilot only reads
      content that person can open, then searches SharePoint. There it finds an
      outdated 2019 copy of the policy, a payroll export that everyone can open,
      and an old classic site that is hard to find. The answer it gives quotes
      the 2019 copy.
    </desc>

    {/* ── Question ── */}
    <circle
      cx="50"
      cy="62"
      r="24"
      fill="#18232e"
      stroke="#ffffff"
      strokeOpacity="0.2"
    />
    <circle cx="50" cy="55" r="7" fill="#6fc3e8" />
    <path d="M37 76a13 13 0 0 1 26 0" fill="#6fc3e8" />
    <rect x="88" y="36" width="236" height="52" rx="14" fill="#ffffff" />
    <path d="M88 56l-10 6 10 4" fill="#ffffff" />
    <text x="106" y="67" fontSize="15" fontWeight="600" fill="#0d1b2a">
      What’s our travel policy?
    </text>

    {/* question to Copilot */}
    <path
      d="M206 88 C 206 120 250 150 270 160"
      stroke="#6fc3e8"
      strokeWidth="2"
      strokeDasharray="5 5"
      strokeLinecap="round"
    />

    {/* ── Copilot ── */}
    <circle cx="300" cy="180" r="38" fill="#046999" />
    <path
      d="M300 158c3 15 6 18 21 21-15 3-18 6-21 21-3-15-6-18-21-21 15-3 18-6 21-21z"
      fill="#ffffff"
    />
    <text
      x="250"
      y="186"
      textAnchor="end"
      fontSize="14"
      fontWeight="700"
      fill="#ffffff"
      fillOpacity="0.75"
    >
      Copilot
    </text>

    {/* ── Answer ── */}
    <path
      d="M336 168 C 350 150 360 142 374 140"
      stroke="#6fc3e8"
      strokeWidth="2"
      strokeDasharray="5 5"
      strokeLinecap="round"
    />
    <rect x="374" y="102" width="204" height="78" rx="14" fill="#ffffff" />
    <circle cx="396" cy="128" r="8" fill="#c53030" />
    <path
      d="M396 123.5v5"
      stroke="#ffffff"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <circle cx="396" cy="132.5" r="1.2" fill="#ffffff" />
    <text x="412" y="133" fontSize="14" fontWeight="700" fill="#0d1b2a">
      Answer quotes the
    </text>
    <text x="412" y="154" fontSize="14" fontWeight="700" fill="#0d1b2a">
      2019 copy
    </text>

    {/* ── Permission gate ── */}
    <path
      d="M40 262h520"
      stroke="#ffffff"
      strokeOpacity="0.25"
      strokeWidth="1.5"
      strokeDasharray="6 6"
    />
    <text x="40" y="250" fontSize="14" fill="#ffffff" fillOpacity="0.75">
      Only what this person can open
    </text>
    <path d="M300 218v26" stroke="#6fc3e8" strokeWidth="2" />
    <path
      d="M300 244l16 6v11c0 9-7 15-16 18-9-3-16-9-16-18v-11z"
      fill="#18232e"
      stroke="#6fc3e8"
      strokeWidth="1.8"
    />
    <path
      d="M293 261l5 5 9-10"
      stroke="#6fc3e8"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    {/* gate down to each card */}
    <path d="M300 280 V300 H126 V334" stroke="#6fc3e8" strokeWidth="2" />
    <path d="M300 280 V334" stroke="#c53030" strokeWidth="2" />
    <path
      d="M300 300 H474 V334"
      stroke="#ffffff"
      strokeOpacity="0.3"
      strokeWidth="2"
      strokeDasharray="4 5"
    />

    {/* ── SharePoint panel ── */}
    <rect
      x="24"
      y="290"
      width="552"
      height="164"
      rx="16"
      fill="#18232e"
      stroke="#ffffff"
      strokeOpacity="0.12"
    />
    <text
      x="44"
      y="318"
      fontSize="14"
      fontWeight="700"
      fill="#ffffff"
      fillOpacity="0.55"
    >
      SharePoint
    </text>

    {/* Card: outdated copy */}
    <rect
      x="44"
      y="334"
      width="164"
      height="100"
      rx="12"
      fill="#1a2a3a"
      stroke="#ffffff"
      strokeOpacity="0.18"
    />
    <rect
      x="58"
      y="346"
      width="78"
      height="24"
      rx="12"
      fill="#ffffff"
      fillOpacity="0.18"
    />
    <text
      x="97"
      y="363"
      textAnchor="middle"
      fontSize="14"
      fontWeight="700"
      fill="#ffffff"
    >
      Outdated
    </text>
    <Doc x={182} y={348} stroke="#6fc3e8" />
    <text x="58" y="394" fontSize="14" fontWeight="700" fill="#ffffff">
      Travel policy
    </text>
    <text x="58" y="414" fontSize="14" fill="#ffffff" fillOpacity="0.65">
      2019 copy
    </text>

    {/* Card: overshared file */}
    <rect
      x="218"
      y="334"
      width="164"
      height="100"
      rx="12"
      fill="#1a2a3a"
      stroke="#c53030"
      strokeWidth="1.5"
    />
    <rect x="232" y="346" width="96" height="24" rx="12" fill="#c53030" />
    <text
      x="280"
      y="363"
      textAnchor="middle"
      fontSize="14"
      fontWeight="700"
      fill="#ffffff"
    >
      Overshared
    </text>
    <Doc x={356} y={348} stroke="#c53030" />
    <text x="232" y="394" fontSize="14" fontWeight="700" fill="#ffffff">
      Payroll export
    </text>
    <text x="232" y="414" fontSize="14" fill="#ffffff" fillOpacity="0.65">
      Everyone can open
    </text>

    {/* Card: classic site */}
    <rect
      x="392"
      y="334"
      width="164"
      height="100"
      rx="12"
      stroke="#ffffff"
      strokeOpacity="0.3"
      strokeDasharray="5 5"
    />
    <rect
      x="406"
      y="346"
      width="102"
      height="24"
      rx="12"
      fill="#ffffff"
      fillOpacity="0.12"
    />
    <text
      x="457"
      y="363"
      textAnchor="middle"
      fontSize="14"
      fontWeight="700"
      fill="#ffffff"
      fillOpacity="0.75"
    >
      Hard to find
    </text>
    <text
      x="406"
      y="394"
      fontSize="14"
      fontWeight="700"
      fill="#ffffff"
      fillOpacity="0.75"
    >
      Old team site
    </text>
    <text x="406" y="414" fontSize="14" fill="#ffffff" fillOpacity="0.5">
      Classic layout
    </text>
  </svg>
);

export default SpcdCopilotSvg;
