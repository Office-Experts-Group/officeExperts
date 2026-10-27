// /services/microsoft-word/word-document-template-creation/(components)/TemplateDocumentTypes.jsx

import Link from "next/link";

import AnimateOnScroll from "@/components/AnimateOnScroll";
import TemplateCards from "../../(wordComponents)/TemplateCards";

// One illustration per tile, so no two tiles look alike
import { ProposalArt } from "../(svgs)/ProposalArt";
import { ReportArt } from "../(svgs)/ReportArt";
import { LetterheadArt } from "../(svgs)/LetterheadArt";
import { ContractArt } from "../(svgs)/ContractArt";
import { AgendaArt } from "../(svgs)/AgendaArt";
import { PolicyArt } from "../(svgs)/PolicyArt";
import { BriefingArt } from "../(svgs)/BriefingArt";
import { FactSheetArt } from "../(svgs)/FactSheetArt";
import { FormArt } from "../(svgs)/FormArt";

import styles from "@/styles/templateDocumentTypes.module.scss";

import page1 from "@/public/books/environment/page1.webp";
import page2 from "@/public/books/environment/page2.webp";
import page3 from "@/public/books/environment/page3.webp";
import page4 from "@/public/books/environment/page4.webp";
import page5 from "@/public/books/environment/page5.webp";
import page6 from "@/public/books/environment/page6.webp";
import page7 from "@/public/books/environment/page7.webp";
import page8 from "@/public/books/environment/page8.webp";

const images = [page1, page2, page3, page4, page5, page6, page7, page8];

// Bento tiles in reading order. The grid has four columns and places them automatically:
//   shape: "hero" = 2 x 2, "wide" = 2 x 1, "tall" = 1 x 2, "small" = 1 x 1
//   tone:  "accent" or "dark" for a coloured tile, "light" for the standard tile
const documents = [
  {
    title: "Proposals",
    text: "Polished proposals that impress from the first page.",
    Art: ProposalArt,
    shape: "hero",
    tone: "accent",
  },
  {
    title: "Reports",
    text: "Comprehensive reports with clean, navigable layouts.",
    Art: ReportArt,
    shape: "wide",
    tone: "dark",
  },
  {
    title: "Letterheads and memos",
    text: "Refined letterheads and memos that showcase your brand.",
    Art: LetterheadArt,
    shape: "small",
    tone: "light",
  },
  {
    title: "Contracts and quotes",
    text: "Branded contracts, quotes and agreements that look the same every time.",
    Art: ContractArt,
    shape: "tall",
    tone: "accent",
  },
  {
    title: "Agendas and minutes",
    text: "Structured agendas and meeting minutes for clear communication.",
    Art: AgendaArt,
    shape: "small",
    tone: "light",
  },
  {
    title: "Policies and procedures",
    text: "Controlled policies, procedures and handbooks with automatic numbering and contents pages.",
    Art: PolicyArt,
    shape: "wide",
    tone: "dark",
  },
  {
    title: "Briefing papers",
    text: (
      <>
        Briefing papers and submissions for{" "}
        <Link href="/services/microsoft-word/government-departments">
          government departments
        </Link>
        .
      </>
    ),
    Art: BriefingArt,
    shape: "small",
    tone: "light",
  },
  {
    title: "Fact sheets and flyers",
    text: "One-page summaries that keep a designed look inside Word.",
    Art: FactSheetArt,
    shape: "small",
    tone: "accent",
  },
  {
    title: "Forms",
    text: (
      <>
        Interactive{" "}
        <Link href="/services/microsoft-word/fill-in-forms">fill-in forms</Link>{" "}
        that guide people through each field and protect the layout.
      </>
    ),
    Art: FormArt,
    shape: "wide",
    tone: "light",
  },
];

// Class lookups; the "small" shape and "light" tone are the defaults and need no extra class
const shapeClass = {
  hero: styles.shapeHero,
  wide: styles.shapeWide,
  tall: styles.shapeTall,
};
const toneClass = {
  accent: styles.toneAccent,
  dark: styles.toneDark,
};

const TemplateDocumentTypes = () => {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <AnimateOnScroll animation="fade-up" duration={0.8}>
          <div className={styles.header}>
            <span className={styles.eyebrow}>What we create</span>
            <h2 className={styles.heading}>
              What We Can Create <span className={styles.accent}>for You</span>
            </h2>
          </div>
        </AnimateOnScroll>

        <ul className={styles.bento}>
          {documents.map(({ title, text, Art, shape, tone }) => (
            <li
              key={title}
              className={`${styles.tile} ${shapeClass[shape] ?? ""} ${toneClass[tone] ?? ""}`}
            >
              <span className={styles.art}>
                <Art />
              </span>
              <div className={styles.tileBody}>
                <h3 className={styles.tileTitle}>{title}</h3>
                <p>{text}</p>
              </div>
            </li>
          ))}
        </ul>

        {/* Examples of finished pages from our template library */}
        <div className={styles.showcase}>
          <TemplateCards images={images} cardWidth={340} />
        </div>
      </div>
    </section>
  );
};

export default TemplateDocumentTypes;
