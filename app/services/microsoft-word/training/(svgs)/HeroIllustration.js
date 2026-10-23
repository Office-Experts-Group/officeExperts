const HeroIllustration = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 420 340"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    {/* Background document */}
    <rect x="60" y="30" width="200" height="260" rx="6" fill="white" fillOpacity="0.04" stroke="white" strokeOpacity="0.12" strokeWidth="1.5" />

    {/* Foreground document */}
    <rect x="120" y="60" width="200" height="260" rx="6" fill="white" fillOpacity="0.06" stroke="white" strokeOpacity="0.2" strokeWidth="1.5" />

    {/* Corner fold */}
    <path d="M292 60l28 28h-28V60z" fill="white" fillOpacity="0.08" stroke="white" strokeOpacity="0.2" strokeWidth="1" />

    {/* Text lines — primary doc */}
    <rect x="140" y="108" width="120" height="3" rx="1.5" fill="#046999" fillOpacity="0.9" />
    <rect x="140" y="120" width="160" height="2" rx="1" fill="white" fillOpacity="0.2" />
    <rect x="140" y="130" width="150" height="2" rx="1" fill="white" fillOpacity="0.2" />
    <rect x="140" y="140" width="140" height="2" rx="1" fill="white" fillOpacity="0.2" />
    <rect x="140" y="150" width="155" height="2" rx="1" fill="white" fillOpacity="0.2" />
    <rect x="140" y="164" width="160" height="2" rx="1" fill="white" fillOpacity="0.12" />
    <rect x="140" y="174" width="130" height="2" rx="1" fill="white" fillOpacity="0.12" />
    <rect x="140" y="184" width="148" height="2" rx="1" fill="white" fillOpacity="0.12" />

    {/* Accent highlight bar */}
    <rect x="140" y="100" width="4" height="60" rx="2" fill="#046999" />

    {/* Toolbar mockup at top of foreground doc */}
    <rect x="120" y="60" width="200" height="28" rx="6" fill="white" fillOpacity="0.05" />
    <circle cx="140" cy="74" r="4" fill="#046999" fillOpacity="0.7" />
    <circle cx="156" cy="74" r="4" fill="white" fillOpacity="0.15" />
    <circle cx="172" cy="74" r="4" fill="white" fillOpacity="0.15" />
    <rect x="188" y="70" width="40" height="8" rx="2" fill="white" fillOpacity="0.08" />
    <rect x="234" y="70" width="28" height="8" rx="2" fill="white" fillOpacity="0.08" />

    {/* Floating stat card */}
    <rect x="270" y="180" width="130" height="80" rx="8" fill="#046999" fillOpacity="0.15" stroke="#046999" strokeOpacity="0.4" strokeWidth="1.5" />
    <text x="285" y="210" fontFamily="system-ui" fontSize="11" fill="white" fillOpacity="0.5" letterSpacing="0.5">PRODUCTIVITY</text>
    <text x="285" y="238" fontFamily="system-ui" fontSize="28" fontWeight="700" fill="white" fillOpacity="0.9">+40%</text>

    {/* Small connector lines */}
    <line x1="320" y1="180" x2="300" y2="155" stroke="#046999" strokeOpacity="0.4" strokeWidth="1" strokeDasharray="4 3" />

    {/* Cursor */}
    <path d="M360 120l-8 24 5-2 3 8 3-1-3-8 5-2-8-19z" fill="white" fillOpacity="0.6" stroke="white" strokeOpacity="0.3" strokeWidth="0.5" />

    {/* Paragraph mark floating */}
    <text x="50" y="200" fontFamily="Georgia, serif" fontSize="48" fill="#046999" fillOpacity="0.15" fontWeight="bold">¶</text>

    {/* Small dot grid accent */}
    {[0,1,2,3].map(row =>
      [0,1,2,3].map(col => (
        <circle
          key={`${row}-${col}`}
          cx={370 + col * 10}
          cy={60 + row * 10}
          r="1.5"
          fill="white"
          fillOpacity="0.1"
        />
      ))
    )}
  </svg>
);

export default HeroIllustration;
