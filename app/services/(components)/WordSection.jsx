// /app/services/(components)/WordSection.jsx
// Word: each group of services is styled as a sheet of paper with a folded corner.
// Each item is one link. Its short description opens on hover or keyboard focus (pure CSS, so it stays server rendered).
import styles from "@/styles/wordSection.module.scss";
import ServiceLink from "./ServiceLink";
import { WordIcon } from "../(svgs)/WordIcon";
import { ArrowIcon } from "../(svgs)/ArrowIcon";

const groups = [
  {
    title: "Templates and branding",
    items: [
      {
        name: "Word template creation",
        description:
          "Custom templates built on proper styles, so every document comes out consistent.",
        href: "/services/microsoft-word/word-document-template-creation",
      },
      {
        name: "Template conversions",
        description:
          "Turn existing documents and designs into clean, reliable Word templates.",
        href: "/services/microsoft-word/word-template-conversions",
      },
      {
        name: "Brand templates",
        description:
          "Templates that keep your fonts, colours and layouts on-brand.",
        href: "/services/microsoft-word/brand-template",
      },
      {
        name: "Corporate global templates",
        description:
          "One master template system shared across every team and location.",
        href: "/services/microsoft-word/corporate-global-template-solution",
      },
      {
        name: "Corporate identity",
        description:
          "Apply your corporate identity across every Word document you produce.",
        href: "/services/microsoft-word/corporate-identity",
      },
      {
        name: "Document rebranding",
        description:
          "Update existing documents to a new brand without breaking the content.",
        href: "/services/microsoft-word/document-rebranding-services",
      },
    ],
  },
  {
    title: "Forms and automation",
    items: [
      {
        name: "Custom toolbars and ribbons",
        description:
          "Custom ribbon tabs that put your team's tools one click away.",
        href: "/services/microsoft-word/custom-toolbars-and-ribbons",
      },
      {
        name: "Quick Parts",
        description:
          "Reusable blocks of approved text and layouts you can insert in seconds.",
        href: "/services/microsoft-word/quick-parts",
      },
      {
        name: "Fill-in forms",
        description:
          "Structured forms with dropdowns, checkboxes and locked sections.",
        href: "/services/microsoft-word/fill-in-forms",
      },
      {
        name: "Popup forms",
        description:
          "Guided forms that build a finished document from a few answers.",
        href: "/services/microsoft-word/popup-forms",
      },
      {
        name: "Mail merge",
        description:
          "Personalised letters, emails and labels generated from your data.",
        href: "/services/microsoft-word/mail-merge",
      },
      {
        name: "Remove repetition",
        description:
          "Cut repetitive formatting and typing with automation inside Word.",
        href: "/services/microsoft-word/remove-repetition-and-increase-productivity",
      },
    ],
  },
  {
    title: "Conversion, access and training",
    items: [
      {
        name: "Word to PDF conversion",
        description:
          "Reliable PDF output, including accessible and editable PDF forms.",
        href: "/services/microsoft-word/word-template-conversions",
      },
      {
        name: "Accessibility",
        description:
          "Documents built to meet accessibility standards for every reader.",
        href: "/services/microsoft-word/accessibility",
      },
      {
        name: "Google Docs to Word migration",
        description:
          "Move content from Google Docs into properly structured Word documents.",
        href: "/services/microsoft-word/google-docs-to-word-migration",
      },
    ],
  },
];

const WordSection = () => (
  <section id="word" className={styles.section} aria-labelledby="word-heading">
    <div className={styles.inner}>
      <header className={styles.header}>
        <span className={styles.icon}>
          <WordIcon />
        </span>
        <span className={styles.eyebrow}>Documents</span>
        <h2 id="word-heading" className={styles.heading}>
          Word Design and{" "}
          <span className={styles.accent}>Document Solutions</span>
        </h2>
        <p className={styles.intro}>
          Documents that look right every time. Our Word specialists build
          templates, forms and automation that keep your brand consistent and
          your people productive.
        </p>
      </header>

      <div className={styles.sheets}>
        {groups.map((group) => (
          <article key={group.title} className={styles.sheet}>
            <h3 className={styles.sheetTitle}>{group.title}</h3>
            <ul className={styles.sheetList}>
              {group.items.map((item) => (
                <li key={item.name} className={styles.sheetItem}>
                  <ServiceLink href={item.href} className={styles.sheetLink}>
                    <span className={styles.sheetHead}>
                      <h4 className={styles.sheetName}>{item.name}</h4>
                      <span className={styles.sheetArrow}>
                        <ArrowIcon />
                      </span>
                    </span>
                    <div className={styles.sheetDesc}>
                      <p className={styles.sheetText}>{item.description}</p>
                    </div>
                  </ServiceLink>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default WordSection;
