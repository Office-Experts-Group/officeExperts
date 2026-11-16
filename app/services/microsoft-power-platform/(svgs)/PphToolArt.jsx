// /app/services/microsoft-power-platform/(svgs)/PphToolArt.jsx
// One spot illustration per tool, each drawn for the panel it sits on.
// Panels (set in pphTools.module.scss): Apps = $accent-light, BI = $dark-bg,
// Automate = $accent, Pages = $light-bg. Decorative, so aria-hidden.
// Hex → token: #046999 $accent, #034e72 $accent-dark, #6fc3e8 $accent-on-dark,
// #e8f4fa $accent-light, #111820 $dark-bg, #18232e $dark-surface,
// #1a2a3a $dark-mid, #0d1b2a $text-primary, #4a5568 $text-secondary,
// #9a9da1 $text-muted, #e3e8ec $line, #d4d6d9 $line-strong,
// #f7f8f9 $light-bg, #ffffff $white, #0eaa0e $success

const svgProps = {
  viewBox: "0 0 480 340",
  fontFamily: "aptos",
  "aria-hidden": "true",
  focusable: "false",
  style: { display: "block", width: "100%", height: "auto" },
};

// ───────── Power Apps: tablet job card + phone job list ─────────
export const PphAppsArt = () => (
  <svg {...svgProps}>
    {/* tablet */}
    <rect
      x="34"
      y="46"
      width="300"
      height="226"
      rx="20"
      fill="#0d1b2a"
      opacity="0.08"
      transform="translate(6 8)"
    />
    <rect x="30" y="38" width="300" height="226" rx="20" fill="#111820" />
    <rect x="40" y="48" width="280" height="206" rx="12" fill="#ffffff" />
    <path
      d="M40 60a12 12 0 0 1 12-12h58v206H52a12 12 0 0 1-12-12z"
      fill="#f7f8f9"
    />
    {[0, 1, 2, 3].map((i) => (
      <g key={i}>
        <rect
          x="50"
          y={64 + i * 30}
          width="14"
          height="14"
          rx="4"
          fill={i === 0 ? "#046999" : "#d4d6d9"}
        />
        <rect
          x="70"
          y={68 + i * 30}
          width="30"
          height="6"
          rx="3"
          fill={i === 0 ? "#0d1b2a" : "#9a9da1"}
        />
      </g>
    ))}
    <path d="M110 48h198a12 12 0 0 1 12 12v18H110z" fill="#046999" />
    <text x="124" y="70" fontSize="14" fontWeight="700" fill="#ffffff">
      Job card
    </text>
    <rect x="124" y="92" width="76" height="62" rx="8" fill="#e8f4fa" />
    <path
      d="M124 146l22-24 14 14 12-10 28 24v6a8 8 0 0 1-8 8h-60a8 8 0 0 1-8-8z"
      fill="#6fc3e8"
      opacity="0.7"
    />
    <circle cx="184" cy="108" r="6" fill="#ffffff" />
    <text x="212" y="104" fontSize="14" fill="#4a5568">
      Status
    </text>
    <rect
      x="212"
      y="110"
      width="100"
      height="28"
      rx="6"
      fill="#ffffff"
      stroke="#d4d6d9"
    />
    <text x="220" y="129" fontSize="14" fill="#0d1b2a">
      In progress
    </text>
    <path
      d="M296 121l4 4 4-4"
      fill="none"
      stroke="#4a5568"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <text x="124" y="184" fontSize="14" fill="#4a5568">
      Urgent
    </text>
    <rect x="172" y="170" width="36" height="18" rx="9" fill="#046999" />
    <circle cx="199" cy="179" r="7" fill="#ffffff" />
    <rect x="236" y="166" width="76" height="30" rx="6" fill="#046999" />
    <text
      x="274"
      y="186"
      fontSize="14"
      fontWeight="700"
      fill="#ffffff"
      textAnchor="middle"
    >
      Save
    </text>
    <rect
      x="124"
      y="206"
      width="188"
      height="34"
      rx="8"
      fill="#f7f8f9"
      stroke="#e3e8ec"
    />
    <circle cx="140" cy="223" r="7" fill="#e8f4fa" stroke="#046999" />
    <rect
      x="156"
      y="215"
      width="80"
      height="6"
      rx="3"
      fill="#0d1b2a"
      opacity="0.7"
    />
    <rect x="156" y="226" width="56" height="5" rx="2.5" fill="#9a9da1" />

    {/* phone */}
    <rect
      x="316"
      y="90"
      width="134"
      height="236"
      rx="24"
      fill="#0d1b2a"
      opacity="0.1"
      transform="translate(6 8)"
    />
    <rect x="312" y="82" width="134" height="236" rx="24" fill="#111820" />
    <rect x="320" y="90" width="118" height="220" rx="17" fill="#ffffff" />
    <path
      d="M320 107a17 17 0 0 1 17-17h84a17 17 0 0 1 17 17v21H320z"
      fill="#046999"
    />
    <text x="332" y="116" fontSize="14" fontWeight="700" fill="#ffffff">
      Today’s jobs
    </text>
    {[0, 1, 2].map((i) => (
      <g key={i}>
        <rect
          x="328"
          y={138 + i * 54}
          width="102"
          height="46"
          rx="9"
          fill="#f7f8f9"
          stroke="#e3e8ec"
        />
        <circle
          cx="344"
          cy={161 + i * 54}
          r="9"
          fill={["#6fc3e8", "#046999", "#d4d6d9"][i]}
        />
        <rect
          x="360"
          y={150 + i * 54}
          width="52"
          height="6"
          rx="3"
          fill="#0d1b2a"
          opacity="0.7"
        />
        <rect
          x="360"
          y={162 + i * 54}
          width="36"
          height="5"
          rx="2.5"
          fill="#9a9da1"
        />
        <rect
          x="360"
          y={172 + i * 54}
          width="22"
          height="5"
          rx="2.5"
          fill={i === 0 ? "#046999" : "#d4d6d9"}
        />
      </g>
    ))}
    <circle cx="414" cy="290" r="14" fill="#046999" />
    <path
      d="M414 283v14M407 290h14"
      stroke="#ffffff"
      strokeWidth="2.2"
      strokeLinecap="round"
    />

    {/* synced chip + cog */}
    <rect
      x="236"
      y="298"
      width="92"
      height="30"
      rx="15"
      fill="#ffffff"
      stroke="#046999"
    />
    <circle cx="254" cy="313" r="5" fill="#0eaa0e" />
    <text x="266" y="318" fontSize="14" fontWeight="700" fill="#034e72">
      Synced
    </text>
    <g
      transform="translate(396 28)"
      fill="none"
      stroke="#046999"
      strokeWidth="2.2"
      strokeLinecap="round"
    >
      <circle cx="0" cy="0" r="8" />
      <path d="M0-16v6M0 10v6M-16 0h6M10 0h6M-11.3-11.3l4.2 4.2M7.1 7.1l4.2 4.2M-11.3 11.3l4.2-4.2M7.1-7.1l4.2-4.2" />
    </g>
  </svg>
);

