// /app/blog/power-apps-pdf-function/(svgs)/FlowSvg.jsx
// Map diagram: what PDF() accepts, the optional settings, and where the
// result can go. Sits on a light panel.
// Hex values and the tokens they match:
//   #046999 $accent          #e8f4fa $accent-light     #0d1b2a $text-primary
//   #4a5568 $text-secondary  #ffffff $white            #9a9da1 $text-muted
//   rgba(4,105,153,0.28) $accent-border                #e3e8ec $line
import React from "react";

const INPUTS = [
  { label: "Screen", sub: "The visible one", glyph: "screen" },
  { label: "Container", sub: "Any container", glyph: "container" },
  { label: "Gallery", sub: "Vertical only", glyph: "gallery" },
];

const OPTIONS = ["Size", "DPI", "Margin", "Orientation", "ExpandContainers"];

const OUTPUTS = [
  { label: "Outlook email", sub: "As an attachment", glyph: "mail" },
  { label: "Power Automate", sub: "Save to SharePoint", glyph: "flow" },
  { label: "PDF viewer", sub: "Preview in the app", glyph: "viewer" },
  { label: "Variable", sub: "Reuse it later", glyph: "variable" },
];

const Glyph = ({ type, x, y }) => {
  const common = {
    fill: "none",
    stroke: "#046999",
    strokeWidth: 1.8,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };
  switch (type) {
    case "screen":
      return (
        <g transform={`translate(${x} ${y})`} {...common}>
          <rect x="0" y="0" width="34" height="26" rx="4" />
          <path d="M0 8h34" />
          <path d="M6 15h14M6 20h9" />
        </g>
      );
    case "container":
      return (
        <g transform={`translate(${x} ${y})`} {...common}>
          <rect
            x="0"
            y="0"
            width="34"
            height="26"
            rx="4"
            strokeDasharray="4 3"
          />
          <rect x="6" y="6" width="22" height="5" rx="2" />
          <rect x="6" y="15" width="14" height="5" rx="2" />
        </g>
      );
    case "gallery":
      return (
        <g transform={`translate(${x} ${y})`} {...common}>
          <rect x="0" y="0" width="34" height="7" rx="2" />
          <rect x="0" y="10" width="34" height="7" rx="2" />
          <rect x="0" y="20" width="34" height="7" rx="2" />
        </g>
      );
    case "mail":
      return (
        <g transform={`translate(${x} ${y})`} {...common}>
          <rect x="0" y="2" width="34" height="24" rx="4" />
          <path d="M1 5l16 12L33 5" />
        </g>
      );
    case "flow":
      return (
        <g transform={`translate(${x} ${y})`} {...common}>
          <rect x="0" y="2" width="11" height="9" rx="2" />
          <rect x="23" y="15" width="11" height="9" rx="2" />
          <path d="M11 6.5h7a4 4 0 0 1 4 4v4.5" />
          <path d="M17 19.5h6" />
        </g>
      );
    case "viewer":
      return (
        <g transform={`translate(${x} ${y})`} {...common}>
          <path d="M5 0h17l7 7v19H5z" />
          <path d="M22 0v7h7" />
          <path d="M10 14h14M10 19h9" />
        </g>
      );
    default:
      return (
        <g transform={`translate(${x} ${y})`} {...common}>
          <path d="M9 2C4 2 4 6 4 9s-1 4-3 4c2 0 3 1 3 4s0 7 5 7" />
          <path d="M25 2c5 0 5 4 5 7s1 4 3 4c-2 0-3 1-3 4s0 7-5 7" />
          <path d="M13 10l8 10M21 10l-8 10" />
        </g>
      );
  }
};

