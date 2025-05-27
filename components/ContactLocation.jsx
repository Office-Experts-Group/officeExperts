"use client";
import React, { useState, useRef, useEffect } from "react";
import dynamic from "next/dynamic";

const SurveyForm = dynamic(() => import("./SurveyForm"));

import styles from "../styles/contact.module.css";

const ContactLocation = ({ location }) => {
  const [formData, setFormData] = useState({
    location: location,
    service: "",
    name: "",
    email: "",
    phone: "",
    message: "",
    honeypot: "",
  });

  const [error, setError] = useState({});
  const [success, setSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasConversionTracking, setHasConversionTracking] = useState(false);

  // Create refs for form fields that might need focus
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);

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

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Object to map error fields to their refs
  const fieldRefs = {
    name: nameRef,
    email: emailRef,
    message: messageRef,
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError({});
    const newError = {};

    if (!formData.name.trim()) {
      newError.name = "*Name is required...";
    }
    if (!formData.email.trim()) {
      newError.email = "*Email is required...";
    } else if (!emailRegex.test(formData.email.trim())) {
      newError.email = "*Email is not valid...";
    }
    if (!formData.message.trim()) {
      newError.message = "*Message is required...";
    }

    if (Object.keys(newError).length > 0) {
      setError(newError);
      setIsSubmitting(false);
      
      // Get the first error field
      const firstErrorField = Object.keys(newError)[0];
      // Get the corresponding ref
      const ref = fieldRefs[firstErrorField];

      if (ref && ref.current) {
        // Use setTimeout to ensure the DOM has updated
        setTimeout(() => {
          ref.current.scrollIntoView({ behavior: "smooth", block: "center" });
          ref.current.focus();
        }, 100);
      }
      return;
    }

    if (formData.honeypot) {
      setIsSubmitting(false);
      return; // Silent return for bot submissions
    }

    try {
      const res = await fetch("/api/contactForm", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        // Track conversion if available
        if (hasConversionTracking && typeof window.gtag_report_conversion === 'function') {
          window.gtag_report_conversion();
        }
        
        // Send additional event to Google Analytics
        if (typeof window.gtag === 'function') {
          window.gtag('event', 'contact_location_submission', {
            'event_category': 'Forms',
            'event_label': `Location Contact: ${location}`,
            'value': 1
          });
        }
        
        setSuccess(true);
        setFormData({
          location: location,
          service: "",
          name: "",
          email: "",
          phone: "",
          message: "",
          honeypot: "",
        });
      } else {
        setError({
          general: "Something went wrong. Please try again.",
        });
      }
    } catch (err) {
      setError({
        general: "There was an error submitting the form.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (error[name]) {
      setError((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  if (success) {
    return (
      <div className={styles.successMessage} role="alert" aria-live="polite">
        <SurveyForm name={formData.name || ""} email={formData.email || ""} />
      </div>
    );
  }

  return (
    <form
      className={styles.contactForm}
      onSubmit={handleSubmit}
      noValidate
      aria-label="Contact form"
      role="form"
    >
      {error.general && (
        <div className={styles.generalError} role="alert">
          {error.general}
        </div>
      )}
      
      <div className={styles.formField}>
        <label htmlFor="name" className={styles.requiredField}>
          Name
          <span className={styles.requiredIndicator} aria-hidden="true">
            *
          </span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          aria-required="true"
          aria-invalid={!!error.name}
          aria-describedby={error.name ? "name-error" : undefined}
          required
          ref={nameRef}
          disabled={isSubmitting}
        />
        {error.name && (
          <p
            id="name-error"
            className={styles.errorMessage}
            role="alert"
            aria-live="polite"
          >
            {error.name}
          </p>
        )}
      </div>

      <div className={styles.formField}>
        <label htmlFor="message" className={styles.requiredField}>
          Message
          <span className={styles.requiredIndicator} aria-hidden="true">
            *
          </span>
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          aria-required="true"
          aria-invalid={!!error.message}
          aria-describedby={error.message ? "message-error" : undefined}
          placeholder="Your message..."
          required
          ref={messageRef}
          disabled={isSubmitting}
        />
        {error.message && (
          <p
            id="message-error"
            className={styles.errorMessage}
            role="alert"
            aria-live="polite"
          >
            {error.message}
          </p>
        )}
      </div>

      <div className={styles.formField}>
        <label htmlFor="email" className={styles.requiredField}>
          Email
          <span className={styles.requiredIndicator} aria-hidden="true">
            *
          </span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          aria-required="true"
          aria-invalid={!!error.email}
          aria-describedby={error.email ? "email-error" : undefined}
          placeholder="eg. john@example.com"
          required
          ref={emailRef}
          disabled={isSubmitting}
        />
        {error.email && (
          <p
            id="email-error"
            className={styles.errorMessage}
            role="alert"
            aria-live="polite"
          >
            {error.email}
          </p>
        )}
      </div>

      <div className={styles.formField}>
        <label htmlFor="phone" className={styles.label}>
          Phone
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          aria-required="false"
          placeholder="optional..."
          disabled={isSubmitting}
        />
      </div>

      <div className={styles.radioFieldSpan}>
        <label className={styles.groupLabel}>Microsoft Service</label>
        <div className={styles.radioOptionsGrid}>
          <div className={styles.radioOption}>
            <input
              type="radio"
              id="Office"
              name="service"
              value="Office"
              checked={formData.service === "Office"}
              onChange={handleChange}
              disabled={isSubmitting}
            />
            <label htmlFor="Office">Office</label>
          </div>

          <div className={styles.radioOption}>
            <input
              type="radio"
              id="Access"
              name="service"
              value="Access"
              checked={formData.service === "Access"}
              onChange={handleChange}
              disabled={isSubmitting}
            />
            <label htmlFor="Access">Access</label>
          </div>

          <div className={styles.radioOption}>
            <input
              type="radio"
              id="Excel"
              name="service"
              value="Excel"
              checked={formData.service === "Excel"}
              onChange={handleChange}
              disabled={isSubmitting}
            />
            <label htmlFor="Excel">Excel</label>
          </div>

          <div className={styles.radioOption}>
            <input
              type="radio"
              id="power-platform"
              name="service"
              value="Power Platform"
              checked={formData.service === "Power Platform"}
              onChange={handleChange}
              disabled={isSubmitting}
            />
            <label htmlFor="power-platform">Power Platform</label>
          </div>

          <div className={styles.radioOption}>
            <input
              type="radio"
              id="Word"
              name="service"
              value="Word"
              checked={formData.service === "Word"}
              onChange={handleChange}
              disabled={isSubmitting}
            />
            <label htmlFor="Word">Word</label>
          </div>

          <div className={styles.radioOption}>
            <input
              type="radio"
              id="not-sure"
              name="service"
              value="Not Sure"
              checked={formData.service === "Not Sure"}
              onChange={handleChange}
              disabled={isSubmitting}
            />
            <label htmlFor="not-sure">Not Sure</label>
          </div>
        </div>
      </div>

      <div>
        <input
          type="text"
          name="honeypot"
          value={formData.honeypot}
          onChange={handleChange}
          className={styles.honeypot}
          aria-hidden="true"
          tabIndex="-1"
          disabled={isSubmitting}
        />
      </div>

      <button
        type="submit"
        className={`btn ${styles.submitBtn}`}
        aria-label="Submit contact form"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Sending..." : "Submit"}
      </button>
    </form>
  );
};

export default ContactLocation;