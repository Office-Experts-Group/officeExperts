import React from "react";
import Image from "next/image";

import restricted from "@/public/restrictedEditing.webp";
import oegTab from "@/public/oegTab.webp";

import styles from "@/styles/tabComparison.module.scss";

const TabComparison = () => {
  return (
    <section className={styles.section}>
      <div className={styles.group}>
        <h3>Limited Home Tab using Microsoft’s Restricted Editing</h3>
        <Image
          src={restricted}
          alt="restricted microsoft word tab"
          width={500}
          height={150}
        />
      </div>
      <div className={styles.group}>
        <h3>Home Tab Using Office Experts Groups Global Template Solution</h3>
        <Image
          src={oegTab}
          alt="Word Experts custom tab"
          width={500}
          height={150}
        />
      </div>
    </section>
  );
};

export default TabComparison;
