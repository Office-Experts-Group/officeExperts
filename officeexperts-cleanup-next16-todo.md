# officeexperts.com.au: cleanup and Next.js 16 upgrade

**Working checklist for the `cleanup/next16` branch**

Prepared 19 October 2026. This checklist is built from:

- your `routes.md`, the live `sitemap.xml`, `next.config.js`, `next-sitemap.config.js`, `utils/goneUrls.js` and `middleware.js`;
- the `app/services` folder screenshot;
- `globals.scss` and the `/services` hub components in the claude.ai project;
- the 15 October migration plan (`claude/single-domain-migration-seo-plan.md`).

URLs are written as routes (`/services/dashboards`). Folders are written as paths (`app/services/dashboards/`).

---

## How to use this document

- Work through the phases in order. Each phase is a separate commit (or a few), so if a problem appears on the preview you can trace it back to the change that caused it.
- Tick each box as you go. Every phase ends with a **Check** block. Don't start the next phase until the check passes.
- Items marked **(D1)** to **(D7)** depend on a decision in the next section. Decide those first.
- **Rule for the whole branch:** nothing changes for visitors except what this document lists. When something looks wrong but isn't listed, write it in the phase notes and leave it alone.
- **Rule for redirects:** every redirect points straight at the final URL, never at another redirect.

### In scope for this branch

- Upgrade Next.js 14.2 → 16 and React 18 → 19, and clean up `package.json` and `next.config.js`.
- Import `.scss` modules directly, switch `@import` to `@use`, and delete the compiled `.css` and `.css.map` files.
- Move the redirects into a `redirects/` folder, one file per reason, then fix the redirect bugs.
- Restructure URLs:
  - Flatten `/services/by-business-solution/*` and `/services/microsoft-office/*` up one level.
  - Remove `by-office-product`.
  - Consolidate the PowerPoint pages.
  - Move business process automation to `/services/business-process-automation`.
- Delete page files that never render because a redirect catches their URL first.
- Update internal links, navigation and schema.
- Replace `next-sitemap` with the built-in `app/sitemap.js` and `app/robots.js`.
- Remove unused files and tidy the public image folders.

### Out of scope (other documents or branches)

- **The wordexperts migration, which starts tomorrow.** This branch leaves every Word redirect, Word page file and Word blog post alone. See Phase 11.
- **The 6 new city hubs** (Adelaide, Darwin, Gold Coast, Wollongong, Central Coast NSW, Northern Rivers NSW). They need unique content, so this branch only prepares them (Phase 11).
- **Deciding whether to keep or merge the `microsoft-support-and-training-{city}` pages.** This needs research first (Phase 11).
- **Richmond.** Its live pages stay as they are.
- **Moving blog posts.** They move with each domain's wave, keeping `/blog/{slug}`.
- **Content rewrites,** apart from the PowerPoint merge in Phase 5.

---

## Decisions to confirm before starting

