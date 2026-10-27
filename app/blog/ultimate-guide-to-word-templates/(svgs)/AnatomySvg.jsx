// /app/blog/ultimate-guide-to-word-templates/(svgs)/AnatomySvg.jsx
// Annotated template: six things a template can contain, as numbered pins.
// Theme values used: $accent #046999, $accent-light #e8f4fa, $text-primary #0d1b2a,
// $text-secondary #4a5568, $border rgba(0,0,0,0.08).

const callouts = [
  {
    n: 1,
    side: "L",
    y: 92,
    title: "Page layouts",
    sub: "Margins, orientation",
  },
  { n: 2, side: "L", y: 220, title: "Styles", sub: "Headings and body" },
  {
    n: 3,
    side: "L",
    y: 348,
    title: "Standard text",
    sub: "Boilerplate content",
  },
  { n: 4, side: "R", y: 60, title: "Branding", sub: "Logos and colours" },
  { n: 5, side: "R", y: 188, title: "Toolbars", sub: "Custom menus" },
  { n: 6, side: "R", y: 348, title: "Macros", sub: "Automation scripts" },
];

// Pin positions on the page (x, y), in the same order as callouts.
const pins = [
  [236, 124],
  [236, 236],
  [236, 372],
  [404, 80],
  [404, 42],
  [404, 440],
];

export default function AnatomySvg() {
  return (
    <svg
      viewBox="0 0 640 500"
      role="img"
      aria-labelledby="uwt-anatomy-title uwt-anatomy-desc"
      style={{ width: "100%", height: "auto", display: "block" }}
    >
      <title id="uwt-anatomy-title">What a Word template can contain</title>
      <desc id="uwt-anatomy-desc">
        A template page with six numbered markers: page layouts, styles and
        formatting, standard text, logos and branding, custom toolbars and
        menus, and macros.
      </desc>

      {/* page */}
      <rect
        x="220"
        y="30"
        width="200"
        height="440"
        rx="10"
        fill="#ffffff"
        stroke="#046999"
        strokeWidth="2"
      />
      {/* toolbar strip */}
      <path
        d="M220 40a10 10 0 0 1 10-10h180a10 10 0 0 1 10 10v14H220V40Z"
        fill="#e8f4fa"
      />
      <circle cx="238" cy="42" r="4" fill="#046999" />
      <circle cx="252" cy="42" r="4" fill="#046999" fillOpacity="0.5" />
      <circle cx="266" cy="42" r="4" fill="#046999" fillOpacity="0.3" />
      {/* header band + logo */}
      <rect x="220" y="54" width="200" height="52" fill="#046999" />
      <rect x="366" y="66" width="28" height="28" rx="7" fill="#ffffff" />
      <rect
        x="236"
        y="70"
        width="90"
        height="8"
        rx="4"
        fill="#ffffff"
        fillOpacity="0.9"
      />
      <rect
        x="236"
        y="86"
        width="56"
        height="6"
        rx="3"
        fill="#ffffff"
        fillOpacity="0.55"
      />
      {/* margin guide */}
      <rect
        x="236"
        y="124"
        width="168"
        height="296"
        rx="4"
        fill="none"
        stroke="#046999"
        strokeOpacity="0.45"
        strokeDasharray="5 4"
      />
      {/* heading style */}
      <rect x="248" y="140" width="110" height="14" rx="4" fill="#0d1b2a" />
      <rect
        x="248"
        y="162"
        width="60"
        height="9"
        rx="4"
        fill="#046999"
        fillOpacity="0.75"
      />
      {/* body lines */}
      {[190, 206, 222, 238].map((y, i) => (
        <rect
          key={y}
          x="248"
          y={y}
          width={i === 3 ? 90 : 144}
          height="7"
          rx="3.5"
          fill="#4a5568"
          fillOpacity="0.4"
        />
      ))}
      <rect
        x="248"
        y="268"
        width="80"
        height="9"
        rx="4"
        fill="#046999"
        fillOpacity="0.75"
      />
      {[292, 308].map((y) => (
        <rect
          key={y}
          x="248"
          y={y}
          width="144"
          height="7"
          rx="3.5"
          fill="#4a5568"
          fillOpacity="0.4"
        />
      ))}
      {/* boilerplate block */}
      <rect x="248" y="336" width="144" height="56" rx="6" fill="#e8f4fa" />
      <rect
        x="258"
        y="348"
        width="100"
        height="7"
        rx="3.5"
        fill="#046999"
        fillOpacity="0.55"
      />
      <rect
        x="258"
        y="364"
        width="120"
        height="7"
        rx="3.5"
        fill="#046999"
        fillOpacity="0.35"
      />
      {/* macro button */}
      <rect x="236" y="424" width="100" height="32" rx="8" fill="#0d1b2a" />
      <path d="M252 432v16l13-8-13-8Z" fill="#5bbce6" />
      <rect
        x="272"
        y="437"
        width="52"
        height="6"
        rx="3"
        fill="#ffffff"
        fillOpacity="0.7"
      />

      {/* callouts and leader lines */}
      {callouts.map((c, i) => {
        const [px, py] = pins[i];
        const bx = c.side === "L" ? 10 : 450;
        const edgeX = c.side === "L" ? bx + 180 : bx;
        const midY = c.y + 32;
        return (
          <g key={c.n}>
            <path
              d={`M${edgeX} ${midY}L${px} ${py}`}
              stroke="#046999"
              strokeWidth="1.5"
              strokeOpacity="0.55"
              fill="none"
            />
            <rect
              x={bx}
              y={c.y}
              width="180"
              height="64"
              rx="12"
              fill="#ffffff"
              stroke="#046999"
              strokeOpacity="0.28"
            />
            <circle cx={bx + 28} cy={midY} r="14" fill="#046999" />
            <text
              x={bx + 28}
              y={midY + 5}
              textAnchor="middle"
              fill="#ffffff"
              fontSize="14"
              fontWeight="700"
            >
              {c.n}
            </text>
            <text
              x={bx + 52}
              y={c.y + 28}
              fill="#0d1b2a"
              fontSize="15"
              fontWeight="700"
            >
              {c.title}
            </text>
            <text x={bx + 52} y={c.y + 48} fill="#4a5568" fontSize="14">
              {c.sub}
            </text>
            <circle
              cx={px}
              cy={py}
              r="6"
              fill="#ffffff"
              stroke="#046999"
              strokeWidth="2.5"
            />
          </g>
        );
      })}
    </svg>
  );
}
