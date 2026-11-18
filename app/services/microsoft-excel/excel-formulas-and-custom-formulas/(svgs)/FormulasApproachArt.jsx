// /app/services/microsoft-excel/excel-formulas-and-custom-formulas/(svgs)/FormulasApproachArt.jsx

/*
  Small spot icons for the "Why choose" accordion, one per item. Decorative.
  They sit on a light tile ($accent-light).
  Hex / rgba values and the tokens they match (globals.scss):
    #046999 $accent, rgba(4,105,153,x) $accent at lower opacity
*/

const svgProps = {
  viewBox: "0 0 40 40",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  "aria-hidden": "true",
  focusable: "false",
};

// Messy nested brackets collapsing into one clean line
export const FormulasSimplifyArt = () => (
  <svg {...svgProps}>
    <path
      d="M8 9c-3 0-3 2-3 4v3c0 2-1 3-3 4 2 1 3 2 3 4v3c0 2 0 4 3 4"
      transform="translate(2 0)"
      stroke="rgba(4,105,153,0.4)"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
    <path
      d="M20 12h10M20 20h14M20 28h8"
      stroke="rgba(4,105,153,0.35)"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
    <path
      d="M23 20h12"
      stroke="#046999"
      strokeWidth="2.4"
      strokeLinecap="round"
    />
    <circle cx="35" cy="20" r="2.2" fill="#046999" />
  </svg>
);

// Stopwatch
export const FormulasSpeedArt = () => (
  <svg {...svgProps}>
    <circle cx="20" cy="23" r="12" stroke="#046999" strokeWidth="2" />
    <path
      d="M16 6h8M20 6v5"
      stroke="#046999"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M20 23l5-6"
      stroke="#046999"
      strokeWidth="2.2"
      strokeLinecap="round"
    />
    <circle cx="20" cy="23" r="1.8" fill="#046999" />
    <path
      d="M31 12l2.5-2.5"
      stroke="rgba(4,105,153,0.4)"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M10 23h2M28 23h2M20 13v2"
      stroke="rgba(4,105,153,0.4)"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
  </svg>
);

// Branching rules feeding one outcome
export const FormulasLogicArt = () => (
  <svg {...svgProps}>
    <rect
      x="4"
      y="5"
      width="12"
      height="9"
      rx="2.5"
      fill="rgba(4,105,153,0.15)"
      stroke="#046999"
      strokeWidth="1.8"
    />
    <rect
      x="4"
      y="26"
      width="12"
      height="9"
      rx="2.5"
      fill="rgba(4,105,153,0.15)"
      stroke="#046999"
      strokeWidth="1.8"
    />
    <path
      d="M16 9.5h6c3 0 4 1.5 4 4v1.5M16 30.5h6c3 0 4-1.5 4-4V25"
      stroke="rgba(4,105,153,0.55)"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
    <rect x="23" y="15" width="13" height="10" rx="2.5" fill="#046999" />
    <path
      d="M27 20h5"
      stroke="#ffffff"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
  </svg>
);

// A cell with a tick, guarding the point of entry
export const FormulasValidateArt = () => (
  <svg {...svgProps}>
    <rect
      x="5"
      y="8"
      width="30"
      height="24"
      rx="3.5"
      stroke="rgba(4,105,153,0.4)"
      strokeWidth="1.6"
    />
    <path
      d="M5 16h30M15 8v24"
      stroke="rgba(4,105,153,0.25)"
      strokeWidth="1.4"
    />
    <rect
      x="15"
      y="16"
      width="20"
      height="8"
      fill="rgba(4,105,153,0.15)"
      stroke="#046999"
      strokeWidth="1.8"
    />
    <circle cx="31" cy="29" r="6.5" fill="#046999" />
    <path
      d="M28 29l2.2 2.2 3.8-4"
      stroke="#ffffff"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Target
export const FormulasAccuracyArt = () => (
  <svg {...svgProps}>
    <circle
      cx="20"
      cy="20"
      r="14"
      stroke="rgba(4,105,153,0.35)"
      strokeWidth="1.8"
    />
    <circle cx="20" cy="20" r="8" stroke="#046999" strokeWidth="2" />
    <circle cx="20" cy="20" r="2.6" fill="#046999" />
    <path
      d="M20 2v6M20 32v6M2 20h6M32 20h6"
      stroke="rgba(4,105,153,0.5)"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
  </svg>
);
