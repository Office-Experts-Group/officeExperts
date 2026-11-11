// app/services/microsoft-dot-net/(svgs)/OfficeAddinSvg.jsx
// Generic Office window with a custom ribbon button opening an add-in task pane. Used in DotNetOffice.
// Decorative only (aria-hidden). Text inherits the site font; colours mirror globals.scss tokens.
export const OfficeAddinSvg = () => (
  <svg viewBox="0 0 480 360" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
    {/* Office-style application window (generic, no product icons) */}
    <rect x="16" y="24" width="448" height="300" rx="18" fill="#ffffff" stroke="#e3e8ec" strokeWidth="1.5" />
    <path d="M16 42a18 18 0 0 1 18-18h412a18 18 0 0 1 18 18v12H16z" fill="#f2f3f5" />
    <circle cx="38" cy="40" r="4.5" fill="#d4d6d9" />
    <circle cx="52" cy="40" r="4.5" fill="#d4d6d9" />
    <circle cx="66" cy="40" r="4.5" fill="#d4d6d9" />

    {/* Ribbon: standard buttons plus one custom add-in button */}
    <rect x="16" y="54" width="448" height="44" fill="#f7f8f9" />
    <rect x="32" y="64" width="24" height="24" rx="5" fill="#e3e8ec" />
    <rect x="64" y="64" width="24" height="24" rx="5" fill="#e3e8ec" />
    <rect x="96" y="64" width="24" height="24" rx="5" fill="#e3e8ec" />
    <rect x="136" y="64" width="24" height="24" rx="5" fill="#e3e8ec" />
    <rect x="168" y="64" width="24" height="24" rx="5" fill="#e3e8ec" />
    <rect x="384" y="62" width="64" height="28" rx="6" fill="#046999" />
    <circle cx="400" cy="76" r="6" stroke="#ffffff" strokeWidth="2" />
    <circle cx="400" cy="76" r="1.8" fill="#ffffff" />
    <rect x="412" y="72" width="26" height="8" rx="4" fill="#ffffffbf" />

    {/* Document page */}
    <rect x="40" y="114" width="250" height="194" rx="8" fill="#ffffff" stroke="#e3e8ec" />
    <rect x="62" y="136" width="120" height="12" rx="6" fill="#0d1b2a" fillOpacity="0.8" />
    <rect x="62" y="162" width="206" height="7" rx="3.5" fill="#e3e8ec" />
    <rect x="62" y="176" width="190" height="7" rx="3.5" fill="#e3e8ec" />
    <rect x="62" y="190" width="200" height="7" rx="3.5" fill="#e3e8ec" />
    {/* Field populated by the add-in */}
    <rect x="62" y="212" width="132" height="22" rx="5" fill="#046999" fillOpacity="0.1" />
    <rect x="70" y="219" width="90" height="8" rx="4" fill="#046999" />
    <rect x="62" y="246" width="206" height="7" rx="3.5" fill="#e3e8ec" />
    <rect x="62" y="260" width="150" height="7" rx="3.5" fill="#e3e8ec" />

    {/* Task pane */}
    <rect x="306" y="114" width="142" height="194" rx="12" fill="#f7f8f9" />
    <path d="M306 126a12 12 0 0 1 12-12h118a12 12 0 0 1 12 12v18H306z" fill="#111820" />
    <text x="320" y="134" fontSize="11" fontWeight="700" fill="#ffffff">Your add-in</text>
    <rect x="320" y="158" width="50" height="6" rx="3" fill="#a0a2a6" />
    <rect x="320" y="170" width="114" height="22" rx="5" fill="#ffffff" stroke="#d4d6d9" />
    <rect x="320" y="204" width="64" height="6" rx="3" fill="#a0a2a6" />
    <rect x="320" y="216" width="114" height="22" rx="5" fill="#ffffff" stroke="#d4d6d9" />
    <rect x="320" y="262" width="114" height="28" rx="5" fill="#046999" />
    <text x="377" y="280" fontSize="11" fontWeight="700" fill="#ffffff" textAnchor="middle">Insert</text>

    {/* Dashed link from the ribbon button to the pane it opens */}
    <path d="M416 92v14" stroke="#046999" strokeWidth="1.5" strokeDasharray="3 3" />

    {/* Runtime badge */}
    <rect x="34" y="306" width="186" height="34" rx="17" fill="#111820" />
    <circle cx="54" cy="323" r="5" fill="#6fc3e8" />
    <text x="66" y="327" fontSize="11" fontWeight="700" fill="#ffffff">C# · .NET Framework 4.8</text>
  </svg>
);
