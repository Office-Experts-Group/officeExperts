// /app/blog/word-desktop-vs-web/(svgs)/MistakeSketches.jsx
// Five "Avoid" (slate, dashed, messy) vs "Do this" (accent, clean) panels.
// Hex values: $accent #046999, $accent-light #e8f4fa, slate #8a94a3, $text-primary #0d1b2a.

const SLATE = "#8a94a3";
const ACCENT = "#046999";

function Sketch({ id, title, desc, avoid, doThis }) {
  return (
    <svg
      viewBox="0 0 320 170"
      role="img"
      aria-labelledby={`${id}-t ${id}-d`}
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "100%", height: "auto", display: "block" }}
    >
      <title id={`${id}-t`}>{title}</title>
      <desc id={`${id}-d`}>{desc}</desc>
      <rect
        x="6"
        y="6"
        width="150"
        height="158"
        rx="12"
        fill="#f7f8f9"
        stroke={SLATE}
        strokeWidth="1.5"
        strokeDasharray="5 5"
      />
      <rect
        x="164"
        y="6"
        width="150"
        height="158"
        rx="12"
        fill="#e8f4fa"
        stroke={ACCENT}
        strokeWidth="1.5"
      />
      <text x="20" y="30" fontSize="14" fontWeight="700" fill={SLATE}>
        Avoid
      </text>
      <text x="178" y="30" fontSize="14" fontWeight="700" fill={ACCENT}>
        Do this
      </text>
      <g>{avoid}</g>
      <g>{doThis}</g>
    </svg>
  );
}

const doc = (x, y, c, dashed) => (
  <g>
    <path
      d={`M${x} ${y}h22l12 12v30a3 3 0 0 1-3 3h-31a3 3 0 0 1-3-3v-39a3 3 0 0 1 3-3z`}
      fill="#ffffff"
      stroke={c}
      strokeWidth="2"
      strokeDasharray={dashed ? "4 3" : "0"}
    />
    <path
      d={`M${x + 8} ${y + 22}h20M${x + 8} ${y + 30}h14`}
      stroke={c}
      strokeWidth="2"
      strokeLinecap="round"
    />
  </g>
);

const person = (x, y, c) => (
  <g>
    <circle cx={x} cy={y} r="7" fill={c} />
    <path d={`M${x - 12} ${y + 24}a12 12 0 0 1 24 0z`} fill={c} />
  </g>
);

/* 1. Co-authoring a file that sits on a local drive */
export const LocalFileSketch = () => (
  <Sketch
    id="wdw-sk1"
    title="Local file against a cloud file"
    desc="Left, two people cannot reach a file stuck on one computer. Right, two people edit one file in the cloud."
    avoid={
      <>
        <rect
          x="52"
          y="60"
          width="64"
          height="46"
          rx="5"
          fill="#ffffff"
          stroke={SLATE}
          strokeWidth="2"
          strokeDasharray="4 3"
        />
        {doc(68, 64, SLATE, true)}
        {person(24, 130, SLATE)}
        {person(138, 130, SLATE)}
        <path
          d="M30 112L52 100M132 112L116 100"
          stroke={SLATE}
          strokeWidth="2"
          strokeDasharray="2 5"
          strokeLinecap="round"
        />
      </>
    }
    doThis={
      <>
        <path
          d="M206 78a14 14 0 0 1-1-28 20 20 0 0 1 38-6 17 17 0 0 1 3 34z"
          fill="#ffffff"
          stroke={ACCENT}
          strokeWidth="2"
          transform="translate(4 4)"
        />
        {person(192, 130, ACCENT)}
        {person(286, 130, ACCENT)}
        <path
          d="M200 112L222 92M282 112L254 92"
          stroke={ACCENT}
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </>
    }
  />
);

/* 2. Buying a plan without desktop apps and expecting them */
export const WrongPlanSketch = () => (
  <Sketch
    id="wdw-sk2"
    title="Plan without desktop apps against a plan with them"
    desc="Left, a dashed monitor sits beside a Basic tag. Right, a solid monitor with a ribbon sits beside a Standard tag."
    avoid={
      <>
        <rect
          x="26"
          y="52"
          width="104"
          height="66"
          rx="6"
          fill="#ffffff"
          stroke={SLATE}
          strokeWidth="2"
          strokeDasharray="4 3"
        />
        <path d="M60 134h36M78 118v16" stroke={SLATE} strokeWidth="2" />
        <text
          x="78"
          y="92"
          textAnchor="middle"
          fontSize="22"
          fontWeight="700"
          fill={SLATE}
        >
          ?
        </text>
        <rect
          x="46"
          y="142"
          width="64"
          height="18"
          rx="9"
          fill="#ffffff"
          stroke={SLATE}
          strokeDasharray="3 3"
        />
        <text x="78" y="155" textAnchor="middle" fontSize="14" fill={SLATE}>
          Basic
        </text>
      </>
    }
    doThis={
      <>
        <rect
          x="184"
          y="52"
          width="104"
          height="66"
          rx="6"
          fill="#ffffff"
          stroke={ACCENT}
          strokeWidth="2"
        />
        <rect x="192" y="60" width="88" height="14" rx="3" fill="#e8f4fa" />
        <path
          d="M192 86h60M192 96h72M192 106h44"
          stroke="#9fc3d4"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path d="M218 134h36M236 118v16" stroke={ACCENT} strokeWidth="2" />
        <rect x="190" y="142" width="92" height="18" rx="9" fill={ACCENT} />
        <text x="236" y="155" textAnchor="middle" fontSize="14" fill="#ffffff">
          Standard
        </text>
      </>
    }
  />
);

