// /app/blog/20-advanced-excel-shortcuts/(svgs)/KeyCaps.jsx
// One SVG sprite for every keycap on the page. Render <KeySprite /> once,
// then <KeyCombo keys={[...]} /> anywhere. Each key on the page is a tiny
// <use> reference, so there are no key images to download.
// Hex values -> tokens: #046999 $accent, #0d1b2a $text-primary,
// #4a5568 $text-secondary, #ffffff $white, #b4c4d0 / #c3d0da keycap edge.
import React from "react";

const KEY_H = 64;

export const KEY_ICONS = {
  command:
    "M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3",
  shift: "M12 4l-8 9h5v7h6v-7h5z",
  control: "M5 15l7-7 7 7",
  option: "M3 7h5l8 10h5M14 7h7",
  return: "M20 5v6a3 3 0 0 1-3 3H5M9 10l-4 4 4 4",
  delete:
    "M9 5h11a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H9L3 12zM12.5 9.5l5 5M17.5 9.5l-5 5",
  up: "M12 19V5M6 11l6-6 6 6",
  down: "M12 5v14M6 13l6 6 6-6",
  left: "M19 12H5M11 6l-6 6 6 6",
  right: "M5 12h14M13 6l6 6-6 6",
  arrows:
    "M12 3v6M9.5 5.5L12 3l2.5 2.5M12 21v-6M9.5 18.5L12 21l2.5-2.5M3 12h6M5.5 9.5L3 12l2.5 2.5M21 12h-6M18.5 9.5L21 12l-2.5 2.5",
};

// Keys with an icon and a small label underneath
const MODIFIERS = {
  command: { w: 84, label: "command", name: "Command" },
  control: { w: 84, label: "control", name: "Control" },
  option: { w: 84, label: "option", name: "Option" },
  shift: { w: 84, label: "shift", name: "Shift" },
  return: { w: 84, label: "return", name: "Return" },
  delete: { w: 84, label: "delete", name: "Delete" },
  arrow: { w: 84, label: "arrows", name: "Arrow keys", icon: "arrows" },
};

// Keys that show only an icon
const ICON_KEYS = {
  up: { w: 56, name: "Up Arrow" },
  down: { w: 56, name: "Down Arrow" },
  left: { w: 56, name: "Left Arrow" },
  right: { w: 56, name: "Right Arrow" },
};

// Keys that show a character
const CHAR_KEYS = {
  function: { w: 56, char: "fn", name: "Function (Fn)" },
  a: { w: 56, char: "A", name: "A" },
  f: { w: 56, char: "F", name: "F" },
  l: { w: 56, char: "L", name: "L" },
  t: { w: 56, char: "T", name: "T" },
  v: { w: 56, char: "V", name: "V" },
  y: { w: 56, char: "Y", name: "Y" },
  1: { w: 56, char: "1", name: "1" },
  f1: { w: 56, char: "F1", name: "F1" },
  f3: { w: 56, char: "F3", name: "F3" },
  semicolon: { w: 56, char: ";", name: "Semicolon" },
  quote: { w: 56, char: '"', name: "Double quote" },
  dollar: { w: 56, char: "$", name: "Dollar sign" },
  percent: { w: 56, char: "%", name: "Percent sign" },
  star: { w: 56, char: "*", name: "Asterisk" },
  backTick: { w: 56, char: "`", name: "Backtick" },
};

export const KEY_WIDTHS = {
  ...Object.fromEntries(Object.entries(MODIFIERS).map(([k, v]) => [k, v.w])),
  ...Object.fromEntries(Object.entries(ICON_KEYS).map(([k, v]) => [k, v.w])),
  ...Object.fromEntries(Object.entries(CHAR_KEYS).map(([k, v]) => [k, v.w])),
};

const KEY_NAMES = {
  ...Object.fromEntries(Object.entries(MODIFIERS).map(([k, v]) => [k, v.name])),
  ...Object.fromEntries(Object.entries(ICON_KEYS).map(([k, v]) => [k, v.name])),
  ...Object.fromEntries(Object.entries(CHAR_KEYS).map(([k, v]) => [k, v.name])),
};

export function describeKeys(keys) {
  return keys.map((k) => KEY_NAMES[k]).join(" plus ");
}

const iconProps = {
  fill: "none",
  stroke: "#046999",
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

function KeyBase({ w, children, id }) {
  return (
    <symbol id={id} viewBox={`0 0 ${w} ${KEY_H}`}>
      <rect x="1" y="6" width={w - 2} height="57" rx="10" fill="#c3d0da" />
      <rect
        x="1"
        y="1"
        width={w - 2}
        height="57"
        rx="10"
        fill="#ffffff"
        stroke="#b4c4d0"
        strokeWidth="1.5"
      />
      {children}
    </symbol>
  );
}

export function KeySprite() {
  return (
    <svg
      width="0"
      height="0"
      style={{ position: "absolute" }}
      aria-hidden="true"
      focusable="false"
      fontFamily="aptos"
    >
      <defs>
        {Object.entries(MODIFIERS).map(([name, def]) => (
          <KeyBase key={name} id={`aes-key-${name}`} w={def.w}>
            <g
              {...iconProps}
              strokeWidth="2.6"
              transform={`translate(${def.w / 2 - 9} 8) scale(0.75)`}
            >
              <path d={KEY_ICONS[def.icon || name]} />
            </g>
            <text
              x={def.w / 2}
              y="42"
              textAnchor="middle"
              fontSize="14"
              fontWeight="600"
              fill="#4a5568"
            >
              {def.label}
            </text>
          </KeyBase>
        ))}
        {Object.entries(ICON_KEYS).map(([name, def]) => (
          <KeyBase key={name} id={`aes-key-${name}`} w={def.w}>
            <g
              {...iconProps}
              strokeWidth="2.4"
              transform={`translate(${def.w / 2 - 12} 17)`}
            >
              <path d={KEY_ICONS[name]} />
            </g>
          </KeyBase>
        ))}
        {Object.entries(CHAR_KEYS).map(([name, def]) => (
          <KeyBase key={name} id={`aes-key-${name}`} w={def.w}>
            <text
              x={def.w / 2}
              y="40"
              textAnchor="middle"
              fontSize="26"
              fontWeight="700"
              fill="#0d1b2a"
            >
              {def.char}
            </text>
          </KeyBase>
        ))}
      </defs>
    </svg>
  );
}

export function KeyCap({ name, className }) {
  const w = KEY_WIDTHS[name];
  return (
    <svg
      className={className}
      viewBox={`0 0 ${w} ${KEY_H}`}
      width={w}
      height={KEY_H}
      aria-hidden="true"
      focusable="false"
      fontFamily="aptos"
    >
      <use href={`#aes-key-${name}`} />
    </svg>
  );
}

export function KeyCombo({ keys, className, keyClassName, plusClassName }) {
  return (
    <span
      className={className}
      role="img"
      aria-label={`Mac: ${describeKeys(keys)}`}
    >
      {keys.map((key, index) => (
        <React.Fragment key={key}>
          <KeyCap name={key} className={keyClassName} />
          {index < keys.length - 1 && (
            <span className={plusClassName} aria-hidden="true">
              +
            </span>
          )}
        </React.Fragment>
      ))}
    </span>
  );
}
