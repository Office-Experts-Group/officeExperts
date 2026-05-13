// microsoft-consultants-melbourne/(components)/MelbourneIntro.jsx
import React from "react";
import Link from "next/link";

import MelbourneMap from "./MelbourneMap";
import AnimateOnScroll from "../../../components/AnimateOnScroll";

import styles from "../../../styles/melbourneIntro.module.css";

const MelbourneIntro = () => (
  <section className={styles.section}>
    <div className={styles.grid}>
      {/* ── Left: copy + stats ── */}
      <div className={styles.left}>
        <AnimateOnScroll animation="fade-up" duration={0.6} delay={0}>
          <div className={styles.content}>
            <span className={styles.eyebrow}>Office Experts Group</span>

            <h2 className={styles.headline}>
              Expert Microsoft solutions for Melbourne businesses{" "}
              <span className={styles.accent}>
                from the CBD to the suburbs.
              </span>
            </h2>

            <div className={styles.body}>
              <p>
                Melbourne is home to some of Australia&rsquo;s most demanding
                industries. Financial services firms along Collins Street, state
                government departments, major universities and healthcare
                networks throughout the metro area all rely on Microsoft
                technologies to run their day-to-day operations. When these
                organisations need more than basic IT support, they need
                consultants who understand both the technology and the business
                context it operates in.
              </p>

              <p>
                Since 2000, Office Experts Group has worked with Melbourne
                businesses of all sizes, from small professional services firms
                in Southbank and Docklands to large enterprises along the St
                Kilda Road business corridor. Our consultants bring deep
                experience across the entire Microsoft ecosystem.
              </p>

              <p>
                Most of our Melbourne engagements are delivered remotely, which
                means faster response times, lower costs and no disruption to
                your office. For projects that benefit from face-to-face
                collaboration, our Melbourne-based consultants are available
                on-site across the inner city and the broader metro area.
              </p>
            </div>

            <Link href="#contact" className={styles.btn}>
              Get a Free Consultation
            </Link>
          </div>
        </AnimateOnScroll>
      </div>

      {/* ── Right: map visual ── */}
      <AnimateOnScroll animation="fade-up" duration={0.8} delay={0.2}>
        <div className={styles.right}>
          <MelbourneMap />
        </div>
      </AnimateOnScroll>
    </div>
  </section>
);

export default MelbourneIntro;
