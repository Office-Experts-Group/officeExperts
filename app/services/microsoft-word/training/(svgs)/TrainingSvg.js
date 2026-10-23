const TrainingSvg = ({ width = 48, height = 48, className }) => (
  <svg
    width={width}
    height={height}
    className={className}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <polygon
      points="24,8 44,18 24,28 4,18"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinejoin="round"
      fill="currentColor"
      fillOpacity="0.12"
    />
    <path
      d="M12 23v10c0 4 5.4 7 12 7s12-3 12-7V23"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      fill="none"
    />
    <line x1="44" y1="18" x2="44" y2="30" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <circle cx="44" cy="32" r="2" fill="currentColor" />
  </svg>
);

export default TrainingSvg;
