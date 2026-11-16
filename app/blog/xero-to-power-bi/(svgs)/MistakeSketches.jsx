// /app/blog/xero-to-power-bi/(svgs)/MistakeSketches.jsx
// Five small "Avoid" vs "Do this" sketches, one per pitfall. Decorative (aria-hidden).
// Avoid = slate, dashed frame, messy. Do this = accent, clean.
// Tokens: $accent #046999, $accent-light #e8f4fa, $text-secondary #4a5568,
// $replace-x #c0392b (tiny purposeful accent only), $line-strong #d4d6d9.

const SLATE = "#64748b";
const SLATE_BG = "#f1f5f9";
const ACCENT = "#046999";
const ACCENT_BG = "#e8f4fa";
const RED = "#c0392b";

const Frame = ({ children }) => (
  <svg
    viewBox="0 0 460 170"
    aria-hidden="true"
    focusable="false"
    fontFamily="aptos"
  >
    {/* Avoid panel */}
    <rect
      x="1"
      y="1"
      width="212"
      height="168"
      rx="12"
      fill={SLATE_BG}
      stroke={SLATE}
      strokeWidth="1.5"
      strokeDasharray="6 5"
    />
    <text
      x="16"
      y="26"
      fontSize="14"
      fontWeight="700"
      letterSpacing="1.5"
      fill={SLATE}
    >
      AVOID
    </text>
    {/* Do panel */}
    <rect
      x="247"
      y="1"
      width="212"
      height="168"
      rx="12"
      fill={ACCENT_BG}
      stroke={ACCENT}
      strokeWidth="1.5"
    />
    <text
      x="262"
      y="26"
      fontSize="14"
      fontWeight="700"
      letterSpacing="1.5"
      fill={ACCENT}
    >
      DO THIS
    </text>
    {/* connector */}
    <path
      d="M218 90h24"
      stroke={ACCENT}
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <path
      d="m236 83 7 7-7 7"
      fill="none"
      stroke={ACCENT}
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {children}
  </svg>
);

/* 1. Token expiry: personal login with a lapsing clock vs service account with a refresh loop */
export const SketchToken = () => (
  <Frame>
    {/* avoid: person badge, key, cracked clock */}
    <circle cx="62" cy="86" r="14" fill="none" stroke={SLATE} strokeWidth="2" />
    <path
      d="M36 128c0-14 12-24 26-24s26 10 26 24"
      fill="none"
      stroke={SLATE}
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M96 90h36"
      stroke={SLATE}
      strokeWidth="2"
      strokeLinecap="round"
      strokeDasharray="3 4"
    />
    <circle
      cx="160"
      cy="92"
      r="28"
      fill="#ffffff"
      stroke={SLATE}
      strokeWidth="2"
      strokeDasharray="5 4"
    />
    <path
      d="M160 74v18l12 8"
      fill="none"
      stroke={SLATE}
      strokeWidth="2.2"
      strokeLinecap="round"
    />
    <path
      d="m148 118 24 22"
      stroke={RED}
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <path
      d="m172 118-24 22"
      stroke={RED}
      strokeWidth="2.5"
      strokeLinecap="round"
    />

    {/* do: service account, steady key, refresh loop */}
    <rect
      x="272"
      y="62"
      width="64"
      height="64"
      rx="12"
      fill="#ffffff"
      stroke={ACCENT}
      strokeWidth="2"
    />
    <circle
      cx="304"
      cy="86"
      r="9"
      fill="none"
      stroke={ACCENT}
      strokeWidth="2.2"
    />
    <path
      d="M286 114c0-9 8-16 18-16s18 7 18 16"
      fill="none"
      stroke={ACCENT}
      strokeWidth="2.2"
      strokeLinecap="round"
    />
    <path
      d="M340 94h30"
      stroke={ACCENT}
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <circle
      cx="396"
      cy="94"
      r="26"
      fill="#ffffff"
      stroke={ACCENT}
      strokeWidth="2"
    />
    <path
      d="M384 98a13 13 0 0 1 21-9"
      fill="none"
      stroke={ACCENT}
      strokeWidth="2.6"
      strokeLinecap="round"
    />
    <path
      d="m407 82 .6 8.6-8.6-.6"
      fill="none"
      stroke={ACCENT}
      strokeWidth="2.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M408 102a13 13 0 0 1-21 9"
      fill="none"
      stroke={ACCENT}
      strokeWidth="2.6"
      strokeLinecap="round"
    />
    <path
      d="m385 118-.6-8.6 8.6.6"
      fill="none"
      stroke={ACCENT}
      strokeWidth="2.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="396" cy="140" r="8" fill={ACCENT} />
    <path
      d="m392 140 3 3 5-6"
      fill="none"
      stroke="#ffffff"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Frame>
);

