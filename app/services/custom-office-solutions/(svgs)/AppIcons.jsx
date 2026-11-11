// app/services/custom-office-solutions/(svgs)/AppIcons.jsx
// Original line glyphs for each Office app. These are deliberately generic shapes,
// not Microsoft product icons (we aren't allowed to use those).
// Stroke uses currentColor, so colour comes from the parent's CSS `color`,
// or from a `color` prop when nested inside another SVG (see OfficeHubSvg).
// Any extra props (x, y, width, height, className) are spread onto the <svg>.

// Shared attributes so every glyph has the same weight and size
const base = {
  viewBox: "0 0 24 24",
  width: 24,
  height: 24,
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": "true",
  focusable: "false",
};

// Word: page with a folded corner and text lines
export const DocumentIcon = (props) => (
  <svg {...base} {...props}>
    <path d="M6 3h8l4 4v14H6z" />
    <path d="M14 3v4h4" />
    <path d="M9 12h6M9 15h6M9 18h4" />
  </svg>
);

// Excel: grid of cells
export const GridIcon = (props) => (
  <svg {...base} {...props}>
    <rect x="3" y="4" width="18" height="16" rx="2" />
    <path d="M3 9.5h18M3 15h18M9 4v16M15 4v16" />
  </svg>
);

// Access: stacked database cylinder
export const DatabaseIcon = (props) => (
  <svg {...base} {...props}>
    <ellipse cx="12" cy="6" rx="7" ry="2.6" />
    <path d="M5 6v12c0 1.4 3.1 2.6 7 2.6s7-1.2 7-2.6V6" />
    <path d="M5 12c0 1.4 3.1 2.6 7 2.6s7-1.2 7-2.6" />
  </svg>
);

// Outlook: envelope
export const MailIcon = (props) => (
  <svg {...base} {...props}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="M3.5 6.5 12 13l8.5-6.5" />
  </svg>
);

// PowerPoint: presentation screen with a small bar chart
export const SlideIcon = (props) => (
  <svg {...base} {...props}>
    <rect x="3" y="4" width="18" height="13" rx="2" />
    <path d="M12 17v3M8 20h8" />
    <path d="M8 13v-2M12 13V8M16 13v-4" />
  </svg>
);

// Power Platform: three connected nodes
export const FlowIcon = (props) => (
  <svg {...base} {...props}>
    <circle cx="6" cy="6" r="2.5" />
    <circle cx="18" cy="12" r="2.5" />
    <circle cx="6" cy="18" r="2.5" />
    <path d="M8.3 7.1 15.7 10.9M8.3 16.9l7.4-3.8" />
  </svg>
);
