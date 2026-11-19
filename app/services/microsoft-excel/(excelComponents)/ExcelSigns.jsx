// /app/services/microsoft-excel/(components)/ExcelSigns.jsx
// "Signs your spreadsheet needs an Excel expert": a compact bento with one
// spot illustration per tile (three tiles on top, two wide tiles below).

import styles from "@/styles/excelSigns.module.scss";

import {
  CopyPasteArt,
  ErrorsArt,
  OneOwnerArt,
  SlowArt,
  VersionsArt,
} from "../(svgs)/ExcelSignArt";

const ExcelSigns = () => {
  const signs = [
    {
      title: "It takes minutes to open",
      text: "Big, linked files slow every task down, and people start avoiding them.",
      art: <SlowArt />,
      tone: styles.lightTile,
    },
    {
      title: "Only one person understands it",
      text: "If they’re away, month-end stops. That’s a business risk, not just a file problem.",
      art: <OneOwnerArt />,
      tone: styles.darkTile,
    },
    {
      title: "Errors keep creeping in",
      text: "#REF! and #N/A errors, or totals that don’t quite match, wear down trust in the numbers.",
      art: <ErrorsArt />,
      tone: styles.accentTile,
    },
    {
      title: "Month-end means copy and paste",
      text: "Hours spent moving data between files that Power Query or a macro could combine for you, the same way every time.",
      art: <CopyPasteArt />,
      tone: styles.lightTile,
      wide: true,
    },
    {
      title: "Nobody knows which version is right",
      text: "Files emailed around, renamed and saved over until nobody is sure which one holds the real figures.",
      art: <VersionsArt />,
      tone: styles.midTile,
      wide: true,
    },
  ];

  return (
    <section
      id="excel-signs"
      className={styles.excelSigns}
      aria-labelledby="excel-signs-heading"
    >
      <div className={styles.inner}>
        <header className={styles.header}>
          <span className={styles.eyebrow}>Sound familiar?</span>
          <h2 id="excel-signs-heading" className={styles.heading}>
            Signs your spreadsheet{" "}
            <span className={styles.accent}>needs an Excel expert</span>
          </h2>
          <p className={styles.lead}>
            Most of the workbooks we’re asked to look at started small and grew.
            If two or more of these sound like yours, it’s worth a conversation.
          </p>
        </header>

        <ul className={styles.grid}>
          {signs.map((sign) => (
            <li
              key={sign.title}
              className={`${styles.tile} ${sign.tone} ${sign.wide ? styles.wide : ""}`}
            >
              <div className={styles.art}>{sign.art}</div>
              <div className={styles.body}>
                <h3 className={styles.title}>{sign.title}</h3>
                <p className={styles.text}>{sign.text}</p>
              </div>
            </li>
          ))}
        </ul>

        <p className={styles.footnote}>
          Recognise your workbook here?{" "}
          <a href="#contact">Tell us what it’s doing</a> and we’ll tell you
          honestly whether it needs a fix, a rebuild or nothing at all.
        </p>
      </div>
    </section>
  );
};

export default ExcelSigns;
