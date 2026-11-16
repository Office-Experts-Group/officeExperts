// /app/blog/power-bi-licensing-costs/(svgs)/MistakeSketches.jsx
// Five "Avoid" vs "Do this" sketches. Avoid = slate, dashed frame, messy. Do this = accent, clean.
// Hex values: #f1f5f9 and #94a3b8 slate tints, #64748b slate ink, #e8f4fa $accent-light,
// #046999 $accent, #034e72 $accent-dark, #0b2433 $ink, #9fd0e8 mid accent tint.

const SLATE = "#94a3b8";
const SLATE_INK = "#64748b";
const ACC = "#046999";
const ACC_DARK = "#034e72";
const ACC_MID = "#9fd0e8";

const Frame = ({ title, desc, id, children }) => (
  <svg
    viewBox="0 0 280 150"
    role="img"
    aria-labelledby={`${id}-title ${id}-desc`}
    fontFamily="aptos, 'Segoe UI', Arial, sans-serif"
  >
    <title id={`${id}-title`}>{title}</title>
    <desc id={`${id}-desc`}>{desc}</desc>
    <rect
      x="4"
      y="4"
      width="130"
      height="142"
      rx="14"
      fill="#f1f5f9"
      stroke={SLATE}
      strokeWidth="2"
      strokeDasharray="6 5"
    />
    <rect
      x="146"
      y="4"
      width="130"
      height="142"
      rx="14"
      fill="#e8f4fa"
      stroke="rgba(4,105,153,0.28)"
      strokeWidth="2"
    />
    <text x="18" y="28" fontSize="14" fontWeight="700" fill={SLATE_INK}>
      Avoid
    </text>
    <text x="160" y="28" fontSize="14" fontWeight="700" fill={ACC}>
      Do this
    </text>
    {children}
  </svg>
);

const Person = ({ x, y, fill, rotate = 0 }) => (
  <g transform={`rotate(${rotate} ${x} ${y})`}>
    <circle cx={x} cy={y} r="4.4" fill={fill} />
    <path d={`M${x - 7.5} ${y + 15}a7.5 7.5 0 0 1 15 0z`} fill={fill} />
  </g>
);

// 1. Pro for everyone vs match the licence to the role
export const EveryoneSketch = () => (
  <Frame
    id="pbl-m1"
    title="Licence everyone versus match licences to roles"
    desc="Left: twelve people each carrying an identical licence tag. Right: two creators with Pro tags and a group of viewers covered by one shared capacity bracket."
  >
    {[0, 1, 2, 3].flatMap((c) =>
      [0, 1, 2].map((r) => (
        <g key={`${c}-${r}`}>
          <Person
            x={30 + c * 26}
            y={52 + r * 30}
            fill={SLATE}
            rotate={(c + r) % 2 ? 4 : -5}
          />
          <rect
            x={22 + c * 26}
            y={68 + r * 30 - 6}
            width="16"
            height="5"
            rx="2.5"
            fill={SLATE_INK}
            opacity="0.55"
          />
        </g>
      )),
    )}
    {[0, 1].map((i) => (
      <g key={i}>
        <Person x={178 + i * 32} y={52} fill={ACC} />
        <rect
          x={168 + i * 32}
          y={66}
          width="20"
          height="7"
          rx="3.5"
          fill={ACC_DARK}
        />
      </g>
    ))}
    <path d="M160 88h104" stroke={ACC} strokeWidth="2" strokeLinecap="round" />
    <path
      d="M160 88v-6M264 88v-6"
      stroke={ACC}
      strokeWidth="2"
      strokeLinecap="round"
    />
    {[0, 1, 2, 3, 4].map((i) => (
      <Person key={i} x={170 + i * 22} y={106} fill={ACC_MID} />
    ))}
  </Frame>
);

