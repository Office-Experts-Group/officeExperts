// /services/microsoft-word/word-document-template-creation/(svgs)/BentoIcons.jsx
//
// Line icons for the "Who needs branded templates?" bento tiles.
// They draw with currentColor, so colour them from the stylesheet. They are
// decorative (aria-hidden): each tile already has a text title.

const baseProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": "true",
  focusable: "false",
};

// Rocket: launching a new brand identity
export const LaunchIcon = (props) => (
  <svg {...baseProps} {...props}>
    <path d="M12 2.5c3 2 5 5.4 5 9.3l-2.2 3.7H9.2L7 11.8c0-3.9 2-7.3 5-9.3z" />
    <circle cx="12" cy="9" r="1.6" />
    <path d="M7 12.6 4.5 15l2.6.6M17 12.6l2.5 2.4-2.6.6" />
    <path d="M10.4 18.6c.4 1.3.9 2.4 1.6 3.4.7-1 1.2-2.1 1.6-3.4" />
  </svg>
);

// Page layout grid: standardising document formats
export const StandardiseIcon = (props) => (
  <svg {...baseProps} {...props}>
    <rect x="3" y="3" width="18" height="18" rx="3" />
    <path d="M3 9h18M9 9v12" />
  </svg>
);

// Polished page: professional presentation
export const PresentationIcon = (props) => (
  <svg {...baseProps} {...props}>
    <path d="M7 3h7l5 5v11a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z" />
    <path d="M14 3v5h5" />
    <path d="M9 13h6M9 17h4" />
  </svg>
);

// Sliders: user-friendly formatting tools
export const ToolsIcon = (props) => (
  <svg {...baseProps} {...props}>
    <path d="M4 7h8M18 7h2M4 17h2M12 17h8" />
    <circle cx="15" cy="7" r="2.2" />
    <circle cx="9" cy="17" r="2.2" />
  </svg>
);

// Two overlapping documents: merging companies
export const MergeIcon = (props) => (
  <svg {...baseProps} {...props}>
    <rect x="3" y="3" width="11" height="11" rx="2" />
    <rect x="10" y="10" width="11" height="11" rx="2" />
  </svg>
);
