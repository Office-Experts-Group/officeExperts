export const PowerAppsVisual = () => (
  <svg
    viewBox="0 0 220 160"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <style>{`
      @keyframes rdgFormLine { 0%,100%{opacity:.35} 50%{opacity:.9} }
      @keyframes rdgCheckPop { 0%{opacity:0;transform:scale(0)} 60%{transform:scale(1.2)} 100%{opacity:1;transform:scale(1)} }
      @keyframes rdgSyncPulse { 0%,100%{opacity:.4;transform:translateX(0)} 50%{opacity:1;transform:translateX(4px)} }
      .rdgFl1{animation:rdgFormLine 2.4s ease-in-out infinite}
      .rdgFl2{animation:rdgFormLine 2.4s ease-in-out infinite;animation-delay:.4s}
      .rdgFl3{animation:rdgFormLine 2.4s ease-in-out infinite;animation-delay:.8s}
      .rdgFl4{animation:rdgFormLine 2.4s ease-in-out infinite;animation-delay:1.2s}
      .rdgChk{animation:rdgCheckPop .5s cubic-bezier(.17,.67,.35,1.4) 1.2s both}
      .rdgSyn{animation:rdgSyncPulse 1.8s ease-in-out infinite}
    `}</style>
    <rect
      x="68"
      y="8"
      width="60"
      height="100"
      rx="8"
      fill="#18232e"
      stroke="rgba(4,105,153,.5)"
      strokeWidth="1.5"
    />
    <rect x="74" y="20" width="48" height="68" rx="3" fill="#0d1b2a" />
    <rect
      className="rdgFl1"
      x="78"
      y="26"
      width="36"
      height="6"
      rx="2"
      fill="rgba(4,105,153,.6)"
    />
    <rect
      className="rdgFl2"
      x="78"
      y="36"
      width="28"
      height="6"
      rx="2"
      fill="rgba(4,105,153,.45)"
    />
    <rect
      className="rdgFl3"
      x="78"
      y="46"
      width="32"
      height="6"
      rx="2"
      fill="rgba(4,105,153,.45)"
    />
    <rect
      className="rdgFl4"
      x="78"
      y="56"
      width="22"
      height="6"
      rx="2"
      fill="rgba(4,105,153,.35)"
    />
    <rect
      x="78"
      y="70"
      width="40"
      height="12"
      rx="3"
      fill="rgba(4,105,153,.8)"
    />
    <g className="rdgChk">
      <circle cx="98" cy="76" r="4" fill="rgba(46,200,120,.9)" />
      <path
        d="M95.5 76l2 2 4-4"
        stroke="#fff"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <rect
      x="72"
      y="108"
      width="52"
      height="14"
      rx="4"
      fill="#18232e"
      stroke="rgba(4,105,153,.4)"
      strokeWidth="1"
    />
    <circle cx="82" cy="115" r="3" fill="rgba(46,200,120,.7)" />
    <text
      x="88"
      y="119"
      fill="rgba(255,255,255,.6)"
      fontSize="6.5"
      fontWeight="700"
      letterSpacing=".5"
    >
      Offline ready
    </text>
    <g className="rdgSyn">
      <path
        d="M136 72 C148 72 155 65 155 55 C155 45 148 40 136 40"
        stroke="rgba(4,105,153,.5)"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
      />
      <polygon points="132,36 140,40 132,44" fill="rgba(4,105,153,.6)" />
    </g>
    <rect
      x="148"
      y="44"
      width="52"
      height="38"
      rx="5"
      fill="#18232e"
      stroke="rgba(4,105,153,.35)"
      strokeWidth="1"
    />
    <ellipse
      cx="174"
      cy="56"
      rx="12"
      ry="4"
      fill="none"
      stroke="rgba(4,105,153,.7)"
      strokeWidth="1.2"
    />
    <line
      x1="162"
      y1="56"
      x2="162"
      y2="65"
      stroke="rgba(4,105,153,.7)"
      strokeWidth="1.2"
    />
    <line
      x1="186"
      y1="56"
      x2="186"
      y2="65"
      stroke="rgba(4,105,153,.7)"
      strokeWidth="1.2"
    />
    <ellipse
      cx="174"
      cy="65"
      rx="12"
      ry="4"
      fill="none"
      stroke="rgba(4,105,153,.7)"
      strokeWidth="1.2"
    />
    <text
      x="174"
      y="94"
      textAnchor="middle"
      fill="rgba(255,255,255,.4)"
      fontSize="7"
      fontWeight="700"
      letterSpacing=".5"
    >
      Dataverse
    </text>
  </svg>
);
