// /app/blog/pdf-to-word-conversion/(svgs)/ConversionIllustrations.jsx
// Five small "Avoid" vs "Do this" sketches for the common-mistakes cards.
// Avoid = slate, dashed frame, messy. Do this = accent, clean.
// Theme values hard-coded: $accent #046999, $accent-light #e8f4fa, $text-secondary #4a5568,
// $text-muted #9a9da1, $light-bg #f7f8f9. Server component.

function Sketch({ id, title, desc, avoid, doThis }) {
  return (
    <svg
      viewBox="0 0 280 150"
      role="img"
      aria-labelledby={`${id}-title ${id}-desc`}
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "100%", height: "auto", display: "block" }}
    >
      <title id={`${id}-title`}>{title}</title>
      <desc id={`${id}-desc`}>{desc}</desc>

      <rect
        x="8"
        y="8"
        width="124"
        height="134"
        rx="10"
        fill="#f7f8f9"
        stroke="#9a9da1"
        strokeDasharray="5 4"
      />
      <text
        x="20"
        y="30"
        fontSize="14"
        fontWeight="700"
        letterSpacing="1"
        fill="#4a5568"
      >
        AVOID
      </text>
      <g>{avoid}</g>

      <rect
        x="148"
        y="8"
        width="124"
        height="134"
        rx="10"
        fill="#e8f4fa"
        stroke="#046999"
      />
      <text
        x="160"
        y="30"
        fontSize="14"
        fontWeight="700"
        letterSpacing="1"
        fill="#046999"
      >
        DO THIS
      </text>
      <g>{doThis}</g>
    </svg>
  );
}

/* 1. Confidential file sent to a free site vs handled securely */
export function UploadSketch() {
  return (
    <Sketch
      id="ptw-upload"
      title="Uploading a confidential file versus handling it securely"
      desc="Left: a document sent with a dashed arrow to an unknown cloud. Right: the document kept inside a padlock."
      avoid={
        <>
          <rect
            x="22"
            y="70"
            width="32"
            height="42"
            rx="4"
            fill="#ffffff"
            stroke="#4a5568"
          />
          <path d="M28 82h20M28 90h20M28 98h12" stroke="#9a9da1" />
          <path
            d="M60 90h22"
            stroke="#4a5568"
            strokeWidth="2"
            strokeDasharray="4 3"
          />
          <path
            d="M92 108a10 10 0 0 1 2-19 14 14 0 0 1 27 4 8 8 0 0 1-1 15z"
            fill="#ffffff"
            stroke="#4a5568"
            strokeDasharray="4 3"
          />
          <text
            x="106"
            y="106"
            textAnchor="middle"
            fontSize="14"
            fontWeight="700"
            fill="#4a5568"
          >
            ?
          </text>
        </>
      }
      doThis={
        <>
          <path
            d="M194 84V76a16 16 0 0 1 32 0v8"
            fill="none"
            stroke="#046999"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <rect x="184" y="84" width="52" height="42" rx="8" fill="#046999" />
          <rect x="200" y="94" width="20" height="24" rx="3" fill="#ffffff" />
          <path d="M204 101h12M204 107h12M204 113h8" stroke="#046999" />
        </>
      }
    />
  );
}

/* 2. Scan without OCR vs real text */
export function ScanSketch() {
  return (
    <Sketch
      id="ptw-scan"
      title="A scan without OCR versus real, selectable text"
      desc="Left: a page that is only a grainy picture. Right: a page of crisp text lines with a text cursor."
      avoid={
        <>
          <rect
            x="34"
            y="46"
            width="68"
            height="84"
            rx="4"
            fill="#e2e6ea"
            stroke="#4a5568"
            strokeDasharray="4 3"
          />
          {[0, 1, 2, 3, 4, 5].map((r) =>
            [0, 1, 2, 3, 4].map((c) => (
              <rect
                key={`${r}-${c}`}
                x={42 + c * 11}
                y={54 + r * 12}
                width="7"
                height="7"
                fill="#9a9da1"
                fillOpacity={(r + c) % 3 === 0 ? 0.25 : 0.7}
              />
            )),
          )}
        </>
      }
      doThis={
        <>
          <rect
            x="174"
            y="46"
            width="68"
            height="84"
            rx="4"
            fill="#ffffff"
            stroke="#046999"
          />
          {[58, 70, 82, 94, 106].map((y, i) => (
            <rect
              key={y}
              x="182"
              y={y}
              width={i === 4 ? 30 : 52}
              height="5"
              rx="2"
              fill="#046999"
              fillOpacity="0.7"
            />
          ))}
          <path
            d="M218 102v16M214 102h8M214 118h8"
            stroke="#046999"
            strokeWidth="1.5"
          />
        </>
      }
    />
  );
}

