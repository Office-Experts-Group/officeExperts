// /app/services/microsoft-access/is-access-right-for-your-company/(components)/IarcHero.jsx
import React from "react";

import styles from "@/styles/iarcHero.module.scss";
import IarcHeroSvg from "../(svgs)/IarcHeroSvg";
import {
  IarcArrowIcon,
  IarcPinIcon,
  IarcAdviceIcon,
  IarcChatIcon,
} from "../(svgs)/IarcIcons";

const IARC_TRUST = [
  { text: "Australia-wide Access consultants", Icon: IarcPinIcon },
  {
    text: "Advice across Access, SQL Server and the cloud",
    Icon: IarcAdviceIcon,
  },
  { text: "Plain-English recommendations", Icon: IarcChatIcon },
];

const IarcHero = () => (
  <section
    id="iarc-hero"
    className={styles.iarcHero}
    aria-labelledby="iarc-hero-heading"
  >
    <div className={styles.inner}>
      <div className={styles.copy}>
        <h1 id="iarc-hero-heading" className={styles.heading}>
          Is Microsoft Access{" "}
          <span className={styles.accent}>
            the Right Technology for your Company?
          </span>
        </h1>
        <p className={styles.lede}>
          Access is brilliant for some businesses and the wrong tool for others.
          We look at your data, how many people use it and the systems it has to
          work with, then tell you straight whether Access, something bigger or
          something simpler is the better fit.
        </p>
        <div className={styles.actions}>
          <a href="#contact" className="btn">
            Get a straight answer
          </a>
          <a href="#iarc-growth" className={styles.arrowLink}>
            See where Access fits
            <IarcArrowIcon />
          </a>
        </div>
        <ul className={styles.trust}>
          {IARC_TRUST.map(({ text, Icon }) => (
            <li key={text}>
              <Icon />
              {text}
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.art}>
        <IarcHeroSvg flowClass={styles.flow} liveClass={styles.live} />
      </div>
    </div>
  </section>
);

export default IarcHero;