/* 3. A home licence used for commercial work */
export const LicenceSketch = () => (
  <Sketch
    id="wdw-sk3"
    title="Home licence against a business licence"
    desc="Left, a dashed house stands beside a stack of invoices. Right, a solid briefcase stands beside the same invoices."
    avoid={
      <>
        <path
          d="M30 88L78 50l48 38v34H30z"
          fill="#ffffff"
          stroke={SLATE}
          strokeWidth="2"
          strokeDasharray="4 3"
          strokeLinejoin="round"
        />
        <rect
          x="64"
          y="100"
          width="28"
          height="22"
          rx="2"
          fill="#f7f8f9"
          stroke={SLATE}
          strokeDasharray="3 3"
        />
        <rect
          x="40"
          y="134"
          width="76"
          height="14"
          rx="3"
          fill="#ffffff"
          stroke={SLATE}
          strokeDasharray="3 3"
        />
      </>
    }
    doThis={
      <>
        <rect
          x="190"
          y="68"
          width="92"
          height="56"
          rx="8"
          fill="#ffffff"
          stroke={ACCENT}
          strokeWidth="2"
        />
        <path
          d="M222 68v-8a6 6 0 0 1 6-6h8a6 6 0 0 1 6 6v8"
          fill="none"
          stroke={ACCENT}
          strokeWidth="2"
        />
        <path d="M190 92h92" stroke={ACCENT} strokeWidth="2" />
        <rect x="228" y="86" width="16" height="12" rx="2" fill={ACCENT} />
        <rect
          x="198"
          y="134"
          width="76"
          height="14"
          rx="3"
          fill="#ffffff"
          stroke={ACCENT}
        />
      </>
    }
  />
);

/* 4. Comparing on price alone */
export const PriceOnlySketch = () => (
  <Sketch
    id="wdw-sk4"
    title="Tilted scale against a level scale"
    desc="Left, a scale tips because only a coin sits on one side. Right, a level scale holds a coin on one side and a cloud and a shield on the other."
    avoid={
      <>
        <path
          d="M78 52v62M54 118h48"
          stroke={SLATE}
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M30 70L126 52"
          stroke={SLATE}
          strokeWidth="3"
          strokeLinecap="round"
        />
        <circle
          cx="38"
          cy="96"
          r="14"
          fill="#ffffff"
          stroke={SLATE}
          strokeWidth="2"
          strokeDasharray="4 3"
        />
        <text
          x="38"
          y="102"
          textAnchor="middle"
          fontSize="16"
          fontWeight="700"
          fill={SLATE}
        >
          $
        </text>
        <path d="M38 82L30 70M38 82L46 72" stroke={SLATE} strokeWidth="1.5" />
        <path d="M126 52v14" stroke={SLATE} strokeWidth="1.5" />
        <path
          d="M114 66h24"
          stroke={SLATE}
          strokeWidth="3"
          strokeLinecap="round"
        />
      </>
    }
    doThis={
      <>
        <path
          d="M236 52v62M212 118h48"
          stroke={ACCENT}
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M190 58h92"
          stroke={ACCENT}
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M200 58v20M180 78h40M274 58v20M254 78h40"
          stroke={ACCENT}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <circle
          cx="200"
          cy="96"
          r="13"
          fill="#ffffff"
          stroke={ACCENT}
          strokeWidth="2"
        />
        <text
          x="200"
          y="102"
          textAnchor="middle"
          fontSize="16"
          fontWeight="700"
          fill={ACCENT}
        >
          $
        </text>
        <path
          d="M262 100a6 6 0 0 1 0-12 8 8 0 0 1 15-2 6 6 0 0 1 1 14z"
          fill={ACCENT}
        />
        <path
          d="M290 88l9 3v7c0 5-4 8-9 10-5-2-9-5-9-10v-7z"
          fill="#ffffff"
          stroke={ACCENT}
          strokeWidth="1.5"
        />
      </>
    }
  />
);

/* 5. Emailing copies instead of sharing a link */
export const AttachmentSketch = () => (
  <Sketch
    id="wdw-sk5"
    title="Scattered copies against one shared file"
    desc="Left, several copies of a file labelled v1, v2 and final drift around. Right, a single file has a link leading to three people."
    avoid={
      <>
        <g transform="rotate(-8 50 80)">{doc(30, 52, SLATE, true)}</g>
        <g transform="rotate(7 100 90)">{doc(86, 62, SLATE, true)}</g>
        <g transform="rotate(-4 60 130)">{doc(40, 100, SLATE, true)}</g>
        <text x="30" y="54" fontSize="14" fill={SLATE}>
          v1
        </text>
        <text x="108" y="64" fontSize="14" fill={SLATE}>
          v2
        </text>
        <text x="48" y="152" fontSize="14" fill={SLATE}>
          final
        </text>
      </>
    }
    doThis={
      <>
        {doc(223, 56, ACCENT, false)}
        <path
          d="M240 108V120M240 120L206 134M240 120V134M240 120L274 134"
          stroke={ACCENT}
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
        <circle cx="206" cy="146" r="7" fill={ACCENT} />
        <circle cx="240" cy="146" r="7" fill={ACCENT} />
        <circle cx="274" cy="146" r="7" fill={ACCENT} />
      </>
    }
  />
);

export const mistakeSketches = [
  LocalFileSketch,
  WrongPlanSketch,
  LicenceSketch,
  PriceOnlySketch,
  AttachmentSketch,
];
