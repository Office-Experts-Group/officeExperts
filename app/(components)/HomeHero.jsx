// app/(components)/HomeHero.jsx
// Home page hero: three short frames (who we are, what we do, common questions)
// that rotate beside one continuous animated story (HeroStory).
// Server component. All the copy lives here as plain JSX, so it is in the first
// HTML response, indexable by Google and AI crawlers, and easy to edit.
// HeroRotator (client) only switches between frames; it never touches the text.

// next/link for internal page links; "#contact" stays a plain <a> (in-page anchor)
import Link from "next/link";

// SCSS module for the section background and frame typography
import styles from "@/styles/homeHero.module.scss";

// Client wrapper: tabs, autoplay timer and the data-frame attribute that the
// illustration's CSS reacts to
import HeroRotator from "./HeroRotator";

// Animated story illustration (client). It plays one act per frame, so the
// tab durations come from the same timeline to keep the two in step.
import HeroStory from "./HeroStory";
import { ArrowIcon } from "../(svgs)/HeroIcons";

import ServicesStory from "./ServicesStory";
import { STORY_DURATIONS } from "@/utils/servicesStoryScene";

const HomeHero = () => {
  // Frame 2 cards
  const points = [
    {
      title: "Take the busywork away",
      text: "Reports, data entry and emails that run themselves instead of eating up your week.",
    },
    {
      title: "Fix what's holding you back",
      text: "Slow spreadsheets, old databases and files that only one person understands.",
    },
    {
      title: "Look professional every time",
      text: "Branded Word and PowerPoint templates your whole team can use without thinking.",
    },
    {
      title: "Use AI with confidence",
      text: "Practical AI assistants, set up safely around the way your business works.",
    },
  ];

  // Frame 3 questions
  const questions = [
    {
      question: "Do I need to know exactly what I want?",
      answer:
        "No. Tell us what's frustrating your team and we'll work out the right fix together. We listen first, then recommend.",
    },
    {
      question: "Can you improve what we already have?",
      answer:
        "Yes. Most of our work builds on the files and systems you already use, so nobody has to start from scratch.",
    },
    {
      question: "Do you work outside the capital cities?",
      answer:
        "Yes. We work remotely right across Australia and come on site when it helps.",
    },
  ];

  return (
    <section className={styles.hero} aria-labelledby="home-hero-heading">
      {/* Frame order must match the labels order. One duration (seconds) per frame,
          set in utils/heroStoryScene.js so each frame matches its act of the story. */}
      <HeroRotator
        labels={["Who we are", "What we do", "Common questions"]}
        durations={STORY_DURATIONS}
        visual={<ServicesStory />}
      >
        {/* ── Frame 1: who we are (holds the page's only <h1>) ── */}
        <div
          id="hero-frame-0"
          role="tabpanel"
          aria-labelledby="hero-tab-0"
          className={styles.frame}
        >
          <span className={styles.eyebrow}>
            Australian Microsoft specialists since 2000
          </span>
          <h1 id="home-hero-heading" className={styles.title}>
            Microsoft consultants and developers{" "}
            <span className={styles.accent}>for Australian businesses</span>
          </h1>
          <p className={styles.lead}>
            For over 25 years we've helped businesses get more out of the
            Microsoft tools they already pay for. Our team of 25+ specialists
            across Australia builds, fixes and looks after the documents,
            spreadsheets, databases and apps your people rely on every day.
          </p>
          <div className={styles.actions}>
            <a href="#contact" className="btn">
              Talk to an expert
            </a>
            <Link href="/case-studies" className={styles.link}>
              See our case studies <ArrowIcon />
            </Link>
          </div>
        </div>

        {/* ── Frame 2: what we can do ── */}
        <div
          id="hero-frame-1"
          role="tabpanel"
          aria-labelledby="hero-tab-1"
          className={styles.frame}
        >
          <span className={styles.eyebrow}>What we can do for you</span>
          <h2 className={styles.heading}>
            Less time on busywork,{" "}
            <span className={styles.accent}>more time on your business</span>
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
            <Link href="/services" className={styles.link}>
              Browse all services <ArrowIcon />
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
            {questions.map((item) => (
              <div key={item.question} className={styles.faq}>
                <dt className={styles.question}>{item.question}</dt>
                <dd className={styles.answer}>{item.answer}</dd>
              </div>
            ))}
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

export default HomeHero;
