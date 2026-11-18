// /app/services/microsoft-excel/pivot-tables-charts-and-reporting-solutions/(components)/PivotIndustries.jsx
import React from "react";

import {
  FinanceArt,
  SalesArt,
  OperationsArt,
  HrArt,
  ConstructionArt,
  HealthcareArt,
} from "../(svgs)/PivotIndustriesArt";
import { PivotCheckIcon } from "../(svgs)/PivotIcons";
import styles from "@/styles/pivotIndustries.module.scss";

const PIVOT_INDUSTRIES = [
  {
    id: "finance",
    name: "Finance & Accounting",
    summary:
      "P&L, cash flow, and budget reporting automated from your accounting systems.",
    useCases: [
      "Monthly P&L and variance reports refreshed from MYOB, Xero, or ERP exports",
      "Cash flow dashboards with rolling forecasts and scenario modelling",
      "Budget vs actuals pivot tables sliced by cost centre, department, or project",
      "Automated month-end report packs distributed via Outlook",
    ],
    Art: FinanceArt,
  },
  {
    id: "sales",
    name: "Sales & Marketing",
    summary:
      "Pipeline, territory, and campaign performance consolidated in one place.",
    useCases: [
      "Sales pipeline and territory performance dashboards connected to CRM exports",
      "Campaign ROI reporting consolidated from multiple ad platforms via Power Query",
      "Lead conversion and funnel analysis with weekly auto-refresh",
      "Marketing spend vs revenue pivot tables by channel, region, or product",
    ],
    Art: SalesArt,
  },
  {
    id: "operations",
    name: "Operations & Logistics",
    summary:
      "Inventory, supplier, and production KPIs tracked without manual effort.",
    useCases: [
      "Inventory and stock level tracking with conditional alerts at reorder thresholds",
      "Supplier performance scorecards updated from purchase order data",
      "Automated KPI reporting for shift output, production volumes, and downtime",
      "Delivery and fulfilment tracking consolidated from multiple warehouse sources",
    ],
    Art: OperationsArt,
  },
  {
    id: "hr",
    name: "Human Resources",
    summary:
      "Headcount, recruitment, and payroll data in clean, shareable reports.",
    useCases: [
      "Headcount, turnover, and leave liability dashboards by team or location",
      "Recruitment pipeline tracking with time-to-hire and source analysis",
      "Payroll cost summaries connected directly to HR system exports",
      "Workforce planning models with scenario toggles for headcount changes",
    ],
    Art: HrArt,
  },
  {
    id: "construction",
    name: "Construction & Engineering",
    summary:
      "Project cost, progress, and safety reporting without the manual assembly.",
    useCases: [
      "Project cost-to-complete and earned value reports by contract or phase",
      "Subcontractor spend and progress claim tracking against approved budgets",
      "Site safety and incident summary dashboards with trend analysis",
      "Equipment utilisation and maintenance cost reporting",
    ],
    Art: ConstructionArt,
  },
  {
    id: "healthcare",
    name: "Healthcare & Professional Services",
    summary:
      "Volume, billing, and compliance data presented clearly for decision-makers.",
    useCases: [
      "Patient or client volume and trend analysis by practitioner, location, or service",
      "Billing and revenue reporting with gap analysis against Medicare or schedule fees",
      "Compliance and audit trail reporting with date-stamped records",
      "Referral source tracking and conversion dashboards",
    ],
    Art: HealthcareArt,
  },
];

// Tabs are native radio inputs, so switching works with no client JS and
// arrow keys move between industries. The module shows the checked panel.
const PivotIndustries = () => (
  <section
    className={styles.pivotIndustries}
    id="pvt-industries"
    aria-labelledby="pvt-industries-heading"
  >
    <div className={styles.inner}>
      <header className={styles.header}>
        <span className={styles.eyebrow}>Industry Experience</span>
        <h2 id="pvt-industries-heading" className={styles.heading}>
          Reporting solutions for{" "}
          <span className={styles.accent}>every industry.</span>
        </h2>
        <p className={styles.intro}>
          Our clients come from a diverse range of industries. In every sector
          though the basic need is the same: accurate, timely data presented
          clearly and easy to work with.
        </p>
      </header>

      <div
        className={styles.switcher}
        role="radiogroup"
        aria-label="Industries we serve"
      >
        {PIVOT_INDUSTRIES.map((industry, i) => (
          <input
            key={industry.id}
            type="radio"
            name="pvt-industry"
            id={`pvt-industry-${industry.id}`}
            className={styles.radio}
            defaultChecked={i === 0}
          />
        ))}

        <div className={styles.layout}>
          <div className={styles.tabs}>
            {PIVOT_INDUSTRIES.map((industry) => (
              <label
                key={industry.id}
                htmlFor={`pvt-industry-${industry.id}`}
                className={styles.tab}
              >
                <span className={styles.tabName}>{industry.name}</span>
                <span className={styles.tabSummary}>{industry.summary}</span>
              </label>
            ))}
          </div>

          <div className={styles.panels}>
            {PIVOT_INDUSTRIES.map(({ id, name, useCases, Art }) => (
              <article key={id} className={styles.panel}>
                <div className={styles.art}>
                  <Art riseClass={styles.rise} />
                </div>
                <div className={styles.panelText}>
                  <h3 className={styles.panelName}>{name}</h3>
                  <ul className={styles.useCases}>
                    {useCases.map((uc) => (
                      <li key={uc} className={styles.useCase}>
                        <span className={styles.check}>
                          <PivotCheckIcon />
                        </span>
                        {uc}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default PivotIndustries;
