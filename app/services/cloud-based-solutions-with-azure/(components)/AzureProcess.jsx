// app/services/cloud-based-solutions-with-azure/(components)/AzureProcess.jsx
// How we move a business onto Azure. Merges PageSegment7 ("We'll Get You on the Cloud!") and
// PageSegment8 ("Microsoft Database Solution Experts"), which said the same thing twice.
// Numbered because the four steps genuinely happen in order.
import Link from "next/link";

// SCSS module (source: styles/azureProcess.module.scss)
import styles from "@/styles/azureProcess.module.scss";

const steps = [
  {
    title: "Analyse",
    text: "We look at how the system is used today: who needs it, from where, and what it connects to. This is where most of the value is found.",
  },
  {
    title: "Design",
    text: "We choose the Azure services, front end and security model, then give you a clear estimate of the build and the monthly running costs.",
  },
  {
    title: "Migrate",
    text: "Data is moved and tested on a copy first, then switched over at a quiet time so staff come back to a working system.",
  },
  {
    title: "Support",
    text: "We monitor, back up and update the solution, and are on hand when the business needs something new.",
  },
];

const AzureProcess = () => {
  return (
    <section className={styles.section} id="cloud-based-solutions">
      <div className={styles.inner}>
        <header className={styles.header}>
          <span className={styles.eyebrow}>How we get you on the cloud</span>
          <h2 className={styles.heading}>
            We&apos;ll get you on the cloud,{" "}
            <span className={styles.accent}>without disrupting the business</span>
          </h2>
          <p>
            Our developers work across most areas of Microsoft development, so we
            recommend the option that suits your organisation rather than the one
            we happen to sell. Moving an existing system? Our{" "}
            <Link href="/services/upgrades-and-migration">upgrades and migration</Link>{" "}
            team has moved Access, Excel and SQL Server systems onto Azure for
            organisations across Australia.
          </p>
        </header>

        {/* ── Four steps, joined by a line across the top ── */}
        <ol className={styles.steps}>
          {steps.map((step, i) => (
            <li key={step.title} className={styles.step}>
              <span className={styles.stepNum} aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </li>
          ))}
        </ol>

        <div className={styles.ctaRow}>
          <Link href="#contact" className="btn">
            Talk to our team
          </Link>
          <p>
            Or call <a href="tel:1300102810">1300 102 810</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default AzureProcess;
