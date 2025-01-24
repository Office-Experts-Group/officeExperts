import fs from "fs/promises";
import path from "path";

const baseUrl = "https://word-experts.vercel.app";
const dirsToScan = ["app", "components", "styles", "public"];
const checked = new Set();
const errors = [];
const errorSources = new Map();
const linkContexts = new Map();

const linkPatterns = [
  /href=["'](\/[^"']*?)["']/g,
  /href={\s*['"`](\/[^'"`]*?)['"`]\s*}/g,
  /Link\s+href=["'](\/[^"']*?)["']/g,
  /Link\s+href={\s*['"`](\/[^'"`]*?)['"`]\s*}/g,
  /href=["'](https?:\/\/[^"']*?)["']/g,
  /href={\s*['"`](https?:\/\/[^'"`]*?)['"`]\s*}/g,
  /Link\s+href=["'](https?:\/\/[^"']*?)["']/g,
  /Link\s+href={\s*['"`](https?:\/\/[^'"`]*?)['"`]\s*}/g,
];

async function findLinksInFile(filePath) {
  const content = await fs.readFile(filePath, "utf8");
  const links = new Set();
  const contexts = new Map();

  // Ignore tel: links and other special protocols
  const ignoredProtocols = ["tel:", "mailto:", "sms:", "file:"];

  for (const pattern of linkPatterns) {
    const matches = [...content.matchAll(pattern)];
    matches.forEach((match) => {
      const link = match[1];
      if (
        link &&
        !link.includes("*") &&
        !link.includes("..") &&
        !link.match(/\.(jpg|jpeg|png|gif|svg|webp|css|scss)$/i) &&
        !ignoredProtocols.some((protocol) => link.startsWith(protocol))
      ) {
        links.add(link);

        // Store surrounding context (20 chars before and after)
        const start = Math.max(0, match.index - 20);
        const end = Math.min(
          content.length,
          match.index + match[0].length + 20
        );
        const context = content.slice(start, end);
        contexts.set(link, context);
      }
    });
  }

  return { links: Array.from(links), contexts };
}

async function scanDirectory(dir) {
  const routes = new Set();
  const scannedFiles = [];
  const linksFoundInFiles = new Map();

  async function scan(currentDir) {
    try {
      const entries = await fs.readdir(currentDir, { withFileTypes: true });

      for (const entry of entries) {
        const fullPath = path.join(currentDir, entry.name);
        const relativePath = fullPath.replace(process.cwd(), "");

        if (
          entry.isDirectory() &&
          !entry.name.startsWith("_") &&
          !entry.name.startsWith(".")
        ) {
          await scan(fullPath);
        } else if (entry.isFile()) {
          const ext = path.extname(entry.name);
          if ([".js", ".jsx", ".tsx", ".scss", ".css"].includes(ext)) {
            scannedFiles.push(relativePath);

            if (/page\.(js|jsx|tsx)$/.test(entry.name)) {
              const route =
                "/" +
                fullPath
                  .split(dir)[1]
                  .replace(/page\.(js|jsx|tsx)$/, "")
                  .replace(/\[\.{3}.*\]/, "*")
                  .replace(/\[(.*?)\]/g, ":$1")
                  .replace(/\/+$/, "")
                  .replace(/^\/+/, "");
              const cleanRoute = (route || "/").replace(/\/+$/, "");
              routes.add(cleanRoute);
            }

            const { links, contexts } = await findLinksInFile(fullPath);
            if (links.length > 0) {
              linksFoundInFiles.set(relativePath, links);
              links.forEach((link) => {
                routes.add(link);
                errorSources.set(link, relativePath);
                if (contexts.has(link)) {
                  linkContexts.set(link, {
                    file: relativePath,
                    context: contexts.get(link),
                  });
                }
              });
            }
          }
        }
      }
    } catch (error) {
      console.error(`Error scanning ${currentDir}:`, error);
    }
  }

  await scan(dir);
  return { routes, scannedFiles, linksFoundInFiles };
}

async function checkUrl(url, index, total) {
  if (checked.has(url)) return;
  checked.add(url);

  const urlToCheck = url.startsWith("http") ? url : `${baseUrl}${url}`;

  try {
    const response = await fetch(urlToCheck);
    const result = `${index + 1}/${total}: ${url} - Status: ${response.status}`;
    if (response.status === 404) {
      errors.push(`404: ${url}`);
    }
    return result;
  } catch (error) {
    const result = `${index + 1}/${total}: ${url} - Error: ${error.message}`;
    errors.push(result);
    return result;
  }
}

async function main() {
  const results = [];
  const allRoutes = new Set();
  const allScannedFiles = [];
  const allLinksFound = new Map();

  for (const dir of dirsToScan) {
    const { routes, scannedFiles, linksFoundInFiles } = await scanDirectory(
      dir
    );
    routes.forEach((route) => allRoutes.add(route));
    allScannedFiles.push(...scannedFiles);
    linksFoundInFiles.forEach((links, file) => allLinksFound.set(file, links));
  }

  const routesArray = Array.from(allRoutes);

  for (let i = 0; i < routesArray.length; i++) {
    const result = await checkUrl(routesArray[i], i, routesArray.length);
    results.push(result);
  }

  // Check for potentially truncated links
  const potentiallyTruncated = Array.from(allRoutes).filter(
    (route) =>
      route.endsWith("-") ||
      routesArray.some(
        (other) => other !== route && other.startsWith(route + "-")
      )
  );

  const summary = `
SCAN DETAILS
============
Scanned Directories: ${dirsToScan.join(", ")}
Total Files Scanned: ${allScannedFiles.length}

POTENTIALLY TRUNCATED LINKS
==========================
${potentiallyTruncated
  .map((link) => {
    const context = linkContexts.get(link);
    return context
      ? `${link}\n   File: ${context.file}\n   Context: ${context.context}`
      : `${link}\n   Source unknown`;
  })
  .join("\n\n")}

ERRORS
======
${
  errors.length
    ? errors
        .map((error) => {
          const url = error.split(": ")[1];
          const context = linkContexts.get(url);
          return context
            ? `${error}\n   Found in: ${context.file}\n   Context: ${context.context}`
            : `${error}\n   Found in: Unknown source`;
        })
        .join("\n\n")
    : "No errors found"
}

CHECK RESULTS
============
${results.join("\n")}`.trim();

  await fs.writeFile("link-check-results.txt", summary);
  console.log("\nCheck complete! Results saved to link-check-results.txt");
}

main().catch(console.error);
