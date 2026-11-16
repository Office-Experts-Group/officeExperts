// /app/services/microsoft-power-platform/ai-with-power-platform/(svgs)/AippStackSvg.jsx
// Informative diagram pinned beside the scenarios: the five layers an AI
// integration touches inside Power Platform. The two middle layers (the AI
// itself, and the workflows and apps around it) are the ones we build.
// Drawn for a dark panel.
// Colours (hex, with matching globals.scss tokens):
//   #18232e $dark-surface · #1a2a3a $dark-mid · #046999 $accent
//   #6fc3e8 $accent-on-dark · #ffffff $white · #034e72 $accent-dark

const LAYERS = [
  { y: 24, title: "People", sub: "Teams · Outlook · intranet", tone: "base" },
  {
    y: 102,
    title: "AI agents and steps",
    sub: "Copilot Studio · AI Builder",
    tone: "accent",
  },
  {
    y: 180,
    title: "Workflows and apps",
    sub: "Power Automate · Power Apps",
    tone: "accent",
  },
  {
    y: 258,
    title: "Your data",
    sub: "SharePoint · Dataverse · Power BI",
    tone: "base",
  },
  {
    y: 336,
    title: "Identity and audit",
    sub: "Tenant permissions · logs",
    tone: "base",
  },
];

const Glyph = ({ index, x, y }) => {
  // 36 x 36 glyph, one per layer
  switch (index) {
    case 0:
      return (
        <g
          transform={`translate(${x} ${y})`}
          fill="none"
          stroke="#6fc3e8"
          strokeWidth="1.8"
          strokeLinecap="round"
        >
          <circle cx="11" cy="11" r="5" />
          <path d="M2 30c0-5 4-9 9-9s9 4 9 9" />
          <circle cx="26" cy="13" r="4" />
          <path d="M22 28c0-4 2-6 5-6s6 2 6 6" />
        </g>
      );
    case 1:
      return (
        <g transform={`translate(${x} ${y})`}>
          <path
            d="M18 3C19 12 24 17 33 18C24 19 19 24 18 33C17 24 12 19 3 18C12 17 17 12 18 3Z"
            fill="#ffffff"
          />
        </g>
      );
    case 2:
      return (
        <g
          transform={`translate(${x} ${y})`}
          fill="none"
          stroke="#ffffff"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="2" y="6" width="10" height="8" rx="2" />
          <rect x="24" y="6" width="10" height="8" rx="2" />
          <rect x="13" y="22" width="10" height="8" rx="2" />
          <path d="M12 10h12M7 14v4h22v-4M18 18v4" />
        </g>
      );
    case 3:
      return (
        <g
          transform={`translate(${x} ${y})`}
          fill="none"
          stroke="#6fc3e8"
          strokeWidth="1.8"
        >
          <ellipse cx="18" cy="8" rx="13" ry="5" />
          <path d="M5 8v18c0 3 6 5 13 5s13-2 13-5V8" />
          <path d="M5 17c0 3 6 5 13 5s13-2 13-5" />
        </g>
      );
    default:
      return (
        <g
          transform={`translate(${x} ${y})`}
          fill="none"
          stroke="#6fc3e8"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M18 3l13 5v10c0 8-6 13-13 16C11 31 5 26 5 18V8z" />
          <path d="M12 18l4.5 4.5L25 14" />
        </g>
      );
  }
};

const AippStackSvg = () => (
  <svg
    viewBox="0 0 420 440"
    role="img"
    aria-labelledby="aipp-stack-title aipp-stack-desc"
    focusable="false"
  >
    <title id="aipp-stack-title">
      The five layers of an AI integration inside Power Platform
    </title>
    <desc id="aipp-stack-desc">
      From top to bottom: the people who use it in Teams, Outlook and your
      intranet; the AI agents and steps built in Copilot Studio and AI Builder;
      the workflows and apps in Power Automate and Power Apps; your data in
      SharePoint, Dataverse and Power BI; and identity and audit, which is your
      tenant permissions and logs. The AI and the workflow layers are the ones
      we build.
    </desc>

    {LAYERS.map((layer, i) => (
      <g key={layer.title}>
        <rect
          x="20"
          y={layer.y}
          width="380"
          height="64"
          rx="14"
          fill={layer.tone === "accent" ? "#046999" : "#1a2a3a"}
          stroke={layer.tone === "accent" ? "#6fc3e8" : "#ffffff"}
          strokeOpacity={layer.tone === "accent" ? 0.9 : 0.14}
        />
        <Glyph index={i} x={40} y={layer.y + 14} />
        <text
          x="92"
          y={layer.y + 27}
          fontSize="15"
          fontWeight="700"
          fontFamily="aptos"
          fill="#ffffff"
        >
          {layer.title}
        </text>
        <text
          x="92"
          y={layer.y + 47}
          fontSize="14"
          fontFamily="aptos"
          fill="#ffffff"
          fillOpacity="0.8"
        >
          {layer.sub}
        </text>
        {layer.tone === "accent" && (
          <g>
            <rect
              x="304"
              y={layer.y + 21}
              width="84"
              height="22"
              rx="11"
              fill="#111820"
            />
            <text
              x="346"
              y={layer.y + 37}
              textAnchor="middle"
              fontSize="14"
              fontWeight="700"
              fontFamily="aptos"
              fill="#6fc3e8"
            >
              We build
            </text>
          </g>
        )}
        {i < LAYERS.length - 1 && (
          <path
            d={`M210 ${layer.y + 66}v10`}
            stroke="#6fc3e8"
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray="2 4"
          />
        )}
      </g>
    ))}
  </svg>
);

export default AippStackSvg;
