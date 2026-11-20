// /app/blog/microsoft-access-alternatives-guide/(svgs)/MistakeSketches.jsx
// Five small "Avoid" versus "Do this" sketches for the common-mistakes cards.
// Decorative: the card heading and copy carry the meaning, so every sketch is aria-hidden.
// Hex values match tokens: #0d1b2a $text-primary, #4a5568 $text-secondary, #046999 $accent,
// #e8f4fa $accent-light, #f7f8f9 $light-bg, #9a9da1 $text-muted. #9fb7c8 and #cfd8df are slate tints.

function Frame({ children }) {
  return (
    <svg
      viewBox="0 0 480 190"
      aria-hidden="true"
      focusable="false"
      xmlns="http://www.w3.org/2000/svg"
      fontFamily="aptos"
    >
      <rect
        x="10"
        y="10"
        width="220"
        height="170"
        rx="10"
        fill="#f7f8f9"
        stroke="#9a9da1"
        strokeWidth="1.4"
        strokeDasharray="6 5"
      />
      <text x="26" y="36" fontSize="14" fontWeight="700" fill="#4a5568">
        Avoid
      </text>
      <rect
        x="250"
        y="10"
        width="220"
        height="170"
        rx="10"
        fill="#e8f4fa"
        stroke="#046999"
        strokeWidth="1.4"
      />
      <text x="266" y="36" fontSize="14" fontWeight="700" fill="#046999">
        Do this
      </text>
      {children}
    </svg>
  );
}

/* 1. Migrating too quickly */
function Rush() {
  return (
    <Frame>
      <rect
        x="28"
        y="96"
        width="46"
        height="34"
        rx="6"
        fill="#ffffff"
        stroke="#9fb7c8"
        strokeWidth="1.6"
      />
      <path
        d="M74 112C98 52 118 176 142 106S176 56 190 122"
        fill="none"
        stroke="#9a9da1"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M96 150l30-24M120 156l44-40"
        fill="none"
        stroke="#cfd8df"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle
        cx="196"
        cy="70"
        r="16"
        fill="#ffffff"
        stroke="#9fb7c8"
        strokeWidth="1.6"
      />
      <path
        d="M196 60v10l7 4"
        fill="none"
        stroke="#9a9da1"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <text
        x="204"
        y="160"
        fontSize="26"
        fontWeight="700"
        fill="#9a9da1"
        textAnchor="middle"
      >
        ?
      </text>

      <rect
        x="266"
        y="130"
        width="62"
        height="38"
        rx="6"
        fill="#ffffff"
        stroke="#046999"
        strokeWidth="1.6"
      />
      <text x="297" y="154" fontSize="14" fill="#0d1b2a" textAnchor="middle">
        Assess
      </text>
      <rect
        x="334"
        y="106"
        width="62"
        height="62"
        rx="6"
        fill="#ffffff"
        stroke="#046999"
        strokeWidth="1.6"
      />
      <text x="365" y="130" fontSize="14" fill="#0d1b2a" textAnchor="middle">
        Plan
      </text>
      <rect x="402" y="82" width="58" height="86" rx="6" fill="#046999" />
      <text x="431" y="106" fontSize="14" fill="#ffffff" textAnchor="middle">
        Move
      </text>
      <path
        d="M278 100l50-26 40-4M360 66l10 4-6 9"
        fill="none"
        stroke="#046999"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Frame>
  );
}

