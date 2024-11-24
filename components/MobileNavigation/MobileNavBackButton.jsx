export default function MobileNavBackButton({
  onClick,
  previousViewName,
  styles,
}) {
  if (!previousViewName) return null;

  const displayName =
    previousViewName.charAt(0).toUpperCase() +
    previousViewName
      .slice(1)
      .replace(/([A-Z])/g, " $1")
      .trim();

  return (
    <button onClick={onClick} className={styles.backButton}>
      <span>Back to {displayName}</span>
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        viewBox="0 0 24 24"
        height="1.5em"
        width="1.5em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g>
          <path fill="none" d="M0 0h24v24H0z"></path>
          <path d="M5.828 7l2.536 2.536L6.95 10.95 2 6l4.95-4.95 1.414 1.414L5.828 5H13a8 8 0 1 1 0 16H4v-2h9a6 6 0 1 0 0-12H5.828z"></path>
        </g>
      </svg>
    </button>
  );
}
