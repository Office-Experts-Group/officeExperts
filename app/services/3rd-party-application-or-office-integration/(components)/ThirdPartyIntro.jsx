// app/services/3rd-party-application-or-office-integration/(components)/ThirdPartyIntro.jsx
import Image from "next/image";
import Link from "next/link";

// Fades the content in as it scrolls into view
import AnimateOnScroll from "@/components/AnimateOnScroll";

// Compiled CSS from styles/thirdPartyIntro.module.scss
import styles from "@/styles/thirdPartyIntro.module.scss";
// Standalone SVG: Office apps <-> integration layer <-> 3rd party apps
import integrationHub from "../(svgs)/integrationHub.svg";

const ThirdPartyIntro = () => {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <AnimateOnScroll animation="fade-up" duration={1} delay={0}>
          <div className={styles.content}>
            {/* <p className={styles.eyebrow}>Custom Office solutions</p> */}
            <h2>
              Connect Xero, MYOB, Salesforce and your other apps to{" "}
              <span className={styles.accent}>Microsoft Office</span>
            </h2>
            <p>
              Most businesses run on a mix of products: an accounting package, a
              CRM, a database and the Microsoft Office tools staff actually use
              all day. When those systems don&apos;t talk to each other, people
              fill the gaps by copying, pasting and re-keying.
            </p>
            <p>
              We build the connections. Our Australian developers link{" "}
              <Link href="https://www.excelexperts.com.au/custom-design-and-development">
                Excel
              </Link>
              , <Link href="/services/microsoft-365-api-integration">Word</Link>
              ,{" "}
              <Link href="https://www.accessexperts.com.au/3rd-party-product-integration">
                Access
              </Link>
              , <Link href="/services/microsoft-powerpoint">PowerPoint</Link>{" "}
              and{" "}
              <Link href="/services/microsoft-365-api-integration">
                Microsoft 365
              </Link>{" "}
              to the products you already pay for, so the right data is in the
              right place without anyone handling it twice.
            </p>

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
        </AnimateOnScroll>

        <AnimateOnScroll animation="scale-up" duration={1} delay={0.2}>
          <Image
            className={styles.image}
            src={integrationHub}
            alt="Diagram showing Excel, Word, Access and PowerPoint connected through an API layer to Salesforce, Xero, MYOB and SQL Server"
            width={520}
            height={420}
            priority
          />
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default ThirdPartyIntro;
