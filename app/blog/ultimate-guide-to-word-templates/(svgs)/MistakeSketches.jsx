// /app/blog/ultimate-guide-to-word-templates/(svgs)/MistakeSketches.jsx
// Five small "Avoid" (slate, dashed, messy) vs "Do this" (accent, clean) sketches.
// Theme values used: $accent #046999, $accent-light #e8f4fa, slate #6b7480.

const SLATE = "#6b7480";
const ACCENT = "#046999";
const TINT = "#e8f4fa";

function Frame({ id, title, desc, children }) {
  return (
    <svg
      viewBox="0 0 320 170"
      role="img"
      aria-labelledby={`${id}-t ${id}-d`}
      style={{ width: "100%", height: "auto", display: "block" }}
    >
      <title id={`${id}-t`}>{title}</title>
      <desc id={`${id}-d`}>{desc}</desc>
      {/* avoid panel */}
      <rect
        x="6"
        y="6"
        width="148"
        height="158"
        rx="12"
        fill="#f7f8f9"
        stroke={SLATE}
        strokeWidth="1.5"
        strokeDasharray="6 5"
      />
      <text
        x="80"
        y="28"
        textAnchor="middle"
        fill={SLATE}
        fontSize="14"
        fontWeight="700"
      >
        Avoid
      </text>
      {/* do panel */}
      <rect
        x="166"
        y="6"
        width="148"
        height="158"
        rx="12"
        fill={TINT}
        stroke={ACCENT}
        strokeWidth="1.5"
      />
      <text
        x="240"
        y="28"
        textAnchor="middle"
        fill={ACCENT}
        fontSize="14"
        fontWeight="700"
      >
        Do this
      </text>
      {children}
    </svg>
  );
}

/* 1. Editing Normal.dotm directly vs separate purpose templates */
export function NormalSketch() {
  return (
    <Frame
      id="uwt-ms-normal"
      title="Editing Normal.dotm directly"
      desc="Avoid: one default file with scribbled changes. Do this: separate templates for each purpose and a backup copy."
    >
      <rect
        x="40"
        y="48"
        width="80"
        height="96"
        rx="8"
        fill="#ffffff"
        stroke={SLATE}
      />
      <path
        d="M52 66l50 8M52 82l56-6M52 98l44 10M52 114l54-4"
        stroke={SLATE}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M96 128l10 10M106 128l-10 10"
        stroke="#c0392b"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <rect
            x={186 + i * 40}
            y="56"
            width="32"
            height="42"
            rx="5"
            fill="#ffffff"
            stroke={ACCENT}
            strokeWidth="1.5"
          />
          <rect
            x={192 + i * 40}
            y="64"
            width="20"
            height="5"
            rx="2.5"
            fill={ACCENT}
          />
          <rect
            x={192 + i * 40}
            y="76"
            width="20"
            height="4"
            rx="2"
            fill={ACCENT}
            fillOpacity="0.4"
          />
        </g>
      ))}
      <rect
        x="186"
        y="114"
        width="112"
        height="28"
        rx="8"
        fill="#ffffff"
        stroke={ACCENT}
        strokeDasharray="4 3"
      />
      <text
        x="242"
        y="133"
        textAnchor="middle"
        fill={ACCENT}
        fontSize="14"
        fontWeight="700"
      >
        Backup copy
      </text>
    </Frame>
  );
}

/* 2. Copy-pasting from old documents vs starting from a master */
export function CopySketch() {
  return (
    <Frame
      id="uwt-ms-copy"
      title="Copying old documents"
      desc="Avoid: stacked old documents with mismatched formatting. Do this: one master template creating consistent copies."
    >
      <rect
        x="40"
        y="52"
        width="70"
        height="86"
        rx="6"
        fill="#ffffff"
        stroke={SLATE}
        transform="rotate(-8 75 95)"
      />
      <rect
        x="52"
        y="58"
        width="70"
        height="86"
        rx="6"
        fill="#ffffff"
        stroke={SLATE}
        transform="rotate(5 87 101)"
      />
      <path
        d="M62 82h44M62 94h30M62 106h48"
        stroke={SLATE}
        strokeWidth="3"
        strokeLinecap="round"
        strokeDasharray="8 4"
      />
      <rect
        x="188"
        y="52"
        width="46"
        height="56"
        rx="6"
        fill="#ffffff"
        stroke={ACCENT}
        strokeWidth="2"
      />
      <path
        d="M196 66h30M196 78h30M196 90h20"
        stroke={ACCENT}
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M238 80h14"
        stroke={ACCENT}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <rect
        x="258"
        y="62"
        width="40"
        height="22"
        rx="4"
        fill="#ffffff"
        stroke={ACCENT}
      />
      <rect
        x="258"
        y="92"
        width="40"
        height="22"
        rx="4"
        fill="#ffffff"
        stroke={ACCENT}
      />
      <text
        x="240"
        y="144"
        textAnchor="middle"
        fill={ACCENT}
        fontSize="14"
        fontWeight="700"
      >
        One master
      </text>
    </Frame>
  );
}

