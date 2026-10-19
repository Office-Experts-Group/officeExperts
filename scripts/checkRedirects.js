// scripts/checkRedirects.js  (ES module)
// Run: node scripts/checkRedirects.js
// Fails (exit code 1) if the redirect rules contain a mistake that would silently not work.
// Read-only: it only loads ../redirects/index.js and prints a report.

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

// Works whether redirects/index.js is CommonJS (module.exports = [...])
// or an ES module (export default [...]): both arrive as the default export.
const loaded = await import("../redirects/index.js");
const redirects = loaded.default ?? loaded;

const problems = [];
const bySource = new Map();

for (const rule of redirects) {
  const { source, destination } = rule;

  if (!rule.permanent) problems.push(`Not permanent (308): ${source}`);

  // Next.js strips trailing slashes before matching, so these never fire
  if (source.length > 1 && source.endsWith("/")) {
    problems.push(`Source ends with "/": ${source}`);
  }
  if (destination.length > 1 && destination.endsWith("/")) {
    problems.push(`Destination ends with "/": ${source} -> ${destination}`);
  }
  if (
    /^https?:\/\/[^/]+\/\//.test(destination) ||
    destination.startsWith("//")
  ) {
    problems.push(`Double slash in destination: ${source} -> ${destination}`);
  }

  // Same source twice: the second rule can never run
  if (bySource.has(source)) {
    problems.push(`Duplicate source: ${source}`);
  }
  bySource.set(source, destination);

  // Redirect to itself
  if (source === destination) problems.push(`Redirects to itself: ${source}`);

  // /410 and /faqs do not exist (the pages are a 404 and /faq)
  if (destination === "/410" || destination === "/faqs") {
    problems.push(`Destination known to 404: ${source} -> ${destination}`);
  }
}

// Redirect chains and loops (internal destinations only)
for (const [source, destination] of bySource) {
  if (bySource.has(destination)) {
    problems.push(
      `Chain: ${source} -> ${destination} -> ${bySource.get(destination)}`,
    );
  }
}

// Internal destinations must be a real page, or the redirect lands on a 404.
// Only runs when the app folder is present (it is, when run from the repo root).
const appDir = path.join(
  path.dirname(fileURLToPath(import.meta.url)),
  "..",
  "app",
);
if (fs.existsSync(appDir)) {
  const hasPage = (route) => {
    const dir = path.join(appDir, route);
    return ["page.js", "page.jsx", "page.tsx"].some((f) =>
      fs.existsSync(path.join(dir, f)),
    );
  };
  for (const { source, destination } of redirects) {
    const route = destination.split(/[?#]/)[0];
    if (!/^https?:\/\//.test(destination) && route !== "/" && !hasPage(route)) {
      problems.push(
        `Destination page not found in app/: ${source} -> ${destination}`,
      );
    }
  }
}

const external = redirects.filter((r) => /^https?:\/\//.test(r.destination));
console.log(
  `${redirects.length} redirects (${external.length} to sister domains)`,
);

if (problems.length) {
  console.error(`\n${problems.length} problem(s):`);
  for (const p of problems) console.error(`  - ${p}`);
  process.exit(1);
}
console.log(
  "OK: no duplicates, chains, trailing slashes or known-404 destinations.",
);
