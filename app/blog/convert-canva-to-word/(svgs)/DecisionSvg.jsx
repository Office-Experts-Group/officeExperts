// /app/blog/convert-canva-to-word/(svgs)/DecisionSvg.jsx
// Decision flow: which conversion method suits your design.
// Colours: $accent #046999, $accent-light #e8f4fa, $text-primary #0d1b2a, $dark-bg #111820.

const DecisionSvg = () => (
  <svg
    viewBox="0 0 640 464"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-labelledby="ctw-decision-title ctw-decision-desc"
    style={{ width: "100%", height: "auto", display: "block" }}
  >
    <title id="ctw-decision-title">
      Which Canva to Word method should you use?
    </title>
    <desc id="ctw-decision-desc">
      Start with your Canva design. If it is mostly flowing text with a simple
      layout, use Option B: export from Canva and clean up. If not, and others
      will reuse it or it must stay on brand, use Option A: rebuild it in Word
      and save it as a .dotx template. Otherwise use Option C: open the PDF in
      Word and tidy up.
    </desc>

    <g fontFamily="system-ui, -apple-system, 'Segoe UI', sans-serif">
      {/* Start */}
      <rect x="40" y="8" width="300" height="42" rx="21" fill="#111820" />
      <text
        x="190"
        y="35"
        textAnchor="middle"
        fontSize="16"
        fontWeight="600"
        fill="#ffffff"
      >
        Start: your Canva design
      </text>
      <line
        x1="190"
        y1="50"
        x2="190"
        y2="82"
        stroke="#046999"
        strokeWidth="2.5"
      />
      <path
        d="M183 74 L190 84 L197 74"
        fill="none"
        stroke="#046999"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Question 1 */}
      <rect
        x="40"
        y="86"
        width="300"
        height="76"
        rx="14"
        fill="#ffffff"
        stroke="#046999"
        strokeWidth="2"
      />
      <text
        x="190"
        y="118"
        textAnchor="middle"
        fontSize="16"
        fontWeight="600"
        fill="#0d1b2a"
      >
        Is it mostly flowing text
      </text>
      <text
        x="190"
        y="140"
        textAnchor="middle"
        fontSize="16"
        fontWeight="600"
        fill="#0d1b2a"
      >
        with a simple layout?
      </text>

      {/* Yes -> B */}
      <line
        x1="340"
        y1="124"
        x2="396"
        y2="124"
        stroke="#046999"
        strokeWidth="2.5"
      />
      <path
        d="M388 117 L398 124 L388 131"
        fill="none"
        stroke="#046999"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <text
        x="368"
        y="112"
        textAnchor="middle"
        fontSize="14"
        fontWeight="700"
        fill="#046999"
      >
        Yes
      </text>
      <rect
        x="402"
        y="76"
        width="230"
        height="96"
        rx="14"
        fill="#e8f4fa"
        stroke="#04699966"
      />
      <text
        x="418"
        y="106"
        fontSize="14"
        fontWeight="700"
        fill="#046999"
        letterSpacing="1"
      >
        OPTION B
      </text>
      <text x="418" y="132" fontSize="15" fill="#0d1b2a">
        Export from Canva, then
      </text>
      <text x="418" y="152" fontSize="15" fill="#0d1b2a">
        clean up the formatting
      </text>

      {/* No -> Q2 */}
      <line
        x1="190"
        y1="162"
        x2="190"
        y2="222"
        stroke="#046999"
        strokeWidth="2.5"
      />
      <path
        d="M183 214 L190 224 L197 214"
        fill="none"
        stroke="#046999"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <text x="208" y="198" fontSize="14" fontWeight="700" fill="#046999">
        No
      </text>

      {/* Question 2 */}
      <rect
        x="40"
        y="226"
        width="300"
        height="76"
        rx="14"
        fill="#ffffff"
        stroke="#046999"
        strokeWidth="2"
      />
      <text
        x="190"
        y="258"
        textAnchor="middle"
        fontSize="16"
        fontWeight="600"
        fill="#0d1b2a"
      >
        Will others reuse it, or must
      </text>
      <text
        x="190"
        y="280"
        textAnchor="middle"
        fontSize="16"
        fontWeight="600"
        fill="#0d1b2a"
      >
        it stay perfectly on brand?
      </text>

      {/* Yes -> A */}
      <line
        x1="340"
        y1="264"
        x2="396"
        y2="264"
        stroke="#046999"
        strokeWidth="2.5"
      />
      <path
        d="M388 257 L398 264 L388 271"
        fill="none"
        stroke="#046999"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <text
        x="368"
        y="252"
        textAnchor="middle"
        fontSize="14"
        fontWeight="700"
        fill="#046999"
      >
        Yes
      </text>
      <rect x="402" y="216" width="230" height="96" rx="14" fill="#046999" />
      <text
        x="418"
        y="246"
        fontSize="14"
        fontWeight="700"
        fill="#bfe6f7"
        letterSpacing="1"
      >
        OPTION A · RECOMMENDED
      </text>
      <text x="418" y="272" fontSize="15" fill="#ffffff">
        Rebuild in Word and save
      </text>
      <text x="418" y="292" fontSize="15" fill="#ffffff">
        it as a .dotx template
      </text>

      {/* No -> C */}
      <line
        x1="190"
        y1="302"
        x2="190"
        y2="352"
        stroke="#046999"
        strokeWidth="2.5"
      />
      <path
        d="M183 344 L190 354 L197 344"
        fill="none"
        stroke="#046999"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <text x="208" y="334" fontSize="14" fontWeight="700" fill="#046999">
        No
      </text>
      <rect
        x="40"
        y="358"
        width="300"
        height="96"
        rx="14"
        fill="#e8f4fa"
        stroke="#04699966"
      />
      <text
        x="56"
        y="388"
        fontSize="14"
        fontWeight="700"
        fill="#046999"
        letterSpacing="1"
      >
        OPTION C
      </text>
      <text x="56" y="414" fontSize="15" fill="#0d1b2a">
        Open the exported PDF in Word
      </text>
      <text x="56" y="434" fontSize="15" fill="#0d1b2a">
        and tidy it up (one-off use)
      </text>
    </g>
  </svg>
);

export default DecisionSvg;