/* 3. Vague names and versions vs a clear convention */
export function NamingSketch() {
  return (
    <Frame
      id="uwt-ms-naming"
      title="Unclear template names"
      desc="Avoid: files named final, final 2 and new. Do this: prefix codes and version numbers such as FIN-Invoice-v2.3."
    >
      {["final", "final 2", "new final"].map((t, i) => (
        <g key={t}>
          <rect
            x="16"
            y={46 + i * 34}
            width="128"
            height="26"
            rx="6"
            fill="#ffffff"
            stroke={SLATE}
            strokeDasharray="4 3"
          />
          <text x="28" y={64 + i * 34} fill={SLATE} fontSize="14">
            {t}
          </text>
        </g>
      ))}
      {["FIN-Invoice", "HR-Letter", "LEG-Contract"].map((t, i) => (
        <g key={t}>
          <rect
            x="176"
            y={46 + i * 34}
            width="128"
            height="26"
            rx="6"
            fill="#ffffff"
            stroke={ACCENT}
          />
          <text
            x="186"
            y={64 + i * 34}
            fill={ACCENT}
            fontSize="14"
            fontWeight="700"
          >
            {t}
          </text>
          <text
            x="294"
            y={64 + i * 34}
            textAnchor="end"
            fill={ACCENT}
            fontSize="14"
          >
            v2
          </text>
        </g>
      ))}
    </Frame>
  );
}

/* 4. A template on one laptop vs a shared location */
export function SharedSketch() {
  return (
    <Frame
      id="uwt-ms-shared"
      title="Templates kept on one laptop"
      desc="Avoid: a template stored on a single laptop. Do this: a shared location feeding several team members."
    >
      <rect
        x="42"
        y="62"
        width="76"
        height="50"
        rx="6"
        fill="#ffffff"
        stroke={SLATE}
      />
      <path d="M34 120h92l-6 10H40l-6-10Z" fill="#ffffff" stroke={SLATE} />
      <rect
        x="62"
        y="76"
        width="22"
        height="26"
        rx="3"
        fill="none"
        stroke={SLATE}
        strokeDasharray="3 3"
      />
      <rect x="226" y="48" width="56" height="34" rx="7" fill={ACCENT} />
      <path
        d="M236 60h16l4 4h18"
        stroke="#ffffff"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <path
            d={`M254 84V${96}H${190 + i * 64}V108`}
            fill="none"
            stroke={ACCENT}
            strokeWidth="1.5"
          />
          <circle
            cx={190 + i * 64}
            cy="122"
            r="12"
            fill="#ffffff"
            stroke={ACCENT}
            strokeWidth="1.5"
          />
          <circle cx={190 + i * 64} cy="119" r="3.5" fill={ACCENT} />
          <path d={`M${183 + i * 64} 130a8 6 0 0 1 14 0`} fill={ACCENT} />
        </g>
      ))}
      <text
        x="240"
        y="154"
        textAnchor="middle"
        fill={ACCENT}
        fontSize="14"
        fontWeight="700"
      >
        Shared folder
      </text>
    </Frame>
  );
}

/* 5. Skipping testing vs checking on different versions */
export function TestingSketch() {
  return (
    <Frame
      id="uwt-ms-testing"
      title="Skipping testing"
      desc="Avoid: rolling out after checking on one machine. Do this: test on several Word versions and platforms first."
    >
      <rect
        x="34"
        y="52"
        width="92"
        height="64"
        rx="8"
        fill="#ffffff"
        stroke={SLATE}
      />
      <path
        d="M50 70h60M50 84h44M50 98h52"
        stroke={SLATE}
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M96 126l8 8M104 126l-8 8"
        stroke="#c0392b"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <rect
            x={178 + i * 42}
            y={52 + (i % 2) * 10}
            width="36"
            height="48"
            rx="6"
            fill="#ffffff"
            stroke={ACCENT}
            strokeWidth="1.5"
          />
          <path
            d={`M${186 + i * 42} ${76 + (i % 2) * 10}l5 5 9-10`}
            fill="none"
            stroke={ACCENT}
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      ))}
      <text
        x="240"
        y="134"
        textAnchor="middle"
        fill={ACCENT}
        fontSize="14"
        fontWeight="700"
      >
        Test first
      </text>
    </Frame>
  );
}
