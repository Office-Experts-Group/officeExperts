// /app/services/microsoft-access/is-access-right-for-your-company/(svgs)/IarcStackArt.jsx
// Small icons for the "works with" list. They sit on a pale accent tile.
// Generic shapes only, no product logos.
//   #e8f4fa $accent-light (tile) · #ffffff $white · #046999 $accent
//   #6fc3e8 $accent-on-dark · #034e72 $accent-dark · #0b2433 $ink · #d4d6d9 $line-strong
import React from "react";

const svgProps = (className) => ({
  viewBox: "0 0 72 72",
  className,
  "aria-hidden": "true",
  focusable: "false",
  xmlns: "http://www.w3.org/2000/svg",
});

const A = "#046999";
const SKY = "#6fc3e8";

export const IarcSqlIcon = ({ className }) => (
  <svg {...svgProps(className)}>
    <rect
      x="10"
      y="10"
      width="40"
      height="18"
      rx="4"
      fill="#ffffff"
      stroke={A}
      strokeWidth="2"
    />
    <rect
      x="10"
      y="32"
      width="40"
      height="18"
      rx="4"
      fill="#ffffff"
      stroke={A}
      strokeWidth="2"
    />
    <g fill={SKY}>
      <circle cx="18" cy="19" r="2.5" />
      <circle cx="18" cy="41" r="2.5" />
    </g>
    <rect
      x="26"
      y="17"
      width="16"
      height="4"
      rx="2"
      fill={A}
      fillOpacity="0.4"
    />
    <rect
      x="26"
      y="39"
      width="16"
      height="4"
      rx="2"
      fill={A}
      fillOpacity="0.4"
    />
    <path
      d="M42 44v14c0 3 7 5 15 5s15-2 15-5V44z"
      transform="translate(-14 0)"
      fill="#ffffff"
      stroke={A}
      strokeWidth="2"
    />
    <ellipse
      cx="43"
      cy="44"
      rx="15"
      ry="5"
      fill={SKY}
      stroke={A}
      strokeWidth="2"
    />
    <path
      d="M28 51c0 3 7 5 15 5s15-2 15-5"
      fill="none"
      stroke={A}
      strokeWidth="1.5"
    />
  </svg>
);

export const IarcCodeIcon = ({ className }) => (
  <svg {...svgProps(className)}>
    <rect
      x="8"
      y="12"
      width="56"
      height="46"
      rx="6"
      fill="#ffffff"
      stroke={A}
      strokeWidth="2"
    />
    <path d="M8 24V18a6 6 0 0 1 6-6h44a6 6 0 0 1 6 6v6z" fill={A} />
    <g fill="#ffffff">
      <circle cx="16" cy="18" r="2" />
      <circle cx="23" cy="18" r="2" />
    </g>
    <g
      fill="none"
      stroke={A}
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M26 33l-8 8 8 8" />
      <path d="M46 33l8 8-8 8" />
    </g>
    <path d="M40 31l-8 20" stroke={SKY} strokeWidth="3" strokeLinecap="round" />
  </svg>
);

export const IarcMysqlIcon = ({ className }) => (
  <svg {...svgProps(className)}>
    <path
      d="M10 22v26c0 5 8 8 18 8s18-3 18-8V22z"
      fill="#ffffff"
      stroke={A}
      strokeWidth="2"
    />
    <ellipse
      cx="28"
      cy="22"
      rx="18"
      ry="7"
      fill={SKY}
      stroke={A}
      strokeWidth="2"
    />
    <path
      d="M10 35c0 4 8 7 18 7s18-3 18-7"
      fill="none"
      stroke={A}
      strokeWidth="1.5"
    />
    <g
      fill="none"
      stroke={A}
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M50 28h14M60 22l6 6-6 6" />
      <path d="M64 46H50M54 40l-6 6 6 6" />
    </g>
  </svg>
);

export const IarcOfficeIcon = ({ className }) => (
  <svg {...svgProps(className)}>
    <path
      d="M16 8h28l12 12v40H16z"
      fill="#ffffff"
      stroke={A}
      strokeWidth="2"
      strokeLinejoin="round"
    />
    <path
      d="M44 8v12h12"
      fill="none"
      stroke={A}
      strokeWidth="2"
      strokeLinejoin="round"
    />
    <rect
      x="23"
      y="26"
      width="18"
      height="4"
      rx="2"
      fill={A}
      fillOpacity="0.45"
    />
    <rect
      x="23"
      y="34"
      width="26"
      height="4"
      rx="2"
      fill={A}
      fillOpacity="0.25"
    />
    <rect
      x="23"
      y="42"
      width="20"
      height="4"
      rx="2"
      fill={A}
      fillOpacity="0.25"
    />
    <path
      d="M38 62a8 8 0 0 1 14-5 7 7 0 0 1 11 4 6 6 0 0 1-2 11H41a7 7 0 0 1-3-10z"
      transform="translate(-4 -12)"
      fill={A}
      stroke="#ffffff"
      strokeWidth="2"
      strokeLinejoin="round"
    />
  </svg>
);

