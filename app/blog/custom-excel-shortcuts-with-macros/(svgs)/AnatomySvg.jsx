// /app/blog/custom-excel-shortcuts-with-macros/(svgs)/AnatomySvg.jsx
//
// Annotated anatomy of a macro. Sits on a light panel.
// Colours (hard-coded): #111820 $dark-bg, #6fc3e8 $accent-on-dark,
// #8fa3b5 muted slate, #046999 $accent, #e8f4fa $accent-light,
// #0d1b2a $text-primary, #4a5568 $text-secondary, #ffffff $white.

import React from "react";

const MONO = "ui-monospace, SFMono-Regular, Menlo, Consolas, monospace";

const CALLOUTS = [
  { pinY: 72, boxY: 20, title: "Name", text: "Letters, numbers, no spaces" },
  {
    pinY: 124,
    boxY: 98,
    title: "Actions",
    text: "Recorded or typed VBA runs here",
  },
  { pinY: 176, boxY: 176, title: "End", text: "Every Sub closes with End Sub" },
];

export default function AnatomySvg() {
  return (
    <svg
      viewBox="0 0 700 350"
      fontFamily="aptos, sans-serif"
      role="img"
      aria-labelledby="cxs-anatomy-title cxs-anatomy-desc"
    >
      <title id="cxs-anatomy-title">The parts of a macro</title>
      <desc id="cxs-anatomy-desc">
        A three-line macro. The first line names it with Sub, the middle holds
        the actions, and End Sub closes it. The shortcut key is set in the Macro
        Options box, not in the code.
      </desc>

      <rect x="20" y="24" width="330" height="216" rx="14" fill="#111820" />
      <circle cx="44" cy="44" r="5" fill="#3a5169" />
      <circle cx="62" cy="44" r="5" fill="#3a5169" />
      <circle cx="80" cy="44" r="5" fill="#3a5169" />

      <text x="44" y="100" fontFamily={MONO} fontSize="18" fill="#ffffff">
        <tspan fill="#6fc3e8" fontWeight="700">
          Sub
        </tspan>{" "}
        HighlightRow()
      </text>
      <text x="76" y="152" fontFamily={MONO} fontSize="18" fill="#8fa3b5">
        {"' Your actions go here"}
      </text>
      <text
        x="44"
        y="204"
        fontFamily={MONO}
        fontSize="18"
        fill="#6fc3e8"
        fontWeight="700"
      >
        End Sub
      </text>

      {CALLOUTS.map((item, i) => (
        <g key={item.title}>
          <line
            x1="378"
            y1={item.pinY + 4}
            x2="410"
            y2={item.boxY + 32}
            stroke="#046999"
            strokeWidth="1.5"
            strokeDasharray="4 4"
          />
          <circle cx="364" cy={item.pinY + 4} r="14" fill="#046999" />
          <text
            x="364"
            y={item.pinY + 9}
            textAnchor="middle"
            fontSize="14"
            fontWeight="700"
            fill="#ffffff"
          >
            {i + 1}
          </text>
          <rect
            x="410"
            y={item.boxY}
            width="270"
            height="64"
            rx="12"
            fill="#e8f4fa"
            stroke="#046999"
            strokeOpacity="0.4"
          />
          <text
            x="428"
            y={item.boxY + 28}
            fontSize="15"
            fontWeight="700"
            fill="#0d1b2a"
          >
            {item.title}
          </text>
          <text x="428" y={item.boxY + 48} fontSize="14" fill="#4a5568">
            {item.text}
          </text>
        </g>
      ))}

      <rect
        x="20"
        y="262"
        width="660"
        height="64"
        rx="12"
        fill="none"
        stroke="#046999"
        strokeWidth="1.5"
        strokeDasharray="6 5"
      />
      <text x="40" y="288" fontSize="15" fontWeight="700" fill="#0d1b2a">
        Shortcut key
      </text>
      <text x="40" y="308" fontSize="14" fill="#4a5568">
        Set in the Record Macro or Macro Options box, not in the code itself.
      </text>
    </svg>
  );
}
