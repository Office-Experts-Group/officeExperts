// components/CompareContainer.jsx
"use client";

import { useState, useCallback, useEffect } from "react";
import CompareScrollReveal from "../../../components/CompareScrollReveal";
import Compare from "../../../components/Compare";
import styles from "../../../styles/compareContainer.module.scss";

import before1 from "../../../public/books/admin/broken.webp";
import after1 from "../../../public/books/admin/fixed.webp";

const STORAGE_KEY = "compare-walkthrough-seen";

const pages = [{ before: before1, after: after1 }];

export default function CompareContainer() {
  const [shouldListen, setShouldListen] = useState(false);

  useEffect(() => {
    const alreadySeen =
      typeof window !== "undefined" &&
      localStorage.getItem(STORAGE_KEY) === "true";
    setShouldListen(!alreadySeen);
  }, []);

  const handleFirstDrag = useCallback(() => {
    const alreadySeen = localStorage.getItem(STORAGE_KEY) === "true";
    if (alreadySeen) return;
    setCurrentStep(0);
    setWalkthroughVisible(true);
    setShouldListen(false);
    localStorage.setItem(STORAGE_KEY, "true");
  }, []);

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
                onFirstDrag={
                  shouldListen && i === 0 ? handleFirstDrag : undefined
                }
              />
            )}
          </CompareScrollReveal>
        ))}
      </section>
    </>
  );
}
