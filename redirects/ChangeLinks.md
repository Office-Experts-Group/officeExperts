## CheckList of Redirects

## CheckList of Redirects

**officeexperts.com.au: URL flattening, redirect changes and link checks**
Prepared 20 October 2026 from `structure.md` (19 Oct), `redirects/` (`internalRedirects.js`, `locationRedirects.js`, `sisterDomainRedirects.js`), `navigationData.js`, `next-sitemap.config.js` and the cleanup/Next 16 checklist.

This file covers **officeexperts only**. Where a change on officeexperts affects a sister domain (links, redirects or canonicals pointing into officeexperts), it is listed in Section 5 so it can be checked on that domain.

---

### Rules for every change in this file

1. **One hop only.** Every redirect points at the final URL. If a destination moves later, repoint every rule that targets it in the same commit.
2. **No trailing slashes** in redirect sources or internal links. `trailingSlash` is off, so `/foo/` costs an extra 308 before any redirect runs.
3. **A redirect and its link updates ship together.** Don't merge a move without the internal link fixes, or the site links to its own redirects.
4. **Sister-domain loops.** A sister-domain section in `sisterDomainRedirects.js` is removed or repointed in the **same deploy** that turns on that domain's redirects to officeexperts.
5. **Folder rule:** `/services/*` is flat. **`/services/microsoft-office-365` is the only service hub that keeps child pages.** (Product folders still pending a wave, such as `microsoft-word`, `microsoft-excel`, `microsoft-access` and `microsoft-power-platform`, are dealt with in that wave. See Section 7.)

Legend: ☐ to do · ✅ already in `redirects/` · ⏳ future wave

---

## 1. Service pages: what moves now

### 1.1 Flatten `/services/by-business-solution/*`

Move each folder up one level with `git mv`, then update `metadata.alternates.canonical`, `openGraph.url` and the JSON-LD (BreadcrumbList, Service `url`).

| ☐   | Old URL                                                                      | New URL                                                 | Redirect | Links to update                                       |
| --- | ---------------------------------------------------------------------------- | ------------------------------------------------------- | -------- | ----------------------------------------------------- |
| ☐   | `/services/by-business-solution/3rd-party-application-or-office-integration` | `/services/3rd-party-application-or-office-integration` | ☐ add    | nav "3rd Party App Integration"                       |
| ☐   | `/services/by-business-solution/add-in-creation`                             | `/services/add-in-creation`                             | ☐ add    | nav "Add-in Creation" ⏳ Excel wave merges this (1.6) |
| ☐   | `/services/by-business-solution/cloud-based-solutions-with-azure`            | `/services/cloud-based-solutions-with-azure`            | ☐ add    | nav "Azure Cloud Solutions"                           |
| ☐   | `/services/by-business-solution/custom-office-solutions`                     | `/services/custom-office-solutions`                     | ☐ add    | nav "Outlook"                                         |
| ☐   | `/services/by-business-solution/dashboards`                                  | `/services/dashboards`                                  | ☐ add    | nav "Dashboards" (Excel column)                       |
| ☐   | `/services/by-business-solution/database-development-and-solutions`          | `/services/database-development-and-solutions`          | ☐ add    | nav "Database Development Solutions"                  |
| ☐   | `/services/by-business-solution/online-solutions`                            | `/services/online-solutions`                            | ☐ add    | nav "Online Solutions"                                |
| ☐   | `/services/by-business-solution/sql-server-and-access-integration`           | `/services/sql-server-and-access-integration`           | ☐ add    | nav "SQL Server"                                      |
| ☐   | `/services/by-business-solution/vba-macro-development`                       | `/services/vba-macro-development`                       | ☐ add    | nav "VBA & Macro Development"                         |

Before moving: check `app/services/by-business-solution/layout.js` and `(components)` (`PageSegmentMain`, `SolutionsCarousel`, `SolutionsCarouselReverse`). Any child that imports `../(components)/…` breaks after the move. Move shared files to `app/services/(components)/` or `@/components/`.

### 1.2 Hub pages that duplicate `/services` (cannibalisation)

These pages list services the way `/services` does. Each redirects to `/services` and its page file is deleted.

| ☐   | URL                                                                | Redirect                                                | Page file          | Notes                                                   |
| --- | ------------------------------------------------------------------ | ------------------------------------------------------- | ------------------ | ------------------------------------------------------- |
| ☐   | `/services/by-business-solution`                                   | ✅ → `/services`                                        | ☐ delete `page.js` | Already in the noindex/different-canonical list         |
| ☐   | `/by-business-solution`                                            | ✅ → `/services`                                        | n/a                | Legacy root URL                                         |
| ☐   | `/services/by-office-product`                                      | ✅ → `/services`                                        | ☐ delete folder    |                                                         |
| ☐   | `/services/microsoft-office`                                       | ✅ → `/services` (D1 rule)                              | ☐ delete `page.js` | **Still in the live sitemap** until the file is deleted |
| ☐   | `/services/by-business-solution/office-and-sql-server-integration` | ✅ → `sql-server-and-access-integration` (repoint, 1.5) | ☐ delete folder    | Dead file                                               |

