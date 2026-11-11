// app/services/microsoft-publisher/(components)/PublisherDestinations.jsx
// Where each kind of Publisher job goes now: Word or PowerPoint, following Microsoft's own
// mapping, with a link to the service that covers each one. Replaces the old checklist
// segment. Unordered cards, as there's no sequence here. Server component.
import Link from "next/link";

import AnimateOnScroll from "@/components/AnimateOnScroll";

// SCSS module (styles/publisherDestinations.module.scss)
import styles from "@/styles/publisherDestinations.module.scss";

// One card per family of Publisher jobs
const destinations = [
  {
    title: "Newsletters and reports",
    app: "Word",
    text: "Linked text boxes become styles, sections and newspaper columns, so stories flow from page to page and the masthead never moves. Each issue starts from a template, not last month's file.",
    href: "/services/microsoft-word/word-document-template-creation",
    linkText: "Word template design",
  },
  {
    title: "Letterhead and stationery",
    app: "Word",
    text: "Logos, colours and fonts locked into a brand template, so every letter, memo and invoice goes out looking the same no matter who wrote it.",
    href: "/services/microsoft-word/brand-template",
    linkText: "Brand templates",
  },
  {
    title: "Forms, applications and invoices",
    app: "Word",
    text: "Rebuilt with content controls, drop-downs and protected regions, so people fill the form in instead of accidentally rearranging it.",
    href: "/services/microsoft-word/fill-in-forms",
    linkText: "Fill-in forms",
  },
  {
    title: "Labels, envelopes and certificates",
    app: "Word",
    text: "Driven by mail merge from Excel, Access or your CRM, so printing a hundred certificates or name badges takes the same effort as printing one.",
    href: "/services/vba-macro-development",
    linkText: "Document automation",
  },
  {
    title: "Flyers, brochures and programs",
    app: "Word or PowerPoint",
    text: "Folded brochures and event programs set up with the right page size, panels and margins for your printer, with ready-made layouts saved as Quick Parts.",
    href: "/services/microsoft-word/quick-parts",
    linkText: "Quick Parts",
  },
  {
    title: "Posters, signs and calendars",
    app: "PowerPoint",
    text: "Custom page sizes for print, with layouts held on the Slide Master so the design can't drift as different people edit it.",
    href: "#publisher-powerpoint",
    linkText: "Designing in PowerPoint",
  },
];

const PublisherDestinations = () => {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <AnimateOnScroll animation="fade-up" duration={0.6}>
          <header className={styles.header}>
            <span className={styles.eyebrow}>Where each publication goes</span>
            <h2 className={styles.heading}>
              Every Publisher job has a{" "}
              <span className={styles.accent}>new home in Microsoft 365.</span>
            </h2>
            <p>
              Microsoft maps each Publisher use case to Word or PowerPoint. Our
              rule of thumb: if it&rsquo;s text-led, repeated or filled in by
              staff, it belongs in Word. If it&rsquo;s a single designed page,
              it belongs in PowerPoint.
            </p>
          </header>
        </AnimateOnScroll>

        <div className={styles.grid}>
          {destinations.map((item) => (
            <AnimateOnScroll
              key={item.title}
              animation="fade-up"
              duration={0.55}
              delay={0.05}
            >
              <article className={styles.card}>
                <span className={styles.app}>{item.app}</span>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardBody}>{item.text}</p>
                <Link href={item.href} className={styles.cardLink}>
                  {item.linkText}
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M3 7h8M7 3l4 4-4 4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </article>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PublisherDestinations;
