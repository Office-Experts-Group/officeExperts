// /app/services/microsoft-access/is-access-right-for-your-company/(svgs)/IarcVerdictArt.jsx
// Three spot illustrations for the verdict panel in the intro. They sit on a
// dark panel. Hex values and the tokens they match:
//   #111820 $dark-bg · #18232e $dark-surface · #1a2a3a $dark-mid
//   #046999 $accent · #6fc3e8 $accent-on-dark · #ffffff $white
import React from "react";

const CARD = "#18232e";
const MID = "#1a2a3a";
const DARK = "#111820";
const ACCENT = "#046999";
const SKY = "#6fc3e8";

const props = (className) => ({
  viewBox: "0 0 120 90",
  className,
  "aria-hidden": "true",
  focusable: "false",
  xmlns: "http://www.w3.org/2000/svg",
});

// A tidy table, a small chart and a check badge: "usually a yes"
export const IarcVerdictYesArt = ({ className }) => (
  <svg {...props(className)}>
    <rect
      x="8"
      y="18"
      width="78"
      height="58"
      rx="7"
      fill={CARD}
      stroke="#ffffff"
      strokeOpacity="0.2"
    />
    <path d="M8 32v-7a7 7 0 0 1 7-7h64a7 7 0 0 1 7 7v7z" fill={ACCENT} />
    <rect x="9" y="32" width="76" height="11" fill={MID} />
    <g fill="#ffffff" fillOpacity="0.3">
      <rect x="16" y="36" width="12" height="4" rx="2" />
      <rect x="40" y="36" width="16" height="4" rx="2" />
      <rect x="66" y="36" width="12" height="4" rx="2" />
    </g>
    <rect x="9" y="55" width="76" height="12" fill={SKY} fillOpacity="0.16" />
    <g fill="#ffffff" fillOpacity="0.4">
      <rect x="16" y="48" width="10" height="3.5" rx="1.8" />
      <rect x="40" y="48" width="22" height="3.5" rx="1.8" />
      <rect x="66" y="48" width="10" height="3.5" rx="1.8" />
      <rect x="16" y="59" width="10" height="3.5" rx="1.8" />
      <rect x="40" y="59" width="18" height="3.5" rx="1.8" />
      <rect x="66" y="59" width="10" height="3.5" rx="1.8" />
      <rect x="16" y="70" width="10" height="3.5" rx="1.8" />
      <rect x="40" y="70" width="26" height="3.5" rx="1.8" />
    </g>
    <path d="M9 43H85M9 54H85M9 66H85" stroke="#ffffff" strokeOpacity="0.1" />
    <rect
      x="66"
      y="48"
      width="48"
      height="36"
      rx="7"
      fill={MID}
      stroke="#ffffff"
      strokeOpacity="0.2"
    />
    <g fill={SKY}>
      <rect x="73" y="68" width="7" height="10" rx="2" />
      <rect x="83" y="62" width="7" height="16" rx="2" />
      <rect x="93" y="56" width="7" height="22" rx="2" />
    </g>
    <circle cx="100" cy="22" r="14" fill={SKY} />
    <path
      d="M93.5 22.500l4.8 4.8 8.2-9.5"
      fill="none"
      stroke={DARK}
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Access screens on the left, a server database on the right: "yes, with a plan"
export const IarcVerdictPlanArt = ({ className }) => (
  <svg {...props(className)}>
    <rect
      x="6"
      y="26"
      width="46"
      height="38"
      rx="6"
      fill={CARD}
      stroke="#ffffff"
      strokeOpacity="0.2"
    />
    <path d="M6 36v-4a6 6 0 0 1 6-6h34a6 6 0 0 1 6 6v4z" fill={ACCENT} />
    <rect
      x="12"
      y="42"
      width="34"
      height="6"
      rx="3"
      fill="#ffffff"
      fillOpacity="0.22"
    />
    <rect
      x="12"
      y="52"
      width="24"
      height="6"
      rx="3"
      fill="#ffffff"
      fillOpacity="0.22"
    />
    <rect
      x="18"
      y="56"
      width="46"
      height="30"
      rx="6"
      fill={MID}
      stroke="#ffffff"
      strokeOpacity="0.2"
    />
    <g fill={SKY}>
      <rect x="24" y="64" width="12" height="4" rx="2" />
      <rect x="24" y="72" width="20" height="4" rx="2" />
    </g>
    <path
      d="M56 46H72"
      stroke={SKY}
      strokeWidth="2"
      strokeDasharray="4 4"
      strokeLinecap="round"
    />
    <path
      d="M69 42l5 4-5 4"
      fill="none"
      stroke={SKY}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M78 34v36c0 4.5 7.5 8 17 8s17-3.5 17-8V34z"
      fill={CARD}
      stroke="#ffffff"
      strokeOpacity="0.2"
    />
    <ellipse
      cx="95"
      cy="34"
      rx="17"
      ry="7"
      fill={MID}
      stroke="#ffffff"
      strokeOpacity="0.25"
    />
    <path
      d="M78 47c0 4 7.5 7 17 7s17-3 17-7M78 59c0 4 7.5 7 17 7s17-3 17-7"
      fill="none"
      stroke={SKY}
      strokeOpacity="0.7"
    />
    <circle cx="104" cy="52" r="1.8" fill={SKY} />
    <circle cx="104" cy="64" r="1.8" fill={SKY} />
    <path
      d="M86 20a7 7 0 0 1 12-4 6 6 0 0 1 10 3 5 5 0 0 1-1 10H88a6 6 0 0 1-2-9z"
      fill={ACCENT}
      stroke={SKY}
      strokeWidth="1.5"
    />
  </svg>
);

// A browser login and a phone: "probably not Access"
export const IarcVerdictNoArt = ({ className }) => (
  <svg {...props(className)}>
    <rect
      x="6"
      y="14"
      width="74"
      height="58"
      rx="7"
      fill={CARD}
      stroke="#ffffff"
      strokeOpacity="0.2"
    />
    <path d="M6 28v-7a7 7 0 0 1 7-7h60a7 7 0 0 1 7 7v7z" fill={MID} />
    <g fill={SKY}>
      <circle cx="15" cy="21" r="2.2" />
      <circle cx="22" cy="21" r="2.2" />
      <circle cx="29" cy="21" r="2.2" />
    </g>
    <rect
      x="38"
      y="18"
      width="36"
      height="6"
      rx="3"
      fill="#ffffff"
      fillOpacity="0.16"
    />
    <circle cx="43" cy="39" r="6" fill={ACCENT} />
    <circle cx="43" cy="37.5" r="2" fill="#ffffff" />
    <path d="M39 43a4 3 0 0 1 8 0" fill="#ffffff" />
    <rect
      x="54"
      y="35"
      width="20"
      height="4"
      rx="2"
      fill="#ffffff"
      fillOpacity="0.3"
    />
    <rect
      x="16"
      y="49"
      width="58"
      height="8"
      rx="4"
      fill={DARK}
      stroke="#ffffff"
      strokeOpacity="0.2"
    />
    <rect x="16" y="61" width="26" height="8" rx="4" fill={ACCENT} />
    <rect
      x="82"
      y="26"
      width="32"
      height="58"
      rx="8"
      fill={CARD}
      stroke="#ffffff"
      strokeOpacity="0.25"
      strokeWidth="1.5"
    />
    <rect x="86" y="34" width="24" height="40" rx="3" fill={DARK} />
    <rect x="89" y="38" width="18" height="6" rx="2" fill={ACCENT} />
    <rect
      x="89"
      y="48"
      width="18"
      height="6"
      rx="2"
      fill="#ffffff"
      fillOpacity="0.2"
    />
    <rect
      x="89"
      y="58"
      width="18"
      height="6"
      rx="2"
      fill="#ffffff"
      fillOpacity="0.2"
    />
    <rect
      x="94"
      y="29"
      width="8"
      height="2.5"
      rx="1.2"
      fill="#ffffff"
      fillOpacity="0.35"
    />
    <circle cx="98" cy="79" r="2" fill="#ffffff" fillOpacity="0.35" />
  </svg>
);
