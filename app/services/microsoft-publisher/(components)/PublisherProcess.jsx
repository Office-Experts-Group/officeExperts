// app/services/microsoft-publisher/(components)/PublisherProcess.jsx
// How a Publisher migration runs. The steps are genuinely sequential, so they're numbered.
// Sits beside an illustration contrasting Publisher's fixed frames with a styles-based
// Word template. Server component.
import Link from "next/link";

import AnimateOnScroll from "@/components/AnimateOnScroll";

// SCSS module (styles/publisherProcess.module.scss)
import styles from "@/styles/publisherProcess.module.scss";
// Decorative illustration stored with the route
import { RebuildSvg } from "../(svgs)/RebuildSvg";

// Migration steps, in order. Bodies are JSX so they can carry inline links.
const steps = [
  {
    title: "Find every file",
    body: (
      <>
        We search PCs, shared drives, OneDrive and SharePoint for .pub files and
        list them by owner, age and how recently they were used.
      </>
    ),
  },
  {
    title: "Archive in bulk",
    body: (
      <>
        Everything is exported to PDF so nothing is lost, using any perpetual
        Publisher installation you still have or import tools that read .pub
        files without it.
      </>
    ),
  },
  {
    title: "Decide what lives on",
    body: (
      <>
        Together we pick the publications you still produce. Old issues stay as
        searchable PDFs; the live ones are scheduled for a rebuild.
      </>
    ),
  },
  {
    title: "Rebuild as templates",
    body: (
      <>
        Each live publication becomes a Word or PowerPoint template matched to
        your brand, and can be{" "}
        <Link href="/services/microsoft-word/corporate-identity">
          deployed and governed centrally
        </Link>{" "}
        so every office uses the current version.
      </>
    ),
  },
  {
    title: "Train and hand over",
    body: (
      <>
        Short,{" "}
        <Link href="/microsoft-support-and-training-australia">
          practical training
        </Link>{" "}
        for the people who produce each publication, plus a{" "}
        <Link href="/services/microsoft-word/custom-toolbars-and-ribbons">
          custom ribbon
        </Link>{" "}
        if you want every template a click away.
      </>
    ),
  },
];

const PublisherProcess = () => {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <AnimateOnScroll animation="fade-up" duration={0.6}>
          <header className={styles.header}>
            <span className={styles.eyebrow}>How a Publisher migration works</span>
            <h2 className={styles.heading}>
              From a folder of .pub files{" "}
              <span className={styles.accent}>to templates your team owns.</span>
            </h2>
            <p>
              A rebuild isn&rsquo;t a conversion with extra steps. Publisher
              placed text boxes by coordinates; Word and PowerPoint stay stable
              when layout is driven by styles, sections and masters. That&rsquo;s
              the difference between a file that looks right once and a template
              that keeps looking right after fifty people have edited it.
            </p>
          </header>
        </AnimateOnScroll>

        <div className={styles.grid}>
          {/* One wrapper round the whole list keeps <li> as direct children of <ol> */}
          <AnimateOnScroll animation="fade-up" duration={0.6} delay={0.1}>
            <ol className={styles.steps}>
              {steps.map((step, index) => (
                <li key={step.title} className={styles.step}>
                  <span className={styles.number} aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className={styles.stepTitle}>{step.title}</h3>
                    <p>{step.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </AnimateOnScroll>

          <div className={styles.aside}>
            <div className={styles.visual} aria-hidden="true">
              <RebuildSvg />
            </div>
            <p className={styles.callout}>
              Templates built this way also play nicely with SharePoint, Teams
              and{" "}
              <Link href="/services/copilot">Microsoft 365 Copilot</Link>, which
              can draft into a properly styled Word template but has nothing to
              work with in a flattened PDF.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PublisherProcess;