/* 2. URL length: one huge tangled URL vs short URL then a Power Query funnel */
export const SketchUrl = () => (
  <Frame>
    {/* avoid: very long URL snaking off the panel with piled filter chips */}
    <path
      d="M20 64h170c14 0 14 18 0 18H40c-16 0-16 18 0 18h150c14 0 14 18 0 18H30"
      fill="none"
      stroke={SLATE}
      strokeWidth="3"
      strokeLinecap="round"
    />
    {[26, 70, 114, 156].map((x) => (
      <rect
        key={x}
        x={x}
        y="134"
        width="34"
        height="16"
        rx="8"
        fill="#ffffff"
        stroke={SLATE}
        strokeWidth="1.5"
        strokeDasharray="3 3"
      />
    ))}
    <path
      d="M180 38l14 14M194 38l-14 14"
      stroke={RED}
      strokeWidth="2.5"
      strokeLinecap="round"
    />

    {/* do: short URL, then funnel doing the filtering after load */}
    <rect
      x="266"
      y="72"
      width="76"
      height="24"
      rx="12"
      fill="#ffffff"
      stroke={ACCENT}
      strokeWidth="2"
    />
    <path
      d="M280 84h48"
      stroke={ACCENT}
      strokeWidth="3"
      strokeLinecap="round"
    />
    <path
      d="M346 84h18"
      stroke={ACCENT}
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <path
      d="M370 62h64l-24 28v30l-16 10V90l-24-28Z"
      fill="#ffffff"
      stroke={ACCENT}
      strokeWidth="2"
      strokeLinejoin="round"
    />
    <path
      d="M382 72h40"
      stroke={ACCENT}
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <path
      d="M286 130h140"
      stroke={ACCENT}
      strokeWidth="1.5"
      strokeDasharray="4 4"
    />
    <circle cx="288" cy="142" r="4" fill={ACCENT} />
    <circle cx="302" cy="142" r="4" fill={ACCENT} />
    <circle cx="316" cy="142" r="4" fill={ACCENT} fillOpacity="0.4" />
  </Frame>
);

/* 3. Rate limits: every table all the time vs two tables off-peak */
export const SketchRate = () => (
  <Frame>
    {/* avoid: many tables, gauge in the red */}
    {[0, 1, 2, 3, 4, 5].map((i) => (
      <rect
        key={i}
        x="24"
        y={44 + i * 18}
        width={110 - (i % 3) * 14}
        height="12"
        rx="4"
        fill="#cbd5e1"
        stroke={SLATE}
        strokeWidth="1"
      />
    ))}
    <path
      d="M150 140a34 34 0 0 1 56 0"
      fill="none"
      stroke={SLATE}
      strokeWidth="7"
      strokeLinecap="round"
      strokeOpacity="0.35"
    />
    <path
      d="M190 128a34 34 0 0 1 16 12"
      fill="none"
      stroke={RED}
      strokeWidth="7"
      strokeLinecap="round"
    />
    <path
      d="M178 140 198 118"
      stroke={SLATE}
      strokeWidth="3"
      strokeLinecap="round"
    />
    <circle cx="178" cy="140" r="5" fill={SLATE} />

    {/* do: two tables, moon (off-peak), gauge in the clear */}
    {[0, 1].map((i) => (
      <rect
        key={i}
        x="270"
        y={52 + i * 24}
        width={108 - i * 20}
        height="16"
        rx="5"
        fill="#ffffff"
        stroke={ACCENT}
        strokeWidth="2"
      />
    ))}
    <path
      d="M410 56a16 16 0 1 0 14 24 13 13 0 0 1-14-24Z"
      fill="#ffffff"
      stroke={ACCENT}
      strokeWidth="2"
      strokeLinejoin="round"
    />
    <path
      d="M270 140a34 34 0 0 1 56 0"
      fill="none"
      stroke={ACCENT}
      strokeWidth="7"
      strokeLinecap="round"
      strokeOpacity="0.25"
    />
    <path
      d="M270 140a34 34 0 0 1 14-24"
      fill="none"
      stroke={ACCENT}
      strokeWidth="7"
      strokeLinecap="round"
    />
    <path
      d="M298 140 282 122"
      stroke={ACCENT}
      strokeWidth="3"
      strokeLinecap="round"
    />
    <circle cx="298" cy="140" r="5" fill={ACCENT} />
  </Frame>
);

