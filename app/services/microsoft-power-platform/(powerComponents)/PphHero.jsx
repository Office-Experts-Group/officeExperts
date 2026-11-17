// /app/services/microsoft-power-platform/(components)/PphHero.jsx
// Power Platform hub hero: three frames (build apps, automate work, see results)
// that rotate beside one continuous animated story (PphHeroStory). Each frame has
// a strong call to action followed by links out to the matching sub-services.
// Server component: all the copy is plain JSX in the first HTML response.
// HeroRotator (shared, client) only switches frames and drives the story.

import Link from "next/link";

import styles from "@/styles/pphHero.module.scss";
// Shared client wrapper: tabs, autoplay timer, pause button and HeroContext
import HeroRotator from "@/app/(components)/HeroRotator";

// Animated story (client). One act per frame, so the tab durations come from
// the same timeline to keep the two in step.
import PphHeroStory from "../(svgs)/PphHeroStory";
import { PPH_STORY_DURATIONS } from "../(svgs)/pphHeroScene";
import {
  PphArrowIcon,
  PphYearsIcon,
  PphPinIcon,
  PphTagIcon,
} from "../(svgs)/PphIcons";
import {
  PphAiIcon,
  PphAppsIcon,
  PphChevronIcon,
  PphFlowIcon,
  PphMergeIcon,
  PphMigrateIcon,
  PphPagesIcon,
  PphProcessIcon,
  PphReportIcon,
  PphSitesIcon,
  PphSupportIcon,
} from "../(svgs)/PphHeroLinkIcons";

const BASE = "/services/microsoft-power-platform";

// Tab labels, in frame order
const PPH_HERO_TABS = ["Build apps", "Automate work", "See results"];

// Frame 1 links: apps and portals
const PPH_BUILD_LINKS = [
  {
    href: `${BASE}/power-apps`,
    name: "Power Apps",
    text: "Apps for the office, the site and the phone",
    Icon: PphAppsIcon,
  },
  {
    href: `${BASE}/power-pages`,
    name: "Power Pages",
    text: "Secure websites for customers and partners",
    Icon: PphPagesIcon,
  },
  {
    href: `${BASE}/sharepoint-consulting-and-development`,
    name: "SharePoint development",
    text: "Sites, lists and document libraries your apps can build on",
    Icon: PphSitesIcon,
  },
];

// Frame 2 links: automation and AI
const PPH_AUTOMATE_LINKS = [
  {
    href: `${BASE}/power-automate`,
    name: "Power Automate",
    text: "Flows, approvals and documents that run themselves",
    Icon: PphFlowIcon,
  },
  {
    href: `${BASE}/ai-with-power-platform`,
    name: "AI with Power Platform",
    text: "AI steps that work inside your own Microsoft 365",
    Icon: PphAiIcon,
  },
  {
    href: "/services/business-process-automation",
    name: "Business process automation",
    text: "Map the whole process first, then automate the parts that pay off",
    Icon: PphProcessIcon,
  },
];

// Frame 3 links: reporting and support
const PPH_RESULTS_LINKS = [
  {
    href: `${BASE}/power-bi`,
    name: "Power BI",
    text: "Reports and dashboards your team can check any time",
    Icon: PphReportIcon,
  },
  {
    href: `${BASE}/excel-to-power-bi-migration`,
    name: "Excel to Power BI",
    text: "Move spreadsheet reporting into Power BI",
    Icon: PphMigrateIcon,
  },
  {
    href: `${BASE}/power-bi-data-integration`,
    name: "Data integration",
    text: "Bring your systems into one data model",
    Icon: PphMergeIcon,
  },
  {
    href: `/microsoft-support-and-training-australia`,
    name: "Power Platform support",
    text: "Fixes and changes to what you already have",
    Icon: PphSupportIcon,
  },
];

const PPH_TRUST = [
  { Icon: PphYearsIcon, text: "25+ years of Microsoft experience" },
  { Icon: PphPinIcon, text: "Australia-wide, remote or onsite" },
  { Icon: PphTagIcon, text: "Quote or hourly rate" },
];

