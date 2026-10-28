// app/services/microsoft-365-api-integration/(components)/ApiSurfaces.jsx
// "Where it runs": the places an integration can live. Carries forward the
// portal, mobile, offline sync and PWA content from the old page.

import React from "react";
import Link from "next/link";

import AnimateOnScroll from "@/components/AnimateOnScroll";

import { surfaceIcons } from "../(svgs)/SurfaceIcons";
import { ArrowIcon } from "../(svgs)/ArrowIcon";

import styles from "@/styles/apiSurfaces.module.scss";

const surfaces = [
  {
    id: "office",
    title: "Inside Word, Excel, PowerPoint and Outlook",
    text: "Task panes, ribbon buttons and custom functions that sit in the apps your team already has open, deployed centrally from the Microsoft 365 admin centre. The unified manifest can switch off an older COM or VSTO add-in once its web replacement is installed, which makes retiring legacy add-ins far cleaner.",
    href: "/services/add-in-creation",
    linkText: "Office add-in creation",
  },
  {
    id: "web",
    title: "Web portals for staff, clients and suppliers",
    text: "Responsive Next.js and React portals that sign people in with Entra ID and surface SharePoint, Excel and Dataverse data on one screen, instead of five apps and five logins.",
    href: "/services/online-solutions",
    linkText: "Online solutions",
  },
  {
    id: "mobile",
    title: "Mobile and offline apps for the field",
    text: "React Native apps and installable Progressive Web Apps let field teams fill in forms, take photos and read site documents with no signal, then sync to SharePoint or Dataverse when they're back in range. No app store needed for a PWA.",
    href: "/services/remote-data-gathering-from-any-device",
    linkText: "Remote data gathering",
  },
  {
    id: "teams",
    title: "Microsoft Teams",
    text: "Tabs, bots and adaptive-card approvals that bring a decision to the person in the channel where they're already working, rather than sending them to another system to click approve.",
    href: "/services/microsoft-office-365",
    linkText: "Microsoft 365 services",
  },
  {
    id: "background",
    title: "Behind the scenes",
    text: "Azure Functions, Power Automate flows and scheduled jobs that move and reconcile data overnight with no screen at all. Often the most valuable integration is the one nobody sees.",
    href: "/services/cloud-based-solutions-with-azure",
    linkText: "Azure cloud solutions",
  },
];

const ApiSurfaces = () => (
  <section className={styles.section}>
    <div className={styles.inner}>
      <AnimateOnScroll animation="fade-up" duration={0.6}>
        <header className={styles.header}>
          <p className={styles.eyebrow}>Where it runs</p>
          <h2 className={styles.heading}>
            Integrations that meet people{" "}
            <span className={styles.accent}>where they already work.</span>
          </h2>
        </header>
      </AnimateOnScroll>

      <ul className={styles.rows}>
        {surfaces.map((surface) => (
          <li key={surface.id} className={styles.row}>
            <span className={styles.icon}>
              {React.createElement(surfaceIcons[surface.id])}
            </span>
            <h3 className={styles.title}>{surface.title}</h3>
            <p className={styles.text}>{surface.text}</p>
            <Link href={surface.href} className={styles.link}>
              {surface.linkText}
              <ArrowIcon />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default ApiSurfaces;
