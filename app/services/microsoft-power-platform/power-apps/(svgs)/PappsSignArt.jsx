// /app/services/microsoft-power-platform/power-apps/(svgs)/PappsSignArt.jsx
// Spot illustrations for the "signs" tiles. Decorative, one per tile, each drawn
// for the tile colour it sits on (light, dark, accent, deep).
// Hex values and the tokens they match:
//   #046999 $accent, #034e72 $accent-dark, #6fc3e8 $accent-on-dark,
//   #e8f4fa $accent-light, #18232e $dark-surface, #1a2a3a $dark-mid,
//   #111820 $dark-bg, #0d1b2a $text-primary, #4a5568 $text-secondary,
//   #9a9da1 $text-muted, #d4d6d9 $line-strong, #e3e8ec $line,
//   #f7f8f9 $light-bg, #ffffff $white, #c0392b $replace-x, #fdf6f5 $before-bg

const base = {
  fontFamily: "aptos",
  width: "100%",
  height: "auto",
  "aria-hidden": "true",
  focusable: "false",
};

// Light tile: a spreadsheet with errors, a formula bar and a stray copy.
export const PappsSpreadsheetArt = () => (
  <svg viewBox="0 0 360 230" {...base}>
    <g transform="translate(34 30) rotate(3)">
      <rect width="300" height="170" rx="10" fill="#e3e8ec" />
    </g>
    <rect
      x="8"
      y="14"
      width="300"
      height="170"
      rx="10"
      fill="#ffffff"
      stroke="#d4d6d9"
      strokeWidth="2"
    />
    <rect x="8" y="14" width="300" height="28" rx="10" fill="#e8f4fa" />
    <rect x="8" y="32" width="300" height="10" fill="#e8f4fa" />
    <text x="20" y="34" fontSize="14" fontWeight="700" fill="#046999">
      =SUM(B2:B9)
    </text>
    {[1, 2, 3, 4].map((c) => (
      <line
        key={c}
        x1={8 + c * 60}
        x2={8 + c * 60}
        y1="42"
        y2="184"
        stroke="#e3e8ec"
      />
    ))}
    {[1, 2, 3, 4, 5].map((r) => (
      <line
        key={r}
        x1="8"
        x2="308"
        y1={42 + r * 23.6}
        y2={42 + r * 23.6}
        stroke="#e3e8ec"
      />
    ))}
    {[
      [20, 52, 36],
      [80, 52, 28],
      [140, 52, 36],
      [200, 52, 24],
      [260, 52, 30],
      [20, 76, 28],
      [80, 76, 36],
      [200, 76, 36],
      [20, 99, 36],
      [140, 99, 28],
      [260, 99, 24],
      [80, 123, 30],
      [200, 123, 28],
      [260, 123, 36],
      [20, 147, 24],
      [140, 147, 36],
      [200, 147, 24],
    ].map(([x, y, w], i) => (
      <rect
        key={i}
        x={x}
        y={y}
        width={w}
        height="6"
        rx="3"
        fill="#9a9da1"
        opacity="0.55"
      />
    ))}
    <rect
      x="130"
      y="68"
      width="58"
      height="23.6"
      fill="#fdf6f5"
      stroke="#c0392b"
      strokeWidth="2"
    />
    <text
      x="159"
      y="85"
      textAnchor="middle"
      fontSize="14"
      fontWeight="700"
      fill="#c0392b"
    >
      #REF!
    </text>
    <rect
      x="248"
      y="115"
      width="58"
      height="23.6"
      fill="#fdf6f5"
      stroke="#c0392b"
      strokeWidth="2"
    />
    <text
      x="277"
      y="132"
      textAnchor="middle"
      fontSize="14"
      fontWeight="700"
      fill="#c0392b"
    >
      #N/A
    </text>
    <rect
      x="46"
      y="190"
      width="210"
      height="32"
      rx="9"
      fill="#ffffff"
      stroke="#d4d6d9"
      strokeWidth="2"
    />
    <text x="151" y="211" textAnchor="middle" fontSize="14" fill="#4a5568">
      Copy of costing (2).xlsx
    </text>
    <circle cx="326" cy="52" r="20" fill="#0d1b2a" />
    <path
      d="M326 42 v13 M326 61 v1"
      stroke="#ffffff"
      strokeWidth="3"
      strokeLinecap="round"
    />
  </svg>
);

