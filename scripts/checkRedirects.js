// scripts/checkRedirects.js  (ES module)
// Run: node scripts/checkRedirects.js
// Fails (exit code 1) if the redirect rules contain a mistake that would silently not work.
// Read-only: it only loads ../redirects/index.js and the app/ folder.

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const loaded = await import("../redirects/index.js");
const redirects = loaded.default ?? loaded;

const appDir = path.join(
  path.dirname(fileURLToPath(import.meta.url)),
  "..",
  "app",
);

// ---- routes from the app folder (route groups and dynamic segments handled) ----
function collectPages(dir, base = "") {
  const routes = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.isDirectory()) {
      if (entry.name.startsWith("_") || entry.name.startsWith("@")) continue; // private folders, parallel slots
      const segment = /^\(.*\)$/.test(entry.name) ? "" : "/" + entry.name; // (group) adds no URL segment
      routes.push(...collectPages(path.join(dir, entry.name), base + segment));
    } else if (/^page\.(js|jsx|ts|tsx|mdx)$/.test(entry.name)) {
      routes.push(base || "/");
    }
  }
  return routes;
}

function routeToRegex(route) {
  let pattern = "";
  for (const seg of route.split("/").filter(Boolean)) {
    if (/^\[\[\.\.\..+\]\]$/.test(seg)) pattern += "(?:/.*)?";
    else if (/^\[\.\.\..+\]$/.test(seg)) pattern += "/.+";
    else if (/^\[.+\]$/.test(seg)) pattern += "/[^/]+";
    else pattern += "/" + seg.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }
  return new RegExp(`^${pattern || "/"}$`);
}

const pages = fs.existsSync(appDir) ? collectPages(appDir) : null;
const staticPages = new Set((pages ?? []).filter((p) => !p.includes("[")));
const dynamicPages = (pages ?? [])
  .filter((p) => p.includes("["))
  .map(routeToRegex);
const pageExists = (route) =>
  staticPages.has(route) || dynamicPages.some((re) => re.test(route));

const pathOf = (url) =>
  /^https?:\/\//.test(url) ? new URL(url).pathname : url.split(/[?#]/)[0];
const endsWithSlash = (url) => {
  const p = pathOf(url);
  return p.length > 1 && p.endsWith("/");
};

// ---- checks ----
const problems = [];
const bySource = new Map();

for (const rule of redirects) {
  const { source, destination } = rule;
  const conditional = Boolean(rule.has || rule.missing);

  if (!rule.permanent) problems.push(`Not permanent (308): ${source}`);
  if (source.length > 1 && source.endsWith("/"))
    problems.push(`Source ends with "/": ${source}`);
  if (endsWithSlash(destination))
    problems.push(`Destination ends with "/": ${source} -> ${destination}`);
  if (
    /^https?:\/\/[^/]+\/\//.test(destination) ||
    destination.startsWith("//")
  ) {
    problems.push(`Double slash in destination: ${source} -> ${destination}`);
  }

  if (!conditional) {
    if (bySource.has(source)) problems.push(`Duplicate source: ${source}`);
    bySource.set(source, destination);
  }

  if (source === destination) problems.push(`Redirects to itself: ${source}`);
  if (destination === "/410" || destination === "/faqs") {
    problems.push(`Destination known to 404: ${source} -> ${destination}`);
  }

  if (pages) {
    // Destination must be a real page (skip params, files and external URLs)
    if (
      destination.startsWith("/") &&
      !destination.includes(":") &&
      !path.posix.extname(pathOf(destination))
    ) {
      const route = pathOf(destination);
      const clean = route.length > 1 ? route.replace(/\/+$/, "") : route;
      if (!pageExists(clean))
        problems.push(
          `Destination page not found in app/: ${source} -> ${destination}`,
        );
    }
    // Source that is still a live page: the page never renders
    if (!conditional && !source.includes(":") && staticPages.has(source)) {
      problems.push(
        `Page file still exists at the source (it never renders): ${source}`,
      );
    }
  }
}

// Chains (literal sources only)
for (const [source, destination] of bySource) {
  if (bySource.has(destination)) {
    problems.push(
      `Chain: ${source} -> ${destination} -> ${bySource.get(destination)}`,
    );
  }
}

const external = redirects.filter((r) => /^https?:\/\//.test(r.destination));
console.log(
  `${redirects.length} redirects (${external.length} to other domains)`,
);
if (!pages) console.warn("app/ folder not found: page checks skipped.");

if (problems.length) {
  console.error(`\n${problems.length} problem(s):`);
  for (const p of problems) console.error(`  - ${p}`);
  process.exit(1);
}
console.log(
  "OK: no duplicates, chains, trailing slashes, shadowed pages or missing destinations.",
);
