// app/services/custom-office-solutions/(components)/CustomFutureProof.jsx
// Future-proofing existing custom solutions against Microsoft platform changes:
// the new Outlook, blocked internet macros and 64-bit upgrades.
// Facts checked Nov 2026: classic Outlook supported until at least 2029,
// enterprise opt-out phase for new Outlook due March 2027.
// Server component.
import Link from "next/link";

// SCSS module (source: styles/customFutureProof.module.scss)
import styles from "@/styles/customFutureProof.module.scss";

// One card per platform change. Bodies are JSX so they can carry inline links.
const changes = [
  {
    label: "Outlook",
    title: "The new Outlook doesn't run VBA or COM add-ins",
    body: (
      <>
        Microsoft's new Outlook for Windows only supports web add-ins. VBA
        macros and COM or VSTO add-ins still work in classic Outlook, which
        Microsoft will support until at least 2029, but new Outlook becomes the
        default for enterprise customers from March 2027. We rebuild Outlook
        automation as web add-ins, Power Automate flows or AI agents before the
        switch is forced on you.
      </>
    ),
  },
  {
    label: "Macro security",
    title: "Macros from the internet are blocked by default",
    body: (
      <>
        Office on Windows blocks VBA macros in files downloaded from the
        internet or opened from email, and staff can no longer switch them on
        with one click. We set up digitally signed macros, trusted locations
        and proper add-in deployment so legitimate automation keeps running
        without weakening your security.
      </>
    ),
  },
  {
    label: "Upgrades",
    title: "Moving from 32-bit or older Office versions",
    body: (
      <>
        Code written for 32-bit Office often fails after a move to 64-bit
        Microsoft 365, usually because of outdated Windows API declarations or
        ActiveX controls. Our{" "}
        <Link href="/services/upgrades-and-migration">
          upgrades and migration
        </Link>{" "}
        team fixes these issues, or moves the solution to a modern platform when
        that makes more sense.
      </>
    ),
  },
];

const CustomFutureProof = () => {
  return (
    <section
      className={styles.section}
      id="future-proofing"
      aria-labelledby="future-heading"
    >
      <div className={styles.inner}>
        <header className={styles.header}>
          <span className={styles.eyebrow}>Future-proofing</span>
          <h2 id="future-heading" className={styles.heading}>
            Microsoft is changing the rules.{" "}
            <span className={styles.accent}>Is your solution ready?</span>
          </h2>
          <p>
            Many custom Office solutions were built 10 or 20 years ago and have
            quietly kept the business running ever since. Microsoft's shift to
            cloud and web-based apps means some of them are now on borrowed
            time. We review existing macros, add-ins and templates, keep what
            works and rebuild what won't survive the next update.
          </p>
        </header>

        <div className={styles.cards}>
          {changes.map(({ label, title, body }) => (
            <article key={label} className={styles.card}>
              <span className={styles.cardLabel}>{label}</span>
              <h3 className={styles.cardTitle}>{title}</h3>
              <p className={styles.cardText}>{body}</p>
            </article>
          ))}
        </div>

        <div className={styles.ctaRow}>
          <Link href="#contact" className="btn">
            Book a solution review
          </Link>
          <p>
            Not sure what's at risk? We'll audit your existing macros, add-ins
            and templates and tell you what needs attention.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CustomFutureProof;
