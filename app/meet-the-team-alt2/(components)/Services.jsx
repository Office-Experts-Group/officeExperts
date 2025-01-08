"use client";

import React, { useState } from "react";
import Image from "next/image";
import AnimateOnScroll from "../../../components/AnimateOnScroll";
import styles from "../../../styles/services.module.css";

import scott from "../../../public/scott.webp";
import signature from "../../../public/signature.webp";
import handsIn from "../../../public/handsIn600x400.webp";

const introductions = [
  {
    title: "Meet the Minds Behind the Innovation",
    content:
      "Our team of Microsoft experts combines technical brilliance with a passion for solving complex challenges. From automation to Power Apps, we work together to create custom solutions that transform businesses.",
  },
  {
    title: "The Experts Powering Your Success",
    content:
      "At Office Experts, our diverse team of professionals specialises in Microsoft services, bringing deep expertise and fresh perspectives to every project. Discover the people driving smarter business solutions.",
  },
  {
    title: "Behind the Screens: Our Team",
    content:
      "Meet the skilled professionals who bring their unique talents to Office Experts. Whether it's Power BI, Power Pages, or custom automation, our team works remotely to deliver solutions with a personal touch.",
  },
  {
    title: "Our Team, Your Advantage",
    content:
      "We are a dedicated group of Microsoft-certified professionals passionate about crafting innovative solutions. Explore the individuals behind the success stories and see what makes our team exceptional.",
  },
  {
    title: "Get to Know Our Experts",
    content:
      "From Microsoft Power Apps to advanced BI tools, our team is at the forefront of innovation. Each member brings unique expertise to help your business thrive. Let us introduce ourselves!",
  },
];

const Services = ({ meetStyles, teamMembers }) => {
  const [currentIntro, setCurrentIntro] = useState(0);

  const handleNextIntro = () => {
    setCurrentIntro((prev) => (prev + 1) % introductions.length);
  };

  return (
    <section className={styles.services}>
      <AnimateOnScroll animation="slide-left" delay={0} duration={1.5}>
        <div className={styles.content}>
          <div className={styles.subBox}>
            <p>Innovators in</p>
            <button
              onClick={handleNextIntro}
              className={styles.switchButton}
              aria-label="Switch introduction text"
            >
              Switch Text ↻
            </button>
          </div>
          <h2>{introductions[currentIntro].title}</h2>
          <p>{introductions[currentIntro].content}</p>
          <div className={styles.signature}>
            <div>
              <Image src={scott} alt="Scott Robinson" width={30} height={30} />
            </div>
            <Image
              src={signature}
              alt="Scott signature"
              width={200}
              height={50}
            />
          </div>
        </div>
      </AnimateOnScroll>

      <AnimateOnScroll animation="fade-down" delay={0} duration={1.5}>
        <div className={styles.imageWrapper}>
          <Image
            src={handsIn}
            alt="People joining hands"
            width={600}
            height={400}
            style={{ width: "100%", height: "auto" }}
            priority
          />
        </div>
      </AnimateOnScroll>
    </section>
  );
};

export default Services;
