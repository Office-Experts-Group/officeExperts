// src/app/contact-us/(components)/ContactNextSteps.jsx

import styles from "@/styles/contactNextSteps.module.scss";

// Credibility points drawn from the company profile
const stats = [
  { value: "2000", label: "Helping Australian businesses since" },
  { value: "25+", label: "Consultants and programmers across the country" },
  { value: "Onsite or remote", label: "Available anywhere in Australia" },
];

// Genuinely sequential, so an ordered list with numbers is appropriate here
const steps = [
  {
    title: "You get in touch",
    text: "Call, email or use the form below. Tell us what you are trying to achieve, no technical detail required.",
  },
  {
    title: "We talk it through",
    text: "A consultant will reach out to you and organise a meeting. They get an understanding of your business and work through your requirements in order to recommend the right approach",
  },
  {
    title: "You get a clear plan",
    text: "We confirm the scope, timeline and cost before work begins, then deliver either a fixed quote or a fixed price per hour.",
  },
];

const ContactNextSteps = () => {
  return (
    <section className={styles.section}>
      <div className={styles.top}>
        <div className={styles.intro}>
          <p className={styles.eyebrow}>Get in touch</p>
          <h2>
            Let&apos;s talk about your{" "}
            <span className={styles.accent}>next project</span>
          </h2>
          <p>
            Sole trader or large government organisation? Know exactly what you
            need or have no idea where to even start? Whatever the case, a
            conversation with one of our consultants is the quickest way to find
            the solution.
          </p>
        </div>

        <ul className={styles.stats}>
          {stats.map(({ value, label }) => (
            <li key={label}>
              <strong>{value}</strong>
              <span>{label}</span>
            </li>
          ))}
        </ul>
      </div>

      <h3 className={styles.stepsHeading}>What happens next</h3>
      <ol className={styles.steps}>
        {steps.map(({ title, text }, index) => (
          <li key={title} className={styles.step}>
            <span className={styles.number}>{index + 1}</span>
            <h4>{title}</h4>
            <p>{text}</p>
          </li>
        ))}
      </ol>
    </section>
  );
};

export default ContactNextSteps;
