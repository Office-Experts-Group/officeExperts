// /app/services/microsoft-power-platform/sharepoint-consulting-and-development/(components)/SpcdWhyUs.jsx
// A large statement band (accent) whose illustration breaks out into the white
// differentiator area below it.
import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { SpcdStatementArt, SpcdDiffArt } from "../(svgs)/SpcdWhyUsArt";
import { SpcdArrowIcon } from "../(svgs)/SpcdIcons";
import styles from "@/styles/spcdWhyUs.module.scss";

const SPCD_DIFFERENTIATORS = [
  {
    id: "ecosystem",
    heading: "We understand the connections.",
    body: "SharePoint doesn’t exist in isolation, and neither does our work on it. It connects to Teams, Power Automate, Power Apps, Power BI and Azure, and decisions made in SharePoint affect how those tools behave. With developers working across the whole Microsoft suite, we have the connections covered.",
    link: {
      href: "/services/microsoft-power-platform/microsoft-power-automate",
      label: "Power Automate services",
    },
  },
  {
    id: "australian",
    heading: "Australian-based, remote-first.",
    body: "We work with businesses right across the country without the travel overhead. Our Australian team works with you over Teams and email, so you don’t pay for travel, while getting the backing of an established, nationwide organisation with developers around the country.",
    link: { href: "/locations", label: "Our locations" },
  },
  {
    id: "governance",
    heading: "Governance isn’t an afterthought.",
    body: "Governance, Copilot readiness and scalability are scoped into projects from the start, not proposed as extras once the main work is done. We’d rather have that conversation early.",
    link: null,
  },
  {
    id: "honest",
    heading: "We’ll tell you when it’s not us.",
    body: "We’re not limited to SharePoint. Where a workflow belongs in Power Automate, a form needs Power Apps, or a portal makes more sense than a SharePoint site, we can build it as part of the same engagement. And if something is outside our wheelhouse, we’ll say so rather than stretch the scope to fit.",
    link: {
      href: "/services/microsoft-office-365",
      label: "Office 365 services",
    },
  },
];

const SPCD_RELATED = [
  {
    label: "Power Apps embedded in SharePoint",
    href: "/services/microsoft-power-platform/microsoft-power-apps",
  },
  {
    label: "Power BI dashboards in SharePoint",
    href: "/services/microsoft-power-platform/microsoft-power-bi",
  },
  {
    label: "Power Automate workflow automation",
    href: "/services/microsoft-power-platform/microsoft-power-automate",
  },
  {
    label: "Business process automation",
    href: "/services/business-process-automation",
  },
  {
    label: "Microsoft 365 integrations",
    href: "/services/microsoft-365-api-integration",
  },
];

const SpcdWhyUs = () => {
  return (
    <section
      id="spcd-why-us"
      className={styles.spcdWhyUs}
      aria-labelledby="spcd-why-us-heading"
    >
      {/* ── Statement band ── */}
      <div className={styles.band}>
        <div className={styles.bandInner}>
          <figure className={styles.statement}>
            <blockquote className={styles.quote}>
              <p>
                An environment that works well on day&nbsp;one but becomes a
                maintenance problem in two years is a project that wasn&rsquo;t
                scoped properly.
              </p>
            </blockquote>
            <figcaption className={styles.attribution}>
              <strong>Office Experts</strong>
              <span>Est. 2000 · Australian owned</span>
            </figcaption>
            <Link href="#contact" className={`btn ${styles.bandCta}`}>
              Start a conversation
            </Link>
          </figure>

          <div className={styles.breakout}>
            <SpcdStatementArt />
          </div>
        </div>
      </div>

      {/* ── Differentiators ── */}
      <div className={styles.body}>
        <AnimateOnScroll animation="fade-up">
          <h2 id="spcd-why-us-heading" className={styles.heading}>
            Why work <span className={styles.accent}>with us</span>
          </h2>
        </AnimateOnScroll>

        <ul className={styles.diffs}>
          {SPCD_DIFFERENTIATORS.map(({ id, heading, body, link }) => (
            <li key={id} className={styles.diff}>
              <SpcdDiffArt type={id} />
              <div>
                <h3 className={styles.diffHeading}>{heading}</h3>
                <p className={styles.diffBody}>{body}</p>
                {link && (
                  <Link href={link.href} className={styles.diffLink}>
                    {link.label}
                    <SpcdArrowIcon />
                  </Link>
                )}
              </div>
            </li>
          ))}
        </ul>

        <div className={styles.related}>
          <span className={styles.relatedLabel}>Related services</span>
          <nav className={styles.relatedLinks} aria-label="Related services">
            {SPCD_RELATED.map(({ label, href }) => (
              <Link key={href} href={href} className={styles.relatedLink}>
                {label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </section>
  );
};

export default SpcdWhyUs;
