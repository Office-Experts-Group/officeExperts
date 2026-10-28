// scripts/checkLinks.mjs
// Crawls a locally running build and reports broken links and unwanted redirects.
// Start the site first:  npm run build && npm start
// Usage:                 node scripts/checkLinks.mjs [baseUrl] [outFile]
// Needs Node 18+. No packages. Read-only.

import { writeFile } from "node:fs/promises";

const BASE = (process.argv[2] || "http://localhost:3000").replace(/\/+$/, "");
const OUT_FILE = process.argv[3] || "link-check.csv";
const SITE_HOSTS = new Set([
  "officeexperts.com.au",
  "www.officeexperts.com.au",
  new URL(BASE).host,
]);
const CONCURRENCY = 6;
const MAX_HOPS = 10;
const PERMANENT = new Set([301, 308]);
const SKIP_EXT =
  /\.(png|jpe?g|gif|webp|avif|svg|ico|pdf|css|js|map|woff2?|ttf|xml|txt|json|mp4|webm|zip)$/i;

// Maps a live or local URL onto the local server. Returns null for external URLs.
function toLocal(href, from) {
  let url;
  try {
    url = new URL(href, from);
  } catch {
    return null;
  }
  if (!/^https?:$/.test(url.protocol) || !SITE_HOSTS.has(url.host)) return null;
  return BASE + url.pathname + url.search; // trailing slashes are kept on purpose: they cost a redirect
}

const absolute = (location, from) => {
  try {
    return new URL(location, from).href;
  } catch {
    return location;
  }
};

async function hit(url) {
  try {
    const res = await fetch(url, {
      redirect: "manual",
      headers: { "user-agent": "OEG-link-check" },
    });
    const isHtml = (res.headers.get("content-type") || "").includes(
      "text/html",
    );
    const text = await res.text();
    return {
      status: res.status,
      location: res.headers.get("location") || "",
      html: res.status === 200 && isHtml ? text : "",
    };
  } catch (error) {
    return {
      status: 0,
      location: String(error.cause?.code || error.message),
      html: "",
    };
  }
}

// Requests a URL, then follows its redirect chain one hop at a time.
async function check(url) {
  const first = await hit(url);
  const hops = [];
  let last = first;
  let current = url;
  let external = false;
  while (
    last.status >= 300 &&
    last.status < 400 &&
    last.location &&
    hops.length < MAX_HOPS
  ) {
    const next = toLocal(last.location, current);
    hops.push({
      status: last.status,
      to: next || absolute(last.location, current),
    });
    if (!next) {
      external = true;
      current = hops.at(-1).to;
      break;
    }
    current = next;
    last = await hit(current);
  }
  return { first, hops, last, finalUrl: current, external };
}

