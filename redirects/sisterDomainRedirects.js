// redirects/sisterDomainRedirects.js
// TEMPORARY: Office Experts URLs that currently send visitors to a sister domain.
// Each section is removed or repointed in that domain's migration wave, in the SAME deploy
// that turns on the sister domain's redirects to Office Experts. Otherwise the two domains
// redirect into each other in a loop.
//

const DOMAINS = {
  access: "https://www.accessexperts.com.au",
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

// ── wordexperts.com.au: REMOVE OR REPOINT IN THE WORD WAVE
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

module.exports = [...word, ...access];
