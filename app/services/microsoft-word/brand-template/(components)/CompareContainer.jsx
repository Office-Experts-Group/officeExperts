// components/CompareContainer.jsx
"use client";

import { useState, useCallback, useEffect } from "react";
import CompareScrollReveal from "../../../components/CompareScrollReveal";
import Compare from "../../../components/Compare";
import styles from "../../../styles/compareContainer.module.scss";
import { customProposalChanges } from "../../../utils/customProposal";

import before1 from "../../../public/books/customProposal/before/page1.webp";
import after1 from "../../../public/books/customProposal/after/page1.webp";
import before2 from "../../../public/books/customProposal/before/page2.webp";
import after2 from "../../../public/books/customProposal/after/page2.webp";
import before3 from "../../../public/books/customProposal/before/page3.webp";
import after3 from "../../../public/books/customProposal/after/page3.webp";
import before4 from "../../../public/books/customProposal/before/page4.webp";
import after4 from "../../../public/books/customProposal/after/page4.webp";

const STORAGE_KEY = "compare-walkthrough-seen";

const allSteps = customProposalChanges.flatMap((page) =>
  page.improvements.map((imp) => ({
    ...imp,
    pageLabel: page.label,
    pageNumber: page.page,
  })),
);

const pages = [
  { before: before1, after: after1 },
  { before: before2, after: after2 },
  { before: before3, after: after3 },
  { before: before4, after: after4 },
];

export default function CompareContainer() {
  const [walkthroughVisible, setWalkthroughVisible] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [shouldListen, setShouldListen] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

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

  const closeWalkthrough = useCallback(() => {
    setIsExiting(true);
    setTimeout(() => {
      setWalkthroughVisible(false);
      setIsExiting(false);
    }, 300);
  }, []);

  const handleNext = useCallback(() => {
    if (currentStep < allSteps.length - 1) {
      setCurrentStep((s) => s + 1);
    } else {
      closeWalkthrough();
    }
  }, [currentStep, closeWalkthrough]);

  const handleSkip = useCallback(() => closeWalkthrough(), [closeWalkthrough]);

  const step = allSteps[currentStep];
  const isLastStep = currentStep === allSteps.length - 1;
  const progressPercent = ((currentStep + 1) / allSteps.length) * 100;

  return (
    <>
      {walkthroughVisible && (
        <div
          className={`${styles.walkthroughOverlay} ${isExiting ? styles.walkthroughExiting : ""}`}
          role="dialog"
          aria-modal="true"
          aria-label="Template improvements walkthrough"
        >
          <div className={styles.walkthroughCard}>
            <div className={styles.progressBar}>
              <div
                className={styles.progressFill}
                style={{ width: `${progressPercent}%` }}
              />
            </div>
            <span className={styles.pageBadge}>{step.pageLabel}</span>
            <span className={styles.stepCounter}>
              {currentStep + 1} / {allSteps.length}
            </span>
            <div className={styles.walkthroughContent} key={currentStep}>
              <h3 className={styles.walkthroughTitle}>{step.title}</h3>
              <p className={styles.walkthroughDetail}>{step.detail}</p>
            </div>
            <div className={styles.walkthroughActions}>
              <button className={styles.skipBtn} onClick={handleSkip}>
                Skip all
              </button>
              <button className={styles.nextBtn} onClick={handleNext}>
                {isLastStep ? "Done" : "Next"}
                {!isLastStep && (
                  <svg
                    viewBox="0 0 16 16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M3 8h10M9 4l4 4-4 4" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      )}

      <section className={styles.compareContainer}>
        <div className={styles.headingBlock}>
          <h2 className={styles.heading}>What Word Templates Can Do For You</h2>
          <p className={styles.intro}>
            Every document you send is a reflection of your business. Without a
            template, Microsoft Word has to make its own decisions defaulting to
            mismatched fonts, inconsistent spacing, and layouts that shift
            unpredictably between machines. A professionally built Word template
            removes all of that uncertainty. Your headings, body text, colours,
            margins, and table styles are locked in from the moment you open the
            document. The result is a file that looks deliberate, prints
            correctly, and represents your brand professionally.
          </p>
        </div>

        <div className={styles.grid}>
          {pages.map((page, i) => (
            <CompareScrollReveal key={i} index={i}>
              {/*
                Render prop now provides three values:
                  scrollPosition  – the scroll-driven 0–100 value
                  onDragStart     – call this when drag begins to pause scroll updates
                  onDragEnd       – call this when drag ends to resume scroll updates
              */}
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
        </div>
      </section>
    </>
  );
}
