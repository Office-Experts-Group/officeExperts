// app/accessibility/(svgs)/ReadingOrderSVG.jsx

// A document silhouette with a numbered path showing the order a screen
// reader will announce content in — represents logical reading order.
const ReadingOrderSVG = () => (
  <svg
    viewBox="0 0 80 80"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    fill="none"
  >
    {/* Document outline */}
    <rect x="18" y="10" width="44" height="60" rx="3" stroke="#046999" strokeWidth="1.6" />

    {/* Content blocks */}
    <rect x="24" y="18" width="20" height="6" rx="1.5" fill="#046999" opacity="0.8" />
    <rect x="24" y="30" width="32" height="4" rx="1" fill="rgba(4,105,153,0.25)" />
    <rect x="24" y="38" width="26" height="4" rx="1" fill="rgba(4,105,153,0.25)" />
    <rect x="24" y="50" width="18" height="6" rx="1.5" fill="#046999" opacity="0.6" />
    <rect x="24" y="60" width="32" height="4" rx="1" fill="rgba(4,105,153,0.25)" />

    {/* Numbered order markers, connected by a travel path */}
    <path
      d="M13 21 L13 53"
      stroke="#046999"
      strokeWidth="1.3"
      strokeDasharray="3 3"
      opacity="0.5"
    />
    <circle cx="13" cy="21" r="6" fill="#046999" />
    <text x="13" y="24" textAnchor="middle" fill="#fff" fontSize="7" fontWeight="700">1</text>

    <circle cx="13" cy="53" r="6" fill="#046999" opacity="0.8" />
    <text x="13" y="56" textAnchor="middle" fill="#fff" fontSize="7" fontWeight="700">2</text>

    <path
      d="M13 59 Q13 66 20 66"
      stroke="#046999"
      strokeWidth="1.3"
      strokeDasharray="3 3"
      opacity="0.5"
    />
    <circle cx="24" cy="66" r="5.5" fill="#046999" opacity="0.6" />
    <text x="24" y="69" textAnchor="middle" fill="#fff" fontSize="6.5" fontWeight="700">3</text>
  </svg>
);

export default ReadingOrderSVG;
