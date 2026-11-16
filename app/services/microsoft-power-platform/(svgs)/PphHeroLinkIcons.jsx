// /app/services/microsoft-power-platform/(svgs)/PphHeroLinkIcons.jsx
// Small line icons for the hero's sub-service links. Generic shapes only, no
// product logos. They inherit colour from the link (stroke="currentColor"),
// so the colour comes from pphHero.module.scss (.subIcon: $white on $accent).
// Decorative: the link text names the service.

const Icon = ({ children }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    focusable="false"
  >
    {children}
  </svg>
);

// Phone with an app grid
export const PphAppsIcon = () => (
  <Icon>
    <rect x="6.5" y="2.5" width="11" height="19" rx="2.5" />
    <path d="M10.5 18.5h3" />
    <rect x="9" y="6.5" width="2.5" height="2.5" rx="0.6" />
    <rect x="12.5" y="6.5" width="2.5" height="2.5" rx="0.6" />
    <rect x="9" y="10.5" width="2.5" height="2.5" rx="0.6" />
    <rect x="12.5" y="10.5" width="2.5" height="2.5" rx="0.6" />
  </Icon>
);

// Browser window with a padlock: a secure portal
export const PphPagesIcon = () => (
  <Icon>
    <rect x="2.5" y="4" width="19" height="16" rx="2.5" />
    <path d="M2.5 8.5h19" />
    <path d="M5.5 6.3h.01M8 6.3h.01" />
    <rect x="9.5" y="13" width="5" height="4" rx="0.8" />
    <path d="M10.5 13v-1.2a1.5 1.5 0 013 0V13" />
  </Icon>
);

// Folder with a list: sites, lists and libraries
export const PphSitesIcon = () => (
  <Icon>
    <path d="M3 7.5a2 2 0 012-2h4l2 2h8a2 2 0 012 2v8.5a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
    <path d="M7.5 12.5h9M7.5 16h6" />
  </Icon>
);

// Trigger, decision and two branches: a flow
export const PphFlowIcon = () => (
  <Icon>
    <circle cx="6" cy="5" r="2.5" />
    <path d="M6 7.5v3" />
    <path d="M6 10.5l2.5 2.5L6 15.5 3.5 13z" />
    <path d="M8.5 13h4.5a2 2 0 012 2v1.5" />
    <path d="M6 15.5V19" />
    <rect x="12.5" y="16.5" width="5" height="4" rx="1" />
    <path d="M14 5h6M17 2v6" />
  </Icon>
);

// Sparkle: AI
export const PphAiIcon = () => (
  <Icon>
    <path d="M10 3l1.8 5.2L17 10l-5.2 1.8L10 17l-1.8-5.2L3 10l5.2-1.8z" />
    <path d="M18 14l.8 2.2L21 17l-2.2.8L18 20l-.8-2.2L15 17l2.2-.8z" />
  </Icon>
);

// Three stages joined by a loop: a business process
export const PphProcessIcon = () => (
  <Icon>
    <rect x="2.5" y="4" width="6" height="5" rx="1.2" />
    <rect x="15.5" y="4" width="6" height="5" rx="1.2" />
    <rect x="9" y="15" width="6" height="5" rx="1.2" />
    <path d="M8.5 6.5h7M18.5 9v3.5a2 2 0 01-2 2H15M9 17.5H7.5a2 2 0 01-2-2V9" />
  </Icon>
);

// Bars with a trend line: reports
export const PphReportIcon = () => (
  <Icon>
    <path d="M3.5 20.5h17" />
    <rect x="5" y="13" width="3" height="5" rx="0.8" />
    <rect x="10.5" y="9" width="3" height="9" rx="0.8" />
    <rect x="16" y="11" width="3" height="7" rx="0.8" />
    <path d="M4.5 9l5-4 4 2.5 6-4" />
  </Icon>
);

// Grid becoming bars: spreadsheet to report
export const PphMigrateIcon = () => (
  <Icon>
    <rect x="2.5" y="5" width="8" height="8" rx="1.2" />
    <path d="M2.5 9h8M6.5 5v8" />
    <path d="M12 9h3.5M14 7l2 2-2 2" />
    <path d="M17.5 19.5V15M20.5 19.5V11.5M14.5 19.5V17" />
  </Icon>
);

// Two sources merging into one: data integration
export const PphMergeIcon = () => (
  <Icon>
    <circle cx="5" cy="5" r="2.2" />
    <circle cx="5" cy="19" r="2.2" />
    <path d="M7.2 5c4 0 4 7 8 7h2M7.2 19c4 0 4-7 8-7" />
    <path d="M15.5 9.5L18 12l-2.5 2.5" />
    <path d="M21 8.5v7" />
  </Icon>
);

// Lifebuoy: support
export const PphSupportIcon = () => (
  <Icon>
    <circle cx="12" cy="12" r="8.5" />
    <circle cx="12" cy="12" r="3.5" />
    <path d="M6 6l3.5 3.5M14.5 14.5L18 18M18 6l-3.5 3.5M9.5 14.5L6 18" />
  </Icon>
);

// Chevron for the end of each link
export const PphChevronIcon = () => (
  <Icon>
    <path d="M9 6l6 6-6 6" />
  </Icon>
);
