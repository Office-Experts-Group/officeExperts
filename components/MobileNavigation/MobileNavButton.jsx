"use client";
import React from "react";

import styles from "../../styles/mobileNav.module.css";

const MobileNavButton = ({ isOpen, onClick }) => (
  <button
    onClick={onClick}
    className={styles.menuButton}
    style={isOpen ? { display: "none" } : {}}
  >
    <svg
      stroke="#f8f8f8"
      fill="#f8f8f8"
      strokeWidth="0"
      viewBox="0 0 512 512"
      height="3rem"
      width="3rem"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M32 96v64h448V96H32zm0 128v64h448v-64H32zm0 128v64h448v-64H32z"></path>
    </svg>
  </button>
);

export default MobileNavButton;