// ───────── Power BI: dashboard on dark ─────────
export const PphBiArt = () => (
  <svg {...svgProps}>
    <rect
      x="24"
      y="28"
      width="306"
      height="200"
      rx="14"
      fill="#18232e"
      stroke="#ffffff"
      strokeOpacity="0.12"
    />
    <text
      x="42"
      y="56"
      fontSize="14"
      fontWeight="700"
      fill="#ffffff"
      fillOpacity="0.85"
    >
      Sales by month
    </text>
    <g stroke="#ffffff" strokeOpacity="0.12">
      <path d="M42 80h270M42 112h270M42 144h270M42 176h270" />
    </g>
    <path
      d="M42 176L42 150 80 138 118 146 156 116 194 124 232 96 270 104 312 78 312 176z"
      fill="#046999"
      fillOpacity="0.38"
    />
    <polyline
      points="42,150 80,138 118,146 156,116 194,124 232,96 270,104 312,78"
      fill="none"
      stroke="#6fc3e8"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <polyline
      points="42,166 80,160 118,162 156,150 194,154 232,140 270,144 312,128"
      fill="none"
      stroke="#ffffff"
      strokeOpacity="0.4"
      strokeWidth="2"
      strokeDasharray="5 5"
      strokeLinecap="round"
    />
    {[
      [156, 116],
      [232, 96],
      [312, 78],
    ].map(([x, y]) => (
      <circle
        key={x}
        cx={x}
        cy={y}
        r="5"
        fill="#111820"
        stroke="#6fc3e8"
        strokeWidth="3"
      />
    ))}
    <text x="42" y="200" fontSize="14" fill="#ffffff" fillOpacity="0.65">
      Jan
    </text>
    <text
      x="312"
      y="200"
      fontSize="14"
      fill="#ffffff"
      fillOpacity="0.65"
      textAnchor="end"
    >
      Dec
    </text>

    <rect
      x="344"
      y="28"
      width="112"
      height="200"
      rx="14"
      fill="#18232e"
      stroke="#ffffff"
      strokeOpacity="0.12"
    />
    <g transform="translate(400 90) rotate(-90)" fill="none" strokeWidth="14">
      <circle r="30" stroke="#1a2a3a" />
      <circle r="30" stroke="#6fc3e8" strokeDasharray="128 188" />
      <circle
        r="30"
        stroke="#046999"
        strokeDasharray="38 188"
        strokeDashoffset="-132"
      />
      <circle
        r="30"
        stroke="#9a9da1"
        strokeDasharray="14 188"
        strokeDashoffset="-174"
      />
    </g>
    <text
      x="400"
      y="96"
      fontSize="16"
      fontWeight="700"
      fill="#ffffff"
      textAnchor="middle"
    >
      68%
    </text>
    {[
      ["North", "#6fc3e8"],
      ["South", "#046999"],
      ["East", "#9a9da1"],
    ].map(([t, c], i) => (
      <g key={t}>
        <circle cx="362" cy={150 + i * 24} r="5" fill={c} />
        <text
          x="374"
          y={155 + i * 24}
          fontSize="14"
          fill="#ffffff"
          fillOpacity="0.85"
        >
          {t}
        </text>
      </g>
    ))}

    {[
      { x: 24, n: "$4.2m", l: "Revenue" },
      { x: 172, n: "+12%", l: "vs last year" },
      { x: 320, n: "96%", l: "On target" },
    ].map((k) => (
      <g key={k.l}>
        <rect
          x={k.x}
          y="244"
          width="136"
          height="76"
          rx="12"
          fill="#18232e"
          stroke="#ffffff"
          strokeOpacity="0.12"
        />
        <text
          x={k.x + 16}
          y="278"
          fontSize="24"
          fontWeight="700"
          fill="#ffffff"
        >
          {k.n}
        </text>
        <text
          x={k.x + 16}
          y="302"
          fontSize="14"
          fill="#ffffff"
          fillOpacity="0.65"
        >
          {k.l}
        </text>
      </g>
    ))}
  </svg>
);

