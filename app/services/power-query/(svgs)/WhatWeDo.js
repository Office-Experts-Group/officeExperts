// app/services/power-query/(components)/WhatWeDo.js
// Radial hub SVG illustrating the 8 Power Query capability areas.
// Exported as a named SVG constant — import and render inline.

const WhatWeDo = () => (
  <svg
    width="100%"
    viewBox="0 0 680 540"
    role="img"
    aria-label="Radial diagram showing eight Power Query capabilities radiating from a central hub"
  >
    <title>What we do — Power Query capabilities</title>
    <desc>
      Eight Power Query capabilities — ETL pipeline development, Multi-source
      data merging, Scheduled auto-refresh, M language custom logic, Data
      cleansing and reshaping, API and web data pulls, Database connections,
      SharePoint and OneDrive feeds — radiating outward from a central hub.
    </desc>
    <defs>
      <marker
        id="wwd-arrow"
        viewBox="0 0 10 10"
        refX="8"
        refY="5"
        markerWidth="6"
        markerHeight="6"
        orient="auto-start-reverse"
      >
        <path
          d="M2 1L8 5L2 9"
          fill="none"
          stroke="context-stroke"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </marker>
    </defs>

    {/* ── Hub ── */}
    <circle cx="340" cy="270" r="62" fill="#046999" opacity="0.08" />
    <circle cx="340" cy="270" r="48" fill="#046999" opacity="0.15" />
    <circle cx="340" cy="270" r="34" fill="#046999" />
    <text
      x="340"
      y="264"
      textAnchor="middle"
      dominantBaseline="central"
      fill="#ffffff"
      fontSize="13"
      fontWeight="600"
      fontFamily="inherit"
    >
      What
    </text>
    <text
      x="340"
      y="280"
      textAnchor="middle"
      dominantBaseline="central"
      fill="#ffffff"
      fontSize="13"
      fontWeight="600"
      fontFamily="inherit"
    >
      we do
    </text>

    {/* ── Item 1 — ETL pipeline development (top) ── */}
    <line
      x1="340"
      y1="236"
      x2="340"
      y2="130"
      stroke="#046999"
      strokeWidth="1"
      strokeDasharray="4 3"
      opacity="0.5"
      markerEnd="url(#wwd-arrow)"
    />
    <rect
      x="248"
      y="92"
      width="184"
      height="34"
      rx="17"
      fill="#046999"
      fillOpacity="0.08"
      stroke="#046999"
      strokeWidth="0.8"
      strokeOpacity="0.4"
    />
    <text
      x="340"
      y="109"
      textAnchor="middle"
      dominantBaseline="central"
      fill="#046999"
      fontSize="12"
      fontWeight="600"
      fontFamily="inherit"
    >
      ETL pipeline development
    </text>

    {/* ── Item 2 — Multi-source data merging (top-right) ── */}
    <line
      x1="364"
      y1="244"
      x2="472"
      y2="152"
      stroke="#046999"
      strokeWidth="1"
      strokeDasharray="4 3"
      opacity="0.5"
      markerEnd="url(#wwd-arrow)"
    />
    <rect
      x="450"
      y="114"
      width="196"
      height="34"
      rx="17"
      fill="#046999"
      fillOpacity="0.08"
      stroke="#046999"
      strokeWidth="0.8"
      strokeOpacity="0.4"
    />
    <text
      x="548"
      y="131"
      textAnchor="middle"
      dominantBaseline="central"
      fill="#046999"
      fontSize="12"
      fontWeight="600"
      fontFamily="inherit"
    >
      Multi-source data merging
    </text>

    {/* ── Item 3 — Scheduled auto-refresh (right) ── */}
    <line
      x1="374"
      y1="270"
      x2="484"
      y2="270"
      stroke="#046999"
      strokeWidth="1"
      strokeDasharray="4 3"
      opacity="0.5"
      markerEnd="url(#wwd-arrow)"
    />
    <rect
      x="490"
      y="253"
      width="164"
      height="34"
      rx="17"
      fill="#046999"
      fillOpacity="0.08"
      stroke="#046999"
      strokeWidth="0.8"
      strokeOpacity="0.4"
    />
    <text
      x="572"
      y="270"
      textAnchor="middle"
      dominantBaseline="central"
      fill="#046999"
      fontSize="12"
      fontWeight="600"
      fontFamily="inherit"
    >
      Scheduled auto-refresh
    </text>

    {/* ── Item 4 — M language custom logic (bottom-right) ── */}
    <line
      x1="364"
      y1="296"
      x2="472"
      y2="390"
      stroke="#046999"
      strokeWidth="1"
      strokeDasharray="4 3"
      opacity="0.5"
      markerEnd="url(#wwd-arrow)"
    />
    <rect
      x="450"
      y="392"
      width="196"
      height="34"
      rx="17"
      fill="#046999"
      fillOpacity="0.08"
      stroke="#046999"
      strokeWidth="0.8"
      strokeOpacity="0.4"
    />
    <text
      x="548"
      y="409"
      textAnchor="middle"
      dominantBaseline="central"
      fill="#046999"
      fontSize="12"
      fontWeight="600"
      fontFamily="inherit"
    >
      M language custom logic
    </text>

    {/* ── Item 5 — Data cleansing & reshaping (bottom) ── */}
    <line
      x1="340"
      y1="304"
      x2="340"
      y2="406"
      stroke="#046999"
      strokeWidth="1"
      strokeDasharray="4 3"
      opacity="0.5"
      markerEnd="url(#wwd-arrow)"
    />
    <rect
      x="240"
      y="408"
      width="200"
      height="34"
      rx="17"
      fill="#046999"
      fillOpacity="0.08"
      stroke="#046999"
      strokeWidth="0.8"
      strokeOpacity="0.4"
    />
    <text
      x="340"
      y="425"
      textAnchor="middle"
      dominantBaseline="central"
      fill="#046999"
      fontSize="12"
      fontWeight="600"
      fontFamily="inherit"
    >
      Data cleansing &amp; reshaping
    </text>

    {/* ── Item 6 — API & web data pulls (bottom-left) ── */}
    <line
      x1="316"
      y1="296"
      x2="210"
      y2="390"
      stroke="#046999"
      strokeWidth="1"
      strokeDasharray="4 3"
      opacity="0.5"
      markerEnd="url(#wwd-arrow)"
    />
    <rect
      x="36"
      y="392"
      width="168"
      height="34"
      rx="17"
      fill="#046999"
      fillOpacity="0.08"
      stroke="#046999"
      strokeWidth="0.8"
      strokeOpacity="0.4"
    />
    <text
      x="120"
      y="409"
      textAnchor="middle"
      dominantBaseline="central"
      fill="#046999"
      fontSize="12"
      fontWeight="600"
      fontFamily="inherit"
    >
      API &amp; web data pulls
    </text>

    {/* ── Item 7 — Database connections (left) ── */}
    <line
      x1="306"
      y1="270"
      x2="200"
      y2="270"
      stroke="#046999"
      strokeWidth="1"
      strokeDasharray="4 3"
      opacity="0.5"
      markerEnd="url(#wwd-arrow)"
    />
    <rect
      x="24"
      y="253"
      width="170"
      height="34"
      rx="17"
      fill="#046999"
      fillOpacity="0.08"
      stroke="#046999"
      strokeWidth="0.8"
      strokeOpacity="0.4"
    />
    <text
      x="109"
      y="270"
      textAnchor="middle"
      dominantBaseline="central"
      fill="#046999"
      fontSize="12"
      fontWeight="600"
      fontFamily="inherit"
    >
      Database connections
    </text>

    {/* ── Item 8 — SharePoint & OneDrive feeds (top-left) ── */}
    <line
      x1="316"
      y1="244"
      x2="208"
      y2="152"
      stroke="#046999"
      strokeWidth="1"
      strokeDasharray="4 3"
      opacity="0.5"
      markerEnd="url(#wwd-arrow)"
    />
    <rect
      x="34"
      y="114"
      width="210"
      height="34"
      rx="17"
      fill="#046999"
      fillOpacity="0.08"
      stroke="#046999"
      strokeWidth="0.8"
      strokeOpacity="0.4"
    />
    <text
      x="139"
      y="131"
      textAnchor="middle"
      dominantBaseline="central"
      fill="#046999"
      fontSize="12"
      fontWeight="600"
      fontFamily="inherit"
    >
      SharePoint &amp; OneDrive feeds
    </text>
  </svg>
);

export default WhatWeDo;
