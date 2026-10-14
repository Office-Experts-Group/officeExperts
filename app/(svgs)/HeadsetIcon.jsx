// app/(svgs)/HeadsetIcon.jsx
// Support headset with a microphone boom. Stroke icon that inherits currentColor.

export const HeadsetIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    focusable="false"
  >
    <path d="M4 14v-2a8 8 0 0 1 16 0v2" />
    <rect x="3" y="13" width="4" height="6" rx="1.5" />
    <rect x="17" y="13" width="4" height="6" rx="1.5" />
    <path d="M19 19v1a2 2 0 0 1-2 2h-3.5" />
  </svg>
);