export const IarcSharepointIcon = ({ className }) => (
  <svg {...svgProps(className)}>
    <path
      d="M8 24a5 5 0 0 1 5-5h14l5 6h27a5 5 0 0 1 5 5v22a5 5 0 0 1-5 5H13a5 5 0 0 1-5-5z"
      fill="#ffffff"
      stroke={A}
      strokeWidth="2"
      strokeLinejoin="round"
    />
    <g stroke={A} strokeWidth="2" strokeLinecap="round">
      <path d="M26 44l14-7M26 44l14 8" />
    </g>
    <circle cx="24" cy="44" r="6" fill={A} />
    <circle cx="42" cy="36" r="5" fill={SKY} stroke={A} strokeWidth="1.5" />
    <circle cx="42" cy="53" r="5" fill={SKY} stroke={A} strokeWidth="1.5" />
    <rect
      x="50"
      y="34"
      width="10"
      height="4"
      rx="2"
      fill={A}
      fillOpacity="0.35"
    />
    <rect
      x="50"
      y="51"
      width="10"
      height="4"
      rx="2"
      fill={A}
      fillOpacity="0.35"
    />
  </svg>
);

export const IarcCloudIcon = ({ className }) => (
  <svg {...svgProps(className)}>
    <path
      d="M18 54a14 14 0 0 1-2-27 18 18 0 0 1 34-4 15 15 0 0 1 7 29z"
      fill="#ffffff"
      stroke={A}
      strokeWidth="2"
      strokeLinejoin="round"
    />
    <g
      fill="none"
      stroke={A}
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M36 48V31M29 38l7-7 7 7" />
    </g>
    <path d="M22 54h28" stroke={SKY} strokeWidth="3" strokeLinecap="round" />
  </svg>
);

export const IarcBiIcon = ({ className }) => (
  <svg {...svgProps(className)}>
    <rect
      x="8"
      y="10"
      width="56"
      height="52"
      rx="6"
      fill="#ffffff"
      stroke={A}
      strokeWidth="2"
    />
    <path d="M14 54h44" stroke="#d4d6d9" strokeWidth="2" />
    <rect x="16" y="38" width="9" height="16" rx="2" fill={A} />
    <rect
      x="29"
      y="28"
      width="9"
      height="26"
      rx="2"
      fill={SKY}
      stroke={A}
      strokeWidth="1.5"
    />
    <rect x="42" y="33" width="9" height="21" rx="2" fill={A} />
    <circle
      cx="48"
      cy="22"
      r="8"
      fill="none"
      stroke="#d4d6d9"
      strokeWidth="5"
    />
    <path d="M48 14a8 8 0 0 1 8 8" fill="none" stroke={A} strokeWidth="5" />
  </svg>
);

export const IarcAppsIcon = ({ className }) => (
  <svg {...svgProps(className)}>
    <rect
      x="20"
      y="6"
      width="32"
      height="60"
      rx="7"
      fill="#ffffff"
      stroke={A}
      strokeWidth="2"
    />
    <rect x="24" y="14" width="24" height="44" rx="2" fill="#e8f4fa" />
    <rect x="28" y="18" width="7" height="7" rx="2" fill={A} />
    <rect
      x="37"
      y="18"
      width="7"
      height="7"
      rx="2"
      fill={SKY}
      stroke={A}
      strokeWidth="1"
    />
    <rect
      x="28"
      y="28"
      width="7"
      height="7"
      rx="2"
      fill={SKY}
      stroke={A}
      strokeWidth="1"
    />
    <rect x="37" y="28" width="7" height="7" rx="2" fill={A} />
    <rect
      x="28"
      y="41"
      width="16"
      height="4"
      rx="2"
      fill={A}
      fillOpacity="0.4"
    />
    <rect x="28" y="48" width="16" height="6" rx="3" fill={A} />
    <rect
      x="31"
      y="9"
      width="10"
      height="2"
      rx="1"
      fill={A}
      fillOpacity="0.4"
    />
  </svg>
);
