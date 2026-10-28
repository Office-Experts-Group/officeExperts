// redirects/locationRedirects.js
// Old city-page URL patterns. Every city below has a live /microsoft-consultants-{city} page,
// so all of its old URLs redirect straight to it.
//
// Not listed here on purpose:
//   - /microsoft-support-and-training-{city}: separate pages, left alone.
//   - /microsoft-consultants-cairns: new page, no legacy URLs.
//   - Richmond: no hub planned, handled separately below.
//
// EXCEL WAVE: remove /excel-consultants-{melbourne,perth,adelaide} (the plan keeps them as product-city pages).

const permanent = (source, destination) => ({
  source,
  destination,
  permanent: true,
});

const destinationFor = (city) => `/microsoft-consultants-${city}`;

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
  adelaide: [
    "/excel-consultants-adelaide",
    "/office-excel-access-and-365-experts-adelaide",
  ],
  darwin: [
    "/excel-consultants-darwin",
    "/office-excel-access-and-365-experts-darwin",
  ],
  "gold-coast": [
    "/excel-consultants-gold-coast",
    "/office-and-office-365-experts-gold-coast",
    "/word-and-powerpoint-experts-gold-coast",
  ],
  wollongong: [
    "/excel-consultants-wollongong",
    "/office-excel-access-and-365-experts-wollongong",
  ],
  "northern-rivers-nsw": [
    "/excel-consultants-northern-rivers-nsw",
    "/office-excel-access-and-365-experts-northern-rivers-nsw",
  ],
  "central-coast-nsw": [
    "/excel-consultants-central-coast-nsw",
    "/office-consultants-central-coast-nsw",
    "/excel-and-access-experts-central-coast-nsw",
    "/office-and-office-365-experts-central-coast-nsw",
  ],
};

// Turn the city -> sources map into redirect objects
const cityRedirects = Object.entries(OLD_URLS_BY_CITY).flatMap(
  ([city, sources]) =>
    sources.map((source) => permanent(source, destinationFor(city))),
);

// Richmond stays as it is: there is no Richmond hub planned (checklist: "Richmond stays").
const richmondRedirects = [
  permanent(
    "/word-and-powerpoint-experts-richmond",
    "/microsoft-support-and-training-richmond",
  ),
  permanent(
    "/office-and-office-365-experts-richmond",
    "/microsoft-consultants-richmond",
  ),
  permanent(
    "//excel-and-access-experts-richmond",
    "/microsoft-consultants-richmond",
  ),
];

module.exports = [...cityRedirects, ...richmondRedirects];
