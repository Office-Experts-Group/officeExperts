"use client";
import React from "react";
import { navigationData } from "../../navigationData";
import MobileNavList from "./MobileNavList";

const getMenuItems = (currentView = "main") => {
  switch (currentView) {
    case "main":
      return [
        { label: "Home", href: "/" },
        { label: "Services", items: navigationData.services.items },
        { label: "About Us", items: navigationData.aboutUs.items },
        { label: "Testimonials", href: "/client-testimonials" },
        { label: "Contact Us", href: "/contact-us" },
      ];
    case "Services":
      return navigationData.services.items;
    case "About Us":
      return navigationData.aboutUs.items || [];
    default:
      const serviceCategory = navigationData.services.items.find(
        (item) => item.label === currentView
      );
      if (serviceCategory?.items) {
        return serviceCategory.items;
      }
      return getMenuItems("main");
  }
};

export default function MobileNavContent({
  currentView,
  onItemClick,
  onNavigate,
  styles,
  isTransitioning,
}) {
  const items = getMenuItems(currentView);

  return (
    <MobileNavList
      items={items}
      onItemClick={onItemClick}
      onNavigate={onNavigate}
      styles={styles}
      isTransitioning={isTransitioning}
    />
  );
}
