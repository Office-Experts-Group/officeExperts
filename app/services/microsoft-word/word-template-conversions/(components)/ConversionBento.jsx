// /word-template-conversions/(components)/ConversionBento.jsx
// Bento grid covering every conversion service on one page. Tiles are data
// driven: `size` and `tone` map directly to classes in the stylesheet.
import Link from "next/link";

import {
  ArrowIcon,
  CheckIcon,
  DotGrid,
  FormIcon,
  GridIcon,
  LayersIcon,
  PdfIcon,
  Rings,
  ShieldIcon,
  TemplateIcon,
} from "../(svgs)/Icons";
import styles from "@/styles/conversionBento.module.scss";

const TILES = [
  {
    id: "adobe",
    size: "feature",
    tone: "accent",
    Icon: LayersIcon,
    eyebrow: "Design to Word",
    heading: "Adobe to Word Templates",
    body: [
      "Are you a graphic artist struggling to create Word templates that are identical to your brilliant Adobe layouts? Do your Word templates look great but not function well?",
      "We create Word templates that match your Adobe layouts closely and have all of the correct functionality to keep your clients happy.",
    ],
    points: [
      "Layouts matched to your Adobe artwork",
      "Built on real styles, not manual formatting",
      "Branding locked in, easy for anyone to use",
    ],
  },
  {
    id: "pdf",
    size: "wide",
    tone: "light",
    Icon: PdfIcon,
    eyebrow: "PDF to Word",
    heading: "PDF to Word Conversions",
    body: [
      "Important documents locked away in PDF that you need to edit, update or rebrand? We keep your original design intact while making the document fully editable in Word.",
      "Online converters often break layouts, lose images and strip out essential formatting, which means more time fixing errors than working on the document.",
    ],
  },
  {
    id: "other",
    size: "compact",
    tone: "dark",
    Icon: GridIcon,
    eyebrow: "Everything else",
    heading: "Other conversions to Word",
    body: [
      "InDesign, Illustrator and other formats, rebuilt as professional, easy to use Word documents.",
    ],
  },
  {
    id: "stat",
    size: "compact",
    tone: "tint",
    stat: "25+",
    heading: "Years of Word experience",
    body: ["Australian-owned and established in 2000."],
  },
  {
    id: "forms",
    size: "wide",
    tone: "dark",
    Icon: FormIcon,
    eyebrow: "Word to PDF",
    heading: "Fillable and editable PDF forms",
    body: [
      "Word documents rebuilt in Adobe Acrobat Pro with text fields, checkboxes, dropdowns and signature fields your clients or staff can complete on screen.",
    ],
    points: [
      "Field validation and required fields",
      "Logical tab order, tested before delivery",
    ],
    link: {
      href: "/services/microsoft-word/fill-in-forms",
      text: "See our fill-in form service",
    },
  },
  {
    id: "reliable",
    size: "compact",
    tone: "light",
    Icon: TemplateIcon,
    eyebrow: "Reusable",
    heading: "Templates that export cleanly",
    body: [
      "Rebuilt once so every future export to PDF holds its formatting, with no manual checking.",
    ],
  },
  {
    id: "secure",
    size: "compact",
    tone: "accent",
    Icon: ShieldIcon,
    eyebrow: "Confidential",
    heading: "Secure handling",
    body: [
      "Contracts, HR records and financial documents handled through an agreed process, never a random online tool.",
    ],
  },
];

const ConversionBento = () => {
  return (
    <section className={styles.section} id="services">
      <div className={styles.inner}>
        <header className={styles.header}>
          <span className={styles.eyebrow}>What we convert</span>
          <h2 className={styles.heading}>
            Every route into, and out of,{" "}
            <span className={styles.accentWord}>a Word template.</span>
          </h2>
        </header>

        <div className={styles.grid}>
          {TILES.map((tile) => (
            <article
              key={tile.id}
              id={tile.id}
              className={`${styles.tile} ${styles[tile.size]} ${styles[tile.tone]}`}
            >
              {/* Decorative textures only on the solid-colour tiles */}
              {(tile.tone === "accent" || tile.tone === "dark") && (
                <DotGrid className={styles.dots} />
              )}
              {tile.stat && <Rings className={styles.rings} />}

              {tile.Icon && (
                <span className={styles.icon}>
                  <tile.Icon />
                </span>
              )}
              {tile.stat && <p className={styles.stat}>{tile.stat}</p>}
              {tile.eyebrow && (
                <p className={styles.tileEyebrow}>{tile.eyebrow}</p>
              )}

              <h3 className={styles.tileHeading}>{tile.heading}</h3>

              {tile.body.map((text) => (
                <p key={text}>{text}</p>
              ))}

              {tile.points && (
                <ul className={styles.points}>
                  {tile.points.map((point) => (
                    <li key={point}>
                      <CheckIcon />
                      {point}
                    </li>
                  ))}
                </ul>
              )}

              {tile.link && (
                <Link href={tile.link.href} className={styles.link}>
                  {tile.link.text}
                  <ArrowIcon />
                </Link>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ConversionBento;