// 2. Proof of concept priced as final vs costed at full scale
export const ScaleSketch = () => (
  <Frame
    id="pbl-m2"
    title="Proof of concept cost versus full rollout cost"
    desc="Left: one small bar for the proof of concept and a faded, unknown bar with a question mark. Right: a small proof of concept bar and a tall rollout bar, both drawn and labelled with growth."
  >
    <rect x="30" y="110" width="26" height="22" rx="3" fill={SLATE} />
    <rect
      x="72"
      y="52"
      width="26"
      height="80"
      rx="3"
      fill="none"
      stroke={SLATE}
      strokeWidth="2"
      strokeDasharray="5 4"
    />
    <path
      d="M85 80v-4a5 5 0 1 1 5 5c-3 0-5 1.5-5 4M85 92h.01"
      fill="none"
      stroke={SLATE_INK}
      strokeWidth="2.6"
      strokeLinecap="round"
      transform="translate(-1 -2)"
    />
    <path d="M20 134h104" stroke={SLATE} strokeWidth="2" />
    <rect x="170" y="110" width="26" height="22" rx="3" fill={ACC_MID} />
    <rect x="224" y="46" width="26" height="86" rx="3" fill={ACC} />
    <path
      d="M180 100C196 82 212 70 232 50"
      fill="none"
      stroke={ACC_DARK}
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeDasharray="1 6"
    />
    <path
      d="M226 54l7-6 2 9"
      fill="none"
      stroke={ACC_DARK}
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      transform="translate(-2 -2)"
    />
    <path d="M160 134h104" stroke={ACC} strokeWidth="2" />
  </Frame>
);

// 3. Compliance review at the end vs at the start
export const ComplianceSketchTimeline = () => (
  <Frame
    id="pbl-m3"
    title="Compliance review late versus early"
    desc="Left: a project timeline with the compliance flag planted at the very end beside a warning triangle. Right: the same timeline with the compliance flag at the start."
  >
    <path
      d="M20 100h104"
      stroke={SLATE}
      strokeWidth="3"
      strokeLinecap="round"
    />
    {[26, 54, 82].map((x) => (
      <circle
        key={x}
        cx={x}
        cy="100"
        r="5"
        fill="#f1f5f9"
        stroke={SLATE}
        strokeWidth="2.5"
      />
    ))}
    <path
      d="M112 100V58"
      stroke={SLATE_INK}
      strokeWidth="3"
      strokeLinecap="round"
    />
    <path
      d="M112 58l-18 7 18 7z"
      fill={SLATE_INK}
      transform="translate(-6 -2) rotate(-5 112 62)"
    />
    <path
      d="M68 52l12 20H56z"
      fill="none"
      stroke={SLATE_INK}
      strokeWidth="2.6"
      strokeLinejoin="round"
    />
    <path
      d="M68 59v6M68 69h.01"
      stroke={SLATE_INK}
      strokeWidth="2.4"
      strokeLinecap="round"
    />
    <path d="M162 100h104" stroke={ACC} strokeWidth="3" strokeLinecap="round" />
    {[196, 224, 252].map((x) => (
      <circle
        key={x}
        cx={x}
        cy="100"
        r="5"
        fill="#ffffff"
        stroke={ACC}
        strokeWidth="2.5"
      />
    ))}
    <path
      d="M164 100V54"
      stroke={ACC_DARK}
      strokeWidth="3"
      strokeLinecap="round"
    />
    <path d="M164 54l22 8-22 8z" fill={ACC} />
    <path
      d="M196 66l4 4 8-9"
      fill="none"
      stroke={ACC_DARK}
      strokeWidth="2.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      transform="translate(0 -4)"
    />
  </Frame>
);

