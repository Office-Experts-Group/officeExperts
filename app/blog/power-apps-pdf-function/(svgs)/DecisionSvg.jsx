// /app/blog/power-apps-pdf-function/(svgs)/DecisionSvg.jsx
// Decision flow: which route should the finished PDF take?
// The recommended route is solid accent, the others are light accent.
// Hex values and the tokens they match:
//   #046999 $accent          #e8f4fa $accent-light     #0d1b2a $text-primary
//   #4a5568 $text-secondary  #ffffff $white            #9a9da1 $text-muted
//   rgba(4,105,153,0.28) $accent-border
import React from "react";

const Pill = ({ x, y, w, label }) => (
  <g>
    <rect x={x} y={y} width={w} height="24" rx="12" fill="#ffffff" />
    <text
      x={x + w / 2}
      y={y + 17}
      fontSize="14"
      fontWeight="700"
      fill="#046999"
      textAnchor="middle"
    >
      {label}
    </text>
  </g>
);

const DecisionSvg = () => (
  <svg
    viewBox="0 0 760 440"
    role="img"
    aria-labelledby="papdf-decision-title papdf-decision-desc"
    xmlns="http://www.w3.org/2000/svg"
    fontFamily="aptos"
  >
    <title id="papdf-decision-title">Which route should your PDF take?</title>
    <desc id="papdf-decision-desc">
      Start with the question of whether anyone needs a stored copy. If yes,
      save the PDF to SharePoint with a flow and open it with Launch, which is
      the recommended route. If no, ask whether it needs to reach someone else.
      If yes, email it as an attachment through the Outlook connector. If no,
      preview it in a PDF viewer control.
    </desc>
    <defs>
      <marker
        id="papdf-decision-arrow"
        viewBox="0 0 10 10"
        refX="8"
        refY="5"
        markerWidth="7"
        markerHeight="7"
        orient="auto"
      >
        <path d="M1 1l8 4-8 4z" fill="#046999" />
      </marker>
    </defs>

    {/* start */}
    <rect x="20" y="62" width="140" height="34" rx="17" fill="#0d1b2a" />
    <text
      x="90"
      y="84"
      fontSize="14"
      fontWeight="700"
      fill="#ffffff"
      textAnchor="middle"
    >
      You need a PDF
    </text>
    <path
      d="M70 96V168"
      fill="none"
      stroke="#046999"
      strokeWidth="2"
      markerEnd="url(#papdf-decision-arrow)"
    />

    {/* question 1 */}
    <rect
      x="20"
      y="170"
      width="200"
      height="96"
      rx="14"
      fill="#ffffff"
      stroke="#046999"
      strokeWidth="1.5"
    />
    <text
      x="120"
      y="210"
      fontSize="16"
      fontWeight="700"
      fill="#0d1b2a"
      textAnchor="middle"
    >
      Does anyone need
    </text>
    <text
      x="120"
      y="232"
      fontSize="16"
      fontWeight="700"
      fill="#0d1b2a"
      textAnchor="middle"
    >
      a stored copy?
    </text>

    {/* yes: up to the recommended outcome */}
    <path
      d="M180 170V78H286"
      fill="none"
      stroke="#046999"
      strokeWidth="2"
      markerEnd="url(#papdf-decision-arrow)"
    />
    <Pill x={192} y={66} w={42} label="Yes" />

    {/* outcome B: recommended */}
    <rect x="290" y="30" width="450" height="96" rx="14" fill="#046999" />
    <text x="312" y="62" fontSize="18" fontWeight="700" fill="#ffffff">
      Save it to SharePoint with a flow
    </text>
    <text x="312" y="86" fontSize="14" fill="#ffffff" opacity="0.88">
      Then Launch the file’s URL so the user can open or download it.
    </text>
    <text x="312" y="106" fontSize="14" fill="#ffffff" opacity="0.88">
      Our recommended route for anything you need to keep.
    </text>

    {/* no: to question 2 */}
    <path
      d="M220 218H286"
      fill="none"
      stroke="#046999"
      strokeWidth="2"
      markerEnd="url(#papdf-decision-arrow)"
    />
    <Pill x={232} y={206} w={36} label="No" />

    {/* question 2 */}
    <rect
      x="290"
      y="170"
      width="200"
      height="96"
      rx="14"
      fill="#ffffff"
      stroke="#046999"
      strokeWidth="1.5"
    />
    <text
      x="390"
      y="210"
      fontSize="16"
      fontWeight="700"
      fill="#0d1b2a"
      textAnchor="middle"
    >
      Does it need to reach
    </text>
    <text
      x="390"
      y="232"
      fontSize="16"
      fontWeight="700"
      fill="#0d1b2a"
      textAnchor="middle"
    >
      someone else?
    </text>

    {/* yes: email */}
    <path
      d="M490 218H526"
      fill="none"
      stroke="#046999"
      strokeWidth="2"
      markerEnd="url(#papdf-decision-arrow)"
    />
    <Pill x={491} y={188} w={36} label="Yes" />
    <rect
      x="530"
      y="170"
      width="210"
      height="96"
      rx="14"
      fill="#e8f4fa"
      stroke="#046999"
      strokeOpacity="0.28"
    />
    <text x="550" y="202" fontSize="16" fontWeight="700" fill="#0d1b2a">
      Email it
    </text>
    <text x="550" y="226" fontSize="14" fill="#4a5568">
      Attach it with the
    </text>
    <text x="550" y="246" fontSize="14" fill="#4a5568">
      Outlook connector
    </text>

    {/* no: viewer */}
    <path
      d="M390 266V358H526"
      fill="none"
      stroke="#046999"
      strokeWidth="2"
      markerEnd="url(#papdf-decision-arrow)"
    />
    <Pill x={402} y={300} w={36} label="No" />
    <rect
      x="530"
      y="310"
      width="210"
      height="96"
      rx="14"
      fill="#e8f4fa"
      stroke="#046999"
      strokeOpacity="0.28"
    />
    <text x="550" y="342" fontSize="16" fontWeight="700" fill="#0d1b2a">
      Preview it first
    </text>
    <text x="550" y="366" fontSize="14" fill="#4a5568">
      Show it in a PDF
    </text>
    <text x="550" y="386" fontSize="14" fill="#4a5568">
      viewer control
    </text>

    {/* reminder */}
    <rect
      x="20"
      y="310"
      width="270"
      height="96"
      rx="14"
      fill="#ffffff"
      stroke="#9a9da1"
      strokeDasharray="5 4"
    />
    <g fill="none" stroke="#046999" strokeWidth="1.8" strokeLinecap="round">
      <rect x="38" y="336" width="30" height="16" rx="8" />
      <circle cx="60" cy="344" r="4" />
    </g>
    <text x="82" y="342" fontSize="14" fontWeight="700" fill="#0d1b2a">
      First, switch it on
    </text>
    <text x="38" y="372" fontSize="14" fill="#4a5568">
      The PDF function is off by default
    </text>
    <text x="38" y="392" fontSize="14" fill="#4a5568">
      in Upcoming features.
    </text>
  </svg>
);

export default DecisionSvg;