// ───────── Power Automate: flow canvas on accent ─────────
export const PphAutomateArt = () => (
  <svg {...svgProps}>
    <rect x="24" y="24" width="432" height="292" rx="14" fill="#ffffff" />
    <g fill="#d4d6d9">
      {[
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
        20,
      ].map((c) =>
        [0, 1, 2, 3, 4, 5, 6, 7].map((r) => (
          <circle
            key={`${c}-${r}`}
            cx={40 + c * 20}
            cy={42 + r * 36}
            r="1.2"
            opacity="0.7"
          />
        )),
      )}
    </g>

    <rect
      x="44"
      y="46"
      width="140"
      height="42"
      rx="10"
      fill="#e8f4fa"
      stroke="#046999"
      strokeWidth="1.6"
    />
    <rect
      x="56"
      y="58"
      width="20"
      height="16"
      rx="3"
      fill="#ffffff"
      stroke="#046999"
      strokeWidth="1.4"
    />
    <path d="M56 60l10 8 10-8" fill="none" stroke="#046999" strokeWidth="1.4" />
    <text x="86" y="72" fontSize="14" fontWeight="700" fill="#034e72">
      Email arrives
    </text>

    <path
      d="M114 88v22"
      stroke="#046999"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path d="M114 114l-5-8h10z" fill="#046999" />
    <path
      d="M114 114l40 38-40 38-40-38z"
      fill="#ffffff"
      stroke="#046999"
      strokeWidth="1.8"
    />
    <text
      x="114"
      y="157"
      fontSize="14"
      fontWeight="700"
      fill="#0d1b2a"
      textAnchor="middle"
    >
      Check
    </text>

    <path
      d="M154 152h42"
      stroke="#046999"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path d="M206 152l-9-5v10z" fill="#046999" />
    <rect x="206" y="134" width="124" height="36" rx="9" fill="#046999" />
    <text
      x="268"
      y="157"
      fontSize="14"
      fontWeight="700"
      fill="#ffffff"
      textAnchor="middle"
    >
      Ask manager
    </text>
    <path
      d="M330 152h22"
      stroke="#046999"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path d="M356 152l-7-4.5v9z" fill="#046999" />
    <rect
      x="358"
      y="134"
      width="82"
      height="36"
      rx="9"
      fill="#e8f4fa"
      stroke="#046999"
      strokeWidth="1.6"
    />
    <text
      x="399"
      y="157"
      fontSize="14"
      fontWeight="700"
      fill="#034e72"
      textAnchor="middle"
    >
      Update
    </text>

    <path
      d="M114 190v18"
      stroke="#046999"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path d="M114 212l-5-8h10z" fill="#046999" />
    <rect
      x="44"
      y="214"
      width="140"
      height="42"
      rx="10"
      fill="#e8f4fa"
      stroke="#046999"
      strokeWidth="1.6"
    />
    <rect
      x="56"
      y="226"
      width="16"
      height="20"
      rx="3"
      fill="#ffffff"
      stroke="#046999"
      strokeWidth="1.4"
    />
    <path
      d="M60 233h8M60 238h8"
      stroke="#046999"
      strokeWidth="1.4"
      strokeLinecap="round"
    />
    <text x="82" y="240" fontSize="14" fontWeight="700" fill="#034e72">
      Save to list
    </text>

    <rect
      x="216"
      y="196"
      width="224"
      height="104"
      rx="10"
      fill="#f7f8f9"
      stroke="#e3e8ec"
    />
    <text x="230" y="218" fontSize="14" fontWeight="700" fill="#0d1b2a">
      Run history
    </text>
    {[
      ["Succeeded", "#0eaa0e"],
      ["Succeeded", "#0eaa0e"],
      ["Waiting", "#9a9da1"],
    ].map(([t, c], i) => (
      <g key={i}>
        <circle cx="236" cy={236 + i * 22} r="5" fill={c} />
        <text x="248" y={241 + i * 22} fontSize="14" fill="#4a5568">
          {t}
        </text>
        <rect
          x="350"
          y={232 + i * 22}
          width="74"
          height="6"
          rx="3"
          fill="#d4d6d9"
        />
      </g>
    ))}
  </svg>
);

