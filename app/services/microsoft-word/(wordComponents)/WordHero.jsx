// app/(components)/WordHero.jsx
// Microsoft Word hub hero (/services/microsoft-word, formerly the wordexperts.com.au
// home page): three short frames (who we are, what we build, common questions)
// that rotate beside the animated Word story (WordHeroStory).
// Server component. All the copy lives here as plain JSX, so it is in the first
// HTML response, indexable by Google and AI crawlers, and easy to edit.
// HeroRotator (client) only switches between frames; it never touches the text.

// next/link for internal page links; "#contact" stays a plain <a> (in-page anchor)
import Link from "next/link";

// SCSS module for the section background and frame typography
import styles from "@/styles/wordHero.module.scss";

// Shared client wrapper: tabs, autoplay timer, pause button and the frame state
// the animation follows (same component as the home page hero)
import HeroRotator from "../../../(components)/HeroRotator";

// Animated Word story (client). It plays one act per frame, so the tab
// durations come from the same timeline to keep the two in step.
import WordHeroStory from "./WordHeroStory";
import { STORY_DURATIONS } from "@/utils/wordHeroScene";
import { ArrowIcon } from "../(svgs)/HeroIcons";

// "Watch a demo" button + video modal, moved here from the Services section so it
// sits directly under the animation (reuses the component from its current folder)
import WatchDemo from "./WatchDemo";

// Video opened by the "Watch a demo" button (swap for the real file path)
const DEMO_VIDEO_SRC = "/videos/word-template-solutions.mp4";

const WordHero = () => {
  // Frame 2 cards, each linking to its service page
  const points = [
    {
      title: "Master templates",
      href: "/services/microsoft-word/word-document-template-creation",
      text: "One template your whole team starts from, with layouts, styles and numbering built in.",
    },
    {
      title: "Brand identity in Word",
      href: "/services/microsoft-word/corporate-identity",
      text: "Your logo, colours and fonts set up as styles, so nobody has to guess.",
    },
    {
      title: "Fill-in forms",
      href: "/services/microsoft-word/fill-in-forms",
      text: "Type client details once and they appear everywhere they belong.",
    },
    {
      title: "Quick Parts",
      href: "/services/microsoft-word/quick-parts",
      text: "Approved clauses, signature blocks and disclaimers inserted in a click.",
    },
  ];

  return (
    <section className={styles.hero} aria-labelledby="word-hero-heading">
      {/* Frame order must match the labels order. One duration (seconds) per frame,
          set in utils/wordHeroScene.js so each frame matches its act of the story. */}
      <HeroRotator
        labels={["Who we are", "What we do", "Common questions"]}
        durations={STORY_DURATIONS}
        visual={
          // Wrapper stacks the animation and pushes the demo button to the bottom right
          <div className={styles.visual}>
            <WordHeroStory />
            <WatchDemo src={DEMO_VIDEO_SRC} />
          </div>
        }
      >
        {/* ── Frame 1: who we are (holds the page's only <h1>) ── */}
        <div
          id="hero-frame-0"
          role="tabpanel"
          aria-labelledby="hero-tab-0"
          className={styles.frame}
        >
          <span className={styles.eyebrow}>Our Word Experts Team</span>
          <h1 id="word-hero-heading" className={styles.title}>
            Microsoft Word solutions{" "}
            <span className={styles.accent}>built around your brand</span>
          </h1>
          <p className={styles.lead}>
            Since 2000, our Word specialists have helped Australian businesses
            and government organisations get more out of Microsoft Word. From
            professionally designed document templates and automated forms to
            corporate branding and custom Word solutions, we make it easier to
            create documents that look right, work properly and meet your
            business needs.
          </p>
          <div className={styles.actions}>
            <a href="#contact" className="btn">
              Talk to a Word expert
            </a>
            <Link href="/case-studies" className={styles.link}>
              See our case studies <ArrowIcon />
            </Link>
          </div>
        </div>

        {/* ── Frame 2: what we build ── */}
        <div
          id="hero-frame-1"
          role="tabpanel"
          aria-labelledby="hero-tab-1"
          className={styles.frame}
        >
          <span className={styles.eyebrow}>What we build in Word</span>
          <h2 className={styles.heading}>
            Documents that are right{" "}
            <span className={styles.accent}>the first time</span>
          </h2>
          <ul className={styles.points}>
            {points.map((point) => (
              <li key={point.title} className={styles.point}>
                <Link href={point.href} className={styles.pointTitle}>
                  {point.title}
                </Link>
                <span className={styles.pointText}>{point.text}</span>
              </li>
            ))}
          </ul>
          <div className={styles.actions}>
            <a href="#contact" className="btn">
              Tell us what you need
            </a>
            <Link
              href="/case-studies/advisory-branding-template-rollout"
              className={styles.link}
            >
              See a template rollout <ArrowIcon />
            </Link>
          </div>
        </div>

        {/* ── Frame 3: common questions in plain English ── */}
        <div
          id="hero-frame-2"
          role="tabpanel"
          aria-labelledby="hero-tab-2"
          className={styles.frame}
        >
          <span className={styles.eyebrow}>Common questions</span>
          <h2 className={styles.heading}>
            Not sure where to start?{" "}
            <span className={styles.accent}>Most people aren't.</span>
          </h2>
          <dl className={styles.faqs}>
            <div className={styles.faq}>
              <dt className={styles.question}>
                Can you fix the templates we already have?
              </dt>
              <dd className={styles.answer}>
                Yes. We rebuild existing templates on solid foundations and keep
                your approved design, or{" "}
                <Link href="/services/microsoft-word/document-rebranding-services">
                  rebrand your documents
                </Link>{" "}
                when your brand changes.
              </dd>
            </div>
            <div className={styles.faq}>
              <dt className={styles.question}>
                Can you turn our PDF or InDesign design into Word?
              </dt>
              <dd className={styles.answer}>
                Yes. We{" "}
                <Link href="/services/microsoft-word/word-template-conversions">
                  convert PDF, InDesign and Canva designs
                </Link>{" "}
                into Word templates your team can actually edit.
              </dd>
            </div>
            <div className={styles.faq}>
              <dt className={styles.question}>
                Can our documents meet accessibility requirements?
              </dt>
              <dd className={styles.answer}>
                Yes. We build templates and forms with the structure{" "}
                <Link href="/services/microsoft-word/accessibility">
                  accessible documents
                </Link>{" "}
                need, which matters for government work.
              </dd>
            </div>
          </dl>
          <div className={styles.actions}>
            <a href="#contact" className="btn">
              Book a free consultation
            </a>
            <Link href="/faq" className={styles.link}>
              More answers <ArrowIcon />
            </Link>
          </div>
        </div>
      </HeroRotator>
    </section>
  );
};

export default WordHero;
