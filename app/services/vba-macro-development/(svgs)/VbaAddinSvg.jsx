// /services/vba-macro-development/(svgs)/VbaAddinSvg.jsx
// One add-in file feeding its tools into Excel, Word and PowerPoint at the same time.
// Decorative only, so it is hidden from assistive technology.
const FONT = "system-ui, -apple-system, 'Segoe UI', sans-serif";
const MONO = "ui-monospace, SFMono-Regular, Menlo, Consolas, monospace";

export const VbaAddinSvg = () => (
  <svg
    viewBox="0 0 440 320"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    focusable="false"
    fontFamily={FONT}
  >
    <defs>
      <filter id="vbaAddinShadow" x="-20%" y="-20%" width="140%" height="150%">
        <feDropShadow dx="0" dy="8" stdDeviation="9" floodColor="#0d1b2a" floodOpacity="0.12" />
      </filter>
    </defs>

    {/* Connectors */}
    <g stroke="#046999" strokeOpacity="0.5" strokeWidth="2" strokeDasharray="2 6" strokeLinecap="round">
      <path d="M160 160C200 160 200 62 252 62" />
      <path d="M160 160H252" />
      <path d="M160 160C200 160 200 258 252 258" />
    </g>

    {/* The add-in */}
    <g filter="url(#vbaAddinShadow)">
      <rect x="24" y="106" width="128" height="108" rx="16" fill="#046999" />
      <circle cx="152" cy="160" r="11" fill="#046999" />
    </g>
    <g fontFamily={MONO} fontSize="12" fill="#ffffff" fillOpacity="0.92">
      <text x="44" y="142">.xlam</text>
      <text x="44" y="164">.dotm</text>
      <text x="44" y="186">.ppam</text>
    </g>
    <path
      d="M110 134h20M110 156h20M110 178h20"
      stroke="#ffffff"
      strokeOpacity="0.45"
      strokeWidth="3"
      strokeLinecap="round"
    />

    {/* Excel */}
    <g filter="url(#vbaAddinShadow)">
      <rect x="252" y="22" width="164" height="80" rx="12" fill="#ffffff" />
    </g>
    <path d="M252 34a12 12 0 0 1 12-12h140a12 12 0 0 1 12 12v12H252z" fill="#e3e8ec" />
    <rect x="262" y="29" width="54" height="17" rx="5" fill="#046999" />
    <text x="289" y="41" fontSize="8.5" fontWeight="700" fill="#ffffff" textAnchor="middle">
      Add-in
    </text>
    <g stroke="#e3e8ec" strokeWidth="1.4">
      <path d="M252 64h164M252 82h164M292 46v56M340 46v56M378 46v56" />
    </g>
    <rect x="293" y="65" width="46" height="17" fill="#046999" fillOpacity="0.16" />

    {/* Word */}
    <g filter="url(#vbaAddinShadow)">
      <rect x="252" y="120" width="164" height="80" rx="12" fill="#ffffff" />
    </g>
    <path d="M252 132a12 12 0 0 1 12-12h140a12 12 0 0 1 12 12v12H252z" fill="#e3e8ec" />
    <rect x="262" y="127" width="54" height="17" rx="5" fill="#046999" />
    <text x="289" y="139" fontSize="8.5" fontWeight="700" fill="#ffffff" textAnchor="middle">
      Add-in
    </text>
    <g stroke="#d4d6d9" strokeWidth="3" strokeLinecap="round">
      <path d="M270 160h110" stroke="#4a5568" strokeOpacity="0.55" />
      <path d="M270 172h126M270 183h92" />
    </g>

    {/* PowerPoint */}
    <g filter="url(#vbaAddinShadow)">
      <rect x="252" y="218" width="164" height="80" rx="12" fill="#ffffff" />
    </g>
    <path d="M252 230a12 12 0 0 1 12-12h140a12 12 0 0 1 12 12v12H252z" fill="#e3e8ec" />
    <rect x="262" y="225" width="54" height="17" rx="5" fill="#046999" />
    <text x="289" y="237" fontSize="8.5" fontWeight="700" fill="#ffffff" textAnchor="middle">
      Add-in
    </text>
    <rect x="270" y="254" width="52" height="34" rx="4" fill="#f7f8f9" stroke="#d4d6d9" />
    <path d="M280 280v-8M290 280v-14M300 280v-10M310 280v-18" stroke="#046999" strokeWidth="3" strokeLinecap="round" />
    <path d="M336 258h60M336 270h46M336 282h54" stroke="#d4d6d9" strokeWidth="3" strokeLinecap="round" />
  </svg>
);
