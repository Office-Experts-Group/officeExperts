const fs = require("fs");
const path = require("path");

// Configuration
const APP_DIR = path.join(process.cwd(), "app");
const IGNORE_PATTERNS = [
  /^_.*/, // Next.js special files/folders starting with _
  /^(.*)\.js$/, // JavaScript files
  /^(.*)\.jsx$/, // JSX files
  /^(.*)\.ts$/, // TypeScript files
  /^(.*)\.tsx$/, // TSX files
  /^(.*)\.scss$/, // SCSS files
];

// Helper function to check if a path should be ignored
const shouldIgnore = (name) => {
  return IGNORE_PATTERNS.some((pattern) => pattern.test(name));
};

// Function to get clean route from path
const getRouteFromPath = (fullPath) => {
  const relativePath = path.relative(APP_DIR, fullPath);
  return "/" + relativePath.replace(/\\/g, "/");
};

// Function to analyze directory structure
function analyzeDirectory(dir, depth = 0) {
  const routes = [];

  try {
    const items = fs.readdirSync(dir);

    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stats = fs.statSync(fullPath);

      // Skip ignored patterns
      if (shouldIgnore(item)) {
        continue;
      }

      if (stats.isDirectory()) {
        // Add current directory route
        routes.push({
          path: getRouteFromPath(fullPath),
          depth,
          type: "directory",
        });

        // Recursively analyze subdirectories
        const subRoutes = analyzeDirectory(fullPath, depth + 1);
        routes.push(...subRoutes);
      }
    }
  } catch (error) {
    console.error(`Error analyzing directory ${dir}:`, error);
  }

  return routes;
}

// Function to format and display results
function displayResults(routes) {
  console.log("\nApp Directory Structure Analysis");
  console.log("==============================\n");

  // Sort routes by path
  routes.sort((a, b) => a.path.localeCompare(b.path));

  // Group routes by depth
  const routesByDepth = routes.reduce((acc, route) => {
    acc[route.depth] = acc[route.depth] || [];
    acc[route.depth].push(route);
    return acc;
  }, {});

  // Display routes grouped by depth
  Object.keys(routesByDepth).forEach((depth) => {
    console.log(`Level ${depth}:`);
    console.log("-".repeat(20));

    routesByDepth[depth].forEach((route) => {
      console.log(`${" ".repeat(route.depth * 2)}${route.path}`);
    });
    console.log();
  });

  // Display summary
  console.log("Summary:");
  console.log("-".repeat(20));
  console.log(`Total routes found: ${routes.length}`);
  console.log(`Maximum depth: ${Math.max(...Object.keys(routesByDepth))}`);
}

// Main execution
try {
  if (!fs.existsSync(APP_DIR)) {
    throw new Error(
      "App directory not found! Make sure you run this script from your Next.js project root."
    );
  }

  const routes = analyzeDirectory(APP_DIR);
  displayResults(routes);

  // Export routes to JSON file
  const outputPath = path.join(process.cwd(), "app-routes.json");
  fs.writeFileSync(outputPath, JSON.stringify(routes, null, 2));
  console.log(`\nRoute information exported to: ${outputPath}`);
} catch (error) {
  console.error("Error:", error.message);
  process.exit(1);
}