function extractLinks(html, pageUrl) {
  const out = new Set();
  for (const m of html.matchAll(/<a\b[^>]*\shref=["']([^"']+)["']/gi)) {
    const href = m[1].trim().replace(/&amp;/g, "&");
    if (/^(mailto:|tel:|javascript:|#)/i.test(href)) continue;
    const local = toLocal(href, pageUrl);
    if (local && !SKIP_EXT.test(new URL(local).pathname)) out.add(local);
  }
  return out;
}

async function sitemapUrls(url) {
  const xml = await (await fetch(url)).text();
  const locs = [...xml.matchAll(/<loc>\s*([^<\s]+)\s*<\/loc>/g)].map(
    (m) => m[1],
  );
  if (!xml.includes("<sitemapindex")) return locs;
  return (
    await Promise.all(locs.map((loc) => sitemapUrls(toLocal(loc, BASE) || loc)))
  ).flat();
}

// ---------- crawl ----------

let sitemap = [];
try {
  sitemap = await sitemapUrls(BASE + "/sitemap.xml");
} catch {
  console.error(
    `Could not reach ${BASE}. Start the site first: npm run build && npm start`,
  );
  process.exit(1);
}
const sitemapSet = new Set(
  sitemap.map((u) => toLocal(u, BASE)).filter(Boolean),
);
if (!sitemapSet.size)
  console.warn(
    "Warning: no URLs found in the sitemap. Crawling from the home page only.",
  );

const foundOn = new Map(); // url -> pages that link to it
const queue = [];
const results = new Map();
function enqueue(url, from) {
  if (!foundOn.has(url)) {
    foundOn.set(url, new Set());
    queue.push(url);
  }
  foundOn.get(url).add(from);
}
enqueue(BASE + "/", "start");
sitemapSet.forEach((url) => enqueue(url, "sitemap"));

let active = 0;
async function worker() {
  while (true) {
    const url = queue.shift();
    if (!url) {
      if (active === 0) return;
      await new Promise((resolve) => setTimeout(resolve, 50));
      continue;
    }
    active++;
    try {
      const r = await check(url);
      results.set(url, r);
      if (r.first.status === 200)
        extractLinks(r.first.html, url).forEach((link) => enqueue(link, url));
      if (r.hops.length && !r.external)
        enqueue(r.finalUrl, `redirect from ${url}`);
    } finally {
      active--;
    }
  }
}
console.log(`Crawling ${BASE} (${sitemapSet.size} sitemap URLs)...`);
await Promise.all(Array.from({ length: CONCURRENCY }, worker));

// ---------- report ----------

function problemsFor(url, r) {
  const found = [];
  const { first, hops, last } = r;
  if (!hops.length) {
    if (first.status === 0 || first.status >= 400) found.push("BROKEN");
  } else {
    if (hops.length >= MAX_HOPS) found.push("LOOP_OR_TOO_MANY_HOPS");
    else if (!r.external && (last.status === 0 || last.status >= 400))
      found.push("REDIRECT_TO_BROKEN");
    else if (hops.length > 1) found.push("CHAIN");
    else found.push(r.external ? "REDIRECT_TO_OTHER_DOMAIN" : "REDIRECT");
    if (hops.some((h) => !PERMANENT.has(h.status))) found.push("NOT_PERMANENT");
  }
  if (sitemapSet.has(url) && (hops.length || first.status !== 200))
    found.push("IN_SITEMAP_BUT_NOT_200");
  return found;
}

const csvField = (v) => `"${String(v ?? "").replace(/"/g, '""')}"`;
const header = [
  "url",
  "problems",
  "status",
  "redirectPath",
  "finalUrl",
  "finalStatus",
  "linkedFromCount",
  "linkedFrom",
];
const rows = [];
const counts = {};
for (const [url, r] of results) {
  const problems = problemsFor(url, r);
  if (!problems.length) continue;
  problems.forEach((p) => (counts[p] = (counts[p] || 0) + 1));
  const sources = [...foundOn.get(url)].filter(
    (s) => s !== "sitemap" && s !== "start",
  );
  rows.push([
    url,
    problems.join(";"),
    r.first.status || r.first.location,
    r.hops.map((h) => `${h.status} ${h.to}`).join(" > "),
    r.hops.length ? r.finalUrl : "",
    r.hops.length && !r.external ? r.last.status : "",
    sources.length,
    sources.slice(0, 5).join(" "),
  ]);
}
rows.sort((a, b) => a[1].localeCompare(b[1]) || a[0].localeCompare(b[0]));
await writeFile(
  OUT_FILE,
  [header, ...rows].map((row) => row.map(csvField).join(",")).join("\n"),
  "utf8",
);

console.log(
  `Checked ${results.size} URLs. ${rows.length} with problems -> ${OUT_FILE}`,
);
for (const [problem, n] of Object.entries(counts).sort())
  console.log(`  ${problem}: ${n}`);
const fatal = ["BROKEN", "REDIRECT_TO_BROKEN", "LOOP_OR_TOO_MANY_HOPS"].some(
  (p) => counts[p],
);
process.exit(fatal ? 1 : 0);
