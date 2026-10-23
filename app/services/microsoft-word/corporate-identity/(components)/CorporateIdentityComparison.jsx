// app/corporate-identity/(components)/CorporateIdentityComparison.jsx

import Link from "next/link";
import AnimateOnScroll from "../../../components/AnimateOnScroll";
import styles from "../../../styles/corporateIdentityComparison.module.css";

// State icons for the table cells (custom SVGs kept in the route's svgs folder)
import {
  LockedIcon,
  AvailableIcon,
  ManagedIcon,
} from "../(svgs)/GovernanceStateIcons";
import TabComparison from "./TabComparison";

const groups = [
  {
    tab: "Home tab",
    rows: [
      { control: "Font", ms: "locked", oeg: "locked" },
      { control: "Font size", ms: "locked", oeg: "locked" },
      { control: "Increase / decrease font size", ms: "locked", oeg: "locked" },
      { control: "Change case", ms: "locked", oeg: "open" },
      { control: "Clear formatting", ms: "open", oeg: "open" },
      {
        control: "Bullets and numbering",
        ms: "locked",
        oeg: "managed",
        note: "Branded list buttons provided",
      },
      {
        control: "Multilevel list",
        ms: "open",
        oeg: "managed",
        note: "Branded list buttons provided",
      },
      { control: "Increase / decrease indent", ms: "locked", oeg: "open" },
      { control: "Sort", ms: "open", oeg: "open" },
      { control: "Show / hide", ms: "open", oeg: "open" },
      { control: "Bold", ms: "locked", oeg: "open" },
      { control: "Italic", ms: "locked", oeg: "open" },
      { control: "Underline", ms: "locked", oeg: "open" },
      { control: "Strikethrough", ms: "locked", oeg: "open" },
      { control: "Subscript and superscript", ms: "locked", oeg: "open" },
      { control: "Text effects and typography", ms: "locked", oeg: "locked" },
      { control: "Text highlight colour", ms: "locked", oeg: "open" },
      {
        control: "Font colour",
        ms: "locked",
        oeg: "managed",
        note: "Limited to your brand colours",
      },
      { control: "Alignment", ms: "locked", oeg: "open" },
      { control: "Line and paragraph spacing", ms: "locked", oeg: "open" },
      { control: "Shading", ms: "locked", oeg: "open" },
      { control: "Borders", ms: "locked", oeg: "open" },
    ],
  },
  {
    tab: "Layout tab",
    rows: [
      { control: "Margins", ms: "open", oeg: "open" },
      { control: "Orientation", ms: "open", oeg: "open" },
      { control: "Size", ms: "open", oeg: "open" },
      { control: "Columns", ms: "locked", oeg: "open" },
      { control: "Breaks", ms: "locked", oeg: "open" },
      { control: "Line numbers", ms: "open", oeg: "open" },
      { control: "Hyphenation", ms: "open", oeg: "open" },
      { control: "Indent and spacing", ms: "locked", oeg: "open" },
      { control: "Paragraph settings", ms: "locked", oeg: "open" },
    ],
  },
  {
    tab: "Other functions",
    rows: [{ control: "Create styles", ms: "locked", oeg: "open" }],
  },
];

// Display text and icon for each state, shared by both columns
const stateMeta = {
  locked: { label: "Locked", Icon: LockedIcon },
  open: { label: "Available", Icon: AvailableIcon },
  managed: { label: "Branded", Icon: ManagedIcon },
};

// ── Helpers ──────────────────────────────────────────────────────

// Flattens every row so the totals below always match the table data
const allRows = groups.flatMap((group) => group.rows);

// Counts controls staff can still use (fully available or brand-managed)
const countAvailable = (key) =>
  allRows.filter((row) => row[key] !== "locked").length;

const total = allRows.length;

const meters = [
  {
    key: "ms",
    name: "Microsoft Restricted Editing",
    available: countAvailable("ms"),
  },
  {
    key: "oeg",
    name: "Office Experts governed template",
    available: countAvailable("oeg"),
  },
];

// Renders one table cell's icon, label and optional note
const StateCell = ({ state, note, className }) => {
  const { label, Icon } = stateMeta[state];

  return (
    <td className={className}>
      <span className={`${styles.state} ${styles[`state_${state}`]}`}>
        <Icon />
        {/* Hidden visually on phones (icon only) but still read by screen readers */}
        <span className={styles.stateLabel}>{label}</span>
      </span>
      {note && <span className={styles.note}>{note}</span>}
    </td>
  );
};

// ── Component ────────────────────────────────────────────────────

const CorporateIdentityComparison = () => {
  return (
    <section className={styles.section} id="governance">
      <div className={styles.header}>
        <span className={styles.eyebrow}>
          Restricted editing vs governed templates
        </span>
        <h2 className={styles.heading}>
          Lock down your brand,{" "}
          <span className={styles.accent}>not your people.</span>
        </h2>
        <p className={styles.intro}>
          Word&rsquo;s built-in Restrict Editing keeps documents on-brand by
          locking almost everything, leaving staff unable to bold a word or
          adjust a margin. Our Global Template solution, added to a governed
          template through the Formatting tab, locks only what controls your
          corporate identity, such as fonts, sizes and colours, and gives your
          team the freedom they need to do their work. Without the solution, a
          governed template still functions like a standard template.
        </p>
      </div>

      {/* ── Availability meters: quick visual summary of the table ── */}
      <div className={styles.meters}>
        {meters.map((meter) => (
          <div
            key={meter.key}
            className={`${styles.meter} ${styles[`meter_${meter.key}`]}`}
          >
            <div className={styles.meterTop}>
              <span className={styles.meterName}>{meter.name}</span>
              <span className={styles.meterValue}>
                {meter.available} of {total}
              </span>
            </div>
            {/* --fill drives the bar width from the counted data */}
            <div className={styles.meterTrack}>
              <div
                className={styles.meterFill}
                style={{ "--fill": `${(meter.available / total) * 100}%` }}
              />
            </div>
            <span className={styles.meterCaption}>
              formatting controls left available to staff
            </span>
          </div>
        ))}
      </div>

      <TabComparison />

      {/* ── Full comparison table, grouped by ribbon tab ── */}
      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <caption className={styles.caption}>
            Word controls locked by Microsoft Restricted Editing compared with
            an Office Experts governed template
          </caption>
          <thead>
            <tr>
              <th scope="col">Control</th>
              <th scope="col">Microsoft Restricted Editing</th>
              <th scope="col" className={styles.oegCol}>
                Office Experts governed template
              </th>
            </tr>
          </thead>
          {groups.map((group) => (
            <tbody key={group.tab}>
              <tr>
                <th scope="rowgroup" colSpan={3} className={styles.groupRow}>
                  {group.tab}
                </th>
              </tr>
              {group.rows.map((row) => (
                <tr key={row.control} className={styles.row}>
                  <th scope="row" className={styles.control}>
                    {row.control}
                  </th>
                  <StateCell state={row.ms} />
                  <StateCell
                    state={row.oeg}
                    note={row.note}
                    className={styles.oegCol}
                  />
                </tr>
              ))}
            </tbody>
          ))}
        </table>
      </div>

      {/* Icon key, built from the same stateMeta used by the table */}
      <ul className={styles.legend}>
        {Object.entries(stateMeta).map(([state, { label, Icon }]) => (
          <li
            key={state}
            className={`${styles.state} ${styles[`state_${state}`]}`}
          >
            <Icon />
            {label}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default CorporateIdentityComparison;
