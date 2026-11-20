// /app/blog/2gb-access-database-limit/(svgs)/GrowthSvg.jsx
// Illustrative monthly file-size chart with alert thresholds at 1GB and 1.5GB.
// Data is made up for illustration. Hex values map to tokens: #046999 = $accent,
// #e8f4fa = $accent-light, #0d1b2a = $text-primary, #4a5568 = $text-secondary,
// #c0392b = $replace-x (the 2GB limit only).

const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const SIZES = [
  0.62, 0.68, 0.75, 0.83, 0.92, 1.02, 1.12, 1.23, 1.35, 1.48, 1.62, 1.78,
];

const X0 = 90;
const X1 = 720;
const Y0 = 330;
const SCALE = 120;
const STEP = (X1 - X0) / (SIZES.length - 1);

const px = (i) => X0 + i * STEP;
const py = (gb) => Y0 - gb * SCALE;

function crossing(level) {
  for (let i = 0; i < SIZES.length - 1; i += 1) {
    if (SIZES[i] < level && SIZES[i + 1] >= level) {
      const f = (level - SIZES[i]) / (SIZES[i + 1] - SIZES[i]);
      return { x: px(i) + f * STEP, y: py(level) };
    }
  }
  return null;
}

export default function GrowthSvg() {
  const line = SIZES.map((s, i) => `${px(i).toFixed(1)} ${py(s).toFixed(1)}`);
  const linePath = `M${line.join("L")}`;
  const areaPath = `${linePath}L${px(SIZES.length - 1)} ${Y0}L${X0} ${Y0}Z`;
  const one = crossing(1);
  const oneHalf = crossing(1.5);

  return (
    <svg
      viewBox="0 0 760 382"
      role="img"
      aria-labelledby="tgb-growth-title tgb-growth-desc"
      fontFamily="aptos"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title id="tgb-growth-title">
        Illustrative Access file growth with alert levels
      </title>
      <desc id="tgb-growth-desc">
        A line chart of an example Access file growing from about 0.6GB in
        January to about 1.8GB in December. Dashed alert lines mark 1GB and
        1.5GB, and a red line marks the 2GB limit. The file crosses 1GB around
        June and 1.5GB around October, which is the point to start planning a
        migration. The data is illustrative.
      </desc>

      <text x={X0} y="36" fill="#4a5568" fontSize="14">
        Illustrative file size by month
      </text>

      {/* grid and axis */}
      {[0, 0.5, 1, 1.5, 2].map((gb) => (
        <g key={gb}>
          <path
            d={`M${X0} ${py(gb)}H${X1}`}
            stroke="#0d1b2a"
            strokeOpacity={gb === 0 ? 0.35 : 0.1}
            strokeWidth="1.5"
          />
          <text
            x={X0 - 10}
            y={py(gb) + 5}
            textAnchor="end"
            fill="#4a5568"
            fontSize="14"
          >
            {gb === 0 ? "0" : `${gb}GB`}
          </text>
        </g>
      ))}

      {/* limit and alert lines */}
      <path d={`M${X0} ${py(2)}H${X1}`} stroke="#c0392b" strokeWidth="2.5" />
      <text x={X0} y={py(2) - 10} fill="#c0392b" fontSize="15" fontWeight="700">
        2GB limit
      </text>
      <path
        d={`M${X0} ${py(1.5)}H${X1}`}
        stroke="#046999"
        strokeWidth="2"
        strokeDasharray="7 6"
      />
      <path
        d={`M${X0} ${py(1)}H${X1}`}
        stroke="#046999"
        strokeWidth="2"
        strokeDasharray="7 6"
      />
      <text
        x={X1}
        y={py(1.5) + 18}
        textAnchor="end"
        fill="#046999"
        fontSize="14"
        fontWeight="700"
      >
        Alert 2
      </text>
      <text
        x={X1}
        y={py(1) - 8}
        textAnchor="end"
        fill="#046999"
        fontSize="14"
        fontWeight="700"
      >
        Alert 1
      </text>

      {/* growth line */}
      <path d={areaPath} fill="#e8f4fa" fillOpacity="0.9" />
      <path
        d={linePath}
        fill="none"
        stroke="#046999"
        strokeWidth="3.5"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      {SIZES.map((s, i) => (
        <circle
          key={MONTHS[i]}
          cx={px(i)}
          cy={py(s)}
          r="4.5"
          fill="#ffffff"
          stroke="#046999"
          strokeWidth="2.5"
        />
      ))}
      {MONTHS.map((m, i) => (
        <text
          key={`m-${m}`}
          x={px(i)}
          y={Y0 + 24}
          textAnchor="middle"
          fill="#4a5568"
          fontSize="14"
        >
          {m}
        </text>
      ))}

      {/* callouts */}
      {one && (
        <g>
          <path
            d={`M240 182L${one.x - 6} ${one.y - 4}`}
            stroke="#0d1b2a"
            strokeOpacity="0.45"
            strokeWidth="1.5"
          />
          <circle
            cx={one.x}
            cy={one.y}
            r="8"
            fill="#046999"
            stroke="#ffffff"
            strokeWidth="2.5"
          />
          <rect
            x="110"
            y="118"
            width="190"
            height="64"
            rx="10"
            fill="#ffffff"
            stroke="#0d1b2a"
            strokeOpacity="0.15"
          />
          <text x="126" y="142" fill="#0d1b2a" fontSize="15" fontWeight="700">
            At 1GB
          </text>
          <text x="126" y="164" fill="#4a5568" fontSize="14">
            Set a file-size alert
          </text>
        </g>
      )}
      {oneHalf && (
        <g>
          <path
            d={`M640 215L${oneHalf.x + 2} ${oneHalf.y + 8}`}
            stroke="#0d1b2a"
            strokeOpacity="0.45"
            strokeWidth="1.5"
          />
          <circle
            cx={oneHalf.x}
            cy={oneHalf.y}
            r="8"
            fill="#046999"
            stroke="#ffffff"
            strokeWidth="2.5"
          />
          <rect
            x="520"
            y="215"
            width="200"
            height="84"
            rx="10"
            fill="#ffffff"
            stroke="#0d1b2a"
            strokeOpacity="0.15"
          />
          <text x="536" y="241" fill="#0d1b2a" fontSize="15" fontWeight="700">
            At 1.5GB
          </text>
          <text x="536" y="263" fill="#4a5568" fontSize="14">
            Start planning your
          </text>
          <text x="536" y="283" fill="#4a5568" fontSize="14">
            migration now
          </text>
        </g>
      )}
    </svg>
  );
}
