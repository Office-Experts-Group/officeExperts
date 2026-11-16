// /app/blog/file-attachments-in-power-apps/(svgs)/DecisionSvg.jsx
// Decision flow: which way of storing Power Apps files fits.
// Hex values map to tokens: #046999 $accent, #e8f4fa $accent-light,
// #0d1b2a $text-primary, #4a5568 $text-secondary, #ffffff $white.

const Q = ({ x, y, w, lines }) => (
  <g>
    <rect
      x={x}
      y={y}
      width={w}
      height="84"
      rx="14"
      fill="#ffffff"
      stroke="#046999"
      strokeWidth="1.6"
    />
    {lines.map((line, i) => (
      <text
        key={line}
        x={x + w / 2}
        y={y + 38 + i * 21}
        fontSize="15"
        fontWeight="700"
        fill="#0d1b2a"
        textAnchor="middle"
      >
        {line}
      </text>
    ))}
  </g>
);

const Pill = ({ cx, cy, text }) => (
  <g>
    <rect
      x={cx - 24}
      y={cy - 13}
      width="48"
      height="26"
      rx="13"
      fill="#ffffff"
      stroke="#046999"
      strokeOpacity="0.45"
    />
    <text
      x={cx}
      y={cy + 5}
      fontSize="14"
      fontWeight="700"
      fill="#046999"
      textAnchor="middle"
    >
      {text}
    </text>
  </g>
);

const Out = ({ x, title, sub, solid }) => (
  <g>
    <rect
      x={x}
      y="350"
      width="170"
      height="120"
      rx="14"
      fill={solid ? "#046999" : "#e8f4fa"}
      stroke="#046999"
      strokeOpacity={solid ? 1 : 0.4}
      strokeWidth="1.4"
    />
    {title.map((line, i) => (
      <text
        key={line}
        x={x + 85}
        y={384 + i * 20}
        fontSize="15"
        fontWeight="700"
        fill={solid ? "#ffffff" : "#0d1b2a"}
        textAnchor="middle"
      >
        {line}
      </text>
    ))}
    {sub.map((line, i) => (
      <text
        key={line}
        x={x + 85}
        y={428 + i * 18}
        fontSize="14"
        fill={solid ? "#ffffff" : "#4a5568"}
        fillOpacity={solid ? 0.9 : 1}
        textAnchor="middle"
      >
        {line}
      </text>
    ))}
  </g>
);

const DecisionSvg = () => (
  <svg
    viewBox="0 0 760 490"
    role="img"
    aria-labelledby="fa-decision-title fa-decision-desc"
    fontFamily="aptos"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title id="fa-decision-title">Which file storage option fits?</title>
    <desc id="fa-decision-desc">
      A decision flow. If the files do not need a SharePoint document library,
      choose a Dataverse file column when your data is in Dataverse, otherwise
      the built-in list attachments. If they do, and each file must link to a
      record, use the Power Apps V2 trigger method with a ParentId column.
      Without that link, use the same flow and skip the ParentId input.
    </desc>
    <defs>
      <marker
        id="fa-decision-arrow"
        viewBox="0 0 10 10"
        refX="8"
        refY="5"
        markerWidth="7"
        markerHeight="7"
        orient="auto"
      >
        <path d="M1 1 9 5 1 9z" fill="#046999" />
      </marker>
    </defs>

    <g fill="none" stroke="#046999" strokeWidth="1.8" strokeLinejoin="round">
      <path d="M380 100V140H190V180" markerEnd="url(#fa-decision-arrow)" />
      <path d="M380 140H570V180" markerEnd="url(#fa-decision-arrow)" />
      <path d="M190 264V307H95V350" markerEnd="url(#fa-decision-arrow)" />
      <path d="M190 307H285V350" markerEnd="url(#fa-decision-arrow)" />
      <path d="M570 264V307H475V350" markerEnd="url(#fa-decision-arrow)" />
      <path d="M570 307H665V350" markerEnd="url(#fa-decision-arrow)" />
    </g>

    <Q
      x={250}
      y={16}
      w={260}
      lines={["Do the files need to sit in a", "SharePoint document library?"]}
    />
    <Q
      x={60}
      y={180}
      w={260}
      lines={["Is your data already", "in Dataverse?"]}
    />
    <Q
      x={440}
      y={180}
      w={260}
      lines={["Do you need to link each file", "to a record?"]}
    />

    <Pill cx={285} cy={140} text="No" />
    <Pill cx={475} cy={140} text="Yes" />
    <Pill cx={142} cy={307} text="Yes" />
    <Pill cx={238} cy={307} text="No" />
    <Pill cx={522} cy={307} text="No" />
    <Pill cx={617} cy={307} text="Yes" />

    <Out
      x={10}
      title={["Dataverse", "file column"]}
      sub={["Files stay with", "the table row"]}
    />
    <Out
      x={200}
      title={["List attachments", "(built in)"]}
      sub={["Fine for small,", "simple cases"]}
    />
    <Out
      x={390}
      title={["Same flow,", "no ParentId"]}
      sub={["Drop the ParentId", "input and column"]}
    />
    <Out
      x={580}
      solid
      title={["This guide’s", "method"]}
      sub={["V2 trigger plus", "a ParentId column"]}
    />
  </svg>
);

export default DecisionSvg;
