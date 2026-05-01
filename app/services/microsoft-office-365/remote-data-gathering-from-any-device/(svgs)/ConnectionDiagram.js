// services/microsoft-office-365/remote-data-gathering-from-any-device/(svgs)/ConnectionDiagram.jsx
import React from "react";

/**
 * Animated SVG showing devices → cloud → systems data flow.
 * All animation is CSS-driven via keyframes defined inline.
 */
export const ConnectionDiagram = () => (
  <svg
    viewBox="0 0 400 420"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    role="img"
    style={{ width: "100%", height: "auto", display: "block" }}
  >
    <defs>
      {/* Packet travel animations */}
      <style>{`
        @keyframes pktUp {
          0%   { offset-distance: 0%;   opacity: 0; }
          8%   { opacity: 0.9; }
          90%  { opacity: 0.9; }
          100% { offset-distance: 100%; opacity: 0; }
        }
        @keyframes pktDown {
          0%   { offset-distance: 100%; opacity: 0; }
          8%   { opacity: 0.75; }
          90%  { opacity: 0.75; }
          100% { offset-distance: 0%;   opacity: 0; }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50%       { opacity: 1;   transform: scale(1.08); }
        }
        @keyframes cloudPulse {
          0%, 100% { opacity: 0.9; }
          50%       { opacity: 1; }
        }
        @keyframes nodeFade {
          0%   { opacity: 0; transform: translateY(6px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        .pkt-l1 {
          offset-path: path("M 80 295 C 80 270 200 260 200 240");
          animation: pktUp 2.8s ease-in-out infinite;
          animation-delay: 0s;
        }
        .pkt-l2 {
          offset-path: path("M 80 295 C 80 270 200 260 200 240");
          animation: pktUp 2.8s ease-in-out infinite;
          animation-delay: -1.4s;
        }
        .pkt-c1 {
          offset-path: path("M 200 295 L 200 240");
          animation: pktUp 2.4s ease-in-out infinite;
          animation-delay: 0.3s;
        }
        .pkt-c2 {
          offset-path: path("M 200 295 L 200 240");
          animation: pktUp 2.4s ease-in-out infinite;
          animation-delay: -1.2s;
        }
        .pkt-r1 {
          offset-path: path("M 320 295 C 320 270 200 260 200 240");
          animation: pktUp 3.1s ease-in-out infinite;
          animation-delay: 0.6s;
        }

        .pkt-out1 {
          offset-path: path("M 200 168 C 200 148 80 138 80 118");
          animation: pktDown 2.6s ease-in-out infinite;
          animation-delay: 1.1s;
        }
        .pkt-out2 {
          offset-path: path("M 200 168 L 200 118");
          animation: pktDown 2.9s ease-in-out infinite;
          animation-delay: 0.4s;
        }
        .pkt-out3 {
          offset-path: path("M 200 168 C 200 148 320 138 320 118");
          animation: pktDown 2.7s ease-in-out infinite;
          animation-delay: 1.6s;
        }

        .cloud-ring { animation: cloudPulse 3s ease-in-out infinite; }
        .dev-node   { animation: nodeFade 0.6s ease both; }
        .dev-node:nth-child(1) { animation-delay: 0.1s; }
        .dev-node:nth-child(2) { animation-delay: 0.25s; }
        .dev-node:nth-child(3) { animation-delay: 0.4s; }
        .sys-node   { animation: nodeFade 0.6s ease both; }
        .sys-node:nth-child(1) { animation-delay: 0.5s; }
        .sys-node:nth-child(2) { animation-delay: 0.65s; }
        .sys-node:nth-child(3) { animation-delay: 0.8s; }
      `}</style>

      {/* Connector line gradient */}
      <linearGradient id="lineGrad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#046999" stopOpacity="0.6" />
        <stop offset="100%" stopColor="#046999" stopOpacity="0.15" />
      </linearGradient>
      <linearGradient id="lineGradDown" x1="0" y1="1" x2="0" y2="0">
        <stop offset="0%" stopColor="#046999" stopOpacity="0.6" />
        <stop offset="100%" stopColor="#046999" stopOpacity="0.15" />
      </linearGradient>
    </defs>

    {/* ── Connector lines — devices to cloud ── */}
    <path
      d="M 80 295 C 80 270 200 260 200 240"
      stroke="url(#lineGrad)"
      strokeWidth="1.5"
      strokeDasharray="4 4"
    />
    <path
      d="M 200 295 L 200 240"
      stroke="url(#lineGrad)"
      strokeWidth="1.5"
      strokeDasharray="4 4"
    />
    <path
      d="M 320 295 C 320 270 200 260 200 240"
      stroke="url(#lineGrad)"
      strokeWidth="1.5"
      strokeDasharray="4 4"
    />

    {/* ── Connector lines — cloud to systems ── */}
    <path
      d="M 200 168 C 200 148 80 138 80 118"
      stroke="url(#lineGradDown)"
      strokeWidth="1.5"
      strokeDasharray="4 4"
    />
    <path
      d="M 200 168 L 200 118"
      stroke="url(#lineGradDown)"
      strokeWidth="1.5"
      strokeDasharray="4 4"
    />
    <path
      d="M 200 168 C 200 148 320 138 320 118"
      stroke="url(#lineGradDown)"
      strokeWidth="1.5"
      strokeDasharray="4 4"
    />

    {/* ── Animated data packets — upward ── */}
    <circle className="pkt-l1" r="4" fill="#046999" />
    <circle className="pkt-l2" r="3" fill="rgba(4,105,153,0.6)" />
    <circle className="pkt-c1" r="4" fill="#046999" />
    <circle className="pkt-c2" r="3" fill="rgba(4,105,153,0.5)" />
    <circle className="pkt-r1" r="4" fill="#046999" />

    {/* ── Animated data packets — downward (responses) ── */}
    <circle className="pkt-out1" r="3" fill="rgba(46,200,120,0.8)" />
    <circle className="pkt-out2" r="3" fill="rgba(46,200,120,0.7)" />
    <circle className="pkt-out3" r="3" fill="rgba(46,200,120,0.8)" />

    {/* ════════════════════════════════
        TOP ROW — SYSTEMS
        ════════════════════════════════ */}

    {/* System node: Dataverse */}
    <g className="sys-node">
      <rect
        x="28"
        y="60"
        width="104"
        height="58"
        rx="6"
        fill="#18232e"
        stroke="rgba(4,105,153,0.35)"
        strokeWidth="1"
      />
      {/* DB icon */}
      <ellipse
        cx="80"
        cy="78"
        rx="16"
        ry="5"
        fill="none"
        stroke="rgba(4,105,153,0.7)"
        strokeWidth="1.4"
      />
      <line
        x1="64"
        y1="78"
        x2="64"
        y2="90"
        stroke="rgba(4,105,153,0.7)"
        strokeWidth="1.4"
      />
      <line
        x1="96"
        y1="78"
        x2="96"
        y2="90"
        stroke="rgba(4,105,153,0.7)"
        strokeWidth="1.4"
      />
      <ellipse
        cx="80"
        cy="90"
        rx="16"
        ry="5"
        fill="none"
        stroke="rgba(4,105,153,0.7)"
        strokeWidth="1.4"
      />
      <text
        x="80"
        y="109"
        textAnchor="middle"
        fill="rgba(255,255,255,0.65)"
        fontSize="8.5"
        fontWeight="700"
        letterSpacing="0.5"
      >
        Dataverse
      </text>
    </g>

    {/* System node: SharePoint / ERP */}
    <g className="sys-node">
      <rect
        x="148"
        y="60"
        width="104"
        height="58"
        rx="6"
        fill="#18232e"
        stroke="rgba(4,105,153,0.35)"
        strokeWidth="1"
      />
      {/* Grid icon */}
      <rect
        x="190"
        y="72"
        width="20"
        height="16"
        rx="2"
        fill="none"
        stroke="rgba(4,105,153,0.7)"
        strokeWidth="1.4"
      />
      <line
        x1="190"
        y1="80"
        x2="210"
        y2="80"
        stroke="rgba(4,105,153,0.7)"
        strokeWidth="1.2"
      />
      <line
        x1="200"
        y1="72"
        x2="200"
        y2="88"
        stroke="rgba(4,105,153,0.7)"
        strokeWidth="1.2"
      />
      <text
        x="200"
        y="109"
        textAnchor="middle"
        fill="rgba(255,255,255,0.65)"
        fontSize="8.5"
        fontWeight="700"
        letterSpacing="0.5"
      >
        SharePoint / ERP
      </text>
    </g>

    {/* System node: Teams / API */}
    <g className="sys-node">
      <rect
        x="268"
        y="60"
        width="104"
        height="58"
        rx="6"
        fill="#18232e"
        stroke="rgba(4,105,153,0.35)"
        strokeWidth="1"
      />
      {/* Chain link icon — two overlapping rounded rects */}
      <rect
        x="308"
        y="72"
        width="18"
        height="10"
        rx="5"
        fill="none"
        stroke="rgba(4,105,153,0.7)"
        strokeWidth="1.5"
      />
      <rect
        x="316"
        y="82"
        width="18"
        height="10"
        rx="5"
        fill="none"
        stroke="rgba(4,105,153,0.7)"
        strokeWidth="1.5"
      />
      <line
        x1="319"
        y1="77"
        x2="329"
        y2="87"
        stroke="#18232e"
        strokeWidth="3"
      />
      <line
        x1="319"
        y1="77"
        x2="329"
        y2="87"
        stroke="rgba(4,105,153,0.7)"
        strokeWidth="1.5"
      />
      <text
        x="320"
        y="109"
        textAnchor="middle"
        fill="rgba(255,255,255,0.65)"
        fontSize="8.5"
        fontWeight="700"
        letterSpacing="0.5"
      >
        Teams / API
      </text>
    </g>

    {/* ════════════════════════════════
        MIDDLE — CLOUD / POWER AUTOMATE
        ════════════════════════════════ */}
    <g className="cloud-ring">
      {/* Outer glow ring */}
      <circle
        cx="200"
        cy="204"
        r="56"
        fill="none"
        stroke="rgba(4,105,153,0.12)"
        strokeWidth="1"
      />
      <circle
        cx="200"
        cy="204"
        r="44"
        fill="none"
        stroke="rgba(4,105,153,0.2)"
        strokeWidth="1"
      />

      {/* Cloud card */}
      <rect
        x="152"
        y="168"
        width="96"
        height="72"
        rx="8"
        fill="#18232e"
        stroke="rgba(4,105,153,0.55)"
        strokeWidth="1.5"
      />

      {/* Lightning bolt — Power Automate feel */}
      <path
        d="M 205 182 L 196 203 L 203 203 L 195 222 L 210 200 L 202 200 Z"
        fill="#046999"
        opacity="0.9"
      />

      {/* Label */}
      <text
        x="200"
        y="252"
        textAnchor="middle"
        fill="rgba(4,105,153,0.9)"
        fontSize="9"
        fontWeight="800"
        letterSpacing="1.5"
      >
        POWER AUTOMATE
      </text>
    </g>

    {/* ════════════════════════════════
        BOTTOM ROW — DEVICES
        ════════════════════════════════ */}

    {/* Device: Mobile / Phone */}
    <g className="dev-node">
      <rect
        x="28"
        y="295"
        width="104"
        height="72"
        rx="6"
        fill="#18232e"
        stroke="rgba(255,255,255,0.08)"
        strokeWidth="1"
      />
      {/* Phone icon */}
      <rect
        x="70"
        y="308"
        width="20"
        height="34"
        rx="3"
        fill="none"
        stroke="rgba(255,255,255,0.45)"
        strokeWidth="1.5"
      />
      <line
        x1="77"
        y1="337"
        x2="83"
        y2="337"
        stroke="rgba(255,255,255,0.35)"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <text
        x="80"
        y="352"
        textAnchor="middle"
        fill="rgba(255,255,255,0.45)"
        fontSize="8.5"
        fontWeight="700"
        letterSpacing="0.3"
      >
        Mobile / iOS
      </text>
    </g>

    {/* Device: Tablet / Laptop */}
    <g className="dev-node">
      <rect
        x="148"
        y="295"
        width="104"
        height="72"
        rx="6"
        fill="#18232e"
        stroke="rgba(255,255,255,0.08)"
        strokeWidth="1"
      />
      {/* Laptop icon */}
      <rect
        x="178"
        y="308"
        width="44"
        height="28"
        rx="2"
        fill="none"
        stroke="rgba(255,255,255,0.45)"
        strokeWidth="1.5"
      />
      <line
        x1="172"
        y1="336"
        x2="228"
        y2="336"
        stroke="rgba(255,255,255,0.35)"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <text
        x="200"
        y="352"
        textAnchor="middle"
        fill="rgba(255,255,255,0.45)"
        fontSize="8.5"
        fontWeight="700"
        letterSpacing="0.3"
      >
        Tablet / Web
      </text>
    </g>

    {/* Device: Third-party system */}
    <g className="dev-node">
      <rect
        x="268"
        y="295"
        width="104"
        height="72"
        rx="6"
        fill="#18232e"
        stroke="rgba(255,255,255,0.08)"
        strokeWidth="1"
      />
      {/* Server icon */}
      <rect
        x="304"
        y="308"
        width="32"
        height="10"
        rx="2"
        fill="none"
        stroke="rgba(255,255,255,0.45)"
        strokeWidth="1.5"
      />
      <rect
        x="304"
        y="322"
        width="32"
        height="10"
        rx="2"
        fill="none"
        stroke="rgba(255,255,255,0.45)"
        strokeWidth="1.5"
      />
      <circle cx="331" cy="313" r="2" fill="rgba(46,200,120,0.7)" />
      <circle cx="331" cy="327" r="2" fill="rgba(46,200,120,0.7)" />
      <text
        x="320"
        y="352"
        textAnchor="middle"
        fill="rgba(255,255,255,0.45)"
        fontSize="8.5"
        fontWeight="700"
        letterSpacing="0.3"
      >
        API / System
      </text>
    </g>

    {/* ── Row labels ── */}
    <text
      x="14"
      y="57"
      fill="rgba(255,255,255,0.18)"
      fontSize="7.5"
      fontWeight="700"
      letterSpacing="2"
      textAnchor="start"
    >
      SYSTEMS
    </text>
    <text
      x="14"
      y="292"
      fill="rgba(255,255,255,0.18)"
      fontSize="7.5"
      fontWeight="700"
      letterSpacing="2"
      textAnchor="start"
    >
      DEVICES
    </text>
  </svg>
);

export default ConnectionDiagram;
