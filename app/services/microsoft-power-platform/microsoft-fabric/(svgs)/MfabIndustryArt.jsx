// /app/services/microsoft-power-platform/microsoft-fabric/(svgs)/MfabIndustryArt.jsx
// One illustration per industry tab, drawn for the light accent panel.
// Decorative: the panel copy carries the meaning.
// Colours (tokens): #046999 $accent, #034e72 $accent-dark, #e8f4fa
// $accent-light, #cfe6f2 (light accent wash), #6fc3e8 $accent-on-dark,
// #111820 $dark-bg, #0d1b2a $text-primary, #4a5568 $text-secondary,
// #c0392b $replace-x, #ffffff $white.

const Svg = ({ children }) => (
  <svg viewBox="0 0 420 280" aria-hidden="true" focusable="false">
    {children}
  </svg>
);

const Card = ({ x, y, w, h, dark = false }) => (
  <rect
    x={x}
    y={y}
    width={w}
    height={h}
    rx="12"
    fill={dark ? "#111820" : "#ffffff"}
    stroke={dark ? "none" : "#cfe6f2"}
    strokeWidth="1.5"
  />
);

const Financial = () => {
  const rows = ["$1,240", "$86", "$9,900", "$312", "$54"];
  return (
    <Svg>
      <Card x={20} y={20} w={220} h={240} />
      <text x="40" y="50" fontSize="15" fontWeight="700" fill="#0d1b2a">
        Live transactions
      </text>
      {rows.map((amt, i) => {
        const y = 70 + i * 36;
        const flagged = i === 2;
        return (
          <g key={amt}>
            <rect
              x="36"
              y={y}
              width="188"
              height="28"
              rx="7"
              fill={flagged ? "#fdf6f5" : "#e8f4fa"}
              stroke={flagged ? "#c0392b" : "none"}
            />
            <circle
              cx="52"
              cy={y + 14}
              r="5"
              fill={flagged ? "#c0392b" : "#046999"}
            />
            <rect
              x="64"
              y={y + 11}
              width="58"
              height="6"
              rx="3"
              fill="#046999"
              fillOpacity="0.3"
            />
            <text
              x="214"
              y={y + 19}
              fontSize="14"
              fill={flagged ? "#c0392b" : "#0d1b2a"}
              textAnchor="end"
              fontWeight={flagged ? "700" : "400"}
            >
              {amt}
            </text>
          </g>
        );
      })}
      <path
        d="M240 158h22"
        stroke="#046999"
        strokeWidth="2"
        strokeDasharray="4 4"
      />
      <Card x={262} y={60} w={140} h={160} dark />
      <text
        x="332"
        y="90"
        fontSize="15"
        fontWeight="700"
        fill="#ffffff"
        textAnchor="middle"
      >
        Risk score
      </text>
      <path
        d="M292 168a40 40 0 0 1 80 0"
        fill="none"
        stroke="#ffffff"
        strokeOpacity="0.18"
        strokeWidth="10"
      />
      <path
        d="M292 168a40 40 0 0 1 64-32"
        fill="none"
        stroke="#6fc3e8"
        strokeWidth="10"
      />
      <path
        d="M332 168l24-24"
        stroke="#ffffff"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <circle cx="332" cy="168" r="5" fill="#ffffff" />
      <text x="332" y="200" fontSize="14" fill="#6fc3e8" textAnchor="middle">
        1 flagged
      </text>
    </Svg>
  );
};

