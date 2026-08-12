// app/case-studies/caseStudies.js

// ─────────────────────────────────────────────
// Case study data
// ─────────────────────────────────────────────
// This array is the single source of truth for all case study content
// across the Office Experts Group. Each entry renders as a card on the
// /case-studies overview page and powers its own detail page at
// /case-studies/[slug].
//
// Field reference:
//   slug       - URL-safe identifier, used for detail page routing
//   client     - Client name or industry descriptor if name must stay anonymous
//   industry   - Used for the filter tag on the card and detail page
//   site       - Which Office Experts Group brand the work sits under
//                ("office" | "word" | "excel" | "powerplatform" | "access")
//   title      - Short, benefit-led headline for the card and hero
//   summary    - 1-2 sentence outline of the problem tackled, used on the card
//   results    - Array of short, quantifiable outcome strings (card + detail)
//   image      - Path to the card/hero thumbnail (place assets in /public/case-studies/)
//   featured   - Boolean, true pins the entry near the top of the grid
//
//   The fields below only need to be filled in once a detail page is written
//   for that entry. Cards render fine without them.
//   challenge  - Longer narrative describing the situation before Office Experts
//                Group got involved. Array of paragraphs.
//   approach   - Array of { heading, body } steps describing what was done
//   outcome    - Array of paragraphs describing the result, separate from the
//                short "results" tick list
//   stats      - Array of { value, label } headline figures for the detail page
//   quote      - Optional { text, attribution } pull quote from the client
//   services   - Array of { label, href } related service links

