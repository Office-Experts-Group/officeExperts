// /services/vba-macro-development/(svgs)/VbaDataFlowSvg.jsx
// Three data sources (SQL, web API, SharePoint list) feeding one refreshed workbook.
// Decorative only, so it is hidden from assistive technology.
const FONT = "system-ui, -apple-system, 'Segoe UI', sans-serif";

export const VbaDataFlowSvg = () => (
  <svg
    viewBox="0 0 360 150"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    focusable="false"
    fontFamily={FONT}
  >
    {/* Sources */}
    <g stroke="#046999" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      {/* SQL database */}
      <ellipse cx="42" cy="26" rx="14" ry="5" fill="#ffffff" />
      <path d="M28 26v14c0 2.8 6.3 5 14 5s14-2.2 14-5V26" fill="#ffffff" />
      <path d="M28 33c0 2.8 6.3 5 14 5s14-2.2 14-5" strokeOpacity="0.55" />

      {/* Web API cloud */}
      <path
        d="M30 84a8 8 0 0 1 2-15.7A11 11 0 0 1 53.5 70a7 7 0 0 1-1 14z"
        fill="#ffffff"
      />

      {/* SharePoint list */}
      <rect x="28" y="108" width="28" height="26" rx="5" fill="#ffffff" />
      <path d="M34 116h16M34 122h16M34 128h10" strokeOpacity="0.6" />
    </g>
    <g fontSize="9" fontWeight="700" fill="#4a5568">
      <text x="68" y="34">SQL Server</text>
      <text x="68" y="81">Web API</text>
      <text x="68" y="124">SharePoint</text>
    </g>

    {/* Flow lines */}
    <g stroke="#046999" strokeOpacity="0.5" strokeWidth="2" strokeDasharray="2 6" strokeLinecap="round">
      <path d="M130 30C170 30 170 66 212 72" />
      <path d="M130 77C160 77 180 76 212 76" />
      <path d="M130 121C170 121 170 86 212 80" />
    </g>
    <path d="M208 71l6 5-6 5" stroke="#046999" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />

    {/* Workbook */}
    <rect x="220" y="20" width="124" height="112" rx="10" fill="#ffffff" stroke="#d4d6d9" />
    <path d="M220 30a10 10 0 0 1 10-10h104a10 10 0 0 1 10 10v12H220z" fill="#046999" />
    <g stroke="#e3e8ec" strokeWidth="1.2">
      <path d="M220 62h124M220 82h124M220 102h124" />
      <path d="M261 42v90M302 42v90" />
    </g>
    <g fill="#046999" fillOpacity="0.14">
      <rect x="262" y="63" width="40" height="19" />
      <rect x="221" y="103" width="40" height="19" />
    </g>

    {/* Refresh badge */}
    <circle cx="334" cy="130" r="13" fill="#046999" />
    <path
      d="M340 127a7 7 0 1 0 .8 4.4M340.5 123v4.4H336"
      stroke="#ffffff"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
