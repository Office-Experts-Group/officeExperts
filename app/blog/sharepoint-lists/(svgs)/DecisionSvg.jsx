// /app/blog/sharepoint-lists/(svgs)/DecisionSvg.jsx
// Yes/no decision flow: which relationship method to use.
// Hard-coded hex values and the tokens they match:
//   #046999 $accent, #e8f4fa $accent-light, #0d1b2a $text-primary,
//   #4a5568 $text-secondary, #f7f8f9 $light-bg, #ffffff $white,
//   #d4d6d9 $line-strong

function Box({ x, y, w, h, label, lines, solid, dashed }) {
  const fill = solid ? "#046999" : dashed ? "#f7f8f9" : "#e8f4fa";
  const stroke = solid ? "#046999" : dashed ? "#d4d6d9" : "#046999";
  const labelColour = solid ? "#ffffff" : "#046999";
  const textColour = solid ? "#ffffff" : "#0d1b2a";
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        rx="14"
        fill={fill}
        stroke={stroke}
        strokeOpacity={solid ? 1 : 0.45}
        strokeDasharray={dashed ? "6 5" : undefined}
      />
      {label && (
        <text
          x={x + 20}
          y={y + 30}
          fontSize="14"
          fontWeight="700"
          letterSpacing="1"
          fill={labelColour}
        >
          {label}
        </text>
      )}
      {lines.map((line, i) => (
        <text
          key={line}
          x={x + 20}
          y={y + (label ? 56 : 30) + i * 24}
          fontSize="15"
          fontWeight={solid ? 700 : 500}
          fill={textColour}
        >
          {line}
        </text>
      ))}
    </g>
  );
}

export default function DecisionSvg() {
  return (
    <svg
      viewBox="0 0 760 448"
      role="img"
      aria-labelledby="sp-decision-title sp-decision-desc"
      fontFamily="aptos"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title id="sp-decision-title">
        Which way should you relate your SharePoint lists?
      </title>
      <desc id="sp-decision-desc">
        Question one asks if the data will grow past tens of thousands of rows
        or needs strict integrity. If yes, use Dataverse or SQL Server. If no,
        question two asks if people also work in the SharePoint list directly
        and need to see the parent name. If yes, use a lookup column. If no, use
        a number column that holds the parent ID, which is the method in this
        guide.
      </desc>
      <defs>
        <marker
          id="sp-decision-arrow"
          viewBox="0 0 10 10"
          refX="9"
          refY="5"
          markerWidth="8"
          markerHeight="8"
          orient="auto"
        >
          <path d="M0 0 L10 5 L0 10 z" fill="#4a5568" />
        </marker>
      </defs>

      <Box
        x={20}
        y={20}
        w={420}
        h={96}
        label="QUESTION 1"
        lines={[
          "Will the data grow past tens of thousands",
          "of rows, or must it enforce strict integrity?",
        ]}
      />
      <Box
        x={500}
        y={20}
        w={240}
        h={96}
        label="BEST FIT"
        lines={["Dataverse or", "SQL Server"]}
      />

      <Box
        x={20}
        y={176}
        w={420}
        h={96}
        label="QUESTION 2"
        lines={[
          "Do people also work in the SharePoint list",
          "directly and need to see the parent’s name?",
        ]}
      />
      <Box
        x={500}
        y={176}
        w={240}
        h={96}
        label="BEST FIT"
        lines={["SharePoint", "lookup column"]}
      />

      <Box
        x={20}
        y={332}
        w={420}
        h={96}
        solid
        label="RECOMMENDED START"
        lines={["Number column holding", "the parent’s ID (this guide)"]}
      />
      <Box
        x={500}
        y={332}
        w={240}
        h={96}
        dashed
        lines={[
          "Simplest to build and",
          "easy to read in Power",
          "Fx formulas.",
        ]}
      />

      {/* Arrows */}
      <g
        stroke="#4a5568"
        strokeWidth="2"
        fill="none"
        markerEnd="url(#sp-decision-arrow)"
      >
        <path d="M440 68 H496" markerEnd="url(#sp-decision-arrow)" />
        <path d="M440 224 H496" markerEnd="url(#sp-decision-arrow)" />
        <path d="M230 116 V172" markerEnd="url(#sp-decision-arrow)" />
        <path d="M230 272 V328" markerEnd="url(#sp-decision-arrow)" />
      </g>
      <g fontSize="14" fontWeight="700" fill="#4a5568">
        <text x="456" y="58">
          Yes
        </text>
        <text x="456" y="214">
          Yes
        </text>
        <text x="242" y="150">
          No
        </text>
        <text x="242" y="306">
          No
        </text>
      </g>
    </svg>
  );
}