/* 2. Underestimating user training */
function Training() {
  return (
    <Frame>
      <rect
        x="30"
        y="66"
        width="124"
        height="94"
        rx="6"
        fill="#ffffff"
        stroke="#9fb7c8"
        strokeWidth="1.6"
      />
      <rect
        x="40"
        y="78"
        width="40"
        height="14"
        rx="3"
        fill="#cfd8df"
        transform="rotate(-4 60 85)"
      />
      <rect
        x="92"
        y="96"
        width="50"
        height="14"
        rx="3"
        fill="#cfd8df"
        transform="rotate(5 117 103)"
      />
      <rect
        x="44"
        y="112"
        width="34"
        height="14"
        rx="3"
        fill="#cfd8df"
        transform="rotate(-6 61 119)"
      />
      <rect
        x="96"
        y="132"
        width="40"
        height="14"
        rx="3"
        fill="#cfd8df"
        transform="rotate(4 116 139)"
      />
      <circle
        cx="196"
        cy="84"
        r="22"
        fill="#ffffff"
        stroke="#9fb7c8"
        strokeWidth="1.6"
      />
      <text
        x="196"
        y="94"
        fontSize="26"
        fontWeight="700"
        fill="#9a9da1"
        textAnchor="middle"
      >
        ?
      </text>
      <circle cx="196" cy="134" r="10" fill="#9fb7c8" />
      <path d="M176 168c0-14 9-22 20-22s20 8 20 22z" fill="#9fb7c8" />

      <rect
        x="270"
        y="66"
        width="124"
        height="94"
        rx="6"
        fill="#ffffff"
        stroke="#046999"
        strokeWidth="1.6"
      />
      <rect x="282" y="80" width="100" height="14" rx="3" fill="#e8f4fa" />
      <rect x="282" y="102" width="100" height="14" rx="3" fill="#e8f4fa" />
      <rect x="282" y="124" width="100" height="14" rx="3" fill="#e8f4fa" />
      <rect x="282" y="80" width="38" height="14" rx="3" fill="#046999" />
      <circle
        cx="436"
        cy="84"
        r="22"
        fill="#ffffff"
        stroke="#046999"
        strokeWidth="1.6"
      />
      <path
        d="M425 84l8 8 13-16"
        fill="none"
        stroke="#046999"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="436" cy="134" r="10" fill="#046999" />
      <path d="M416 168c0-14 9-22 20-22s20 8 20 22z" fill="#046999" />
    </Frame>
  );
}

/* 3. Ignoring data quality */
function DataQuality() {
  return (
    <Frame>
      <rect
        x="26"
        y="58"
        width="120"
        height="104"
        rx="6"
        fill="#ffffff"
        stroke="#9fb7c8"
        strokeWidth="1.6"
      />
      <path
        d="M26 82h120M26 106h120M26 130h120M76 58v104"
        fill="none"
        stroke="#cfd8df"
        strokeWidth="1.4"
      />
      <rect x="30" y="86" width="42" height="16" rx="3" fill="#cfd8df" />
      <rect x="80" y="86" width="60" height="16" rx="3" fill="#cfd8df" />
      <rect x="30" y="110" width="42" height="16" rx="3" fill="#cfd8df" />
      <rect x="80" y="110" width="60" height="16" rx="3" fill="#cfd8df" />
      <rect
        x="82"
        y="134"
        width="56"
        height="20"
        rx="3"
        fill="none"
        stroke="#9a9da1"
        strokeDasharray="4 3"
      />
      <text x="52" y="75" fontSize="14" fill="#4a5568" textAnchor="middle">
        Dup
      </text>
      <path
        d="M152 112h26M172 105l8 7-8 7"
        fill="none"
        stroke="#9a9da1"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <g fill="#cfd8df">
        <circle cx="196" cy="112" r="10" />
        <circle cx="208" cy="106" r="12" />
        <rect x="196" y="108" width="20" height="14" />
      </g>

      <rect
        x="266"
        y="58"
        width="120"
        height="104"
        rx="6"
        fill="#ffffff"
        stroke="#046999"
        strokeWidth="1.6"
      />
      <rect x="266" y="58" width="120" height="24" fill="#046999" />
      <path
        d="M266 106h120M266 130h120M316 82v80"
        fill="none"
        stroke="#cfd8df"
        strokeWidth="1.4"
      />
      <rect x="270" y="88" width="42" height="12" rx="3" fill="#e8f4fa" />
      <rect x="320" y="88" width="60" height="12" rx="3" fill="#e8f4fa" />
      <rect x="270" y="112" width="42" height="12" rx="3" fill="#e8f4fa" />
      <rect x="320" y="112" width="60" height="12" rx="3" fill="#e8f4fa" />
      <rect x="270" y="136" width="42" height="12" rx="3" fill="#e8f4fa" />
      <rect x="320" y="136" width="60" height="12" rx="3" fill="#e8f4fa" />
      <text x="326" y="75" fontSize="14" fill="#ffffff" textAnchor="middle">
        Clean
      </text>
      <path
        d="M392 112h26M412 105l8 7-8 7"
        fill="none"
        stroke="#046999"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <g fill="#046999">
        <circle cx="434" cy="112" r="10" />
        <circle cx="446" cy="106" r="12" />
        <rect x="434" y="108" width="20" height="14" />
      </g>
    </Frame>
  );
}

