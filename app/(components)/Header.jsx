"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import styles from "../../styles/header.module.css";

import { navigationData } from "../../navigationData";

import MobileNav from "./MobileNav";
import HomeDropdown from "../../components/HomeDropdown";
import ServicesDropdown from "../../components/ServicesDropdown";
import SocialLinks from "../../components/SocialLinks";

import logo from "../../public/logo300x130.webp";

const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
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

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}>
      <div
        className={styles.logo}
        style={
          isScrolled
            ? {
                transform: "scale(0.5)",
                transition: "transform 0.3s ease-in-out",
              }
            : {}
        }
      >
        <Image src={logo} alt="Office experts logo" width={300} height={130} />
      </div>

      <div className={styles.mobNav}>
        <MobileNav />
      </div>

      <nav className={styles.nav}>
        <ul className={styles.navList}>
          {/* Home dropdown */}
          <li
            className={styles.navItem}
            onMouseEnter={() => handleMouseEnter("home")}
            onMouseLeave={handleMouseLeave}
          >
            <Link href="/">
              <p className={styles.navLink}>Home</p>
            </Link>
            {activeDropdown === "home" && <HomeDropdown />}
          </li>

          {/* Services dropdown */}
          <li
            className={styles.navItem}
            onMouseEnter={() => handleMouseEnter("services")}
            onMouseLeave={handleMouseLeave}
          >
            <p className={styles.navLink}>Services</p>
            {activeDropdown === "services" && <ServicesDropdown />}
          </li>

          {/* Static Links */}
          {navigationData.staticLinks.map((link, index) => (
            <li key={index} className={styles.navItem}>
              <Link href={link.href} className={styles.navLink}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className={styles.headerContacts}>
        <div className={styles.socialLinks}>
          <SocialLinks />
        </div>
        <svg
          style={{ cursor: "pointer" }}
          stroke="#f8f8f8"
          fill="#f8f8f8"
          strokeWidth="0"
          viewBox="0 0 24 24"
          height="1.4em"
          width="1.4em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M19.023,16.977c-0.513-0.488-1.004-0.997-1.367-1.384c-0.372-0.378-0.596-0.653-0.596-0.653l-2.8-1.337 C15.34,12.37,16,10.763,16,9c0-3.859-3.14-7-7-7S2,5.141,2,9s3.14,7,7,7c1.763,0,3.37-0.66,4.603-1.739l1.337,2.8 c0,0,0.275,0.224,0.653,0.596c0.387,0.363,0.896,0.854,1.384,1.367c0.494,0.506,0.988,1.012,1.358,1.392 c0.362,0.388,0.604,0.646,0.604,0.646l2.121-2.121c0,0-0.258-0.242-0.646-0.604C20.035,17.965,19.529,17.471,19.023,16.977z M9,14 c-2.757,0-5-2.243-5-5s2.243-5,5-5s5,2.243,5,5S11.757,14,9,14z"></path>
        </svg>
        <Link
          style={{ marginLeft: ".8rem" }}
          href="/contact-us"
          className="btn"
        >
          Contact Us
        </Link>
      </div>
    </header>
  );
};

export default Header;
