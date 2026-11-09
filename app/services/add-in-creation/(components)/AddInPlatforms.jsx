// /services/add-in-creation/(components)/AddInPlatforms.jsx
// Every Microsoft platform we build add-ins for, as two numbered lists: the Office apps, then the Microsoft 365 and cloud platforms.
import React from "react";
import Link from "next/link";

import { ArrowIcon } from "../(svgs)/ArrowIcon";
import { ExcelAddInIcon } from "../(svgs)/ExcelAddInIcon";
import { WordAddInIcon } from "../(svgs)/WordAddInIcon";
import { PowerPointAddInIcon } from "../(svgs)/PowerPointAddInIcon";
import { OutlookAddInIcon } from "../(svgs)/OutlookAddInIcon";
import { AccessAddInIcon } from "../(svgs)/AccessAddInIcon";
import { ProjectAddInIcon } from "../(svgs)/ProjectAddInIcon";
import { VisioAddInIcon } from "../(svgs)/VisioAddInIcon";
import { OneNoteAddInIcon } from "../(svgs)/OneNoteAddInIcon";
import { PublisherAddInIcon } from "../(svgs)/PublisherAddInIcon";
import { TeamsAddInIcon } from "../(svgs)/TeamsAddInIcon";
import { SharePointAddInIcon } from "../(svgs)/SharePointAddInIcon";
import { PowerBiAddInIcon } from "../(svgs)/PowerBiAddInIcon";
import { PowerPlatformAddInIcon } from "../(svgs)/PowerPlatformAddInIcon";
import { CopilotAddInIcon } from "../(svgs)/CopilotAddInIcon";

import styles from "@/styles/addInPlatforms.module.scss";

// href and linkText are optional: only platforms with a relevant page on the site get a link
const officeApps = [
  {
    name: "Excel",
    tag: "Office.js · VSTO · XLL",
    text: "Custom worksheet functions, ribbon tools and task panes that pull live data from your systems, plus bulk tools for cleaning, reconciling and reporting.",
    Icon: ExcelAddInIcon,
    href: "/services/power-query",
    linkText: "Power Query services",
  },
  {
    name: "Word",
    tag: "Office.js · VSTO · VBA",
    text: "Clause libraries, brand and style enforcement, guided document assembly and tools that stop pasted content breaking your templates.",
    Icon: WordAddInIcon,
    href: "/services/microsoft-word/custom-toolbars-and-ribbons",
    linkText: "Custom Word ribbons",
  },
  {
    name: "PowerPoint",
    tag: "Office.js · VSTO",
    text: "Slide and brand tools, deck builders that generate presentations from your data, and checks that run before a file is shared.",
    Icon: PowerPointAddInIcon,
    href: "/services/microsoft-powerpoint",
    linkText: "PowerPoint services",
  },
  {
    name: "Outlook",
    tag: "Office.js · VSTO",
    text: "Sidebars that file email to the right client folder or CRM record, reply templates, signatures and smart sorting of busy inboxes.",
    Icon: OutlookAddInIcon,
    href: "/services/ai-email-triage",
    linkText: "AI email triage",
  },
  {
    name: "Access",
    tag: "COM · Access add-ins",
    text: "Design tools, report generators and utilities that extend Access for the people who build and maintain your databases.",
    Icon: AccessAddInIcon,
    href: "/services/database-development-and-solutions",
    linkText: "Database development",
  },
  {
    name: "Project",
    tag: "Office.js · VSTO",
    text: "Tools that move plans, resources and progress between Project and your reporting or finance systems.",
    Icon: ProjectAddInIcon,
  },
  {
    name: "Visio",
    tag: "Office.js · VSTO",
    text: "Shape and stencil tools, and add-ins that turn data into diagrams or read finished diagrams back into data.",
    Icon: VisioAddInIcon,
  },
  {
    name: "OneNote",
    tag: "Office.js",
    text: "Task pane add-ins that insert, read and organise notebook content from your other systems.",
    Icon: OneNoteAddInIcon,
  },
  {
    name: "Publisher",
    tag: "COM · VBA",
    text: "Layout and data tools for organisations that still run print and publication work through Publisher.",
    Icon: PublisherAddInIcon,
    href: "/services/microsoft-publisher",
    linkText: "Publisher services",
  },
];

