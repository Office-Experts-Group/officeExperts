// /app/services/microsoft-excel/custom-excel-development/(svgs)/CexdIcons.jsx
// Small UI icons and the four "ways to work with us" spot icons.
// Stroke is currentColor, so the parent sets the colour
// (tokens: $accent-on-dark on the dark Engage section).

export const CexdArrowIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    aria-hidden="true"
    focusable="false"
  >
    <path
      d="M3 8h10M9 4l4 4-4 4"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const CexdChevronIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    aria-hidden="true"
    focusable="false"
  >
    <path
      d="M7 4l5 5-5 5"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Spot = ({ children }) => (
  <svg
    viewBox="0 0 44 44"
    fill="none"
    aria-hidden="true"
    focusable="false"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {children}
  </svg>
);

// Quote or hourly rate: a quote sheet with line items and a clock
export const CexdQuoteIcon = () => (
  <Spot>
    <path d="M9 5h18l6 6v20a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2z" />
    <path d="M27 5v6h6" />
    <path d="M12 16h10M12 21h14M12 26h8" strokeWidth="1.3" />
    <circle cx="32" cy="32" r="7" fill="currentColor" fillOpacity="0.1" />
    <path d="M32 28v4l2.5 2" strokeWidth="1.3" />
  </Spot>
);

// Ongoing support: a headset with a microphone arm
export const CexdSupportIcon = () => (
  <Spot>
    <path d="M9 24v-3a13 13 0 0 1 26 0v3" />
    <rect x="6" y="24" width="7" height="10" rx="3" />
    <rect x="31" y="24" width="7" height="10" rx="3" />
    <path d="M35 34c0 4-4 6-9 6" />
    <rect
      x="22"
      y="38"
      width="6"
      height="4"
      rx="2"
      fill="currentColor"
      fillOpacity="0.15"
    />
  </Spot>
);

// Remote access or onsite: a screen with a cursor, and a location pin
export const CexdRemoteIcon = () => (
  <Spot>
    <rect x="4" y="6" width="26" height="19" rx="3" />
    <path d="M4 12h26" strokeWidth="1.3" />
    <path d="M12 31h10M17 25v6" />
    <path
      d="M16 15l7 3-3 1.5L18.5 23 16 15z"
      fill="currentColor"
      fillOpacity="0.15"
      strokeWidth="1.3"
    />
    <path d="M36 21c-3.3 0-6 2.6-6 5.8 0 4.2 6 10.2 6 10.2s6-6 6-10.2c0-3.2-2.7-5.8-6-5.8z" />
    <circle cx="36" cy="26.5" r="2" strokeWidth="1.3" />
  </Spot>
);

// Tailored training: a whiteboard with a chart and a pointer
export const CexdTrainingIcon = () => (
  <Spot>
    <rect x="5" y="6" width="34" height="23" rx="3" />
    <path d="M10 24l6-6 5 4 8-9" strokeWidth="1.3" />
    <circle cx="29" cy="13" r="1.6" fill="currentColor" fillOpacity="0.2" />
    <path d="M22 29v5M16 40l6-6 6 6" />
  </Spot>
);
