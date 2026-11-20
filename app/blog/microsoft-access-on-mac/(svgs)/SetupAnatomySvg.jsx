// /app/blog/microsoft-access-on-mac/(svgs)/SetupAnatomySvg.jsx
// Anatomy: a Mac running Access inside a Windows virtual machine, with four
// numbered pins and left/right callouts.
// Hex values and the tokens they match:
//   #046999 $accent   #e8f4fa $accent-light   #f7f8f9 $light-bg
//   #d4d6d9 $line-strong   #0d1b2a $text-primary   #4a5568 $text-secondary
//   #ffffff $white

const LEFT = [
  {
    n: 1,
    pinX: 248,
    pinY: 112,
    head: "Shared folders",
    lines: ["Same files on the Mac", "and inside Windows"],
  },
  {
    n: 3,
    pinX: 300,
    pinY: 190,
    head: "Snapshots",
    lines: ["Save a restore point", "before big changes"],
  },
];
const RIGHT = [
  {
    n: 2,
    pinY: 150,
    head: "Data file",
    lines: ["Keep it out of", "synced folders"],
  },
  { n: 4, pinY: 217, head: "Memory", lines: ["Give Windows 8GB", "or more"] },
];

export default function SetupAnatomySvg() {
  return (
    <svg
      viewBox="0 0 760 310"
      role="img"
      aria-labelledby="mac-setup-title mac-setup-desc"
      fontFamily="aptos"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title id="mac-setup-title">A healthy Parallels setup</title>
      <desc id="mac-setup-desc">
        A Mac laptop running a Windows virtual machine with an Access database
        open. Four numbered callouts: shared folders, keeping the data file out
        of synced folders, snapshots before big changes, and giving Windows 8GB
        of memory or more.
      </desc>

      {/* Laptop */}
      <rect x="240" y="60" width="280" height="210" rx="14" fill="#0d1b2a" />
      <rect x="252" y="72" width="256" height="186" rx="6" fill="#e8f4fa" />
      <rect x="252" y="72" width="256" height="14" rx="3" fill="#d4d6d9" />
      <rect x="210" y="270" width="340" height="14" rx="7" fill="#0d1b2a" />
      <rect x="350" y="270" width="60" height="5" rx="2.5" fill="#4a5568" />

      {/* Mac desktop folder */}
      <path
        d="M262 106a3 3 0 0 1 3-3h8l3 4h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3h-23a3 3 0 0 1-3-3v-16z"
        fill="#046999"
      />

      {/* Windows virtual machine window */}
      <rect
        x="300"
        y="96"
        width="198"
        height="152"
        rx="8"
        fill="#ffffff"
        stroke="#046999"
        strokeWidth="1.5"
      />
      <path
        d="M300 104a8 8 0 0 1 8-8h182a8 8 0 0 1 8 8v12H300v-12z"
        fill="#046999"
      />
      <text x="312" y="111" fontSize="14" fontWeight="700" fill="#ffffff">
        Windows VM
      </text>

      {/* Access datasheet inside the VM */}
      <rect x="310" y="124" width="178" height="16" rx="3" fill="#e8f4fa" />
      <rect x="310" y="142" width="178" height="14" fill="#f7f8f9" />
      <rect x="310" y="156" width="178" height="14" fill="#ffffff" />
      <rect x="310" y="170" width="178" height="14" fill="#f7f8f9" />
      <rect x="310" y="184" width="178" height="14" fill="#ffffff" />
      <g fill="#d4d6d9">
        <rect x="316" y="146" width="40" height="6" rx="3" />
        <rect x="372" y="146" width="30" height="6" rx="3" />
        <rect x="418" y="146" width="44" height="6" rx="3" />
        <rect x="316" y="160" width="30" height="6" rx="3" />
        <rect x="372" y="160" width="42" height="6" rx="3" />
        <rect x="418" y="160" width="30" height="6" rx="3" />
        <rect x="316" y="174" width="44" height="6" rx="3" />
        <rect x="372" y="174" width="26" height="6" rx="3" />
        <rect x="418" y="174" width="40" height="6" rx="3" />
      </g>
      <g fill="#046999" fillOpacity="0.55">
        <rect x="316" y="129" width="34" height="6" rx="3" />
        <rect x="372" y="129" width="26" height="6" rx="3" />
        <rect x="418" y="129" width="38" height="6" rx="3" />
      </g>

      {/* Memory bar */}
      <rect x="310" y="212" width="178" height="10" rx="5" fill="#d4d6d9" />
      <rect x="310" y="212" width="96" height="10" rx="5" fill="#046999" />

      {/* Left callouts */}
      {LEFT.map((c) => (
        <g key={c.n}>
          <path
            d={`M${c.pinX - 14} ${c.pinY}H206`}
            stroke="#046999"
            strokeWidth="1.5"
            fill="none"
            strokeDasharray="4 4"
          />
          <text
            x="200"
            y={c.pinY - 4}
            textAnchor="end"
            fontSize="15"
            fontWeight="700"
            fill="#0d1b2a"
          >
            {c.head}
          </text>
          <text
            x="200"
            y={c.pinY + 16}
            textAnchor="end"
            fontSize="14"
            fill="#4a5568"
          >
            {c.lines[0]}
          </text>
          <text
            x="200"
            y={c.pinY + 34}
            textAnchor="end"
            fontSize="14"
            fill="#4a5568"
          >
            {c.lines[1]}
          </text>
        </g>
      ))}

      {/* Right callouts */}
      {RIGHT.map((c) => (
        <g key={c.n}>
          <path
            d={`M512 ${c.pinY}H554`}
            stroke="#046999"
            strokeWidth="1.5"
            fill="none"
            strokeDasharray="4 4"
          />
          <text
            x="560"
            y={c.pinY - 4}
            fontSize="15"
            fontWeight="700"
            fill="#0d1b2a"
          >
            {c.head}
          </text>
          <text x="560" y={c.pinY + 16} fontSize="14" fill="#4a5568">
            {c.lines[0]}
          </text>
          <text x="560" y={c.pinY + 34} fontSize="14" fill="#4a5568">
            {c.lines[1]}
          </text>
        </g>
      ))}

      {/* Pins */}
      <g>
        <circle
          cx="248"
          cy="112"
          r="14"
          fill="#046999"
          stroke="#ffffff"
          strokeWidth="2"
        />
        <text
          x="248"
          y="117"
          textAnchor="middle"
          fontSize="14"
          fontWeight="700"
          fill="#ffffff"
        >
          1
        </text>
        <circle
          cx="498"
          cy="150"
          r="14"
          fill="#046999"
          stroke="#ffffff"
          strokeWidth="2"
        />
        <text
          x="498"
          y="155"
          textAnchor="middle"
          fontSize="14"
          fontWeight="700"
          fill="#ffffff"
        >
          2
        </text>
        <circle
          cx="300"
          cy="190"
          r="14"
          fill="#046999"
          stroke="#ffffff"
          strokeWidth="2"
        />
        <text
          x="300"
          y="195"
          textAnchor="middle"
          fontSize="14"
          fontWeight="700"
          fill="#ffffff"
        >
          3
        </text>
        <circle
          cx="498"
          cy="217"
          r="14"
          fill="#046999"
          stroke="#ffffff"
          strokeWidth="2"
        />
        <text
          x="498"
          y="222"
          textAnchor="middle"
          fontSize="14"
          fontWeight="700"
          fill="#ffffff"
        >
          4
        </text>
      </g>
    </svg>
  );
}
