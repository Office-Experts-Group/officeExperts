// /app/blog/google-docs-vs-microsoft-word/(svgs)/ScaleSvg.jsx
// Illustrative chart: day-to-day friction as documents grow. Not measured data.
// Theme values used (hard-coded hex): $accent #046999, $accent-light #e8f4fa,
// $light-bg #f7f8f9, $text-primary #0d1b2a, $text-secondary #4a5568.

export default function ScaleSvg() {
  return (
    <svg
      viewBox="0 0 720 380"
      role="img"
      aria-labelledby="gdw-scale-title gdw-scale-desc"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "100%", height: "auto" }}
    >
      <title id="gdw-scale-title">
        Illustration of friction growing as documents scale
      </title>
      <desc id="gdw-scale-desc">
        A line chart across three zones: small team, growing business and
        enterprise. Friction with Google Docs rises steeply as documents get
        longer and more regulated. Friction with Word stays comparatively flat.
        The chart is illustrative, not measured data.
      </desc>

      {/* zone bands */}
      <rect x="70" y="40" width="180" height="260" fill="#f7f8f9" />
      <rect x="250" y="40" width="220" height="260" fill="#e8f4fa" />
      <rect x="470" y="40" width="210" height="260" fill="#f7f8f9" />

      {/* axes */}
      <path d="M70 40V300H680" fill="none" stroke="#4a5568" strokeWidth="1.5" />

      {/* curves */}
      <path
        d="M70 270 C250 262 380 220 470 150 S640 60 680 48"
        fill="none"
        stroke="#6b7a89"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M70 270 C250 266 400 252 520 232 S640 205 680 198"
        fill="none"
        stroke="#046999"
        strokeWidth="4"
        strokeLinecap="round"
      />

      {/* end labels */}
      <text
        x="664"
        y="32"
        textAnchor="end"
        fontSize="16"
        fontWeight="700"
        fill="#4a5568"
      >
        Google Docs
      </text>
      <text
        x="664"
        y="254"
        textAnchor="end"
        fontSize="16"
        fontWeight="700"
        fill="#046999"
      >
        Microsoft Word
      </text>

      {/* gap marker */}
      <path
        d="M612 92V196"
        stroke="#0d1b2a"
        strokeWidth="1.5"
        strokeDasharray="4 4"
      />
      <path
        d="M606 102l6-10 6 10M606 186l6 10 6-10"
        fill="none"
        stroke="#0d1b2a"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <text x="598" y="148" textAnchor="end" fontSize="15" fill="#0d1b2a">
        Gap widens
      </text>

      {/* zone labels */}
      <text x="160" y="324" textAnchor="middle" fontSize="15" fill="#0d1b2a">
        Small team
      </text>
      <text x="360" y="324" textAnchor="middle" fontSize="15" fill="#0d1b2a">
        Growing business
      </text>
      <text x="575" y="324" textAnchor="middle" fontSize="15" fill="#0d1b2a">
        Enterprise
      </text>

      {/* axis titles */}
      <text x="375" y="356" textAnchor="middle" fontSize="15" fill="#4a5568">
        Document length, users and compliance rules
      </text>
      <text
        x="24"
        y="170"
        textAnchor="middle"
        fontSize="15"
        fill="#4a5568"
        transform="rotate(-90 24 170)"
      >
        Day-to-day friction
      </text>
    </svg>
  );
}
