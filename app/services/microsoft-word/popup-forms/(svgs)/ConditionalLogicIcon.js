// app/popup-forms/(svgs)/ConditionalLogicIcon.js
// White stroke — this icon sits on the $accent-coloured "featured" service
// card in PopupFormsServices, so it uses a fixed white rather than
// currentColor to stay legible against that background.

export const ConditionalLogicIcon = () => (
  <svg viewBox="0 0 44 44" fill="none" aria-hidden="true">
    {/* Origin node */}
    <circle cx="9" cy="22" r="3.2" stroke="#fff" strokeWidth="1.4" />
    {/* Branching paths */}
    <path
      d="M12 22h5c2 0 3-1.2 4.5-3.5l1-1.6c1.5-2.3 2.5-3.4 4.5-3.4h4"
      stroke="#fff"
      strokeWidth="1.4"
      strokeLinecap="round"
    />
    <path
      d="M12 22h5c2 0 3 1.2 4.5 3.5l1 1.6c1.5 2.3 2.5 3.4 4.5 3.4h4"
      stroke="#fff"
      strokeWidth="1.4"
      strokeLinecap="round"
    />
    {/* End nodes */}
    <circle cx="34" cy="13.5" r="3" stroke="#fff" strokeWidth="1.3" />
    <circle cx="34" cy="30.5" r="3" stroke="#fff" strokeWidth="1.3" />
    {/* Small plus/minus markers denoting condition branches */}
    <path
      d="M34 12v3M32.5 13.5h3"
      stroke="#fff"
      strokeWidth="1"
      strokeLinecap="round"
    />
    <path
      d="M32.5 30.5h3"
      stroke="#fff"
      strokeWidth="1"
      strokeLinecap="round"
    />
  </svg>
);
