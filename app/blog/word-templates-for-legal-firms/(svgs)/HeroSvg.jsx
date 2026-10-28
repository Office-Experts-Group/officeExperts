// /app/blog/word-templates-for-legal-firms/(svgs)/HeroSvg.jsx
// Hero illustration: a copied "Save As" file becoming a governed template.
// Theme hex used: $accent #046999, $accent-light #e8f4fa, $accent-on-dark #5bbce6,
// $text-primary #0d1b2a, $replace-x #c0392b (tiny accent only).

export default function HeroSvg() {
  return (
    <svg
      viewBox="0 0 540 440"
      role="img"
      aria-labelledby="lfw-hero-title lfw-hero-desc"
      style={{ width: "100%", height: "auto", display: "block" }}
    >
      <title id="lfw-hero-title">
        A copied legal file becoming a clean template
      </title>
      <desc id="lfw-hero-desc">
        On the left, an old document with a leftover client name and a redaction
        bar. On the right, a clean template with fill-in fields for client name,
        matter number and date.
      </desc>

      <circle cx="270" cy="210" r="200" fill="#5bbce6" opacity="0.06" />
      <circle
        cx="270"
        cy="210"
        r="140"
        fill="none"
        stroke="#5bbce6"
        strokeOpacity="0.18"
        strokeDasharray="4 8"
      />

      {/* Before: copied file */}
      <g transform="translate(14 56) rotate(-5 110 150)">
        <rect
          x="0"
          y="0"
          width="224"
          height="300"
          rx="10"
          fill="#f1f3f5"
          stroke="#c4ccd4"
        />
        <rect x="16" y="18" width="92" height="10" rx="3" fill="#9a9da1" />
        <rect x="16" y="38" width="150" height="7" rx="3" fill="#c9cfd6" />
        <rect x="16" y="64" width="120" height="14" rx="3" fill="#0d1b2a" />
        <text x="146" y="75" fontSize="14" fill="#c0392b" fontWeight="700">
          old client
        </text>
        {[96, 112, 128].map((y) => (
          <rect
            key={y}
            x="16"
            y={y}
            width={192 - (y % 3) * 14}
            height="7"
            rx="3"
            fill="#c9cfd6"
          />
        ))}
        <rect
          x="16"
          y="150"
          width="192"
          height="26"
          rx="4"
          fill="none"
          stroke="#9a9da1"
          strokeDasharray="4 4"
        />
        <rect x="24" y="160" width="110" height="7" rx="3" fill="#b4bcc5" />
        <text x="142" y="168" fontSize="14" fill="#7a8089">
          2019
        </text>
        {[192, 208, 224, 240].map((y) => (
          <rect
            key={y}
            x="16"
            y={y}
            width={176 + (y % 4) * 6}
            height="7"
            rx="3"
            fill="#c9cfd6"
          />
        ))}
        <rect x="16" y="268" width="84" height="8" rx="3" fill="#9a9da1" />
        <circle cx="198" cy="40" r="12" fill="#fdf6f5" stroke="#c0392b" />
        <text
          x="198"
          y="45"
          fontSize="14"
          fontWeight="700"
          fill="#c0392b"
          textAnchor="middle"
        >
          !
        </text>
      </g>

      {/* Arrow */}
      <g>
        <path
          d="M244 214 H296"
          stroke="#5bbce6"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M286 202 L300 214 L286 226"
          fill="none"
          stroke="#5bbce6"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>

      {/* After: governed template */}
      <g transform="translate(300 34) rotate(4 110 160)">
        <rect
          x="0"
          y="0"
          width="226"
          height="332"
          rx="10"
          fill="#ffffff"
          stroke="#5bbce6"
        />
        <rect x="0" y="0" width="226" height="52" rx="10" fill="#046999" />
        <rect x="0" y="40" width="226" height="12" fill="#046999" />
        <rect
          x="16"
          y="16"
          width="64"
          height="10"
          rx="3"
          fill="#ffffff"
          opacity="0.9"
        />
        <rect
          x="16"
          y="32"
          width="96"
          height="6"
          rx="3"
          fill="#ffffff"
          opacity="0.5"
        />
        <g>
          <rect
            x="16"
            y="70"
            width="136"
            height="26"
            rx="13"
            fill="#e8f4fa"
            stroke="#046999"
          />
          <text
            x="84"
            y="88"
            fontSize="14"
            fill="#046999"
            fontWeight="700"
            textAnchor="middle"
          >
            CLIENT NAME
          </text>
          <rect
            x="16"
            y="106"
            width="116"
            height="26"
            rx="13"
            fill="#e8f4fa"
            stroke="#046999"
          />
          <text
            x="74"
            y="124"
            fontSize="14"
            fill="#046999"
            fontWeight="700"
            textAnchor="middle"
          >
            MATTER NO.
          </text>
          <rect
            x="140"
            y="106"
            width="70"
            height="26"
            rx="13"
            fill="#e8f4fa"
            stroke="#046999"
          />
          <text
            x="175"
            y="124"
            fontSize="14"
            fill="#046999"
            fontWeight="700"
            textAnchor="middle"
          >
            DATE
          </text>
        </g>
        {[150, 166, 182, 198].map((y, i) => (
          <rect
            key={y}
            x="16"
            y={y}
            width={194 - i * 12}
            height="7"
            rx="3"
            fill="#d5dde4"
          />
        ))}
        <rect x="16" y="218" width="194" height="30" rx="6" fill="#e8f4fa" />
        <text x="28" y="238" fontSize="14" fill="#046999" fontWeight="700">
          Approved clause
        </text>
        <rect
          x="16"
          y="264"
          width="90"
          height="1.5"
          fill="#0d1b2a"
          opacity="0.5"
        />
        <rect x="16" y="300" width="194" height="8" rx="3" fill="#e8f4fa" />
        <path
          d="M200 20 l6 6 l10 -12"
          fill="none"
          stroke="#ffffff"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          transform="translate(-14 2)"
        />
      </g>

      <text
        x="126"
        y="420"
        fontSize="15"
        fill="#ffffff"
        fillOpacity="0.65"
        textAnchor="middle"
      >
        Save As copy
      </text>
      <text
        x="414"
        y="420"
        fontSize="15"
        fill="#5bbce6"
        textAnchor="middle"
        fontWeight="700"
      >
        Governed template
      </text>
    </svg>
  );
}
