// /services/microsoft-word/quick-parts/(components)/QuickPartsSystem.jsx

import Link from "next/link";

import styles from "@/styles/quickPartsSystem.module.scss";
import { ArrowIcon } from "../(svgs)/ArrowIcon";

// Related Word services that extend a Quick Parts library (post-migration URLs)
const pairings = [
  {
    href: "/services/microsoft-word/popup-forms",
    title: "Popup forms",
    description:
      "Collect the client name, dates and options once, then insert the right blocks with the details already filled in.",
  },
  {
    href: "/services/microsoft-word/custom-toolbars-and-ribbons",
    title: "Custom ribbons",
    description:
      "Give your blocks their own tab with labelled buttons, so staff never dig through the Insert menu.",
  },
  {
    href: "/services/microsoft-word/corporate-global-template-solution",
    title: "Global templates",
    description:
      "Share one Quick Parts library across every template in the organisation, maintained in a single file.",
  },
  {
    href: "/services/microsoft-word/ai-ready-word-templates",
    title: "Copilot and AI templates",
    description:
      "Let AI draft the variable content while Quick Parts hold the wording that must never change.",
  },
];

const QuickPartsSystem = () => (
  <section className={styles.section}>
    <div className={styles.inner}>
      <div>
        <p className={styles.eyebrow}>Going further</p>
        <h2 className={styles.heading}>
          Quick Parts work best{" "}
          <span className={styles.light}>as part of a system.</span>
        </h2>
        <p className={styles.intro}>
          On their own, Quick Parts save time. Combined with forms, ribbons and
          automation, they become the backbone of a document process where staff
          assemble a complete, on-brand document in minutes.
        </p>
      </div>

      <ul className={styles.list}>
        {pairings.map((item) => (
          <li key={item.href}>
            <Link href={item.href} className={styles.row}>
              <span>
                <span className={styles.rowTitle}>{item.title}</span>
                <span className={styles.rowDesc}>{item.description}</span>
              </span>
              <span className={styles.arrow}>
                <ArrowIcon />
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default QuickPartsSystem;
