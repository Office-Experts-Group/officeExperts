// /app/blog/export-to-pdf-in-power-apps/(svgs)/FlowSvg.jsx
// Informative diagram: the whole flow from list item to linked PDF, in four stages.
// Hex values map to tokens: #046999 $accent, #e8f4fa $accent-light, #0d1b2a $text-primary,
// #4a5568 $text-secondary, #e3e8ec $line, #f7f8f9 $light-bg, #ffffff $white.
import React from "react";

const COLS = [18, 214, 410, 606];
const CARD_W = 156;

function Arrow({ x1, x2, y }) {
  return (
    <g>
      <path
        d={`M${x1} ${y} H${x2 - 8}`}
        stroke="#046999"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
      <path d={`M${x2 - 10} ${y - 7} l10 7 -10 7 z`} fill="#046999" />
    </g>
  );
}

function FileTile({
  x,
  y,
  label,
  fill = "#e8f4fa",
  stroke = "#046999",
  textFill = "#0d1b2a",
}) {
  return (
    <g>
      <path
        d={`M${x} ${y} h34 l16 16 v48 h-50 z`}
        fill={fill}
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d={`M${x + 34} ${y} v16 h16`}
        fill="none"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <text
        x={x + 25}
        y={y + 50}
        fontSize="14"
        fontWeight="700"
        fill={textFill}
        textAnchor="middle"
      >
        {label}
      </text>
    </g>
  );
}

