// /app/blog/file-attachments-in-power-apps/(svgs)/MistakeSketches.jsx
// Five small "Avoid" (slate, dashed, messy) vs "Do this" (accent, clean) sketches.
// Decorative: the card heading and text carry the meaning, so aria-hidden.
// Hex values map to tokens: #046999 $accent, #e8f4fa $accent-light,
// #0d1b2a $text-primary, #4a5568 $text-secondary, #9a9da1 $text-muted,
// #f7f8f9 $light-bg, #c0392b $replace-x (tiny purposeful accents only).

const Frame = ({ children }) => (
  <svg
    viewBox="0 0 400 190"
    aria-hidden="true"
    focusable="false"
    fontFamily="aptos"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="8"
      y="8"
      width="184"
      height="174"
      rx="12"
      fill="#f7f8f9"
      stroke="#9a9da1"
      strokeDasharray="5 4"
    />
    <rect
      x="208"
      y="8"
      width="184"
      height="174"
      rx="12"
      fill="#e8f4fa"
      stroke="#046999"
      strokeOpacity="0.6"
    />
    <text x="24" y="34" fontSize="14" fontWeight="700" fill="#4a5568">
      Avoid
    </text>
    <text x="224" y="34" fontSize="14" fontWeight="700" fill="#046999">
      Do this
    </text>
    {children}
  </svg>
);

const Chip = ({ x, y, w = 150, text, ok, flag }) => (
  <g>
    <rect
      x={x}
      y={y}
      width={w}
      height="24"
      rx="6"
      fill="#ffffff"
      stroke={ok ? "#046999" : "#9a9da1"}
      strokeOpacity={ok ? 0.6 : 1}
    />
    <path
      d={`M${x + 8} ${y + 5}h6l4 4v9a1 1 0 0 1-1 1h-9a1 1 0 0 1-1-1v-12a1 1 0 0 1 1-1Z`}
      fill="none"
      stroke={ok ? "#046999" : "#9a9da1"}
      strokeWidth="1.3"
      strokeLinejoin="round"
    />
    <text x={x + 28} y={y + 17} fontSize="14" fill={ok ? "#0d1b2a" : "#4a5568"}>
      {text}
    </text>
    {flag && <circle cx={x + w - 12} cy={y + 12} r="5" fill="#c0392b" />}
  </g>
);

const Note = ({ x, text, ok }) => (
  <text
    x={x}
    y="162"
    fontSize="14"
    fill={ok ? "#046999" : "#4a5568"}
    fontWeight={ok ? 700 : 400}
  >
    {text}
  </text>
);

const Arrow = ({ x, y1, y2, ok }) => (
  <path
    d={`M${x} ${y1}V${y2}M${x - 5} ${y2 - 6}l5 6 5-6`}
    fill="none"
    stroke={ok ? "#046999" : "#9a9da1"}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeDasharray={ok ? undefined : "4 4"}
  />
);

export const SketchOrder = () => (
  <Frame>
    <Chip x={24} y={52} text="quote.pdf" />
    <Arrow x={99} y1={80} y2={96} />
    <rect
      x="24"
      y="100"
      width="150"
      height="28"
      rx="7"
      fill="#ffffff"
      stroke="#9a9da1"
      strokeDasharray="4 3"
    />
    <text x="36" y="119" fontSize="14" fill="#4a5568">
      ParentId = ?
    </text>
    <Note x={24} text="Record not saved yet" />
    <Chip x={224} y={52} ok text="quote.pdf" />
    <Arrow x={299} y1={80} y2={96} ok />
    <rect
      x="224"
      y="100"
      width="150"
      height="28"
      rx="7"
      fill="#ffffff"
      stroke="#046999"
    />
    <text x="236" y="119" fontSize="14" fontWeight="700" fill="#046999">
      ParentId = 42
    </text>
    <Note x={224} ok text="Save the record first" />
  </Frame>
);