export const caseStudies = [
  {
    slug: "rdao-application-ai-review-workflow",
    client: "Kula",
    author: "Nick",
    industry: "Investment",
    site: "powerplatform",
    title:
      "Cutting a 6-7 day investment review down to 90 minutes with an AI agent workflow",
    summary:
      "The client finds remote companies globally who may struggle to get investment, then reviews each one against KYC, compliance, legal and financial criteria before deciding whether to invest. That review relied on one person manually researching every applicant and cross-checking their own policy, taking six to seven days per application. We built an AI agentic workflow that pushes each application and its supporting documents through a series of skilled agents, producing a detailed, referenced, drillable review in around 90 minutes.",
    results: [
      "Review time cut from 6-7 days to around 90 minutes per application",
      "Every finding fully traceable, with references built in throughout",
      "Reviews now broader and more detailed than the manual process allowed",
    ],
    image: "/case-studies/kula.png",
    featured: true,

    stats: [
      { value: "90 min", label: "Full RDAO review, down from 6-7 days" },
      {
        value: "5+ agents",
        label: "KYC, compliance, legal, financial and more",
      },
      { value: "6 months", label: "For the workflow to pay for itself" },
    ],

    challenge: [
      "The client is an investor that finds remote companies around the world that may otherwise struggle to secure investment. Once a target company is identified, that company fills out a detailed application covering its business, the investment it needs, and a wide range of supporting documents.",
      "Reviewing that application properly meant checking it against their own investment policy across several distinct areas, including KYC, compliance, legal and financial due diligence, then researching each applicant company individually to verify what had been submitted.",
      "All of that sat on one person's shoulders. Every application meant six to seven days of manual research, cross-referencing policy documents by hand, and writing up findings, before they could even begin deciding whether to invest.",
      "That single-person bottleneck capped how many applications they could realistically review at once, and repetitive research was being redone from scratch on every application, with no way to draw on what had already been checked before.",
    ],

    approach: [
      {
        heading: "Mapping the manual review process",
        body: "We worked through their existing review process end to end, capturing exactly what a KYC, compliance, legal and financial reviewer each checked, which parts of their own policy applied, and how the final decision was reached from that research.",
      },
      {
        heading: "Designing the agentic workflow",
        body: "We designed an AI agentic workflow where each application and its supporting documents are pushed through a series of skilled agents, with each agent focused on one review area, KYC, compliance, legal and financial among others, mirroring how their own specialists approached the work.",
      },
      {
        heading: "Grounding agents in research and policy",
        body: "Each agent was built to research the internet for information on the applicant company and check the application against their own investment policy, rather than relying on the application form alone, so findings are backed by evidence rather than assumption.",
      },
      {
        heading: "Building traceable, drillable summaries",
        body: "Individual agent findings are rolled up into a single, readable summary the client can drill down from, with references built in throughout so any point raised can be traced straight back to its source, whether that's the applicant's own documents or external research.",
      },
      {
        heading: "Connecting the Microsoft 365 and AI stack",
        body: "We built the workflow across Power Automate, Power Apps, Power BI and Power Pages, connecting their application intake through to the agentic review, and brought in OpenAI, Claude and Relevance.ai to run the agents themselves.",
      },
    ],

    outcome: [
      "What used to take one person six to seven days now takes around 90 minutes, with the AI agents working through KYC, compliance, legal, financial and other checks in parallel rather than one reviewer working through each area in sequence.",
      "Reviews are now more detailed and broader than the manual process allowed, with duplicated research eliminated and every finding fully traceable back to its source, rather than resting on one reviewer's notes.",
      "The client no longer has a capacity ceiling on how many applications it can review at once, and the workflow runs at a lower cost than the manual process it replaced, expected to pay for itself within six months.",
    ],

    services: [
      {
        label: "Business process automation",
        href: "https://www.powerplatformexperts.com.au/services/microsoft-office-365/business-process-automation",
      },
      {
        label: "AI-powered workflows",
        href: "https://www.powerplatformexperts.com.au/services/microsoft-power-platform/ai-integrations",
      },
    ],
  },
  {
    slug: "building-consultants-inspection-crm",
    client: "GM Building Consultants",
    author: "Deva",
    industry: "Building and Construction",
    site: "powerplatform",
    title:
      "Turning manual enquiry handling into an automated quote-to-email pipeline",
    summary:
      "These Building Consultants were managing building inspection enquiries entirely by hand, from receiving the initial request through to putting together and sending a quote. The manual process was slow and prone to errors that meant rework and lost time. We built an automated system on SharePoint, Power Apps and Power Automate that receives enquiries, manages them through to completion, and generates quotes ready to send by email.",
    results: [
      "Enquiry handling moved from a fully manual process to an automated pipeline",
      "Rework from manual errors eliminated from the quoting process",
      "Business owners freed up to focus on clients and the business itself",
    ],
    image: "/case-studies/gm-building-consultants-inspection-crmLg.png",
    featured: false,

    stats: [
      { value: "End-to-end", label: "Enquiry to quote, fully automated" },
      { value: "0", label: "Manual rework from quoting errors" },
      { value: "3 tools", label: "SharePoint, Power Apps and Power Automate" },
    ],

    challenge: [
      "The Building Consultants relied on a manual process to handle building inspection enquiries from start to finish. Every enquiry that came in had to be picked up, logged and managed by hand, with a quote then put together and sent out individually for each one.",
      "That manual approach was time consuming at every step, and prone to the kind of errors that come with repetitive, hands-on work. When something was missed or entered incorrectly, it meant rework, and rework meant time lost that could have gone toward the next enquiry.",
      "With enquiry handling and quoting taking up so much manual effort, the business owners had less capacity to focus on running and growing the business itself, or on the client relationships that mattered most.",
    ],

    approach: [
      {
        heading: "Mapping the enquiry and quoting process",
        body: "We reviewed how the Building Consultants' enquiries were currently received, logged and managed, and how quotes were put together and sent, to understand exactly where the manual process was costing the most time and introducing the most risk of error.",
      },
      {
        heading: "Building the automated intake and management flow",
        body: "We built an automated process on SharePoint, Power Apps and Power Automate that receives incoming enquiries and manages them through to completion, replacing the manual logging and tracking with a consistent, repeatable flow.",
      },
      {
        heading: "Automating quote generation and delivery",
        body: "We built automated quote generation into the same flow, so a quote can be produced and submitted by email without the manual, request-by-request effort the business relied on previously.",
      },
    ],

    outcome: [
      "The Building Consultants can now process and address enquiries far more efficiently than the previous manual approach allowed, with the time previously spent on each individual request significantly reduced.",
      "The automated process gives the business confidence that each request is being handled correctly and consistently, cutting out the rework that came from manual errors and strengthening the service and relationship clients experience.",
      "With enquiry handling and quoting running automatically, the business owners now have the freedom to concentrate on running the business and working with clients, rather than being tied up in manual processing.",
    ],

    services: [
      {
        label: "Power Apps and Power Automate solutions",
        href: "https://www.powerplatformexperts.com.au/services/microsoft-power-platform/microsoft-power-apps",
      },
      {
        label: "Business process automation",
        href: "https://www.officeexperts.com.au/services/microsoft-office-365/business-process-automation",
      },
    ],
  },
  {
    slug: "retail-power-bi-partner-reporting-security",
    client: "Retail Insights Provider",
    author: "Power Platform Team",
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
    image: "/case-studies/retail-power-bi-partner-securityLg.webp",
    featured: false,

    stats: [
      {
        value: "100%",
        label: "Partner figures matched to the cent in testing",
      },
      { value: "0", label: "Cross-partner data exposure found or possible" },
      { value: "1 task", label: "Adding a new partner, run by internal staff" },
    ],

    challenge: [
      "This retail data provider had already built partner-facing Power BI reports, giving external retail partners visibility of their own sales, product and regional performance. The reports existed and worked. What the provider didn't have was certainty.",
      "Before opening the reports up to external partners, the provider needed to know, not assume, that one wrong setting couldn't expose a partner's data to another partner looking at the same report. With multiple partners set to view similar dashboards, the risk wasn't hypothetical: a single misconfigured filter or missing security rule could quietly leak one partner's figures to another.",
      "There was also a design and usability question sitting alongside the security one. The reports had been built for internal use first, and needed a second look to confirm they made sense and behaved appropriately once external, non-technical partner users were the ones opening them.",
      "Nothing about the fix could be allowed to disrupt what the internal team already relied on. Whatever changed had to sit alongside the existing internal reporting, not replace or interfere with it.",
    ],

    approach: [
      {
        heading: "Reviewing the existing reports",
        body: "We reviewed the partner-facing Power BI reports for both design and usability, checking that layouts, filters and navigation made sense for an external partner audience rather than the internal team the reports were originally built around.",
      },
      {
        heading: "Locking access down with Row-Level Security",
        body: "We implemented Row-Level Security rules to enforce partner data isolation at the data model level, rather than relying on report-level filters that a partner could potentially navigate around.",
      },
      {
        heading: "Testing with a real external account",
        body: "Rather than trusting the configuration on paper, we tested the reports using a genuine external partner account, comparing every figure shown back against the client's own internal numbers to confirm they matched to the cent, and that no other partner's data was visible from that account.",
      },
      {
        heading: "Closing off export and extraction options",
        body: "We reviewed and restricted export and data extraction options specifically for external partner accounts, so partners can view their own performance without a path to extract or download data beyond what was intended.",
      },
      {
        heading: "Building a repeatable process for new partners",
        body: "With the security model proven, we documented and handed over a simple, repeatable process for onboarding future partners, so the internal team can add a new partner themselves without needing security re-verified from scratch each time.",
      },
    ],

    outcome: [
      "Partner data isolation was tested and verified to the cent using a real external account, rather than assumed to be correct because the settings looked right on paper.",
      "Export and extraction options have been closed off for external partners specifically, while remaining exactly as they were for the internal team, so nothing the internal team relied on day to day was disrupted by the change.",
      "Adding a new partner has gone from a configuration exercise carrying real risk, to a simple, repeatable task the internal team can now run itself, with confidence the same isolation guarantees apply automatically.",
    ],

    quote: {
      text: "We needed to know, not hope, that one partner could never see another's numbers. Having that tested against a real account rather than just configured was exactly the certainty we were after before going live.",
      attribution: "Head of Data, Retail Insights Provider",
    },

    services: [
      {
        label: "Power BI Row-Level Security",
        href: "https://www.powerplatformexperts.com.au/services/microsoft-power-platform/microsoft-power-bi",
      },
      {
        label: "Power BI reporting services",
        href: "https://www.powerplatformexperts.com.au/power-bi-support",
      },
    ],
  },
  {
    slug: "manufacturing-project-setup-automation",
    client: "Commercial Manufacturing Company",
    author: "Power Platform Team",
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
    image: "/case-studies/manufacturing-project-setupLg.webp",
    featured: true,

    stats: [
      { value: "<1 min", label: "New project folder set up, start to finish" },
      { value: "30+", label: "Manual steps replaced by a single flow" },
      { value: "0", label: "Naming or structure errors since go-live" },
    ],

    challenge: [
      "Every time this manufacturing client won a new project, someone in the admin team had to manually build the job folder structure from scratch. That meant logging into three separate SharePoint sites, creating a folder for the new job in each one, renaming everything to match the company's naming convention, and then copying in a set of standard templates the project team would need on day one.",
      "None of it was difficult work, but it was slow, repetitive, and entirely dependent on whoever was doing it that day remembering every step correctly. A missed folder, a naming typo, or a template placed in the wrong site caused confusion further down the track, usually discovered by the project team rather than the person who set it up.",
      "With the business regularly winning multiple new projects a week, the admin overhead was adding up, and the inconsistency was becoming a real risk to how projects were tracked and reported on.",
    ],

    approach: [
      {
        heading: "Mapping the manual process",
        body: "We started by sitting with the admin team to walk through exactly what happened from the moment a new project notification email landed, through to a fully set up job folder ready for the project team. This gave us a precise map of every SharePoint site touched, every naming rule applied, and every template that needed to be in place.",
      },
      {
        heading: "Building the Power Automate flow",
        body: "We built a Power Automate flow triggered directly off the project notification email. The flow parses the project number, client name, and job type straight out of the email body, then uses that information to create and correctly name the folder structure across all three SharePoint sites in one pass.",
      },
      {
        heading: "Adding templates and error handling",
        body: "Once folders are created, the flow copies in the correct set of starter templates based on job type, so the project team has everything they need immediately. We also built in error handling so that if any step fails, such as a site being unreachable, the flow stops cleanly and notifies an admin with the specific failure, rather than leaving a half-built folder structure behind.",
      },
      {
        heading: "Testing against real project variations",
        body: "Before rollout, we tested the flow against a range of real historical project emails, including edge cases like unusual job types and projects with slightly different naming patterns, to make sure the automation held up outside of the tidy example used to build it.",
      },
    ],

    outcome: [
      "What used to take roughly 30 minutes of manual folder building, renaming, and template copying now happens automatically in under a minute, from the moment the project notification email arrives.",
      "Naming convention errors across the SharePoint sites have been eliminated, since the structure is now generated the same way every time. The admin team no longer needs to remember every step or double-check their own work against the convention document.",
      "The built-in error handling means the admin team is notified immediately if something goes wrong, rather than a project team discovering a missing folder days later. Adding support for a new job type going forward is a small configuration change to the flow, not a rebuild.",
    ],

    quote: {
      text: "We used to lose the best part of an afternoon a week just setting up new job folders properly. Now it happens before anyone's even finished reading the notification email.",
      attribution: "Operations Manager, Commercial Manufacturing Company",
    },

    services: [
      {
        label: "Microsoft Power Automate",
        href: "https://www.powerplatformexperts.com.au/services/microsoft-power-platform/microsoft-power-automate",
      },
      {
        label: "Business process automation",
        href: "https://www.powerplatformexperts.com.au/services/microsoft-office-365/business-process-automation",
      },
    ],
  },
  {
    slug: "government-health-master-template-document-transfer",
    client: "State Government Health Department",
    author: "Aleisha",
    industry: "Government",
    site: "word",
    title:
      "Rebranding a Master Template, then transferring an entire document set into it cleanly",
    summary:
      "Undergoing an organisation-wide branding update, this state government health department needed a new Master Template published to their intranet for staff to download, and every existing document brought across into the new format. We built the new Master Template with a Quick Part to simplify a repeating element, then used our in-house transfer process to move the client's entire document set into it without corrupting content along the way.",
    results: [
      "New Master Template built to the organisation's updated branding",
      "Entire existing document set transferred into the new format",
      "In-house transfer process kept content clean, with manual refinement for full brand alignment",
    ],
    image: "/case-studies/government-health-master-template-transferLg.png",
    featured: false,

    stats: [
      {
        value: "1 template",
        label: "New Master Template, published to the intranet",
      },
      {
        value: "Whole set",
        label: "Existing documents transferred into the new format",
      },
      {
        value: "0 corruption",
        label: "Content preserved cleanly through the transfer process",
      },
    ],

    challenge: [
      "This state government health department was undergoing an organisation-wide branding update, and needed fully functional templates that matched the new visual identity, not just updated logos dropped into the old layouts.",
      "A single Master Template needed to be published to the organisation's intranet, where staff across the whole company could download it whenever they needed to create a new document.",
      "Beyond the new template itself, every piece of existing documentation across the organisation needed to be brought into the updated format and re-uploaded, so the whole document set stayed consistent, on-brand and easy for every team member to use, rather than leaving a mix of old and new templates in circulation.",
    ],

    approach: [
      {
        heading: "Building the new Master Template",
        body: "We built a new Master Template aligned with the organisation's updated branding, ready for publication to the intranet so staff across the company could download and use it directly.",
      },
      {
        heading: "Adding a Quick Part for a repeating element",
        body: "We added a small Quick Part to streamline one of the template's repeating elements, making it easier for staff to apply the correct formatting whenever that element was needed, without having to rebuild it manually each time.",
      },
      {
        heading: "Transferring the existing document set",
        body: "With the Master Template complete, we used our in-house transfer process to move all of the client's existing documents into the new format, rather than requiring the client to rebuild each document from scratch.",
      },
      {
        heading: "Refining and checking each document",
        body: "Our transfer process ensures content comes across cleanly and without corruption, after which we carry out a small amount of manual refinement on each document, applying the correct styles and checking the layout to confirm it aligns fully with the updated branding.",
      },
    ],

    outcome: [
      "The organisation now has a single, consistent Master Template published to their intranet, reflecting the updated branding and available for any staff member to download whenever they need it.",
      "The entire existing document set has been transferred into the new format, rather than left as a mix of old and new templates, giving the organisation consistency across everything staff produce.",
      "Because the transfer process keeps content clean and free of corruption, and is followed by manual style and layout checks, every transferred document aligns properly with the updated branding, making the whole document set easy to use and consistent for every team member.",
    ],

    services: [
      {
        label: "Band Template services",
        href: "https://www.wordexperts.com.au/brand-template",
      },
      {
        label: "Fillable Forms",
        href: "https://www.wordexperts.com.au/fill-in-forms",
      },
    ],
  },
  {
    slug: "community-services-excel-consolidation-rebuild",
    client: "Multi-Site Community Services Provider",
    author: "Excel Experts Team",
    industry: "Community Services",
    site: "excel",
    title:
      "Replacing a 400MB linked spreadsheet with a one-click Power Query refresh",
    summary:
      "A four-location community services provider had each site keying records into its own workbook, with a central file pulling them together through direct workbook links. The structure had grown past 400MB and thousands of columns wide, and every new reporting breakdown meant hours of manual rework. We rebuilt it as a row-based entry template consolidated with Power Query, migrating all existing data into the new structure.",
    results: [
      "Consolidation of 4 location workbooks reduced to a single refresh action",
      "File structure changed from growing sideways to a stable row-based dataset",
      "Reporting breakdowns now built by dragging pivot fields, not new formulas",
    ],
    image: "/case-studies/community-services-excelLg.png",
    featured: false,

    stats: [
      { value: "400MB+", label: "Original file size before the rebuild" },
      {
        value: "4 → 1",
        label: "Location workbooks reduced to a single refresh",
      },
      {
        value: "Minutes",
        label: "To build a new reporting breakdown, not hours",
      },
    ],

    challenge: [
      "This community services provider ran four separate locations, each keying its own client and service records into its own Excel workbook. A central file was meant to bring it all together, but rather than a proper data structure, it did this through direct workbook links, pulling cell references straight out of each location's file.",
      "Every new client, service type, or reporting category added over the years meant another column, not another row. The central file had grown sideways for so long that it was pushing past 360MB and thousands of columns wide, well beyond what Excel, or the staff opening it, could comfortably handle.",
      "Opening the file took minutes. Recalculating it took longer. And because the structure was column-based rather than row-based, any new reporting breakdown, a different date range, a new service category, a different way of slicing the same data, meant hours of manual formula rework rather than a few clicks.",
      "The four location workbooks also had no real safeguards against the links breaking. A renamed file, a moved folder, or a workbook left closed at the wrong moment was enough to silently break the consolidation, and nobody would know until a report came out with a gap in it.",
    ],

    approach: [
      {
        heading: "Understanding the existing structure",
        body: "We reviewed all four location workbooks alongside the central consolidation file to understand exactly what data was being captured, how the workbook links were structured, and which reports were being built from the output. This gave us a clear picture of what the new structure needed to preserve.",
      },
      {
        heading: "Designing a row-based entry template",
        body: "Rather than a sideways-growing structure, we designed a standardised entry template built the way spreadsheet data should be structured, one row per record, with consistent columns across all four locations. This is the structure Power Query and pivot tables are built to work with.",
      },
      {
        heading: "Consolidating with Power Query",
        body: "We replaced the direct workbook links with a Power Query connection that pulls from all four location workbooks and consolidates them automatically. Refreshing the data is now a single action rather than a web of cell references that can silently break.",
      },
      {
        heading: "Migrating the historical data",
        body: "All existing records from the old structure were migrated into the new row-based template, so the provider kept its full reporting history rather than starting again from the day of the rebuild.",
      },
      {
        heading: "Handover and reporting training",
        body: "We walked the team through building new reporting breakdowns using pivot tables against the consolidated dataset, so future reporting changes are a drag-and-drop exercise for their own staff, not a request back to us.",
      },
    ],

    outcome: [
      "The four location workbooks are now consolidated with a single Power Query refresh, replacing a structure that depended on direct workbook links staying intact across four separate files and four separate teams.",
      "The underlying file has moved from a column structure that grew wider with every new client or category, to a stable row-based dataset that grows the way spreadsheet data is meant to, downward, not sideways. File size and recalculation time are no longer a growing problem.",
      "New reporting breakdowns, a different date range, a new service category, a different site comparison, are now built by dragging fields into a pivot table rather than writing new formulas across thousands of columns. The reporting work that used to need a specialist now sits comfortably within the team's own Excel skills.",
    ],

    quote: {
      text: "We'd reached the point where opening the master file was something you did with a coffee in hand, because you knew it would take a while. Now it's just a refresh button.",
      attribution: "Finance Lead, Multi-Site Community Services Provider",
    },

    services: [
      {
        label: "Power Query consolidation",
        href: "https://www.excelexperts.com.au/data-manipulation",
      },
      {
        label: "Excel Upgrades and Migration",
        href: "https://www.excelexperts.com.au/upgrades-and-migration",
      },
    ],
  },
  {
    slug: "healthcare-patient-form-followup-automation",
    client: "Allied Health Provider",
    author: "Power Platform Team",
    industry: "Healthcare",
    site: "powerplatform",
    title: "Removing manual form chasing for around 1,000 active patients",
    summary:
      "An allied health provider was sending intake and milestone forms to every patient but tracking who had and had not responded entirely by hand, pulling clinical staff away from care to send reminders and escalations. We built two scheduled Power Automate flows against the provider's Microsoft Fabric data warehouse that send reminders, escalate overdue cases and close off completed forms automatically.",
    results: [
      "Manual reminder and escalation work removed for roughly 1200 active patients",
      "Outstanding forms actioned daily without staff needing to check status",
      "Follow-up timing and escalation rules adjustable through configuration, not code",
    ],
    image: "/case-studies/healthcare-form-followupLg.webp",
    featured: false,

    stats: [
      { value: "~1200", label: "Active patients tracked automatically" },
      { value: "2", label: "Scheduled flows replacing manual chasing" },
      {
        value: "Daily",
        label: "Outstanding forms actioned without staff input",
      },
    ],

    challenge: [
      "This allied health provider sent intake forms to every new patient and milestone forms at set points through their treatment, standard practice for the sector, and generally straightforward on its own. The problem was what happened after a form went out.",
      "Tracking who had responded and who hadn't was done entirely by hand. Clinical and admin staff were checking spreadsheets and inboxes to work out which of roughly 1,000 active patients still owed a form, then manually sending reminders, and manually escalating anything that stayed outstanding too long.",
      "This was time pulled directly away from patient care, spent on a task that was really just status checking and message sending. It also meant follow-up timing depended on whoever happened to be checking that day, rather than a consistent rule applied to every patient the same way.",
      "The provider's data already lived in a Microsoft Fabric data warehouse, so the information needed to know who was overdue existed. It just wasn't being acted on automatically.",
    ],

    approach: [
      {
        heading: "Mapping the follow-up rules",
        body: "We worked through the provider's existing (manual) process to define exactly when a reminder should be sent, when a case counted as overdue enough to escalate, and what closing off a completed form should look like. This became the rule set the automation would run against.",
      },
      {
        heading: "Building the reminder flow",
        body: "The first Power Automate flow runs on a schedule against the Microsoft Fabric data warehouse, checking outstanding forms across all active patients and sending reminders automatically to anyone who hasn't responded within the agreed window.",
      },
      {
        heading: "Building the escalation flow",
        body: "A second scheduled flow identifies forms that have gone past the reminder stage without a response and escalates them, flagging the case for staff attention rather than leaving it to be noticed manually. Completed forms are closed off automatically as part of the same process, so nobody is chasing a form that's already been returned.",
      },
      {
        heading: "Configuration over code",
        body: "Follow-up timing and escalation thresholds were built as configuration values rather than hardcoded logic, so the provider can adjust how soon a reminder goes out, or how long before a case escalates, without needing a developer involved for a simple timing change.",
      },
      {
        heading: "Testing against live patient data",
        body: "Before going live, we ran both flows against the provider's real Fabric data in a controlled way to confirm reminders, escalations, and closures were all firing correctly across genuinely overdue, borderline, and already-completed cases.",
      },
    ],

    outcome: [
      "Manual reminder and escalation work has been removed for the provider's roughly 1,000 active patients. Staff are no longer spending clinical time checking spreadsheets to work out who owes a form.",
      "Outstanding forms are now actioned daily by the two scheduled flows, with reminders sent and overdue cases escalated automatically, without anyone needing to check status first.",
      "Because follow-up timing and escalation rules were built as configuration, the provider can adjust how the process behaves as their patient load or clinical requirements change, without needing new development work for what is really just a timing adjustment.",
    ],

    quote: {
      text: "Our staff were spending real time every week just chasing paperwork status. That time is back with our patients now, and the forms still get chased, just automatically.",
      attribution: "Practice Manager, Allied Health Provider",
    },

    services: [
      {
        label: "Microsoft Power Automate",
        href: "https://www.powerplatformexperts.com.au/services/microsoft-power-platform/microsoft-power-automate",
      },
      {
        label: "Business process automation",
        href: "https://www.powerplatformexperts.com.au/services/microsoft-office-365/business-process-automation",
      },
    ],
  },
  {
    slug: "government-health-department-editable-pdf-forms",
    client: "State Government Health Department",
    author: "Aleisha",
    industry: "Government",
    site: "word",
    title:
      "Turning brand templates into editable PDF forms staff can fill in and maintain",
    summary:
      "Having recently completed a new master template for this state government health department, we were asked to build two internal staff forms on top of it. We built both forms directly into the existing branded template, converted them into editable PDFs using Adobe Acrobat Pro, and trained the client's team to make minor content changes themselves going forward.",
    results: [
      "Two internal forms built directly into the client's existing master template",
      "Editable PDF fields let staff complete forms without breaking the layout",
      "Client's own team trained to make minor content changes independently",
    ],
    image: "/case-studies/government-health-editable-pdf-formsLg.png",
    featured: false,

    stats: [
      { value: "2", label: "Internal forms built and converted" },
      {
        value: "1 template",
        label: "Forms built on the client's existing master template",
      },
      {
        value: "Self-serve",
        label: "Client trained to update form content in-house",
      },
    ],

    challenge: [
      "Having recently had a new master template built for their organisation, this state government health department needed two internal forms created for their staff to complete as part of day-to-day operations.",
      "The forms needed to sit on the same branded foundation as the rest of the organisation's documents, rather than being built as one-off files that risked drifting from the established template and brand standards.",
      "Staff needed to be able to fill the forms in easily and reliably, without the layout shifting or breaking, which meant a standard Word document wasn't going to be a robust enough format for how the forms would actually be used.",
    ],

    approach: [
      {
        heading: "Discussing the best approach",
        body: "We talked through the options with the client and agreed the most reliable approach was to build both forms directly into their existing master template, rather than starting the layouts from scratch.",
      },
      {
        heading: "Building the forms into the master template",
        body: "We built both forms using the existing template created for the client, keeping the layouts consistent with the organisation's established branding and document standards throughout.",
      },
      {
        heading: "Converting to editable PDF",
        body: "Once the layouts were finalised, we saved each form as a PDF and converted it into an editable PDF using Adobe Acrobat Pro, so staff could complete the fields directly without disturbing the underlying design.",
      },
      {
        heading: "Training the client's team",
        body: "We provided training to the client's team on how to make minor content changes to the forms themselves, so small updates down the track don't need to come back to us as a new request.",
      },
    ],

    outcome: [
      "The client now has two internal forms built directly into their existing master template, keeping every document staff use aligned with the same brand standard.",
      "Staff can complete the forms through editable PDF fields, filling them in easily while the underlying layout and branding stay exactly as designed.",
      "With training now complete, the client's own team can make minor content changes to the forms independently, without needing to come back to us for small updates.",
    ],

    services: [
      {
        label: "Government department services",
        href: "https://www.wordexperts.com.au/government-departments",
      },
      {
        label: "Editable PDF form design",
        href: "https://www.wordexperts.com.au/word-to-pdf-conversion",
      },
    ],
  },
  {
    slug: "professional-services-sharepoint-foundation-workshops",
    client: "Professional Services Team",
    author: "Office Experts Team",
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
    image: "/case-studies/professional-services-sharepoint-foundationLg.png",
    featured: false,

    stats: [
      { value: "2", label: "Shared logins on a clear path to retirement" },
      { value: "3", label: "Live workshops to build the new foundation" },
      { value: "0", label: "Individual logins left with the wrong access" },
    ],

    challenge: [
      "This professional services team had grown past the point their original setup could support. Email, files and calendar all ran through a single shared login, and their bookings system ran through a second shared login on top of that. Everyone signed in as the same account, for everything.",
      "Files were being treated like a shared drive rather than a proper document management system. There was no real structure behind where things lived, just folders that had accumulated over time, and no way to tell who had actually made a change to a document, since every change was attributed to the same shared identity.",
      "Version clashes were common, two people editing the same file at once with no visibility of each other, and no audit trail to untangle what had happened afterwards. When someone left the team, there was no clean way to remove their access, because their access wasn't really theirs, it was the shared login everyone else still needed.",
      "None of this was unusual for a team that had grown organically without ever revisiting its Microsoft 365 foundation, but it left the business with no real security boundary between staff, no accountability for changes, and a growing risk the longer it continued.",
    ],

    approach: [
      {
        heading: "Running the SharePoint Foundation Workshops",
        body: "Rather than simply handing over a rebuilt system, we ran a series of live workshops with the team to design the new SharePoint foundation together, walking through how they actually worked day to day rather than assuming a generic structure would fit.",
      },
      {
        heading: "Designing the site structure",
        body: "We mapped a SharePoint site structure and document library layout based on how the team's work genuinely flows between them, replacing the accumulated folder tree with something that matches their real processes rather than historical habit.",
      },
      {
        heading: "Building an Owners, Members and Visitors access model",
        body: "In place of the shared logins, we designed a proper access model using SharePoint's standard Owners, Members and Visitors groups, mapped to security groups rather than individuals, so access is granted and removed at the group level using Microsoft 365's own patterns.",
      },
      {
        heading: "Planning the shared login retirement",
        body: "Retiring two shared logins that everything depends on isn't a same-day switch. We built a clear, staged plan covering both the email/file/calendar login and the bookings system login, sequencing the changes so the team keeps working without disruption while the shared logins are phased out.",
      },
    ],

    outcome: [
      "The team's access model has been rebuilt around security groups rather than individual or shared logins, so granting and removing access now follows a standard, repeatable Microsoft 365 pattern instead of everyone sharing one identity.",
      "Document libraries are now mapped to how the team actually works, not the old folder tree that had built up over years without anyone stepping back to reconsider it.",
      "There's now a clear, agreed plan to retire both shared logins for good, using proper Microsoft 365 patterns rather than a rushed cutover, giving the team a foundation that can actually support them removing someone cleanly when they leave.",
    ],

    quote: {
      text: "We didn't realise how much we didn't know about our own files until we sat down and actually mapped it out together. It's the first time our system has felt like it belongs to us, not whoever set up the shared login years ago.",
      attribution: "Team Lead, Professional Services Team",
    },

    services: [
      {
        label: "Office 365",
        href: "https://www.officeexperts.com.au/services/microsoft-office-365",
      },
      {
        label: "Microsoft 365 API Integrations",
        href: "https://www.officeexperts.com.au/microsoft-365-api-integration",
      },
    ],
  },
  // New case study object — copy this into the caseStudies array in caseStudies.js
  // Suggested placement: add as a new entry before the closing "];" of the array

  {
    slug: "windowline-proposals-database",
    client: "Windowline",
    author: "Stephen",
    industry: "Building and Construction",
    site: "access",
    title:
      "Replacing 50-page proposals built by hand with a database-driven document generator",
    summary:
      "Windowline installs windows across commercial and residential properties, many of them high-rise apartment blocks, mainly in Sydney. Every proposal, quote and contract was pieced together manually from paper records and Excel, often running to 50 or more pages. We designed an Access database, later migrated to SQL Server, that lets staff select the sections they need and generates the full Word document automatically, complete with project and client details, quote tables, data and images.",
    results: [
      "50+ page proposals and contracts generated automatically instead of assembled by hand",
      "Users select exactly which sections to include, from project details to quote tables and images",
      "Built-in Excel exports and auto-generated emails with attachments streamlined delivery",
    ],
    image: "/case-studies/windowline-proposals-databaseLg.png",
    featured: false,

    stats: [
      { value: "50+ pages", label: "Typical proposal or contract generated" },
      {
        value: "2 backends",
        label: "Started on Access, migrated to SQL Server",
      },
      { value: "1 database", label: "Driving proposals, quotes and contracts" },
    ],

    challenge: [
      "The client installs windows and doors across commercial and residential properties, mainly around Sydney, with a large share of the work in high-rise apartment blocks. Every project starts with a proposal, and often ends with a lengthy quote and contract, each one specific to that job.",
      "Before this system existed, all of it was managed manually, recorded on paper or scattered across Excel spreadsheets. Building a single proposal meant pulling together project details, client information and quote data by hand, then formatting it all into a document that regularly ran to 50 pages or more.",
      "With every document assembled from scratch, there was no consistency from one proposal to the next, and no quick way to reuse the sections that stayed the same between jobs. The manual process was slow at exactly the point in the sales cycle where speed mattered most.",
    ],

    approach: [
      {
        heading: "Designing the Access database",
        body: "We designed an Access database to manage proposals for the client's projects, structured around the sections that make up a typical proposal, quote and contract, including project and client information alongside quote and project detail such as tables, data and images.",
      },
      {
        heading: "Building section-based document generation",
        body: "We built the system so users can select which sections to insert into a given document, letting staff assemble a proposal, quote or contract from the relevant building blocks rather than starting each one from a blank page.",
      },
      {
        heading: "Generating documents in Word",
        body: "We built the generation engine to produce the finished document directly in Word, pulling in the selected sections, including tables, data and images, and assembling them into a single, consistently formatted document ready to send.",
      },
      {
        heading: "Adding export and email options",
        body: "We added options to export data to Excel and to generate emails with attachments directly from the system, so proposals, quotes and contracts could move straight from generation to delivery without extra manual steps.",
      },
      {
        heading: "Migrating from Access to SQL Server",
        body: "As the database grew, we migrated the backend from Access to SQL Server, keeping the same section-based generation workflow in place while giving the system a backend able to handle a larger, more concurrent workload.",
      },
    ],

    outcome: [
      "Proposals, quotes and contracts that once took considerable manual effort to compile are now generated directly from the database, with staff selecting the sections they need rather than assembling every document by hand.",
      "Long documents of 50 or more pages, complete with project and client information, quote tables, data and images, are now produced consistently every time, rather than varying with whoever put the document together.",
      "With export to Excel and automated emails with attachments built in, the process now runs from data entry through to delivery in one connected system, in place of paper records and standalone spreadsheets.",
    ],

    services: [
      {
        label: "Custom Access database development",
        href: "https://www.accessexperts.com.au/custom-design-and-development",
      },
      {
        label: "Upgrading with Access",
        href: "https://www.accesexperts.com.au/upgrades-and-migration",
      },
    ],
  },
  {
    slug: "red-fox-advisory-branding-template-rollout",
    client: "Red Fox Advisory",
    author: "Aleisha",
    industry: "Professional Services",
    site: "word",
    title:
      "Rebuilding a full template suite to lock a new brand in, not just apply it",
    summary:
      "The client was updating its branding, but its Word templates kept breaking, with formatting corruption and staff freely overriding brand elements creating constant manual rework. We rebuilt the entire template suite from a single Master Template, added a custom Formatting tab to lock down font controls, and built a set of branded Quick Parts, so the new brand stays consistent without ongoing fixes.",
    results: [
      "Eleven sub-templates rebuilt from one consistent Master Template",
      "Font and font-size controls locked down to enforce brand styles",
      "Branded Quick Parts let staff insert cover pages and elements instantly",
    ],
    image: "/case-studies/red-fox-advisory-brand-templatesLg.png",
    featured: false,

    stats: [
      { value: "11", label: "Sub-templates rebuilt in the new branding" },
      { value: "1", label: "Master Template as the single source of truth" },
      { value: "0", label: "Manual formatting fixes needed to stay on-brand" },
    ],

    challenge: [
      "The client was updating its branding and needed its existing suite of Word templates brought into line with the new design. On paper this was a rebranding job, but in practice the templates themselves were the problem.",
      "Formatting corruption was a recurring issue, with documents breaking or drifting out of shape as they were used day to day. Staff were also able to freely change branding elements such as fonts and font sizes, so even a correctly built document could quickly end up looking inconsistent with the brand it was supposed to represent.",
      "Fixing these inconsistencies fell to staff manually, document by document, which ate up a large amount of time that should have gone toward client work rather than reformatting. Red Fox Advisory needed a controlled, reliable solution, one that locked down formatting and enforced the brand standards, rather than a rebrand that would drift out of line again within months.",
    ],

    approach: [
      {
        heading: "Establishing a single Master Template",
        body: "We built a new Master Template in for the client's updated branding, establishing one consistent foundation that every other template in the suite would be built from, rather than each document being styled independently.",
      },
      {
        heading: "Rebuilding the sub-template suite",
        body: "From the Master Template, we developed eleven sub-templates, including a CV, letterhead, memo, meeting minutes and capability statement, each reflecting the new brand while remaining practical for staff to use every day.",
      },
      {
        heading: "Locking down formatting with a custom tab",
        body: "We added our custom Formatting tab to the templates, locking down font and font-size controls so staff rely on the styles we built into the templates rather than applying manual formatting that could drift away from the brand.",
      },
      {
        heading: "Building in everyday functionality",
        body: "Alongside the locked-down formatting controls, the Formatting tab includes our copy-and-paste code, a landscape page button and a list-formatting tool, giving staff quick access to the functions they use regularly without needing to work around the formatting restrictions.",
      },
      {
        heading: "Adding branded Quick Parts",
        body: "We built a range of highly designed Quick Parts, including cover pages and template-specific elements, so staff can insert branded components instantly and keep every document consistent without rebuilding elements from scratch.",
      },
    ],

    outcome: [
      "The client now has a full suite of eleven templates built from a single Master Template, giving the organisation one consistent foundation for its new branding rather than a set of documents styled independently.",
      "With font and font-size controls locked down through the custom Formatting tab, staff can no longer freely override branding elements, and the formatting corruption that previously caused constant rework has been designed out of the templates themselves.",
      "The branded Quick Parts mean staff can insert cover pages and other template-specific elements instantly, so maintaining brand consistency is now built into everyday document creation rather than a separate manual task.",
    ],

    services: [
      {
        label: "Quick Parts",
        href: "https://www.wordexperts.com.au/quick-parts",
      },
      {
        label: "Document rebranding services",
        href: "https://www.wordexperts.com.au/document-rebranding-services",
      },
    ],
  },
  {
    slug: "golf-supplier-sales-data-consolidation",
    client: "On Course Golf",
    author: "Martin",
    industry: "Retail",
    site: "excel",
    title:
      "Turning a year of scattered supplier sales files into one automated summary",
    summary:
      "The client received dozens of separate Excel files from each supplier throughout the year, detailing sales made to every club and member across each month and quarter. We built a Power Query and Power Pivot solution that pulls all of this raw data in automatically, categorises it, and produces year-on-year comparisons by supplier, member, month and quarter without a single manual copy and paste.",
    results: [
      "Dozens of supplier files a year consolidated automatically into one summary",
      "Sales comparable by supplier, member, month and quarter at a glance",
      "Quarter-on-quarter, year-on-year comparisons generated without manual rework",
    ],
    image: "/case-studies/on-course-golf-sales-summaryLg.png",
    featured: false,

    stats: [
      {
        value: "2 tools",
        label: "Built for summary and year-on-year comparison",
      },
      {
        value: "Automatic",
        label: "Supplier files combined and categorised on refresh",
      },
      {
        value: "4 views",
        label: "By supplier, member, month and quarter",
      },
    ],

    challenge: [
      "The client received a steady stream of Excel files from each of its suppliers throughout the year, with every file detailing the sales that supplier had made to each golf club or member over the course of a quarter. Across all suppliers and all quarters, this added up to a large number of separate files landing throughout the year.",
      "None of these files were in a consistent, ready-to-analyse format on their own. To understand how the business was actually performing, someone needed to bring every supplier's figures together and summarise them across the entire financial year, comparing sales by supplier, by club or member, and by month and quarter.",
      "On top of the annual summary, The client also needed to compare results from one financial year to the next. That meant taking the same quarterly breakdowns, by supplier, by member, or both, and showing the movement between the same quarter in consecutive years, not just the raw totals.",
      "Doing this by hand meant manually opening, checking and combining a large number of supplier files every year, then repeating a similar manual effort again just to compare two years' worth of already-summarised results.",
    ],

    approach: [
      {
        heading: "Automating the single-year summary",
        body: "We built an Excel workbook using Power Query to automatically bring in all of the raw supplier sales files for a financial year, rather than requiring each one to be opened and copied in by hand. As new files were added, the workbook picked them up on refresh.",
      },
      {
        heading: "Categorising and structuring the combined data",
        body: "Once the raw files were pulled in, we used Power Query to clean and categorise the combined data consistently, so every supplier's figures lined up the same way regardless of how the original file had been laid out.",
      },
      {
        heading: "Building the summary views with Power Pivot",
        body: "We used Power Pivot to build the summarised results the client needed, allowing sales to be compared and viewed by supplier, by club or member, and across every month and quarter of the financial year, all from the one workbook.",
      },
      {
        heading: "Building the year-on-year comparison workbook",
        body: "We built a second Excel workbook that automatically extracts the results from two consecutive financial year summary files, rather than requiring the figures to be re-entered or copied across manually.",
      },
      {
        heading: "Showing the quarter-on-quarter movement",
        body: "This second workbook reproduces the same summary breakdowns as the original files, by supplier, by member, or both, while also calculating and displaying the difference for each quarter compared to the same quarter the previous financial year.",
      },
    ],

    outcome: [
      "The clent can now bring in every supplier's raw sales files and get a fully categorised, summarised view of the financial year without manually combining a single file by hand.",
      "Sales can be compared by supplier, by club or member, and across every month and quarter, giving a clear picture of performance that would previously have taken considerable manual effort to piece together.",
      "Comparing one financial year against the next is now handled automatically as well, with quarter-on-quarter movement calculated directly from the two summary files rather than reworked from scratch each time a year-on-year comparison was needed.",
    ],

    services: [
      {
        label: "Data manipulation services",
        href: "https://www.excelexperts.com.au/data-manipulation",
      },
      {
        label: "Custom design and development",
        href: "https://www.excelexperts.com.au/custom-design-and-development",
      },
    ],
  },
  {
    slug: "retail-analytics-automated-review-deck-generator",
    client: "Retail Analytics Business",
    author: "Power Platform Team",
    industry: "Retail",
    site: "powerplatform",
    title:
      "Turning a days-long PowerPoint build into a one-click, 600+ slide deck",
    summary:
      "A retail analytics business was building large retailer review decks by hand, pulling figures out of Power BI, pasting them into templates slide by slide, and repeating that process across the whole range every time. We built a Python tool that reads a simple scope sheet, queries Power BI directly, and assembles a fully branded deck of around 660 slides in under five minutes.",
    results: [
      "A full ~660-slide review deck now built in under 5 minutes, not days",
      "Manual slide-by-slide assembly replaced with a single click",
      "Fragile, breakage-prone files replaced with a reliable, self-contained deck",
    ],
    image: "/case-studies/retail-analytics-deck-generatorLg.png",
    featured: false,

    stats: [
      {
        value: "<5 min",
        label: "To build a full review deck, start to finish",
      },
      { value: "~660", label: "Slides assembled automatically every run" },
      { value: "1 click", label: "From scope to finished, branded deck" },
    ],

    challenge: [
      "Every retailer review at this business meant building a large PowerPoint deck from scratch, running to hundreds of slides before a word of commentary had even been written.",
      "The process was entirely manual. The analyst pulled the figures out of Power BI by hand, dropped them into slide templates one by one, refreshed everything, then tidied the file so it wouldn't break, and repeated the whole exercise for every part of the range.",
      "What should have been analysis time was being swallowed by hours of copying, pasting and formatting, and the templates themselves were old and prone to breaking, adding a layer of fragility on top of the manual workload.",
      "A full review across the range took days of building before the analyst could even begin writing commentary or having the client conversation the deck was meant to support.",
    ],

    approach: [
      {
        heading: "Understanding the existing decks",
        body: "We reviewed the analyst's current review decks in detail to capture exactly what each one needed to show, across the different audiences and parts of the range the business reported on.",
      },
      {
        heading: "Building the generator",
        body: "We built a Python tool that reads a simple scope from a front sheet, queries the client's existing Power BI data directly, and assembles a complete PowerPoint deck automatically, then tested it against live data and refined it with the analyst's feedback.",
      },
      {
        heading: "Branding and going live",
        body: "We matched the output to the client's existing branding and put the tool into everyday use for a live retailer review, so the analyst was producing genuine, client-ready decks with it from day one.",
      },
    ],

    outcome: [
      "The analyst now sets the scope in a simple front sheet, clicks once, and a fully branded deck of around 660 slides is built automatically, drawing straight from the client's live Power BI data so the numbers are always current.",
      "The tool tailors what it includes to the audience, so a supplier version leaves out commercial detail a retailer version includes, without any extra manual work from the analyst.",
      "Because the finished deck is self-contained rather than a fragile template file, the breakage problems of the old process are gone, and the analyst's time now goes into analysis and the client conversation rather than assembling slides. The same foundation is set up to be extended further, whether that's scheduling decks automatically or adding AI-drafted commentary down the track.",
    ],

    services: [
      {
        label: "Custom code automation",
        href: "https://www.excelexperts.com.au/excel-formulas-and-custom-formulas",
      },
      {
        label: "Power BI reporting services",
        href: "https://www.powerplatformexperts.com.au/services/microsoft-power-platform/microsoft-power-bi",
      },
    ],
  },
  {
    slug: "water-education-program-word-powerpoint-templates",
    client: "Water Utility Education Program",
    industry: "Education",
    author: "Aleisha",
    site: "word",
    title:
      "Turning an InDesign lesson design into Word and PowerPoint templates educators could actually use",
    summary:
      "The client's water education program had a lesson template designed in InDesign by their design partner, but curriculum writers across Western Australia needed to build lessons in Word and PowerPoint, not Adobe software. We translated the InDesign design into fully functional Word and PowerPoint templates, building Quick Parts and a Slide Master system so educators could assemble consistent, branded lessons without wrestling with formatting.",
    results: [
      "InDesign lesson design translated into fully working Word and PowerPoint templates",
      "Quick Parts built so educators can insert required layouts in a click",
      "Slide Master system with locked-down branding, ready for lesson creation",
    ],
    image: "/case-studies/water-education-program-templatesLg.png",
    featured: false,

    stats: [
      {
        value: "2 formats",
        label: "Word and PowerPoint, from one InDesign design",
      },
      { value: "WA-wide", label: "Consistent lessons across the Program" },
      { value: "0", label: "Formatting expertise needed by educators" },
    ],

    challenge: [
      "This water education program's delivery partner had designed a lesson template in InDesign, built to a high visual standard the way Adobe design work typically is. The intent was for that design to become the standard lesson template curriculum writers across Western Australia would use.",
      "The problem was the gap between the two worlds. Curriculum writers worked in Word and PowerPoint, not InDesign, and Adobe-designed layouts tend to be rigid in ways that translate awkwardly into Word, where documents need to flex and reflow as educators add and edit content.",
      "Without a proper translation of the design into native Word and PowerPoint templates, curriculum writers across the Program had no consistent, easy way to produce lessons that matched the intended branding and structure.",
    ],

    approach: [
      {
        heading: "Reviewing the InDesign design",
        body: "We started from the InDesign file provided by the client's design partner, identifying every layout that needed to exist as a working Word or PowerPoint template rather than a static, designed page.",
      },
      {
        heading: "Rebuilding and testing the Word template",
        body: "We rebuilt the design in Word and spent considerable time testing it with the client, refining the template repeatedly to reduce the rigidity of the original InDesign layout so it could hold up to real curriculum writers editing real content.",
      },
      {
        heading: "Building Quick Parts for educators",
        body: "To make the Word template genuinely usable day to day, we built Quick Parts for each layout, so educators could insert the pages and structures they needed with a click rather than trying to recreate formatting by hand.",
      },
      {
        heading: "Engineering the PowerPoint Slide Master system",
        body: "For the PowerPoint component, we took the required layouts from the InDesign design and rebuilt them as a full Slide Master system, with precise placeholders, consistent spacing and locked-down brand elements engineered into each layout.",
      },
      {
        heading: "Structuring layouts around real lesson needs",
        body: "We structured the masters exactly around how the client's education team wanted to use them, with a clear title hierarchy, flexible content areas, and purpose-built layouts for activities, diagrams and assessment pages, so every lesson could be assembled quickly.",
      },
    ],

    outcome: [
      "Curriculum writers across the Program now have fully functional Word and PowerPoint templates that carry the InDesign design through faithfully, without the rigidity that would have made the original layout impractical to edit.",
      "Quick Parts mean educators can insert the required layouts and structures as needed, rather than fighting with formatting every time they build a lesson.",
      "The Slide Master system, with its locked-down brand elements and purpose-built layouts, lets educators focus on lesson creation rather than formatting, while every lesson produced stays visually consistent across the entire Program.",
    ],

    services: [
      {
        label: "Word template design",
        href: "https://www.wordexperts.com.au/word-document-template-creation",
      },
      {
        label: "Corporate templates",
        href: "https://www.wordexperts.com.au/corporate-global-template-solution",
      },
    ],
  },
  {
    slug: "government-department-enterprise-office-template-suite",
    client: "State Government Transport Department",
    industry: "Government",
    author: "Aleisha",
    site: "word",
    title:
      "Building a custom Word ribbon that stops corporate templates breaking under everyday use",
    summary:
      "Following a major brand refresh, a state government transport department needed its entire Microsoft Office environment modernised, with staff across large, collaborative documents regularly hitting formatting corruption, inconsistent branding and accessibility gaps. We redesigned 17 enterprise Word templates, built a custom Word Formatting Control Tab to enforce approved styles automatically, and delivered a new PowerPoint master framework with 10 additional precinct-specific themes.",
    results: [
      "17 enterprise Word templates redesigned to the new brand",
      "Custom ribbon lets non-technical staff create on-brand documents without Word expertise",
      "Copy-and-paste formatting corruption controlled at the source, with a one-click clean-up fallback",
    ],
    image: "/case-studies/government-enterprise-office-templatesLg.png",
    featured: true,

    stats: [
      { value: "17", label: "Enterprise Word templates redesigned" },
      { value: "10", label: "Precinct-specific PowerPoint themes added" },
      {
        value: "1 ribbon",
        label: "Controls styles, tables and branding across all documents",
      },
    ],

    challenge: [
      "Following a major brand refresh, the client needed its Microsoft Office environment brought into line across the whole organisation, spanning everything from reports and briefing papers to presentations used across multiple precincts.",
      "Staff regularly worked across large, collaborative documents, and formatting corruption was an ongoing problem. Content pasted in from other sources would carry its own formatting with it, quietly breaking the corporate styles the templates were built around.",
      "Branding consistency and accessibility compliance were difficult to maintain at scale without a way to enforce them automatically, and much of this fell to staff who weren't expected to have advanced Word or PowerPoint knowledge, but still needed to produce professional, on-brand documents day to day.",
      "Without a controlled authoring environment, every new document carried a risk of drifting from the brand, breaking formatting, or falling short of accessibility standards, with no consistent way to catch or fix it.",
    ],

    approach: [
      {
        heading: "Redesigning the enterprise Word template suite",
        body: "We redesigned the client's full enterprise Word template suite to the new brand, covering reports, briefing papers, project plans, agendas, minutes, factsheets and letterheads, so every document type shared the same visual foundation.",
      },
      {
        heading: "Building a custom Word Formatting Control Tab",
        body: "We developed a custom ribbon tab that lets staff create professionally branded documents directly from Word, automatically enforcing approved styles, tables and numbering without requiring advanced Word knowledge from the person using it.",
      },
      {
        heading:
          "Controlling copy-and-paste and adding a formatting clean-up tool",
        body: "We built controlled copy-and-paste functionality that prevents external formatting from corrupting the corporate templates and styles, and added a Styles Clean Up tool so any formatting that did get corrupted could be restored in a click rather than manually untangled.",
      },
      {
        heading: "Automating table formatting and document assembly",
        body: "We built automated table formatting and numbering controls, along with a document assembly system offering 17 report cover designs across portrait and landscape, 9 branded back cover designs, and 9 header variations, with covers, headers and section pages inserted automatically.",
      },
      {
        heading: "Rebuilding the PowerPoint framework",
        body: "We redesigned the client's PowerPoint presentation framework with expanded slide layouts, icon libraries, accessibility guidance and improved data visualisation, then built 10 additional precinct-specific themes so individual precincts could maintain their own identity while staying aligned to the broader organisational brand.",
      },
      {
        heading: "Rolling out with digital signing and deployment support",
        body: "We implemented digital signing and supported the enterprise deployment of the new templates and tools, so the rollout reached staff across the organisation in a controlled, supported way.",
      },
    ],

    outcome: [
      "The client now has consistent branding across both Word and PowerPoint, with the custom ribbon enforcing approved styles, tables, numbering and branding automatically rather than relying on individual staff getting it right manually.",
      "Formatting errors caused by copy-and-paste operations have been significantly reduced, and when formatting issues do occur, the Styles Clean Up tool restores them in a click, keeping document creation simple for non-technical users across a consistent experience spanning every document type.",
      "Accessibility compliance has improved across the template suite, and the organisation now has a scalable, long-term maintainable framework that supports future needs, including the ability for individual precincts to keep their own branding without breaking the broader corporate identity, all while reducing the ongoing support and training burden on the wider team.",
    ],

    services: [
      {
        label: "Custom Word ribbon development",
        href: "https://www.wordexperts.com.au/custom-toolbars-and-ribbons",
      },
      {
        label: "Enterprise template design and governance",
        href: "https://www.wordexperts.com.au/corporate-identity",
      },
    ],
  },
  {
    slug: "film-crew-booking-system-access-nextjs-rebuild",
    client: "Freelance Crew Promotions Agency",
    industry: "Media and Entertainment",
    author: "Paul",
    site: "access",
    title:
      "Migrating a VM-locked Access 2000 database to Azure with a 10x faster Next.js website",
    summary:
      "This client supplies freelance crew and technicians for film and screen productions, longform drama, television commercials and online content, but their entire operation ran on a native Access 2000 database that only worked on a VM. We rebuilt the front end using the OEG Access framework with a cloud back end on Azure SQL Server, then rewrote their WordPress website in Next.js with a direct database connection, giving them a site that loads 10x faster and is built to scale.",
    results: [
      "Access 2000 database on a VM replaced with a modern Azure SQL Server back end",
      "Website rebuilt in Next.js loads 10x faster with a direct database connection",
      "Crew Diaries, Availability Lists, emails and End of Day processing fully automated",
    ],
    image: "/case-studies/film-crew-booking-system-rebuildLg.png",
    featured: true,

    stats: [
      { value: "10x", label: "Faster website load times on Next.js" },
      {
        value: "180-day",
        label: "Forward booking outlook in the new Bookings form",
      },
      {
        value: "VM → Cloud",
        label: "Database moved off a locked VM onto Azure SQL Server",
      },
    ],

    challenge: [
      "This client's entire crew booking operation ran on a native Access 2000 database, technology old enough that it would only run inside a virtual machine, with no way for their public-facing website to connect to it directly.",
      "The interface itself hadn't kept pace with how the business actually worked. Staff needed an intuitive way to manage bookings, crew availability and day-to-day processing, but the old system offered none of the modern menu-driven usability a growing business needed.",
      "Because the Access database was isolated on a VM, the client's existing WordPress website couldn't access live booking or crew data at all, meaning information had to be managed separately across the database and the website rather than in one connected system.",
      "A wide range of tasks that should have been automatic, including generating Crew Diaries, producing Availability Lists, sending emails and running End of Day processing, were still being done manually, adding ongoing admin work on top of an already outdated system.",
    ],

    approach: [
      {
        heading: "Migrating the database to Azure SQL Server",
        body: "We migrated the client's data off the VM-locked Access 2000 database and onto Azure SQL Server, giving them a modern, cloud-based back end that both the internal system and the public website could connect to.",
      },
      {
        heading: "Rebuilding the front end on the OEG Access framework",
        body: "We rewrote the front end using the OEG Access framework, replacing the old interface with an intuitive, menu-driven forms system built around how the client's staff actually work day to day.",
      },
      {
        heading: "Building the Excel-style Bookings form",
        body: "We built the core Bookings form as an Excel-style grid giving staff a 180-day forward booking outlook, alongside improved navigation, sorting and filtering across the system's other entities.",
      },
      {
        heading: "Automating manual crew processes",
        body: "We automated a range of previously manual tasks, including the creation of Crew Diaries, generation of Availability Lists, email generation and End of Day processing, removing repetitive admin work from the daily workflow.",
      },
      {
        heading: "Rebuilding the website in Next.js",
        body: "We rewrote the client's existing WordPress website in Next.js with a direct, seamless connection to the Azure SQL Server database, migrating all existing website assets across and building a crew portal so crew members could access relevant information online.",
      },
      {
        heading: "Adding a website management portal to Access",
        body: "We built a website management portal directly into the Access front end, so staff could manage website content from within the same system they already used for bookings, rather than switching between separate tools.",
      },
    ],

    outcome: [
      "The client's database now runs on Azure SQL Server instead of a VM-locked Access 2000 file, giving them a modern, scalable back end that both their internal system and their website can connect to directly.",
      "Their website, rebuilt in Next.js with a proper database connection, now loads 10 times faster than the previous WordPress site, and is built on a more scalable foundation that can grow with the business rather than working around the limitations of the old platform.",
      "Tasks that used to be done manually, including Crew Diaries, Availability Lists, emails and End of Day processing, now run automatically, and the new Excel-style Bookings form gives staff a full 180-day forward view of bookings at a glance, with significantly improved navigation, sorting and filtering throughout the system.",
    ],

    services: [
      {
        label: "Microsoft Access database development",
        href: "https://www.accessexperts.com.au/sql-server-backend-business-solutions",
      },
      {
        label: "Custom web application development",
        href: "https://www.officeexperts.com.au/services/by-business-solution/online-solutions",
      },
    ],
  },
  {
    slug: "private-client-cashflow-forecasting-tool",
    client: "Private Client",
    author: "Office Experts Team",
    industry: "Finance",
    site: "office",
    title:
      "Turning uneven investment income into one clear monthly figure to plan against",
    summary:
      "A Melbourne private client's investment and business income arrived in seasonal, periodic lumps, while monthly commitments fell steadily regardless. Distribution and tax decisions were being made without a full forward view of cash flow. We built a private planning tool that forecasts cash flow across personal, investment and business, smooths uneven income against steady commitments, and solves for the exact income needed each month.",
    results: [
      "Delivered in 2 weeks, from brief to a working tool",
      "One clear monthly income figure calculated automatically, before GST",
      "What-if scenarios let decisions be tested before they're made",
    ],
    image: "/case-studies/private-client-cashflow-plannerLg.png",
    featured: false,

    stats: [
      { value: "2 weeks", label: "From brief to delivered tool" },
      {
        value: "3 areas",
        label: "Personal, investment and business, one view",
      },
      { value: "1 figure", label: "Income needed each month, before GST" },
    ],

    challenge: [
      "This private client's investment and business income didn't arrive in a steady, predictable pattern. It came in seasonal, periodic lumps, while monthly commitments fell due steadily across the month regardless of when income landed.",
      "That mismatch made forward planning genuinely difficult. It was hard to see in advance when the client's balance would reach its lowest point across the year, or whether a quieter period would still be comfortably covered.",
      "Decisions about distributing income and minimising tax were being made without the full picture in front of the client, based on partial information rather than a proper forward view of cash flow.",
      "The planning approach itself was manual and slow, reworked from scratch each time a decision needed to be revisited, rather than something the client could interrogate and test on demand.",
    ],

    approach: [
      {
        heading: "Building the private foundation",
        body: "We built the tool as a private, secure application from the outset, accessible only to the client, since it would hold detailed personal, investment and business financial information.",
      },
      {
        heading: "Modelling forecasting and the break-even income figure",
        body: "We built the core financial model on sound accounting and investment principles, working backwards from the client's known, fixed commitments to solve for the income needed, before GST, to cover everything each month.",
      },
      {
        heading: "Building the cash flow calendar",
        body: "We built a 12-month rolling cash flow forecast across personal, investment and business, projecting balances forward so the client could see exactly where and when the lowest point in their cash position would fall.",
      },
      {
        heading: "Adding tracking and allocation",
        body: "We built tracking that compares the plan against actual results over time, and directs any surplus income into buffer and savings in a clear, consistent priority order rather than an ad hoc decision each time.",
      },
      {
        heading: "Adding scenario and tax modelling",
        body: "We built a what-if sandbox that lets the client adjust a distribution percentage, an income assumption or a commitment, and immediately see the effect on the income required, so decisions about distribution and tax could be tested before being made.",
      },
      {
        heading: "Confirming reliability",
        body: "Before handover, we tested the tool thoroughly and hosted it privately on Microsoft Azure, so the client's plans and figures are kept safe and available whenever they're needed.",
      },
    ],

    outcome: [
      "The client now has a single, clear figure on screen for the income needed to cover every commitment, before GST, and that figure updates the moment anything in the plan changes.",
      "Seasonal and periodic income is smoothed against steady monthly commitments, so the client can see well in advance whether a quieter period stays funded and exactly where their balance will reach its lowest point.",
      "Distribution and tax decisions are now modelled rather than estimated, and the what-if sandbox lets the client test a decision before committing to it, turning what used to be reactive admin into genuine forward planning, all built on a private tool grounded in proper accounting and financial modelling.",
    ],

    services: [
      {
        label: "Custom web application development",
        href: "https://www.officeexperts.com.au/services/by-business-solution/online-solutions",
      },
      {
        label: "Reporting and analytics",
        href: "https://www.excelexperts.com.au/custom-design-and-development",
      },
    ],
  },
];

// ─────────────────────────────────────────────
// Brand lookup — maps the "site" field to the display name
// and canonical domain for that Office Experts Group brand.
// Used on detail pages for the brand tag and schema URLs.
// ─────────────────────────────────────────────
export const siteMeta = {
  office: {
    name: "Office Experts Group",
    domain: "https://www.officeexperts.com.au",
  },
  word: {
    name: "Word Experts",
    domain: "https://www.wordexperts.com.au",
  },
  excel: {
    name: "Excel Experts",
    domain: "https://www.excelexperts.com.au",
  },
  powerplatform: {
    name: "Power Platform Experts",
    domain: "https://www.powerplatformexperts.com.au",
  },
  access: {
    name: "Access Experts",
    domain: "https://www.accessexperts.com.au",
  },
};

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