// Dark tile: paper form retyped into a screen.
export const PappsPaperArt = () => (
  <svg viewBox="0 0 280 150" {...base}>
    <g transform="translate(14 14) rotate(-5 45 56)">
      <rect width="90" height="112" rx="8" fill="#f7f8f9" />
      <rect x="28" y="-5" width="34" height="12" rx="4" fill="#9a9da1" />
      <rect x="10" y="20" width="44" height="6" rx="3" fill="#0d1b2a" />
      {[0, 1, 2, 3].map((i) => (
        <g key={i}>
          <rect x="10" y={44 + i * 16} width="70" height="2" fill="#d4d6d9" />
          <path
            d={`M12 ${41 + i * 16} q4 -7 8 0 t8 0 t8 0 t8 0`}
            fill="none"
            stroke="#4a5568"
            strokeWidth="1.4"
            strokeLinecap="round"
          />
        </g>
      ))}
    </g>
    <path
      d="M120 66 H150"
      stroke="#6fc3e8"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeDasharray="5 6"
    />
    <path
      d="M144 58 l10 8 l-10 8"
      fill="none"
      stroke="#6fc3e8"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <rect
      x="162"
      y="22"
      width="104"
      height="72"
      rx="8"
      fill="#1a2a3a"
      stroke="#6fc3e8"
      strokeWidth="2"
    />
    {[0, 1, 2].map((i) => (
      <g key={i}>
        <rect
          x="172"
          y={34 + i * 18}
          width="30"
          height="6"
          rx="3"
          fill="#6fc3e8"
          opacity="0.7"
        />
        <rect
          x="210"
          y={32 + i * 18}
          width="46"
          height="10"
          rx="3"
          fill="#ffffff"
          opacity="0.18"
        />
      </g>
    ))}
    <rect x="200" y="94" width="28" height="8" fill="#1a2a3a" />
    <rect x="182" y="102" width="64" height="6" rx="3" fill="#1a2a3a" />
    <text x="14" y="142" fontSize="14" fill="#ffffff" fillOpacity="0.75">
      Written once, typed in again
    </text>
  </svg>
);

// Accent tile: an approval request waiting on a chain of people.
export const PappsApprovalArt = () => (
  <svg viewBox="0 0 230 120" {...base}>
    <path
      d="M44 50 H92 M112 50 H160"
      stroke="#ffffff"
      strokeOpacity="0.7"
      strokeWidth="2.5"
      strokeDasharray="5 6"
      strokeLinecap="round"
    />
    <g transform="translate(10 32)">
      <rect width="42" height="30" rx="6" fill="#ffffff" />
      <path
        d="M3 5 L21 20 L39 5"
        fill="none"
        stroke="#046999"
        strokeWidth="2.4"
        strokeLinejoin="round"
      />
    </g>
    {[92, 160].map((x, i) => (
      <g key={x}>
        <circle
          cx={x + 10}
          cy="50"
          r="22"
          fill={i ? "#034e72" : "#ffffff"}
          stroke="#ffffff"
          strokeWidth="2"
        />
        <circle cx={x + 10} cy="44" r="7" fill={i ? "#6fc3e8" : "#046999"} />
        <path
          d={`M${x - 2} 62 q12 -14 24 0`}
          fill={i ? "#6fc3e8" : "#046999"}
        />
      </g>
    ))}
    <g transform="translate(186 6)">
      <circle
        cx="16"
        cy="16"
        r="15"
        fill="#034e72"
        stroke="#ffffff"
        strokeWidth="2"
      />
      <path
        d="M16 8 v9 l6 4"
        fill="none"
        stroke="#ffffff"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <rect x="66" y="88" width="98" height="28" rx="14" fill="#034e72" />
    <text
      x="115"
      y="107"
      textAnchor="middle"
      fontSize="14"
      fontWeight="700"
      fill="#ffffff"
    >
      Still waiting
    </text>
  </svg>
);