| #   | Decision                                                                                                                                                                                                                                                                                | Default if you don't change it                                                                                                                                                                                                                                                                               | Your call |
| --- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------- |
| D1  | **`/services/microsoft-office`.** You said it already redirects to `/services`, but `next.config.js` has no such rule and the live sitemap lists it as a page. Phase 0.3 finds out where the redirect lives, if it exists.                                                              | Add `/services/microsoft-office → /services` to `internalRedirects.js` and delete the page file.                                                                                                                                                                                                             | ☐         |
| D2  | **`NOINDEX_REDIRECTS` and `goneUrls`.** See Appendix A4 and A5. Of the 21 noindex rules: 11 already end on a 404 (they point at `/410` and `/faqs`, which don't exist, or at a missing page), 1 is redundant, and the other 9 forward old WordPress attachment feeds from 2+ years ago. | **Delete all 21 noindex rules.** **Keep `goneUrls`:** it works, costs almost nothing, and returns a proper 410. Remove only the 4 entries that a redirect already catches. If Search Console shows Google still crawling any of the 9 working ones (Phase 0.4), keep those 9 and repoint them at final URLs. | ☐         |
| D3  | **Dead Excel, Access and blog page files** (18 files, listed in 5.7). A redirect to a sister domain catches these URLs first, so they never render.                                                                                                                                     | Delete them now. Git keeps the history, and the redirects stay exactly as they are. The plan builds each wave's pages from the sister-domain content, not these copies.                                                                                                                                      | ☐         |
| D4  | **Public image folders** (Phase 8.5).                                                                                                                                                                                                                                                   | `public/images/shared/`, `public/images/team/`, `public/images/blog/{slug}/`, `public/images/pages/{page}/`. Only move images that are staying: page heroes, team and blog. Leave stock images where they are until the redesign removes them, so you don't move files that are about to be deleted.         | ☐         |
| D5  | **`/services/microsoft-power-platform` cross-domain canonical.** Item P0 #2 in the migration plan is to make it self-canonical "now".                                                                                                                                                   | Not included. It's handled in the Power Platform wave. Tick here if you want it done in this branch (task 6.7).                                                                                                                                                                                              | ☐         |
| D6  | **The `accesss-support` redirect** (typo in both source and destination). It only matches a misspelt URL and sends it to a misspelt address. The real `/services/microsoft-access/access-support` page has no redirect.                                                                 | Delete the typo rule and leave the real page alone until the Access wave.                                                                                                                                                                                                                                    | ☐         |
| D7  | **Where tomorrow's Word work starts from.**                                                                                                                                                                                                                                             | Merge this branch first, or at least finish Phases 1 to 5, then branch the Word work from `cleanup/next16`. That way the Word pages are built on Next 16, direct `.scss` imports and the new `redirects/` files, rather than having to be converted afterwards.                                              | ☐         |

---

## Where this branch departs from the migration plan

Update `claude/single-domain-migration-seo-plan.md` after this branch merges, so the wave tables point at the right URLs.

- [ ] **Wave order.** Word now goes first (the marketing company's request). The plan had Access → Power Platform → Excel → Word, with Word last so its index could finish recovering from the `noindex` incident. Keep an eye on the roughly 30 Word URLs still not indexed when you plan the Word redirects.
- [ ] **`by-business-solution` flattened now,** not "6+ months after the last wave". These sections of the plan target `/services/by-business-solution/...` and change to `/services/{slug}`:
  - §3.2 URL tree
  - §4 B, C, D, G, H, I and R
  - §5 keyword map
  - §8 rows for AE `3rd-party-product-integration` and `sql-server-backend-business-solutions`, and EE `vba-macro-development`
  - §9
- [ ] **`/services/microsoft-office` is obsolete.** The plan merged `custom-office-solutions` into it. Now `custom-office-solutions` moves to `/services/custom-office-solutions`, and its eventual merge target is still to be decided. The upgrades "router" page becomes `/services/upgrades-and-migration`.
- [ ] **PowerPoint consolidated** into `/services/microsoft-powerpoint`, and `automate-presentations-with-vba` merged into `/services/vba-macro-development`. Update the §8 EE rows that redirect legacy PowerPoint paths.
- [ ] **Business process automation** moves to `/services/business-process-automation` (the AI cluster). Update §3.2, §4 O and §5.
- [ ] **Richmond stays.** The plan merged it into Melbourne. Revise the `*-richmond` rows in §6 and §8 for all four sister domains.
- [ ] **`microsoft-support-and-training-{city}`** is pending research. The plan merged these into the city hubs.
- [ ] **Blog: unchanged.** Posts stay at `/blog/{slug}` and move with each wave.

---

## Phase 0: Baseline (on `main`, before branching)

**0.1 Save "before" snapshots.** Keep them outside the repo, e.g. `officeexperts-audit-baseline/`.

- [ ] Run `node scripts/codebaseAudit/mapStructure.mjs` and `node scripts/codebaseAudit/auditUsage.mjs`, then copy the report folder to `officeexperts-audit-baseline/`.
- [ ] Save the live `sitemap.xml` and `robots.txt` (download them from production).
- [ ] Run Lighthouse (mobile) on these pages and save the scores:
  - `/`
  - `/services`
  - `/services/by-business-solution/dashboards`
  - `/microsoft-consultants-melbourne`
  - `/blog`
  - one case study
- [ ] Export Search Console → Pages (last 3 months) for officeexperts.com.au.

**0.2 Check git and package files**

- [ ] `git ls-files package.json package-lock.json` lists both files. If not, commit them to `main` first, in their own commit.
- [ ] Note the current `devDependencies` from `package.json`. Phase 1 needs them, and they weren't in the list you sent.

**0.3 Find every place a redirect is defined (resolves D1)**

- [ ] Check production status codes. On Windows use `curl.exe`, because `curl` in PowerShell is a different command:
  ```
  curl.exe -sI https://www.officeexperts.com.au/services/microsoft-office
  curl.exe -sI https://www.officeexperts.com.au/services/by-business-solution
  curl.exe -sI https://www.officeexperts.com.au/services/microsoft-excel
  ```
  Rules in `next.config.js` with `permanent: true` return **308**. If you see **302 or 307**, that redirect is coming from somewhere else. The plan's live audit recorded 302s on the sister-domain redirects, even though the config says permanent.
- [ ] Search the repo for `redirect(`, `permanentRedirect(` and `NextResponse.redirect`. A `redirect()` call in a page returns 307.
- [ ] Check whether a `vercel.json` exists, and check the Vercel project settings for redirects.
- [ ] Note every redirect found outside `next.config.js`. Each one moves into `redirects/` in Phase 4, so all redirects live in one place.

**0.4 Search Console evidence for D2**

- [ ] Search Console → Settings → Crawl stats → By response → **Not found (404)** and **Other client error (4xx)**: note any example URLs from Appendix A4 or A5 with a crawl date in the last 90 days.
- [ ] Search Console → Indexing → Pages → **Not found (404)**: the same check.
- [ ] Record the outcome in D2. If none have been crawled recently, use the default.

Notes: ..............................................................................................................

---

## Phase 1: Branch, dependencies and the Next.js 16 upgrade

**1.1 Branch**

- [ ] `git switch main && git pull && git switch -c cleanup/next16`

**1.2 Node version**

Next 16 needs Node 20.9 or later, and Node 20 itself reached end of life in April 2026.

- [ ] In `package.json`, delete the `"node": "^18.20.6"` dependency. That is an npm package, not the Node.js runtime Vercel uses.
- [ ] Add `"engines": { "node": "22.x" }`, or `"24.x"` if Vercel offers it. Vercel uses `engines.node` when it's set, so this only takes effect on this branch until you merge.

**1.3 Remove packages you don't need**

- [ ] `fetch`: Node has had a built-in `fetch` since version 18. Search the repo for `from "fetch"` and `require("fetch")`. If nothing uses it, `npm uninstall fetch`.
- [ ] `css-minimizer-webpack-plugin`, if it's in `devDependencies`: `npm uninstall css-minimizer-webpack-plugin`. Its config is removed in 1.5.
- [ ] `next-sitemap`: leave it until Phase 7.
- [ ] `sharp` (optional): Next 15 and later installs it automatically. On Vercel, image optimisation runs on Vercel's side anyway. If you remove it, check in 1.8 that `npm run start` still serves optimised images locally.

**1.4 Run the official upgrade**

- [ ] `npx @next/codemod@canary upgrade latest`. Accept the Next, React 19 and ESLint upgrades and the codemods it offers.
- [ ] `npx @next/codemod@canary next-async-request-api .`. The upgrade command doesn't always run this one.
- [ ] Review the diff. Expect:
  - `next` 16.x and `react`/`react-dom` 19.x;
  - `middleware.js` renamed to `proxy.js`, with the exported function renamed to `proxy`;
  - the `lint` script no longer using `next lint`.
- [ ] Resolve any comments the codemod left, and any `UnsafeUnwrapped` casts.
- [ ] Update `sass`, `prismjs` and `@sendgrid/mail` to their latest versions.

**1.5 `next.config.js` changes**

See Appendix D1 for the finished shape.

- [ ] Remove `swcMinify` and `optimizeFonts`. Both were removed as options in Next 15.
- [ ] Remove the `webpack` function and the `CssMinimizerPlugin` require. Next.js already minifies CSS, and any custom `webpack` config makes Next 16's default Turbopack build fail.
- [ ] Remove `locale: false` from `headers()`. It only applies to the Pages Router's i18n.
- [ ] Merge the two identical header blocks into one `/:path*` block. The first block's pattern is already covered by the second.

**1.6 Security headers: one source of truth**

`next.config.js` and the middleware currently disagree:

| Header           | `next.config.js` (all paths) | Middleware (pages)                          |
| ---------------- | ---------------------------- | ------------------------------------------- |
| X-Frame-Options  | `SAMEORIGIN`                 | `DENY` (`SAMEORIGIN` on `/ccp`)             |
| X-XSS-Protection | `1; mode=block`              | `0` (deliberately disables the old auditor) |

- [ ] Leave page security headers in `proxy.js` (CSP, X-Frame-Options, Permissions-Policy, X-XSS-Protection), because they vary by page.
- [ ] In `next.config.js` keep only the headers that must also reach static files, which skip the proxy: X-Robots-Tag, Strict-Transport-Security, X-Content-Type-Options and Referrer-Policy. Remove X-Frame-Options and X-XSS-Protection from it.

**1.7 Code checks for React 19 and Next 15/16**

Search the whole repo, ignoring `node_modules`, for each item:

| ☐   | Search for                                                                                             | Why                                                                                                                                                                                                     | Fix                                                                                                          |
| --- | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| ☐   | `params` in `app/**/page.js`, `layout.js` and `generateMetadata`, especially `app/case-studies/[slug]` | `params` is now a Promise                                                                                                                                                                               | `const { slug } = await params` (the codemod does most of these)                                             |
| ☐   | `searchParams`, especially the `/case-studies` `?site=` ordering                                       | It's a Promise in server components                                                                                                                                                                     | `await searchParams`. If it's read client-side with `useSearchParams`, make sure it sits inside `<Suspense>` |
| ☐   | `cookies(`, `headers(`, `draftMode(`                                                                   | Now async                                                                                                                                                                                               | `await`                                                                                                      |
| ☐   | `fetch(` in server components and route handlers                                                       | No longer cached by default (Next 15)                                                                                                                                                                   | Add `cache: 'force-cache'` where a response should be static                                                 |
| ☐   | `export async function GET` in `app/**/route.js`                                                       | GET handlers are no longer cached by default                                                                                                                                                            | `export const dynamic = 'force-static'` if it should be static                                               |
| ☐   | `inert="true"` (MeetTheTeamSlider, Testimonials)                                                       | React 19 treats `inert` as a true/false attribute. The string was only needed for React 18                                                                                                              | Change to `inert` or `inert={true}`                                                                          |
| ☐   | `.defaultProps =` on function components                                                               | Removed in React 19                                                                                                                                                                                     | Use default values in the parameter list instead                                                             |
| ☐   | `@next/font`                                                                                           | Package removed                                                                                                                                                                                         | Import from `next/font`                                                                                      |
| ☐   | `next/legacy/image`                                                                                    | Deprecated                                                                                                                                                                                              | `next/image`                                                                                                 |
| ☐   | `quality=` on `<Image>`                                                                                | Only quality 75 is allowed by default from Next 16                                                                                                                                                      | Add the values you use to `images.qualities` in `next.config.js`                                             |
| ☐   | Local image `src` values with a `?`                                                                    | Need `images.localPatterns` from Next 16                                                                                                                                                                | Remove the query string, or add the pattern                                                                  |
| ☐   | `scroll-behavior: smooth` in global CSS                                                                | Next 16 no longer overrides it during navigation                                                                                                                                                        | Add `data-scroll-behavior="smooth"` to `<html>` in `app/layout.js` to keep the old behaviour                 |
| ☐   | `~` at the start of Sass `@import`/`@use` paths                                                        | Turbopack doesn't support it                                                                                                                                                                            | Remove the `~`                                                                                               |
| ☐   | `.svg"` imports                                                                                        | Your `(svgs)` files are JS components (`import { PowerPointIcon } from '../(svgs)/PowerPointIcon'`), so they need no setup. Only a raw `.svg` file used as a React component would need `@svgr/webpack` | Confirm there are none                                                                                       |
| ☐   | `.eslintrc*`                                                                                           | Next 16 uses ESLint flat config                                                                                                                                                                         | Migrate, or keep your current ESLint version (the upgrade guide allows this)                                 |

**1.8 Local build**

- [ ] `npm install`, then `npm run build`. Write down every warning, including Sass deprecation warnings, which are expected until Phase 2.
- [ ] `npm run start` and click through:
  - `/`
  - `/services`
  - one location page
  - one case study
  - `/blog` and one blog post (check code highlighting)
  - `/contact-us` (render only; don't submit)
  - `/ccp` (the payment iframe loads, with no CSP errors in the console)
- [ ] Open the browser console on each page: no hydration errors and no React warnings.

**Check before moving on:** the build passes and the pages above render. Commit: `chore: upgrade to Next.js 16 and React 19`.

Notes:
**Phase 1 status (19 Oct 2026, branch `upgrade`)**

- [x] 1.1 Branch created as `upgrade` (not `cleanup/next16`). Plan: merge to `main`, then branch `migrateWord` from updated `main` (D7).
- [x] 1.2 `engines.node` set to `22.x`. Local Node is 24.11, which only gives an `EBADENGINE` warning. Vercel uses 22.
- [x] 1.3 Removed `node`, `fetch` and `css-minimizer-webpack-plugin`. `sharp` kept for now. `next-sitemap` kept until Phase 7.
- [x] 1.4 Codemods run. Build now reports Next.js 16.4.2 (Turbopack). `middleware.js` → `proxy.js` confirmed (build shows "Proxy (Middleware)").
- [x] 1.5 `next.config.js` cleaned (webpack function, `swcMinify`, `optimizeFonts` removed).
- [ ] 1.6 Security headers: verify `proxy.js` has CSP / X-Frame-Options / Permissions-Policy and `next.config.js` keeps only the four static-file headers.
- [ ] 1.7 React 19 / Next 16 code checks. Done: `ssr: false` in `app/layout.js` moved into `components/ClientOnlyWidgets.js`. Still to review: `inert="true"`, `<Image quality>`, `scroll-behavior`, `/case-studies?site=` (now dynamic), cached `fetch` / `GET` handlers.
- [x] 1.8 `npm run build` passes. [ ] Click-through (`/`, `/services`, location, case study, blog, `/contact-us`, `/ccp` CSP) still to do on the preview.

**Notes from this session**

- Windows `EPERM .next\trace` was a file lock (stray Node process / OneDrive / antivirus). Fix: stop Node, delete `.next`, rebuild.
- The `cache-components-instant-false` codemod added a 4-line `export const instant = false;` block to 293 files and broke the build. Removed with a VS Code multi-line regex. Not needed (we don't use `cacheComponents`). Don't select it next time.
- `next-sitemap` 4.2.3 still runs fine on Next 16.4.2, so Phase 7 is not urgent.
- `npm audit`: 30 → 17 vulnerabilities after upgrade. Remaining ones are tied to `next-sitemap` (Phase 7) and `sharp`.
- Sass `@import` deprecation warnings are expected until Phase 2.3.
- Unrelated cleanup done in this branch : deleted `analyze-app-structure.js`, `app-routes.json`, `app/sitemaps.md`, `attributes.md`, `check404s.js`, `comprehensive-card-tests.js`, `debug-payment/page.js`, `disavow.txt`, `emailTriage.md`, `link-check-results.txt`, `testInvoiceGen.html`. README rewritten.
- D1 to D7 not formally confirmed, defaults assumed.

**New follow-ups found**

- [ ] The build lists `/api/debug/email-test`, `/api/test/email` and `/api/test/email-debug` as live routes. Unless they're guarded, they're reachable on production. Remove or protect them before merging to `main`.
- [ ] `public/sitemap.xml` is regenerated by every local build, which creates diff noise. Phase 7 removes it.
- [ ] Remaining Phase 0 baseline (Lighthouse and Search Console exports) not saved.

## Phase 2: Imports and SCSS

**2.1 Import alias**

Moving folders in Phase 5 changes their depth, which breaks `../../../` imports. Fix that first.

- [ ] Open `jsconfig.json`. If it doesn't exist or has no `paths`, create or extend it:
  ```json
  {
    "compilerOptions": {
      "baseUrl": ".",
      "paths": { "@/*": ["./*"] }
    }
  }
  ```
  Next.js reads this itself, so no package is needed.
- [ ] Open the latest `structure.md` from the audit and confirm there is **only one** folder each named `styles`, `components` and `utils`, all at the root. The replacements below assume that.

**2.2 Components import `.scss` directly, through the alias**

In VS Code: **Ctrl+Shift+H**, regex on (**Alt+R**), files to include `*.js, *.jsx`.

- [ ] **Find:** `(["'])(?:\.{1,2}/)+styles/([\w.-]+?)\.module\.css\1`
      **Replace:** `$1@/styles/$2.module.scss$1`
      For example, `'../../../styles/servicesNav.module.css'` becomes `'@/styles/servicesNav.module.scss'`.
- [ ] Search `\.module\.css` again. It should return 0 results. Fix any leftovers, such as files in nested style folders, by hand.
- [ ] Search `\.css["']` to find global stylesheet imports (for example in `app/layout.js`). Where a `.scss` source exists, point the import at it.
- [ ] Search `Compiled CSS module` and update those comments. Components no longer import compiled CSS.

**2.3 `@import` → `@use`**

`globals.scss` contains only variables and mixins, no CSS rules. That makes this a direct swap, and `as *` keeps `$accent` and `@include phone` working unchanged.

- [ ] Files to include `*.scss`. **Find:** `@import "./globals.scss";` **Replace:** `@use "./globals" as *;`
- [ ] Search `@import` in `*.scss`. Anything left (single quotes, other paths) gets changed by hand.
- [ ] Optional tidy-up in `globals.scss`: `$accent-border` is declared twice (0.28, then 0.3; the second wins), and `$text-primary`, `$text-secondary` and `$text-muted` are each declared twice with the same value. Remove the duplicates; keep `$accent-border: rgba(4, 105, 153, 0.3)` so nothing changes visually.

**2.4 Delete the compiled files**

- [ ] Turn off whatever generated them (for example a VS Code Sass compiler extension and its "watch" setting), so they don't come back.
- [ ] Delete every `*.css.map` file.
- [ ] Delete each `*.module.css` file **only where a `.scss` file with the same name exists**. Hand-written CSS, such as a Prism theme, stays. The `.scss` count in `structure.md` gives you the number to expect.
- [ ] Add `*.css.map` to `.gitignore`.

**2.5 Other imports through the alias**

- [ ] Files `*.js, *.jsx`. **Find:** `from (["'])(?:\.{1,2}/)+(components|utils)/` **Replace:** `from $1@/$2/`
- [ ] **Find:** `import\((["'])(?:\.{1,2}/)+(components|utils)/` **Replace:** `import($1@/$2/`. This covers `next/dynamic` imports.
- [ ] Leave imports inside a route folder relative (`./ServiceLink`, `../(svgs)/X`). They move with their folder.

**Check before moving on:**

- `npm run build` shows no Sass `@import` deprecation warnings.
- Pages look identical. Spot-check 5 pages side by side with production.

Commits:

- `refactor: import scss modules directly via @/ alias`
- `chore: replace @import with @use`
- `chore: remove compiled css`

Notes: ..............................................................................................................

---

## Phase 3: Project conventions

- [ ] Update the claude.ai project instructions. Replace "import the compiled css not the scss file" with "import the `.module.scss` file directly via `@/styles/…`", and add that every module starts with `@use "./globals" as *;`. Future components then follow the new pattern.
- [ ] Keep `(components)` and `(svgs)` as they are. Next 16 still only creates a route for `page` and `route` files, so these folders work unchanged. (`_components` is the documented convention, but it isn't required.)

Notes: ..............................................................................................................

---

## Phase 4: Redirects folder

**4.1 Create the folder** (format in Appendix D2)

The file names contain "Redirects" deliberately: `mapStructure.mjs` finds redirect files by name.

| ☐   | File                                 | Contents                                                                                                                     |
| --- | ------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------- |
| ☐   | `redirects/index.js`                 | Combines the files below, in order                                                                                           |
| ☐   | `redirects/internalRedirects.js`     | Office Experts pages that moved or merged within officeexperts.com.au (Appendix A1)                                          |
| ☐   | `redirects/locationRedirects.js`     | Old city URL patterns (Appendix A2)                                                                                          |
| ☐   | `redirects/sisterDomainRedirects.js` | Temporary redirects to the 4 sister domains, one section per domain, each marked with the wave that removes it (Appendix A3) |
| ☐   | `redirects/goneUrls.js`              | Moved from `utils/goneUrls.js`. Update the import in `proxy.js` to `./redirects/goneUrls`                                    |

**4.2 Move first, change nothing**

- [ ] Copy every rule from `REDIRECTS` into the right file exactly as it is, including the bugs. Leave `NOINDEX_REDIRECTS` in a temporary `noindexRedirects.js` until 4.3.
- [ ] Add any redirects found in Phase 0.3.
- [ ] `next.config.js`: `const redirects = require("./redirects");` and `async redirects() { return redirects; }`.
- [ ] Count check (read-only): `node -e "console.log(require('./redirects').length)"` should print **134**, plus any rules from 0.3.
- [ ] Build, then commit: `refactor: move redirects into redirects/ (no behaviour change)`.

**4.3 Fix the bugs**

These are the "Action" column in Appendix A.

- [ ] Delete the 3 duplicate rules: `/services/by-business-solution`, `/add-in-development` and `/blog/convert-canva-to-word`.
- [ ] Remove the trailing slash from 2 sources (`/testimonials/warringtonfire-australia-pty-ltd/` and `/electrical-estimating-solutions/attachment/lend-lease/`). Delete the other 2, which only repeat existing rules (`/services/microsoft-excel/vba-macro-development/` and `/services/microsoft-office-365/`). With `trailingSlash` off, Next.js already redirects `/x/` to `/x` itself, so the clean form is the one that matches.
- [ ] Fix the double slash in the `/word-document-template-creation` destination.
- [ ] (D6) Delete the `accesss-support` rule.
- [ ] Check the `/blog/excel-problems-on-mac` destination (`excelexperts.com.au/excel-problems-on-mac`, which has no `/blog/`). The plan lists the post at `/blog/excel-problems-on-mac`. Run `curl.exe -sI` on both forms on excelexperts and point the rule at the one that returns 200.
- [ ] Update the three destinations that point into `by-business-solution` to their final flattened URLs (Appendix A1, "Update destination").
- [ ] (D2) Apply the noindex decision and delete `noindexRedirects.js`.
- [ ] Remove these 4 entries from `redirects/goneUrls.js`. A redirect already handles them, and redirects run before the proxy, so the 410 never fires:
  - `/3rd-party-product-integration`
  - `/access-support`
  - `/access-online`
  - `/testimonials/warringtonfire-australia-pty-ltd/`
- [ ] Comments: each file gets a header comment stating its purpose. Each group gets a heading comment. In `sisterDomainRedirects.js`, each domain section starts with `// REMOVE OR REPOINT IN THE {WORD|EXCEL|ACCESS|POWER PLATFORM} WAVE`.

**Check before moving on:**

- The build passes.
- `curl.exe -sI` on 5 rules from each file (local `npm run start`, `http://localhost:3000/...`) returns 308 with the expected `location`.
- `/tag/wordpress` returns 410.

Commit: `fix: redirect duplicates, trailing slashes and broken destinations`.

Notes: ..............................................................................................................

---

## Phase 5: URL restructure

**5.0 Check the parent folders before moving anything**

- [ ] In `app/services/by-business-solution/`, `app/services/microsoft-office/` and `app/services/microsoft-powerpoint/`, list everything that isn't a child page folder (`layout.js`, `(components)`, `(svgs)`, data files).
- [ ] If a parent `layout.js` exists, check what it adds (metadata template, wrapper, schema). Once the children move, they get `app/services/layout.js` instead, so copy anything they need into each child's `layout.js`.
- [ ] Search the child folders for `../(components)/` and `../(svgs)/`. Those imports point into the parent and will break. Move the shared files to `app/services/(components)/` or `(svgs)/`, or into `@/components/`.

**Checklist for every moved page** (use it for each row in 5.1 to 5.6):

1. `git mv` the folder, so git keeps its history.
2. In `page.js`, update the URL fields in `metadata`: `alternates.canonical` and `openGraph.url`.
3. Update the URLs in the JSON-LD (BreadcrumbList items and Service `url`).
4. Confirm the redirect entry is in `internalRedirects.js` (Appendix A1).
5. Update every link to the old URL (Phase 6).
6. Update the route in the `app/sitemap.js` list (Phase 7).

**5.1 Flatten `by-business-solution`**

`/services/by-business-solution` already redirects to `/services` and stays redirected.

| ☐ Moved | Old URL                                                                      | New URL                                                 | ☐ Metadata | ☐ Schema | ☐ Redirect | ☐ Links |
| ------- | ---------------------------------------------------------------------------- | ------------------------------------------------------- | ---------- | -------- | ---------- | ------- |
| ☐       | `/services/by-business-solution/3rd-party-application-or-office-integration` | `/services/3rd-party-application-or-office-integration` | ☐          | ☐        | ☐          | ☐       |
| ☐       | `/services/by-business-solution/add-in-creation`                             | `/services/add-in-creation`                             | ☐          | ☐        | ☐          | ☐       |
| ☐       | `/services/by-business-solution/cloud-based-solutions-with-azure`            | `/services/cloud-based-solutions-with-azure`            | ☐          | ☐        | ☐          | ☐       |
| ☐       | `/services/by-business-solution/custom-office-solutions`                     | `/services/custom-office-solutions`                     | ☐          | ☐        | ☐          | ☐       |
| ☐       | `/services/by-business-solution/dashboards`                                  | `/services/dashboards`                                  | ☐          | ☐        | ☐          | ☐       |
| ☐       | `/services/by-business-solution/database-development-and-solutions`          | `/services/database-development-and-solutions`          | ☐          | ☐        | ☐          | ☐       |
| ☐       | `/services/by-business-solution/online-solutions`                            | `/services/online-solutions`                            | ☐          | ☐        | ☐          | ☐       |
| ☐       | `/services/by-business-solution/sql-server-and-access-integration`           | `/services/sql-server-and-access-integration`           | ☐          | ☐        | ☐          | ☐       |
| ☐       | `/services/by-business-solution/vba-macro-development`                       | `/services/vba-macro-development`                       | ☐          | ☐        | ☐          | ☐       |

- [ ] Delete what's left in `app/services/by-business-solution/`: its `page.js`, the `office-and-sql-server-integration` folder, and any parent files emptied in 5.0.
- [ ] Note for the Excel wave: `add-in-creation` later merges into `/services/microsoft-excel/add-in-development`. When that happens, repoint **both** `/services/by-business-solution/add-in-creation` and `/services/add-in-creation` at the final URL.

**5.2 `microsoft-office` (D1)**

| ☐ Moved | Old URL                                             | New URL                            | ☐ Metadata | ☐ Schema | ☐ Redirect | ☐ Links |
| ------- | --------------------------------------------------- | ---------------------------------- | ---------- | -------- | ---------- | ------- |
| ☐       | `/services/microsoft-office/upgrades-and-migration` | `/services/upgrades-and-migration` | ☐          | ☐        | ☐          | ☐       |

- [ ] Delete `app/services/microsoft-office/page.js` and the folder once it's empty. Its redirect to `/services` comes from D1.

**5.3 `by-office-product`**

- [ ] Delete `app/services/by-office-product/`. The existing redirect to `/services` stays.

**5.4 PowerPoint consolidation**

The content merge follows the plan's §7 rules:

- [ ] List the H2 headings of `/services/microsoft-powerpoint` and its 3 children:
  - `custom-powerpoint-templates-and-presentations`
  - `existing-presentation-redesign`
  - `powerpoint-user-training-and-assistance`

  Tag each heading unique, duplicate or outdated.

- [ ] Check Search Console (12 months) for the 4 child URLs. Make the parent's title and H1 lead with the term that earns the most impressions.
- [ ] Bring only the unique sections into `/services/microsoft-powerpoint`, aiming for 900 to 1,500 words, with a maximum of 8 FAQs after removing duplicates. Give each section an `id`, such as `#templates`, `#redesign` and `#training`.
- [ ] Move the unique PowerPoint VBA content from `automate-presentations-with-vba` into a short section on `/services/vba-macro-development`.
- [ ] Delete the 4 child folders under `app/services/microsoft-powerpoint/`.
- [ ] `/services` hub: the PowerPoint section in `servicesData.js` links each "slide" to a child page. Point them at the new anchors (`/services/microsoft-powerpoint#templates` and so on), or cut the section down to a single link.
- [ ] Add the 4 redirects (Appendix A1).

**5.5 Business process automation**

| ☐ Moved | Old URL                                                      | New URL                                 | ☐ Metadata | ☐ Schema | ☐ Redirect | ☐ Links |
| ------- | ------------------------------------------------------------ | --------------------------------------- | ---------- | -------- | ---------- | ------- |
| ☐       | `/services/microsoft-office-365/business-process-automation` | `/services/business-process-automation` | ☐          | ☐        | ☐          | ☐       |

- [ ] Breadcrumb becomes Home → Services → Business Process Automation.
- [ ] Remove it from the child list on the `/services/microsoft-office-365` hub. Link to it from the AI pages (`ai-agent-development`, `ai-email-triage`) and the AI section of the `/services` hub.

**5.6 Office 365 children:** no changes. `office-365-implementation` and `office-365-migration` already redirect to the hub.

**5.7 Delete page files that never render**

A redirect catches each of these URLs before the page renders, and every redirect stays in place. Deleting the files changes nothing for visitors.

_Delete in this branch:_

| ☐   | Route (its folder under `app/`)                                    | Redirect that stays                                                                   |
| --- | ------------------------------------------------------------------ | ------------------------------------------------------------------------------------- |
| ☐   | `/services/microsoft-vbscript`                                     | → `/services/activex-vbscript-migration`                                              |
| ☐   | `/services/microsoft-office-365/exchange-online-setup-and-support` | → `/microsoft-support-and-training-australia`                                         |
| ☐   | `/services/microsoft-office-365/support-and-managed-services`      | → `/microsoft-support-and-training-australia`                                         |
| ☐   | `/services/microsoft-office-365/office-365-implementation`         | → `/services/microsoft-office-365`                                                    |
| ☐   | `/services/microsoft-office-365/office-365-migration`              | → `/services/microsoft-office-365`                                                    |
| ☐   | `/excel-and-access-experts-melbourne`                              | → `/microsoft-consultants-melbourne`                                                  |
| ☐   | `/excel-and-access-experts-sydney`                                 | → `/microsoft-consultants-sydney`                                                     |
| ☐   | `/office-and-office-365-experts-canberra`                          | → `/microsoft-consultants-canberra`                                                   |
| ☐   | `/office-and-office-365-experts-gold-coast`                        | → `/microsoft-support-and-training-gold-coast`                                        |
| ☐   | `/office-and-office-365-experts-melbourne`                         | → `/microsoft-consultants-melbourne`                                                  |
| ☐   | `/office-and-office-365-experts-richmond`                          | → `/excel-and-access-experts-richmond` (dead file only; the live Richmond pages stay) |
| ☐   | `/office-and-office-365-experts-sydney`                            | → `/microsoft-consultants-sydney`                                                     |
| ☐   | `/office-excel-access-and-365-experts-brisbane`                    | → `/microsoft-consultants-brisbane`                                                   |
| ☐   | `/office-excel-access-and-365-experts-perth`                       | → `/microsoft-consultants-perth`                                                      |
| ☐   | `/word-and-powerpoint-experts-canberra`                            | → `/microsoft-consultants-canberra`                                                   |
| ☐   | `/word-and-powerpoint-experts-melbourne`                           | → `/microsoft-consultants-melbourne`                                                  |
| ☐   | `/word-and-powerpoint-experts-perth`                               | → `/microsoft-consultants-perth`                                                      |
| ☐   | `/word-and-powerpoint-experts-richmond`                            | → `/microsoft-support-and-training-richmond` (dead file only)                         |
| ☐   | `/word-and-powerpoint-experts-sydney`                              | → `/microsoft-consultants-sydney`                                                     |

_Delete only if D3 = yes (Excel, Access and Excel blog posts; 18 files):_

| ☐   | Route                                                                                                                                                                                                                                                                               | Redirect that stays                                                                   |
| --- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| ☐   | `/services/microsoft-excel` and its 8 children: `add-in-development`, `custom-design-and-development`, `data-manipulation`, `excel-formulas-and-custom-formulas`, `excel-support`, `pivot-tables-charts-and-reporting-solutions`, `upgrades-and-migration`, `vba-macro-development` | → excelexperts.com.au                                                                 |
| ☐   | `/services/microsoft-access` and 5 of its children: `3rd-party-product-integration`, `access-azure-cloud-based-solutions`, `access-online`, `is-access-right-for-your-company`, `upgrades-and-migration`                                                                            | → accessexperts.com.au. **Keep `access-support`:** it's live and has no redirect (D6) |
| ☐   | `/blog/20-advanced-excel-shortcuts`, `/blog/custom-excel-shortcuts-with-macros`, `/blog/spreadsheet-errors-in-excel`                                                                                                                                                                | → excelexperts.com.au                                                                 |

_Leave for the Word migration (do not touch):_ `/services/microsoft-word` and its 14 children, and `/blog/convert-canva-to-word`.

**Check before moving on:**

- The build passes.
- Each new URL renders with the correct canonical (view source → `<link rel="canonical">`).
- Each old URL returns 308 to the new one.

Commits: one per subsection, for example `feat: flatten by-business-solution into /services`.

Notes: ..............................................................................................................

---

## Phase 6: Internal links, navigation and schema

**6.1 Search terms**

Each of these should return results **only inside `redirects/`** once the phase is done. Search with Ctrl+Shift+F, files to exclude `redirects/**, node_modules/**, .next/**`.

| ☐   | Search for                                                     | Expected after this phase |
| --- | -------------------------------------------------------------- | ------------------------- |
| ☐   | `by-business-solution`                                         | 0 results                 |
| ☐   | `by-office-product`                                            | 0                         |
| ☐   | `microsoft-office/upgrades-and-migration`                      | 0                         |
| ☐   | `"/services/microsoft-office"` (exact, with the closing quote) | 0                         |
| ☐   | `microsoft-powerpoint/`                                        | 0                         |
| ☐   | `microsoft-office-365/business-process-automation`             | 0                         |
| ☐   | `microsoft-vbscript`                                           | 0                         |
| ☐   | `office-and-sql-server-integration`                            | 0                         |

**6.2 Places that hold links.** Check each one:

- [ ] Navigation data file (`navigationData.js`)
- [ ] Footer data
- [ ] `app/services/servicesData.js`: the `/services` hub sections (custom development, PowerPoint, Microsoft 365, AI and automation)
- [ ] `RelatedLinks` props in each `page.js`
- [ ] Case-study data (related service links)
- [ ] Location page service links
- [ ] Home page sections
- [ ] Blog post bodies (the live Office Experts posts)
- [ ] CTA and FAQ components

**6.3 Links that point at a redirect**

- [ ] Re-run `mapStructure.mjs` and then `auditUsage.mjs`. Every row in `links.csv` with status **Redirected** is a link to fix:
  - **Internal targets:** link straight to the final URL.
  - **Sister-domain targets:** for example, `/services/microsoft-excel` redirects to excelexperts.com.au. Link straight to the sister-domain URL for now; those links flip to Office Experts URLs in each wave.
- [ ] Rows with status **No matching page**: fix or remove each one.

**6.4 Schema**

- [ ] BreadcrumbList on every moved page uses the new URLs, with the level removed (already done for `by-business-solution` on 15 October; check the item URLs).
- [ ] Any `Service`, `WebPage` or `FAQPage` JSON-LD carrying a `url` field uses the new URL.

**6.5 Google Ads and GTM** (do it now, apply it when you deploy)

- [ ] In Google Ads Editor, search final URLs and sitelinks for:
  - `by-business-solution`
  - `microsoft-powerpoint/`
  - `microsoft-office/`
  - `business-process-automation`

  List the ads that need updating at deploy time. Landing pages that redirect cost Quality Score and risk destination-mismatch disapprovals.

- [ ] GTM: check triggers and variables that use Page Path or Page URL conditions with the old paths.

**6.6 Project documents**

- [ ] `sitemaps.md` in the claude.ai project: update the moved URLs. It's the source for internal-linking suggestions.

**6.7 (D5 only)** Make `/services/microsoft-power-platform` self-canonical and add it to the sitemap list.

**Check before moving on:**

- Every search in 6.1 meets its expected result.
- `links.csv` has 0 **Redirected** rows for internal (non-sister-domain) URLs, and 0 **No matching page** rows.

Commit: `fix: update internal links to final URLs`.

Notes: ..............................................................................................................

---

## Phase 7: Sitemap and robots (replacing `next-sitemap`)

- [ ] Create `app/sitemap.js` and `app/robots.js` (Appendix D3 and D4).
  - Use the route list in Appendix B.
  - Point the case-study import at the same data source that `app/case-studies/[slug]/page.js` uses in `generateStaticParams`.
- [ ] Remove the `postbuild` script from `package.json` and run `npm uninstall next-sitemap`.
- [ ] Delete `next-sitemap.config.js`.
- [ ] Delete `public/sitemap.xml` and `public/robots.txt` if they're committed, so they don't conflict with the new routes. Check `.gitignore` to see whether they were generated-only.
- [ ] Keep `/ccp`, `/test-invoice`, `/test-page` and `/case-study-submission` out of the list. Confirm each one still has `robots: { index: false }` in its metadata. Don't add them to `robots.txt` as disallowed, or Google can't crawl them to see the noindex.

**Check before moving on:**

- `localhost:3000/sitemap.xml` lists exactly the Appendix B URLs plus the case studies.
- None of the URLs in the Appendix B "removed" list appears.
- `localhost:3000/robots.txt` shows the sitemap line.

Commit: `feat: replace next-sitemap with app/sitemap.js and app/robots.js`.

Notes: ..............................................................................................................

---

## Phase 8: Unused files and public images

**8.1 Re-run the audit** (`mapStructure.mjs`, then `auditUsage.mjs`). Compare it with the Phase 0 baseline.

**8.2 Unused public assets** (`audit.md` §1). Before deleting, check:

- [ ] Search the other 4 repos for `officeexperts.com.au/` image URLs. The `remotePatterns` entry for `www.officeexperts.com.au` suggests something loads images from this domain.
- [ ] Check that none are used in email signatures or templates, Google Business Profile, ads or social posts (logos especially).
- [ ] Delete in batches, one folder per commit, and build after each batch.

**8.3 "Check by hand" assets** (`audit.md` §2)

- [ ] **Letter-case mismatches:** fix the reference or rename the file. These work on Windows but 404 on Vercel.
- [ ] **Dynamic paths** (`/images/team/${slug}.webp`): check each file against the data that builds the path.

**8.4 Unused components, utilities and stylesheets** (`audit.md` §3)

- [ ] Delete them in batches and build after each one. The audit matches by import, so double-check anything loaded through `next/dynamic` with a variable path.

**8.5 Image folder structure (D4)**

- [ ] Create the agreed folders and move only images that are staying (heroes, team, blog).
- [ ] Update each `src`. Search for the old folder path afterwards; it should return 0 results.
- [ ] `noimageindex` is intentional, so moved image URLs have no SEO cost. Phase 8.2 already covers external references.

**8.6 `remotePatterns`**

- [ ] Search for `https://www.officeexperts.com.au/` inside `src=` values and change them to relative paths (`/images/...`), so the image optimiser doesn't fetch over the network. If none are left, remove the `www.officeexperts.com.au` entry from `remotePatterns`. Keep `img.youtube.com`.

**Check before moving on:** the build passes, the audit's unused counts have dropped, and the pages look identical.

Commits: one per batch.

Notes: ..............................................................................................................

---

## Phase 9: Preview checks on Vercel

Push the branch. Vercel builds a preview URL.

**9.1 Preview setup**

- [ ] Check the preview's response headers include `X-Robots-Tag: noindex`. Vercel normally adds this to preview deployments.
- [ ] If Deployment Protection is on, `curl` gets a 401. Test redirects in a logged-in browser (DevTools → Network, tick "Preserve log") or with a protection bypass token.
- [ ] **Forms fire real conversions.** Your GA4 and Google Ads conversion tags fire when Sendgrid reports success, so submitting a form on the preview records a real conversion and sends a real email. Either limit the conversion tags to the production hostname in GTM, or test once and note the test conversion.

**9.2 Build log**

- [ ] No Sass deprecation warnings, and no Next.js warnings about config options, `middleware` or images.

**9.3 Pages**

- [ ] Every Appendix B URL returns 200.
- [ ] Every case study, the blog index and each live blog post render.
- [ ] `/ccp` payment page: the BPoint iframe loads and the console shows no CSP errors. The proxy now runs on Node rather than Edge, so test this page properly.
- [ ] `/case-studies?site=…` ordering still works.
- [ ] Custom 404 page: `/this-does-not-exist`.
- [ ] Console clean on 10 pages: no hydration errors or React 19 warnings.

**9.4 Redirects and status codes**

- [ ] Every row in Appendix A1 and A2 returns **308** with the right `location`, in one hop.
- [ ] A sample of A3 rows (5 per domain) returns 308 to the sister domain.
- [ ] 5 `goneUrls` entries return **410**, with and without a trailing slash.
- [ ] The 4 entries removed from `goneUrls` in 4.3 return 308 (their redirect).

**9.5 Headers**

- [ ] `curl.exe -sI` on `/`, `/ccp` and one `/_next/static/...` file:
  - each header appears **once**;
  - X-Frame-Options is `DENY` (or `SAMEORIGIN` on `/ccp`);
  - static files show a single X-Robots-Tag.

**9.6 Sitemap and robots**

- [ ] `/sitemap.xml` matches Appendix B plus the case studies (expect about 102 URLs, down from 111).
- [ ] `/robots.txt` is correct.

**9.7 Performance**

- [ ] Lighthouse (mobile) on the Phase 0 pages, with the dashboards page at its new URL. Scores should match or beat the baseline. Next 16 no longer prints "First Load JS" in the build output, so Lighthouse is the measure.

**9.8 Final audit**

- [ ] Re-run both audit stages on the branch. Then confirm:
  - The route count in `structure.md` = baseline − deleted pages + moved pages.
  - The redirect count = what you expect after 4.3 and 5.x.

Notes: ..............................................................................................................

---

## Phase 10: Merge, deploy and follow-up

**10.1 Deploy**

- [ ] Open a PR from `cleanup/next16` and review the full diff once more.
- [ ] Merge at a quiet time. Vercel deploys production.
- [ ] Right after deploy, on production:
  - spot-check 10 redirects from Appendix A;
  - check `/sitemap.xml`, `/robots.txt`, `/ccp` and a form (accepting one real conversion);
  - check 5 pages.
- [ ] Update the Google Ads URLs listed in 6.5.
- [ ] If something is badly wrong: Vercel → Deployments → previous production deployment → **Instant Rollback**.

**10.2 Search Console** (same day)

- [ ] Resubmit `/sitemap.xml`.
- [ ] URL Inspection → Request indexing for the new URLs:
  - the 9 flattened `by-business-solution` pages
  - `/services/upgrades-and-migration`
  - `/services/business-process-automation`
  - `/services/microsoft-powerpoint`
  - `/services/vba-macro-development`

**10.3 Monitoring** (2 weeks)

- [ ] Every 2–3 days: Search Console → Pages: no unexpected rise in "Not found (404)". "Page with redirect" grows by the moved URLs.
- [ ] Weekly: clicks and impressions for the moved pages against the Phase 0 export. Expect a short dip while Google follows the redirects.

**10.4 Housekeeping**

- [ ] Update `claude/single-domain-migration-seo-plan.md` with the departures listed at the top of this document.
- [ ] Update `sitemaps.md` in the project (if not done in 6.6).

Notes: ..............................................................................................................

---

## Phase 11: Next phase (not in this branch)

### 11.1 Word migration (starts tomorrow; separate document)

This branch leaves the following for the Word work:

- [ ] The `wordexperts.com.au` section of `sisterDomainRedirects.js` (Appendix A3). Remove it or repoint it at the final Office Experts URLs **in the same deploy** that turns on the wordexperts → Office Experts redirects. Otherwise the two domains redirect into each other in a loop.
- [ ] The bare legacy paths (`/corporate-identity`, `/training`, `/accessibility`, `/upgrades-and-migration` and others) must point at `/services/microsoft-word/{slug}`, not at wordexperts.
- [ ] `/services/microsoft-word` and its 14 page files: replace them with the migrated Word Experts content.
- [ ] Word blog posts (`convert-canva-to-word`, `fields-and-repeating-data-in-word`, `ultimate-guide-to-word-templates`, `word-templates-for-legal-firms`): move 1:1, then make them self-canonical and add them to the sitemap.
- [ ] Repoint the Word links in the `/services` hub (`servicesData.js`) and in the "other platforms" sections on the city hubs.

### 11.2 Checklist for every later wave (Excel, Access, Power Platform)

- [ ] Remove or repoint that domain's section in `sisterDomainRedirects.js`, in the same deploy as the domain's redirects.
- [ ] Repoint the "other platforms" links on the city hubs and the `/services` hub.
- [ ] **Excel wave:**
  - Remove `/excel-consultants-perth`, `/excel-consultants-adelaide` and `/excel-consultants-melbourne` from `locationRedirects.js`. The plan keeps these URLs as product-city pages.
  - Repoint both add-in redirects (5.1).
  - Merge `/services/power-pivot` and `/services/power-query` into the Excel pages, as the plan describes.
- [ ] Add each wave's new URLs to `app/sitemap.js`.

### 11.3 City hubs ×6

Each hub needs unique content, following plan §6 item 3:

- a local intro covering the city's industries;
- a case study from that city or state;
- the team members who service it;
- onsite or remote availability;
- a local FAQ;
- product sections that link to the sister domains for now.

| ☐   | Hub to build                                 | Live pages for this city today                                                                                                                         | Redirects pointing at this city today                                              |
| --- | -------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------- |
| ☐   | `/microsoft-consultants-adelaide`            | `/microsoft-support-and-training-adelaide`, `/office-excel-access-and-365-experts-adelaide`                                                            | `/excel-consultants-adelaide` (⚠ Excel wave keeps this URL as a product-city page) |
| ☐   | `/microsoft-consultants-darwin`              | `/microsoft-support-and-training-darwin`, `/office-excel-access-and-365-experts-darwin`                                                                | `/excel-consultants-darwin`                                                        |
| ☐   | `/microsoft-consultants-gold-coast`          | `/microsoft-support-and-training-gold-coast`, `/word-and-powerpoint-experts-gold-coast`                                                                | `/office-and-office-365-experts-gold-coast`, `/excel-consultants-gold-coast`       |
| ☐   | `/microsoft-consultants-wollongong`          | `/microsoft-support-and-training-wollongong`, `/office-excel-access-and-365-experts-wollongong`                                                        | `/excel-consultants-wollongong`                                                    |
| ☐   | `/microsoft-consultants-central-coast-nsw`   | `/microsoft-support-and-training-central-coast-nsw`, `/excel-and-access-experts-central-coast-nsw`, `/office-and-office-365-experts-central-coast-nsw` | `/excel-consultants-central-coast-nsw`, `/office-consultants-central-coast-nsw`    |
| ☐   | `/microsoft-consultants-northern-rivers-nsw` | `/microsoft-support-and-training-northern-rivers-nsw`, `/office-excel-access-and-365-experts-northern-rivers-nsw`                                      | `/excel-consultants-northern-rivers-nsw`                                           |

When each hub goes live:

- redirect its old-pattern pages into it;
- repoint the redirects in the last column straight at it;
- decide its `microsoft-support-and-training-{city}` page using 11.4.

### 11.4 Research: are the `microsoft-support-and-training-{city}` pages cannibalising?

Five cities have both a `/microsoft-consultants-{city}` page and a `/microsoft-support-and-training-{city}` page: Brisbane, Canberra, Melbourne, Perth and Sydney.

- [ ] In your SEO dashboard (Search Console API, **page × query**, last 6–12 months), export the queries for both URLs in each city.
- [ ] Flag every query where **both** URLs get impressions. Compare their positions and clicks.
- [ ] Note queries that only the support page earns, especially training queries. Plan open question 1: about 10,800 impressions a year for "microsoft project training darwin/canberra".
- [ ] **Decision rule:**
  - **Heavy overlap, and the support page is weaker:** merge it into the hub as a "Support and training" section, then 308 it.
  - **The support page wins distinct training queries:** keep it, and separate the two pages' titles and H1s (consulting vs training).
- [ ] Apply the same rule to the 6 new hub cities.

### 11.5 Content (from the plan, after the waves)

- [ ] Rewrite the business process automation copy that it shares with the PPE Power Automate page (plan §4 O). Do this before the Power Platform wave puts both pages on one domain.
- [ ] Decide the final merge target for `/services/custom-office-solutions` (the plan's target, `/services/microsoft-office`, is now obsolete).

Notes: ..............................................................................................................

---

## Appendix A: Redirect tables

Every rule is `permanent: true` (308). The "Action" column is what Phase 4.3 and Phase 5 do to each rule. Tick each row as you add it to its file, and again in Phase 9 when it has been tested.

### A1. `redirects/internalRedirects.js`

| ☐   | Source                                                                                        | Destination                                             | Action                                                                                       |
| --- | --------------------------------------------------------------------------------------------- | ------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| ☐   | `/services/by-product-and-technology/microsoft-dot-net`                                       | `/services/microsoft-dot-net`                           | Keep                                                                                         |
| ☐   | `/services/by-product-and-technology/microsoft-publisher`                                     | `/services/microsoft-publisher`                         | Keep                                                                                         |
| ☐   | `/services/microsoft-office/services/by-business-solution/database-development-and-solutions` | `/services/database-development-and-solutions`          | Update destination (was `/services/by-business-solution/database-development-and-solutions`) |
| ☐   | `/services/office-and-sql-server-integration`                                                 | `/services/sql-server-and-access-integration`           | Update destination (was `/services/by-business-solution/sql-server-and-access-integration`)  |
| ☐   | `/services/by-business-solution/office-and-sql-server-integration`                            | `/services/sql-server-and-access-integration`           | Update destination (was `/services/by-business-solution/sql-server-and-access-integration`)  |
| ☐   | `/services/microsoft-access/microsoft-dot-net`                                                | `/services/microsoft-dot-net`                           | Keep                                                                                         |
| ☐   | `/by-business-solution`                                                                       | `/services`                                             | Keep                                                                                         |
| ☐   | `/services/by-business-solution`                                                              | `/services`                                             | Keep                                                                                         |
| ☐   | `/services/by-office-product`                                                                 | `/services`                                             | Keep                                                                                         |
| ☐   | `/services/by-business-solution`                                                              | `/services`                                             | DUPLICATE: delete                                                                            |
| ☐   | `/testimonials/warringtonfire-australia-pty-ltd`                                              | `/client-testimonials`                                  | Fix: remove trailing slash                                                                   |
| ☐   | `/electrical-estimating-solutions/attachment/lend-lease`                                      | `/client-testimonials`                                  | Fix: remove trailing slash                                                                   |
| ☐   | `/services/microsoft-office-365/office-365-implementation`                                    | `/services/microsoft-office-365`                        | Keep                                                                                         |
| ☐   | `/services/microsoft-office-365/office-365-migration`                                         | `/services/microsoft-office-365`                        | Keep                                                                                         |
| ☐   | `/services/microsoft-office-365/exchange-online-setup-and-support`                            | `/microsoft-support-and-training-australia`             | Keep                                                                                         |
| ☐   | `/services/microsoft-office-365/support-and-managed-services`                                 | `/microsoft-support-and-training-australia`             | Keep                                                                                         |
| ☐   | `/services/microsoft-vbscript`                                                                | `/services/activex-vbscript-migration`                  | Keep                                                                                         |
| ☐   | `/services/by-business-solution/3rd-party-application-or-office-integration`                  | `/services/3rd-party-application-or-office-integration` | NEW: Flatten                                                                                 |
| ☐   | `/services/by-business-solution/add-in-creation`                                              | `/services/add-in-creation`                             | NEW: Flatten                                                                                 |
| ☐   | `/services/by-business-solution/cloud-based-solutions-with-azure`                             | `/services/cloud-based-solutions-with-azure`            | NEW: Flatten                                                                                 |
| ☐   | `/services/by-business-solution/custom-office-solutions`                                      | `/services/custom-office-solutions`                     | NEW: Flatten                                                                                 |
| ☐   | `/services/by-business-solution/dashboards`                                                   | `/services/dashboards`                                  | NEW: Flatten                                                                                 |
| ☐   | `/services/by-business-solution/database-development-and-solutions`                           | `/services/database-development-and-solutions`          | NEW: Flatten                                                                                 |
| ☐   | `/services/by-business-solution/online-solutions`                                             | `/services/online-solutions`                            | NEW: Flatten                                                                                 |
| ☐   | `/services/by-business-solution/sql-server-and-access-integration`                            | `/services/sql-server-and-access-integration`           | NEW: Flatten                                                                                 |
| ☐   | `/services/by-business-solution/vba-macro-development`                                        | `/services/vba-macro-development`                       | NEW: Flatten                                                                                 |
| ☐   | `/services/microsoft-office`                                                                  | `/services`                                             | NEW (see D1): Obsolete hub                                                                   |
| ☐   | `/services/microsoft-office/upgrades-and-migration`                                           | `/services/upgrades-and-migration`                      | NEW: Flatten                                                                                 |
| ☐   | `/services/microsoft-powerpoint/custom-powerpoint-templates-and-presentations`                | `/services/microsoft-powerpoint`                        | NEW: PowerPoint merge                                                                        |
| ☐   | `/services/microsoft-powerpoint/existing-presentation-redesign`                               | `/services/microsoft-powerpoint`                        | NEW: PowerPoint merge                                                                        |
| ☐   | `/services/microsoft-powerpoint/powerpoint-user-training-and-assistance`                      | `/services/microsoft-powerpoint`                        | NEW: PowerPoint merge                                                                        |
| ☐   | `/services/microsoft-powerpoint/automate-presentations-with-vba`                              | `/services/vba-macro-development`                       | NEW: Merge into VBA page                                                                     |
| ☐   | `/services/microsoft-office-365/business-process-automation`                                  | `/services/business-process-automation`                 | NEW: Moved under /services (AI cluster)                                                      |

### A2. `redirects/locationRedirects.js`

All rules kept. Richmond stays as it is. Rows pointing at a `microsoft-support-and-training-{city}` page in one of the 6 hub cities get repointed when that hub is built (11.3).

| ☐   | Source                                              | Destination                                           | Action                                                                                                      |
| --- | --------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| ☐   | `/excel-and-access-experts-sydney`                  | `/microsoft-consultants-sydney`                       | Keep                                                                                                        |
| ☐   | `/word-and-powerpoint-experts-sydney`               | `/microsoft-consultants-sydney`                       | Keep                                                                                                        |
| ☐   | `/office-and-office-365-experts-sydney`             | `/microsoft-consultants-sydney`                       | Keep                                                                                                        |
| ☐   | `/word-and-powerpoint-experts-richmond`             | `/microsoft-support-and-training-richmond`            | Keep (Richmond stays)                                                                                       |
| ☐   | `/office-and-office-365-experts-gold-coast`         | `/microsoft-support-and-training-gold-coast`          | Keep. Repoint when the city hub is built                                                                    |
| ☐   | `/office-and-office-365-experts-melbourne`          | `/microsoft-consultants-melbourne`                    | Keep                                                                                                        |
| ☐   | `/excel-consultants-melbourne`                      | `/microsoft-consultants-melbourne`                    | Keep. ⚠ Excel wave: remove (plan keeps this URL as a product-city page)                                     |
| ☐   | `/excel-and-access-experts-melbourne`               | `/microsoft-consultants-melbourne`                    | Keep                                                                                                        |
| ☐   | `/office-excel-access-and-365-experts-melbourne`    | `/microsoft-consultants-melbourne`                    | Keep                                                                                                        |
| ☐   | `/word-and-powerpoint-experts-melbourne`            | `/microsoft-consultants-melbourne`                    | Keep                                                                                                        |
| ☐   | `/excel-consultants-adelaide`                       | `/microsoft-support-and-training-adelaide`            | Keep. Repoint when the city hub is built. ⚠ Excel wave: remove (plan keeps this URL as a product-city page) |
| ☐   | `/excel-consultants-canberra`                       | `/microsoft-consultants-canberra`                     | Keep                                                                                                        |
| ☐   | `/word-and-powerpoint-experts-canberra`             | `/microsoft-consultants-canberra`                     | Keep                                                                                                        |
| ☐   | `/office-and-office-365-experts-canberra`           | `/microsoft-consultants-canberra`                     | Keep                                                                                                        |
| ☐   | `/excel-consultants-darwin`                         | `/microsoft-support-and-training-darwin`              | Keep. Repoint when the city hub is built                                                                    |
| ☐   | `/excel-consultants-gold-coast`                     | `/microsoft-support-and-training-gold-coast`          | Keep. Repoint when the city hub is built                                                                    |
| ☐   | `/excel-consultants-northern-rivers-nsw`            | `/microsoft-support-and-training-northern-rivers-nsw` | Keep. Repoint when the city hub is built                                                                    |
| ☐   | `/excel-consultants-central-coast-nsw`              | `/microsoft-support-and-training-central-coast-nsw`   | Keep. Repoint when the city hub is built                                                                    |
| ☐   | `/excel-consultants-perth`                          | `/microsoft-consultants-perth`                        | Keep. ⚠ Excel wave: remove (plan keeps this URL as a product-city page)                                     |
| ☐   | `/word-and-powerpoint-experts-perth`                | `/microsoft-consultants-perth`                        | Keep                                                                                                        |
| ☐   | `/office-excel-access-and-365-consultants-perth`    | `/microsoft-consultants-perth`                        | Keep                                                                                                        |
| ☐   | `/office-excel-access-and-365-experts-perth`        | `/microsoft-consultants-perth`                        | Keep                                                                                                        |
| ☐   | `/office-excel-access-and-365-consultants-brisbane` | `/microsoft-consultants-brisbane`                     | Keep                                                                                                        |
| ☐   | `/office-excel-access-and-365-experts-brisbane`     | `/microsoft-consultants-brisbane`                     | Keep                                                                                                        |
| ☐   | `/excel-consultants-richmond`                       | `/microsoft-support-and-training-richmond`            | Keep (Richmond stays)                                                                                       |
| ☐   | `/office-and-office-365-experts-richmond`           | `/excel-and-access-experts-richmond`                  | Keep (Richmond stays)                                                                                       |
| ☐   | `/excel-consultants-wollongong`                     | `/microsoft-support-and-training-wollongong`          | Keep. Repoint when the city hub is built                                                                    |
| ☐   | `/office-consultants-central-coast-nsw`             | `/microsoft-support-and-training-central-coast-nsw`   | Keep. Repoint when the city hub is built                                                                    |

### A3. `redirects/sisterDomainRedirects.js`

These are temporary. Each section is removed or repointed in its domain's wave (11.1 and 11.2).

#### wordexperts.com.au: REMOVE OR REPOINT IN THE WORD WAVE (starts tomorrow)

| ☐   | Source on officeexperts                                                | Destination                                                                  | Action                           |
| --- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------------- | -------------------------------- |
| ☐   | `/corporate-identity`                                                  | `https://www.wordexperts.com.au/corporate-identity`                          | Keep                             |
| ☐   | `/word-document-template-creation`                                     | `https://www.wordexperts.com.au/word-document-template-creation`             | Fix: double slash in destination |
| ☐   | `/popup-forms`                                                         | `https://www.wordexperts.com.au/popup-forms`                                 | Keep                             |
| ☐   | `/quick-parts`                                                         | `https://www.wordexperts.com.au/quick-parts`                                 | Keep                             |
| ☐   | `/government-departments`                                              | `https://www.wordexperts.com.au/government-departments`                      | Keep                             |
| ☐   | `/fill-in-forms`                                                       | `https://www.wordexperts.com.au/fill-in-forms`                               | Keep                             |
| ☐   | `/custom-toolbars-and-ribbons`                                         | `https://www.wordexperts.com.au/custom-toolbars-and-ribbons`                 | Keep                             |
| ☐   | `/training`                                                            | `https://www.wordexperts.com.au/training`                                    | Keep                             |
| ☐   | `/remove-repetition-and-increase-productivity`                         | `https://www.wordexperts.com.au/remove-repetition-and-increase-productivity` | Keep                             |
| ☐   | `/accessibility`                                                       | `https://www.wordexperts.com.au/accessibility`                               | Keep                             |
| ☐   | `/upgrades-and-migration`                                              | `https://www.wordexperts.com.au/upgrades-and-migration`                      | Keep                             |
| ☐   | `/companies-and-organisations`                                         | `https://www.wordexperts.com.au/companies-and-organisations`                 | Keep                             |
| ☐   | `/corporate-global-template-solution`                                  | `https://www.wordexperts.com.au/corporate-global-template-solution`          | Keep                             |
| ☐   | `/word-template-conversions`                                           | `https://www.wordexperts.com.au/word-template-conversions`                   | Keep                             |
| ☐   | `/services/microsoft-word`                                             | `https://www.wordexperts.com.au`                                             | Keep                             |
| ☐   | `/services/microsoft-word/accessibility`                               | `https://www.wordexperts.com.au/accessibility`                               | Keep                             |
| ☐   | `/services/microsoft-word/companies-and-organisations`                 | `https://www.wordexperts.com.au/companies-and-organisations`                 | Keep                             |
| ☐   | `/services/microsoft-word/corporate-global-template-solution`          | `https://www.wordexperts.com.au/corporate-global-template-solution`          | Keep                             |
| ☐   | `/services/microsoft-word/corporate-identity`                          | `https://www.wordexperts.com.au/corporate-identity`                          | Keep                             |
| ☐   | `/services/microsoft-word/custom-toolbars-and-ribbons`                 | `https://www.wordexperts.com.au/custom-toolbars-and-ribbons`                 | Keep                             |
| ☐   | `/services/microsoft-word/fill-in-forms`                               | `https://www.wordexperts.com.au/fill-in-forms`                               | Keep                             |
| ☐   | `/services/microsoft-word/government-departments`                      | `https://www.wordexperts.com.au/government-departments`                      | Keep                             |
| ☐   | `/services/microsoft-word/popup-forms`                                 | `https://www.wordexperts.com.au/popup-forms`                                 | Keep                             |
| ☐   | `/services/microsoft-word/quick-parts`                                 | `https://www.wordexperts.com.au/quick-parts`                                 | Keep                             |
| ☐   | `/services/microsoft-word/remove-repetition-and-increase-productivity` | `https://www.wordexperts.com.au/remove-repetition-and-increase-productivity` | Keep                             |
| ☐   | `/services/microsoft-word/training`                                    | `https://www.wordexperts.com.au/training`                                    | Keep                             |
| ☐   | `/services/microsoft-word/upgrades-and-migration`                      | `https://www.wordexperts.com.au/upgrades-and-migration`                      | Keep                             |
| ☐   | `/services/microsoft-word/word-document-template-creation`             | `https://www.wordexperts.com.au/word-document-template-creation`             | Keep                             |
| ☐   | `/services/microsoft-word/word-template-conversions`                   | `https://www.wordexperts.com.au/word-template-conversions`                   | Keep                             |
| ☐   | `/blog/convert-canva-to-word`                                          | `https://www.wordexperts.com.au/blog/convert-canva-to-word`                  | Keep                             |
| ☐   | `/blog/convert-canva-to-word`                                          | `https://www.wordexperts.com.au/blog/convert-canva-to-word`                  | DUPLICATE: delete                |

#### excelexperts.com.au: REMOVE OR REPOINT IN THE EXCEL WAVE

| ☐   | Source on officeexperts                                                 | Destination                                                                   | Action                                                            |
| --- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| ☐   | `/excel-formulas-and-custom-formulas`                                   | `https://www.excelexperts.com.au/excel-formulas-and-custom-formulas`          | Keep                                                              |
| ☐   | `/services/custom-design-and-development`                               | `https://www.excelexperts.com.au/custom-design-and-development`               | Keep                                                              |
| ☐   | `/custom-design-and-development`                                        | `https://www.excelexperts.com.au/custom-design-and-development`               | Keep                                                              |
| ☐   | `/data-manipulation`                                                    | `https://www.excelexperts.com.au/data-manipulation`                           | Keep                                                              |
| ☐   | `/add-in-development`                                                   | `https://www.excelexperts.com.au/add-in-development`                          | Keep                                                              |
| ☐   | `/pivot-tables-charts-and-reporting-solutions`                          | `https://www.excelexperts.com.au/pivot-tables-charts-and-reporting-solutions` | Keep                                                              |
| ☐   | `/excel-support`                                                        | `https://www.excelexperts.com.au/excel-support`                               | Keep                                                              |
| ☐   | `/vba-macro-development`                                                | `https://www.excelexperts.com.au/vba-macro-development`                       | Keep                                                              |
| ☐   | `/vba-macro-developmentVBA%20macros`                                    | `https://www.excelexperts.com.au/vba-macro-development`                       | Keep                                                              |
| ☐   | `/services/microsoft-excel`                                             | `https://www.excelexperts.com.au`                                             | Keep                                                              |
| ☐   | `/services/microsoft-excel/add-in-development`                          | `https://www.excelexperts.com.au/add-in-development`                          | Keep                                                              |
| ☐   | `/add-in-development`                                                   | `https://www.excelexperts.com.au/add-in-development`                          | DUPLICATE: delete                                                 |
| ☐   | `/services/microsoft-excel/custom-design-and-development`               | `https://www.excelexperts.com.au/custom-design-and-development`               | Keep                                                              |
| ☐   | `/services/microsoft-excel/data-manipulation`                           | `https://www.excelexperts.com.au/data-manipulation`                           | Keep                                                              |
| ☐   | `/services/microsoft-excel/excel-formulas-and-custom-formulas`          | `https://www.excelexperts.com.au/excel-formulas-and-custom-formulas`          | Keep                                                              |
| ☐   | `/services/microsoft-excel/excel-support`                               | `https://www.excelexperts.com.au/excel-support`                               | Keep                                                              |
| ☐   | `/services/microsoft-excel/pivot-tables-charts-and-reporting-solutions` | `https://www.excelexperts.com.au/pivot-tables-charts-and-reporting-solutions` | Keep                                                              |
| ☐   | `/services/microsoft-excel/upgrades-and-migration`                      | `https://www.excelexperts.com.au/upgrades-and-migration`                      | Keep                                                              |
| ☐   | `/services/microsoft-excel/vba-macro-development`                       | `https://www.excelexperts.com.au/vba-macro-development`                       | Keep                                                              |
| ☐   | `/services/microsoft-excel/vba-macro-development`                       | `https://www.excelexperts.com.au/vba-macro-development`                       | DUPLICATE: delete                                                 |
| ☐   | `/blog/excel-problems-on-mac`                                           | `https://www.excelexperts.com.au/excel-problems-on-mac`                       | Check destination: EE post is `/blog/excel-problems-on-mac` (4.3) |
| ☐   | `/blog/20-advanced-excel-shortcuts`                                     | `https://www.excelexperts.com.au/blog/20-advanced-excel-shortcuts`            | Keep                                                              |
| ☐   | `/blog/custom-excel-shortcuts-with-macros`                              | `https://www.excelexperts.com.au/blog/custom-excel-shortcuts-with-macros`     | Keep                                                              |
| ☐   | `/blog/spreadsheet-errors-in-excel`                                     | `https://www.excelexperts.com.au/blog/spreadsheet-errors-in-excel`            | Keep                                                              |

#### accessexperts.com.au: REMOVE OR REPOINT IN THE ACCESS WAVE

| ☐   | Source on officeexperts                                         | Destination                                                           | Action                     |
| --- | --------------------------------------------------------------- | --------------------------------------------------------------------- | -------------------------- |
| ☐   | `/access-azure-cloud-based-solutions`                           | `https://www.accessexperts.com.au/access-azure-cloud-based-solutions` | Keep                       |
| ☐   | `/access-support`                                               | `https://www.accessexperts.com.au/access-support`                     | Keep                       |
| ☐   | `/access-online`                                                | `https://www.accessexperts.com.au/access-online`                      | Keep                       |
| ☐   | `/3rd-party-product-integration`                                | `https://www.accessexperts.com.au/3rd-party-product-integration`      | Keep                       |
| ☐   | `/is-access-right-for-your-company`                             | `https://www.accessexperts.com.au/is-access-right-for-your-company`   | Keep                       |
| ☐   | `/services/microsoft-access`                                    | `https://www.accessexperts.com.au`                                    | Keep                       |
| ☐   | `/services/microsoft-access/3rd-party-product-integration`      | `https://www.accessexperts.com.au/3rd-party-product-integration`      | Keep                       |
| ☐   | `/services/microsoft-access/access-azure-cloud-based-solutions` | `https://www.accessexperts.com.au/access-azure-cloud-based-solutions` | Keep                       |
| ☐   | `/services/microsoft-access/access-online`                      | `https://www.accessexperts.com.au/access-online`                      | Keep                       |
| ☐   | `/services/microsoft-access/accesss-support`                    | `https://www.accessexperts.com.au/accesss-support`                    | Delete (typo rule, see D6) |
| ☐   | `/services/microsoft-access/is-access-right-for-your-company`   | `https://www.accessexperts.com.au/is-access-right-for-your-company`   | Keep                       |
| ☐   | `/services/microsoft-access/upgrades-and-migration`             | `https://www.accessexperts.com.au/upgrades-and-migration`             | Keep                       |

#### powerplatformexperts.com.au: REMOVE OR REPOINT IN THE POWER PLATFORM WAVE

| ☐   | Source on officeexperts        | Destination                                                                                    | Action |
| --- | ------------------------------ | ---------------------------------------------------------------------------------------------- | ------ |
| ☐   | `/services/microsoft-power-bi` | `https://www.powerplatformexperts.com.au/services/microsoft-power-platform/microsoft-power-bi` | Keep   |

### A4. `NOINDEX_REDIRECTS` (D2)

**Default: delete all 21.**

| ☐   | Source                                                                                                | Condition                   | Destination                                       | What happens today                          |
| --- | ----------------------------------------------------------------------------------------------------- | --------------------------- | ------------------------------------------------- | ------------------------------------------- |
| ☐   | `/testimonials/electrical-estimating-solutions/attachment/window-line/feed`                           |                             | `/client-testimonials`                            | Works (lands on a page)                     |
| ☐   | `/faq-items/do-you-come-onsite-or-work-remotely/attachment/skype-button/feed`                         |                             | `/faqs`                                           | 404 (page is /faq)                          |
| ☐   | `/services/microsoft-excel/data-manipulation/attachment/netwok-hologram-over-young-woman-s-face/feed` |                             | `/services/microsoft-excel`                       | 2 hops → excelexperts.com.au                |
| ☐   | `/services/microsoft-excel/attachment/microsoft-office-microsoft-excel-integration/feed`              |                             | `/services/microsoft-excel`                       | 2 hops → excelexperts.com.au                |
| ☐   | `/services/microsoft-word/attachment/upgrade-microsoft-word-icon/feed`                                |                             | `/services/microsoft-word`                        | 2 hops → wordexperts.com.au                 |
| ☐   | `/services/microsoft-office/attachment/online-solutions-icon/feed`                                    |                             | `/services/microsoft-office`                      | Page today; 2 hops after this branch        |
| ☐   | `/blog/office-experts-the-best-excel-consultants/attachment/expert-highlighted-in-green/feed`         |                             | `/blog`                                           | Works (lands on a page)                     |
| ☐   | `/faq-items/how-can-we-pay-you/attachment/payment-method_mastercard/feed`                             |                             | `/faqs`                                           | 404 (page is /faq)                          |
| ☐   | `/2018/12`                                                                                            |                             | `/410`                                            | 404 (no /410 page exists)                   |
| ☐   | `/2019/02`                                                                                            |                             | `/410`                                            | 404 (no /410 page exists)                   |
| ☐   | `/2018/11`                                                                                            |                             | `/410`                                            | 404 (no /410 page exists)                   |
| ☐   | `/:path*`                                                                                             | ?s=%7Bsearch_term_string%7D | `/410`                                            | 404 (no /410 page exists)                   |
| ☐   | `/testimonials/electrical-estimating-solutions/attachment/uniting-care-australia/feed`                |                             | `/client-testimonials`                            | Works (lands on a page)                     |
| ☐   | `/testimonials/mad-clarity/attachment/mad-clarity/feed`                                               |                             | `/client-testimonials`                            | Works (lands on a page)                     |
| ☐   | `/services/microsoft-office/attachment/microsoft-office-add-ins-icon/feed`                            |                             | `/services/microsoft-office`                      | Page today; 2 hops after this branch        |
| ☐   | `/feed`                                                                                               | ?attachment_id=73           | `/410`                                            | 404 (no /410 page exists)                   |
| ☐   | `/services/microsoft-office-365/cloud-backup-with-onedrive/attachment/cloud-database/feed`            |                             | `/services/microsoft-office/microsoft-office-365` | 404 (destination does not exist)            |
| ☐   | `/comments/feed`                                                                                      |                             | `/410`                                            | 404 (no /410 page exists)                   |
| ☐   | `/services/microsoft-office-365/`                                                                     |                             | `/services/microsoft-office-365`                  | Redundant (Next.js strips the slash itself) |
| ☐   | `/feed`                                                                                               | ?attachment_id=75           | `/410`                                            | 404 (no /410 page exists)                   |
| ☐   | `/feed`                                                                                               | ?attachment_id=78           | `/410`                                            | 404 (no /410 page exists)                   |

### A5. `goneUrls` entries that never fire

A redirect catches each of these first, so the 410 is never returned.

| ☐   | goneUrls entry                                    | Redirect that wins                                                   | Action               |
| --- | ------------------------------------------------- | -------------------------------------------------------------------- | -------------------- |
| ☐   | `/3rd-party-product-integration`                  | → accessexperts.com.au                                               | Remove from goneUrls |
| ☐   | `/access-support`                                 | → accessexperts.com.au                                               | Remove from goneUrls |
| ☐   | `/access-online`                                  | → accessexperts.com.au                                               | Remove from goneUrls |
| ☐   | `/testimonials/warringtonfire-australia-pty-ltd/` | → `/client-testimonials` (once its trailing slash is removed in 4.3) | Remove from goneUrls |

The remaining 292 `goneUrls` entries stay. The proxy already handles both slash forms correctly.

---

## Appendix B: Expected sitemap after this branch

These are the static routes for the `STATIC_ROUTES` list in `app/sitemap.js`, plus the case studies (34 at the moment).

**Left out on purpose** (redirected, noindexed or canonical to a sister domain):

- the Word, Excel, Access and Power Platform pages;
- the 8 cross-canonical blog posts;
- `/ccp`, `/test-invoice`, `/test-page`, `/case-study-submission`;
- unless D5 = yes, `/services/microsoft-power-platform`.

- ☐ `/`
- ☐ `/about-us`
- ☐ `/blog`
- ☐ `/case-studies`
- ☐ `/client-testimonials`
- ☐ `/contact-us`
- ☐ `/contact-us/request-a-quote`
- ☐ `/excel-and-access-experts-central-coast-nsw`
- ☐ `/excel-and-access-experts-richmond`
- ☐ `/faq`
- ☐ `/locations`
- ☐ `/looking-for-a-job`
- ☐ `/meet-the-team`
- ☐ `/microsoft-365-api-integration`
- ☐ `/microsoft-consultants-brisbane`
- ☐ `/microsoft-consultants-cairns`
- ☐ `/microsoft-consultants-canberra`
- ☐ `/microsoft-consultants-melbourne`
- ☐ `/microsoft-consultants-perth`
- ☐ `/microsoft-consultants-sydney`
- ☐ `/microsoft-support-and-training-adelaide`
- ☐ `/microsoft-support-and-training-australia`
- ☐ `/microsoft-support-and-training-brisbane`
- ☐ `/microsoft-support-and-training-canberra`
- ☐ `/microsoft-support-and-training-central-coast-nsw`
- ☐ `/microsoft-support-and-training-darwin`
- ☐ `/microsoft-support-and-training-gold-coast`
- ☐ `/microsoft-support-and-training-melbourne`
- ☐ `/microsoft-support-and-training-northern-rivers-nsw`
- ☐ `/microsoft-support-and-training-perth`
- ☐ `/microsoft-support-and-training-richmond`
- ☐ `/microsoft-support-and-training-sydney`
- ☐ `/microsoft-support-and-training-wollongong`
- ☐ `/office-and-office-365-experts-central-coast-nsw`
- ☐ `/office-excel-access-and-365-experts-adelaide`
- ☐ `/office-excel-access-and-365-experts-darwin`
- ☐ `/office-excel-access-and-365-experts-northern-rivers-nsw`
- ☐ `/office-excel-access-and-365-experts-wollongong`
- ☐ `/privacy-policy`
- ☐ `/refund-policy`
- ☐ `/services`
- ☐ `/services/3rd-party-application-or-office-integration`
- ☐ `/services/activex-vbscript-migration`
- ☐ `/services/add-in-creation`
- ☐ `/services/ai-agent-development`
- ☐ `/services/ai-email-triage`
- ☐ `/services/business-analysis`
- ☐ `/services/business-process-automation`
- ☐ `/services/cloud-based-solutions-with-azure`
- ☐ `/services/custom-office-solutions`
- ☐ `/services/dashboards`
- ☐ `/services/database-development-and-solutions` ⚠ only if the page is indexable (it is missing from the live sitemap)
- ☐ `/services/microsoft-dot-net`
- ☐ `/services/microsoft-office-365`
- ☐ `/services/microsoft-office-365/app-and-custom-development`
- ☐ `/services/microsoft-office-365/cloud-backup-with-onedrive`
- ☐ `/services/microsoft-office-365/copilot`
- ☐ `/services/microsoft-office-365/remote-data-gathering-from-any-device`
- ☐ `/services/microsoft-powerpoint`
- ☐ `/services/microsoft-publisher`
- ☐ `/services/online-solutions`
- ☐ `/services/power-pivot`
- ☐ `/services/power-query`
- ☐ `/services/sql-server-and-access-integration`
- ☐ `/services/upgrades-and-migration`
- ☐ `/services/vba-macro-development`
- ☐ `/terms-and-conditions`
- ☐ `/word-and-powerpoint-experts-gold-coast`

**Removed from the current live sitemap:**

- `/services/microsoft-office`
- `/services/microsoft-powerpoint/custom-powerpoint-templates-and-presentations`
- `/services/microsoft-powerpoint/existing-presentation-redesign`
- `/services/microsoft-powerpoint/powerpoint-user-training-and-assistance`
- `/services/microsoft-powerpoint/automate-presentations-with-vba`
- `/office-and-office-365-experts-canberra`
- `/office-and-office-365-experts-richmond`
- `/office-excel-access-and-365-experts-brisbane`
- `/office-excel-access-and-365-experts-perth`
- `/word-and-powerpoint-experts-melbourne`

---

## Appendix C: Search and replace reference (VS Code)

| Purpose                               | Files to include | Find (regex on)                                       | Replace                       |
| ------------------------------------- | ---------------- | ----------------------------------------------------- | ----------------------------- |
| Style imports → `.scss` via alias     | `*.js, *.jsx`    | `(["'])(?:\.{1,2}/)+styles/([\w.-]+?)\.module\.css\1` | `$1@/styles/$2.module.scss$1` |
| `@import` → `@use`                    | `*.scss`         | `@import "./globals.scss";` (regex off)               | `@use "./globals" as *;`      |
| Component and utility imports → alias | `*.js, *.jsx`    | `from (["'])(?:\.{1,2}/)+(components\|utils)/`        | `from $1@/$2/`                |
| Dynamic imports → alias               | `*.js, *.jsx`    | `import\((["'])(?:\.{1,2}/)+(components\|utils)/`     | `import($1@/$2/`              |
| Leftover compiled CSS imports         | `*.js, *.jsx`    | `\.module\.css`                                       | (should find 0 results)       |
| Leftover Sass imports                 | `*.scss`         | `@import`                                             | (should find 0 results)       |

In VS Code, type the `|` in those regexes without the backslash; the backslash only stops the table from breaking.

---

## Appendix D: Reference snippets

These show the shape only. Adjust paths to your project.

### D1. `next.config.js` after Phase 1 and Phase 4

```js
// next.config.js
// Redirect rules live in /redirects, one file per reason (see redirects/index.js)
const redirects = require("./redirects");

// Headers that must reach every path, including static files (which skip proxy.js).
// Page security headers (CSP, X-Frame-Options, Permissions-Policy) are set in proxy.js
// because they differ between pages.
const GLOBAL_HEADERS = [
  { key: "X-Robots-Tag", value: "index, follow, noimageindex" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Strict-Transport-Security",
    value: "max-age=31536000; includeSubDomains",
  },
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
  productionBrowserSourceMaps: false,

  images: {
    formats: ["image/webp"],
    minimumCacheTTL: 31536000,
    // Add any non-75 quality values found in Phase 1.7, e.g. qualities: [75, 90]
    remotePatterns: [
      { protocol: "https", hostname: "img.youtube.com", pathname: "/**" },
      // Remove once Phase 8.6 finds no absolute officeexperts.com.au image URLs
      { protocol: "https", hostname: "www.officeexperts.com.au" },
    ],
  },

  async redirects() {
    return redirects;
  },

  async headers() {
    return [{ source: "/:path*", headers: GLOBAL_HEADERS }];
  },
};

module.exports = nextConfig;
```

### D2. `redirects/` format

```js
// redirects/index.js
// Collects every redirect for next.config.js.
// Next.js uses the first rule that matches, so keep specific rules above broad ones.
const internalRedirects = require("./internalRedirects");
const locationRedirects = require("./locationRedirects");
const sisterDomainRedirects = require("./sisterDomainRedirects");

module.exports = [
  ...internalRedirects,
  ...locationRedirects,
  ...sisterDomainRedirects,
];
```

```js
// redirects/internalRedirects.js
// Office Experts pages that moved or merged within officeexperts.com.au.
// Every rule is permanent (308) and points straight at the final URL, never at another redirect.

module.exports = [
  // ── Services restructure, Oct 2026: the by-business-solution level was removed ──
  {
    source: "/services/by-business-solution",
    destination: "/services",
    permanent: true,
  },
  {
    source: "/services/by-business-solution/dashboards",
    destination: "/services/dashboards",
    permanent: true,
  },
  // …

  // ── PowerPoint consolidated into one page, Oct 2026 ──
  // PowerPoint VBA content now lives on the cross-product VBA page
  {
    source: "/services/microsoft-powerpoint/automate-presentations-with-vba",
    destination: "/services/vba-macro-development",
    permanent: true,
  },
  // …
];
```

```js
// redirects/sisterDomainRedirects.js
// TEMPORARY: Office Experts URLs that currently send visitors to a sister domain.
// Each section is removed or repointed in that domain's migration wave, in the same deploy
// that turns on the sister domain's redirects to Office Experts (otherwise they loop).

const WORD = "https://www.wordexperts.com.au";
// …

module.exports = [
  // ── wordexperts.com.au: REMOVE OR REPOINT IN THE WORD WAVE ──
  { source: "/services/microsoft-word", destination: WORD, permanent: true },
  // …
];
```

### D3. `app/sitemap.js`

```js
// app/sitemap.js
// Generates /sitemap.xml at build time (replaces next-sitemap).
// Only list indexable, self-canonical URLs: no redirects, no noindex pages,
// and no pages whose canonical points at a sister domain.

// Case-study slugs come from the same source as app/case-studies/[slug]/page.js.
// The path and field name below are placeholders: point them at your data.
import { caseStudies } from "@/utils/caseStudiesData";

const SITE_URL = process.env.SITE_URL || "https://www.officeexperts.com.au";

// Static routes (Appendix B). Update this list whenever a page is added, moved,
// redirected or noindexed.
const STATIC_ROUTES = [
  "/",
  "/about-us",
  // …
];

export default function sitemap() {
  const staticEntries = STATIC_ROUTES.map((path) => ({
    url: path === "/" ? SITE_URL : `${SITE_URL}${path}`,
  }));

  const caseStudyEntries = caseStudies.map(({ slug }) => ({
    url: `${SITE_URL}/case-studies/${slug}`,
  }));

  // lastModified is left out until real per-page dates exist (same as before)
  return [...staticEntries, ...caseStudyEntries];
}
```

### D4. `app/robots.js`

```js
// app/robots.js
// Generates /robots.txt at build time (replaces next-sitemap's generateRobotsTxt).
const SITE_URL = process.env.SITE_URL || "https://www.officeexperts.com.au";

export default function robots() {
  return {
    // Allow everything: noindexed pages must stay crawlable so Google can read their noindex tag
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
```
