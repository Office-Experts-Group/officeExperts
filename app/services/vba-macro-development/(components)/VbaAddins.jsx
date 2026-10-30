// /services/vba-macro-development/(components)/VbaAddins.jsx
// Server component. Add-ins explained on the left with an illustration, then three ways we ship them.
import Link from "next/link";

import { VbaAddinSvg } from "../(svgs)/VbaAddinSvg";
import { VbaArrowSvg } from "../(svgs)/VbaArrowSvg";

import styles from "@/styles/vbaAddins.module.scss";

// Laid out like spreadsheet rows: the way of shipping on the left, what it means on the right
const rows = [
  {
    term: ".xlam, .dotm and .ppam add-ins",
    text: "Macro-enabled add-ins load when the application starts, so the same tools appear in every workbook, document or presentation.",
  },
  {
    term: "Signed and trusted",
    text: "Office blocks macros it doesn't trust. We digitally sign add-ins and deploy them to a Trusted Location, or through your IT team's usual tools, so staff never meet a security warning.",
  },
  {
    term: "COM, VSTO and web add-ins",
    text: "When VBA isn't the right fit, for example in the new Outlook, Office on the web or heavier desktop jobs, we build web add-ins in JavaScript or VSTO add-ins in .NET.",
  },
];

const VbaAddins = () => (
  <section className={styles.section} id="add-ins">
    <div className={styles.inner}>
      <div className={styles.top}>
        <div className={styles.text}>
          <span className={styles.eyebrow}>Add-ins and deployment</span>
          <h2 className={styles.heading}>
            Add-ins that work{" "}
            <span className={styles.accent}>across every file.</span>
          </h2>
          <p className={styles.body}>
            We create add-ins with VBA that extend all of your Office products.
            In Excel, an add-in makes your macros available to every workbook
            the moment it opens, so nobody copies modules from file to file. In
            Word and PowerPoint, it keeps your branding and formatting tools one
            click away, and it is how we put an end to messy documents that
            break corporate branding.
          </p>
          <p className={styles.body}>
            There are several ways to build and deploy them, and the right
            choice depends on your environment and how your team shares files.
            We&apos;ll point your company in the right direction and look after
            the full build.
          </p>
          <div className={styles.links}>
            <Link href="/services/add-in-creation" className={styles.link}>
              Add-in creation
              <VbaArrowSvg />
            </Link>
            <Link
              href="https://www.excelexperts.com.au/add-in-development"
              className={styles.link}
            >
              Excel add-in development
              <VbaArrowSvg />
            </Link>
            <Link href="#contact" className={styles.link}>
              Discuss an add-in project
              <VbaArrowSvg />
            </Link>
          </div>
        </div>

        <div className={styles.visual} aria-hidden="true">
          <VbaAddinSvg />
        </div>
      </div>

      <dl className={styles.rows}>
        {rows.map(({ term, text }) => (
          <div key={term} className={styles.row}>
            <dt className={styles.term}>{term}</dt>
            <dd className={styles.definition}>{text}</dd>
          </div>
        ))}
      </dl>

      <p className={styles.more}>
        Need something heavier than VBA? See our{" "}
        <Link href="/services/microsoft-dot-net">.NET development</Link> and{" "}
        <Link href="/services/app-and-custom-development">
          app and custom development
        </Link>{" "}
        services.
      </p>
    </div>
  </section>
);

export default VbaAddins;