const cloudApps = [
  {
    name: "Microsoft Teams",
    tag: "Tabs · bots · message extensions",
    text: "Bring your tools and data into chats and channels, so teams can act on a record without leaving the conversation.",
    Icon: TeamsAddInIcon,
    href: "/services/microsoft-office-365",
    linkText: "Microsoft 365 services",
  },
  {
    name: "SharePoint",
    tag: "SharePoint Framework",
    text: "Custom web parts and extensions that give modern SharePoint sites and pages the behaviour your business needs.",
    Icon: SharePointAddInIcon,
    href: "https://www.powerplatformexperts.com.au/sharepoint-consulting-and-development",
    linkText: "SharePoint consulting",
  },
  {
    name: "Power BI",
    tag: "Custom visuals",
    text: "Custom visuals for when the built-in charts do not show your data the way your business needs to see it.",
    Icon: PowerBiAddInIcon,
    href: "/services/dashboards",
    linkText: "Dashboard development",
  },
  {
    name: "Power Platform",
    tag: "Custom connectors · code components",
    text: "Custom connectors that link Power Apps and Power Automate to your own systems, and code components that extend Power Apps.",
    Icon: PowerPlatformAddInIcon,
    href: "https://www.powerplatformexperts.com.au",
    linkText: "Power Platform services",
  },
  {
    name: "Copilot and AI agents",
    tag: "Agents · plugins",
    text: "Custom agents and extensions that connect Microsoft 365 Copilot or your own AI tools to your data and systems.",
    Icon: CopilotAddInIcon,
    href: "/services/copilot",
    linkText: "Copilot services",
  },
];

// One numbered list of platforms. The numbers come from a CSS counter shared by both lists.
const PlatformList = ({ title, platforms }) => (
  <div>
    <h3 className={styles.groupTitle}>{title}</h3>
    <ul className={styles.list}>
      {platforms.map(({ name, tag, text, Icon, href, linkText }) => (
        <li key={name} className={styles.row}>
          <span className={styles.icon}>
            <Icon />
          </span>
          <div className={styles.rowBody}>
            <div className={styles.rowHead}>
              <h4 className={styles.rowTitle}>{name}</h4>
              <span className={styles.chip}>{tag}</span>
            </div>
            <p className={styles.text}>{text}</p>
            {href && (
              <Link href={href} className={styles.link}>
                {linkText}
                <ArrowIcon />
              </Link>
            )}
          </div>
        </li>
      ))}
    </ul>
  </div>
);

const AddInPlatforms = () => {
  return (
    // id is the target of the hero's secondary link
    <section className={styles.section} id="platforms">
      <div className={styles.inner}>
        <div className={styles.intro}>
          <span className={styles.eyebrow}>Every Microsoft platform</span>
          <h2 className={styles.heading}>
            One team for add-ins on{" "}
            <span className={styles.accent}>every Microsoft platform</span>
          </h2>
          <p className={styles.lead}>
            Whichever Microsoft app your people work in, we can build an add-in
            for it. We choose the technology that suits the platform, your users
            and your IT environment, then build it, deploy it and support it.
          </p>
          <Link href="#contact" className="btn">
            Tell us which app
          </Link>
        </div>

        <div className={styles.groups}>
          <PlatformList title="Office apps" platforms={officeApps} />
          <PlatformList
            title="Microsoft 365 and cloud platforms"
            platforms={cloudApps}
          />
        </div>
      </div>
    </section>
  );
};

export default AddInPlatforms;
