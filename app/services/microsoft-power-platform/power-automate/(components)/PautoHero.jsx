// /app/services/microsoft-power-platform/power-automate/(components)/PautoHero.jsx
import React from "react";
import Link from "next/link";

import PautoHeroSvg from "../(svgs)/PautoHeroSvg";
import { ArrowIcon, BadgeIcon, PinIcon, LockIcon } from "../(svgs)/PautoIcons";

import styles from "@/styles/pautoHero.module.scss";

const PAUTO_TRUST = [
  { Icon: BadgeIcon, text: "Microsoft specialists for 25+ years" },
  { Icon: PinIcon, text: "Thousands of Australian businesses helped" },
  { Icon: LockIcon, text: "Built inside your own Microsoft 365 tenant" },
];

const PautoHero = () => (
  <section
    id="pauto-hero"
    className={styles.pautoHero}
    aria-labelledby="pauto-hero-heading"
  >
    <div className={styles.headerBlock} aria-hidden="true" />

    <div className={styles.inner}>
      <div className={styles.copy}>
        <h1 id="pauto-hero-heading" className={styles.heading}>
          Power Automate{" "}
          <span className={styles.accent}>&amp; AI Automation</span>
        </h1>

        <p className={styles.lede}>
          Power Automate connects the tools you already use and takes over the
          repetitive work between them. Approvals, notifications, data entry and
          document handling happen on their own, and your team only steps in
          when something genuinely needs a person. We build everything from
          simple flows to AI Builder and Copilot Studio automation agents,
          inside your Microsoft 365 setup.
        </p>

        <div className={styles.actions}>
          <Link href="#contact" className={styles.cta}>
            Talk to a Power Automate expert
          </Link>
          <Link href="#pauto-capabilities" className={styles.more}>
            See what we build
            <ArrowIcon />
          </Link>
        </div>

        <ul className={styles.trust}>
          {PAUTO_TRUST.map(({ Icon, text }) => (
            <li key={text}>
              <Icon size={20} />
              <span>{text}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.visual}>
        <PautoHeroSvg flowClass={styles.flow} liveClass={styles.live} />
      </div>
    </div>
  </section>
);

export default PautoHero;
