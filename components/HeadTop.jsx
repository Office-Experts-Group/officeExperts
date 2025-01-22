import React from "react";
import Image from "next/image";
import Link from "next/link";

import styles from "../styles/header.module.css";

import maps from "../public/icons/mapsBlue.webp";
import msg from "../public/icons/msgBlue.webp";
import emailSlide from "../public/icons/emailSlideBlue.webp";

const HeadTop = () => {
  return (
    <div className={styles.headTop}>
      <p>
        Your Microsoft Technology Development and Consulting Experts -{" "}
        <strong>Operating since 2000</strong>
      </p>

      <div className={styles.topContacts}>
        <div>
          <Image src={maps} alt="Location" width={12} height={12} priority />
          <div className={styles.locationWrapper}>
            <span className={styles.loc1}>Australia Wide</span>
            <span className={styles.loc2}>Sydney, NSW</span>
            <span className={styles.loc3}>Melbourne, Vic</span>
            <span className={styles.loc4}>Brisbane, Qld</span>
            <span className={styles.loc5}>Perth, WA</span>
            <span className={styles.loc6}>Adelaide, SA</span>
            <span className={styles.loc7}>Canberra, ACT</span>
            <span className={styles.loc8}>Northern Rivers, NSW</span>
            <span className={styles.loc9}>Woolongong, NSW</span>
            <span className={styles.loc10}>Richmond, Vic</span>
            <span className={styles.loc11}>Darwin, NT</span>
          </div>
        </div>
        <div>
          <Link href="mailto:consult@officeexperts.com.au">
            <Image
              src={emailSlide}
              alt="email"
              width={15}
              height={9}
              priority
            />
            consult@officeexperts.com.au
          </Link>
        </div>

        <div>
          <Link href="tel:+61-1300-102-810">
            <Image src={msg} alt="email" width={12} height={12} priority />
            1300 102 810
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeadTop;