// "Explore" block under each frame's call to action
const PphSubLinks = ({ title, links }) => (
  <div className={styles.explore}>
    <p className={styles.exploreLabel}>{title}</p>
    <ul className={styles.subLinks}>
      {links.map(({ href, name, text, Icon }) => (
        <li key={href}>
          <Link href={href} className={styles.subLink}>
            <span className={styles.subIcon}>
              <Icon />
            </span>
            <span className={styles.subCopy}>
              <span className={styles.subName}>{name}</span>
              <span className={styles.subText}>{text}</span>
            </span>
            <span className={styles.subArrow}>
              <PphChevronIcon />
            </span>
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

const PphHero = () => (
  <section
    id="pph-hero"
    className={styles.pphHero}
    aria-labelledby="pph-hero-heading"
  >
    <div className={styles.inner}>
      {/* Frame order must match PPH_HERO_TABS. Durations come from pphHeroScene.js. */}
      <HeroRotator
        labels={PPH_HERO_TABS}
        durations={PPH_STORY_DURATIONS}
        label="Microsoft Power Platform services"
        idPrefix="pph-hero"
        classes={styles}
        visual={<PphHeroStory />}
      >
        {/* ── Frame 1: what the platform is (holds the page's only <h1>) ── */}
        <div
          id="pph-hero-frame-0"
          role="tabpanel"
          aria-labelledby="pph-hero-tab-0"
          className={styles.frame}
        >
          <h1 id="pph-hero-heading" className={styles.heading}>
            Power Platform <span className={styles.accent}>Experts</span>
          </h1>
          <p className={styles.sub}>
            Custom design and development for the Microsoft Power Platform.
          </p>
          <p className={styles.lede}>
            The Power Platform is Microsoft’s set of tools for building business
            apps, automating repetitive work, reporting on your data and
            publishing secure portals for customers. We design, build and
            support them for organisations across Australia, so your team spends
            less time on admin and more time on the work that matters.
          </p>
          <div className={styles.actions}>
            <a href="#contact" className="btn">
              Talk to an expert
            </a>
            <a href="#pph-tools" className={styles.link}>
              See what we build <PphArrowIcon />
            </a>
          </div>
          <PphSubLinks title="Apps and portals" links={PPH_BUILD_LINKS} />
        </div>

        {/* ── Frame 2: automation and AI ── */}
        <div
          id="pph-hero-frame-1"
          role="tabpanel"
          aria-labelledby="pph-hero-tab-1"
          className={styles.frame}
        >
          <span className={styles.eyebrow}>Automation and AI</span>
          <h2 className={styles.frameHeading}>
            Let the busywork <span className={styles.accent}>run itself</span>
          </h2>
          <p className={styles.lede}>
            Power Automate moves information between the systems you already
            use, chases approvals and builds documents from your own templates.
            We add AI where it genuinely helps, like reading a photo or sorting
            incoming requests, and keep a person in charge of the decisions that
            matter.
          </p>
          <div className={styles.actions}>
            <a href="#contact" className="btn">
              Tell us what to automate
            </a>
          </div>
          <PphSubLinks title="Automation services" links={PPH_AUTOMATE_LINKS} />
        </div>

        {/* ── Frame 3: reporting, portals and support ── */}
        <div
          id="pph-hero-frame-2"
          role="tabpanel"
          aria-labelledby="pph-hero-tab-2"
          className={styles.frame}
        >
          <span className={styles.eyebrow}>Reports and portals</span>
          <h2 className={styles.frameHeading}>
            Clear reports for you,{" "}
            <span className={styles.accent}>clear updates for customers</span>
          </h2>
          <p className={styles.lede}>
            Power BI turns what your apps and flows collect into reports your
            team can check without chasing anyone, and a Power Pages portal lets
            customers see where their job is up to. Already have apps, flows or
            reports that need work? Our support team picks them up.
          </p>
          <div className={styles.actions}>
            <a href="#contact" className="btn">
              Book a free consultation
            </a>
          </div>
          <PphSubLinks
            title="Reporting and support"
            links={PPH_RESULTS_LINKS}
          />
        </div>
      </HeroRotator>

      <ul className={styles.trust}>
        {PPH_TRUST.map(({ Icon, text }) => (
          <li key={text}>
            <span className={styles.trustIcon}>
              <Icon />
            </span>
            {text}
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default PphHero;
