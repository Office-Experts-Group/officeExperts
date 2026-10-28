// /app/blog/word-desktop-vs-web/(svgs)/PersonaSvgs.jsx
// Five small scenario illustrations that replace the old stock images.
// Hex values: $accent #046999, $accent-light #e8f4fa, $text-primary #0d1b2a. Generic shapes only.

const wrap = (id, title, children) => (
  <svg
    viewBox="0 0 160 120"
    role="img"
    aria-labelledby={`${id}-t`}
    xmlns="http://www.w3.org/2000/svg"
    style={{ width: "100%", height: "auto", display: "block" }}
  >
    <title id={`${id}-t`}>{title}</title>
    <rect x="0" y="0" width="160" height="120" rx="14" fill="#e8f4fa" />
    {children}
  </svg>
);

export const StudentSvg = () =>
  wrap(
    "wdw-p1",
    "Student with a graduation cap and an open book",
    <g>
      <path d="M80 26L124 44 80 62 36 44z" fill="#046999" />
      <path
        d="M56 54v16c0 6 11 12 24 12s24-6 24-12V54"
        fill="none"
        stroke="#046999"
        strokeWidth="4"
      />
      <path
        d="M124 46v22"
        stroke="#0d1b2a"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <circle cx="124" cy="72" r="4" fill="#0d1b2a" />
      <rect
        x="44"
        y="90"
        width="72"
        height="14"
        rx="3"
        fill="#ffffff"
        stroke="#9fc3d4"
      />
      <path d="M80 90v14" stroke="#9fc3d4" />
    </g>,
  );

export const BusinessSvg = () =>
  wrap(
    "wdw-p2",
    "Small shopfront with a striped awning",
    <g>
      <rect
        x="32"
        y="52"
        width="96"
        height="52"
        rx="4"
        fill="#ffffff"
        stroke="#9fc3d4"
      />
      <path d="M26 52l10-24h88l10 24z" fill="#046999" />
      {[0, 1, 2, 3].map((i) => (
        <path
          key={i}
          d={`M${36 + i * 22} 28h11l-4 24h-11z`}
          fill="#ffffff"
          fillOpacity="0.28"
        />
      ))}
      <rect
        x="68"
        y="72"
        width="24"
        height="32"
        rx="3"
        fill="#e8f4fa"
        stroke="#9fc3d4"
      />
      <rect
        x="40"
        y="64"
        width="20"
        height="16"
        rx="3"
        fill="#e8f4fa"
        stroke="#9fc3d4"
      />
      <rect
        x="100"
        y="64"
        width="20"
        height="16"
        rx="3"
        fill="#e8f4fa"
        stroke="#9fc3d4"
      />
    </g>,
  );

export const LegalSvg = () =>
  wrap(
    "wdw-p3",
    "Balanced scales beside a contract page",
    <g>
      <path
        d="M62 30h36M80 30v56M60 90h40"
        stroke="#046999"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M46 36h68"
        stroke="#046999"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M46 36l-14 28h28zM114 36l-14 28h28z"
        fill="none"
        stroke="#046999"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      <path
        d="M32 64a14 6 0 0 0 28 0zM100 64a14 6 0 0 0 28 0z"
        fill="#046999"
      />
      <rect
        x="122"
        y="76"
        width="22"
        height="28"
        rx="3"
        fill="#ffffff"
        stroke="#9fc3d4"
      />
      <path
        d="M127 84h12M127 90h12M127 96h8"
        stroke="#9fc3d4"
        strokeWidth="2"
      />
    </g>,
  );

export const MarketingSvg = () =>
  wrap(
    "wdw-p4",
    "Bar chart with a rising trend line",
    <g>
      <rect x="34" y="68" width="18" height="34" rx="3" fill="#9fc3d4" />
      <rect x="62" y="54" width="18" height="48" rx="3" fill="#6aa9c4" />
      <rect x="90" y="42" width="18" height="60" rx="3" fill="#2b87ae" />
      <rect x="118" y="28" width="18" height="74" rx="3" fill="#046999" />
      <path
        d="M34 60L66 46l28-8 40-14"
        fill="none"
        stroke="#0d1b2a"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeDasharray="1 6"
      />
      <path
        d="M28 104h112"
        stroke="#9fc3d4"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </g>,
  );

export const WriterSvg = () =>
  wrap(
    "wdw-p5",
    "Pen resting on a stack of pages",
    <g>
      <rect
        x="40"
        y="70"
        width="80"
        height="12"
        rx="3"
        fill="#ffffff"
        stroke="#9fc3d4"
      />
      <rect
        x="36"
        y="82"
        width="88"
        height="12"
        rx="3"
        fill="#ffffff"
        stroke="#9fc3d4"
      />
      <rect
        x="32"
        y="94"
        width="96"
        height="12"
        rx="3"
        fill="#ffffff"
        stroke="#9fc3d4"
      />
      <path d="M112 22l16 16-44 44-20 4 4-20z" fill="#046999" />
      <path
        d="M108 26l16 16"
        stroke="#ffffff"
        strokeOpacity="0.5"
        strokeWidth="2"
      />
      <path
        d="M64 82l-4 12"
        stroke="#0d1b2a"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </g>,
  );

export const personaSvgs = {
  student: StudentSvg,
  business: BusinessSvg,
  legal: LegalSvg,
  marketing: MarketingSvg,
  writer: WriterSvg,
};
