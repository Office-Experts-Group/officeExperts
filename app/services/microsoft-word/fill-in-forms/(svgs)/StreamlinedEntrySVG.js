// app/fill-in-forms/(svgs)/StreamlinedEntrySVG.js
//
// Animated hero illustration for the fill-in forms page, designed for the
// $dark-bg hero. A Word template's content controls are completed in turn:
// text field types in, date is picked, a dropdown opens and selects, a
// checkbox ticks. Each step is validated and the progress bar advances, while
// the standard terms stay locked. Ends with a "Document complete" badge and
// loops every 12s.
//
// Pure CSS animation (no client JS), so this stays a server component.
// Base styles are the FINAL state and the keyframes supply the start states,
// so with prefers-reduced-motion the finished form shows statically.
//
// Colours are hardcoded to the values behind the globals.scss tokens
// ($accent, $accent-on-dark, $accent-light, $text-primary, $text-secondary,
// $text-muted, $line, $line-strong, $grayBGC, $light-bg).

const css = `
.sef-a {
  animation-duration: 12s;
  animation-iteration-count: infinite;
  animation-timing-function: ease;
  transform-box: fill-box;
}

/* Active field outline */
.sef-active1 { opacity: 0; animation-name: sef-active1; }
.sef-active2 { opacity: 0; animation-name: sef-active2; }
.sef-active3 { opacity: 0; animation-name: sef-active3; }
.sef-active4 { opacity: 0; animation-name: sef-active4; }
@keyframes sef-active1 { 0%,3% {opacity:0} 5%,21% {opacity:1} 24%,100% {opacity:0} }
@keyframes sef-active2 { 0%,25% {opacity:0} 27%,37% {opacity:1} 40%,100% {opacity:0} }
@keyframes sef-active3 { 0%,41% {opacity:0} 43%,61% {opacity:1} 64%,100% {opacity:0} }
@keyframes sef-active4 { 0%,63% {opacity:0} 65%,71% {opacity:1} 74%,100% {opacity:0} }

/* Grey Word-style placeholder text, hidden once the field is filled */
.sef-ph1 { opacity: 0; animation-name: sef-ph1; }
.sef-ph2 { opacity: 0; animation-name: sef-ph2; }
.sef-ph3 { opacity: 0; animation-name: sef-ph3; }
@keyframes sef-ph1 { 0%,5% {opacity:1} 6%,96% {opacity:0} 99%,100% {opacity:1} }
@keyframes sef-ph2 { 0%,30% {opacity:1} 31%,96% {opacity:0} 99%,100% {opacity:1} }
@keyframes sef-ph3 { 0%,59% {opacity:1} 60%,96% {opacity:0} 99%,100% {opacity:1} }

/* Field 1 types in */
.sef-type { animation-name: sef-type; }
@keyframes sef-type {
  0%,6% { clip-path: inset(0 100% 0 0); opacity: 1; animation-timing-function: steps(18, end); }
  20% { clip-path: inset(0 0 0 0); }
  95% { opacity: 1; }
  98%,100% { clip-path: inset(0 0 0 0); opacity: 0; }
}

/* Field 2 and 3 values drop in */
.sef-val2 { animation-name: sef-val2; }
.sef-val3 { animation-name: sef-val3; }
@keyframes sef-val2 { 0%,31% {opacity:0; transform: translateY(4px)} 34%,95% {opacity:1; transform: none} 98%,100% {opacity:0} }
@keyframes sef-val3 { 0%,59% {opacity:0; transform: translateY(4px)} 62%,95% {opacity:1; transform: none} 98%,100% {opacity:0} }

/* Calendar icon highlights while the date is picked */
.sef-cal { stroke: #9a9da1; animation-name: sef-cal; }
@keyframes sef-cal { 0%,27% {stroke:#9a9da1} 29%,33% {stroke:#046999} 36%,100% {stroke:#9a9da1} }

/* Dropdown opens, highlight moves to Premium, closes */
.sef-drop { opacity: 0; transform-origin: top; animation-name: sef-drop; }
@keyframes sef-drop {
  0%,44% { opacity: 0; transform: scaleY(0.9); }
  46%,57% { opacity: 1; transform: scaleY(1); }
  59%,100% { opacity: 0; transform: scaleY(1); }
}
.sef-hl { transform: translateY(32px); animation-name: sef-hl; }
@keyframes sef-hl { 0%,49% {transform: translateY(0)} 53%,100% {transform: translateY(32px)} }

/* Checkbox ticks */
.sef-boxfill { animation-name: sef-boxfill; }
@keyframes sef-boxfill { 0%,66% {opacity:0} 68%,95% {opacity:1} 98%,100% {opacity:0} }
.sef-tick { stroke-dasharray: 16; stroke-dashoffset: 0; animation-name: sef-tick; }
@keyframes sef-tick { 0%,67% {stroke-dashoffset:16; opacity:1} 71%,95% {stroke-dashoffset:0; opacity:1} 98%,100% {opacity:0} }

/* Progress bar fills step by step */
.sef-progress { transform-origin: left; animation-name: sef-progress; }
@keyframes sef-progress {
  0%,20% { transform: scaleX(0); }
  23%,34% { transform: scaleX(0.25); }
  37%,60% { transform: scaleX(0.5); }
  63%,68% { transform: scaleX(0.75); }
  72%,96% { transform: scaleX(1); }
  99%,100% { transform: scaleX(0); }
}

/* Callout chips on the dark background */
.sef-chip1 { animation-name: sef-chip1; }
.sef-chip2 { animation-name: sef-chip2; }
.sef-chip3 { animation-name: sef-chip3; }
@keyframes sef-chip1 { 0%,20% {opacity:0; transform: translateX(-10px)} 24%,95% {opacity:1; transform:none} 98%,100% {opacity:0} }
@keyframes sef-chip2 { 0%,60% {opacity:0; transform: translateX(-10px)} 64%,95% {opacity:1; transform:none} 98%,100% {opacity:0} }
@keyframes sef-chip3 { 0%,72% {opacity:0; transform: translateX(-10px)} 76%,95% {opacity:1; transform:none} 98%,100% {opacity:0} }

/* Locked terms lock pulses */
.sef-lock { transform-origin: center; animation-name: sef-lock; }
@keyframes sef-lock { 0%,72% {transform: scale(1)} 74% {transform: scale(1.35)} 77%,100% {transform: scale(1)} }

/* Completion */
.sef-badge { animation-name: sef-badge; }
@keyframes sef-badge { 0%,77% {opacity:0; transform: translateY(14px)} 81%,95% {opacity:1; transform:none} 98%,100% {opacity:0} }
.sef-ring { opacity: 0; animation-name: sef-ring; }
@keyframes sef-ring { 0%,77% {opacity:0} 81% {opacity:0.9} 92%,100% {opacity:0} }

@media (prefers-reduced-motion: reduce) {
  .sef-a { animation: none !important; }
}
`;

