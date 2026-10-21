// app/services/microsoft-powerpoint/(svgs)/MasterSlideSvg.jsx

// Master slide with three layouts hanging off it. Neutral shapes use currentColor
// (set by the parent stylesheet); the highlight blue is hard coded because this
// diagram only ever sits on the dark section.
const HIGHLIGHT = "#6fc3e8";

export const MasterSlideSvg = () => (
  <svg
    viewBox="0 0 480 316"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    aria-hidden="true"
    focusable="false"
  >
    {/* Master slide */}
    <rect x="100" y="10" width="280" height="158" rx="6" />
    <rect
      x="120"
      y="28"
      width="180"
      height="22"
      rx="2"
      stroke={HIGHLIGHT}
      strokeDasharray="4 3"
    />
    <circle cx="350" cy="39" r="9" fill={HIGHLIGHT} fillOpacity="0.5" stroke="none" />
    <g fill="currentColor" fillOpacity="0.3" stroke="none">
      <rect x="120" y="70" width="240" height="8" rx="2" />
      <rect x="120" y="88" width="210" height="8" rx="2" />
      <rect x="120" y="106" width="225" height="8" rx="2" />
      <rect x="120" y="154" width="40" height="5" rx="2" />
    </g>
    <path d="M120 144H360" strokeOpacity="0.4" />

    {/* Connectors from the master down to each layout */}
    <path d="M240 168V192M70 192H410M70 192V216M240 192V216M410 192V216" />

    {/* Layout 1: title */}
    <rect x="10" y="216" width="120" height="68" rx="4" />
    <g fill="currentColor" fillOpacity="0.5" stroke="none">
      <rect x="30" y="240" width="80" height="8" rx="2" />
      <rect x="45" y="256" width="50" height="5" rx="2" />
    </g>

    {/* Layout 2: title and content */}
    <rect x="180" y="216" width="120" height="68" rx="4" />
    <g fill="currentColor" fillOpacity="0.5" stroke="none">
      <rect x="196" y="226" width="60" height="6" rx="2" />
      <rect x="196" y="240" width="88" height="34" rx="2" fillOpacity="0.25" />
    </g>

    {/* Layout 3: two columns */}
    <rect x="350" y="216" width="120" height="68" rx="4" />
    <g fill="currentColor" fillOpacity="0.5" stroke="none">
      <rect x="366" y="226" width="60" height="6" rx="2" />
      <rect x="366" y="240" width="40" height="34" rx="2" fillOpacity="0.25" />
      <rect x="414" y="240" width="40" height="34" rx="2" fillOpacity="0.25" />
    </g>

    {/* Layout labels */}
    <g
      fill="currentColor"
      fillOpacity="0.8"
      stroke="none"
      fontSize="11"
      fontFamily="inherit"
      textAnchor="middle"
    >
      <text x="70" y="304">Title</text>
      <text x="240" y="304">Content</text>
      <text x="410" y="304">Two column</text>
    </g>
  </svg>
);
