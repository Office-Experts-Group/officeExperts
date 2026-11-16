// /app/services/microsoft-power-platform/microsoft-power-pages/(svgs)/PpgVisualArt.jsx
// Three mockups for the visualisation tabs, drawn on a light panel.
// Hex values and tokens: #046999 $accent, #e8f4fa $accent-light,
// #6fc3e8 $accent-on-dark, #034e72 $accent-dark, #0d1b2a $text-primary,
// #4a5568 $text-secondary, #f7f8f9 $light-bg, #e3e8ec $line,
// #d4d6d9 $line-strong, #111820 $dark-bg, #ffffff $white.

const common = {
  viewBox: "0 0 480 340",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  fontFamily: "aptos",
  role: "img",
};

const Window = () => (
  <>
    <rect
      x="8"
      y="8"
      width="464"
      height="324"
      rx="14"
      fill="#ffffff"
      stroke="#d4d6d9"
      strokeWidth="1.5"
    />
    <path
      d="M8 22 a14 14 0 0 1 14 -14 H458 a14 14 0 0 1 14 14 V44 H8 Z"
      fill="#f7f8f9"
    />
    <circle cx="26" cy="26" r="4.5" fill="#d4d6d9" />
    <circle cx="42" cy="26" r="4.5" fill="#d4d6d9" />
    <circle cx="58" cy="26" r="4.5" fill="#d4d6d9" />
    <path d="M8 44 H472" stroke="#e3e8ec" />
  </>
);

export const PpgPowerBiMockup = () => (
  <svg {...common} aria-labelledby="ppg-vis-powerbi-title ppg-vis-powerbi-desc">
    <title id="ppg-vis-powerbi-title">An embedded dashboard in a portal</title>
    <desc id="ppg-vis-powerbi-desc">
      A portal page with a role label, three summary tiles, a bar chart and a
      donut chart.
    </desc>
    <Window />
    <rect x="326" y="14" width="132" height="24" rx="12" fill="#e8f4fa" />
    <text
      x="392"
      y="31"
      textAnchor="middle"
      fontSize="14"
      fontWeight="700"
      fill="#046999"
    >
      Supplier view
    </text>

    {[24, 168, 312].map((x, i) => (
      <g key={x}>
        <rect x={x} y="60" width="144" height="70" rx="10" fill="#f7f8f9" />
        <text x={x + 14} y="84" fontSize="14" fill="#4a5568">
          {["Orders", "On time", "Spend"][i]}
        </text>
        <rect
          x={x + 14}
          y="96"
          width={[56, 72, 48][i]}
          height="16"
          rx="4"
          fill="#046999"
        />
        <rect
          x={x + 76 + (i === 1 ? 14 : 0)}
          y="100"
          width="40"
          height="8"
          rx="4"
          fill="#6fc3e8"
          fillOpacity="0.5"
        />
      </g>
    ))}

    <rect x="24" y="146" width="268" height="172" rx="10" fill="#f7f8f9" />
    <path d="M40 284 H276 M40 250 H276 M40 216 H276" stroke="#e3e8ec" />
    {[40, 62, 84, 106, 128, 150].map((h, i) => (
      <rect
        key={i}
        x={46 + i * 38}
        y={284 - h}
        width="24"
        height={h}
        rx="4"
        fill={i === 5 ? "#046999" : "#6fc3e8"}
        fillOpacity={i === 5 ? 1 : 0.55}
      />
    ))}
    <text x="40" y="168" fontSize="14" fontWeight="700" fill="#0d1b2a">
      Deliveries by month
    </text>

    <rect x="304" y="146" width="152" height="172" rx="10" fill="#f7f8f9" />
    <circle cx="380" cy="228" r="38" stroke="#e8f4fa" strokeWidth="18" />
    <circle
      cx="380"
      cy="228"
      r="38"
      stroke="#046999"
      strokeWidth="18"
      strokeDasharray="110 239"
      transform="rotate(-90 380 228)"
    />
    <circle
      cx="380"
      cy="228"
      r="38"
      stroke="#6fc3e8"
      strokeWidth="18"
      strokeDasharray="52 239"
      strokeDashoffset="-110"
      transform="rotate(-90 380 228)"
    />
    <text
      x="380"
      y="304"
      textAnchor="middle"
      fontSize="14"
      fontWeight="700"
      fill="#0d1b2a"
    >
      By region
    </text>
  </svg>
);

