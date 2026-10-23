// /services/microsoft-word/document-rebranding-services/(components)/RebrandingWhat.jsx
import React from "react";
import Link from "next/link";

// Scroll animation wrapper shared across the site
import AnimateOnScroll from "@/components/AnimateOnScroll";

import styles from "@/styles/rebrandingWhat.module.scss";

// Brand element icons and the three document illustrations, as standalone SVG components
import {
  LogoIcon,
  FontIcon,
  PaletteIcon,
  LayoutIcon,
  ToneIcon,
  WordArtSvg,
  SlideArtSvg,
  SheetArtSvg,
} from "../(svgs)/RebrandingWhatSvgs";

// The five things "applying your brand" actually covers
const brandElements = [
  {
    name: "Logo",
    Icon: LogoIcon,
    text: "Your mark in the right size and position on every cover, header and footer.",
  },
  {
    name: "Fonts",
    Icon: FontIcon,
    text: "Brand typefaces set up as real Word styles, so headings and body text follow the guidelines automatically.",
  },
  {
    name: "Colours",
    Icon: PaletteIcon,
    text: "Your palette built into themes, tables, charts and shapes, rather than matched by eye each time.",
  },
  {
    name: "Layout",
    Icon: LayoutIcon,
    text: "Margins, page structure and spacing that keep every document recognisably yours.",
  },
  {
    name: "Tone",
    Icon: ToneIcon,
    text: "Boilerplate, disclaimers and standard wording refreshed so the voice matches the visuals.",
  },
];

const wordChips = ["Letterheads", "Reports", "Proposals", "Tenders", "Manuals"];
const slideChips = ["Slide masters", "Layouts", "Theme colours"];
const sheetChips = ["Workbook themes", "Forms", "Reports"];

// Small pill list used inside each document tile
const Chips = ({ items }) => (
  <ul className={styles.chips}>
    {items.map((item) => (
      <li key={item} className={styles.chip}>
        {item}
      </li>
    ))}
  </ul>
);

const RebrandingWhat = () => (
  // scroll-margin is set in the stylesheet so in-page links clear the fixed header
  <section
    className={styles.section}
    id="no-more-headaches"
    aria-labelledby="rebranding-what-heading"
  >
    <div className={styles.inner}>
      <AnimateOnScroll animation="fade-up" duration={0.7} delay={0}>
        <header className={styles.header}>
          <div>
            <p className={styles.eyebrow}>Rebranding explained</p>
            <h2 id="rebranding-what-heading" className={styles.heading}>
              What Is{" "}
              <span className={styles.accent}>Document Rebranding?</span>
            </h2>
          </div>
          <div className={styles.intro}>
            <p>
              Document rebranding is the process of applying your updated brand
              identity (logo, fonts, colours, layout and tone) consistently to
              all of your{" "}
              <Link
                href="/services/microsoft-word/corporate-global-template-solution"
                className={styles.link}
              >
                business templates
              </Link>{" "}
              and documentation.
            </p>
            <p>
              Whether you&apos;re simply modernising your look or undergoing a
              full corporate rebrand, we help ensure your documents reflect your
              new identity with precision and consistency.
            </p>
          </div>
        </header>
      </AnimateOnScroll>

      <AnimateOnScroll animation="fade-up" duration={0.8} delay={0.1}>
        <div className={styles.bento}>
          {/* Word: the featured tile, accent backdrop */}
          <article className={`${styles.tile} ${styles.tileWord}`}>
            <div className={styles.wordLayout}>
              <div className={styles.tileText}>
                <p className={styles.label}>Microsoft Word</p>
                <h3 className={styles.title}>Word templates</h3>
                <p className={styles.body}>
                  Letterheads, reports, proposals, tenders and manuals rebuilt
                  on your new identity. We build them on real styles and page
                  structure, so the brand holds up when your team edits, instead
                  of breaking on the first paste.
                </p>
                <Chips items={wordChips} />
              </div>
              <div className={styles.art}>
                <WordArtSvg />
              </div>
            </div>
          </article>

          {/* The five brand elements: tall dark tile */}
          <article className={`${styles.tile} ${styles.tileElements}`}>
            <p className={styles.label}>What gets applied</p>
            <h3 className={styles.title}>Five brand elements, everywhere</h3>
            <ul className={styles.elements}>
              {brandElements.map(({ name, Icon, text }) => (
                <li key={name} className={styles.element}>
                  <span className={styles.elementIcon}>
                    <Icon />
                  </span>
                  <div>
                    <p className={styles.elementName}>{name}</p>
                    <p className={styles.elementText}>{text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </article>

          {/* PowerPoint: light tile */}
          <article className={`${styles.tile} ${styles.tileSlides}`}>
            <div className={styles.art}>
              <SlideArtSvg />
            </div>
            <p className={styles.label}>Microsoft PowerPoint</p>
            <h3 className={styles.title}>PowerPoint presentations</h3>
            <p className={styles.body}>
              Slide masters, layouts and theme colours rebuilt as{" "}
              <Link
                href="/services/microsoft-powerpoint"
                className={styles.link}
              >
                custom PowerPoint templates
              </Link>
              , so every new deck starts on brand. Sales pitches, board packs
              and training slides all draw from the same foundation.
            </p>
            <Chips items={slideChips} />
          </article>

          {/* Excel: dark surface tile */}
          <article className={`${styles.tile} ${styles.tileSheets}`}>
            <div className={styles.art}>
              <SheetArtSvg />
            </div>
            <p className={styles.label}>Microsoft Excel</p>
            <h3 className={styles.title}>Excel spreadsheets and forms</h3>
            <p className={styles.body}>
              Headers, colours and number formats brought onto the brand, along
              with the forms and reports your staff share with clients and
              colleagues, so they look like they came from the same business.
            </p>
            <Chips items={sheetChips} />
          </article>
        </div>
      </AnimateOnScroll>
    </div>
  </section>
);

export default RebrandingWhat;
