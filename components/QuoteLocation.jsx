"use client";
import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";
import dynamic from "next/dynamic";

import styles from "../styles/contact.module.css";

const SurveyForm = dynamic(() => import("./SurveyForm"), {
  ssr: false,
});

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5 MB
const VALID_FILE_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "text/plain",
  "application/zip",
];

const QuoteLocation = ({ location }) => {
  const [error, setError] = useState({});
  const [success, setSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasConversionTracking, setHasConversionTracking] = useState(false);
  const [formData, setFormData] = useState({
    location: location,
    service: "",
    name: "",
    email: "",
    phone: "",
    message: "",
    file: null,
    operatingSystem: "",
    softwareVersions: "",
    website: "",
    acceptTerms: false,
    honeypot: "",
  });

  // Create refs for form fields that might need focus
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);
  const termsRef = useRef(null);

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

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    // Clear error when user makes changes
    if (error[name]) {
      setError((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    if (file.size > MAX_FILE_SIZE) {
      setError((prev) => ({
        ...prev,
        file: "File size must be less than 5MB",
      }));
      return;
    }

    if (!VALID_FILE_TYPES.includes(file.type)) {
      setError((prev) => ({
        ...prev,
        file: "Invalid file type. Please upload a PDF, Word document, text file, or ZIP file.",
      }));
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      setFormData((prev) => ({
        ...prev,
        file: {
          content: reader.result.split(",")[1],
          name: file.name,
          type: file.type,
        },
      }));
      setError((prev) => ({ ...prev, file: "" }));
    };
    reader.readAsDataURL(file);
  };

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Object to map error fields to their refs
  const fieldRefs = {
    name: nameRef,
    email: emailRef,
    message: messageRef,
    acceptTerms: termsRef,
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError({});
    setIsSubmitting(true);

    if (formData.honeypot) {
      setIsSubmitting(false);
      return;
    }

    const newError = {};

    if (!formData.name.trim()) {
      newError.name = "*Name is required...";
    }
    if (!formData.email.trim()) {
      newError.email = "*Email is required...";
    } else if (!emailRegex.test(formData.email.trim())) {
      newError.email = "*Invalid email address...";
    }
    if (!formData.acceptTerms) {
      newError.acceptTerms = "*You must accept the terms.";
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

    try {
      const res = await fetch("/api/quoteForm", {
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
          window.gtag('event', 'quote_location_submission', {
            'event_category': 'Forms',
            'event_label': `Location Quote: ${location}`,
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
          file: null,
          operatingSystem: "",
          softwareVersions: "",
          website: "",
          acceptTerms: false,
          honeypot: "",
        });
      } else {
        setError({ general: "Something went wrong. Please try again." });
      }
    } catch (err) {
      setError({ general: "There was an error submitting the form." });
    } finally {
      setIsSubmitting(false);
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
      onSubmit={handleSubmit}
      aria-label="Quote Request Form"
      role="form"
      noValidate
      className={styles.form}
    >
      <div className={styles.errorContainer} role="alert" aria-live="polite">
        {error.general && (
          <p className={styles.errorMessage} role="alert">
            {error.general}
          </p>
        )}
      </div>

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

      <div className={styles.contactForm}>
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
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            aria-describedby={error.message ? "message-error" : undefined}
            placeholder="Enter details about your project here..."
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
          <label htmlFor="phone">Phone</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            aria-required="false"
            placeholder="optional"
            disabled={isSubmitting}
          />
        </div>
      </div>

      <div className={styles.quoteForm}>
        <div className={styles.formField}>
          <label htmlFor="softwareVersions">Software Versions</label>
          <input
            type="text"
            id="softwareVersions"
            name="softwareVersions"
            value={formData.softwareVersions}
            onChange={handleChange}
            placeholder="e.g. Office 365, Excel 2019"
            disabled={isSubmitting}
          />
        </div>
        <div className={styles.formField}>
          <label htmlFor="website">Website</label>
          <input
            type="url"
            id="website"
            name="website"
            value={formData.website}
            onChange={handleChange}
            aria-required="false"
            placeholder="Your company website or project URL"
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

        <div className={styles.radioFieldSpan}>
          <label className={styles.groupLabel}>Operating System</label>
          <div className={styles.radioOptions}>
            <div className={styles.radioOption}>
              <input
                type="radio"
                id="windows"
                name="operatingSystem"
                value="Windows"
                checked={formData.operatingSystem === "Windows"}
                onChange={handleChange}
                disabled={isSubmitting}
              />
              <label htmlFor="windows">Windows</label>
            </div>

            <div className={styles.radioOption}>
              <input
                type="radio"
                id="mac"
                name="operatingSystem"
                value="Mac"
                checked={formData.operatingSystem === "Mac"}
                onChange={handleChange}
                disabled={isSubmitting}
              />
              <label htmlFor="mac">Mac</label>
            </div>

            <div className={styles.radioOption}>
              <input
                type="radio"
                id="other"
                name="operatingSystem"
                value="Other"
                checked={formData.operatingSystem === "Other"}
                onChange={handleChange}
                disabled={isSubmitting}
              />
              <label htmlFor="other">Other</label>
            </div>
          </div>
        </div>
        <div className={styles.uploadField}>
          <label htmlFor="file">
            Upload a file
            <span aria-label="Accepted file size"> (...up to 5MB)</span>
          </label>
          <input
            type="file"
            id="file"
            name="file"
            onChange={handleFileChange}
            accept={VALID_FILE_TYPES.join(", ")}
            className={styles.fileInput}
            disabled={isSubmitting}
          />
          {error.file && (
            <p
              id="file-error"
              className={styles.errorMessage}
              role="alert"
              aria-live="polite"
            >
              {error.file}
            </p>
          )}
        </div>
        <div className={styles.termsField}>
          <label className={styles.checkboxLabel}>
            <input
              type="checkbox"
              id="acceptTerms"
              name="acceptTerms"
              checked={formData.acceptTerms}
              onChange={handleChange}
              aria-required="true"
              aria-invalid={!!error.acceptTerms}
              required
              ref={termsRef}
              disabled={isSubmitting}
            />
            <span className={styles.checkboxText}>
              I accept the{" "}
              <Link
                href="https://www.officeexperts.com.au/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                Privacy Policy
              </Link>{" "}
              and{" "}
              <Link
                href="https://www.officeexperts.com.au/terms-and-conditions"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                Terms and Conditions
              </Link>
            </span>
          </label>
          {error.acceptTerms && (
            <p className={styles.errorMessage} role="alert" aria-live="polite">
              {error.acceptTerms}
            </p>
          )}
        </div>
      </div>

      <button 
        type="submit" 
        className={`btn ${styles.submitBtn}`}
        disabled={isSubmitting}
      >
        {isSubmitting ? "Sending..." : "Submit"}
      </button>
    </form>
  );
};

export default QuoteLocation;