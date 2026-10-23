// app/government-departments/(components)/GovDeptCapabilities.jsx

import Link from "next/link";

import { MergeAtScaleIcon } from "../(svgs)/MergeAtScaleIcon";
import { BrandLockIcon } from "../(svgs)/BrandLockIcon";
import { RibbonRolloutIcon } from "../(svgs)/RibbonRolloutIcon";
import { SystemLinkIcon } from "../(svgs)/SystemLinkIcon";

import styles from "../../../styles/govDeptCapabilities.module.css";

const capabilities = [
  {
    id: "mail-merge",
    heading: "Mail Merge at Scale",
    description:
      "Correspondence, notices and reports generated in bulk from your department's data sources, formatted correctly and consistently every time, regardless of volume.",
    href: "/mail-merge",
    linkLabel: "Mail merge solutions",
    Icon: MergeAtScaleIcon,
  },
  {
    id: "corporate-identity",
    heading: "Locked Corporate Identity",
    description:
      "Fonts, colours, logos and layout protected within the template itself, so departmental branding stays consistent no matter who in the organisation is producing a document.",
    href: "/corporate-identity",
    linkLabel: "Corporate identity protection",
    Icon: BrandLockIcon,
    featured: true,
  },
  {
    id: "toolbars-ribbons",
    heading: "Custom Toolbars & Ribbons",
    description:
      "A dedicated ribbon tab can put your department's approved tools, templates and macros in front of staff, reducing reliance on standard Word menus for controlled tasks.",
    href: "/custom-toolbars-and-ribbons",
    linkLabel: "Custom toolbars and ribbons",
    Icon: RibbonRolloutIcon,
  },
  {
    id: "api-integration",
    heading: "Records & System Integration",
    description:
      "Word templates connected to your existing records or case management systems, so document data stays in sync rather than being retyped between platforms.",
    href: "/microsoft-word-api-integrations",
    linkLabel: "Word API integrations",
    Icon: SystemLinkIcon,
  },
];

const GovDeptCapabilities = () => {
  return (
    <section className={styles.section} id="capabilities">
      <div className={styles.header}>
        <span className={styles.eyebrow}>What We Build</span>
        <h2 className={styles.heading}>
          What Word solutions do you build for government departments?
        </h2>
        <p className={styles.intro}>
          Beyond a single accessible template,most departments also need systems
          integrated to allow for: bulk document generation, protected branding,
          and integration with the records systems already in use.
        </p>
      </div>

      <div className={styles.grid}>
        {capabilities.map((c) => (
          <article
            key={c.id}
            className={`${styles.card} ${c.featured ? styles.cardAccent : ""}`}
          >
            <span className={styles.iconWrap}>
              <c.Icon />
            </span>
            <h3 className={styles.cardHeading}>{c.heading}</h3>
            <p className={styles.cardDescription}>{c.description}</p>
            <Link href={c.href} className={styles.cardLink}>
              {c.linkLabel}
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
};

export default GovDeptCapabilities;
