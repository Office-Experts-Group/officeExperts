import Link from "next/link";
import React from "react";

import styles from "../styles/copyright.module.css";

const Copyright = () => {
  return (
    <div className={styles.copyright}>
      <div className={styles.text}>
        <p>Copyright © 2024. Office Group Experts. All Rights Reserved</p>
      </div>
      <div className={styles.link}>
        <Link href="https://www.officeexperts.com.au/terms-and-conditions">
          Terms & Conditions
        </Link>
        <p>/</p>
        <Link href="https://www.officeexperts.com.au/privacy-policy">
          Privacy Policy
        </Link>
      </div>
    </div>
  );
};

export default Copyright;
