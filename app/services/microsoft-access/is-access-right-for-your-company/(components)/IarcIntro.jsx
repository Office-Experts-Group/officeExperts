// /app/services/microsoft-access/is-access-right-for-your-company/(components)/IarcIntro.jsx
import React from "react";
import Link from "next/link";

import styles from "@/styles/iarcIntro.module.scss";
import {
  IarcVerdictYesArt,
  IarcVerdictPlanArt,
  IarcVerdictNoArt,
} from "../(svgs)/IarcVerdictArt";
import {
  IarcArrowIcon,
  IarcDataIcon,
  IarcPeopleIcon,
  IarcLinkIcon,
} from "../(svgs)/IarcIcons";

const IARC_CHECKS = [
  {
    title: "Your data",
    text: "How much is there, how tidy is it and how fast is it growing? A few thousand linked records is a very different job from millions.",
    Icon: IarcDataIcon,
  },
  {
    title: "Your people",
    text: "How many people use it at once, where do they work and on what devices? An office on one network is easier than a team on the road.",
    Icon: IarcPeopleIcon,
  },
  {
    title: "Your systems",
    text: "What does it have to talk to? Accounting software, SharePoint, Excel, Outlook or a website? Compatibility shapes how we build it.",
    Icon: IarcLinkIcon,
  },
];

const IARC_VERDICTS = [
  {
    title: "Usually a yes",
    text: "A team that works from the same records every day, such as jobs, quotes, bookings, stock or clients, mostly from desktops on a shared network.",
    Art: IarcVerdictYesArt,
    link: {
      href: "/services/database-development-and-solutions",
      text: "Custom Access databases",
    },
  },
  {
    title: "Yes, with a plan",
    text: "More users, bigger data or staff working remotely. Access stays as the front end people know, with SQL Server or Azure holding the data behind it.",
    Art: IarcVerdictPlanArt,
    link: {
      href: "/services/sql-server-and-access-integration",
      text: "Access with SQL Server",
    },
  },
  {
    title: "Probably not Access",
    text: "Customers or partners logging in, very large numbers of people at once, or a mobile-first app. A web or Power Platform app is usually the better fit.",
    Art: IarcVerdictNoArt,
    link: {
      href: "/services/microsoft-power-platform/power-apps",
      text: "Explore Power Apps",
    },
  },
];

const IarcIntro = () => (
  <section
    id="iarc-intro"
    className={styles.iarcIntro}
    aria-labelledby="iarc-intro-heading"
  >
    <div className={styles.inner}>
      <div className={styles.body}>
        <div>
          <header className={styles.header}>
            <p className={styles.eyebrow}>We get asked this all the time</p>
            <h2 id="iarc-intro-heading" className={styles.heading}>
              Is Access{" "}
              <span className={styles.accent}>the right strategy?</span>
            </h2>
          </header>
          <p className={styles.lead}>
            Our Access developers build custom databases and integrations for a
            living, so they know where Access shines and where it starts to
            creak. Before anyone writes a line of code, they look at your
            business, your support and training needs, and tell you what they
            would do in your shoes.
          </p>
        </div>
        <div className={styles.checks}>
          <p className={styles.checksLabel}>Three things we check first</p>
          <dl className={styles.checkList}>
            {IARC_CHECKS.map(({ title, text, Icon }) => (
              <div key={title} className={styles.check}>
                <span className={styles.checkIcon}>
                  <Icon />
                </span>
                <div>
                  <dt className={styles.checkTitle}>{title}</dt>
                  <dd className={styles.checkText}>{text}</dd>
                </div>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <div className={styles.verdicts}>
        {IARC_VERDICTS.map(({ title, text, Art, link }) => (
          <article key={title} className={styles.verdict}>
            <Art className={styles.verdictArt} />
            <h3 className={styles.verdictTitle}>{title}</h3>
            <p className={styles.verdictText}>{text}</p>
            <Link href={link.href} className={styles.verdictLink}>
              {link.text}
              <IarcArrowIcon />
            </Link>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default IarcIntro;
