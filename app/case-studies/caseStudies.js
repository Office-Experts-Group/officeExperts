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
    slug: "kula-rdao-application-ai-review-workflow",
    client: "Kula",
    industry: "Investment",
    site: "powerplatform",
    title:
      "Cutting a 6-7 day investment review down to 90 minutes with an AI agent workflow",
    summary:
      "Kula finds remote companies globally who may struggle to get investment, then reviews each one against KYC, compliance, legal and financial criteria before deciding whether to invest. That review relied on one person manually researching every applicant and cross-checking Kula's own policy, taking six to seven days per application. We built an AI agentic workflow that pushes each application and its supporting documents through a series of skilled agents, producing a detailed, referenced, drillable review in around 90 minutes.",
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
      "Kula is an investor that finds remote companies around the world that may otherwise struggle to secure investment. Once a target company is identified, that company fills out a detailed application covering its business, the investment it needs, and a wide range of supporting documents.",
      "Reviewing that application properly meant checking it against Kula's own investment policy across several distinct areas, including KYC, compliance, legal and financial due diligence, then researching each applicant company individually to verify what had been submitted.",
      "All of that sat on one person's shoulders. Every application meant six to seven days of manual research, cross-referencing policy documents by hand, and writing up findings, before Kula could even begin deciding whether to invest.",
      "That single-person bottleneck capped how many applications Kula could realistically review at once, and repetitive research was being redone from scratch on every application, with no way to draw on what had already been checked before.",
    ],

    approach: [
      {
        heading: "Mapping the manual review process",
        body: "We worked through Kula's existing review process end to end, capturing exactly what a KYC, compliance, legal and financial reviewer each checked, which parts of Kula's own policy applied, and how the final decision was reached from that research.",
      },
      {
        heading: "Designing the agentic workflow",
        body: "We designed an AI agentic workflow where each application and its supporting documents are pushed through a series of skilled agents, with each agent focused on one review area, KYC, compliance, legal and financial among others, mirroring how Kula's own specialists approached the work.",
      },
      {
        heading: "Grounding agents in research and policy",
        body: "Each agent was built to research the internet for information on the applicant company and check the application against Kula's own investment policy, rather than relying on the application form alone, so findings are backed by evidence rather than assumption.",
      },
      {
        heading: "Building traceable, drillable summaries",
        body: "Individual agent findings are rolled up into a single, readable summary Kula can drill down from, with references built in throughout so any point raised can be traced straight back to its source, whether that's the applicant's own documents or external research.",
      },
      {
        heading: "Connecting the Microsoft 365 and AI stack",
        body: "We built the workflow across Power Automate, Power Apps, Power BI and Power Pages, connecting Kula's application intake through to the agentic review, and brought in OpenAI, Claude and Relevance.ai to run the agents themselves.",
      },
    ],

    outcome: [
      "What used to take one person six to seven days now takes around 90 minutes, with the AI agents working through KYC, compliance, legal, financial and other checks in parallel rather than one reviewer working through each area in sequence.",
      "Reviews are now more detailed and broader than the manual process allowed, with duplicated research eliminated and every finding fully traceable back to its source, rather than resting on one reviewer's notes.",
      "Kula no longer has a capacity ceiling on how many applications it can review at once, and the workflow runs at a lower cost than the manual process it replaced, expected to pay for itself within six months.",
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
    slug: "community-services-excel-consolidation-rebuild",
    client: "Multi-Site Community Services Provider",
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
  {
    slug: "retail-analytics-automated-review-deck-generator",
    client: "Retail Analytics Business",
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
    slug: "private-client-cashflow-forecasting-tool",
    client: "Private Client",
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
