// /app/services/microsoft-power-platform/sharepoint-consulting-and-development/(svgs)/SpcdIcons.jsx
// Small UI icons for the SharePoint page. They use currentColor, so the
// parent's CSS colour decides the palette.
//
// SPCD_FEATURE_GLYPHS holds the four "platform anatomy" glyphs as path data in
// a 24 x 24 box. The same paths are drawn inside the pins of SpcdPlatformSvg and
// beside the callouts in SpcdPlatform, so a reader can match a callout to its
// spot on the illustration without any numbering.

export const SPCD_FEATURE_GLYPHS = {
  versions: [
    "M12 4.5a7.5 7.5 0 1 1-7.1 5.1",
    "M4.2 5.2v4.6h4.6",
    "M12 8v4.4l3 1.8",
  ],
  coauthor: ["M5 4.5l5.6 13 1.6-5.4 5.4-1.6z", "M14.5 15.5l4 4"],
  approvals: [
    "M3.5 7h6",
    "M7 4l3 3-3 3",
    "M11.5 17h9",
    "M14 13.8l2 2 3.6-3.6",
    "M3.5 17h4",
  ],
  comms: [
    "M4 10v4h3l6 4V6L7 10z",
    "M16.5 9.2a4 4 0 0 1 0 5.6",
    "M18.8 6.8a7.4 7.4 0 0 1 0 10.4",
  ],
};

export const SpcdFeatureIcon = ({ type, className }) => (
  <svg
    className={className}
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
    focusable="false"
  >
    {SPCD_FEATURE_GLYPHS[type].map((d) => (
      <path
        key={d}
        d={d}
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ))}
  </svg>
);

export const SpcdArrowIcon = ({ className }) => (
  <svg
    className={className}
    width="14"
    height="14"
    viewBox="0 0 16 16"
    fill="none"
    aria-hidden="true"
    focusable="false"
  >
    <path
      d="M3 8h10M9 4l4 4-4 4"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const SpcdCheckIcon = ({ className }) => (
  <svg
    className={className}
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
    aria-hidden="true"
    focusable="false"
  >
    <circle cx="7" cy="7" r="6.25" stroke="currentColor" strokeWidth="1.1" />
    <path
      d="M4.3 7.1l1.9 1.9 3.5-3.6"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const SpcdPlusIcon = ({ className }) => (
  <svg
    className={className}
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    aria-hidden="true"
    focusable="false"
  >
    <path
      d="M8 3v10M3 8h10"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
  </svg>
);
