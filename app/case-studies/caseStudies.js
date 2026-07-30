// app/case-studies/caseStudies.js

// ─────────────────────────────────────────────
// Case study data
// ─────────────────────────────────────────────
// This array is the single source of truth for all case study content
// across the Office Experts Group. Each entry renders as a card on the
// /case-studies overview page and can later power an individual
// /case-studies/[slug] detail page once that route is built.
//
//
// Field reference:
//   slug      - URL-safe identifier, used for future detail page routing
//   client    - Client name or industry descriptor if name must stay anonymous
//   industry  - Used for the filter tag on the card
//   site      - Which Office Experts Group brand the work sits under
//               ("office" | "word" | "excel" | "powerplatform" | "access")
//   title     - Short, benefit-led headline for the card
//   summary   - 1-2 sentence outline of the problem tackled
//   results   - Array of short, quantifiable outcome strings
//   image     - Path to the card thumbnail (place assets in /public/case-studies/)
//   featured  - Boolean, true pins the entry near the top of the grid

export const caseStudies = [
  // New entry for app/case-studies/caseStudies.js
  // Paste this object into the caseStudies array (adjust position/featured flag as needed)

  {
    slug: "manufacturing-project-setup-automation",
    client: "Commercial Manufacturing Company",
    industry: "Manufacturing",
    site: "powerplatform",
    title:
      "Turning a new project email into a fully built job folder in seconds",
    summary:
      "A manufacturing client's project setup relied on staff manually creating folders across multiple SharePoint sites, renaming them to match convention, and copying in templates by hand every time a new job was won. We built a Power Automate flow that reads the project details straight from the notification email and does the entire setup automatically.",
    results: [
      "Project setup time cut from roughly 30 minutes to under 1 minute",
      "Naming convention errors across SharePoint sites eliminated entirely",
      "Built-in error handling flags admins immediately if a step fails",
    ],
    image: "/case-studies/manufacturing-project-setup.webp",
    featured: false,
  },
  {
    slug: "community-services-excel-consolidation-rebuild",
    client: "Multi-Site Community Services Provider",
    industry: "Community Services",
    site: "excel",
    title:
      "Replacing a 360MB linked spreadsheet with a one-click Power Query refresh",
    summary:
      "A four-location community services provider had each site keying records into its own workbook, with a central file pulling them together through direct workbook links. The structure had grown past 360MB and thousands of columns wide, and every new reporting breakdown meant hours of manual rework. We rebuilt it as a row-based entry template consolidated with Power Query, migrating all existing data into the new structure.",
    results: [
      "Consolidation of 4 location workbooks reduced to a single refresh action",
      "File structure changed from growing sideways to a stable row-based dataset",
      "Reporting breakdowns now built by dragging pivot fields, not new formulas",
    ],
    image: "/case-studies/community-services-excel.webp",
    featured: false,
  },
  {
    slug: "healthcare-patient-form-followup-automation",
    client: "Allied Health Provider",
    industry: "Healthcare",
    site: "powerplatform",
    title: "Removing manual form chasing for around 1,000 active patients",
    summary:
      "An allied health provider was sending intake and milestone forms to every patient but tracking who had and had not responded entirely by hand, pulling clinical staff away from care to send reminders and escalations. We built two scheduled Power Automate flows against the provider's Microsoft Fabric data warehouse that send reminders, escalate overdue cases and close off completed forms automatically.",
    results: [
      "Manual reminder and escalation work removed for roughly 1,000 active patients",
      "Outstanding forms actioned daily without staff needing to check status",
      "Follow-up timing and escalation rules adjustable through configuration, not code",
    ],
    image: "/case-studies/healthcare-form-followup.webp",
    featured: false,
  },
  {
    slug: "professional-services-sharepoint-foundation-workshops",
    client: "Professional Services Team",
    industry: "Professional Services",
    site: "office",
    title:
      "Moving a team off shared logins onto a proper SharePoint foundation",
    summary:
      "A small team was running their entire email, files and calendar through a single shared login, with a second shared login for their bookings system. Files were treated like a shared drive, versions clashed, and nobody could see who had changed what or be removed cleanly when they left. We ran a series of live SharePoint Foundation Workshops that built a proper site structure, an Owners, Members and Visitors access model, and a plan to retire the shared logins altogether.",
    results: [
      "Access model rebuilt around security groups instead of individual logins",
      "Document libraries mapped to how the team actually works, not the old folder tree",
      "Clear plan in place to retire both shared logins using proper Microsoft 365 patterns",
    ],
    image: "/case-studies/professional-services-sharepoint-foundation.webp",
    featured: false,
  },
  {
    slug: "retail-power-bi-partner-reporting-security",
    client: "Retail Insights Provider",
    industry: "Retail",
    site: "powerplatform",
    title:
      "Proving external partners could never see each other's Power BI data",
    summary:
      "A retail data provider had partner-facing Power BI reports already built, but needed certainty that one wrong setting could not expose a partner's data to another before any external access went live. We reviewed the reports for design and usability, locked access down with Row-Level Security, and tested with a real external account against the client's own figures, matching to the cent, without changing anything the internal team relied on.",
    results: [
      "Partner data isolation tested and verified to the cent, not assumed",
      "Export and extraction options closed off for external partners only",
      "Adding a new partner turned into a simple, repeatable task the internal team runs itself",
    ],
    image: "/case-studies/retail-power-bi-partner-security.webp",
    featured: false,
  },
];

// ─────────────────────────────────────────────
// Helper: get featured case studies only
// ─────────────────────────────────────────────
export const getFeaturedCaseStudies = () =>
  caseStudies.filter((study) => study.featured);

// ─────────────────────────────────────────────
// Helper: get a single case study by its slug
// ─────────────────────────────────────────────
export const getCaseStudyBySlug = (slug) =>
  caseStudies.find((study) => study.slug === slug);