const Healthcare = () => (
  <Svg>
    {["Clinic", "Pathology", "Bookings"].map((label, i) => {
      const y = 24 + i * 82;
      return (
        <g key={label}>
          <Card x={20} y={y} w={140} h={64} />
          <rect
            x="34"
            y={y + 14}
            width="22"
            height="28"
            rx="3"
            fill="#e8f4fa"
            stroke="#046999"
            strokeWidth="1.3"
          />
          <path
            d={`M39 ${y + 23}h12M39 ${y + 29}h12M39 ${y + 35}h8`}
            stroke="#046999"
            strokeOpacity="0.6"
          />
          <text x="66" y={y + 38} fontSize="15" fill="#0d1b2a">
            {label}
          </text>
          <path
            d={`M160 ${y + 32}C200 ${y + 32} 196 140 232 140`}
            fill="none"
            stroke="#046999"
            strokeWidth="1.8"
          />
        </g>
      );
    })}
    <Card x={232} y={40} w={168} h={216} />
    <circle cx="262" cy="76" r="14" fill="#cfe6f2" />
    <circle cx="262" cy="71" r="5" fill="#046999" />
    <path d="M253 84a10 8 0 0 1 18 0" fill="#046999" />
    <text x="284" y="74" fontSize="15" fontWeight="700" fill="#0d1b2a">
      One patient
    </text>
    <text x="284" y="92" fontSize="14" fill="#4a5568">
      full history
    </text>
    <path
      d="M248 140h28l8-18 10 34 8-24 6 8h76"
      fill="none"
      stroke="#c0392b"
      strokeWidth="2"
      strokeLinejoin="round"
    />
    <path
      d="M248 214l36-14 30 6 34-22 36-10"
      fill="none"
      stroke="#046999"
      strokeWidth="2"
    />
    <path
      d="M348 184l36-10"
      stroke="#046999"
      strokeWidth="2"
      strokeDasharray="4 4"
    />
    <text x="248" y="232" fontSize="14" fill="#4a5568">
      predicted outcome
    </text>
  </Svg>
);

const Retail = () => {
  const stores = [
    { label: "Store A", stock: 120 },
    { label: "Store B", stock: 64 },
    { label: "Store C", stock: 96 },
    { label: "Online", stock: 140 },
  ];
  return (
    <Svg>
      <Card x={20} y={20} w={380} h={240} />
      <text x="40" y="50" fontSize="15" fontWeight="700" fill="#0d1b2a">
        Stock by store
      </text>
      <text x="380" y="50" fontSize="14" fill="#046999" textAnchor="end">
        demand forecast
      </text>
      <path d="M40 216h340" stroke="#cfe6f2" strokeWidth="1.5" />
      {stores.map((s, i) => {
        const x = 60 + i * 82;
        const low = s.stock < 80;
        return (
          <g key={s.label}>
            <rect
              x={x}
              y={216 - s.stock}
              width="44"
              height={s.stock}
              rx="6"
              fill={low ? "#c0392b" : "#046999"}
              fillOpacity={low ? "0.85" : "1"}
            />
            <text
              x={x + 22}
              y="240"
              fontSize="14"
              fill="#4a5568"
              textAnchor="middle"
            >
              {s.label}
            </text>
          </g>
        );
      })}
      <path
        d="M82 104L164 128L246 116L328 70"
        fill="none"
        stroke="#111820"
        strokeWidth="2"
        strokeDasharray="6 5"
      />
      <g fill="#111820">
        <circle cx="82" cy="104" r="4" />
        <circle cx="164" cy="128" r="4" />
        <circle cx="246" cy="116" r="4" />
        <circle cx="328" cy="70" r="4" />
      </g>
      {/* reorder flag on the low store */}
      <rect x="148" y="140" width="76" height="26" rx="13" fill="#111820" />
      <text x="186" y="158" fontSize="14" fill="#ffffff" textAnchor="middle">
        reorder
      </text>
    </Svg>
  );
};

