// /app/blog/word-templates-for-legal-firms/(svgs)/Illustrations.jsx
// Five "Avoid" vs "Do this" sketches for the common mistakes section.
// Theme hex used: $accent #046999, $accent-light #e8f4fa, slate #9a9da1 / #c9cfd6.

const SVG_STYLE = { width: "100%", height: "auto", display: "block" };

function Sketch({ id, title, desc, avoid, good }) {
  return (
    <svg
      viewBox="0 0 360 160"
      role="img"
      aria-labelledby={`${id}-t ${id}-d`}
      style={SVG_STYLE}
    >
      <title id={`${id}-t`}>{title}</title>
      <desc id={`${id}-d`}>{desc}</desc>
      <rect
        x="6"
        y="6"
        width="166"
        height="148"
        rx="12"
        fill="#f4f5f7"
        stroke="#9a9da1"
        strokeDasharray="6 5"
      />
      <text x="20" y="28" fontSize="14" fontWeight="700" fill="#7a8089">
        AVOID
      </text>
      <g transform="translate(0 0)">{avoid}</g>
      <rect
        x="188"
        y="6"
        width="166"
        height="148"
        rx="12"
        fill="#e8f4fa"
        stroke="#046999"
      />
      <text x="202" y="28" fontSize="14" fontWeight="700" fill="#046999">
        DO THIS
      </text>
      <g transform="translate(0 0)">{good}</g>
    </svg>
  );
}

const bar = (x, y, w, c = "#c9cfd6") => (
  <rect x={x} y={y} width={w} height="7" rx="3" fill={c} />
);

export function SaveAsSketch() {
  return (
    <Sketch
      id="lfw-sk1"
      title="Copying an old matter versus starting from a template"
      desc="Left: an old file with a leftover client name. Right: a clean template with an empty client field."
      avoid={
        <>
          <rect
            x="22"
            y="42"
            width="134"
            height="100"
            rx="8"
            fill="#ffffff"
            stroke="#c4ccd4"
          />
          <rect x="34" y="56" width="86" height="14" rx="3" fill="#0d1b2a" />
          {bar(34, 82, 108)}
          {bar(34, 96, 92)}
          {bar(34, 110, 100)}
          <text x="34" y="134" fontSize="14" fill="#c0392b" fontWeight="700">
            Smith v Jones
          </text>
        </>
      }
      good={
        <>
          <rect
            x="204"
            y="42"
            width="134"
            height="100"
            rx="8"
            fill="#ffffff"
            stroke="#046999"
          />
          <rect
            x="216"
            y="56"
            width="90"
            height="18"
            rx="9"
            fill="#e8f4fa"
            stroke="#046999"
          />
          <text
            x="261"
            y="69"
            fontSize="14"
            fill="#046999"
            fontWeight="700"
            textAnchor="middle"
          >
            CLIENT
          </text>
          {bar(216, 88, 108, "#d5dde4")}
          {bar(216, 102, 92, "#d5dde4")}
          {bar(216, 116, 100, "#d5dde4")}
        </>
      }
    />
  );
}

export function FormattingSketch() {
  return (
    <Sketch
      id="lfw-sk2"
      title="Manual formatting versus Word Styles"
      desc="Left: headings in mismatched sizes. Right: a clear Heading 1, Heading 2 and body hierarchy."
      avoid={
        <>
          <text x="22" y="62" fontSize="19" fontWeight="700" fill="#7a8089">
            Terms
          </text>
          <text x="22" y="86" fontSize="14" fontWeight="700" fill="#7a8089">
            Payment
          </text>
          <text x="22" y="108" fontSize="17" fill="#7a8089" fontStyle="italic">
            Liability
          </text>
          {bar(22, 122, 120)}
          {bar(22, 136, 90)}
        </>
      }
      good={
        <>
          <text x="204" y="62" fontSize="19" fontWeight="700" fill="#0d1b2a">
            Terms
          </text>
          <text x="204" y="84" fontSize="15" fontWeight="700" fill="#046999">
            Payment
          </text>
          {bar(204, 94, 120, "#d5dde4")}
          <text x="204" y="118" fontSize="15" fontWeight="700" fill="#046999">
            Liability
          </text>
          {bar(204, 128, 100, "#d5dde4")}
        </>
      }
    />
  );
}

