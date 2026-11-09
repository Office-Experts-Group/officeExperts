// app/services/3rd-party-application-or-office-integration/(components)/ThirdPartyIntro.jsx
import Image from "next/image";
import Link from "next/link";

import styles from "@/styles/thirdPartyIntro.module.scss";

import integrationHub from "../(svgs)/integrationHub.svg";

const ThirdPartyIntro = () => {
  return (
    <>
      <div className={styles.lightHero}></div>
      <section className={styles.section}>
        <div className={styles.inner}>
          <div className={styles.content}>
            {/* <p className={styles.eyebrow}>Custom Office solutions</p> */}
            <h1>
              Connect Xero, MYOB, Salesforce and your other apps to{" "}
              <span className={styles.accent}>Microsoft Office</span>
            </h1>
            <p>
              Most businesses run on a mix of products: an accounting package, a
              CRM, a database and the Microsoft Office tools staff actually use
              all day. When those systems don&apos;t talk to each other, people
              fill the gaps by copying, pasting and re-keying.
            </p>
            <p>
              We build the connections. Our Australian developers link{" "}
              <Link
                className={styles.inlineLink}
                href="https://www.excelexperts.com.au/custom-design-and-development"
              >
                Excel
              </Link>
              ,{" "}
              <Link
                className={styles.inlineLink}
                href="/services/microsoft-365-api-integration"
              >
                Word
              </Link>
              ,{" "}
              <Link
                className={styles.inlineLink}
                href="https://www.accessexperts.com.au/3rd-party-product-integration"
              >
                Access
              </Link>
              ,{" "}
              <Link
                className={styles.inlineLink}
                href="/services/microsoft-powerpoint"
              >
                PowerPoint
              </Link>{" "}
              and{" "}
              <Link
                className={styles.inlineLink}
                href="/services/microsoft-365-api-integration"
              >
                Microsoft 365
              </Link>{" "}
              to the products you already pay for, so the right data is in the
              right place without anyone handling it twice.
            </p>

            {/* Primary call to action, sits under the body copy */}
            <Link
              href="/contact-us/request-a-quote"
              className={`btn ${styles.cta}`}
            >
              Discuss your requirements
            </Link>

            {/* Trust points: founded 2000, team size and headline platforms */}
            <ul className={styles.stats}>
              <li className={styles.stat}>
                <strong>Since 2000</strong>
                <span>Australian company</span>
              </li>
              <li className={styles.stat}>
                <strong>25+</strong>
                <span>developers Australia-wide</span>
              </li>
              <li className={styles.stat}>
                <strong>API + ODBC</strong>
                <span>Xero, MYOB, Salesforce and more</span>
              </li>
            </ul>
          </div>

          <Image
            className={styles.image}
            src={integrationHub}
            alt="Diagram showing Excel, Word, Access and PowerPoint connected through an API layer to Salesforce, Xero, MYOB and SQL Server"
            width={520}
            height={420}
            priority
          />
        </div>
      </section>
    </>
  );
};

export default ThirdPartyIntro;