// Deep tile: busy off-the-shelf software where only one small thing is needed.
export const PappsFitArt = () => (
  <svg viewBox="0 0 280 150" {...base}>
    <rect
      x="14"
      y="10"
      width="252"
      height="118"
      rx="10"
      fill="#034e72"
      stroke="#6fc3e8"
      strokeWidth="2"
    />
    <rect
      x="14"
      y="10"
      width="252"
      height="22"
      rx="10"
      fill="#6fc3e8"
      fillOpacity="0.25"
    />
    <rect
      x="14"
      y="22"
      width="252"
      height="10"
      fill="#6fc3e8"
      fillOpacity="0.25"
    />
    {[0, 1, 2, 3, 4, 5].map((i) => (
      <rect
        key={i}
        x={24 + i * 38}
        y="17"
        width="26"
        height="5"
        rx="2.5"
        fill="#ffffff"
        fillOpacity="0.6"
      />
    ))}
    {[0, 1, 2, 3, 4].map((i) => (
      <rect
        key={i}
        x="24"
        y={42 + i * 16}
        width="52"
        height="9"
        rx="4"
        fill="#ffffff"
        fillOpacity="0.2"
      />
    ))}
    {[0, 1, 2].map((r) =>
      [0, 1, 2, 3].map((c) => (
        <rect
          key={`${r}${c}`}
          x={92 + c * 43}
          y={42 + r * 28}
          width="36"
          height="20"
          rx="4"
          fill="#ffffff"
          fillOpacity="0.14"
        />
      )),
    )}
    <rect x="178" y="70" width="86" height="28" rx="14" fill="#ffffff" />
    <text
      x="221"
      y="89"
      textAnchor="middle"
      fontSize="14"
      fontWeight="700"
      fill="#034e72"
    >
      Our need
    </text>
    <text x="14" y="146" fontSize="14" fill="#ffffff" fillOpacity="0.75">
      Hundreds of buttons, one you need
    </text>
  </svg>
);

// Light tile: two people looking at the same record and seeing different numbers.
export const PappsVersionArt = () => (
  <svg viewBox="0 0 230 130" {...base}>
    {[
      { x: 8, n: "42", tone: "#e8f4fa", stroke: "#046999" },
      { x: 124, n: "37", tone: "#fdf6f5", stroke: "#c0392b" },
    ].map(({ x, n, tone, stroke }) => (
      <g key={x} transform={`translate(${x} 10)`}>
        <rect
          width="98"
          height="88"
          rx="10"
          fill={tone}
          stroke={stroke}
          strokeWidth="2"
        />
        <text x="12" y="26" fontSize="14" fill="#4a5568">
          Stock
        </text>
        <text x="12" y="66" fontSize="32" fontWeight="700" fill="#0d1b2a">
          {n}
        </text>
        <rect
          x="12"
          y="74"
          width="40"
          height="5"
          rx="2.5"
          fill="#9a9da1"
          opacity="0.5"
        />
      </g>
    ))}
    <path
      d="M106 54 h12 M112 48 l-6 6 l6 6 M112 48 l6 6 l-6 6"
      fill="none"
      stroke="#9a9da1"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <text
      x="115"
      y="122"
      textAnchor="middle"
      fontSize="14"
      fontWeight="700"
      fill="#c0392b"
    >
      Which is right?
    </text>
  </svg>
);