// 4. Never reviewing assignments vs trimming idle seats
export const AuditSketch = () => (
  <Frame
    id="pbl-m4"
    title="Seats never reviewed versus idle seats removed"
    desc="Left: four user rows, each still paying a coin even though two have been idle. Right: the same four rows, with the idle ones crossed out and their coin removed."
  >
    {[0, 1, 2, 3].map((r) => {
      const idle = r === 1 || r === 3;
      return (
        <g key={r}>
          <circle
            cx="28"
            cy={52 + r * 22}
            r="6"
            fill={idle ? "#f1f5f9" : SLATE}
            stroke={SLATE}
            strokeWidth="2"
          />
          <rect
            x="42"
            y={47 + r * 22}
            width="46"
            height="9"
            rx="4.5"
            fill={idle ? "#e2e8f0" : SLATE}
          />
          <circle
            cx="112"
            cy={52 + r * 22}
            r="7.5"
            fill="#f1f5f9"
            stroke={SLATE_INK}
            strokeWidth="2.4"
          />
          <path
            d={`M112 ${48.5 + r * 22}v7M109.5 ${50 + r * 22}h5a2 2 0 0 1 0 3.5h-5a2 2 0 0 0 0 3.5h5`}
            fill="none"
            stroke={SLATE_INK}
            strokeWidth="1.4"
            strokeLinecap="round"
            transform={`translate(0 ${0})`}
          />
        </g>
      );
    })}
    {[0, 1, 2, 3].map((r) => {
      const idle = r === 1 || r === 3;
      return (
        <g key={r}>
          <circle
            cx="170"
            cy={52 + r * 22}
            r="6"
            fill={idle ? "#ffffff" : ACC}
            stroke={ACC}
            strokeWidth="2"
          />
          <rect
            x="184"
            y={47 + r * 22}
            width="46"
            height="9"
            rx="4.5"
            fill={idle ? ACC_MID : ACC}
          />
          {idle ? (
            <>
              <path
                d={`M182 ${51.5 + r * 22}H234`}
                stroke={ACC_DARK}
                strokeWidth="2.4"
                strokeLinecap="round"
              />
              <circle
                cx="254"
                cy={52 + r * 22}
                r="7.5"
                fill="none"
                stroke={ACC_MID}
                strokeWidth="2.4"
                strokeDasharray="3 3"
              />
            </>
          ) : (
            <circle
              cx="254"
              cy={52 + r * 22}
              r="7.5"
              fill="#ffffff"
              stroke={ACC}
              strokeWidth="2.4"
            />
          )}
        </g>
      );
    })}
  </Frame>
);

// 5. Forgetting the gateway vs pricing the whole setup
export const GatewayPlanSketch = () => (
  <Frame
    id="pbl-m5"
    title="Licence price only versus the full setup price"
    desc="Left: a cloud with a price tag and a faded dashed server box with a question mark that nobody has costed. Right: the cloud, a solid linked server, and both costs added together."
  >
    <path
      d="M44 74a9 9 0 0 1-1-17.8A13 13 0 0 1 68 52a10 10 0 0 1 9 20z"
      fill="#e2e8f0"
      stroke={SLATE}
      strokeWidth="2.4"
      strokeLinejoin="round"
      transform="translate(0 -6)"
    />
    <rect
      x="22"
      y="104"
      width="46"
      height="30"
      rx="5"
      fill="none"
      stroke={SLATE}
      strokeWidth="2.2"
      strokeDasharray="5 4"
    />
    <path
      d="M40 116v-1a5 5 0 1 1 5 5v3M45 128h.01"
      fill="none"
      stroke={SLATE_INK}
      strokeWidth="2.2"
      strokeLinecap="round"
    />
    <path d="M84 56h28l8 8-8 8H84z" fill={SLATE} />
    <circle cx="92" cy="64" r="2.4" fill="#f1f5f9" />
    <path
      d="M44 74v26"
      stroke={SLATE}
      strokeWidth="2"
      strokeDasharray="3 5"
      strokeLinecap="round"
    />
    <path
      d="M186 74a9 9 0 0 1-1-17.8A13 13 0 0 1 210 52a10 10 0 0 1 9 20z"
      fill="#ffffff"
      stroke={ACC}
      strokeWidth="2.4"
      strokeLinejoin="round"
      transform="translate(0 -6)"
    />
    <rect x="164" y="104" width="46" height="13" rx="4" fill={ACC} />
    <rect x="164" y="120" width="46" height="13" rx="4" fill={ACC_DARK} />
    <circle cx="172" cy="110.5" r="2" fill={ACC_MID} />
    <circle cx="172" cy="126.5" r="2" fill={ACC_MID} />
    <path d="M186 74v26" stroke={ACC} strokeWidth="2.4" strokeLinecap="round" />
    <path
      d="M226 106h20M236 96v20"
      stroke={ACC_DARK}
      strokeWidth="3"
      strokeLinecap="round"
    />
    <path d="M222 58h28l8 8-8 8h-28z" fill={ACC} transform="translate(-4 -2)" />
    <circle cx="228" cy="64" r="2.4" fill="#e8f4fa" />
  </Frame>
);
