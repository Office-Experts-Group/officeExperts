// app/services/cloud-based-solutions-with-azure/(svgs)/AzureCloudSvg.jsx
// Hero illustration for AzureIntro: an Azure SQL database inside a cloud, with encryption, region and
// backup badges, feeding three front ends (Access, a mobile app and a web portal).
// Decorative only, so it is hidden from screen readers. Paths marked data-flow are animated by
// azureIntro.module.scss (dash offset), and the animation stops for reduced-motion users.
// Colours are hardcoded hex values that match globals.scss tokens ($accent, $accent-on-dark, $dark-bg, $line, $grayBGC).

export const AzureCloudSvg = () => (
  <svg
    viewBox="0 0 500 440"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    focusable="false"
    fontFamily="inherit"
  >
    {/* ── Cloud: overlapping shapes in one fill read as a single cloud ── */}
    <g fill="#f2f3f5">
      <rect x="90" y="120" width="320" height="90" rx="45" />
      <circle cx="170" cy="122" r="55" />
      <circle cx="250" cy="92" r="76" />
      <circle cx="335" cy="117" r="55" />
    </g>

    {/* ── Connectors from the cloud to each front end ── */}
    <g stroke="#046999" strokeWidth="2" strokeLinecap="round">
      <path data-flow="" d="M250 210 C250 255 105 245 105 290" />
      <path data-flow="" d="M250 210 L250 282" />
      <path data-flow="" d="M250 210 C250 255 395 245 395 290" />
    </g>
    <circle cx="250" cy="210" r="6" fill="#046999" stroke="#ffffff" strokeWidth="3" />

    {/* ── Azure SQL database cylinder ── */}
    <ellipse cx="250" cy="158" rx="48" ry="13" fill="#046999" />
    <rect x="202" y="88" width="96" height="70" fill="#046999" />
    <g stroke="#ffffff" strokeOpacity="0.35" strokeWidth="2">
      <path d="M202 112 a48 13 0 0 0 96 0" />
      <path d="M202 135 a48 13 0 0 0 96 0" />
    </g>
    <ellipse cx="250" cy="88" rx="48" ry="13" fill="#6fc3e8" />
    <text
      x="250"
      y="194"
      textAnchor="middle"
      fontSize="13"
      fontWeight="700"
      fill="#0d1b2a"
    >
      Azure SQL Database
    </text>

    {/* ── Badge: encrypted ── */}
    <rect x="70" y="130" width="104" height="30" rx="15" fill="#ffffff" stroke="#e3e8ec" />
    <path
      d="M86 136 l8 3 v6 c0 5 -3.5 8 -8 9.5 c-4.5 -1.5 -8 -4.5 -8 -9.5 v-6 z"
      fill="#046999"
    />
    <text x="100" y="149.5" fontSize="11.5" fontWeight="700" fill="#0d1b2a">
      Encrypted
    </text>

    {/* ── Badge: Australian region ── */}
    <rect x="340" y="130" width="126" height="30" rx="15" fill="#ffffff" stroke="#e3e8ec" />
    <path
      d="M356 136 a6 6 0 0 1 6 6 c0 4.5 -6 11 -6 11 s-6 -6.5 -6 -11 a6 6 0 0 1 6 -6 z"
      fill="#046999"
    />
    <circle cx="356" cy="142" r="2.2" fill="#ffffff" />
    <text x="368" y="149.5" fontSize="11.5" fontWeight="700" fill="#0d1b2a">
      Australia East
    </text>

    {/* ── Badge: automatic backups ── */}
    <rect x="330" y="40" width="118" height="30" rx="15" fill="#ffffff" stroke="#e3e8ec" />
    <circle cx="346" cy="55" r="7" stroke="#046999" strokeWidth="2" />
    <path d="M346 51 v4.5 l3 2" stroke="#046999" strokeWidth="2" strokeLinecap="round" />
    <text x="359" y="59.5" fontSize="11.5" fontWeight="700" fill="#0d1b2a">
      Auto backups
    </text>

    {/* ── Front end 1: Access desktop form ── */}
    <rect x="30" y="290" width="150" height="110" rx="12" fill="#ffffff" stroke="#e3e8ec" />
    <path d="M30 312 H180" stroke="#e3e8ec" />
    <g fill="#d4d6d9">
      <circle cx="44" cy="301" r="3" />
      <circle cx="54" cy="301" r="3" />
      <circle cx="64" cy="301" r="3" />
      <rect x="44" y="324" width="34" height="5" rx="2.5" />
      <rect x="44" y="344" width="28" height="5" rx="2.5" />
      <rect x="44" y="364" width="36" height="5" rx="2.5" />
    </g>
    <g fill="#f7f8f9" stroke="#e3e8ec">
      <rect x="86" y="320" width="80" height="13" rx="3" />
      <rect x="86" y="340" width="80" height="13" rx="3" />
      <rect x="86" y="360" width="80" height="13" rx="3" />
    </g>
    <rect x="116" y="380" width="50" height="12" rx="3" fill="#046999" />
    <text x="105" y="424" textAnchor="middle" fontSize="12" fontWeight="600" fill="#4a5568">
      Access front end
    </text>

    {/* ── Front end 2: mobile app ── */}
    <rect x="215" y="282" width="70" height="126" rx="14" fill="#111820" />
    <rect x="221" y="292" width="58" height="108" rx="7" fill="#ffffff" />
    <rect x="240" y="286" width="20" height="3" rx="1.5" fill="#454545" />
    <rect x="227" y="300" width="46" height="9" rx="2" fill="#046999" />
    <g fill="#f2f3f5">
      <rect x="227" y="316" width="46" height="14" rx="3" />
      <rect x="227" y="334" width="46" height="14" rx="3" />
      <rect x="227" y="352" width="46" height="14" rx="3" />
      <rect x="227" y="370" width="46" height="14" rx="3" />
    </g>
    <g fill="#046999">
      <circle cx="234" cy="323" r="2.5" />
      <circle cx="234" cy="341" r="2.5" />
      <circle cx="234" cy="359" r="2.5" />
      <circle cx="234" cy="377" r="2.5" />
    </g>
    <text x="250" y="424" textAnchor="middle" fontSize="12" fontWeight="600" fill="#4a5568">
      Mobile app
    </text>

    {/* ── Front end 3: web portal ── */}
    <rect x="320" y="290" width="150" height="110" rx="12" fill="#ffffff" stroke="#e3e8ec" />
    <path d="M320 312 H470" stroke="#e3e8ec" />
    <g fill="#d4d6d9">
      <circle cx="334" cy="301" r="3" />
      <circle cx="344" cy="301" r="3" />
      <circle cx="354" cy="301" r="3" />
    </g>
    <rect x="372" y="296" width="88" height="10" rx="5" fill="#f2f3f5" />
    <rect x="334" y="322" width="122" height="26" rx="4" fill="#f2f3f5" />
    <rect x="342" y="329" width="60" height="5" rx="2.5" fill="#046999" />
    <rect x="342" y="338" width="40" height="4" rx="2" fill="#d4d6d9" />
    <g fill="#f7f8f9" stroke="#e3e8ec">
      <rect x="334" y="356" width="36" height="34" rx="4" />
      <rect x="377" y="356" width="36" height="34" rx="4" />
      <rect x="420" y="356" width="36" height="34" rx="4" />
    </g>
    <g fill="#046999">
      <rect x="340" y="378" width="16" height="4" rx="2" />
      <rect x="383" y="378" width="20" height="4" rx="2" />
      <rect x="426" y="378" width="12" height="4" rx="2" />
    </g>
    <text x="395" y="424" textAnchor="middle" fontSize="12" fontWeight="600" fill="#4a5568">
      Web portal
    </text>
  </svg>
);