const Manufacturing = () => (
  <Svg>
    <Card x={20} y={30} w={170} h={220} />
    {/* machine with gear */}
    <rect
      x="44"
      y="120"
      width="122"
      height="80"
      rx="10"
      fill="#e8f4fa"
      stroke="#046999"
      strokeWidth="1.5"
    />
    <g transform="translate(86 160)">
      <circle r="18" fill="#046999" />
      {[0, 45, 90, 135, 180, 225, 270, 315].map((a) => (
        <rect
          key={a}
          x="-4"
          y="-25"
          width="8"
          height="10"
          rx="2"
          fill="#046999"
          transform={`rotate(${a})`}
        />
      ))}
      <circle r="7" fill="#e8f4fa" />
    </g>
    <circle cx="140" cy="146" r="6" fill="#6fc3e8" />
    <path
      d="M150 138a14 14 0 0 1 0 16M156 132a22 22 0 0 1 0 28"
      fill="none"
      stroke="#046999"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
    <text x="44" y="64" fontSize="15" fontWeight="700" fill="#0d1b2a">
      Line 3 press
    </text>
    <text x="44" y="86" fontSize="14" fill="#4a5568">
      vibration sensor
    </text>
    <path
      d="M190 140h26"
      stroke="#046999"
      strokeWidth="2"
      strokeDasharray="4 4"
    />
    <Card x={216} y={30} w={184} h={130} dark />
    <text x="234" y="60" fontSize="15" fontWeight="700" fill="#ffffff">
      Machine health
    </text>
    <path
      d="M234 128l20-6 20 4 20-14 20 2 20-22 20 -12"
      fill="none"
      stroke="#6fc3e8"
      strokeWidth="2"
      strokeLinejoin="round"
    />
    <path
      d="M234 92h150"
      stroke="#c0392b"
      strokeWidth="1.5"
      strokeDasharray="4 4"
    />
    <text x="236" y="86" fontSize="14" fill="#ffffff" fillOpacity="0.75">
      limit
    </text>
    <Card x={216} y={176} w={184} h={74} />
    <circle cx="238" cy="206" r="7" fill="#c0392b" />
    <text x="254" y="211" fontSize="15" fontWeight="700" fill="#0d1b2a">
      Service due
    </text>
    <text x="234" y="234" fontSize="14" fill="#4a5568">
      before it fails
    </text>
  </Svg>
);

const Government = () => (
  <Svg>
    {["Health", "Transport", "Planning"].map((label, i) => {
      const y = 22 + i * 82;
      return (
        <g key={label}>
          <Card x={20} y={y} w={150} h={64} />
          <path d={`M34 ${y + 26}l14-9 14 9z`} fill="#046999" />
          <path
            d={`M37 ${y + 28}v16M43 ${y + 28}v16M53 ${y + 28}v16M59 ${y + 28}v16M34 ${y + 46}h28`}
            stroke="#046999"
            strokeWidth="2"
          />
          <text x="74" y={y + 38} fontSize="15" fill="#0d1b2a">
            {label}
          </text>
          <path
            d={`M170 ${y + 32}C206 ${y + 32} 200 140 236 140`}
            fill="none"
            stroke="#046999"
            strokeWidth="1.8"
          />
        </g>
      );
    })}
    <Card x={236} y={30} w={164} h={220} />
    <text x="254" y="60" fontSize="15" fontWeight="700" fill="#0d1b2a">
      Annual report
    </text>
    <path
      d="M254 80h110M254 96h90M254 112h104"
      stroke="#046999"
      strokeOpacity="0.35"
      strokeWidth="5"
      strokeLinecap="round"
    />
    <g fill="#046999">
      <rect x="256" y="168" width="16" height="30" rx="2" />
      <rect x="280" y="152" width="16" height="46" rx="2" fill="#6fc3e8" />
      <rect x="304" y="144" width="16" height="54" rx="2" />
    </g>
    <circle
      cx="364"
      cy="184"
      r="22"
      fill="none"
      stroke="#034e72"
      strokeWidth="2.4"
      strokeDasharray="5 3"
    />
    <path
      d="M354 184l7 7 13-14"
      fill="none"
      stroke="#034e72"
      strokeWidth="2.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <text x="254" y="230" fontSize="14" fill="#4a5568">
      compliant, on time
    </text>
  </Svg>
);

export const MfabIndustryArt = ({ type }) => {
  switch (type) {
    case "financial":
      return <Financial />;
    case "healthcare":
      return <Healthcare />;
    case "retail":
      return <Retail />;
    case "manufacturing":
      return <Manufacturing />;
    default:
      return <Government />;
  }
};
