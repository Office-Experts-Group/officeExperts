// /services/vba-macro-development/(svgs)/VbaReviewSvg.jsx
// An AI-written macro with three risky lines flagged for review.
// Decorative only, so it is hidden from assistive technology.
const FONT = "system-ui, -apple-system, 'Segoe UI', sans-serif";
const MONO = "ui-monospace, SFMono-Regular, Menlo, Consolas, monospace";

export const VbaReviewSvg = () => (
  <svg
    viewBox="0 0 460 340"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    focusable="false"
    fontFamily={FONT}
  >
    <rect x="10" y="10" width="440" height="320" rx="16" fill="#18232e" />
    <path d="M10 26a16 16 0 0 1 16-16h408a16 16 0 0 1 16 16v28H10z" fill="#1a2a3a" />
    <circle cx="34" cy="32" r="5" fill="#6fc3e8" />
    <circle cx="52" cy="32" r="5" fill="#ffffff" fillOpacity="0.22" />
    <circle cx="70" cy="32" r="5" fill="#ffffff" fillOpacity="0.22" />
    <text x="96" y="36" fontSize="11.5" fill="#ffffff" fillOpacity="0.65">
      Macro written by an AI tool
    </text>

    {/* Plain lines of code, drawn as bars */}
    <g fill="#ffffff" fillOpacity="0.14">
      <rect x="40" y="72" width="150" height="9" rx="4.5" />
      <rect x="58" y="94" width="210" height="9" rx="4.5" />
      <rect x="58" y="116" width="120" height="9" rx="4.5" />
      <rect x="58" y="204" width="180" height="9" rx="4.5" />
      <rect x="58" y="226" width="96" height="9" rx="4.5" />
      <rect x="58" y="270" width="230" height="9" rx="4.5" />
      <rect x="40" y="292" width="80" height="9" rx="4.5" />
    </g>

    {/* Flagged line 1 */}
    <rect x="11" y="136" width="438" height="26" fill="#c53030" fillOpacity="0.2" />
    <text x="58" y="153" fontFamily={MONO} fontSize="12" fill="#ffffff" fillOpacity="0.92">
      Workbooks.Open "C:\Sam\data.xlsx"
    </text>
    <rect x="318" y="140" width="116" height="18" rx="9" fill="#ffffff" />
    <text x="376" y="153" fontSize="10" fontWeight="700" fill="#c53030" textAnchor="middle">
      Hard-coded path
    </text>

    {/* Flagged line 2 */}
    <rect x="11" y="170" width="438" height="26" fill="#c53030" fillOpacity="0.2" />
    <text x="58" y="187" fontFamily={MONO} fontSize="12" fill="#ffffff" fillOpacity="0.92">
      Selection.Delete
    </text>
    <rect x="290" y="174" width="144" height="18" rx="9" fill="#ffffff" />
    <text x="362" y="187" fontSize="10" fontWeight="700" fill="#c53030" textAnchor="middle">
      Acts on the wrong range
    </text>

    {/* Flagged line 3 */}
    <rect x="11" y="238" width="438" height="26" fill="#c53030" fillOpacity="0.2" />
    <text x="58" y="255" fontFamily={MONO} fontSize="12" fill="#ffffff" fillOpacity="0.92">
      On Error Resume Next
    </text>
    <rect x="318" y="242" width="116" height="18" rx="9" fill="#ffffff" />
    <text x="376" y="255" fontSize="10" fontWeight="700" fill="#c53030" textAnchor="middle">
      Hides every error
    </text>
  </svg>
);
