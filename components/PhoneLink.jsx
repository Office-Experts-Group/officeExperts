"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const PhoneLink = ({ 
  phoneNumber = "+61-1300-102-810", 
  displayText = "1300 102 810", 
  icon,
  iconWidth = 12,
  iconHeight = 12,
  className,
  ...props 
}) => {
  const [hasConversionTracking, setHasConversionTracking] = useState(false);
  
  // Check if conversion tracking is available
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Check if the conversion function exists
      setHasConversionTracking(typeof window.gtag_report_conversion === 'function');
      
      // Set up a MutationObserver to detect when conversion tracking becomes available
      if (!window.gtag_report_conversion) {
        const observer = new MutationObserver(() => {
          if (typeof window.gtag_report_conversion === 'function') {
            setHasConversionTracking(true);
            observer.disconnect();
          }
        });
        
        // Watch for changes to the body element
        observer.observe(document.body, { childList: true, subtree: true });
        
        return () => observer.disconnect();
      }
    }
  }, []);

  const handlePhoneClick = (e) => {
    // Track the conversion if available
    if (hasConversionTracking && typeof window.gtag_report_conversion === 'function') {
      return window.gtag_report_conversion(`tel:${phoneNumber}`);
    }
    
    // You could also track this as a separate event for phone calls
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'phone_call', {
        'event_category': 'Engagement',
        'event_label': 'Phone Call'
      });
    }
  };

  return (
    <a 
      href={`tel:${phoneNumber}`}
      onClick={handlePhoneClick}
      className={className}
      {...props}
    >
      {icon && (
        <Image 
          src={icon} 
          alt="Phone" 
          width={iconWidth} 
          height={iconHeight} 
          priority 
        />
      )}
      {displayText}
    </a>
  );
};

export default PhoneLink;