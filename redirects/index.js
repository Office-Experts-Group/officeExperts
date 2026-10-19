// redirects/index.js
// Collects every redirect for next.config.js.
// Next.js uses the first rule that matches, so keep specific rules above broad ones.
// goneUrls.js is NOT included here: it is read by proxy.js, not by next.config.js.
// All files in this folder that next.config.js loads are CommonJS (module.exports / require).
const internalRedirects = require("./internalRedirects.js");
const locationRedirects = require("./locationRedirects.js");
const sisterDomainRedirects = require("./sisterDomainRedirects.js");

module.exports = [
  ...internalRedirects,
  ...locationRedirects,
  ...sisterDomainRedirects,
];
