// /app/blog/word-desktop-vs-web/(svgs)/CapabilitySvg.jsx
// Dumbbell chart: where Word for web and Word for desktop sit on eight capabilities.
// Hex values: $accent #046999, $accent-light #e8f4fa, $text-primary #0d1b2a, $text-secondary #4a5568.
// Positions are an illustrative guide, not a benchmark.

const rows = [
  { label: "Quick sharing by link", web: 88, desktop: 78 },
  { label: "Access on any device", web: 95, desktop: 55 },
  { label: "Formatting and layout control", web: 38, desktop: 100 },
  { label: "Automation (macros, mail merge)", web: 6, desktop: 95 },
  { label: "Large or complex documents", web: 30, desktop: 95 },
  { label: "Working offline", web: 20, desktop: 96 },
  { label: "Citations and cross-references", web: 24, desktop: 92 },
  { label: "Add-ins and integrations", web: 26, desktop: 90 },
];

const X0 = 28;
const X1 = 532;
const top = 84;
const pitch = 64;

const xAt = (v) => X0 + ((X1 - X0) * v) / 100;

export default function CapabilitySvg() {
  return (
    <svg
      viewBox="0 0 560 640"
      role="img"
      aria-labelledby="wdw-cap-title wdw-cap-desc"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "100%", height: "auto", display: "block" }}
    >
      <title id="wdw-cap-title">
        Word for web compared with Word for desktop
      </title>
      <desc id="wdw-cap-desc">
        Eight rows, each with a hollow dot for Word for web and a filled dot for
        Word for desktop. The web version is close to desktop for sharing and
        device access, and far behind for formatting, automation, large
        documents, offline work, references and add-ins.
      </desc>

      {/* legend */}
      <circle
        cx="36"
        cy="34"
        r="9"
        fill="#ffffff"
        stroke="#8a94a3"
        strokeWidth="3"
      />
      <text x="54" y="40" fontSize="15" fill="#0d1b2a" fontWeight="600">
        Word for web
      </text>
      <circle cx="226" cy="34" r="9" fill="#046999" />
      <text x="244" y="40" fontSize="15" fill="#0d1b2a" fontWeight="600">
        Word for desktop
      </text>

      {rows.map((r, i) => {
        const y = top + i * pitch;
        const lo = Math.min(r.web, r.desktop);
        const hi = Math.max(r.web, r.desktop);
        return (
          <g key={r.label}>
            <text x={X0} y={y} fontSize="15" fill="#0d1b2a">
              {r.label}
            </text>
            <rect
              x={X0}
              y={y + 22}
              width={X1 - X0}
              height="6"
              rx="3"
              fill="#e8f4fa"
            />
            <rect
              x={xAt(lo)}
              y={y + 21}
              width={xAt(hi) - xAt(lo)}
              height="8"
              rx="4"
              fill="#9fc3d4"
            />
            <circle
              cx={xAt(r.web)}
              cy={y + 25}
              r="11"
              fill="#ffffff"
              stroke="#8a94a3"
              strokeWidth="3"
            />
            <circle cx={xAt(r.desktop)} cy={y + 25} r="11" fill="#046999" />
          </g>
        );
      })}

      <text x={X0} y="612" fontSize="14" fill="#4a5568">
        Fewer features
      </text>
      <text x={X1} y="612" fontSize="14" fill="#4a5568" textAnchor="end">
        Full feature set
      </text>
      <text x="280" y="634" fontSize="14" fill="#4a5568" textAnchor="middle">
        Illustrative guide only, not a benchmark
      </text>
    </svg>
  );
}
