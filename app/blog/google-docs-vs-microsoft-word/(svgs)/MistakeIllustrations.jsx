// /app/blog/google-docs-vs-microsoft-word/(svgs)/MistakeIllustrations.jsx
// Five small "Avoid" (slate, dashed, messy) vs "Do this" (accent, clean) sketches.
// Theme values used (hard-coded hex): $accent #046999, $accent-light #e8f4fa,
// slate #6b7a89 / #9aa5b1 / #f1f3f5, $replace-x #c0392b (tiny accents only).

function Frame({ id, title, desc, children }) {
  return (
    <svg
      viewBox="0 0 400 190"
      role="img"
      aria-labelledby={`${id}-title ${id}-desc`}
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "100%", height: "auto" }}
    >
      <title id={`${id}-title`}>{title}</title>
      <desc id={`${id}-desc`}>{desc}</desc>
      <rect
        x="10"
        y="10"
        width="180"
        height="170"
        rx="12"
        fill="#f1f3f5"
        stroke="#9aa5b1"
        strokeWidth="1.5"
        strokeDasharray="6 5"
      />
      <rect
        x="210"
        y="10"
        width="180"
        height="170"
        rx="12"
        fill="#e8f4fa"
        stroke="#046999"
        strokeWidth="1.5"
      />
      <text
        x="28"
        y="34"
        fontSize="14"
        fontWeight="700"
        letterSpacing="1"
        fill="#6b7a89"
      >
        AVOID
      </text>
      <text
        x="228"
        y="34"
        fontSize="14"
        fontWeight="700"
        letterSpacing="1"
        fill="#046999"
      >
        DO THIS
      </text>
      {children}
    </svg>
  );
}

/* 1. Pasting content in without checking styles */
export function StylesSketch() {
  return (
    <Frame
      id="gdw-sk-styles"
      title="Inconsistent formatting versus consistent styles"
      desc="Left: lines of uneven size and weight. Right: one heading style and evenly spaced body text."
    >
      <rect x="28" y="52" width="110" height="10" rx="3" fill="#6b7a89" />
      <rect x="28" y="72" width="138" height="6" rx="3" fill="#9aa5b1" />
      <rect x="28" y="88" width="88" height="13" rx="3" fill="#6b7a89" />
      <rect x="28" y="110" width="150" height="6" rx="3" fill="#9aa5b1" />
      <rect x="28" y="125" width="68" height="9" rx="3" fill="#6b7a89" />
      <rect x="28" y="143" width="128" height="6" rx="3" fill="#9aa5b1" />
      <circle cx="160" cy="94" r="4" fill="#c0392b" />

      <rect x="228" y="52" width="100" height="12" rx="3" fill="#046999" />
      <rect x="228" y="74" width="140" height="6" rx="3" fill="#8fbdd3" />
      <rect x="228" y="88" width="140" height="6" rx="3" fill="#8fbdd3" />
      <rect x="228" y="102" width="100" height="6" rx="3" fill="#8fbdd3" />
      <rect x="228" y="122" width="72" height="10" rx="3" fill="#046999" />
      <rect x="228" y="142" width="140" height="6" rx="3" fill="#8fbdd3" />
    </Frame>
  );
}

/* 2. Letting every author format by hand */
export function TemplateSketch() {
  return (
    <Frame
      id="gdw-sk-template"
      title="Mismatched pages versus one master template"
      desc="Left: three pages of different sizes and angles. Right: one template feeding three matching pages."
    >
      <g transform="rotate(-7 55 100)">
        <rect
          x="30"
          y="64"
          width="50"
          height="68"
          rx="4"
          fill="#ffffff"
          stroke="#9aa5b1"
        />
      </g>
      <rect
        x="92"
        y="78"
        width="40"
        height="52"
        rx="4"
        fill="#ffffff"
        stroke="#9aa5b1"
      />
      <g transform="rotate(8 150 112)">
        <rect
          x="128"
          y="86"
          width="46"
          height="62"
          rx="4"
          fill="#ffffff"
          stroke="#9aa5b1"
        />
      </g>

      <rect x="262" y="48" width="76" height="32" rx="6" fill="#046999" />
      <path
        d="M300 80L254 100M300 80V100M300 80L346 100"
        stroke="#046999"
        strokeWidth="1.5"
      />
      <rect
        x="230"
        y="100"
        width="48"
        height="62"
        rx="4"
        fill="#ffffff"
        stroke="#046999"
        strokeWidth="1.5"
      />
      <rect
        x="276"
        y="100"
        width="48"
        height="62"
        rx="4"
        fill="#ffffff"
        stroke="#046999"
        strokeWidth="1.5"
      />
      <rect
        x="322"
        y="100"
        width="48"
        height="62"
        rx="4"
        fill="#ffffff"
        stroke="#046999"
        strokeWidth="1.5"
      />
      <rect x="238" y="110" width="32" height="5" rx="2" fill="#046999" />
      <rect x="284" y="110" width="32" height="5" rx="2" fill="#046999" />
      <rect x="330" y="110" width="32" height="5" rx="2" fill="#046999" />
    </Frame>
  );
}

