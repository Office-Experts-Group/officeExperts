// app/services/microsoft-powerpoint/(components)/PowerPointIntro.jsx

import Link from "next/link";

// Client-side wrapper that fades each block in as it enters the viewport
import AnimateOnScroll from "@/components/AnimateOnScroll";

// Compiled from styles/powerPointIntro.module.scss
import styles from "@/styles/powerPointIntro.module.scss";

// Existing stroke icons from the old carousel, each renders in currentColor
import { SlideTemplateIcon } from "../(svgs)/SlideTemplateIcon";
import { SlideRedesignIcon } from "../(svgs)/SlideRedesignIcon";
import { SlideAutomationIcon } from "../(svgs)/SlideAutomationIcon";
import { MortarboardIcon } from "../(svgs)/MortarboardIcon";
import { ArrowIcon } from "../(svgs)/ArrowIcon";

// ─────────────────────────────────────────────
// Jump links to the sections further down this page. These replace the
// four child URLs that were merged into /services/microsoft-powerpoint.
// ─────────────────────────────────────────────
const sections = [
  {
    href: "#templates",
    title: "Custom templates",
    text: "Master slides and themes built to your brand guidelines.",
    Icon: SlideTemplateIcon,
  },
  {
    href: "#redesign",
    title: "Presentation redesign",
    text: "Turn your existing presentations into on-brand templates.",
    Icon: SlideRedesignIcon,
  },
  {
    href: "#automation",
    title: "Automation with VBA",
    text: "Link your data straight into your presentations.",
    Icon: SlideAutomationIcon,
  },
  {
    href: "#training",
    title: "Training and support",
    text: "Practical help for individuals and whole teams.",
    Icon: MortarboardIcon,
  },
];

// Short credibility line under the copy
const facts = ["Established 2000", "25+ consultants", "Onsite or remote"];

const PowerPointIntro = () => (
  <section className={styles.section}>
    <div className={styles.inner}>
      {/* ── Copy ── */}
      <AnimateOnScroll animation="fade-up" duration={0.6}>
        <div className={styles.copy}>
          <p className={styles.eyebrow}>Presentation design and development</p>
          <h2 className={styles.heading}>
            PowerPoint experts who make presentations{" "}
            <span className={styles.accent}>easier to build.</span>
          </h2>
          <p className={styles.lead}>
            When it comes to Microsoft PowerPoint, our Australia-wide,
            cross-industry consultants deliver a prompt, quality service with
            competitive pricing.
          </p>
          <p className={styles.body}>
            Our PowerPoint experts specialise in presentation templates,
            design, customisation, automation, integration, training and
            support. Whether you need one branded template, an existing deck
            brought into line, or a report that builds itself every month, we
            work with your team to get it right.
          </p>
          <div className={styles.ctaRow}>
            <Link href="#contact" className="btn">
              Talk to a PowerPoint expert
            </Link>
            <ul className={styles.facts}>
              {facts.map((fact) => (
                <li key={fact}>{fact}</li>
              ))}
            </ul>
          </div>
        </div>
      </AnimateOnScroll>

      {/* ── Jump links ── */}
      <AnimateOnScroll animation="fade-up" duration={0.6} delay={0.1}>
        <nav aria-label="PowerPoint services">
          <p className={styles.navTitle}>What we do</p>
          <ul className={styles.nav}>
            {sections.map(({ href, title, text, Icon }) => (
              <li key={href}>
                <Link href={href} className={styles.navLink}>
                  <span className={styles.navIcon} aria-hidden="true">
                    <Icon />
                  </span>
                  <span>
                    <span className={styles.navHeading}>{title}</span>
                    <span className={styles.navText}>{text}</span>
                  </span>
                  <span className={styles.navArrow}>
                    <ArrowIcon />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </AnimateOnScroll>
    </div>
  </section>
);

export default PowerPointIntro;
