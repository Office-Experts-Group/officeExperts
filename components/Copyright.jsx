import React from "react";

import styles from "../styles/copyright.module.css";

const Copyright = () => {
  return (
    <div className={styles.copyright}>
      <div className={styles.text}>
        <p>
          Copyright © 2024. Brayalei Pty Ltd T/As Office Experts Group. ABN 32
          093 067 737. ACN 093 067 737. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Copyright;
