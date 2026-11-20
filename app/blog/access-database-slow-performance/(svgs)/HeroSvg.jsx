// /app/blog/access-database-slow-performance/(svgs)/HeroSvg.jsx
// Hero illustration: a frozen window becomes a fast one. Sits directly on the dark hero.
// Hex to token: #111820 $dark-bg, #18232e $dark-surface, #1a2a3a $dark-mid,
// #6fc3e8 $accent-on-dark, #e8f4fa $accent-light, #e0584b small "stuck" accent only.
// flowClass and spinClass are module classes animated in the blog module
// inside prefers-reduced-motion: no-preference.
import React from "react";

export default function HeroSvg({ flowClass = "", spinClass = "" }) {
  return (
    <svg
      viewBox="0 0 600 444"
      role="img"
      aria-labelledby="asp-hero-title asp-hero-desc"
      fontFamily="aptos, sans-serif"
    >
      <title id="asp-hero-title">A slow Access window becomes a fast one</title>
      <desc id="asp-hero-desc">
        On the left, a frozen Access window shows a spinner and a timer reading
        two minutes fourteen seconds. On the right, the same report loads in
        three seconds. Three quick fixes sit underneath: split the file, add
        indexes and compact it.
      </desc>

      {/* BEFORE window */}
      <rect
        x="8"
        y="40"
        width="252"
        height="240"
        rx="14"
        fill="#18232e"
        stroke="#2b3f52"
        strokeWidth="2"
      />
      <path
        d="M8 76V54a14 14 0 0 1 14-14h224a14 14 0 0 1 14 14v22z"
        fill="#223446"
      />
      <circle cx="28" cy="58" r="5" fill="#e0584b" />
      <circle cx="44" cy="58" r="5" fill="#4a6176" />
      <circle cx="60" cy="58" r="5" fill="#4a6176" />
      <text x="78" y="63" fontSize="14" fill="#9db2c3">
        Not responding
      </text>
      <circle
        cx="134"
        cy="146"
        r="30"
        fill="none"
        stroke="#2f4457"
        strokeWidth="7"
      />
      <circle
        className={spinClass}
        cx="134"
        cy="146"
        r="30"
        fill="none"
        stroke="#e0584b"
        strokeWidth="7"
        strokeLinecap="round"
        strokeDasharray="48 141"
      />
      <rect x="34" y="200" width="200" height="10" rx="5" fill="#2b3f52" />
      <rect x="34" y="200" width="54" height="10" rx="5" fill="#5d7285" />
      <rect x="34" y="228" width="150" height="8" rx="4" fill="#26384a" />
      <rect x="34" y="246" width="190" height="8" rx="4" fill="#26384a" />
      <text
        x="134"
        y="316"
        textAnchor="middle"
        fontSize="30"
        fontWeight="700"
        fill="#9db2c3"
      >
        02:14
      </text>
      <text x="134" y="340" textAnchor="middle" fontSize="14" fill="#8ea3b5">
        Weekly sales report
      </text>

      {/* Stopwatch between the windows */}
      <circle
        cx="300"
        cy="104"
        r="17"
        fill="#18232e"
        stroke="#6fc3e8"
        strokeWidth="2.5"
      />
      <path
        d="M300 94v10l7 5"
        fill="none"
        stroke="#6fc3e8"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M295 82h10M300 82v5"
        fill="none"
        stroke="#6fc3e8"
        strokeWidth="2.5"
        strokeLinecap="round"
      />

      {/* Flow arrow */}
      <path
        className={flowClass}
        d="M272 168H322"
        fill="none"
        stroke="#6fc3e8"
        strokeWidth="2.5"
        strokeDasharray="6 6"
        strokeLinecap="round"
      />
      <path
        d="M320 160l10 8-10 8"
        fill="none"
        stroke="#6fc3e8"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* AFTER window */}
      <rect
        x="340"
        y="40"
        width="252"
        height="240"
        rx="14"
        fill="#18232e"
        stroke="#6fc3e8"
        strokeOpacity="0.75"
        strokeWidth="2"
      />
      <path
        d="M340 76V54a14 14 0 0 1 14-14h224a14 14 0 0 1 14 14v22z"
        fill="#1d3a50"
      />
      <circle cx="360" cy="58" r="5" fill="#6fc3e8" />
      <circle cx="376" cy="58" r="5" fill="#2f5a78" />
      <circle cx="392" cy="58" r="5" fill="#2f5a78" />
      <text x="410" y="63" fontSize="14" fill="#cfe6f3">
        Sales report
      </text>
      <line
        x1="366"
        y1="214"
        x2="566"
        y2="214"
        stroke="#2f5a78"
        strokeWidth="2"
      />
      <rect x="370" y="174" width="30" height="40" rx="4" fill="#3c7fa3" />
      <rect x="410" y="148" width="30" height="66" rx="4" fill="#3c7fa3" />
      <rect x="450" y="162" width="30" height="52" rx="4" fill="#3c7fa3" />
      <rect x="490" y="124" width="30" height="90" rx="4" fill="#6fc3e8" />
      <rect x="530" y="138" width="30" height="76" rx="4" fill="#3c7fa3" />
      <rect x="366" y="230" width="200" height="8" rx="4" fill="#2f5a78" />
      <rect x="366" y="248" width="150" height="8" rx="4" fill="#2f5a78" />
      <circle cx="580" cy="48" r="14" fill="#6fc3e8" />
      <path
        d="M573 48.5l5 5 9-10"
        fill="none"
        stroke="#111820"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <text
        x="466"
        y="316"
        textAnchor="middle"
        fontSize="30"
        fontWeight="700"
        fill="#6fc3e8"
      >
        00:03
      </text>
      <text x="466" y="340" textAnchor="middle" fontSize="14" fill="#9fd3ec">
        Same report, same data
      </text>

      {/* Quick fixes */}
      <text x="300" y="384" textAnchor="middle" fontSize="14" fill="#8ea3b5">
        Three quick fixes
      </text>

      <rect
        x="30"
        y="396"
        width="160"
        height="40"
        rx="20"
        fill="#1d3a50"
        stroke="#6fc3e8"
        strokeOpacity="0.55"
      />
      <rect x="44" y="408" width="8" height="16" rx="2" fill="#6fc3e8" />
      <rect
        x="56"
        y="408"
        width="8"
        height="16"
        rx="2"
        fill="none"
        stroke="#6fc3e8"
        strokeWidth="2"
      />
      <text x="76" y="421" fontSize="14" fill="#e8f4fa">
        Split the file
      </text>

      <rect
        x="220"
        y="396"
        width="160"
        height="40"
        rx="20"
        fill="#1d3a50"
        stroke="#6fc3e8"
        strokeOpacity="0.55"
      />
      <circle
        cx="253"
        cy="415"
        r="6"
        fill="none"
        stroke="#6fc3e8"
        strokeWidth="2"
      />
      <path
        d="M257.5 419.5l5 5"
        stroke="#6fc3e8"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <text x="272" y="421" fontSize="14" fill="#e8f4fa">
        Add indexes
      </text>

      <rect
        x="410"
        y="396"
        width="160"
        height="40"
        rx="20"
        fill="#1d3a50"
        stroke="#6fc3e8"
        strokeOpacity="0.55"
      />
      <path
        d="M440 408l6 6m0 0v-5m0 5h-5M462 422l-6-6m0 0v5m0-5h5"
        fill="none"
        stroke="#6fc3e8"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <text x="474" y="421" fontSize="14" fill="#e8f4fa">
        Compact
      </text>
    </svg>
  );
}
