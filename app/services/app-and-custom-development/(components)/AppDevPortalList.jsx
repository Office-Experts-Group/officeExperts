// app/services/app-and-custom-development/(components)/AppDevPortalList.jsx
"use client";

import { useState, useId } from "react";
import Link from "next/link";

// Compiled CSS module (source: styles/appDevPortalList.module.scss)
import styles from "@/styles/appDevPortalList.module.scss";
// Power Platform pages live on powerplatformexperts.com.au, so those links are absolute
const PLATFORM_URL =
  "https://www.powerplatformexperts.com.au/services/microsoft-power-platform";

// Expandable list: the headline is always visible, the description opens on hover or click
const items = [
  {
    title: "WordPress portals",
    tag: "Content-led",
    desc: "Custom plugins and themes, member-only areas, searchable directories and forms that write to your back-office data.",
    href: "/case-studies/custom-quoting-tool",
    linkText: "See a React tool inside WordPress",
  },
  {
    title: "CRM development and integration",
    tag: "Customer records",
    desc: "Customisation of Microsoft Dynamics 365 and other CRM platforms, plus integrations so sales, service and operations all work from the same records.",
    href: "/services/by-business-solutions/online-solutions",
    linkText: "More on our online solutions",
  },
  {
    title: "Secure sign-in",
    tag: "Access",
    desc: "Single sign-on so people use the account they already have. We connect Microsoft Entra ID tenants, Google sign-in or Auth.js (NextAuth) to your application, with role-based access so each person sees only what they should.",
    href: "/microsoft-365-api-integration",
    linkText: "Microsoft 365 API integration",
  },
  {
    title: "SharePoint sites",
    tag: "Intranets",
    desc: "Branded intranets, team sites and document libraries with custom web parts, structured permissions and lists that feed your apps and automations.",
    href: "https://www.powerplatformexperts.com.au/sharepoint-consulting-and-development",
    linkText: "SharePoint consulting and development",
  },
  {
    title: "Internal messaging and Teams automation",
    tag: "Collaboration",
    desc: "Custom internal messaging, alerts and approvals, built as Microsoft Teams automations with Power Automate or as a chat feature inside your own application.",
    href: `${PLATFORM_URL}/microsoft-power-automate`,
    linkText: "Explore Power Automate",
  },
  {
    title: "Data you can trust",
    tag: "Integration",
    desc: "Two-way synchronisation with SharePoint, SQL Server and Dataverse, so a change in one system appears in the others.",
    href: "/services/database-development-and-solutions",
    linkText: "Database development and solutions",
  },
];

const AppDevPortalList = () => {
  // hovered follows the mouse; pinned is set by a click or tap
  const [hovered, setHovered] = useState(null);
  const [pinned, setPinned] = useState(null);

  // Prefix for the ids that tie each toggle to its panel
  const baseId = useId();

  // Hover wins while the mouse is over the list, then the pinned item returns
  const active = hovered !== null ? hovered : pinned;

  // Touch screens emit pointer events too, so only a real mouse drives hover
  const handleEnter = (event, index) => {
    if (event.pointerType === "mouse") setHovered(index);
  };

  const handleLeave = (event) => {
    if (event.pointerType === "mouse") setHovered(null);
  };

  const handleClick = (index) => {
    setPinned(pinned === index ? null : index);
  };

  return (
    <ul className={styles.list}>
      {items.map((item, i) => {
        const open = active === i;
        const panelId = `${baseId}-panel-${i}`;

        return (
          <li
            key={item.title}
            className={`${styles.item} ${open ? styles.active : ""}`}
            onPointerEnter={(event) => handleEnter(event, i)}
            onPointerLeave={handleLeave}
          >
            <div className={styles.row}>
              <h3 className={styles.title}>{item.title}</h3>
              <span className={styles.tag}>{item.tag}</span>
              <svg
                className={styles.arrow}
                width="18"
                height="18"
                viewBox="0 0 20 20"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M4 10h12M12 5l5 5-5 5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              {/* Invisible button covering the row, so the headline, tag and arrow all toggle it */}
              <button
                type="button"
                className={styles.toggle}
                aria-expanded={open}
                aria-controls={panelId}
                aria-label={`${item.title}: show details`}
                onClick={() => handleClick(i)}
              />
            </div>

            {/* The description stays in the page for crawlers; inert keeps its link out of the tab order while closed.
                inert is passed as a string because of the React version in use. */}
            <div id={panelId} className={styles.panel}>
              <div
                className={styles.panelInner}
                inert={open ? undefined : "true"}
              >
                <div className={styles.panelBody}>
                  <p className={styles.desc}>{item.desc}</p>
                  <Link href={item.href} className={styles.link}>
                    {item.linkText}
                  </Link>
                </div>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default AppDevPortalList;