### 1.3 `microsoft-office` children

| ☐   | Old URL                                             | New URL                            | Redirect | Links to update                                        |
| --- | --------------------------------------------------- | ---------------------------------- | -------- | ------------------------------------------------------ |
| ☐   | `/services/microsoft-office/upgrades-and-migration` | `/services/upgrades-and-migration` | ☐ add    | nav "Upgrades and Migration" (Microsoft Office column) |

### 1.4 PowerPoint consolidation

The hub `/services/microsoft-powerpoint` stays as **one** page. Unique child content moves into it under anchors.

| ☐   | Old URL                                                                        | New URL                           | Redirect |
| --- | ------------------------------------------------------------------------------ | --------------------------------- | -------- |
| ☐   | `/services/microsoft-powerpoint/custom-powerpoint-templates-and-presentations` | `/services/microsoft-powerpoint`  | ☐ add    |
| ☐   | `/services/microsoft-powerpoint/existing-presentation-redesign`                | `/services/microsoft-powerpoint`  | ☐ add    |
| ☐   | `/services/microsoft-powerpoint/powerpoint-user-training-and-assistance`       | `/services/microsoft-powerpoint`  | ☐ add    |
| ☐   | `/services/microsoft-powerpoint/automate-presentations-with-vba`               | `/services/vba-macro-development` | ☐ add    |

Redirect destinations can't carry `#anchors` usefully for Google. Use the anchors (`#templates`, `#redesign`, `#training`) for **internal links** only, such as the PowerPoint section in `servicesData.js` and `app/services/microsoft-powerpoint/(components)/Solutions.jsx` and `SolutionsCarousel.jsx`.

### 1.5 Business process automation leaves the 365 folder

| ☐   | Old URL                                                      | New URL                                 | Redirect | Links to update                                                                                                                                                       |
| --- | ------------------------------------------------------------ | --------------------------------------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ☐   | `/services/microsoft-office-365/business-process-automation` | `/services/business-process-automation` | ☐ add    | nav "Business Process Automation", 365 hub child list (`Ms365.jsx`, `SolutionsCarousel.jsx` in `microsoft-office-365/(components)`), AI pages, `/services` AI section |

### 1.6 Existing redirects to repoint (otherwise they become chains)

Change these **in the same commit as 1.1**.

| ☐   | Source                                                                                        | Current destination                                                 | New destination                                |
| --- | --------------------------------------------------------------------------------------------- | ------------------------------------------------------------------- | ---------------------------------------------- |
| ☐   | `/services/microsoft-office/services/by-business-solution/database-development-and-solutions` | `/services/by-business-solution/database-development-and-solutions` | `/services/database-development-and-solutions` |
| ☐   | `/services/office-and-sql-server-integration`                                                 | `/services/by-business-solution/sql-server-and-access-integration`  | `/services/sql-server-and-access-integration`  |
| ☐   | `/services/by-business-solution/office-and-sql-server-integration`                            | `/services/by-business-solution/sql-server-and-access-integration`  | `/services/sql-server-and-access-integration`  |

