// /app/blog/pdf-to-word-conversion/(svgs)/HeroSvg.jsx
// Hero illustration: a fixed-position PDF page becoming a flowing, editable Word page.
// Sits on the dark hero. Theme values hard-coded: $accent-on-dark #5bbce6, $dark-surface #18232e,
// $dark-mid #1a2a3a, $white-75, $white-55, $white-35. Generic shapes only. Server component.

export default function HeroSvg() {
  return (
    <svg
      viewBox="0 0 560 390"
      role="img"
      aria-labelledby="ptw-hero-title ptw-hero-desc"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "100%", height: "auto", display: "block" }}
    >
      <title id="ptw-hero-title">
        A PDF page rebuilt as an editable Word page
      </title>
      <desc id="ptw-hero-desc">
        On the left, a page whose blocks are pinned to fixed positions. On the
        right, the same content rebuilt with flowing text, a real table and an
        image that wraps with its text.
      </desc>

      {/* PDF side */}
      <rect
        x="20"
        y="50"
        width="190"
        height="250"
        rx="12"
        fill="#18232e"
        stroke="#ffffff"
        strokeOpacity="0.18"
      />
      <rect
        x="20"
        y="16"
        width="56"
        height="26"
        rx="13"
        fill="#1a2a3a"
        stroke="#ffffff"
        strokeOpacity="0.18"
      />
      <text
        x="48"
        y="34"
        textAnchor="middle"
        fontSize="14"
        fontWeight="700"
        fill="#ffffff"
        fillOpacity="0.75"
      >
        PDF
      </text>
      <rect
        x="40"
        y="72"
        width="110"
        height="12"
        rx="3"
        fill="#5bbce6"
        fillOpacity="0.9"
      />
      <rect
        x="40"
        y="98"
        width="150"
        height="7"
        rx="3"
        fill="#ffffff"
        fillOpacity="0.35"
      />
      <rect
        x="40"
        y="112"
        width="138"
        height="7"
        rx="3"
        fill="#ffffff"
        fillOpacity="0.35"
      />
      <rect
        x="40"
        y="126"
        width="150"
        height="7"
        rx="3"
        fill="#ffffff"
        fillOpacity="0.35"
      />
      <rect
        x="40"
        y="140"
        width="96"
        height="7"
        rx="3"
        fill="#ffffff"
        fillOpacity="0.35"
      />
      <rect
        x="40"
        y="166"
        width="150"
        height="62"
        rx="4"
        fill="none"
        stroke="#ffffff"
        strokeOpacity="0.35"
        strokeDasharray="4 3"
      />
      <path
        d="M40 187h150M40 208h150M90 166v62M140 166v62"
        stroke="#ffffff"
        strokeOpacity="0.35"
        strokeDasharray="4 3"
      />
      <rect
        x="40"
        y="242"
        width="70"
        height="38"
        rx="4"
        fill="#ffffff"
        fillOpacity="0.12"
      />
      <rect
        x="122"
        y="246"
        width="68"
        height="7"
        rx="3"
        fill="#ffffff"
        fillOpacity="0.35"
      />
      <rect
        x="122"
        y="260"
        width="52"
        height="7"
        rx="3"
        fill="#ffffff"
        fillOpacity="0.35"
      />
      {[
        [40, 72],
        [150, 72],
        [40, 98],
        [190, 98],
        [40, 166],
        [190, 166],
        [40, 242],
        [110, 280],
      ].map(([cx, cy]) => (
        <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="3.5" fill="#5bbce6" />
      ))}

      {/* Arrow */}
      <text
        x="280"
        y="160"
        textAnchor="middle"
        fontSize="15"
        fill="#ffffff"
        fillOpacity="0.75"
      >
        Rebuilt
      </text>
      <path
        d="M232 176h96"
        stroke="#5bbce6"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M318 166l12 10-12 10"
        fill="none"
        stroke="#5bbce6"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Word side */}
      <rect
        x="350"
        y="50"
        width="190"
        height="250"
        rx="12"
        fill="#18232e"
        stroke="#5bbce6"
        strokeOpacity="0.6"
      />
      <rect x="350" y="16" width="56" height="26" rx="13" fill="#046999" />
      <text
        x="378"
        y="34"
        textAnchor="middle"
        fontSize="14"
        fontWeight="700"
        fill="#ffffff"
      >
        Word
      </text>
      <rect x="351" y="51" width="188" height="14" rx="6" fill="#1a2a3a" />
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
        <path
          key={i}
          d={`M${366 + i * 17} 58v${i % 2 ? 3 : 5}`}
          stroke="#ffffff"
          strokeOpacity="0.35"
        />
      ))}
      <rect
        x="370"
        y="78"
        width="110"
        height="12"
        rx="3"
        fill="#5bbce6"
        fillOpacity="0.9"
      />
      <rect
        x="370"
        y="102"
        width="150"
        height="7"
        rx="3"
        fill="#ffffff"
        fillOpacity="0.35"
      />
      <rect
        x="370"
        y="116"
        width="150"
        height="7"
        rx="3"
        fill="#ffffff"
        fillOpacity="0.35"
      />
      <rect
        x="370"
        y="130"
        width="150"
        height="7"
        rx="3"
        fill="#ffffff"
        fillOpacity="0.35"
      />
      <rect
        x="370"
        y="144"
        width="104"
        height="7"
        rx="3"
        fill="#ffffff"
        fillOpacity="0.35"
      />
      <rect
        x="370"
        y="168"
        width="150"
        height="62"
        rx="4"
        fill="#5bbce6"
        fillOpacity="0.12"
        stroke="#5bbce6"
        strokeOpacity="0.7"
      />
      <rect
        x="370"
        y="168"
        width="150"
        height="20"
        rx="4"
        fill="#5bbce6"
        fillOpacity="0.35"
      />
      <path
        d="M370 188h150M370 209h150M420 168v62M470 168v62"
        stroke="#5bbce6"
        strokeOpacity="0.7"
      />
      <rect
        x="370"
        y="244"
        width="64"
        height="40"
        rx="4"
        fill="#5bbce6"
        fillOpacity="0.3"
      />
      <path
        d="M374 280l16-14 12 10 10-8 18 12"
        fill="none"
        stroke="#ffffff"
        strokeOpacity="0.75"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <rect
        x="444"
        y="246"
        width="76"
        height="7"
        rx="3"
        fill="#ffffff"
        fillOpacity="0.35"
      />
      <rect
        x="444"
        y="260"
        width="60"
        height="7"
        rx="3"
        fill="#ffffff"
        fillOpacity="0.35"
      />
      <rect
        x="444"
        y="274"
        width="76"
        height="7"
        rx="3"
        fill="#ffffff"
        fillOpacity="0.35"
      />

      {/* Captions */}
      <text
        x="115"
        y="332"
        textAnchor="middle"
        fontSize="16"
        fontWeight="600"
        fill="#ffffff"
        fillOpacity="0.88"
      >
        Fixed positions
      </text>
      <text
        x="115"
        y="356"
        textAnchor="middle"
        fontSize="14"
        fill="#ffffff"
        fillOpacity="0.55"
      >
        Every block pinned to the page
      </text>
      <text
        x="445"
        y="332"
        textAnchor="middle"
        fontSize="16"
        fontWeight="600"
        fill="#ffffff"
        fillOpacity="0.88"
      >
        Flowing and editable
      </text>
      <text
        x="445"
        y="356"
        textAnchor="middle"
        fontSize="14"
        fill="#ffffff"
        fillOpacity="0.55"
      >
        Styles, tables and fields that work
      </text>
    </svg>
  );
}
