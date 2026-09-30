// app/services/business-analysis/(svgs)/BrokenCodeSvg.jsx

// ── BrokenCodeSvg ─────────────────────────────────────────────────────────────
// Problem-section illustration for a dark background: an AI-generated script
// that looks plausible, cracked straight through, with errors surfacing.
// Colours mirror globals.scss tokens ($dark-surface, $dark-bg, $accent,
// $accent-light, $white-*, $grayText, $replace-x) because SCSS variables
// can't be read inside inline SVG. Fonts are set explicitly so the SVG doesn't
// inherit the page's heading typeface.

const MONO = "ui-monospace, SFMono-Regular, Menlo, Consolas, monospace";
const SANS = "system-ui, -apple-system, 'Segoe UI', sans-serif";

// Token colours for the fake syntax highlighting
const C = {
  kw: "#e8f4fa",
  fn: "#ffffff",
  id: "rgba(255,255,255,0.88)",
  str: "#a0a2a6",
  com: "rgba(255,255,255,0.35)",
};

const CODE_X = 70;
const FIRST_LINE_Y = 80;
const LINE_H = 23;
const INDENT_W = 27; // four monospace characters at 11.5px

// Each line: indent level, [text, colour] tokens, and whether it errors
const lines = [
  { indent: 0, tokens: [["# generated in 4 seconds", C.com]] },
  {
    indent: 0,
    tokens: [
      ["def ", C.kw],
      ["process_invoice", C.fn],
      ["(data):", C.id],
    ],
  },
  { indent: 1, tokens: [["# should work for all cases", C.com]] },
  { indent: 1, tokens: [["try:", C.kw]] },
  {
    indent: 2,
    tokens: [
      ["total = data[", C.id],
      ['"amount"', C.str],
      ["] * 1.1", C.id],
    ],
    error: true,
  },
  { indent: 1, tokens: [["except:", C.kw]] },
  {
    indent: 2,
    tokens: [
      ["pass  ", C.kw],
      ["# ignore errors", C.com],
    ],
  },
  { indent: 1, tokens: [["email_all_customers(data)", C.id]], error: true },
  {
    indent: 1,
    tokens: [
      ["return ", C.kw],
      ["True  ", C.id],
      ["# always succeeds", C.com],
    ],
  },
];

// Jagged fracture line, top edge of the window to the bottom edge
const CRACK = "300,20 284,68 311,104 268,150 293,190 244,232 263,270 206,320";

// Clip regions either side of the crack (extended past the frame)
const LEFT_CLIP = `0,0 300,0 ${CRACK} 206,400 0,400`;
const RIGHT_CLIP = `300,0 480,0 480,400 206,400 ${CRACK.split(" ").reverse().join(" ")}`;

// Wavy red underline between two x positions
const squiggle = (x1, x2, y) => {
  let d = `M${x1} ${y}`;
  for (let x = x1; x < x2; x += 6) d += ` q1.5 -2.5 3 0 t3 0`;
  return d;
};

// Rough rendered width of a line, for the length of its squiggle
const lineWidth = (tokens) =>
  tokens.reduce((sum, [text]) => sum + text.length, 0) * 6.9;

// The editor window itself; rendered twice (once per side of the crack)
const renderEditor = () => (
  <g>
    <rect
      x="20"
      y="20"
      width="440"
      height="300"
      rx="10"
      fill="#18232e"
      stroke="rgba(255,255,255,0.12)"
    />

    {/* Title bar */}
    <line x1="20" y1="50" x2="460" y2="50" stroke="rgba(255,255,255,0.08)" />
    <g fill="rgba(255,255,255,0.18)">
      <circle cx="40" cy="35" r="4" />
      <circle cx="54" cy="35" r="4" />
      <circle cx="68" cy="35" r="4" />
    </g>
    <text
      x="88"
      y="39"
      fontFamily={MONO}
      fontSize="11"
      fill="rgba(255,255,255,0.65)"
    >
      invoice_bot.py
    </text>
    <rect
      x="366"
      y="26"
      width="80"
      height="18"
      rx="9"
      fill="rgba(4,105,153,0.15)"
      stroke="rgba(4,105,153,0.3)"
    />
    <text
      x="406"
      y="38.5"
      fontFamily={SANS}
      fontSize="9.5"
      fontWeight="600"
      fill="#e8f4fa"
      textAnchor="middle"
    >
      AI-generated
    </text>

    {/* Code */}
    <g fontFamily={MONO} fontSize="11.5" xmlSpace="preserve">
      {lines.map((line, i) => {
        const y = FIRST_LINE_Y + i * LINE_H;
        const x = CODE_X + line.indent * INDENT_W;
        return (
          <g key={i}>
            <text x="50" y={y} fill="rgba(255,255,255,0.35)" textAnchor="end">
              {i + 1}
            </text>
            {line.error && <circle cx="58" cy={y - 4} r="2.5" fill="#c0392b" />}
            <text x={x} y={y}>
              {line.tokens.map(([text, fill], t) => (
                <tspan key={t} fill={fill}>
                  {text}
                </tspan>
              ))}
            </text>
            {line.error && (
              <path
                d={squiggle(x, x + lineWidth(line.tokens), y + 5)}
                fill="none"
                stroke="#c0392b"
                strokeWidth="1.25"
              />
            )}
          </g>
        );
      })}
    </g>
  </g>
);

export const BrokenCodeSvg = () => (
  <svg
    viewBox="0 0 480 372"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    focusable="false"
  >
    <defs>
      {/* IDs are prefixed to stay unique on the page */}
      <clipPath id="baCodeLeft">
        <polygon points={LEFT_CLIP} />
      </clipPath>
      <clipPath id="baCodeRight">
        <polygon points={RIGHT_CLIP} />
      </clipPath>
    </defs>

    {/* Left half stays put; right half has slipped and tilted */}
    <g clipPath="url(#baCodeLeft)">{renderEditor()}</g>
    <g transform="translate(9 7) rotate(1.4 380 170)">
      <g clipPath="url(#baCodeRight)">{renderEditor()}</g>
    </g>

    {/* The crack: red glow under a thin bright edge */}
    <polyline
      points={CRACK}
      fill="none"
      stroke="#c0392b"
      strokeWidth="4"
      opacity="0.35"
      strokeLinejoin="round"
    />
    <polyline
      points={CRACK}
      fill="none"
      stroke="rgba(255,255,255,0.65)"
      strokeWidth="1"
      strokeLinejoin="round"
    />

    {/* Error toast */}
    <g fontFamily={SANS}>
      <rect
        x="190"
        y="290"
        width="276"
        height="66"
        rx="8"
        fill="#111820"
        stroke="rgba(192,57,43,0.6)"
      />
      <circle cx="216" cy="323" r="11" fill="#c0392b" />
      <text
        x="216"
        y="327.5"
        fontSize="13"
        fontWeight="800"
        fill="#ffffff"
        textAnchor="middle"
      >
        !
      </text>
      <text
        x="238"
        y="317"
        fontFamily={MONO}
        fontSize="12"
        fontWeight="700"
        fill="rgba(255,255,255,0.9)"
      >
        KeyError: &apos;amount&apos;
      </text>
      <text x="238" y="336" fontSize="10.5" fill="rgba(255,255,255,0.55)">
        Failed in production · no one knows why
      </text>
    </g>
  </svg>
);
