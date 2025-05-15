"use client";
import { useState } from "react";

import MobileNavButton from "./MobileNavButton";
import MobileNavBackButton from "./MobileNavBackButton";
import MobileNavContent from "./MobileNavContent";
import MobileContact from "./MobileContact";
import SocialLinks from "../SocialLinks";

import styles from "../../styles/mobileNav.module.css";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentView, setCurrentView] = useState("main");
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [navigationHistory, setNavigationHistory] = useState(["main"]);

  const handleViewTransition = (newView) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentView(newView);
      setNavigationHistory((prev) => [...prev, newView]);
      setIsTransitioning(false);
    }, 300);
  };

  const handleBack = () => {
    if (navigationHistory.length > 1) {
      setIsTransitioning(true);
      setTimeout(() => {
        const newHistory = navigationHistory.slice(0, -1);
        setNavigationHistory(newHistory);
        setCurrentView(newHistory[newHistory.length - 1]);
        setIsTransitioning(false);
      }, 300);
    }
  };

  const closeNav = () => {
    setIsOpen(false);
    setTimeout(() => {
      setCurrentView("main");
      setNavigationHistory(["main"]);
    }, 300);
  };

  return (
    <div className={styles.mobileNavContainer}>
      <MobileNavButton isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />

      <nav className={`${styles.mobileNav} ${isOpen ? styles.isOpen : ""}`}>
        <MobileNavBackButton
          onClick={handleBack}
          previousViewName={
            navigationHistory.length > 1
              ? navigationHistory[navigationHistory.length - 2]
              : null
          }
          styles={styles}
        />

        <MobileNavContent
          currentView={currentView}
          onItemClick={handleViewTransition}
          onNavigate={closeNav}
          styles={styles}
          isTransitioning={isTransitioning}
        />

        <MobileContact styles={styles} />

        <div className={styles.socialLinksContainer}>
          <SocialLinks styles={styles} inNav={true} />
        </div>
      </nav>

      {isOpen && (
        <div className={styles.overlay} onClick={closeNav}>
          <button className={styles.closeBtn}>CLOSE</button>
        </div>
      )}
    </div>
  );
}
