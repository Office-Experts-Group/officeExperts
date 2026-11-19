// /app/services/microsoft-excel/(components)/ExcelHero.jsx
// Microsoft Excel hub hero: three short frames (who we are, what we fix, how
// we work) rotating beside one animated story (ExcelHeroStory).
// Server component. All the copy lives here as plain JSX so it is in the first
// HTML response. HeroRotator (client, shared with the home page) only switches
// frames; it never touches the text.

import Link from "next/link";

import styles from "@/styles/excelHero.module.scss";
// Rotator look for this page (passed to HeroRotator as `classes`)
import rotatorStyles from "@/styles/excelHeroRotator.module.scss";

import HeroRotator from "@/app/(components)/HeroRotator";

import ExcelHeroStory from "../(svgs)/ExcelHeroStory";
import { STORY_DURATIONS } from "../(svgs)/excelHeroStoryScene";
import {
  ArrowIcon,
  BuildIcon,
  ChatIcon,
  ClockIcon,
  ExpertIcon,
  MapIcon,
  QuoteIcon,
  SupportIcon,
} from "../(svgs)/ExcelIcons";

const ExcelHero = () => {
  // Frame 1 trust row
  const trust = [
    { icon: <ClockIcon />, text: "25+ years of Excel work" },
    { icon: <ExpertIcon />, text: "Senior Australian developers" },
    { icon: <MapIcon />, text: "Remote, Australia-wide" },
  ];

  // Frame 2 points
  const points = [
    {
      title: "Automate the repetitive work",
      text: "VBA macros that build reports, tidy data and send emails in one click.",
    },
    {
      title: "Fix slow, broken workbooks",
      text: "Errors, broken links and files that take minutes to open.",
    },
    {
      title: "Turn data into answers",
      text: "Power Query, pivot tables and dashboards that refresh themselves.",
    },
    {
      title: "Build it properly from scratch",
      text: "Custom workbooks with forms, protection and room to grow.",
    },
  ];

  // Frame 3 steps (icons instead of numbers)
  const steps = [
    {
      icon: <ChatIcon />,
      title: "Talk it through",
      text: "A free chat with a senior developer about what’s slowing you down.",
    },
    {
      icon: <QuoteIcon />,
      title: "Get a clear quote",
      text: "We scope the work and agree the cost before anything starts.",
    },
    {
      icon: <BuildIcon />,
      title: "Build and test",
      text: "Using your real data, checking the figures as we go.",
    },
    {
      icon: <SupportIcon />,
      title: "Hand over and support",
      text: "Training for your team and help whenever you need it.",
    },
  ];

  return (
    <section className={styles.excelHero} aria-labelledby="excel-hero-heading">
      <HeroRotator
        labels={["Excel specialists", "What we fix", "How we work"]}
        durations={STORY_DURATIONS}
        visual={<ExcelHeroStory />}
        label="About our Excel services"
        idPrefix="excel-hero"
        classes={rotatorStyles}
      >
        {/* ── Frame 1: who we are (holds the page's only <h1>) ── */}
        <div
          id="excel-hero-frame-0"
          role="tabpanel"
          aria-labelledby="excel-hero-tab-0"
          className={styles.frame}
        >
          <span className={styles.eyebrow}>
            Microsoft Excel consulting and development
          </span>
          <h1 id="excel-hero-heading" className={styles.title}>
            Australia’s leading{" "}
            <span className={styles.accent}>Excel consultants</span>
          </h1>
          <p className={styles.lead}>
            Our senior Excel programmers build, fix and automate the workbooks
            your business runs on. Whether it’s one broken formula or a full
            custom system, we make Excel faster, safer and easier for your team
            to use.
          </p>
          <div className={styles.actions}>
            <a href="#contact" className="btn">
              Talk to an Excel expert
            </a>
            <a href="#excel-services" className={styles.link}>
              See our Excel services <ArrowIcon />
            </a>
          </div>
          <ul className={styles.trust}>
            {trust.map((item) => (
              <li key={item.text} className={styles.trustItem}>
                <span className={styles.trustIcon}>{item.icon}</span>
                {item.text}
              </li>
            ))}
          </ul>
        </div>

        {/* ── Frame 2: what we fix ── */}
        <div
          id="excel-hero-frame-1"
          role="tabpanel"
          aria-labelledby="excel-hero-tab-1"
          className={styles.frame}
        >
          <span className={styles.eyebrow}>What we can do for you</span>
          <h2 className={styles.heading}>
            Spreadsheets that{" "}
            <span className={styles.accent}>work for you, not against you</span>
          </h2>
          <ul className={styles.points}>
            {points.map((point) => (
              <li key={point.title} className={styles.point}>
                <span className={styles.pointTitle}>{point.title}</span>
                <span className={styles.pointText}>{point.text}</span>
              </li>
            ))}
          </ul>
          <div className={styles.actions}>
            <a href="#contact" className="btn">
              Tell us what you need
            </a>
            <a href="#excel-services" className={styles.link}>
              Browse Excel services <ArrowIcon />
            </a>
          </div>
        </div>

        {/* ── Frame 3: how we work ── */}
        <div
          id="excel-hero-frame-2"
          role="tabpanel"
          aria-labelledby="excel-hero-tab-2"
          className={styles.frame}
        >
          <span className={styles.eyebrow}>How we work</span>
          <h2 className={styles.heading}>
            Tell us the problem.{" "}
            <span className={styles.accent}>We’ll handle the Excel.</span>
          </h2>
          <ul className={styles.steps}>
            {steps.map((step) => (
              <li key={step.title} className={styles.step}>
                <span className={styles.stepIcon}>{step.icon}</span>
                <span className={styles.stepBody}>
                  <span className={styles.pointTitle}>{step.title}</span>
                  <span className={styles.pointText}>{step.text}</span>
                </span>
              </li>
            ))}
          </ul>
          <div className={styles.actions}>
            <a href="#contact" className="btn">
              Book a free consultation
            </a>
            <Link href="/meet-the-team" className={styles.link}>
              Meet the team <ArrowIcon />
            </Link>
          </div>
        </div>
      </HeroRotator>
    </section>
  );
};

export default ExcelHero;
