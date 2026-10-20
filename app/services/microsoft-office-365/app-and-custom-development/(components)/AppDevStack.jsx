// app/services/microsoft-office-365/app-and-custom-development/(components)/AppDevStack.jsx
import Link from "next/link";

// Compiled CSS module (source: styles/appDevStack.module.scss)
import styles from "@/styles/appDevStack.module.scss";
// React interface, Next.js server rendering, then data and services
import { AppStackSvg } from "../(svgs)/AppStackSvg";

const items = [
  {
    title: "Portals for customers and staff",
    body: "Secure sign-in, role-based access, dashboards and document exchange, so people can help themselves instead of emailing your team.",
  },
  {
    title: "Quoting, booking and workflow tools",
    body: "Validated forms, approvals and automatic calculations that replace error-prone spreadsheets and email chains.",
  },
  {
    title: "Microsoft 365 and API integration",
    body: "Live connections to SharePoint, Outlook, Dataverse, SQL Server and third-party systems through Microsoft Graph and REST APIs.",
    href: "/microsoft-365-api-integration",
    linkText: "Explore Microsoft 365 API integration",
  },
  {
    title: "Legacy rebuilds",
    body: "Access databases, Excel workbooks and ageing ActiveX or VBScript tools rebuilt as modern, browser-based applications.",
    href: "/services/activex-vbscript-migration",
    linkText: "See our ActiveX and VBScript migration",
  },
];

const AppDevStack = () => {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <header className={styles.header}>
          <span className={styles.eyebrow}>Next.js and React</span>
          <h2 className={styles.heading}>
            Custom web applications with{" "}
            <span className={styles.accent}>Next.js and React</span>
          </h2>
          <p className={styles.lead}>
            When a project needs speed, search visibility and complete control
            over the user experience, we build with Next.js and React.
            Server-side rendering gives fast first loads and pages that search
            engines can read, while React keeps even complex interfaces
            responsive and easy to maintain.
          </p>
        </header>

        <div className={styles.body}>
          <div className={styles.visual}>
            <AppStackSvg />
          </div>

          <ul className={styles.items}>
            {items.map((item) => (
              <li key={item.title} className={styles.item}>
                <h3 className={styles.itemTitle}>{item.title}</h3>
                <p className={styles.itemBody}>{item.body}</p>
                {item.href && (
                  <Link href={item.href} className={styles.link}>
                    {item.linkText}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>

        <p className={styles.footer}>
          Prefer to stay on the Microsoft stack? See our{" "}
          <Link href="/services/microsoft-dot-net" className={styles.inline}>
            .NET development services
          </Link>
          .
        </p>
      </div>
    </section>
  );
};

export default AppDevStack;
