// app/services/microsoft-dot-net/(svgs)/DotNetLifecycleSvg.jsx
// Six-stage software lifecycle ring around a .NET centre badge. Used in DotNetServices.
// Decorative only (aria-hidden). Text inherits the site font; colours mirror globals.scss tokens.
export const DotNetLifecycleSvg = () => (
  <svg viewBox="0 0 420 420" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
    {/* Lifecycle ring, with the completed stretch drawn in accent */}
    <circle cx="210" cy="210" r="150" stroke="#e3e8ec" strokeWidth="2" />
    <path d="M210 60A150 150 0 0 1 339.9 285" stroke="#046999" strokeWidth="3" strokeLinecap="round" />
    <circle cx="210" cy="210" r="112" stroke="#e3e8ec" strokeWidth="1" strokeDasharray="3 6" />

    {/* Centre badge */}
    <circle cx="210" cy="210" r="74" fill="#111820" />
    <text x="210" y="214" fontSize="30" fontWeight="700" fill="#ffffff" textAnchor="middle">.NET</text>
    <text x="210" y="238" fontSize="10" fontWeight="700" letterSpacing="2" fill="#6fc3e8" textAnchor="middle">LIFECYCLE</text>

    {/* Stage nodes, clockwise from the top */}
    <g fontSize="9" fontWeight="700" letterSpacing="1" textAnchor="middle">
      <circle cx="210" cy="60" r="36" fill="#ffffff" stroke="#e3e8ec" strokeWidth="2" />
      <text x="210" y="63" fill="#0d1b2a">ANALYSE</text>

      <circle cx="339.9" cy="135" r="36" fill="#ffffff" stroke="#e3e8ec" strokeWidth="2" />
      <text x="339.9" y="138" fill="#0d1b2a">DESIGN</text>

      <circle cx="339.9" cy="285" r="36" fill="#046999" />
      <text x="339.9" y="288" fill="#ffffff">BUILD</text>

      <circle cx="210" cy="360" r="36" fill="#ffffff" stroke="#e3e8ec" strokeWidth="2" />
      <text x="210" y="363" fill="#0d1b2a">TEST</text>

      <circle cx="80.1" cy="285" r="36" fill="#ffffff" stroke="#e3e8ec" strokeWidth="2" />
      <text x="80.1" y="288" fill="#0d1b2a">DEPLOY</text>

      <circle cx="80.1" cy="135" r="36" fill="#ffffff" stroke="#e3e8ec" strokeWidth="2" />
      <text x="80.1" y="138" fill="#0d1b2a">SUPPORT</text>
    </g>

    {/* Direction marker on the ring between Support and Analyse */}
    <path d="M140 75l10 2-6 8" stroke="#a0a2a6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
