// services/microsoft-office-365/remote-data-gathering-from-any-device/Introduction.jsx
import React from "react";
import Link from "next/link";

import AnimateOnScroll from "../../../../../components/AnimateOnScroll";
import ConnectionDiagram from "../(svgs)/ConnectionDiagram";

import styles from "../../../../../styles/rdgIntroduction.module.css";

const stats = [
  { value: "900+", label: "Microsoft 365 connectors available" },
  { value: "Real-time", label: "data sync across all devices" },
  { value: "Offline", label: "capable via Power Apps mobile" },
];

const capabilities = [
  "Power Apps custom mobile forms",
  "REST API & webhook integration",
  "Azure Logic Apps orchestration",
  "Dataverse & SharePoint sync",
  "Custom JavaScript Web Apps",
  "Automated approvals and AI integration",
];

const Introduction = () => (
  <section className={styles.section} id="overview">
    {/* Background grid texture */}
    <div className={styles.gridTexture} aria-hidden="true" />

    <div className={styles.inner}>
      {/* ── Top: headline block ── */}
      <div className={styles.topBlock}>
        <AnimateOnScroll animation="fade-up" duration={0.6} delay={0}>
          <div className={styles.headlineCol}>
            <span className={styles.eyebrow}>
              Microsoft 365 · Remote Data Collection
            </span>

            <h1 className={styles.headline}>
              Collect data from anywhere.{" "}
              <span className={styles.accent}>Act on it immediately.</span>
            </h1>

            <p className={styles.lead}>
              Paper forms, emailed spreadsheets, and manual data entry are no
              longer acceptable when Power Apps can deploy a custom form to any
              device in minutes. Field staff, remote offices, and third-party
              contractors all feed live structured data directly into your
              Microsoft 365 environment the moment a form is submitted.
            </p>

            <p className={styles.body}>
              We build end-to-end remote collection solutions on the Microsoft
              stack. Data captured on a phone in the field triggers a Power
              Automate flow, updates a Dataverse record, notifies the right
              person in Teams, and syncs to your ERP before the worker has
              walked back to the van. No middleware, no custom development, no
              fragile third-party tools.
            </p>

            <div className={styles.ctaRow}>
              <Link
                href="#contact"
                className="btn"
                style={{ textTransform: "capitalize" }}
              >
                <span>Talk to our team</span>
              </Link>
              <Link href="#how-it-works" className={styles.ghostLink}>
                See how it works
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 16 16"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M8 3v10M4 9l4 4 4-4"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </AnimateOnScroll>

        {/* ── Right: animated diagram ── */}
        <AnimateOnScroll animation="fade-up" duration={0.8} delay={0.15}>
          <div className={styles.diagramCol}>
            <div className={styles.diagramWrap}>
              <ConnectionDiagram />
            </div>
          </div>
        </AnimateOnScroll>
      </div>

      {/* ── Stat strip ── */}
      <AnimateOnScroll animation="fade-up" duration={0.6} delay={0.2}>
        <div className={styles.statStrip}>
          {stats.map((s, i) => (
            <React.Fragment key={s.label}>
              <div className={styles.stat}>
                <span className={styles.statValue}>{s.value}</span>
                <span className={styles.statLabel}>{s.label}</span>
              </div>
              {i < stats.length - 1 && (
                <div className={styles.statDivider} aria-hidden="true" />
              )}
            </React.Fragment>
          ))}
        </div>
      </AnimateOnScroll>

      {/* ── Capability tags strip ── */}
      <AnimateOnScroll animation="fade-up" duration={0.6} delay={0.28}>
        <div className={styles.tagsBlock}>
          <span className={styles.tagsLabel}>What we build with</span>
          <ul className={styles.tagList} aria-label="Technologies used">
            {capabilities.map((cap) => (
              <li key={cap} className={styles.tag}>
                {cap}
              </li>
            ))}
          </ul>
        </div>
      </AnimateOnScroll>
    </div>
  </section>
);

export default Introduction;
