// /app/blog/custom-excel-shortcuts-with-macros/(svgs)/Keys.jsx
//
// Every keyboard key used in this post, drawn as inline SVG. Replaces the old
// /public/blog/keys/*.webp images, so there are no image requests at all.
// Add a key by adding one entry to KEYS.
//
// Colours (hard-coded, matching globals.scss): key base #c9d1d9 (between
// $line-strong and $text-muted), key face #ffffff, face edge #d4d6d9
// ($line-strong), label #0d1b2a ($text-primary), glyph #046999 ($accent).

import React from "react";

const FACE_H = 62;
const BASE_H = 68;

// Lucide-style "command" glyph, 24x24, drawn with strokes.
const COMMAND_PATH =
  "M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3";
const SHIFT_PATH = "M12 3 3.5 12.5H9V20h6v-7.5h5.5Z";
const OPTION_PATH = "M3 6h5.5l7 12H21M14 6h7";
const CTRL_PATH = "m6 15 6-6 6 6";

export const KEYS = {
  command: {
    width: 92,
    label: "command",
    glyph: COMMAND_PATH,
    name: "Command",
  },
  shift: { width: 100, label: "shift", glyph: SHIFT_PATH, name: "Shift" },
  option: { width: 92, label: "option", glyph: OPTION_PATH, name: "Option" },
  ctrl: { width: 84, label: "control", glyph: CTRL_PATH, name: "Control" },
};

const LETTER_WIDTH = 62;

export function KeyCap({ keyName, className }) {
  const key = KEYS[keyName];
  const isLetter = !key;
  const width = isLetter ? LETTER_WIDTH : key.width;
  const letter = String(keyName).toUpperCase();

  return (
    <svg
      className={className}
      viewBox={`0 0 ${width} ${BASE_H}`}
      fontFamily="aptos, sans-serif"
      aria-hidden="true"
      focusable="false"
    >
      <rect x="0" y="6" width={width} height={FACE_H} rx="12" fill="#c9d1d9" />
      <rect
        x="1"
        y="1"
        width={width - 2}
        height={FACE_H - 2}
        rx="11"
        fill="#ffffff"
        stroke="#d4d6d9"
        strokeWidth="2"
      />
      {isLetter ? (
        <text
          x={width / 2}
          y="40"
          textAnchor="middle"
          fontSize="28"
          fontWeight="700"
          fill="#0d1b2a"
        >
          {letter}
        </text>
      ) : (
        <>
          <g
            transform={`translate(${width / 2 - 11} 10) scale(0.92)`}
            fill="none"
            stroke="#046999"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d={key.glyph} />
          </g>
          <text
            x={width / 2}
            y="46"
            textAnchor="middle"
            fontSize="15"
            fontWeight="600"
            fill="#0d1b2a"
          >
            {key.label}
          </text>
        </>
      )}
    </svg>
  );
}

function spoken(keyName) {
  return KEYS[keyName] ? KEYS[keyName].name : String(keyName).toUpperCase();
}

// <KeyCombo keys={["command", "shift", "h"]} className={styles.keyRow}
//   capClass={styles.keyCap} plusClass={styles.plus} />
export function KeyCombo({ keys, className, capClass, plusClass }) {
  return (
    <div
      className={className}
      role="group"
      aria-label={`Mac shortcut: ${keys.map(spoken).join(" plus ")}`}
    >
      {keys.map((keyName, index) => (
        <React.Fragment key={keyName}>
          <KeyCap keyName={keyName} className={capClass} />
          {index < keys.length - 1 && (
            <span className={plusClass} aria-hidden="true">
              +
            </span>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}
