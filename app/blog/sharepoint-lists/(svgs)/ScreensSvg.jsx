// /app/blog/sharepoint-lists/(svgs)/ScreensSvg.jsx
// The four app screens and how the user moves between them.
// Hard-coded hex values and the tokens they match:
//   #046999 $accent, #e8f4fa $accent-light, #0d1b2a $text-primary,
//   #4a5568 $text-secondary, #9a9da1 $text-muted, #f7f8f9 $light-bg,
//   #ffffff $white, #d4d6d9 $line-strong

const W = 300;
const H = 220;

function Screen({ x, y, title, children }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <rect width={W} height={H} rx="16" fill="#f7f8f9" stroke="#d4d6d9" />
      <path
        d={`M0 36 V16 Q0 0 16 0 H${W - 16} Q${W} 0 ${W} 16 V36 Z`}
        fill="#046999"
      />
      <text x="16" y="23" fontSize="14" fontWeight="700" fill="#ffffff">
        {title}
      </text>
      {children}
    </g>
  );
}

function Input({ y, label }) {
  return (
    <g>
      <rect
        x="16"
        y={y}
        width="268"
        height="30"
        rx="8"
        fill="#ffffff"
        stroke="#d4d6d9"
      />
      <text x="28" y={y + 20} fontSize="14" fill="#9a9da1">
        {label}
      </text>
    </g>
  );
}

function Button({ x = 16, y, w, label }) {
  return (
    <g>
      <rect x={x} y={y} width={w} height="30" rx="6" fill="#046999" />
      <text
        x={x + w / 2}
        y={y + 20}
        fontSize="14"
        fontWeight="700"
        textAnchor="middle"
        fill="#ffffff"
      >
        {label}
      </text>
    </g>
  );
}

const ISSUE_ROWS = [
  { id: 1, title: "Late delivery" },
  { id: 2, title: "Site access" },
  { id: 3, title: "Invoice error" },
];

export default function ScreensSvg() {
  return (
    <svg
      viewBox="0 0 760 536"
      role="img"
      aria-labelledby="sp-screens-title sp-screens-desc"
      fontFamily="aptos"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title id="sp-screens-title">The four screens of the Issues app</title>
      <desc id="sp-screens-desc">
        The main screen lists issues. The plus button opens the New Issue
        screen. The edit icon opens the View Issue screen, which shows the
        actions for that issue. The Add action button opens the New Action
        screen, and saving returns to the View Issue screen.
      </desc>
      <defs>
        <marker
          id="sp-screens-arrow"
          viewBox="0 0 10 10"
          refX="9"
          refY="5"
          markerWidth="8"
          markerHeight="8"
          orient="auto"
        >
          <path d="M0 0 L10 5 L0 10 z" fill="#046999" />
        </marker>
      </defs>

      {/* Main screen */}
      <Screen x={20} y={20} title="Main screen">
        {ISSUE_ROWS.map((row, i) => {
          const y = 48 + i * 42;
          return (
            <g key={row.id}>
              <rect
                x="16"
                y={y}
                width="268"
                height="34"
                rx="8"
                fill="#ffffff"
                stroke="#d4d6d9"
              />
              <text x="28" y={y + 22} fontSize="14" fill="#0d1b2a">
                {row.title}
              </text>
              <text
                x="236"
                y={y + 22}
                fontSize="14"
                textAnchor="end"
                fill="#4a5568"
              >
                {`ID ${row.id}`}
              </text>
              <circle cx="262" cy={y + 17} r="10" fill="#e8f4fa" />
              <path
                d={`M259 ${y + 12} l6 5 -6 5`}
                fill="none"
                stroke="#046999"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
          );
        })}
        <Button y={174} w={112} label="+ New issue" />
      </Screen>

      {/* New Issue screen */}
      <Screen x={440} y={20} title="New Issue screen">
        <Input y={48} label="Title" />
        <Input y={88} label="Description" />
        <Button y={134} w={90} label="Save" />
        <text x="16" y="188" fontSize="14" fill="#4a5568">
          Creates the parent record
        </text>
      </Screen>

      {/* View Issue screen */}
      <Screen x={20} y={296} title="View Issue screen">
        <text x="16" y="66" fontSize="15" fontWeight="700" fill="#0d1b2a">
          Late delivery
        </text>
        <text x="16" y="88" fontSize="14" fill="#4a5568">
          Actions with IssueId = 1
        </text>
        {["Call courier", "Email client"].map((label, i) => (
          <g key={label}>
            <rect
              x="16"
              y={100 + i * 34}
              width="268"
              height="28"
              rx="8"
              fill="#ffffff"
              stroke="#d4d6d9"
            />
            <text x="28" y={100 + i * 34 + 19} fontSize="14" fill="#0d1b2a">
              {label}
            </text>
          </g>
        ))}
        <Button y={172} w={120} label="Add action" />
      </Screen>

      {/* New Action screen */}
      <Screen x={440} y={296} title="New Action screen">
        <Input y={48} label="Title" />
        <Input y={88} label="Description" />
        <rect
          x="16"
          y="128"
          width="268"
          height="26"
          rx="13"
          fill="#e8f4fa"
          stroke="#046999"
          strokeOpacity="0.4"
        />
        <text
          x="150"
          y="146"
          fontSize="14"
          fontWeight="600"
          textAnchor="middle"
          fill="#046999"
        >
          IssueId = 1, set for you
        </text>
        <Button y={166} w={90} label="Save" />
      </Screen>

      {/* Navigation */}
      <g fill="none" stroke="#046999" strokeWidth="2" strokeLinecap="round">
        <path d="M320 130 H436" markerEnd="url(#sp-screens-arrow)" />
        <path d="M170 240 V292" markerEnd="url(#sp-screens-arrow)" />
        <path d="M320 390 H436" markerEnd="url(#sp-screens-arrow)" />
        <path d="M440 450 H324" markerEnd="url(#sp-screens-arrow)" />
      </g>
      <g fontSize="14" fontWeight="600" fill="#4a5568">
        <text x="380" y="118" textAnchor="middle">
          Plus button
        </text>
        <text x="182" y="272">
          Edit icon
        </text>
        <text x="380" y="378" textAnchor="middle">
          Add action
        </text>
        <text x="380" y="472" textAnchor="middle">
          After Patch
        </text>
      </g>
    </svg>
  );
}
