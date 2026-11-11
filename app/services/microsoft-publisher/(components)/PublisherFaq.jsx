// app/services/microsoft-publisher/(components)/PublisherFaq.jsx
// Common Publisher retirement questions. Native <details>/<summary> accordions, so it
// works with no client JavaScript. `faqs` is exported so page.js can build the FAQPage
// schema from the same text, keeping the visible answers and the schema in sync.
import AnimateOnScroll from "@/components/AnimateOnScroll";

// SCSS module (styles/publisherFaq.module.scss)
import styles from "@/styles/publisherFaq.module.scss";

export const faqs = [
  {
    question: "Can I still open Microsoft Publisher files?",
    answer:
      "Not with Microsoft 365. Since 1 October 2026, subscribers can no longer install Publisher or open .pub files with it. If you still have Publisher 2016, 2019 or 2021 installed under a one-off licence, it will keep opening .pub files, but it no longer receives support or security updates. Free tools such as LibreOffice Draw and Affinity can import .pub files without Publisher, although complex layouts often shift.",
  },
  {
    question: "Have my Publisher files been deleted?",
    answer:
      "No. Microsoft hasn't removed any .pub files from your computers, OneDrive or SharePoint. The problem is that no current Microsoft app can open them, so they need converting while you still have a reliable way to read them.",
  },
  {
    question: "Is there a tool that converts Publisher files to Word?",
    answer:
      "Not an official one. Microsoft's recommended path is to save each publication as a PDF and then open that PDF in Word, which makes the text editable but often moves pictures and text frames. Its sample PowerShell script can export a whole folder to PDF, but only on a machine with a licensed copy of Publisher. For publications you keep producing, rebuilding them as Word or PowerPoint templates gives a far more reliable result.",
  },
  {
    question: "Should our publications move to Word or PowerPoint?",
    answer:
      "Microsoft recommends Word for newsletters, letterhead, forms, labels, envelopes and folded programs, and PowerPoint for posters, banners and signs. Flyers, brochures, certificates, calendars and cards can go either way. We usually decide based on who edits the file: text-heavy content maintained by staff suits Word, while single designed pages suit PowerPoint.",
  },
  {
    question: "Can you convert hundreds of Publisher files at once?",
    answer:
      "Yes. We archive whole libraries to PDF in bulk so nothing is lost, then work with you to identify which publications are still in use. Only those are rebuilt as templates, which is usually a much smaller number than the archive.",
  },
  {
    question: "Why not move to Canva or another design app instead?",
    answer:
      "For a dedicated marketing team that can work well. But if most of your publications are produced by staff who already work in Microsoft 365, keeping them in Word and PowerPoint means no new licences, no new software to learn, and templates that sit alongside your other documents in SharePoint and Teams.",
  },
];

const PublisherFaq = () => {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <AnimateOnScroll animation="fade-up" duration={0.6}>
          <header className={styles.header}>
            <span className={styles.eyebrow}>Publisher retirement FAQ</span>
            <h2 className={styles.heading}>
              Questions we&rsquo;re{" "}
              <span className={styles.accent}>asked every week.</span>
            </h2>
          </header>
        </AnimateOnScroll>

        <div>
          {faqs.map((faq) => (
            <details key={faq.question} className={styles.item}>
              <summary className={styles.question}>
                {faq.question}
                {/* Plus icon rotates to a cross when open (see SCSS) */}
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M8 2v12M2 8h12"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                  />
                </svg>
              </summary>
              <p className={styles.answer}>{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PublisherFaq;
