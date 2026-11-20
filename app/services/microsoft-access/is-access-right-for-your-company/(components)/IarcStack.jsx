// /app/services/microsoft-access/is-access-right-for-your-company/(components)/IarcStack.jsx
import React from "react";
import Link from "next/link";

import styles from "@/styles/iarcStack.module.scss";
import {
  IarcSqlIcon,
  IarcCodeIcon,
  IarcMysqlIcon,
  IarcOfficeIcon,
  IarcSharepointIcon,
  IarcCloudIcon,
  IarcBiIcon,
  IarcAppsIcon,
} from "../(svgs)/IarcStackArt";
import { IarcArrowIcon } from "../(svgs)/IarcIcons";

// Links without a page of their own are plain text (no href).
const IARC_STACK = [
  {
    name: "SQL Server",
    text: "A server database behind your Access screens for bigger data, more users and proper backups.",
    href: "/services/sql-server-and-access-integration",
    Icon: IarcSqlIcon,
  },
  {
    name: "Visual Studio (C#, VB, ASP)",
    text: "Custom desktop and web applications for when Access is not the right front end.",
    href: "/services/microsoft-dot-net",
    Icon: IarcCodeIcon,
  },
  {
    name: "MySQL",
    text: "Connect Access to an existing MySQL database, or move the data across.",
    Icon: IarcMysqlIcon,
  },
  {
    name: "Office 365",
    text: "Make Access work with the Microsoft 365 tools your team already uses every day.",
    href: "/services/microsoft-office-365",
    Icon: IarcOfficeIcon,
  },
  {
    name: "SharePoint",
    text: "Share lists and documents with the team and keep Access working alongside them.",
    href: "/services/microsoft-access/access-online",
    Icon: IarcSharepointIcon,
  },
  {
    name: "Azure",
    text: "Host your data and apps in the cloud so people can work from anywhere.",
    href: "/services/microsoft-access/access-azure-cloud-based-solutions",
    Icon: IarcCloudIcon,
  },
  {
    name: "Power BI",
    text: "Dashboards built on top of your Access or SQL Server data.",
    href: "/services/microsoft-power-platform/power-bi",
    Icon: IarcBiIcon,
  },
  {
    name: "Power Apps",
    text: "Phone and tablet apps that read and write the same data as your database.",
    href: "/services/microsoft-power-platform/power-apps",
    Icon: IarcAppsIcon,
  },
];

const IarcStack = () => (
  <section
    id="iarc-stack"
    className={styles.iarcStack}
    aria-labelledby="iarc-stack-heading"
  >
    <div className={styles.inner}>
      <header className={styles.header}>
        <p className={styles.eyebrow}>Works with the tools you already have</p>
        <h2 id="iarc-stack-heading" className={styles.heading}>
          Access help and support{" "}
          <span className={styles.accent}>across your whole tech stack</span>
        </h2>
        <p className={styles.lede}>
          In addition to creating Access databases, our experienced consultants
          build database solutions with all of the technologies on this list, so
          what we build fits in with the rest of your business.
        </p>
        <Link
          href="/microsoft-support-and-training-australia"
          className={styles.headerLink}
        >
          Access help and training
          <IarcArrowIcon />
        </Link>
      </header>

      <ul className={styles.ledger}>
        {IARC_STACK.map(({ name, text, href, Icon }) => (
          <li key={name} className={styles.row}>
            <span className={styles.iconTile}>
              <Icon className={styles.icon} />
            </span>
            <div className={styles.rowCopy}>
              <h3 className={styles.name}>
                {href ? (
                  <Link href={href} className={styles.rowLink}>
                    {name}
                  </Link>
                ) : (
                  name
                )}
              </h3>
              <p className={styles.text}>{text}</p>
            </div>
            {href && (
              <span className={styles.arrow} aria-hidden="true">
                <IarcArrowIcon />
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default IarcStack;
