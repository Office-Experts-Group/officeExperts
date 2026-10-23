// /services/microsoft-word/document-rebranding-services/(svgs)/RebrandingWhySvgs.js
// Large line icons for the "Why use Office Experts?" tiles, plus the phone icon for the call button.
// Colour is set by the parent via currentColor.

// Shared attributes for the 48px line icons
const iconProps = {
  viewBox: "0 0 48 48",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": "true",
};

// A page with a pencil: design and document specialists working together
export const DesignersIcon = () => (
  <svg {...iconProps}>
    <path d="M12 6h18l8 8v28H12z" />
    <path d="M30 6v8h8" />
    <path d="M18 34l2-7 12-12 5 5-12 12z" />
    <path d="M30 17l5 5" />
  </svg>
);

// A Word-style ribbon with a cursor: usability inside Office
export const UsabilityIcon = () => (
  <svg {...iconProps}>
    <rect x="6" y="9" width="36" height="26" rx="4" />
    <path d="M6 17h36" />
    <path d="M13 13h4M21 13h4" />
    <path d="M22 23l12 5-5 2 4 6-3 2-4-6-4 3z" />
  </svg>
);

// Stacked pages with a lightning bolt: fast rollouts
export const RolloutIcon = () => (
  <svg {...iconProps}>
    <rect x="4" y="10" width="20" height="26" rx="3" />
    <rect x="10" y="16" width="20" height="26" rx="3" />
    <path d="M38 5l-8 15h6l-3 13 10-17h-6z" />
  </svg>
);

// A headset: ongoing support
export const SupportIcon = () => (
  <svg {...iconProps}>
    <path d="M8 28v-6a16 16 0 0 1 32 0v6" />
    <rect x="6" y="26" width="8" height="12" rx="3" />
    <rect x="34" y="26" width="8" height="12" rx="3" />
    <path d="M38 38c0 4-4 6-10 6h-3" />
  </svg>
);

// Phone icon for the call button (paths from the original page)
export const PhoneIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path d="M16.566 21.999c.005 0 .023 0 .028 0 .528 0 1.027-.208 1.405-.586l2.712-2.712c.391-.391.391-1.023 0-1.414l-4-4c-.391-.391-1.023-.391-1.414 0l-1.594 1.594c-.739-.22-2.118-.72-2.992-1.594s-1.374-2.253-1.594-2.992l1.594-1.594c.391-.391.391-1.023 0-1.414l-4-4c-.375-.375-1.039-.375-1.414 0L2.586 5.999C2.206 6.379 1.992 6.901 2 7.434c.023 1.424.4 6.37 4.298 10.268S15.142 21.976 16.566 21.999zM6.005 5.408l2.586 2.586L7.298 9.287c-.239.238-.341.582-.271.912.024.115.611 2.842 2.271 4.502s4.387 2.247 4.502 2.271c.333.07.674-.032.912-.271l1.293-1.293 2.586 2.586-2.006 2.005c-1.248-.021-5.518-.356-8.873-3.712C4.346 12.921 4.02 8.636 4 7.413L6.005 5.408zM19.999 10.999h2c0-5.13-3.873-8.999-9.01-8.999v2C17.051 4 19.999 6.943 19.999 10.999z" />
    <path d="M12.999,8c2.103,0,3,0.897,3,3h2c0-3.225-1.775-5-5-5V8z" />
  </svg>
);
