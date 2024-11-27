import Image from "next/image";
import React from "react";
import Link from "next/link";

import styles from "../../../styles/aboutUs.module.css";

import about from "../../../public/about-img-6.webp";
import AnimateOnScroll from "../../../components/AnimateOnScroll";

const AboutUsMain = () => {
  return (
    <section className={styles.aboutUs}>
      <AnimateOnScroll animation="slide-right" delay={0} duration={1}>
        <div className={styles.content}>
          <div className={styles.underline}>
            <p>Your Office Professionals</p>
          </div>
          <h2>Design, Development and Consulting Services Australia</h2>
          <p className={styles.themeText}>
            Our expert developers and designers are all highly experienced
            professionals in Microsoft Office for both PC and Mac including
            versions from 2000 to 2016 and Microsoft Office 365.
          </p>
          <div className={styles.text}>
            <p>
              What makes us unique is that we have software development and
              design backgrounds combined with corporate business experience
              providing the best combination to tailor solutions to your
              business needs.
            </p>
          </div>
          <button className={`btn ${styles.btn}`}>discover more</button>
        </div>
      </AnimateOnScroll>

      <AnimateOnScroll animation="slide-left" delay={0} duration={1}>
        <div className={styles.imgWrapper}>
          <Image src={about} alt="About Us" width={570} height={607} priority />
          <div className={styles.insert}>
            <p>Call us to discuss your needs...</p>
            <Link href="tel:+61-1300-10-28-10" className={styles.phone}>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="none"
                  d="M16.585,19.999l2.006-2.005l-2.586-2.586l-1.293,1.293c-0.238,0.239-0.579,0.342-0.912,0.271 c-0.115-0.024-2.842-0.611-4.502-2.271s-2.247-4.387-2.271-4.502c-0.069-0.33,0.032-0.674,0.271-0.912l1.293-1.293L6.005,5.408 L4,7.413c0.02,1.223,0.346,5.508,3.712,8.874C11.067,19.643,15.337,19.978,16.585,19.999z"
                ></path>
                <path d="M16.566 21.999c.005 0 .023 0 .028 0 .528 0 1.027-.208 1.405-.586l2.712-2.712c.391-.391.391-1.023 0-1.414l-4-4c-.391-.391-1.023-.391-1.414 0l-1.594 1.594c-.739-.22-2.118-.72-2.992-1.594s-1.374-2.253-1.594-2.992l1.594-1.594c.391-.391.391-1.023 0-1.414l-4-4c-.375-.375-1.039-.375-1.414 0L2.586 5.999C2.206 6.379 1.992 6.901 2 7.434c.023 1.424.4 6.37 4.298 10.268S15.142 21.976 16.566 21.999zM6.005 5.408l2.586 2.586L7.298 9.287c-.239.238-.341.582-.271.912.024.115.611 2.842 2.271 4.502s4.387 2.247 4.502 2.271c.333.07.674-.032.912-.271l1.293-1.293 2.586 2.586-2.006 2.005c-1.248-.021-5.518-.356-8.873-3.712C4.346 12.921 4.02 8.636 4 7.413L6.005 5.408zM19.999 10.999h2c0-5.13-3.873-8.999-9.01-8.999v2C17.051 4 19.999 6.943 19.999 10.999z"></path>
                <path d="M12.999,8c2.103,0,3,0.897,3,3h2c0-3.225-1.775-5-5-5V8z"></path>
              </svg>
              1300 102 810
            </Link>
          </div>
        </div>
      </AnimateOnScroll>
    </section>
  );
};

export default AboutUsMain;
