// redirects/sisterDomainRedirects.js
// TEMPORARY: Office Experts URLs that currently send visitors to a sister domain.
// Each section is removed or repointed in that domain's migration wave, in the SAME deploy
// that turns on the sister domain's redirects to Office Experts. Otherwise the two domains
// redirect into each other in a loop.
//
// Each product's page list lives in one place (the lists below). Every page is redirected from
// both its old /services/<product>/<slug> URL and, where one existed, its legacy top-level /<slug> URL.
// Sources never end in "/": Next.js strips trailing slashes before matching.

const DOMAINS = {
  word: "https://www.wordexperts.com.au",
  excel: "https://www.excelexperts.com.au",
  access: "https://www.accessexperts.com.au",
  powerPlatform: "https://www.powerplatformexperts.com.au",
};

const permanent = (source, destination) => ({
  source,
  destination,
  permanent: true,
});

// Builds the redirects for one product from its page list.
//   prefix:    the old hub URL on this site (it redirects to the sister site's home page)
//   slugs:     pages that lived under the prefix
//   rootSlugs: pages that also had a legacy top-level /<slug> URL
function productRedirects(domain, { prefix, slugs, rootSlugs }) {
  return [
    permanent(prefix, domain),
    ...slugs.map((slug) => permanent(`${prefix}/${slug}`, `${domain}/${slug}`)),
    ...rootSlugs.map((slug) => permanent(`/${slug}`, `${domain}/${slug}`)),
  ];
}

// ── wordexperts.com.au: REMOVE OR REPOINT IN THE WORD WAVE ──
//
// MIGRATION PROGRESS (branch: wordMigrate)
//   Homepage (/services/microsoft-word) ........ DONE, redirect removed
//   Subpages ................................... add each slug to WORD_MIGRATED below
//
// HOW TO MIGRATE A PAGE:
//   1. Build the page at app/services/microsoft-word/<slug>/page.js
//   2. Add "<slug>" to WORD_MIGRATED below (one line per page)
//   3. Restart `npm run dev`: redirects are read from next.config at startup and are not hot-reloaded
//   4. Check the page loads with no 301, then commit and push
//
// AT THE END OF THE WAVE (all pages migrated, same deploy as the wordexperts redirects going live):
//   - Repoint the bare legacy /<slug> redirects below to /services/microsoft-word/<slug>
//     (not to wordexperts), and repoint or remove the blog redirect
//   - Then delete this whole Word section

const WORD_SLUGS = [
  "accessibility",
  "companies-and-organisations",
  "corporate-global-template-solution",
  "corporate-identity",
  "custom-toolbars-and-ribbons",
  "fill-in-forms",
  "government-departments",
  "popup-forms",
  "quick-parts",
  "remove-repetition-and-increase-productivity",
  "training",
  "upgrades-and-migration",
  "word-document-template-creation",
  "word-template-conversions",
];

// Pages already built on officeexperts.com.au. Add slugs here as each one is finished.
// Only the /services/microsoft-word/<slug> redirect is dropped for these.
const WORD_MIGRATED = new Set([
  "accessibility",
  // "companies-and-organisations",
  // "corporate-global-template-solution",
  // "corporate-identity",
  // "custom-toolbars-and-ribbons",
  // "fill-in-forms",
  // "government-departments",
  // "popup-forms",
  // "quick-parts",
  // "remove-repetition-and-increase-productivity",
  // "training",
  // "upgrades-and-migration",
  // "word-document-template-creation",
  // "word-template-conversions",
]);

// Fails the build on a typo, so a misspelt slug can't silently leave a redirect in place
for (const slug of WORD_MIGRATED) {
  if (!WORD_SLUGS.includes(slug)) {
    throw new Error(`WORD_MIGRATED contains unknown slug: "${slug}"`);
  }
}

const wordPending = WORD_SLUGS.filter((slug) => !WORD_MIGRATED.has(slug));

const word = [
  // Homepage: MIGRATED. The /services/microsoft-word hub redirect has been removed.

  // Subpages not yet migrated: /services/microsoft-word/<slug> -> wordexperts/<slug>
  ...wordPending.map((slug) =>
    permanent(`/services/microsoft-word/${slug}`, `${DOMAINS.word}/${slug}`),
  ),

  // Legacy top-level /<slug> URLs: leave pointing at wordexperts until the end of the wave.
  // These stay for ALL slugs (including migrated ones) until the final repoint described above.
  ...WORD_SLUGS.map((slug) => permanent(`/${slug}`, `${DOMAINS.word}/${slug}`)),

  permanent(
    "/blog/convert-canva-to-word",
    `${DOMAINS.word}/blog/convert-canva-to-word`,
  ),
];

// ── excelexperts.com.au: REMOVE OR REPOINT IN THE EXCEL WAVE ──
// /upgrades-and-migration at the top level belongs to Word (above), so it is not a rootSlug here.
const excel = [
  ...productRedirects(DOMAINS.excel, {
    prefix: "/services/microsoft-excel",
    slugs: [
      "add-in-development",
      "custom-design-and-development",
      "data-manipulation",
      "excel-formulas-and-custom-formulas",
      "excel-support",
      "pivot-tables-charts-and-reporting-solutions",
      "upgrades-and-migration",
      "vba-macro-development",
    ],
    rootSlugs: [
      "add-in-development",
      "custom-design-and-development",
      "data-manipulation",
      "excel-formulas-and-custom-formulas",
      "excel-support",
      "pivot-tables-charts-and-reporting-solutions",
      "vba-macro-development",
    ],
  }),
  permanent(
    "/services/custom-design-and-development",
    `${DOMAINS.excel}/custom-design-and-development`,
  ),
  permanent(
    "/vba-macro-developmentVBA%20macros",
    `${DOMAINS.excel}/vba-macro-development`,
  ),
  // Fixed: the article lives under /blog/ on excelexperts (the old destination had no /blog/)
  permanent(
    "/blog/excel-problems-on-mac",
    `${DOMAINS.excel}/blog/excel-problems-on-mac`,
  ),
  permanent(
    "/blog/20-advanced-excel-shortcuts",
    `${DOMAINS.excel}/blog/20-advanced-excel-shortcuts`,
  ),
  permanent(
    "/blog/custom-excel-shortcuts-with-macros",
    `${DOMAINS.excel}/blog/custom-excel-shortcuts-with-macros`,
  ),
  permanent(
    "/blog/spreadsheet-errors-in-excel",
    `${DOMAINS.excel}/blog/spreadsheet-errors-in-excel`,
  ),
];

// ── accessexperts.com.au: REMOVE OR REPOINT IN THE ACCESS WAVE ──
const access = productRedirects(DOMAINS.access, {
  prefix: "/services/microsoft-access",
  slugs: [
    "3rd-party-product-integration",
    "access-azure-cloud-based-solutions",
    "access-online",
    "access-support",
    "is-access-right-for-your-company",
    "upgrades-and-migration",
  ],
  rootSlugs: [
    "3rd-party-product-integration",
    "access-azure-cloud-based-solutions",
    "access-online",
    "access-support",
    "is-access-right-for-your-company",
  ],
});

// ── powerplatformexperts.com.au: REMOVE OR REPOINT IN THE POWER PLATFORM WAVE ──
const powerPlatform = [
  permanent(
    "/services/microsoft-power-bi",
    `${DOMAINS.powerPlatform}/services/microsoft-power-platform/microsoft-power-bi`,
  ),
];

module.exports = [...word, ...excel, ...access, ...powerPlatform];
