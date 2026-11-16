// /app/blog/power-bi-licensing-costs/(svgs)/HeroSvg.jsx
// Hero illustration: what you budgeted vs what the bill becomes. Sits directly on the dark hero.
// Hex values match: #046999 $accent, #6fc3e8 $accent-on-dark, #18232e $dark-surface,
// #1a2a3a $dark-mid, #0b2433 $ink, white at 8 to 75% = $white-08 to $white-75.

const HeroSvg = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 520 470"
    role="img"
    aria-labelledby="pbl-hero-title pbl-hero-desc"
    fontFamily="aptos, 'Segoe UI', Arial, sans-serif"
  >
    <title id="pbl-hero-title">
      Budgeted Power BI cost compared with the actual bill
    </title>
    <desc id="pbl-hero-desc">
      A short column labelled Pro seats shows the budget. A much taller column
      shows the real bill, stacked from Pro seats, capacity, a gateway server, a
      compliance add-on and unused seats. A dashed line marks the budget and the
      blocks above it are the hidden costs.
    </desc>
    <defs>
      <marker
        id="pbl-hero-arrow"
        viewBox="0 0 10 10"
        refX="8"
        refY="5"
        markerWidth="8"
        markerHeight="8"
        orient="auto-start-reverse"
      >
        <path d="M1 1l8 4-8 4z" fill="#6fc3e8" />
      </marker>
    </defs>

    {/* dashboard card, top left */}
    <g transform="translate(0 34)">
      <rect
        x="24"
        y="26"
        width="196"
        height="128"
        rx="16"
        fill="#18232e"
        stroke="rgba(255,255,255,0.12)"
      />
      <rect
        x="40"
        y="42"
        width="60"
        height="8"
        rx="4"
        fill="rgba(255,255,255,0.35)"
      />
      <rect
        x="40"
        y="58"
        width="36"
        height="6"
        rx="3"
        fill="rgba(255,255,255,0.18)"
      />
      <rect x="44" y="108" width="18" height="34" rx="3" fill="#046999" />
      <rect x="70" y="92" width="18" height="50" rx="3" fill="#046999" />
      <rect x="96" y="100" width="18" height="42" rx="3" fill="#046999" />
      <rect x="122" y="76" width="18" height="66" rx="3" fill="#6fc3e8" />
      <rect x="148" y="84" width="18" height="58" rx="3" fill="#046999" />
      <path
        d="M44 100l26-16 26 8 26-24 26 6 26-14"
        fill="none"
        stroke="#6fc3e8"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx="196"
        cy="72"
        r="14"
        fill="none"
        stroke="rgba(255,255,255,0.35)"
        strokeWidth="3"
      />
      <path d="M196 72v-14a14 14 0 0 1 14 14z" fill="#6fc3e8" />
    </g>

    {/* ground line */}
    <path d="M24 400h472" stroke="rgba(255,255,255,0.18)" strokeWidth="2" />

    {/* budget column */}
    <rect x="50" y="330" width="140" height="70" rx="8" fill="#046999" />
    <text
      x="120"
      y="371"
      textAnchor="middle"
      fontSize="16"
      fontWeight="700"
      fill="#ffffff"
    >
      Pro seats
    </text>
    {/* coins on the budget column */}
    <g>
      <ellipse cx="120" cy="322" rx="30" ry="8" fill="#6fc3e8" />
      <rect x="90" y="314" width="60" height="8" fill="#6fc3e8" />
      <ellipse cx="120" cy="314" rx="30" ry="8" fill="#a8dcf2" />
      <rect x="90" y="306" width="60" height="8" fill="#6fc3e8" />
      <ellipse cx="120" cy="306" rx="30" ry="8" fill="#a8dcf2" />
      <path
        d="M120 301v10M116 303.5h6a2.5 2.5 0 0 1 0 5h-5a2.5 2.5 0 0 0 0 5h6"
        fill="none"
        stroke="#046999"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </g>
    <text
      x="120"
      y="436"
      textAnchor="middle"
      fontSize="16"
      fill="rgba(255,255,255,0.75)"
    >
      What you budgeted
    </text>

    {/* actual bill column, stacked from the ground up */}
    <rect x="296" y="330" width="170" height="70" rx="8" fill="#046999" />
    <text
      x="381"
      y="371"
      textAnchor="middle"
      fontSize="16"
      fontWeight="700"
      fill="#ffffff"
    >
      Pro seats
    </text>
    <rect x="296" y="222" width="170" height="108" fill="#6fc3e8" />
    <text
      x="381"
      y="271"
      textAnchor="middle"
      fontSize="16"
      fontWeight="700"
      fill="#0b2433"
    >
      Premium capacity
    </text>
    <text x="381" y="293" textAnchor="middle" fontSize="14" fill="#0b2433">
      when Pro is not enough
    </text>
    <rect
      x="296"
      y="162"
      width="170"
      height="60"
      fill="#1a2a3a"
      stroke="rgba(255,255,255,0.35)"
    />
    <text
      x="381"
      y="197"
      textAnchor="middle"
      fontSize="16"
      fontWeight="700"
      fill="#ffffff"
    >
      Gateway server
    </text>
    <rect
      x="296"
      y="110"
      width="170"
      height="52"
      fill="#18232e"
      stroke="rgba(255,255,255,0.35)"
    />
    <text
      x="381"
      y="141"
      textAnchor="middle"
      fontSize="16"
      fontWeight="700"
      fill="#ffffff"
    >
      Compliance extras
    </text>
    <rect
      x="296"
      y="62"
      width="170"
      height="48"
      rx="8"
      fill="none"
      stroke="#6fc3e8"
      strokeWidth="2"
      strokeDasharray="6 5"
    />
    <text
      x="381"
      y="92"
      textAnchor="middle"
      fontSize="16"
      fontWeight="700"
      fill="#6fc3e8"
    >
      Unused seats
    </text>
    <text
      x="381"
      y="436"
      textAnchor="middle"
      fontSize="16"
      fill="rgba(255,255,255,0.75)"
    >
      What you pay
    </text>

    {/* budget line */}
    <path
      d="M24 330h464"
      stroke="rgba(255,255,255,0.55)"
      strokeWidth="2"
      strokeDasharray="7 6"
    />
    <text x="212" y="322" fontSize="14" fill="rgba(255,255,255,0.75)">
      Budget
    </text>

    {/* hidden cost bracket */}
    <path d="M478 62v260" stroke="#6fc3e8" strokeWidth="2" fill="none" />
    <path d="M472 62h6M472 322h6" stroke="#6fc3e8" strokeWidth="2" />
    <text
      transform="translate(504 192) rotate(90)"
      textAnchor="middle"
      fontSize="14"
      fontWeight="700"
      fill="#6fc3e8"
    >
      Hidden costs
    </text>

    {/* growth arrow */}
    <path
      d="M168 296C214 262 244 214 290 176"
      fill="none"
      stroke="#6fc3e8"
      strokeWidth="2.5"
      strokeLinecap="round"
      markerEnd="url(#pbl-hero-arrow)"
    />
  </svg>
);

export default HeroSvg;
