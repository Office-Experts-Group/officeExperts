// /services/microsoft-word/corporate-identity/(components)/TabComparison.jsx

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
          alt="Microsoft Word Home tab limited by Restricted Editing"
          width={500}
          height={150}
        />
      </div>
      <div className={styles.group}>
        <h3>Home Tab Using Office Experts Groups Global Template Solution</h3>
        <Image
          src={oegTab}
          alt="Office Experts custom Home tab in Word"
          width={500}
          height={150}
        />
      </div>
    </section>
  );
};

export default TabComparison;
