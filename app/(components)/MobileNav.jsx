"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

import styles from "../../styles/mobileNav.module.css";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentView, setCurrentView] = useState("main");
  const [currentDomain, setCurrentDomain] = useState("");
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [navigationHistory, setNavigationHistory] = useState(["main"]);

  useEffect(() => {
    if (typeof window !== "undefined" && !currentDomain) {
      setCurrentDomain(window.location.hostname);
    }
  }, [currentDomain]);

  const handleViewTransition = (newView) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentView(newView);
      setNavigationHistory((prev) => [...prev, newView]);
      setIsTransitioning(false);
    }, 300); // Match this with CSS transition duration
  };

  const handleBack = () => {
    if (navigationHistory.length > 1) {
      setIsTransitioning(true);
      setTimeout(() => {
        // Remove current view from history
        const newHistory = navigationHistory.slice(0, -1);
        setNavigationHistory(newHistory);
        // Set current view to the previous view
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

  const renderBackButton = () => {
    if (navigationHistory.length > 1) {
      // Get the previous view name for display
      const previousView = navigationHistory[navigationHistory.length - 2];
      const displayName =
        previousView.charAt(0).toUpperCase() +
        previousView
          .slice(1)
          .replace(/([A-Z])/g, " $1")
          .trim();

      return (
        <button onClick={handleBack} className={styles.backButton}>
          <button className={styles.backIcon}>Back</button>
          <span>Back to {displayName}</span>
        </button>
      );
    }
    return null;
  };

  const renderMainMenu = () => (
    <ul
      className={`${styles.navList} ${
        isTransitioning ? styles.fadeOut : styles.fadeIn
      }`}
    >
      <li className={styles.navItem}>
        <button
          onClick={() => handleViewTransition("home")}
          className={styles.navButton}
        >
          Home
        </button>
      </li>
      <li className={styles.navItem}>
        <button
          onClick={() => handleViewTransition("services")}
          className={styles.navButton}
        >
          Services
        </button>
      </li>
      <li className={styles.navItem}>
        <Link
          href={`https://${currentDomain}/client-testimonials`}
          onClick={closeNav}
          className={styles.navLink}
        >
          Testimonials
        </Link>
      </li>
      <li className={styles.navItem}>
        <Link
          href={`https://${currentDomain}/meet-the-team`}
          onClick={closeNav}
          className={styles.navLink}
        >
          Meet the Team
        </Link>
      </li>
      <li className={styles.navItem}>
        <Link
          href="https://www.officeexperts.com.au/faq"
          onClick={closeNav}
          className={styles.navLink}
        >
          FAQ
        </Link>
      </li>
      <li className={styles.navItem}>
        <Link
          href={`https://${currentDomain}/contact-us`}
          onClick={closeNav}
          className={styles.navLink}
        >
          Contact
        </Link>
      </li>
    </ul>
  );

  const renderHomeMenu = () => (
    <ul
      className={`${styles.navList} ${
        isTransitioning ? styles.fadeOut : styles.fadeIn
      }`}
    >
      <li className={styles.navItem}>
        <Link
          href="https://officeexperts.com.au"
          onClick={closeNav}
          className={styles.navLink}
        >
          Office Experts
        </Link>
      </li>
      <li className={styles.navItem}>
        <Link
          href="https://excelexperts.com.au"
          onClick={closeNav}
          className={styles.navLink}
        >
          Excel Experts
        </Link>
      </li>
      <li className={styles.navItem}>
        <Link
          href="https://powerplatformexperts.com.au"
          onClick={closeNav}
          className={styles.navLink}
        >
          Power Platform Experts
        </Link>
      </li>
      <li className={styles.navItem}>
        <Link
          href="https://accessexperts.com.au"
          onClick={closeNav}
          className={styles.navLink}
        >
          Access Experts
        </Link>
      </li>
      <li className={styles.navItem}>
        <Link
          href="https://wordexperts.com.au"
          onClick={closeNav}
          className={styles.navLink}
        >
          Word Experts
        </Link>
      </li>
    </ul>
  );

  const renderServicesMenu = () => (
    <ul
      className={`${styles.navList} ${
        isTransitioning ? styles.fadeOut : styles.fadeIn
      }`}
    >
      <li className={styles.navItem}>
        <Link
          href="https://www.officeexperts.com.au/services/"
          onClick={closeNav}
          className={styles.navLink}
        >
          All our services
        </Link>
      </li>
      <li className={styles.navItem}>
        <button
          onClick={() => handleViewTransition("powerPlatform")}
          className={styles.navButton}
        >
          Microsoft Power Platform
        </button>
      </li>
      <li className={styles.navItem}>
        <button
          onClick={() => handleViewTransition("officeProducts")}
          className={styles.navButton}
        >
          By Office Product
        </button>
      </li>
      <li className={styles.navItem}>
        <button
          onClick={() => handleViewTransition("businessSolutions")}
          className={styles.navButton}
        >
          Business Solutions
        </button>
      </li>
    </ul>
  );

  const renderPowerPlatformMenu = () => (
    <ul
      className={`${styles.navList} ${
        isTransitioning ? styles.fadeOut : styles.fadeIn
      }`}
    >
      <li className={styles.navItem}>
        <Link
          href="https://www.powerplatformexperts.com.au/services/microsoft-power-platform/microsoft-power-apps"
          onClick={closeNav}
          className={styles.navLink}
        >
          Microsoft Power Apps
        </Link>
      </li>
      <li className={styles.navItem}>
        <Link
          href="https://www.powerplatformexperts.com.au/services/microsoft-power-platform/microsoft-power-bi"
          onClick={closeNav}
          className={styles.navLink}
        >
          Microsoft Power BI
        </Link>
      </li>
      <li className={styles.navItem}>
        <Link
          href="https://www.powerplatformexperts.com.au/services/microsoft-power-platform/microsoft-power-automate"
          onClick={closeNav}
          className={styles.navLink}
        >
          Microsoft Power Automate
        </Link>
      </li>
      <li className={styles.navItem}>
        <Link
          href="https://www.powerplatformexperts.com.au/services/microsoft-power-platform/microsoft-power-pages"
          onClick={closeNav}
          className={styles.navLink}
        >
          Microsoft Power Pages
        </Link>
      </li>
    </ul>
  );

  const renderOfficeProductsMenu = () => (
    <ul
      className={`${styles.navList} ${
        isTransitioning ? styles.fadeOut : styles.fadeIn
      }`}
    >
      <li className={styles.navItem}>
        <Link
          href="https://www.officeexperts.com.au/services/microsoft-office/"
          onClick={closeNav}
          className={styles.navLink}
        >
          Microsoft Office
        </Link>
      </li>
      <li className={styles.navItem}>
        <Link
          href="https://www.excelexperts.com.au/"
          onClick={closeNav}
          className={styles.navLink}
        >
          Microsoft Excel
        </Link>
      </li>
      <li className={styles.navItem}>
        <Link
          href="https://www.accessexperts.com.au/"
          onClick={closeNav}
          className={styles.navLink}
        >
          Microsoft Access
        </Link>
      </li>
      <li className={styles.navItem}>
        <Link
          href="https://www.wordexperts.com.au/"
          onClick={closeNav}
          className={styles.navLink}
        >
          Microsoft Word
        </Link>
      </li>
      <li className={styles.navItem}>
        <Link
          href="https://www.officeexperts.com.au/services/microsoft-powerpoint/"
          onClick={closeNav}
          className={styles.navLink}
        >
          Microsoft PowerPoint
        </Link>
      </li>
      <li className={styles.navItem}>
        <Link
          href="https://www.officeexperts.com.au/services/microsoft-office-365/"
          onClick={closeNav}
          className={styles.navLink}
        >
          Microsoft Office 365
        </Link>
      </li>
    </ul>
  );

  const renderBusinessSolutionsMenu = () => (
    <ul
      className={`${styles.navList} ${
        isTransitioning ? styles.fadeOut : styles.fadeIn
      }`}
    >
      <li className={styles.navItem}>
        <Link
          href="https://www.officeexperts.com.au/services/by-business-solution/vba-macro-development/"
          onClick={closeNav}
          className={styles.navLink}
        >
          VBA Macro Development
        </Link>
      </li>
      <li className={styles.navItem}>
        <Link
          href="https://www.officeexperts.com.au/services/by-business-solution/custom-office-solutions/"
          onClick={closeNav}
          className={styles.navLink}
        >
          Custom Office Solutions
        </Link>
      </li>
      <li className={styles.navItem}>
        <Link
          href="https://www.officeexperts.com.au/services/by-business-solution/database-development-and-solutions/"
          onClick={closeNav}
          className={styles.navLink}
        >
          Database Solutions
        </Link>
      </li>
      <li className={styles.navItem}>
        <Link
          href="https://www.officeexperts.com.au/services/by-business-solution/online-solutions/"
          onClick={closeNav}
          className={styles.navLink}
        >
          Online Solutions
        </Link>
      </li>
      <li className={styles.navItem}>
        <Link
          href="https://www.officeexperts.com.au/services/by-business-solution/cloud-based-solutions-with-azure/"
          onClick={closeNav}
          className={styles.navLink}
        >
          Microsoft Cloud Based Solutions
        </Link>
      </li>
      <li className={styles.navItem}>
        <Link
          href="https://www.officeexperts.com.au/services/by-business-solution/dashboards/"
          onClick={closeNav}
          className={styles.navLink}
        >
          Dashboards
        </Link>
      </li>
      <li className={styles.navItem}>
        <Link
          href="https://www.officeexperts.com.au/services/by-business-solution/3rd-party-application-or-office-integration/"
          onClick={closeNav}
          className={styles.navLink}
        >
          3rd Party App or Office Integration
        </Link>
      </li>
      <li className={styles.navItem}>
        <Link
          href="https://www.officeexperts.com.au/services/by-business-solution/office-and-sql-server-integration/"
          onClick={closeNav}
          className={styles.navLink}
        >
          Office and SQL Server
        </Link>
      </li>
      <li className={styles.navItem}>
        <Link
          href="https://www.officeexperts.com.au/services/microsoft-office/upgrades-and-migration/"
          onClick={closeNav}
          className={styles.navLink}
        >
          Upgrades and Migration
        </Link>
      </li>
      <li className={styles.navItem}>
        <Link
          href="https://www.officeexperts.com.au/services/by-business-solution/add-in-creation/"
          onClick={closeNav}
          className={styles.navLink}
        >
          Add-in Creation
        </Link>
      </li>
    </ul>
  );

  const renderContent = () => {
    switch (currentView) {
      case "home":
        return renderHomeMenu();
      case "services":
        return renderServicesMenu();
      case "powerPlatform":
        return renderPowerPlatformMenu();
      case "officeProducts":
        return renderOfficeProductsMenu();
      case "businessSolutions":
        return renderBusinessSolutionsMenu();
      default:
        return renderMainMenu();
    }
  };

  return (
    <div className={styles.mobileNavContainer}>
      <button onClick={() => setIsOpen(!isOpen)} className={styles.menuButton}>
        <p className={styles.menuIcon}>Menu</p>
      </button>

      <nav className={`${styles.mobileNav} ${isOpen ? styles.isOpen : ""}`}>
        {renderBackButton()}
        {renderContent()}
      </nav>

      {isOpen && <div className={styles.overlay} onClick={closeNav} />}
    </div>
  );
};

export default MobileNav;