export function BreakSketch() {
  return (
    <Sketch
      id="lfw-sk3"
      title="Blank lines versus a section break"
      desc="Left: a stack of blank returns pushing text down. Right: a single labelled section break."
      avoid={
        <>
          {bar(22, 46, 110)}
          {[62, 74, 86, 98, 110].map((y) => (
            <text key={y} x="22" y={y + 8} fontSize="14" fill="#b4bcc5">
              ¶
            </text>
          ))}
          {bar(22, 128, 96, "#9a9da1")}
        </>
      }
      good={
        <>
          {bar(204, 46, 110, "#d5dde4")}
          <line
            x1="204"
            y1="84"
            x2="338"
            y2="84"
            stroke="#046999"
            strokeWidth="1.5"
            strokeDasharray="5 4"
          />
          <rect x="226" y="74" width="90" height="20" rx="10" fill="#046999" />
          <text
            x="271"
            y="89"
            fontSize="14"
            fontWeight="700"
            fill="#ffffff"
            textAnchor="middle"
          >
            Section
          </text>
          {bar(204, 114, 96, "#d5dde4")}
        </>
      }
    />
  );
}

export function NumberingSketch() {
  return (
    <Sketch
      id="lfw-sk4"
      title="Typed clause numbers versus automatic numbering"
      desc="Left: typed numbers with a skipped clause. Right: automatic multilevel numbering in sequence."
      avoid={
        <>
          <text x="22" y="62" fontSize="15" fill="#7a8089">
            7.1 Fees
          </text>
          <text x="22" y="86" fontSize="15" fill="#7a8089">
            7.3 Costs
          </text>
          <text x="22" y="110" fontSize="15" fill="#7a8089">
            7.3 Interest
          </text>
          <text x="22" y="134" fontSize="15" fill="#c0392b" fontWeight="700">
            Where is 7.2?
          </text>
        </>
      }
      good={
        <>
          <text x="204" y="62" fontSize="15" fill="#0d1b2a">
            7.1 Fees
          </text>
          <text x="204" y="86" fontSize="15" fill="#0d1b2a">
            7.2 Costs
          </text>
          <text x="204" y="110" fontSize="15" fill="#0d1b2a">
            7.3 Interest
          </text>
          <rect
            x="204"
            y="120"
            width="104"
            height="22"
            rx="11"
            fill="#046999"
          />
          <text
            x="256"
            y="136"
            fontSize="14"
            fontWeight="700"
            fill="#ffffff"
            textAnchor="middle"
          >
            Auto-updates
          </text>
        </>
      }
    />
  );
}

export function NamingSketch() {
  return (
    <Sketch
      id="lfw-sk5"
      title="Unlabelled file names versus a naming convention"
      desc="Left: files named final and final2. Right: one versioned template name."
      avoid={
        <>
          <text x="22" y="64" fontSize="14" fill="#7a8089">
            letter_final.docx
          </text>
          <text x="22" y="90" fontSize="14" fill="#7a8089">
            letter_FINAL2.docx
          </text>
          <text x="22" y="116" fontSize="14" fill="#7a8089">
            letter_use_this.docx
          </text>
        </>
      }
      good={
        <>
          <rect
            x="204"
            y="48"
            width="134"
            height="30"
            rx="8"
            fill="#ffffff"
            stroke="#046999"
          />
          <text
            x="271"
            y="68"
            fontSize="14"
            fontWeight="700"
            fill="#046999"
            textAnchor="middle"
          >
            ENG_Letter
          </text>
          <rect
            x="204"
            y="88"
            width="64"
            height="26"
            rx="8"
            fill="#ffffff"
            stroke="#b9d6e5"
          />
          <text
            x="236"
            y="106"
            fontSize="14"
            fill="#0d1b2a"
            textAnchor="middle"
          >
            v2026
          </text>
          <rect
            x="274"
            y="88"
            width="64"
            height="26"
            rx="8"
            fill="#ffffff"
            stroke="#b9d6e5"
          />
          <text
            x="306"
            y="106"
            fontSize="14"
            fill="#0d1b2a"
            textAnchor="middle"
          >
            .dotx
          </text>
        </>
      }
    />
  );
}
