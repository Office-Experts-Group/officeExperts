// /app/services/microsoft-excel/(svgs)/ExcelFitArt.jsx
// Small glyphs for ExcelFit: one per "Excel is a great choice for" item, and
// the role meter used in the decision table. Decorative (aria-hidden).
//
// Colours (hard-coded hex, matching globals.scss tokens):
//   #046999 $accent   #e8f4fa $accent-light   #6fc3e8 $accent-on-dark
//   #d4d6d9 $line-strong   #ffffff $white

const glyphProps = {
  viewBox: "0 0 32 32",
  width: "32",
  height: "32",
  "aria-hidden": "true",
  focusable: "false",
};

const Base = ({ children }) => (
  <svg {...glyphProps}>
    <rect width="32" height="32" rx="9" fill="#e8f4fa" />
    {children}
  </svg>
);

export const AnalysisGlyph = () => (
  <Base>
    <path
      d="M8 22v-4M12 22v-7M16 22v-5"
      stroke="#6fc3e8"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <circle
      cx="19"
      cy="13"
      r="5"
      fill="none"
      stroke="#046999"
      strokeWidth="2"
    />
    <path
      d="M22.5 16.5l3.5 3.5"
      stroke="#046999"
      strokeWidth="2.2"
      strokeLinecap="round"
    />
  </Base>
);

export const FormattingGlyph = () => (
  <Base>
    {[0, 1, 2].map((r) =>
      [0, 1, 2].map((c) => (
        <rect
          key={`${r}${c}`}
          x={7 + c * 6.5}
          y={7 + r * 6.5}
          width="5.5"
          height="5.5"
          rx="1"
          fill="#046999"
          fillOpacity={0.2 + ((r + c) / 4) * 0.8}
        />
      )),
    )}
  </Base>
);

export const ManipulationGlyph = () => (
  <Base>
    <path
      d="M8 11h12l-3-3M24 21H12l3 3"
      fill="none"
      stroke="#046999"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="24" cy="11" r="2" fill="#6fc3e8" />
    <circle cx="8" cy="21" r="2" fill="#6fc3e8" />
  </Base>
);

export const ChartGlyph = () => (
  <Base>
    <path d="M7 24h18" stroke="#d4d6d9" strokeWidth="1.5" />
    <rect x="9" y="15" width="4" height="9" rx="1" fill="#6fc3e8" />
    <rect x="15" y="10" width="4" height="14" rx="1" fill="#046999" />
    <rect x="21" y="13" width="4" height="11" rx="1" fill="#6fc3e8" />
  </Base>
);

export const CalcGlyph = () => (
  <Base>
    <path
      d="M21 9H11l6 7-6 7h10"
      fill="none"
      stroke="#046999"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Base>
);

export const DashboardGlyph = () => (
  <Base>
    <path
      d="M8 20a8 8 0 0 1 16 0"
      fill="none"
      stroke="#6fc3e8"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <path
      d="M16 20l4-5"
      stroke="#046999"
      strokeWidth="2.2"
      strokeLinecap="round"
    />
    <circle cx="16" cy="20" r="2" fill="#046999" />
    <path
      d="M10 24h12"
      stroke="#046999"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
  </Base>
);

// How much of the solution Excel is, as four segments
export const RoleMeter = ({ filled }) => (
  <svg
    viewBox="0 0 52 10"
    width="52"
    height="10"
    aria-hidden="true"
    focusable="false"
  >
    {[0, 1, 2, 3].map((i) => (
      <rect
        key={i}
        x={i * 13}
        y="0"
        width="11"
        height="10"
        rx="3"
        fill={i < filled ? "#046999" : "#d4d6d9"}
      />
    ))}
  </svg>
);
