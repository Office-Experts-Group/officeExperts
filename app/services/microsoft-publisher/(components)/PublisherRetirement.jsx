// app/services/microsoft-publisher/(components)/PublisherRetirement.jsx
// What changed and who it affects: a dated timeline (genuinely sequential, so it's an
// ordered list) beside three cards explaining where each type of licence now stands.
// Server component.
import Link from "next/link";

import AnimateOnScroll from "@/components/AnimateOnScroll";

// SCSS module (styles/publisherRetirement.module.scss)
import styles from "@/styles/publisherRetirement.module.scss";

// Key retirement dates, oldest first
const timeline = [
  {
    date: "Feb 2024",
    text: "Microsoft announces Publisher will be retired and that its features are covered by Word and PowerPoint.",
  },
  {
    date: "Late 2024",
    text: "Office 2024 and Office LTSC 2024 ship without Publisher, the first Office releases to leave it out.",
  },
  {
    date: "1 Oct 2026",
    text: "Publisher is removed from Microsoft 365. Subscribers can no longer install it or open .pub files with it.",
  },
  {
    date: "13 Oct 2026",
    text: "Office 2021 and Office LTSC 2021 reach end of support, taking the last supported perpetual Publisher with them.",
  },
];

// Where each licence type now stands
const situations = [
  {
    title: "On Microsoft 365",
    text: "Publisher has gone from your apps. Your .pub files are still on PCs, shared drives, OneDrive and SharePoint, but no current Microsoft app can open them.",
  },
  {
    title: "On Publisher 2016, 2019 or 2021",
    text: "It still runs, but without support or security updates. A working copy is the most faithful way to export your files, so don't uninstall it until they're converted.",
  },
  {
    title: "On Office 2024",
    text: "Publisher was never included. Any .pub files you inherited or receive from other organisations need converting before anyone can edit them.",
  },
];

const PublisherRetirement = () => {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <AnimateOnScroll animation="fade-up" duration={0.6}>
          <header className={styles.header}>
            <span className={styles.eyebrow}>What changed in October 2026</span>
            <h2 className={styles.heading}>
              Publisher is gone.{" "}
              <span className={styles.accent}>Your files aren&rsquo;t.</span>
            </h2>
            <p>
              Microsoft hasn&rsquo;t deleted a single .pub file. The problem is
              that the only app that could edit them properly has been
              withdrawn, and every month makes it harder to find a machine that
              can still read them. Publisher is one of several Microsoft
              retirements we&rsquo;re moving clients through as part of our{" "}
              <Link href="/services/upgrades-and-migration">
                upgrades and migration services
              </Link>
              .
            </p>
          </header>
        </AnimateOnScroll>

        <div className={styles.grid}>
          <AnimateOnScroll animation="fade-up" duration={0.6} delay={0.1}>
            <ol className={styles.timeline}>
              {timeline.map((item) => (
                <li key={item.date} className={styles.event}>
                  <span className={styles.date}>{item.date}</span>
                  <p>{item.text}</p>
                </li>
              ))}
            </ol>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fade-up" duration={0.6} delay={0.2}>
            <div className={styles.cards}>
              {situations.map((item) => (
                <article key={item.title} className={styles.card}>
                  <h3 className={styles.cardTitle}>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
};

export default PublisherRetirement;