**Future repoints already known** (write them down now so they aren't missed):

| ⏳  | When                                                                      | Rules to repoint                                                                                                                                                                                                                                                                  |
| --- | ------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ⏳  | Excel wave, if `add-in-creation` merges into the Excel add-in page        | `/services/by-business-solution/add-in-creation` **and** `/services/add-in-creation` → final Excel URL                                                                                                                                                                            |
| ⏳  | When `custom-office-solutions` gets its merge target                      | `/services/by-business-solution/custom-office-solutions` **and** `/services/custom-office-solutions` → target                                                                                                                                                                     |
| ⏳  | Excel wave                                                                | `/vba-macro-development` and `/services/microsoft-excel/vba-macro-development` currently go to excelexperts. Decide whether they land on `/services/vba-macro-development` (cross-product) or a separate Excel VBA page. Two VBA pages on one domain will compete (see Section 7) |
| ⏳  | If `/microsoft-support-and-training-australia` is merged or renamed (3.4) | `/services/microsoft-office-365/exchange-online-setup-and-support` and `/services/microsoft-office-365/support-and-managed-services`                                                                                                                                              |

### 1.7 The exception: `/services/microsoft-office-365` keeps its children

| Child                                                               | Status                                                                     |
| ------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `app-and-custom-development`                                        | Stays                                                                      |
| `cloud-backup-with-onedrive`                                        | Stays                                                                      |
| `copilot`                                                           | Stays                                                                      |
| `remote-data-gathering-from-any-device`                             | Stays                                                                      |
| `business-process-automation`                                       | Moves (1.5)                                                                |
| `office-365-implementation`, `office-365-migration`                 | ✅ → `/services/microsoft-office-365`. ☐ delete dead page files            |
| `exchange-online-setup-and-support`, `support-and-managed-services` | ✅ → `/microsoft-support-and-training-australia`. ☐ delete dead page files |

### 1.8 Already flat (no change)

`/services/activex-vbscript-migration`, `ai-agent-development`, `ai-email-triage`, `business-analysis`, `microsoft-dot-net`, `microsoft-publisher`, `power-pivot`, `power-query`. `/services/microsoft-vbscript` ✅ → `activex-vbscript-migration` (☐ delete dead page file).

---

## 2. Internal links on officeexperts

### 2.1 Known broken or redirecting links in `navigationData.js`

These are visible in the file today. Fix them in the same commit as the matching move.

| ☐   | Label                          | Current `href`                                                               | Problem                            | Change to                                                              |
| --- | ------------------------------ | ---------------------------------------------------------------------------- | ---------------------------------- | ---------------------------------------------------------------------- |
| ☐   | Sydney                         | `/word-and-powerpoint-experts-sydney/`                                       | Trailing slash + redirect = 2 hops | `/microsoft-consultants-sydney`                                        |
| ☐   | Wollongong                     | `/office-excel-access-and-365-experts-wollongong/`                           | Trailing slash = extra hop         | `/office-excel-access-and-365-experts-wollongong` (hub later, 3.3)     |
| ☐   | Central Coast                  | `/excel-and-access-experts-central-coast-nsw/`                               | Trailing slash                     | `/excel-and-access-experts-central-coast-nsw` (hub later)              |
| ☐   | Northern Rivers                | `/office-excel-access-and-365-experts-northern-rivers-nsw/`                  | Trailing slash                     | `/office-excel-access-and-365-experts-northern-rivers-nsw` (hub later) |
| ☐   | Richmond                       | `/office-and-office-365-experts-richmond`                                    | Redirect                           | `/excel-and-access-experts-richmond` (see 3.5)                         |
| ☐   | VBA & Macro Development        | `/services/by-business-solution/vba-macro-development`                       | Moves                              | `/services/vba-macro-development`                                      |
| ☐   | Database Development Solutions | `/services/by-business-solution/database-development-and-solutions`          | Moves                              | `/services/database-development-and-solutions`                         |
| ☐   | 3rd Party App Integration      | `/services/by-business-solution/3rd-party-application-or-office-integration` | Moves                              | `/services/3rd-party-application-or-office-integration`                |
| ☐   | Online Solutions               | `/services/by-business-solution/online-solutions`                            | Moves                              | `/services/online-solutions`                                           |
| ☐   | Upgrades and Migration         | `/services/microsoft-office/upgrades-and-migration`                          | Moves                              | `/services/upgrades-and-migration`                                     |
| ☐   | Add-in Creation                | `/services/by-business-solution/add-in-creation`                             | Moves                              | `/services/add-in-creation`                                            |
| ☐   | Dashboards (Excel column)      | `/services/by-business-solution/dashboards`                                  | Moves                              | `/services/dashboards`                                                 |
| ☐   | Business Process Automation    | `/services/microsoft-office-365/business-process-automation`                 | Moves                              | `/services/business-process-automation`                                |
| ☐   | Azure Cloud Solutions          | `/services/by-business-solution/cloud-based-solutions-with-azure`            | Moves                              | `/services/cloud-based-solutions-with-azure`                           |
| ☐   | SQL Server                     | `/services/by-business-solution/sql-server-and-access-integration`           | Moves                              | `/services/sql-server-and-access-integration`                          |
| ☐   | Outlook                        | `/services/by-business-solution/custom-office-solutions`                     | Moves                              | `/services/custom-office-solutions`                                    |

### 2.2 Search terms (whole repo)

Exclude `redirects/**, node_modules/**, .next/**`. After this branch, each should return **0 results** outside `redirects/`.

| ☐   | Search for                                                                                                               | Why                                                                            |
| --- | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| ☐   | `by-business-solution`                                                                                                   | Flattened                                                                      |
| ☐   | `by-office-product`                                                                                                      | Removed                                                                        |
| ☐   | `microsoft-office/`                                                                                                      | Child moved; hub removed                                                       |
| ☐   | `"/services/microsoft-office"` and `` `/services/microsoft-office` `` (exact, closing quote)                             | Obsolete hub (won't match `-365`)                                              |
| ☐   | `microsoft-powerpoint/`                                                                                                  | Children merged                                                                |
| ☐   | `microsoft-office-365/business-process-automation`                                                                       | Moved                                                                          |
| ☐   | `office-365-implementation`, `office-365-migration`, `exchange-online-setup-and-support`, `support-and-managed-services` | Already redirected                                                             |
| ☐   | `microsoft-vbscript`                                                                                                     | Already redirected                                                             |
| ☐   | `office-and-sql-server-integration`                                                                                      | Already redirected                                                             |
| ☐   | Regex `href=\{?["'\`]/[^"'\`]\*/["'\`]`                                                                                  | Internal links ending in `/`                                                   |
| ☐   | `word-and-powerpoint-experts-(sydney\|melbourne\|canberra\|perth\|richmond)`                                             | Redirected location pages                                                      |
| ☐   | `office-and-office-365-experts-(sydney\|melbourne\|canberra\|gold-coast\|richmond)`                                      | Redirected location pages                                                      |
| ☐   | `excel-and-access-experts-(sydney\|melbourne)`                                                                           | Redirected location pages                                                      |
| ☐   | `office-excel-access-and-365-(experts\|consultants)-(melbourne\|perth\|brisbane)`                                        | Redirected location pages                                                      |
| ☐   | `excel-consultants-`                                                                                                     | Every one of these is a redirect                                               |
| ☐   | `https://www.officeexperts.com.au/`                                                                                      | Absolute self-links: make relative, then re-check them with the searches above |

### 2.3 Files that hold links (check each one)

| ☐   | File or folder                                                                                                                     | What to look at                                                    |
| --- | ---------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ |
| ☐   | `navigationData.js`                                                                                                                | Section 2.1                                                        |
| ☐   | `app/(components)/FooterServicesSection.jsx`, `components/FooterLocationsSection.jsx`                                              | Footer service and city links                                      |
| ☐   | `components/ServicesDropdown.jsx`, `LocationsDropdown.jsx`, `components/MobileNavigation/*`                                        | Confirm they read `navigationData.js` and have no hard-coded links |
| ☐   | `app/services/servicesData.js`, `app/services/(components)/*Section.jsx`, `ServiceLink.jsx`                                        | `/services` hub cards (custom dev, PowerPoint, 365, AI)            |
| ☐   | `app/page.js`, `app/(components)/Services.jsx`, `SolutionsCarousel.jsx`, `CTAMain*.jsx`                                            | Home page                                                          |
| ☐   | `components/RelatedLinks.jsx` + the `RelatedLinks` props in each `page.js`                                                         | Related services                                                   |
| ☐   | `app/services/microsoft-office-365/(components)/Ms365.jsx`, `SolutionsCarousel.jsx`, `Pagesegmentfinal.jsx`                        | 365 hub child list (remove BPA)                                    |
| ☐   | `app/services/microsoft-powerpoint/(components)/Solutions.jsx`, `SolutionsCarousel.jsx`                                            | Point at anchors                                                   |
| ☐   | City hub components: `*Services.jsx`, `*Why.jsx`, `*Context.jsx` (Sydney, Melbourne, Canberra, Perth, Brisbane, Cairns)            | Service links, "other platforms" links                             |
| ☐   | `app/microsoft-support-and-training-*/page.js` (14 files)                                                                          | Service and city links                                             |
| ☐   | Old-pattern location pages still live (3.1) and `app/(components)/LocationPages.jsx`, `LocationPromos.jsx`, `ServicesLocation.jsx` | Service and city links                                             |
| ☐   | `app/locations/page.js`, `app/locations/(components)/LocationGroups.jsx`                                                           | City list                                                          |
| ☐   | `app/case-studies/caseStudies.js`, `caseStudyCardCopy.js`                                                                          | Related service links                                              |
| ☐   | `app/blog/blogPosts.js` and each `app/blog/*/page.js` body                                                                         | In-article links                                                   |
| ☐   | `faqs/*.js` and `faqs/*Schema.js`, `utils/schemaGenerators.js`                                                                     | FAQ answers and schema `url` fields                                |
| ☐   | `components/Promo.jsx`, `ExpertsAwait.jsx`, `ServicePageCards.jsx`, `ServicesCard.jsx`                                             | Shared CTAs and cards                                              |
| ☐   | `utils/emailSignature.js`, `utils/emailService.js`                                                                                 | Links inside outgoing emails                                       |
| ☐   | `README.md`, `internal-linking.md`, `sitemaps.md`, project `sitemaps.md`                                                           | Docs used for future linking suggestions                           |

### 2.4 Automated check

| ☐   | Step                                                                                                                                                                                                   |
| --- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| ☐   | Run `scripts/checkRedirects.js`: no chains, no missing destinations, no trailing slashes                                                                                                               |
| ☐   | Re-run `mapStructure.mjs` then `auditUsage.mjs`. In `links.csv`: 0 **Redirected** rows for internal targets, 0 **No matching page** rows. Redirected rows pointing at sister domains are listed in 5.3 |

---

## 3. Location pages

### 3.1 Current state by city

| City                | Main page today                                                                     | Old-pattern pages still **live**                                                                  | Old URLs already redirecting                                                                      |
| ------------------- | ----------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| Sydney              | `/microsoft-consultants-sydney`                                                     | none                                                                                              | 3 → hub ✅                                                                                        |
| Melbourne           | `/microsoft-consultants-melbourne`                                                  | none                                                                                              | 5 → hub ✅                                                                                        |
| Canberra            | `/microsoft-consultants-canberra`                                                   | none                                                                                              | 3 → hub ✅                                                                                        |
| Perth               | `/microsoft-consultants-perth`                                                      | none                                                                                              | 4 → hub ✅                                                                                        |
| Brisbane            | `/microsoft-consultants-brisbane`                                                   | none                                                                                              | 2 → hub ✅                                                                                        |
| Cairns              | `/microsoft-consultants-cairns`                                                     | none                                                                                              | none                                                                                              |
| Adelaide            | `/microsoft-support-and-training-adelaide`                                          | `/office-excel-access-and-365-experts-adelaide`                                                   | `/excel-consultants-adelaide` → support page ✅                                                   |
| Darwin              | `/microsoft-support-and-training-darwin`                                            | `/office-excel-access-and-365-experts-darwin`                                                     | `/excel-consultants-darwin` → support page ✅                                                     |
| Gold Coast          | `/microsoft-support-and-training-gold-coast`                                        | `/word-and-powerpoint-experts-gold-coast`                                                         | `/excel-consultants-gold-coast`, `/office-and-office-365-experts-gold-coast` → support page ✅    |
| Wollongong          | `/microsoft-support-and-training-wollongong`                                        | `/office-excel-access-and-365-experts-wollongong`                                                 | `/excel-consultants-wollongong` → support page ✅                                                 |
| Central Coast NSW   | `/microsoft-support-and-training-central-coast-nsw`                                 | `/excel-and-access-experts-central-coast-nsw`, `/office-and-office-365-experts-central-coast-nsw` | `/excel-consultants-central-coast-nsw`, `/office-consultants-central-coast-nsw` → support page ✅ |
| Northern Rivers NSW | `/microsoft-support-and-training-northern-rivers-nsw`                               | `/office-excel-access-and-365-experts-northern-rivers-nsw`                                        | `/excel-consultants-northern-rivers-nsw` → support page ✅                                        |
| Richmond            | `/excel-and-access-experts-richmond` and `/microsoft-support-and-training-richmond` | both stay                                                                                         | 3 rules (3.5)                                                                                     |
| Australia-wide      | `/microsoft-support-and-training-australia`                                         | n/a                                                                                               | 2 Office 365 rules → here ✅                                                                      |

### 3.2 Now (this branch)

| ☐   | Change                                                                                                                                                                     |
| --- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ☐   | Fix the nav location links in 2.1 (Sydney, Richmond, trailing slashes)                                                                                                     |
| ☐   | Delete the dead old-pattern page files for the 5 built cities and Richmond (checklist 5.7). Their redirects stay                                                           |
| ☐   | In each `microsoft-support-and-training-{city}` page for the 5 built cities, check its "nearby" or city links point at `/microsoft-consultants-{city}`, not an old pattern |

### 3.3 Future: when each new city hub goes live

Do every row for a city **in one commit**. Don't put a live page into `OLD_URLS_BY_CITY` before its hub exists, because `destinationFor()` would send it to the support page and take a live page down.

| ⏳  | City hub                                     | `locationRedirects.js`                                                                                  | New redirects (live pages → hub)                                                                              | Links and sitemap                                                       |
| --- | -------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| ⏳  | `/microsoft-consultants-adelaide`            | Add `adelaide` to `HUBS_BUILT` (flips `/excel-consultants-adelaide`, but see the Excel wave note below) | `/office-excel-access-and-365-experts-adelaide` → hub                                                         | Nav "Adelaide", footer, `/locations`; sitemap: add hub, remove old page |
| ⏳  | `/microsoft-consultants-darwin`              | Add `darwin` (flips `/excel-consultants-darwin`)                                                        | `/office-excel-access-and-365-experts-darwin` → hub                                                           | Nav "Darwin", footer, `/locations`, sitemap                             |
| ⏳  | `/microsoft-consultants-gold-coast`          | Add `gold-coast` (flips 2 rules)                                                                        | `/word-and-powerpoint-experts-gold-coast` → hub                                                               | Nav "Gold Coast", footer, `/locations`, sitemap                         |
| ⏳  | `/microsoft-consultants-wollongong`          | Add `wollongong` (flips 1 rule)                                                                         | `/office-excel-access-and-365-experts-wollongong` → hub                                                       | Nav "Wollongong", footer, `/locations`, sitemap                         |
| ⏳  | `/microsoft-consultants-central-coast-nsw`   | Add `central-coast-nsw` (flips 2 rules)                                                                 | `/excel-and-access-experts-central-coast-nsw` → hub, `/office-and-office-365-experts-central-coast-nsw` → hub | Nav "Central Coast", footer, `/locations`, sitemap                      |
| ⏳  | `/microsoft-consultants-northern-rivers-nsw` | Add `northern-rivers-nsw` (flips 1 rule)                                                                | `/office-excel-access-and-365-experts-northern-rivers-nsw` → hub                                              | Nav "Northern Rivers", footer, `/locations`, sitemap                    |

For each hub, also:

- ☐ Search the repo for the city's old slugs (2.2) and repoint links to the hub.
- ☐ Search the four sister repos for the same slugs (5.1).
- ☐ Add the hub to the city's support page as a link, and decide the support page using 3.4.

**Excel wave conflict:** `/excel-consultants-{melbourne,perth,adelaide}` are planned as Excel product-city pages. When that wave builds them, remove those three from `OLD_URLS_BY_CITY` in the same deploy, or the redirect will shadow the new pages.

### 3.4 Future: `microsoft-support-and-training-{city}` decision (pending research)

| ⏳  | If the support page is **merged** into the hub                                                                            | If it is **kept**                              |
| --- | ------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------- |
|     | Add `/microsoft-support-and-training-{city}` → `/microsoft-consultants-{city}`                                            | Separate title and H1 (training vs consulting) |
|     | Repoint any rule whose destination is that support page (Richmond rules and unbuilt-city rules in `locationRedirects.js`) | Hub and support page link to each other        |
|     | Remove it from nav, footer, `/locations` and the sitemap                                                                  | No redirect changes                            |
|     | Search sister repos for the URL (5.1)                                                                                     |                                                |
|     | If `/microsoft-support-and-training-australia` merges or moves, repoint the 2 Office 365 rules (1.6)                      |                                                |

### 3.5 Richmond

The redirects aren't consistent. Two old URLs go to `/microsoft-support-and-training-richmond` and one goes to `/excel-and-access-experts-richmond`.

- ☐ Pick one primary Richmond page.
- ☐ Point all three Richmond rules and the nav "Richmond" link at it.
- ☐ Keep the other page live, linked from the primary page.

---

## 4. Sitemap, schema and tracking

| ☐   | Item                                               | Change                                                                                                                                                                  |
| --- | -------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ☐   | `next-sitemap.config.js` (until Phase 7)           | No list edits needed for the flattened pages: they appear automatically. Confirm the deleted pages (`/services/microsoft-office`, PowerPoint children) no longer appear |
| ☐   | `app/sitemap.js` (Phase 7)                         | Use the new URLs; drop every redirected URL                                                                                                                             |
| ☐   | Breadcrumb JSON-LD                                 | Moved pages: Home → Services → {Page}. No `by-business-solution` or `microsoft-office` level                                                                            |
| ☐   | `Service` / `WebPage` / `FAQPage` `url` fields     | New URLs                                                                                                                                                                |
| ☐   | Google Ads final URLs and sitelinks                | Search for `by-business-solution`, `microsoft-office/`, `microsoft-powerpoint/`, `business-process-automation`, old location slugs. Update on deploy day                |
| ☐   | GTM triggers                                       | Page Path conditions using the old paths                                                                                                                                |
| ☐   | Google Business Profile, LinkedIn, email templates | Links to moved service or location URLs                                                                                                                                 |
| ☐   | Search Console after deploy                        | Resubmit sitemap; request indexing for each new URL in 1.1, 1.3, 1.4 and 1.5                                                                                            |

---

## 5. Cross-domain checks (sister sites)

Run these in each sister repo (wordexperts, excelexperts, powerplatformexperts, accessexperts) **before** this branch deploys. The search is for links into officeexperts, so search for `officeexperts.com.au` and the base URL variable (the sister copies of `navigationData.js` likely have an `OFFICE_EXPERTS_URL` constant).

### 5.1 Sister-site links to officeexperts URLs that change

A link to a moved URL still works via 308, but it's a wasted hop and a weaker signal. Update the link to the final URL.

| ☐   | Search in sister repos                                                                                                                                                                       | Replace with                                                          | WE  | EE  | PPE | AE  |
| --- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------- | --- | --- | --- | --- |
| ☐   | `by-business-solution/`                                                                                                                                                                      | `/services/{slug}` (1.1)                                              | ☐   | ☐   | ☐   | ☐   |
| ☐   | `services/by-office-product`, `services/microsoft-office"`                                                                                                                                   | `/services`                                                           | ☐   | ☐   | ☐   | ☐   |
| ☐   | `microsoft-office/upgrades-and-migration`                                                                                                                                                    | `/services/upgrades-and-migration`                                    | ☐   | ☐   | ☐   | ☐   |
| ☐   | `microsoft-powerpoint/`                                                                                                                                                                      | `/services/microsoft-powerpoint` or `/services/vba-macro-development` | ☐   | ☐   | ☐   | ☐   |
| ☐   | `microsoft-office-365/business-process-automation`                                                                                                                                           | `/services/business-process-automation`                               | ☐   | ☐   | ☐   | ☐   |
| ☐   | `office-365-implementation`, `office-365-migration`, `exchange-online-setup-and-support`, `support-and-managed-services`, `microsoft-vbscript`                                               | Their current destinations                                            | ☐   | ☐   | ☐   | ☐   |
| ☐   | Old location patterns (`word-and-powerpoint-experts-`, `office-and-office-365-experts-`, `excel-and-access-experts-`, `office-excel-access-and-365-`, `excel-consultants-`) on officeexperts | Current city page (3.1)                                               | ☐   | ☐   | ☐   | ☐   |
| ☐   | officeexperts URLs with a trailing `/`                                                                                                                                                       | Same URL without the slash                                            | ☐   | ☐   | ☐   | ☐   |

### 5.2 Sister-site redirects that point into officeexperts

If a sister site's `next.config.js` (or its own `redirects/`) sends any URL to an officeexperts URL that this branch moves, that becomes a cross-domain chain.

| ☐   | Check                                                                                                                                             | WE  | EE  | PPE | AE  |
| --- | ------------------------------------------------------------------------------------------------------------------------------------------------- | --- | --- | --- | --- |
| ☐   | Search redirect destinations for `officeexperts.com.au`                                                                                           | ☐   | ☐   | ☐   | ☐   |
| ☐   | Repoint any that hit a URL in Sections 1 or 3 to its final URL                                                                                    | ☐   | ☐   | ☐   | ☐   |
| ☐   | Confirm none point at an officeexperts URL that redirects back to the same sister domain (for example `/services/microsoft-word/*` → wordexperts) | ☐   | ☐   | ☐   | ☐   |

### 5.3 officeexperts links to sister-only pages (no officeexperts equivalent yet)

`navigationData.js` links to these sister pages. They work today, but when that sister domain redirects to officeexperts, each needs an officeexperts destination **before** the wave goes live, or the nav link (and the sister redirect) will land on a 404.

| ⏳ Wave           | Sister URL linked from officeexperts nav                                                  | Needs officeexperts destination                                |
| ----------------- | ----------------------------------------------------------------------------------------- | -------------------------------------------------------------- |
| ⏳ Word (next)    | `wordexperts.com.au/document-rebranding-services`                                         | ☐                                                              |
| ⏳ Word           | `wordexperts.com.au/brand-template`                                                       | ☐                                                              |
| ⏳ Word           | `wordexperts.com.au/google-docs-to-word-migration`                                        | ☐                                                              |
| ⏳ Word           | `wordexperts.com.au/microsoft-word-api-integrations`                                      | ☐                                                              |
| ⏳ Word           | `wordexperts.com.au/mail-merge`                                                           | ☐                                                              |
| ⏳ Word           | `wordexperts.com.au/copilot-and-ai-templates` (in "Copilot and AI")                       | ☐                                                              |
| ⏳ Access         | `accessexperts.com.au/integrate-access-with-power-bi`                                     | ☐                                                              |
| ⏳ Access         | `accessexperts.com.au/access-database-optimisation-and-repair`                            | ☐                                                              |
| ⏳ Access         | `accessexperts.com.au/sql-server-backend-business-solutions`                              | ☐ May merge with `/services/sql-server-and-access-integration` |
| ⏳ Power Platform | `…/services/microsoft-power-platform/ai-integrations` (linked twice)                      | ☐                                                              |
| ⏳ Power Platform | `powerplatformexperts.com.au/microsoft-fabric`                                            | ☐                                                              |
| ⏳ Power Platform | `powerplatformexperts.com.au/power-bi-support`                                            | ☐                                                              |
| ⏳ Power Platform | `powerplatformexperts.com.au/power-apps-support`                                          | ☐                                                              |
| ⏳ Power Platform | `powerplatformexperts.com.au/power-bi-data-integration`                                   | ☐                                                              |
| ⏳ Power Platform | `powerplatformexperts.com.au/excel-to-power-bi-migration`                                 | ☐                                                              |
| ⏳ Power Platform | `powerplatformexperts.com.au/sharepoint-consulting-and-development` (in "Other Services") | ☐                                                              |

Each wave should also:

- ☐ Export the sister domain's full URL list (its sitemap plus its Search Console Pages export), so every indexed URL gets a one-hop officeexperts destination, not just the ones in the nav.
- ☐ Check that every sister URL already used as a **destination** in `sisterDomainRedirects.js` returns 200 today (`curl.exe -sI`). A dead destination there is a 404 now.

### 5.4 Cross-domain canonicals

| ☐   | Page on officeexperts                                                                                                                                                        | Canonical today                                                             | When to change                                        |
| --- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------- | ----------------------------------------------------- |
| ⏳  | `/blog/fields-and-repeating-data-in-word`, `/blog/ultimate-guide-to-word-templates`, `/blog/word-templates-for-legal-firms`                                                  | wordexperts                                                                 | Word wave: self-canonical, add to sitemap             |
| ⏳  | `/blog/export-to-pdf-in-power-apps`, `/blog/file-attachments-in-power-apps`, `/blog/power-apps-pdf-function`, `/blog/power-apps-with-sql-database`, `/blog/sharepoint-lists` | powerplatformexperts                                                        | Power Platform wave                                   |
| ⏳  | `/services/microsoft-power-platform` and 4 children                                                                                                                          | powerplatformexperts                                                        | Power Platform wave (or now, if D5 = yes)             |
| ☐   | Any sister page with a canonical pointing **at** officeexperts                                                                                                               | Check each sister repo for `officeexperts.com.au` in `alternates.canonical` | Now: make sure none point at a URL in Sections 1 or 3 |

A canonical must never point at a URL that redirects. When a sister domain starts redirecting to officeexperts, flip the matching canonicals on officeexperts to self in the same deploy.

### 5.5 Loop prevention per wave

| ⏳ Wave           | Remove or repoint in `sisterDomainRedirects.js`                                                                                                                                 | Same deploy as                        |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------- |
| ⏳ Word           | `word` block (29 rules incl. `/blog/convert-canva-to-word`). Bare legacy paths (`/training`, `/accessibility`, `/upgrades-and-migration` …) → `/services/microsoft-word/{slug}` | wordexperts → officeexperts redirects |
| ⏳ Excel          | `excel` block, incl. 4 blog rules and `/services/custom-design-and-development`                                                                                                 | excelexperts → officeexperts          |
| ⏳ Access         | `access` block                                                                                                                                                                  | accessexperts → officeexperts         |
| ⏳ Power Platform | `/services/microsoft-power-bi`                                                                                                                                                  | powerplatformexperts → officeexperts  |

Also flip that wave's nav column in `navigationData.js` from the sister base URL to officeexperts paths in the same deploy.

---

## 6. Verification

Run against `npm run start` locally and then the Vercel preview (logged-in browser if Deployment Protection is on).

**One-hop check (PowerShell, `curl.exe`):** prints status, redirect count and final URL. `num_redirects` must be `1` for every old URL and `0` for every new URL.

```powershell
$base = "http://localhost:3000"
$urls = @(
  "/services/by-business-solution/dashboards",
  "/services/microsoft-office/upgrades-and-migration",
  "/services/microsoft-powerpoint/existing-presentation-redesign",
  "/services/microsoft-office-365/business-process-automation",
  "/services/office-and-sql-server-integration",
  "/word-and-powerpoint-experts-sydney"
)
foreach ($u in $urls) {
  curl.exe -s -o NUL -L -w "%{http_code} %{num_redirects} %{url_effective}`n" "$base$u"
}
```

| ☐   | Check                                                                      |
| --- | -------------------------------------------------------------------------- |
| ☐   | Every row in 1.1–1.6 returns 308 → new URL in **one** hop                  |
| ☐   | Every new URL returns 200 with `<link rel="canonical">` pointing at itself |
| ☐   | Every URL in 3.1 "Old URLs already redirecting" still resolves in one hop  |
| ☐   | Live location pages in 3.1 return 200                                      |
| ☐   | 5 sister-domain rules per domain still return 308 to a 200 page            |
| ☐   | `/sitemap.xml` has none of the old URLs                                    |
| ☐   | Nav, footer and mobile nav: click every service and location link once     |

---

## 7. Open questions

1. **Product folders.** The plan keeps `/services/microsoft-word/{slug}` (and later Excel, Access and Power Platform) as nested product folders, which matches the sister domains' content 1:1. If "only `microsoft-office-365` stays nested" should also apply to the product folders, the Word wave URLs change before it starts. Confirm before the Word redirects are written.
2. **Two VBA pages.** `/services/vba-macro-development` (cross-product) and the Excel VBA page will both exist after the Excel wave. Decide now whether the Excel one becomes a section of the cross-product page, so the Excel wave redirects can point straight at it.
3. **`custom-office-solutions` (labelled "Outlook" in the nav)** has no final merge target.
4. **Richmond primary page** (3.5).