const FlowSvg = () => (
  <svg
    viewBox="0 0 760 440"
    role="img"
    aria-labelledby="papdf-flow-title papdf-flow-desc"
    xmlns="http://www.w3.org/2000/svg"
    fontFamily="aptos"
  >
    <title id="papdf-flow-title">
      What goes into the PDF function and where the result goes
    </title>
    <desc id="papdf-flow-desc">
      A screen, a container or a vertical gallery goes into the PDF function.
      Five optional settings control size, DPI, margin, orientation and whether
      containers expand. The result is a PDF file held in memory that you can
      attach to an Outlook email, pass to a Power Automate flow, preview in a
      PDF viewer or keep in a variable. Charts, maps and Power BI tiles are not
      supported.
    </desc>
    <defs>
      <marker
        id="papdf-flow-arrow"
        viewBox="0 0 10 10"
        refX="8"
        refY="5"
        markerWidth="7"
        markerHeight="7"
        orient="auto"
      >
        <path d="M1 1l8 4-8 4z" fill="#046999" />
      </marker>
      <marker
        id="papdf-flow-arrow-muted"
        viewBox="0 0 10 10"
        refX="8"
        refY="5"
        markerWidth="7"
        markerHeight="7"
        orient="auto"
      >
        <path d="M1 1l8 4-8 4z" fill="#9a9da1" />
      </marker>
    </defs>

    {/* inputs */}
    {INPUTS.map((item, i) => {
      const y = 20 + i * 100;
      return (
        <g key={item.label}>
          <rect
            x="20"
            y={y}
            width="190"
            height="80"
            rx="14"
            fill="#e8f4fa"
            stroke="#046999"
            strokeOpacity="0.28"
          />
          <Glyph type={item.glyph} x={36} y={y + 27} />
          <text x="82" y={y + 34} fontSize="16" fontWeight="700" fill="#0d1b2a">
            {item.label}
          </text>
          <text x="82" y={y + 56} fontSize="14" fill="#4a5568">
            {item.sub}
          </text>
          <path
            d={`M210 ${y + 40}C250 ${y + 40} 250 205 288 205`}
            fill="none"
            stroke="#046999"
            strokeWidth="2"
            markerEnd="url(#papdf-flow-arrow)"
          />
        </g>
      );
    })}

    {/* not supported */}
    <rect
      x="20"
      y="320"
      width="190"
      height="80"
      rx="14"
      fill="#ffffff"
      stroke="#9a9da1"
      strokeDasharray="5 4"
    />
    <g fill="none" stroke="#9a9da1" strokeWidth="1.8" strokeLinecap="round">
      <rect x="36" y="347" width="34" height="26" rx="4" />
      <path d="M43 366l6-8 5 5 5-9" />
    </g>
    <text x="82" y="354" fontSize="16" fontWeight="700" fill="#4a5568">
      Not supported
    </text>
    <text x="82" y="376" fontSize="14" fill="#4a5568">
      Charts, maps, Power BI
    </text>
    <path
      d="M210 360C246 360 250 330 270 300"
      fill="none"
      stroke="#9a9da1"
      strokeWidth="2"
      strokeDasharray="4 4"
    />
    {/* stop bar: this route ends before it reaches the function */}
    <path
      d="M262 306l16-12"
      stroke="#9a9da1"
      strokeWidth="2"
      strokeLinecap="round"
    />

    {/* hub */}
    <rect x="290" y="60" width="160" height="290" rx="18" fill="#046999" />
    <text
      x="370"
      y="102"
      fontSize="24"
      fontWeight="700"
      fill="#ffffff"
      textAnchor="middle"
    >
      PDF( )
    </text>
    <text
      x="370"
      y="126"
      fontSize="14"
      fill="#ffffff"
      opacity="0.8"
      textAnchor="middle"
    >
      Runs on the device
    </text>
    <text
      x="370"
      y="160"
      fontSize="14"
      fontWeight="700"
      fill="#ffffff"
      textAnchor="middle"
    >
      Optional settings
    </text>
    {OPTIONS.map((opt, i) => (
      <g key={opt}>
        <rect
          x="302"
          y={172 + i * 33}
          width="136"
          height="26"
          rx="13"
          fill="#ffffff"
          opacity="0.16"
        />
        <text
          x="370"
          y={190 + i * 33}
          fontSize="14"
          fill="#ffffff"
          textAnchor="middle"
        >
          {opt}
        </text>
      </g>
    ))}

    <text x="370" y="388" fontSize="14" fill="#4a5568" textAnchor="middle">
      Result: a PDF file held in memory
    </text>

    {/* outputs */}
    {OUTPUTS.map((item, i) => {
      const y = 30 + i * 90;
      return (
        <g key={item.label}>
          <path
            d={`M450 205C500 205 500 ${y + 35} 546 ${y + 35}`}
            fill="none"
            stroke="#046999"
            strokeWidth="2"
            markerEnd="url(#papdf-flow-arrow)"
          />
          <rect
            x="548"
            y={y}
            width="200"
            height="70"
            rx="14"
            fill="#ffffff"
            stroke="#046999"
            strokeOpacity="0.28"
          />
          <Glyph type={item.glyph} x={562} y={y + 22} />
          <text
            x="610"
            y={y + 30}
            fontSize="16"
            fontWeight="700"
            fill="#0d1b2a"
          >
            {item.label}
          </text>
          <text x="610" y={y + 52} fontSize="14" fill="#4a5568">
            {item.sub}
          </text>
        </g>
      );
    })}
  </svg>
);

export default FlowSvg;
