// /app/blog/microsoft-access-on-mac/(svgs)/ChooserSvg.jsx
// Decision flow: four yes/no questions leading to the recommended option.
// The recommended outcome (Parallels) is solid accent, the others light accent.
// Hex values and the tokens they match:
//   #046999 $accent   #034e72 $accent-dark   #e8f4fa $accent-light
//   #0d1b2a $text-primary   #4a5568 $text-secondary   #ffffff $white

const QUESTIONS = [
  {
    y: 20,
    lines: ["Do you only need to view or", "export the data?"],
    title: "File viewer",
    sub: "Read-only, emergency use",
  },
  {
    y: 140,
    lines: ["Will several people or devices", "need access, perhaps remotely?"],
    title: "Cloud hosting",
    sub: "Any device, shared setup",
  },
  {
    y: 260,
    lines: ["Do you want to move away from", "Access altogether?"],
    title: "Migrate to an alternative",
    sub: "Long-term, Mac-first",
  },
  {
    y: 380,
    lines: ["Is your Mac an Intel model", "from 2020 or earlier?"],
    title: "Boot Camp",
    sub: "Native speed, needs reboots",
  },
];

export default function ChooserSvg() {
  return (
    <svg
      viewBox="0 0 760 616"
      role="img"
      aria-labelledby="mac-choose-title mac-choose-desc"
      fontFamily="aptos"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title id="mac-choose-title">Which Access on Mac option suits you</title>
      <desc id="mac-choose-desc">
        A flowchart. If you only need to view or export data, use a file viewer.
        If several people or devices need access, use cloud hosting. If you want
        to move away from Access, migrate to an alternative. If your Mac is an
        Intel model from 2020 or earlier, Boot Camp is possible. Otherwise,
        Parallels Desktop is the recommended option.
      </desc>
      <defs>
        <marker
          id="mac-choose-arrow"
          viewBox="0 0 10 10"
          refX="8"
          refY="5"
          markerWidth="8"
          markerHeight="8"
          orient="auto-start-reverse"
        >
          <path d="M1 1l8 4-8 4z" fill="#046999" />
        </marker>
      </defs>

      {QUESTIONS.map((q) => (
        <g key={q.title}>
          {/* Question */}
          <rect
            x="20"
            y={q.y}
            width="360"
            height="76"
            rx="14"
            fill="#ffffff"
            stroke="#046999"
            strokeWidth="1.5"
          />
          <text
            x="40"
            y={q.y + 32}
            fontSize="16"
            fontWeight="700"
            fill="#0d1b2a"
          >
            {q.lines[0]}
          </text>
          <text
            x="40"
            y={q.y + 54}
            fontSize="16"
            fontWeight="700"
            fill="#0d1b2a"
          >
            {q.lines[1]}
          </text>

          {/* Yes: across to the outcome */}
          <path
            d={`M380 ${q.y + 38}H466`}
            stroke="#046999"
            strokeWidth="2"
            fill="none"
            markerEnd="url(#mac-choose-arrow)"
          />
          <text
            x="394"
            y={q.y + 28}
            fontSize="14"
            fontWeight="700"
            fill="#046999"
          >
            Yes
          </text>
          <rect
            x="470"
            y={q.y}
            width="270"
            height="76"
            rx="14"
            fill="#e8f4fa"
            stroke="#046999"
            strokeOpacity="0.45"
            strokeWidth="1.5"
          />
          <text
            x="490"
            y={q.y + 32}
            fontSize="16"
            fontWeight="700"
            fill="#034e72"
          >
            {q.title}
          </text>
          <text x="490" y={q.y + 56} fontSize="14" fill="#4a5568">
            {q.sub}
          </text>

          {/* No: down to the next question */}
          <path
            d={`M200 ${q.y + 76}V${q.y + 116}`}
            stroke="#046999"
            strokeWidth="2"
            fill="none"
            markerEnd="url(#mac-choose-arrow)"
          />
          <text
            x="214"
            y={q.y + 102}
            fontSize="14"
            fontWeight="700"
            fill="#4a5568"
          >
            No
          </text>
        </g>
      ))}

      {/* Recommended outcome */}
      <rect x="20" y="500" width="360" height="76" rx="14" fill="#046999" />
      <text x="40" y="532" fontSize="16" fontWeight="700" fill="#ffffff">
        Parallels Desktop
      </text>
      <text x="40" y="556" fontSize="14" fill="#ffffff" fillOpacity="0.88">
        Recommended for most users
      </text>
    </svg>
  );
}