/* 3. Faked layout vs real styles */
export function SpacingSketch() {
  return (
    <Sketch
      id="ptw-spacing"
      title="Faking layout with spaces versus using real styles"
      desc="Left: lines held in place by rows of dots standing for spaces and hard returns. Right: a paragraph with an indent marker and a style label."
      avoid={
        <>
          {[52, 70, 88, 106].map((y, i) => (
            <g key={y}>
              <rect
                x="22"
                y={y}
                width="26"
                height="6"
                rx="2"
                fill="#4a5568"
                fillOpacity="0.7"
              />
              <text
                x="52"
                y={y + 8}
                fontSize="14"
                fill="#9a9da1"
                letterSpacing="2"
              >
                {i % 2 ? "·····" : "·········"}
              </text>
              <rect
                x={i % 2 ? 84 : 106}
                y={y}
                width="18"
                height="6"
                rx="2"
                fill="#4a5568"
                fillOpacity="0.7"
              />
            </g>
          ))}
          <text x="108" y="130" fontSize="14" fill="#9a9da1">
            ¶ ¶ ¶
          </text>
        </>
      }
      doThis={
        <>
          <rect x="164" y="48" width="72" height="20" rx="10" fill="#046999" />
          <text
            x="200"
            y="63"
            textAnchor="middle"
            fontSize="14"
            fontWeight="700"
            fill="#ffffff"
          >
            Normal
          </text>
          <path d="M164 84h6l4-4v8z" fill="#046999" />
          {[82, 98, 114].map((y, i) => (
            <rect
              key={y}
              x={i === 0 ? 182 : 164}
              y={y}
              width={i === 0 ? 54 : 72}
              height="6"
              rx="2"
              fill="#046999"
              fillOpacity="0.7"
            />
          ))}
        </>
      }
    />
  );
}

/* 4. No check vs side-by-side check */
export function CheckSketch() {
  return (
    <Sketch
      id="ptw-check"
      title="Skipping the check versus comparing side by side"
      desc="Left: one page with a question mark. Right: two matching pages with a tick between them."
      avoid={
        <>
          <rect
            x="46"
            y="48"
            width="56"
            height="78"
            rx="4"
            fill="#ffffff"
            stroke="#4a5568"
          />
          {[60, 72, 84].map((y) => (
            <rect
              key={y}
              x="54"
              y={y}
              width="40"
              height="5"
              rx="2"
              fill="#9a9da1"
            />
          ))}
          <text
            x="74"
            y="116"
            textAnchor="middle"
            fontSize="20"
            fontWeight="700"
            fill="#4a5568"
          >
            ?
          </text>
        </>
      }
      doThis={
        <>
          <rect
            x="158"
            y="56"
            width="40"
            height="64"
            rx="4"
            fill="#ffffff"
            stroke="#046999"
          />
          <rect
            x="222"
            y="56"
            width="40"
            height="64"
            rx="4"
            fill="#ffffff"
            stroke="#046999"
          />
          {[68, 78, 88].map((y) => (
            <g key={y}>
              <rect
                x="164"
                y={y}
                width="28"
                height="4"
                rx="2"
                fill="#046999"
                fillOpacity="0.6"
              />
              <rect
                x="228"
                y={y}
                width="28"
                height="4"
                rx="2"
                fill="#046999"
                fillOpacity="0.6"
              />
            </g>
          ))}
          <circle cx="210" cy="88" r="9" fill="#046999" />
          <path
            d="M205 88l4 4 6-8"
            fill="none"
            stroke="#ffffff"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </>
      }
    />
  );
}

/* 5. Convert a PDF vs return to the source file */
export function SourceSketch() {
  return (
    <Sketch
      id="ptw-source"
      title="Converting a PDF versus starting from the source file"
      desc="Left: a PDF reaching a Word file by a jagged path. Right: the original source file reaching Word by a straight arrow."
      avoid={
        <>
          <rect
            x="18"
            y="52"
            width="40"
            height="28"
            rx="5"
            fill="#ffffff"
            stroke="#4a5568"
          />
          <text
            x="38"
            y="71"
            textAnchor="middle"
            fontSize="14"
            fontWeight="700"
            fill="#4a5568"
          >
            PDF
          </text>
          <path
            d="M38 80v16h20v-10h20v22h18"
            fill="none"
            stroke="#4a5568"
            strokeWidth="2"
            strokeDasharray="4 3"
            strokeLinejoin="round"
          />
          <rect
            x="84"
            y="100"
            width="40"
            height="28"
            rx="5"
            fill="#ffffff"
            stroke="#4a5568"
          />
          <text
            x="104"
            y="119"
            textAnchor="middle"
            fontSize="14"
            fontWeight="700"
            fill="#4a5568"
          >
            Word
          </text>
        </>
      }
      doThis={
        <>
          <rect
            x="158"
            y="52"
            width="48"
            height="28"
            rx="5"
            fill="#ffffff"
            stroke="#046999"
          />
          <text
            x="182"
            y="71"
            textAnchor="middle"
            fontSize="14"
            fontWeight="700"
            fill="#046999"
          >
            Source
          </text>
          <path
            d="M182 82v20"
            stroke="#046999"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <path
            d="M175 96l7 8 7-8"
            fill="none"
            stroke="#046999"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <rect x="158" y="108" width="48" height="24" rx="5" fill="#046999" />
          <text
            x="182"
            y="125"
            textAnchor="middle"
            fontSize="14"
            fontWeight="700"
            fill="#ffffff"
          >
            Word
          </text>
        </>
      }
    />
  );
}
