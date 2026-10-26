// /services/microsoft-word/quick-parts/(components)/QuickPartsIntro.jsx

import Link from "next/link";

// Route-specific styles, resolved through the @/ alias in jsconfig.json
import styles from "@/styles/quickPartsIntro.module.scss";

// Custom illustration of Word's Insert > Quick Parts menu
import { QuickPartsMenuSVG } from "../(svgs)/QuickPartsMenuSVG";

// Group selling points shown under the calls to action
const stats = [
  { value: "Since 2000", label: "Building Word solutions" },
  { value: "25+", label: "Programmers Australia-wide" },
  { value: "1 click", label: "To insert approved content" },
];

const QuickPartsIntro = () => (
  <section className={styles.section}>
    <div className={styles.grid}>
      <div>
        <p className={styles.eyebrow}>Word Quick Parts &amp; Building Blocks</p>
        <h2 className={styles.heading}>
          Write it once,{" "}
          <span className={styles.accent}>insert it everywhere.</span>
        </h2>

        <div className={styles.body}>
          <p>
            Most organisations have content that gets retyped, copied from old
            files or pasted from an email every week: cover pages, standard
            clauses, disclaimers, signature blocks and pricing tables. Every
            copy is another chance for outdated wording or broken formatting to
            end up in front of a client.
          </p>
          <p>
            Quick Parts solve that. We build your approved content into reusable
            building blocks, store them inside your{" "}
            <Link href="/services/microsoft-word/word-document-template-creation">
              Word document templates
            </Link>{" "}
            and organise them into galleries your team can find in seconds.
            Insert the block, fill in the details, done.
          </p>
        </div>

        <div className={styles.ctaRow}>
          <Link href="#contact" className="btn">
            Talk to a Word expert
          </Link>
          <Link href="/case-studies?site=word" className={styles.ctaSecondary}>
            See our Word projects
          </Link>
        </div>

        <div className={styles.stats}>
          {stats.map((stat) => (
            <div key={stat.label} className={styles.stat}>
              <span className={styles.statValue}>{stat.value}</span>
              <span className={styles.statLabel}>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.svgWrap}>
        <QuickPartsMenuSVG />
      </div>
    </div>
  </section>
);

export default QuickPartsIntro;
