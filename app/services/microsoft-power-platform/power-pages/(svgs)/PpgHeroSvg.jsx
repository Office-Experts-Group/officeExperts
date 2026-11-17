// /app/services/microsoft-power-platform/power-pages/(svgs)/PpgHeroSvg.jsx
// Hero illustration. Drawn straight onto the hero background (no panel).
// Animated through the classes passed in: flowClass (dashed data flow) and
// liveClass (pulsing live dot).
// Hex values and their tokens: #046999 $accent, #e8f4fa $accent-light,
// #6fc3e8 $accent-on-dark, #034e72 $accent-dark, #0d1b2a $text-primary,
// #4a5568 $text-secondary, #e3e8ec $line, #d4d6d9 $line-strong,
// #f2f3f5 $grayBGC, #ffffff $white.

const PpgHeroSvg = ({ flowClass = "", liveClass = "" }) => (
  <svg
    viewBox="0 0 560 500"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    fontFamily="aptos"
    role="img"
    aria-labelledby="ppg-hero-svg-title ppg-hero-svg-desc"
  >
    <title id="ppg-hero-svg-title">
      A supplier portal that only shows the supplier’s own orders
    </title>
    <desc id="ppg-hero-svg-desc">
      A Dataverse database feeds a secure web portal. The signed-in supplier
      sees their own orders and a delivery chart, and a padlock shows access is
      controlled.
    </desc>

    {/* Depth rings */}
    <circle cx="320" cy="250" r="228" stroke="#e3e8ec" strokeWidth="1.5" />
    <circle
      cx="320"
      cy="250"
      r="172"
      stroke="#d4d6d9"
      strokeWidth="1.2"
      strokeDasharray="3 9"
    />
    <circle cx="148" cy="92" r="6" fill="#6fc3e8" />
    <circle cx="540" cy="318" r="5" fill="#046999" />
    <circle cx="256" cy="476" r="4" fill="#d4d6d9" />

    {/* Data flow from Dataverse into the portal (sits behind the window) */}
    <path
      className={flowClass}
      d="M132 392 C176 392 150 300 210 300"
      stroke="#046999"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeDasharray="6 8"
    />

    {/* Dataverse cylinder */}
    <path
      d="M30 350 V412 C30 424 52 434 80 434 C108 434 130 424 130 412 V350"
      fill="#e8f4fa"
      stroke="#046999"
      strokeWidth="2"
    />
    <path
      d="M30 374 C30 386 52 396 80 396 C108 396 130 386 130 374"
      stroke="#046999"
      strokeOpacity="0.45"
      strokeWidth="1.6"
    />
    <path
      d="M30 394 C30 406 52 416 80 416 C108 416 130 406 130 394"
      stroke="#046999"
      strokeOpacity="0.45"
      strokeWidth="1.6"
    />
    <ellipse
      cx="80"
      cy="350"
      rx="50"
      ry="14"
      fill="#ffffff"
      stroke="#046999"
      strokeWidth="2"
    />
    <text
      x="80"
      y="466"
      textAnchor="middle"
      fontSize="15"
      fontWeight="700"
      fill="#0d1b2a"
    >
      Dataverse
    </text>

    {/* Browser window: offset back card, then the window */}
    <rect x="188" y="88" width="330" height="290" rx="18" fill="#e8f4fa" />
    <rect
      x="170"
      y="70"
      width="330"
      height="290"
      rx="18"
      fill="#ffffff"
      stroke="#046999"
      strokeWidth="2"
    />
    <path
      d="M170 88 a18 18 0 0 1 18 -18 H482 a18 18 0 0 1 18 18 V110 H170 Z"
      fill="#046999"
    />
    <circle cx="194" cy="90" r="5" fill="#ffffff" fillOpacity="0.75" />
    <circle cx="210" cy="90" r="5" fill="#ffffff" fillOpacity="0.75" />
    <circle cx="226" cy="90" r="5" fill="#ffffff" fillOpacity="0.75" />
    <rect
      x="250"
      y="80"
      width="200"
      height="20"
      rx="10"
      fill="#ffffff"
      fillOpacity="0.2"
    />
    <rect x="262" y="88" width="9" height="7" rx="1.5" fill="#ffffff" />
    <path
      d="M264 88 v-2 a2.5 2.5 0 0 1 5 0 v2"
      stroke="#ffffff"
      strokeWidth="1.3"
    />
    <rect
      x="280"
      y="88"
      width="96"
      height="5"
      rx="2.5"
      fill="#ffffff"
      fillOpacity="0.6"
    />
    <circle className={liveClass} cx="474" cy="90" r="4" fill="#6fc3e8" />
    <circle cx="474" cy="90" r="4" fill="#6fc3e8" />

    {/* Window content */}
    <text x="194" y="142" fontSize="18" fontWeight="700" fill="#0d1b2a">
      Supplier portal
    </text>
    <rect x="194" y="152" width="120" height="6" rx="3" fill="#e3e8ec" />

    <rect x="194" y="170" width="282" height="26" rx="6" fill="#e8f4fa" />
    <text x="206" y="188" fontSize="14" fontWeight="700" fill="#046999">
      Order
    </text>
    <text x="366" y="188" fontSize="14" fontWeight="700" fill="#046999">
      Status
    </text>

    {/* Row 1 */}
    <rect x="206" y="216" width="60" height="6" rx="3" fill="#d4d6d9" />
    <rect x="290" y="216" width="40" height="6" rx="3" fill="#e3e8ec" />
    <rect x="358" y="208" width="96" height="22" rx="11" fill="#e8f4fa" />
    <text
      x="406"
      y="224"
      textAnchor="middle"
      fontSize="14"
      fontWeight="700"
      fill="#046999"
    >
      Shipped
    </text>
    {/* Row 2 (selected) */}
    <rect
      x="190"
      y="240"
      width="290"
      height="30"
      rx="8"
      fill="#e8f4fa"
      fillOpacity="0.45"
      stroke="#046999"
      strokeWidth="1.5"
    />
    <rect x="206" y="252" width="60" height="6" rx="3" fill="#d4d6d9" />
    <rect x="290" y="252" width="40" height="6" rx="3" fill="#e3e8ec" />
    <rect x="358" y="244" width="96" height="22" rx="11" fill="#046999" />
    <text
      x="406"
      y="260"
      textAnchor="middle"
      fontSize="14"
      fontWeight="700"
      fill="#ffffff"
    >
      Open
    </text>
    {/* Row 3 */}
    <rect x="206" y="288" width="60" height="6" rx="3" fill="#d4d6d9" />
    <rect x="290" y="288" width="40" height="6" rx="3" fill="#e3e8ec" />
    <rect x="358" y="280" width="96" height="22" rx="11" fill="#f2f3f5" />
    <text
      x="406"
      y="296"
      textAnchor="middle"
      fontSize="14"
      fontWeight="700"
      fill="#4a5568"
    >
      Paid
    </text>

    <rect x="194" y="318" width="170" height="32" rx="8" fill="#046999" />
    <text
      x="279"
      y="339"
      textAnchor="middle"
      fontSize="14"
      fontWeight="700"
      fill="#ffffff"
    >
      Confirm delivery
    </text>

    {/* Padlock badge on the window corner */}
    <circle
      cx="500"
      cy="72"
      r="30"
      fill="#0d1b2a"
      stroke="#ffffff"
      strokeWidth="4"
    />
    <rect x="490" y="72" width="20" height="16" rx="3" fill="#ffffff" />
    <path
      d="M494 72 v-6 a6 6 0 0 1 12 0 v6"
      stroke="#ffffff"
      strokeWidth="3"
      strokeLinecap="round"
    />
    <circle cx="500" cy="79" r="2.5" fill="#0d1b2a" />

    {/* Role card (left) */}
    <rect
      x="14"
      y="134"
      width="176"
      height="80"
      rx="14"
      fill="#0d1b2a"
      fillOpacity="0.06"
    />
    <rect
      x="14"
      y="128"
      width="176"
      height="80"
      rx="14"
      fill="#ffffff"
      stroke="#e3e8ec"
      strokeWidth="1.5"
    />
    <circle cx="50" cy="168" r="18" fill="#e8f4fa" />
    <circle cx="50" cy="162" r="6" fill="#046999" />
    <path d="M38 180 a12 10 0 0 1 24 0 Z" fill="#046999" />
    <text x="78" y="165" fontSize="16" fontWeight="700" fill="#0d1b2a">
      Supplier
    </text>
    <text x="78" y="188" fontSize="14" fill="#4a5568">
      Own orders only
    </text>

    {/* Embedded dashboard card (bottom right) */}
    <rect
      x="376"
      y="332"
      width="166"
      height="140"
      rx="14"
      fill="#0d1b2a"
      fillOpacity="0.06"
    />
    <rect
      x="376"
      y="326"
      width="166"
      height="140"
      rx="14"
      fill="#ffffff"
      stroke="#e3e8ec"
      strokeWidth="1.5"
    />
    <text x="392" y="352" fontSize="14" fontWeight="700" fill="#0d1b2a">
      Deliveries
    </text>
    <path d="M386 446 H532" stroke="#e3e8ec" strokeWidth="1.5" />
    <rect x="394" y="420" width="14" height="26" rx="3" fill="#e8f4fa" />
    <rect x="416" y="402" width="14" height="44" rx="3" fill="#e8f4fa" />
    <rect x="438" y="412" width="14" height="34" rx="3" fill="#e8f4fa" />
    <rect x="460" y="388" width="14" height="58" rx="3" fill="#e8f4fa" />
    <rect x="482" y="396" width="14" height="50" rx="3" fill="#046999" />
    <path
      d="M401 408 L423 390 L445 398 L467 374 L489 382"
      stroke="#034e72"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="467" cy="374" r="3.5" fill="#034e72" />
    <circle cx="489" cy="382" r="3.5" fill="#034e72" />
  </svg>
);

export default PpgHeroSvg;
