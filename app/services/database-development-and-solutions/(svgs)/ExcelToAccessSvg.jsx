// app/services/database-development-and-solutions/(svgs)/ExcelToAccessSvg.jsx
// A flat spreadsheet grid on the left becoming two related database tables on the right.
// Decorative only, so it is hidden from assistive technology where it is used.

// Builds the spreadsheet cell grid so the markup below stays readable
const cells = [];
for (let row = 0; row < 7; row++) {
  for (let col = 0; col < 4; col++) {
    cells.push({ x: 20 + col * 34, y: 60 + row * 22, header: row === 0 });
  }
}

export const ExcelToAccessSvg = () => (
  <svg
    viewBox="0 0 440 300"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    focusable="false"
  >
    {/* Spreadsheet */}
    <text x="20" y="44" fontSize="11" fontWeight="700" fill="#9a9da1">
      SPREADSHEET
    </text>
    {cells.map((c) => (
      <rect
        key={`${c.x}-${c.y}`}
        x={c.x}
        y={c.y}
        width="32"
        height="20"
        fill={c.header ? "#d9dde2" : "#ffffff"}
        stroke="rgba(0,0,0,0.11)"
      />
    ))}
    {/* A couple of highlighted "problem" cells: duplicated values typed by hand */}
    <rect
      x="54"
      y="104"
      width="32"
      height="20"
      fill="#fdf6f5"
      stroke="#c0392b"
      strokeOpacity="0.5"
    />
    <rect
      x="54"
      y="170"
      width="32"
      height="20"
      fill="#fdf6f5"
      stroke="#c0392b"
      strokeOpacity="0.5"
    />

    {/* Arrow */}
    <path
      d="M172 140h40m0 0l-9 -9m9 9l-9 9"
      stroke="#046999"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    {/* Customers table */}
    <text x="236" y="44" fontSize="11" fontWeight="700" fill="#046999">
      DATABASE
    </text>
    <rect
      x="236"
      y="56"
      width="180"
      height="96"
      rx="6"
      fill="#ffffff"
      stroke="rgba(0,0,0,0.11)"
    />
    <path
      d="M236 62a6 6 0 0 1 6 -6h168a6 6 0 0 1 6 6v18h-180z"
      fill="#0d1b2a"
    />
    <text x="248" y="73" fontSize="11" fontWeight="700" fill="#ffffff">
      Customers
    </text>
    <circle cx="252" cy="96" r="4" fill="#046999" />
    <rect
      x="262"
      y="92"
      width="60"
      height="8"
      rx="4"
      fill="#4a5568"
      opacity="0.35"
    />
    <rect
      x="262"
      y="112"
      width="90"
      height="8"
      rx="4"
      fill="#4a5568"
      opacity="0.2"
    />
    <rect
      x="262"
      y="132"
      width="74"
      height="8"
      rx="4"
      fill="#4a5568"
      opacity="0.2"
    />

    {/* Orders table */}
    <rect
      x="236"
      y="186"
      width="180"
      height="96"
      rx="6"
      fill="#ffffff"
      stroke="rgba(0,0,0,0.11)"
    />
    <path
      d="M236 192a6 6 0 0 1 6 -6h168a6 6 0 0 1 6 6v18h-180z"
      fill="#0d1b2a"
    />
    <text x="248" y="203" fontSize="11" fontWeight="700" fill="#ffffff">
      Orders
    </text>
    <circle cx="252" cy="226" r="4" fill="#046999" />
    <rect
      x="262"
      y="222"
      width="54"
      height="8"
      rx="4"
      fill="#4a5568"
      opacity="0.35"
    />
    <rect
      x="262"
      y="242"
      width="80"
      height="8"
      rx="4"
      fill="#046999"
      opacity="0.45"
    />
    <rect
      x="262"
      y="262"
      width="66"
      height="8"
      rx="4"
      fill="#4a5568"
      opacity="0.2"
    />

    {/* One-to-many relationship line between the tables */}
    <path d="M396 116h12v130h-60" stroke="#046999" strokeWidth="1.5" />
    <text x="398" y="110" fontSize="11" fontWeight="700" fill="#046999">
      1
    </text>
    <text x="334" y="250" fontSize="13" fontWeight="700" fill="#046999">
      ∞
    </text>
  </svg>
);
