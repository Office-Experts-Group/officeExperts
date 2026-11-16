// /app/services/microsoft-power-platform/power-bi-data-integration/(svgs)/PbdiIcons.jsx
// Small UI icons. They inherit colour from the parent through currentColor.

export const PbdiArrowIcon = (props) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <path
      d="M3 8h9M8.5 4l4 4-4 4"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const PbdiCheckIcon = (props) => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 16 16"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <circle cx="8" cy="8" r="8" fill="currentColor" opacity="0.14" />
    <path
      d="M4.6 8.4l2.3 2.3 4.5-4.9"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const PbdiPlusIcon = (props) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <path
      d="M10 4v12M4 10h12"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
    />
  </svg>
);
