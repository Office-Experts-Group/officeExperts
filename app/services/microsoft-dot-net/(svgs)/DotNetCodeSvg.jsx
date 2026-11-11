// app/services/microsoft-dot-net/(svgs)/DotNetCodeSvg.jsx
// Code editor with C# and VB tabs and a passing build card. Used in DotNetIntro.
// Decorative only (aria-hidden). Text inherits the site font; colours mirror globals.scss tokens.
export const DotNetCodeSvg = () => (
  <svg viewBox="0 0 480 400" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
    {/* Soft backdrop panel */}
    <rect x="44" y="20" width="420" height="344" rx="28" fill="#f2f3f5" />

    {/* Editor window */}
    <rect x="16" y="52" width="384" height="284" rx="20" fill="#111820" />
    <path d="M16 72a20 20 0 0 1 20-20h344a20 20 0 0 1 20 20v18H16z" fill="#18232e" />
    <circle cx="38" cy="71" r="5" fill="#ffffff2e" />
    <circle cx="54" cy="71" r="5" fill="#ffffff2e" />
    <circle cx="70" cy="71" r="5" fill="#ffffff2e" />

    {/* Open tabs */}
    <rect x="92" y="60" width="96" height="30" rx="7" fill="#111820" />
    <text x="106" y="80" fontSize="11" fontFamily="Consolas, Menlo, monospace" fill="#ffffffbf">Program.cs</text>
    <text x="204" y="80" fontSize="11" fontFamily="Consolas, Menlo, monospace" fill="#ffffff59">Orders.vb</text>

    {/* Line numbers */}
    <g fontSize="10" fontFamily="Consolas, Menlo, monospace" fill="#ffffff40" textAnchor="end">
      <text x="44" y="122">1</text>
      <text x="44" y="144">2</text>
      <text x="44" y="166">3</text>
      <text x="44" y="188">4</text>
      <text x="44" y="210">5</text>
      <text x="44" y="232">6</text>
      <text x="44" y="254">7</text>
      <text x="44" y="276">8</text>
      <text x="44" y="298">9</text>
    </g>

    {/* Code, drawn as coloured token bars */}
    <rect x="60" y="114" width="44" height="9" rx="4.5" fill="#6fc3e8" />
    <rect x="110" y="114" width="120" height="9" rx="4.5" fill="#ffffffa6" />

    <rect x="60" y="158" width="38" height="9" rx="4.5" fill="#6fc3e8" />
    <rect x="104" y="158" width="58" height="9" rx="4.5" fill="#6fc3e8" />
    <rect x="168" y="158" width="90" height="9" rx="4.5" fill="#ffffffa6" />

    <rect x="78" y="180" width="64" height="9" rx="4.5" fill="#6fc3e8" />
    <rect x="148" y="180" width="110" height="9" rx="4.5" fill="#ffffff59" />
    <rect x="264" y="180" width="36" height="9" rx="4.5" fill="#ffffffa6" />

    <rect x="96" y="202" width="52" height="9" rx="4.5" fill="#ffffffa6" />
    <rect x="154" y="202" width="140" height="9" rx="4.5" fill="#0eaa0e" fillOpacity="0.75" />

    <rect x="96" y="224" width="46" height="9" rx="4.5" fill="#6fc3e8" />
    <rect x="148" y="224" width="96" height="9" rx="4.5" fill="#ffffffa6" />

    <rect x="78" y="246" width="12" height="9" rx="4.5" fill="#ffffff59" />
    <rect x="60" y="268" width="12" height="9" rx="4.5" fill="#ffffff59" />

    {/* Blinking-style cursor on the active line */}
    <rect x="250" y="221" width="2" height="15" fill="#6fc3e8" />

    {/* Language badges */}
    <circle cx="404" cy="58" r="30" fill="#046999" />
    <text x="404" y="64" fontSize="17" fontWeight="700" fill="#ffffff" textAnchor="middle">C#</text>
    <circle cx="444" cy="112" r="22" fill="#034e72" />
    <text x="444" y="117" fontSize="12" fontWeight="700" fill="#ffffff" textAnchor="middle">VB</text>

    {/* Build result card */}
    <rect x="246" y="280" width="222" height="84" rx="16" fill="#0d1b2a" fillOpacity="0.08" transform="translate(0 6)" />
    <rect x="246" y="280" width="222" height="84" rx="16" fill="#ffffff" />
    <circle cx="280" cy="322" r="15" fill="#0eaa0e" />
    <path d="M273 322l5 5 9-10" stroke="#ffffff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
    <text x="306" y="317" fontSize="13" fontWeight="700" fill="#0d1b2a">Build succeeded</text>
    <text x="306" y="336" fontSize="11" fill="#4a5568">net10.0 · 0 warnings</text>
  </svg>
);
