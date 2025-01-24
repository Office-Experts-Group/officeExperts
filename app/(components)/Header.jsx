"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import styles from "../../styles/header.module.css";

import { navigationData } from "../../navigationData";
import ServicesDropdown from "../../components/ServicesDropdown";
import SocialLinks from "../../components/SocialLinks";
import MobileNav from "../../components/MobileNavigation/MobileNav";

import logo from "../../public/logo300x130.webp";
import certified from "../../public/microsoft/partnerLogo.webp";
import ideaBlue from "../../public/icons/ideaBlue.webp";

const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [logoHover, setLogoHover] = useState(false);

  useEffect(() => {
    // Check initial scroll position
    const initialScroll = window.scrollY > 10;
    setIsScrolled(initialScroll);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseEnter = (dropdown) => {
    setActiveDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  const handleLinkClick = () => {
    setActiveDropdown(null);
  };

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}>
      <div
        className={`${styles.logo} ${isScrolled ? styles.scrolledLogo : ""}`}
      >
        <Link href="/">
          <Image
            src={logo}
            alt="Office experts logo"
            width={300}
            height={130}
            className={styles.logoImg}
            priority
          />
        </Link>
      </div>

      <nav className={styles.nav}>
        <ul className={styles.navList}>
          {/* Home */}
          <li className={styles.navItem}>
            <Link href="/" className={styles.navLink}>
              <span>Home</span>
            </Link>
          </li>

          {/* Services dropdown */}
          <li
            className={styles.navItem}
            onMouseEnter={() => handleMouseEnter("services")}
            onMouseLeave={handleMouseLeave}
          >
            <div className={styles.navLink}>
              <span>Services</span>
            </div>
            {activeDropdown === "services" && (
              <ServicesDropdown handleLinkClick={handleLinkClick} />
            )}
          </li>

          {/* Static Links */}
          {navigationData.staticLinks.map((link, index) => (
            <li key={index} className={styles.navItem}>
              <Link href={link.href} className={styles.navLink}>
                <span>{link.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div
        className={
          isScrolled ? styles.microContainerScrolled : styles.microContainer
        }
        onMouseEnter={() => setLogoHover(true)}
        onMouseLeave={() => setLogoHover(false)}
      >
        <Image
          src={certified}
          alt="Microsoft certified logo"
          width={130}
          height={85}
          className={isScrolled ? styles.microLogoScrolled : styles.microLogo}
        />

        {logoHover && (
          <div
            className={`${styles.logoHover} ${
              isScrolled && styles.logoHoverScrolled
            }`}
          >
            <Image src={ideaBlue} alt="Idea Blue Logo" width={60} height={60} />
            <p>
              We are officially Microsoft Certified, Microsoft Partners and
              Certified Solutions Associates!
            </p>
          </div>
        )}
      </div>

      <div className={styles.headerContacts}>
        <div className={styles.socialLinks}>
          <SocialLinks />
        </div>
        <Link
          href="/contact-us"
          className="btn"
          aria-label="contact us page link"
        >
          Contact Us
        </Link>
      </div>

      {/* <MobileNav /> */}
      <MobileNav />
    </header>
  );
};

export default Header;
