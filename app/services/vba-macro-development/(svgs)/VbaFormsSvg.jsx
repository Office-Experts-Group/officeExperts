// /services/vba-macro-development/(svgs)/VbaFormsSvg.jsx
// A VBA UserForm with one valid field and one failing validation check.
// Decorative only, so it is hidden from assistive technology.
const FONT = "system-ui, -apple-system, 'Segoe UI', sans-serif";

export const VbaFormsSvg = () => (
  <svg
    viewBox="0 0 320 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    focusable="false"
    fontFamily={FONT}
  >
    <rect x="20" y="10" width="280" height="180" rx="12" fill="#ffffff" stroke="#d4d6d9" />
    <path d="M20 22a12 12 0 0 1 12-12h256a12 12 0 0 1 12 12v18H20z" fill="#046999" />
    <text x="36" y="30" fontSize="12" fontWeight="700" fill="#ffffff">
      Client details
    </text>
    <path
      d="M276 20l8 8M284 20l-8 8"
      stroke="#ffffff"
      strokeWidth="1.6"
      strokeLinecap="round"
    />

    {/* Valid field */}
    <text x="40" y="60" fontSize="10" fill="#4a5568">
      Client name
    </text>
    <rect x="40" y="65" width="240" height="22" rx="6" fill="#ffffff" stroke="#d4d6d9" />
    <text x="50" y="80" fontSize="11" fill="#0d1b2a">
      Smith &amp; Co Pty Ltd
    </text>
    <circle cx="266" cy="76" r="7" fill="#0eaa0e" fillOpacity="0.15" />
    <path
      d="M262.5 76.3l2.4 2.4 4.2-4.6"
      stroke="#0eaa0e"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    {/* Field that fails validation */}
    <text x="40" y="106" fontSize="10" fill="#4a5568">
      Report type
    </text>
    <rect x="40" y="111" width="240" height="22" rx="6" fill="#fff5f5" stroke="#c0392b" />
    <text x="50" y="126" fontSize="11" fill="#9a9da1">
      Select a type
    </text>
    <path
      d="M262 120l4 4 4-4"
      stroke="#9a9da1"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <text x="40" y="146" fontSize="9.5" fill="#c0392b">
      Please choose a report type
    </text>

    {/* Buttons */}
    <rect x="150" y="156" width="64" height="24" rx="4" fill="#ffffff" stroke="#d4d6d9" />
    <text x="182" y="172" fontSize="10.5" fontWeight="700" fill="#4a5568" textAnchor="middle">
      Cancel
    </text>
    <rect x="222" y="156" width="58" height="24" rx="4" fill="#046999" />
    <text x="251" y="172" fontSize="10.5" fontWeight="700" fill="#ffffff" textAnchor="middle">
      Create
    </text>
  </svg>
);
