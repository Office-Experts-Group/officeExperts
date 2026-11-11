// app/services/cloud-based-solutions-with-azure/(svgs)/DesktopAppSvg.jsx
// Illustration for AzureDesktopApps: a Windows desktop application window with a sidebar, stat tiles,
// a trend chart and a data grid, plus chips for the stack underneath.
// Decorative only. Colours are hardcoded hex values that match globals.scss tokens.

export const DesktopAppSvg = () => (
  <svg
    viewBox="0 0 480 384"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    focusable="false"
    fontFamily="inherit"
  >
    {/* ── Offset back layer gives the window some depth ── */}
    <rect x="34" y="34" width="440" height="300" rx="16" fill="#f2f3f5" />

    {/* ── Window frame and title bar ── */}
    <rect x="20" y="20" width="440" height="300" rx="16" fill="#111820" />
    <g fill="#ffffff" fillOpacity="0.35">
      <circle cx="38" cy="38" r="4" />
      <circle cx="52" cy="38" r="4" />
      <circle cx="66" cy="38" r="4" />
    </g>
    <text x="240" y="42" textAnchor="middle" fontSize="12" fontWeight="600" fill="#ffffff" fillOpacity="0.75">
      Operations Manager
    </text>
    <text x="414" y="42" textAnchor="end" fontSize="10.5" fill="#ffffff" fillOpacity="0.65">
      Signed in
    </text>
    <circle cx="432" cy="38" r="9" fill="#046999" />
    <circle cx="432" cy="35.5" r="3" fill="#ffffff" />
    <path d="M426.5 43 a5.5 4 0 0 1 11 0" fill="#ffffff" />

    {/* ── Window body ── */}
    <path d="M20 56 H460 V304 a16 16 0 0 1 -16 16 H36 a16 16 0 0 1 -16 -16 Z" fill="#ffffff" />

    {/* ── Sidebar navigation ── */}
    <path d="M20 56 H120 V320 H36 a16 16 0 0 1 -16 -16 Z" fill="#f7f8f9" />
    <rect x="32" y="72" width="76" height="14" rx="4" fill="#046999" />
    <g fill="#e3e8ec">
      <rect x="32" y="96" width="64" height="10" rx="3" />
      <rect x="32" y="116" width="70" height="10" rx="3" />
      <rect x="32" y="136" width="56" height="10" rx="3" />
      <rect x="32" y="156" width="66" height="10" rx="3" />
    </g>
    <rect x="30" y="284" width="80" height="22" rx="11" fill="#ffffff" stroke="#e3e8ec" />
    <path d="M40 295 l3 3 l6 -6" stroke="#0eaa0e" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    <text x="54" y="299" fontSize="10" fontWeight="600" fill="#4a5568">
      v2.4 current
    </text>

    {/* ── Stat tiles ── */}
    <g fill="#f7f8f9">
      <rect x="136" y="72" width="92" height="50" rx="8" />
      <rect x="244" y="72" width="92" height="50" rx="8" />
      <rect x="352" y="72" width="92" height="50" rx="8" />
    </g>
    <g fill="#d4d6d9">
      <rect x="148" y="84" width="40" height="5" rx="2.5" />
      <rect x="256" y="84" width="34" height="5" rx="2.5" />
      <rect x="364" y="84" width="44" height="5" rx="2.5" />
    </g>
    <rect x="148" y="97" width="52" height="12" rx="3" fill="#046999" />
    <rect x="256" y="97" width="44" height="12" rx="3" fill="#0d1b2a" />
    <rect x="364" y="97" width="58" height="12" rx="3" fill="#0d1b2a" />

    {/* ── Trend chart ── */}
    <rect x="136" y="136" width="308" height="82" rx="8" fill="#f7f8f9" />
    <path
      d="M150 202 L190 186 L230 192 L270 168 L310 174 L350 154 L390 160 L430 146 V210 H150 Z"
      fill="#046999"
      fillOpacity="0.12"
    />
    <path
      d="M150 202 L190 186 L230 192 L270 168 L310 174 L350 154 L390 160 L430 146"
      stroke="#046999"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="430" cy="146" r="4" fill="#ffffff" stroke="#046999" strokeWidth="2.5" />

    {/* ── Data grid ── */}
    <rect x="136" y="230" width="308" height="18" rx="4" fill="#f2f3f5" />
    <g stroke="#e3e8ec">
      <path d="M136 268 H444" />
      <path d="M136 288 H444" />
    </g>
    <g fill="#d4d6d9">
      <rect x="146" y="254" width="62" height="6" rx="3" />
      <rect x="146" y="274" width="48" height="6" rx="3" />
      <rect x="146" y="294" width="56" height="6" rx="3" />
    </g>
    <g fill="#e3e8ec">
      <rect x="232" y="254" width="80" height="6" rx="3" />
      <rect x="232" y="274" width="70" height="6" rx="3" />
      <rect x="232" y="294" width="84" height="6" rx="3" />
      <rect x="332" y="254" width="40" height="6" rx="3" />
      <rect x="332" y="274" width="46" height="6" rx="3" />
      <rect x="332" y="294" width="36" height="6" rx="3" />
    </g>
    <rect x="394" y="252" width="40" height="10" rx="5" fill="#046999" />
    <rect x="394" y="272" width="40" height="10" rx="5" fill="#046999" fillOpacity="0.35" />
    <rect x="394" y="292" width="40" height="10" rx="5" fill="#046999" />

    {/* ── Stack chips ── */}
    <rect x="20" y="342" width="128" height="30" rx="15" fill="#111820" />
    <text x="84" y="361" textAnchor="middle" fontSize="11.5" fontWeight="700" fill="#ffffff">
      C# and VB.NET
    </text>
    <rect x="160" y="342" width="150" height="30" rx="15" fill="#ffffff" stroke="#e3e8ec" />
    <text x="235" y="361" textAnchor="middle" fontSize="11.5" fontWeight="700" fill="#0d1b2a">
      Azure SQL back end
    </text>
    <rect x="322" y="342" width="138" height="30" rx="15" fill="#ffffff" stroke="#e3e8ec" />
    <text x="391" y="361" textAnchor="middle" fontSize="11.5" fontWeight="700" fill="#0d1b2a">
      Entra ID sign-in
    </text>
  </svg>
);
