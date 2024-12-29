"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";

import styles from "../styles/contact.module.css";

const SurveyForm = dynamic(() => import("./SurveyForm"), {
  ssr: false,
});
const ContactLocation = ({ location }) => {
  const [formData, setFormData] = useState({
    location: location,
    service: "",
    name: "",
    email: "",
    phone: "",
    message: "",
    honeypot: "",
    operatingSystem: "",
  });

  const [error, setError] = useState({});
  const [success, setSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // States to pass to SurveyForm
  const [surveyName, setSurveyName] = useState("");
  const [surveyEmail, setSurveyEmail] = useState("");

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

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
      // Focus first error field
      const firstErrorField = Object.keys(newError)[0];
      const element = document.getElementById(firstErrorField);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "center" });
          element.focus();
        }, 100);
      }
      return;
    }

    if (formData.honeypot) {
      setIsSubmitting(false);
      return; // Silent return for bot submissions
    }

    try {
      const res = await fetch("/api/contactLocation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setSurveyName(formData.name);
        setSurveyEmail(formData.email);
        setSuccess(true);
        setFormData({
          location: location,
          service: "",
          name: "",
          email: "",
          phone: "",
          message: "",
          honeypot: "",
          operatingSystem: "",
        });
      } else {
        setError({
          general: data.message || "Something went wrong. Please try again.",
        });
      }
    } catch (err) {
      console.error("Form submission error:", err);
      setError({
        general:
          "There was an error submitting the form. Please try again later.",
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
        <SurveyForm name={surveyName} email={surveyEmail} />
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
          {[
            "Office",
            "Access",
            "Excel",
            "Power Platform",
            "Word",
            "Not Sure",
          ].map((serviceName) => (
            <div key={serviceName} className={styles.radioOption}>
              <input
                type="radio"
                id={serviceName.toLowerCase().replace(" ", "-")}
                name="service"
                value={serviceName}
                checked={formData.service === serviceName}
                onChange={handleChange}
                disabled={isSubmitting}
              />
              <label htmlFor={serviceName.toLowerCase().replace(" ", "-")}>
                {serviceName}
              </label>
            </div>
          ))}
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
