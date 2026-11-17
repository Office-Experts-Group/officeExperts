// /app/services/microsoft-power-platform/power-apps/(components)/PappsApps.jsx
import Link from "next/link";

import {
  PappsApprovalScene,
  PappsFieldScene,
  PappsStockScene,
  PappsTrackerScene,
  PappsPortalScene,
  PappsApprovalIcon,
  PappsFieldIcon,
  PappsStockIcon,
  PappsTrackerIcon,
  PappsPortalIcon,
} from "../(svgs)/PappsAppsArt";
import { PappsArrowIcon } from "../(svgs)/PappsIcons";

import styles from "@/styles/pappsApps.module.scss";

const PAPPS_APPS = [
  {
    id: "approvals",
    tab: "Requests and approvals",
    Icon: PappsApprovalIcon,
    Scene: PappsApprovalScene,
    title: "Request and approval apps",
    text: "Purchase requests, leave, expenses, change requests. Staff submit from a phone or browser, the right person is asked to approve, and the requester can always see where things stand.",
    replaces: ["Email chains", "Printed forms", "Shared inboxes"],
    connects: ["SharePoint lists", "Outlook", "Teams"],
  },
  {
    id: "field",
    tab: "Inspections and field work",
    Icon: PappsFieldIcon,
    Scene: PappsFieldScene,
    title: "Inspection and field apps",
    text: "Checklists, photos and location captured on site, then sent straight to the office. No clipboard, no typing it up at the end of the day.",
    replaces: [
      "Paper checklists",
      "Photos texted to the office",
      "Retyping notes",
    ],
    connects: ["SharePoint", "Power Automate", "Word and PDF reports"],
  },
  {
    id: "stock",
    tab: "Stock and assets",
    Icon: PappsStockIcon,
    Scene: PappsStockScene,
    title: "Inventory and asset trackers",
    text: "Check items in and out, scan barcodes from a phone and flag low stock. Everyone sees the same list, so the count stops depending on whose spreadsheet is newest.",
    replaces: ["Stocktake spreadsheets", "Whiteboards", "Sign-out sheets"],
    connects: ["SharePoint lists", "Excel", "SQL databases"],
  },
  {
    id: "tracker",
    tab: "Customers and jobs",
    Icon: PappsTrackerIcon,
    Scene: PappsTrackerScene,
    title: "Customer and job trackers",
    text: "Follow an enquiry from first contact through quote to finished job. Our building consultancy client now receives enquiries and sends quotes without handling each one by hand.",
    replaces: ["Enquiry spreadsheets", "Quotes built by hand", "Sticky notes"],
    connects: ["SharePoint", "Outlook", "Power Automate"],
    link: {
      href: "/case-studies/building-consultants-inspection-crm",
      text: "See the enquiry-to-quote case study",
    },
  },
  {
    id: "portal",
    tab: "Portals and dashboards",
    Icon: PappsPortalIcon,
    Scene: PappsPortalScene,
    title: "Internal portals and dashboards",
    text: "One tidy place for staff to find forms, tasks and reports instead of hunting through folders. Reports can sit alongside the app when you want numbers at a glance.",
    replaces: ["Folder trees nobody trusts", "Links in old emails"],
    connects: ["Power BI reports", "SharePoint", "Teams"],
    link: {
      href: "/services/microsoft-power-platform/power-bi",
      text: "Add Power BI reporting",
    },
  },
];

const PappsApps = () => {
  return (
    <section
      className={styles.pappsApps}
      id="papps-apps"
      aria-labelledby="papps-apps-heading"
    >
      <div className={styles.inner}>
        <header className={styles.header}>
          <h2 id="papps-apps-heading" className={styles.heading}>
            Power Apps we build{" "}
            <span className={styles.accent}>for every team</span>
          </h2>
          <p className={styles.lede}>
            Every app is designed around your process, but most fall into a
            handful of shapes. Pick one to see what it replaces and what it
            connects to.
          </p>
        </header>

        <fieldset className={styles.tabs}>
          <legend className={styles.srOnly}>Choose a type of Power App</legend>

          {PAPPS_APPS.map((app, i) => (
            <input
              key={app.id}
              type="radio"
              name="papps-app-type"
              id={`papps-app-${app.id}`}
              className={styles.radio}
              defaultChecked={i === 0}
            />
          ))}

          <div className={styles.list}>
            {PAPPS_APPS.map(({ id, tab, Icon }) => (
              <label
                key={id}
                htmlFor={`papps-app-${id}`}
                className={styles.tab}
              >
                <span className={styles.tabIcon}>
                  <Icon />
                </span>
                <span className={styles.tabText}>{tab}</span>
              </label>
            ))}
          </div>

          <div className={styles.panels}>
            {PAPPS_APPS.map(
              ({ id, title, text, replaces, connects, link, Scene }) => (
                <article key={id} className={styles.panel}>
                  <div className={styles.panelCopy}>
                    <h3 className={styles.panelTitle}>{title}</h3>
                    <p className={styles.panelText}>{text}</p>

                    <div className={styles.chipGroup}>
                      <p className={styles.chipLabel}>Replaces</p>
                      <ul className={styles.chips}>
                        {replaces.map((c) => (
                          <li key={c} className={styles.chip}>
                            {c}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className={styles.chipGroup}>
                      <p className={styles.chipLabel}>Usually connects to</p>
                      <ul className={styles.chips}>
                        {connects.map((c) => (
                          <li key={c} className={styles.chipAccent}>
                            {c}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className={styles.links}>
                      <a href="#contact" className={styles.arrowLink}>
                        Talk to us about this app
                        <PappsArrowIcon />
                      </a>
                      {link && (
                        <Link href={link.href} className={styles.arrowLink}>
                          {link.text}
                          <PappsArrowIcon />
                        </Link>
                      )}
                    </div>
                  </div>
                  <div className={styles.scene}>
                    <Scene />
                  </div>
                </article>
              ),
            )}
          </div>
        </fieldset>
      </div>
    </section>
  );
};

export default PappsApps;
