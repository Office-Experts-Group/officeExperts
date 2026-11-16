// /app/services/microsoft-power-platform/microsoft-power-bi/(components)/PbsvServices.jsx
import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import styles from "@/styles/pbsvServices.module.scss";
import {
  PbsvDashboardArt,
  PbsvModelArt,
  PbsvLiveServiceArt,
  PbsvSecurityArt,
  PbsvReviewArt,
  PbsvTrainingArt,
} from "../(svgs)/PbsvServiceArt";
import { PbsvArrowIcon, PbsvCheckIcon } from "../(svgs)/PbsvIcons";

const PBSV_SERVICES = [
  {
    id: "dashboards",
    tile: "darkTile",
    tone: "dark",
    Art: PbsvDashboardArt,
    title: "Custom Power BI dashboard development",
    text: "Dashboards designed around the decisions your team actually makes, not a wall of every chart we could draw.",
    listLabel: "What we design",
    points: [
      "Layouts and navigation that make sense on first look",
      "Filters and slicers people will actually use",
      "Phone and tablet views where they’re needed",
      "Consistent colours, labels and number formats",
    ],
  },
  {
    id: "model",
    tile: "lightTile",
    tone: "light",
    Art: PbsvModelArt,
    title: "Data modelling and integration",
    text: "We connect your spreadsheets, databases and business systems, clean the data up and shape it into a model Power BI can answer questions from quickly.",
    links: [
      {
        href: "/services/microsoft-power-platform/power-bi-data-integration",
        label: "Power BI data integration",
      },
      {
        href: "/services/microsoft-power-platform/excel-to-power-bi-migration",
        label: "Excel to Power BI migration",
      },
      { href: "/services/power-query", label: "Power Query" },
    ],
  },
  {
    id: "live",
    tile: "accentTile",
    tone: "accent",
    Art: PbsvLiveServiceArt,
    title: "Real-time analytics implementation",
    text: "We pick the right refresh approach for each report, from a daily schedule to live connections and streaming tiles, and set it up so it stays reliable.",
    links: [
      { href: "#pbsv-freshness", label: "How fresh should your data be?" },
    ],
  },
  {
    id: "security",
    tile: "tintTile",
    tone: "light",
    Art: PbsvSecurityArt,
    title: "Secure sharing and row-level security",
    text: "Share reports with colleagues, clients or partners and keep each person’s view limited to their own data. We test it with a real account, not just on paper.",
    links: [
      {
        href: "/case-studies/retail-power-bi-partner-reporting-security",
        label: "See how we secured partner reports",
      },
    ],
  },
  {
    id: "review",
    tile: "lightTile",
    tone: "light",
    Art: PbsvReviewArt,
    title: "Report reviews and tuning",
    text: "Slow report? Confusing layout? We review design, usability and performance, then fix what’s getting in the way.",
  },
  {
    id: "training",
    tile: "surfaceTile",
    tone: "dark",
    Art: PbsvTrainingArt,
    title: "Training and ongoing support",
    text: "Workshops that teach your team to explore and build their own reports, plus help when something breaks or a new question comes up.",
    links: [
      {
        href: "/microsoft-support-and-training-australia",
        label: "Microsoft support and training",
      },
      { href: "#contact", label: "Talk to a consultant" },
    ],
  },
];

const PbsvServices = () => {
  return (
    <section
      id="pbsv-services"
      className={styles.pbsvServices}
      aria-labelledby="pbsv-services-heading"
    >
      <AnimateOnScroll animation="fade-up" duration={1} delay={0}>
        <header className={styles.header}>
          <p className={styles.eyebrow}>What we do</p>
          <h2 id="pbsv-services-heading" className={styles.heading}>
            Power BI services{" "}
            <span className={styles.accent}>built around your business</span>
          </h2>
        </header>
      </AnimateOnScroll>

      <ul className={styles.grid}>
        {PBSV_SERVICES.map(
          ({ id, tile, tone, Art, title, text, listLabel, points, links }) => (
            <li
              key={id}
              className={`${styles.tile} ${styles[tile]} ${styles[id]}`}
            >
              <div className={styles.art} data-tone={tone}>
                <Art tone={tone} />
              </div>
              <div className={styles.body}>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.text}>{text}</p>

                {points && (
                  <div className={styles.points}>
                    <p className={styles.pointsLabel}>{listLabel}</p>
                    <ul>
                      {points.map((point) => (
                        <li key={point}>
                          <PbsvCheckIcon />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {links && (
                  <ul className={styles.links}>
                    {links.map(({ href, label }) => (
                      <li key={href}>
                        <Link href={href} className={styles.link}>
                          {label} <PbsvArrowIcon />
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </li>
          ),
        )}
      </ul>
    </section>
  );
};

export default PbsvServices;
