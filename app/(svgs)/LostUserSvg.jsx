// /app/(svgs)/LostUserSvg.jsx
// Decorative illustration of a lost user holding a map beside a confusing signpost.
// Colours are hex copies of globals.scss tokens (SVG attributes can't read Sass variables):
// #6fc3e8 = $accent-on-dark, #ffffff = $white, #18232e = $dark-surface

export default function LostUserSvg({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 400 320"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      {/* Ground and winding path that leads nowhere */}
      <ellipse cx="200" cy="288" rx="165" ry="14" fill="#18232e" />
      <path
        d="M30 288 C90 262 60 240 120 232"
        fill="none"
        stroke="#ffffff"
        strokeOpacity=".35"
        strokeWidth="3"
        strokeLinecap="round"
        strokeDasharray="2 10"
      />

      {/* Signpost with arrows pointing opposite ways */}
      <rect x="302" y="86" width="10" height="202" rx="5" fill="#ffffff" fillOpacity=".18" />
      <polygon points="262,98 332,98 354,114 332,130 262,130" fill="#6fc3e8" />
      <polygon points="352,146 282,146 260,162 282,178 352,178" fill="#ffffff" fillOpacity=".75" />
      <text x="298" y="121" fontSize="18" fontWeight="700" fill="#0b2433" textAnchor="middle">?</text>
      <text x="312" y="169" fontSize="18" fontWeight="700" fill="#0b2433" textAnchor="middle">?</text>

      {/* Floating question marks */}
      <text x="88" y="118" fontSize="38" fontWeight="700" fill="#6fc3e8" fillOpacity=".9">?</text>
      <text x="196" y="92" fontSize="48" fontWeight="700" fill="#6fc3e8">?</text>
      <text x="150" y="58" fontSize="26" fontWeight="700" fill="#ffffff" fillOpacity=".55">?</text>

      {/* Legs */}
      <rect x="147" y="238" width="14" height="42" rx="6" fill="#ffffff" fillOpacity=".75" />
      <rect x="167" y="238" width="14" height="42" rx="6" fill="#ffffff" fillOpacity=".75" />

      {/* Body */}
      <rect x="140" y="180" width="48" height="66" rx="20" fill="#6fc3e8" />

      {/* Arm holding the map */}
      <path d="M146 194 L120 216" stroke="#6fc3e8" strokeWidth="11" strokeLinecap="round" fill="none" />
      <g transform="rotate(-12 100 222)">
        <rect x="80" y="206" width="42" height="32" rx="3" fill="#ffffff" fillOpacity=".92" />
        <path d="M94 206 V238 M108 206 V238" stroke="#18232e" strokeOpacity=".25" strokeWidth="1.5" />
        <path d="M86 228 L98 216 L106 226 L116 214" stroke="#6fc3e8" strokeWidth="2" fill="none" strokeLinecap="round" />
      </g>

      {/* Arm scratching head */}
      <path d="M182 194 L202 172 L184 150" stroke="#6fc3e8" strokeWidth="11" strokeLinecap="round" strokeLinejoin="round" fill="none" />

      {/* Head and worried face */}
      <circle cx="164" cy="152" r="24" fill="#ffffff" fillOpacity=".92" />
      <circle cx="156" cy="150" r="2.8" fill="#111820" />
      <circle cx="172" cy="150" r="2.8" fill="#111820" />
      <path d="M156 165 Q164 158 172 165" stroke="#111820" strokeWidth="2.4" strokeLinecap="round" fill="none" />
    </svg>
  );
}
