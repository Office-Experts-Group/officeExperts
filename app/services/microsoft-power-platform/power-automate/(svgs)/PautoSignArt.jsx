// /app/services/microsoft-power-platform/power-automate/(svgs)/PautoSignArt.jsx
// Four small spot illustrations for the "signs it is time to automate" row.
// Decorative, so aria-hidden. Colours: #046999 $accent, #e8f4fa $accent-light,
// #0b2433 $ink, #9a9da1 $text-muted, #e3e8ec $line, #d4d6d9 $line-strong,
// #f7f8f9 $light-bg.

const frame = {
  viewBox: "0 0 96 72",
  "aria-hidden": "true",
  focusable: "false",
  xmlns: "http://www.w3.org/2000/svg",
};

const line = {
  fill: "none",
  stroke: "#0b2433",
  strokeWidth: 1.6,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

// Someone copies figures from one system into another by hand
export const PautoRekeyArt = () => (
  <svg {...frame}>
    <rect x="6" y="12" width="36" height="42" rx="5" fill="#ffffff" {...line} />
    <path
      d="M6 24h36M6 34h36M6 44h36M20 12v42"
      stroke="#d4d6d9"
      strokeWidth="1.2"
    />
    <rect x="21" y="25" width="21" height="9" fill="#046999" opacity="0.25" />
    <rect
      x="54"
      y="12"
      width="36"
      height="42"
      rx="5"
      fill="#ffffff"
      {...line}
    />
    <rect x="60" y="20" width="24" height="6" rx="2" fill="#e3e8ec" />
    <rect x="60" y="31" width="24" height="6" rx="2" fill="#e3e8ec" />
    <rect
      x="60"
      y="42"
      width="14"
      height="6"
      rx="2"
      fill="#046999"
      opacity="0.4"
    />
    <path
      d="M44 29h8m-3-3l3 3-3 3"
      fill="none"
      stroke="#046999"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeDasharray="2 3"
    />
    <path d="M70 46l12 6-5 1.4-2 5z" fill="#0b2433" />
    <path
      d="M10 64h76"
      stroke="#e3e8ec"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

// Approvals that sit in an inbox
export const PautoStallArt = () => (
  <svg {...frame}>
    <rect
      x="12"
      y="30"
      width="46"
      height="30"
      rx="5"
      fill="#f7f8f9"
      {...line}
    />
    <rect x="8" y="22" width="46" height="30" rx="5" fill="#ffffff" {...line} />
    <rect x="4" y="14" width="46" height="30" rx="5" fill="#e8f4fa" {...line} />
    <path
      d="M5 16l22 15 22-15"
      fill="none"
      stroke="#0b2433"
      strokeWidth="1.6"
      strokeLinejoin="round"
    />
    <circle cx="68" cy="28" r="18" fill="#ffffff" {...line} />
    <path
      d="M68 17v11l8 5"
      fill="none"
      stroke="#046999"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M60 11l3 3M76 11l-3 3"
      stroke="#9a9da1"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
    <path
      d="M58 56h26M62 63h18"
      stroke="#d4d6d9"
      strokeWidth="2.4"
      strokeLinecap="round"
    />
  </svg>
);

// Invoices and forms arriving as PDFs and phone photos
export const PautoPaperArt = () => (
  <svg {...frame}>
    <g transform="rotate(-8 28 38)">
      <rect
        x="10"
        y="10"
        width="38"
        height="50"
        rx="4"
        fill="#f7f8f9"
        {...line}
      />
    </g>
    <g transform="rotate(5 34 38)">
      <rect
        x="16"
        y="8"
        width="38"
        height="50"
        rx="4"
        fill="#ffffff"
        {...line}
      />
      <path
        d="M22 18h22M22 25h22M22 32h14"
        stroke="#d4d6d9"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <rect
        x="22"
        y="38"
        width="22"
        height="8"
        rx="2"
        fill="#046999"
        opacity="0.28"
      />
    </g>
    <rect x="60" y="14" width="28" height="48" rx="6" fill="#0b2433" />
    <rect x="63" y="20" width="22" height="34" rx="2" fill="#e8f4fa" />
    <path
      d="M66 27h16M66 33h16M66 39h10"
      stroke="#046999"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
    <path
      d="M65 23v-3h3M83 23v-3h-3M65 51v3h3M83 51v3h-3"
      fill="none"
      stroke="#046999"
      strokeWidth="1.4"
    />
    <circle cx="74" cy="58" r="1.6" fill="#ffffff" />
  </svg>
);

// A shared inbox that needs a babysitter
export const PautoInboxArt = () => (
  <svg {...frame}>
    <path
      d="M12 40l9-18h40l9 18v18a3 3 0 0 1-3 3H15a3 3 0 0 1-3-3z"
      fill="#ffffff"
      {...line}
    />
    <path
      d="M12 40h20a6 6 0 0 0 6 6h14a6 6 0 0 0 6-6h20"
      fill="none"
      stroke="#0b2433"
      strokeWidth="1.6"
      strokeLinejoin="round"
    />
    <rect x="26" y="8" width="26" height="18" rx="3" fill="#e8f4fa" {...line} />
    <path d="M27 10l12 9 12-9" fill="none" stroke="#046999" strokeWidth="1.4" />
    <rect
      x="40"
      y="14"
      width="26"
      height="18"
      rx="3"
      fill="#ffffff"
      {...line}
    />
    <path d="M41 16l12 9 12-9" fill="none" stroke="#0b2433" strokeWidth="1.4" />
    <path
      d="M84 22v22m0 0l-5-5m5 5l5-5"
      fill="none"
      stroke="#046999"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M78 54h12"
      stroke="#9a9da1"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);
