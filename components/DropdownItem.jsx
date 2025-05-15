"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";

import styles from "../styles/header.module.css";

export default function DropdownItem({ item, handleLinkClick }) {
  const dropdownRef = useRef(null);
  const [needsScroll, setNeedsScroll] = useState(false);

  useEffect(() => {
    if (!dropdownRef.current || !item.items) return;

    const checkDropdownPosition = () => {
      const dropdown = dropdownRef.current;
      if (!dropdown) return;

      // Reset any previously applied styles first
      dropdown.style.bottom = 'auto';
      dropdown.style.top = '-1rem';
      dropdown.style.maxHeight = '';
      dropdown.style.overflowY = '';

      // Get measurements after resetting styles
      const dropdownRect = dropdown.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const dropdownHeight = dropdown.scrollHeight;
      const spaceBelow = viewportHeight - dropdownRect.top;
      
      // Add buffer space (adjust as needed)
      const buffer = 40;
      
      // Check if dropdown extends beyond viewport
      if (dropdownHeight > spaceBelow - buffer) {
        // Set a maximum height based on available space
        const maxHeight = spaceBelow - buffer;
        
        // Enable scrolling if the dropdown is too tall
        if (maxHeight < dropdownHeight) {
          dropdown.style.maxHeight = `${maxHeight}px`;
          dropdown.style.overflowY = 'auto';
          setNeedsScroll(true);
        } else {
          setNeedsScroll(false);
        }
      } else {
        setNeedsScroll(false);
      }
    };

    // Add event listeners
    const parentElement = dropdownRef.current.parentElement;
    
    if (parentElement) {
      parentElement.addEventListener("mouseenter", checkDropdownPosition);
      window.addEventListener("resize", checkDropdownPosition);
    }

    return () => {
      if (parentElement) {
        parentElement.removeEventListener("mouseenter", checkDropdownPosition);
      }
      window.removeEventListener("resize", checkDropdownPosition);
    };
  }, [item.items]);

  if (!item.items) {
    return (
      <li>
        <Link 
          href={item.href} 
          onClick={() => handleLinkClick && handleLinkClick(item.label)}
        >
          <span>{item.label}</span>
        </Link>
      </li>
    );
  }

  return (
    <li className={styles.nestedDropdown}>
      <Link 
        href={item.href} 
        onClick={() => handleLinkClick && handleLinkClick(item.label)}
      >
        <span>{item.label}</span>
      </Link>
      <ul 
        className={`${styles.nestedItems} ${needsScroll ? styles.scrollable : ''}`} 
        ref={dropdownRef}
      >
        {item.items.map((subItem, index) => (
          <DropdownItem
            key={index}
            item={subItem}
            handleLinkClick={handleLinkClick}
          />
        ))}
      </ul>
    </li>
  );
}