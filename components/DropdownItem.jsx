"use client";
import React from "react";
import Link from "next/link";

import styles from "../styles/header.module.css";

export default function DropdownItem({ item, handleLinkClick }) {
  if (!item.items) {
    return (
      <li>
        <Link href={item.href} onClick={() => handleLinkClick(item.label)}>
          <span>{item.label}</span>
        </Link>
      </li>
    );
  }

  return (
    <li className={styles.nestedDropdown}>
      <Link href={item.href} onClick={() => handleLinkClick(item.label)}>
        <span>{item.label}</span>
      </Link>
      <ul className={styles.nestedItems}>
        {item.items.map((subItem, index) => (
          <DropdownItem
            key={index}
            item={subItem}
            handleLinkClick={handleLinkClick}
          />
        ))}
      </ul>
    </li>
  );
}
