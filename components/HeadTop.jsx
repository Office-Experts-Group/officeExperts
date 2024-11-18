import React from "react";
import Image from "next/image";

import styles from "../styles/header.module.css";

import maps from "../public/icons/maps.png";
import msg from "../public/icons/msg.png";
import emailSlide from "../public/icons/emailSlide.png";
import Link from "next/link";

const HeadTop = () => {
  return (
    <div className={styles.headTop}>
      <p>Welcome to the Office Experts Group</p>

      <div className={styles.topContacts}>
        <div>
          <Image src={maps} alt="Location" width={12} height={12} />
          <span>Australia Wide</span>
        </div>
        <div>
          <Link href="mailto:consult@wordexperts.com.au">
            <Image src={emailSlide} alt="email" width={15} height={9} />
            consult@officeexperts.com.au
          </Link>
        </div>

        <div>
          <Link href="tel:+61-1300-12-20-38">
            <Image src={msg} alt="email" width={12} height={12} />
            +61 1300 122 038
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeadTop;
