// /services/microsoft-word/document-rebranding-services/(svgs)/RebrandingWhatSvgs.js
// Icons for the five brand elements (line style, colour set by the parent via currentColor)
// and three document illustrations for the Word, PowerPoint and Excel tiles.
// Illustration hex values match the globals.scss palette.

// Shared attributes for the 24px line icons
const iconProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "1.75",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": "true",
};

export const LogoIcon = () => (
  <svg {...iconProps}>
    <rect x="3" y="3" width="18" height="18" rx="4" />
    <path d="M8 16l4-8 4 8" />
    <path d="M9.5 13h5" />
  </svg>
);

export const FontIcon = () => (
  <svg {...iconProps}>
    <path d="M3 19l6-14 6 14" />
    <path d="M5.5 14h7" />
    <path d="M15.5 12.5h5" />
    <path d="M18 12.5V19" />
  </svg>
);

export const PaletteIcon = () => (
  <svg {...iconProps}>
    <path d="M12 3a9 9 0 1 0 0 18c1.1 0 1.7-.8 1.7-1.7 0-.5-.2-.9-.5-1.3-.3-.4-.5-.8-.5-1.3 0-.9.8-1.7 1.7-1.7H17a4 4 0 0 0 4-4c0-4.4-4-8-9-8z" />
    <circle cx="7.5" cy="11" r="1" fill="currentColor" />
    <circle cx="10.5" cy="7" r="1" fill="currentColor" />
    <circle cx="15" cy="7.5" r="1" fill="currentColor" />
  </svg>
);

export const LayoutIcon = () => (
  <svg {...iconProps}>
    <rect x="3" y="4" width="18" height="16" rx="2" />
    <path d="M3 9h18" />
    <path d="M9 9v11" />
  </svg>
);

export const ToneIcon = () => (
  <svg {...iconProps}>
    <path d="M4 5h16v11H9l-5 4z" />
    <path d="M8 9.5h8M8 12.5h5" />
  </svg>
);

// Word tile: a styled page sitting in front of a second, tilted page
export const WordArtSvg = () => (
  <svg viewBox="0 0 220 260" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <rect
      x="34"
      y="14"
      width="170"
      height="236"
      rx="10"
      fill="#fff"
      opacity="0.35"
      transform="rotate(5 119 132)"
    />
    <rect x="16" y="10" width="176" height="240" rx="10" fill="#fff" />
    <rect x="34" y="28" width="28" height="28" rx="6" fill="#046999" />
    <rect x="70" y="34" width="60" height="7" rx="3.5" fill="#111820" />
    <rect x="70" y="46" width="40" height="5" rx="2.5" fill="#a0a2a6" />
    <rect x="34" y="78" width="124" height="13" rx="3" fill="#111820" />
    {[104, 118, 132].map((y) => (
      <rect key={y} x="34" y={y} width="142" height="5" rx="2.5" fill="#d5dbe1" />
    ))}
    <rect x="34" y="152" width="142" height="46" rx="8" fill="#046999" />
    <rect x="48" y="166" width="80" height="7" rx="3.5" fill="#fff" />
    <rect x="48" y="180" width="108" height="5" rx="2.5" fill="#fff" opacity="0.6" />
    <rect x="34" y="214" width="90" height="5" rx="2.5" fill="#d5dbe1" />
    <circle cx="170" cy="228" r="9" fill="#111820" />
  </svg>
);

// PowerPoint tile: a branded slide with a title panel and a small chart
export const SlideArtSvg = () => (
  <svg viewBox="0 0 320 190" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <rect x="10" y="10" width="300" height="170" rx="12" fill="#fff" />
    <path d="M22 10h98v170H22a12 12 0 0 1-12-12V22a12 12 0 0 1 12-12z" fill="#046999" />
    <rect x="30" y="30" width="22" height="22" rx="5" fill="#fff" />
    <rect x="30" y="112" width="74" height="9" rx="4.5" fill="#fff" />
    <rect x="30" y="128" width="52" height="6" rx="3" fill="#fff" opacity="0.6" />
    <rect x="140" y="30" width="130" height="12" rx="3" fill="#111820" />
    <rect x="140" y="52" width="100" height="6" rx="3" fill="#a0a2a6" />
    {[
      { x: 144, h: 36, fill: "#046999" },
      { x: 172, h: 56, fill: "#111820" },
      { x: 200, h: 44, fill: "#046999" },
      { x: 228, h: 70, fill: "#111820" },
      { x: 256, h: 52, fill: "#046999" },
    ].map(({ x, h, fill }) => (
      <rect key={x} x={x} y={160 - h} width="18" height={h} rx="3" fill={fill} />
    ))}
  </svg>
);

// Excel tile: a branded sheet with a header row and a highlighted total row
export const SheetArtSvg = () => (
  <svg viewBox="0 0 320 190" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    {[0, 1, 2, 3].map((col) => (
      <rect
        key={col}
        x={10 + col * 76}
        y="12"
        width="72"
        height="30"
        rx="5"
        fill="#046999"
        opacity={1 - col * 0.12}
      />
    ))}
    {[0, 1, 2].map((row) =>
      [0, 1, 2, 3].map((col) => (
        <rect
          key={`${row}-${col}`}
          x={10 + col * 76}
          y={48 + row * 34}
          width="72"
          height="30"
          rx="5"
          fill="#1a2a3a"
        />
      )),
    )}
    {[0, 1, 2].map((row) => (
      <rect
        key={`t${row}`}
        x="22"
        y={59 + row * 34}
        width={40 + ((row * 17) % 22)}
        height="7"
        rx="3.5"
        fill="#fff"
        opacity="0.35"
      />
    ))}
    <rect x="10" y="150" width="296" height="30" rx="5" fill="#046999" />
    <rect x="22" y="161" width="64" height="8" rx="4" fill="#fff" />
    <rect x="230" y="161" width="64" height="8" rx="4" fill="#fff" />
  </svg>
);
