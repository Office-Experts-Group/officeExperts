// /app/blog/pdf-to-word-conversion/(svgs)/LayoutModelSvg.jsx
// Map: what usually carries across from a PDF to Word, and what often does not.
// Theme values hard-coded: $accent #046999, $accent-light #e8f4fa, $text-primary #0d1b2a,
// $text-secondary #4a5568, $text-muted #9a9da1. Server component.

const ROWS = [
  { from: "Plain paragraphs", to: "Carries across as editable text", ok: true },
  {
    from: "Logos and colours",
    to: "Carried as pictures, not as styles",
    ok: true,
  },
  { from: "Embedded fonts", to: "Replaced if the font is missing", ok: false },
  {
    from: "Tables and merged cells",
    to: "Split, merged or flattened to text",
    ok: false,
  },
  {
    from: "Multi-column layouts",
    to: "Collapse or overlap each other",
    ok: false,
  },
  { from: "Images and graphics", to: "Drift away from their text", ok: false },
  { from: "Scanned pages", to: "Pictures only unless OCR is run", ok: false },
];

export default function LayoutModelSvg() {
  return (
    <svg
      viewBox="0 0 720 510"
      role="img"
      aria-labelledby="ptw-map-title ptw-map-desc"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "100%", height: "auto", display: "block" }}
    >
      <title id="ptw-map-title">
        What carries across from a PDF to Word, and what often does not
      </title>
      <desc id="ptw-map-desc">
        Seven PDF features with an arrow to the usual result in Word. Plain
        paragraphs and logos carry across; fonts, tables, columns, images and
        scanned pages often need rebuilding.
      </desc>

      <text
        x="20"
        y="30"
        fontSize="14"
        fontWeight="700"
        fill="#4a5568"
        letterSpacing="1"
      >
        IN THE PDF
      </text>
      <text
        x="380"
        y="30"
        fontSize="14"
        fontWeight="700"
        fill="#4a5568"
        letterSpacing="1"
      >
        IN THE WORD FILE
      </text>

      {ROWS.map((row, i) => {
        const y = 52 + i * 64;
        const mid = y + 26;
        return (
          <g key={row.from}>
            <rect
              x="20"
              y={y}
              width="240"
              height="52"
              rx="10"
              fill="#ffffff"
              stroke="#cfd8dc"
            />
            <text
              x="38"
              y={y + 32}
              fontSize="16"
              fontWeight="600"
              fill="#0d1b2a"
            >
              {row.from}
            </text>

            {row.ok ? (
              <>
                <path
                  d={`M270 ${mid}h92`}
                  stroke="#046999"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
                <path
                  d={`M354 ${mid - 8}l10 8-10 8`}
                  fill="none"
                  stroke="#046999"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </>
            ) : (
              <>
                <path
                  d={`M270 ${mid}h92`}
                  stroke="#9a9da1"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeDasharray="6 6"
                />
                <path
                  d={`M354 ${mid - 8}l10 8-10 8`}
                  fill="none"
                  stroke="#9a9da1"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </>
            )}

            <rect
              x="380"
              y={y}
              width="320"
              height="52"
              rx="10"
              fill={row.ok ? "#e8f4fa" : "#f1f3f5"}
              stroke={row.ok ? "#046999" : "#b8c0c8"}
              strokeDasharray={row.ok ? undefined : "5 4"}
            />
            <circle
              cx="404"
              cy={mid}
              r="10"
              fill={row.ok ? "#046999" : "#ffffff"}
              stroke={row.ok ? "#046999" : "#9a9da1"}
            />
            {row.ok ? (
              <path
                d={`M399 ${mid}l4 4 7-8`}
                fill="none"
                stroke="#ffffff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            ) : (
              <path
                d={`M399 ${mid}h10`}
                stroke="#4a5568"
                strokeWidth="2"
                strokeLinecap="round"
              />
            )}
            <text
              x="426"
              y={y + 32}
              fontSize="15"
              fill={row.ok ? "#0d1b2a" : "#4a5568"}
            >
              {row.to}
            </text>
          </g>
        );
      })}
    </svg>
  );
}
