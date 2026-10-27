// /app/blog/google-docs-vs-microsoft-word/(svgs)/HeroSvg.jsx
// Hero illustration: a quick shared draft becoming a governed document.
// Theme values used (hard-coded hex): $dark-surface #18232e, $dark-mid #1a2a3a,
// $accent #046999, $accent-on-dark #5bbce6, $white #ffffff. Generic shapes only.

export default function HeroSvg() {
  return (
    <svg
      viewBox="0 0 520 400"
      role="img"
      aria-labelledby="gdw-hero-title gdw-hero-desc"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "100%", height: "auto" }}
    >
      <title id="gdw-hero-title">
        From quick collaboration to scaled document control
      </title>
      <desc id="gdw-hero-desc">
        On the left, an informal shared page with two editing cursors. On the
        right, a structured page with a title, contents and a table, protected
        by a padlock.
      </desc>

      {/* left page: quick collaboration */}
      <rect
        x="20"
        y="70"
        width="190"
        height="250"
        rx="14"
        fill="#1f3144"
        stroke="#ffffff"
        strokeOpacity="0.18"
      />
      <rect x="40" y="96" width="120" height="9" rx="4.5" fill="#6f879c" />
      <rect x="40" y="122" width="140" height="7" rx="3.5" fill="#4d6378" />
      <rect x="40" y="146" width="104" height="7" rx="3.5" fill="#4d6378" />
      <rect x="40" y="170" width="150" height="7" rx="3.5" fill="#4d6378" />
      <rect x="40" y="194" width="92" height="7" rx="3.5" fill="#4d6378" />
      <rect x="40" y="218" width="132" height="7" rx="3.5" fill="#4d6378" />
      <rect x="40" y="242" width="110" height="7" rx="3.5" fill="#4d6378" />
      <rect x="40" y="266" width="140" height="7" rx="3.5" fill="#4d6378" />
      {/* cursors */}
      <rect x="148" y="158" width="3" height="24" rx="1.5" fill="#5bbce6" />
      <rect x="151" y="148" width="40" height="14" rx="5" fill="#5bbce6" />
      <rect x="100" y="206" width="3" height="24" rx="1.5" fill="#c9d6e2" />
      <rect x="103" y="196" width="34" height="14" rx="5" fill="#c9d6e2" />

      {/* arrow */}
      <path
        d="M226 195h58"
        stroke="#5bbce6"
        strokeWidth="3"
        strokeLinecap="round"
        strokeDasharray="2 9"
      />
      <path
        d="M280 181l18 14-18 14"
        fill="none"
        stroke="#5bbce6"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* right page: scaled control */}
      <rect
        x="310"
        y="50"
        width="190"
        height="290"
        rx="14"
        fill="#f4f8fb"
        stroke="#5bbce6"
        strokeWidth="2"
      />
      <rect x="328" y="72" width="118" height="13" rx="3" fill="#046999" />
      <rect x="328" y="94" width="80" height="6" rx="3" fill="#9db4c6" />
      {/* contents block */}
      <rect x="328" y="118" width="154" height="62" rx="8" fill="#e8f4fa" />
      <circle cx="342" cy="134" r="3" fill="#046999" />
      <rect x="352" y="131" width="84" height="6" rx="3" fill="#9db4c6" />
      <circle cx="342" cy="150" r="3" fill="#046999" />
      <rect x="352" y="147" width="60" height="6" rx="3" fill="#9db4c6" />
      <circle cx="342" cy="166" r="3" fill="#046999" />
      <rect x="352" y="163" width="96" height="6" rx="3" fill="#9db4c6" />
      {/* section */}
      <rect x="328" y="198" width="64" height="9" rx="3" fill="#046999" />
      <rect x="328" y="216" width="154" height="6" rx="3" fill="#c8d4de" />
      <rect x="328" y="230" width="154" height="6" rx="3" fill="#c8d4de" />
      <rect x="328" y="244" width="110" height="6" rx="3" fill="#c8d4de" />
      {/* table */}
      <rect
        x="328"
        y="264"
        width="154"
        height="52"
        rx="6"
        fill="#ffffff"
        stroke="#9db4c6"
      />
      <rect x="328" y="264" width="154" height="14" rx="6" fill="#046999" />
      <path d="M328 292h154M328 304h154" stroke="#c8d4de" />
      <path d="M379 278v38M430 278v38" stroke="#c8d4de" />

      {/* padlock badge */}
      <circle
        cx="480"
        cy="56"
        r="26"
        fill="#046999"
        stroke="#ffffff"
        strokeWidth="3"
      />
      <rect x="469" y="56" width="22" height="17" rx="3.5" fill="#ffffff" />
      <path
        d="M473 56v-4a7 7 0 0 1 14 0v4"
        fill="none"
        stroke="#ffffff"
        strokeWidth="3"
        strokeLinecap="round"
      />

      {/* captions */}
      <text
        x="115"
        y="372"
        textAnchor="middle"
        fontSize="15"
        fill="#ffffff"
        fillOpacity="0.7"
      >
        Quick collaboration
      </text>
      <text
        x="405"
        y="372"
        textAnchor="middle"
        fontSize="15"
        fill="#ffffff"
        fillOpacity="0.7"
      >
        Scaled control
      </text>
    </svg>
  );
}
