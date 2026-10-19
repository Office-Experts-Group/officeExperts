// redirects/locationRedirects.js
// Old city-page URL patterns. The preferred destination is /microsoft-consultants-{city}.
//
// To switch a city to its new hub: build /microsoft-consultants-{city}, then add the city
// to HUBS_BUILT below. Until then its old URLs keep going to the live
// /microsoft-support-and-training-{city} page, so visitors never land on a 404.
//
// EXCEL WAVE: remove /excel-consultants-{melbourne,perth,adelaide} (the plan keeps them as product-city pages).

const permanent = (source, destination) => ({
  source,
  destination,
  permanent: true,
});

// Cities whose /microsoft-consultants-{city} page exists
const HUBS_BUILT = new Set([
  "sydney",
  "melbourne",
  "canberra",
  "perth",
  "brisbane",
]);

const destinationFor = (city) =>
  HUBS_BUILT.has(city)
    ? `/microsoft-consultants-${city}`
    : `/microsoft-support-and-training-${city}`;

// city -> old URLs that belong to it
const OLD_URLS_BY_CITY = {
  sydney: [
    "/excel-and-access-experts-sydney",
    "/word-and-powerpoint-experts-sydney",
    "/office-and-office-365-experts-sydney",
  ],
  melbourne: [
    "/office-and-office-365-experts-melbourne",
    "/excel-consultants-melbourne",
    "/excel-and-access-experts-melbourne",
    "/office-excel-access-and-365-experts-melbourne",
    "/word-and-powerpoint-experts-melbourne",
  ],
  canberra: [
    "/excel-consultants-canberra",
    "/word-and-powerpoint-experts-canberra",
    "/office-and-office-365-experts-canberra",
  ],
  perth: [
    "/excel-consultants-perth",
    "/word-and-powerpoint-experts-perth",
    "/office-excel-access-and-365-consultants-perth",
    "/office-excel-access-and-365-experts-perth",
  ],
  brisbane: [
    "/office-excel-access-and-365-consultants-brisbane",
    "/office-excel-access-and-365-experts-brisbane",
  ],
  // ── Hubs still to build ──
  adelaide: ["/excel-consultants-adelaide"],
  darwin: ["/excel-consultants-darwin"],
  "gold-coast": [
    "/excel-consultants-gold-coast",
    "/office-and-office-365-experts-gold-coast",
  ],
  wollongong: ["/excel-consultants-wollongong"],
  "northern-rivers-nsw": ["/excel-consultants-northern-rivers-nsw"],
  "central-coast-nsw": [
    "/excel-consultants-central-coast-nsw",
    "/office-consultants-central-coast-nsw",
  ],
};

const cityRedirects = Object.entries(OLD_URLS_BY_CITY).flatMap(
  ([city, sources]) =>
    sources.map((source) => permanent(source, destinationFor(city))),
);

// Richmond stays as it is: there is no Richmond hub planned (checklist: "Richmond stays").
const richmondRedirects = [
  permanent(
    "/excel-consultants-richmond",
    "/microsoft-support-and-training-richmond",
  ),
  permanent(
    "/word-and-powerpoint-experts-richmond",
    "/microsoft-support-and-training-richmond",
  ),
  // Its siblings go to /microsoft-support-and-training-richmond, but this target page exists
  // today (/excel-and-access-experts-richmond), so this stays a single hop.
  permanent(
    "/office-and-office-365-experts-richmond",
    "/excel-and-access-experts-richmond",
  ),
];

module.exports = [...cityRedirects, ...richmondRedirects];
