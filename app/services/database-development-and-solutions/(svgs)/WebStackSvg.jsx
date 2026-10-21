// app/services/database-development-and-solutions/(svgs)/WebStackSvg.jsx
// A browser window and a phone both reading from one hosted database through a secured API.
// Decorative only, so it is hidden from assistive technology where it is used.

export const WebStackSvg = () => (
  <svg
    viewBox="0 0 420 330"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    focusable="false"
  >
    {/* Browser window */}
    <rect
      x="20"
      y="20"
      width="250"
      height="160"
      rx="8"
      fill="#ffffff"
      stroke="rgba(0,0,0,0.11)"
    />
    <path d="M20 28a8 8 0 0 1 8 -8h234a8 8 0 0 1 8 8v14h-250z" fill="#f2f3f5" />
    <circle cx="36" cy="31" r="3.5" fill="#c0392b" opacity="0.6" />
    <circle cx="48" cy="31" r="3.5" fill="#9a9da1" />
    <circle cx="60" cy="31" r="3.5" fill="#9a9da1" />
    <rect x="80" y="26" width="150" height="10" rx="5" fill="#ffffff" />
    <rect x="38" y="58" width="90" height="10" rx="5" fill="#0d1b2a" />
    <rect
      x="38"
      y="78"
      width="150"
      height="8"
      rx="4"
      fill="#4a5568"
      opacity="0.2"
    />
    <rect x="38" y="104" width="64" height="56" rx="6" fill="#e8f4fa" />
    <rect x="110" y="104" width="64" height="56" rx="6" fill="#e8f4fa" />
    <rect
      x="182"
      y="104"
      width="64"
      height="56"
      rx="6"
      fill="#046999"
      opacity="0.85"
    />

    {/* Phone */}
    <rect x="300" y="40" width="96" height="170" rx="16" fill="#0d1b2a" />
    <rect x="308" y="56" width="80" height="138" rx="6" fill="#ffffff" />
    <rect x="318" y="68" width="44" height="8" rx="4" fill="#0d1b2a" />
    <rect x="318" y="86" width="60" height="28" rx="5" fill="#e8f4fa" />
    <rect x="318" y="120" width="60" height="28" rx="5" fill="#e8f4fa" />
    <rect x="318" y="160" width="60" height="22" rx="11" fill="#046999" />

    {/* Connection lines down to the database */}
    <path
      d="M145 180v50h50"
      stroke="#046999"
      strokeWidth="1.5"
      strokeDasharray="4 5"
    />
    <path
      d="M348 210v20h-123"
      stroke="#046999"
      strokeWidth="1.5"
      strokeDasharray="4 5"
    />

    {/* Lock badge: the API checks who is signed in before returning data */}
    <circle cx="210" cy="230" r="15" fill="#ffffff" stroke="rgba(0,0,0,0.11)" />
    <rect x="203" y="229" width="14" height="10" rx="2" fill="#046999" />
    <path d="M206 229v-4a4 4 0 0 1 8 0v4" stroke="#046999" strokeWidth="1.8" />

    {/* Database cylinder */}
    <path d="M160 262v40c0 8 22.4 14 50 14s50 -6 50 -14v-40" fill="#0d1b2a" />
    <ellipse cx="210" cy="262" rx="50" ry="14" fill="#18232e" />
    <path
      d="M160 282c0 8 22.4 14 50 14s50 -6 50 -14"
      stroke="#ffffff"
      strokeOpacity="0.18"
    />
    <ellipse
      cx="210"
      cy="262"
      rx="50"
      ry="14"
      stroke="#046999"
      strokeOpacity="0.6"
    />
  </svg>
);
