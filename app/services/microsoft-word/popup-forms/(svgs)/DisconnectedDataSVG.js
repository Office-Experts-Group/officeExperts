// app/popup-forms/(svgs)/DisconnectedDataSVG.js

export const DisconnectedDataSVG = () => (
  <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
    {/* Data source — small cylinder/database */}
    <ellipse
      cx="8"
      cy="8"
      rx="5"
      ry="2.5"
      stroke="#046999"
      strokeWidth="1.4"
    />
    <path
      d="M3 8v9c0 1.4 2.2 2.5 5 2.5s5-1.1 5-2.5V8"
      stroke="#046999"
      strokeWidth="1.4"
    />
    <path
      d="M3 12.5c0 1.4 2.2 2.5 5 2.5s5-1.1 5-2.5"
      stroke="#046999"
      strokeWidth="1.4"
    />
    {/* Document — sits separately, on the right */}
    <rect
      x="19"
      y="14"
      width="11"
      height="14"
      rx="1.5"
      stroke="#046999"
      strokeWidth="1.4"
    />
    <path
      d="M21.5 19h6M21.5 22h6M21.5 25h4"
      stroke="#046999"
      strokeWidth="1.2"
      strokeLinecap="round"
      opacity="0.7"
    />
    {/* Broken link between the two — the missing connection */}
    <path
      d="M12 17l3 2"
      stroke="#046999"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeDasharray="1.6 2"
      opacity="0.5"
    />
    <path
      d="M17.5 20.5l1.5 1"
      stroke="#046999"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeDasharray="1.6 2"
      opacity="0.5"
    />
    {/* X mark showing the break in the connection */}
    <path
      d="M13.6 12.4l2.6 2.6M16.2 12.4l-2.6 2.6"
      stroke="#046999"
      strokeWidth="1.3"
      strokeLinecap="round"
      opacity="0.75"
    />
  </svg>
);