const labelProps = {
  fontSize: 11,
  fontWeight: 700,
  letterSpacing: "0.06em",
  fill: "#4a5568",
};

export const StreamlinedEntrySVG = () => (
  <svg
    viewBox="0 0 560 470"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    fontFamily="inherit"
  >
    <style>{css}</style>

    <defs>
      <radialGradient id="sef-glow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#046999" stopOpacity="0.35" />
        <stop offset="100%" stopColor="#046999" stopOpacity="0" />
      </radialGradient>
      <linearGradient id="sef-badgeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#046999" />
        <stop offset="100%" stopColor="#0a85bf" />
      </linearGradient>
      <filter id="sef-shadow" x="-20%" y="-20%" width="140%" height="150%">
        <feDropShadow
          dx="0"
          dy="6"
          stdDeviation="8"
          floodColor="#0d1b2a"
          floodOpacity="0.2"
        />
      </filter>
    </defs>

    {/* ── Background glow ── */}
    <circle cx="220" cy="230" r="240" fill="url(#sef-glow)" />

    {/* ── Completion ring around the document ── */}
    <rect
      className="sef-a sef-ring"
      x="34"
      y="34"
      width="372"
      height="392"
      rx="18"
      fill="none"
      stroke="#6fc3e8"
      strokeWidth="2"
    />

    {/* ── Document window ── */}
    <rect x="40" y="40" width="360" height="380" rx="14" fill="#ffffff" />
    <rect x="40" y="40" width="360" height="36" rx="14" fill="#f2f3f5" />
    <rect x="40" y="62" width="360" height="14" fill="#f2f3f5" />
    <circle cx="60" cy="58" r="4" fill="rgba(0,0,0,0.16)" />
    <circle cx="73" cy="58" r="4" fill="rgba(0,0,0,0.16)" />
    <circle cx="86" cy="58" r="4" fill="rgba(0,0,0,0.16)" />
    <text x="230" y="62" textAnchor="middle" fontSize="12" fill="#4a5568">
      Service Agreement.dotx
    </text>

    {/* Progress bar */}
    <rect x="40" y="76" width="360" height="4" fill="#e3e8ec" />
    <rect
      className="sef-a sef-progress"
      x="40"
      y="76"
      width="360"
      height="4"
      fill="#046999"
    />

    {/* Title (locked) */}
    <text x="64" y="114" fontSize="18" fontWeight="700" fill="#0d1b2a">
      Service Agreement
    </text>
    <g fill="none" stroke="#9a9da1" strokeWidth="1.6">
      <rect
        x="362"
        y="104"
        width="13"
        height="10"
        rx="2"
        fill="#9a9da1"
        stroke="none"
      />
      <path d="M364.5 104v-3a4 4 0 0 1 8 0v3" />
    </g>

    {/* ── Field 1: plain text ── */}
    <text x="64" y="140" {...labelProps}>
      CLIENT NAME
    </text>
    <rect
      x="64"
      y="148"
      width="312"
      height="34"
      rx="6"
      fill="#f7f8f9"
      stroke="#d4d6d9"
    />
    <rect
      className="sef-a sef-active1"
      x="64"
      y="148"
      width="312"
      height="34"
      rx="6"
      fill="none"
      stroke="#046999"
      strokeWidth="2"
    />
    <text className="sef-a sef-ph1" x="76" y="170" fontSize="13" fill="#9a9da1">
      Click or tap here to enter text.
    </text>
    <text
      className="sef-a sef-type"
      x="76"
      y="170"
      fontSize="14"
      fontWeight="600"
      fill="#0d1b2a"
    >
      Acme Legal Pty Ltd
    </text>

    {/* ── Field 2: date picker ── */}
    <text x="64" y="204" {...labelProps}>
      START DATE
    </text>
    <rect
      x="64"
      y="212"
      width="150"
      height="34"
      rx="6"
      fill="#f7f8f9"
      stroke="#d4d6d9"
    />
    <rect
      className="sef-a sef-active2"
      x="64"
      y="212"
      width="150"
      height="34"
      rx="6"
      fill="none"
      stroke="#046999"
      strokeWidth="2"
    />
    <text className="sef-a sef-ph2" x="76" y="234" fontSize="13" fill="#9a9da1">
      Select a date
    </text>
    <text
      className="sef-a sef-val2"
      x="76"
      y="234"
      fontSize="14"
      fontWeight="600"
      fill="#0d1b2a"
    >
      12 Jan 2027
    </text>
    <g
      className="sef-a sef-cal"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
    >
      <rect x="188" y="222" width="15" height="14" rx="2" />
      <path d="M188 227h15M192 219.5v4M199 219.5v4" />
    </g>

    {/* ── Field 3: dropdown ── */}
    <text x="226" y="204" {...labelProps}>
      SERVICE LEVEL
    </text>
    <rect
      x="226"
      y="212"
      width="150"
      height="34"
      rx="6"
      fill="#f7f8f9"
      stroke="#d4d6d9"
    />
    <rect
      className="sef-a sef-active3"
      x="226"
      y="212"
      width="150"
      height="34"
      rx="6"
      fill="none"
      stroke="#046999"
      strokeWidth="2"
    />
    <text
      className="sef-a sef-ph3"
      x="238"
      y="234"
      fontSize="13"
      fill="#9a9da1"
    >
      Choose an item.
    </text>
    <text
      className="sef-a sef-val3"
      x="238"
      y="234"
      fontSize="14"
      fontWeight="600"
      fill="#0d1b2a"
    >
      Premium
    </text>
    <path
      d="M355 226l5 5 5-5"
      fill="none"
      stroke="#4a5568"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    {/* ── Field 4: checkbox ── */}
    <rect
      className="sef-a sef-active4"
      x="59"
      y="257"
      width="28"
      height="28"
      rx="7"
      fill="none"
      stroke="#046999"
      strokeWidth="2"
    />
    <rect
      x="64"
      y="262"
      width="18"
      height="18"
      rx="4"
      fill="#ffffff"
      stroke="#d4d6d9"
    />
    <rect
      className="sef-a sef-boxfill"
      x="64"
      y="262"
      width="18"
      height="18"
      rx="4"
      fill="#046999"
    />
    <path
      className="sef-a sef-tick"
      d="M68 271l3.5 3.5 6.5-7"
      fill="none"
      stroke="#ffffff"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <text x="92" y="276" fontSize="13" fill="#0d1b2a">
      Include GST (10%)
    </text>

    {/* ── Locked standard terms ── */}
    <line x1="64" y1="300" x2="376" y2="300" stroke="#e3e8ec" />
    <text x="64" y="324" {...labelProps}>
      STANDARD TERMS
    </text>
    <g className="sef-a sef-lock">
      <rect x="192" y="315" width="11" height="9" rx="2" fill="#046999" />
      <path
        d="M194.2 315v-2.5a3.3 3.3 0 0 1 6.6 0v2.5"
        fill="none"
        stroke="#046999"
        strokeWidth="1.5"
      />
    </g>
    <rect x="64" y="336" width="312" height="6" rx="3" fill="#e3e8ec" />
    <rect x="64" y="350" width="290" height="6" rx="3" fill="#e3e8ec" />
    <rect x="64" y="364" width="304" height="6" rx="3" fill="#e3e8ec" />
    <rect x="64" y="378" width="196" height="6" rx="3" fill="#e3e8ec" />

    {/* ── Dropdown list (drawn last so it sits on top) ── */}
    <g className="sef-a sef-drop">
      <rect
        x="226"
        y="250"
        width="150"
        height="102"
        rx="8"
        fill="#ffffff"
        stroke="#d4d6d9"
        filter="url(#sef-shadow)"
      />
      <rect
        className="sef-a sef-hl"
        x="230"
        y="254"
        width="142"
        height="30"
        rx="5"
        fill="#e8f4fa"
      />
      <text x="242" y="274" fontSize="13" fill="#0d1b2a">
        Standard
      </text>
      <text x="242" y="306" fontSize="13" fill="#0d1b2a">
        Premium
      </text>
      <text x="242" y="338" fontSize="13" fill="#0d1b2a">
        Enterprise
      </text>
    </g>

    {/* ── Callout chips on the dark background ── */}
    <g className="sef-a sef-chip1">
      <rect
        x="414"
        y="151"
        width="108"
        height="28"
        rx="14"
        fill="rgba(4,105,153,0.18)"
        stroke="rgba(111,195,232,0.45)"
      />
      <path
        d="M428 165l3.5 3.5 6.5-7"
        fill="none"
        stroke="#6fc3e8"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <text x="445" y="169.5" fontSize="12" fontWeight="700" fill="#6fc3e8">
        Validated
      </text>
    </g>

    <g className="sef-a sef-chip2">
      <rect
        x="414"
        y="215"
        width="126"
        height="28"
        rx="14"
        fill="rgba(4,105,153,0.18)"
        stroke="rgba(111,195,232,0.45)"
      />
      <path
        d="M428 229l3.5 3.5 6.5-7"
        fill="none"
        stroke="#6fc3e8"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <text x="445" y="233.5" fontSize="12" fontWeight="700" fill="#6fc3e8">
        Approved list
      </text>
    </g>

    <g className="sef-a sef-chip3">
      <rect
        x="414"
        y="313"
        width="112"
        height="28"
        rx="14"
        fill="rgba(4,105,153,0.18)"
        stroke="rgba(111,195,232,0.45)"
      />
      <rect x="428" y="327" width="11" height="8" rx="1.5" fill="#6fc3e8" />
      <path
        d="M430.2 327v-2.3a3.3 3.3 0 0 1 6.6 0v2.3"
        fill="none"
        stroke="#6fc3e8"
        strokeWidth="1.5"
      />
      <text x="447" y="331.5" fontSize="12" fontWeight="700" fill="#6fc3e8">
        Protected
      </text>
    </g>

    {/* ── Completion badge ── */}
    <g className="sef-a sef-badge">
      <rect
        x="250"
        y="394"
        width="272"
        height="58"
        rx="12"
        fill="url(#sef-badgeGrad)"
        filter="url(#sef-shadow)"
      />
      <circle cx="278" cy="423" r="14" fill="rgba(255,255,255,0.2)" />
      <path
        d="M271 423l5 5 9-10"
        fill="none"
        stroke="#ffffff"
        strokeWidth="2.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <text x="302" y="419" fontSize="15" fontWeight="700" fill="#ffffff">
        Document complete
      </text>
      <text x="302" y="437" fontSize="12" fill="rgba(255,255,255,0.8)">
        Same format, every time
      </text>
    </g>

    {/* ── Decorative accent dots ── */}
    <circle cx="20" cy="440" r="4" fill="#6fc3e8" opacity="0.25" />
    <circle cx="540" cy="80" r="5" fill="#6fc3e8" opacity="0.2" />
    <circle cx="470" cy="30" r="3" fill="#6fc3e8" opacity="0.3" />
  </svg>
);
