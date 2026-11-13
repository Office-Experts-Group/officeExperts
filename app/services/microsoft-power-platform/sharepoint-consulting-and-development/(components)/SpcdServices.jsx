// /app/services/microsoft-power-platform/sharepoint-consulting-and-development/(components)/SpcdServices.jsx
// Five service lines as a 12-column bento: a wide accent migration tile and a
// lighter implementation tile on top, then three equal tiles (one dark).
// Replaces the old client-side tab switcher, so every service is in the HTML
// and no JavaScript ships for this section.
import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import SpcdServiceArt from "../(svgs)/SpcdServiceArt";
import { SpcdArrowIcon, SpcdCheckIcon } from "../(svgs)/SpcdIcons";
import styles from "@/styles/spcdServices.module.scss";

export const SPCD_SERVICES = [
  {
    id: "migration",
    label: "SharePoint migration",
    tag: "Time-sensitive",
    tone: "accentTile",
    intro:
      "Our most time-sensitive service, given where Microsoft’s support timelines now sit.",
    points: [
      "SharePoint 2013, 2016 and 2019 to SharePoint Online",
      "On-premises servers to hybrid or full cloud",
      "File shares and network drives to SharePoint Online",
      "Google Drive or Dropbox to SharePoint Online",
      "Tenant-to-tenant migrations",
    ],
    keyDate: {
      date: "14 July 2026",
      text: "SharePoint Server 2016 and 2019 left extended support. There’s no paid security update program to fall back on.",
    },
    note: "Every month spent on-premises from here adds exposure. The organisations that move first get more scheduling options and more time to test.",
    link: { href: "#spcd-migration", label: "See the support timeline" },
  },
  {
    id: "implementation",
    label: "New implementation",
    tag: "Start fresh",
    tone: "lightTile",
    intro:
      "For businesses with no SharePoint environment yet, or moving off shared network drives, Google Drive or other legacy tools.",
    points: [
      "Hub, communication and team site architecture",
      "Permissions and governance framework",
      "Branded intranet design",
      "Document libraries with metadata and content types",
      "Teams, Outlook and OneDrive integration",
    ],
    note: "The structure decisions made at setup are the ones you live with for years. Getting them right early is far cheaper than fixing them later.",
    link: null,
  },
  {
    id: "intranet",
    label: "Intranet design",
    tag: "Internal comms",
    tone: "lightTile",
    intro:
      "A proper internal communications hub, rather than a collection of disconnected sites nobody remembers to check.",
    points: [
      "Branded design with news and announcements",
      "Staff directories and org charts",
      "Hub site navigation and search across every department",
      "Embedded Power BI dashboards",
      "Teams integration through Viva Connections",
    ],
    note: "A well-designed intranet gets used. If staff don’t use it, it doesn’t matter how well it’s built.",
    link: {
      href: "/services/microsoft-power-platform/microsoft-power-bi",
      label: "Power BI dashboards",
    },
  },
  {
    id: "development",
    label: "Custom development",
    tag: "Beyond out-of-the-box",
    tone: "darkTile",
    intro:
      "When out-of-the-box SharePoint isn’t enough, we build what’s missing.",
    points: [
      "Custom SPFx web parts and extensions",
      "InfoPath form replacement",
      "Embedded Power Apps for complex data capture",
      "AI document processing and metadata tagging",
      "Integrations with your other business systems",
    ],
    note: "Custom work scoped well upfront avoids the cost of rebuilding an under-specified first attempt.",
    link: {
      href: "/services/microsoft-power-platform/microsoft-power-apps",
      label: "Power Apps in SharePoint",
    },
  },
  {
    id: "governance",
    label: "Governance & support",
    tag: "Ongoing",
    tone: "lightTile",
    intro:
      "The part most SharePoint projects underinvest in, and the part that decides whether the environment is still usable in two years.",
    points: [
      "Sharing policies and site lifecycle management",
      "Permissions auditing and remediation",
      "SharePoint Admin Agent configuration",
      "Copilot readiness assessments",
      "Ongoing managed support and health monitoring",
    ],
    note: "Most SharePoint environments degrade not from one failure but from years of small, ungoverned decisions.",
    link: {
      href: "/services/copilot",
      label: "Microsoft 365 Copilot services",
    },
  },
];

const SpcdServices = () => {
  return (
    <section
      id="spcd-services"
      className={styles.spcdServices}
      aria-labelledby="spcd-services-heading"
    >
      <div className={styles.inner}>
        <AnimateOnScroll animation="fade-up">
          <header className={styles.header}>
            <span className={styles.eyebrow}>What we do</span>
            <h2 id="spcd-services-heading" className={styles.heading}>
              How we help <span className={styles.accent}>with SharePoint</span>
            </h2>
            <p className={styles.sub}>
              Five service lines. Each can run as a standalone engagement or be
              combined, depending on where your environment sits right now.
            </p>
          </header>
        </AnimateOnScroll>

        <ul className={styles.grid}>
          {SPCD_SERVICES.map((svc) => (
            <li
              key={svc.id}
              id={`spcd-service-${svc.id}`}
              className={`${styles.tile} ${styles[svc.tone]} ${styles[`tile_${svc.id}`]}`}
            >
              <div className={styles.aside}>
                <div className={styles.art}>
                  <SpcdServiceArt type={svc.id} />
                </div>
                {svc.keyDate && (
                  <p className={styles.keyDate}>
                    <span className={styles.keyDateLabel}>Key date</span>
                    <strong>{svc.keyDate.date}</strong>
                    {svc.keyDate.text}
                  </p>
                )}
              </div>

              <div className={styles.body}>
                <span className={styles.tag}>{svc.tag}</span>
                <h3 className={styles.title}>{svc.label}</h3>
                <p className={styles.intro}>{svc.intro}</p>

                <ul
                  className={styles.points}
                  aria-label={`${svc.label}: what’s included`}
                >
                  {svc.points.map((p) => (
                    <li key={p}>
                      <SpcdCheckIcon className={styles.check} />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>

                <p className={styles.note}>{svc.note}</p>

                {svc.link && (
                  <Link href={svc.link.href} className={styles.link}>
                    {svc.link.label}
                    <SpcdArrowIcon />
                  </Link>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default SpcdServices;
