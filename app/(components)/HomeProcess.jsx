// app/test-page/(components)/HomeProcess.jsx

import Link from "next/link";

// SCSS module for the layout, accordion and the animated pipe
import styles from "@/styles/homeProcess.module.scss";

const HomeProcess = () => {
  const steps = [
    {
      title: "Tell us what's not working",
      text: "Start with a free, no-obligation chat by phone or video. Describe the problem in your own words; there's no need to know the technical answer.",
    },
    {
      title: "We map how you work",
      text: (
        <>
          A short{" "}
          <Link href="/services/business-analysis">business analysis</Link>{" "}
          looks at your business, data and processes, so the solution suits the
          way you or your team actually works.
        </>
      ),
    },
    {
      title: "We build, test and refine",
      text: "You see progress along the way and give feedback before anything goes live, so there are no surprises at the end.",
    },
    {
      title: "Optional ongoing support",
      text: (
        <>
          We are just a phone call away, your team is shown how to use it, and
          we stay on hand for changes and help through our{" "}
          <Link href="/microsoft-support-and-training-australia">
            support and training
          </Link>{" "}
          services.
        </>
      ),
    },
  ];

  return (
    <section className={styles.section} aria-labelledby="home-process-heading">
      <div className={styles.inner}>
        {/* ── Left: intro and CTA (sticky on desktop) ── */}
        <div className={styles.copy}>
          <span className={styles.eyebrow}>How it works</span>
          <h2 id="home-process-heading" className={styles.heading}>
            Getting started is{" "}
            <span className={styles.accent}>easier than you think</span>
          </h2>
          <p className={styles.intro}>
            Most clients come to us with a spreadsheet that's grown too big, a
            template that keeps breaking or a process that eats up their week.
            Plenty also contact us with no idea where to start. Here's how we
            work.
          </p>
          <div className={styles.actions}>
            <a href="#contact" className="btn">
              Start with a free chat
            </a>
            <a href="tel:1300102810" className={styles.phone}>
              or call 1300 102 810
            </a>
          </div>
        </div>

        {/* ── Right: the steps, joined by a vertical pipe ── */}
        <ol className={styles.steps}>
          {steps.map((step, index) => (
            // --i is the step's position; the SCSS uses it to stagger the pipe
            // so it travels down from one dot to the next
            <li
              key={step.title}
              className={styles.step}
              style={{ "--i": index }}
            >
              <details
                className={styles.details}
                name="home-process"
                open={index === 0}
              >
                {/* The dot sits inside the summary so tapping it toggles the step */}
                <summary className={styles.summary}>
                  <span className={styles.dot} aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                </summary>
                <p className={styles.stepText}>{step.text}</p>
              </details>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default HomeProcess;
