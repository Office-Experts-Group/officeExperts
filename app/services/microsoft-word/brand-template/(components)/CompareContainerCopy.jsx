// /services/microsoft-word/brand-template/(components)/CompareContainerCopy.jsx
"use client";

import CompareScrollReveal from "../../(wordComponents)/CompareScrollReveal";
import Compare from "../../(wordComponents)/Compare";

import styles from "@/styles/compareContainer.module.scss";

import before1 from "@/public/books/admin/broken.webp";
import after1 from "@/public/books/admin/fixed.webp";

const pages = [{ before: before1, after: after1 }];

export default function CompareContainer() {
  return (
    <>
      <section className={styles.container}>
        {pages.map((page, i) => (
          <CompareScrollReveal key={i} index={i}>
            {(scrollPosition, onDragStart, onDragEnd) => (
              <Compare
                before={page.before}
                after={page.after}
                beforeAlt={`Page ${i + 1} before template applied`}
                afterAlt={`Page ${i + 1} after template applied`}
                controlledSplit={scrollPosition}
                onDragStart={onDragStart}
                onDragEnd={onDragEnd}
              />
            )}
          </CompareScrollReveal>
        ))}
      </section>
    </>
  );
}
