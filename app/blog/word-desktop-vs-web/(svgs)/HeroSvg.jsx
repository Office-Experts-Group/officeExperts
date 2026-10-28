// /app/blog/word-desktop-vs-web/(svgs)/HeroSvg.jsx
// Hero illustration, sits on the dark hero ($dark-bg to $dark-mid).
// Hex values hard-coded: $accent #046999, $accent-on-dark #5bbce6, $dark-surface #18232e,
// $light-bg #f7f8f9, $accent-light #e8f4fa. Generic shapes only, no brand logos.

export default function HeroSvg() {
  return (
    <svg
      viewBox="0 0 560 450"
      role="img"
      aria-labelledby="wdw-hero-title wdw-hero-desc"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "100%", height: "auto", display: "block" }}
    >
      <title id="wdw-hero-title">
        A browser editor beside a full desktop editor
      </title>
      <desc id="wdw-hero-desc">
        A small browser window with a short toolbar sits behind a larger desktop
        application window with a full ribbon. Both are linked by dashed lines
        to a cloud that stores the shared document.
      </desc>

      {/* cloud */}
      <g>
        <path
          d="M236 74a24 24 0 0 1-2-47.9A34 34 0 0 1 298 20a29 29 0 0 1 4 54H236z"
          fill="#18232e"
          stroke="#5bbce6"
          strokeWidth="2"
          transform="translate(14 6)"
        />
        <text
          x="352"
          y="52"
          fill="#ffffff"
          fillOpacity="0.85"
          fontSize="15"
          fontWeight="600"
        >
          OneDrive or SharePoint
        </text>
        <text x="352" y="74" fill="#ffffff" fillOpacity="0.55" fontSize="14">
          one shared file
        </text>
      </g>
      <path
        d="M262 84C262 120 150 100 150 140"
        fill="none"
        stroke="#5bbce6"
        strokeWidth="2"
        strokeDasharray="5 6"
      />
      <path
        d="M290 84C290 120 380 100 380 160"
        fill="none"
        stroke="#5bbce6"
        strokeWidth="2"
        strokeDasharray="5 6"
      />

      {/* web window */}
      <g>
        <rect
          x="20"
          y="140"
          width="270"
          height="236"
          rx="14"
          fill="#18232e"
          stroke="#ffffff"
          strokeOpacity="0.18"
        />
        <circle cx="42" cy="162" r="5" fill="#ffffff" fillOpacity="0.35" />
        <circle cx="60" cy="162" r="5" fill="#ffffff" fillOpacity="0.35" />
        <circle cx="78" cy="162" r="5" fill="#ffffff" fillOpacity="0.35" />
        <rect
          x="98"
          y="152"
          width="170"
          height="20"
          rx="10"
          fill="#ffffff"
          fillOpacity="0.08"
        />
        {/* short toolbar */}
        <rect
          x="36"
          y="188"
          width="238"
          height="28"
          rx="6"
          fill="#ffffff"
          fillOpacity="0.08"
        />
        <rect
          x="46"
          y="196"
          width="14"
          height="12"
          rx="3"
          fill="#5bbce6"
          fillOpacity="0.8"
        />
        <rect
          x="68"
          y="196"
          width="14"
          height="12"
          rx="3"
          fill="#5bbce6"
          fillOpacity="0.8"
        />
        <rect
          x="90"
          y="196"
          width="14"
          height="12"
          rx="3"
          fill="#5bbce6"
          fillOpacity="0.8"
        />
        <rect
          x="112"
          y="196"
          width="14"
          height="12"
          rx="3"
          fill="#5bbce6"
          fillOpacity="0.4"
          strokeDasharray="3 3"
        />
        {/* page */}
        <rect x="36" y="228" width="238" height="132" rx="6" fill="#f7f8f9" />
        <rect x="52" y="244" width="110" height="10" rx="4" fill="#046999" />
        <rect x="52" y="266" width="190" height="6" rx="3" fill="#cfd6dd" />
        <rect x="52" y="282" width="176" height="6" rx="3" fill="#cfd6dd" />
        <rect x="52" y="298" width="150" height="6" rx="3" fill="#cfd6dd" />
      </g>

      {/* desktop window, in front */}
      <g>
        <rect x="200" y="170" width="340" height="236" rx="14" fill="#ffffff" />
        <path
          d="M214 170h312a14 14 0 0 1 14 14v14H200v-14a14 14 0 0 1 14-14z"
          fill="#046999"
        />
        <circle cx="222" cy="184" r="4.5" fill="#ffffff" fillOpacity="0.8" />
        <rect
          x="236"
          y="179"
          width="90"
          height="10"
          rx="5"
          fill="#ffffff"
          fillOpacity="0.5"
        />
        {/* tab pills */}
        {[0, 1, 2, 3, 4, 5, 6].map((i) => (
          <rect
            key={i}
            x={214 + i * 44}
            y="206"
            width="36"
            height="10"
            rx="5"
            fill={i === 0 ? "#046999" : "#cfd6dd"}
          />
        ))}
        {/* ribbon groups */}
        <rect x="212" y="224" width="316" height="42" rx="8" fill="#e8f4fa" />
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <g key={i}>
            <rect
              x={224 + i * 50}
              y="233"
              width="30"
              height="16"
              rx="4"
              fill="#046999"
              fillOpacity={0.9 - i * 0.1}
            />
            <rect
              x={224 + i * 50}
              y="254"
              width="30"
              height="5"
              rx="2.5"
              fill="#9fc3d4"
            />
          </g>
        ))}
        {/* page content */}
        <rect x="212" y="278" width="316" height="116" rx="6" fill="#f7f8f9" />
        <rect x="226" y="292" width="120" height="11" rx="4" fill="#046999" />
        <rect x="226" y="314" width="180" height="6" rx="3" fill="#cfd6dd" />
        <rect x="226" y="330" width="160" height="6" rx="3" fill="#cfd6dd" />
        <rect x="226" y="346" width="140" height="6" rx="3" fill="#cfd6dd" />
        {/* table block */}
        <rect
          x="418"
          y="298"
          width="96"
          height="58"
          rx="4"
          fill="#ffffff"
          stroke="#9fc3d4"
        />
        <path
          d="M418 317h96M418 337h96M450 298v58M482 298v58"
          stroke="#9fc3d4"
        />
        <rect x="418" y="298" width="96" height="19" rx="4" fill="#e8f4fa" />
        {/* collaborator cursor */}
        <path d="M470 372l0 18 5-4 4 9 4-2-4-9 7 0z" fill="#5bbce6" />
      </g>

      <text x="20" y="408" fill="#ffffff" fontSize="17" fontWeight="700">
        Word for web
      </text>
      <text x="20" y="430" fill="#ffffff" fillOpacity="0.55" fontSize="14">
        free, any browser
      </text>
      <text
        x="540"
        y="430"
        fill="#ffffff"
        fontSize="17"
        fontWeight="700"
        textAnchor="end"
      >
        Word for desktop
      </text>
    </svg>
  );
}
