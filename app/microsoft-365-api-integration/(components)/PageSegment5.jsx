import React from "react";

import AnimateOnScroll from "../../../components/AnimateOnScroll";

import styles from "../../../styles/pageSegment3.module.css";

const WebMobileIntegrationSolution = () => {
  const checkItems = [
    {
      title: "Responsive Microsoft 365 Portals",
      description:
        "Custom dashboards and interfaces that unify data from across your Microsoft ecosystem, accessible from any device.",
    },
    {
      title: "Mobile Apps with Offline Sync",
      description:
        "Empower field teams with mobile access to SharePoint libraries, task lists, and forms—even when offline.",
    },
    {
      title: "Progressive Web Apps for Office Workflows",
      description:
        "Lightweight, installable apps that streamline document management, approvals, and reporting—optimized for speed and usability.",
    },
    {
      title: "Secure Azure AD Integration",
      description:
        "Every solution is built with enterprise-grade security, using Azure Active Directory for authentication and access control.",
    },
  ];

  return (
    <section
      className={styles.pageSegment}
      style={{ backgroundColor: "#f2f3f5", padding: "3rem 10vw 8rem 10vw" }}
    >
      <div className={styles.content}>
        <AnimateOnScroll animation="fade-up" duration={1} delay={0.2}>
          <div className={styles.underline}>
            <h2 style={{ fontSize: "2rem" }}>
              Web & Mobile Integration That Works the Way You Do
            </h2>
          </div>
          <p>
            At Office Experts, we bridge the gap between Microsoft 365's
            powerful backend and the modern, mobile-first experiences your team
            needs. Our custom-built solutions are designed to extend Microsoft
            365 beyond the desktop, giving your workforce secure, intuitive
            access to business-critical data wherever they are.
          </p>
          <p style={{ marginTop: "1rem" }}>
            Our <strong>mobile apps for field workers</strong> are built with{" "}
            <strong>offline sync to SharePoint</strong>, ensuring uninterrupted
            access to documents, forms, and workflows, even in remote or
            low-connectivity environments. And with{" "}
            <strong>Progressive Web Apps (PWAs)</strong>, we deliver
            installable, browser-based apps that behave like native mobile apps,
            without the friction of app stores or device limitations.
          </p>

          <div className={styles.points}>
            {checkItems.map((item, index) => (
              <div key={index} className={styles.point}>
                <div className={styles.tick}>
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="1"
                    viewBox="0 0 24 24"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"></path>
                  </svg>
                </div>
                <div>
                  <h3
                    style={{
                      margin: "0 0 0.5rem 0",
                      fontSize: "1.1rem",
                      fontWeight: "600",
                    }}
                  >
                    {item.title}
                  </h3>
                  <p style={{ margin: "0" }}>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default WebMobileIntegrationSolution;