export const SketchLimits = () => (
  <Frame>
    <rect
      x="24"
      y="48"
      width="150"
      height="50"
      rx="8"
      fill="#ffffff"
      stroke="#9a9da1"
      strokeDasharray="4 3"
    />
    <Chip x={30} y={61} w={154} text="video.mov" flag />
    <rect
      x="24"
      y="112"
      width="104"
      height="26"
      rx="13"
      fill="#ffffff"
      stroke="#9a9da1"
      strokeDasharray="4 3"
    />
    <text x="76" y="130" fontSize="14" fill="#4a5568" textAnchor="middle">
      420 MB
    </text>
    <Note x={24} text="No limit set" />
    <rect
      x="224"
      y="48"
      width="150"
      height="50"
      rx="8"
      fill="#ffffff"
      stroke="#046999"
      strokeDasharray="4 3"
    />
    <Chip x={234} y={61} w={130} ok text="scope.docx" />
    <rect x="224" y="112" width="104" height="26" rx="13" fill="#046999" />
    <text
      x="276"
      y="130"
      fontSize="14"
      fontWeight="700"
      fill="#ffffff"
      textAnchor="middle"
    >
      Max 10 MB
    </text>
    <Note x={224} ok text="Limits set up front" />
  </Frame>
);

export const SketchReset = () => (
  <Frame>
    <rect
      x="24"
      y="48"
      width="150"
      height="90"
      rx="8"
      fill="#ffffff"
      stroke="#9a9da1"
      strokeDasharray="4 3"
    />
    <Chip x={32} y={54} w={134} text="quote.pdf" />
    <Chip x={32} y={82} w={134} text="photo.jpg" />
    <Chip x={32} y={110} w={134} text="scope.docx" />
    <Note x={24} text="Still full after Save" />
    <rect
      x="224"
      y="48"
      width="150"
      height="90"
      rx="8"
      fill="#ffffff"
      stroke="#046999"
      strokeDasharray="4 3"
    />
    <g
      transform="translate(244 80)"
      fill="none"
      stroke="#046999"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20.5 11.5 12 20a5.5 5.5 0 0 1-7.8-7.8l8.5-8.5a3.7 3.7 0 0 1 5.2 5.2l-8.5 8.5a1.8 1.8 0 0 1-2.6-2.6l7.8-7.8" />
    </g>
    <text x="274" y="99" fontSize="14" fontWeight="700" fill="#046999">
      Attach files
    </text>
    <Note x={224} ok text="Reset() clears it" />
  </Frame>
);

export const SketchErrors = () => (
  <Frame>
    <Chip x={24} y={48} text="quote.pdf" />
    <Chip x={24} y={78} text="photo.jpg" flag />
    <rect
      x="24"
      y="112"
      width="150"
      height="28"
      rx="7"
      fill="#ffffff"
      stroke="#9a9da1"
      strokeDasharray="4 3"
    />
    <text x="36" y="131" fontSize="14" fill="#9a9da1">
      No message shown
    </text>
    <Note x={24} text="User thinks it worked" />
    <Chip x={224} y={48} ok text="quote.pdf" />
    <Chip x={224} y={78} ok text="photo.jpg" flag />
    <rect x="224" y="112" width="150" height="28" rx="7" fill="#046999" />
    <text x="236" y="131" fontSize="14" fontWeight="700" fill="#ffffff">
      Upload failed
    </text>
    <Note x={224} ok text="The failure is shown" />
  </Frame>
);

export const SketchFilter = () => (
  <Frame>
    {[
      ["quote.pdf", "42", 48],
      ["plan.pdf", "17", 78],
      ["bid.docx", "99", 108],
    ].map(([n, id, y]) => (
      <g key={n}>
        <rect
          x="24"
          y={y}
          width="150"
          height="24"
          rx="6"
          fill="#ffffff"
          stroke="#9a9da1"
          strokeDasharray="4 3"
        />
        <text x="34" y={y + 17} fontSize="14" fill="#4a5568">
          {n}
        </text>
        <text x="144" y={y + 17} fontSize="14" fill="#4a5568">
          {id}
        </text>
      </g>
    ))}
    <Note x={24} text="Every record’s files" />
    {[
      ["quote.pdf", 48],
      ["photo.jpg", 78],
      ["scope.docx", 108],
    ].map(([n, y]) => (
      <g key={n}>
        <rect
          x="224"
          y={y}
          width="150"
          height="24"
          rx="6"
          fill="#ffffff"
          stroke="#046999"
          strokeOpacity="0.6"
        />
        <text x="234" y={y + 17} fontSize="14" fill="#0d1b2a">
          {n}
        </text>
        <text x="344" y={y + 17} fontSize="14" fontWeight="700" fill="#046999">
          42
        </text>
      </g>
    ))}
    <Note x={224} ok text="ParentId = record ID" />
  </Frame>
);