/* 4. Large datasets: years of rows live vs 90 days live + SQL archive */
export const SketchVolume = () => (
  <Frame>
    {/* avoid: tall stack of years pushed through one feed */}
    {[0, 1, 2, 3, 4, 5, 6].map((i) => (
      <rect
        key={i}
        x="30"
        y={40 + i * 17}
        width="96"
        height="13"
        rx="4"
        fill="#cbd5e1"
        stroke={SLATE}
        strokeWidth="1"
      />
    ))}
    <path
      d="M132 100h26"
      stroke={SLATE}
      strokeWidth="3"
      strokeLinecap="round"
      strokeDasharray="2 5"
    />
    <rect
      x="164"
      y="76"
      width="34"
      height="48"
      rx="8"
      fill="#ffffff"
      stroke={SLATE}
      strokeWidth="2"
      strokeDasharray="5 4"
    />
    <path
      d="M172 100h18"
      stroke={SLATE}
      strokeWidth="2"
      strokeLinecap="round"
    />

    {/* do: small live slice + archive cylinder, both feeding the report */}
    <rect x="268" y="58" width="70" height="30" rx="7" fill={ACCENT} />
    <text
      x="303"
      y="78"
      textAnchor="middle"
      fontSize="14"
      fontWeight="700"
      fill="#ffffff"
    >
      90 days
    </text>
    <path
      d="M268 118c0-5 16-9 36-9s36 4 36 9v22c0 5-16 9-36 9s-36-4-36-9v-22Z"
      fill="#ffffff"
      stroke={ACCENT}
      strokeWidth="2"
    />
    <path
      d="M268 118c0 5 16 9 36 9s36-4 36-9"
      fill="none"
      stroke={ACCENT}
      strokeWidth="2"
    />
    <path
      d="M338 73h28c10 0 14 6 14 14v6M340 130h26c10 0 14-6 14-14v-10"
      fill="none"
      stroke={ACCENT}
      strokeWidth="2.2"
      strokeLinecap="round"
    />
    <rect
      x="384"
      y="82"
      width="56"
      height="34"
      rx="7"
      fill="#ffffff"
      stroke={ACCENT}
      strokeWidth="2"
    />
    <rect
      x="394"
      y="100"
      width="8"
      height="10"
      rx="2"
      fill={ACCENT}
      fillOpacity="0.5"
    />
    <rect
      x="408"
      y="94"
      width="8"
      height="16"
      rx="2"
      fill={ACCENT}
      fillOpacity="0.7"
    />
    <rect x="422" y="88" width="8" height="22" rx="2" fill={ACCENT} />
  </Frame>
);

/* 5. Schema changes: model breaks on a missing column vs placeholder keeps it standing */
export const SketchSchema = () => (
  <Frame>
    {/* avoid: table with a vanished column and a crack */}
    <rect
      x="28"
      y="50"
      width="150"
      height="90"
      rx="8"
      fill="#ffffff"
      stroke={SLATE}
      strokeWidth="2"
    />
    <path d="M28 74h150M78 50v90" stroke={SLATE} strokeWidth="1.5" />
    <rect x="86" y="54" width="86" height="16" rx="3" fill="#cbd5e1" />
    <rect x="86" y="82" width="64" height="8" rx="4" fill="#cbd5e1" />
    <rect x="86" y="100" width="72" height="8" rx="4" fill="#cbd5e1" />
    <rect x="86" y="118" width="52" height="8" rx="4" fill="#cbd5e1" />
    <rect
      x="34"
      y="78"
      width="38"
      height="58"
      rx="4"
      fill="none"
      stroke={RED}
      strokeWidth="1.8"
      strokeDasharray="4 3"
    />
    <path
      d="M150 140l10-14-8-8 14-12"
      fill="none"
      stroke={RED}
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    {/* do: same table, placeholder column, shield over the model */}
    <rect
      x="274"
      y="50"
      width="150"
      height="90"
      rx="8"
      fill="#ffffff"
      stroke={ACCENT}
      strokeWidth="2"
    />
    <path d="M274 74h150M324 50v90" stroke={ACCENT} strokeWidth="1.5" />
    <rect
      x="332"
      y="54"
      width="86"
      height="16"
      rx="3"
      fill={ACCENT}
      fillOpacity="0.3"
    />
    <rect
      x="332"
      y="82"
      width="64"
      height="8"
      rx="4"
      fill={ACCENT}
      fillOpacity="0.3"
    />
    <rect
      x="332"
      y="100"
      width="72"
      height="8"
      rx="4"
      fill={ACCENT}
      fillOpacity="0.3"
    />
    <rect
      x="332"
      y="118"
      width="52"
      height="8"
      rx="4"
      fill={ACCENT}
      fillOpacity="0.3"
    />
    <rect
      x="280"
      y="78"
      width="38"
      height="58"
      rx="4"
      fill={ACCENT_BG}
      stroke={ACCENT}
      strokeWidth="1.6"
      strokeDasharray="4 3"
    />
    <path
      d="M287 98h24M287 110h24M287 122h14"
      stroke={ACCENT}
      strokeWidth="2"
      strokeLinecap="round"
      strokeOpacity="0.5"
    />
    <path
      d="M404 112l-14 6v8c0 8 6 13 14 16 8-3 14-8 14-16v-8l-14-6Z"
      fill="#ffffff"
      stroke={ACCENT}
      strokeWidth="2"
      strokeLinejoin="round"
    />
    <path
      d="m398 130 4 4 8-9"
      fill="none"
      stroke={ACCENT}
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Frame>
);