export const PpgNativeMockup = () => (
  <svg {...common} aria-labelledby="ppg-vis-native-title ppg-vis-native-desc">
    <title id="ppg-vis-native-title">
      A filterable list built in the studio
    </title>
    <desc id="ppg-vis-native-desc">
      A portal page with a filter panel on the left and a sortable, paged table
      of records on the right.
    </desc>
    <Window />

    <rect x="24" y="60" width="116" height="256" rx="10" fill="#f7f8f9" />
    <text x="38" y="86" fontSize="14" fontWeight="700" fill="#0d1b2a">
      Filters
    </text>
    {[104, 132, 160].map((y, i) => (
      <g key={y}>
        <rect
          x="38"
          y={y}
          width="16"
          height="16"
          rx="4"
          fill={i === 1 ? "#046999" : "#ffffff"}
          stroke="#046999"
          strokeWidth="1.5"
        />
        {i === 1 && (
          <path
            d="M42 112 l3 3 5 -6"
            stroke="#ffffff"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        )}
        <rect
          x="62"
          y={y + 5}
          width={[48, 38, 54][i]}
          height="6"
          rx="3"
          fill="#d4d6d9"
        />
      </g>
    ))}
    <rect
      x="38"
      y="196"
      width="88"
      height="28"
      rx="8"
      fill="#ffffff"
      stroke="#d4d6d9"
    />
    <rect x="46" y="207" width="40" height="6" rx="3" fill="#d4d6d9" />
    <path
      d="M108 208 l4 4 4 -4"
      stroke="#4a5568"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <rect x="38" y="272" width="88" height="30" rx="8" fill="#046999" />
    <text
      x="82"
      y="292"
      textAnchor="middle"
      fontSize="14"
      fontWeight="700"
      fill="#ffffff"
    >
      Apply
    </text>

    <rect
      x="152"
      y="60"
      width="304"
      height="256"
      rx="10"
      fill="#ffffff"
      stroke="#e3e8ec"
    />
    <rect x="152" y="60" width="304" height="30" rx="10" fill="#e8f4fa" />
    <text x="168" y="80" fontSize="14" fontWeight="700" fill="#046999">
      Name
    </text>
    <text x="296" y="80" fontSize="14" fontWeight="700" fill="#046999">
      Status
    </text>
    <path
      d="M370 72 l4 -4 4 4 M370 78 l4 4 4 -4"
      stroke="#046999"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {[0, 1, 2, 3, 4].map((i) => (
      <g key={i}>
        <rect
          x="168"
          y={108 + i * 36}
          width={[84, 70, 92, 64, 78][i]}
          height="7"
          rx="3.5"
          fill="#d4d6d9"
        />
        <rect
          x="288"
          y={100 + i * 36}
          width="62"
          height="22"
          rx="11"
          fill={i % 2 === 0 ? "#e8f4fa" : "#046999"}
        />
        <rect
          x="302"
          y={108 + i * 36}
          width="34"
          height="6"
          rx="3"
          fill={i % 2 === 0 ? "#046999" : "#ffffff"}
        />
        <rect
          x="396"
          y={108 + i * 36}
          width="40"
          height="7"
          rx="3.5"
          fill="#e3e8ec"
        />
        <path d={`M160 ${126 + i * 36} H448`} stroke="#e3e8ec" />
      </g>
    ))}
    <text x="168" y="304" fontSize="14" fill="#4a5568">
      Showing 1–5
    </text>
    {[0, 1, 2].map((i) => (
      <rect
        key={i}
        x={380 + i * 24}
        y="288"
        width="20"
        height="20"
        rx="5"
        fill={i === 0 ? "#046999" : "#f7f8f9"}
        stroke={i === 0 ? "#046999" : "#d4d6d9"}
      />
    ))}
  </svg>
);

export const PpgCustomMockup = () => (
  <svg {...common} aria-labelledby="ppg-vis-custom-title ppg-vis-custom-desc">
    <title id="ppg-vis-custom-title">
      A custom chart added with JavaScript
    </title>
    <desc id="ppg-vis-custom-desc">
      A code editor beside a custom area chart with highlighted data points,
      standing for a visual added to the portal with JavaScript.
    </desc>
    <Window />

    <rect x="24" y="60" width="200" height="256" rx="10" fill="#111820" />
    <circle cx="40" cy="78" r="4" fill="#6fc3e8" />
    <circle cx="54" cy="78" r="4" fill="#ffffff" fillOpacity="0.3" />
    {[
      [0, 64, "#6fc3e8"],
      [14, 88, "#ffffff"],
      [14, 52, "#ffffff"],
      [28, 72, "#6fc3e8"],
      [28, 96, "#ffffff"],
      [28, 44, "#ffffff"],
      [14, 30, "#ffffff"],
      [0, 80, "#6fc3e8"],
      [14, 100, "#ffffff"],
      [28, 60, "#ffffff"],
      [14, 36, "#ffffff"],
      [0, 24, "#6fc3e8"],
    ].map(([indent, w, fill], i) => (
      <rect
        key={i}
        x={40 + indent}
        y={98 + i * 17}
        width={w}
        height="7"
        rx="3.5"
        fill={fill}
        fillOpacity={fill === "#ffffff" ? 0.5 : 0.95}
      />
    ))}

    <rect x="240" y="60" width="216" height="256" rx="10" fill="#f7f8f9" />
    <text x="256" y="86" fontSize="14" fontWeight="700" fill="#0d1b2a">
      Custom chart
    </text>
    <path
      d="M256 280 H440 M256 240 H440 M256 200 H440 M256 160 H440"
      stroke="#e3e8ec"
    />
    <path
      d="M256 262 C282 250 292 200 318 212 C344 224 352 168 380 176 C406 184 416 132 440 124 V280 H256 Z"
      fill="#6fc3e8"
      fillOpacity="0.28"
    />
    <path
      d="M256 262 C282 250 292 200 318 212 C344 224 352 168 380 176 C406 184 416 132 440 124"
      stroke="#046999"
      strokeWidth="3"
      strokeLinecap="round"
    />
    {[
      [318, 212],
      [380, 176],
      [440, 124],
    ].map(([cx, cy]) => (
      <circle
        key={cx}
        cx={cx}
        cy={cy}
        r="6"
        fill="#ffffff"
        stroke="#046999"
        strokeWidth="3"
      />
    ))}
    <rect x="332" y="82" width="104" height="30" rx="8" fill="#0d1b2a" />
    <path d="M424 112 l8 9 8 -9 Z" fill="#0d1b2a" />
    <rect x="344" y="92" width="44" height="6" rx="3" fill="#6fc3e8" />
    <rect
      x="344"
      y="102"
      width="30"
      height="5"
      rx="2.5"
      fill="#ffffff"
      fillOpacity="0.55"
    />
  </svg>
);
