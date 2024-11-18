import React from "react";
import Link from "next/link";

import styles from "../styles/header.module.css";

export default function DropdownItem({ item }) {
  if (!item.items) {
    return (
      <li>
        <Link href={item.href}>{item.label}</Link>
      </li>
    );
  }

  return (
    <li className={styles.nestedDropdown}>
      <Link href={item.href}>{item.label}</Link>
      <ul className={styles.nestedItems}>
        {item.items.map((subItem, index) => (
          <DropdownItem key={index} item={subItem} />
        ))}
      </ul>
    </li>
  );
}