/* 4. Choosing technology over business needs */
function Needs() {
  return (
    <Frame>
      <g transform="translate(0 -18)">
        <path
          d="M70 120l18-10 18 10v20l-18 10-18-10z"
          fill="#ffffff"
          stroke="#9fb7c8"
          strokeWidth="1.6"
        />
        <path
          d="M100 96l18-10 18 10v20l-18 10-18-10z"
          fill="#ffffff"
          stroke="#9fb7c8"
          strokeWidth="1.6"
        />
        <path
          d="M130 130l18-10 18 10v20l-18 10-18-10z"
          fill="#ffffff"
          stroke="#9fb7c8"
          strokeWidth="1.6"
        />
        <path
          d="M190 64l4 9 10 1-8 7 3 10-9-6-9 6 3-10-8-7 10-1z"
          fill="#9a9da1"
        />
      </g>
      <text x="120" y="160" fontSize="14" fill="#4a5568" textAnchor="middle">
        Trendy
      </text>

      <text x="266" y="62" fontSize="14" fill="#046999" fontWeight="700">
        Needs
      </text>
      <circle cx="274" cy="82" r="4" fill="#046999" />
      <rect x="286" y="78" width="70" height="8" rx="4" fill="#9cc6da" />
      <circle cx="274" cy="104" r="4" fill="#046999" />
      <rect x="286" y="100" width="56" height="8" rx="4" fill="#9cc6da" />
      <circle cx="274" cy="126" r="4" fill="#046999" />
      <rect x="286" y="122" width="64" height="8" rx="4" fill="#9cc6da" />
      <path
        d="M364 104h30M388 97l8 7-8 7"
        fill="none"
        stroke="#046999"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M404 80h22a6 6 0 0 1 6 6v6a8 8 0 1 1 0 16v6a6 6 0 0 1-6 6h-22z"
        fill="#046999"
      />
      <text x="418" y="144" fontSize="14" fill="#0d1b2a" textAnchor="middle">
        Fit
      </text>
    </Frame>
  );
}

/* 5. Underestimating complexity */
function Iceberg() {
  return (
    <Frame>
      <path d="M24 100H216" fill="none" stroke="#9fb7c8" strokeWidth="1.6" />
      <path
        d="M92 100l20-40 22 40z"
        fill="#ffffff"
        stroke="#9fb7c8"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <text x="168" y="70" fontSize="14" fill="#4a5568" textAnchor="middle">
        Looks simple
      </text>
      <path
        d="M72 100h82l24 24-30 34-52 4-26-30z"
        fill="none"
        stroke="#cfd8df"
        strokeWidth="1.6"
        strokeDasharray="5 4"
        strokeLinejoin="round"
      />

      <path d="M264 100H456" fill="none" stroke="#9cc6da" strokeWidth="1.6" />
      <path
        d="M332 100l20-40 22 40z"
        fill="#ffffff"
        stroke="#046999"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M296 100h96l28 26-34 38-60 4-30-34z"
        fill="#ffffff"
        stroke="#046999"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <text x="356" y="128" fontSize="14" fill="#0d1b2a" textAnchor="middle">
        Rules
      </text>
      <text x="352" y="150" fontSize="14" fill="#0d1b2a" textAnchor="middle">
        Special cases
      </text>
    </Frame>
  );
}

const sketches = {
  rush: Rush,
  training: Training,
  data: DataQuality,
  needs: Needs,
  complexity: Iceberg,
};

export default function MistakeSketch({ kind }) {
  const Sketch = sketches[kind];
  return Sketch ? <Sketch /> : null;
}
