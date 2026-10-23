// app/google-docs-to-word-migration/(components)/GoogleMigrationFormatting.jsx
import React from "react";
import Link from "next/link";

// Shared site component: fades content in as it scrolls into view
import AnimateOnScroll from "@/components/AnimateOnScroll";

// Styles for this component (styles/googleMigrationFormatting.module.scss)
import styles from "@/styles/googleMigrationFormatting.module.scss";

// One illustration per tile; each inherits its colour from the tile
import { SectionsSvg } from "../(svgs)/SectionsSvg";
import { TypographySvg } from "../(svgs)/TypographySvg";
import { PositioningSvg } from "../(svgs)/PositioningSvg";
import { MasterDocumentSvg } from "../(svgs)/MasterDocumentSvg";
import { TableDesignSvg } from "../(svgs)/TableDesignSvg";
import { PublishingSvg } from "../(svgs)/PublishingSvg";

// tone: "brand" (accent), "surface" (dark) or "paper" (white)
// id also picks the grid placement where the stylesheet defines one (layouts, typography, publishing)
const tiles = [
  {
    id: "layouts",
    tone: "brand",
    Art: SectionsSvg,
    title: "Complex document layouts",
    body: "Create multi-section documents with varying headers, footers and page orientations within a single file. Section breaks allow seamless transitions from portrait to landscape, so a wide financial table can sit inside a portrait report without breaking the page numbering or the header.",
    tags: ["Section breaks", "Mixed orientation", "Linked headers and footers"],
  },
  {
    id: "typography",
    tone: "surface",
    Art: TypographySvg,
    title: "Professional typography and styling control",
    body: (
      <>
        Access advanced character spacing, ligature controls, OpenType features
        and precise baseline adjustments. Word’s comprehensive style management,
        paired with a proper{" "}
        <Link href="/brand-template" className={styles.link}>
          brand template
        </Link>
        , keeps your corporate look consistent across entire document libraries.
      </>
    ),
    tags: ["OpenType features", "Ligatures", "Style sets"],
  },
  {
    id: "positioning",
    tone: "paper",
    Art: PositioningSvg,
    title: "Precision image and object positioning",
    body: "Word’s object positioning tools give you exact control over images, shapes and text boxes. Use sophisticated text wrapping and anchor objects to specific page elements, so layouts hold their shape when the content changes.",
    tags: ["Anchored objects", "Text wrapping", "Alignment guides"],
  },
  {
    id: "master",
    tone: "surface",
    Art: MasterDocumentSvg,
    title: "Master document management for large publications",
    body: "Manage large documents as collections of subdocuments, so several team members can work on different sections at once while formatting, numbering and cross-references stay consistent across the whole publication.",
    tags: ["Subdocuments", "Shared styles", "Unified numbering"],
  },
  {
    id: "tables",
    tone: "brand",
    Art: TableDesignSvg,
    title: "Advanced table design and data visualisation",
    body: "Build complex tables with merged cells, custom borders, shading patterns and nested tables. Repeating header rows across page breaks and sophisticated table styles are essential for financial documents and technical specifications.",
    tags: ["Merged cells", "Repeating headers", "Nested tables"],
  },
  {
    id: "publishing",
    tone: "surface",
    Art: PublishingSvg,
    title: "Publishing-grade output control",
    body: (
      <>
        Advanced print settings, PDF export options with accessibility features
        and precise page layout controls help ensure documents keep their
        intended appearance across different printers and viewing devices. We
        also build{" "}
        <Link href="/accessibility" className={styles.link}>
          accessible Word documents
        </Link>{" "}
        and handle{" "}
        <Link href="/word-to-pdf-conversion" className={styles.link}>
          Word to PDF conversion
        </Link>{" "}
        to your exact specification.
      </>
    ),
    tags: ["Tagged PDF export", "Print-ready settings", "Accessibility checks"],
  },
];

const GoogleMigrationFormatting = () => (
  <section className={styles.section}>
    <div className={styles.inner}>
      <AnimateOnScroll animation="fade-up" duration={0.6}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>Formatting and design</p>
          <h2 className={styles.heading}>
            Advanced formatting and design capabilities{" "}
            <span className={styles.muted}>that Google Docs can’t match</span>
          </h2>
          <p className={styles.lead}>
            When your organisation needs professional-grade documents, Google
            Docs’ basic formatting tools quickly become a bottleneck. Microsoft
            Word’s advanced design capabilities enable you to create
            sophisticated documents that meet enterprise standards and
            professional publishing requirements.
          </p>
        </div>
      </AnimateOnScroll>

      <AnimateOnScroll animation="fade-up" duration={0.6} delay={0.1}>
        <div className={styles.bento}>
          {tiles.map(({ id, tone, Art, title, body, tags }) => (
            <article
              key={id}
              className={`${styles.tile} ${styles[id] ?? ""} ${styles[tone]}`}
            >
              <div className={styles.art}>
                <Art />
              </div>
              <div className={styles.copy}>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.body}>{body}</p>
                <ul className={styles.tags}>
                  {tags.map((t) => (
                    <li key={t} className={styles.tag}>
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </AnimateOnScroll>
    </div>
  </section>
);

export default GoogleMigrationFormatting;