export default function FlowSvg() {
  const [c1, c2, c3, c4] = COLS;
  return (
    <svg
      viewBox="0 0 780 384"
      xmlns="http://www.w3.org/2000/svg"
      fontFamily="aptos"
      role="img"
      aria-labelledby="pdf-flow-title pdf-flow-desc"
      style={{ width: "100%", height: "auto", display: "block" }}
    >
      <title id="pdf-flow-title">
        The full Power Automate flow, stage by stage
      </title>
      <desc id="pdf-flow-desc">
        A new item in the Issues list triggers the flow. The flow builds HTML
        with a base64 logo, saves it as an HTML file in OneDrive and converts it
        to PDF. The PDF is saved to a SharePoint library and its ParentID column
        points back to the original list item.
      </desc>

      {/* column headings */}
      <g fontSize="14" fontWeight="700" fill="#046999" textAnchor="middle">
        <text x={c1 + CARD_W / 2} y="30">
          SharePoint list
        </text>
        <text x={c2 + CARD_W / 2} y="30">
          Power Automate
        </text>
        <text x={c3 + CARD_W / 2} y="30">
          OneDrive
        </text>
        <text x={c4 + CARD_W / 2} y="30">
          SharePoint library
        </text>
      </g>

      {/* cards */}
      <rect
        x={c1}
        y="46"
        width={CARD_W}
        height="234"
        rx="14"
        fill="#ffffff"
        stroke="#e3e8ec"
        strokeWidth="1.5"
      />
      <rect
        x={c2}
        y="46"
        width={CARD_W}
        height="234"
        rx="14"
        fill="#e8f4fa"
        stroke="#046999"
        strokeOpacity="0.35"
        strokeWidth="1.5"
      />
      <rect
        x={c3}
        y="46"
        width={CARD_W}
        height="234"
        rx="14"
        fill="#ffffff"
        stroke="#e3e8ec"
        strokeWidth="1.5"
      />
      <rect
        x={c4}
        y="46"
        width={CARD_W}
        height="234"
        rx="14"
        fill="#ffffff"
        stroke="#e3e8ec"
        strokeWidth="1.5"
      />

      {/* card 1: list with a new row */}
      <rect x={c1 + 14} y="62" width="128" height="24" rx="6" fill="#046999" />
      <rect x={c1 + 24} y="71" width="50" height="6" rx="3" fill="#e8f4fa" />
      <rect x={c1 + 14} y="94" width="128" height="22" rx="5" fill="#f7f8f9" />
      <rect x={c1 + 24} y="102" width="70" height="6" rx="3" fill="#cdd9e2" />
      <rect
        x={c1 + 14}
        y="120"
        width="128"
        height="22"
        rx="5"
        fill="#e8f4fa"
        stroke="#046999"
        strokeOpacity="0.5"
      />
      <rect
        x={c1 + 24}
        y="128"
        width="62"
        height="6"
        rx="3"
        fill="#046999"
        fillOpacity="0.55"
      />
      <circle cx={c1 + 124} cy="131" r="9" fill="#046999" />
      <path d={`M${c1 + 126} 124 l-7 9 h5 l-2 6 7 -9 h-5 z`} fill="#ffffff" />
      <rect x={c1 + 14} y="146" width="128" height="22" rx="5" fill="#f7f8f9" />
      <rect x={c1 + 24} y="154" width="80" height="6" rx="3" fill="#cdd9e2" />

      {/* card 2: HTML with image */}
      <rect
        x={c2 + 14}
        y="62"
        width="128"
        height="106"
        rx="8"
        fill="#ffffff"
        stroke="#046999"
        strokeOpacity="0.3"
      />
      <rect
        x={c2 + 24}
        y="74"
        width="34"
        height="30"
        rx="5"
        fill="#e8f4fa"
        stroke="#046999"
        strokeOpacity="0.45"
      />
      <path
        d={`M${c2 + 24} 104 l11 -12 7 8 5 -5 11 9 z`}
        fill="#046999"
        fillOpacity="0.7"
      />
      <rect x={c2 + 66} y="78" width="64" height="8" rx="4" fill="#0d1b2a" />
      <rect x={c2 + 66} y="92" width="40" height="6" rx="3" fill="#9fb8c9" />
      <rect x={c2 + 24} y="114" width="106" height="6" rx="3" fill="#cdd9e2" />
      <rect x={c2 + 24} y="126" width="92" height="6" rx="3" fill="#cdd9e2" />
      <rect x={c2 + 24} y="142" width="72" height="18" rx="9" fill="#046999" />
      <text
        x={c2 + 60}
        y="155"
        fontSize="14"
        fontWeight="700"
        fill="#ffffff"
        textAnchor="middle"
      >
        base64
      </text>

      {/* card 3: html file to pdf file */}
      <FileTile x={c3 + 14} y="84" label=".html" />
      <Arrow x1={c3 + 70} x2={c3 + 88} y="116" />
      <FileTile
        x={c3 + 92}
        y="84"
        label="PDF"
        fill="#046999"
        stroke="#034e72"
        textFill="#ffffff"
      />

      {/* card 4: library row with ParentID tag */}
      <rect x={c4 + 14} y="62" width="128" height="24" rx="6" fill="#046999" />
      <rect x={c4 + 24} y="71" width="56" height="6" rx="3" fill="#e8f4fa" />
      <rect
        x={c4 + 14}
        y="94"
        width="128"
        height="52"
        rx="6"
        fill="#e8f4fa"
        stroke="#046999"
        strokeOpacity="0.5"
      />
      <rect x={c4 + 22} y="102" width="22" height="28" rx="3" fill="#046999" />
      <rect
        x={c4 + 52}
        y="106"
        width="78"
        height="6"
        rx="3"
        fill="#046999"
        fillOpacity="0.55"
      />
      <rect x={c4 + 52} y="119" width="52" height="6" rx="3" fill="#9fb8c9" />
      <rect x={c4 + 14} y="152" width="128" height="22" rx="5" fill="#f7f8f9" />
      <rect x={c4 + 24} y="160" width="64" height="6" rx="3" fill="#cdd9e2" />

      {/* card text */}
      <g fill="#0d1b2a" fontSize="15" fontWeight="700">
        <text x={c1 + 14} y="204">
          Trigger
        </text>
        <text x={c2 + 14} y="204">
          Build the HTML
        </text>
        <text x={c3 + 14} y="204">
          Convert
        </text>
        <text x={c4 + 14} y="204">
          Save and link
        </text>
      </g>
      <g fill="#4a5568" fontSize="14">
        <text x={c1 + 14} y="226">
          Item created in
        </text>
        <text x={c1 + 14} y="246">
          the Issues list
        </text>
        <text x={c2 + 14} y="226">
          Logo as base64,
        </text>
        <text x={c2 + 14} y="246">
          text from the item
        </text>
        <text x={c3 + 14} y="226">
          Create .html file,
        </text>
        <text x={c3 + 14} y="246">
          convert file to PDF
        </text>
        <text x={c4 + 14} y="226">
          Create file, set
        </text>
        <text x={c4 + 14} y="246">
          ParentID to item ID
        </text>
      </g>

      {/* arrows between stages */}
      <Arrow x1={c1 + CARD_W + 4} x2={c2 - 4} y="140" />
      <Arrow x1={c2 + CARD_W + 4} x2={c3 - 4} y="140" />
      <Arrow x1={c3 + CARD_W + 4} x2={c4 - 4} y="140" />

      {/* return link */}
      <path
        d={`M${c4 + CARD_W / 2} 282 V330 H${c1 + CARD_W / 2} V292`}
        fill="none"
        stroke="#046999"
        strokeWidth="2.5"
        strokeDasharray="7 7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d={`M${c1 + CARD_W / 2 - 7} 294 l7 -11 7 11 z`} fill="#046999" />
      <rect
        x="238"
        y="312"
        width="304"
        height="36"
        rx="18"
        fill="#ffffff"
        stroke="#046999"
        strokeOpacity="0.45"
      />
      <text
        x="390"
        y="335"
        fontSize="14"
        fontWeight="700"
        fill="#046999"
        textAnchor="middle"
      >
        ParentID points back to the item
      </text>
    </svg>
  );
}
