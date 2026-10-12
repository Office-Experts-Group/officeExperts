// /app/services/(components)/GroupIntro.jsx
// Opening block of the page body: introduces the service offering and lists the main ways we help,
// then gives a one line overview of each service area.
// The overview tiles are anchor links that jump to the matching section further down the page.
import Link from "next/link";
import styles from "../../../styles/groupIntro.module.css";
import ServiceLink from "./ServiceLink";
import { ArrowIcon } from "../(svgs)/ArrowIcon";
import { AiAgentsIcon } from "../(svgs)/AiAgentsIcon";
import { PowerPlatformIcon } from "../(svgs)/PowerPlatformIcon";
import { ExcelIcon } from "../(svgs)/ExcelIcon";
import { WordIcon } from "../(svgs)/WordIcon";
import { AccessIcon } from "../(svgs)/AccessIcon";
import { PowerPointIcon } from "../(svgs)/PowerPointIcon";
import { CustomDevIcon } from "../(svgs)/CustomDevIcon";
import { Microsoft365Icon } from "../(svgs)/Microsoft365Icon";

// Overview icons keyed by the icon name in servicesData.js
const overviewIcons = {
  ai: AiAgentsIcon,
  power: PowerPlatformIcon,
  excel: ExcelIcon,
  word: WordIcon,
  access: AccessIcon,
  powerpoint: PowerPointIcon,
  custom: CustomDevIcon,
  m365: Microsoft365Icon,
};

// Row numbers are generated from the position in the list, so "01", "02" and so on
const formatNumber = (index) => String(index + 1).padStart(2, "0");

const GroupIntro = ({ data }) => {
  const {
    eyebrow,
    title,
    titleAccent,
    paragraphs,
    listTitle,
    list,
    ctaLabel,
    ctaHref,
    overviewTitle,
    overview,
  } = data;

  return (
    <section className={styles.section} aria-labelledby="group-intro-heading">
      <div className={styles.inner}>
        <div className={styles.top}>
          {/* ── Left: what we offer ── */}
          <div className={styles.copy}>
            <span className={styles.eyebrow}>{eyebrow}</span>
            <h2 id="group-intro-heading" className={styles.heading}>
              {title} <span className={styles.accent}>{titleAccent}</span>
            </h2>
            {paragraphs.map((paragraph) => (
              <p key={paragraph} className={styles.text}>
                {paragraph}
              </p>
            ))}
          </div>

          {/* ── Right: the main ways we help ── */}
          <div className={styles.listWrap}>
            <p className={styles.listTitle}>{listTitle}</p>
            <ul className={styles.services}>
              {list.map((service, index) => (
                <li key={service.href} className={styles.service}>
                  <ServiceLink
                    href={service.href}
                    className={styles.serviceLink}
                  >
                    <span className={styles.serviceMeta}>
                      <span className={styles.serviceNum}>
                        {formatNumber(index)}
                      </span>
                      <span className={styles.serviceDot} aria-hidden="true" />
                    </span>
                    <h3 className={styles.serviceTitle}>{service.name}</h3>
                    <span className={styles.serviceArrow}>
                      <ArrowIcon />
                    </span>
                  </ServiceLink>
                </li>
              ))}
            </ul>
            {/* "btn" is the global button class, styles.cta only places it */}
            <Link href={ctaHref} className={`btn ${styles.cta}`}>
              {ctaLabel}
            </Link>
          </div>
        </div>

        {/* ── Service overview ── */}
        <div className={styles.overviewWrap}>
          <h3 className={styles.overviewTitle}>{overviewTitle}</h3>
          <ul className={styles.overview}>
            {overview.map((item) => {
              const OverviewIcon = overviewIcons[item.icon];
              return (
                <li key={item.target}>
                  <a href={`#${item.target}`} className={styles.item}>
                    <span className={styles.itemIcon}>
                      <OverviewIcon />
                    </span>
                    <span className={styles.itemTitle}>{item.label}</span>
                    <span className={styles.itemText}>{item.text}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default GroupIntro;