/* 3. Assuming people will work it out */
export function TrainingSketch() {
  return (
    <Frame
      id="gdw-sk-training"
      title="Confused users versus a short quick guide"
      desc="Left: three circles with question marks. Right: a guide card with three ticked steps."
    >
      <circle
        cx="56"
        cy="100"
        r="17"
        fill="#ffffff"
        stroke="#9aa5b1"
        strokeWidth="1.5"
      />
      <circle
        cx="104"
        cy="100"
        r="17"
        fill="#ffffff"
        stroke="#9aa5b1"
        strokeWidth="1.5"
      />
      <circle
        cx="152"
        cy="100"
        r="17"
        fill="#ffffff"
        stroke="#9aa5b1"
        strokeWidth="1.5"
      />
      <text x="56" y="107" textAnchor="middle" fontSize="20" fill="#6b7a89">
        ?
      </text>
      <text x="104" y="107" textAnchor="middle" fontSize="20" fill="#6b7a89">
        ?
      </text>
      <text x="152" y="107" textAnchor="middle" fontSize="20" fill="#6b7a89">
        ?
      </text>
      <path
        d="M40 140q20 -10 40 0t40 0 40 0"
        fill="none"
        stroke="#9aa5b1"
        strokeWidth="1.5"
        strokeLinecap="round"
      />

      <rect
        x="230"
        y="56"
        width="140"
        height="96"
        rx="8"
        fill="#ffffff"
        stroke="#046999"
        strokeWidth="1.5"
      />
      <circle cx="250" cy="80" r="6" fill="#046999" />
      <rect x="264" y="77" width="84" height="6" rx="3" fill="#8fbdd3" />
      <circle cx="250" cy="104" r="6" fill="#046999" />
      <rect x="264" y="101" width="64" height="6" rx="3" fill="#8fbdd3" />
      <circle cx="250" cy="128" r="6" fill="#046999" />
      <rect x="264" y="125" width="76" height="6" rx="3" fill="#8fbdd3" />
    </Frame>
  );
}

/* 4. Dropping collaboration entirely */
export function CollabSketch() {
  return (
    <Frame
      id="gdw-sk-collab"
      title="Scattered copies versus one shared document"
      desc="Left: several page copies joined by tangled dashed lines. Right: one page with three editing cursors."
    >
      <rect
        x="30"
        y="54"
        width="46"
        height="58"
        rx="4"
        fill="#ffffff"
        stroke="#9aa5b1"
      />
      <rect
        x="100"
        y="66"
        width="46"
        height="58"
        rx="4"
        fill="#ffffff"
        stroke="#9aa5b1"
      />
      <rect
        x="130"
        y="102"
        width="46"
        height="58"
        rx="4"
        fill="#ffffff"
        stroke="#9aa5b1"
      />
      <path
        d="M76 72L100 90M146 98L150 102M70 112L132 132"
        stroke="#9aa5b1"
        strokeWidth="1.5"
        strokeDasharray="4 4"
        fill="none"
      />
      <circle cx="90" cy="140" r="4" fill="#c0392b" />

      <rect
        x="240"
        y="52"
        width="120"
        height="100"
        rx="8"
        fill="#ffffff"
        stroke="#046999"
        strokeWidth="1.5"
      />
      <rect x="254" y="70" width="70" height="6" rx="3" fill="#8fbdd3" />
      <rect x="254" y="86" width="90" height="6" rx="3" fill="#8fbdd3" />
      <rect x="254" y="102" width="60" height="6" rx="3" fill="#8fbdd3" />
      <rect x="254" y="118" width="84" height="6" rx="3" fill="#8fbdd3" />
      <rect x="328" y="80" width="3" height="14" rx="1.5" fill="#046999" />
      <rect x="296" y="96" width="3" height="14" rx="1.5" fill="#5bbce6" />
      <rect x="270" y="112" width="3" height="14" rx="1.5" fill="#046999" />
    </Frame>
  );
}

/* 5. Migrating everything at once */
export function WavesSketch() {
  return (
    <Frame
      id="gdw-sk-waves"
      title="One big move versus staged waves"
      desc="Left: a grid of files pushed into a single overloaded box. Right: three rising bars for pilot, active documents and archive."
    >
      {[0, 1, 2, 3].map((i) =>
        [0, 1, 2].map((j) => (
          <rect
            key={`${i}${j}`}
            x={28 + i * 22}
            y={60 + j * 22}
            width="16"
            height="16"
            rx="3"
            fill="#9aa5b1"
          />
        )),
      )}
      <path
        d="M118 93h12"
        stroke="#9aa5b1"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <rect
        x="136"
        y="64"
        width="42"
        height="58"
        rx="6"
        fill="#ffffff"
        stroke="#c0392b"
        strokeWidth="2"
        strokeDasharray="4 3"
      />

      <rect x="230" y="126" width="40" height="24" rx="4" fill="#046999" />
      <rect x="282" y="102" width="40" height="48" rx="4" fill="#5bbce6" />
      <rect x="334" y="78" width="40" height="72" rx="4" fill="#a9d6ea" />
    </Frame>
  );
}
