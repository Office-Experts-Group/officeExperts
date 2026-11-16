// /app/blog/export-to-pdf-in-power-apps/(svgs)/AnatomySvg.jsx
// Informative diagram: the HTML held in the Compose action, with numbered pins, and
// the PDF page it produces.
// Hex values map to tokens: #0d1b2a $text-primary (code panel), #046999 $accent,
// #6fc3e8 $accent-on-dark, #e8f4fa $accent-light, #4a5568 $text-secondary,
// #e3e8ec $line, #f7f8f9 $light-bg, #ffffff $white.
import React from "react";

const MONO = "Consolas, 'Courier New', monospace";

function Pin({ cx, cy, n }) {
  return (
    <g>
      <circle
        cx={cx}
        cy={cy}
        r="12"
        fill="#6fc3e8"
        stroke="#0d1b2a"
        strokeWidth="2"
      />
      <text
        x={cx}
        y={cy + 5}
        fontSize="14"
        fontWeight="700"
        fill="#0d1b2a"
        textAnchor="middle"
      >
        {n}
      </text>
    </g>
  );
}

function Chip({ x, y, w, label }) {
  return (
    <g>
      <rect x={x} y={y - 17} width={w} height="24" rx="12" fill="#046999" />
      <text
        x={x + w / 2}
        y={y}
        fontSize="14"
        fontWeight="700"
        fill="#ffffff"
        textAnchor="middle"
      >
        {label}
      </text>
    </g>
  );
}

function Callout({ x, y, n, title, lines }) {
  return (
    <g>
      <rect
        x={x}
        y={y}
        width="370"
        height="88"
        rx="12"
        fill="#ffffff"
        stroke="#e3e8ec"
        strokeWidth="1.5"
      />
      <circle cx={x + 28} cy={y + 28} r="12" fill="#046999" />
      <text
        x={x + 28}
        y={y + 33}
        fontSize="14"
        fontWeight="700"
        fill="#ffffff"
        textAnchor="middle"
      >
        {n}
      </text>
      <text x={x + 52} y={y + 33} fontSize="15" fontWeight="700" fill="#0d1b2a">
        {title}
      </text>
      <text x={x + 52} y={y + 54} fontSize="14" fill="#4a5568">
        {lines[0]}
      </text>
      <text x={x + 52} y={y + 72} fontSize="14" fill="#4a5568">
        {lines[1]}
      </text>
    </g>
  );
}

export default function AnatomySvg() {
  return (
    <svg
      viewBox="0 0 780 488"
      xmlns="http://www.w3.org/2000/svg"
      fontFamily="aptos"
      role="img"
      aria-labelledby="pdf-anatomy-title pdf-anatomy-desc"
      style={{ width: "100%", height: "auto", display: "block" }}
    >
      <title id="pdf-anatomy-title">
        The HTML behind the PDF, with the image tag explained
      </title>
      <desc id="pdf-anatomy-desc">
        A code panel shows an image tag whose source is a data URI built from
        the content type and file content, a width style, then a heading and
        paragraph filled from the list item. An arrow leads to the PDF page
        those lines produce. Four numbered callouts explain each part.
      </desc>

      {/* code panel */}
      <rect x="20" y="16" width="460" height="238" rx="14" fill="#0d1b2a" />
      <circle cx="42" cy="36" r="5" fill="#ffffff" fillOpacity="0.25" />
      <circle cx="60" cy="36" r="5" fill="#ffffff" fillOpacity="0.25" />
      <circle cx="78" cy="36" r="5" fill="#ffffff" fillOpacity="0.25" />
      <text x="98" y="41" fontSize="14" fill="#ffffff" fillOpacity="0.65">
        Compose: the HTML
      </text>
      <path d="M20 54 H480" stroke="#ffffff" strokeOpacity="0.12" />

      <g fontFamily={MONO} fontSize="14" fill="#ffffff" fillOpacity="0.88">
        <text x="40" y="82">
          {"<img"}
        </text>
        <text x="57" y="110">
          src="data:
        </text>
        <text x="262" y="110">
          ;base64,
        </text>
        <text x="418" y="110">
          "
        </text>
        <text x="57" y="138">
          {'style="width: 200px; margin: 20px 0;"'}
        </text>
        <text x="40" y="166">
          {"/>"}
        </text>
        <text x="40" y="202">
          {"<h1>"}
        </text>
        <text x="142" y="202">
          {"</h1>"}
        </text>
        <text x="40" y="230">
          {"<p>"}
        </text>
        <text x="176" y="230">
          {"</p>"}
        </text>
      </g>
      <Chip x={156} y={110} w={100} label="content-type" />
      <Chip x={336} y={110} w={76} label="content" />
      <Chip x={80} y={202} w={56} label="Title" />
      <Chip x={70} y={230} w={100} label="Description" />

      <Pin cx={160} cy={92} n="1" />
      <Pin cx={340} cy={92} n="2" />
      <Pin cx={392} cy={140} n="3" />
      <Pin cx={132} cy={184} n="4" />

      {/* arrow */}
      <path
        d="M488 135 H516"
        stroke="#046999"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
      <path d="M514 128 l10 7 -10 7 z" fill="#046999" />

      {/* PDF page */}
      <rect
        x="532"
        y="16"
        width="228"
        height="238"
        rx="10"
        fill="#f7f8f9"
        stroke="#e3e8ec"
        strokeWidth="1.5"
      />
      <rect
        x="552"
        y="36"
        width="88"
        height="44"
        rx="6"
        fill="#e8f4fa"
        stroke="#046999"
        strokeOpacity="0.4"
      />
      <path
        d="M552 80 l26 -26 16 16 10 -9 36 19 z"
        fill="#046999"
        fillOpacity="0.7"
      />
      <circle cx="622" cy="48" r="5" fill="#046999" fillOpacity="0.5" />
      <text x="552" y="116" fontSize="18" fontWeight="700" fill="#0d1b2a">
        Pump fault
      </text>
      <rect x="552" y="134" width="188" height="7" rx="3.5" fill="#cdd9e2" />
      <rect x="552" y="150" width="172" height="7" rx="3.5" fill="#cdd9e2" />
      <rect x="552" y="166" width="180" height="7" rx="3.5" fill="#cdd9e2" />
      <rect x="552" y="182" width="120" height="7" rx="3.5" fill="#cdd9e2" />
      <rect
        x="552"
        y="206"
        width="70"
        height="22"
        rx="11"
        fill="#046999"
        fillOpacity="0.12"
      />
      <text
        x="587"
        y="222"
        fontSize="14"
        fontWeight="700"
        fill="#046999"
        textAnchor="middle"
      >
        PDF
      </text>

      {/* callouts */}
      <Callout
        x={20}
        y={286}
        n="1"
        title="Content type"
        lines={[
          "Tells the converter it is a PNG or JPEG.",
          "Use the value from Get file content.",
        ]}
      />
      <Callout
        x={410}
        y={286}
        n="2"
        title="File content"
        lines={[
          "The image data itself, as text, ready",
          "to sit inside the tag. No extra steps.",
        ]}
      />
      <Callout
        x={20}
        y={384}
        n="3"
        title="Size the image"
        lines={[
          "A width stops a large logo filling",
          "the page. 200px is a good start.",
        ]}
      />
      <Callout
        x={410}
        y={384}
        n="4"
        title="Dynamic content"
        lines={[
          "Titles and descriptions come straight",
          "from the item that triggered the flow.",
        ]}
      />
    </svg>
  );
}
