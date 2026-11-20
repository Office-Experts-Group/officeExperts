// /app/blog/microsoft-access-alternatives-guide/(svgs)/RemoteSvg.jsx
// Informative diagram: why remote Access can feel slow, and how keeping Access and the
// data close together in Azure helps.
// Hex values match tokens: #0d1b2a $text-primary, #4a5568 $text-secondary, #046999 $accent,
// #e8f4fa $accent-light, #e3e8ec $line. #9fb7c8 and #cfd8df are slate tints.

const packets = Array.from({ length: 17 }, (_, i) => 150 + i * 27);

function Laptop({ x, y, label }) {
  return (
    <g>
      <rect
        x={x}
        y={y}
        width="90"
        height="60"
        rx="7"
        fill="#ffffff"
        stroke="#9fb7c8"
        strokeWidth="1.6"
      />
      <rect x={x + 10} y={y + 10} width="40" height="6" rx="3" fill="#e8f4fa" />
      <rect
        x={x + 10}
        y={y + 22}
        width="60"
        height="5"
        rx="2.5"
        fill="#e3e8ec"
      />
      <rect
        x={x + 10}
        y={y + 33}
        width="50"
        height="5"
        rx="2.5"
        fill="#e3e8ec"
      />
      <path d={`M${x - 10} ${y + 68}h110l-8-8H${x - 2}z`} fill="#cfd8df" />
      <text
        x={x + 45}
        y={y + 96}
        fontSize="14"
        fill="#0d1b2a"
        textAnchor="middle"
      >
        {label}
      </text>
    </g>
  );
}

export default function RemoteSvg() {
  return (
    <svg
      viewBox="0 0 780 420"
      role="img"
      aria-labelledby="aag-remote-title aag-remote-desc"
      xmlns="http://www.w3.org/2000/svg"
      fontFamily="aptos"
    >
      <title id="aag-remote-title">
        Why remote Access can feel slow, and how Azure helps
      </title>
      <desc id="aag-remote-desc">
        Top row: a remote user opens an Access database stored on an office file
        server, so a lot of data crosses the internet or VPN and forms can feel
        slow. Bottom row: the user connects to a virtual desktop running Access
        in Azure, next to the data. Only screen updates cross the internet, and
        the short hop inside Azure is quick.
      </desc>

      {/* Row 1: slow */}
      <text x="20" y="28" fontSize="15" fontWeight="700" fill="#0d1b2a">
        Access file reached over a VPN
      </text>
      <Laptop x={30} y={50} label="Remote user" />
      {packets.map((x, i) => (
        <rect
          key={x}
          x={x}
          y={i % 2 ? 90 : 82}
          width="12"
          height="8"
          rx="2"
          fill="#9fb7c8"
        />
      ))}
      <path
        d="M130 94H610"
        fill="none"
        stroke="#cfd8df"
        strokeWidth="2"
        strokeDasharray="2 6"
        strokeLinecap="round"
      />
      <g fill="#e3e8ec" stroke="#9fb7c8" strokeWidth="1.4">
        <circle cx="352" cy="62" r="13" />
        <circle cx="372" cy="54" r="16" />
        <circle cx="394" cy="64" r="12" />
        <rect x="340" y="62" width="62" height="14" rx="7" stroke="none" />
      </g>
      <text x="372" y="124" fontSize="14" fill="#4a5568" textAnchor="middle">
        Internet or VPN
      </text>
      <rect
        x="620"
        y="52"
        width="140"
        height="82"
        rx="8"
        fill="#ffffff"
        stroke="#9fb7c8"
        strokeWidth="1.6"
      />
      <rect x="632" y="64" width="116" height="12" rx="4" fill="#e3e8ec" />
      <rect x="632" y="82" width="116" height="12" rx="4" fill="#e3e8ec" />
      <rect x="632" y="100" width="116" height="12" rx="4" fill="#e3e8ec" />
      <circle cx="740" cy="70" r="2.5" fill="#9fb7c8" />
      <circle cx="740" cy="88" r="2.5" fill="#9fb7c8" />
      <circle cx="740" cy="106" r="2.5" fill="#9fb7c8" />
      <text x="690" y="158" fontSize="14" fill="#0d1b2a" textAnchor="middle">
        Office file server
      </text>
      <text x="20" y="186" fontSize="14" fill="#4a5568">
        Every form load pulls data across the link, so remote use can drag.
      </text>

      <path
        d="M20 208H760"
        fill="none"
        stroke="#e3e8ec"
        strokeWidth="2"
        strokeDasharray="4 6"
      />

      {/* Row 2: fast */}
      <text x="20" y="242" fontSize="15" fontWeight="700" fill="#0d1b2a">
        Access and the data side by side in Azure
      </text>
      <Laptop x={30} y={268} label="Remote user" />
      <path
        d="M130 298H212"
        fill="none"
        stroke="#046999"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <path
        d="M205 291l8 7-8 7"
        fill="none"
        stroke="#046999"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <text x="171" y="324" fontSize="14" fill="#4a5568" textAnchor="middle">
        screen only
      </text>

      <rect
        x="224"
        y="258"
        width="536"
        height="142"
        rx="14"
        fill="#e8f4fa"
        stroke="#046999"
        strokeWidth="1.5"
      />
      <text x="244" y="284" fontSize="15" fontWeight="700" fill="#0d1b2a">
        Azure: same region
      </text>

      <rect
        x="244"
        y="302"
        width="210"
        height="76"
        rx="10"
        fill="#ffffff"
        stroke="#046999"
      />
      <text x="260" y="330" fontSize="15" fontWeight="700" fill="#0d1b2a">
        Virtual desktop
      </text>
      <text x="260" y="352" fontSize="14" fill="#4a5568">
        Runs the Access front-end
      </text>

      <rect
        x="544"
        y="302"
        width="196"
        height="76"
        rx="10"
        fill="#ffffff"
        stroke="#046999"
      />
      <text x="560" y="330" fontSize="15" fontWeight="700" fill="#0d1b2a">
        Azure SQL data
      </text>
      <text x="560" y="352" fontSize="14" fill="#4a5568">
        or data on the same VM
      </text>

      <path
        d="M462 336H536"
        fill="none"
        stroke="#046999"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M470 329l-8 7 8 7M528 329l8 7-8 7"
        fill="none"
        stroke="#046999"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <text x="499" y="320" fontSize="14" fill="#4a5568" textAnchor="middle">
        short hop
      </text>
    </svg>
  );
}
