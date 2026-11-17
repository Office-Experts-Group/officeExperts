// /app/services/microsoft-power-platform/power-apps/(components)/PappsWhy.jsx
import Link from "next/link";

import {
  PappsBuildArt,
  PappsImproveArt,
  PappsSupportArt,
} from "../(svgs)/PappsWhyArt";
import { PappsArrowIcon, PappsCheckIcon } from "../(svgs)/PappsIcons";

import styles from "@/styles/pappsWhy.module.scss";

const PAPPS_WAYS = [
  "Nationwide remote solutions",
  "Independent device compatibility",
  "Full project guidance",
  "Ongoing support and customised training",
];

const PAPPS_OPTIONS = [
  {
    key: "build",
    tone: styles.whiteCard,
    Art: PappsBuildArt,
    title: "Build a new app",
    text: "We start with a short conversation about the process you want to fix, then design, build and launch the app with you.",
    href: "#contact",
    linkText: "Start with a conversation",
  },
  {
    key: "improve",
    tone: styles.accentCard,
    Art: PappsImproveArt,
    title: "Improve an app you already have",
    text: "Slow, confusing or broken? We review what is there, fix what matters and extend it without a full rebuild where we can.",
    href: "#contact",
    linkText: "Ask us to review your app",
  },
  {
    key: "support",
    tone: styles.darkCard,
    Art: PappsSupportArt,
    title: "Support and train your team",
    text: "Ongoing support and training tailored to your people, so the app keeps working and your team stays confident using it.",
    href: "/microsoft-support-and-training-australia",
    linkText: "Explore support and training",
  },
];

const PAPPS_NEIGHBOURS = [
  {
    href: "/services/business-process-automation",
    text: "Automating a whole process",
  },
  {
    href: "/services/app-and-custom-development",
    text: "A fully custom application",
  },
  {
    href: "/services/microsoft-power-platform/power-automate",
    text: "Automated flows with Power Automate",
  },
  { href: "/services/copilot", text: "Copilot and AI assistants" },
];

const PappsWhy = () => {
  return (
    <section
      className={styles.pappsWhy}
      id="papps-why"
      aria-labelledby="papps-why-heading"
    >
      <div className={styles.inner}>
        <div className={styles.copy}>
          <h2 id="papps-why-heading" className={styles.heading}>
            Custom solutions by{" "}
            <span className={styles.accent}>Office Experts</span>
          </h2>
          <p className={styles.lede}>
            Australia-wide, our certified Microsoft team builds remote-based
            Power Apps solutions around your needs, with flexible pricing
            options. We guide each project from start to finish, including
            ongoing support and training, so the app keeps paying off.
          </p>
          <ul className={styles.ways}>
            {PAPPS_WAYS.map((way) => (
              <li key={way} className={styles.way}>
                <span className={styles.wayIcon}>
                  <PappsCheckIcon />
                </span>
                {way}
              </li>
            ))}
          </ul>

          <div className={styles.neighbours}>
            <p className={styles.neighboursLabel}>
              Not sure an app is the right tool? Compare with
            </p>
            <ul className={styles.neighbourList}>
              {PAPPS_NEIGHBOURS.map(({ href, text }) => (
                <li key={href}>
                  <Link href={href} className={styles.arrowLink}>
                    {text}
                    <PappsArrowIcon />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <ul className={styles.options}>
          {PAPPS_OPTIONS.map(
            ({ key, tone, Art, title, text, href, linkText }) => (
              <li key={key} className={`${styles.option} ${tone}`}>
                <div className={styles.optionArt}>
                  <Art />
                </div>
                <div className={styles.optionBody}>
                  <h3 className={styles.optionTitle}>{title}</h3>
                  <p className={styles.optionText}>{text}</p>
                  <Link href={href} className={styles.optionLink}>
                    {linkText}
                    <PappsArrowIcon />
                  </Link>
                </div>
              </li>
            ),
          )}
        </ul>
      </div>
    </section>
  );
};

export default PappsWhy;
