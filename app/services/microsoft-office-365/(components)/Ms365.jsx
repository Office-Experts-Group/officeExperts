"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

import styles from "../../../../styles/ms365.module.css";

import diagram from "../../../../public/ms365-diagram.webp";

const apps = [
  {
    id: "copilot",
    label: "Copilot",
    color: "#f858a8",
    description:
      "Microsoft Copilot brings AI assistance directly into Word, Excel, Outlook, Teams and beyond. Summarise documents, draft emails, analyse data and generate presentations, all within the apps your team already uses every day. It works alongside your staff to reduce manual effort, surface insights faster and help non-technical users perform complex tasks with confidence, all while staying securely within your Microsoft 365 environment.",
    link: null,
    linkLabel: null,
  },
  {
    id: "sharepoint",
    label: "SharePoint",
    color: "#038387",
    description:
      "Build intelligent intranets, document libraries and AI-powered knowledge bases on SharePoint. Centralise your business content, manage permissions and give every team member access to the right information at the right time. Beyond simple storage, SharePoint becomes the backbone of internal communication, enabling structured collaboration, version control and seamless integration with Teams, Outlook and the wider Microsoft ecosystem.",
    link: null,
    linkLabel: null,
  },
  {
    id: "powerplatform",
    label: "Power Platform",
    color: "#742774",
    description:
      "Power Apps, Power Pages and Power Virtual Agents sit at the heart of the Power Platform. They enable custom applications, external portals and intelligent chatbots built directly on your Microsoft 365 data. This means you can rapidly digitise processes, replace spreadsheets or legacy tools and create tailored business solutions without the cost or delays of traditional development cycles, all while maintaining full control over your data.",
    link: "https://www.powerplatformexperts.com.au/services/microsoft-power-platform",
    linkLabel: "Explore Power Platform",
  },
  {
    id: "powerautomate",
    label: "Power Automate",
    color: "#0066FF",
    description:
      "Eliminate repetitive manual tasks by automating workflows across your entire Microsoft ecosystem and beyond. From approval processes and data entry to complex multi-system integrations, Power Automate handles it. Whether you are connecting SharePoint, Outlook, third-party platforms or legacy systems, it ensures your processes run consistently in the background, freeing up your team to focus on higher value work instead of routine administration.",
    link: "https://www.powerplatformexperts.com.au/services/microsoft-power-platform/microsoft-power-automate",
    linkLabel: "Explore Power Automate",
  },
  {
    id: "azure",
    label: "Azure",
    color: "#0078D4",
    description:
      "Azure provides the enterprise cloud infrastructure underpinning your entire Microsoft environment. Database management, pipelines, identity management and scalable hosting. Azure is the beating heart of many businesses worldwide. It allows organisations to securely scale applications, manage workloads and build modern cloud architectures that integrate seamlessly with Microsoft 365, while supporting everything from simple hosting through to advanced AI and data engineering solutions.",
    link: "/services/by-business-solution/cloud-based-solutions-with-azure",
    linkLabel: "Explore Azure Solutions",
  },
  {
    id: "security",
    label: "Security & Compliance",
    color: "#0F6CBD",
    description:
      "Microsoft Purview, Defender and the built-in compliance tools across 365 give your business enterprise-grade data protection, audit trails and regulatory reporting. Our designers on the Word Experts Team create accessible, secure and compliant document templates. Together, these tools help you manage risk, protect sensitive information and meet industry requirements, while ensuring your documents and systems remain usable, consistent and aligned with your organisation’s governance policies.",
    link: "https://www.wordexperts.com.au/corporate-global-template-solution",
    linkLabel: "Word Document Solutions",
  },
  {
    id: "powerbi",
    label: "Power BI",
    color: "#F2C811",
    textColor: "#1a1a1a",
    description:
      "Transform your business data into real-time dashboards, interactive reports and predictive analytics with Power BI. Connect to virtually any data source and give your leadership team the visibility to make faster, better decisions. By consolidating data from across your organisation into a single source of truth, Power BI enables deeper insights, clearer reporting and the ability to identify trends, risks and opportunities as they happen.",
    link: "https://www.powerplatformexperts.com.au/services/microsoft-power-platform/microsoft-power-bi",
    linkLabel: "Explore Power BI",
  },
  {
    id: "teams",
    label: "Teams",
    color: "#5558AF",
    description:
      "Microsoft Teams is the communication and collaboration hub of Office 365. It's probably already a part of your everyday life. Teams brings together chat, video, file sharing and app integrations in one place. Our consultants configure, customise and extend Teams to fit exactly how your business works, turning it from a simple messaging tool into a fully integrated workspace that supports projects, departments and organisation-wide collaboration.",
    link: null,
    linkLabel: null,
  },
];

const INTERVAL = 12000;

const Ms365 = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef(null);

  const startTimer = () => {
    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % apps.length);
    }, INTERVAL);
  };

  const stopTimer = () => {
    clearInterval(intervalRef.current);
  };

  useEffect(() => {
    startTimer();
    return () => stopTimer();
  }, []);

  const handleMouseEnter = (index) => {
    setIsPaused(true);
    stopTimer();
    setActiveIndex(index);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
    startTimer();
  };

  const active = apps[activeIndex];

  return (
    <section className={styles.wrapper}>
      <div className={styles.inner}>
        <div className={styles.imageCol}>
          <div className={styles.imageContainer}>
            <Image
              src={diagram}
              alt="Microsoft 365 ecosystem diagram showing Copilot, SharePoint, Power Platform, Power Automate, Azure, Security, Power BI and Teams"
              width={560}
              height={560}
            />
            <em
              style={{
                margin: "0 auto",
                fontSize: "0.8rem",
                fontStyle: "italic",
                color: "#999",
                marginBottom: "-3rem",
              }}
            >
              Hover over any icon for more information!
            </em>
            <div className={styles.hotspots}>
              {apps.map((app, index) => (
                <button
                  key={app.id}
                  className={`${styles.hotspot} ${styles[app.id]} ${activeIndex === index ? styles.hotspotActive : ""}`}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                  onClick={() => handleMouseEnter(index)}
                  aria-label={`Learn about ${app.label}`}
                  style={{ "--app-color": app.color }}
                />
              ))}
            </div>
          </div>
        </div>

        <div className={styles.infoCol}>
          <div
            className={styles.infoCard}
            key={active.id}
            style={{ "--app-color": active.color }}
          >
            <div
              className={styles.infoLabel}
              style={{
                borderBottom: `3.5px solid ${active.color}`,
              }}
            >
              {active.label}
            </div>
            <p className={styles.infoText}>{active.description}</p>
            {active.link && (
              <Link href={active.link} className={styles.infoLink}>
                {active.linkLabel}
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 1024 1024"
                  height="0.85em"
                  width="0.85em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 0 0 0-48.4z"></path>
                </svg>
              </Link>
            )}
            <div className={styles.progressBar}>
              <div
                className={`${styles.progressFill} ${!isPaused ? styles.progressAnimate : ""}`}
                style={{ "--app-color": active.color }}
                key={`${active.id}-${isPaused}`}
              />
            </div>
            <div className={styles.dots}>
              {apps.map((app, index) => (
                <button
                  key={app.id}
                  className={`${styles.dot} ${activeIndex === index ? styles.dotActive : ""}`}
                  style={
                    activeIndex === index ? { background: active.color } : {}
                  }
                  onClick={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                  aria-label={`Go to ${app.label}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ms365;