// ───────── Power Pages: portal website on light ─────────
export const PphPagesArt = () => (
  <svg {...svgProps}>
    <rect
      x="24"
      y="28"
      width="432"
      height="284"
      rx="14"
      fill="#0d1b2a"
      opacity="0.06"
      transform="translate(6 8)"
    />
    <rect
      x="24"
      y="28"
      width="432"
      height="284"
      rx="14"
      fill="#ffffff"
      stroke="#d4d6d9"
    />
    <path
      d="M24 42a14 14 0 0 1 14-14h404a14 14 0 0 1 14 14v18H24z"
      fill="#f2f3f5"
    />
    <circle cx="44" cy="44" r="4" fill="#6fc3e8" />
    <circle cx="58" cy="44" r="4" fill="#d4d6d9" />
    <circle cx="72" cy="44" r="4" fill="#d4d6d9" />
    <rect
      x="92"
      y="35"
      width="190"
      height="18"
      rx="9"
      fill="#ffffff"
      stroke="#d4d6d9"
    />
    <rect x="102" y="41" width="8" height="7" rx="1.5" fill="#046999" />
    <path
      d="M103.5 41v-1.6a2.5 2.5 0 0 1 5 0V41"
      fill="none"
      stroke="#046999"
      strokeWidth="1.2"
    />
    <rect x="118" y="41" width="90" height="6" rx="3" fill="#9a9da1" />

    <circle cx="52" cy="80" r="8" fill="#046999" />
    <rect
      x="68"
      y="76"
      width="50"
      height="8"
      rx="4"
      fill="#0d1b2a"
      opacity="0.75"
    />
    <rect x="150" y="77" width="30" height="6" rx="3" fill="#d4d6d9" />
    <rect x="190" y="77" width="30" height="6" rx="3" fill="#d4d6d9" />
    <rect x="230" y="77" width="30" height="6" rx="3" fill="#d4d6d9" />

    <rect x="40" y="98" width="244" height="86" rx="10" fill="#046999" />
    <text x="56" y="128" fontSize="18" fontWeight="700" fill="#ffffff">
      Customer portal
    </text>
    <rect
      x="56"
      y="138"
      width="150"
      height="6"
      rx="3"
      fill="#ffffff"
      opacity="0.55"
    />
    <rect
      x="56"
      y="150"
      width="110"
      height="6"
      rx="3"
      fill="#ffffff"
      opacity="0.55"
    />
    <circle cx="246" cy="132" r="26" fill="#034e72" />
    <circle cx="246" cy="124" r="8" fill="#6fc3e8" />
    <path d="M230 148c2-12 30-12 32 0z" fill="#6fc3e8" />

    <rect
      x="40"
      y="196"
      width="244"
      height="104"
      rx="10"
      fill="#ffffff"
      stroke="#e3e8ec"
    />
    <text x="54" y="218" fontSize="14" fontWeight="700" fill="#0d1b2a">
      My requests
    </text>
    {[
      ["Open", "#e8f4fa", "#034e72"],
      ["Done", "#f2f3f5", "#4a5568"],
      ["Open", "#e8f4fa", "#034e72"],
    ].map(([t, bg, fg], i) => (
      <g key={i}>
        <path d={`M52 ${230 + i * 22}h232`} stroke="#e3e8ec" />
        <rect
          x="54"
          y={238 + i * 22 - 4}
          width={[82, 64, 74][i]}
          height="6"
          rx="3"
          fill="#0d1b2a"
          opacity="0.6"
        />
        <rect
          x="210"
          y={227 + i * 22}
          width="64"
          height="18"
          rx="9"
          fill={bg}
        />
        <text
          x="242"
          y={241 + i * 22}
          fontSize="14"
          fontWeight="700"
          fill={fg}
          textAnchor="middle"
        >
          {t}
        </text>
      </g>
    ))}

    <rect
      x="304"
      y="82"
      width="146"
      height="170"
      rx="12"
      fill="#0d1b2a"
      opacity="0.05"
    />
    <rect
      x="298"
      y="76"
      width="146"
      height="170"
      rx="12"
      fill="#ffffff"
      stroke="#d4d6d9"
    />
    <circle cx="371" cy="102" r="13" fill="#e8f4fa" />
    <rect x="365" y="102" width="12" height="9" rx="2" fill="#046999" />
    <path
      d="M367.5 102v-2.5a3.5 3.5 0 0 1 7 0V102"
      fill="none"
      stroke="#046999"
      strokeWidth="1.6"
    />
    <text
      x="371"
      y="138"
      fontSize="14"
      fontWeight="700"
      fill="#0d1b2a"
      textAnchor="middle"
    >
      Sign in
    </text>
    <rect
      x="312"
      y="148"
      width="118"
      height="24"
      rx="6"
      fill="#f7f8f9"
      stroke="#d4d6d9"
    />
    <rect x="320" y="157" width="56" height="6" rx="3" fill="#9a9da1" />
    <rect
      x="312"
      y="180"
      width="118"
      height="24"
      rx="6"
      fill="#f7f8f9"
      stroke="#d4d6d9"
    />
    <circle cx="324" cy="192" r="2.2" fill="#9a9da1" />
    <circle cx="332" cy="192" r="2.2" fill="#9a9da1" />
    <circle cx="340" cy="192" r="2.2" fill="#9a9da1" />
    <rect x="312" y="212" width="118" height="26" rx="6" fill="#046999" />
    <text
      x="371"
      y="230"
      fontSize="14"
      fontWeight="700"
      fill="#ffffff"
      textAnchor="middle"
    >
      Continue
    </text>

    <rect x="298" y="262" width="146" height="38" rx="19" fill="#e8f4fa" />
    <path
      d="M322 272l9 3v6c0 5-4 8-9 10-5-2-9-5-9-10v-6z"
      transform="translate(-4 -1)"
      fill="#046999"
    />
    <path
      d="M318 281l2.6 2.6 4.4-5"
      fill="none"
      stroke="#ffffff"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      transform="translate(-3 -0.5)"
    />
    <text x="344" y="286" fontSize="14" fontWeight="700" fill="#034e72">
      Secure access
    </text>
  </svg>
);
