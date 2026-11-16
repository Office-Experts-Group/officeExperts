// /app/blog/export-to-pdf-in-power-apps/(svgs)/HeroSvg.jsx
// Hero illustration: a Power App form becomes a PDF through a flow. Sits directly
// on the dark hero background (no panel).
// Hex values map to tokens: #111820 $dark-bg, #18232e $dark-surface, #1a2a3a $dark-mid,
// #046999 $accent, #6fc3e8 $accent-on-dark, #e8f4fa $accent-light, #0d1b2a $text-primary,
// #4a5568 $text-secondary, #ffffff $white.
// flowClass animates the dashed connectors and liveClass pulses the status dot (both
// from the hero module, inside prefers-reduced-motion: no-preference).
import React from "react";

export default function HeroSvg({ flowClass = "", liveClass = "" }) {
  return (
    <svg
      viewBox="0 0 560 410"
      xmlns="http://www.w3.org/2000/svg"
      fontFamily="aptos"
      role="img"
      aria-labelledby="pdf-hero-title pdf-hero-desc"
      style={{ width: "100%", height: "auto", display: "block" }}
    >
      <title id="pdf-hero-title">A Power Apps form becoming a PDF</title>
      <desc id="pdf-hero-desc">
        A form in a Power App is saved, a Power Automate flow runs, and a
        formatted PDF with a logo, heading, text, image and table is created.
      </desc>

      {/* Power App form */}
      <rect
        x="10"
        y="60"
        width="180"
        height="270"
        rx="20"
        fill="#18232e"
        stroke="#6fc3e8"
        strokeOpacity="0.55"
        strokeWidth="2"
      />
      <rect x="22" y="72" width="156" height="34" rx="8" fill="#046999" />
      <text x="34" y="94" fontSize="14" fontWeight="700" fill="#ffffff">
        Issue tracker
      </text>
      <text x="24" y="128" fontSize="14" fill="#9fb8c9">
        Title
      </text>
      <rect
        x="22"
        y="136"
        width="156"
        height="30"
        rx="6"
        fill="#111820"
        stroke="#3a5a72"
      />
      <text x="32" y="156" fontSize="14" fill="#ffffff">
        Pump fault
      </text>
      <text x="24" y="190" fontSize="14" fill="#9fb8c9">
        Description
      </text>
      <rect
        x="22"
        y="198"
        width="156"
        height="64"
        rx="6"
        fill="#111820"
        stroke="#3a5a72"
      />
      <rect x="32" y="210" width="130" height="6" rx="3" fill="#4a6a82" />
      <rect x="32" y="224" width="112" height="6" rx="3" fill="#4a6a82" />
      <rect x="32" y="238" width="124" height="6" rx="3" fill="#4a6a82" />
      <rect x="22" y="276" width="156" height="36" rx="6" fill="#6fc3e8" />
      <text
        x="100"
        y="299"
        fontSize="14"
        fontWeight="700"
        fill="#0d1b2a"
        textAnchor="middle"
      >
        Save
      </text>
      <text
        x="100"
        y="358"
        fontSize="14"
        fill="#ffffff"
        fillOpacity="0.75"
        textAnchor="middle"
      >
        Power App
      </text>

      {/* connectors */}
      <path
        className={flowClass}
        d="M194 195 H228"
        stroke="#6fc3e8"
        strokeWidth="3"
        strokeLinecap="round"
        strokeDasharray="6 8"
        fill="none"
      />
      <path d="M226 188 l10 7 -10 7 z" fill="#6fc3e8" />
      <path
        className={flowClass}
        d="M332 195 H366"
        stroke="#6fc3e8"
        strokeWidth="3"
        strokeLinecap="round"
        strokeDasharray="6 8"
        fill="none"
      />
      <path d="M364 188 l10 7 -10 7 z" fill="#6fc3e8" />

      {/* flow node */}
      <circle
        cx="280"
        cy="195"
        r="48"
        fill="none"
        stroke="#6fc3e8"
        strokeOpacity="0.45"
        strokeDasharray="3 7"
        strokeWidth="2"
      />
      <circle
        cx="280"
        cy="195"
        r="36"
        fill="#1a2a3a"
        stroke="#6fc3e8"
        strokeWidth="2"
      />
      <path
        d="M286 172 L268 199 H280 L275 219 L293 191 H281 Z"
        fill="#6fc3e8"
      />
      <circle className={liveClass} cx="318" cy="157" r="7" fill="#6fc3e8" />
      <circle
        cx="318"
        cy="157"
        r="12"
        fill="none"
        stroke="#6fc3e8"
        strokeOpacity="0.4"
      />
      <text
        x="280"
        y="272"
        fontSize="14"
        fill="#ffffff"
        fillOpacity="0.75"
        textAnchor="middle"
      >
        Power Automate
      </text>

      {/* PDF page */}
      <rect x="380" y="40" width="170" height="330" rx="10" fill="#f4f8fb" />
      <rect x="396" y="58" width="32" height="32" rx="6" fill="#046999" />
      <path d="M402 82 l7 -9 5 6 4 -4 6 7 z" fill="#e8f4fa" />
      <circle cx="420" cy="67" r="2.6" fill="#e8f4fa" />
      <rect x="436" y="64" width="64" height="8" rx="4" fill="#0d1b2a" />
      <rect x="436" y="80" width="42" height="6" rx="3" fill="#9fb8c9" />
      <text x="396" y="124" fontSize="16" fontWeight="700" fill="#0d1b2a">
        Pump fault
      </text>
      <rect x="396" y="138" width="138" height="6" rx="3" fill="#cdd9e2" />
      <rect x="396" y="152" width="124" height="6" rx="3" fill="#cdd9e2" />
      <rect x="396" y="166" width="132" height="6" rx="3" fill="#cdd9e2" />
      <rect x="396" y="180" width="88" height="6" rx="3" fill="#cdd9e2" />
      <rect
        x="396"
        y="200"
        width="138"
        height="64"
        rx="6"
        fill="#e8f4fa"
        stroke="#046999"
        strokeOpacity="0.35"
      />
      <path
        d="M396 256 l34 -34 22 22 14 -12 38 24 z"
        fill="#046999"
        fillOpacity="0.7"
      />
      <circle cx="512" cy="218" r="6" fill="#046999" fillOpacity="0.5" />
      <rect x="396" y="280" width="138" height="16" rx="3" fill="#046999" />
      <rect x="396" y="298" width="138" height="14" fill="#e8f4fa" />
      <rect x="396" y="314" width="138" height="14" fill="#f4f8fb" />
      <rect x="396" y="330" width="138" height="14" fill="#e8f4fa" />
      <path
        d="M396 296.5 H534 M396 312.5 H534 M396 328.5 H534 M396 344.5 H534 M450 280 V344 M492 280 V344"
        stroke="#046999"
        strokeOpacity="0.25"
        fill="none"
      />
      <rect x="494" y="26" width="58" height="28" rx="7" fill="#6fc3e8" />
      <text
        x="523"
        y="46"
        fontSize="14"
        fontWeight="700"
        fill="#0d1b2a"
        textAnchor="middle"
      >
        PDF
      </text>
      <text
        x="465"
        y="394"
        fontSize="14"
        fill="#ffffff"
        fillOpacity="0.75"
        textAnchor="middle"
      >
        Saved to SharePoint
      </text>
    </svg>
  );
}
