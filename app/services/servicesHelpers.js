// /app/services/servicesHelpers.js
// Small, separate helper functions shared by the services hub components.

// Returns true for root-relative paths (Office Experts pages), false for full URLs.
export function isInternalHref(href) {
  return typeof href === "string" && href.startsWith("/");
}

// Builds the schema.org ItemList entries from a list of { name, href } items.
// Relative paths are turned into absolute URLs because structured data needs them.
export function toListItems(items, siteUrl) {
  return items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    url: isInternalHref(item.href) ? `${siteUrl}${item.href}` : item.href,
  }));
}
