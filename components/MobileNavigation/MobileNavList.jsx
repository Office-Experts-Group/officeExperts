import React from "react";
import Link from "next/link";

export default function MobileNavList({
  items,
  onItemClick,
  onNavigate,
  styles,
  isTransitioning,
}) {
  const handleClick = (item) => {
    if (item.items) {
      onItemClick(item.label);
    } else if (item.href) {
      onNavigate();
    }
  };

  return (
    <ul
      className={`${styles.navList} ${
        isTransitioning ? styles.fadeOut : styles.fadeIn
      }`}
    >
      {items.map((item, index) => (
        <li key={index} className={styles.navItem}>
          {item.items ? (
            <button
              onClick={() => handleClick(item)}
              className={styles.navButton}
            >
              {item.label}
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                height="1.5em"
                width="1.5em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M13.293 6.293L7.586 12 13.293 17.707 14.707 16.293 10.414 12 14.707 7.707z"></path>
              </svg>
            </button>
          ) : (
            <Link
              href={item.href}
              className={styles.navLink}
              onClick={() => handleClick(item)}
            >
              {item.label}
            </Link>
          )}
        </li>
      ))}
    </ul>
  );
}
