// /app/blog/convert-canva-to-word/(svgs)/TransferMapSvg.jsx
// Shows what carries from Canva into Word and what has to be rebuilt or dropped.
// Colours: $accent #046999, $accent-light #e8f4fa, $replace-x #c0392b, $before-bg #fdf6f5.

const WORKS = [
  ["Layout and spacing", "Tables, text boxes, margins"],
  ["Fonts", "Installed or embedded fonts"],
  ["Colours", "RGB values or theme colours"],
  ["Logos and images", "Insert > Pictures"],
];

const FAILS = [
  ["Animations", "Not supported in Word"],
  ["Layered text effects", "Simplify, or flatten to an image"],
  ["Buttons and links", "Re-add as hyperlinks"],
];

const ROW = 46;
const TOP = 62;

const TransferMapSvg = () => (
  <svg
    viewBox="0 0 600 410"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-labelledby="ctw-map-title ctw-map-desc"
    style={{ width: "100%", height: "auto", display: "block" }}
  >
    <title id="ctw-map-title">What transfers from Canva to Word</title>
    <desc id="ctw-map-desc">
      Layout and spacing, fonts, colours, and logos and images all carry across
      to Word using tables, installed fonts, RGB colours and inserted pictures.
      Animations, layered text effects and buttons do not transfer and must be
      simplified, flattened or re-added as hyperlinks.
    </desc>

    <g fontFamily="system-ui, -apple-system, 'Segoe UI', sans-serif">
      <text
        x="10"
        y="28"
        fontSize="14"
        fontWeight="700"
        fill="#4a5568"
        letterSpacing="1.5"
      >
        IN CANVA
      </text>
      <text
        x="340"
        y="28"
        fontSize="14"
        fontWeight="700"
        fill="#4a5568"
        letterSpacing="1.5"
      >
        IN WORD
      </text>
      <line x1="10" y1="40" x2="590" y2="40" stroke="#0000001a" />

      {WORKS.map(([from, to], i) => {
        const y = TOP + i * ROW;
        return (
          <g key={from}>
            <rect
              x="10"
              y={y}
              width="220"
              height="36"
              rx="10"
              fill="#e8f4fa"
              stroke="#04699948"
            />
            <text
              x="26"
              y={y + 24}
              fontSize="16"
              fontWeight="600"
              fill="#0d1b2a"
            >
              {from}
            </text>
            <line
              x1="236"
              y1={y + 18}
              x2="312"
              y2={y + 18}
              stroke="#046999"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <path
              d={`M304 ${y + 11} L314 ${y + 18} L304 ${y + 25}`}
              fill="none"
              stroke="#046999"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <rect
              x="322"
              y={y}
              width="268"
              height="36"
              rx="10"
              fill="#ffffff"
              stroke="#046999"
              strokeWidth="1.5"
            />
            <circle cx="342" cy={y + 18} r="9" fill="#046999" />
            <path
              d={`M337.5 ${y + 18} L341 ${y + 21.5} L347 ${y + 14.5}`}
              fill="none"
              stroke="#fff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <text x="360" y={y + 23} fontSize="15" fill="#0d1b2a">
              {to}
            </text>
          </g>
        );
      })}

      {FAILS.map(([from, to], i) => {
        const y = TOP + (WORKS.length + i) * ROW + 10;
        return (
          <g key={from}>
            <rect
              x="10"
              y={y}
              width="220"
              height="36"
              rx="10"
              fill="#fdf6f5"
              stroke="#c0392b66"
            />
            <text
              x="26"
              y={y + 24}
              fontSize="16"
              fontWeight="600"
              fill="#0d1b2a"
            >
              {from}
            </text>
            <line
              x1="236"
              y1={y + 18}
              x2="290"
              y2={y + 18}
              stroke="#c0392b"
              strokeWidth="2.5"
              strokeDasharray="5 5"
              strokeLinecap="round"
            />
            <path
              d={`M296 ${y + 12} L308 ${y + 24} M308 ${y + 12} L296 ${y + 24}`}
              stroke="#c0392b"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <rect
              x="322"
              y={y}
              width="268"
              height="36"
              rx="10"
              fill="#ffffff"
              stroke="#c0392b"
              strokeWidth="1.5"
              strokeDasharray="5 4"
            />
            <text x="338" y={y + 23} fontSize="15" fill="#4a5568">
              {to}
            </text>
          </g>
        );
      })}
    </g>
  </svg>
);

export default TransferMapSvg;
