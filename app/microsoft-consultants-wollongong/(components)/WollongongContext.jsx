// app/microsoft-consultants-wollongong/(components)/WollongongContext.jsx
import React from "react";
import Link from "next/link";

import AnimateOnScroll from "@/components/AnimateOnScroll";

import styles from "@/styles/wollongongContext.module.scss";

// What drives the Illawarra economy, and where the problems we fix tend to show up.
// Wording describes what we can help with, not who we have worked for, and makes no claim
// of a local office or local staff. Each row links to a case study of the same kind of
// problem for a different client, so the link text names the work, not a place.
const sectors = [
  {
    id: "steel",
    sector: "Steel, manufacturing & engineering",
    places: "Port Kembla · Unanderra · Kembla Grange",
    pain: "Fabricators and contractors supplying the steelworks juggle quotes, variations, permits and maintenance-shutdown schedules, usually across several workbooks and one very busy estimator.",
    build:
      "One costing and job-tracking workbook or Power App, quote documents generated straight from the numbers, and shutdown schedules everyone sees at once.",
    uses: ["Excel", "Power Apps", "Access", "Word"],
    link: {
      href: "/case-studies/manufacturing-project-setup-automation",
      text: "Project set-up automation for a manufacturer",
    },
  },
  {
    id: "health",
    sector: "Health, aged care & disability services",
    places: "Wollongong · Shellharbour · Nowra",
    pain: "Rosters, credentials, incident registers and funding paperwork sit in separate files, and the privacy rules are not optional.",
    build:
      "Governed forms and registers in SharePoint and Power Apps, with reminders and escalations that run on a schedule and reports that need no month-end assembly.",
    uses: ["Power Apps", "Power Automate", "SharePoint"],
    link: {
      href: "/case-studies/healthcare-patient-form-followup-automation",
      text: "Automated patient form follow-up",
    },
  },
  {
    id: "education",
    sector: "University, research & education",
    places: "University of Wollongong · Innovation Campus · TAFE",
    pain: "Grants, ethics approvals, student placements and spin-out reporting all depend on deadlines that end up held in someone's inbox.",
    build:
      "Shared trackers and Kanban-style planners with automatic reminders, plus the reporting funders ask for, produced from the same data.",
    uses: ["Access", "Excel", "Power BI", "Power Automate"],
    link: {
      href: "/case-studies/research-organisation-access-kanban-planner",
      text: "A research organisation's Kanban planner",
    },
  },
  {
    id: "construction",
    sector: "Construction, property & trades",
    places: "Dapto · West Dapto · Shellharbour",
    pain: "Housing growth in the southern corridor keeps builders and trades busy, and the quote, variation and invoice chain gets retyped at every step.",
    build:
      "Enquiry-to-quote automation, job sheets captured on a phone, and tidy handover documents, so the office is not rebuilding the job from text messages.",
    uses: ["Power Apps", "Excel", "Word"],
    link: {
      href: "/case-studies/building-consultants-inspection-crm",
      text: "A building inspection enquiry pipeline",
    },
  },
  {
    id: "tourism",
    sector: "Tourism, hospitality & events",
    places: "Kiama · Jamberoo · the Sea Cliff Bridge coast",
    pain: "Weekends, school holidays and event seasons produce enquiry spikes that a small team ends up answering by hand.",
    build:
      "Rostering and booking trackers that show the peaks coming, and an assistant that drafts replies to the questions visitors ask every week, for a person to check and send.",
    uses: ["Excel", "Power Automate", "AI agents"],
    link: {
      href: "/services/ai-email-triage",
      text: "AI email triage",
    },
  },
  {
    id: "defence",
    sector: "Defence, government & regional services",
    places: "Nowra · the Shoalhaven · council precincts",
    pain: "Suppliers and agencies deal with document control, tenders and reporting that has to look consistent every single time.",
    build:
      "Controlled Word and PowerPoint templates, tracked registers in SharePoint, and reporting packs that refresh from the source data.",
    uses: ["Word", "SharePoint", "PowerPoint", "Power BI"],
    link: {
      href: "/case-studies/government-department-enterprise-office-template-suite",
      text: "An enterprise template suite for a government department",
    },
  },
  {
    id: "professional",
    sector: "Law, accounting & professional services",
    places: "Wollongong CBD · North Wollongong",
    pain: "Client reports, engagement letters and job lists are built from old documents, and the formatting drifts with every copy.",
    build:
      "Master templates with locked formatting and one-click numbering, plus document builders that assemble the right content from a short form.",
    uses: ["Word", "Power Automate", "Excel"],
    link: {
      href: "/case-studies/legal-firm-template-suite-formatting-tab",
      text: "A law firm's template suite",
    },
  },
];

const areas =
  "Wollongong, North Wollongong, Fairy Meadow, Thirroul, Bulli, Helensburgh, Port Kembla, Unanderra, Dapto, Shellharbour, Albion Park, Kiama, Jamberoo, Nowra and Huskisson";

const WollongongContext = () => (
  <section className={styles.section}>
    <div className={styles.inner}>
      {/* ── Header ── */}
      <AnimateOnScroll animation="fade-up" duration={0.6}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>Industries across the region</p>
          <h2 className={styles.heading}>
            The Illawarra&rsquo;s industries,{" "}
            <span className={styles.headingAccent}>
              and where the spreadsheets hurt.
            </span>
          </h2>
          <p className={styles.lead}>
            Each sector here has its own rhythm and its own paperwork. These
            are the places we are most often asked to step in.
          </p>
        </div>
      </AnimateOnScroll>

      {/* ── Spec-sheet rows: sector, the pain, the fix ── */}
      <ul className={styles.rows}>
        {sectors.map((s) => (
          <li key={s.id} className={styles.row}>
            <AnimateOnScroll animation="fade-up" duration={0.55}>
              <article className={styles.rowInner}>
                <div className={styles.cell}>
                  <h3 className={styles.sector}>{s.sector}</h3>
                  <p className={styles.places}>{s.places}</p>
                </div>

                <div className={styles.cell}>
                  <p className={styles.label}>Where it gets painful</p>
                  <p className={styles.text}>{s.pain}</p>
                </div>

                <div className={styles.cell}>
                  <p className={styles.label}>What we build</p>
                  <p className={styles.text}>{s.build}</p>
                  <ul className={styles.uses} aria-label="Typical tools">
                    {s.uses.map((u) => (
                      <li key={u} className={styles.use}>
                        {u}
                      </li>
                    ))}
                  </ul>
                  <Link href={s.link.href} className={styles.link}>
                    {s.link.text}
                  </Link>
                </div>
              </article>
            </AnimateOnScroll>
          </li>
        ))}
      </ul>

      {/* ── Areas ── */}
      <div className={styles.areas}>
        <p className={styles.areasLabel}>Areas we support</p>
        <p className={styles.areasText}>{areas}, and the wider South Coast.</p>
      </div>
    </div>
  </section>
);

export default WollongongContext;
