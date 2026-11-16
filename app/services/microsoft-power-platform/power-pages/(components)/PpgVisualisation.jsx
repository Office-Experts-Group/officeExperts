// /app/services/microsoft-power-platform/microsoft-power-pages/(components)/PpgVisualisation.jsx

import Link from "next/link";
import styles from "@/styles/ppgVisualisation.module.scss";
import {
  PpgPowerBiMockup,
  PpgNativeMockup,
  PpgCustomMockup,
} from "../(svgs)/PpgVisualArt";

// Tabs are CSS only: each radio input sits before the tab list and the
// panels, and :checked selects the matching label and panel. No client JS.
const PPG_VISUAL_OPTIONS = [
  {
    id: "powerbi",
    label: "Power BI",
    heading: "Embedded dashboards, scoped by role",
    body: "Power Pages supports embedded Power BI reports, so signed-in users can see dashboards without leaving your portal. You control which reports show to which roles.",
    detail:
      "Row-level security in Power BI can be mapped to your portal’s web roles, so the same report serves several user types and each one sees only their permitted data. Embedding depends on your Power BI licensing and capacity, so we confirm that during scoping.",
    tags: [
      "Power BI embedding",
      "Row-level security",
      "Web roles",
      "Dashboards",
    ],
    Mockup: PpgPowerBiMockup,
  },
  {
    id: "native",
    label: "Grids & lists",
    heading: "Data views built directly in the studio",
    body: "Beyond Power BI, you can build data grids, charts and filtered list views natively in Power Pages using Liquid templates and the built-in component framework.",
    detail:
      "Liquid templates give you full control over how Dataverse records are shown. Sortable columns, filter panels and paged lists are all achievable in the low-code studio, and heavier filtering can be handled server-side with FetchXML queries.",
    tags: ["Liquid templates", "FetchXML", "Dataverse", "Low-code studio"],
    Mockup: PpgNativeMockup,
  },
  {
    id: "custom",
    label: "Custom visuals",
    heading: "JavaScript and web resources for anything else",
    body: "For more customised visuals, the platform accepts JavaScript and custom web resources, so there is room to go well beyond what the low-code component library offers.",
    detail:
      "A charting library such as Chart.js or D3 can be added to the site, and custom HTML templates can show it alongside Dataverse data fetched through the Web API.",
    tags: ["JavaScript", "Chart.js / D3", "Web resources", "Web API"],
    Mockup: PpgCustomMockup,
  },
];

const PpgVisualisation = () => {
  return (
    <section
      className={styles.ppgVisuals}
      id="ppg-visuals"
      aria-labelledby="ppg-visuals-heading"
    >
      <div className={styles.inner}>
        <header className={styles.header}>
          <span className={styles.eyebrow}>Visualisations &amp; reporting</span>
          <h2 id="ppg-visuals-heading" className={styles.headline}>
            Charts, dashboards,{" "}
            <span className={styles.accent}>and live data on your site</span>
          </h2>
          <p className={styles.intro}>
            There are three prominent ways to show data visually inside a Power
            Pages portal, from embedded reports that need no code through to
            fully custom JavaScript visuals.
          </p>
        </header>

        <fieldset className={styles.tabs}>
          <legend className={styles.legend}>Visualisation options</legend>

          {PPG_VISUAL_OPTIONS.map((o, i) => (
            <input
              key={o.id}
              type="radio"
              name="ppg-visual-option"
              id={`ppg-visual-${o.id}`}
              className={`${styles.radio} ${styles[`radio_${o.id}`]}`}
              defaultChecked={i === 0}
            />
          ))}

          <div className={styles.tabList}>
            {PPG_VISUAL_OPTIONS.map((o) => (
              <label
                key={o.id}
                htmlFor={`ppg-visual-${o.id}`}
                className={`${styles.tab} ${styles[`tab_${o.id}`]}`}
              >
                {o.label}
              </label>
            ))}
          </div>

          <div className={styles.panels}>
            {PPG_VISUAL_OPTIONS.map(
              ({ id, heading, body, detail, tags, Mockup }) => (
                <article
                  key={id}
                  className={`${styles.panel} ${styles[`panel_${id}`]}`}
                >
                  <div className={styles.panelText}>
                    <h3 className={styles.panelHeading}>{heading}</h3>
                    <p className={styles.panelBody}>{body}</p>
                    <p className={styles.panelDetail}>{detail}</p>
                    <ul className={styles.tags} aria-label="Technologies">
                      {tags.map((tag) => (
                        <li key={tag} className={styles.tag}>
                          {tag}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={styles.panelVisual}>
                    <Mockup />
                  </div>
                </article>
              ),
            )}
          </div>
        </fieldset>

        <p className={styles.after}>
          Not sure which suits you? Tell us what your users need to see and we
          will recommend one.{" "}
          <Link href="#contact" className={styles.inlineLink}>
            Ask a consultant
          </Link>
        </p>
      </div>
    </section>
  );
};

export default PpgVisualisation;
