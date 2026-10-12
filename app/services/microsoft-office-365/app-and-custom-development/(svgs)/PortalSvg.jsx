// app/services/microsoft-office-365/app-and-custom-development/(svgs)/PortalSvg.jsx

// A portal in the middle, joined to a content management system on one side, a CRM on the other and shared data below
export const PortalSvg = () => (
  <svg viewBox="0 0 480 380" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <defs>
      <filter id="pt-shadow" x="-10%" y="-10%" width="120%" height="120%">
        <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#046999" floodOpacity="0.14" />
      </filter>
    </defs>

    {/* Links from the portal to each connected system */}
    <g stroke="#046999" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.6" fill="none">
      <path d="M 100 170 L 140 170" />
      <path d="M 340 170 L 380 170" />
      <path d="M 240 280 L 240 312" />
    </g>

    {/* Portal browser window */}
    <rect x="140" y="50" width="200" height="230" rx="10" fill="#fff" stroke="#046999" strokeWidth="1.5" filter="url(#pt-shadow)" />
    <path d="M 140 60 a 10 10 0 0 1 10 -10 h 180 a 10 10 0 0 1 10 10 v 18 h -200 z" fill="#046999" />
    {[158, 172, 186].map((cx) => (
      <circle key={cx} cx={cx} cy="64" r="3.5" fill="#fff" opacity="0.8" />
    ))}
    <rect x="154" y="92" width="52" height="174" rx="5" fill="#e8f4fa" />
    {[106, 124, 142].map((y) => (
      <rect key={y} x="162" y={y} width="36" height="6" rx="3" fill="#046999" opacity="0.5" />
    ))}
    <rect x="218" y="92" width="108" height="52" rx="5" fill="#e8f4fa" />
    <rect x="218" y="154" width="50" height="50" rx="5" fill="#d0eaf6" />
    <rect x="276" y="154" width="50" height="50" rx="5" fill="#d0eaf6" />
    <rect x="218" y="214" width="108" height="14" rx="7" fill="#046999" opacity="0.8" />
    <rect x="218" y="236" width="70" height="8" rx="4" fill="#046999" opacity="0.3" />

    {/* Content management system */}
    <rect x="12" y="138" width="88" height="64" rx="8" fill="#e8f4fa" stroke="#046999" strokeOpacity="0.5" />
    <rect x="24" y="150" width="64" height="8" rx="4" fill="#046999" opacity="0.6" />
    <rect x="24" y="164" width="48" height="6" rx="3" fill="#046999" opacity="0.35" />
    <text x="56" y="192" textAnchor="middle" fill="#046999" fontSize="10" fontWeight="700">
      CMS
    </text>

    {/* CRM with a contact card */}
    <rect x="380" y="138" width="88" height="64" rx="8" fill="#e8f4fa" stroke="#046999" strokeOpacity="0.5" />
    <circle cx="404" cy="162" r="8" fill="#046999" opacity="0.7" />
    <rect x="418" y="156" width="40" height="6" rx="3" fill="#046999" opacity="0.5" />
    <rect x="418" y="168" width="28" height="5" rx="2.5" fill="#046999" opacity="0.3" />
    <text x="424" y="192" textAnchor="middle" fill="#046999" fontSize="10" fontWeight="700">
      CRM
    </text>

    {/* Shared data store */}
    <path d="M 200 322 v 24 c 0 8 18 14 40 14 s 40 -6 40 -14 v -24" fill="#e8f4fa" stroke="#046999" strokeOpacity="0.6" />
    <ellipse cx="240" cy="322" rx="40" ry="12" fill="#d0eaf6" stroke="#046999" strokeOpacity="0.6" />
    <text x="240" y="352" textAnchor="middle" fill="#046999" fontSize="10" fontWeight="700">
      SHARED DATA
    </text>
  </svg>
);
