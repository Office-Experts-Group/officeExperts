// app/services/sql-server-and-access-integration/(svgs)/SqlFrontBackSvg.jsx

// Hero illustration: Office front ends all reading and writing one SQL Server database.
// Colours are written out because an SVG can't read the SCSS variables. They match
// globals.scss ($accent #046999, $accent-light #e8f4fa).
const apps = ["Access", "Excel", "Word", "PowerPoint", "Power BI"];

export const SqlFrontBackSvg = () => (
  <svg
    viewBox="0 0 480 344"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-label="Access, Excel, Word, PowerPoint and Power BI all connected to one SQL Server database"
    fill="none"
  >
    {/* One row per Office app: a labelled box and a curve into the database */}
    {apps.map((app, i) => {
      const centreY = 44 + i * 64;
      // The curves land at different heights on the left edge of the database
      const endY = 140 + i * 16;
      return (
        <g key={app}>
          <rect
            x="20"
            y={centreY - 24}
            width="130"
            height="48"
            rx="8"
            fill="#e8f4fa"
            stroke="#046999"
            strokeWidth="2"
          />
          <text
            x="85"
            y={centreY + 6}
            fill="#046999"
            fontSize="18"
            fontWeight="600"
            textAnchor="middle"
          >
            {app}
          </text>
          <path
            d={`M150 ${centreY} C235 ${centreY} 235 ${endY} 320 ${endY}`}
            stroke="#046999"
            strokeWidth="2"
          />
        </g>
      );
    })}

    {/* The shared SQL Server database */}
    <path d="M320 100v144c0 10 27 18 60 18s60-8 60-18V100z" fill="#046999" />
    <ellipse cx="380" cy="100" rx="60" ry="18" fill="#3a8fb5" />
    <text
      x="380"
      y="184"
      fill="#ffffff"
      fontSize="20"
      fontWeight="700"
      textAnchor="middle"
    >
      SQL Server
    </text>
  </svg>
);
