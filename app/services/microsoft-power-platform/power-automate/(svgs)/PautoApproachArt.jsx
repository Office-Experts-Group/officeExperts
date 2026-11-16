// /app/services/microsoft-power-platform/power-automate/(svgs)/PautoApproachArt.jsx
// Spot art for the "How we work" section: four icons for the differentiators
// and one illustration per delivery step. Decorative, so aria-hidden.
// Colours: #046999 $accent, #e8f4fa $accent-light, #0b2433 $ink,
// #9a9da1 $text-muted, #e3e8ec $line, #d4d6d9 $line-strong, #f7f8f9 $light-bg.

const iconFrame = {
  viewBox: "0 0 56 56",
  "aria-hidden": "true",
  focusable: "false",
  xmlns: "http://www.w3.org/2000/svg",
};

const artFrame = {
  viewBox: "0 0 220 140",
  "aria-hidden": "true",
  focusable: "false",
  xmlns: "http://www.w3.org/2000/svg",
};

const accentLine = {
  fill: "none",
  stroke: "#046999",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

/* ── Differentiator icons ─────────────────────────────── */

// We build in your environment: a boundary with the flow inside it
export const PautoTenantIcon = () => (
  <svg {...iconFrame}>
    <rect
      x="4"
      y="4"
      width="48"
      height="48"
      rx="12"
      fill="#e8f4fa"
      stroke="#046999"
      strokeWidth="1.8"
      strokeDasharray="4 4"
    />
    <circle cx="17" cy="24" r="5" fill="#ffffff" {...accentLine} />
    <rect x="31" y="19" width="12" height="10" rx="2.5" fill="#046999" />
    <path d="M22 24h9" {...accentLine} />
    <rect
      x="19"
      y="34"
      width="18"
      height="12"
      rx="3"
      fill="#ffffff"
      {...accentLine}
    />
    <path d="M23 34v-3a5 5 0 0 1 10 0v3" {...accentLine} />
  </svg>
);

// AI model training: accuracy climbing as samples go in
export const PautoTrainIcon = () => (
  <svg {...iconFrame}>
    <rect x="4" y="4" width="48" height="48" rx="12" fill="#e8f4fa" />
    <rect
      x="11"
      y="33"
      width="9"
      height="13"
      rx="2"
      fill="#ffffff"
      stroke="#046999"
      strokeWidth="1.8"
    />
    <rect
      x="23"
      y="25"
      width="9"
      height="21"
      rx="2"
      fill="#ffffff"
      stroke="#046999"
      strokeWidth="1.8"
    />
    <rect x="35" y="15" width="9" height="31" rx="2" fill="#046999" />
    <path d="M12 22l8-5 8 3 10-9" {...accentLine} strokeDasharray="1 4" />
    <path
      d="M44 10l1.2 3 3 1.2-3 1.2-1.2 3-1.2-3-3-1.2 3-1.2z"
      fill="#0b2433"
    />
  </svg>
);

// Transparent pricing: a costed line-by-line quote
export const PautoPriceIcon = () => (
  <svg {...iconFrame}>
    <rect x="4" y="4" width="48" height="48" rx="12" fill="#e8f4fa" />
    <path
      d="M15 10h26v34l-4-3-4 3-5-3-5 3-4-3-4 3z"
      fill="#ffffff"
      stroke="#046999"
      strokeWidth="1.8"
      strokeLinejoin="round"
    />
    <path
      d="M20 19h16M20 26h16"
      stroke="#9a9da1"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M20 33h8"
      stroke="#046999"
      strokeWidth="2.4"
      strokeLinecap="round"
    />
    <circle
      cx="40"
      cy="38"
      r="7"
      fill="#ffffff"
      stroke="#0b2433"
      strokeWidth="1.8"
    />
    <path
      d="M45 43l5 5"
      stroke="#0b2433"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

// We stick around: a calendar that keeps repeating
export const PautoStayIcon = () => (
  <svg {...iconFrame}>
    <rect x="4" y="4" width="48" height="48" rx="12" fill="#e8f4fa" />
    <rect
      x="12"
      y="14"
      width="32"
      height="28"
      rx="5"
      fill="#ffffff"
      stroke="#046999"
      strokeWidth="1.8"
    />
    <path d="M12 23h32" stroke="#046999" strokeWidth="1.8" />
    <path d="M20 10v7M36 10v7" {...accentLine} />
    <rect x="18" y="28" width="7" height="6" rx="1.5" fill="#046999" />
    <rect
      x="31"
      y="28"
      width="7"
      height="6"
      rx="1.5"
      fill="#9a9da1"
      opacity="0.6"
    />
    <path
      d="M46 36a10 10 0 0 1-12 9"
      fill="none"
      stroke="#0b2433"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M33 41l1.5 4.5 4.5-1.5"
      fill="none"
      stroke="#0b2433"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/* ── Step illustrations (on white tiles) ──────────────── */

// Discovery: a process map with a repeated step under the magnifier, then ranking
export const PautoDiscoveryArt = () => (
  <svg {...artFrame}>
    <g fill="#e8f4fa" stroke="#046999" strokeWidth="1.6">
      <rect x="14" y="12" width="64" height="26" rx="6" />
      <rect
        x="14"
        y="52"
        width="64"
        height="26"
        rx="6"
        fill="#046999"
        fillOpacity="0.22"
      />
      <rect x="14" y="92" width="64" height="26" rx="6" />
    </g>
    <g stroke="#9a9da1" strokeWidth="3" strokeLinecap="round">
      <path d="M24 22h30M24 62h38M24 102h26" />
    </g>
    <path
      d="M46 38v14M46 78v14"
      stroke="#046999"
      strokeWidth="1.8"
      strokeDasharray="2 3"
    />
    <circle
      cx="70"
      cy="64"
      r="21"
      fill="#ffffff"
      fillOpacity="0.55"
      stroke="#0b2433"
      strokeWidth="2.4"
    />
    <path
      d="M85 79l14 14"
      stroke="#0b2433"
      strokeWidth="3.4"
      strokeLinecap="round"
    />
    <path
      d="M62 64a8 8 0 0 1 13-6m1-3l1 6-6 1M78 64a8 8 0 0 1-13 6m-1 3l-1-6 6-1"
      fill="none"
      stroke="#046999"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <g>
      <rect x="118" y="22" width="88" height="14" rx="7" fill="#f7f8f9" />
      <rect x="118" y="22" width="80" height="14" rx="7" fill="#046999" />
      <rect x="118" y="52" width="88" height="14" rx="7" fill="#f7f8f9" />
      <rect
        x="118"
        y="52"
        width="56"
        height="14"
        rx="7"
        fill="#046999"
        opacity="0.6"
      />
      <rect x="118" y="82" width="88" height="14" rx="7" fill="#f7f8f9" />
      <rect
        x="118"
        y="82"
        width="32"
        height="14"
        rx="7"
        fill="#046999"
        opacity="0.3"
      />
    </g>
    <path
      d="M124 112l2.6 5.2 5.8.8-4.2 4 1 5.8-5.2-2.8-5.2 2.8 1-5.8-4.2-4 5.8-.8z"
      fill="#0b2433"
      transform="translate(70 -6)"
    />
  </svg>
);

// Design: options side by side, one chosen, with pros and cons
export const PautoDesignArt = () => (
  <svg {...artFrame}>
    <g fill="#ffffff" stroke="#d4d6d9" strokeWidth="1.4">
      <rect x="10" y="26" width="58" height="80" rx="8" />
      <rect x="152" y="26" width="58" height="80" rx="8" />
    </g>
    <rect
      x="76"
      y="14"
      width="68"
      height="104"
      rx="10"
      fill="#e8f4fa"
      stroke="#046999"
      strokeWidth="2"
    />
    <g stroke="#d4d6d9" strokeWidth="3" strokeLinecap="round">
      <path d="M20 40h28M20 50h36M162 40h28M162 50h36" />
    </g>
    <path
      d="M88 30h30M88 40h44"
      stroke="#0b2433"
      strokeWidth="3.2"
      strokeLinecap="round"
    />
    <circle cx="92" cy="62" r="6" fill="#046999" />
    <path
      d="M89 62h6M92 59v6"
      stroke="#ffffff"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
    <path
      d="M104 62h28"
      stroke="#9a9da1"
      strokeWidth="3"
      strokeLinecap="round"
    />
    <circle cx="92" cy="80" r="6" fill="#046999" />
    <path
      d="M89 80h6M92 77v6"
      stroke="#ffffff"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
    <path
      d="M104 80h22"
      stroke="#9a9da1"
      strokeWidth="3"
      strokeLinecap="round"
    />
    <circle
      cx="92"
      cy="98"
      r="6"
      fill="#ffffff"
      stroke="#9a9da1"
      strokeWidth="1.6"
    />
    <path
      d="M89 98h6"
      stroke="#9a9da1"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
    <path
      d="M104 98h26"
      stroke="#d4d6d9"
      strokeWidth="3"
      strokeLinecap="round"
    />
    <path
      d="M30 76l3 3 6-7M172 76l3 3 6-7"
      fill="none"
      stroke="#d4d6d9"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M44 128h132"
      stroke="#e3e8ec"
      strokeWidth="3"
      strokeLinecap="round"
    />
    <circle
      cx="110"
      cy="128"
      r="7"
      fill="#046999"
      stroke="#ffffff"
      strokeWidth="2"
    />
  </svg>
);

// Flow architecture: the whole flow on paper, with an error path and a log
export const PautoBlueprintArt = () => (
  <svg {...artFrame}>
    <rect x="4" y="4" width="212" height="132" rx="10" fill="#f7f8f9" />
    <g stroke="#e3e8ec">
      <path d="M4 36h212M4 68h212M4 100h212M40 4v132M76 4v132M112 4v132M148 4v132M184 4v132" />
    </g>
    <rect x="12" y="52" width="36" height="28" rx="7" fill="#046999" />
    <path d="M33 58l-8 10h5l-2 8 9-11h-5z" fill="#ffffff" />
    <path d="M48 66h14" stroke="#046999" strokeWidth="1.8" />
    <path
      d="M86 46l22 20-22 20-22-20z"
      fill="#ffffff"
      stroke="#046999"
      strokeWidth="1.8"
    />
    <path d="M108 66c8 0 8-24 16-24" {...accentLine} />
    <path d="M108 66c8 0 8 28 16 28" {...accentLine} strokeDasharray="3 3" />
    <rect
      x="124"
      y="28"
      width="40"
      height="28"
      rx="7"
      fill="#e8f4fa"
      stroke="#046999"
      strokeWidth="1.8"
    />
    <path
      d="M144 36l1.8 4.2 4.2 1.8-4.2 1.8-1.8 4.2-1.8-4.2-4.2-1.8 4.2-1.8z"
      fill="#046999"
    />
    <rect
      x="124"
      y="80"
      width="40"
      height="28"
      rx="7"
      fill="#ffffff"
      stroke="#9a9da1"
      strokeWidth="1.8"
      strokeDasharray="3 3"
    />
    <path d="M144 100v-5a5 5 0 1 1 10 0v0" fill="none" />
    <path
      d="M139 98v-4a5 5 0 1 1 10 0v4l1.5 2h-13z"
      fill="none"
      stroke="#0b2433"
      strokeWidth="1.6"
      strokeLinejoin="round"
    />
    <rect
      x="176"
      y="26"
      width="32"
      height="84"
      rx="6"
      fill="#ffffff"
      stroke="#d4d6d9"
    />
    <path
      d="M182 38h20M182 48h14M182 58h20M182 68h12M182 78h20M182 88h14"
      stroke="#9a9da1"
      strokeWidth="2.4"
      strokeLinecap="round"
    />
    <path
      d="M164 42h12M164 94h12"
      stroke="#046999"
      strokeWidth="1.6"
      strokeDasharray="2 3"
    />
    <rect
      x="14"
      y="98"
      width="28"
      height="28"
      rx="6"
      fill="#ffffff"
      stroke="#0b2433"
      strokeWidth="1.6"
    />
    <path
      d="M20 112l5 5 10-11"
      fill="none"
      stroke="#046999"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M44 124l16-16 6 6-16 16-8 2z" fill="#0b2433" />
  </svg>
);

// Build & test: the flow, a run of test cases and the odd bug found early
export const PautoBuildArt = () => (
  <svg {...artFrame}>
    <g fill="#e8f4fa" stroke="#046999" strokeWidth="1.6">
      <rect x="12" y="12" width="46" height="30" rx="7" />
      <rect x="86" y="12" width="46" height="30" rx="7" />
    </g>
    <rect x="160" y="12" width="46" height="30" rx="7" fill="#046999" />
    <path d="M58 27h28M132 27h28" stroke="#046999" strokeWidth="1.8" />
    <path
      d="M22 22h26M22 32h16M96 22h26M96 32h16"
      stroke="#9a9da1"
      strokeWidth="2.6"
      strokeLinecap="round"
    />
    <path
      d="M172 28l6 6 12-13"
      fill="none"
      stroke="#ffffff"
      strokeWidth="2.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <rect
      x="12"
      y="56"
      width="124"
      height="74"
      rx="9"
      fill="#f7f8f9"
      stroke="#e3e8ec"
    />
    <g>
      <circle cx="28" cy="74" r="6" fill="#046999" />
      <circle cx="28" cy="94" r="6" fill="#046999" />
      <circle
        cx="28"
        cy="114"
        r="6"
        fill="#ffffff"
        stroke="#0b2433"
        strokeWidth="1.6"
      />
      <path
        d="M25 74l2 2 4-4M25 94l2 2 4-4"
        fill="none"
        stroke="#ffffff"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <g stroke="#d4d6d9" strokeWidth="4" strokeLinecap="round">
        <path d="M42 74h70M42 94h56M42 114h64" />
      </g>
    </g>
    <ellipse cx="122" cy="114" rx="6" ry="7" fill="#0b2433" />
    <path
      d="M122 106v-4M117 108l-4-3M127 108l4-3M116 114h-5M128 114h5M117 120l-4 3M127 120l4 3"
      stroke="#0b2433"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
    <circle cx="176" cy="94" r="26" fill="#046999" />
    <path d="M169 82l20 12-20 12z" fill="#ffffff" />
    <circle
      cx="176"
      cy="94"
      r="33"
      fill="none"
      stroke="#046999"
      strokeOpacity="0.25"
      strokeWidth="2"
    />
  </svg>
);

// Handover: documentation, training and a run history the team can read
export const PautoHandoverArt = () => (
  <svg {...artFrame}>
    <rect
      x="12"
      y="16"
      width="58"
      height="76"
      rx="6"
      fill="#ffffff"
      stroke="#0b2433"
      strokeWidth="1.6"
    />
    <path d="M42 16v22l-6-5-6 5V16" fill="#046999" />
    <path
      d="M22 52h38M22 62h30M22 72h36M22 82h24"
      stroke="#d4d6d9"
      strokeWidth="3"
      strokeLinecap="round"
    />
    <rect
      x="84"
      y="16"
      width="124"
      height="76"
      rx="8"
      fill="#e8f4fa"
      stroke="#046999"
      strokeWidth="1.8"
    />
    <path
      d="M96 30h40"
      stroke="#0b2433"
      strokeWidth="3.2"
      strokeLinecap="round"
    />
    <g fill="#046999">
      <rect x="96" y="66" width="14" height="16" rx="2" opacity="0.4" />
      <rect x="116" y="54" width="14" height="28" rx="2" opacity="0.6" />
      <rect x="136" y="46" width="14" height="36" rx="2" />
      <rect x="156" y="58" width="14" height="24" rx="2" opacity="0.6" />
    </g>
    <circle
      cx="190"
      cy="36"
      r="8"
      fill="#ffffff"
      stroke="#046999"
      strokeWidth="1.6"
    />
    <path
      d="M186.5 36l2.4 2.4 4-4.6"
      fill="none"
      stroke="#046999"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M146 92v10M120 102h52"
      stroke="#046999"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <g fill="#ffffff" stroke="#046999" strokeWidth="1.6">
      <circle cx="60" cy="116" r="11" />
      <circle cx="92" cy="116" r="11" />
      <circle cx="124" cy="116" r="11" />
    </g>
    <g fill="#046999">
      <circle cx="60" cy="113" r="3.4" />
      <circle cx="92" cy="113" r="3.4" />
      <circle cx="124" cy="113" r="3.4" />
      <path d="M54 123a6 5 0 0 1 12 0zM86 123a6 5 0 0 1 12 0zM118 123a6 5 0 0 1 12 0z" />
    </g>
  </svg>
);
