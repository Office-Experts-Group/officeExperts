// /app/services/microsoft-power-platform/power-automate/(svgs)/PautoHeroSvg.jsx
// Hero illustration, drawn straight onto the hero background (no panel).
// Colours: #046999 $accent, #034e72 $accent-dark, #6fc3e8 $accent-on-dark,
// #e8f4fa $accent-light, #0b2433 $ink, #4a5568 $text-secondary,
// #9a9da1 $text-muted, #e3e8ec $line, #d4d6d9 $line-strong, #f7f8f9 $light-bg.
// Pass module classes in: flowClass animates the dashed lines, liveClass
// pulses the "live" dot. Both only move inside prefers-reduced-motion.

const PautoHeroSvg = ({ flowClass = "", liveClass = "" }) => (
  <svg
    viewBox="0 0 640 510"
    role="img"
    aria-labelledby="pauto-hero-title pauto-hero-desc"
    fontFamily="aptos"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title id="pauto-hero-title">
      A Power Automate flow handling a supplier invoice
    </title>
    <desc id="pauto-hero-desc">
      An emailed invoice starts a flow. AI Builder reads the supplier, amount
      and due date, a manager approves it, and it is posted to the finance
      system. Anything unusual is sent to Teams for a person to check.
    </desc>

    <defs>
      <filter
        id="pauto-hero-shadow"
        x="-10%"
        y="-10%"
        width="120%"
        height="130%"
      >
        <feDropShadow
          dx="0"
          dy="6"
          stdDeviation="7"
          floodColor="#0d1b2a"
          floodOpacity="0.09"
        />
      </filter>
    </defs>

    {/* faint rings for depth */}
    <g fill="none" stroke="#046999" strokeOpacity="0.09">
      <circle cx="330" cy="270" r="120" />
      <circle cx="330" cy="270" r="200" />
      <circle cx="330" cy="270" r="280" />
    </g>

    {/* flow lines (behind the cards) */}
    <g
      fill="none"
      stroke="#046999"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeDasharray="6 8"
    >
      <path className={flowClass} d="M230 160V214" />
      <path className={flowClass} d="M314 284C352 284 346 122 384 122" />
      <path className={flowClass} d="M314 284C352 284 346 375 384 375" />
      <path className={flowClass} d="M502 204V300" />
    </g>
    <path
      d="M170 354V392"
      fill="none"
      stroke="#9a9da1"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeDasharray="4 6"
    />
    <g fill="#ffffff" stroke="#046999" strokeWidth="2">
      <circle cx="230" cy="160" r="5" />
      <circle cx="230" cy="214" r="5" />
      <circle cx="314" cy="284" r="5" />
      <circle cx="384" cy="122" r="5" />
      <circle cx="384" cy="375" r="5" />
      <circle cx="502" cy="204" r="5" />
      <circle cx="502" cy="300" r="5" />
    </g>
    <g fill="#ffffff" stroke="#9a9da1" strokeWidth="2">
      <circle cx="170" cy="354" r="5" />
      <circle cx="170" cy="392" r="5" />
    </g>
    <text x="184" y="378" fontSize="14" fill="#4a5568">
      if something is off
    </text>

    {/* trigger chip + email card */}
    <rect x="24" y="12" width="84" height="26" rx="13" fill="#046999" />
    <text
      x="66"
      y="30"
      fontSize="14"
      fontWeight="700"
      fill="#ffffff"
      textAnchor="middle"
    >
      Trigger
    </text>
    <g filter="url(#pauto-hero-shadow)">
      <rect
        x="24"
        y="44"
        width="240"
        height="116"
        rx="16"
        fill="#ffffff"
        stroke="#e3e8ec"
      />
    </g>
    <rect
      x="44"
      y="62"
      width="34"
      height="24"
      rx="4"
      fill="#e8f4fa"
      stroke="#046999"
      strokeWidth="1.6"
    />
    <path
      d="M45 65l16 12 16-12"
      fill="none"
      stroke="#046999"
      strokeWidth="1.6"
      strokeLinejoin="round"
    />
    <text x="90" y="72" fontSize="16" fontWeight="700" fill="#0b2433">
      New email
    </text>
    <text x="90" y="92" fontSize="14" fill="#4a5568">
      Supplier invoice
    </text>
    <rect
      x="44"
      y="108"
      width="200"
      height="36"
      rx="8"
      fill="#f7f8f9"
      stroke="#e3e8ec"
    />
    <rect x="54" y="116" width="22" height="20" rx="3" fill="#046999" />
    <path
      d="M59 122h12M59 126h12M59 130h8"
      stroke="#ffffff"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
    <text x="86" y="131" fontSize="14" fill="#0b2433">
      invoice_4471.pdf
    </text>

    {/* AI step card */}
    <g filter="url(#pauto-hero-shadow)">
      <rect
        x="44"
        y="214"
        width="270"
        height="140"
        rx="16"
        fill="#ffffff"
        stroke="#e3e8ec"
      />
    </g>
    <rect x="60" y="202" width="104" height="26" rx="13" fill="#046999" />
    <path
      d="M76 215l1.8 3.6 3.6 1.8-3.6 1.8-1.8 3.6-1.8-3.6-3.6-1.8 3.6-1.8z"
      fill="#ffffff"
    />
    <text
      x="124"
      y="220"
      fontSize="14"
      fontWeight="700"
      fill="#ffffff"
      textAnchor="middle"
    >
      AI reads it
    </text>
    <rect
      x="64"
      y="240"
      width="84"
      height="100"
      rx="8"
      fill="#f7f8f9"
      stroke="#d4d6d9"
    />
    <rect
      x="72"
      y="244"
      width="40"
      height="5"
      rx="2.5"
      fill="#9a9da1"
      opacity="0.6"
    />
    <rect
      x="72"
      y="251"
      width="60"
      height="12"
      rx="3"
      fill="#046999"
      opacity="0.28"
    />
    <rect x="72" y="267" width="68" height="4" rx="2" fill="#e3e8ec" />
    <rect
      x="72"
      y="279"
      width="56"
      height="12"
      rx="3"
      fill="#046999"
      opacity="0.28"
    />
    <rect x="72" y="296" width="62" height="4" rx="2" fill="#e3e8ec" />
    <rect x="72" y="303" width="48" height="4" rx="2" fill="#e3e8ec" />
    <rect
      x="72"
      y="313"
      width="52"
      height="12"
      rx="3"
      fill="#046999"
      opacity="0.28"
    />
    <rect x="72" y="329" width="60" height="4" rx="2" fill="#e3e8ec" />
    <g fill="none" stroke="#046999" strokeWidth="1.5" strokeDasharray="3 3">
      <path d="M134 257H165" />
      <path d="M130 285H165" />
      <path d="M126 319H165" />
    </g>
    <g fill="#046999">
      <circle cx="172" cy="257" r="7" />
      <circle cx="172" cy="285" r="7" />
      <circle cx="172" cy="313" r="7" />
    </g>
    <g
      fill="none"
      stroke="#ffffff"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M168.5 257l2.4 2.4 4-4.6" />
      <path d="M168.5 285l2.4 2.4 4-4.6" />
      <path d="M168.5 313l2.4 2.4 4-4.6" />
    </g>
    <g fontSize="14" fill="#0b2433">
      <text x="186" y="262">
        Supplier
      </text>
      <text x="186" y="290">
        Amount $4,280
      </text>
      <text x="186" y="318">
        Due 30 Nov
      </text>
    </g>

    {/* approval card */}
    <rect x="384" y="8" width="128" height="26" rx="13" fill="#0b2433" />
    <circle cx="402" cy="21" r="4.5" fill="#6fc3e8" />
    <circle className={liveClass} cx="402" cy="21" r="4.5" fill="#6fc3e8" />
    <text x="414" y="26" fontSize="14" fontWeight="700" fill="#ffffff">
      Runs 24/7
    </text>
    <g filter="url(#pauto-hero-shadow)">
      <rect
        x="384"
        y="40"
        width="236"
        height="164"
        rx="16"
        fill="#ffffff"
        stroke="#e3e8ec"
      />
    </g>
    <circle
      cx="414"
      cy="76"
      r="16"
      fill="#e8f4fa"
      stroke="#046999"
      strokeWidth="1.6"
    />
    <circle cx="414" cy="71" r="5" fill="#046999" />
    <path d="M405 86a9 8 0 0 1 18 0z" fill="#046999" />
    <text x="440" y="72" fontSize="16" fontWeight="700" fill="#0b2433">
      Approval needed
    </text>
    <text x="440" y="92" fontSize="14" fill="#4a5568">
      Invoice $4,280
    </text>
    <path d="M404 106H600" stroke="#e3e8ec" />
    <circle
      cx="411"
      cy="125"
      r="7"
      fill="#e8f4fa"
      stroke="#046999"
      strokeWidth="1.2"
    />
    <path
      d="M407.5 125l2.4 2.4 4-4.6"
      fill="none"
      stroke="#046999"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <text x="426" y="130" fontSize="14" fill="#4a5568">
      Matches purchase order
    </text>
    <rect x="404" y="146" width="88" height="34" rx="6" fill="#046999" />
    <text
      x="448"
      y="168"
      fontSize="14"
      fontWeight="700"
      fill="#ffffff"
      textAnchor="middle"
    >
      Approve
    </text>
    <rect
      x="504"
      y="146"
      width="96"
      height="34"
      rx="6"
      fill="#ffffff"
      stroke="#d4d6d9"
    />
    <text
      x="552"
      y="168"
      fontSize="14"
      fontWeight="700"
      fill="#0b2433"
      textAnchor="middle"
    >
      Reject
    </text>

    {/* finance system card */}
    <g filter="url(#pauto-hero-shadow)">
      <rect
        x="384"
        y="300"
        width="236"
        height="150"
        rx="16"
        fill="#ffffff"
        stroke="#e3e8ec"
      />
    </g>
    <text x="404" y="326" fontSize="16" fontWeight="700" fill="#0b2433">
      Finance system
    </text>
    <g>
      <rect x="404" y="340" width="196" height="26" rx="6" fill="#f7f8f9" />
      <rect x="404" y="370" width="196" height="26" rx="6" fill="#f7f8f9" />
      <rect
        x="404"
        y="400"
        width="196"
        height="26"
        rx="6"
        fill="#e8f4fa"
        stroke="#046999"
        strokeOpacity="0.4"
      />
      <g fontSize="14" fill="#0b2433">
        <text x="414" y="358">
          INV-4469
        </text>
        <text x="414" y="388">
          INV-4470
        </text>
        <text x="414" y="418" fontWeight="700">
          INV-4471
        </text>
      </g>
      <rect x="534" y="343" width="58" height="20" rx="10" fill="#e3e8ec" />
      <rect x="534" y="373" width="58" height="20" rx="10" fill="#e3e8ec" />
      <rect x="534" y="403" width="58" height="20" rx="10" fill="#046999" />
      <g fontSize="14" textAnchor="middle">
        <text x="563" y="358" fill="#4a5568">
          Posted
        </text>
        <text x="563" y="388" fill="#4a5568">
          Posted
        </text>
        <text x="563" y="418" fill="#ffffff" fontWeight="700">
          New
        </text>
      </g>
    </g>

    {/* exception: needs a human */}
    <g filter="url(#pauto-hero-shadow)">
      <rect
        x="44"
        y="392"
        width="250"
        height="92"
        rx="16"
        fill="#ffffff"
        stroke="#e3e8ec"
      />
    </g>
    <circle
      cx="74"
      cy="422"
      r="14"
      fill="#e8f4fa"
      stroke="#046999"
      strokeWidth="1.6"
    />
    <circle cx="74" cy="418" r="4.5" fill="#046999" />
    <path d="M66 430a8 7 0 0 1 16 0z" fill="#046999" />
    <text x="100" y="420" fontSize="16" fontWeight="700" fill="#0b2433">
      Needs a human
    </text>
    <text x="100" y="440" fontSize="14" fill="#4a5568">
      PO number missing
    </text>
    <rect x="64" y="454" width="124" height="22" rx="11" fill="#e8f4fa" />
    <text
      x="126"
      y="470"
      fontSize="14"
      fontWeight="700"
      fill="#046999"
      textAnchor="middle"
    >
      Sent to Teams
    </text>

    {/* outcome pill */}
    <rect
      x="384"
      y="466"
      width="180"
      height="30"
      rx="15"
      fill="#e8f4fa"
      stroke="#046999"
      strokeOpacity="0.28"
    />
    <text
      x="474"
      y="486"
      fontSize="14"
      fontWeight="700"
      fill="#046999"
      textAnchor="middle"
    >
      No one touched it
    </text>
  </svg>
);

export default PautoHeroSvg;
