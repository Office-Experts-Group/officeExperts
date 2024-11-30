import React from "react";
import { navigationData } from "../navigationData";
import DropdownItem from "./DropdownItem";
import styles from "../styles/header.module.css";

export default function ServicesDropdown({ handleLinkClick }) {
  const serviceItems = navigationData.services.items;

  return (
    <div className={styles.dropdown}>
      <ul>
        {serviceItems.map((item, index) => (
          <DropdownItem
            key={index}
            item={item}
            handleLinkClick={handleLinkClick}
          />
        ))}
      </ul>
    </div>
  );
}
