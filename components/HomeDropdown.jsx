import React from "react";

import { navigationData } from "../navigationData";

import DropdownItem from "./DropdownItem";

import styles from "../styles/header.module.css";

export default function HomeDropdown() {
  // Directly use the home items from navigationData
  const homeItems = navigationData.home.items;

  return (
    <ul className={styles.dropdown}>
      {homeItems.map((item, index) => (
        <DropdownItem key={index} item={item} />
      ))}
    </ul>
  );
}
