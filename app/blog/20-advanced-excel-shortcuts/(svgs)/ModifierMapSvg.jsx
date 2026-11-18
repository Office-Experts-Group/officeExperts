// /app/blog/20-advanced-excel-shortcuts/(svgs)/ModifierMapSvg.jsx
// Windows key -> Mac key map. The Mac keycaps are <use> references to the
// sprite from KeyCaps.jsx, so <KeySprite /> must be rendered on the page.
// Hex values -> tokens: #046999 $accent, #0d1b2a $text-primary,
// #4a5568 $text-secondary, #f7f8f9 $light-bg, #d4d6d9 $line-strong,
// #e3e8ec $line.
import React from "react";

const ROW_H = 72;
const TOP = 52;

const ROWS = [
  {
    win: "Ctrl",
    keys: [{ name: "command", w: 84 }],
    a: "Most everyday commands",
    b: "Ctrl + 1 becomes Command + 1",
  },
  {
    win: "Ctrl",
    keys: [{ name: "control", w: 84 }],
    a: "Many formatting and view commands",
    b: "Ctrl + Shift + $ stays Control + Shift + $",
  },
  {
    win: "Alt",
    keys: [{ name: "option", w: 84 }],
    a: "Menus and dropdowns",
    b: "Alt + Down Arrow becomes Option + Down Arrow",
  },
  {
    win: "Backspace",
    keys: [{ name: "delete", w: 84 }],
    a: "Backspace is Delete on a Mac",
    b: "Ctrl + Backspace becomes Control + Delete",
  },
  {
    win: "F1 to F12",
    keys: [
      { name: "function", w: 56 },
      { name: "f1", w: 56 },
    ],
    a: "Function keys",
    b: "Hold fn unless F-keys are set to standard",
  },
];

export default function ModifierMapSvg() {
  return (
    <svg
      viewBox="0 0 720 420"
      role="img"
      aria-labelledby="aes-map-title aes-map-desc"
      fontFamily="aptos"
      style={{ width: "100%", height: "auto", display: "block" }}
    >
      <title id="aes-map-title">Windows keys and their Mac equivalents</title>
      <desc id="aes-map-desc">
        Ctrl usually becomes Command, and sometimes Control. Alt becomes Option.
        Backspace becomes Delete. Function keys may need the fn key held down on
        a Mac.
      </desc>

      <text x="20" y="30" fontSize="14" fontWeight="700" fill="#4a5568">
        WINDOWS
      </text>
      <text x="246" y="30" fontSize="14" fontWeight="700" fill="#4a5568">
        MAC
      </text>
      <text x="356" y="30" fontSize="14" fontWeight="700" fill="#4a5568">
        HOW IT CHANGES
      </text>

      {ROWS.map((row, i) => {
        const y = TOP + i * ROW_H;
        let kx = 246;
        return (
          <g key={row.win + row.keys[0].name}>
            <rect
              x="20"
              y={y + 8}
              width="130"
              height="44"
              rx="10"
              fill="#f7f8f9"
              stroke="#d4d6d9"
            />
            <text
              x="85"
              y={y + 36}
              textAnchor="middle"
              fontSize="17"
              fontWeight="700"
              fill="#0d1b2a"
            >
              {row.win}
            </text>

            <path
              d={`M160 ${y + 30}H224M216 ${y + 23}l8 7-8 7`}
              fill="none"
              stroke="#046999"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {row.keys.map((k) => {
              const width = k.w * 0.75;
              const el = (
                <use
                  key={k.name}
                  href={`#aes-key-${k.name}`}
                  x={kx}
                  y={y + 6}
                  width={width}
                  height="48"
                />
              );
              kx += width + 8;
              return el;
            })}

            <text
              x="356"
              y={y + 27}
              fontSize="15"
              fontWeight="700"
              fill="#0d1b2a"
            >
              {row.a}
            </text>
            <text x="356" y={y + 49} fontSize="15" fill="#4a5568">
              {row.b}
            </text>

            {i < ROWS.length - 1 && (
              <path
                d={`M20 ${y + ROW_H - 2}H700`}
                stroke="#e3e8ec"
                strokeWidth="1"
              />
            )}
          </g>
        );
      })}
    </svg>
  );
}
