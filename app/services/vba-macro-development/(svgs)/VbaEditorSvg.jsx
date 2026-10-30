// /services/vba-macro-development/(svgs)/VbaEditorSvg.jsx
// Hero illustration: a VBA code editor with the Office applications it drives floating around it.
// Decorative only, so it is hidden from assistive technology. Colours match the globals.scss tokens.
import {
  VbaExcelSvg,
  VbaWordSvg,
  VbaAccessSvg,
  VbaOutlookSvg,
} from "./VbaAppSvgs";

const MONO = "ui-monospace, SFMono-Regular, Menlo, Consolas, monospace";
const KEYWORD = "#6fc3e8";
const CODE = "#ffffff";

export const VbaEditorSvg = () => (
  <svg
    viewBox="0 0 560 440"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    focusable="false"
  >
    <defs>
      <filter id="vbaEditorShadow" x="-20%" y="-20%" width="140%" height="155%">
        <feDropShadow
          dx="0"
          dy="10"
          stdDeviation="12"
          floodColor="#0d1b2a"
          floodOpacity="0.16"
        />
      </filter>
    </defs>

    {/* Soft backdrop */}
    <circle cx="290" cy="225" r="205" fill="#046999" fillOpacity="0.06" />

    {/* Editor window */}
    <rect
      x="70"
      y="80"
      width="390"
      height="280"
      rx="16"
      fill="#111820"
      filter="url(#vbaEditorShadow)"
    />
    <path
      d="M70 96a16 16 0 0 1 16-16h358a16 16 0 0 1 16 16v24H70z"
      fill="#18232e"
    />
    <circle cx="92" cy="100" r="5" fill="#6fc3e8" />
    <circle cx="110" cy="100" r="5" fill="#ffffff" fillOpacity="0.22" />
    <circle cx="128" cy="100" r="5" fill="#ffffff" fillOpacity="0.22" />
    <rect x="156" y="88" width="104" height="32" rx="6" fill="#111820" />
    <text x="170" y="108" fontFamily={MONO} fontSize="12" fill={CODE} fillOpacity="0.8">
      Module1
    </text>

    {/* Current line highlight */}
    <rect x="71" y="204" width="388" height="24" fill="#ffffff" fillOpacity="0.05" />

    {/* Line numbers */}
    <g fontFamily={MONO} fontSize="11" fill="#ffffff" fillOpacity="0.3" textAnchor="end">
      <text x="104" y="148">1</text>
      <text x="104" y="172">2</text>
      <text x="104" y="196">3</text>
      <text x="104" y="220">4</text>
      <text x="104" y="244">5</text>
      <text x="104" y="268">6</text>
      <text x="104" y="292">7</text>
      <text x="104" y="316">8</text>
    </g>

    {/* Code */}
    <g fontFamily={MONO} fontSize="13" fill={CODE} fillOpacity="0.9">
      <text x="120" y="148">
        <tspan fill={KEYWORD}>Sub </tspan>BuildMonthlyReport()
      </text>
      <text x="144" y="172">
        <tspan fill={KEYWORD}>Dim </tspan>ws <tspan fill={KEYWORD}>As </tspan>Worksheet
      </text>
      <text x="144" y="196">
        <tspan fill={KEYWORD}>For Each </tspan>ws <tspan fill={KEYWORD}>In </tspan>Worksheets
      </text>
      <text x="168" y="220">RefreshData ws</text>
      <text x="144" y="244">
        <tspan fill={KEYWORD}>Next </tspan>ws
      </text>
      <text x="144" y="268">BuildWordReport</text>
      <text x="144" y="292">EmailToTeam</text>
      <text x="120" y="316">
        <tspan fill={KEYWORD}>End Sub</tspan>
      </text>
    </g>

    {/* Status bar */}
    <path d="M70 340h390v4a16 16 0 0 1-16 16H86a16 16 0 0 1-16-16z" fill="#046999" />
    <text x="88" y="354" fontFamily={MONO} fontSize="10" fill="#ffffff" fillOpacity="0.9">
      Ln 4, Col 22
    </text>

    {/* Floating application tiles */}
    <g filter="url(#vbaEditorShadow)">
      <rect x="10" y="10" width="80" height="80" rx="16" fill="#ffffff" />
      <rect x="466" y="34" width="80" height="80" rx="16" fill="#ffffff" />
      <rect x="6" y="344" width="80" height="80" rx="16" fill="#ffffff" />
      <rect x="470" y="326" width="80" height="80" rx="16" fill="#ffffff" />
    </g>
    <VbaExcelSvg x="26" y="26" width="48" height="48" color="#046999" />
    <VbaWordSvg x="482" y="50" width="48" height="48" color="#046999" />
    <VbaAccessSvg x="22" y="360" width="48" height="48" color="#046999" />
    <VbaOutlookSvg x="486" y="342" width="48" height="48" color="#046999" />
  </svg>
);
